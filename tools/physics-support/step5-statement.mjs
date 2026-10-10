// Downstream impact follows changes to the public statement, not its proof.
import { physicalInterface } from './physics-interface.mjs';
import {createHash} from 'node:crypto';
export function statementHash(text) {
  const body=text.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/,'');
  const physical = physicalInterface(text);
  const pattern = physical
    ? /^##[ \t]+(?:Statement|Definition|Postulate|Observations|Uncertainty|Setup|Procedure|Interpretation)[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm
    : /^##[ \t]+(?:Statement|Definition)[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm;
  const sections=[...body.matchAll(pattern)].map(match=>match[0].replace(/\r\n/g,'\n').trim());
  return createHash('sha256').update(JSON.stringify(physical ? { sections, physical } : sections)).digest('hex');
}

export function restatedIds(pack,changed,currentStatements) {
  // Old immutable packs have no statement snapshot. Preserve their original
  // obligations rather than guessing historical statement content.
  if(!pack.before_statements)return changed;
  return changed.filter(id=>pack.before_statements[id]!==currentStatements[id]);
}
