// Research-only primitive-recursive U-AX compiler trace.
// Macro leaves are explicit and unexpanded; this file never returns a ZF proof.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { axiomCertificate } from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import { subformulaSchedule, verifySchedule } from './support-phase-2-next-17-subformula-truthset-history.mjs';
import {
  selectedAxiomEndpointDescriptor,
  selectedEncoding,
  uAxiomCertificate,
} from './support-phase-2-next-17-uax-selected-encoding.mjs';

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const fence = name => read(name).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old = fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(old.slice(0, old.indexOf('let cases=0;')) + '\nreturn {pack,num};')();
const D = new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')
  + '\nreturn makeNumericalLogicalDecoder();')();
const kernel = read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
const K = new Function('assert', 'P', kernel.slice(kernel.indexOf('const nat ='),
  kernel.indexOf('export function axiomCertificate'))
  + '\nreturn {eq,mem,separation,replacement,fixedCodes};')(assert, P);
const { eq, mem, separation, replacement, fixedCodes } = K;

const PLAN_TAG = 31n;
const ops = Object.freeze({
  decode: 1n,
  syntaxInduction: 2n,
  quotation: 10n,
  satisfactionBridge: 11n,
  reflection: 12n,
  ambientSeparation: 13n,
  definabilityClosure: 14n,
  ambientReplacement: 15n,
  rankBound: 16n,
  recursiveSeparation: 17n,
  fixedLBlock: 18n,
  choiceWellOrderBlock: 19n,
  gchCondensationBlock: 20n,
  exactEndpointAssembly: 30n,
});

const step = (op, dependencies = []) => [op, dependencies.map(BigInt)];
function expectedSteps(kind) {
  if (kind === 0n) return [step(ops.decode), step(ops.syntaxInduction, [0]),
    step(ops.fixedLBlock, [1]), step(ops.exactEndpointAssembly, [2])];
  if (kind === 1n) return [step(ops.decode), step(ops.syntaxInduction, [0]),
    step(ops.quotation, [1]), step(ops.satisfactionBridge, [1, 2]),
    step(ops.reflection, [1, 3]), step(ops.ambientSeparation, [4]),
    step(ops.definabilityClosure, [3, 4, 5]), step(ops.exactEndpointAssembly, [6])];
  if (kind === 2n) return [step(ops.decode), step(ops.syntaxInduction, [0]),
    step(ops.ambientReplacement, [1]), step(ops.rankBound, [2]),
    step(ops.recursiveSeparation, [1, 3]), step(ops.definabilityClosure, [3, 4]),
    step(ops.exactEndpointAssembly, [5])];
  if (kind === 3n) return [step(ops.decode), step(ops.syntaxInduction, [0]),
    step(ops.choiceWellOrderBlock, [1]), step(ops.exactEndpointAssembly, [2])];
  if (kind === 4n) return [step(ops.decode), step(ops.syntaxInduction, [0]),
    step(ops.gchCondensationBlock, [1]), step(ops.exactEndpointAssembly, [2])];
  return null;
}

function kindOf(certificate) {
  const fields = D.list(certificate);
  if ((fields[0] === 0n && fields.length === 2)
    || (fields[0] === 1n && fields.length === 3)
    || (fields[0] === 2n && fields.length === 4)) return fields[0];
  if ((fields[0] === 3n || fields[0] === 4n) && fields.length === 1) return fields[0];
  return null;
}

const encodeStep = ([op, dependencies]) => P.pack([op, P.pack(dependencies)]);
const encodeDescriptor = d => P.pack([BigInt(d.version), d.alphaBinderStart,
  BigInt(d.quantifiers), BigInt(d.exactOutputTokenCount)]);

export function compileUAXInductionPlan(formulaCode, certificate) {
  try {
    if (!uAxiomCertificate(formulaCode, certificate)) return 0n;
    const kind = kindOf(certificate), schedule = subformulaSchedule(formulaCode);
    const descriptor = selectedAxiomEndpointDescriptor(formulaCode, certificate), steps = expectedSteps(kind);
    if (kind === null || schedule === null || descriptor === null || steps === null) return 0n;
    const selected = selectedEncoding();
    return P.pack([PLAN_TAG, kind, formulaCode, certificate, selected.domainCode,
      schedule.code, encodeDescriptor(descriptor), P.pack(steps.map(encodeStep))]);
  } catch { return 0n; }
}

export function verifyUAXInductionPlan(planCode) {
  try {
    const fields = D.list(planCode);
    if (fields.length !== 8 || fields[0] !== PLAN_TAG) return null;
    const [, kind, formulaCode, certificate, domainCode, scheduleCode, descriptorCode, stepsCode] = fields;
    if (!uAxiomCertificate(formulaCode, certificate) || kind !== kindOf(certificate)) return null;
    const selected = selectedEncoding(); if (domainCode !== selected.domainCode) return null;
    const schedule = verifySchedule(scheduleCode); if (schedule === null || schedule.source !== formulaCode) return null;
    const descriptor = selectedAxiomEndpointDescriptor(formulaCode, certificate);
    if (descriptor === null || descriptorCode !== encodeDescriptor(descriptor)) return null;
    const rows = D.list(stepsCode), expected = expectedSteps(kind);
    if (expected === null || rows.length !== expected.length) return null;
    const decoded = rows.map((record, index) => {
      const row = D.list(record); assert.equal(row.length, 2);
      const dependencies = D.list(row[1]); dependencies.forEach(value => assert(value < BigInt(index)));
      return [row[0], dependencies];
    });
    assert.deepEqual(decoded, expected);
    return { kind, formulaCode, certificate, domainCode, schedule, descriptor, steps: decoded,
      completeHilbertExpansion: false,
      firstUnexpandedMacro: decoded.findIndex(([op]) => op >= 10n && op < 30n) };
  } catch { return null; }
}

// This is the critical fail-closed boundary. A compiler trace is not a proof.
export function proofCodeFromInductionPlan(planCode) {
  return verifyUAXInductionPlan(planCode)?.completeHilbertExpansion ? planCode : 0n;
}

function tests() {
  const selected = selectedEncoding(), examples = [];
  for (let index = 0n; index < 6n; index++) examples.push([fixedCodes[Number(index)], P.pack([0n, index])]);
  const sepMatrix = ['exists', 8n, ['and', mem(0n, 8n), eq(1n, 1n)]];
  const sep = separation(sepMatrix, 0n); examples.push([P.num(sep), P.pack([1n, P.num(sepMatrix), 0n])]);
  const repMatrix = ['and', mem(0n, 2n), eq(1n, 0n)];
  const rep = replacement(repMatrix, 0n, 1n); examples.push([P.num(rep), P.pack([2n, P.num(repMatrix), 0n, 1n])]);
  examples.push([selected.acCode, P.pack([3n])], [selected.gchCode, P.pack([4n])]);
  let accepted = 0, rejected = 0;
  for (const [formula, certificate] of examples) {
    assert(uAxiomCertificate(formula, certificate));
    const plan = compileUAXInductionPlan(formula, certificate), decoded = verifyUAXInductionPlan(plan);
    assert(plan !== 0n && decoded !== null && decoded.firstUnexpandedMacro >= 0);
    assert.equal(proofCodeFromInductionPlan(plan), 0n); accepted++;
    const fields = D.list(plan);
    for (const position of [1, 2, 4, 6]) {
      const changed = [...fields]; changed[position] += 1n;
      assert.equal(verifyUAXInductionPlan(P.pack(changed)), null); rejected++;
    }
    const stepRows = D.list(fields[7]), first = D.list(stepRows[0]); first[0] = 99n;
    const changedRows = [...stepRows]; changedRows[0] = P.pack(first);
    const changed = [...fields]; changed[7] = P.pack(changedRows);
    assert.equal(verifyUAXInductionPlan(P.pack(changed)), null); rejected++;
  }
  assert.equal(compileUAXInductionPlan(selected.acCode, P.pack([4n])), 0n); rejected++;
  assert.equal(compileUAXInductionPlan(0n, P.pack([3n])), 0n); rejected++;
  assert(axiomCertificate(examples[6][0], examples[6][1]));
  console.log(JSON.stringify({ acceptedPlans: accepted, adversarialRejections: rejected,
    branches: { fixedZF: 6, separation: 1, replacement: 1, AC: 1, GCH: 1 },
    scheduleAndEndpointInvariant: true, earlierDependencyInvariant: true,
    completeHilbertExpansions: 0,
    boundary: 'Every unexpanded set-theoretic macro makes proofCodeFromInductionPlan return 0.' }, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) tests();
