---
id: lem-finite-saddle-position-in-protected-crossing-balls
kind: lemma
title: "Finite saddle position in protected crossing balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball
  - thm-parametric-transversality
  - thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is used by parametric transversality, smooth cutoffs, and the compactly supported flow supplier. All crossing-ball selections are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, printed p.39, Figure 4 and beginning of Lemma 1"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $L\subset S^3$ be a smooth link and $S\subset S^3$ a smooth closed embedded surface. Supply finitely many pairwise disjoint closed smooth balls $C_j$, each with coordinates extending to a neighborhood and identifying $C_j$ with the closed unit ball. Require that the whole intersection $L\cap C_j$ consists of the upper overpass $\{y=0,x^2+z^2=1,z\ge0\}$ and lower underpass $\{x=0,y^2+z^2=1,z\le0\}$ in these coordinates, and that $S\cap L\cap C_j=\varnothing$.

For every open neighborhood $W$ of $\bigcup_j C_j$, there is a smooth ambient isotopy of $S^3$, fixing $L$ pointwise and equal to the identity outside $W$, whose final surface meets each $C_j$ in a finite, possibly empty, disjoint collection of the quadrilateral saddle disks of the explicit crossing-ball foliation. In particular the final surface is transverse to each $\partial C_j$, each saddle boundary has four equatorial corners and two arcs on each hemisphere, and all disks in one ball are ordered levels of one smooth foliation. The isotopy fixes a neighborhood of $S\cap L$. This assertion does not impose the disk-piece or repeated-bubble conditions on the parts outside the crossing balls.

## Statement references

[[def-countable-choice]]

[[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]]

## Facts & Assumptions

**Given:** Countable choice, the link, closed surface, finitely many coordinate crossing balls disjoint from the surface-link intersection, and the allowed support neighborhood $W$.

[F1] For a compact set in the unit crossing ball missing the two crossing arcs there are $0<a<b<1$, a smooth function $q$, ordered proper quadrilateral level disks $D_h$ for $|h|\le b$, and a level-tangent field $V$ with $(V_x,V_y)=(x,y)$, zero on the axis and strictly outward along the sphere boundary. The compact set lies in $|q|<a$, while the crossing arcs have $|q|\ge1$. ([[lem-explicit-quadrilateral-saddle-foliation-of-a-crossing-ball]])

[F2] Under countable choice, a smooth family whose evaluation map is transverse to a submanifold has transverse slices outside a null set of parameters. ([[thm-parametric-transversality]])

[F3] Under countable choice, a closed set in an open set has a smooth cutoff equal to one near the closed set and supported in the open set. ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]])

[F4] Under countable choice a smooth vector field with compact support has a smooth flow for every specified compact time interval. Its time maps are diffeomorphisms and fix every point outside its support. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 First work with one ball $C$. The compact set $K=S\cap C$ misses its two crossing arcs, so apply [F1] to get $a,b,q,V$. On the closed middle band the coordinates $(x,y,h)=(x,y,q)$ are nonsingular: the explicit foliation proof gives $\partial_z(z+x^2-y^2-hd(z))>0$. The compact band misses $L$, since all of $L\cap C$ consists of the two arcs with $|q|\ge1$. Hence it has a neighborhood contained in $W\setminus L$. Every compact set used below can be supported in that neighborhood, or in the interior of $C$ away from $L$. [given, F1, construct]

2.1 Make $S$ transverse to the open vertical axis $J=\{x=y=0,-1<z<1\}$. Its current intersection with this axis is compact and away from the endpoints, because those endpoints belong to $L$ and $S$ misses them. Choose a smooth coordinate cutoff $\eta$, supported inside $\operatorname{int}C\setminus L$ and equal to one near this compact intersection, using [F3]. For small parameters $v=(v_1,v_2)$, the coordinate maps $T_v(x,y,z)=(x+\eta v_1,y+\eta v_2,z)$ are ambient diffeomorphisms, extended by the identity: taking $|v|\sup|D\eta|<1$ makes the perturbation globally injective with invertible derivative, and its compact support makes it onto. Compactness ensures that any intersection $T_v(S)\cap J$ for sufficiently small $v$ occurs where $\eta=1$. There the parameter derivative spans the two normal directions to $J$, so the evaluation family on $S$ is transverse to $J$. Apply [F2] to select an arbitrarily small transverse parameter. The path $T_{tv}$ is an ambient isotopy fixing $L$. Choose the parameter small enough that the new $S\cap C$ remains in $|q|<a$; this follows from the original strict compact margin and the fact that these maps are supported inside $C$. Its intersection with $J$ is now finite, since it is compact and transverse of dimension zero. If the initial intersection was empty, omit this perturbation. [step 1.1, F2, F3, construct]

2.2 Choose a smooth nonnegative function $\chi(h)$ equal to one for $|h|\le a$ and supported in $|h|<b$. The field $\chi(q)V$ is smooth on $C$, zero off the middle band and disjoint from $L$. The formula for $V$ extends to a neighborhood of the closed band by [F1]. Multiply this extension by a spatial cutoff equal to one near that band and supported in a sufficiently small neighborhood inside $W\setminus L$, and extend by zero to $S^3$. Call the resulting field $X$. It is smooth, compactly supported, and its boundary-normal component on $\partial C$ is nonnegative everywhere and strictly positive wherever $\chi(q)>0$. Consequently no forward integral curve can enter $\operatorname{int}C$ from outside: near a boundary point with positive component the signed exterior coordinate is strictly increasing, and a boundary point with zero component has $X=0$ and its integral curve is stationary by uniqueness. Thus the backward trajectory of any point in $\operatorname{int}C$ stays in $C$ for its whole backward time interval. [step 1.1, F1, F3, F4, construct]

3.1 Write the finitely many axis intersections as $(0,0,h_i)$ in the level coordinates. Their $h_i$ are distinct and satisfy $|h_i|<a$. Transversality to $J$ expresses the surface near each as $h=H_i(x,y)$, with $H_i(0,0)=h_i$. Choose disjoint small height intervals around the $h_i$, and cylinders in their interiors and inside $\operatorname{int}C\cap\{|q|<a\}$. In each cylinder choose a height cutoff $\chi_i$ equal to one near $h_i$ and a radial cutoff $\psi_i$ equal to one near the axis. Shrink its projected radius until $|H_i-h_i|\sup|\chi_i'|<1/2$ and its graph stays in the region where $\chi_i=1$. Then the maps $(x,y,h)\mapsto(x,y,h-t\psi_i(x,y)\chi_i(h)(H_i(x,y)-h_i))$ for $0\le t\le1$ are smooth diffeomorphisms: their height derivative is positive, and they are the identity near every cylinder boundary. Extend them by the identity and compose over the disjoint cylinders. They fix $L$ and make $S$ exactly the level $h=h_i$ near each axis intersection, while keeping $S\cap C$ in $|q|<a$. [step 1.1, step 2.1, F3, construct]

4.1 Compactness of the surface after step 3.1 gives $\delta>0$ such that every point of $S\cap C$ with projected radius $r=\sqrt{x^2+y^2}\le\delta$ lies on one of the flattened patches $h=h_i$. Indeed these patches contain all points on the axis; the compact remainder after removing smaller open patches has positive distance from the axis. If there are no axis intersections, the same compactness gives $S\cap C\cap\{r\le\delta\}=\varnothing$. Choose a finite $T>0$ with $e^{-T}<\delta$, and let $\Phi_t$ be the flow of $X$ up to time $T$ supplied by [F4]. [step 3.1, step 2.2, F4, choose, construct]

5.1 If $p\in\Phi_T(S)\cap\operatorname{int}C$, its backward trajectory stays in $C$ by step 2.2, so its initial point $p_0\in S\cap C$ has $|q(p_0)|<a$. While in $C$, $q$ is constant along this trajectory, $\chi=1$, and $\dot x=x$, $\dot y=y$. Thus $r(p_0)=e^{-T}r(p)<\delta$. By step 4.1, $p_0$ lies on a flattened patch with level $h_i$, and therefore $q(p)=h_i$. Hence all of the final surface inside the open ball is contained in the finite disjoint union of these levels. Each axis point $(0,0,h_i)$ is stationary and remains on the surface. For each $i$, the intersection of the final surface with the connected interior of $D_{h_i}$ is closed there, and is open there because the surface is smooth of the same dimension and locally contained in that level. It is nonempty at the stationary axis point. It is therefore the whole disk interior. Closedness of the surface includes each disk boundary as well. There are no additional points on $\partial C$: a boundary point where $\chi(q)>0$ immediately enters the ball under the backward flow, so the same argument puts it on a level $h_i$; a boundary point where $\chi(q)=0$ is stationary, and was not on the initial surface because that surface had $|q|<a$. Thus $\Phi_T(S)\cap C=\bigcup_iD_{h_i}$. In the empty case the intersection is empty. [step 1.1, step 3.1, step 2.2, step 4.1, F1, construct]

6.1 The level disks are transverse to the boundary and have the required quadrilateral boundaries by [F1]; equality on their interiors also identifies their tangent planes with those of the final surface along the boundary, so the surface itself is transverse there. The perturbation, flattening maps and radial flow all have compact support disjoint from $L$, so together they fix a neighborhood of $S\cap L$. Reparametrize their finitely many time intervals by smooth stationary-end functions and concatenate them to obtain one smooth ambient isotopy. [step 2.1, step 3.1, step 2.2, step 5.1, F1, F4, construct]

7.1 Finally choose pairwise disjoint open coordinate neighborhoods of the finitely many disjoint compact balls inside $W$. Carry out the preceding construction for each ball with support in its own neighborhood, always disjoint from $L$. The constructions do not affect the results in the other balls and their finite composition has all the asserted support and fixed-point properties. No condition on complementary pieces was used or concluded. [given, step 1.1, step 6.1, construct] ∎
