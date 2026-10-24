---
id: def-basic-arcs-admissible-curves-and-normal-form
kind: definition
title: "Basic arcs, admissible curves and the standard normal form"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - thm-the-artin-presentation-is-complete-for-geometric-braids
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-boundary-fixed-mapping-class-group-of-a-punctured-disk
  - def-elementary-geometric-half-twist
  - lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Sections 3b and 3e"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 3b (basic sets, admissible curves, Figures 6-7), printed pp. 19-21; Section 3e (vertical curves, normal form, types, Figures 11-18), printed pp. 26-33"
verification:
  precheck: n/a
---

## Definition

Let $(D,\Delta)$ be the marked disk of
[[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]] with
$m+1\ge2$ marked points, and let
$G=\pi_0\operatorname{Diff}(D,\partial D;\Delta)$ be its boundary-fixed mapping
class group ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).
Write $\mathcal D:=\operatorname{Diff}(D,\partial D;\Delta)$ for the actual diffeomorphism group, so $G=\pi_0(\mathcal D)$. Actual curve images below use members of $\mathcal D$, and mapping classes act on curve-isotopy classes. All curves below are curves in $(D,\Delta)$ in the sense of that definition.

**Basic sets.** Fix the boundary endpoint $d$ of the standard drawn chain of source Figure 2, and label its marked points $q_0,\ldots,q_m$ along that chain. The standard basic arcs are $b_0$ from $d$ to $q_0$ and $b_i$ from $q_{i-1}$ to $q_i$ for $1\le i\le m$. Their interiors are pairwise disjoint and avoid $\Delta\cup\partial D$; consecutive arcs meet only at their common marked endpoint, and all other arcs are disjoint. A **basic set of curves** is an actual image of this fixed chain under a member of $\mathcal D$. The marked labels are transported with it. Under AC, the preferred identification of the Artin-presentation group
$B_{m+1}$ with $G$ sends $\sigma_i$ to the half twist about $b_i$,
$1\le i\le m$. Presentation completeness is supplied by
[[thm-the-artin-presentation-is-complete-for-geometric-braids]]; the
geometric-to-topological comparison is
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]].
For the smooth group $G$ used here, use the smooth configuration-space
comparison and generator convention of Khovanov–Seidel, Section 3b,
equation (3.1) and Figure 6, printed pp. 19–20
([[def-axiom-of-choice]], [[def-elementary-geometric-half-twist]]).
**Admissible curves.** A curve $c$ is **admissible** if $c=f(b_i)$ for some
$f\in\mathcal D$ and some $i$, that is, if it lies in the $\mathcal D$-orbit of the actual basic set.
The endpoints of an admissible curve lie in $\Delta\cup(b_0\cap\partial D)$, and
conversely every arc with such endpoints is admissible; $G$ acts on the set of
isotopy classes of admissible curves.

**Vertical curves and normal form.** Fix arcs $d_0,\dots,d_m$ as in Figure 11,
pairwise disjoint embedded arcs dividing $D$ into regions
$D_0,D_1,\dots,D_{m+1}$ in that order, chosen so that $d_k$ meets the spine in
the prescribed way of the standard picture. An admissible curve $c$ is in
**normal form** if it has minimal intersection with every $d_k$. Every
admissible curve can be isotoped into normal form, and the normal form is unique
up to isotopy preserving each $d_k$ setwise and fixing the marked points and $\partial D$ (the source's Lemma 3.15);
consequently the combinatorial data below are invariants of the isotopy class
of $c$.

**Crossings, segments, strings.** For an admissible curve $c$ in normal form
put
$$\operatorname{cr}(c):=c\cap(d_0\cup\dots\cup d_m),$$
the set of **crossings** of $c$; a crossing lying on $d_k$ is a
**$k$-crossing**. The connected components of $c\cap D_k$ are the **segments**
of $c$; a segment is **essential** when both its endpoints are crossings, and
**inessential** otherwise (it then ends at a point of $\Delta\cup\partial D$).
The connected components of $c\cap(D_k\cup D_{k+1})$, for $0\le k\le m$ with
$D_{m+1}$ interpreted as the region across $d_m$ in the standard picture, are
the **$k$-strings** of $c$; write $\operatorname{st}(c,k)$ for their set. By the
uniqueness of normal form, the number and relative position of the segments and
of the strings are invariants of $c$.

**String types.** Up to isotopy of $D_k\cup D_{k+1}$ fixing the boundary arcs
and the marked points, each $k$-string belongs to one of the following families or exceptional types.
For $1\le k<m$ there are five infinite families
$$\mathrm I_u,\ \mathrm{II}_u,\ \mathrm{II}'_u,\ \mathrm{III}_u,\ \mathrm{III}'_u\qquad(u\in\mathbb Z)$$
and five exceptional types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V',\mathrm{VI}$
(Figures 15-16); the type $\mathrm I_{u+1}$ is obtained from $\mathrm I_u$ by
applying the half twist about $b_k$, and likewise for the other families. For
$k=m$ the list consists of the two families $\mathrm{II}_u,\mathrm{III}_u$ and
the two exceptional types $\mathrm V,\mathrm{VI}$ (Figure 17), and for $k=0$ of
the five exceptional types $\mathrm{VII},\mathrm{VIII},\mathrm{IX},\mathrm X,\mathrm{XI}$
(Figure 18). The members $u=0$ of the families and the exceptional types are the
drawn models of those figures; each type is an isotopy class of arcs in
$D_k\cup D_{k+1}$ with the prescribed endpoints on $d_{k-1},d_k,d_{k+1}$ and
$\Delta\cup\partial D$.

**Segments types.** A segment of $c\cap D_k$ for $1\le k\le m$ is, up to the
analogous isotopy, of one of the six types labelled $1,1',2,2',3,3'$ of
Figure 12; for $k=m+1$ there are the two types analogous to $2$ and $3$
(Figure 13), and for $k=0$ the single type of Figure 14. The essential
segments are precisely those of type $1,1',2,2'$; the basic curves
$b_0,\dots,b_m$ themselves have no essential segments.

**The nested twists.** Fix the pairwise disjoint nested curves $l_0,\ldots,l_{m-1}$ of Figure 7. The disk bounded by $l_j$ contains exactly the suffix of marked points $\{q_j,\ldots,q_m\}$. Choose a small closed annular neighbourhood of $l_j$, disjoint from all marks and from the other support annuli; among the basic arcs it meets only $b_j$, in one transverse crossing. Let $\tau_j$ be a positive Dehn twist supported in that annulus. Its class lies in $G$, the classes commute by disjoint support, and the chosen representative fixes every $b_k$ with $k\ne j$. They generate the standard twist subgroup used in the detector lemma below.
**Standing convention.** All the data above — the basic set $b_0,\dots,b_m$,
the vertical curves $d_0,\dots,d_m$, the regions $D_0,\dots,D_{m+1}$ and the
nested curves $l_0,\dots,l_{m-1}$ — are fixed once and for all in the standard
picture, and every statement invoking them names this fixed picture. When a
statement is applied to an arbitrary basic set, it is transported by an actual diffeomorphism
in $\mathcal D$ carrying the standard basic set to the given one; the transport is
part of the statement.
