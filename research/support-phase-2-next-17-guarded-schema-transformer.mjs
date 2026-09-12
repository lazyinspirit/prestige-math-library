import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { verifyZF, axiomCertificate } from './support-phase-2-next-17-zf-axiom-operation-kernel.mjs';
import { appendDependencyClosure } from './support-phase-2-next-17-update-existence-proof.mjs';

const read = name => readFileSync(new URL(name, import.meta.url), 'utf8');
const fence = name => read(name).match(/```javascript\n([\s\S]*?)\n```/)[1];
const old = fence('./support-phase-2-next-17-annotated-separation-adapter.md');
const P = new Function(old.slice(0, old.indexOf('let cases=0;')) + '\nreturn {pack,num,record};')();
const D = new Function(fence('./support-phase-2-next-17-numerical-logical-proof-decoder.md') + '\nreturn makeNumericalLogicalDecoder();')();
const kernel = read('./support-phase-2-next-17-zf-axiom-operation-kernel.mjs');
const F = new Function('assert', kernel.slice(kernel.indexOf('const nat ='), kernel.indexOf('const fixed ='))
  + kernel.slice(kernel.indexOf('function arrow('), kernel.indexOf('export function verifyZF'))
  + kernel.slice(kernel.indexOf('function skeleton('), kernel.indexOf('const empty ='))
  + '\nreturn {eq,mem,neg,and,ex,imp,all,iff,variables,fv,sub,same,fresh,separation,replacement,assembler};')(assert);
const { eq, mem, neg, and, ex, imp, all, iff, variables, fv, sub, same, fresh, separation, replacement } = F;

// One normalized D body is shared by separate scopes; its binders avoid ALL source indices.
function normalizeDomain(d, source) {
  let next = [...variables(d), ...variables(source)].reduce((m, x) => x > m ? x : m, 0n) + 1n;
  function go(f, env) {
    if (f[0] === 'eq' || f[0] === 'rel') return [f[0], env.get(f[1]) ?? f[1], env.get(f[2]) ?? f[2]];
    if (f[0] === 'neg') return neg(go(f[1], env));
    if (f[0] === 'and') return and(go(f[1], env), go(f[2], env));
    const y = next++, child = new Map(env); child.set(f[1], y);
    return ex(y, go(f[2], child));
  }
  return go(d, new Map());
}
function translation(source, d) {
  const base = normalizeDomain(d, source), domain = i => sub(base, 0n, i);
  function raw(f) {
    if (f[0] === 'eq' || f[0] === 'rel') return f;
    if (f[0] === 'neg') return neg(raw(f[1]));
    if (f[0] === 'and') return and(raw(f[1]), raw(f[2]));
    return ex(f[1], and(domain(f[1]), raw(f[2])));
  }
  const guardFor = f => {
    const free = [...fv(f)].sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    return free.length ? free.map(domain).reduceRight((r, x) => r === null ? x : and(x, r), null) : all(0n, eq(0n, 0n));
  };
  const guard = guardFor(source);
  return { raw, domain, guard, guardFor, target: raw(source), guarded: imp(guard, raw(source)) };
}

// Total on numerical inputs: malformed inputs return null. All valid Sep/Rep matrices translate.
export function translateSchema(domainCode, certificate) {
  try {
    if (typeof domainCode !== 'bigint' || domainCode < 0n || typeof certificate !== 'bigint' || certificate < 0n) return null;
    const d = D.parse(domainCode); if (d === null || [...fv(d)].some(x => x !== 0n)) return null;
    const c = D.list(certificate), kind = c[0];
    if (!((kind === 1n && c.length === 3) || (kind === 2n && c.length === 4))) return null;
    const phi = D.parse(c[1]); if (phi === null) return null;
    const source = kind === 1n ? separation(phi, c[2]) : replacement(phi, c[2], c[3]);
    assert(axiomCertificate(P.num(source), certificate));
    const t = translation(source, d); assert.equal(fv(t.target).size, 0);
    return { ...t, source, matrix: phi, designated: c.slice(2), kind, domainCode, certificate,
      sourceCode: P.num(source), rawCode: P.num(t.target), guardedCode: P.num(t.guarded),
      matrixRawCode: P.num(t.raw(phi)), matrixGuardedCode: P.num(imp(t.guardFor(phi), t.raw(phi))) };
  } catch { return null; }
}

function assembler() {
  const A = F.assembler();
  A.reflex = x => A.add(eq(x, x), 5, [x]);
  A.ei = (body, x, y = x) => A.add(imp(sub(body, x, y), ex(x, body)), 4, [body, x, y]);
  A.ee = (p, x) => {
    const f = A.at(p), a = f[1][1], b = f[1][2][1];
    assert(!fv(b).has(x)); return A.add(imp(ex(x, a), b), 9, [p, x]);
  };
  A.nex = (p, x) => {
    const f = A.at(p); assert.equal(f[0], 'neg'); const a = f[1];
    const g = A.gen(p, x), lifted = A.em(A.ax(imp(a, neg(neg(a)))), x);
    return A.pc([g, lifted], neg(ex(x, a)));
  };
  return A;
}
function compileSeparation(t) {
  const [z] = t.designated, used = new Set([...variables(t.matrix), z]);
  const a = fresh(used); used.add(a); const b = fresh(used), A = assembler(), d = t.domain;
  const theta = iff(mem(z, b), and(mem(z, a), eq(z, z)));
  const atA = sub(theta, b, a), reflex = A.reflex(z), point = A.pc([reflex], atA);
  const restricted = A.nex(A.pc([point], neg(and(d(z), neg(atA)))), z);
  const body = and(d(b), neg(ex(z, and(d(z), neg(theta)))));
  const choose = A.pc([restricted, A.ei(body, b, a)], imp(d(a), ex(b, body)));
  A.nex(A.pc([choose], neg(and(d(a), neg(ex(b, body))))), a);
  return A;
}
function compileReplacementIdentity(t) {
  const [z, w] = t.designated, used = new Set([...variables(t.matrix), z, w]);
  const a = fresh(used); used.add(a); const b = fresh(used), A = assembler(), d = t.domain;
  const h = [...variables(t.target)].reduce((m, x) => x > m ? x : m, 0n) + 1n;
  const member = mem(w, a), bodyZ = and(d(z), and(mem(z, a), eq(w, z))), J = ex(z, bodyZ);
  // At a D-witness w, the image witness is z=w. No uniqueness premise is needed.
  const forward = A.pc([A.reflex(w), A.ei(bodyZ, z, w)], imp(d(w), imp(member, J)));
  const matrix = neg(mem(h, a));
  const transport = A.add(imp(eq(w, z), imp(sub(matrix, h, w), sub(matrix, h, z))), 6, [matrix, h, w, z]);
  const backwardsPoint = A.pc([transport], imp(bodyZ, member));
  const backward = A.ee(backwardsPoint, z);
  const point = A.pc([forward, backward], imp(d(w), iff(member, J)));
  const restricted = A.nex(A.pc([point], neg(and(d(w), neg(iff(member, J))))), w);
  const theta = iff(mem(w, b), J), bodyB = and(d(b), neg(ex(w, and(d(w), neg(theta)))));
  const conclusion = ex(b, bodyB);
  const choose = A.pc([restricted, A.ei(bodyB, b, a)], imp(d(a), conclusion));
  // Parse the literal outer forall a expansion to preserve all source uniqueness binders.
  const sourceMatrix = t.source[1][2][1];
  assert.equal(t.source[1][1], a);
  const translatedMatrix = t.raw(sourceMatrix);
  assert(same(translatedMatrix[1][2][1], conclusion));
  const weaken = A.pc([choose], imp(d(a), translatedMatrix));
  A.nex(A.pc([weaken], neg(and(d(a), neg(translatedMatrix)))), a);
  return A;
}

// Total restricted proof compiler. Unsupported matrices return 0n, never an alleged proof.
export function schemaProof(domainCode, certificate, guarded = false) {
  const t = translateSchema(domainCode, certificate); if (t === null || typeof guarded !== 'boolean') return 0n;
  const [z, w] = t.designated;
  const supported = t.kind === 1n ? same(t.matrix, eq(z, z)) : same(t.matrix, eq(w, z));
  if (!supported) return 0n;
  const A = t.kind === 1n ? compileSeparation(t) : compileReplacementIdentity(t);
  assert(same(A.at(A.q.length - 1), t.target));
  if (guarded) A.pc([A.q.length - 1], t.guarded);
  return { lines: A.q, code: P.pack(A.q.map(P.record)), endpoint: guarded ? t.guardedCode : t.rawCode, translation: t };
}

// A finite certified axiom list, NOT an arbitrary source derivation. No search on unsupported input.
export function schemaBatchProof(domainCode, certificateList, guarded = false) {
  try {
    if (typeof certificateList !== 'bigint' || certificateList < 0n || typeof guarded !== 'boolean') return 0n;
    const certificates = D.list(certificateList); if (!certificates.length) return 0n;
    const rows = [], endpoints = [];
    for (const certificate of certificates) {
      const p = schemaProof(domainCode, certificate, guarded); if (p === 0n) return 0n;
      const [endpoint] = appendDependencyClosure(rows, p.lines, [p.lines.length - 1]);
      endpoints.push(endpoint);
    }
    // Reused endpoints can be earlier than the final record: append a logical identity use.
    const A = assembler(); A.q.push(...rows);
    A.pc([endpoints.at(-1)], A.at(endpoints.at(-1)));
    return { lines: A.q, code: P.pack(A.q.map(P.record)), endpoints,
      endpoint: P.num(A.at(A.q.length - 1)) };
  } catch { return 0n; }
}
export const schemaProofCode = (d, c, guarded = false) => {
  const result = schemaProof(d, c, guarded); return result === 0n ? 0n : result.code;
};
export const schemaBatchProofCode = (d, cs, guarded = false) => {
  const result = schemaBatchProof(d, cs, guarded); return result === 0n ? 0n : result.code;
};

function tests() {
  let translated = 0, proofs = 0, rejections = 0, semanticComparisons = 0;
  const cases = [], cert = (tag, f, z, w) => P.pack(tag === 1n ? [tag, P.num(f), z] : [tag, P.num(f), z, w]);
  function evaluate(f, universe, relation, env) {
    if (f[0] === 'eq') return env.get(f[1]) === env.get(f[2]);
    if (f[0] === 'rel') return !!(relation & (1 << (2 * env.get(f[1]) + env.get(f[2]))));
    if (f[0] === 'neg') return !evaluate(f[1], universe, relation, env);
    if (f[0] === 'and') return evaluate(f[1], universe, relation, env) && evaluate(f[2], universe, relation, env);
    return universe.some(x => { const next = new Map(env); next.set(f[1], x); return evaluate(f[2], universe, relation, next); });
  }
  const domains = [eq(0n, 0n), neg(eq(0n, 0n)), ex(1n, mem(0n, 1n)), and(eq(0n, 0n), ex(0n, mem(0n, 0n)))];
  for (const domain of domains) for (const [z, w] of [[0n, 1n], [2n, 3n], [(1n << 80n) + 7n, 9n]]) {
    for (const phi of [eq(w, z), mem(z, w), ex(z, mem(z, w)), and(mem(z, w), ex(w, eq(w, w)))]) {
      for (const tag of [1n, 2n]) {
        const c = cert(tag, phi, z, w), t = translateSchema(P.num(domain), c);
        assert(t !== null); assert.equal(fv(t.target).size, 0);
        assert.deepEqual([...fv(D.parse(t.matrixRawCode))].sort(), [...fv(phi)].sort());
        assert(axiomCertificate(t.sourceCode, c)); translated++;
        for (let relation = 0; relation < 16; relation++) {
          const universe = [0, 1], subset = universe.filter(x => evaluate(domain, universe, relation, new Map([[0n, x]])));
          assert.equal(evaluate(t.target, universe, relation, new Map()), evaluate(t.source, subset, relation, new Map()));
          semanticComparisons++;
        }
      }
    }
  }
  for (const [domain, z, w] of [[domains[1], 0n, 1n], [domains[3], 0n, 1n],
    [domains[0], 2n, 3n], [domains[0], (1n << 80n) + 7n, 9n]]) {
    const p = schemaProof(P.num(domain), cert(2n, eq(w, z), z, w));
    assert(p !== 0n && verifyZF(p.code, p.endpoint)); proofs++;
  }
  // Independent explicit source endpoints exercise canonical uniqueness-variable freshness.
  const s = translateSchema(P.num(eq(0n, 0n)), cert(1n, eq(0n, 0n), 0n));
  assert(same(s.source, all(1n, ex(2n, all(0n, iff(mem(0n, 2n), and(mem(0n, 1n), eq(0n, 0n))))))));
  const r = translateSchema(P.num(eq(0n, 0n)), cert(2n, eq(1n, 0n), 0n, 1n));
  const unique = ex(1n, and(eq(1n, 0n), all(2n, imp(eq(2n, 0n), eq(2n, 1n)))));
  assert(same(r.source, all(2n, imp(all(0n, imp(mem(0n, 2n), unique)),
    ex(3n, all(1n, iff(mem(1n, 3n), ex(0n, and(mem(0n, 2n), eq(1n, 0n))))))))));
  const batch = schemaBatchProof(P.num(domains[0]), P.pack([s.certificate, r.certificate, s.certificate]));
  assert(batch !== 0n && verifyZF(batch.code, batch.endpoint));
  assert.equal(batch.endpoint, s.rawCode);
  assert(batch.endpoints[2] < batch.lines.length - 1);
  // Keep full serialized proof fixtures modest; large-index and binder hygiene are covered above.
  for (const domain of [domains[0], domains[2]]) for (const tag of [1n, 2n]) {
    const z = 0n, w = 1n, c = cert(tag, tag === 1n ? eq(z, z) : eq(w, z), z, w);
    for (const guarded of [false, true]) {
      const p = schemaProof(P.num(domain), c, guarded); assert(p !== 0n);
      assert(verifyZF(p.code, p.endpoint)); assert(p.lines.every(l => l[1] !== 0));
      cases.push({ kind: tag === 1n ? 'separation-identity' : 'replacement-identity', domain: domain[0], guarded,
        lines: p.lines.length, bits: p.code.toString(2).length }); proofs++;
    }
  }
  const bad = (label, f) => { assert(f(), label); rejections++; };
  bad('invalid domain code', () => translateSchema(0n, s.certificate) === null);
  bad('extra free domain parameter', () => translateSchema(P.num(mem(0n, 1n)), s.certificate) === null);
  bad('unknown certificate tag', () => translateSchema(P.num(domains[0]), P.pack([3n, 0n])) === null);
  bad('replacement coincident designated slots', () => translateSchema(P.num(domains[0]), cert(2n, eq(0n, 0n), 0n, 0n)) === null);
  bad('unsupported matrix fails closed', () => schemaProof(P.num(domains[0]), cert(2n, mem(0n, 1n), 0n, 1n)) === 0n);
  bad('unsupported member fails entire batch closed', () => schemaBatchProof(P.num(domains[0]),
    P.pack([s.certificate, cert(2n, mem(0n, 1n), 0n, 1n)])) === 0n);
  bad('empty batch has no theorem endpoint', () => schemaBatchProof(P.num(domains[0]), P.pack([])) === 0n);
  const p = schemaProof(P.num(domains[0]), r.certificate), rows = p.lines.map(l => [l[0], l[1], [...l[2]]]);
  const mp = rows.findIndex(l => l[1] === 7), mutated = rows.map(l => [l[0], l[1], [...l[2]]]);
  mutated[mp][2][0] = mp;
  bad('MP self-reference', () => !verifyZF(P.pack(mutated.map(P.record)), p.endpoint));
  const ee = rows.findIndex(l => l[1] === 9 && fv(l[0][1][2][1]).size > 0);
  const mutation = rows.map(l => [l[0], l[1], [...l[2]]]), premise = rows[rows[ee][2][0]][0];
  const consequent = premise[1][2][1], forbidden = [...fv(consequent)][0];
  mutation[ee] = [imp(ex(forbidden, premise[1][1]), consequent), 9, [rows[ee][2][0], forbidden]];
  bad('EE free-variable side condition', () => !verifyZF(P.pack(mutation.map(P.record)), p.endpoint));
  bad('wrong requested endpoint', () => !verifyZF(p.code, s.rawCode));
  console.log(JSON.stringify({ translated, semanticComparisons, proofs, batchLines: batch.lines.length, batchBits: batch.code.toString(2).length, rejections, cases,
    boundary: 'General Sep/Rep formula translation; proof transformer only for Sep(z=z) and Rep(w=z), for arbitrary one-free-variable domains. No general L axiom constructor, GCH certificate, or executed PA verification.' }, null, 2));
}
if (process.argv[1] === fileURLToPath(import.meta.url)) tests();
