---
id: cor-finite-codimensional-subspaces-are-complemented
kind: corollary
title: Closed finite-codimensional subspaces are complemented
status: published
origin: pipeline
deps: [def-quotient-seminorm, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed, thm-coordinate-map-for-a-finite-dimensional-normed-space, def-complemented-subspace, thm-complemented-subspace-iff-range-of-a-bounded-projection]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, Theorem 10.17(b)
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

Every closed finite-codimensional linear subspace $M$ of a normed space $X$ is
complemented in $X$.

## Facts & Assumptions

**Given:** A closed subspace $M\subseteq X$ with finite-dimensional $X/M$.

[F1] The quotient seminorm is a norm exactly when the subspace is closed ([[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[F2] Coordinate functionals for a fixed basis of a finite-dimensional normed space are bounded ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[F3] The range of a bounded projection is complemented ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $Q=X/M$ is a normed finite-dimensional quotient. Choose a basis $q_1,\ldots,q_n$ of $Q$, representatives $x_j\in X$, and bounded coordinate maps $\phi_j$ supplied by [F2]. [F1, F2, given, choose]

2.1 The map $S:Q\to X$, $S(q)=\sum_j\phi_j(q)x_j$, is bounded and satisfies $\pi S=I_Q$. Hence $P=I_X-S\pi$ is bounded, $P^2=P$, and $\operatorname{ran}P=M$. [step 1.1, algebra]

3.1 By [F3], $M$ is complemented. [step 2.1, F3] ∎
