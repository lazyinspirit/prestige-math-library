---
requires: ["gr-einstein-and-matter",
           "absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus",
           "bounded-variation-and-riemann-stieltjes",
           "compactness",
           "lie-subgroups-actions-and-homogeneous-spaces"]
page: gr-causal-and-initial-value-boundaries
title: "Causal And Initial Value Boundaries"
status: draft
library: physics
items: [def-gr-causal-curves-and-reachability,
        lem-gr-causal-curve-calculus,
        def-gr-causal-conditions-and-global-hyperbolicity,
        lem-gr-temporal-functions-and-time-functions,
        def-gr-spacelike-hypersurfaces-and-cauchy-sets,
        def-gr-spacelike-initial-data-and-constraints,
        lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form,
        lem-gr-constraint-projections,
        def-gr-geodesic-congruence-and-kinematics,
        lem-gr-kinematic-decomposition-identities,
        lem-gr-contracted-commutator-identity,
        thm-gr-timelike-raychaudhuri-and-local-focusing,
        lem-gr-maximal-geodesics-and-extension,
        lem-gr-constant-component-chart-flatness,
        def-gr-flat-minkowski-model-and-inertial-charts,
        lem-gr-flat-inertial-cone-criterion-and-sums,
        lem-gr-flat-time-monotonicity-and-lipschitz-graphs,
        thm-gr-minkowski-cauchy-and-global-hyperbolicity,
        lem-gr-quotient-by-isometric-free-proper-action,
        thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set,
        thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice,
        rem-gr-causal-and-initial-value-scope]
examples: []
---

This page develops the causal geometry of a time-oriented smooth Lorentzian
four-manifold and the initial-value vocabulary used by the classical
gravitational framework: the causal ladder, Cauchy sets and domains of
dependence, spacelike initial data with the constraint equations, and the
local focusing of geodesic congruences. All twenty-two items are mathematics —
conditional deductions inside the stated models — except the closing remark,
which is a physics scope and status note. No item reports a measurement, and
none asserts that a model describes nature.

**Causal curves and the causal ladder.** Locally absolutely continuous
curves with future causal velocity almost everywhere, chronological and
causal reachability, and future/past inextendibility are fixed in
[[def-gr-causal-curves-and-reachability]]; chart independence, concatenation,
reparametrization invariance, the transitivity of $\le$ and the smooth
composition rule are proved in [[lem-gr-causal-curve-calculus]]. The
conditions chronological, causal, strongly causal, globally hyperbolic
(strong causality plus compact causal diamonds), time function and temporal
function are defined in [[def-gr-causal-conditions-and-global-hyperbolicity]].
That a temporal function is a time function, that its level sets are achronal
and that a time function excludes closed causal curves is
[[lem-gr-temporal-functions-and-time-functions]]. Convergent causal ends are
extendible, maximal geodesics have no limit point, every causal segment lies
on an inextendible causal curve and Cauchy sets are acausal:
[[lem-gr-maximal-geodesics-and-extension]].

**Flat models.** Constant component charts have vanishing metric-selected
Christoffel symbols and curvature ([[lem-gr-constant-component-chart-flatness]]).
The flat model of the page is fixed locally: $\mathbb R^4$ with the constant
Lorentz form $\eta=\operatorname{diag}(-1,1,1,1)$, the future-directed
coordinate field $N=\partial_0$, global inertial charts, translations,
displacements and the cone sets $C^+,\overline{C^+}$ are defined in
[[def-gr-flat-minkowski-model-and-inertial-charts]], and the coordinate
criterion for the causal cones together with closure of the future cone under
sums is proved in [[lem-gr-flat-inertial-cone-criterion-and-sums]]. In this
model the inertial time coordinate is strictly increasing
along causal curves, which have $1$-Lipschitz spatial graphs, and is a
temporal function ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]]);
the inertial level sets are Cauchy hypersurfaces, all causal diamonds are
compact and the model is globally hyperbolic
([[thm-gr-minkowski-cauchy-and-global-hyperbolicity]]). Quotients by free
proper isometric discrete actions descend the metric and a time orientation
([[lem-gr-quotient-by-isometric-free-proper-action]]); the flat cylinder
$(\mathbb R/L\mathbb Z)\times\mathbb R^3$ has a closed timelike curve, is
totally vicious and admits no Cauchy set
([[thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set]]). The open flat
slab $(0,1)\times\mathbb R^3$ is globally hyperbolic with Cauchy slice
$x^0=1/2$, yet its vertical lines reach the absent boundary after finite
affine parameter: flatness, time orientation and global hyperbolicity do not
imply geodesic completeness
([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]]).

**Initial data and constraints.** Spacelike embedded hypersurfaces, achronal
and acausal sets, Cauchy sets, domains of dependence and Cauchy horizons are
defined in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]];
[[def-gr-spacelike-initial-data-and-constraints]] fixes initial data
$(\Sigma,h,K,\rho,j)$, the constraint equations as the normal and
normal-tangential projections of the field equation, and the notions of
development and maximal globally hyperbolic development, without asserting
existence or uniqueness. The future unit normal, the induced metric and the
second fundamental form with its symmetry and shape operator are constructed
in [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], and
[[lem-gr-constraint-projections]] proves that the data induced by a solution
of the field equation satisfy the constraints.

**Focusing.** Geodesic congruences and their expansion, shear and vorticity
are defined in [[def-gr-geodesic-congruence-and-kinematics]]; the rest-space
identities and the double contraction of the Weingarten map are
[[lem-gr-kinematic-decomposition-identities]], the curvature commutator
identity is [[lem-gr-contracted-commutator-identity]], and
[[thm-gr-timelike-raychaudhuri-and-local-focusing]] proves the Raychaudhuri
equation and the finite-time focusing bound for an irrotational congruence
with nonnegative normal Ricci curvature.

**Scope.** [[rem-gr-causal-and-initial-value-scope]] separates the
mathematical model conditions from their physical reading, records that the
equivalences of global hyperbolicity with the Cauchy and smooth-splitting
formulations, the existence and uniqueness theory for the Einstein-matter
initial value problem and the singularity theorems are deferred to the later
pages of the track, and states that the page contains no measurement or
empirical premise.
