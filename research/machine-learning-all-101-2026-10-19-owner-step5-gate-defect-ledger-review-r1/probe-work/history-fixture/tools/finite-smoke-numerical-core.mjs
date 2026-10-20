// Proposed bounded-fixture helpers. No repository state or source loading.
const gcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
export function q(n, d = 1) {
  if (n && typeof n === 'object' && 'n' in n) return n;
  n = BigInt(n); d = BigInt(d);
  if (!d) throw new RangeError('zero rational denominator');
  if (d < 0n) { n = -n; d = -d; }
  const g = gcd(n, d); return { n: n / g, d: d / g };
}
export const qadd = (a, b) => { a = q(a); b = q(b); return q(a.n * b.d + b.n * a.d, a.d * b.d); };
export const qneg = a => { a = q(a); return q(-a.n, a.d); };
export const qsub = (a, b) => qadd(a, qneg(b));
export const qmul = (a, b) => { a = q(a); b = q(b); return q(a.n * b.n, a.d * b.d); };
export const qdiv = (a, b) => { a = q(a); b = q(b); return q(a.n * b.d, a.d * b.n); };
export const qcmp = (a, b) => { a = q(a); b = q(b); const z = a.n * b.d - b.n * a.d; return z < 0n ? -1 : z > 0n ? 1 : 0; };
export const qnum = a => { a = q(a); return Number(a.n) / Number(a.d); };
export const qstr = a => { a = q(a); return a.d === 1n ? String(a.n) : `${a.n}/${a.d}`; };
export const close = (a, b, tolerance = 1e-11) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(a), Math.abs(b));
export const identity = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => Number(i === j)));
export const matVec = (A, x) => A.map(row => row.reduce((s, a, j) => s + a * x[j], 0));
export const matrixMultiply = (A, B) => A.map(row => B[0].map((_, j) => row.reduce((s, a, k) => s + a * B[k][j], 0)));
export const vectorNorm = x => Math.hypot(...x);
export const frobeniusNorm = A => Math.hypot(...A.flat());
export function solveDense(A, b) {
  const n = A.length;
  if (!n || b.length !== n || A.some(r => r.length !== n) || ![...A.flat(), ...b].every(Number.isFinite)) throw new RangeError('finite nonempty square fixture required');
  const a = A.map((r, i) => [...r, b[i]]);
  for (let k = 0; k < n; k++) {
    let p = k; for (let i = k + 1; i < n; i++) if (Math.abs(a[i][k]) > Math.abs(a[p][k])) p = i;
    if (a[p][k] === 0) return { status: 'singular', x: null };
    [a[p], a[k]] = [a[k], a[p]];
    for (let i = k + 1; i < n; i++) { const r = a[i][k] / a[k][k]; for (let j = k; j <= n; j++) a[i][j] -= r * a[k][j]; }
  }
  const x = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) x[i] = (a[i][n] - a[i].slice(i + 1, n).reduce((s, v, j) => s + v * x[i + 1 + j], 0)) / a[i][i];
  return { status: 'success', x };
}

// Exact finite binary normal-format rounding for rational fixture operations.
// Exponent bounds are on the leading power of two. No subnormals: fail first.
export function createBinaryArithmetic({ precision = 16, minExponent = -32, maxExponent = 32 } = {}) {
  if (!Number.isInteger(precision) || precision < 2 || precision > 32 || !Number.isInteger(minExponent) || !Number.isInteger(maxExponent) || minExponent >= maxExponent) throw new RangeError('invalid bounded binary format');
  const counters = { rounded: 0, failed: 0 };
  const power = e => e >= 0 ? q(1n << BigInt(e)) : q(1, 1n << BigInt(-e));
  const fail = () => { counters.failed++; return { status: 'range-failure' }; };
  function round(a) {
    counters.rounded++; a = q(a); if (!a.n) return { status: 'success', value: a };
    const sign = a.n < 0n ? -1n : 1n, abs = q(a.n * sign, a.d);
    let e = abs.n.toString(2).length - abs.d.toString(2).length;
    if (qcmp(abs, power(e)) < 0) e--;
    if (e < minExponent || e > maxExponent) return fail();
    const unit = power(e - precision + 1), scaled = qdiv(abs, unit);
    let k = scaled.n / scaled.d; const rem = scaled.n % scaled.d;
    if (2n * rem > scaled.d || (2n * rem === scaled.d && k % 2n)) k++;
    const value = qmul(q(sign * k), unit);
    if (qcmp(q(sign * value.n, value.d), power(maxExponent + 1)) >= 0) return fail();
    return { status: 'success', value };
  }
  const binary = fn => (a, b) => { try { return round(fn(a, b)); } catch { return fail(); } };
  const store = a => { const z = round(a); return z.status === 'success' && qcmp(z.value, a) === 0 ? { status: 'success', value: q(a) } : { status: 'representation-unavailable' }; };
  return { round, store, add: binary(qadd), sub: binary(qsub), mul: binary(qmul), div: binary(qdiv), counters, unitRoundoff: 2 ** -precision };
}
