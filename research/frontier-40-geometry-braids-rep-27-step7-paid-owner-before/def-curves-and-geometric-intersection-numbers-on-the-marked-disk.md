---
id: def-curves-and-geometric-intersection-numbers-on-the-marked-disk
kind: definition
title: "Curves and geometric intersection numbers on the marked disk"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
  - def-geometric-braid-with-setwise-endpoints
  - def-smooth-embedding
  - def-embedded-smooth-submanifold-with-boundary
  - def-interval
  - def-euclidean-spheres-and-closed-balls
  - def-subspace-topology-top
justified_by: [lem-geometric-intersection-numbers-are-isotopy-invariants]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 3a"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 3a, printed pp. 17-19 (curves, minimal intersection, the number I, the flow extension)"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Chapter 1 (bigon criterion and isotopy extension)"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
      locator: "Proposition 1.7 (bigon criterion), Section 1.2.7 (isotopy extension), printed pp. 31-38 and 43-44"
verification:
  precheck: n/a
---

## Definition

Let
$$D:=\{\,z\in\mathbb C:|z|\le1\,\},\qquad \partial D:=\{\,z\in\mathbb C:|z|=1\,\},\qquad D^\circ:=D\setminus\partial D,$$
the closed unit disk with its subspace topology from $\mathbb C\cong\mathbb R^2$
([[def-euclidean-spheres-and-closed-balls]], [[def-subspace-topology-top]]), and
fix once and for all a set $\Delta\subset D^\circ$ of $m+1\ge2$ marked points
with the induced topology. Fix also an orientation of $D$, namely the standard
one. Write $G:=\pi_0\operatorname{Diff}(D,\partial D;\Delta)$ for the
boundary-fixed mapping class group of the punctured disk of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], in its smooth version, whose elements
are isotopy classes of diffeomorphisms of $D$ fixing $\partial D$ pointwise and
permuting $\Delta$ setwise. The cited item defines the homeomorphism
version; the smooth configuration-space comparison used here is
Khovanov–Seidel, Section 3b, equation (3.1), printed p. 19.

**Curves.** A **curve** in $(D,\Delta)$ is a subset $c\subseteq D$ of one of the
following two kinds.

1. A **simple closed curve** $c\subset D^\circ\setminus\Delta$ which is
   *essential*, that is, not contractible in $D^\circ\setminus\Delta$; it is the
   image of an embedding $S^1\hookrightarrow D^\circ\setminus\Delta$
   ([[def-smooth-embedding]]).
2. An **arc**: the image of an embedding $\gamma\colon[0,1]\to D$
   ([[def-interval]], [[def-smooth-embedding]]) which is transverse to
   $\partial D$, meets the boundary and the marked set exactly in its endpoints,
   $$\gamma^{-1}(\partial D\cup\Delta)=\{0,1\},$$
   and whose interior lies in $D^\circ\setminus\Delta$. The unoriented image is
   the curve; a curve may meet $\Delta$ in one or both of its endpoints, may
   meet $\partial D$ in one or both of them, and may have both endpoints in
   $\Delta$, both on $\partial D$, or one of each. Arcs are thus embedded smooth
   submanifolds with boundary of $D$ ([[def-embedded-smooth-submanifold-with-boundary]]).

Curves are unoriented: $c$ and its image under any orientation-reversing
reparametrization are the same curve. Two curves $c_0,c_1$ are **isotopic**,
written $c_0\simeq c_1$, when one can be deformed into the other by an isotopy
in $\operatorname{Diff}(D,\partial D;\Delta)$; endpoints on $\partial D$ may not
move during an isotopy. Isotopy of curves is the orbit relation for the identity component of
$\operatorname{Diff}(D,\partial D;\Delta)$. The full mapping class group $G$
acts on these isotopy classes and may carry one class to a different class.

**Minimal intersection.** Let $c_0,c_1$ be curves. They are in **minimal
intersection** when (i) they intersect transversally, (ii) $c_0\cap c_1\cap\partial D=\varnothing$,
and (iii) the following disk formulation of the bigon condition holds: for any two points
$z_-\ne z_+$ of $c_0\cap c_1$ that do not both lie in $\Delta$, and arcs
$\alpha_0\subseteq c_0$, $\alpha_1\subseteq c_1$ with endpoints $z_-,z_+$ and
$\alpha_0\cap\alpha_1=\{z_-,z_+\}$, the open Jordan disk $K$ enclosed by
$\alpha_0\cup\alpha_1$ contains a marked point. Other portions of the curves
may lie in $K$; it need not be a component of $D\setminus(c_0\cup c_1)$.
Thus a transverse interior crossing contributing a removable bigon is
forbidden, and a pair of arcs with common endpoints in $\Delta$ is allowed to
bound a marked-free disk only when the two arcs share *both* endpoints.

**Existence of minimal representatives.** Given curves $c_0,c_1$ with
$c_0\cap c_1\cap\partial D=\varnothing$ there is a curve $c_1'\simeq c_1$ in
minimal intersection with $c_0$: first perturb $c_1$ into transverse position
with distinct endpoint germs, giving finitely many intersections. If
the disk condition fails, an innermost marked-free bigon can be removed by
pushing $c_1$ across it, with support near the bigon and fixing the marked
points and the boundary (the bigon removal of Khovanov–Seidel, Section 3a);
as each such move decreases the finite number $|c_0\cap c_1|$ of intersection
points, the process terminates. In the case $c_0\cap c_1\cap\partial D\ne\varnothing$
one first applies the flow extension below.

**The geometric intersection number.** Let $c_0,c_1$ be curves with
$c_0\cap c_1\cap\partial D=\varnothing$, and choose a minimal-intersection
representative $c_1'\simeq c_1$ of $c_1$. The **geometric intersection number**
is the half-integer
$$I(c_0,c_1):=|(c_0\cap c_1')\setminus\Delta|+\tfrac12\,|c_0\cap c_1'\cap\Delta|, \qquad I(c_0,c_1)\in\tfrac12\mathbb Z,$$
except in the exceptional case that $c_0,c_1$ are simple closed curves with
$c_0\simeq c_1$, where one sets $I(c_0,c_1):=2$. Interior intersection points
count once and common marked endpoints count one half, so that in particular
$I(b_i,b_i)=1$ for an arc $b_i$ joining two marked points. Isotopic arcs have the same endpoint
set, since an isotopy fixes every marked point and every boundary point. The number is independent of
the chosen representative $c_1'$: this is proved in
[[lem-geometric-intersection-numbers-are-isotopy-invariants]], together with
the invariance of $I$ under isotopies of both arguments. The value is finite
because two curves in minimal intersection meet in finitely many points after a
small perturbation, the arcs involved being compact.

**The flow extension.** The definition above requires
$c_0\cap c_1\cap\partial D=\varnothing$. For the source's $I$ on arbitrary pairs
one fixes a nonvanishing smooth vector field on $\partial D$ which is positively
oriented with respect to the fixed orientation, extends it to a smooth vector
field $Z$ on $D$ which vanishes on $\Delta$, and lets $(f_t)$ be the
flow of $Z$. For $t>0$ small enough that the endpoints of $c_0$ on $\partial D$
are moved along $\partial D$ past no endpoint of $c_1$, set
$$I(c_0,c_1):=I(c_0^+,c_1),\qquad c_0^+:=f_t(c_0).$$
This extension is independent of the auxiliary choices by the isotopy
invariance proved in [[lem-geometric-intersection-numbers-are-isotopy-invariants]];
it depends on the orientation of $D$ and is **not symmetric**, since it removes
the common boundary endpoints of $c_0$ with $c_1$ by pushing $c_0$ off them.

**Standing conventions.** Throughout this page $I$ always denotes this
half-integer valued function of isotopy classes of curves, with the exceptional
value $2$ for isotopic simple closed curves, and with the flow extension
whenever a pair meets on $\partial D$. The basic arcs $b_0,\dots,b_m$ fixed in
[[def-basic-arcs-admissible-curves-and-normal-form]] form a chain: $b_0$ joins
a fixed boundary point to the first marked point, and $b_i$ for $1\le i\le m$
joins the $(i-1)$st marked point to the $i$th marked point, and all
values $I(b_j,c)$ quoted on this page are computed in that fixed picture, whose
data are fixed there once and for all.
