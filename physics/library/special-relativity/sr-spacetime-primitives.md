---
page: sr-spacetime-primitives
title: "Spacetime Primitives"
status: published
library: physics
items: [def-affine-space-and-displacement,
        def-lorentz-form-and-inertia,
        def-causal-classification-of-lorentz-vectors,
        lem-lorentz-form-has-orthonormal-basis,
        def-lorentz-orthogonality-and-orthogonal-complement,
        def-time-orientation-and-future-causal-sets,
        lem-timelike-cone-has-two-convex-components,
        def-sr-affine-minkowski-model,
        def-inertial-frame-and-inertial-chart,
        lem-future-oriented-inertial-frames-exist,
        def-oriented-minkowski-volume-form,
        lem-volume-form-is-independent-of-the-oriented-frame,
        def-sr-si-units-and-coordinate-conventions,
        post-sr-inertial-covariance,
        post-sr-ideal-clocks-and-light,
        def-spatial-euclidean-structure-of-an-inertial-frame,
        lem-affine-minkowski-charts-form-a-smooth-atlas,
        lem-tangent-space-of-affine-minkowski-space-is-v,
        rem-sr-primitive-and-derived-status]
examples: []
---

The page fixes the mathematical primitives of the flat classical
special-relativity framework before any physical law is stated. An affine space
and its displacement vectors are defined over a real vector space
([[def-affine-space-and-displacement]]), and a Lorentz form of inertia
$(3,1,0)$ with its causal classification, orthogonality and time-orientation
structure is developed on the vector space ([[def-lorentz-form-and-inertia]],
[[def-causal-classification-of-lorentz-vectors]],
[[def-lorentz-orthogonality-and-orthogonal-complement]],
[[def-time-orientation-and-future-causal-sets]]). Sylvester's law supplies
$\eta$-orthonormal bases ([[lem-lorentz-form-has-orthonormal-basis]]), and in
such coordinates the timelike set is proved to have exactly two convex
components whose closed cones meet only at $0$
([[lem-timelike-cone-has-two-convex-components]]); that lemma is what makes the
choice of a time orientation well posed.

The model itself is the quadruple of an oriented time-oriented affine Minkowski
space ([[def-sr-affine-minkowski-model]]), on which inertial frames and their
charts are defined and proved to exist at every event
([[def-inertial-frame-and-inertial-chart]],
[[lem-future-oriented-inertial-frames-exist]]). The oriented volume form and
its component conventions ([[def-oriented-minkowski-volume-form]],
[[lem-volume-form-is-independent-of-the-oriented-frame]]), the SI coordinate
and unit conventions with the conversion constant $c$
([[def-sr-si-units-and-coordinate-conventions]]), and the Euclidean spatial
structure of a named inertial frame
([[def-spatial-euclidean-structure-of-an-inertial-frame]]) are then
constructed. The one-chart affine atlas makes the model a smooth $4$-manifold
diffeomorphic to $\mathbb R^4$, and the tangent space at each event is
canonically $V$ ([[lem-affine-minkowski-charts-form-a-smooth-atlas]],
[[lem-tangent-space-of-affine-minkowski-space-is-v]]).

Two physical assumptions are adopted explicitly rather than deduced: the
spacetime interpretation with covariance of the framework's model equations
under future- and orientation-preserving affine isometries
([[post-sr-inertial-covariance]]), and the ideal-clock and ideal-vacuum-light
interpretation with its clock reading rule and geometric ray scope
([[post-sr-ideal-clocks-and-light]]). The final item audits which notions are
primitive, which are adopted, and which are constructed
([[rem-sr-primitive-and-derived-status]]); the worked examples and
counterexamples of the pair are collected on
[[sr-spacetime-primitives-examples]].
