// Research-only, fail-closed numerical checker for the U-AX proof obligations.
// It does not manufacture the still-missing arbitrary L-Separation proofs.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  axiomCertificate,
  verifyZF,
} from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import {
  schemaProof,
  translateSchema,
} from './support-phase-2-next-17-guarded-schema-transformer.mjs';
import { transportContext } from './support-phase-2-next-17-guarded-inference-transport.mjs';

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const fence = name => read(name).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old = fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(old.slice(0, old.indexOf('let cases=0;'))
  + '\nreturn {pack,num,record};')();
const D = new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md')
  + '\nreturn makeNumericalLogicalDecoder();')();
const kernel = read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
const F = new Function('assert', 'P', kernel.slice(kernel.indexOf('const nat ='),
  kernel.indexOf('export function axiomCertificate'))
  + '\nreturn {eq,mem,neg,and,ex,imp,all,fv,sub,same,variables,fixed,fixedCodes};')(assert, P);
const { eq, mem, neg, and, ex, imp, all, fv, sub, same, variables, fixed, fixedCodes } = F;

const nat = x => typeof x === 'bigint' && x >= 0n;
const SCHEMA_WITNESS = 11n;
const FIXED_ZF_WITNESS = 12n;

// This is the same alpha-hygienic raw relativization used by translateSchema.
// Keeping the generic formula endpoint here lets the finite fixed-ZF slots be
// computed without pretending that an AC or GCH certificate syntax was fixed.
function normalizeDomain(domain, source) {
  let next = [...variables(domain), ...variables(source)].reduce(
    (maximum, x) => x > maximum ? x : maximum, 0n) + 1n;
  function go(formula, environment) {
    if (formula[0] === 'eq' || formula[0] === 'rel')
      return [formula[0], environment.get(formula[1]) ?? formula[1],
        environment.get(formula[2]) ?? formula[2]];
    if (formula[0] === 'neg') return neg(go(formula[1], environment));
    if (formula[0] === 'and') return and(go(formula[1], environment), go(formula[2], environment));
    const renamed = next++, child = new Map(environment);
    child.set(formula[1], renamed);
    return ex(renamed, go(formula[2], child));
  }
  return go(domain, new Map());
}

export function translateFormulaEndpoint(domainCode, formulaCode) {
  try {
    if (!nat(domainCode) || !nat(formulaCode)) return null;
    const domainInput = D.parse(domainCode), source = D.parse(formulaCode);
    if (domainInput === null || source === null || [...fv(domainInput)].some(x => x !== 0n)) return null;
    const domainBody = normalizeDomain(domainInput, source), domain = x => sub(domainBody, 0n, x);
    function raw(formula) {
      if (formula[0] === 'eq' || formula[0] === 'rel') return formula;
      if (formula[0] === 'neg') return neg(raw(formula[1]));
      if (formula[0] === 'and') return and(raw(formula[1]), raw(formula[2]));
      return ex(formula[1], and(domain(formula[1]), raw(formula[2])));
    }
    const free = [...fv(source)].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    const guard = free.length
      ? free.map(domain).reduceRight((rest, x) => rest === null ? x : and(x, rest), null)
      : all(0n, eq(0n, 0n));
    const target = raw(source), guarded = imp(guard, target);
    return { source, target, guarded, sourceCode: formulaCode,
      rawCode: P.num(target), guardedCode: P.num(guarded) };
  } catch { return null; }
}

export function schemaObligation(domainCode, certificate) {
  const translated = translateSchema(domainCode, certificate);
  if (translated === null) return null;
  return {
    kind: translated.kind === 1n ? 'separation' : 'replacement',
    domainCode,
    certificate,
    sourceCode: translated.sourceCode,
    rawCode: translated.rawCode,
    guardedCode: translated.guardedCode,
    matrixRawCode: translated.matrixRawCode,
    designated: translated.designated,
  };
}

// Seal a caller-supplied proof only after checking its exact raw endpoint.
// The numerical package repeats all recomputable fields so a mutation cannot
// silently change which schema instance or which relativization was proved.
export function sealSchemaProof(domainCode, certificate, proofCode) {
  try {
    const obligation = schemaObligation(domainCode, certificate);
    if (obligation === null || !nat(proofCode) || !verifyZF(proofCode, obligation.rawCode)) return 0n;
    return P.pack([SCHEMA_WITNESS, domainCode, certificate, obligation.sourceCode,
      obligation.rawCode, obligation.guardedCode, proofCode]);
  } catch { return 0n; }
}

export function checkSchemaProofWitness(witness) {
  try {
    if (!nat(witness)) return false;
    const row = D.list(witness);
    if (row.length !== 7 || row[0] !== SCHEMA_WITNESS) return false;
    const [, domainCode, certificate, sourceCode, rawCode, guardedCode, proofCode] = row;
    const obligation = schemaObligation(domainCode, certificate);
    return obligation !== null
      && sourceCode === obligation.sourceCode
      && rawCode === obligation.rawCode
      && guardedCode === obligation.guardedCode
      && verifyZF(proofCode, rawCode);
  } catch { return false; }
}

export function fixedZFObligation(domainCode, index) {
  try {
    if (!nat(index) || index >= 6n) return null;
    const formula = fixed[Number(index)], sourceCode = fixedCodes[Number(index)];
    const certificate = P.pack([0n, index]);
    if (!axiomCertificate(sourceCode, certificate)) return null;
    const translated = translateFormulaEndpoint(domainCode, sourceCode);
    if (translated === null) return null;
    return { kind: 'fixed-zf', index, domainCode, certificate, sourceCode,
      rawCode: translated.rawCode, guardedCode: translated.guardedCode };
  } catch { return null; }
}

export function sealFixedZFProof(domainCode, index, proofCode) {
  try {
    const obligation = fixedZFObligation(domainCode, index);
    if (obligation === null || !nat(proofCode) || !verifyZF(proofCode, obligation.rawCode)) return 0n;
    return P.pack([FIXED_ZF_WITNESS, index, domainCode, obligation.sourceCode,
      obligation.rawCode, obligation.guardedCode, proofCode]);
  } catch { return 0n; }
}

export function checkFixedZFProofWitness(witness) {
  try {
    if (!nat(witness)) return false;
    const row = D.list(witness);
    if (row.length !== 7 || row[0] !== FIXED_ZF_WITNESS) return false;
    const [, index, domainCode, sourceCode, rawCode, guardedCode, proofCode] = row;
    const obligation = fixedZFObligation(domainCode, index);
    return obligation !== null
      && sourceCode === obligation.sourceCode
      && rawCode === obligation.rawCode
      && guardedCode === obligation.guardedCode
      && verifyZF(proofCode, rawCode);
  } catch { return false; }
}

// No numerical AC/GCH source formulas or U-certificate tags are fixed by the
// current executable kernel. Returning null is intentional fail-closed behavior.
export function unavailableTailObligation(label) {
  void label;
  return null;
}

function tests() {
  const domains = [eq(0n, 0n), ex(4n, mem(0n, 4n))];
  const matrices = [
    mem(0n, 1n),
    ex(0n, mem(0n, 2n)),
    and(mem(7n, 3n), ex(3n, eq(3n, 3n))),
    eq((1n << 80n) + 9n, (1n << 80n) + 9n),
  ];
  const cert = (kind, phi, z, w = 1n) => P.pack(kind === 1n
    ? [kind, P.num(phi), z] : [kind, P.num(phi), z, w]);
  let translatedSchemas = 0, fixedEndpoints = 0, positiveWitnesses = 0, rejections = 0;

  // Arbitrary matrices, nested rebinding, absent designated variables and huge
  // indices all receive exact closed source/raw/guarded endpoint codes.
  for (const domain of domains) for (const phi of matrices) {
    for (const [kind, z, w] of [[1n, 0n, 1n], [2n, 0n, 1n], [2n, 8n, 9n]]) {
      const c = cert(kind, phi, z, w), obligation = schemaObligation(P.num(domain), c);
      assert(obligation !== null);
      assert(axiomCertificate(obligation.sourceCode, c));
      assert.equal(fv(D.parse(obligation.rawCode)).size, 0);
      assert.equal(fv(D.parse(obligation.guardedCode)).size, 0);
      assert.equal(obligation.rawCode, translateFormulaEndpoint(P.num(domain), obligation.sourceCode).rawCode);
      translatedSchemas++;
    }
  }

  // Positive executable witnesses use the two proof families already supplied
  // by guarded-schema-transformer. The checker itself is matrix-independent.
  for (const [kind, phi, z, w] of [[1n, eq(0n, 0n), 0n, 1n],
    [2n, eq(1n, 0n), 0n, 1n]]) {
    const domainCode = P.num(domains[0]), c = cert(kind, phi, z, w);
    const proof = schemaProof(domainCode, c);
    assert(proof !== 0n);
    const witness = sealSchemaProof(domainCode, c, proof.code);
    assert(witness !== 0n && checkSchemaProofWitness(witness));
    positiveWitnesses++;
    assert.equal(sealSchemaProof(domainCode, c, proof.code + 1n), 0n); rejections++;

    const row = D.list(witness);
    for (const field of [3, 4, 5]) {
      const changed = [...row]; changed[field] += 1n;
      assert(!checkSchemaProofWitness(P.pack(changed))); rejections++;
    }
    const extra = [...row, 0n];
    assert(!checkSchemaProofWitness(P.pack(extra))); rejections++;
  }

  // Compute all six exact fixed-ZF raw endpoints and cross-check the generic
  // translator against the already checked source-proof transport context.
  for (const domain of domains) for (let index = 0n; index < 6n; index++) {
    const domainCode = P.num(domain), obligation = fixedZFObligation(domainCode, index);
    assert(obligation !== null && axiomCertificate(obligation.sourceCode, obligation.certificate));
    const sourceProof = P.pack([P.record([fixed[Number(index)], 0, [0n, index]])]);
    assert(verifyZF(sourceProof, obligation.sourceCode));
    const context = transportContext(domainCode, sourceProof);
    assert(same(context.target, D.parse(obligation.rawCode)));
    fixedEndpoints++;
  }

  const identity = schemaObligation(P.num(domains[0]), cert(1n, eq(0n, 0n), 0n));
  assert(schemaObligation(0n, cert(1n, eq(0n, 0n), 0n)) === null); rejections++;
  assert(schemaObligation(P.num(domains[0]), P.pack([3n, 0n])) === null); rejections++;
  assert(schemaObligation(P.num(domains[0]), cert(2n, eq(0n, 0n), 0n, 0n)) === null); rejections++;
  assert.equal(sealSchemaProof(P.num(domains[0]), cert(1n, mem(0n, 1n), 0n), 0n), 0n); rejections++;
  assert(!checkSchemaProofWitness(0n)); rejections++;
  assert(fixedZFObligation(P.num(domains[0]), 6n) === null); rejections++;
  assert(fixedZFObligation(0n, 0n) === null); rejections++;
  assert.equal(sealFixedZFProof(P.num(domains[0]), 0n, 0n), 0n); rejections++;
  assert(!checkFixedZFProofWitness(P.pack([FIXED_ZF_WITNESS, 0n]))); rejections++;
  assert.equal(unavailableTailObligation('AC'), null); rejections++;
  assert.equal(unavailableTailObligation('GCH'), null); rejections++;
  assert(identity !== null);

  console.log(JSON.stringify({
    translatedSchemas,
    fixedEndpoints,
    positiveWitnesses,
    rejections,
    exactEndpointCrossChecks: fixedEndpoints,
    available: {
      arbitrarySchemaObligationAndWitnessChecker: true,
      identitySeparationProofProducer: true,
      identityReplacementProofProducer: true,
      fixedZFEndpointConstructor: true,
    },
    unavailable: {
      arbitrarySeparationProofProducer: true,
      arbitraryReplacementProofProducer: true,
      fixedZFRelativizedProofBlocks: true,
      exactACCertificateAndProofBlock: true,
      exactGCHCertificateAndProofBlock: true,
      encodedPAProofOfUniformAcceptance: true,
    },
  }, null, 2));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) tests();
