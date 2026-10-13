---
requires:
- gr-gr14-full-high-regularity-symmetric-hyperbolic-proof
- the-zfc-axioms-and-basic-set-constructions
- whitney-embedding-tubular-neighbourhoods-and-approximation
- gr-framework-and-geometry
- gr-causal-and-initial-value-boundaries
- gr-einstein-and-matter
- gr-gr13-convex-normal-neighborhoods
- gr-connections-and-free-fall
page: gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability
title: Gr15 Exact Checked Sbierski Smooth Mghd Proof With Complete Local Prerequisites And Quotient Second Countability
status: draft
library: physics
items:
- def-gr-development-and-data-fixing-isometry
- def-gr-common-subdevelopment-and-corresponding-boundary
- lem-gr-subdevelopment-convexity
- lem-gr-portion-inextendibility
- lem-gr-isometric-immersion-rigidity
- lem-gr-data-fixing-immersion-is-embedding
- lem-gr-maximal-common-development
- lem-gr-corresponding-boundary-structure
- lem-gr-corresponding-set-smooth-extension
- lem-gr-compact-past-above-cauchy-set
- lem-gr-geodesic-extension-from-compact-length
- lem-gr-boundary-null-geodesic-segment
- lem-gr-exposed-boundary-point
- lem-gr-time-separation-maximizers
- lem-gr-spacelike-restart-hypersurface
- lem-gr-partial-cauchy-development
- lem-gr-past-corresponding-boundary-restart
- lem-gr-no-corresponding-boundary-points
- lem-gr-intersection-of-developments
- lem-gr-development-pair-gluing
- lem-gr-universal-development
- lem-gr-development-quotient-dense-set
- lem-gr-development-quotient-second-countable
- thm-gr-smooth-maximal-globally-hyperbolic-development
- pthm-gr-smooth-maximal-development
- rem-gr-mghd-scope
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
no other choice principle is used. The MCD and canonical-family constructions
also use Power Set and Separation from
[[the-zfc-axioms-and-basic-set-constructions]] to form sets of maps and
developments. The global boundary extension uses the proper Whitney
embedding, Euclidean tubular retraction and smooth partition-of-unity
suppliers of [[whitney-embedding-tubular-neighbourhoods-and-approximation]].
These are actual prerequisite inputs alongside the GR14 local-development
and restart results. The worked examples on the companion page
[[gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples]] instantiate the maximal development, the common
development, the restart hypersurface and the countable basis in Minkowski
spacetime.
