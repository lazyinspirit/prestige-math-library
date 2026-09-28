import { watch } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { loadGraph } from './data.mjs';

/** A cheap polling fallback for dropped watch events, including added/deleted directories. */
async function fingerprint(root) {
  const entries = [];
  async function walk(directory) {
    const children = await readdir(directory, { withFileTypes: true });
    for (let offset = 0; offset < children.length; offset += 128) {
      await Promise.all(children.slice(offset, offset + 128).map(async child => {
      const path = join(directory, child.name);
      if (child.isDirectory()) return walk(path);
      if (!child.name.endsWith('.md')) return;
      const file = await stat(path, { bigint: true });
      entries.push(`${path}:${file.size}:${file.mtimeNs}:${file.ctimeNs}`);
      }));
    }
  }
  await Promise.all(['items', 'library'].map(name => walk(join(root, name))));
  return createHash('sha256').update(entries.sort().join('\n')).digest('hex');
}

/** Publish complete snapshots only. Failed or concurrently changed builds leave the last good one live. */
export class GraphStore {
  constructor(root, { debounceMs = 1000, pollMs = 30000, loader = null, onError = console.error } = {}) {
    Object.assign(this, { root, debounceMs, pollMs, loader, onError });
    this.cache = new Map();
    this.loader = loader ?? (root => loadGraph(root, null, this.cache));
    this.listeners = new Set(); this.watchers = []; this.snapshot = null;
    this.running = false; this.pending = false; this.closed = false;
  }
  async start() {
    for (const name of ['items', 'library']) {
      try {
        const watcher = watch(join(this.root, name), { recursive: true }, (_event, file) => {
          if (!file || String(file).endsWith('.md')) this.schedule();
        });
        watcher.on('error', error => this.onError(`Galaxy watcher: ${error.message}; polling remains active.`));
        this.watchers.push(watcher);
      } catch (error) { this.onError(`Galaxy watcher: ${error.message}; using polling.`); }
    }
    for (let attempt = 0; attempt < 5 && !this.snapshot; attempt++) {
      clearTimeout(this.timer);
      await this.refresh();
    }
    if (!this.snapshot) { this.close(); throw new Error('Could not build the initial published graph.'); }
    this.poll = setInterval(() => { void this.check(); }, this.pollMs);
    this.poll.unref();
    return this;
  }
  schedule() {
    if (this.closed) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => { void this.refresh(); }, this.debounceMs);
    this.timer.unref();
  }
  async check() {
    if (this.closed || this.running) return;
    try { if (await fingerprint(this.root) !== this.signature) await this.refresh(); }
    catch (error) { this.onError(`Galaxy content scan: ${error.message}`); this.schedule(); }
  }
  async refresh() {
    if (this.closed) return;
    if (this.running) { this.pending = true; return; }
    this.running = true;
    try {
      const before = await fingerprint(this.root);
      if (before === this.signature && this.snapshot) return;
      const graph = await this.loader(this.root);
      const after = await fingerprint(this.root);
      if (before !== after) { this.pending = true; return; }
      graph.source = 'Repository published content (automatically refreshed)';
      const revision = createHash('sha256').update(JSON.stringify(graph)).digest('hex');
      this.signature = after;
      if (revision !== this.snapshot?.revision && !this.closed) {
        this.snapshot = { ...graph, revision };
        this.body = JSON.stringify(this.snapshot);
        for (const listener of this.listeners) {
          try { listener(this.snapshot); } catch (error) { this.onError(`Galaxy subscriber: ${error.message}`); }
        }
      }
    } catch (error) {
      this.onError(`Galaxy refresh kept the previous snapshot: ${error.message}`);
      this.pending = true;
    } finally {
      this.running = false;
      if (this.pending && !this.closed) { this.pending = false; this.schedule(); }
    }
  }
  subscribe(listener) { this.listeners.add(listener); return () => this.listeners.delete(listener); }
  close() {
    this.closed = true; clearTimeout(this.timer); clearInterval(this.poll);
    this.watchers.forEach(watcher => watcher.close()); this.listeners.clear();
  }
}
