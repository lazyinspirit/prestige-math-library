---
page: partial-differential-equations-and-characteristics
title: "Partial Differential Equations and Characteristics"
status: draft
items: [def-partial-differential-operator-order-and-solution,
        def-linear-semilinear-quasilinear-and-fully-nonlinear-pde,
        def-principal-part-and-principal-symbol-of-a-scalar-pde,
        lem-principal-symbol-under-a-c-one-coordinate-change,
        def-characteristic-covector-hypersurface-and-noncharacteristic-data,
        lem-characteristic-hypersurface-is-independent-of-defining-function,
        def-elliptic-hyperbolic-and-parabolic-principal-symbols,
        thm-symmetric-principal-part-has-a-signature-normal-form,
        def-two-variable-second-order-discriminant,
        thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant,
        thm-two-variable-constant-coefficient-canonical-principal-forms,
        rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy,
        def-linear-transport-equation-and-its-characteristic-flow,
        lem-transport-equation-along-a-characteristic,
        lem-transport-characteristics-depend-c-one-on-initial-position,
        thm-homogeneous-linear-transport-by-the-flow,
        thm-inhomogeneous-linear-transport-formula,
        def-noncharacteristic-first-order-cauchy-surface,
        thm-local-linear-transport-cauchy-problem,
        cor-support-propagates-along-transport-characteristics,
        rem-characteristics-are-covectors-before-they-are-curves]
examples: []
---

This page introduces PDE language in the scalar classical setting, isolates the
principal symbol as the coordinate-stable part of the highest-order operator,
and uses it to define characteristic covectors and the second-order
elliptic/parabolic/hyperbolic trichotomy. In two variables, the discriminant
and characteristic directions recover the familiar pointwise type test, while
constant coefficients admit the standard linear canonical forms and the page
records exactly where that reduction stops.

The second half develops linear transport by characteristics. The chain rule
reduces the PDE to a scalar ODE along each characteristic, the inverse flow
gives the homogeneous and inhomogeneous formulas, and a local $C^1$
dependence-on-initial-position lemma supplies the transversality argument for
the noncharacteristic Cauchy problem.
