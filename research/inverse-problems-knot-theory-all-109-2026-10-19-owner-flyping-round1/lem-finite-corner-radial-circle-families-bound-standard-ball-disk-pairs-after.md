---
id: lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
kind: lemma
title: "Finite-corner radial circle families bound standard ball-disk pairs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-euclidean-inverse-function-theorem
  - lem-smooth-radial-circle-families-bound-standard-ball-disk-pairs
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the smooth radial-circle criterion. Its countable instance selects chart and derivative bounds on compact positive-radius intervals; the finite corner rounding and its fiber homeomorphisms are explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; finite page corners in the local collapse, with the parametric rounding supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Fix a finite cyclic subdivision of $S^1$ into edges. Let $c:S^1\times(0,1]\to S^2$ be continuous, with each $c_r$ an embedding. On every closed edge require that $c$ extends smoothly to an open neighborhood of that edge times each compact positive-radius interval, and has nonzero edge tangent there. At each subdivision vertex require the two one-sided tangent lines of $c_r$ to be distinct for every $r>0$; the family is smooth away from these finitely many corners. Then
$$D=\{0\}\cup\{r c_r(s):s\in S^1,\ 0<r\le1\}$$
forms a standard ball-disk pair: there is a homeomorphism $(B^3,D)\cong(B^3,B^3\cap\{z=0\})$. In particular it is a properly embedded locally flat closed topological disk. There need be no positive lower bound on corner angles as $r\downarrow0$.

More precisely a radius-preserving homeomorphism of $B^3$ carries $D$ to a disk supplied by a smooth positive-radius family of embedded circles. If the subdivision has no corners and the family is already smooth, this preliminary homeomorphism may be the identity.

## Statement references

[[def-axiom-of-choice]]

[[lem-smooth-radial-circle-families-bound-standard-ball-disk-pairs]]

## Facts & Assumptions

**Given:** Full AC, the finite cyclic edge subdivision, and the continuous embedded-circle family with its smooth regular edge extensions and distinct corner tangent lines at positive radii.

[F1] A smooth positive-radius family of embedded circles on $S^2$ gives a standard radial ball-disk pair under full AC, with no limiting angular regularity required at radius zero. ([[lem-smooth-radial-circle-families-bound-standard-ball-disk-pairs]])

[F2] A smooth map with invertible differential has a smooth local inverse, by the inverse derivative formula and induction. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 At a corner let $a_r,b_r$ be the two unit tangent rays pointing away from that vertex along the incident edges. They depend smoothly on $r>0$ and are linearly independent. In the tangent plane choose the unit $x$ direction parallel to $b_r-a_r$, and the $y$ direction its positive quarter-turn. The two rays have strictly negative and positive $x$ components respectively, since $a_r\cdot(b_r-a_r)=a_r\cdot b_r-1<0$ and $b_r\cdot(b_r-a_r)=1-a_r\cdot b_r>0$. Smooth sphere exponential coordinates in that frame, followed by [F2] on each branch, therefore make the incident curve a graph $y=f_r(x)$, with $f_r(0)=0$, smooth on either side of zero and continuous at zero. The graph chart and its inverse vary smoothly with $r$ on each branch. The corner points, the other parts of the curve and a chosen midpoint of one edge are distinct, so compactness on every closed positive-radius interval permits disjoint corner boxes avoiding that marked midpoint and all other curve pieces. [given, F2, construct, algebra]

2.1 Choose positive smooth functions $\rho(r),\kappa(r)$ so that the graph exists for $|x|<\kappa(r)$ and the coordinate box $|x|<\kappa(r),|y|<\rho(r)$ has the separation properties of step 1.1; these two functions may be taken equal to one common valid square-size bound. Here and below these functions are obtained by first taking lower chart-size bounds on each compact interval $[2^{-n-2},2^{-n+1}]\cap(0,1]$, selecting this countable list under full AC, and using a smooth locally finite partition of the radius interval subordinate to their interiors. A weighted average of valid smaller lower bounds is valid, since each active bound is valid at that radius and the conditions persist on shrinking. Such a partition is given by positive bumps divided by their locally finite positive sum. Choose $a(r)<\rho(r)/10$. On $|x|\le\kappa(r)/2$, choose a positive smooth upper bound $M(r)$ for both branch slopes by the same compact-interval method; weighted averages of valid upper bounds remain upper bounds. Set $h(r)=(10/\kappa(r)+100(1+M(r))/a(r))^{-1}$. Then $3h<\kappa/2$ and $|f_r(x)|\le M|x|<a/4$ for $|x|<3h$. Thus the larger box $|x|<3h,|y|<3a$ stays inside the chart, and the finite corner supports remain disjoint and avoid the marked midpoint. Near radius one use a short extension of the given smooth data. All choices have been made on positive radii; no uniform bound at zero is used. [step 1.1, construct]

3.1 Fix a nonnegative smooth kernel $\eta$ supported in $[-1,1]$ with integral one, for example the normalized function $\exp(-1/(1-t^2))$ there. For a positive smooth $\epsilon(r)<h(r)$ define $f_r^\epsilon(x)=\int_{-1}^1 f_r(x-\epsilon(r)t)\eta(t)\,dt$ on $|x|<2h(r)$. If $M(r)$ bounds the two branch slopes, then $|f_r^\epsilon-f_r|\le M(r)\epsilon(r)$. The convolved function is smooth jointly in $r,x$ across zero: rewrite the integral with its smooth translated kernel and split the integration over the two sides of the fixed corner; on a compact radius interval all derivatives on each side are bounded, so differentiation under these finite integrals is valid. Let $\chi$ be smooth, equal to one on $[-1/3,1/3]$ and zero outside $(-1,1)$. Put $g_r=f_r+\chi(x/h(r))(f_r^\epsilon-f_r)$ and $\Delta_r=g_r-f_r$. Then $g_r$ is smooth across zero and equals $f_r$ off $|x|<h(r)$. Choose $\epsilon(r)$ small enough that $|\Delta_r|<a(r)/(10(1+\|\chi'\|_\infty))$; the bounds from step 2.1 allow a positive smooth such choice. [step 2.1, construct, algebra]

4.1 In this corner box use the fiber map $T_r(x,y)=(x,y+\chi((y-f_r(x))/a(r))\Delta_r(x))$. It sends the graph of $f_r$ to that of $g_r$. Its derivative in $y$ is $1+\chi'((y-f_r(x))/a(r))\Delta_r(x)/a(r)>1/2$. For each fixed $x$ it is therefore an increasing homeomorphism of the vertical interval, equal to the identity near its ends; outside the horizontal support it is the identity too. Thus it is a homeomorphism of the box, and extending by the identity gives a sphere homeomorphism. It depends continuously on $r$, as does its inverse: strict monotonicity with this lower slope bound gives continuous inverses in the vertical coordinate, and the moving chart coordinates are smooth. The nonsmooth $f_r$ in this formula is harmless, since only a homeomorphism is required. Compose over the finitely many disjoint corner boxes. The resulting sphere homeomorphisms $T_r$ and their inverses vary continuously for $r>0$ and carry each original circle to a smooth embedded circle $\Gamma_r$. [step 3.1, construct, algebra]

5.1 These smoothed circles admit a smooth parametrization on $S^1\times(0,1]$. Start at the marked midpoint retained in step 1.1, orient by the original cyclic edge order, and use normalized arclength. In the corner charts the graphs $g_r$ are jointly smooth; outside them the old edges are jointly smooth, and on the overlap the two descriptions agree. Their speeds are positive, so finite chart integration makes their total length and partial lengths smooth on each compact positive-radius interval. Inverting arclength locally by [F2] gives the claimed joint smooth parametrization, and its definitions agree around the whole circle with total length as period. Finally set $T(0)=0$ and $T(r\omega)=r T_r(\omega)$ on the punctured ball. The inverse has the corresponding formula with $T_r^{-1}$. Both are continuous at zero solely because they preserve radius. Hence $T$ is a ball homeomorphism carrying $D$ to the radial surface of this smooth circle family. Apply [F1] to that surface and compose with $T$. This proves the standard pair and local-flatness conclusions, with no corner-angle limit assumed. In the already smooth case take $T_r$ to be the identity and apply [F1] directly. [step 1.1, step 4.1, F1, F2, construct] ∎
