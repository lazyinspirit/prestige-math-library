import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { verifyZF } from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import { appendDependencyClosure } from './support-phase-2-next-17-update-existence-proof.mjs';
import { transportContext, transportProof } from './support-phase-2-next-17-guarded-inference-transport.mjs';
import { translateSchema, schemaProof } from './support-phase-2-next-17-guarded-schema-transformer.mjs';
const read = n => readFileSync(new URL(n, import.meta.url), 'utf8');
const fence = n => read(n).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old = fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(old.slice(0, old.indexOf('let cases=0;')) + '\nreturn {pack,num,record};')();
const D = new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md') + '\nreturn makeNumericalLogicalDecoder();')();
const kernel = read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
const F = new Function('assert', kernel.slice(kernel.indexOf('const nat ='), kernel.indexOf('const fixed ='))
  + kernel.slice(kernel.indexOf('function arrow('), kernel.indexOf('export function verifyZF'))
  + kernel.slice(kernel.indexOf('function skeleton('), kernel.indexOf('const empty ='))
  + '\nreturn {eq,mem,neg,and,ex,imp,all,fv,sub,same,variables,assembler};')(assert);
const { eq, mem, neg, and, ex, imp, all, fv, sub, same } = F;
const inference = read('./support-phase-2-next-17-guarded-inference-transport.mjs');
const helpers = new Function('assert', 'verifyZF', 'D', 'P', 'F', 'eq', 'neg', 'and', 'ex', 'imp', 'all', 'fv', 'sub',
  inference.slice(inference.indexOf('// Decode ONLY'), inference.indexOf('export function transportContext'))
  + '\nreturn {decodeProof,assembler};')(assert, verifyZF, D, P, F, eq, neg, and, ex, imp, all, fv, sub);

// Exact translated leaf in the SAME whole-source-proof hygiene context as transportProof.
export function logicalLeafProof(domainCode, sourceProof, index, nonemptyProof) {
  try {
    assert(typeof index === 'bigint' && index >= 0n);
    const ctx = transportContext(domainCode, sourceProof); assert(index < BigInt(ctx.source.length));
    const [f, tag, ann] = ctx.source[Number(index)]; assert(tag >= 1 && tag <= 6, 'not a logical axiom');
    const ndRows = helpers.decodeProof(nonemptyProof, P.num(ctx.nonempty)), A = helpers.assembler();
    const [nd] = appendDependencyClosure(A.q, ndRows, [ndRows.length - 1]);
    const nonemptyAt = x => x === 0n ? nd : A.mp(nd, A.ee(A.ei(ctx.domain(x), x, 0n), 0n));
    const target = ctx.guarded(f); let endpoint, substitutionChecks = 0, unusedWitness = false;
    if (tag === 1) endpoint = A.ax(target);
    else if (tag === 5) endpoint = A.pc([A.reflex(ann[0])], target);
    else if (tag === 6) {
      const [body, x, u, v] = ann;
      if (!fv(body).has(x)) endpoint = A.ax(target);
      else {
        const B = ctx.raw(body), U = sub(B, x, u), V = sub(B, x, v);
        assert(same(U, ctx.raw(sub(body, x, u))) && same(V, ctx.raw(sub(body, x, v)))); substitutionChecks += 2;
        const scheme = A.add(imp(eq(u, v), imp(U, V)), 6, [B, x, u, v]);
        endpoint = A.pc([scheme], target);
      }
    } else if (tag === 3) {
      const [body, consequent, x] = ann, B = ctx.raw(body), C = ctx.raw(consequent);
      assert(!fv(B).has(x));
      const counterRight = and(ctx.domain(x), neg(C));
      const counterLeft = and(ctx.domain(x), neg(imp(B, C)));
      const witness = A.ei(counterLeft, x);
      const point = A.pc([witness], imp(counterRight, imp(B, ex(x, counterLeft))));
      endpoint = A.pc([A.ee(point, x)], target);
    } else {
      const [body, x, y] = ann, B = ctx.raw(body);
      if (fv(body).has(x)) {
        const instance = sub(B, x, y); assert(same(instance, ctx.raw(sub(body, x, y)))); substitutionChecks++;
        if (tag === 2) {
          const counter = and(ctx.domain(x), neg(B)), witness = A.ei(counter, x, y);
          endpoint = A.pc([witness], target);
        } else {
          const witness = A.ei(and(ctx.domain(x), B), x, y);
          endpoint = A.pc([witness], target);
        }
      } else {
        unusedWitness = true; assert(!fv(B).has(x));
        // y is absent from the source formula and may name an inserted D binder. Ignore it.
        const clause = tag === 2 ? neg(B) : B, witnessBody = and(ctx.domain(x), clause);
        const witness = A.ei(witnessBody, x);
        const point = A.pc([witness], imp(ctx.domain(x), imp(clause, ex(x, witnessBody))));
        const exists = A.mp(nonemptyAt(x), A.ee(point, x));
        endpoint = A.pc([exists], target);
      }
    }
    assert(same(A.at(endpoint), target));
    // Prune unused nonempty-domain imports without introducing an unproved assumption.
    const rows = []; appendDependencyClosure(rows, A.q, [endpoint]);
    const code = P.pack(rows.map(P.record)), expected = P.num(target);
    assert(verifyZF(code, expected), 'generated logical leaf rejected');
    return { code, endpoint: expected, lines: rows, tag, substitutionChecks, unusedWitness };
  } catch { return 0n; }
}
export const logicalLeafProofCode = (...args) => { const p = logicalLeafProof(...args); return p === 0n ? 0n : p.code; };

// Fill only logical leaves; exact caller-supplied nonlogical certificates are still required.
export function fillLogicalLeaves(domainCode, sourceProof, nonlogicalProofList, nonemptyProof) {
  try {
    const ctx = transportContext(domainCode, sourceProof), supplied = D.list(nonlogicalProofList);
    assert.equal(supplied.length, ctx.source.length);
    helpers.decodeProof(nonemptyProof, P.num(ctx.nonempty));
    const leaves = ctx.source.map(([f, tag], i) => {
      if (tag === 0) { helpers.decodeProof(supplied[i], P.num(ctx.guarded(f))); return supplied[i]; }
      assert.equal(supplied[i], 0n, 'unexpected caller proof at logical/inference record');
      if (tag > 6) return 0n;
      const p = logicalLeafProof(domainCode, sourceProof, BigInt(i), nonemptyProof); assert(p !== 0n); return p.code;
    });
    return P.pack(leaves);
  } catch { return 0n; }
}
export function compileGuardedProof(domainCode, sourceProof, nonlogicalProofList, nonemptyProof) {
  const leaves = fillLogicalLeaves(domainCode, sourceProof, nonlogicalProofList, nonemptyProof);
  return leaves === 0n ? 0n : transportProof(domainCode, sourceProof, leaves, nonemptyProof);
}
export const compileGuardedProofCode = (...args) => { const p = compileGuardedProof(...args); return p === 0n ? 0n : p.code; };

function tests() {
  const A = helpers.assembler(), q = ex(2n, mem(0n, 2n));
  A.ax(imp(q, q));
  const phi = ex(5n, and(mem(0n, 5n), eq(1n, 1n)));
  A.uiImp(all(0n, phi), 1n);
  const b = mem(1n, 2n), c = ex(3n, mem(0n, 3n));
  A.add(imp(all(0n, imp(b, c)), imp(b, all(0n, c))), 3, [b, c, 0n]);
  A.ei(phi, 0n, 1n);
  A.reflex((1n << 80n) + 7n);
  const body = and(mem(4n, 2n), ex(3n, mem(3n, 2n)));
  A.add(imp(eq(0n, 1n), imp(sub(body, 4n, 0n), sub(body, 4n, 1n))), 6, [body, 4n, 0n, 1n]);
  const source = P.pack(A.q.map(P.record)); assert(verifyZF(source, P.num(A.at(A.q.length - 1))));
  const makeND = (domain, sourceProof) => {
    const d = P.num(domain), ctx = transportContext(d, sourceProof), N = helpers.assembler();
    let witness;
    if (domain[0] === 'eq') witness = N.reflex(0n);
    else { const normalized = ctx.domain(0n); witness = N.mp(N.reflex(0n), N.ei(normalized[2], normalized[1], 0n)); }
    N.mp(witness, N.ei(ctx.domain(0n), 0n));
    const code = P.pack(N.q.map(P.record)); assert(verifyZF(code, P.num(ctx.nonempty))); return { d, ctx, code };
  };
  const cases = []; let proofs = 0, substitutionChecks = 0;
  for (const domain of [eq(0n, 0n), ex(1n, eq(0n, 1n))]) {
    const nd = makeND(domain, source);
    for (let i = 0; i < A.q.length; i++) {
      const p = logicalLeafProof(nd.d, source, BigInt(i), nd.code);
      assert(p !== 0n && verifyZF(p.code, p.endpoint)); proofs++; substitutionChecks += p.substitutionChecks;
      cases.push({ domain: domain[0], tag: p.tag, lines: p.lines.length, bits: p.code.toString(2).length });
    }
  }
  // Single-leaf contexts deliberately make an invisible annotation collide with a D binder.
  const extras = [], unused = ex(1n, eq(1n, 1n));
  extras.push([imp(all(0n, unused), unused), 2, [unused, 0n, 2n]]);
  extras.push([imp(unused, ex(0n, unused)), 4, [unused, 0n, 2n]]);
  extras.push([imp(eq(0n, 1n), imp(sub(body, 4n, 0n), sub(body, 4n, 1n))), 6, [body, 4n, 0n, 1n]]);
  extras.push([imp(eq(0n, 1n), imp(unused, unused)), 6, [unused, 4n, 0n, 1n]]);
  let unusedCases = 0;
  for (const line of extras) {
    const sp = P.pack([P.record(line)]), nd = makeND(ex(1n, eq(0n, 1n)), sp);
    const p = logicalLeafProof(nd.d, sp, 0n, nd.code);
    assert(p !== 0n && verifyZF(p.code, p.endpoint)); proofs++; substitutionChecks += p.substitutionChecks;
    if (line[1] === 2 || line[1] === 4) { assert(p.unusedWitness); assert.equal(nd.ctx.domain(0n)[1], line[2][2]); unusedCases++; }
    if (line[1] === 6 && fv(line[2][0]).has(line[2][1])) assert.equal(nd.ctx.domain(0n)[1], line[2][1]);
  }
  // End-to-end source UI + reflexivity + generalization + MP, with no hand-supplied logical leaves.
  const S = helpers.assembler(), r = S.reflex(0n), g = S.gen(r, 0n), ui = S.uiImp(all(0n, eq(0n, 0n)), 1n); S.mp(g, ui);
  const sp = P.pack(S.q.map(P.record)), nd = makeND(ex(1n, eq(0n, 1n)), sp);
  const leaves = fillLogicalLeaves(nd.d, sp, P.pack(S.q.map(() => 0n)), nd.code); assert(leaves !== 0n);
  const transported = transportProof(nd.d, sp, leaves, nd.code); assert(transported !== 0n && verifyZF(transported.code, transported.endpoint));
  const allND = makeND(ex(1n, eq(0n, 1n)), source);
  const allSchemes = compileGuardedProof(allND.d, source, P.pack(A.q.map(() => 0n)), allND.code);
  assert(allSchemes !== 0n && verifyZF(allSchemes.code, allSchemes.endpoint));
  const d0 = P.num(eq(0n, 0n)), certificate = P.pack([1n, P.num(eq(0n, 0n)), 0n]), translated = translateSchema(d0, certificate);
  const axiomSource = P.pack([P.record([translated.source, 0, D.list(certificate)])]), axiomND = makeND(eq(0n, 0n), axiomSource);
  const axiomProof = schemaProof(d0, certificate, true);
  const withAxiom = compileGuardedProof(d0, axiomSource, P.pack([axiomProof.code]), axiomND.code);
  assert(withAxiom !== 0n && verifyZF(withAxiom.code, withAxiom.endpoint));
  let rejections = 0; const reject = f => { assert.equal(f(), 0n); rejections++; };
  reject(() => logicalLeafProof(0n, sp, 0n, nd.code));
  reject(() => logicalLeafProof(nd.d, sp, -1n, nd.code));
  reject(() => logicalLeafProof(nd.d, sp, 99n, nd.code));
  reject(() => logicalLeafProof(nd.d, sp, 1n, nd.code)); // inference, not leaf
  reject(() => logicalLeafProof(nd.d, sp, 0n, 0n));
  const illegalBody = ex(1n, mem(0n, 1n));
  const capture = P.pack([P.record([imp(all(0n, illegalBody), ex(1n, mem(1n, 1n))), 2, [illegalBody, 0n, 1n]])]);
  reject(() => logicalLeafProof(nd.d, capture, 0n, nd.code));
  const illegalDist = P.pack([P.record([imp(all(0n, imp(mem(0n, 1n), eq(1n, 1n))), imp(mem(0n, 1n), all(0n, eq(1n, 1n)))), 3, [mem(0n, 1n), eq(1n, 1n), 0n]])]);
  reject(() => logicalLeafProof(nd.d, illegalDist, 0n, nd.code));
  reject(() => fillLogicalLeaves(nd.d, sp, P.pack([nd.code, 0n, 0n, 0n]), nd.code));
  reject(() => fillLogicalLeaves(nd.d, sp, P.pack([]), nd.code));
  reject(() => compileGuardedProof(d0, axiomSource, P.pack([0n]), axiomND.code));
  reject(() => compileGuardedProof(d0, axiomSource, P.pack([axiomProof.code]), 0n));
  const mutated = transported.lines.map(l => [l[0], l[1], [...l[2]]]), mpIndex = mutated.findIndex(l => l[1] === 7);
  mutated[mpIndex][2][0] = mpIndex; assert(!verifyZF(P.pack(mutated.map(P.record)), transported.endpoint)); rejections++;
  console.log(JSON.stringify({ proofs, substitutionChecks, unusedCases, cases, endToEndLines: transported.lines.length,
    endToEndBits: transported.code.toString(2).length, allSchemesLines: allSchemes.lines.length,
    allSchemesBits: allSchemes.code.toString(2).length, nonlogicalInsertion: true, rejections,
    boundary: 'All six logical schemes, common-copy substitution identities, and automatic logical-leaf insertion. Requires exact nonempty-domain proof; constructibility D/L-schema/GCH/PA obligations remain separate.' }, null, 2));
}
if (process.argv[1] === fileURLToPath(import.meta.url)) tests();
