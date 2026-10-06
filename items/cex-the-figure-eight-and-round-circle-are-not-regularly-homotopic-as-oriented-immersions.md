---
id: cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions
kind: counterexample
title: "Refuted: the figure-eight and the round circle are regularly homotopic as oriented immersions"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-degree-of-a-circle-loop
  - def-immersion-submersion-and-constant-rank-map
  - def-rotation-number-of-an-immersed-oriented-circle-in-the-plane
  - cor-degree-descends-to-circle-loop-classes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hassler Whitney, On regular closed curves in the plane, Compositio Mathematica 4 (1937), pp. 276–284"
      url: https://www.numdam.org/item/CM_1937__4__276_0.pdf
      locator: "§1, pp. 276–279; equal rotation number is necessary and sufficient for regular homotopy"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the winding-number classification in the case $n=1$"
dependency_level: 14
---

## Statement refuted

**False claim:** any two oriented immersed circles in the plane are regularly
homotopic; in particular the Gerono lemniscate and the round circle, despite
both being images of a single parametrised circle, represent the same regular
homotopy class.

The claim fails because the regular homotopy invariant of oriented immersed
circles is the rotation number, which is not changed by bending, translating or
self-crossing moves but jumps between the two curves in question.

## Facts & Assumptions

**Given:** The Gerono lemniscate $\delta(\theta)=(\cos\theta,\sin2\theta)$ and the round circle $\gamma_1(\theta)=(\cos\theta,\sin\theta)$, both with the positive orientation of $S^1=\mathbb R/2\pi\mathbb Z$.

[F1] The rotation number of an oriented immersed circle is the degree of its unit tangent map, equal to the winding number of the velocity about the origin. [[def-rotation-number-of-an-immersed-oriented-circle-in-the-plane]], [[def-degree-of-a-circle-loop]]

[F2] A smooth plane curve is an immersion exactly when its velocity is nowhere zero. [[def-immersion-submersion-and-constant-rank-map]]

[F3] Degree is a function on based circle-loop homotopy classes, so endpoint-fixed homotopic based loops have equal degree. [[cor-degree-descends-to-circle-loop-classes]]

## Counterexample

1.1 $\delta(\theta)=(\cos\theta,\sin2\theta)$ has velocity $(-\sin\theta,2\cos2\theta)$, whose squared norm $\sin^2\theta+4\cos^2 2\theta$ never vanishes: if $\sin\theta=0$ then $\cos2\theta=1$. It is therefore an immersion. If $\delta(\theta)=\delta(\phi)$, equality of cosines gives $\phi=\theta$ or $\phi=-\theta$ modulo $2\pi$. In the latter case $\sin2\theta=0$; the only distinct pair is $\pi/2,3\pi/2$, both mapping to $(0,0)$. Thus the origin is its unique double point. The round circle is an injective immersion with unit-speed velocity. [F2, algebra]

1.2 The velocity of $\delta$ is $p(\sin\theta)$ with $p(u)=(-u,2-4u^2)$. The map $p$ never vanishes, and $p((1-t)\sin\theta)$ contracts the velocity loop to $(0,2)$ through nonzero vectors. Hence $\operatorname{rot}(\delta)=0$. The unit tangent of $\gamma_1$ is $(-\sin\theta,\cos\theta)$, a rotation of the identity circle map and of degree $1$. [F1, construct, algebra]

2.1 Any smooth homotopy $H:S^1\times[0,1]\to\mathbb R^2$ through immersions has continuous nonzero velocity $\partial_\theta H(\theta,t)$, so its normalized velocity $\tau(\theta,t)$ is a continuous homotopy of circle maps. In complex notation $\beta_t(u)=\tau(2\pi u,t)/\tau(0,t)$, $0\le u\le1$, is a based circle loop, and $(u,t)\mapsto\beta_t(u)$ is a homotopy fixing both endpoints at $1$. By [F1] its degree is $\operatorname{rot}(H_t)$, since the target rotation used to base it does not change degree. By [F3] these degrees agree at the two ends. As step 1.2 gives $0\ne1$, no such regular homotopy joins $\delta$ to $\gamma_1$, refuting the false claim without a choice hypothesis or the sufficiency direction of classification. [F1, F3, step 1.2, construct]

3.1 The obstruction also distinguishes maps with the same image: $\gamma_2(\theta)=(\cos2\theta,\sin2\theta)$ is an immersion with the round circle as its image and no transverse self-intersection, yet its unit tangent $(-\sin2\theta,\cos2\theta)$ has degree $2$. The invariance argument of step 2.1 therefore separates it from $\gamma_1$ as well. Thus neither the image nor its number of transverse self-intersections determines the regular homotopy class; rotation number separates the figure-eight from the round circle. [F1, F2, step 2.1, algebra] ∎
