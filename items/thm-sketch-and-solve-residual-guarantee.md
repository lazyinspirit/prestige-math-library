---
id: thm-sketch-and-solve-residual-guarantee
kind: theorem
title: Embedding span(A,b) gives the sketch-and-solve residual factor
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 2
deps:
  - def-oblivious-l2-subspace-embedding
  - alg-sketch-and-solve-least-squares
  - thm-sketch-and-solve-exact-minimizer
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.5, Theorem 21"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.2"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Statement

Let $A\in\mathbb K^{n\times p}$, $b\in\mathbb K^n$, and
$0<\varepsilon<1$. Suppose the particular sketch $S$ used in
[[alg-sketch-and-solve-least-squares]] is an $\varepsilon$-subspace
embedding for
$U=\operatorname{span}(\operatorname{Ran}(A),\{b\})$. If that algorithm
returns an exact-arithmetic converged vector $\widehat x$, then
$$
\|A\widehat x-b\|_2^2\le\frac{1+\varepsilon}{1-\varepsilon}\min_{x\in\mathbb K^p}\|Ax-b\|_2^2.
$$
Embedding $\operatorname{Ran}(A)$ alone is not a hypothesis for this
conclusion.

## Facts & Assumptions

**Given:** Finite $A,b$, $0<\varepsilon<1$, an $\varepsilon$-embedding $S$ of $U=\operatorname{span}(\operatorname{Ran}(A),\{b\})$, and an exact converged output $\widehat x$.

[F1] Every vector in $U$ has its squared norm multiplied by a factor in $[1-\varepsilon,1+\varepsilon]$ by $S$ ([[def-oblivious-l2-subspace-embedding]]).

[F2] On the stated converged branch, $\widehat x$ minimizes $\|SAx-Sb\|_2$ over all $x$ ([[thm-sketch-and-solve-exact-minimizer]]).

[F3] A least-squares minimizer exists for a linear map between finite-dimensional inner-product spaces ([[thm-least-squares-solutions-and-normal-equation]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F3], choose an original least-squares minimizer $x_*\in\mathbb K^p$, and write $r_*=Ax_*-b$, $\widehat r=A\widehat x-b$. [F3, choose]

2.1 For every $x\in\mathbb K^p$, both $Ax$ and $b$ belong to $U$, so their difference $Ax-b$ belongs to $U$. In particular [F1] applies to $\widehat r$ and $r_*$. [given, F1, step 1.1, algebra]

2.2 By [F2], $\widehat x$ minimizes the sketched residual, so $\|S\widehat r\|_2^2\le\|Sr_*\|_2^2$; squaring preserves order because both residual norms are nonnegative. [F2, step 1.1, algebra]

3.1 The lower inequality in [F1] gives $(1-\varepsilon)\|\widehat r\|_2^2\le\|S\widehat r\|_2^2$. [F1, step 2.1]

3.2 The upper inequality in [F1] gives $\|Sr_*\|_2^2\le(1+\varepsilon)\|r_*\|_2^2$. [F1, step 2.1]

4.1 Combining steps 3.1, 2.2 and 3.2 and dividing by $1-\varepsilon>0$ proves the claimed estimate, since $x_*$ is an original minimizer by step 1.1. [step 3.1, step 2.2, step 3.2, step 1.1, algebra] ∎
