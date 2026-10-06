---
id: def-the-framed-oriented-tangle-category
kind: definition
title: "The framed oriented tangle category"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-oriented-link-in-s-three-and-ambient-isotopy, def-oriented-reidemeister-moves]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §2.3, category $\\mathrm{Rib}_V$ and the category of colored ribbon tangles, printed pp. 36--38; §2.2, ribbon graphs and framings, printed pp. 34--36"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3, the category of framed tangles as the universal ribbon category, printed pp. 216--217"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Work in the smooth category and fix the **slab**

$$W:=\mathbb R\times[0,1]\times[0,1],$$

with coordinates $(x,y,t)$ and height function $t$. Its **bottom face** is
$\mathbb R\times[0,1]\times\{0\}$, its **top face** is
$\mathbb R\times[0,1]\times\{1\}$, and its **side faces** are
$\mathbb R\times\{0\}\times[0,1]$ and $\mathbb R\times\{1\}\times[0,1]$.

The **framed oriented tangle category** $\mathcal T$ is the strict monoidal
category whose objects are the finite sequences
$\varepsilon=(\varepsilon_1,\dots,\varepsilon_m)$ with
$\varepsilon_j\in\{+1,-1\}$, the empty sequence included. For a sequence of length $m$, prescribe boundary points $(j,\tfrac12,0)$
on the bottom and $(j,\tfrac12,1)$ on the top, $1\le j\le m$, with
vertical strand collars and fixed normal vector $(0,1,0)$ on those collars.
A morphism
$\varepsilon\to\varepsilon'$ is a boundary-relative isotopy class of compact
oriented framed $1$-manifolds properly embedded in $W$ and disjoint from the
side faces, meeting the bottom face in $m$ points and the top face in $m'$
points at those prescribed positions, equal to the vertical framed collars
near both faces, and with the signs $\varepsilon_1,\dots,\varepsilon_m$
at the bottom and $\varepsilon'_1,\dots,\varepsilon'_{m'}$ at the top, ordered
by the $x$-coordinate. A sign $+1$ means that the oriented tangent points
in the increasing $t$ direction; $-1$ means decreasing $t$, at either face.
A **framing** is a homotopy class, relative to the fixed collars, of
nonvanishing normal vector fields. Isotopies are ambient isotopies of $W$, constant on the
side faces and on the fixed top and bottom collars,
that carry the framing class of one tangle to that of the other, fix every
boundary point and its framing, and preserve strand orientation. This is the boundary-relative
analogue of [[def-oriented-link-in-s-three-and-ambient-isotopy]] with diagrams
in the slab in place of links in the sphere; the oriented crossing signs and kink conventions
are those of [[def-oriented-reidemeister-moves]].

**Composition and tensor product.** The composition of $\varepsilon\to
\varepsilon'$ and $\varepsilon'\to\varepsilon''$ is stacking: put the first
tangle in $\mathbb R\times[0,1]\times[0,\tfrac12]$, the second in
$\mathbb R\times[0,1]\times[\tfrac12,1]$, and glue along the common boundary.
The tensor product is horizontal juxtaposition, placing the first
factor to the left of the second and normalizing the ordered endpoints to the
prescribed positions for the concatenated sequence. Use horizontal embeddings
with disjoint image strips and fixed vertical collars, followed by an
order-preserving horizontal adjustment near the boundary. Different such
adjustments are isotopic relative to the prescribed framed collars: interpolate
the increasing horizontal coordinate maps, whose derivatives remain positive,
and extend through the collars. Thus the result is independent of those
adjustments. The vertical collars make stacking smooth; different height
rescalings and collar lengths are related by increasing height
reparametrizations relative to the boundary. These isotopies prove associativity,
the identity laws, strict associativity of juxtaposition on isotopy classes,
and interchange. The empty sequence is the strict tensor unit. Hence these
operations define a strict monoidal category.

**Blackboard framing and elementary tangles.** When a tangle is drawn in the
interior picture plane $y=\tfrac12$ with its bands parallel to that plane, its **blackboard framing** is
represented by the normal to the band surface, equal to $(0,1,0)$
away from small crossing neighborhoods and on the fixed collars. A diagram
is a projection to the picture plane; at crossings the bands are separated
in the $y$ direction, rather than literally contained in that plane. All elementary tangles below carry the blackboard framing
relative to the plane of the picture. The elementary morphisms of $\mathcal T$
are:

1. for each pair of signs $(\varepsilon,\varepsilon')$ the **positive crossing**
   $X^{+}_{\varepsilon,\varepsilon'}\colon(\varepsilon,\varepsilon')\to
   (\varepsilon',\varepsilon)$ and the **negative crossing**
   $X^{-}_{\varepsilon,\varepsilon'}\colon(\varepsilon,\varepsilon')\to
   (\varepsilon',\varepsilon)$, the two blackboard-framed crossings of the two
   adjacent strands. The superscript fixes the over/under geometry,
   independently of their orientations: $X^+$ has the geometry of the positive
   Artin crossing on two $+$ strands, and $X^-$ has the inverse geometry.
   For mixed endpoint signs its oriented crossing sign is reversed.
   Following the two strands, the crossing sends
   the left bottom endpoint to the right top endpoint and conversely, which is
   why the sign sequence is reversed in the target. The two crossings are
   mutually inverse, $X^{+}_{\varepsilon',\varepsilon}X^{-}_{\varepsilon,\varepsilon'}=
   \operatorname{id}_{(\varepsilon,\varepsilon')}$ and
   $X^{-}_{\varepsilon',\varepsilon}X^{+}_{\varepsilon,\varepsilon'}=
   \operatorname{id}_{(\varepsilon,\varepsilon')}$;
2. for each sign $\varepsilon$ the blackboard-framed **cup**
   $\cup_{\varepsilon}\colon\varnothing\to(\varepsilon,-\varepsilon)$ and
   **cap** $\cap_{\varepsilon}\colon(-\varepsilon,\varepsilon)\to\varnothing$,
   single arcs with both endpoints on the top face respectively the bottom
   face, oriented by the sign; these are not invertible;
3. for each sign $\varepsilon$ the **positive full twist**
   $\varphi^{+}_{\varepsilon}\colon(\varepsilon)\to(\varepsilon)$ and the
   **negative full twist** $\varphi^{-}_{\varepsilon}\colon(\varepsilon)\to
   (\varepsilon)$, the blackboard-framed bands carrying one positive
   respectively negative full twist of the band; they are mutually inverse,
   $\varphi^{+}_{\varepsilon}\varphi^{-}_{\varepsilon}=
   \varphi^{-}_{\varepsilon}\varphi^{+}_{\varepsilon}=\operatorname{id}$.

All isotopies are ambient isotopies of the slab fixing the boundary points and
their framings, so isotopic framed colored tangles represent the same morphism
of $\mathcal T$.
