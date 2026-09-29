---
id: def-signed-exterior-angle-at-a-piecewise-smooth-corner
kind: definition
title: Signed exterior angle at an ordinary corner
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §Some Plane Geometry, printed p. 157 (PDF p. 173), lines 6176–6196, defines the signed principal exterior angle and excludes opposite-tangent cusps; §The Gauss–Bonnet Formula, printed p. 163 (PDF p. 179), lines 6398–6408, gives the oriented Riemannian-surface version."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, §2.0, printed pp. 10–11 (PDF pp. 16–17), lines 498–530, defines signed exterior angles, excludes ±π cusps, and specifies the positive boundary orientation and local formula."
---

## Definition

Let $D$ be a regular oriented region in an oriented Riemannian surface, and
let $p$ be one of its ordinary boundary vertices. Let $T_-$ and $T_+$ be the
incoming and outgoing one-sided unit tangents to the positively oriented
boundary at $p$. The **signed exterior angle** at $p$ is the unique
$\alpha\in(-\pi,\pi)$ such that
$$T_+=\cos(\alpha)T_-+\sin(\alpha)JT_-,$$
where $J$ is the positive quarter-turn. The opposite-tangent case
$T_+=-T_-$ is excluded because it does not distinguish $+\pi$ from $-\pi$.

If $\beta\in(0,2\pi)$ is the interior sector angle at a positively oriented
boundary corner, then
$$\alpha=\pi-\beta.$$
Thus convex corners have positive exterior angle, reflex corners have
negative exterior angle, and a straight subdivision point has angle zero.
For the same tangent vectors, replacing $J$ by $-J$ changes $\alpha$ to
$-\alpha$. For fixed $J$, reversing the boundary parameter changes the
ordered pair to $(-T_+,-T_-)$ and also changes the signed angle to $-\alpha$.

## Facts & Assumptions

**Given:** An oriented Riemannian surface with positive quarter-turn $J$, a regular oriented region $D$, and its positively oriented boundary with a specified ordinary vertex $p$ and one-sided unit tangents $T_-,T_+$.

[F1] In a positive orthonormal frame, $J E_1=E_2$ and $J E_2=-E_1$; hence for any unit vector $T$, $(T,JT)$ is a positive orthonormal basis ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F2] At an ordinary vertex the one-sided velocities are not opposite: the regular-region definition requires $v_+\ne -c v_-$ for every $c>0$ ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

## Proof

**Proof technique:** oriented metric coordinates in the tangent plane.

1.1 By [F1], $(T_-,JT_-)$ is a positive orthonormal basis of $T_pM$. Write $T_+=aT_-+bJT_-$. Since $T_+$ is unit, $a^2+b^2=1$. By [F2], $T_+\ne -T_-$, so $(a,b)\ne(-1,0)$. The unit circle with that one point removed has a unique angle coordinate $\alpha\in(-\pi,\pi)$, with $a=\cos\alpha$ and $b=\sin\alpha$. This proves existence and uniqueness of the stated signed angle. If $T_+=T_-$, then $(a,b)=(1,0)$ and $\alpha=0$. [F1, F2, given]

2.1 At a positively oriented boundary vertex the region lies to the left of each boundary arc. Its interior sector angle $\beta$ is therefore the positive turn from $T_+$ to the backward tangent $-T_-$ through the sector, with $0<\beta<2\pi$ by the supplied ordinary-corner chart and [F2]. In the positive orthonormal basis $(T_-,JT_-)$, the turn from $T_-$ to $-T_-$ is $\pi$, while the turn from $T_-$ to $T_+$ is $\alpha$. Thus the positive turn from $T_+$ to $-T_-$ through the region is $\pi-\alpha$; since $\alpha\in(-\pi,\pi)$, this number is already in $(0,2\pi)$ and equals $\beta$, with no modulo ambiguity. Hence $\alpha=\pi-\beta$. Therefore $\beta<\pi$ gives $\alpha>0$, $\beta=\pi$ gives $\alpha=0$, and $\beta>\pi$ gives $\alpha<0$. [F1, F2, step 1.1, given]

3.1 For the same ordered pair, replacing $J$ by $-J$ changes the coefficient $b$ in step 1.1 to $-b$, so the unique principal angle changes to $-\alpha$. On reversing the boundary parameter, the ordered pair becomes $(-T_+,-T_-)$. The rotation by $-\alpha$ sends $-T_+$ to $-T_-$, since rotations commute with multiplication by $-1$; as $-\alpha\in(-\pi,\pi)$, this is again the unique principal angle. Both assertions include $\alpha=0$, and the non-antipodal hypothesis [F2] keeps the principal angle unambiguous. [F1, F2, step 1.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“Some Plane Geometry,” printed p. 157, defines the oriented exterior turn in $[-\pi,\pi]$ and notes the ambiguity when the tangents are opposite; §“The Gauss–Bonnet Formula,” printed p. 163, defines the corresponding angle using the Riemannian inner product and the given surface orientation. Datar, *Lectures on Riemannian Geometry*, Lecture 2, §2.0, printed pp. 10–11, uses the signed angle and excludes exterior angles $\pm\pi$ for curved polygons. For a non-antipodal tangent pair, the closed interval convention reduces uniquely to $(-\pi,\pi)$; the local basis calculation and the $\alpha=\pi-\beta$ relation are derived above.
