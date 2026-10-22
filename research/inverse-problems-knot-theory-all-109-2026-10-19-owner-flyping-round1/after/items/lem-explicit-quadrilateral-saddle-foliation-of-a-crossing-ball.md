---
id: lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
kind: lemma
title: "An explicit quadrilateral saddle foliation of a crossing ball"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-euclidean-implicit-function-theorem
  - thm-extreme-value-metric
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used: the parameters are selected by explicit inequalities and all roots are unique."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, printed p.39, Figure 4 and Lemma 1"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Let $C=\{(x,y,z):x^2+y^2+z^2\le1\}$, with upper overpass $A_+=\{y=0,x^2+z^2=1,z\ge0\}$ and lower underpass $A_-=\{x=0,y^2+z^2=1,z\le0\}$. For every compact $K\subset C\setminus(A_+\cup A_-)$ there are $0<a<b<1$ and $0<\varepsilon<1/4$ such that, on a neighborhood of $C$, the smooth function
$$q(x,y,z)=\frac{z+x^2-y^2}{d(z)},\qquad d(z)=1+\sqrt{z^2+\varepsilon^2}-\varepsilon-z^2$$
has these properties:

1. $K\subset\{|q|<a\}$, $q\ge1$ on $A_+$ and $q\le-1$ on $A_-$.
2. For each $|h|\le b$, $D_h=C\cap q^{-1}(h)$ is a smooth proper disk transverse to $\partial C$. Projection to the $(x,y)$-plane identifies it with a smooth star-shaped disk. Its boundary meets $z=0$ in exactly four points, one in each open quadrant; its intersections with each open hemisphere are two arcs. The disks are disjoint and strictly ordered by height above every common projected point.
3. On $C\cap\{|q|\le b\}$ there is a smooth vector field $V$ tangent to the levels of $q$, with $(V_x,V_y)=(x,y)$, zero exactly on the vertical axis, and pointing strictly outward on $\partial C\cap\{|q|\le b\}$. Consequently radial dilation in these level coordinates is compatible with the boundary of the crossing ball.

This supplies the local foliation and vector field, not an ambient positioning theorem for a surface.

## Facts & Assumptions

**Given:** The closed unit ball, the specified two crossing arcs, and the compact set $K$ disjoint from those arcs.

[F1] A continuous real function on a nonempty compact metric space attains its maximum. ([[thm-extreme-value-metric]])

[F2] A scalar equation with nonzero derivative in its last coordinate has a unique local differentiable solution in that coordinate, with the implicit derivative formula. For smooth equations the derivative formula, applied successively, makes this solution smooth. ([[thm-euclidean-implicit-function-theorem]])

## Proof

1.1 Set $d_0(z)=1+|z|-z^2$ and $q_0=(z+x^2-y^2)/d_0(z)$ on $C$. Here $d_0\ge1$. For $z\ge0$, the largest numerator at fixed $z$ is $z+1-z^2=d_0$, with equality precisely at the points of $A_+$ at that height; the smallest numerator is $z-1+z^2\ge-d_0$, with equality only when $z=0$ and $x=0,y^2=1$. The corresponding inequalities for $z\le0$ follow by interchanging $x,y$ and replacing $z$ by $-z$. Thus $|q_0|\le1$ and equality occurs precisely on $A_+\cup A_-$. If $K$ is nonempty, let $m=\max_K|q_0|<1$ by [F1]; if $K$ is empty, put $m=0$. Choose $a=(1+m)/2$ and $b=(1+a)/2$. [given, F1, algebra, construct]

2.1 Write $g(z)=\sqrt{z^2+\varepsilon^2}-\varepsilon$. Since $0\le |z|-g(z)\le\varepsilon$, we have $d=d_0-(|z|-g)\ge1-\varepsilon$ on $[-1,1]$, and $|q-q_0|\le\varepsilon/(1-\varepsilon)$ on $C$. Choose $0<\varepsilon<1/4$ so small that this last bound is less than $a-m$ and $b(1+\varepsilon^2/2)<1$. Then $K\subset\{|q|<a\}$. On $A_+$ the numerator equals $d_0$, so $q\ge1$, and the negative counterpart gives $q\le-1$ on $A_-$. Positivity of $d$ also holds on a neighborhood of $[-1,1]$, where the displayed formula defines a smooth $q$. [step 1.1, algebra, choose, construct]

3.1 On $[0,1]$ we have $d'(z)=z/\sqrt{z^2+\varepsilon^2}-2z\le1$. This function is concave, since its second derivative is $-3\varepsilon^2z/(z^2+\varepsilon^2)^{5/2}\le0$, so its minimum is at an endpoint. The endpoint values are $0$ and $1/\sqrt{1+\varepsilon^2}-2\ge-1-\varepsilon^2/2$, the latter inequality following by differentiating $(1+t)^{-1/2}-1+t/2$ for $t\ge0$. Since $d'$ is odd, $|d'|\le1+\varepsilon^2/2$ on $[-1,1]$. Therefore the level equation $F_h(x,y,z)=z+x^2-y^2-hd(z)=0$ has $\partial_zF_h=1-hd'(z)>0$ whenever $|h|\le b$. Each such level is a smooth graph on its projected domain by [F2], with at most one point above each projected point. At $x=y=0$ its equation has exactly one root in $(-1,1)$, because $d(1)=d(-1)=g(1)<1$, so the endpoint values have opposite signs. [step 2.1, F2, algebra, construct]

4.1 For $|z|<1$, put $H_h(z)=(z-hg(z))/(1-z^2)$. Its derivative has numerator $1+z^2-hA(z)$, where $A(z)=(1-z^2)g'(z)+2zg(z)$. For $0\le z\le1$, the definition gives $A\ge0$ and the identity $A=\frac{z}{\sqrt{z^2+\varepsilon^2}}(1+z^2)+2\varepsilon z\bigl(\frac{\varepsilon}{\sqrt{z^2+\varepsilon^2}}-1\bigr)$ gives $A\le1+z^2$. Oddness gives $|A(z)|\le1+z^2$ for negative $z$ as well. Hence $H_h'>0$. Also $H_h(z)\to\pm\infty$ as $z\to\pm1$, since $|hg(1)|<1$. Thus for every angle $\theta$ the equation $H_h(z)=h-\cos(2\theta)$ has a unique smooth root $z_\theta\in(-1,1)$. These are exactly the points of $D_h\cap\partial C$ with projected polar angle $\theta$. [step 2.1, step 3.1, F2, algebra, construct]

5.1 The projected radial domain of $D_h$ contains the origin by step 3.1. On each projected ray its points form a closed subset of $[0,1]$; membership can change only at a sphere-boundary point, because every interior solution persists by [F2]. Step 4.1 gives exactly one sphere-boundary point on that ray, at the positive radius $r_\theta=\sqrt{1-z_\theta^2}$. Consequently that radial domain is exactly $0\le r\le r_\theta$. The boundary radius is smooth and positive, so this is a smooth star-shaped disk, and its graph is a proper smooth disk. For $h_2>h_1$, evaluating $F_{h_2}$ at a zero of $F_{h_1}$ gives $-(h_2-h_1)d<0$, so strict increase in $z$ places the second graph above the first wherever both are defined. [step 2.1, step 3.1, step 4.1, F2, construct]

6.1 On the equator, the level equation becomes $x^2+y^2=1$ and $x^2-y^2=h$. Its four solutions satisfy $x^2=(1+h)/2$ and $y^2=(1-h)/2$, so all four lie in the open quadrants. Step 4.1 shows that $z_\theta$ has the sign of $h-\cos(2\theta)$: its defining increasing function has $H_h(0)=0$. It follows that the boundary has two positive-$z$ arcs around the $y$ directions and two negative-$z$ arcs around the $x$ directions. The four zeros are simple because $\sin(2\theta)\ne0$ there. [step 4.1, step 5.1, algebra]

6.2 Define $V=(x,y,-2(x^2-y^2)/(1-qd'))$ on a neighborhood of the closed level band; its denominator is positive by step 3.1 and compactness. Differentiating $F_h$ shows $dq(V)=0$, and $V$ is zero exactly when $x=y=0$. On the sphere boundary put $t=\cos(2\theta)$ and $r^2=1-z^2>0$. Then $V(x^2+y^2+z^2)=2r^2(1-hd'-2zt)/(1-hd')$. The boundary equation $t=h-H_h(z)$ gives $1-hd'-2zt=(1+z^2-hA(z))/(1-z^2)>0$ by step 4.1. Thus $V$ points strictly outward there; in particular the level disks meet the sphere transversely. [step 3.1, step 4.1, step 5.1, algebra, construct]

7.1 Steps 1.1–2.1 place $K$ in a middle level band avoiding both link arcs. Steps 3.1–6.1 give the smooth ordered quadrilateral disks, and step 6.2 gives the asserted level-tangent outward radial vector field. All parameter choices used finitely many strict real inequalities and all implicit solutions were unique, so no choice principle has been introduced. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2] ∎
