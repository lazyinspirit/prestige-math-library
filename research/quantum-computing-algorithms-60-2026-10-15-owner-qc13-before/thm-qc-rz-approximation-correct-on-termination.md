---
id: thm-qc-rz-approximation-correct-on-termination
kind: theorem
title: The Rz approximation procedure is correct when it returns
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-rz-clifford-t-approximation
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - thm-qc-exact-single-qubit-synthesis-correct
  - def-qc-clifford-t-gate-library
  - def-qc-ancilla-free-rz-approximation-problem
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
---

## Statement

For $\theta\in\mathbb R$ and $0<\varepsilon<1/2$, any run of
[[alg-qc-rz-clifford-t-approximation]] that returns after its norm solver has
returned only exact solutions and its exact compiler has returned the
requested matrices satisfies
$\|R_z(\theta)-W\|_{\mathrm{op}}\le\varepsilon$. Moreover, if the scaled-grid
enumeration is unbounded, the norm solver is complete with a factoring
oracle, and every exact-real comparison and solver call terminates, then the
procedure terminates for every such input.

## Facts & Assumptions

**Given:** The exact Rz approximation procedure, the exact epsilon-region
criterion, and the finite coefficient bound for each denominator layer.

[F1] [[alg-qc-rz-clifford-t-approximation]]: for a candidate $u$ and an exact
solution $t^\dagger t=1-u^\dagger u$, the procedure forms
$U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}$ and $U'=TUT^\dagger$,
then returns an exact compilation of one of them.

[F2] [[lem-qc-rz-epsilon-region-equivalence]]: a determinant-one matrix of
the displayed form is within $\varepsilon$ of $R_z(\theta)$ exactly when
$\operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2$.

[F3] [[lem-qc-rz-scaled-grid-norm-solution-exists]]: for every input there
exists a grid candidate $u$ and an exact $t\in D$ solving its norm equation.

[F4] [[lem-qc-cyclotomic-scaled-grid-finiteness]]: every grid candidate at
fixed exponent $k$ has coefficients in a finite explicit box, and every
candidate has a finite nonnegative exponent.

[F5] [[thm-qc-exact-single-qubit-synthesis-correct]]: the exact compiler
returns a word with matrix exactly the requested unitary.

[F6] [[def-qc-clifford-t-gate-library]]: $T$ is diagonal and commutes with
$R_z(\theta)$.

[F7] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
the operator norm is the maximum over unit vectors.

[A2] In the correctness clause, every successful norm-solver outcome used by
the procedure supplies an exact $t$ satisfying $t^\dagger t=1-u^\dagger u$.

[A1] In the termination clause, every factorization and norm-solver call
returns in finite time, the norm solver satisfies its exact decision and
solution contract, and the exact-real comparisons required by the grid
enumerator terminate with correct answers.

## Proof

1.1 If the procedure returns, its successful candidate satisfies the
scaled-grid real-part inequality by construction and [A2] gives the exact
norm equation. Thus $|u|^2+|t|^2=1$; multiplying the displayed
matrix by its conjugate transpose gives $U^*U=I$ and
$\det U=|u|^2+|t|^2=1$. Therefore $U$ is in the form required by [F2], which
gives
$\|R_z(\theta)-U\|_{\mathrm{op}}\le\varepsilon$. [A2, F1, F2, given,
construct]

1.2 Since $T$ and $R_z(\theta)$ are diagonal, they commute. By [F7],
unitary left and right multiplication preserve the operator norm: the
left factor preserves every vector norm, and the right factor bijects the
unit sphere to itself. Thus
$\|R_z(\theta)-TUT^\dagger\|_{\mathrm{op}}
=\|T^\dagger R_z(\theta)T-U\|_{\mathrm{op}}
=\|R_z(\theta)-U\|_{\mathrm{op}}$. Thus both compiler inputs meet the same
error bound. [F1, F2, F6, F7, step 1.1, algebra]

1.3 The exact compiler conclusion [F5] makes each returned word's matrix
equal its selected input. Since the procedure chooses between $U$ and
$U'$, step 1.2 proves the returned word satisfies the required bound.
[F1, F5, step 1.1, step 1.2, algebra]

2.1 By [F3] there is a solvable grid candidate with some finite exponent $k$.
By [F4], each layer from $0$ through $k$ has finitely many coefficient
vectors, and the procedure enumerates all such vectors. With the complete
solver assumption [A1], it succeeds when that candidate is reached; therefore
the unbounded loop terminates after finitely many earlier layers and
candidates. A bounded call may stop with TIMEOUT before this point.
[A1, F3, F4, step 1.1, algebra] ∎

## Unresolved supplier checks

The theorem is conditional on the norm-solver contract. Ross–Selinger
Appendix C gives a route, but its Euclidean-domain, prime-splitting,
unit-criterion, and factor-allocation proofs remain local authoring
obligations. The actual QC09 matrix-word interface was inspected and agrees
with the local compiler convention.

