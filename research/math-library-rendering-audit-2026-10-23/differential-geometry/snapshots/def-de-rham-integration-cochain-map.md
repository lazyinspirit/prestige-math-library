---
id: "def-de-rham-integration-cochain-map"
kind: "definition"
title: "De Rham integration cochain"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["def-integral-of-a-form-over-a-smooth-singular-simplex","def-smooth-singular-chain-and-cochain-complexes","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","thm-multidimensional-integral-properties"]
justified_by: ["thm-de-rham-integration-is-a-cochain-map"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

For a smooth manifold $M$, possibly with boundary, and $k\ge0$, define
$$I_M^k:\Omega^k(M)\longrightarrow C_\infty^k(M;\mathbb R),\qquad I_M^k(\omega)(\sigma)=\int_\sigma\omega.$$
On $c=\sum_\sigma a_\sigma\sigma$ this means $I_M^k(\omega)(c)=\sum_\sigma a_\sigma\int_\sigma\omega$, a finite sum. In negative degrees $I_M^k$ is the zero map. Forms and the de Rham complex at a boundary use [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]. No orientation of $M$ is required: the domain simplex has the specified orientation. The name integration cochain map is justified by [[thm-de-rham-integration-is-a-cochain-map]].

## Facts & Assumptions

[F1] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] assigns an extension-independent real number to a form and smooth simplex, with degree-zero evaluation.

[F2] [[def-smooth-singular-chain-and-cochain-complexes]] identifies smooth cochains with real functions on the supplied simplex set, evaluated by finite sums.

[F3] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies $\Omega^\bullet(M)$, its degree conventions and the boundaryless specialization.

[F4] [[thm-multidimensional-integral-properties]] gives linearity of Riemann integrals, hence of the Jordan integrals in [F1] by zero extension.

## Verification

**Given:** A smooth manifold $M$, an integer $k\ge0$ and a form $\omega\in\Omega^k(M)$.

1.1 Definition [F1] gives one uniquely determined value on every smooth $k$-simplex. For each finite chain, distributing its coefficients in the displayed sum shows that this function extends to a real linear functional. Two such functionals agreeing on all simplices agree on every finite chain. By [F2] this defines a unique element $I_M^k(\omega)$ of the cochain space. No choice of a vector-space basis or of simplex extensions is made. [F1, F2, given]

2.1 For forms $\omega,\eta$ of degree $k$ and real $a,b$, alternating evaluation in the definition of pullback gives $\sigma^*(a\omega+b\eta)=a\sigma^*\omega+b\sigma^*\eta$. For $k>0$, the Jordan coefficient integral is linear by [F4]; for $k=0$, evaluation is linear directly. Thus $I_M^k(a\omega+b\eta)(\sigma)=aI_M^k(\omega)(\sigma)+bI_M^k(\eta)(\sigma)$ on every simplex, and step 1.1 makes $I_M^k$ a real linear map. [F1, F4, step 1.1]

3.1 For $k=0$ the value at a point simplex is exactly the function value there; for $k=1$ it is the integral of the pulled-back one-form over the closed oriented interval. Degenerate simplices remain in the supplied set and receive their actual integrals, rather than being removed. If $k>\dim M$, [F3] gives zero source and the map is zero, even though the smooth cochain space may be nonzero. Negative degrees are zero on both sides. On an empty manifold there are no simplices and the only cochain is zero. These conventions include the zero form and zero chain and require no choice. [F1, F2, F3, step 1.1, step 2.1] ∎
