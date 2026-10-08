---
id: lem-cg-affine-generic-gallery-paths-and-disk-moves
kind: lemma
title: "Generic galleries, boundary-fixed disks, and the gallery-move calculus"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps:
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-cg-affine-alcove-separation-and-facet-types
  - lem-cg-affine-point-stabilizers-and-vertex-residues
  - def-hh-coxeter-matrix-word-group-and-length
  - def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice
  - lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - lem-locally-convex-closures-and-finite-compact-convex-hulls
  - def-polygonal-path-and-polygonal-connectedness
  - def-inner-product-space
  - def-inner-product-norm
  - cor-inner-product-induces-a-norm
  - def-norm-and-normed-space
  - def-topological-vector-space-for-local-convexity
  - def-product-topology
  - def-continuous-map-top
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 3 and §7.3, especially Proposition 7.3.4 and Lemma 7.3.5 (printed pp. 130–131/PDF pp. 145–146): Coxeter-complex galleries and the Cayley 2-complex/simple-connectivity comparison. Davis assumes the Coxeter presentation already identifies the group, so this is context only and is not used to prove the affine presentation here."
landmark: false
---

## Statement

Use the affine-wall notation and componentwise fundamental alcove $A$ from [[def-cg-affine-root-hyperplane-reflection-and-alcove]] and [[lem-cg-highest-root-and-fundamental-alcove]]. Let $J$ be the affine facet-type set from [[lem-cg-affine-alcove-separation-and-facet-types]], with one label $0_i$ for each nonempty irreducible component, and let $s_a$ be the reflection in the fundamental facet of type $a\in J$. For distinct $a,b\in J$, put $m_{ab}:=\operatorname{ord}(s_as_b)\in\{2,3,4,6,\infty\}$; put $m_{aa}=1$. Let $W_{\rm abs}$ be the Coxeter group presented by this matrix, as in [[def-hh-coxeter-matrix-word-group-and-length]], with canonical generators $\sigma_a$. The finite-label relations hold for the affine reflections, so the universal property gives $\varphi:W_{\rm abs}\to W_a$, $\sigma_a\mapsto s_a$. If $J=\varnothing$, take $W_{\rm abs}=W_a=\{1\}$.

**(0) Translation lattices.** The root and coroot lattices $Q$ and $Q^\vee$ are discrete full-rank subgroups of $E$; in particular, each bounded subset of $E$ meets either lattice in finitely many points.

**(1) Generic paths and galleries.** For any two alcoves there is a finite polygonal path between interior points whose vertices avoid every wall, whose segments cross walls transversely one at a time, and whose segment directions are not parallel to any codimension-two direction of the arrangement. The successive alcoves form a finite gallery. For a closed polygonal path with these genericity properties, each wall is crossed an even number of times. Here a codimension-two direction is $\ker B(-,\alpha)\cap\ker B(-,\beta)$ for nonproportional roots $\alpha,\beta$.

**(2) Boundary-fixed generic disks.** Call a closed polygonal path **generic** when its vertices avoid all walls, its wall intersections occur in edge interiors one wall at a time and transversely, and no edge direction is parallel to a codimension-two direction. Every such path $p$ has a piecewise-linear disk filling $D\to E$ equal to $p$ on $\partial D$. The wall preimage is a finite graph in $D$: its arcs meet $\partial D$ transversely at the prescribed crossings, it misses all strata of codimension at least three, and its genuine interior vertices map transversely to codimension-two strata. Each such vertex is a rank-two multiway vertex: if the local dihedral label is $m$, exactly $2m$ wall branches meet there. Auxiliary degree-two subdivision points on smooth arcs are allowed. Every component of the complement of this graph maps into one alcove. A constant path at a regular point has the constant filling.

**(3) Gallery moves.** The dual cellulation of a generic filling has a vertex for each alcove region, an edge for each wall arc, and polygonal faces around the interior vertices of the wall preimage. A degree-two point may be inserted on any wall arc; its dual face is a digon. The face words are either $\sigma_a^2$ or alternating rank-two words $(\sigma_a\sigma_b)^m$ (or their reverses). Collapsing the faces of this finite simply connected diagram changes its boundary gallery by finitely many backtracks and replacements of one boundary arc of a rank-two polygon by the complementary arc; in particular, replacing one half by the other is the rank-two braid move. Thus any two generic fillings of the same boundary give the same element of $W_{\rm abs}$.

**(4) Closed-gallery consequence.** If $w\in W_{\rm abs}$ satisfies $\varphi(w)(A)=A$, then $w=1$ in $W_{\rm abs}$.

No axiom of choice is used.

## Facts & Assumptions

**Given:** The finite reduced crystallographic root system $\Phi\subset E$, its affine walls and reflections, and the fundamental alcove and facet types above.

[F1] The simple roots form a real basis; the root and coroot lattices are the integer spans of the simple roots and simple coroots, respectively, and each is a free abelian group of rank $\dim E$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F2] The wall arrangement is locally finite; the affine group permutes its walls and alcoves; every alcove is open and convex; and for each simple root $\alpha_s$, $t_{\alpha_s^\vee}=r_{\alpha_s,1}\circ r_{\alpha_s,0}\in W_a$ ([[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F3] The componentwise fundamental alcove is a finite product of bounded geometric simplices with the listed affine facets ([[lem-cg-highest-root-and-fundamental-alcove]]).

[F4] On the orbit $W_a\cdot A$, shared-panel types agree and the reflection in a type-$a$ facet of $g(A)$ is $g s_a g^{-1}$ ([[lem-cg-affine-alcove-separation-and-facet-types]]).

[F5] Rank-two residues have $2m$ sectors with alternating types $a,b$, where $m\in\{2,3,4,6\}$ ([[lem-cg-affine-point-stabilizers-and-vertex-residues]] (2)–(3)); this supplier is still under owner review, so these local-cycle uses are provisional and flagged in the authoring report.

[F6] A finite-dimensional real vector space is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[F7] The convex hull of finitely many points in a finite-dimensional real topological vector space is compact ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F8] A finite Coxeter matrix defines the group presentation with relators $\sigma_a^2$ and $(\sigma_a\sigma_b)^{m_{ab}}$ for finite labels, and its universal property supplies homomorphisms preserving those relations ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F9] A polygonal path has finitely many affine segments ([[def-polygonal-path-and-polygonal-connectedness]]).

[F10] The inner-product length is a norm and its induced metric gives the norm topology; a topological vector space requires addition and scalar multiplication to be jointly continuous on product topologies ([[def-inner-product-space]], [[def-inner-product-norm]], [[cor-inner-product-induces-a-norm]], [[def-norm-and-normed-space]], [[def-topological-vector-space-for-local-convexity]], [[def-product-topology]], [[def-continuous-map-top]]).

## Proof

**Proof technique:** finite general position followed by the planar dual diagram.

1.1 If $E=0$, both lattices are $\{0\}$. Otherwise, by [F1] choose a basis $\beta_1,\ldots,\beta_r$ of simple roots for $Q$ and a basis of simple coroots for $Q^\vee$. For either basis, its Gram matrix is invertible by positive definiteness, so there is a dual basis $\beta_1^*,\ldots,\beta_r^*$ with $B(\beta_j,\beta_i^*)=\delta_{ij}$. Cauchy–Schwarz follows directly from $0\le B(u-tv,u-tv)$ by taking $t=B(u,v)/B(v,v)$ when $v\ne0$. If a bounded set $K$ has $\|x\|\le R$ for all $x\in K$ and $\lambda=\sum_j n_j\beta_j\in K$ is in the corresponding lattice, then $n_i=B(\lambda,\beta_i^*)$ and $|n_i|\le R\|\beta_i^*\|$. Each integer coordinate therefore has finitely many possibilities, so $K$ meets the lattice in finitely many points. This applies to both bases. Such finite intersection with bounded sets also gives discreteness: in a bounded ball about any lattice point there are finitely many other lattice points, so a smaller ball excludes them all. Thus both lattices are discrete and full rank. [F1, F10, algebra]

1.2 In the induced norm topology, addition is continuous because $\|(x+y)-(x_0+y_0)\|\le\|x-x_0\|+\|y-y_0\|$. Scalar multiplication is jointly continuous at $(\lambda_0,x_0)$: if $|\lambda-\lambda_0|<\delta\le1$ and $\|x-x_0\|<\delta$, then $\|\lambda x-\lambda_0x_0\|\le(|\lambda_0|+1)\delta+\|x_0\|\delta$, which is below any prescribed $\varepsilon>0$ for sufficiently small $\delta>0$. Therefore the norm topology makes $E$ a real topological vector space in the sense of [F10], as required for the compact-hull result [F7]. [F7, F10, algebra]

1.3 If $E=0$, there is one alcove and the constant path works. Otherwise fix interior points $x\in C$ and $y\in C'$ of the two alcoves and choose a bounded open simplex $O\subset E$ for an intermediate point. The hull of $x,y$ and the finitely many vertices of $\overline O$ is compact by [F7] and [F10]. By [F2], only finitely many walls meet this hull, hence only finitely many codimension-two flats $P$ arise as intersections of distinct walls meeting it. For each such $P$, $x,y\notin P$, so $\operatorname{aff}(\{x\}\cup P)$ and $\operatorname{aff}(\{y\}\cup P)$ are proper affine subspaces. The finite set of codimension-two direction subspaces is also proper. Using [F6], choose $z\in O$ outside the finite family consisting of those affine spans, the translates $x+D,y+D$ for each codimension-two direction $D$, and the finitely many walls meeting the hull; affine avoidance follows by translating each proper affine subspace to its direction space and choosing a line in $O$ whose direction avoids their finite union. Then $[x,z]$ and $[z,y]$ avoid every codimension-two flat and are not parallel to any codimension-two direction. Each segment meets only finitely many walls by [F2]; its regular endpoints ensure every wall intersection is transverse, and avoiding the flats ensures no two walls are met at one point. The crossings therefore give a finite gallery. Starting from $A$, induct along this gallery: if the current alcove is $g(A)$, its crossed facet is $g(F_a)$ for some $a\in J$ because $A$ has exactly the listed facets. The panel-reflection rule in [F4] makes reflection in that wall $g s_a g^{-1}$, so the next alcove is $g s_a(A)$ and remains in $W_a\cdot A$. Thus every alcove is in the orbit, with no use of the later presentation theorem. [F2, F4, F6, F7, F10, choose, algebra]

1.4 For a closed generic polygonal path, fix a wall $H$ and a defining affine functional $f$ with $H=f^{-1}(0)$. Along each segment the sign of $f$ changes exactly when the path crosses $H$, and a transverse crossing changes it once. Since the path is closed and its vertices are off $H$, the initial and final signs agree; therefore the number of crossings of $H$ is even. [F9, algebra]

1.5 Let $p$ be a nonconstant generic closed polygonal path with vertices $b_0,\ldots,b_{r-1}$. Choose a bounded open simplex $O$ of possible cone apices and let $K$ be the convex hull of the path vertices and the vertices of $\overline O$; [F7] makes $K$ compact, so only finitely many walls meet $K$ by [F2]. There are finitely many nonempty intersections $P$ of two or more distinct walls in this list. For each codimension-two $P$ and each boundary edge $e=[b_j,b_{j+1}]$, genericity makes the projection of $e$ to $E/\operatorname{dir}(P)$ nonconstant, so $\operatorname{aff}(P\cup e)$ is a proper affine subspace; also $\operatorname{aff}(P\cup\{b_j\})$ is proper because $b_j\notin P$. For every intersection $P$ of codimension at least three, $\operatorname{aff}(P\cup e)$ is proper. Exclude these finitely many affine subspaces, all listed walls, and (when $\dim E\ge2$) the affine spans of the boundary edges from $O$. The finite-union argument in 1.3 and [F6] leaves a point $q\in O$ outside them. The cone from $q$ to $p$ is a finite piecewise-linear disk, fixed on its boundary. Its image lies in $K$. On each cone triangle the pullback of a wall is empty or a straight segment; the listed exclusions make the triangles nondegenerate when $\dim E\ge2$, prevent simultaneous wall crossings on radial edges, make every codimension-two intersection in a triangle a single transverse interior point, and keep the disk away from all codimension-at-least-three intersections. In dimension one there are no codimension-two strata and each wall preimage is a finite union of polygonal arcs; in dimension zero the arrangement is empty. Local finiteness gives finitely many graph pieces. At each interior codimension-two point the local rank-two arrangement has $2m$ sectors and hence $2m$ branches by [F5]. The boundary intersections are the given transverse crossings. Every connected component of the complement maps continuously into the wall complement and therefore into one alcove. This proves the generic-disk assertion. [F2, F5, F6, F7, F9, F10, choose, algebra]

1.6 For any two types $a,b$ from different irreducible components, their facet reflections act on orthogonal factors and are distinct commuting involutions, so $m_{ab}=2$. For two types in one component of rank at least two, their simplex facets meet in a codimension-two face; choose a point in its relative interior. The local rank-two residue in [F5] shows the product has finite order $m_{ab}\in\{2,3,4,6\}$. The only pair of distinct types in a rank-one component is its two opposite endpoint reflections $r_{\alpha,1}$ and $r_{\alpha,0}$; [F2] and the reflection identity give $r_{\alpha,1}r_{\alpha,0}=t_{\alpha^\vee}$. Since $\alpha^\vee\ne0$, its positive powers are nonzero translations, so this product has infinite order. These cases define the Coxeter matrix in the statement. The finite-label relations hold for the corresponding affine reflections, so [F8] gives $\varphi$. If $J=\varnothing$, the root system is empty and all assertions are immediate. [F2, F3, F5, F8, algebra]

2.1 Subdivide the finite wall-preimage graph at its interior vertices and any needed auxiliary points so its dual gives a finite regular polygonal cellulation of the disk. Its vertices are alcove regions, its edges cross wall arcs and carry the common panel type by [F4], and its faces surround interior graph vertices. A degree-two graph vertex gives a digon labelled $\sigma_a^2$. A codimension-two graph vertex gives the alternating $2m$-gon labelled $(\sigma_a\sigma_b)^m$ or its reverse by [F5]; these are defining relators or their inverses by [F8]. To see directly that the boundary word is trivial, augment the face-adjacency graph by an exterior vertex joined across each boundary edge. This graph is connected: choose interior points $u,v$ of any two faces away from all edge lines, then choose an intermediate point $z$ in the disk so the two segments $[u,z]$ and $[z,v]$ avoid the finite set of cell vertices and are not parallel to any edge. Such a $z$ exists by applying [F6] to the finitely many forbidden line directions and varying along a short line inside the disk while excluding the finitely many intersections with the corresponding affine lines. The resulting polygonal arc crosses edges finitely and transversely, giving a face-adjacency path. Choose a spanning tree rooted at the exterior vertex and process bounded faces in increasing distance from the root. Each face then has a parent edge on the boundary of the remaining diagram, incident to no other remaining 2-cell. Collapse it across this free edge, replacing the boundary occurrence of that edge by the complementary boundary path of the face. The face label is a Coxeter relator, so the replacement preserves the represented group element. After all faces are removed, the remaining connected simply connected graph is a tree, and its boundary walk reduces by inverse-edge backtracks, each labelled by $\sigma_a^2$. Thus every filling reduces its boundary gallery to the empty word, and any two fillings of the same boundary give the same element. These collapses are exactly backtrack removals for digons and rank-two polygon moves for $2m$-gons; replacing complementary alternating halves gives the braid relation. [F4, F5, F6, F8, step 1.5, algebra]

3.1 Let $w=\sigma_{a_1}\cdots\sigma_{a_n}$ with $\varphi(w)(A)=A$. The alcoves $C_j:=\varphi(\sigma_{a_1}\cdots\sigma_{a_j})(A)$, with $C_0=A$, form a closed gallery, because each consecutive pair is adjacent across a facet of type $a_j$. For each panel crossing choose a small ball meeting only its panel wall and choose one endpoint in each of its two open half-balls; the joining segment crosses that wall once and no other. Choose its endpoints so its direction avoids the finite family of codimension-two direction subspaces: for a fixed endpoint, the bad choices lie in finitely many proper affine subspaces of the opposite open half-ball, so [F6] applies. In each intermediate alcove, connect the outgoing and incoming crossing endpoints by a segment inside that open convex alcove; if its direction is in a codimension-two direction subspace, subdivide it at a point outside the finitely many translates of those subspaces. The resulting closed polygonal path has regular vertices, crosses exactly the gallery panels and meets them transversely, and is generic as in (2). Its crossing word is $w$ up to a cyclic starting point. Apply steps 1.5–2.1: its boundary word is trivial in $W_{\rm abs}$. A cyclic conjugate of $w$ is therefore $1$, and conjugating back gives $w=1$. If the word is empty or $E=0$, the conclusion is immediate. No axiom of choice is used: all lists of roots, walls, flats, vertices, and moves are finite. [F2, F4, F6, F8, F9, step 1.3, step 1.5, step 2.1, algebra] ∎
