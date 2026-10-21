import {loadPnpClassificationMigration,licensedPnpReplacement} from './step5-pnp-classification-migration.mjs';
// Shared read-only boundary for consumers of centrally issued Step-5 evidence.
import { basename } from 'node:path';
import { verifyCertification } from './step5-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { loadOriginalSlotReclassification, licensedOriginalSlotReplacement } from './step5-original-slot-reclassification.mjs';

export function loadStep5ClosureCertification(root, run, ledgerPath = '') {
  const inferred = run || (/^(.+)-judge\.jsonl$/.exec(basename(ledgerPath))?.[1]);
  if (!inferred) return null;
  const certificate = verifyCertification(root, inferred);
  const transition = loadOriginalSlotReclassification(root, inferred, { current: true });
  if (certificate && transition
    && !licensedOriginalSlotReplacement(root, inferred, transition.original_id, transition.current_id, certificate))
    throw Error('Step 5 replacement lacks exact current native certification');
  const classification=loadPnpClassificationMigration(root,inferred,{current:true});
  if(certificate&&classification&&!licensedPnpReplacement(root,inferred,classification.original_id,classification.current_id,certificate))throw Error('Step 5 classification replacement lacks current native certification');
  // Initial certification is the input to the first mandatory judge round.
  return certificate && ['impact-repeat', 'gate'].includes(certificate.phase)
    ? certificate : null;
}

export function currentStep5Certification(certificate, id, text, context) {
  const row = certificate?.items.find(item => item.id === id);
  return row && row.guard_sha256 === itemHashGuard(text)
    && row.item_sha256 === itemHashJudge(text)
    && row.context_sha256 === context ? row : null;
}

// Certification is not a judge verdict. Handle block and flow YAML stamps.
export function stripStep5JudgeStamp(text) {
  return text.replace(/^ {2}judge:\n(?: {4}.*\n)*/gm, '')
    .replace(/^(verification:[ \t]*\{[^\n]*?),?[ \t]*judge:[ \t]*\{[^{}\n]*\}[ \t]*,?[ \t]*([^\n]*\})[ \t]*$/gm,
      (_, before, after) => `${before}${before.trimEnd().endsWith('{') || after.trimStart().startsWith('}') ? '' : ', '}${after}`)
    .replace(/^(verification:\s*\{)\s*,/gm, '$1');
}
