// Selective Step-5 closure: original Luna evidence for unchanged frontier
// items, Sol for changed items. This is evidence selection, never a verdict.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { verifyCertification, workflowDir } from './step5-workflow.mjs';
import { validateFrontier } from './step5-rounds.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { MODELS } from './models.mjs';
import { loadOriginalSlotReclassification, projectedOriginalIds, licensedOriginalSlotReplacement } from './step5-original-slot-reclassification.mjs';

export function step5JudgePolicy(root, run, ids, judgeLedger) {
  const read = file => JSON.parse(readFileSync(file, 'utf8'));
  const dir = workflowDir(root, run), certificate = verifyCertification(root, run, { allowMissing: false });
  const frontierPath = join(dir, 'frontier.json'), baselinePath = join(dir, 'baseline.json');
  const verdictPath = join(dir, 'step4-verdicts.json');
  const frontier = validateFrontier(read(frontierPath));
  const transition = loadOriginalSlotReclassification(root, run, { current: true });
  const currentIds = projectedOriginalIds(root, run, frontier.ids);
  // Native helpers remain separately authenticated creations; they never
  // acquire an original baseline or a carried Luna verdict. The selected scope
  // must still contain every original and every certified creation exactly once.
  const created = (certificate.creations ?? []).map(row => row.id);
  if (created.some(id => frontier.ids.includes(id) || currentIds.includes(id))) throw Error('selective judge policy creation overlaps an original slot');
  const expected = [...currentIds, ...created].sort();
  if (frontier.run !== run || ids.length !== expected.length || new Set(ids).size !== ids.length
    || [...ids].sort().some((id, index) => id !== expected[index])) throw Error('selective judge policy requires the complete frozen original frontier and certified creations');
  for (const path of [frontierPath, baselinePath, verdictPath]) {
    if (!certificate.evidence?.[path]) throw Error(`selective judge policy lacks frozen certification binding: ${path}`);
  }
  const baseline = read(baselinePath), initial = read(verdictPath);
  const ledger = readFileSync(judgeLedger, 'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
  if (!Array.isArray(initial)) throw Error('invalid frozen Step-4 verdict inventory');
  const originals = new Map();
  for (const id of frontier.ids) {
    if (typeof baseline[id] !== 'string') throw Error(`missing original baseline: ${id}`);
    const rows = initial.filter(row => row.id === id && row.model === MODELS.luna.id && typeof row.keep === 'boolean');
    if (!rows.length || !rows.every(row => ledger.some(actual => isDeepStrictEqual(actual, row)))) throw Error(`missing genuine frozen Luna evidence: ${id}`);
    originals.set(id, rows);
  }
  if (transition) {
    if (!licensedOriginalSlotReplacement(root, run, transition.original_id, transition.current_id, certificate))
      throw Error('selective judge policy requires current replacement certification, never historical-slot credit');
  }
  return {
    models: [MODELS.luna.id, MODELS.sol61.id],
    requiredModels(id, text) { return [id !== transition?.current_id && !created.includes(id) && itemHashGuard(text) === baseline[id] ? MODELS.luna.id : MODELS.sol61.id]; },
    eligible(id, row, text) {
      return created.includes(id) || id === transition?.current_id ? row.model === MODELS.sol61.id
        : itemHashGuard(text) !== baseline[id] || originals.get(id)?.some(original => isDeepStrictEqual(original, row));
    },
  };
}
