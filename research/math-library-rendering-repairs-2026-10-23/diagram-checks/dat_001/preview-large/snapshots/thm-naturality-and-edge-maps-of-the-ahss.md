---
id: thm-naturality-and-edge-maps-of-the-ahss
kind: theorem
title: Naturality and edge maps of the AHSS
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-homological-atiyah-hirzebruch-spectral-sequence, prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences, lem-edge-maps-of-a-bounded-skeletal-ahss, def-exact-couple]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, §9.1, printed pp. 237–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§9.1, naturality of the skeletal exact couple, printed pp. 237–246"
verification:
  audited: 2026-09-22
---

## Statement

Every cellular map $f:X\to Y$ of finite CW complexes induces morphisms of the
cohomological and homological Atiyah–Hirzebruch spectral sequences of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] and
[[thm-homological-atiyah-hirzebruch-spectral-sequence]]: on every page the
induced maps commute with the differentials and the page transitions. A
morphism $\varphi:\widetilde h\to\widetilde k$ of reduced generalized
cohomology theories that commutes with suspension and with the cofiber
connecting maps induces a morphism of the cohomological spectral sequences;
the analogous kind of morphism between reduced generalized homology theories
induces a morphism of the homological spectral sequences. These morphisms preserve the edge maps of
[[lem-edge-maps-of-a-bounded-skeletal-ahss]], and all constructions are
compatible with composition and identities.

## Facts & Assumptions

[F2] A morphism of exact couples induces a morphism of their derived couples and of their spectral sequences, preserving every bidegree and page transition, and this construction respects identities and composition ([[prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences]]).

[F3] The two skeletal exact couples are built from the pair long exact sequences of the skeleta and from the suspension and connecting data of the theory ([[def-exact-couple]], [[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[thm-homological-atiyah-hirzebruch-spectral-sequence]]).

[F4] The edge maps are the structural maps of the exact couple under the stable identifications ([[lem-edge-maps-of-a-bounded-skeletal-ahss]]).

## Proof

**Proof technique:** direct.

**Given:** A cellular map $f:X\to Y$ of finite CW complexes and reduced generalized cohomology and homology theories and their morphisms as above.

1.1 Since $f$ is cellular, it maps $X^p$ into $Y^p$ for every $p$, so on each pair $(X^p,X^{p-1})$ it induces a map of pairs and hence a map $h^n(Y^p,Y^{p-1})\to h^n(X^p,X^{p-1})$ and, in the absolute groups, $h^n(Y^p)\to h^n(X^p)$. By naturality of the pair long exact sequences and of the suspension isomorphisms these maps commute with $i,j,k$ and define a morphism of the cohomological skeletal exact couples; the homological case is the same with covariant arrows. [F3, given]

1.2 Identity cellular maps induce identity exact-couple morphisms, and composites of cellular maps induce the composites of the corresponding exact-couple morphisms, by functoriality on every skeletal pair. [F3, given]

1.3 A morphism $\varphi$ of reduced generalized cohomology theories commuting with suspension and connecting maps assigns to each pair long exact sequence a commuting ladder, hence defines a morphism of cohomological skeletal exact couples; the same argument for a morphism of reduced generalized homology theories gives a morphism of homological skeletal exact couples. [F3, given]

2.1 By [F2] the morphisms of step 1.1 and step 1.3 induce morphisms of the derived couples and of every page, commuting with differentials and transitions; composition and identities are respected because the exact-couple construction is functorial. [F2, step 1.1, step 1.3]

3.1 The induced morphisms carry the stable numerator and denominator of the exact couple into the corresponding stable subobjects, so under the edge identifications of [F4] they induce the maps on the filtration stages and filtration quotients; hence the edge maps are preserved. [F2, F4, step 2.1]

4.1 Steps 1.2, 2.1 and 3.1 show that the induced page maps respect identities and composition, commute with all structure, and preserve the edge maps, which proves the theorem in both the cohomological and homological cases. [step 1.2, step 2.1, step 3.1] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), §9.1, printed pp. 237–246, for naturality of the skeletal exact couple and of its edge maps.


## Remarks

For a cellular map $f:X\to Y$, the upper square below is cohomological
(contravariant in the space) and the lower square is homological
(covariant). Here $r\ge1$ and $p,q\in\mathbb Z$; the theory $h$ is fixed.
The horizontal arrows have total degree $+1$ and $-1$, respectively.

```tikzcd
[column sep=huge, row sep=large, font=\Large]
E_r^{p,q}(Y) \arrow[r,"d_r"] \arrow[d,"f_r^*"'] & E_r^{p+r,q-r+1}(Y) \arrow[d,"f_r^*"] \\
E_r^{p,q}(X) \arrow[r,"d_r"'] & E_r^{p+r,q-r+1}(X) \\[2em]
E^r_{p,q}(X) \arrow[r,"d^r"] \arrow[d,"f_{r,*}"'] & E^r_{p-r,q+r-1}(X) \arrow[d,"f_{r,*}"] \\
E^r_{p,q}(Y) \arrow[r,"d^r"'] & E^r_{p-r,q+r-1}(Y)
```

Taking homology of these commuting squares gives the corresponding maps
on page $r+1$; there is no asserted map from every element of $E_r$ directly
to $E_{r+1}$. At the stable page, the following squares illustrate the
$0$-column edges in total degree $n$:

```tikzcd
[column sep=huge, row sep=large, font=\Large]
h^n(Y) \arrow[r,"\epsilon_Y"] \arrow[d,"f^*"'] & E_\infty^{0,n}(Y) \arrow[d,"f_\infty^*"] \\
h^n(X) \arrow[r,"\epsilon_X"'] & E_\infty^{0,n}(X) \\[2em]
E^\infty_{0,n}(X) \arrow[r,"\eta_X"] \arrow[d,"f_{\infty,*}"'] & h_n(X) \arrow[d,"f_*"] \\
E^\infty_{0,n}(Y) \arrow[r,"\eta_Y"'] & h_n(Y)
```

Here $\epsilon_Z$ is the quotient
$h^n(Z)\to h^n(Z)/F^1h^n(Z)\cong E_\infty^{0,n}(Z)$,
and $\eta_Z$ is the identification
$E^\infty_{0,n}(Z)\cong F_0h_n(Z)$ followed by inclusion into $h_n(Z)$.
The filtrations are $F^ph^n(Z)=\ker(h^n(Z)\to h^n(Z^{p-1}))$ and
$F_ph_n(Z)=\operatorname{im}(h_n(Z^p)\to h_n(Z))$.
Cellularity makes $f^*$ and $f_*$ preserve these filtrations, so the stable
maps above are the induced maps on the appropriate filtration quotients,
as in step 3.1 and [F4]. Finiteness of the skeletal filtration ensures
stabilization; no bound on the coefficient degree is imposed. A morphism
of theories gives the analogous squares with arrows from $h$ to $k$ at a
fixed space. Both diagrams illustrate the proof, which is independent of them.
