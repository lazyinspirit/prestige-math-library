---
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
verification:
  precheck: pass
  audited: 2026-10-08
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
