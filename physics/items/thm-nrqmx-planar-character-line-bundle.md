---
id: thm-nrqmx-planar-character-line-bundle
kind: theorem
domain: mathematics
library: mathematics
title: "The planar exchange character quotient is a flat unitary line bundle"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-nrqmx-planar-character-line-bundle
  - lem-nrqmx-planar-two-particle-config-fundamental-group
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-universal-covering-space
  - def-deck-transformation-and-deck-group
  - def-circle-as-real-line-mod-integers
  - def-simply-connected
  - def-based-loops-and-fundamental-group
  - def-quotient-topology
  - thm-path-lifting-for-covering-maps
dependency_roles:
  def-nrqmx-planar-character-line-bundle: mathematical-premise
  lem-nrqmx-planar-two-particle-config-fundamental-group: mathematical-premise
  def-covering-map-and-evenly-covered-neighbourhoods: mathematical-premise
  def-universal-covering-space: mathematical-premise
  def-deck-transformation-and-deck-group: mathematical-premise
  def-circle-as-real-line-mod-integers: mathematical-premise
  def-simply-connected: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  def-quotient-topology: mathematical-premise
  thm-path-lifting-for-covering-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Statement

For every character $\chi:\mathbb Z\to U(1)$, the coordinate covering
$p:\widetilde X\to X$ and quotient $\Pi_\chi:L_\chi\to X$ defined by the
character-quotient construction have the following properties:

1. $p$ is a universal covering map and its deck transformations are exactly
   $T_n(c,\rho,t)=(c,\rho,t+n)$, $n\in\mathbb Z$.
2. $\Pi_\chi$ is a unitary flat complex line bundle, meaning its local
   transition phases are locally constant.
3. Parallel transport defined by keeping the lifted fiber coordinate fixed
   has monodromy $\chi(n)$ on a based loop whose lift ends at $T_n\widetilde x$.

In particular, a positive planar exchange has monodromy $\chi(1)$ and a full
relative winding has monodromy $\chi(2)$.

## Statement references

[[def-nrqmx-planar-character-line-bundle]]

[[lem-nrqmx-planar-two-particle-config-fundamental-group]]

## Facts & Assumptions

**Given:** $X=C_2(\mathbb R^2)$ in the pointed coordinates
$\mathbb R^2\times(0,\infty)\times\mathbb R/\mathbb Z$, its covering candidate
$\widetilde X=\mathbb R^2\times(0,\infty)\times\mathbb R$, and a character
$\chi:\mathbb Z\to U(1)$.

[F1] [[lem-nrqmx-planar-two-particle-config-fundamental-group]]: the pointed
homeomorphism identifies $X$ with
$\mathbb R^2\times(0,\infty)\times\mathbb R/\mathbb Z$ and the positive
exchange generator with $t\mapsto t+1$ on the lifted angle coordinate.

[F2] [[def-covering-map-and-evenly-covered-neighbourhoods]]: a covering map is
a continuous surjection with open neighborhoods whose preimages are disjoint
unions of open sheets, each mapped homeomorphically to the neighborhood.

[F3] [[def-universal-covering-space]]: a covering map is universal when its
total space is simply connected.

[F4] [[def-deck-transformation-and-deck-group]]: a deck transformation is a
homeomorphism of the covering space that commutes with its projection.

[F5] [[def-circle-as-real-line-mod-integers]]: $[t]=[t']$ exactly when
$t-t'\in\mathbb Z$, and $\mathbb R/\mathbb Z$ carries the quotient topology
of $t\mapsto[t]$.

[F6] [[def-simply-connected]]: a nonempty path-connected space is simply
connected when every based fundamental group is trivial.

[F7] [[def-quotient-topology]]: a quotient topology makes a surjection
continuous and declares a set open exactly when its preimage is open.

[F8] [[def-nrqmx-planar-character-line-bundle]]: $L_\chi$ is the quotient of
$\widetilde X\times\mathbb C$ by the action
$(\widetilde x,z)\mapsto(T_n\widetilde x,\chi(n)^{-1}z)$, and flat unitary
line-bundle charts have locally constant transition phases; monodromy is the
fiber map obtained by lifting a loop and keeping $z$ constant.

[F9] [[def-based-loops-and-fundamental-group]]: based loops are identified
under endpoint-fixed path homotopy, and a loop class is the input to its
covering lift and monodromy.

[F10] [[thm-path-lifting-for-covering-maps]]: every path in the base of a
covering map has a unique lift once its starting point in the fiber is fixed.

## Proof

1.1 The projection $p(c,\rho,t)=(c,\rho,[t])$ is continuous and surjective.
For any $[t_0]\in\mathbb R/\mathbb Z$, choose an open interval
$I=(a,b)$ around a representative of $[t_0]$ with $b-a<1$. Its image is an
open arc because its full preimage $\bigcup_{n\in\mathbb Z}(I+n)$ is open
by [F5, F7]; the translates are disjoint by $b-a<1$. On each sheet $I+n$,
the quotient map $t\mapsto[t]$ is a homeomorphism onto that arc: it is a
continuous bijection and maps open subsets to open subsets by the same
saturation check. Taking products with the other two coordinate factors
gives evenly covered open neighborhoods in $X$, so [F2] makes $p$ a covering
map. [F1, F2, F5, F7, algebra]

1.2 By [F4], a deck transformation $D$ satisfies $pD=p$. Hence $D$ fixes
the $\mathbb R^2$ and $(0,\infty)$ coordinates and has last coordinate
$t+k(c,\rho,t)$ for an integer-valued continuous function $k$, by [F5].
The space $\widetilde X$ is connected because it is convex: its radius
coordinate stays positive on every line segment. Therefore $k$ is constant;
thus $D=T_n$ for some
$n\in\mathbb Z$. Conversely each $T_n$ preserves $p$ and is a homeomorphism,
so these are exactly the deck transformations. [F1, F2, F4, F5, algebra]

2.1 The space $\widetilde X$ is nonempty and convex in $\mathbb R^4$ because
the radius coordinate remains positive along every line segment. For any
basepoint $x_0\in\widetilde X$ and based loop $\alpha$, the straight-line
homotopy $H_s(t)=(1-s)\alpha(t)+s x_0$ remains in $\widetilde X$ and fixes
both endpoints. Thus every based loop from [F9] is null-homotopic, so [F6]
makes $\widetilde X$ simply connected. By [F3], $p$ is a universal covering
map. [F3, F6, F9, step 1.1, algebra]

2.2 The action in [F8] is a group action: composing the $m$ and $n$ actions
adds the shifts and multiplies the fiber coordinate by
$\chi(m)^{-1}\chi(n)^{-1}=\chi(m+n)^{-1}$. The action is free because
$T_n\widetilde x=\widetilde x$ implies $n=0$. If $U$ is an evenly covered
neighborhood as in step 1.1 and $V$ is one chosen sheet, every orbit over
$U$ has exactly one representative in $V\times\mathbb C$. The quotient
topology therefore identifies $\Pi_\chi^{-1}(U)$ homeomorphically with
$U\times\mathbb C$: the restriction from $V\times\mathbb C$ is bijective,
and it is open because the saturation of an open subset is the union of its
translates under the homeomorphisms in [F8]. The fiber coordinate is the
unique representative's complex coordinate. This gives a local trivialization
with one-dimensional complex fibers. [F7, F8, step 1.1, algebra]

3.1 On an overlap, two chosen sheets differ locally by a fixed translation
$T_n$, because the sheets of a covering are disjoint and indexed by the
discrete integers. The corresponding fiber coordinate changes by
$z\mapsto\chi(n)z$ or its inverse, according to the direction of the chart
change. Since $|\chi(n)|=1$ and $n$ is locally constant, these transition
functions are locally constant $U(1)$-valued functions. By [F8], this is a
unitary flat complex line bundle. [F8, step 2.2, algebra]

4.1 Let a based loop have a lift from $\widetilde x$ to $T_n\widetilde x$;
the path-lifting theorem [F10] supplies a unique lift from every prescribed
starting point. Keeping $z$ constant along this lift gives endpoint class
$[T_n\widetilde x,z]$. The defining equivalence in [F8] gives
$[T_n\widetilde x,z]=[\widetilde x,\chi(n)z]$, so monodromy is multiplication
by $\chi(n)$. The explicit positive exchange path has lifted angle coordinate
$t\mapsto t$ from $0$ to $1$, while the full relative turn has $t\mapsto2t$
from $0$ to $2$, by the homeomorphism in [F1]. Thus their monodromies are
$\chi(1)$ and $\chi(2)$. [F1, F8, F9, F10, step 1.1, step 2.2, step 3.1] ∎
