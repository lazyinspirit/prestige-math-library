---
id: alg-finite-budget-qz-iteration-with-deflation-and-residual
kind: algorithm
title: "Finite-budget QZ iteration with homogeneous status and residual output"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-regular-generalized-eigenvalue-pencil
  - def-generalized-schur-form
  - def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices
  - def-triangular-and-diagonal-matrices-over-a-commutative-ring
  - alg-generalized-hessenberg-triangular-reduction
  - prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-rounded-linear-and-normal-residual-certificates
  - alg-scaled-complex-householder-and-givens-updates
  - lem-qz-two-sided-local-computed-update-bound
justified_by:
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Daniel Kressner, Numerical Methods and Software for General and Structured Eigenvalue Problems (PhD dissertation, 2004), Chapter 2: The QZ Algorithm, §§3.1–3.5"
      url: "https://pages.mtu.edu/~struther/Courses/OLD/Other/Sp2012/5627/BlockQR/Work/kressner_daniel.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§12.8–12.9"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "LAPACK Users' Guide, Generalized Nonsymmetric Eigenproblems"
      url: "https://www.netlib.org/lapack/lug/node35.html"
---

## Definition

Input a regular pencil $(A,B)$ with $A,B\in\mathbb C^{n\times n}$,
$n\ge1$, a nonnegative integer sweep budget $N$, and a finite stored real tolerance
$\tau\ge0$. Real input data are embedded in $\mathbb C$. Scalar updates of the
stored matrices use the operationwise model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
Use zero-based matrix indices throughout. Each active block $[a:b]$ includes
both endpoints; its relative coordinate $0$ is global index $a$.
Use the canonical stored Givens generator and application order of
[[alg-scaled-complex-householder-and-givens-updates]], with the common-pair
orientations and explicit coefficients $v,h,\eta$ of
[[lem-qz-two-sided-local-computed-update-bound]]. Generate each rotation ONCE
and apply its same stored coefficients to BOTH matrices. Retain the exact
normalized unitary representatives as product records, never as purported
stored dense unitary matrices. Left rotations annihilate a column's second
entry; right rotations annihilating a row's first entry use the coordinate
reversal/adjoint construction of that lemma. After each genuine matrix target
application write only its intended target to exact zero and include that
write in the local coefficient $\eta$. An external-vector application has
coefficient $v$ and no matrix-target overwrite. Local roundoff certification
requires $0<u<1$; otherwise retain diagnostics with `certificate-inconclusive`. Record each elementary
rotation separately. If the source cannot produce its admissible factor,
return `range-failure` or `certificate-inconclusive` with diagnostics.

1. Execute the finite index loops of
[[alg-generalized-hessenberg-triangular-reduction]] with these COMPUTED common
rotations: triangularize $B$ with left targets $B_{i,j}$; then reduce $A$ with
left targets $A_{i,j}$ followed by right targets $B_{i,i-1}$. Every application
updates both whole arrays. The exact initializer and
[[prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence]]
supply the index schedule and support induction, not exact rounded
reconstruction. Retain each local factor and residual defined against its
exact representative. Include structural target writes in that local
arithmetic residual. Record all OTHER explicit zero writes separately: their
post-action perturbations are pulled back by the local factor adjoints before
entering the pre-action $D_j^A,D_j^B$ ledger. A pure tolerance write is an
identity-factor stage. Never count a structural write twice.

Initialize the sweep counter to zero. Process active blocks in increasing first
index, splitting them at exact zero subdiagonals of $H$. In each deflation
pass execute step 2, then repeat step 3 for the smallest available non-isolated
zero diagonal of $T$ until none remains or a status exits. Then run step 5; if
it returns a status, stop. Otherwise, if the sweep counter equals $N$, return
`budget-exhausted`. If not, increment the counter, execute step 4 on all
remaining active blocks, and repeat the deflation pass. In particular $N=0$
permits initialization/deflation but no step-4 sweep.

2. On each active block $H_{a:b,a:b},T_{a:b,a:b}$, apply the following deflation
tests before a sweep. For $i=a,\ldots,b-1$, set $H_{i+1,i}$ to zero when
$$|H_{i+1,i}|\le\tau\bigl(|H_{i,i}|+|H_{i+1,i+1}|\bigr),$$
and record the negative of its old value at that position in $D^A$, with
all other entries zero. For $k=a,\ldots,b$, set $T_{k,k}$ to zero when
$$|T_{k,k}|\le\tau\bigl(|T_{k-1,k}|+|T_{k,k+1}|\bigr),$$
using zero for a missing boundary term outside the active block, and record the
negative of the old value at that position in $D^B$, with all other entries zero.
Treat each write as a separate identity-factor stage, so the new matrix is
the old matrix plus its recorded perturbation.
Evaluate each displayed modulus by the canonical rounded scaled two-component
norm; evaluate its additions and tolerance product with the declared rounded
real operations, then compare the stored finite values exactly. Excluded
operations return `range-failure`. The tests mean these rounded comparisons,
not an assertion about exact moduli at the threshold. Save the actual old
entries, so their deflation perturbations remain exact regardless of the test.
A one-by-one diagonal pair at $k$ is isolated when $H_{k,k-1}=0$ and
$H_{k+1,k}=0$, omitting a boundary entry when $k=a$ or $k=b$. If it has
$T_{k,k}=0$ and $H_{k,k}\ne0$, report an infinite candidate for the computed pencil and deflate it
from the active block. If the isolated diagonal pair is $(0,0)$, return
`singular-pencil-suspected` without assigning an eigenvalue.

3. To move a non-isolated zero $T_{k,k}$ to the top of its active block, for
$j=k-1,k-2,\ldots,a$ generate a right factor from the row pair
$(T_{j,j},T_{j,j+1})$ and apply it to columns $j,j+1$, setting $T_{j,j}$ to
zero. Then, when $j+2\le b$, generate a left factor from
$(H_{j+1,j},H_{j+2,j})$ and apply it to rows $j+1,j+2$, setting the resulting
bulge $H_{j+2,j}$ to zero. Finally, when $a<b$, generate a left factor from
$(H_{a,a},H_{a+1,a})$ and apply it to rows $a,a+1$, setting $H_{a+1,a}$ to
zero. Record all rounded update residuals and target writes. If this isolates
$(H_{a,a},T_{a,a})=(h,0)$ with $h\ne0$, report the infinite candidate and
remove the first row/column from the active block.
If the isolated pair is $(0,0)$, return `singular-pencil-suspected`; if isolation
fails, return `certificate-inconclusive`. Each successful isolation removes
one index, so at most $n$ such removals occur.

4. For each remaining active block with more than one row in the current
sweep, choose the homogeneous shift $[\alpha:\beta]=[H_{b,b}:T_{b,b}]$ if this pair is nonzero and
$T_{b,b}\ne0$; if $T_{b,b}=0$, use $[0:1]$. Write
$\widehat H=H_{a:b,a:b}$ and $\widehat T=T_{a:b,a:b}$, with relative indices
$0,\ldots,b-a$, and form
$$x=(\beta\widehat H-\alpha\widehat T)e_0.$$
Compute $x_0,x_1$ using the declared rounded complex products/subtractions and
generate a left factor from $(x_0,x_1)$. Apply it to relative rows $0,1$ of
both matrices without a matrix-target overwrite. Its rounding changes the
selected factor, not its application certificate. Generate a right factor
from the row pair $(\widehat T_{1,0},\widehat T_{1,1})$ and apply it to relative
columns $0,1$, setting $\widehat T_{1,0}$ to zero. For relative
$j=1,\ldots,b-a-1$, generate a left factor from
$(\widehat H_{j,j-1},\widehat H_{j+1,j-1})$ and apply it to rows $j,j+1$,
setting the current Hessenberg bulge $\widehat H_{j+1,j-1}$ to zero; then
generate a right factor from $(\widehat T_{j+1,j},\widehat T_{j+1,j+1})$ and
apply it to columns $j,j+1$, setting $\widehat T_{j+1,j}$ to zero. Update and
retain the products $Q,Z$; record every local residual including its
structural target write. Apply the embedded transformations to the entire
pair, retaining the transformed off-block data. All divisions by a generalized
eigenvalue ratio are avoided.

5. After each infinite isolation and before every successful return, scan all
isolated diagonal pairs. Any $(0,0)$ pair returns `singular-pencil-suspected`
without an eigenvalue. Stop with `qz-computed` only when $H$ is upper triangular
and every diagonal pair is nonzero. Otherwise stop after $N$ sweeps with
`budget-exhausted`. Range failures return `range-failure` with partial factors;
unavailable local certificates return `certificate-inconclusive`. Neither a
rounded diagnostic nor a tolerance-induced infinite candidate asserts an exact
infinite eigenvalue of the original pencil.

For local-accumulation bounds use $\ell_j=\eta$ for matrix-target actions and
$\ell_j=v$ for external-vector/raw actions, plus the separately saved actual
tolerance perturbations. For an independent residual certificate execute the
factor-action/column procedure of
[[lem-qz-two-sided-local-computed-update-bound]]: use stored raw kernels without
zero overwrites, propagate their $v$ allowances, use
[[lem-rounded-linear-and-normal-residual-certificates]] only on STORED matvec
inputs, and include the final subtraction allowance. Exact normalized factor
entries are not silently treated as stored inputs. Evaluate each certificate
using the finite exact real-controller expression trees/loops in the local
lemma and component absolute sums as norm upper bounds. Controller operations
are separate from rounded update arithmetic; for rational/binary stored data
and rational $u$ this is exact rational computation. No opaque certification
oracle is used. Failure of this residual route's dimension/range hypotheses
makes that route inconclusive and does not invalidate a valid independent
local-accumulation bound. Always retain available diagnostics.

The output is $(Q,S,T,Z,\text{status})$, where $S$ is the current $H$ and $T$
is the current second matrix, the exact factor products when available, the raw
residuals $R_A=Q^*AZ-S$ and $R_B=Q^*BZ-T$, and the recorded local arithmetic
and deflation perturbations. The procedure asserts no
unconditional convergence or small-roundoff bound.
