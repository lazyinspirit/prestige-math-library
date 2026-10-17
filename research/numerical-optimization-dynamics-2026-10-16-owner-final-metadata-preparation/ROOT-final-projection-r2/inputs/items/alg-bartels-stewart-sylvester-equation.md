---
id: alg-bartels-stewart-sylvester-equation
kind: algorithm
title: "Finite-budget Bartels-Stewart solve for a Sylvester equation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-sylvester-operator-and-separation-number
  - thm-sylvester-unique-solvability-spectral-separation
  - alg-finite-budget-francis-schur-reduction
  - def-real-and-complex-schur-forms
  - lem-sylvester-vectorization-isometry-and-kronecker-identity
  - lem-small-block-determinant-separation-lower-bound
  - lem-adjugate-inverse-formula-over-a-field
  - def-exact-real-2x2-discriminant-sign-predicate
  - lem-exact-rational-two-by-two-discriminant-sign
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Definition

Let $F\in\{\mathbb R,\mathbb C\}$, $m,n\ge1$, $A\in F^{m\times m}$, $B\in F^{n\times n}$ and $C\in F^{m\times n}$. Inputs also include a pivot threshold $\tau\ge0$, Schur controls for each matrix, a fixed constant $c_0>0$, and finite sweep budgets $N_A\le c_0m$, $N_B\le c_0n$. The local transforms, certificate checks and block substitution use exact scalar arithmetic and comparisons. The delegated Schur calls retain their specified rounded arithmetic, admissible input representations, range conditions and statuses; their returned factors remain candidates until the exact checks below succeed.

The default real-block sign controller is the fixed exact real-arithmetic expression tree $s=(a-d)^2+4bc$, followed by its sign comparisons, for [[def-exact-real-2x2-discriminant-sign-predicate]]. This uses five exact arithmetic operations and at most two sign comparisons in the declared exact local arithmetic model. For rational/dyadic encoded stored values, [[lem-exact-rational-two-by-two-discriminant-sign]] gives the finite exact integer realization; a fixed-format decoder, when used, is included in the control cost. These exact controller operations are separate from the rounded Schur matrix updates. No bit-complexity bound for integer/rational arithmetic is claimed.

Choose either bounded-controller mode, the default, or arbitrary-terminating-controller mode. In bounded mode supply a nonnegative integer per-call budget $K$. Custom sign or decoding routines are finite instruction programs over exact scalar real/integer arithmetic, comparisons, register operations and branches; no opaque callback is a unit instruction. The interpreter charges one unit per executed instruction, including decoding, the built-in tree and any custom-result verification within the same per-call $K$ budget; it checks instruction/operation validity when encountered and returns undecided on exhaustion or invalid execution. An undecided sign is propagated as the Schur type-undecided status and then outer `schur-failure`. The fixed built-in sign tree or integer recipe has a fixed finite instruction count independent of matrix dimension. Any custom reported sign must agree with the built-in exact discriminant tree before acceptance. In arbitrary-terminating mode custom programs must terminate on every supplied input; record their total executed controller work as $C_{\rm aux}$. This richer mode retains finite termination but has the additional work in its cost bound. In the cubic-cost branch $K$ and representation-control instruction costs are fixed independently of matrix dimension. Programs are executed by instruction lookup without an up-front scan of unused code.

1. Run [[alg-finite-budget-francis-schur-reduction]] on $A$ and $B$ with their supplied controls and budgets. If either call does not return `Schur-computed`, return `schur-failure` with the underlying status.

2. Treat the returned factors as candidates and verify the exact certificates. In the complex branch check $U^*U=I$, $A=UTU^*$, and upper triangularity of $T$; in the real branch check $U^TU=I$, $A=UTU^T$, and the real block upper-triangular form of [[def-real-and-complex-schur-forms]]. Perform the corresponding checks for $B=VSV^*$. If any check fails, return `schur-certificate-failure`.

3. Set $D=U^*CV$. Use the column-vectorization and Kronecker convention of [[lem-sylvester-vectorization-isometry-and-kronecker-identity]]. Partition $T$ into diagonal blocks $T_{ii}$ and $S$ into diagonal blocks $S_{jj}$ as in the exact real or complex Schur form. Traverse $j$ from left to right and, for each $j$, traverse $i$ from bottom to top. Form

$$
F_{ij}=D_{ij}-\sum_{k>i}T_{ik}Y_{kj}-\sum_{\ell<j}Y_{i\ell}S_{\ell j}.
$$

The terms on the right have already been computed in this traversal order. Define $\Phi_{ij}(Z)=T_{ii}Z+ZS_{jj}$ and its matrix representation $M_{ij}=I_{s_j}\otimes T_{ii}+S_{jj}^T\otimes I_{r_i}$ on column-vectorized blocks, where $r_i,s_j\in\{1,2\}$ are the block sizes. Let $q=r_is_j\le4$ and compute $\delta(M_{ij})$ from [[lem-small-block-determinant-separation-lower-bound]]. If $\det(M_{ij})=0$, return `singular-pivot`; if $\det(M_{ij})\ne0$ and $\delta(M_{ij})\le\tau$, return `pivot-separation-failure` because the requested pivot bound is not certified. Otherwise use the cofactor adjugate formula of [[lem-adjugate-inverse-formula-over-a-field]] to set $\operatorname{vec}(Y_{ij})=\operatorname{adj}(M_{ij})\operatorname{vec}(F_{ij})/\det(M_{ij})$ and store $Y_{ij}$. The local dimension is at most four in the real block case and one in the complex triangular case.

4. After all blocks are solved, return `success` and $X=UYV^*$, together with the exact residual $C-(AX+XB)$. No computed Schur candidate is accepted as an exact factorization unless step 2 verifies its defining equalities.
