// Shared read-only boundary for consumers of centrally issued Step-5 evidence.
import { basename } from 'node:path';
import { verifyCertification } from './step5-workflow.mjs';
import { itemHashGuard, itemHashJudge } from './item-hash.mjs';
import { hasStep6CurrencyRepair, verifyStep6CurrencyForStamps } from './step6-currency-repair.mjs';

export function loadStep5ClosureCertification(root, run, ledgerPath = '') {
  const inferred = run || (/^(.+)-judge\.jsonl$/.exec(basename(ledgerPath))?.[1]);
  if (!inferred) return null;
  const step6 = hasStep6CurrencyRepair(root, inferred);
  const certificate = verifyCertification(root, inferred, {step6HistoricalMetadata:step6});
  if(step6&&certificate)verifyStep6CurrencyForStamps(root,inferred,certificate);
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
