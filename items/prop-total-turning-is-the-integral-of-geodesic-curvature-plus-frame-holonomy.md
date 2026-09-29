---
id: prop-total-turning-is-the-integral-of-geodesic-curvature-plus-frame-holonomy
kind: proposition
title: Total turning with connection and corner terms
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - prop-angle-derivative-formula-for-geodesic-curvature
  - def-signed-exterior-angle-at-a-piecewise-smooth-corner
  - thm-connection-one-form-rotation-law-on-an-oriented-surface
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed pp. 164–166 (PDF pp. 180–182), equations (9.3)–(9.4) and the proof of Theorem 9.3: the tangent-angle derivative $\\theta'=k_g-\\omega_{\\mathrm{std}}(\\dot\\gamma)$ is integrated along the boundary and the corner terms are added. The frame-change bookkeeping is carried out here in this page's sign convention."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.1, Lemma 2.1.2, printed pp. 11–12 (PDF pp. 19–20), and §2.2, printed pp. 13–15: $k_g=\\theta'-\\omega_{\\mathrm{std}}(\\dot\\gamma)$, integrated along a closed curve with corner increments. The transition-angle bookkeeping for a cover by frames is derived locally here."
---

## Statement

Let $(M,g,J)$ be an oriented Riemannian surface, let $U\subseteq M$ be open with
a specified smooth positively oriented $g$-orthonormal frame $(E_1,E_2)$, and
let $\omega(X)=g(\nabla_XE_1,E_2)$ be its connection form in the convention of
this page. Let $\gamma:[a,b]\to U$ be a closed piecewise $C^2$ regular
unit-speed curve with matching unit tangents at the identified endpoint and with
finitely many ordinary corners at parameters $a<t_1<\dots<t_m<b$. Suppose each
smooth arc $\gamma|_{[t_{j-1},t_j]}$ carries a $C^1$ angle lift $\theta_j$ with
$\dot\gamma=\cos\theta_j\,E_1+\sin\theta_j\,E_2$. Then
$$\sum_{j=1}^{m+1}\bigl(\theta_j(t_j)-\theta_j(t_{j-1})\bigr)=\int_\gamma k_g\,ds-\int_\gamma\omega ,$$
where $t_0=a$, $t_{m+1}=b$, the $\alpha_j$ are the signed exterior angles of the
corners, defined here for this possibly self-intersecting curve as the unique
$\alpha_j\in(-\pi,\pi)$ satisfying
$T_+=\cos\alpha_j\,T_-+\sin\alpha_j\,JT_-$; ordinary means
$T_+\ne-T_-$. This extends the same signed-angle convention from regular-region
boundaries, without requiring a region bounded by $\gamma$. Also
$\int_\gamma\omega:=\sum_j\int_{t_{j-1}}^{t_j}
\omega(\dot\gamma(t))\,dt$. Consequently the total geodesic turning
$\int_\gamma k_g\,ds+\sum_j\alpha_j$ equals
$\sum_j(\theta_j(t_j)-\theta_j(t_{j-1}))+\sum_j\alpha_j+\int_\gamma\omega$.
This latter expression is independent of the chosen positive frame. The same
identity holds when $\gamma$ is covered by finitely many positive frames and
the connection and angle increments are computed separately on each framed
arc: a frame transition changes the angle increment by the negative of the
transition-angle increment and the connection integral by its positive
increment, so their sum is unchanged.

## Facts & Assumptions

**Given:** An oriented Riemannian surface, an open set $U$ with a specified smooth positive orthonormal frame, and a closed piecewise $C^2$ regular unit-speed curve in $U$ with finitely many ordinary corners, matching endpoint tangents, and a $C^1$ angle lift on each smooth arc.

[F1] Tangent-angle formula: on a connected subinterval where $\dot\gamma=\cos\theta\,E_1+\sin\theta\,E_2$ with $\theta$ of class $C^1$, $k_g=\theta'+\omega(\dot\gamma)$, with one-sided derivatives at included endpoints ([[prop-angle-derivative-formula-for-geodesic-curvature]]).

[F2] For a positively oriented regular-region boundary, at an ordinary corner the signed exterior angle is the unique $\alpha\in(-\pi,\pi)$ with $T_+=\cos\alpha\,T_-+\sin\alpha\,JT_-$, where $T_-,T_+$ are the incoming and outgoing unit tangents ([[def-signed-exterior-angle-at-a-piecewise-smooth-corner]]).

[F3] A second smooth positive orthonormal frame $(E'_1,E'_2)$ on a patch $V$ with supplied smooth angle lift $\varphi$ satisfying $E'_1=\cos\varphi\,E_1+\sin\varphi\,E_2$ and $E'_2=-\sin\varphi\,E_1+\cos\varphi\,E_2$ has connection form $\omega'|_V=\omega|_V+d\varphi$ ([[thm-connection-one-form-rotation-law-on-an-oriented-surface]]).

[F4] On a unit-speed curve, $ds=dt$ and $k_g=g(A_\gamma,J\dot\gamma)$ is the signed geodesic curvature ([[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

## Proof

**Proof technique:** integrate the angle-derivative formula on each smooth arc, add the corner jumps, then verify that a change of frame moves both sides by the same amount.

1.1 On each smooth arc the curve is unit speed, so [F4] gives $ds=dt$ and $k_g\,ds=k_g\,dt$; by [F1] applied to the arc's angle lift, $\theta_j'=k_g-\omega(\dot\gamma)$ there, with one-sided derivatives at the interior endpoints. [F1, F4, given]

2.1 Summing the fundamental theorem of calculus over the $m+1$ arcs gives $\sum_j(\theta_j(t_j)-\theta_j(t_{j-1})) =\int_\gamma k_g\,ds-\int_\gamma\omega$. [step 1.1, algebra]

3.1 At a corner, $(T_-,JT_-)$ is a positive orthonormal basis, so the unit vector $T_+$ has coordinates $(\cos\alpha_j,\sin\alpha_j)$ for a unique angle in $(-\pi,\pi)$ because $T_+\ne-T_-$. This is the local definition in the Statement and agrees with [F2] when the curve is a regular-region boundary. Add the sum of these corner terms and $\int_\gamma\omega$ to both sides of step 2.1. The result is the stated expression for total geodesic turning $\int_\gamma k_g\,ds+\sum_j\alpha_j$. If some smooth arc has constant tangent direction relative to the chosen frame, its angle increment is $0$ and the identity remains valid. [F2, step 2.1, algebra]

4.1 Frame independence. Suppose on an overlap $V$ a second positive frame is given with angle lift $\varphi$ as in [F3]. Since $\dot\gamma=\cos\theta_jE_1+\sin\theta_jE_2 =\cos(\theta_j-\varphi)E'_1+\sin(\theta_j-\varphi)E'_2$ on the overlap, the angle lift for the primed frame is $\theta_j-\varphi$, and [F3] gives $\omega'=\omega+d\varphi$ there. On each framed subarc the angle increment changes by $-\Delta\varphi$ and the connection-form integral changes by $+\Delta\varphi$, so their sum is unchanged. The corner angle $\alpha_j$ is defined from the tangent vectors themselves and is also unchanged. Applying this on a finite cover by framed subarcs proves the asserted frame independence of the total geodesic turning expression. [F2, F3, step 3.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” equations (9.3)–(9.4) and the proof of Theorem 9.3, printed pp. 164–166, integrates the tangent-angle derivative along a boundary curve and adds the corner contributions; Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.1, Lemma 2.1.2 and §2.2, follows the same route. Both sources state the result in the opposite connection-form sign $\omega_{\mathrm{std}}=-\omega$; the identity above is its transcription into this page's convention, with the transition-angle bookkeeping for covers by frames proved locally.
