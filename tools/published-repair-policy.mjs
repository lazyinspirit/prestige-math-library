// Published mathematics may be repaired directly. Its repair is recorded and
// statement changes still propagate to direct consumers, but the item itself
// does not enter a repair gate, rejudgment, or adjudication queue.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export function isPublishedItem(root, id) {
  const path = join(root, 'items', `${id}.md`);
  if (!existsSync(path)) return false;
  const text = readFileSync(path, 'utf8');
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
  return /^status:\s*["']?published["']?\s*$/m.test(frontmatter);
}
