---
id: thm-gaussian-rangefinder-expected-spectral-error
kind: theorem
title: Expected spectral error for real and normalized complex Gaussian range finders
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [thm-real-gaussian-rangefinder-expected-spectral-error, lem-normalized-complex-rangefinder-direct-spectral-expectation, alg-gaussian-randomized-range-finder, def-standard-real-and-normalized-complex-gaussian-matrix-law, def-countable-choice, lem-finite-scan-range-basis-is-borel]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Theorem 10.6 and its complex-case discussion"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Theorem 11.5"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $A\in F^{m\times n}$ be fixed, where $F=\mathbb R$ or $\mathbb C$. Let
$k\ge2$, $p\ge2$, $\ell=k+p\le\min(m,n)$, and draw $\Omega$ with iid
standard real entries if $F=\mathbb R$ or normalized complex entries if
$F=\mathbb C$. If $Q$ is an orthonormal basis of $\operatorname{Ran}(A\Omega)$,
then
$$\mathbb E\|A-QQ^*A\|_2\le \left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1} +\frac{e\sqrt{k+p}}{p}\left(\sum_{j>k}\sigma_j^2\right)^{1/2}.$$
This preserves the normalized-complex convention $\mathbb E|\Omega_{ij}|^2=1$.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and the fixed finite matrix and the real or normalized-complex Gaussian draw under the stated $k,p,\ell$ constraints.

[F1] The real-field statement with the displayed constants, for $k\ge2$, $p\ge2$, and $\ell=k+p\le\min(m,n)$, is proved in [[thm-real-gaussian-rangefinder-expected-spectral-error]].

[F2] The normalized-complex range finder, with the same fixed-matrix, dimension, variance-one Gaussian, and Countable Choice hypotheses, satisfies the displayed expected-error bound ([[lem-normalized-complex-rangefinder-direct-spectral-expectation]]).

[F3] [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: real entries are standard Gaussian and complex entries are $(X+iY)/\sqrt2$, with $\mathbb E|g|^2=1$; the finite-dimensional laws are product-density laws.

[F4] [[lem-finite-scan-range-basis-is-borel]] proves that the finite-scan algorithm [[alg-gaussian-randomized-range-finder]] returns a measurable orthogonal projector onto $\operatorname{Ran}(A\Omega)$. If $Q$ and $Q_0$ are any two orthonormal bases of that same subspace, then $QQ^*=Q_0Q_0^*$: for every vector $x$, both $QQ^*x$ and $Q_0Q_0^*x$ lie in the subspace, while their residuals lie in its orthogonal complement; uniqueness of this orthogonal decomposition makes the projections equal.

[A1] Countable Choice is the axiom used for the finite-dimensional Gaussian probability laws ([[def-countable-choice]]).

## Proof

1.1 If $F=\mathbb R$, the hypotheses and constants are exactly those of [F1], which proves the asserted expectation bound. [given, F1]

1.2 If $F=\mathbb C$, let $Q_0$ be the basis returned by the measurable finite-scan algorithm in [F4]. The $Q$ in the Statement and $Q_0$ are orthonormal bases of the same sample range, so [F4] gives $QQ^*=Q_0Q_0^*$ for every draw. The expected error is therefore the same measurable random variable as for $Q_0$, and [F2] supplies the required bound with the stated normalized-complex convention [F3]. [given, F2, F3, F4, A1, choose, algebra]

2.1 The cases $F=\mathbb R$ and $F=\mathbb C$ exhaust the field choice; steps 1.1 and 1.2 prove the full displayed assertion. [step 1.1, step 1.2] ∎
