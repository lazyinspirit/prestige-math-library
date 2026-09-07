---
id: ex-orientation-reversal-under-reflection
title: "Reflection reverses the signed form integral"
kind: example
status: published
origin: pipeline
deps: ["thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "thm-density-integration-is-defined-without-an-orientation"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.6(d) and Proposition 16.42(c)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

For $f\in C_c^\infty(\mathbb R)$ and reflection $r(x)=-x$, with the increasing orientation,
$$\int_{\mathbb R}r^*(f\,dx)=-\int_{\mathbb R}f\,dx,\qquad \int_{\mathbb R}r^*(f\,|dx|)=\int_{\mathbb R}f\,|dx|.$$
Densities retain the sign of $f$; the absolute value here belongs to the coordinate density.

## Facts & Assumptions

[F1] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]: Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

[F2] [[thm-density-integration-is-defined-without-an-orientation]]: Compactly supported smooth density integration is independent of charts and partition, linear, local, nonnegative on nonnegative densities and strictly positive for a nonzero nonnegative density. It is invariant under every diffeomorphism, without choosing an orientation. The finite-parametrization formula holds under the hypotheses of prop-integration-of-top-forms-by-finite-parametrizations, with orientation preservation omitted and absolute Jacobians used.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The derivative of reflection is $-1$, so $r^*(f\,dx)=-f(-x)dx$. The map is a globally orientation-reversing diffeomorphism, and its compact pullback support is the reflected support. Oriented change of variables gives the first identity. [F1]

2.1 For the density the Jacobian factor is $|-1|=1$, giving $f(-x)|dx|$. Diffeomorphism invariance of density integration gives the second identity. Empty support, zero f, and signed f all satisfy the same formulas. [F2, step 1.1] ∎
