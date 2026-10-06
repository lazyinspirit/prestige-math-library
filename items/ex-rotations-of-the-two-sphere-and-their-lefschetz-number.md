---
id: ex-rotations-of-the-two-sphere-and-their-lefschetz-number
kind: example
title: "Rotations of the two-sphere and their Lefschetz number"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lefschetz-hopf-index-formula, thm-index-of-a-nondegenerate-fixed-point, def-global-geometric-lefschetz-number, def-algebraic-lefschetz-number, cor-lefschetz-number-of-the-identity-is-the-euler-characteristic, cor-homology-of-spheres, def-degree-of-a-self-map-of-an-oriented-sphere, def-c-r-and-smooth-maps-between-smooth-manifolds, def-axiom-of-choice, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 123-124 (the southward map of S^2 has a source and a sink, both of local number +1, and L=2=chi(S^2))"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 15 (Example 6.1: L=1+(-1)^n deg f; Example 6.3: a rotation of S^2 has L=2)"
dependency_level: 13
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $R:S^2\to S^2$ be a rotation of the unit sphere. Then $L(R)=2=\chi(S^2)$
([[def-algebraic-lefschetz-number]]). For a rotation by an angle
$\theta\notin2\pi\mathbb Z$ the fixed point set is exactly the two poles, both fixed
points are nondegenerate of index $+1$, and therefore
$I(R)=1+1=2=L(R)$
([[def-global-geometric-lefschetz-number]],
[[thm-lefschetz-hopf-index-formula]]). For the identity (angles in $2\pi\mathbb Z$)
the fixed set is the whole sphere and the geometric index sum is not
defined directly, while the Lefschetz number is still $2$, because every rotation is
homotopic to the identity.

## Verification

**Given:** A rotation $R$ of $S^2$ about the axis through the poles.

[F1] $H_*(S^2;\mathbb Q)$ is $\mathbb Q$ in degrees $0$ and $2$ and vanishes
elsewhere ([[cor-homology-of-spheres]]); the degree of an orientation-preserving
diffeomorphism of $S^2$ is $+1$
([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]],
[[def-degree-of-a-self-map-of-an-oriented-sphere]]); homotopic maps have equal
Lefschetz numbers and $L(\mathrm{id})=\chi(S^2)$
([[cor-lefschetz-number-of-the-identity-is-the-euler-characteristic]]).

[F2] A nondegenerate fixed point has index
$\operatorname{sign}\det(I-Df_x)$
([[thm-index-of-a-nondegenerate-fixed-point]]).

1.1 The Lefschetz number is $2$. Every rotation is homotopic to the identity through rotations. Since $H_0(S^2;\mathbb Q)=H_2(S^2;\mathbb Q)=\mathbb Q$ and the other groups vanish by [F1], the trace formula gives $L(\mathrm{id})=1+1=\chi(S^2)=2$, and homotopy invariance gives $L(R)=2$. Equivalently, $R_*$ is the identity on $H_0$ and multiplication by $\deg R=1$ on $H_2$, so $L(R)=1+1$. [given, F1]

2.1 The fixed points of a generic rotation. In coordinates $z$ on $S^2$ centred at the north pole the rotation is $z\mapsto e^{i\theta}z$ for $\theta\notin2\pi\mathbb Z$; fixed points solve $(e^{i\theta}-1)z=0$, so $z=0$, and near the south pole the same computation in the chart $w=1/z$ shows that only the south pole is fixed. At each pole the displacement has invertible differential $1-e^{\pm i\theta}\neq0$, so both fixed points are nondegenerate and by [F2] each has index $\operatorname{sign}\det(1-e^{\pm i\theta}\cdot\mathrm{id}_{\mathbb R^2})=+1$ (the linear map is a positive multiple of a rotation). Hence $I(R)=1+1=2=L(R)$, in agreement with the index formula. For the half-turn $\theta=\pi$, the same two poles are the entire fixed set and $I-DR=2I$ on each tangent plane, so each is nondegenerate of index $+1$. For $\theta\in2\pi\mathbb Z$ the map is the identity and fixes all of $S^2$; this fixed set is not isolated, so only the Lefschetz number $2$ is asserted directly. [step 1.1, F2] ∎
