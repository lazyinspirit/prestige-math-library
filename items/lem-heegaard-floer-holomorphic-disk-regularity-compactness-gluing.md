---
id: lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
kind: lemma
title: "Regularity, compactness, and gluing for pointed Heegaard disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
  - thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts
  - thm-full-marked-index-two-compactification-gives-the-boundary-disk-curvature-identity
  - lem-unbubbled-strip-breaking-and-regular-gluing-preserve-whitney-concatenation
  - thm-regular-boundary-disk-attachment-has-an-exhaustive-nodal-half-collar
  - lem-boundary-preserving-local-addition-for-transverse-product-tori
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§§3.2–3.8; Fredholm setup, generic-path transversality, energy bounds, compactness, and index-two boundary/gluing analysis, printed pp.19–33"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3, Theorem 3.1 and proof, printed pp.14–17; doubly-pointed filtered invariance and its dependence on the analytic Heegaard Floer theory"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; analytic Heegaard Floer complex and comparison with grid counts"
---

## Statement

Assume countable choice. Let $\mathcal H$ be any admissible $2k$-pointed Heegaard diagram for an oriented knot in $S^3$, with transverse attaching curves, product tori, and marked points as specified in the pointed-data definition. Admissibility means every nonzero periodic domain with all $w$-multiplicities zero has both positive and negative region coefficients. There is a smooth path $\mathbb J=(J_t)_{t\in[0,1]}$, constant near its endpoints and chosen among perturbations for which all holomorphic-strip representatives used in the differential have nonnegative local multiplicity at every marked point, such that the linearized Cauchy–Riemann operator is surjective for every Maslov-index-$1$ strip class with all $w$-multiplicities nonnegative. Each corresponding moduli space modulo translation is finite. For every Maslov-index-$2$ class with all $w$-multiplicities nonnegative, the compactification of the one-dimensional moduli space modulo translation has as codimension-one boundary broken pairs of index-one strips meeting at an intermediate generator and disk bubbles whose entire boundary lies on one of the product tori (the boundary-degeneration strata). Gluing gives a collar at every broken end, and the boundary-degeneration contributions cancel modulo two in the differential-square count. No sphere bubbling or escape through a nonzero periodic domain gives an additional codimension-one end. Consequently the disk-count differential in the pointed-data definition squares to zero and preserves its Alexander filtration.
## Statement references

[[def-admissible-pointed-heegaard-floer-data|Admissibility, disk classes, basepoint multiplicities, and the Maslov index]]

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*](https://arxiv.org/pdf/math/0101206)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

[F1] For the actual balanced $S^3$ diagram, the full-marked count theorem constructs ONE integrable background and genuine time-collar path with marked positivity, no nonconstant strip of index at most zero, regularity of every actual index-one and index-two strip, and finitely many rigid translation orbits across ALL generators/classes/nonnegative marked degrees. It also supplies finite regular endpoint unit disks: their parities are one for every alpha and beta cut component if $k\ge2$, and zero for both components if $k=1$, with actual pointed sphere avoidance in that latter case. All positive $z$ multiplicities are included. ([[thm-balanced-knot-data-admit-full-marked-square-zero-holomorphic-counts]])

[F2] For THE path constructed in [F1], the full-marked compactification theorem gives an actual compact one-manifold for each pair of generators and pair of nonnegative marked vectors. Its finite boundary consists EXACTLY of broken rigid pairs and the unit boundary disks attached to a constant generator. All have actual exhaustive one-sided gluing collars. Its proof first uses actual bounded-energy bubble extraction and index additivity and then the nonpositive-index exclusion to check limiting-strip regularity; it excludes the singly pointed sphere alternative by the actual sphere avoidance. ([[thm-full-marked-index-two-compactification-gives-the-boundary-disk-curvature-identity]])

[F3] Actual unbubbled strip neck cutoffs and regular gluing preserve Whitney concatenation. The actual boundary-disk attachment theorem constructs corrected maps in the class of the source plumbing, with exhaustive collars. Boundary-preserving local addition gives actual relative homotopies between sufficiently close compact cores. ([[lem-unbubbled-strip-breaking-and-regular-gluing-preserve-whitney-concatenation]], [[thm-regular-boundary-disk-attachment-has-an-exhaustive-nodal-half-collar]], [[lem-boundary-preserving-local-addition-for-transverse-product-tori]])

[F4] The actual relative Alexander grading satisfies $A(x)-A(y)=\sum_i n_{z_i}(u)-\sum_i n_{w_i}(u)$ for every realized Whitney class; each $U_i$ lowers filtration by one. The original full minus differential counts every $z$ degree with weight $U^{n_w}$. ([[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]], [[def-admissible-pointed-heegaard-floer-data]])

[A1] Countable Choice is assumed. The diagram, its complete cut systems, product tori and marked points are the actual data of the Statement; no zero-$z$ restriction is added. ([[def-countable-choice]])

## Proof

**Given:** Countable Choice and the admissible balanced pointed $S^3$ knot diagram in the Statement.

1.1 Choose the actual background and path from [F1]. Its fixed endpoint neighborhoods are genuine positive time collars, and all marked local multiplicities of its actual strips are nonnegative. Each index-one solution is nonconstant, since a constant transverse generator has index zero. Its actual linearization is onto by [F1]. The globally finite list of actual rigid orbits in [F1] in particular makes every specified class's translation quotient finite, including the empty quotient. This uses the full-marked construction, not the zero-$z$ associated-graded branch. Every actual index-two strip is regular as well, so its translation quotient has the indicated one-dimensional interval charts. [F1, A1, given, construct]

2.1 Verify the original PER-WHITNEY-CLASS compactification. Fix an index-two class $\phi$ and its endpoints. If any marked coefficient is negative, its actual moduli is empty by step1.1, and no positive-degree nodal configuration can have that class. Otherwise let $W,Z$ be its two marked vectors and take the actual compact one-manifold $M(x,y;W,Z)$ in [F2], initially across classes. The Whitney-class label is locally constant in its interior: a sufficiently small local-addition chart gives the straight relative homotopy, with the same ends and physical boundary. Extend the label over each of its finitely many added endpoints using its actual collar. That collar's connected open interval has a single class. For a broken pair [F3]'s scalar real neck cut-and-cap homotopy identifies it with the concatenation of the two classes. For a disk endpoint, use the ACTUAL attachment source plumbing: cut out its small physical half-disk, retain the fixed generator chart on the annulus, and cap its outer boundary by the constant generator. The inner component is the node-fixed disk, while the outer strip is constant. The preglue represents precisely this boundary-disk insertion. Its Newton correction is homotopic to that preglue by the local-addition straight section homotopy preserving the two torus boundaries and generator ends. Scalar contraction on the remaining small annular chart proves the same class for every sufficiently small collar member; no holomorphicity of this homotopy is claimed. Exhaustion in [F2,F3] makes this label locally constant at the endpoint too. Thus the fixed-class preimage is clopen in the compact one-manifold. It is itself compact and inherits exactly the interval/half-interval charts and collars with that class label. This proves the stated compactification for $\phi$, rather than replacing it by the marked-vector union. [F2, F3, step 1.1, construct]

3.1 The boundary classification on this fixed-class part is EXACT: its endpoints are the matching broken index-one pairs and boundary-degeneration disks in [F2]. No other end can appear upon restricting a clopen subset. The actual energy/index argument in [F2] captures all limits before restricting: a nonconstant limiting strip has positive index by [F1], so total index two makes it index one or two and hence regular. Nonconstant boundary bubbles have index at least two, and spheres have index at least $2k$. This leaves the listed broken and unit-disk cases when $k\ge2$; for $k=1$ the only further unit-sphere possibility passes through the generator and is excluded by the chosen actual sphere avoidance. The finite-domain uniform energy bound and energy-complete extraction in [F1,F2] leave no escaping periodic-domain contribution. Every listed matching broken end has the exhaustive collar in [F2,F3], and so does each actual disk end. [F1, F2, F3, step 2.1, construct]

4.1 To verify cancellation in the ORIGINAL differential-square count, first keep all marked variables: assign a rigid strip weight $U^{n_w}V^{n_z}$. The matrix is finite by step1.1. Boundary parity for [F2]'s actual compact one-manifolds identifies the coefficient of each $U^WV^Zy$ in its square with the actual disk-end count, since its other endpoints are precisely the ordered rigid pairs with that monomial. If $k\ge2$, an alpha unit disk in the component containing $w_i,z_i$ has count one and weight $U_iV_i$, and a beta unit disk in the component containing $w_i,z_{i+1}$ has count one and weight $U_iV_{i+1}$, by [F1]. Hence $D^2=(\sum_i U_i(V_i+V_{i+1}))I$. If $k=1$, both actual unit counts are zero and the sphere alternative was excluded, so $D^2=0$. Now set EVERY $V_i=1$. This specialization is exactly the full filtered minus differential in the original definition, still counting every positive $z$ multiplicity. Its curvature becomes $\sum_i(U_i+U_i)=0$ in characteristic two, and hence $d^2=0$. The cancellation is in each polynomial coefficient of this differential-square count; it does not falsely assert that the alpha and beta disk insertions have the same Whitney class or the same full $z$ vector. [F1, F2, F4, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For an actual term from $x$ to $y$, [F4] gives $$A(U^{n_w}y)=A(y)-\sum_i n_{w_i}=A(x)-\sum_i n_{z_i}\le A(x).$$ The last inequality is the actual marked positivity in step1.1. Thus the finite full filtered minus differential preserves the Alexander filtration. An additive shift in the relative Alexander values has no effect on this inequality; no absolute normalization or invariance is needed. [F1, F4, step 1.1, step 4.1, algebra]

6.1 When the target is a point there are no nonconstant strips and every asserted differential and compactification is empty, so the same conclusion holds directly. For every positive-dimensional balanced diagram the preceding chosen path supplies all the surjectivity, finite quotients, perclass compactifications, exhaustive broken collars, boundary cancellation, absence of additional sphere/periodic ends and filtration statements. The proof has retained all $w,z$ degrees and the full $m=h+k-1$ scope. It proves this chosen-data analytic lemma and no diagram-move, absolute-grading or combinatorial comparison theorem. [F1, F2, F3, F4, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, construct] ∎
