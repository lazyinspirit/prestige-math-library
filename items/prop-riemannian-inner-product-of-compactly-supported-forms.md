---
id: "prop-riemannian-inner-product-of-compactly-supported-forms"
kind: "proposition"
title: "Riemannian inner product of compactly supported forms"
deps: ["def-riemannian-hodge-star", "thm-hodge-star-is-a-smooth-bundle-isomorphism", "def-riemannian-volume-of-a-compactly-supported-smooth-density", "prop-positive-compactly-supported-top-forms-have-positive-integral", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice, on an oriented Riemannian manifold the formula $(\alpha,\beta)=\int_M\alpha\wedge*\beta$ is a positive-definite real inner product on compactly supported smooth $k$-forms, $0\le k\le n$.

## Facts & Assumptions

**Given:** Compactly supported real forms $\alpha,\beta$ of one fixed degree, and countable choice.

[F1] [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]: The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

[F2] [[def-riemannian-volume-of-a-compactly-supported-smooth-density]]: Assume countable choice. For smooth compactly supported $f$, define $\int_M f\mu_g$ by the intrinsic smooth density integral. More generally every compactly supported signed smooth density $\sigma$ has its existing intrinsic integral, independently of a Riemannian metric. lem-the-riemannian-volume-density-is-coordinate-independent makes $f\mu_g$ a smooth compactly supported density. Apply def-integral-of-a-compactly-supported-smooth-density and thm-density-integration-is-defined-without-an-orientation; def-countable-choice is inherited precisely at chart-partition selection. In a chart the summand is the integral of the partition-weighted coefficient $f\sqrt{\det G}$. On a zero-manifold it is the finite sum of scalar density values, and empty support gives zero. No orientation is required.

[F3] [[prop-positive-compactly-supported-top-forms-have-positive-integral]]: Let $\omega\in\Omega_c^n(M)$ be nonnegative on the positive determinant ray of an oriented smooth manifold. Then $\int_M\omega\geq0$, and $\omega\neq0$ implies $\int_M\omega>0$.

[F4] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

[F5] [[def-riemannian-hodge-star]]: On an oriented Riemannian $n$-manifold, for $0\le k\le n$ the Hodge star is characterized by $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ for every pair of $k$-covectors.

## Proof

**Proof technique:** direct.

1.1 The star identity F5 makes the integrand $\langle\alpha,\beta\rangle\operatorname{vol}_g$, with compact support contained in the intersection of their supports. In oriented charts its integral equals the density integral of $\langle\alpha,\beta\rangle\mu_g$; the chart formula has the same positive coefficient. That finite sum is bilinear in $\alpha,\beta$ and symmetric because the pointwise pairing is, so the displayed expression is a symmetric bilinear real form. The assumed countable choice supplies the chart partition used by this integral. [F1, F2, F4, F5, given]

2.1 For $\alpha\ne0$, its pointwise squared norm is nonnegative and positive at a point where $\alpha$ is nonzero. Thus F5 makes $\alpha\wedge*\alpha$ a nonzero nonnegative compactly supported top form, whose integral is strictly positive by the positivity theorem. For $\alpha=0$ the integral is zero. In dimension zero it is the finite sum $\sum_p\alpha(p)^2$, since the orientation sign in the volume form cancels the integration sign; on the empty manifold this is the inner product on the zero vector space. [F3, F5, step 1.1] ∎

## Source locator

Lee, Proposition 16.28, p.422, and Problem 16-22(b), p.439. Lee states the pairing on compact manifolds; the proof here uses compact supports and the explicitly assumed integration prerequisites on a possibly noncompact manifold.
