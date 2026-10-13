---
id: thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
kind: theorem
title: "Finite smooth triangulation of compact corners, relative to admissible boundary data"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection, lem-corner-adapted-strong-approximations-remain-in-the-same-orthant, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-brouwer-fixed-point-theorem, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters]
justified_by: []
aliases: []
landmark: true
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966), Princeton University Press"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§10.6 boundary-extension proof printed pp. 103-105 (PDF pp. 108-110), with Theorem 10.4 printed pp. 101-103 and Exercise 10.4(a),(b) printed p. 103; the corner side control and the total-boundary collar construction are additional arguments supplied here, since §10.6 treats boundary rather than corners"
---

## Statement

Assume the Axiom of Choice as an ambient hypothesis; the finite construction and
the ODE interfaces below use no additional choice, so this hypothesis is
dispensable. A smooth manifold with corners here is Hausdorff and second
countable, with charts in relatively open subsets of $[0,\infty)^c\times\mathbb R^{n-c}$
and transition maps smoothly extendible with invertible derivative at corner
points; transitions preserve the local depth and its face germs. Let $M$ be
compact. Then $M$ has a finite corner-adapted whole-star smooth triangulation.
Corner faces are locally subpolyhedra, and any specified finite union of
closed faces is a subpolyhedron.

If the total boundary already has a finite piecewise smooth triangulation
$f:L\to\partial M$ compatible on all local face intersections, with its
differential fan giving a homeomorphism onto the union of boundary faces of the
tangent orthant at each point, the triangulation extends to $M$, pointwise
preserving $f$ with compatible subdivisions allowed. In the resulting finite
union construction all intersections may be made full subcomplexes. The same
relative conclusion applies to a fixed corner-adapted triangulated closed neighbourhood piece
whose smaller protected subcomplex lies in its relative interior: fitting is
performed away from that protected subcomplex. No extension of arbitrary
incompatible boundary data is asserted.

## Facts & Assumptions

**Given:** a compact Hausdorff second countable smooth manifold with corners $M$ with the atlas of the Statement, and in the relative case an admissible finite boundary triangulation $f:L\to\partial M$ as in the Statement.

[F1] The folding of finitely many box pieces works: whole-star embeddings are stable under small strong approximation, shape-controlled secants converge and extend with controlled error, and finite fitting with supports and a protected region has a complete local proof ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], [[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]], [[lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection]]), and these items also supply the finite compactness and separation margins used below.

[F2] Under the adapted face/tangent hypotheses, small plane-preserving strong approximations preserve the orthant and the coordinate zero sets, and finite convex boxes have compatible finite triangulations ([[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]], [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F3] Continuous self-maps of balls have fixed points; a smooth vector field on a coordinate neighbourhood has unique local solutions, with smooth dependence on initial values and time ([[thm-brouwer-fixed-point-theorem]], [[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F4] The ambient Axiom of Choice is declared; only finitely many choices (charts, bump functions, ODE data) are made, and the cited ODE, Brouwer and fitting suppliers are choice-free, so no essential AC use beyond the declaration occurs ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Box pieces. If $M$ is empty take the empty complex; if $M$ has dimension zero, compactness makes it a finite discrete set whose points are the required vertices. Otherwise choose finitely many corner charts and closed coordinate boxes $Q_i=[0,R_i]^{c_i}\times[-R_i,R_i]^{n-c_i}$ contained in them whose smaller relative interiors cover $M$; at a point of smaller depth shrink the chart so that all remaining corner coordinates are strictly positive and are treated as ordinary coordinates. Each box has a finite cell triangulation by [F2], whose inverse chart map $F_i:K_i\to M$ is a whole-star embedding, being the restriction of an invertible smooth coordinate map to an actual geometric complex; its preimages of local corner planes are subcomplexes. In any other corner chart on an overlap, the transition and its inverse map the corresponding tangent orthant and its faces isomorphically onto the target orthant and faces, because their derivatives preserve the tangent cones by taking directional limits; hence the adapted face/tangent hypotheses of [F2] hold for the box pieces in every chart used to fit them. [F1, F2, given, algebra]

1.2 Collar of the total boundary. If the boundary is empty, the nonrelative construction also gives the relative result. For nonempty boundary build a piecewise smooth collar directly, corners included. Around each boundary point choose a small corner chart and a smooth vector field whose active corner-coordinate components are strictly positive; construct smooth bump functions in slightly larger chart balls, equal to $1$ on the smaller balls and zero near the chart boundary, by applying the explicit smooth cutoff of the secant lemma to squared coordinate distance. Pull them back, extend by zero, and add finitely many interior chart bumps so their sum is positive on $M$. Normalize by that sum and form the weighted sum $V$ of the local inward fields, taking the interior fields to be zero, which is strictly inward along every active local face, because the inward tangent cone is preserved by chart transitions and its strict interior is convex. This gives a smooth field on $M$. In each corner chart its coefficients extend smoothly to a neighbourhood in $\mathbb R^n$, so [F3] solves the local ODE there and uniqueness makes the solutions agree while in $M$; compactness gives a common positive time for starts on $\partial M$, and [F3] gives smooth dependence on the initial point. The forward flow $\Phi$ lies in the interior for small positive times, because every active boundary coordinate has positive derivative. [F3, algebra]

2.1 Fitting inside corner charts. Fit the box pieces and the collar pieces to one another using the supported construction of [F1]. The additional verification in a corner chart is that the specified corner planes are affine, so secant interpolation and the correction extension keep every simplex lying in such a plane inside that same plane; by [F2] sufficiently small strong errors keep each whole box piece in the same orthant, with the same face zero sets, and the derivative zero cones are retained as well: the lower-distance estimate proved in [F2] for the perturbed coordinate, divided by the ray parameter at a zero point, is strictly positive for any tangent direction outside the local zero-face cone. On the zero-face cone the coordinate is identically zero, so its derivative vanishes. The changed maps can therefore be carried back through the original corner chart, without evaluating its inverse outside the chart domain. All other steps of the finite fitting induction are unchanged, and on overlaps local face germs are permuted by the chart transition, so preserving them in the active chart preserves the same geometric faces in every chart; the support margins keep images inside the relatively open charts. Fitting the finitely many pieces successively gives one finite complex and an embedding onto their union, whose corner-face inverse images are subcomplexes, with intersections full after the prescribed barycentric refinement. [F1, F2, step 1.1]

2.2 The collar is a whole-star corner collar. The map $\partial M\times[0,\epsilon]\to M$, $(y,t)\mapsto\Phi(y,t)$, is injective for sufficiently small $\epsilon$: if two values agree, reverse the common interior orbit by uniqueness; if the times differ, the earlier boundary start would occur at a positive time on an orbit starting at another boundary point, impossible because the forward orbit has already entered the interior and cannot meet the boundary while its inward derivatives remain positive there; equal times give equal starting points. On the compact product it is a homeomorphism onto its image, and that image contains a neighbourhood of $\partial M$: in a sufficiently small boundary chart, following $-V$ decreases every sufficiently small active face coordinate at a uniformly positive rate until the first one reaches zero, within a time bounded by a constant times the distance to the boundary, so the inverse path is represented as $\Phi(y,t)$; finitely many boundary charts give a uniform neighbourhood and time. The flow is smooth on each boundary face by [F3], so its composite with $f$ is smooth on each cell of $L\times[0,\epsilon]$. At a boundary starting point $y$, write $V_y$ in corner coordinates, with every active component positive. The differential at $(y,t)$ is $D_y\Phi_t(w+sV_y)$, where $w=df_y(u)$ is in the boundary differential fan and $s$ is a time tangent direction. The local flow has smooth inverse given by the reverse-time flow, so $D_y\Phi_t$ is invertible; the identity $\partial_t\Phi_t(y)=D_y\Phi_t(V_y)$ follows by differentiating the uniqueness identity $\Phi_{t+a}(y)=\Phi_t(\Phi_a(y))$ at $a=0$. The map $(w,s)\mapsto w+sV_y$ is injective: for its value $v$, necessarily $s=\min_j v_j/(V_y)_j$ over active coordinates, and then $w=v-sV_y$. At $t=0$, $s\ge0$ and these values fill the tangent orthant; at $0<t<\epsilon$, $s$ is unrestricted and they fill the full tangent space; at the artificial top, $s\le0$ gives its corresponding sector. The inverse is continuous by the finite minimum formula. Hence a compatible triangulation of the product cells gives a whole-star smooth collar agreeing with the supplied admissible boundary data. [F1, F2, F3, step 1.2]

3.1 The union covers $M$. Each initial box has a compact smaller core and these cores cover $M$. In its coordinates a sufficiently small perturbation of its map is $x\mapsto x+e(x)$ on the original box, with $\|e\|_\infty$ less than the margin of that core from the artificial box faces and $e_j(x)=0$ on $x_j=0$ for a true corner face. For a target point $y$ in the smaller core, the self-map of the box $x\mapsto\operatorname{clip}_{Q_i}(y-e(x))$, clipping each coordinate to its box interval, has a fixed point by [F3], after transporting the box to a ball by radial parametrization from its centre. Clipping at an artificial face cannot occur at a fixed point, because the error is smaller than the core margin; at a true corner face $x_j=0$, fixed-point clipping would give $y_j-e_j(x)\le0$, hence $y_j=0$ because $e_j(x)=0$ and $y_j\ge0$, and the equation $x_j+e_j(x)=y_j$ still holds; for unclipped coordinates it holds by definition. Thus the perturbed box still contains its entire core, and choosing the total fitting error below all finitely many such margins makes the union image equal to $M$. Its local differential fans are homeomorphisms onto the tangent orthants: for a target ray $y+tv$ the preimages $x_t$ under the finite union homeomorphism converge to the preimage $b$ of $y$ and lie on a subsequence in one closed simplex containing $b$; full rank gives $|x_t-b|\le Ct$ by the first-order expansion and the positive least singular value, and a subsequential limit of $(x_t-b)/t$ is a tangent-cone vector mapping to $v$, while injectivity of the fan gives continuity of the resulting finite piecewise linear inverse. Hence the union is a finite corner-adapted whole-star smooth triangulation of $M$ with all intersections full. [F1, F2, F3, step 2.1]

4.1 Relative case and protected neighbourhoods. Given the admissible boundary triangulation $f:L\to\partial M$, triangulate the finite product cells $\sigma\times[0,2\epsilon/3]$, $\sigma\in L$, by [F2], keeping the given bottom-face subdivisions and coning the untriangulated higher cells; composing with the collar flow of step 2.2 gives a whole-star embedding agreeing with $f$ on its bottom. Protect the smaller collar through time $\epsilon/4$. The compact complement of the open collar through time $\epsilon/3$ lies in the smooth interior of $M$ and is covered by finitely many ordinary closed chart boxes with smaller cores covering it; choose them and all fitting stars disjoint from the protected collar. Fit these boxes and the outer collar pieces with the supported construction of [F1]; all modifications occur away from the protected region in a boundaryless interior target, so the original $f$ remains pointwise fixed, while the coverage argument of step 3.1 applies to the interior cores and to the compact intermediate collar annulus: cover that annulus by smaller coordinate-box cores lying in the relative interior of the old collar image, pull those boxes back by the old collar homeomorphism, and apply the same clipped fixed-point argument to its perturbed map. Its inverse need only be continuous for this argument. A fixed corner-adapted triangulated closed neighbourhood piece with a smaller protected subcomplex is handled by the same supported fitting and core-coverage argument. [F1, F2, step 2.2, step 3.1]

5.1 Conclusion. The construction uses only finitely many chart pieces and finite subdivisions, keeps the face zero sets by step 2.1, and in the relative case keeps the prescribed boundary map and its face intersections by step 4.1; the total-boundary collar was built explicitly in steps 1.2 and 2.2 rather than inferred from the smooth-boundary collar theorem. Hence every specified finite compatible collection of corner faces is a subpolyhedron, the triangulation of $M$ is finite and corner adapted, the relative extensions realise the admissible boundary data pointwise up to compatible subdivision, and no arbitrary incompatible boundary data are extended. The ambient Axiom of Choice is declared but not essentially used, only finitely many choices being made. [F4, step 2.1, step 2.2, step 3.1, step 4.1] ∎
