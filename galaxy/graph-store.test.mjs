import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { setTimeout as sleep } from 'node:timers/promises';
import { GraphStore } from './graph-store.mjs';

async function until(check, message) {
  const deadline = Date.now() + 5000;
  while (!check() && Date.now() < deadline) await sleep(20);
  assert.ok(check(), message);
}

test('watch additions, alterations, body edits, unpublication, deletion and recover from malformed writes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'galaxy-live-'));
  let store;
  try {
    await mkdir(join(root, 'items'));
    await mkdir(join(root, 'library', 'foundations'), { recursive: true });
    const put = (file, fm, body = '') => writeFile(join(root, file), `---\n${JSON.stringify(fm)}\n---\n${body}`);
    const item = { id: 'def-a', title: 'A', status: 'published', kind: 'definition', deps: [] };
    await put('items/def-a.md', item);
    await put('library/foundations/page.md', { status: 'published', items: ['def-a', 'thm-b'] });
    const errors = [];
    store = await new GraphStore(root, { debounceMs: 20, pollMs: 80, onError: message => errors.push(message) }).start();
    const original = store.snapshot.revision;
    await put('items/thm-b.md', { id: 'thm-b', title: 'B', kind: 'theorem', status: 'published', deps: ['def-a'] });
    await until(() => store.snapshot.nodes.length === 2, 'new published item should appear automatically');
    assert.equal(store.snapshot.edges.length, 1);
    assert.notEqual(store.snapshot.revision, original);

    await put('items/def-a.md', { ...item, title: 'Changed title' });
    await until(() => store.snapshot.nodes[0].title === 'Changed title', 'title edit should reach snapshot');
    const beforeBody = store.snapshot.revision;
    await put('items/def-a.md', { ...item, title: 'Changed title' }, 'Updated published definition.');
    await until(() => store.snapshot.revision !== beforeBody, 'body-only edits should also invalidate the revision');

    const beforeDraft = store.snapshot.revision;
    await put('items/draft.md', { id: 'draft', status: 'draft' }, 'Draft work');
    await sleep(160);
    assert.equal(store.snapshot.revision, beforeDraft, 'draft-only edits should not broadcast a graph update');

    await writeFile(join(root, 'items/def-a.md'), '---\nstatus: [broken\n---\n');
    await until(() => errors.length > 0, 'failed refresh should be reported');
    assert.equal(store.snapshot.revision, beforeDraft, 'failed refresh must retain last good graph');
    await put('items/def-a.md', { ...item, status: 'draft' });
    await until(() => store.snapshot.nodes.length === 1, 'unpublished item should disappear after recovery');
    assert.equal(store.snapshot.unresolved[0].dependency, 'def-a');

    // Stop watchers to exercise the periodic fallback, not another direct refresh call.
    store.watchers.forEach(watcher => watcher.close());
    await rm(join(root, 'items/thm-b.md'));
    await until(() => store.snapshot.nodes.length === 0, 'polling must catch deletion when watch events are lost');
  } finally { store?.close(); await rm(root, { recursive: true, force: true }); }
});
