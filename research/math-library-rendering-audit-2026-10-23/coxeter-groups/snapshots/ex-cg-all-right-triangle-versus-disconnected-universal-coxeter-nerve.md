---
id: ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve
kind: example
title: "The all-right triangle must be filled; the disconnected universal-Coxeter nerve is CAT(1) vacuously"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps:
  - def-cg-coxeter-nerve-and-moussong-metric
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - def-cg-cat-zero-cat-one-and-local-geodesic
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - def-metric-space
  - thm-cg-finite-type-positive-definite-criterion
  - lem-cg-comparison-convexity-and-model-spaces
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - def-hh-coxeter-matrix-word-group-and-length
  - def-free-product-of-a-family-of-groups
  - def-definiteness-inertia-and-signature-data-over-the-reals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.3.2 and 2.4 (all-right simplices, the identity cosine matrix), 2.7-2.8 (flag complexes and Gromov's Lemma for all-right complexes), 2.9-2.10 (metric flag complexes and Moussong's Lemma)"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 2 (almost-negative cosine matrices and nerve cells). The all-right and universal-Coxeter examples and group identifications are computed locally here."
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 7.3 and Chapter 12 (right-angled Coxeter systems and their nerve; the free product of $\\mathbb Z/2$'s)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

**(i) The all-right triangle is filled.** Let $(W',S')$ be the Coxeter system with $S'=\{s,t,u\}$ and $m_{xy}=2$ for all distinct $x,y\in S'$, so that $W'\cong(\mathbb Z/2)^3$ is finite, and let $L'$ be its nerve ([[def-cg-coxeter-nerve-and-moussong-metric]]). Every pair is spherical with $C_{\{s,t\}}=\mathrm{id}_2$ positive definite, so all three edges of $L'$ exist with length $\pi-\pi/2=\frac{\pi}{2}$; and $S'$ itself is spherical with $C_{S'}=\mathrm{id}_3$ positive definite ([[thm-cg-finite-type-positive-definite-criterion]]). Thus $L'$ is the filled all-right spherical triangle $\Sigma(\mathrm{id}_3)$, a single $2$-simplex ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](i)-(ii)), whose three interior angles are $\pi/2$ by the spherical cosine rule. Its boundary 3-cycle has perimeter $3\cdot\frac{\pi}{2}<2\pi$, but it is not an isometrically embedded circle: the loop is not locally geodesic at the corners, since the segment of the convex triangle between two nearby boundary points across a corner is strictly shorter than the boundary arc through the corner ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](ii)).

**(ii) The disconnected universal-Coxeter nerve is CAT(1) vacuously.** Let $(W'',S'')$ be the Coxeter system with $S''=\{s_1,s_2,s_3\}$ and $m_{s_is_j}=\infty$ for all $i\ne j$, so that $W''$ is the free product of three copies of $\mathbb Z/2$ ([[def-hh-coxeter-matrix-word-group-and-length]]); let $L''$ be its nerve. No two-element subset is spherical — the infinite dihedral group is infinite — so $L''$ has no edges and no simplices beyond its three vertices; with the truncated angular metric ([[def-cg-euclidean-cone-and-spherical-join-metrics]](2)) distinct vertices are at distance $\pi$. Hence $L''$ has no pair of distinct points at distance $<\pi$, and every triangle of perimeter $<2\pi$ is constant — any triangle with two distinct vertices has a side of length $\pi$ and perimeter $\ge2\pi$ — so it is vacuously $D_\pi$-geodesic and CAT(1); equivalently, its components are three one-point CAT(1) spaces at mutual truncated distance $\pi$.

**(iii) Comparison and girth.** Neither $L'$ nor $L''$ contains an isometrically embedded circle: this is proved directly for $L'$ in step 2.3, and $L''$ is discrete. Thus both have girth $+\infty$, in particular at least $2\pi$. They contrast a filled boundary cycle with a nerve having no edges: for $L'$ the all-right cosine matrix $\mathrm{id}_3$ is positive definite, so the metric flag condition forces the simplex and the would-be boundary cycle of perimeter $\frac{3\pi}{2}$ is filled; for $L''$ the three vertices are pairwise non-adjacent, the cosine entries of a non-edge are $-1$ and no set of two or more vertices triggers the metric flag test (indeed every matrix with an off-diagonal $-1$ is not positive definite). The all-right edges lie at the boundary value $\pi/2$ of the large hypothesis, where the metric flag test reduces to Gromov's flag test; the value $\pi$ assigned to a non-edge pair of the universal-Coxeter nerve is not an edge length of any large complex.

## Facts & Assumptions

**Given:** The Coxeter systems $(W',S')$ with $S'=\{s,t,u\}$ and $m_{xy}=2$ for all distinct $x,y$, and $(W'',S'')$ with $S''=\{s_1,s_2,s_3\}$ and $m_{s_is_j}=\infty$ for $i\ne j$; their Coxeter nerves $L'=L(W',S')$ and $L''=L(W'',S'')$ with the Moussong metric ([[def-cg-coxeter-nerve-and-moussong-metric]]).

[F1] The simplices of the nerve $L(W,S)$ are the spherical subsets $T$, carrying the spherical simplices $\Sigma(C_T)$ for $C_T=(B(e_s,e_t))_{s,t\in T}$; a two-element subset spans an edge exactly when $m_{st}<\infty$, of length $\pi-\pi/m_{st}$; face links are the iterated Schur complements; and the complex carries the chain metric $d$ and its truncation $d_\pi=\min\{\pi,d\}$, whose value between distinct components is $\pi$. ([[def-cg-coxeter-nerve-and-moussong-metric]], [[def-cg-euclidean-cone-and-spherical-join-metrics]], [[def-metric-space]])

[F2] A finite spherical complex is large when every simplex off-diagonal is at most $0$, and metric flag when for every pairwise adjacent vertex set $T$: $T$ spans a simplex exactly when $C_T$ is positive definite; the associated almost-negative matrix assigns the value $-1$ to a non-edge pair. ([[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F3] A subset $T$ of $S$ is spherical exactly when $W_T$ is finite, exactly when $C_T$ is positive definite. ([[thm-cg-finite-type-positive-definite-criterion]])

[F5] CAT(1) means that pairs at distance $<\pi$ are joined by a geodesic segment and that geodesic triangles of perimeter $<2\pi$ satisfy the spherical comparison; an isometrically embedded circle of length $\ell$ is a subspace isometric to $\mathbb R/\ell\mathbb Z$ with its circle metric. ([[def-cg-cat-zero-cat-one-and-local-geodesic]])

[F6] A positive-definite matrix has all principal submatrices positive definite, and a nonzero kernel vector prevents positive definiteness. ([[def-definiteness-inertia-and-signature-data-over-the-reals]], [[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]])

[F7] For a positive-definite $C$ the realisation $\Sigma(C)$ is a convex subset of the round sphere: the ambient round distance between two of its points is realized by a great-circle arc lying in it, and its geodesics are the restrictions of the minimal great-circle arcs; its triangles obey the spherical cosine rule $\cos c=\cos a\cos b+\sin a\sin b\cos\gamma$; and for $x,y\in\Sigma(\mathrm{id}_3)$ one has $\langle x,y\rangle\ge0$, so $\operatorname{diam}\Sigma(\mathrm{id}_3)\le\pi/2$. ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]], [[lem-cg-comparison-convexity-and-model-spaces]])

[F8] The Coxeter presentation has the involution relation $s_i^2=1$ and no relator between distinct generators when $m_{s_is_j}=\infty$. Mapping $s_i$ to the reflection $r_i(n)=2i-n$ of $\mathbb Z$ for $i=1,2,3$ respects the presentation; for $i\ne j$, $r_ir_j$ is translation by the nonzero integer $2(i-j)$ and has infinite order. Thus each two-generator parabolic is infinite. ([[def-hh-coxeter-matrix-word-group-and-length]])



[F9] A free product is characterized by its universal property for homomorphisms from the factors ([[def-free-product-of-a-family-of-groups]]); the universal property of the Coxeter presentation is that of [[def-hh-coxeter-matrix-word-group-and-length]].

## Verification

1.1 Clause (i), the filling. The Coxeter presentation has $s^2=t^2=u^2=1$, and for each distinct pair the relation $(st)^2=1$ gives $st=ts$; thus every word reduces to $s^at^bu^c$ with $a,b,c\in\{0,1\}$. The map sending $s,t,u$ to the three standard generators of $(\mathbb Z/2)^3$ is surjective, so the group has at least eight elements; the word reduction shows it has at most eight, hence $W'\cong(\mathbb Z/2)^3$. For the all-right system $B(e_x,e_y)=-\cos(\pi/2)=0$ for $x\ne y$, so $C_T$ is the identity matrix of size $|T|$ for every $T\subseteq S'$, in particular positive definite [F6]; by [F3] every subset is spherical, so the nerve $L'$ has all three edges of length $\pi-\pi/2=\pi/2$ [F1] and the cell $\Sigma(\mathrm{id}_3)$ on $S'$ [F1], and no further cells exist; hence $L'$ is exactly the filled all-right triangle $\Sigma(\mathrm{id}_3)$. [F1, F3, F6, algebra]

1.2 Clause (ii), free product and no edges. Giving a homomorphism from $W''$ to a group $H$ is exactly giving three involutions in $H$, by the universal property of its Coxeter presentation; these are precisely three homomorphisms $\mathbb Z/2\to H$. Thus $W''$ has the free-product universal property of three copies of $\mathbb Z/2$ ([[def-free-product-of-a-family-of-groups]], [[def-hh-coxeter-matrix-word-group-and-length]]). For each two-element subset $\{s_i,s_j\}\subseteq S''$, [F8] shows that its subgroup contains an element of infinite order, so it is not finite; by [F3] the pair is not spherical and spans no edge of $L''$ [F1]. Since a cell with two vertices is exactly an edge, the spherical subsets of $S''$ are $\emptyset$ and the three singletons, and $L''$ has no simplex of positive dimension. [F1, F3, F8, F9]

2.1 Clause (i), the angles. In $\Sigma(\mathrm{id}_3)$ all three sides equal $\pi/2$, and the spherical cosine rule with side $c$ opposite the angle $\gamma$ between the two sides of length $\pi/2$ gives $\cos(\pi/2)=\cos(\pi/2)\cos(\pi/2)+\sin(\pi/2)\sin(\pi/2)\cos\gamma$, that is $0=\cos\gamma$ and $\gamma=\pi/2$ [F7]; the same computation at the other two corners gives three interior angles $\pi/2$. [F7, step 1.1, algebra]

2.2 Clause (ii), the metric. The truncation sends the value $+\infty$ between distinct components to $\pi$ [F1], and the components of $L''$ are its three vertices, so distinct vertices of $L''$ are at truncated distance $\pi$; therefore $L''$ has no pair of distinct points at distance $<\pi$, and a triangle with two distinct vertices has a side of length $\pi$ and perimeter at least $2\pi$, while a triangle with a single vertex has perimeter $0$ and satisfies the comparison trivially. Thus all CAT(1) tests of $L''$ are vacuous and $L''$ is CAT(1); its components are three one-point CAT(1) spaces at mutual truncated distance $\pi$. [F1, F5, step 1.2, algebra]

2.3 Clause (iii), the filled triangle has no circle. Since $C_{S'}=\mathrm{id}_3$, its Cholesky realization has the standard basis as vertices, so $\Sigma(\mathrm{id}_3)=\{x\in S^2:x_1,x_2,x_3\ge0\}$ [F7]. For any $x,y$ in this octant, $x\cdot y\ge0$, so their round distance $\delta\le\pi/2$. If $0<\delta<\pi$, the shorter great-circle segment has points $\bigl(\sin((1-t)\delta)x+\sin(t\delta)y\bigr)/\sin\delta$ for $0\le t\le1$; its coefficients are nonnegative, so it stays in the octant. Thus $\Sigma(\mathrm{id}_3)$ is geodesically convex and its chain metric is the round metric, with diameter at most $\pi/2$. If an isometric circle $S^1_\ell$ embedded in $L'$, its diameter $\ell/2$ would be at most $\pi/2$, so $\ell\le\pi<2\pi$. The two semicircles between opposite points of $S^1_\ell$ would give distinct geodesic segments of length $\ell/2<\pi$ in $L'$, contradicting uniqueness of the shorter great-circle arc in the round sphere [F7]. Hence $L'$ contains no isometrically embedded circle. [F5, F7, step 1.1, algebra]

3.1 Clause (i), the boundary loop. Let $\Gamma$ be the boundary $3$-cycle, of length $3\cdot\pi/2<2\pi$. Fix a corner and let $x_t,y_t$ be the points at distance $t\in(0,\pi/4)$ from it on the two incident edges: their inner product is $\cos^{2}t+\sin^{2}t\cos(\pi/2)=\cos^{2}t$, so their distance is $d(t)=\arccos(\cos^{2}t)<2t$ because $\cos$ is strictly decreasing on $[0,\pi]$ and $\cos^{2}t>\cos2t$ for $t\in(0,\pi/2)$ [F7]; replacing the two boundary subarcs of total length $2t$ by the geodesic segment of length $d(t)$ inside the convex triangle is a strict shortening of $\Gamma$ near the corner, so $\Gamma$ is not locally geodesic and hence not an isometrically embedded circle, whose sufficiently short arcs would be minimizing [F5]. [F5, F7, step 2.1, algebra]

4.1 Clause (iii), the discrete nerve and the comparison. Since $L''$ is discrete [step 2.2], every continuous map from the connected space $\mathbb R/\ell\mathbb Z$ into $L''$ is constant, so $L''$ contains no isometrically embedded circle. Together with step 2.3 this proves both girth values are $+\infty$, hence at least $2\pi$. For the comparison: the value $0$ of the all-right cosine matrix lies at the boundary of the large hypothesis and makes the metric flag test the ordinary flag test, which fills the triangle of 1.1; the value $-1$ of a non-edge pair of $L''$ would make the $2\times2$ principal block $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ have the nonzero kernel vector $(1,1)$, hence not positive definite [F6], so it is never the cosine of an edge and no set of two or more vertices triggers the metric flag test. [F1, F2, F5, F6, step 1.1, step 2.2, step 2.3] ∎
