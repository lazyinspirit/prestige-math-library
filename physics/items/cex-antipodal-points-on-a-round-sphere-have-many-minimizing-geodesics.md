---
id: cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics
kind: counterexample
title: Antipodal points on a round sphere have many minimizing geodesics
status: published
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-countable-choice, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions, cor-euclidean-spheres-are-path-connected, thm-path-connected-implies-connected, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-gram-schmidt-orthonormalisation, ex-great-circles-as-round-sphere-geodesics, thm-hopf-rinow, thm-riemannian-distance-is-a-metric, def-riemannian-speed-and-length, def-riemannian-distance-on-a-connected-manifold, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 15.3.1 and Theorem 19.2.1, pp. 117--118 and 141--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: explicit family and distance comparison
---

## Statement refuted

The assertion that a pair of points joined by a minimizing geodesic must have a
unique minimizing geodesic is false. Assume $\mathrm{AC}_\omega$. For every
$n\geq2$, every $p$ on the round unit sphere $S^n$ is antipodal to $-p$, and
$p$ and $-p$ are joined by infinitely many distinct minimizing
half-great-circles. More precisely, every unit $u\in T_pS^n$ gives one such
curve
$$
\gamma_u(t)=\cos t\,p+\sin t\,u,\qquad 0\leq t\leq\pi.
$$

## Facts & Assumptions

**Given:** An integer $n\geq2$, a point $p\in S^n$, and the round metric induced by the Euclidean inner product.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$. It is used only when [[thm-hopf-rinow]] supplies a globally minimizing geodesic; the explicit family of half-great-circles uses no choice principle.

[F1] For $F(x)=\langle x,x\rangle$, $dF_p(v)=2\langle p,v\rangle$ is nonzero at every unit $p$. Hence [[thm-a-regular-level-set-is-an-embedded-submanifold]] gives $S^n$ its smooth boundaryless $n$-manifold structure and [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]] gives $T_pS^n=p^\perp$. Inclusion is an immersion, so [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]] makes the restricted Euclidean inner product its round metric. Instantiating [[cor-euclidean-spheres-are-path-connected]] in $\mathbb R^{n+1}$ shows that $S^n$ is path connected, and [[thm-path-connected-implies-connected]] makes it connected.

[F2] In a chart at $p$, [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]] supplies a basis of the $n$-dimensional tangent space. Since $n\geq2$, applying [[thm-gram-schmidt-orthonormalisation]] to its first two vectors gives fixed orthonormal vectors $u_1,u_2\in T_pS^n$.

[F3] [[ex-great-circles-as-round-sphere-geodesics]] proves that all maximal round-sphere geodesics, constant or nonconstant, are defined on $\mathbb R$. It also proves that for each unit $u\in T_pS^n$, the displayed $\gamma_u$ is a unit-speed geodesic. Thus the round sphere is geodesically complete.

[F4] Under [A1], [[thm-hopf-rinow]] says that a nonempty, connected, boundaryless, geodesically complete Riemannian manifold has a minimizing geodesic between every two points. [[thm-riemannian-distance-is-a-metric]] gives separation and nonnegativity for its Riemannian distance.

[F5] [[def-riemannian-speed-and-length]] computes the length of a unit-speed curve on $[0,\pi]$ as $\pi$, and [[def-riemannian-distance-on-a-connected-manifold]] defines distance as the infimum of the lengths of piecewise-smooth joining curves. [[thm-sine-cosine-signs-monotonicity-and-ranges]] says that cosine is strictly decreasing on $[0,\pi]$, while [[thm-quarter-turn-values-and-shift-formulas]] gives $\cos\pi=-1$, $\sin\pi=0$, $\cos(\pi/2)=0$, and $\sin(\pi/2)=1$.

## Counterexample

**Proof technique:** explicit family and distance comparison.

1.1 The point $p$ is not equal to $-p$: equality would give $p=0$, contrary to $|p|=1$. By [F1] and [F3], the round sphere satisfies all the geometric hypotheses of [F4]. Hence [F4], under [A1], supplies a minimizing geodesic $\eta:[0,1]\to S^n$ from $p$ to $-p$ with constant speed $$ L=d(p,-p)>0 $$ and length $L$. [A1, F1, F3, F4]

1.2 Fix any unit $u\in T_pS^n$; such a vector exists because [F2] supplies $u_1$. By [F3] and [F5], $\gamma_u$ is a geodesic from $$ \gamma_u(0)=p\quad\hbox{to}\quad \gamma_u(\pi)=-p $$ of length $\pi$. Therefore the definition of Riemannian distance gives $L=d(p,-p)\leq\pi$. The calculation applies to every unit $u$. [F2, F3, F5]

1.3 For each $m\in\mathbb N$, define $$ u_m=\frac{u_1+m u_2}{\sqrt{1+m^2}}. $$ Orthonormality gives $|u_m|=1$. If $u_m=u_k$, comparison of the nonzero $u_1$ coefficients and then of the ratios of the $u_2$ and $u_1$ coefficients gives $m=k$. Hence $(u_m)_{m\in\mathbb N}$ is an infinite family of distinct unit tangent vectors. This construction uses the two fixed vectors from [F2], not a choice of a vector from each member of a family. [F2, algebra]

2.1 Apply the explicit great-circle formula [F3] to the nonconstant geodesic $\eta$, based at $t=0$. Its speed is $L$, so there is a unit $w\in T_pS^n$ such that $$ \eta(t)=\cos(Lt)p+\sin(Lt)w. $$ Taking the Euclidean inner product of the endpoint equality $-p=\eta(1)$ with $p$, and using $w\perp p$, gives $\cos L=-1$. Steps 1.1--1.2 put $L$ in $(0,\pi]$. Cosine is strictly decreasing on $[0,\pi]$ and $\cos\pi=-1$ by [F5], so $L=\pi$. Thus $$ d(p,-p)=\pi. $$ [F3, F5, step 1.1, step 1.2]

3.1 Since the unit vector in step 1.2 was arbitrary, steps 1.2 and 2.1 show that every $\gamma_u$ has length $\pi=d(p,-p)$ and is globally minimizing. In particular this holds for every $u_m$. Moreover [F5] gives $$ \gamma_{u_m}(\pi/2)=u_m. $$ The distinctness in step 1.3 therefore makes these curves distinct. This is an explicit infinite collection of minimizing half-great-circles with the same two endpoints and proves the claimed failure of uniqueness. [F5, step 1.2, step 2.1, step 1.3]

4.1 The lower-dimensional cases $n=0,1$ lie outside the quantified claim: the construction of an infinite family in step 1.3 specifically requires the two orthonormal tangent directions that [F2] obtains from $n\geq2$. The zero-distance case cannot occur because $p\ne-p$ and the Riemannian distance is a metric; the parameter endpoints $0,\pi/2,\pi$ were evaluated explicitly. No empty-manifold case arises because $p$ is given, and there is no iff assertion. Assumption [A1] is spent exactly in step 1.1 through Hopf--Rinow and nowhere in the explicit family. [A1, F2, F4, F5, step 1.1, step 1.3, step 3.1] ∎

## Source locator

- Datar, Proposition 15.3.1 and its complete proof, printed pp. 117--118 (PDF pp. 125--126), identifies round-sphere geodesics with great circles.
- Datar, Theorem 19.2.1 and its proof, printed pp. 141--144 (PDF pp. 149--152), supplies the Hopf--Rinow equivalences and a minimizing geodesic. The calculation $d(p,-p)=\pi$ and the explicit infinite family are derived above rather than imported from a citation.
