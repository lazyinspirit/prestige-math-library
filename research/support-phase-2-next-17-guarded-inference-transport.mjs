import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { verifyZF } from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import { appendDependencyClosure } from './support-phase-2-next-17-update-existence-proof.mjs';
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
const { eq, mem, neg, and, ex, imp, all, fv, sub, same, variables } = F;
const schemaSource = read('./support-phase-2-next-17-guarded-schema-transformer.mjs');
const rawFactory = new Function('eq', 'neg', 'and', 'ex', 'imp', 'all', 'fv', 'sub', 'variables',
  schemaSource.slice(schemaSource.indexOf('function normalizeDomain('), schemaSource.indexOf('// Total on numerical inputs:'))
  + '\nreturn translation;')(eq, neg, and, ex, imp, all, fv, sub, variables);
const conjunction = xs => xs.reduceRight((r, x) => r === null ? x : and(x, r), null);

// Decode ONLY after the unchanged verifier accepts, then assert exact reserialization.
function decodeProof(code, endpoint) {
  assert(verifyZF(code, endpoint), 'unverified proof');
  const skeleton = n => { const a = D.list(n); return a[0] === 0n ? ['p', Number(a[1])]
    : a[0] === 1n ? ['n', skeleton(a[1])] : ['a', skeleton(a[1]), skeleton(a[2])]; };
  return D.list(code).map(record => {
    const [fc, tag, ac] = D.list(record), a = D.list(ac), t = Number(tag), term = x => D.parse(x, 'term')[1];
    let annotation;
    if (t === 0) annotation = a;
    else if (t === 1) annotation = [skeleton(a[0]), D.list(a[1]).map(n => D.parse(n))];
    else if (t === 2 || t === 4) annotation = [D.parse(a[0]), a[1], term(a[2])];
    else if (t === 3) annotation = [D.parse(a[0]), D.parse(a[1]), a[2]];
    else if (t === 5) annotation = [term(a[0])];
    else if (t === 6) annotation = [D.parse(a[0]), a[1], term(a[2]), term(a[3])];
    else if (t === 7) annotation = a.map(Number);
    else annotation = [Number(a[0]), a[1]];
    const line = [D.parse(fc), t, annotation]; assert.equal(P.record(line), record); return line;
  });
}
function lastCode(proof) { return D.list(D.list(proof).at(-1))[0]; }
function assembler() {
  const A = F.assembler();
  A.ei = (body, x, y = x) => A.add(imp(sub(body, x, y), ex(x, body)), 4, [body, x, y]);
  A.reflex = x => A.add(eq(x, x), 5, [x]);
  A.ee = (p, x) => { const f = A.at(p), a = f[1][1], b = f[1][2][1];
    assert(!fv(b).has(x)); return A.add(imp(ex(x, a), b), 9, [p, x]); };
  A.cnex = (p, x) => {
    const f = A.at(p), K = f[1][1], not = f[1][2][1]; assert.equal(not[0], 'neg'); const body = not[1];
    const g = A.cg(p, x), lift = A.em(A.ax(imp(body, neg(neg(body)))), x);
    return A.pc([g, lift], imp(K, neg(ex(x, body))));
  };
  return A;
}
export function transportContext(domainCode, sourceProof) {
  const domain = D.parse(domainCode); assert(domain !== null && [...fv(domain)].every(x => x === 0n));
  const source = decodeProof(sourceProof, lastCode(sourceProof));
  const t = rawFactory(conjunction(source.map(l => l[0])), domain);
  const guarded = f => imp(t.guardFor(f), t.raw(f));
  return { source, ...t, guarded, nonempty: ex(0n, t.domain(0n)) };
}

// Numerical proof input, numerical leaf-proof list aligned with source records, numerical result.
// Leaves may have arbitrary formulas, but an exact checked translated proof is mandatory for each.
export function transportProof(domainCode, sourceProof, leafProofList, nonemptyProof) {
  try {
    const ctx = transportContext(domainCode, sourceProof), supplied = D.list(leafProofList);
    assert.equal(supplied.length, ctx.source.length);
    const ndRows = decodeProof(nonemptyProof, P.num(ctx.nonempty)), A = assembler();
    const [nd] = appendDependencyClosure(A.q, ndRows, [ndRows.length - 1]);
    const ends = [], counters = { leaves: 0, mp: 0, generalization: 0, existentialElimination: 0, guardsRemoved: 0 };
    const top = all(0n, eq(0n, 0n));
    const topProof = A.gen(A.reflex(0n), 0n);
    const guard = xs => xs.length ? conjunction(xs.map(ctx.domain)) : top;
    const sorted = s => [...s].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    const nonemptyAt = x => x === 0n ? nd : A.mp(nd, A.ee(A.ei(ctx.domain(x), x, 0n), 0n));
    for (let i = 0; i < ctx.source.length; i++) {
      const [f, tag, ann] = ctx.source[i]; let endpoint;
      if (tag <= 6) {
        const rows = decodeProof(supplied[i], P.num(ctx.guarded(f)));
        [endpoint] = appendDependencyClosure(A.q, rows, [rows.length - 1]); counters.leaves++;
      } else {
        assert.equal(supplied[i], 0n, 'unexpected proof payload at inference');
        if (tag === 7) {
          let current = sorted(fv(ctx.source[ann[1]][0]));
          endpoint = A.pc([topProof, ends[ann[0]], ends[ann[1]]], imp(guard(current), ctx.raw(f)));
          const needed = fv(f);
          for (const x of [...current].filter(x => !needed.has(x))) {
            current = current.filter(y => y !== x);
            const rest = imp(guard(current), ctx.raw(f));
            const curry = A.pc([endpoint], imp(ctx.domain(x), rest));
            endpoint = A.mp(nonemptyAt(x), A.ee(curry, x)); counters.guardsRemoved++;
          }
          counters.mp++;
        } else if (tag === 8) {
          const [p, x] = ann, body = ctx.raw(ctx.source[p][0]), G = ctx.guardFor(f);
          const point = A.pc([ends[p]], imp(G, neg(and(ctx.domain(x), neg(body)))));
          endpoint = A.cnex(point, x); counters.generalization++;
        } else if (tag === 9) {
          const [p, x] = ann, premise = ctx.source[p][0], left = premise[1][1], right = premise[1][2][1];
          const G = ctx.guardFor(f), B = ctx.raw(right), antecedent = and(ctx.domain(x), ctx.raw(left));
          const curry = A.pc([ends[p]], imp(antecedent, imp(G, B)));
          endpoint = A.pc([A.ee(curry, x)], ctx.guarded(f)); counters.existentialElimination++;
        } else throw Error('unknown source rule');
      }
      assert(same(A.at(endpoint), ctx.guarded(f)), 'translated endpoint mismatch'); ends.push(endpoint);
    }
    A.pc([ends.at(-1)], ctx.guarded(ctx.source.at(-1)[0]));
    const endpoint = P.num(ctx.guarded(ctx.source.at(-1)[0])), code = P.pack(A.q.map(P.record));
    return { code, endpoint, lines: A.q, ends, counters };
  } catch { return 0n; }
}
export const transportProofCode = (...args) => { const result = transportProof(...args); return result === 0n ? 0n : result.code; };

function tests() {
  const A = assembler(), a = A.reflex(0n), c = A.reflex(2n), b = A.reflex(1n);
  const antecedent = and(eq(0n, 0n), eq(2n, 2n)), premise = A.pc([a, c], antecedent);
  const arrow = A.pc([b], imp(antecedent, eq(1n, 1n))), mp = A.mp(premise, arrow);
  const gen = A.gen(A.gen(mp, 1n), 9n); // The second binder is absent from its premise.
  const open = A.pc([gen], imp(eq(2n, 2n), A.at(gen))); A.ee(open, 2n);
  const sourceProof = P.pack(A.q.map(P.record)); assert(verifyZF(sourceProof, P.num(A.at(A.q.length - 1))));
  const buildInputs = d => {
    const domainCode = P.num(d), ctx = transportContext(domainCode, sourceProof), N = assembler();
    let witness;
    if (d[0] === 'eq') witness = N.reflex(0n);
    else { const inner = ctx.domain(0n), h = inner[1]; witness = N.mp(N.reflex(0n), N.ei(inner[2], h, 0n)); }
    N.mp(witness, N.ei(ctx.domain(0n), 0n));
    const nonemptyProof = P.pack(N.q.map(P.record)); assert(verifyZF(nonemptyProof, P.num(ctx.nonempty)));
    const leafProofs = ctx.source.map(([f, tag, ann]) => {
      if (tag > 6) return 0n;
      const L = assembler();
      if (tag === 5) L.pc([L.reflex(ann[0])], ctx.guarded(f)); else { assert.equal(tag, 1); L.ax(ctx.guarded(f)); }
      const code = P.pack(L.q.map(P.record)); assert(verifyZF(code, P.num(ctx.guarded(f)))); return code;
    });
    return { domainCode, ctx, leafProofs, nonemptyProof };
  };
  const cases = []; let finalResult;
  for (const domain of [eq(0n, 0n), ex(1n, eq(0n, 1n))]) {
    const data = buildInputs(domain), result = transportProof(data.domainCode, sourceProof, P.pack(data.leafProofs), data.nonemptyProof);
    assert(result !== 0n && verifyZF(result.code, result.endpoint));
    assert(result.counters.guardsRemoved >= 2 && result.counters.generalization === 2 && result.counters.existentialElimination > 0);
    cases.push({ domain: domain[0], lines: result.lines.length, bits: result.code.toString(2).length, ...result.counters });
    finalResult = result;
  }
  const data = buildInputs(eq(0n, 0n));
  const certificate = P.pack([1n, P.num(eq(0n, 0n)), 0n]), schema = translateSchema(data.domainCode, certificate);
  const axiomSource = P.pack([P.record([schema.source, 0, D.list(certificate)])]);
  const axiomLeaf = schemaProof(data.domainCode, certificate, true);
  const inserted = transportProof(data.domainCode, axiomSource, P.pack([axiomLeaf.code]), data.nonemptyProof);
  assert(inserted !== 0n && verifyZF(inserted.code, inserted.endpoint));
  const repCertificate = P.pack([2n, P.num(eq(1n, 0n)), 0n, 1n]);
  const repSchema = translateSchema(data.domainCode, repCertificate), repLeaf = schemaProof(data.domainCode, repCertificate, true);
  const repSource = P.pack([P.record([repSchema.source, 0, D.list(repCertificate)])]);
  const repInserted = transportProof(data.domainCode, repSource, P.pack([repLeaf.code]), data.nonemptyProof);
  assert(repInserted !== 0n && verifyZF(repInserted.code, repInserted.endpoint));
  let rejections = 0;
  const reject = f => { assert.equal(f(), 0n); rejections++; };
  const input = P.pack(data.leafProofs);
  reject(() => transportProof(0n, sourceProof, input, data.nonemptyProof));
  reject(() => transportProof(data.domainCode, 0n, input, data.nonemptyProof));
  reject(() => transportProof(data.domainCode, sourceProof, input, 0n));
  reject(() => transportProof(data.domainCode, sourceProof, input, data.leafProofs[0]));
  const missing = [...data.leafProofs]; missing[0] = 0n;
  reject(() => transportProof(data.domainCode, sourceProof, P.pack(missing), data.nonemptyProof));
  const swapped = [...data.leafProofs]; swapped[0] = data.leafProofs[1];
  reject(() => transportProof(data.domainCode, sourceProof, P.pack(swapped), data.nonemptyProof));
  reject(() => transportProof(data.domainCode, sourceProof, P.pack(data.leafProofs.slice(1)), data.nonemptyProof));
  const extra = [...data.leafProofs]; extra[A.q.findIndex(l => l[1] === 7)] = data.leafProofs[0];
  reject(() => transportProof(data.domainCode, sourceProof, P.pack(extra), data.nonemptyProof));
  const nonidentity = P.pack([1n, P.num(mem(0n, 0n)), 0n]), unsupported = translateSchema(data.domainCode, nonidentity);
  reject(() => transportProof(data.domainCode, P.pack([P.record([unsupported.source, 0, D.list(nonidentity)])]), P.pack([axiomLeaf.code]), data.nonemptyProof));
  const q = finalResult.lines, clone = () => q.map(l => [l[0], l[1], [...l[2]]]);
  const badMP = clone(), j = q.findIndex(l => l[1] === 7); badMP[j][2][0] = j;
  assert(!verifyZF(P.pack(badMP.map(P.record)), finalResult.endpoint)); rejections++;
  const badEE = clone(), k = q.findIndex(l => l[1] === 9 && fv(l[0][1][2][1]).size);
  const oldPremise = q[q[k][2][0]][0], consequent = oldPremise[1][2][1], forbidden = [...fv(consequent)][0];
  badEE[k] = [imp(ex(forbidden, oldPremise[1][1]), consequent), 9, [q[k][2][0], forbidden]];
  assert(!verifyZF(P.pack(badEE.map(P.record)), finalResult.endpoint)); rejections++;
  assert(!verifyZF(finalResult.code, P.num(eq(0n, 1n)))); rejections++;
  console.log(JSON.stringify({ cases, canonicalAxiomInsertions: 2, rejections,
    boundary: 'All three inference rules transported with exact verified leaf and nonempty-domain proofs. No selected constructibility D or arbitrary L-schema leaf constructor; no executed PA proof.' }, null, 2));
}
if (process.argv[1] === fileURLToPath(import.meta.url)) tests();
