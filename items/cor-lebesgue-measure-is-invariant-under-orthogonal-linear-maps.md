---
id: cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps
kind: corollary
title: "Lebesgue measure on $\\mathbb{R}^n$ is invariant under every orthogonal linear map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-change-of-variables-for-lebesgue-measure, def-linear-isometry-and-orthogonal-or-unitary-operator, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus, def-euclidean-inner-product, def-determinant-of-a-square-matrix, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "orthogonal invariance"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.31"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 3.2"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]), and let $T$ be an orthogonal operator on
$\mathbb{R}^n$ with the Euclidean inner product
([[def-linear-isometry-and-orthogonal-or-unitary-operator]],
[[def-euclidean-inner-product]]). Then $T[E]$ is Lebesgue measurable for every
Lebesgue measurable $E$ and

$$\lambda_n\big(T[E]\big) \;=\; \lambda_n(E).$$

Both the orientation-preserving operators, of determinant $1$, and those of
determinant $-1$ are covered, since only the absolute value of the determinant
enters; nothing is asserted here about which matrices occur in either class.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and an orthogonal operator $T$ on $\mathbb{R}^n$.

[L1] Assuming countable choice, an invertible linear $T$ with matrix $A$ sends Lebesgue measurable sets to Lebesgue measurable sets with $\lambda_n(T[E]) = |\det A|\,\lambda_n(E)$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F1] An invertible linear isometry from a real finite-dimensional inner product space to itself is an **orthogonal operator** ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]).

[F2] Every orthogonal or unitary operator $T$ satisfies $|\det T|=1$; over $\mathbb R$, this says $\det T\in\{-1,1\}$ ([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]], [[def-determinant-of-a-square-matrix]]).

[F3] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is a unique matrix $A$ such that $(Lh)_i=\sum_{j<m}a_{ij}h_j$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

## Proof

**Proof technique:** direct.

1.1 An orthogonal operator is by definition an invertible linear map of $\mathbb{R}^n$ to itself, and its matrix $A$ satisfies $|\det A| = 1$, so in particular $\det A \ne 0$. [F1, F2, F3]

2.1 The linear change of variables therefore applies in its invertible clause and gives $\lambda_n(T[E]) = |\det A|\,\lambda_n(E) = \lambda_n(E)$ for every Lebesgue measurable $E$, with $T[E]$ measurable. [step 1.1, L1, F2] ∎
