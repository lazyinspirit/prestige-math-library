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
  - def-dimension
  - thm-locally-compact-normed-space-iff-finite-dimensional
  - def-locally-compact-metric-space
  - lem-compact-closed-balls-in-a-locally-compact-metric-space
  - thm-compactness-agrees-with-metric-compactness
  - def-compact-space
  - def-locally-convex-topological-vector-space
  - def-geometric-simplex-spanned-by-affinely-independent-vertices
  - def-metric-bounded-diameter
  - def-metric-ball
  - thm-cauchy-schwarz-in-an-inner-product-space
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

**(3) Gallery moves.** For any generic filling as in (2), refining a finite PL triangulation along its wall preimage gives a disk subdivision. Its dual diagram has a vertex for each refined alcove region and an edge across each interior side. If the incident regions map to distinct alcoves, that side lies on a type-$a$ wall and its dual edge is labelled $\sigma_a$; otherwise the edge is labelled $1$. Thus auxiliary sides inside an alcove region, and any wall touches with the same image alcove on both sides, carry the identity. Original alcove regions need not be disks: closed wall-preimage loops and annular regions are allowed. After omitting identity letters, the face words are empty, $\sigma_a^2$, or alternating rank-two words $(\sigma_a\sigma_b)^m$ (or their reverses). Collapsing the faces of this finite simply connected diagram changes its boundary gallery by finitely many backtracks and replacements of one boundary arc of a rank-two polygon by the complementary arc; in particular, replacing one half by the other is the rank-two braid move. Thus any two generic fillings of the same boundary give the same element of $W_{\rm abs}$.

**(4) Closed-gallery consequence.** If $w\in W_{\rm abs}$ satisfies $\varphi(w)(A)=A$, then $w=1$ in $W_{\rm abs}$.

No axiom of choice is used.

## Facts & Assumptions

**Given:** The finite reduced crystallographic root system $\Phi\subset E$, its affine walls and reflections, and the fundamental alcove and facet types above.

[F1] The simple roots form a real basis; the root and coroot lattices are their respective integer spans. The simple-coroot basis and its integral generation of all coroots are proved in the Remark of [[lem-cg-affine-reflection-identities-and-local-finiteness]], so each lattice is free abelian of rank $\dim E$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[F2] The affine walls are the level hyperplanes defined in [[def-cg-affine-root-hyperplane-reflection-and-alcove]]; the arrangement is locally finite; the affine group permutes its walls and alcoves; every alcove is open and convex; and for each simple root $\alpha_s$, $t_{\alpha_s^\vee}=r_{\alpha_s,1}\circ r_{\alpha_s,0}\in W_a$ ([[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F3] Under the orthogonal sum of the component spaces, the fundamental alcove is a product of bounded geometric simplices with the listed affine facets ([[lem-cg-highest-root-and-fundamental-alcove]]).

[F4] On the orbit $W_a\cdot A$, shared-panel types agree and the reflection in a type-$a$ facet of $g(A)$ is $g s_a g^{-1}$ ([[lem-cg-affine-alcove-separation-and-facet-types]]).

[F5] Rank-two residues have $2m$ sectors with alternating types $a,b$, where $m\in\{2,3,4,6\}$ ([[lem-cg-affine-point-stabilizers-and-vertex-residues]] (2)–(3)).

[F6] A finite-dimensional real vector space is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[F7] In a real topological vector space, the convex hull of a finite family of nonempty compact convex sets is compact ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F8] A finite Coxeter matrix defines the group presentation with relators $\sigma_a^2$ and $(\sigma_a\sigma_b)^{m_{ab}}$ for finite labels, and its universal property supplies homomorphisms preserving those relations ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F9] A polygonal path has finitely many affine segments ([[def-polygonal-path-and-polygonal-connectedness]]).

[F10] The inner-product length is a norm, satisfies Cauchy–Schwarz, and its induced metric gives the norm topology; a topological vector space requires addition and scalar multiplication to be jointly continuous on product topologies ([[def-inner-product-space]], [[def-inner-product-norm]], [[cor-inner-product-induces-a-norm]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-norm-and-normed-space]], [[def-topological-vector-space-for-local-convexity]], [[def-product-topology]], [[def-continuous-map-top]]).



[F11] The finite-dimensional real normed space $E$ is locally compact in its norm metric ([[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[def-dimension]], [[cor-inner-product-induces-a-norm]], [[def-norm-and-normed-space]], [[thm-locally-compact-normed-space-iff-finite-dimensional]]).

[F12] Every point of a locally compact metric space has arbitrarily small compact closed balls ([[def-locally-compact-metric-space]], [[lem-compact-closed-balls-in-a-locally-compact-metric-space]]).

[F13] Metric-compact subsets of $E$ are compact in its norm-topological-vector-space topology ([[thm-compactness-agrees-with-metric-compactness]]).

[F14] Every singleton is compact by the open-cover definition, and every singleton is convex ([[def-compact-space]], [[def-locally-convex-topological-vector-space]]).

[F15] The convex hull is the set of finite convex combinations; it contains its generators and is convex ([[def-locally-convex-topological-vector-space]]).

[F16] In a geometric simplex of dimension at least two, any two distinct facets meet in the codimension-two simplex spanned by their common vertices; this follows from the affinely independent vertex description ([[def-geometric-simplex-spanned-by-affinely-independent-vertices]]).

[F17] A bounded subset of a metric space is contained in a ball ([[def-metric-bounded-diameter]], [[def-metric-ball]]).

## Proof

**Proof technique:** finite general position followed by the planar dual diagram.

1.1 If $E=0$, both lattices are $\{0\}$. Otherwise, by [F1] choose a basis $\beta_1,\ldots,\beta_r$ of simple roots for $Q$ and a basis of simple coroots for $Q^\vee$. For either basis, its Gram matrix is invertible by positive definiteness, so there is a dual basis $\beta_1^*,\ldots,\beta_r^*$ with $B(\beta_j,\beta_i^*)=\delta_{ij}$. Cauchy–Schwarz follows directly from $0\le B(u-tv,u-tv)$ by taking $t=B(u,v)/B(v,v)$ when $v\ne0$. If $K$ is bounded, [F17] gives a center $x_0$ and $r>0$ with $\|x-x_0\|<r$ for all $x\in K$; by the triangle inequality [F10], $R:=r+\|x_0\|+1$ bounds $\|x\|$ for every $x\in K$. If $\lambda=\sum_j n_j\beta_j\in K$ is in the corresponding lattice, then $n_i=B(\lambda,\beta_i^*)$ and $|n_i|\le R\|\beta_i^*\|$. Each integer coordinate therefore has finitely many possibilities, so $K$ meets the lattice in finitely many points. This applies to both bases. Such finite intersection with bounded sets also gives discreteness: in a bounded ball about any lattice point there are finitely many other lattice points, so a smaller ball excludes them all. Thus both lattices are discrete and full rank. [F1, F10, F17, algebra]

1.2 In the induced norm topology, addition is continuous because $\|(x+y)-(x_0+y_0)\|\le\|x-x_0\|+\|y-y_0\|$. Scalar multiplication is jointly continuous at $(\lambda_0,x_0)$: if $|\lambda-\lambda_0|<\delta\le1$ and $\|x-x_0\|<\delta$, then $\|\lambda x-\lambda_0x_0\|\le(|\lambda_0|+1)\delta+\|x_0\|\delta$, which is below any prescribed $\varepsilon>0$ for sufficiently small $\delta>0$. Therefore the norm topology makes $E$ a real topological vector space in the sense of [F10], as required for the compact-hull result [F7]. [F7, F10, algebra]

1.3 If $E=0$, the unique alcove is the whole space, so the empty gallery works. Otherwise fix interior points $x\in C$ and $y\in C'$. By [F11] and [F12], choose a compact closed ball $K_0$ of positive radius and let $O$ be its nonempty open interior. The singleton sets $\{x\}$ and $\{y\}$ and $K_0$ are compact convex sets by [F13] and [F14]; hence
$$K:=\operatorname{co}(\{x\}\cup\{y\}\cup K_0)$$
is compact by [F7] and convex by [F15]. It contains $x,y,O$ and every segment from either endpoint to a point of $O$. By [F2], only finitely many walls meet $K$, hence only finitely many codimension-two flats $P$ arise as intersections of distinct walls meeting it. For each such $P$, $x,y\notin P$, so $\operatorname{aff}(\{x\}\cup P)$ and $\operatorname{aff}(\{y\}\cup P)$ are proper affine subspaces. Also exclude $x+D$ and $y+D$ for each codimension-two direction subspace $D$, the singleton sets $\{x\}$ and $\{y\}$, and the finitely many walls meeting $K$; all these affine sets are proper. Choose a direction $d$ outside the finite union of their direction subspaces by [F6]. Starting at a point $z_0\in O$, vary $z=z_0+td$ over a sufficiently small open interval of real $t$ so that $z$ remains in $O$. Each excluded affine set meets this line in at most one point, so choose $t$ outside the resulting finite set. Then $z$ is regular, neither segment $[x,z]$ or $[z,y]$ meets a codimension-two flat, and neither direction is parallel to a codimension-two direction. Each segment meets only finitely many walls by [F2]; its regular endpoints ensure every crossing is transverse, and avoiding the flats ensures no two walls are met at one point. The crossings therefore give a finite gallery. Starting from $A$, induct along this gallery: if the current alcove is $g(A)$, its crossed facet is $g(F_a)$ for some $a\in J$ because $A$ has exactly the listed facets. The panel-reflection rule in [F4] makes reflection in that wall $g s_a g^{-1}$, so the next alcove is $g s_a(A)$ and remains in $W_a\cdot A$. Thus every alcove is in the orbit, with no use of the later presentation theorem. [F2, F4, F6, F7, F10, F11, F12, F13, F14, F15, choose, algebra]

1.4 For a closed generic polygonal path, fix a wall $H$ and a defining affine functional $f$ with $H=f^{-1}(0)$. Along each segment the sign of $f$ changes exactly when the path crosses $H$, and a transverse crossing changes it once. Since the path is closed and its vertices are off $H$, the initial and final signs agree; therefore the number of crossings of $H$ is even. [F9, algebra]

1.5 For any two types $a,b$ from different irreducible components, their facet reflections act on orthogonal factors and are distinct commuting involutions, so $m_{ab}=2$. For two types in one component of rank at least two, their simplex facets meet in a codimension-two face by [F16]; choose a point in its relative interior. The local rank-two residue in [F5] shows the product has finite order $m_{ab}\in\{2,3,4,6\}$. The only pair of distinct types in a rank-one component is its two opposite endpoint reflections $r_{\alpha,1}$ and $r_{\alpha,0}$; [F2] and the reflection identity give $r_{\alpha,1}r_{\alpha,0}=t_{\alpha^\vee}$. Since $\alpha^\vee\ne0$, its positive powers are nonzero translations, so this product has infinite order. These cases define the Coxeter matrix in the statement. The finite-label relations hold for the corresponding affine reflections, so [F8] gives $\varphi$. If $J=\varnothing$, the root system is empty and all assertions are immediate. [F2, F3, F5, F8, F16, algebra]

2.1 Let $p$ be a nonconstant generic closed polygonal path with vertices $b_0,\ldots,b_{r-1}$ (indices taken cyclically). Let $C_0$ be the alcove containing the regular vertex $b_0$. Since $C_0$ is open, choose $R>0$ with $B_E(b_0,R)\subseteq C_0$. By [F11] and [F12], choose $0<\rho<R$ such that $K_0:=\overline B_E(b_0,\rho)$ is metric-compact; it is compact in the norm-topological-vector-space topology by [F13] and convex by the triangle inequality in [F10]. Put $O:=B_E(b_0,\rho)\subseteq C_0$. The finitely many singleton sets $\{b_j\}$ are compact convex by [F14], so $K:=\operatorname{co}(\{b_0\}\cup\cdots\cup\{b_{r-1}\}\cup K_0)$ is compact by [F7] and convex by [F15]. It contains the boundary path and every segment from a boundary point to any $q\in O$. Only finitely many walls meet $K$ by [F2]. There are finitely many nonempty intersections $P$ of two or more distinct walls in this list. For each codimension-two $P$ and boundary edge $e=[b_j,b_{j+1}]$, put $d_j=b_{j+1}-b_j$. Boundary genericity gives $d_j\notin\operatorname{dir}(P)$. Exclude the affine locus $b_j+\operatorname{dir}(P)+\mathbb R d_j$, which has dimension $\dim E-1$: outside it, the images of $q-b_j$ and $d_j$ in $E/\operatorname{dir}(P)$ are linearly independent. Also exclude $\operatorname{aff}(P\cup\{b_j\})$, which is proper because $b_j\notin P$; this keeps radial edges away from $P$. For every intersection $P$ of codimension at least three, exclude $\operatorname{aff}(P\cup e)$, whose dimension is at most $\dim E-1$. Exclude all listed walls and, when $\dim E\ge2$, the affine spans of the boundary edges. The finite affine-avoidance argument of step 1.3, applied to this finite family of proper affine sets in $O$, leaves $q\in O$ outside the family. Cone a topological polygonal disk from its central vertex to the boundary path, mapping the center to $q$. Its image lies in $K$. On each cone triangle the pullback of a wall is empty or a straight segment; the exclusions make triangles nondegenerate in dimension at least two, prevent multiwall crossings on radial edges, and make the affine plane of each triangle meet any codimension-two $P$ in at most one point, transversely. Any such point on the disk lies in a triangle interior, since boundary and radial edges avoid $P$. The higher-codimension exclusions keep the image away from all strata of codimension at least three. Thus genuine interior vertices have exactly $2m$ branches by [F5]; radial-edge kinks are only degree-two points. In dimension one there are no codimension-two strata; the same cone still gives finite wall segments on its triangles. Dimension zero has only the constant path. Local finiteness gives finitely many graph pieces, with the prescribed transverse boundary crossings. Every component of the complement maps continuously into the wall complement and hence into one alcove. [F2, F5, F6, F7, F9, F10, F11, F12, F13, F14, F15, choose, algebra]

3.1 Let $h:D\to E$ be any generic PL filling with the properties in (2), including the cone constructed in step 2.1. Fix a finite triangulation on which $h$ is affine. Its image is compact: each triangle image is the convex hull of its three vertex images, compact by [F7], and there are finitely many triangles. Thus only finitely many walls meet it by [F2]. On each triangle the pullback of a wall is the zero set of an affine functional, hence is empty, a line segment, or a subset of the triangle boundary; it cannot contain a whole triangle because the wall preimage is a graph. Subdivide the triangle along these finitely many line segments. Each resulting two-dimensional cell is the intersection of that triangle with finitely many closed half-planes and has nonempty interior, so it is a convex polygon and its closure is a disk. Subdivide shared triangle edges at all endpoints to make these subdivisions agree. The resulting finite subdivision of $D$ contains the entire wall graph in its edges. Edges outside that graph are auxiliary: their interiors and the regions on both sides map to the same alcove. This construction also cuts annular regions and closed wall loops into disk regions; it makes no assumption on the topology of an original alcove region. [F2, F7, step 2.1, construct, algebra]

4.1 In the subdivision of step 3.1 place a dual vertex in each polygon interior, join it to the midpoints of its sides by noncrossing spokes, and join spokes across interior sides. Fill the dual polygons surrounding interior subdivision vertices. In each polygon the sectors adjoining its boundary sides form a boundary collar; retracting this collar onto the dual spokes shows that the resulting diagram is connected and simply connected. Its outer boundary follows the original boundary gallery, with possible spurs. At a side interior, the image lies either off the walls or on exactly one wall. Its two incident region images are therefore either the same alcove or the two adjacent alcoves at that wall. In the latter case label the dual edge by the common panel generator $\sigma_a$ using [F4]; in the former case label it by $1$, including auxiliary sides and any wall touches. Around an interior subdivision vertex off the wall graph all letters are $1$. Around a degree-two wall point, ignoring identity edges leaves two crossings of the same panel and the word $\sigma_a^2$ if the two sides map to different alcoves, and the empty word if they map to the same alcove. The two branches have the same crossing behaviour because each local complementary half-disk maps into a single alcove. Around a genuine rank-two vertex, ignoring auxiliary edges leaves the alternating $2m$ crossings and the word $(\sigma_a\sigma_b)^m$ or its reverse by [F5]. All these face words are trivial by [F8]. To reduce the boundary, choose a spanning tree of the face-adjacency graph rooted at the exterior face. This graph is connected: a path from any face interior to the exterior can be perturbed within the finite polygonal subdivision to avoid vertices and cross edges transversely. Process bounded faces in increasing tree distance from the root. Each parent edge is then incident to just its remaining child face, so collapsing that face across the parent edge replaces a boundary occurrence by the complementary face path and preserves simple connectivity. After all faces are removed, the remaining connected simply connected graph is a tree; its boundary walk reduces by edge backtracks. Omitting identity-labelled edges throughout, empty faces do not change the gallery, degree-two faces insert or remove a backtrack, and rank-two faces replace complementary alternating arcs. The boundary therefore reduces to the empty gallery by precisely the asserted moves, including braid moves between alternating halves. This proves the claim for every generic filling, not just the constructed cone. [F4, F5, F8, step 1.3, step 3.1, construct, algebra]

5.1 Let $w=\sigma_{a_1}\cdots\sigma_{a_n}$ with $\varphi(w)(A)=A$. The alcoves $C_j:=\varphi(\sigma_{a_1}\cdots\sigma_{a_j})(A)$, with $C_0=A$, form a closed gallery, because each consecutive pair is adjacent across a facet of type $a_j$. For each panel crossing, choose a point in the relative interior of its panel outside all other walls, then a small ball meeting only its panel wall. Indeed, by [F11] and [F12] a small compact ball around any point of the panel meets finitely many walls; their intersections with the open panel are proper affine subspaces of its wall, so the finite affine-avoidance argument of step 1.3 supplies such a point (in a zero-dimensional panel, no distinct wall can contain that point). For each of the finitely many other walls $H_{\beta,l}$ meeting the compact ball, $B(q,\beta)\ne l$. By Cauchy--Schwarz in [F10], if $\|u-q\|<|B(q,\beta)-l|/(2\|\beta\|)$ then $B(u,\beta)\ne l$. Taking the minimum of these finitely many positive radii and shrinking inside the compact ball gives the required neighborhood meeting only the panel wall. Fix one endpoint in one open half-ball; in the opposite open half-ball choose the second endpoint outside the finitely many affine sets $x+D$, where $x$ is the fixed endpoint and $D$ ranges over codimension-two direction subspaces. This is possible by the finite line-avoidance argument of step 1.3. The joining segment lies in the ball, crosses that wall once and no other, and is not parallel to any codimension-two direction. In each intermediate alcove, let $x,y$ be the outgoing and incoming crossing endpoints. Choose a small open ball around an interior point of $[x,y]$ contained in the alcove. Within it choose $z$ outside every $x+D$ and $y+D$ and outside the singleton sets $\{x\},\{y\}$ by the same finite-avoidance argument. Convexity of the alcove makes $[x,z]\cup[z,y]$ a path inside it, with both directions avoiding all codimension-two directions. The resulting closed polygonal path has regular vertices, crosses exactly the gallery panels and meets them transversely, and is generic as in (2). Its crossing word is $w$ up to a cyclic starting point. Apply steps 2.1–4.1: its boundary word is trivial in $W_{\rm abs}$. A cyclic conjugate of $w$ is therefore $1$, and conjugating back gives $w=1$. If the word is empty or $E=0$, the conclusion is immediate. No axiom of choice is used: all lists of roots, walls, flats, vertices, and moves are finite. [F2, F4, F6, F8, F9, F10, F11, F12, step 1.3, step 2.1, step 4.1, algebra] ∎

## Remarks

**Open Step-3 supplier obligations.** For consumer lem-cg-affine-generic-gallery-paths-and-disk-moves, the current-run draft supplier def-hh-coxeter-matrix-word-group-and-length is used in the Statement and Fact F8, and in proof steps 1.5, 4.1 and 5.1 for the universal presentation and defining relators. The current-run draft supplier lem-cg-affine-point-stabilizers-and-vertex-residues is used in Fact F5 and proof steps 1.5, 2.1 and 4.1 for rank-two residue sectors, branch counts and boundary words. The proof-use checks are provisional until these suppliers receive completed Step-3 decisions; this consumer item decision remains escalated.
