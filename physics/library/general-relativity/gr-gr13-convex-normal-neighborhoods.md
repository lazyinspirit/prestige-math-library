---
requires:
  - measurable-densities-and-radon-volume-on-manifolds
  - absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus
  - compactness-in-metric-spaces
  - completeness-and-uniform-continuity
  - euclidean-ordinary-differential-equations-with-smooth-dependence
  - geodesics-the-exponential-map-completeness-and-hopf-rinow
  - measures-and-their-basic-properties
  - picard-lindelof-and-first-order-odes
  - product-measures-and-the-fubini-tonelli-theorems
  - properties-of-the-integral-and-the-working-ftc
  - rank-theorems-and-embedded-submanifolds
  - the-lebesgue-integral-and-the-convergence-theorems
  - the-maximal-function-and-lebesgue-differentiation
  - uniform-convergence-of-functions
  - compactness
  - measurable-functions-and-simple-approximation
  - monotone-sequences-and-cauchy-completeness
  - smooth-partitions-of-unity-and-exhaustions
  - the-logarithm-and-general-powers
  - topology-of-r
  - bounded-variation-and-riemann-stieltjes
  - convexity
  - darboux-lhopital-and-taylor
  - riemannian-metrics-length-distance-and-volume
  - gr-causal-and-initial-value-boundaries
  - sr-proper-time-comparisons
  - gr-framework-and-geometry
  - gr-einstein-and-matter
  - gr-tensors-and-observers
  - gr-connections-and-free-fall
page: gr-gr13-convex-normal-neighborhoods
title: "Gr13 Convex Normal Neighborhoods"
status: draft
library: physics
items:
  - lem-gr-maximal-flow-escape
  - lem-gr-lipschitz-family-limit-subsequence
  - lem-gr-finite-smooth-volume-density
  - lem-gr-dominating-cone-bounds
  - thm-gr-auxiliary-complete-riemannian-metric
  - def-gr-future-and-past-sets
  - lem-gr-strong-causality-compact-length-bound
  - lem-gr-strong-causality-escape-sequence
  - lem-gr-joint-exponential-diffeomorphism
  - lem-gr-coordinate-ball-geodesic-convexity
  - lem-gr-contained-geodesic-velocity-bound
  - def-gr-normal-neighborhoods-and-position-vectors
  - thm-gr-convex-normal-neighborhoods
  - lem-gr-position-vector-differential
  - lem-gr-normal-neighborhood-length-monotonicity
  - lem-gr-causal-curve-initial-cone-step
  - thm-gr-normal-neighborhood-causal-cone
  - lem-gr-null-position-vector-forces-null-velocity
  - thm-gr-length-upper-semicontinuity
  - lem-gr-convex-normal-causality
  - lem-gr-causal-curve-conventions
  - lem-gr-chronology-openness
  - lem-gr-basic-limit-curve
  - lem-gr-achronal-boundaries-lipschitz-graphs
  - lem-gr-push-up-rule
  - lem-gr-cauchy-set-topology-and-graph
  - thm-gr-limit-curve-two-endpoints
  - thm-gr-cauchy-surface-implies-globally-hyperbolic
  - lem-gr-globally-hyperbolic-causal-structure
  - lem-gr-chronological-volume-continuity
  - lem-gr-local-cauchy-neighborhood
  - thm-gr-volume-time-function
  - lem-gr-compact-future-cone-intersections
  - lem-gr-cone-bump-functions
  - lem-gr-locally-finite-shell-sum
  - lem-gr-strip-weak-steps
  - thm-gr-smooth-cauchy-temporal-splitting
  - rem-gr-convex-normal-neighborhoods-scope
examples: []
---

This page develops the local and global Cauchy structure of a smooth
time-oriented Lorentzian four-manifold: strictly convex normal neighborhoods
and the local causality inside them, the auxiliary complete Riemannian metric
and the limit-curve machinery, the equivalence of the Cauchy-set property with
global hyperbolicity, the Geroch volume time function with its Cauchy levels,
and the smooth Cauchy temporal splitting with its complete orthogonal flow.
The mathematical items give definitions and conditional deductions inside
the stated models; the exception is the closing remark [[rem-gr-convex-normal-neighborhoods-scope]], which
is a physics scope and status note. No item reports a measurement, and none
asserts that a model describes nature.

**Convex normal neighborhoods.** The position vector, the squared-displacement
function and the two-point inverse velocity of a normal neighborhood are fixed
in [[def-gr-normal-neighborhoods-and-position-vectors]]; smoothness of the
joint exponential map, the invertibility of its differential on the diagonal
and the small-velocity two-point inverse are
[[lem-gr-joint-exponential-diffeomorphism]]. The convexity of the Euclidean
radius function along geodesics and the speed bounds for contained geodesic
segments ([[lem-gr-coordinate-ball-geodesic-convexity]],
[[lem-gr-contained-geodesic-velocity-bound]]) yield the existence of
arbitrarily small strictly convex normal neighborhoods in
[[thm-gr-convex-normal-neighborhoods]]. Inside them the local causal relation
is the exponential cone, the Lorentzian length is bounded by the displacement
radius and null endpoints force the null geodesic
([[thm-gr-normal-neighborhood-causal-cone]], with the differential of the
displacement and the length monotonicity supplied by
[[lem-gr-position-vector-differential]],
[[lem-gr-normal-neighborhood-length-monotonicity]],
[[lem-gr-null-position-vector-forces-null-velocity]], and the corner and
distinguishing properties in [[lem-gr-convex-normal-causality]],
[[lem-gr-causal-curve-initial-cone-step]]).

**Auxiliary metric, limit curves and length.** The auxiliary complete
Riemannian metric $h'$ and the properness of its distance are
[[thm-gr-auxiliary-complete-riemannian-metric]]; cone domination in adapted
charts gives the Lipschitz graph bounds of [[lem-gr-dominating-cone-bounds]].
The basic limit-curve lemma and the two-endpoint limit-curve theorem
([[lem-gr-basic-limit-curve]], [[thm-gr-limit-curve-two-endpoints]]) rest on
the arclength conventions of [[lem-gr-causal-curve-conventions]] and the
local cone and chronology results. The two-endpoint bounded case uses the
explicit normalized common-domain curves. Independently,
[[thm-gr-length-upper-semicontinuity]] proves refinement convergence even
for independently varying normal balls and upper semicontinuity of length. Strong causality
bounds the auxiliary length of causal curves inside a compact set
([[lem-gr-strong-causality-compact-length-bound]], with the escape sequence
characterization of its failure in
[[lem-gr-strong-causality-escape-sequence]]), and the push-up rule together
with its timelike-piece criterion is [[lem-gr-push-up-rule]].

**Cauchy sets and global hyperbolicity.** A Cauchy set is closed, splits the
manifold into its chronological past, the set and its chronological future,
and is a locally Lipschitz topological hypersurface
([[lem-gr-cauchy-set-topology-and-graph]], [[def-gr-future-and-past-sets]],
[[lem-gr-achronal-boundaries-lipschitz-graphs]]); the existence of a Cauchy
set implies strong causality and compact causal diamonds
([[thm-gr-cauchy-surface-implies-globally-hyperbolic]]), so a Cauchy set is
equivalent to global hyperbolicity in the sense used here. In a globally
hyperbolic manifold the causal relation is closed and truncated causal cones
over compact sets are compact
([[lem-gr-globally-hyperbolic-causal-structure]]), which yields the local
Cauchy neighborhoods in a conically bounded product chart
([[lem-gr-local-cauchy-neighborhood]]) and the compact cone intersections
$J^+(K)\cap J^-(S_b)$ of [[lem-gr-compact-future-cone-intersections]].

**Volume time and smooth temporal splitting.** A positive smooth density of
total mass one and its measure are constructed in
[[lem-gr-finite-smooth-volume-density]]; the chronological volume functions
are continuous and strictly monotone
([[lem-gr-chronological-volume-continuity]]), and the Geroch volume function
is a continuous strictly increasing time function whose every level is a
Cauchy set ([[thm-gr-volume-time-function]]). Locally finite sums of cone
bumps produce weak steps with past timelike gradient near each Cauchy level
([[lem-gr-cone-bump-functions]], [[lem-gr-locally-finite-shell-sum]]);
averaging finitely many weak steps over a compact slice and summing the
resulting strip functions gives [[lem-gr-strip-weak-steps]], and the paired
strip series is a smooth temporal function with Cauchy levels, complete
gradient flow and orthogonal product splitting
([[thm-gr-smooth-cauchy-temporal-splitting]], using the manifold flow escape
lemma [[lem-gr-maximal-flow-escape]] and the Lipschitz-family subsequence
lemma [[lem-gr-lipschitz-family-limit-subsequence]]).

The volume-time and smooth-splitting constructions assume global
hyperbolicity; the auxiliary metric, local causal calculus and limit-curve
results carry their own stated hypotheses; the page asserts no existence, uniqueness or stability of
solutions of the field equations, which belongs to the later GR14 and GR15
pages. The scope note [[rem-gr-convex-normal-neighborhoods-scope]] records
the mathematical scope, the optional interpretations requiring separate
adoption, and the deferred field-equation existence theorems.
