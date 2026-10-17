// Shared authenticated Step-4 lineup for physics closure, coverage and stamps.
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve, relative } from 'node:path';
import { JUDGE_LINEUPS } from './models.mjs';

/** Coverage retains the actual frozen Step-4 judge lineage. Native Step-5
 * repair/rejudge identities and current certificate guards remain independent. */
export function originalJudgeLineup(ctx) {
  const dir = join(ctx.repo, 'research', `${ctx.run}-step5-v2`);
  const verdictPath = resolve(dir, 'step4-verdicts.json');
  const packPath = resolve(dir, 'initial-1.json');
  if (!existsSync(verdictPath)) {
    if (existsSync(packPath) || existsSync(join(dir, 'frontier.json')))
      throw Error('original judge lineage: incomplete frozen Step-5 authority');
    return 'luna'; // Modern Step 4, before its Step-5 snapshot exists.
  }
  if (!existsSync(packPath)) throw Error('original judge lineage: missing initial frozen pack');
  const bytes = readFileSync(verdictPath);
  const verdicts = JSON.parse(bytes.toString('utf8'));
  const pack = JSON.parse(readFileSync(packPath, 'utf8'));
  const expected = pack.input_evidence?.[verdictPath]
    ?? pack.input_evidence?.[relative(ctx.repo, verdictPath)];
  if (pack.version !== 2 || pack.run !== ctx.run || pack.phase !== 'initial' || pack.round !== 1
    || !/^[a-f0-9]{64}$/.test(expected ?? '')
    || createHash('sha256').update(bytes).digest('hex') !== expected)
    throw Error('original judge lineage: frozen Step-4 bytes are not bound by the initial pack');
  if (!Array.isArray(verdicts) || !verdicts.length
    || verdicts.some((row) => !row || typeof row.id !== 'string' || typeof row.keep !== 'boolean'))
    throw Error('original judge lineage: malformed frozen Step-4 verdicts');
  const models = [...new Set(verdicts.map((row) => row.model))];
  const matches = Object.entries(JUDGE_LINEUPS).filter(([, lanes]) =>
    lanes.length === 1 && models.length === 1 && lanes[0] === models[0]);
  if (matches.length !== 1 || pack.judge_model !== models[0])
    throw Error('original judge lineage: mixed, unknown or inconsistent frozen model');
  return matches[0][0];
}

