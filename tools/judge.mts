#!/usr/bin/env node
// Judge exactly one library item. Every call is self-contained and ephemeral:
// prior items and verdicts cannot enter this item's context. Pair awareness is
// carried by compact interfaces, while only the target proof is audited.

import {
  appendFileSync, chmodSync, existsSync, mkdtempSync,
  readFileSync, readdirSync, rmSync, writeFileSync,
} from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, join, resolve } from 'node:path';
import { homedir } from 'node:os';
import { spawn } from 'node:child_process';
import { itemHashJudge, stripJudgeStamp } from './item-hash.mjs';
import { extractEmbeddedVerdict } from './judge-parse.mjs';
import {
  DEFAULT_LINEUP, JUDGE_CONTEXT_WINDOW, JUDGE_LINEUPS, KNOWN_JUDGES,
} from './models.mjs';

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(['model', 'topic', 'conventions', 'batch']);
const values = new Map<string, string>();
const flags = new Set<string>();
let file = '';
for (let i = 0; i < argv.length; i += 1) {
  const arg = argv[i];
  if (!arg.startsWith('--')) {
    if (!file) file = arg;
    continue;
  }
  const name = arg.slice(2);
  if (VALUE_FLAGS.has(name)) values.set(name, argv[++i] ?? '');
  else flags.add(name);
}

if (!file && !flags.has('preflight')) {
  console.error('usage: node tools/tsx-run.mjs tools/judge.mts items/<id>.md [--model M] [--context-hash|--dump-prompt]');
  console.error('       node tools/tsx-run.mjs tools/judge.mts --preflight [--model M]');
  process.exit(2);
}

const lineupName = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP;
const lineup = JUDGE_LINEUPS[lineupName];
if (!lineup) throw new Error(`unknown judge lineup ${lineupName}`);
const models = values.get('model') ? [values.get('model')!] : [...lineup];
if (!models.length || models.some((model) => !KNOWN_JUDGES.includes(model))) {
  throw new Error(`judge model must be one of ${KNOWN_JUDGES.join(', ')}`);
}

const REPO = process.cwd();
const conventionArg = values.get('conventions');
const conventionsPath = conventionArg && existsSync(conventionArg)
  ? conventionArg
  : join(REPO, 'briefs', 'judge-conventions.txt');
const conventions = conventionArg && !existsSync(conventionArg)
  ? conventionArg
  : readFileSync(conventionsPath, 'utf8').trim();
if (!conventions) throw new Error('judge conventions are empty');

const listField = (source: string, key: string): string[] => {
  const match = source.match(new RegExp(`^${key}:\\s*\\[([^\\]]*)\\]`, 'm'));
  return match ? match[1].split(',').map((value) => value.trim()).filter(Boolean) : [];
};

const section = (source: string, headings: string[]): string => {
  for (const heading of headings) {
    const match = source.match(new RegExp(`\\n## ${heading}\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`));
    if (match) return match[1].trim();
  }
  return '';
};

const interfaceText = (source: string): string => {
  const main = section(source, ['Statement refuted', 'Statement', 'Definition', 'Example']);
  const remarks = section(source, ['Remarks']);
  // Unusual item kinds can fall back to the whole source. Keep that fallback
  // byte-compatible with the pre-stamp context: verification.judge is evidence
  // about the mathematics, not mathematical context for every page-mate.
  const text = [main, remarks ? `**Remarks.**\n${remarks}` : ''].filter(Boolean).join('\n\n')
    || stripJudgeStamp(source).trim();
  const cap = 3_000;
  return text.length <= cap
    ? text
    : `${text.slice(0, cap)}\n… [interface truncated; do not infer absence from this cut]`;
};

type ItemRow = { id: string; source: string; title: string };
type PageRow = { slug: string; title: string; ids: string[] };

const loadItems = (): { byId: Map<string, ItemRow>; aliases: Map<string, string> } => {
  const byId = new Map<string, ItemRow>();
  const aliases = new Map<string, string>();
  for (const name of readdirSync(join(REPO, 'items'))) {
    if (!name.endsWith('.md')) continue;
    const id = name.slice(0, -3);
    const source = readFileSync(join(REPO, 'items', name), 'utf8');
    const title = source.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] ?? id;
    byId.set(id, { id, source, title });
    for (const alias of listField(source, 'aliases')) aliases.set(alias, id);
  }
  return { byId, aliases };
};

const loadPages = (root: string): PageRow[] => {
  if (!existsSync(root)) return [];
  const files: string[] = [];
  const walk = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (entry.name.endsWith('.md')) files.push(path);
    }
  };
  walk(root);
  return files.flatMap((path) => {
    const source = readFileSync(path, 'utf8');
    const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const ids = [...listField(frontmatter, 'items'), ...listField(frontmatter, 'examples')];
    return ids.length ? [{
      slug: basename(path, '.md'),
      title: frontmatter.match(/^title:\s*"?(.*?)"?\s*$/m)?.[1] ?? basename(path, '.md'),
      ids,
    }] : [];
  });
};

const companion = (slug: string): string => slug.endsWith('-examples')
  ? slug.slice(0, -'-examples'.length)
  : `${slug}-examples`;

const directIds = (source: string): string[] => {
  const ids = new Set<string>();
  for (const match of source.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) ids.add(match[1].trim());
  for (const key of ['deps', 'justified_by', 'forward_refs']) {
    for (const id of listField(source, key)) ids.add(id);
  }
  return [...ids];
};

const buildPrompt = (itemFile: string): {
  id: string;
  prompt: string;
  itemSha256: string;
  stats: Record<string, number>;
} => {
  const targetPath = resolve(REPO, itemFile);
  const body = readFileSync(targetPath, 'utf8');
  const id = basename(targetPath, '.md');
  const { byId, aliases } = loadItems();
  const pages = flags.has('no-context')
    ? []
    : loadPages(resolve(REPO, process.env.JUDGE_LIBRARY_DIR ?? 'library'));
  const ownPage = pages.find((page) => page.ids.includes(id));
  const pairPage = ownPage ? pages.find((page) => page.slug === companion(ownPage.slug)) : undefined;
  const resolveId = (raw: string): string | null => byId.has(raw) ? raw : aliases.get(raw) ?? null;
  const shown = new Set([id]);

  const cited: string[] = [];
  if (!flags.has('no-context')) {
    for (const raw of directIds(body).sort()) {
      const resolved = resolveId(raw);
      if (!resolved || shown.has(resolved)) continue;
      shown.add(resolved);
      const row = byId.get(resolved)!;
      cited.push(`### [[${row.id}]] ${row.title}\n${interfaceText(row.source)}`);
    }
  }

  const pairInterfaces: string[] = [];
  for (const page of [ownPage, pairPage].filter(Boolean) as PageRow[]) {
    for (const raw of page.ids) {
      const resolved = resolveId(raw);
      if (!resolved || shown.has(resolved)) continue;
      shown.add(resolved);
      const row = byId.get(resolved)!;
      pairInterfaces.push(`### [[${row.id}]] ${row.title}\n${interfaceText(row.source)}`);
    }
  }

  const batchInterfaces: string[] = [];
  const named = (values.get('batch') ?? process.env.JUDGE_BATCH ?? '')
    .split(',').map((value) => basename(value.trim(), '.md')).filter(Boolean);
  const batchSlugs = new Set(named.flatMap((slug) => [slug, companion(slug)]));
  let batchChars = 0;
  for (const page of pages.filter((row) => batchSlugs.has(row.slug)
    && row.slug !== ownPage?.slug && row.slug !== pairPage?.slug)) {
    for (const raw of page.ids) {
      const resolved = resolveId(raw);
      if (!resolved || shown.has(resolved)) continue;
      const row = byId.get(resolved)!;
      const text = `### [[${row.id}]] ${row.title}\n${interfaceText(row.source)}`;
      if (batchChars + text.length > 100_000) continue;
      shown.add(resolved);
      batchChars += text.length;
      batchInterfaces.push(text);
    }
  }

  const diagram = /\*\*Diagram:\*\*|\[C\d+\]/.test(body)
    ? '\nFor this diagram-bearing item, check every claimed composite, cited cell, naturality instance, and cancellation explicitly.'
    : '';
  const topic = values.get('topic') ? ` Topic: ${values.get('topic')}.` : '';
  const system = `You are a skeptical mathematical refuter auditing exactly one library item.${topic}

Find a specific fatal defect or accept the item. Check, in order: (1) each proof step against the facts and prior steps it cites; (2) every local dependency restatement against the supplied dependency interface; (3) hypotheses, quantifiers, edge cases, typing and notation; (4) consistency with the supplied A/B-pair interfaces. Do not audit sibling proofs: every sibling is judged separately. A sibling interface is supplied only for cross-item consistency, examples, counterexamples, terminology and page promises.

Treat cited library items as correct, but reject an inaccurate restatement or an inference they do not license. Do not reject routine omitted algebra, a concise standard argument, or a recorded external dependency merely for lacking its proof here.${diagram}

Library conventions:
${conventions}

Return one minified JSON object and nothing else: {"keep":true|false,"reason":"specific finding or concise acceptance note"}. The reason must be at most 280 characters.`;

  const blocks = [
    `=== ITEM UNDER AUDIT (FULL TEXT) ===\n${body}`,
    cited.length ? `=== DIRECT DEPENDENCY INTERFACES ===\n${cited.join('\n\n')}` : '',
    pairInterfaces.length
      ? `=== A/B PAIR INTERFACES (${ownPage?.title ?? 'pair'}) ===\n${pairInterfaces.join('\n\n')}`
      : '',
    batchInterfaces.length
      ? `=== OTHER CURRENT-BATCH INTERFACES ===\n${batchInterfaces.join('\n\n')}`
      : '',
  ].filter(Boolean);
  const prompt = `${system}\n\n${blocks.join('\n\n')}\n\nEND OF CONTEXT. Return the single JSON verdict now.`;
  return {
    id,
    prompt,
    itemSha256: itemHashJudge(body),
    stats: {
      prompt_chars: prompt.length,
      item_chars: body.length,
      cited_items: cited.length,
      pair_items: pairInterfaces.length,
      batch_items: batchInterfaces.length,
    },
  };
};

type Usage = { input_tokens: number; cached_input_tokens: number; output_tokens: number };
type CodexResult = {
  code: number | null;
  timedOut: boolean;
  stdout: string;
  stderr: string;
  message: string;
  usage: Usage;
};

const usageFrom = (jsonl: string): Usage => {
  let usage: Usage = { input_tokens: 0, cached_input_tokens: 0, output_tokens: 0 };
  const visit = (value: unknown): void => {
    if (!value || typeof value !== 'object') return;
    const row = value as Record<string, unknown>;
    if (Number.isFinite(row.input_tokens) && Number.isFinite(row.output_tokens)) {
      usage = {
        input_tokens: Number(row.input_tokens),
        cached_input_tokens: Number(row.cached_input_tokens ?? 0),
        output_tokens: Number(row.output_tokens),
      };
    }
    for (const child of Object.values(row)) visit(child);
  };
  for (const line of jsonl.split('\n').filter(Boolean)) {
    try { visit(JSON.parse(line)); } catch { /* non-JSON diagnostic */ }
  }
  return usage;
};

const runCodex = (model: string, prompt: string, timeoutMs: number): Promise<CodexResult> => new Promise((done) => {
  const sourceHome = process.env.CODEX_HOME ?? join(homedir(), '.codex');
  const activeHome = mkdtempSync('/tmp/prestige-math-library-judge-');
  const work = mkdtempSync('/tmp/prestige-math-library-judge-work-');
  const lastMessage = join(work, 'verdict.json');
  const auth = join(sourceHome, 'auth.json');
  const activeAuth = join(activeHome, 'auth.json');
  let authBaseline: Buffer | null = null;
  if (existsSync(auth)) {
    authBaseline = readFileSync(auth);
    writeFileSync(activeAuth, authBaseline);
    chmodSync(activeAuth, 0o600);
  }
  const args = [
    'exec', '--ephemeral', '--model', model,
    '-c', 'model_reasoning_effort="xhigh"',
    '-c', `model_context_window=${JUDGE_CONTEXT_WINDOW}`,
    '--sandbox', 'read-only', '--skip-git-repo-check', '--ignore-user-config', '--ignore-rules',
    '--output-schema', join(REPO, 'briefs', 'schemas', 'judge-verdict.json'),
    '--output-last-message', lastMessage, '--json', '--cd', work, '-',
  ];
  const child = spawn(process.env.CODEX_BIN ?? 'codex', args, {
    cwd: work,
    env: { ...process.env, CODEX_HOME: activeHome },
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  let stdout = '';
  let stderr = '';
  let timedOut = false;
  let killTimer: ReturnType<typeof setTimeout> | null = null;
  const timer = setTimeout(() => {
    timedOut = true;
    child.kill('SIGTERM');
    killTimer = setTimeout(() => child.kill('SIGKILL'), 5_000);
  }, timeoutMs);
  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  child.on('error', (error) => { stderr += String(error); });
  child.on('close', (code) => {
    clearTimeout(timer);
    if (killTimer) clearTimeout(killTimer);
    const message = existsSync(lastMessage) ? readFileSync(lastMessage, 'utf8').trim() : '';
    const usage = usageFrom(stdout);
    // OAuth refresh tokens can rotate. Copy an advanced credential back only
    // if no concurrent call has already installed a newer canonical winner.
    let finalCode = code;
    try {
      if (authBaseline && existsSync(activeAuth)) {
        const after = readFileSync(activeAuth);
        const canonical = existsSync(auth) ? readFileSync(auth) : null;
        if (!after.equals(authBaseline) && (!canonical || canonical.equals(authBaseline))) {
          writeFileSync(auth, after);
          chmodSync(auth, 0o600);
        }
      }
    } catch (error) {
      stderr += `\n[judge] could not preserve refreshed credentials: ${String(error)}`;
      finalCode = 2;
    }
    rmSync(activeHome, { recursive: true, force: true });
    rmSync(work, { recursive: true, force: true });
    done({ code: finalCode, timedOut, stdout, stderr, message, usage });
  });
  child.stdin.on('error', () => { /* a failed Codex process may close before consuming the prompt */ });
  child.stdin.end(prompt);
});

const OUTAGE = /usage[_ -]?limit|session limit|rate.?limit|\b429\b|quota exceeded|overloaded|credits? exhausted/i;
const parseVerdict = (text: string): { keep: boolean; reason: string } | null => {
  const cleaned = text.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();
  try {
    const row = JSON.parse(cleaned);
    return typeof row.keep === 'boolean' && typeof row.reason === 'string'
      ? { keep: row.keep, reason: row.reason.slice(0, 280) }
      : null;
  } catch {
    const embedded = extractEmbeddedVerdict(cleaned);
    return embedded && typeof embedded.reason === 'string'
      ? { keep: embedded.keep, reason: embedded.reason.slice(0, 280) }
      : null;
  }
};

const costPath = process.env.JUDGE_COSTLOG;
const attemptPath = process.env.JUDGE_ATTEMPTLOG;
const append = (path: string | undefined, row: unknown): void => {
  if (path) appendFileSync(path, `${JSON.stringify(row)}\n`);
};

const callOnce = async (
  model: string,
  prompt: string,
  contextSha256: string,
  stats: Record<string, number>,
  attempt: number,
) => {
  const started = performance.now();
  const run = await runCodex(model, prompt, 12 * 60_000);
  const raw = `${run.stderr}\n${run.stdout}`;
  const at = new Date().toISOString();
  append(costPath, {
    id: file ? basename(file, '.md') : 'preflight', model, attempt,
    pt: run.usage.input_tokens, cached_pt: run.usage.cached_input_tokens,
    ct: run.usage.output_tokens, ...stats, at,
  });
  append(attemptPath, {
    id: file ? basename(file, '.md') : 'preflight', model, attempt,
    context_sha256: contextSha256,
    outcome: run.message && run.code === 0 ? 'response' : OUTAGE.test(raw) ? 'outage'
      : run.timedOut ? 'timeout' : 'codex_exit',
    status: run.code, latency_ms: Math.round(performance.now() - started),
    has_content: Boolean(run.message), raw_bytes: raw.length, at,
  });
  // Successful JSONL can include a normal `rate_limits` telemetry object. A
  // valid structured final message outranks diagnostic-keyword matching; only
  // classify provider text as an outage when the call did not succeed.
  if (run.code === 0 && run.message) {
    const verdict = parseVerdict(run.message);
    return verdict ? { kind: 'verdict' as const, verdict } : { kind: 'retry' as const, raw: run.message };
  }
  if (OUTAGE.test(raw)) return { kind: 'outage' as const, raw };
  return { kind: 'retry' as const, raw };
};

if (flags.has('preflight')) {
  for (const model of models) {
    const result = await callOnce(model,
      'Return exactly {"keep":true,"reason":"preflight"}. Do not use tools.',
      'preflight', { prompt_chars: 67 }, 1);
    if (result.kind === 'outage') {
      console.error(`[judge] provider outage: ${result.raw.replace(/\s+/g, ' ').slice(-300)}`);
      process.exit(3);
    }
    if (result.kind !== 'verdict') {
      console.error(`[judge] preflight failed: ${result.raw.replace(/\s+/g, ' ').slice(-300)}`);
      process.exit(2);
    }
  }
  console.error(`[judge] preflight OK for ${models.join(', ')}`);
  process.exit(0);
}

const built = buildPrompt(file);
const contextSha256 = createHash('sha256').update(built.prompt).digest('hex');
if (flags.has('dump-prompt')) {
  process.stdout.write(`${built.prompt}\n`);
  console.error(`[judge] ${JSON.stringify(built.stats)}`);
  process.exit(0);
}
if (flags.has('context-hash')) {
  console.log(JSON.stringify({ id: built.id, context_sha256: contextSha256, item_sha256: built.itemSha256 }));
  process.exit(0);
}

const maxAttempts = Math.max(1, Math.min(3, Number(process.env.JUDGE_MAX_ATTEMPTS ?? 3) || 3));
const attemptBase = Math.max(0, Number(process.env.JUDGE_ATTEMPT_NUMBER ?? 1) - 1 || 0);
for (const model of models) {
  let completed = false;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const result = await callOnce(model, built.prompt, contextSha256, built.stats, attemptBase + attempt);
    if (result.kind === 'outage') {
      console.error(`[judge] provider outage: ${result.raw.replace(/\s+/g, ' ').slice(-300)}`);
      process.exit(3);
    }
    if (result.kind === 'verdict') {
      const row = {
        id: built.id, model, ...result.verdict,
        context_sha256: contextSha256, item_sha256: built.itemSha256,
        at: new Date().toISOString(),
      };
      console.log(JSON.stringify(row));
      append(process.env.JUDGE_VERDICTLOG, row);
      completed = true;
      break;
    }
    if (attempt < maxAttempts) await new Promise((wait) => setTimeout(wait, attempt * 4_000));
  }
  if (!completed) {
    console.log(JSON.stringify({ id: built.id, model, retry: 'transient', retry_after_ms: null }));
    process.exit(4);
  }
}
