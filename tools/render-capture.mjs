#!/usr/bin/env node
// Render every page owed by a build through the real web application and save
// full-page browser captures for Sigma. Draft status is changed only in an
// isolated /tmp corpus: the working tree and the public site are never touched.

import { createServer } from 'node:net';
import { get as httpGet } from 'node:http';
import { spawn, spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync,
  symlinkSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative } from 'node:path';
import { APP_DIR, REPO, WEB_DIR } from './paths.mjs';
import { replaceDraftStatus, runContentHash, runScope, sha256 } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
const phase = value('--phase');
if (!run || !['initial', 'final'].includes(phase)) {
  console.error('usage: node tools/render-capture.mjs --run <run> --phase initial|final');
  process.exit(2);
}
if (!APP_DIR || !WEB_DIR || !existsSync(join(WEB_DIR, 'node_modules/next'))) {
  throw new Error('render-capture: sibling prestige-intelligence/web with installed dependencies is required');
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const freePort = () => new Promise((resolve, reject) => {
  const server = createServer();
  server.once('error', reject);
  server.listen(0, '127.0.0.1', () => {
    const address = server.address();
    server.close(() => resolve(address.port));
  });
});

function browserPath() {
  const choices = [process.env.PRESTIGE_BROWSER, 'chromium', 'chromium-browser', 'google-chrome',
    '/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].filter(Boolean);
  for (const candidate of choices) {
    if (candidate.includes('/') && existsSync(candidate)) return candidate;
    if (!candidate.includes('/')) {
      const found = spawnSync('which', [candidate], { encoding: 'utf8' }).stdout.trim();
      if (found) return found;
    }
  }
  throw new Error('render-capture: no Chromium-family browser found; set PRESTIGE_BROWSER');
}

function windowsPath(path) {
  const result = spawnSync('wslpath', ['-w', path], { encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trim() : path;
}

async function waitHttp(url, child, label, timeoutMs = 120_000) {
  const until = Date.now() + timeoutMs;
  let last = '';
  while (Date.now() < until) {
    if (child?.exitCode !== null) throw new Error(`${label} exited ${child.exitCode}: ${last}`);
    try {
      const status = await new Promise((resolve, reject) => {
        const request = httpGet(url, { timeout: 10_000 }, (response) => {
          response.resume();
          response.on('end', () => resolve(response.statusCode));
        });
        request.on('timeout', () => request.destroy(new Error('request timeout')));
        request.on('error', reject);
      });
      if (status >= 200 && status < 400) return status;
      last = `HTTP ${status}`;
    } catch (error) { last = String(error.message ?? error); }
    await delay(400);
  }
  throw new Error(`${label} did not become ready: ${last}`);
}

class Cdp {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.next = 1;
    this.pending = new Map();
    this.events = new Map();
  }
  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });
    this.ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id) {
        const waiter = this.pending.get(msg.id);
        if (!waiter) return;
        this.pending.delete(msg.id);
        msg.error ? waiter.reject(new Error(msg.error.message)) : waiter.resolve(msg.result);
        return;
      }
      const listeners = this.events.get(msg.method) ?? [];
      this.events.set(msg.method, []);
      for (const resolve of listeners) resolve(msg.params);
    });
  }
  call(method, params = {}) {
    const id = this.next++;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  event(method, timeoutMs = 60_000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`CDP timeout waiting for ${method}`)), timeoutMs);
      const wrapped = (value) => { clearTimeout(timer); resolve(value); };
      this.events.set(method, [...(this.events.get(method) ?? []), wrapped]);
    });
  }
  close() { this.ws.close(); }
}

const root = mkdtempSync('/tmp/prestige-step10-render-');
const corpus = join(root, 'corpus');
const app = join(root, 'web');
const browserData = join(root, 'browser');
const outputDir = join(REPO, '.autopilot', 'render', run, phase);
mkdirSync(corpus, { recursive: true });
mkdirSync(outputDir, { recursive: true });

const scope = runScope(run);
let server;
let browser;
let serverLog = '';
try {
  cpSync(join(REPO, 'items'), join(corpus, 'items'), { recursive: true });
  cpSync(join(REPO, 'library'), join(corpus, 'library'), { recursive: true });
  for (const row of [...scope.pages, ...scope.items]) {
    const file = join(corpus, row.file);
    writeFileSync(file, replaceDraftStatus(readFileSync(file, 'utf8')));
  }

  cpSync(WEB_DIR, app, {
    recursive: true,
    filter: (source) => !['node_modules', '.next', '.git'].includes(basename(source)),
  });
  // The development server re-applies proxy.ts to an internal rewrite and can
  // loop the mirror's root-path rewrite. Capture the same page component at its
  // native /library route while retaining mirror-mode visibility/auth rules.
  // This copy lives in /tmp; the application checkout is never edited.
  rmSync(join(app, 'proxy.ts'), { force: true });
  symlinkSync(join(WEB_DIR, 'node_modules'), join(app, 'node_modules'), 'dir');

  const port = await freePort();
  let debugPort = await freePort();
  while (debugPort === port) debugPort = await freePort();
  const origin = `http://127.0.0.1:${port}`;
  // Webpack tolerates the deliberately external, read-only node_modules
  // symlink. Turbopack rejects any symlink outside its temporary project root.
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--webpack', '--hostname', '127.0.0.1', '--port', String(port)], {
    cwd: app,
    env: { ...process.env, MATH_LIBRARY_DIR: corpus, PUBLIC_LIBRARY_HOST: '127.0.0.1',
      PUBLIC_LIBRARY_URL: origin, APP_URL: origin, AUTH_SECRET: 'isolated-step10-render-only',
      NEXT_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'], detached: true,
  });
  server.stdout.on('data', (chunk) => { serverLog += chunk; });
  server.stderr.on('data', (chunk) => { serverLog += chunk; });
  await waitHttp(origin, server, 'Next renderer');

  const executable = browserPath();
  const windowsBrowserData = `/mnt/c/Windows/Temp/prestige-step10-render-${process.pid}`;
  if (executable.startsWith('/mnt/c/')) mkdirSync(windowsBrowserData, { recursive: true });
  const userDir = executable.startsWith('/mnt/c/') ? windowsPath(windowsBrowserData) : browserData;
  browser = spawn(executable, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-allow-origins=*', `--remote-debugging-port=${debugPort}`, `--user-data-dir=${userDir}`, 'about:blank'], {
    stdio: ['ignore', 'pipe', 'pipe'], detached: true,
  });
  browser.stdout.on('data', (chunk) => { serverLog += `\nEdge: ${chunk}`; });
  browser.stderr.on('data', (chunk) => { serverLog += `\nEdge: ${chunk}`; });

  const captures = [];
  if (executable.startsWith('/mnt/c/')) {
    // Windows Edge's debugging socket is reachable only from Windows on some
    // WSL networking modes. The helper speaks CDP there and writes directly to
    // the workspace's \\wsl.localhost path; no browser dependency is installed.
    const input = join(root, 'edge-input.json');
    writeFileSync(input, JSON.stringify({ pages: scope.pages.map((page) => ({ page: page.id,
      url: `${origin}/library/${page.route}`, output: windowsPath(join(outputDir, `${page.id}.png`)) })) }));
    const ps = spawnSync('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File',
      windowsPath(join(REPO, 'tools/render-capture-edge.ps1')), '-Port', String(debugPort),
      '-InputJson', windowsPath(input)], { encoding: 'utf8', timeout: 900_000 });
    if (ps.status !== 0) throw new Error(`Windows CDP capture failed: ${ps.stderr || ps.stdout}`);
    const rows = JSON.parse(ps.stdout.trim().split(/\r?\n/).at(-1));
    for (const page of scope.pages) {
      const dom = rows.find((row) => row.page === page.id);
      const image = join(outputDir, `${page.id}.png`);
      if (!dom || !existsSync(image)) throw new Error(`${page.id}: Edge returned no screenshot`);
      captures.push({ page: page.id, route: page.route, source: page.file,
        image: relative(REPO, image), image_sha256: sha256(readFileSync(image)), width: dom.width,
        height: dom.height, dom: { katex_nodes: dom.katex, svg_nodes: dom.svg,
          visible_tikz_fences: dom.tikzFencesVisible, proof_headings: dom.proofHeadings,
          renderer_errors: dom.errors ?? [] } });
      console.log(`CAPTURE ${page.id} ${dom.height}px`);
    }
  } else {
    await waitHttp(`http://127.0.0.1:${debugPort}/json/version`, browser, 'browser');
    const version = await (await fetch(`http://127.0.0.1:${debugPort}/json/version`)).json();
    const browserCdp = new Cdp(version.webSocketDebuggerUrl);
    await browserCdp.open();
    for (const page of scope.pages) {
    const created = await browserCdp.call('Target.createTarget', { url: 'about:blank' });
    const targetInfo = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
    const target = targetInfo.find((entry) => entry.id === created.targetId);
    if (!target?.webSocketDebuggerUrl) throw new Error(`browser target unavailable for ${page.route}`);
    const cdp = new Cdp(target.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.call('Page.enable');
    await cdp.call('Runtime.enable');
    await cdp.call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
    const loaded = cdp.event('Page.loadEventFired');
    const navigation = await cdp.call('Page.navigate', { url: `${origin}/library/${page.route}` });
    if (navigation.errorText) throw new Error(`${page.route}: navigation failed: ${navigation.errorText}`);
    await loaded;
    await cdp.call('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true, returnByValue: true });
    await delay(800);
    const inspected = await cdp.call('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const text = document.body?.innerText || '';
      const rect = document.documentElement.getBoundingClientRect();
      const bad = [...document.querySelectorAll('.katex-error, [data-tikz-error], .tikz-error')]
        .map((el) => (el.textContent || '').trim()).filter(Boolean);
      return { title: document.title, width: Math.ceil(Math.max(document.documentElement.scrollWidth, rect.width)),
        height: Math.ceil(Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0)),
        katex: document.querySelectorAll('.katex').length, svg: document.querySelectorAll('svg').length,
        tikzFencesVisible: (text.match(new RegExp(String.fromCharCode(96, 96, 96) + 'tikz(?:cd)?', 'g')) || []).length,
        proofHeadings: [...document.querySelectorAll('h2')].filter((h) => /proof|refutation|counterexample|verification/i.test(h.textContent || '')).length,
        errors: bad, notFound: /404|not found/i.test(document.querySelector('h1')?.textContent || '') };
    })()` });
    const dom = inspected.result.value;
    if (dom.notFound) throw new Error(`${page.route}: renderer returned a not-found page`);
    const png = await cdp.call('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: Math.min(dom.width, 1440), height: dom.height, scale: 1 } });
    const image = join(outputDir, `${page.id}.png`);
    writeFileSync(image, Buffer.from(png.data, 'base64'));
    captures.push({ page: page.id, route: page.route, source: page.file,
      image: relative(REPO, image), image_sha256: sha256(readFileSync(image)), width: Math.min(dom.width, 1440),
      height: dom.height, dom: { katex_nodes: dom.katex, svg_nodes: dom.svg,
        visible_tikz_fences: dom.tikzFencesVisible, proof_headings: dom.proofHeadings, renderer_errors: dom.errors } });
    cdp.close();
    await browserCdp.call('Target.closeTarget', { targetId: created.targetId });
    console.log(`CAPTURE ${page.id} ${dom.height}px`);
    }
    browserCdp.close();
  }

  const manifest = { schema: 1, run, phase, generated_at: new Date().toISOString(), renderer: 'prestige-intelligence/web Next.js + Chromium CDP',
    app_head: spawnSync('git', ['rev-parse', 'HEAD'], { cwd: APP_DIR, encoding: 'utf8' }).stdout.trim(),
    content_sha256: runContentHash(run), pages_expected: scope.pages.length, pages_captured: captures.length, captures };
  const manifestPath = join(REPO, 'research', `${run}-render-${phase}.json`);
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`render-capture: ${captures.length} page(s), manifest research/${run}-render-${phase}.json`);
} catch (error) {
  const tail = serverLog.trim().split('\n').slice(-30).join('\n');
  throw new Error(`${error.message ?? error}${tail ? `\nNext tail:\n${tail}` : ''}`);
} finally {
  for (const child of [browser, server]) {
    if (!child?.pid) continue;
    try { process.kill(-child.pid, 'SIGTERM'); } catch { try { child.kill('SIGTERM'); } catch {} }
  }
  await delay(800);
  for (const child of [browser, server]) {
    if (!child?.pid || child.exitCode !== null) continue;
    try { process.kill(-child.pid, 'SIGKILL'); } catch { try { child.kill('SIGKILL'); } catch {} }
  }
  for (let attempt = 0; attempt < 5; attempt++) {
    try { rmSync(root, { recursive: true, force: true }); break; }
    catch (error) { if (attempt === 4) console.error(`render-capture: temporary cleanup warning: ${error.message}`); else await delay(300); }
  }
  try { rmSync(`/mnt/c/Windows/Temp/prestige-step10-render-${process.pid}`, { recursive: true, force: true }); } catch { /* best effort */ }
}
