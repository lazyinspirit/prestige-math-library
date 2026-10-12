---
requires: ["cm-math-balances", "cm-math-dynamics", "cm-math-geometry", "compactness-in-metric-spaces",
          "completeness-and-uniform-continuity", "complexification-realification-and-real-structures",
          "connectedness", "connections-levi-civita-and-parallel-transport",
          "continuity-ivt-evt-and-uniform-continuity", "countability-and-uncountability",
          "countability-axioms-and-cardinal-functions",
          "determinants-of-matrices-over-a-commutative-ring",
          "diagonalisation-and-the-minimal-polynomial",
          "distributions-integral-manifolds-and-the-frobenius-theorem",
          "distributions-test-functions-and-differentiation", "dual-spaces-bilinear-forms-and-inertia",
          "eigenvalues-eigenvectors-and-the-characteristic-polynomial",
          "euclidean-ordinary-differential-equations-with-smooth-dependence",
          "euclidean-surface-measure-divergence-and-green-identities",
          "exterior-powers-orientation-and-hodge-duality",
          "fejer-and-poisson-summability-of-fourier-series",
          "finite-dimensional-normed-spaces-and-riesz-lemma", "foundations-of-the-real-numbers",
          "fourier-transform-convolution-and-approximate-identities",
          "gr-causal-and-initial-value-boundaries", "gr-connections-and-free-fall",
          "gr-curvature-and-tides", "gr-einstein-and-matter", "gr-framework-and-geometry",
          "gr-gr13-convex-normal-neighborhoods", "gr-tensors-and-observers",
          "hamiltonian-mechanics-and-completely-integrable-systems", "improper-integrals",
          "inner-product-spaces-and-orthogonality", "inverse-and-implicit-function-theorems",
          "lebesgue-measure-on-euclidean-space", "limits-of-real-functions",
          "linear-independence-bases-and-dimension", "linear-maps-rank-nullity-and-quotient-spaces",
          "manifolds-with-boundary-collars-and-orientations", "matrices-and-the-matrix-of-a-linear-map",
          "measurable-functions-and-simple-approximation",
          "measure-preserving-transformations-and-poincare-recurrence", "metric-spaces",
          "mixed-partials-taylor-and-extrema", "modules-over-a-pid-and-canonical-forms",
          "monoids-groups-and-subgroups", "monotone-sequences-and-cauchy-completeness",
          "normed-and-banach-spaces", "norming-and-separation-under-hahn-banach",
          "picard-lindelof-and-first-order-odes", "polynomial-rings-and-roots",
          "product-measures-and-the-fubini-tonelli-theorems",
          "properties-of-the-integral-and-the-working-ftc", "rank-theorems-and-embedded-submanifolds",
          "regular-surfaces-and-surface-integrals", "rings-subrings-and-integral-domains",
          "rn-as-a-normed-space", "roots-and-rational-powers", "sard-theorem-and-transversality",
          "separation-axioms", "sequences-and-limits", "series-and-nonnegative-tests",
          "sine-cosine-and-the-definition-of-pi", "smooth-manifolds-and-smooth-maps",
          "sr-spacetime-primitives", "strongly-continuous-semigroups-and-hille-yosida",
          "subspaces-products-and-quotients", "suprema-and-infima",
          "tangent-cotangent-and-the-differential",
          "tensor-fields-exterior-algebra-and-differential-forms",
          "the-complex-exponential-and-eulers-formula", "the-derivative-and-mean-value-theorems",
          "the-determinant-of-a-linear-operator", "the-exterior-derivative-and-cartan-calculus",
          "the-inverse-function-theorem-completed", "the-lebesgue-integral-and-the-convergence-theorems",
          "the-logarithm-and-general-powers", "the-maximal-function-and-lebesgue-differentiation",
          "the-riemann-integral", "the-spectral-theorem-and-singular-value-decomposition",
          "the-topology-of-euclidean-space", "the-total-derivative", "topological-spaces-and-continuity",
          "topology-of-r", "uniform-convergence-of-functions", "vector-fields-flows-and-lie-derivatives",
          "vector-spaces-and-subspaces"]
page: gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability
title: "Gr15 Exact Checked Sbierski Smooth Mghd Proof With Complete Local Prerequisites And Quotient Second Countability"
status: draft
library: physics
items: ["def-gr-development-and-data-fixing-isometry",
          "def-gr-common-subdevelopment-and-corresponding-boundary", "lem-gr-subdevelopment-convexity",
          "lem-gr-portion-inextendibility", "lem-gr-isometric-immersion-rigidity",
          "lem-gr-data-fixing-immersion-is-embedding", "lem-gr-maximal-common-development",
          "lem-gr-corresponding-boundary-structure", "lem-gr-corresponding-set-smooth-extension",
          "lem-gr-compact-past-above-cauchy-set", "lem-gr-geodesic-extension-from-compact-length",
          "lem-gr-boundary-null-geodesic-segment", "lem-gr-exposed-boundary-point",
          "lem-gr-time-separation-maximizers", "lem-gr-spacelike-restart-hypersurface",
          "lem-gr-partial-cauchy-development", "lem-gr-no-corresponding-boundary-points",
          "lem-gr-intersection-of-developments", "lem-gr-development-pair-gluing",
          "lem-gr-universal-development", "lem-gr-development-quotient-dense-set",
          "lem-gr-development-quotient-second-countable",
          "thm-gr-smooth-maximal-globally-hyperbolic-development", "pthm-gr-smooth-maximal-development",
          "rem-gr-mghd-scope"]
examples: []
---

This page carries the complete local closure of the smooth maximal-development
theorem along Sbierski's dezornification route. It develops, from a single
entry point, the definitions of developments and data-fixing isometries, the
rigidity of isometric immersions, the maximal common development (MCD) of two
developments and the analysis of its corresponding boundary points, the
gluing of two developments along the MCD, the universal development of a
family of developments, and the second countability of the total quotient by
an explicit countable dense set. The closing physics theorem records the
conditional model deduction; every other item is mathematics.

**Developments, rigidity and the MCD.** The solution class is fixed in
[[def-gr-development-and-data-fixing-isometry]] (developments, data-fixing
isometries, development embeddings, maximality) and
[[def-gr-common-subdevelopment-and-corresponding-boundary]] (common
subdevelopments, maximal common developments, corresponding boundary points,
and their side of the initial surface). The two structural inputs are the
rigidity of isometric immersions of a connected Lorentzian manifold,
[[lem-gr-isometric-immersion-rigidity]] with the agreement clauses on the
initial surface, and its consequence that a data-fixing isometric immersion
of developments is automatically an embedding,
[[lem-gr-data-fixing-immersion-is-embedding]]. Causal convexity of a
subdevelopment sharing the initial Cauchy surface is
[[lem-gr-subdevelopment-convexity]], the portion-inextendibility device is
[[lem-gr-portion-inextendibility]], and the existence and uniqueness of the
MCD is [[lem-gr-maximal-common-development]]. The intersection of two
developments sharing the initial surface is again a development,
[[lem-gr-intersection-of-developments]].

**Corresponding boundary structure.** The boundary analysis proceeds through
[[lem-gr-corresponding-boundary-structure]] (chronology openness, achronality
of the boundary, and uniqueness of the corresponding point),
[[lem-gr-corresponding-set-smooth-extension]] (the corresponding set is open
in the boundary and the embedding extends smoothly, with the batch's explicit
corrections recorded in that item), the compactness input
[[lem-gr-compact-past-above-cauchy-set]], and the geodesic extension device
[[lem-gr-geodesic-extension-from-compact-length]] with
[[lem-gr-boundary-null-geodesic-segment]],
[[lem-gr-exposed-boundary-point]], [[lem-gr-time-separation-maximizers]] and
[[lem-gr-spacelike-restart-hypersurface]], which together show that a
nonempty corresponding set forces a spacelike restart hypersurface and hence
a strictly larger common development. The endpoint of this chain,
[[lem-gr-no-corresponding-boundary-points]], is Sbierski's Theorems 3.6 and
3.13: the MCD has empty corresponding set. The full topological partial-Cauchy toolkit is supplied separately by [[lem-gr-partial-cauchy-development]]. The restart comparison uses intrinsic smooth Cauchy neighborhoods of the whole surface and its image.

**Gluing and the universal development.** The pair quotient
[[lem-gr-development-pair-gluing]] glues two developments along their MCD
into a development containing both; [[lem-gr-universal-development]] glues the
whole family of canonical developments into one Hausdorff smooth development
which absorbs every development by a data-fixing development embedding, and
proves second countability before constructing a global representative of the common future cones by a partition of unity. The standalone dense-set recursion [[lem-gr-development-quotient-dense-set]] and the
rational-exponential basis lemma
[[lem-gr-development-quotient-second-countable]] also give separately reusable explicit countable constructions, using rational translated tangent balls on which the exponential is a diffeomorphism. The
maximal globally hyperbolic development theorem itself, with its uniqueness
clause and the universal property of the maximal development, is
[[thm-gr-smooth-maximal-globally-hyperbolic-development]].

**Physics packaging.** [[pthm-gr-smooth-maximal-development]] states the
conditional model deduction: within the adopted framework postulates, the
Einstein-matter initial-value problem for one fixed admissible covariant coupled model with complete constrained data and actual local existence/geometric uniqueness/restart hypotheses has a maximal development, unique up to a unique data-fixing isometry, which is
globally hyperbolic. [[rem-gr-mghd-scope]] records the scope qualifications:
the theorem is a conditional consequence of the adopted postulates, it makes
no empirical claim. Vacuum, scalar, strict barotropic fluid and nonnegative tilted geodesic dust with independently prescribed zero-density velocity are included; additional fixed models require the same actual mathematical obligations and explicitly adopted matter premises. Its hypotheses (constraint-satisfying data, the
complete compatible matter data, the stated regularity and actual model admissibility) are not asserted to hold of nature.

The page uses the Axiom of Countable Choice for the countable atlas and
dense-set selections and Dependent Choice where the constructions recurse;
no other choice principle is used, and no item reaches any deferred
set-theoretic material. The worked examples on the companion page
[[gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples]] instantiate the maximal development, the common
development, the restart hypersurface and the countable basis in Minkowski
spacetime.
