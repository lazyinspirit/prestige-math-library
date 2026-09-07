---
id: thm-margulis-family-has-uniform-spectral-gap
kind: theorem
title: "Margulis family has uniform spectral gap"
status: draft
origin: pipeline
deps: [lem-margulis-diamond-weight-bound, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; Theorem8.2 with fully proved weaker bound at end §8.2, pp69–73."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For every $m\ge2$ the normalized Margulis adjacency has absolute nontrivial norm $\alpha\le73/80$, hence algebraic gap at least $7/80$. For $m=1$ the mean-zero space is zero and $\alpha=0$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For every integer $m\ge1$ and every nonnegative function $g$ on $(\mathbb Z/m\mathbb Z)^2$ with $g(0)=0$, the quadratic expression $Q$ in the Fourier reduction satisfies $$Q(g)\le\frac{73}{20}\sum_z g(z)^2.$$ Consequently, for the forward/full adjacency operators and normalized transform in that reduction, $|\langle f,Af\rangle|\le(73/10)\|f\|^2$ for real mean-zero $f$. ([[lem-margulis-diamond-weight-bound]]).

[F2] Let $V$ be a finite-dimensional real inner product space and let $T:V\to V$ be self-adjoint. Then $V$ has an orthonormal basis consisting of eigenvectors of $T$. ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).


## Proof

1.1 The diamond bound and its Fourier consequence give $|\langle f,Af\rangle|\le(73/10)\|f\|^2$ for every real mean-zero $f$. Divide by the degree eight to get $|\langle f,Mf\rangle|\le(73/80)\|f\|^2$. [F1]

2.1 The mean-zero subspace is invariant and $M$ is real symmetric. In its orthonormal eigenbasis the preceding bound applied to each eigenvector gives $|\mu|\le73/80$, so the operator norm has that bound. This controls negative as well as positive eigenvalues; in particular $1-\mu_2\ge7/80$. For $m=1$ use the zero-space norm convention directly. [F2, step 1.1] ∎
