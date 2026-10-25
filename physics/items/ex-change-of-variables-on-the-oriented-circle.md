---
id: ex-change-of-variables-on-the-oriented-circle
title: "Change of variables on an oriented circle"
kind: example
status: published
origin: pipeline
deps: ["thm-change-of-variables-for-oriented-manifold-diffeomorphisms", "prop-integration-of-top-forms-by-finite-parametrizations"]
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
    - title: "Lee Proposition 16.6(d), pp.407–408 (explicit circle specialization)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

Fix $a\in\mathbb R$ with $|a|<1$. The map $F(e^{it})=e^{i(t+a\sin t)}$ is an orientation-preserving smooth circle diffeomorphism. For the standard angular form $\omega$ on the unit circle,
$$F^*\omega=(1+a\cos t)dt,\qquad \int_{S^1}F^*\omega=2\pi=\int_{S^1}\omega,$$
where t denotes the angle on each cut chart.

## Facts & Assumptions

[F1] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]: Let $F:M\to N$ be a diffeomorphism of oriented smooth $n$-manifolds and $\omega\in\Omega_c^n(N)$. If $F$ preserves orientation everywhere, $\int_MF^*\omega=\int_N\omega$; if it reverses orientation everywhere, $\int_MF^*\omega=-\int_N\omega$. If the sign varies between components, apply the appropriate signed equality on each component and add.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The lift $h(t)=t+a\sin t$ satisfies $h(t+2\pi)=h(t)+2\pi$ and $h^{\prime}(t)=1+a\cos t\geq1-|a|>0$. It is strictly increasing; since $|h(t)-t|\leq|a|$, its limits are the two infinities, so it is onto R. Its inverse is smooth by the one-dimensional inverse theorem, and both lift maps commute with shifts by $2\pi$. They descend to inverse smooth circle maps, preserving increasing-angle orientation. [algebra]

2.1 Pulling back the angular form in cut charts gives $dh=(1+a\cos t)dt$. The cut-circle parametrization yields $\int_0^{2\pi}(1+a\cos t)dt=2\pi$, while $\int_0^{2\pi}dt=2\pi$. Both cut parametrizations extend smoothly from the closed interval. [F2, step 1.1]

3.1 The circle is compact, so the form is compactly supported; oriented change of variables therefore predicts the same equality and all its hypotheses have just been checked. For a=0 the map is the identity. Values $|a|=1$ are excluded because the derivative can vanish, so the proof does not assert a diffeomorphism at those endpoints. [F1, step 1.1, step 2.1] ∎
