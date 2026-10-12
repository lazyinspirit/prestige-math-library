---
requires: ["countability-and-uncountability","dual-spaces-bilinear-forms-and-inertia","linear-independence-bases-and-dimension","rn-as-a-normed-space","the-inverse-function-theorem-completed","the-total-derivative","vector-fields-flows-and-lie-derivatives","connectedness","inner-product-spaces-and-orthogonality","matrices-and-the-matrix-of-a-linear-map","smooth-manifolds-and-smooth-maps","tangent-cotangent-and-the-differential","the-determinant-of-a-linear-operator","topological-spaces-and-continuity","connections-levi-civita-and-parallel-transport","sr-spacetime-primitives"]
page: gr-framework-and-geometry
title: "Framework And Geometry"
status: draft
library: physics
items: [def-gr-smooth-covariant-two-tensor-field,
        lem-gr-covariant-two-tensor-transformation-law,
        def-gr-smooth-lorentzian-objects,
        def-gr-inverse-metric-and-musical-isomorphisms,
        lem-gr-inverse-metric-is-smooth,
        def-gr-metric-selected-connection,
        def-gr-si-unit-and-coordinate-conventions,
        lem-gr-future-causal-classification-by-a-timelike-field,
        lem-gr-connection-conditions-in-chart-components,
        def-gr-stress-energy-tensor-field,
        def-gr-energy-conditions,
        lem-gr-timelike-fields-define-equal-or-opposite-future-cones,
        post-gr-spacetime-and-classical-domain,
        post-gr-field-and-matter-assumptions,
        rem-gr-primitive-and-derived-status]
examples: []
---

The page fixes the geometric arena of the classical gravitational framework
before any field law or matter model is stated. The tensor class is made
explicit first: a smooth covariant $2$-tensor field on a smooth manifold is a
family of bilinear forms on the tangent spaces whose components in every smooth
chart are $C^\infty$, and the smoothness requirement is proved independent of
the chart used, together with the transformation law relating components in
overlapping charts
([[def-gr-smooth-covariant-two-tensor-field]],
[[lem-gr-covariant-two-tensor-transformation-law]]). The model's geometry is
then the triple of a smooth boundaryless four-manifold, a Lorentzian metric $g$
of signature $(-,+,+,+)$ — a smooth symmetric nondegenerate field whose
pointwise forms have inertia $(3,1,0)$, with orthonormal bases supplied by the
Lorentz form theory — and a time orientation, a smooth nowhere-zero timelike
vector field $N$ ([[def-gr-smooth-lorentzian-objects]]).

The causal structure of the model is the pointwise classification of tangent
vectors by the sign of $g_p(v,v)$ together with the two-component timelike
cone at each point. The page proves that a nonzero causal vector has nonzero
pairing with every timelike field, that the component containing $N_p$ is
exactly the set of timelike $v$ with $g_p(v,N_p)<0$, and that the
future-directed causal vectors are precisely the nonzero elements of the
closure of that component
([[lem-gr-future-causal-classification-by-a-timelike-field]]); two time
orientations therefore agree or are opposite on each connected set
([[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]). The inverse
metric, the musical isomorphisms, index raising and the metric trace are
defined pointwise, with smoothness and the contravariant transformation law of
the components proved rather than assumed
([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[lem-gr-inverse-metric-is-smooth]]), and the SI unit conventions fix the
dimensions of coordinates, components and the constants $c$, $G_N$ and
$\Lambda$ without asserting any measured value
([[def-gr-si-unit-and-coordinate-conventions]]).

For the connection the page defines, rather than assumes, the structure that
conventional general relativity uses: a connection is $g$-compatible when it
satisfies the Leibniz identity for the metric, torsion-free when its torsion
tensor vanishes, and metric-selected when both hold. Its complete local Koszul proof constructs the unique element of this class,
defines its curvature and the Ricci and scalar contractions, and leaves the
full tensor-derivative extension and curvature symmetries to their later
mathematical treatment. Smooth future timelike curves, their proper-time
normalization and four-velocity are also defined and proved well defined
here before the SI reading. The page proves
the equivalent component forms of both conditions in a chart and the
independence of torsion freedom from compatibility by an explicit
counterexample
([[def-gr-metric-selected-connection]],
[[lem-gr-connection-conditions-in-chart-components]]).

Two postulates are adopted explicitly and separated from the mathematics. The
spacetime postulate adopts the smooth time-oriented Lorentzian four-manifold as
the classical arena of a model, with its classical-continuum and
smooth-branch domain and its four-dimensional, boundaryless restrictions
([[post-gr-spacetime-and-classical-domain]]). The matter postulate records
that a model's nongravitational fields, their equations and couplings, and its
stress-energy tensor are model input occupying the smooth symmetric tensor
slot defined here, with on-shell conservation and consistency left to the
adopted field law and with the weak, null, dominant and strong energy
conditions available only as additional adopted assumptions
([[def-gr-stress-energy-tensor-field]], [[def-gr-energy-conditions]],
[[post-gr-field-and-matter-assumptions]]). A closing audit records which
notions are primitive, adopted, constructed, or explicitly not claimed on this
page ([[rem-gr-primitive-and-derived-status]]); the worked examples and
counterexamples of the pair are collected on
[[gr-framework-and-geometry-examples]].
