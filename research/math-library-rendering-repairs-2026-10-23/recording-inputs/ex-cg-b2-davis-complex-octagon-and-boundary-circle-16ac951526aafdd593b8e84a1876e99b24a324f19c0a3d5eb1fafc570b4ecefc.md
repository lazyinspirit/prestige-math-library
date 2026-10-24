---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-cg-b2-davis-complex-octagon-and-boundary-circle.json
  precheck: pass
id: "ex-cg-b2-davis-complex-octagon-and-boundary-circle"
kind: "example"
title: "The B2 Davis complex is an octagon whose boundary is the Coxeter complex circle"
status: published
origin: "pipeline"
dependency_level: 20
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization", "lem-cg-spherical-coset-inclusion-and-intersection", "lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics", "thm-cg-davis-complex-cell-incidence-and-stabilizers", "lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta", "thm-cg-finite-chamber-tiling-and-coset-face-identification", "def-hh-coxeter-matrix-word-group-and-length", "thm-lagrange"]
justified_by: []
provenance: {"statement": "ai-generated", "proof": "ai-altered"}
proof_strategy: direct
generation: {"role": "example"}
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§3.1, Lemma 3.1.5 and Example 3.1.6, printed pp. 27-28 (the two-generator finite dihedral presentation); §7.3, Example 7.3.2(ii) and the remark after Lemma 7.3.3, printed pp. 129-130 (the orbit polygon and independence of generic point)"
  scraped: []
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=4$, and use the Coxeter cells $C_T$ with positive distances $d_s,d_t$.

**(i)** $W$ is dihedral of order $8$, all four subsets of $S$ are spherical, and there are eight vertices, four edges of each label, and one $2$-cell: $17$ cells in all.

**(ii)** For $d_s=d_t$, $C_S$ is a regular octagon and $\Sigma$ is its barycentric subdivision, a closed disk. Its proper cells form an eight-edge boundary circle, identified with the rank-two Coxeter complex.

**(iii)** $K$ consists of the two triangles $\emptyset<\{s\}<S$ and $\emptyset<\{t\}<S$ along their common diagonal, hence is a square. The compact quotient $W\backslash\Sigma$ is homeomorphic to $K$. The octagon subdivision has $16$ triangles, eight translates of the two chamber triangles.

**(iv)** If $d_s\ne d_t$, the cell is an octagon with alternating edge lengths $2d_s,2d_t$, so it is not regular. Its cell counts and disk topology are unchanged.

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $m(s,t)=4$, its presented group $W$, positive distances $d_s$, and the Davis cellulation.

[F1] Spherical types are precisely those with finite parabolic groups; cells are indexed by spherical cosets ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]], [[lem-cg-spherical-coset-inclusion-and-intersection]] (1)).

[F2] The cells $C_T$ have dimension $|T|$, and the face map $v\mapsto\rho(w)(v+z_{T,U})$ is an isometry from $C_U$ onto the face indexed by $wW_U$ ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1),(3)).

[F3] The Davis realization has one cell for each spherical coset, subdivides each such cell by its coset subposet, and has compact chamber quotient $K$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1),(2),(4)).

[F4] The cells are closed balls; for rank two with equal distances, the orbit cell is regular with $2m(s,t)$ sides, and each rank-one cell is the interval from $-d_se_s$ to $d_se_s$ ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (1),(4)).

[F5] In finite type the proper parabolic cosets index the spherical Coxeter complex with incidence reversed ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (3),(4)).

[F6] For $S=\{s,t\}$ with $m(s,t)=4$, the Coxeter presentation has relators $s^2=t^2=(st)^4=1$, and every map of $s,t$ into a group satisfying these relators extends uniquely to a homomorphism from $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F7] If $G$ is finite and $H\le G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

## Verification

**Proof technique:** explicit normal forms and cell incidence.

1.1 By [F6], $W=\langle s,t\mid s^2=t^2=(st)^4=1\rangle$. Put $r=st$; then $r^4=1$, $srs=r^{-1}$, and $t=sr$, so $sr=r^{-1}s$. Moving every $s$ to the right and reducing powers of $r$ shows that every element is one of $r^k$ or $r^ks$ for $k=0,1,2,3$, hence $|W|\le8$. To separate these eight forms, let $s(x,y)=(x,-y)$ and $t(x,y)=(y,x)$ on $\mathbb R^2$; both are reflections, $st$ is a quarter-turn, and the eight maps $(st)^k$ and $(st)^ks$ are distinct. By [F6] these assignments define a homomorphism from $W$ onto the eight-element symmetry group of the square, so $|W|=8$ and the forms are distinct. The images also show $s,t\ne1$, hence $W_{\{s\}}=\{1,s\}$ and $W_{\{t\}}=\{1,t\}$; all four subsets are spherical by [F1]. By [F7], each singleton parabolic has four left cosets in $W$. There are eight singleton cosets and one top coset $W_S=W$, so [F1]–[F3] give $8+4+4+1=17$ cells. [F1, F2, F3, F6, F7, algebra]

2.1 By [F2] and [step 1.1], the top cell is a two-dimensional convex polytope with eight vertices and eight edges, so it is an octagon; [F4] makes it regular when $d_s=d_t$. At each vertex $\{w\}$, the incident rank-one cosets are exactly $wW_{\{s\}}$ and $wW_{\{t\}}$: both contain $w$, and any coset of either type containing $w$ equals the corresponding one by [F1]. Thus the edge labels alternate. All cosets lie below $W_S=W$, so [F3] identifies $\Sigma$ with its barycentric subdivision, and [F4] gives a closed disk. The boundary consists of its eight vertices and eight edges. These proper cosets label the rank-two Coxeter complex by [F5]; both graphs are cycles with alternating singleton types, and exchanging their vertex and edge labels gives the dual circle identification. [step 1.1, F1, F2, F3, F4, F5]

2.2 The spherical-subset poset has exactly two maximal chains $\emptyset<\{s\}<S$ and $\emptyset<\{t\}<S$; their triangles meet in the diagonal $\emptyset<S$, producing $K$. By [F3] it is the compact quotient. Every maximal coset chain chooses one of eight vertices and one of its two incident edges before the top cell, giving $16$ triangles. Each vertex $w$ gives the two chains $\{w\}<wW_{\{s\}}<W$ and $\{w\}<wW_{\{t\}}<W$, precisely the translate $wK$. [step 1.1, F1, F3, algebra]

3.1 Each edge of label $s$ or $t$ is isometric to its rank-one cell by [F2], and has length $2d_s$ or $2d_t$ by [F4]. Labels alternate around the octagon, so unequal distances give unequal side lengths and exclude regularity. For every positive distance family [F2] gives the same coset faces and [F4] gives the disk topology. All calculations and constructions are finite, so no Choice is used. [step 2.1, F2, F4, algebra] ∎

## Remarks

The left panel shows the equal-distance case. Boundary edges carry their generator labels; the eight outer vertices are labelled by $w$ for the coset $\{w\}$. Each edge midpoint represents its rank-one coset and the centre represents $W$. Joining these barycentres gives the $16$ maximal coset chains of step 2.2. The shaded pair is $K$ at the vertex $1$; the right panel redraws this pair as a square, recording its simplicial incidence rather than its metric shape. The quotient sends every coset $wW_T$ to its type $T$.

```tikz
\begin{tikzpicture}[scale=1.05]
\coordinate (O) at (0,0);
\coordinate (v0) at (0:2);
\coordinate (v1) at (45:2);
\coordinate (v2) at (90:2);
\coordinate (v3) at (135:2);
\coordinate (v4) at (180:2);
\coordinate (v5) at (225:2);
\coordinate (v6) at (270:2);
\coordinate (v7) at (315:2);
\coordinate (m0) at (22.5:1.84776);
\coordinate (m1) at (67.5:1.84776);
\coordinate (m2) at (112.5:1.84776);
\coordinate (m3) at (157.5:1.84776);
\coordinate (m4) at (202.5:1.84776);
\coordinate (m5) at (247.5:1.84776);
\coordinate (m6) at (292.5:1.84776);
\coordinate (m7) at (337.5:1.84776);
\fill[blue!12] (O)--(m0)--(v0)--(m7)--(O);
\draw[gray!65] (O)--(v0) (O)--(v1) (O)--(v2) (O)--(v3) (O)--(v4) (O)--(v5) (O)--(v6) (O)--(v7);
\draw[gray!65] (O)--(m0) (O)--(m1) (O)--(m2) (O)--(m3) (O)--(m4) (O)--(m5) (O)--(m6) (O)--(m7);
\draw[blue,thick] (v0)--node[above right] {$s$}(v1) (v2)--node[above left] {$s$}(v3) (v4)--node[below left] {$s$}(v5) (v6)--node[below right] {$s$}(v7);
\draw[red!70!black,thick] (v1)--node[above right] {$t$}(v2) (v3)--node[above left] {$t$}(v4) (v5)--node[below left] {$t$}(v6) (v7)--node[below right] {$t$}(v0);
\foreach \i in {0,...,7} {\fill (v\i) circle (1.2pt); \fill (m\i) circle (1pt);}
\fill (O) circle (1.2pt);
\node[fill=white,inner sep=1pt] at (-0.25,0) {$W$};
\node at (0:2.35) {$1$};
\node at (45:2.35) {$s$};
\node at (90:2.35) {$st$};
\node at (135:2.35) {$sts$};
\node at (180:2.45) {$stst$};
\node at (225:2.35) {$tst$};
\node at (270:2.35) {$ts$};
\node at (315:2.35) {$t$};
\node at (0,-2.85) {$\Sigma:\ d_s=d_t$};
\draw[->] (2.8,0)--node[above] {$wW_T\mapsto T$}(4.6,0);
\coordinate (a) at (5,-1);
\coordinate (b) at (7,-1);
\coordinate (c) at (7,1);
\coordinate (d) at (5,1);
\fill[blue!12] (a)--(b)--(c)--(d)--(a);
\draw[thick] (a)--(b)--(c)--(d)--(a);
\draw (a)--(c);
\fill (a) circle (1.2pt); \fill (b) circle (1.2pt);
\fill (c) circle (1.2pt); \fill (d) circle (1.2pt);
\node[below left] at (a) {$\emptyset$};
\node[below right] at (b) {$\{s\}$};
\node[above right] at (c) {$S$};
\node[above left] at (d) {$\{t\}$};
\node at (6,-2) {$W\backslash\Sigma\cong K$};
\end{tikzpicture}
```

The thick boundary is the eight-edge circle. For unequal positive distances the same incidence diagram applies, with alternating boundary lengths $2d_s$ and $2d_t$; the regular shape drawn here is specific to $d_s=d_t$. The verification above is independent of this illustration.
