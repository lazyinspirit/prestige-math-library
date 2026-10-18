---
id: thm-sketch-and-solve-exact-minimizer
kind: theorem
title: A converged exact sketch-and-solve run returns a sketch minimizer
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 1
deps:
  - alg-sketch-and-solve-least-squares
  - thm-svd-thresholded-least-squares-minimum-norm-model
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.5"
      url: "https://arxiv.org/pdf/1411.4357"
---

## Statement

Let $C=SA$ and $c=Sb$ be the sketch matrix and response in
[[alg-sketch-and-solve-least-squares]]. In exact arithmetic, if its zero-
threshold SVD call converges and supplies an exact SVD record, the returned
$\widehat x$ is the unique minimum-Euclidean-norm minimizer of
$\|SAx-Sb\|_2$, and the reported rank is $\operatorname{rank}(SA)$.
No conclusion is asserted on an `inconclusive` or finite-precision
`unverified` branch.

## Facts & Assumptions

**Given:** Finite matrices $A,S$, a vector $b$, and an exact-arithmetic converged execution of the SVD call in the algorithm.

[F1] The algorithm forms $C=SA$, $c=Sb$ and calls the SVD least-squares procedure at strict threshold $\tau=0$; only exact convergence with an exact SVD record is the branch under consideration ([[alg-sketch-and-solve-least-squares]]).

[F2] On exact convergence, the SVD threshold solver returns the unique minimum-norm least-squares vector for its truncated model; when every discarded singular value is zero, that is also the solution for the original matrix ([[thm-svd-thresholded-least-squares-minimum-norm-model]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 Set $C=SA$ and $c=Sb$. By [F1], the converged call uses threshold zero and returns $\widehat x=C_0^+c$, where $C_0$ retains exactly the singular values of $C$ that are strictly positive. [F1, construct]

2.1 In an exact SVD $C=U\Sigma V^*$, zero singular values contribute zero terms and every positive singular value is retained at threshold zero. Thus $C_0=U\Sigma V^*=C$, including the rank-zero case. [step 1.1, algebra]

3.1 Apply [F2] to the truncated matrix $C_0$. It says that $C_0^+c$ is its unique minimum-norm least-squares solution. By step 2.1, $C_0=C$, so $\widehat x$ is the unique minimum-norm minimizer of $\|Cx-c\|_2=\|SAx-Sb\|_2$; the zero-threshold rank count is precisely the number of positive singular values of $C$, hence $\operatorname{rank}(C)$. [F2, step 2.1, algebra] ∎
