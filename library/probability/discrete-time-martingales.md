---
page: "discrete-time-martingales"
title: "Discrete Time Martingales"
status: published
items: ["def-filtration-and-filtered-probability-space", "def-adapted-and-integrable-stochastic-process", "def-natural-filtration-of-a-process", "def-martingale-submartingale-and-supermartingale", "lem-multistep-martingale-characterization", "lem-conditional-expectation-process-is-a-martingale", "def-martingale-difference-sequence", "thm-martingales-and-martingale-differences-correspond", "lem-martingale-differences-are-orthogonal-in-l2", "thm-convex-functions-of-martingales-are-submartingales", "cor-absolute-value-and-powers-of-a-martingale-are-submartingales", "def-predictable-discrete-time-process", "def-discrete-martingale-transform", "thm-bounded-predictable-transforms-preserve-martingales", "cor-nonnegative-predictable-transforms-preserve-submartingale-gains", "def-compensator-and-doob-decomposition", "thm-doob-decomposition-of-an-integrable-adapted-process", "cor-submartingale-doob-decomposition-has-increasing-compensator", "def-predictable-quadratic-variation-in-discrete-time", "thm-square-minus-predictable-quadratic-variation-is-a-martingale", "cor-second-moment-is-the-expected-predictable-quadratic-variation"]
examples: []
---

A filtration records the information available at each nonnegative integer time. This page defines adaptedness, integrability and the three martingale signs separately, then proves the equivalence of adjacent-time and all-pairs conditional identities. Conditional expectations are almost-sure classes; AC is stated where inherited from their Radon–Nikodym existence proof or used to select countably many measurable versions.

Martingale differences turn the conditional fairness condition into a statement about increments. Their square-integrable products are shown integrable before conditioning, yielding orthogonality. Conditional Jensen gives convex submartingales with an explicit transformed-integrability hypothesis.

A predictable transform is defined only when every product increment is integrable. Timewise bounds suffice, and the preservation proof also covers the full integrable-product domain. The Doob decomposition separates an integrable adapted process into a martingale and a predictable compensator normalized to zero initially. Its uniqueness includes a single measurable null set for all times. The compensator is increasing exactly for submartingales.

Predictable quadratic variation sums conditional squared increments and differs from the optional sum of actual squared increments. The square-minus-bracket theorem allows a random initial variable, and centering by that known variable proves the zero-initial version separately. Every result concerns finite times; convergence and maximal inequalities require their further arguments.
