#!/usr/bin/env node
// Exact coefficient certificate for the Jordan identity on H_3(O).
// All arithmetic is BigInt over the signed integral basis multiplication table.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const ZERO4 = () => [0n, 0n, 0n, 0n];
const ZERO8 = () => [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n];
const qadd = (x, y) => x.map((a, i) => a + y[i]);
const qsub = (x, y) => x.map((a, i) => a - y[i]);
const qbar = x => [x[0], -x[1], -x[2], -x[3]];
function qmul(x, y) {
  const [a, b, c, d] = x, [e, f, g, h] = y;
  return [
    a*e - b*f - c*g - d*h,
    a*f + b*e + c*h - d*g,
    a*g - b*h + c*e + d*f,
    a*h + b*g - c*f + d*e,
  ];
}
const oPair = (a, b) => [...a, ...b];
function oMul(x, y) {
  const a = x.slice(0, 4), b = x.slice(4, 8);
  const c = y.slice(0, 4), d = y.slice(4, 8);
  return oPair(qsub(qmul(a, c), qmul(qbar(d), b)),
    qadd(qmul(d, a), qmul(b, qbar(c))));
}
const oBar = x => oPair(qbar(x.slice(0, 4)), x.slice(4, 8).map(a => -a));
const oAdd = (x, y) => x.map((a, i) => a + y[i]);
const oZero = x => x.every(a => a === 0n);
const unit4 = i => [0, 1, 2, 3].map(j => i === j ? 1n : 0n);
const oBasis = [
  oPair(unit4(0), ZERO4()), oPair(unit4(1), ZERO4()),
  oPair(unit4(2), ZERO4()), oPair(unit4(3), ZERO4()),
  oPair(ZERO4(), unit4(0)), oPair(ZERO4(), unit4(1)),
  oPair(ZERO4(), unit4(2)), oPair(ZERO4(), unit4(3)),
];
const mZero = () => Array.from({ length: 3 }, () => Array.from({ length: 3 }, ZERO8));
const mAdd = (X, Y) => X.map((row, i) => row.map((x, j) => oAdd(x, Y[i][j])));
function mMul(X, Y) {
  const Z = mZero();
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++)
    for (let r = 0; r < 3; r++) Z[i][j] = oAdd(Z[i][j], oMul(X[i][r], Y[r][j]));
  return Z;
}
const dMat = (X, Y) => mAdd(mMul(X, Y), mMul(Y, X)); // D(X,Y)=XY+YX
function hermitianBasis(n) {
  const X = mZero();
  if (n < 3) { X[n][n][0] = 1n; return X; }
  const slot = Math.floor((n - 3) / 8), u = oBasis[(n - 3) % 8];
  if (slot === 0) { X[0][1] = u; X[1][0] = oBar(u); }
  if (slot === 1) { X[1][2] = u; X[2][1] = oBar(u); }
  if (slot === 2) { X[2][0] = u; X[0][2] = oBar(u); }
  return X;
}
function encodeHermitian(X) {
  for (let i = 0; i < 3; i++) {
    if (X[i][i].slice(1).some(a => a !== 0n)) throw Error('non-real diagonal in a symmetrized product');
    for (let j = 0; j < 3; j++) {
      const expected = oBar(X[j][i]);
      if (X[i][j].some((a, r) => a !== expected[r])) throw Error('non-Hermitian symmetrized product');
    }
  }
  return [X[0][0][0], X[1][1][0], X[2][2][0],
    ...X[0][1], ...X[1][2], ...X[2][0]];
}
const N = 27, zeroV = () => Array(N).fill(0n);
const basis = Array.from({ length: N }, (_, i) => hermitianBasis(i));
const D = Array.from({ length: N }, (_, i) =>
  Array.from({ length: N }, (_, j) => encodeHermitian(dMat(basis[i], basis[j]))));
function dBasis(i, y) {
  const out = zeroV();
  for (let j = 0; j < N; j++) if (y[j] !== 0n)
    for (let r = 0; r < N; r++) out[r] += y[j] * D[i][j][r];
  return out;
}
function dGeneral(x, y) {
  const out = zeroV();
  for (let i = 0; i < N; i++) if (x[i] !== 0n)
    for (let j = 0; j < N; j++) if (y[j] !== 0n)
      for (let r = 0; r < N; r++) out[r] += x[i] * y[j] * D[i][j][r];
  return out;
}
function uniquePermutations(i, j, k) {
  const rows = [[i,j,k],[i,k,j],[j,i,k],[j,k,i],[k,i,j],[k,j,i]];
  const seen = new Set();
  return rows.filter(row => { const key=row.join(','); if(seen.has(key)) return false; seen.add(key); return true; });
}
function basisProductsMatchConvention() {
  const I=oBasis[1], J=oBasis[2], K=oBasis[3], ell=oBasis[4];
  const IJ=oMul(I,J), KELL=oMul(K,ell), JELL=oMul(J,ell);
  const left=mulPair(IJ,ell), right=mulPair(I,JELL);
  return { ij_is_k: IJ.every((x,i)=>x===K[i]),
    ij_ell_is_kell: left.every((x,i)=>x===KELL[i]),
    i_jell_is_minus_kell: right.every((x,i)=>x===-KELL[i]) };
}
function mulPair(x,y) { return oMul(x,y); }
const convention = basisProductsMatchConvention();
if (!Object.values(convention).every(Boolean)) throw Error('Cayley-Dickson basis convention mismatch');

let monomials = 0, coefficientCoordinates = 0, nonzero = 0, firstFailure = null;
for (let i = 0; i < N; i++) for (let j = i; j < N; j++) for (let k = j; k < N; k++) {
  const permutations = uniquePermutations(i, j, k);
  for (let ell = 0; ell < N; ell++) {
    const coefficient = zeroV();
    for (const [p, q, r] of permutations) {
      const pq = D[p][q];
      const nested = dBasis(ell, pq);
      const left = dBasis(r, nested);
      const right = dGeneral(D[r][ell], pq);
      for (let s = 0; s < N; s++) coefficient[s] += left[s] - right[s];
    }
    monomials++;
    coefficientCoordinates += N;
    const bad = coefficient.findIndex(x => x !== 0n);
    if (bad >= 0) { nonzero++; if (!firstFailure) firstFailure={x_monomial:[i,j,k],y_basis:ell,output_coordinate:bad,value:String(coefficient[bad])}; }
  }
}
const report = {
  kind: 'exact-finite-coefficient-proof',
  statement: 'The symmetrized product on the real Hermitian 3x3 octonion matrices satisfies the Jordan identity.',
  octonion_model: 'O=H x H with (a,b)(c,d)=(ac-conj(d)b, da+b conj(c)); basis 1,i,j,k,ell,iell,jell,kell.',
  matrix_basis: '3 diagonal units, plus 8 octonion coordinates in each of the Hermitian (1,2), (2,3), and (3,1) slots.',
  scaled_identity: 'For D(X,Y)=XY+YX and m=D/2, 8*(m(X,m(Y,m(X,X)))-m(m(X,Y),m(X,X))) = D(X,D(Y,D(X,X)))-D(D(X,Y),D(X,X)).',
  arithmetic: 'BigInt exact integer arithmetic; no floating-point operations.',
  basis_products_checked_for_hermitian_closure: N*N,
  octonion_convention_witness: convention,
  x_monomials_of_degree_three_times_y_coordinates_checked: monomials,
  output_coordinate_coefficients_checked: coefficientCoordinates,
  nonzero_coefficients: nonzero,
  first_nonzero: firstFailure,
  result: nonzero === 0 ? 'passed' : 'failed',
};
const here = fileURLToPath(new URL('.', import.meta.url));
fs.writeFileSync(new URL('albert-jordan-identity-check.json', import.meta.url), JSON.stringify(report, null, 2)+'\n');
console.log(JSON.stringify(report,null,2));
if (nonzero !== 0) process.exitCode=1;
