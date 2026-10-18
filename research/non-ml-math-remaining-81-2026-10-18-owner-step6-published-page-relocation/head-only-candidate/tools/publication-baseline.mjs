// Preserve an already published page's status across an exact category move.
// This is historical publication identity, not a new audit or readiness verdict.
import { spawnSync } from 'node:child_process';
import { splitFrontmatter } from './step6-lib.mjs';
export function unchangedPublishedPageRelocation(root, baseline, row, current) {
  if (!/^[a-f0-9]{40,64}$/.test(baseline ?? '') || !Buffer.isBuffer(current)
    || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row?.id ?? '')
    || !new RegExp(`^library/[^/]+/${row.id}\\.md$`).test(row.file ?? '')) return false;
  const git = (...args) => spawnSync('git', ['--no-replace-objects', ...args],
    { cwd: root, maxBuffer: 16 * 1024 * 1024 });
  if (git('merge-base', '--is-ancestor', baseline, 'HEAD').status !== 0) return false;
  // A draft or different file at the current path cannot be laundered through
  // another category's publication. Only genuine baseline absence qualifies.
  const tree = git('ls-tree', '-r', '-z', baseline, '--', 'library/');
  if (tree.status !== 0) return false;
  const rows = tree.stdout.toString('utf8').split('\0').filter(Boolean).map(raw => {
    const match = /^(\d+) (\w+) ([a-f0-9]+)\t([\s\S]+)$/.exec(raw);
    return match && { mode: match[1], type: match[2], path: match[4] };
  });
  if (rows.some(value => !value) || rows.some(value => value.path === row.file)) return false;
  const candidates = rows.filter(value => new RegExp(`^library/[^/]+/${row.id}\\.md$`).test(value.path));
  if (candidates.length !== 1 || candidates[0].type !== 'blob'
    || !['100644', '100755'].includes(candidates[0].mode)) return false;
  const prior = git('show', `${baseline}:${candidates[0].path}`);
  if (prior.status !== 0 || !prior.stdout.equals(current)) return false;
  let decoded;
  try { decoded = new TextDecoder('utf-8', { fatal: true }).decode(prior.stdout); } catch { return false; }
  const { frontmatter } = splitFrontmatter(decoded);
  const scalar = key => frontmatter.match(new RegExp(`^${key}:\\s*([^\\n]+?)\\s*$`, 'm'))?.[1]
    ?.replace(/^['"]|['"]$/g, '');
  return scalar('page') === row.id && scalar('status') === 'published';
}
