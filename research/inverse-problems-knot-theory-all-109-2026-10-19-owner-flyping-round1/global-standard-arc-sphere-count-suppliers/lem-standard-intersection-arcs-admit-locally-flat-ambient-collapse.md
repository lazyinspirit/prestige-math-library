---
id: lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse
kind: lemma
title: "Standard intersection arcs admit locally flat ambient collapse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-euclidean-inverse-function-theorem
  - thm-fundamental-theorem-on-flows
  - lem-standard-intersection-arcs-have-opposite-end-page-pairings
  - lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere
  - lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite-corner radial-circle criterion and its plane Jordan–Schönflies supplier. It supplies countable choice for compact smooth flows. The actual chart, level curves and arc-collapse formula use finite constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; local flatness and radial-level details supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Proof of Theorem 1.1, PDF p.7, standard-arc local product neighborhood"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
---

## Statement

Assume full AC. Let $F_0,F_1\subset S^3$ be compact smooth embedded spanning surfaces for the same nonempty link $L$, with supplied radial collars in disjoint smooth normal tubes of $L$. Orient each component of $L$ arbitrarily, orient the tube boundary tori by their outward normal toward the link exterior, and orient the two surface boundary curves compatibly with $L$. Let $\alpha$ be a smooth proper transverse common arc in the exterior, transverse to its boundary, with transverse boundary-curve crossings at its distinct endpoints. Extend it radially to an isolated smooth embedded arc $A$ ending on $L$. Suppose its two ordered endpoint intersection signs agree, so their sum is $2$ or $-2$.

For every open neighborhood $U$ of $A$ there are a smooth closed ball $B\subset U$ with $A\subset\operatorname{int}B$ and a continuous surjection $q:S^3\to S^3$, fixed off $\operatorname{int}B$, such that its only non-singleton fiber is $A$, $q(B)=B$, and
$$(B,q((F_0\cup F_1)\cap B))\cong(B^3,B^3\cap\{z=0\}).$$
Thus this actual local surface image is a properly embedded locally flat disk, including at the collapsed point. The surfaces may be disconnected or nonorientable. No definiteness or primeness assumption is needed for this local assertion.

## Statement references

[[def-axiom-of-choice]]

[[lem-standard-intersection-arcs-have-opposite-end-page-pairings]]

[[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]]

[[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]]

## Facts & Assumptions

**Given:** Full AC, the compact surface pair with radial collars, the oriented boundary curves, the isolated proper common arc and its radial extension, the equal endpoint signs, and the prescribed neighborhood.

[F1] Smooth maps with invertible derivative have smooth local inverses. Smooth fields have unique smooth local flows under countable choice. ([[thm-euclidean-inverse-function-theorem]], [[thm-fundamental-theorem-on-flows]])

[F2] Such an isolated extended common arc has an actual four-page neighborhood. Equal endpoint signs give distinct end matchings, so the four outer page edges form one circle. The sign computation uses the outward orientation of the solid tube boundary. ([[lem-standard-intersection-arcs-have-opposite-end-page-pairings]])

[F3] A smooth arc has an ambient collapse supported in any chosen neighborhood. In its explicit proof, in a chart with arc $[-1,1]\times\{0,0\}$, the confocal ellipsoid with semiaxes $\sqrt{1+\rho^2},\rho,\rho$ maps to the homothetic ellipsoid with semiaxes $\rho\sqrt{1+\varepsilon^2}/\varepsilon,\rho,\rho$ inside the fixed outer ellipsoid at $\rho=\varepsilon$. That proof's formulas apply in any supplied smooth chart with this straight arc. ([[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]])

[F4] A radial embedded-circle family with finitely many smoothly varying regular edges and distinct corner tangent lines at every positive radius gives a standard ball-disk pair under full AC. ([[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]])

## Proof

1.1 Choose a proper strip around $A$ on $F_0$. Explicitly take a smooth transverse field along that interval, tangent to $L$ at its ends, extend it in finitely many surface charts tangent to the boundary, and use its short flow in [F1]. Normalize its restriction at each end to the unit boundary tangent, with whichever sign is continuous along the strip. Its flow coordinates give $c_0(x,y)$, $-1\le x\le1$, $|y|<\delta$, with $c_0(x,0)=A(x)$ and with the two end edges on $L$. Extend this map slightly across its end faces in the original smooth boundary charts, patching extensions off the prescribed strip if necessary. The strip is orientable, so its two tangent vectors define a smooth unit ambient normal. Its short normal exponential map gives a smooth ambient chart $(x,y,z)$ by [F1] and compact injectivity, with $F_0$ given by $z=0$, $-1\le x\le1$, and the two short pieces of $L$ by $x=\pm1,z=0$. The chart can be taken inside $U$, missing every other sheet of either embedded surface; locally these are the given surface charts, and compactness of the arc supplies a common sufficiently small width. [given, F1, construct]

2.1 On $F_1$ near $A$, the ambient coordinate $x$ is a submersion, since its derivative on $\dot A$ is one. Choose a nonzero smooth field in its one-dimensional kernel along $A$, and extend it nearby while retaining $dx=0$. One obtains this by subtracting the $x$ component with a local field having $dx=1$, then patching the kernel fields in finitely many charts, close enough to their fixed nonzero values along $A$. At the two end edges the kernel is exactly tangent to $L$, so choose its boundary value to be $\sigma_\pm\partial_y$, $\sigma_\pm\in\{1,-1\}$, with the sign continuous from the interior. Its flow from [F1] gives an actual parametrization $c_1(x,t)=(x,Y(x,t),Z(x,t))$, with $(Y,Z)(x,0)=0$ and with $Y(\pm1,t)=\sigma_\pm t$, $Z(\pm1,t)=0$. The two transverse derivatives $(Y_t,Z_t)$ are never simultaneously zero along the compact arc. The formula $v(x,t)=\int_0^1(Y_t,Z_t)(x,ut)\,du$ gives $(Y,Z)=t\,v(x,t)$ with smooth $v$ and $|v|>0$ on a uniform smaller strip. Thus its normal radius is $R(x,t)=|t|a(x,t)$ for smooth $a=|v|>0$, and shrinking makes $a+t a_t>0$ uniformly. It is strictly increasing on each positive transverse half and strictly decreasing on each negative half. [step 1.1, F1, construct, algebra]

3.1 Take the closed confocal ellipsoids $E_\rho=\{x^2/(1+\rho^2)+(y^2+z^2)/\rho^2\le1\}$ for $0<\rho\le\varepsilon$, choosing $\varepsilon$ sufficiently small with strict margins inside the chart and the two strips. On either surface a point of $\partial E_\rho$ with axial coordinate $x\in[-1,1]$ has normal radius $R_\rho(x)=\rho\sqrt{1-x^2/(1+\rho^2)}>0$. By step 2.1, for each $x$ there is exactly one point of each transverse half of $F_1$ at this radius. For $F_0$ the two points are simply $y=\pm R_\rho(x),z=0$. Existence is uniform because $R_\rho\le\rho$ and the radii at the two fixed outer strip edges have a positive common lower bound. The implicit inverse in [F1] shows that these four edges, parametrized by $x\in[-1,1]$, depend smoothly on $x,\rho$ for $\rho>0$, including their endpoints; each is regular since its first coordinate is $x$. There are no surface points with $x$ beyond these end faces in this neighborhood: both surfaces have boundary exactly on those faces and point inward along $A$. [step 1.1, step 2.1, F1, construct, algebra]

4.1 At $x=\pm1$ the radius is $\rho^2/\sqrt{1+\rho^2}$. Hence the four edge ends lie at the two points $y=\pm\rho^2/\sqrt{1+\rho^2},z=0$ on each end piece of $L$, with the same page pairings as in [F2]. Distinct pairings make their union $C_\rho$ one embedded circle. Its four corners have distinct tangent lines. Indeed boundary-curve transversality at the original arc endpoints says that the difference of the two radial angle functions has nonzero derivative there. For sufficiently small nonzero displacement along $L$, their angle difference is nonzero modulo $\pi$, so the two surface tangent planes at each of these corner points are distinct, meeting exactly in $TL$. Also $L$ is transverse to $\partial E_\rho$: its coordinate tangent is $\partial_y$ and the derivative of the ellipsoid equation in that direction is $2y/\rho^2\ne0$. If the two edge tangent lines on the ellipsoid agreed, that common line would lie in $TL\cap T\partial E_\rho=0$, a contradiction. This proves the required corner independence for every $0<\rho\le\varepsilon$ after shrinking once. The strict margins also permit a short extension past the outer radius. [step 3.1, F1, F2, construct, contradiction]

5.1 Use the actual confocal-ellipsoid collapse of [F3] in this adapted chart. It fixes $\partial E_\varepsilon$ and the outside, collapses exactly $A$, and sends $E_\rho$ to $(\rho/\varepsilon)E_\varepsilon$. On each positive level its restriction is the invertible linear map $(x,y,z)\mapsto(\rho\sqrt{1+\varepsilon^2}\,x/(\varepsilon\sqrt{1+\rho^2}),y,z)$. Therefore it carries the four edges of $C_\rho$ to a regular four-edge circle with the same distinct corner tangent lines and smooth dependence on every positive $\rho$. Apply the fixed diagonal linear rescaling $E_\varepsilon\to B^3$ and put $r=\rho/\varepsilon$. These image circles are now exactly a finite-corner radial family satisfying [F4]; their cyclic edge ordering is fixed by the two end matchings and does not change with radius. [step 3.1, step 4.1, F3, construct, algebra]

6.1 Let $K=(F_0\cup F_1)\cap E_\varepsilon$. The level description in step 3.1 shows that it consists exactly of $A$ and the circles $C_\rho$, $0<\rho\le\varepsilon$. Thus after the collapse and diagonal rescaling its entire image, not just selected levels, is the radial disk in [F4]. That supplier gives a homeomorphism of the ball-disk pair to the standard pair. Pull back the diagonal rescaling to conclude that $(E_\varepsilon,q(K))$ is a standard ball-disk pair. Set $B$ to be this ellipsoid in the original ambient chart and extend the collapse by the identity outside it, as in [F3]. It is supported in $U$, has just $A$ as a nonsingleton fiber, and maps $B$ to itself. This proves the local flatness and all asserted support and fiber properties. Every construction used only the two local strips, so neither connectedness nor orientability of the complete surfaces was required. [step 3.1, step 5.1, F3, F4, construct] ∎
