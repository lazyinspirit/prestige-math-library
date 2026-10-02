---
page: analytic-hypersurfaces-and-local-parametrisation-examples
title: "Analytic Hypersurfaces and Local Parametrisation: Examples and Counterexamples"
status: published
requires: [analytic-hypersurfaces-and-local-parametrisation]
items: []
examples:
  - ex-regular-hyperplane-hypersurface-germ
  - ex-ordinary-node-plane-curve-germ
  - ex-cusp-puiseux-y-two-equals-x-three
  - ex-crossing-coordinate-axes-hypersurface
  - ex-nonreduced-equation-same-hypersurface-germ
  - cex-projection-branch-locus-is-not-singular-locus
  - ex-cusp-puiseux-y-two-equals-x-five
  - rem-general-analytic-sets-need-more-than-hypersurface-arguments
---

The computations on this page exercise the local theory of
[[analytic-hypersurfaces-and-local-parametrisation]] on equations that can be
solved by hand. The coordinate hyperplane $X=\{z_n=0\}$ has reduced equation
$z_n$, an everywhere nonzero differential, a one-sheeted projection with
constant discriminant $1$ and empty branch set, and local dimension $n-1$; it
is the case in which all the general invariants are forced to their simplest
possible values. The node $y^2=x^2(1+x)$ splits into the two smooth branches
$y=\pm x\sqrt{1+x}$ meeting only at the origin with distinct tangent directions,
and the coordinate crossing $xy=0$ has the two axes as its irreducible
components, each separately parametrised by $t\mapsto(t,0)$ and
$t\mapsto(0,t)$.

The cusps show the parametrisation theorem in action: $y^2=x^3$ is
$t\mapsto(t^2,t^3)$ and $y^2=x^5$ is $t\mapsto(t^2,t^5)$, both convergent,
injective and minimal in their exponent, and the pairs $3/2$ versus $5/2$
distinguish the two curves despite the common shape of their equations. The
equation $x^2=0$ cuts out the same smooth germ as $x=0$ even though its raw
differential vanishes all along that germ, which is the reason the regularity
criterion is stated for a reduced local equation rather than an arbitrary
defining equation.

Two items bound the scope of the theory. The counterexample $y^2=x$ exhibits a
curve that is smooth at the origin while the projection to the $x$-coordinate
has discriminant $4x$ and branch set $B_\pi=\{0\}$, while
$\pi(\operatorname{Sing}(X))=\varnothing$: the branch locus of a selected
projection need not equal the image of the hypersurface's singular locus under
that projection. The closing remark shows that the origin in $\mathbb C^2$
has nonprincipal vanishing ideal $(x,y)$ and admits no single defining
equation, so the hypersurface arguments of this pair do not extend to arbitrary
analytic set germs.
