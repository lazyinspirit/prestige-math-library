---
page: picard-lindelof-and-first-order-odes
title: "Picard-Lindelöf and First-Order Ordinary Differential Equations"
status: draft
items: [def-first-order-ode-initial-value-problem-and-solution,
        def-locally-lipschitz-in-the-state-variable,
        prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation,
        def-picard-operator-and-picard-iterates,
        lem-vector-valued-continuous-curve-space-is-complete,
        lem-picard-operator-preserves-a-closed-curve-ball,
        lem-picard-operator-is-a-short-time-contraction,
        thm-picard-lindelof-local-existence-and-uniqueness,
        cor-uniform-picard-lindelof-for-nearby-initial-values,
        lem-weissinger-fixed-point-criterion,
        prop-picard-iteration-converges-with-explicit-error-bounds,
        thm-gronwall-integral-inequality,
        cor-lipschitz-ode-uniqueness-and-stability-estimate,
        thm-continuous-dependence-of-odes-on-initial-data-and-parameters,
        def-maximal-ode-solution,
        lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps,
        thm-existence-and-uniqueness-of-a-maximal-ode-solution,
        lem-ode-extension-from-a-compact-interior-region,
        cor-finite-maximal-time-forces-escape-from-every-compact-set,
        cor-globally-lipschitz-odes-have-global-solutions,
        thm-first-order-linear-ode-integrating-factor,
        lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous,
        lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence,
        thm-peano-local-existence-for-continuous-odes,
        def-modulus-of-continuity-and-osgood-condition,
        thm-osgood-uniqueness-criterion-for-first-order-odes]
examples: []
---

The vector-valued fundamental theorems of calculus turn a differentiable initial value problem into a Volterra integral equation and recover a derivative from a continuous integral. Completeness in the supremum metric and compactness criteria for equicontinuous families provide the fixed-point and subsequence settings used below. Finite-endpoint improper integrals also express the divergence condition in Osgood's uniqueness criterion.

A local state-Lipschitz condition makes the Picard operator contract on a sufficiently short closed curve ball, giving Picard-Lindelof existence, uniqueness, and explicit iteration errors. Gronwall's inequality yields stability and continuous dependence. Compatible local solutions glue to a unique maximal solution, whose finite endpoints force escape from compact subsets, while global Lipschitz control rules out such escape. Euler polygonal approximations prove Peano existence under continuity alone, and Osgood's condition supplies a uniqueness hypothesis weaker than a Lipschitz bound.
