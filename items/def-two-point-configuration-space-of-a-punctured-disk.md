---
id: def-two-point-configuration-space-of-a-punctured-disk
kind: definition
title: The two-point configuration space of a punctured disk
status: draft
origin: pipeline
deps: [def-unordered-configuration-space, def-boundary-fixed-mapping-class-group-of-a-punctured-disk]
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed pp. 472-473: the space C, the basepoint c0 = {d1,d2}, and the Bn-action by boundary-fixed homeomorphisms"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 3: the same space C and the basepoint in the disk Dn"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Let
$$D:=\{z\in\mathbb C:|z|\le 1\},\qquad \operatorname{int}D:=\{z\in\mathbb C:|z|<1\},$$
let $n\ge 1$, and let $P=\{p_1,\dots,p_n\}\subset\operatorname{int}D$ be a set of
$n$ distinct points, called **punctures**. Throughout the
Lawrence-Krammer-Bigelow page the punctures are normally taken on the real axis
with $-1<p_1<\cdots<p_n<1$, as the standard configuration.

The **two-point configuration space of the punctured disk** is the unordered
configuration space
$$C:=C_2(D\setminus P)=\{\{x,y\}:x,y\in D\setminus P,\ x\ne y\}$$
of [[def-unordered-configuration-space]]. Its elements are written $\{x,y\}$
for the orbit of the ordered pair $(x,y)$. The **basepoint** is
$$c_0:=\{d_1,d_2\},$$
where $d_1,d_2\in\partial D$ are two distinct points of the lower arc of
$\partial D$, specified once and for all together with the standard
configuration and with the following convention: $d_1$ lies to the left of
$d_2$ and the arc of $\partial D$ from $d_1$ to $d_2$ passing through $-i$ is
the **lower arc** used in every noodle construction on this page. Thus
$c_0\in C$ is a genuine basepoint.

**Action of the boundary-fixed mapping class group.** Let
$\operatorname{Mod}(D,P;\partial D)$ be the boundary-fixed mapping class group
of [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]: isotopy
classes relative to $\partial D\cup P$ of homeomorphisms $h:D\to D$ with
$h|_{\partial D}=\operatorname{id}$ and $h(P)=P$. Every such homeomorphism
sends $D\setminus P$ to itself, commutes with the interchange $(x,y)\mapsto
(y,x)$, and therefore induces a homeomorphism of $C$. Since $h$ fixes
$\partial D$ pointwise, it fixes $d_1$ and $d_2$ and hence fixes $c_0$.
These representative homeomorphisms act literally on $C$. An isotopy $h_t$
relative to the outer boundary and the marked set gives the continuous based
homotopy $\{x,y\}\mapsto\{h_t(x),h_t(y)\}$, fixing $c_0$ throughout.
Thus mapping classes act on based homotopy classes of self-maps, and induce
well-defined actions on $\pi_1(C,c_0)$ and homology; no literal action of a
mapping class on the individual points of $C$ is asserted.

**Elementary properties.** $C$ is path-connected and locally path-connected.
Indeed, $D\setminus P$ has disk neighborhoods at interior points and relative
half-disk neighborhoods at boundary points; choose them small enough to miss
$P$. It is not an open subset of the plane. Polygonal paths with finite
puncture detours give path connectivity. To join two ordered configurations,
choose two distinct interior buffer points different from the four prescribed
mobile positions and $P$. Move the first point to its buffer avoiding the
stationary second point, then the second to its buffer avoiding the first;
move the first to its target and finally the second to its target, with the
same finite-point detours. The distinct buffer choices prevent an occupied
target during each stage. Passing to unordered pairs gives path connectivity.
Local path-connectedness is inherited from
$(D\setminus P)^2$ through the two-to-one quotient map $(x,y)\mapsto\{x,y\}$:
a small product neighbourhood of $(x,y)$ maps onto a neighbourhood of
$\{x,y\}$, and the only non-injectivity is the interchange of the two
coordinates. These conventions fix the space, basepoint and action used by
the covering homomorphism and the LKB pairing below.
