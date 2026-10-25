---
id: thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
kind: theorem
title: Variation field of a geodesic variation is a Jacobi field
status: published
origin: pipeline
deps:
  - def-covariant-derivative-along-a-curve
  - def-geodesic-variation
  - def-jacobi-field
  - def-levi-civita-connection
  - lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Theorem 10.2 and proof, printed pp.175-176 (PDF labels P191-192); Lemma 10.1 for the curvature commutator"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 22.2.1 forward direction and proof, printed pp.162-163 (PDF labels P169-170)"
---

## Statement

Let $(M,g)$ be a Riemannian manifold, let $a<b$, let $\varepsilon>0$, and
let
$$F:(-\varepsilon,\varepsilon)\times[a,b]\longrightarrow M$$
be a smooth geodesic variation, so every longitudinal curve
$t\mapsto F(s,t)$ is an affinely parametrized geodesic. Set
$$\gamma(t)=F(0,t),\qquad V(t)=\left.\partial_sF(s,t)\right|_{s=0}.$$
Then $V$ is a Jacobi field along $\gamma$:
$$D_t^2V+R(V,\dot\gamma)\dot\gamma=0$$
on $[a,b]$, using one-sided derivatives at included endpoints. No fixed
endpoint condition is imposed; constant geodesics and dimension zero are
included. This implication uses no axiom of choice.

## Facts & Assumptions

**Given:** The supplied Riemannian manifold and smooth geodesic variation $F:(-\varepsilon,\varepsilon)\times[a,b]\to M$ with $a<b$.

[F1] A geodesic variation has central geodesic $\gamma(t)=F(0,t)$ and variation field $V(t)=\partial_sF(0,t)$; each longitudinal curve is affinely parametrized and satisfies $D_t\partial_tF=0$ ([[def-geodesic-variation]]).

[F2] Along a smooth two-parameter map, covariant derivatives satisfy $$D_sD_tW-D_tD_sW=R(F_s,F_t)W$$ for every smooth field $W$ along the map ([[lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation]]).

[F3] The Levi-Civita connection is torsion free: $$\nabla_XY-\nabla_YX=[X,Y]$$ ([[def-levi-civita-connection]]).

[F4] A smooth field $J$ along $\gamma$ is Jacobi when it satisfies $$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$ ([[def-jacobi-field]]).

[F5] Covariant differentiation along each parameter curve is defined by the induced pullback connection, for example $$D_tW=(\gamma^*\nabla)_{\partial/\partial t}W$$ for a curve $\gamma$ and a field $W$ along it ([[def-covariant-derivative-along-a-curve]]).

## Proof

1.1 Put $S=F_s$ and $T=F_t$. By [F1], $D_tT=0$ on the parameter rectangle, and the central variation field is $V=S(0,\cdot)$. Smoothness of $F$ makes $S$ and $T$ smooth fields along $F$. [F1, F5, given]

2.1 Apply [F2] to the field $T$. Since $D_tT=0$, $$0=D_sD_tT=D_tD_sT+R(S,T)T,$$ so $D_tD_sT+R(S,T)T=0$ throughout the rectangle. [F2, step 1.1]

3.1 In local coordinates on $M$, torsion freeness [F3] and equality of the mixed partial derivatives of $F$ give $D_sT=D_tS$: the ordinary mixed derivatives agree, and the connection terms cancel because the torsion is zero. Thus [F2] and [F3] imply $$D_t^2S+R(S,T)T=0$$ for every $s$. At $s=0$, $S=V$ and $T=\dot\gamma$, so [F4] shows that $V$ is Jacobi along $\gamma$. [F2, F3, F4, F5, step 2.1]

4.1 The equation holds on the interior and extends to included endpoints by smoothness up to $t=a,b$ and the one-sided covariant derivatives. If $V=0$, the equation is immediate. If the central geodesic is constant, $T(0,t)=0$ and the same computation reduces to $D_t^2V=0$. Empty $M$ has no supplied variation; in dimension zero every field along $F$ is zero; in dimension one the same calculation applies. The map $F$ and its derivatives are supplied, and the proof uses no selection. This is a one-way implication, not an iff claim. [F1, F4, F5, step 3.1] ∎
