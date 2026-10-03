---
id: def-oriented-link-in-s-three-and-ambient-isotopy
kind: definition
title: "Oriented links in the three-sphere and ambient isotopy"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-smooth-embedding, def-euclidean-spheres-and-closed-balls,
       def-oriented-smooth-manifold-and-oriented-chart,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-smooth-manifold]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2 (printed pp. 12-26) and Figures 3-12"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1 and Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
    - title: "Queffelec, Reidemeister's theorem using transversality, Bulletin of the Australian Mathematical Society (2024); arXiv:2406.18203v1, sections 2-3"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Definition

Work in the smooth category ([[def-smooth-manifold]]). Fix once and for all the
three-sphere as the one-point compactification

$$S^3:=\mathbb R^3\cup\{\infty\}$$

of Euclidean three-space, carrying its standard smooth structure, and fix the
standard orientation of $S^3$: the orientation induced by the standard
orientation of $\mathbb R^3$ under the one-point compactification, so that the
charts of the standard atlas away from $\infty$ are orientation-preserving and
the orientation is that of a connected oriented $3$-manifold in the sense of
[[def-oriented-smooth-manifold-and-oriented-chart]]. For $r>0$ write
$\overline B_r:=\{x\in\mathbb R^3:\lVert x\rVert_2\le r\}$, the closed ball of
[[def-euclidean-spheres-and-closed-balls]] with its standard smooth structure.

**Links.** The **standard oriented circle** is the circle
$S^1=\mathbb R/\mathbb Z$ with its standard counterclockwise orientation,
regarded as a smooth $1$-manifold; a
**finite disjoint union of oriented circles** is a smooth manifold
$C=S^1\sqcup\dots\sqcup S^1$ ($k$ summands, $k\in\mathbb N$)
diffeomorphic to the disjoint union of $k$ standard oriented circles. An
**oriented link** (with $k$ components) is a smooth embedding

$$L\colon C\longrightarrow S^3$$

of such a disjoint union in the sense of [[def-smooth-embedding]]. So $L$ is
injective, is an immersion, and is a homeomorphism onto its image with the
subspace topology, and its image $L(C)$ is a finite disjoint union of smoothly
embedded circles. Thus every link considered here is finite and tame: the
smoothness of $L$ is exactly the standing convention, and no polygonal or other
tame model is used. The **components** of $L$ are the images of the individual
summands, and the number of components is $k$.

**Ambient isotopy.** Let $I=[0,1]$. An **ambient isotopy** of $S^3$ is a smooth
map

$$H\colon S^3\times I\longrightarrow S^3$$

such that $H_0=\mathrm{id}_{S^3}$, each $H_t\colon S^3\to S^3$,
$H_t(x):=H(x,t)$, is a diffeomorphism ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]),
and each $H_t$ is orientation-preserving with respect to the fixed orientation.
The last clause is in fact automatic: $t\mapsto H_t$ is continuous in the
$C^\infty$ topology of the diffeomorphism group, the orientation sign is locally
constant in $t$, and $H_0=\mathrm{id}$ is orientation-preserving, so it is kept
only for emphasis.

**Equivalence of links.** Two oriented links $L_0\colon C_0\to S^3$ and
$L_1\colon C_1\to S^3$ are **equivalent** (written $L_0\sim L_1$), or
**ambient isotopic**, when there is an ambient isotopy $H$ with
$H_1\circ L_0=L_1$ *as maps of oriented $1$-manifolds*, that is, so that the
composite is smooth, injective with the prescribed images, and orientation
preserving. Equivalently $H_1\circ L_0$ is a smooth orientation-preserving
reparametrisation of $L_1$. The relation is an equivalence relation on links:
it is reflexive with $H=\mathrm{id}$, transitive by composing isotopies, and
symmetric because a smooth family of diffeomorphisms has a smooth family of
inverses. An equivalence class is an **(oriented) link type**.

**Moving off $\infty$.** Because the definition of equivalence allows the
isotopy to move a link through $\infty$, the standard practice of this page is
to first apply an ambient isotopy that carries a given link into the open ball,
and only then to project; every projection and every Reidemeister move below is
read after moving the link off $\infty$ into $\mathbb R^3$ in this way. The
orientation-preserving clause in the definition of ambient isotopy is exactly
what the oriented Reidemeister moves and the oriented closure construction must
respect; the unoriented theory would instead use all ambient isotopies, and the
two theories differ for links with more than one component.

**Links in the three-sphere versus links in $\mathbb R^3$.** A link contained in
$\mathbb R^3\subset S^3$ is a link in $S^3$; conversely every link may be
assumed after isotopy to lie in $\mathbb R^3$, since the complement of a small
closed ball centred at $\infty$ is an embedded $\mathbb R^3$ and links are
compact. Composing an isotopy of $S^3$ with a diffeomorphism
$S^3\setminus\{\infty\}\to\mathbb R^3$ therefore gives the same isotopy classes
as working entirely inside $\mathbb R^3$, and both descriptions are used
interchangeably below.
