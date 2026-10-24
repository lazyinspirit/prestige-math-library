---
id: ex-framed-zero-manifolds-and-signed-points
kind: example
title: "Framed zero-manifolds and signed points"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
  - def-countable-choice
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-regular-value-formula-for-degree
  - def-orientation-of-a-finite-dimensional-real-vector-space
  - def-framing-of-a-normal-bundle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, framed 0-manifolds and the proof of the Hopf theorem, printed pp.50-51"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Proposition 6.13 and the framed rank-zero case, electronic pp.113-114"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemmas 2.44-2.46 and Exercise 2.49, printed pp.23-24"
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $n\ge1$, a closed framed $0$-dimensional submanifold of $S^n$ is a finite
set of points (zero-dimensional charts make the singletons open, and compactness gives a finite singleton subcover), each framed by a basis of $T_xS^n$ (the normal bundle of a point
is the whole tangent space, [[def-framing-of-a-normal-bundle]]). Call the
framing positive when that basis is positively oriented for the standard
orientation of $S^n$, and let $\operatorname{sgn}(x)=\pm1$ accordingly.
Framed cobordism classes of such points are classified by the signed count
$$\sum_x\operatorname{sgn}(x)\in\mathbb Z:$$
under the fixed-codimension correspondence with $k=n$ the signed count is the
degree of the Pontryagin-Thom map $S^n\to S^n$, and $\pi_n(S^n)\cong\mathbb Z$
by degree. A single positively framed point realizes $+1$, its orientation
reversal $-1$, and the empty $0$-manifold $0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an integer $n\ge1$, the standard oriented sphere $S^n$, and a closed framed $0$-submanifold $P=\{(x_i,\varphi_i)\}$ of $S^n$ with finitely many points.

[F1] The normal bundle of a point $x\in S^n$ is $T_xS^n$; a framing is a basis, and reversing one vector changes the orientation class ([[def-framing-of-a-normal-bundle]], [[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[F2] The Pontryagin-Thom map of a framed point $(x,\varphi)$ is smooth and equals the composite of the framing with the radial collapse of a small tube; the centre $y_0$ is a regular value with preimage $\{x\}$, and the sign of the differential there is $+1$ for a positive framing and $-1$ for a negative one ([[def-pontryagin-thom-map-of-a-framed-submanifold]], [[def-framed-regular-preimage-of-a-map-to-a-sphere]]).

[F3] For a proper smooth map between nonempty connected closed oriented $n$-manifolds, the degree is computed at any regular value as the sum of the signs of the differential over the finite preimage ([[thm-regular-value-formula-for-degree]], [[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

[F4] The Pontryagin-Thom correspondence with $n=k\ge1$ is a bijection from framed cobordism classes of closed framed $0$-submanifolds of $S^n$ to $\pi_n(S^n)$, and degree is an isomorphism $\pi_n(S^n)\to\mathbb Z$ ([[thm-pontryagin-thom-correspondence-in-fixed-codimension]], [[thm-based-sphere-maps-are-classified-by-geometric-degree]]).

## Verification

1.1 (A single framed point has degree $\pm1$.) Let $(x,\varphi)$ be a framed point and let $f=f_{(x,\varphi)}$ be its Pontryagin-Thom map. By [F2], $f$ is smooth, the centre $y_0$ is a regular value and $f^{-1}(y_0)=\{x\}$; the differential of $f$ at $x$ is the framing composed with the orientation-preserving identification of $\mathbb R^n$ with $T_{y_0}S^n$, so its sign is $+1$ when the basis $\varphi$ is positive and $-1$ when it is negative. By the regular-value formula [F3], $\deg(f)=+1$ in the first case and $\deg(f)=-1$ in the second: a positively framed point realizes $+1$ and its orientation reversal $-1$. [F1, F2, F3]

2.1 (Finite unions and the signed count.) For a finite framed $0$-manifold $P=\{(x_1,\varphi_1),\dots,(x_m,\varphi_m)\}$ choose pairwise disjoint tubes around the points and use the normalized smooth single-point collapses of [F2] on them, sending their complement to the basepoint. Each collapse is constant near its tube boundary, so the resulting map $f_P:S^n\to S^n$ is smooth everywhere. Its centre preimage is $P$, and at $x_i$ its differential induces $\varphi_i$, with local sign $\operatorname{sgn}(x_i)$ by step 1.1. Thus $y_0$ is regular, including when $P$ is empty. Since $n\ge1$, both spheres are nonempty connected closed oriented manifolds, and $f_P$ is proper by compactness. The regular-value formula [F3] therefore gives $\deg f_P=\sum_i\operatorname{sgn}(x_i)$, including the empty sum zero. [F2, F3, given, step 1.1]

3.1 (Classification.) By the correspondence of [F4] two closed framed $0$-manifolds of $S^n$ are framed cobordant if and only if their Pontryagin-Thom maps are homotopic, and by [F4] homotopy classes of based self-maps of $S^n$ are classified by degree. By step 2.1 the degree of the Pontryagin-Thom map of $P$ is exactly the signed count, so the framed cobordism class of $P$ is determined by $\sum_x\operatorname{sgn}(x)$ and every integer occurs: for $m\in\mathbb Z$ take $|m|$ distinct points framed positively if $m>0$ and negatively if $m<0$, and the empty set for $m=0$. Hence framed cobordism classes of framed $0$-manifolds are classified by the signed count. [F1, F4, step 1.1, step 2.1] ∎
