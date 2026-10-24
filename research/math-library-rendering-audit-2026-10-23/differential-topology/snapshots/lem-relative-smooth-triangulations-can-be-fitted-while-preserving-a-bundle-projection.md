---
id: lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection
kind: lemma
title: "Finite smooth fitting with exact bundle projection and protected regions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-corner-adapted-strong-approximations-remain-in-the-same-orthant, def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-chain-rule-for-total-derivatives, prop-a-finite-simplicial-complex-has-compact-hausdorff-realization, thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: true
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§10.1-10.4: intersection in a (full) subcomplex, uniqueness of the union, Lemma 10.2 and Theorem 10.4 with the finite simplex-order fitting proof and supported Exercise 10.4(a), printed pp. 97-103 (PDF pp. 102-108)"
    - title: "H. Putz, Triangulation of fibre bundles, Canadian Journal of Mathematics 19 (1967), pp. 499-513"
      url: "https://doi.org/10.4153/CJM-1967-042-3"
      locator: "§§3.3-3.4 fitting with a fixed linear subcomplex and commutativity-preserving extension, printed pp. 509-510; §§4.1-4.4 finite fitting induction, printed pp. 510-512; the shift/shift-back base construction is expanded locally from §§1.9-1.10"
---

## Statement

Let $F:K\to M$ and $G:L\to M$ be whole-star smooth embeddings of finite complexes
into a smooth manifold without boundary. Given any positive strong $C^1$
tolerance, there are approximations on finite subdivisions fitting in a full
subcomplex whose union is a whole-star smooth embedding.

The same conclusion holds for bundle diagrams $\pi F=hr_K$, $\pi G=hr_L$ over a
fixed whole-star smooth base embedding $h:D\to B$, when all relevant images are
in a smooth bundle with product trivializations. The final approximations
satisfy these **same** diagrams with $h$ and $r_K,r_L$ unchanged as point maps,
so the bundle projection is preserved exactly. The union map has the induced
affine map to $D$.

The construction may be supported in a prescribed open neighbourhood $V$ of the
new piece being fitted, including only the old pieces whose images meet that
neighbourhood. In particular it fixes a closed protected region $R$ pointwise
whenever all newly processed pieces and their required closed stars have images
in $V$, with $\overline V\cap R=\varnothing$, and the maps already fit on the
pieces outside this support. This is the fixed-collar relative interface: it
does not assert arbitrary pointwise fixed-side fitting without the
neighbourhood/separation hypotheses. Additional local affine plane constraints
are preserved if the chosen charts make them coordinate planes and the already
supplied diagrams respect them. For corner targets the same construction applies
when all pieces satisfy the adapted face/tangent hypotheses of
[[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]] in these
charts; that lemma proves every altered piece remains in its original orthant.

## Facts & Assumptions

**Given:** finite whole-star smooth embeddings $F:K\to M$, $G:L\to M$ into a smooth manifold without boundary, and in the bundle case a smooth bundle $\pi:E\to B$ with finite product trivializations and supplied diagrams $\pi F=hr_K$, $\pi G=hr_L$ over the fixed whole-star smooth base embedding $h:D\to B$, all in the sense of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F1] Whole-star embeddings are stable under sufficiently small strong piecewise $C^1$ approximation ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]]).

[F2] Shape-controlled subdivisions exist, secant approximations converge strongly, corrections extend with derivative bounds controlled by the requested error and the original simplices only, and zero affine components and affine target planes are preserved ([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]]).

[F3] Compactness and margins ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]], [[thm-lebesgue-number-lemma]]): a finite realization $|K|$ is compact and Hausdorff; continuous images of compact sets are compact; closed subsets of compact sets are compact; a nonempty compact set disjoint from a nonempty closed set has a positive distance; and an open cover of a compact metric space has a Lebesgue number, so a finite-cover argument gives a positive chart margin. A closed vertex star has diameter at most twice the mesh and $k$ successive star neighbourhoods have diameter at most $2(k+1)$ times the mesh.

[F4] Finite convex cell complexes have compatible simplicial triangulations, and differences of the fixed compact charts are controlled through the chain rule ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], [[thm-chain-rule-for-total-derivatives]]).

[F5] Fitting in a (full) subcomplex, the union realization and map, projection-preserving diagrams and protected relative interfaces have the meanings fixed in [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F6] For corner targets, a strong map small enough and preserving the coordinate planes on the given zero subcomplexes keeps every altered piece in its original orthant with the same coordinate zero sets ([[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]]).

## Proof

**Proof technique:** direct.

1.1 Compactness and margin facts. A finite geometric realization is compact by [F3]: the realization is a continuous image of the finite disjoint union of its compact closed simplices, and inverse images of closed conditions are finite unions of closed simplex traces. Continuous images of compact sets are compact, because an open cover pulls back to an open cover with a finite subcover, and a closed subset of a compact set is compact by adjoining its open complement to a cover. In a local Euclidean chart a compact set is closed, so for a nonempty compact set $A$ disjoint from a nonempty closed set $C$ a positive gap follows directly from compactness: the pairs $(a,r)$ with $B(a,3r)$ disjoint from $C$ cover $A$ by balls $B(a,r)$, a finite subcover $B(a_j,r_j)$ exists, and the triangle inequality then gives $d(x,y)>2r_j$ for $x\in A$, $y\in C$ and a covering $j$, so $2\min_jr_j>0$ is a gap; empty sets impose no constraint. For a compact source with an open chart cover, [F3] gives a positive Lebesgue margin: choosing a finite cover by balls $B(a_j,r_j)$ with $B(a_j,3r_j)$ inside chart members, any set of diameter less than $\min_jr_j$ that meets $B(a_j,r_j)$ lies in $B(a_j,2r_j)$ and hence in the same chart. By [F3] a closed vertex star has diameter at most twice the mesh and $k$ successive star neighbourhoods at most $2(k+1)$ times the mesh, so a sufficiently fine subdivision puts all finitely many required support stars inside their assigned chart preimages and keeps the protected-region separation; all of this uses only finitely many explicitly chosen balls. [F3, algebra]

1.2 Euclidean fitting step. Two finite linear embedded complexes in $\mathbb R^q$ can be placed in one finite convex cell complex even when their underlying sets differ: cut a bounding box by all affine hyperplanes defining the affine hulls and barycentric facet inequalities of the finitely many simplices of both complexes. Each resulting cell is determined by choosing one weak side of each hyperplane; intersections activate further equalities and are common faces; each original simplex is a union of cells because its equalities and weak inequalities are among the cuts, and closed cells outside a simplex can meet it only along common faces. Triangulate this complex compatibly by [F4] and restrict to the two original polyhedra: their intersection is now a subcomplex, and one barycentric subdivision makes it full, because a face chain all of whose barycentric vertices lie in the intersection has its largest face there and hence the whole simplex there. Pulling these subdivisions back through the linear embeddings gives fitting in a full subcomplex by arbitrary-overlap refinement; no same-polyhedron common-refinement theorem is used beyond its scope. [F4, F5, algebra]

2.1 Local fitting of an attached piece. Work in $\mathbb R^q$ with a finite complex $P=Q\cup A$ and a piecewise smooth map $T$ such that $T|_Q$ and $T|_A$ are embeddings, $A$ being the new piece. Let $P_0$ contain the closed stars of all simplices meeting $T^{-1}(T(A))$ and let $P_1$ be the closed star of $P_0$; then $T^{-1}(T(A))$ lies in the relative interior of $|P_0|$, so by step 1.1 the compact image of the complement of that relative interior has positive distance from the compact set $T(A)$, unless the complement is empty, in which case the distance constraint is omitted. Choose the approximation tolerance below a quarter of that distance and small enough for [F1] on the two embeddings separately, and first use the shape-controlled secant assertion of [F2] on the finite subcomplex $P_1$. Then use its local extension assertion to extend that small change over the closed star of $P_1$, leaving $T$ unchanged outside that star. The secant error on $P_1$ is chosen below the extension threshold for the required final error. Every new intersection of $T(Q)$ with $T(A)$ lies in $|P_0|$ by the distance bound and the triangle inequality, and both restricted maps remain embeddings. On $P_1$ the two maps are linear on a finite subdivision, so step 1.2 fits their images there. Pull the subdivisions back and extend them over the whole complexes by coning subdivided faces from original simplex barycentres, without changing the altered map. The resulting union is a whole-star embedding: at a point of the intersection a neighbourhood is an actual geometric linear complex whose differential is the translated affine realization, hence injective on the whole tangent star; at other points one is locally inside a single embedded piece, which is an embedding by [F1]; and the glued map is continuous and bijective from a compact space onto its image, hence a homeomorphism. [F1, F2, F3, F5, step 1.2]

3.1 Affine-base bundle projection. In a product chart write $T(x)=(h(r(x)),v(x))$ with projection $p_1$ onto the base, and suppose first that $h$ is affine on every base simplex reached by the affected domain simplices. A secant of $T$ then still has first coordinate $hr$, because both $r$ and $h$ are affine there and the secant matches the vertex values; every boundary correction of [F2] has zero first coordinate, and the explicit correction formula multiplies that correction by a scalar, so it retains a zero first-coordinate component. Hence every perturbation of step 2.1 preserves $p_1T=hr$ exactly. At points identified by the fit, equality of the altered maps and injectivity of $h$ give equality of the $r$-values, so $r$ descends to the glued union and is affine on its simplices. [F2, F5, step 2.1, algebra]

4.1 General base: shift and shift-back. Remove the affine hypothesis on $h$ by the shift construction. On a finite base subcomplex covering the affected projections and their stars, choose a secant approximation $h'$ to $h$ sufficiently close for [F1]; extend it to the required base neighbourhood by [F2]. Subdivide the domain so that $r$ maps each new simplex into one simplex of the secant subdivision of the base: intersect each domain simplex with inverse images of those base simplices, a finite convex cell decomposition, then triangulate it by [F4]. This necessary subdivision keeps the original point map $r$ affine. Replace $T$ temporarily by $T_1=(h'r,v)$. This is an embedding on each original embedded piece: equality of two $T_1$-values gives equal $r$-values by injectivity of $h'$, then equal $v$-values, hence equal original $T$-values. At the differential level the first component is $dh'_{r(x)}dr_x$, and equality on two tangent-star vectors forces equality of their $dr_x$-values by whole-star injectivity of $h'$; equality of the fibre components then gives equality under $dT_x$, hence equality of the original star vectors. Compactness gives the homeomorphism property, so $T_1$ is again a whole-star embedding. Apply step 3.1 to fit $T_1$, obtaining $T_2=(h'r,v')$, and shift back to $T_3=(hr,v')$. The same injectivity and differential argument shows that each embedding and the embedding of the fitted union survive the shift back, and two points have equal images under $T_3$ exactly when they have equal images under $T_2$, because $h$ and $h'$ are injective and the fibre coordinate is unchanged; hence the full-subcomplex identifications remain identical. The first-coordinate changes cancel completely, leaving the original diagram $\pi T_3=hr$. Choosing the temporary secant and the fitting errors successively small gives the prescribed final strong error, bounded through the chain rule on finitely many compact charts. [F1, F2, F4, step 3.1, algebra]

5.1 Finite induction over the new simplices. In a general smooth target, subdivide the new complex so that each closed simplex and the old pieces in its intersection neighbourhood lie in one coordinate chart; in the bundle case choose product charts and base charts with the same property, using the margins of step 1.1. Order the finitely many new simplices with faces first. Begin with the old embedding and suppose the already processed new simplices fit it in a full subcomplex and their union is an embedding; attach the next simplex along its already processed boundary, giving $P=Q\cup A$, and apply step 2.1, or the projection-preserving steps 3.1-4.1 in product charts. The changed map on the processed new subcomplex extends over the unprocessed simplices with arbitrarily small prescribed error by [F2], and in product charts its correction has zero base component, so the diagram is preserved. Choose the error at each of the finitely many stages small enough to retain the previous embeddings and fit margins, with the total error below the requested tolerance. Since only finitely many simplices and stages occur, no unevidenced limiting map or infinite subdivision arises. [F1, F2, F4, step 2.1, step 4.1]

6.1 Supports, protected regions and corner orthants. Every local change and its extension is supported on the closed stars used in that construction; if those supports have images in the prescribed open neighbourhood $V$ of the new piece and $\overline V\cap R=\varnothing$ for the closed protected region $R$, then the parametrizations and diagrams on $R$ are untouched and pieces already fitted outside the supports keep their identifications, so the induction adds only the new fitted regions. For coordinate affine-plane constraints, secants remain in the same plane and the extension formula remains there because the correction lies in the translation space of the plane, and in the bundle shift the fibre coordinate is unchanged by either shift, so fibre-plane constraints persist. For a corner target, after each plane-preserving local change the image still lies in the chart orthant with the same coordinate zero sets by [F6], before the chart inverse is applied. This proves all the fitting, projection-preserving, supported and relative assertions under the stated separation and product-chart hypotheses. [F2, F5, F6, step 5.1] ∎
