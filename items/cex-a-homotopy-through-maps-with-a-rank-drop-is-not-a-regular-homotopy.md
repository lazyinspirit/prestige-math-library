---
id: cex-a-homotopy-through-maps-with-a-rank-drop-is-not-a-regular-homotopy
kind: counterexample
title: "Refuted: a homotopy that is immersive at every earlier time is a regular homotopy"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-regular-homotopy-of-immersions, def-immersion-submersion-and-constant-rank-map, cor-the-immersion-and-submersion-loci-are-open, rem-regular-homotopy-allows-self-intersections-but-never-rank-drop, def-smooth-family-of-maps-and-evaluation-map]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 9: Immersions into Euclidean space, from Smale to Cohen (notes by M. Hoyois)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/9euclidean.pdf
      locator: "PDF pp. 1–3; the immersion condition is open in the strong topology on a compact source"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; regular homotopies are families of immersions, a pointwise condition on every slice"
dependency_level: 17
---

## Statement refuted

**False claim:** a smooth homotopy $H:M\times[0,1]\to N$ whose slices
$H_t$ are immersions for every $t<1$ is a regular homotopy, so it may be used
to conclude that $H_0$ and $H_1$ are regularly homotopic (in particular that
the round circle is regularly homotopic to a point, or that a sphere may be
eversioned by shrinking it).

The claim fails because a regular homotopy requires **every** slice, including
the final one, to be an immersion.

## Facts & Assumptions

**Given:** The family $H:S^1\times[0,1]\to\mathbb R^2$, $H_t(\theta)=((1-t)\cos\theta+t,\,(1-t)\sin\theta)$.

[F1] A regular homotopy between immersions is a smooth family whose every slice is an immersion, with prescribed immersive ends. [[def-regular-homotopy-of-immersions]]

[F2] An immersion is a smooth map whose differential is injective at every point; equivalently, on a curve, a map with everywhere nonvanishing velocity. [[def-immersion-submersion-and-constant-rank-map]]

[F3] Regular homotopy permits self-intersections but requires injective differential at every point of every slice. [[rem-regular-homotopy-allows-self-intersections-but-never-rank-drop]]

[F4] Smooth families are the adjoints of smooth maps and evaluation of a family at a parameter is continuous. [[def-smooth-family-of-maps-and-evaluation-map]]

## Counterexample

1.1 For every $t<1$ the slice $H_t(\theta)=((1-t)\cos\theta+t,(1-t)\sin\theta)$ has derivative $H_t'(\theta)=(-(1-t)\sin\theta,(1-t)\cos\theta)$ of norm $1-t>0$, hence is an immersion with image the circle of radius $1-t$ centred at $(t,0)$; at $t=0$ this is the standard unit circle. [F2]

1.2 At $t=1$ the slice is the constant map $H_1(\theta)=(1,0)$, whose derivative vanishes identically: the differential has rank $0<1=\dim S^1$ at every point. So the family contains a rank drop at the final time and $H_1$ is not an immersion. [F2]

2.1 Therefore $H$ is not a regular homotopy in the sense of [F1], since a regular homotopy requires every slice to be immersive, and it cannot certify any regular-homotopy claim: in particular this shrinking family does not show that the circle is regularly homotopic to a point, because the point is not an immersion and the rotation number (here $1$ at the initial slice) would have to remain constant while no rotation number is defined for the final slice. The failed conclusion is exactly the rank-drop phenomenon separated in [F3]: the final slice fails the injective-differential condition. [F1, F2, F3, step 1.1, step 1.2]

3.1 The family $H$ is smooth in $(\theta,t)$, but its final slice is constant. Any perturbation that keeps this final slice still has zero final derivative, so it still fails to be a regular homotopy, independently of its size. Self-intersections are compatible with immersive slices; a rank drop is not. [F2, F3, F4, step 1.2, step 2.1] ∎