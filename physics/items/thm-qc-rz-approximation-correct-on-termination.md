---
id: thm-qc-rz-approximation-correct-on-termination
kind: theorem
title: The Rz approximation procedure is correct when it returns
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-rz-clifford-t-approximation
  - alg-qc-cyclotomic-scaled-grid-and-norm-solver
  - thm-qc-cyclotomic-norm-equation-decision
  - thm-qc-rz-efficient-scaled-grid-enumeration
  - thm-qc-factored-cyclotomic-norm-equation-efficient
  - lem-qc-rz-epsilon-region-equivalence
  - lem-qc-rz-scaled-grid-norm-solution-exists
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - thm-qc-exact-single-qubit-synthesis-correct
  - def-qc-clifford-t-gate-library
  - def-qc-ancilla-free-rz-approximation-problem
  - lem-qc-rz-determinant-one-reduction
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 16
---

## Statement

For $\theta\in\mathbb R$ and $\varepsilon>0$, every word returned by
[[alg-qc-rz-clifford-t-approximation]] satisfies
$\|R_z(\theta)-W\|_{\mathrm{op}}\le\varepsilon$, provided each accepted norm
output is exact and the exact compiler returns the requested matrix. When
$\varepsilon\ge c=|1-e^{i\pi/8}|$, the algorithm returns its direct
zero-T Clifford word. When $0<\varepsilon<c$, it returns only after the
scaled-grid and exact norm-solver branch succeeds. If its total candidate
limit is unbounded, either the complete finite-search norm mode is used or
the complete factorization-based mode receives valid factorizations in finite
time, and the required exact-real comparisons terminate, then it terminates
for every such input. With the efficient randomized factored norm mode and
independent random bits it terminates with probability one under those
assumptions. A finite candidate limit can return TIMEOUT.

## Facts & Assumptions

**Given:** The exact Rz approximation procedure, the exact epsilon-region
criterion, and the finite coefficient bound for each denominator layer.

[F1] [[alg-qc-rz-clifford-t-approximation]]: if $\varepsilon\ge c$ it returns
the direct zero-T Clifford; otherwise, for a candidate $u$ and an exact
solution $t^\dagger t=1-u^\dagger u$, it forms
$U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}$ and $U'=TUT^\dagger$,
then returns an exact compilation of one of them.

[F2] [[lem-qc-rz-epsilon-region-equivalence]]: a determinant-one matrix of
the displayed form is within $\varepsilon$ of $R_z(\theta)$ exactly when
$\operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2$.

[F3] [[lem-qc-rz-scaled-grid-norm-solution-exists]]: for every
$0<\varepsilon<1/2$ there exists a grid candidate $u$ and an exact $t\in D$
solving its norm equation.

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

[F8] [[thm-qc-cyclotomic-norm-equation-decision]] proves that the finite-search
norm mode terminates, decides solvability exactly, and returns an exact
solution whenever one exists.

[F9] [[thm-qc-rz-efficient-scaled-grid-enumeration]] proves complete,
nonduplicating increasing-exponent enumeration, with finite layer completion
for every sequence of iterator random bits.

[F10] [[thm-qc-factored-cyclotomic-norm-equation-efficient]] proves that
the efficient norm mode is exact and complete and terminates almost surely
on every valid algebraic input with its supplied factorization.

[F11] [[lem-qc-rz-determinant-one-reduction]]: for every $\varepsilon\ge c$
there is a determinant-one Clifford word of T-count zero within $\varepsilon$
of $R_z(\theta)$.

[A1] In the termination clause, any requested factoring oracle returns a
valid factorization in finite time, the exact integer-part operation used by
the direct branch terminates when that branch is taken, and the exact-real
comparisons required by the grid enumerator terminate with correct answers.

## Proof


1.1 If $\varepsilon\ge c$, the direct branch returns the zero-T Clifford word whose error bound is proved in [F11]. Suppose instead $0<\varepsilon<c$. If the procedure returns, its successful candidate satisfies the scaled-grid real-part inequality by construction and [A2] gives the exact norm equation. Thus $|u|^2+|t|^2=1$; multiplying the displayed matrix by its conjugate transpose gives $U^*U=I$ and $\det U=|u|^2+|t|^2=1$. Therefore $U$ is in the form required by [F2], which gives $\|R_z(\theta)-U\|_{\mathrm{op}}\le\varepsilon$. [A2, F1, F2, given, construct]

2.1 Since $T$ and $R_z(\theta)$ are diagonal, they commute. By [F7], unitary left and right multiplication preserve the operator norm: the left factor preserves every vector norm, and the right factor bijects the unit sphere to itself. Thus $\|R_z(\theta)-TUT^\dagger\|_{\mathrm{op}} =\|T^\dagger R_z(\theta)T-U\|_{\mathrm{op}} =\|R_z(\theta)-U\|_{\mathrm{op}}$. Thus both compiler inputs meet the same error bound. [F1, F2, F6, F7, step 1.1, algebra]

2.2 If $\varepsilon\ge c$, [A1] makes the direct integer-part operation terminate, so the zero-T word is returned. Suppose $0<\varepsilon<c$. Then $\varepsilon<1/2$, and [F3] gives a solvable grid candidate with some finite exponent $k$. By [F4], each layer from $0$ through $k$ has finitely many coefficient vectors. The finite-search alternative checks them all; the default iterator enumerates precisely the candidates and finishes each preceding layer by [F9]. By [F8], each norm call terminates and it succeeds when that candidate is reached; the finitely many comparison and oracle calls terminate by [A1]. Therefore the unbounded loop terminates after finitely many earlier layers and candidates. A finite candidate limit may instead cause TIMEOUT before this point. [A1, F3, F4, F8, F9, step 1.1, algebra]

3.1 The exact compiler conclusion [F5] makes each returned word's matrix equal its selected input. Since the procedure chooses between $U$ and $U'$, step 2.1 proves the returned word satisfies the required bound. [F1, F5, step 1.1, step 2.1, algebra]

4.1 For efficient factored mode, take a fixed exponent $k$ for one solvable candidate from [F3]. There are only finitely many candidates in layers through $k$, independent of their within-layer order. The iterator finishes each preceding layer for every random-bit sequence by [F9]. On each of these finitely many algebraic inputs, the norm call terminates with probability one by [F10]. With fresh independent solver bits this remains true conditional on the history, so the finite union of nontermination events has probability zero. On its complement the same candidate argument as in step 2.2 gives successful return. [A1, F3, F4, F9, F10, step 2.2, algebra] ∎

## Remarks

The finite-search mode has no polynomial runtime assertion. The efficient
factored mode has almost-sure termination and its separate proved polynomial
expected algebraic cost. A finite
factor-attempt budget may skip every solvable candidate; this theorem does
not infer termination with a circuit from that branch.
