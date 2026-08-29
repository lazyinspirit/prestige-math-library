---
page: product-measures-and-the-fubini-tonelli-theorems
title: "Product Measures and the Fubini Tonelli Theorems"
status: draft
items: [def-measurable-rectangle, def-product-sigma-algebra-and-finite-product-sigma-algebras, lem-finite-rectangle-unions-form-a-generating-algebra, rem-caratheodory-also-constructs-the-product-measure, def-sections-of-sets-and-functions-on-products, thm-sections-of-product-measurable-sets-are-measurable, thm-sections-of-product-measurable-functions-are-measurable, fs-measurable-sections-imply-product-measurability, prop-sigma-finite-section-measure-functions-are-measurable, thm-iterated-section-measures-agree-on-product-measurable-sets, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, fs-product-measure-is-unique-without-sigma-finiteness, thm-tonelli-theorem-for-sigma-finite-product-spaces, fs-tonelli-holds-without-sigma-finiteness, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, rem-fubini-should-be-applied-after-tonelli-on-absolute-values, def-completed-product-measure, thm-tonelli-and-fubini-for-completed-product-measures, fs-completed-product-sections-are-measurable-for-every-parameter, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, rem-borel-product-equality-needs-second-countability, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, fs-product-of-complete-measure-spaces-is-complete, fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra, thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral, cor-graph-of-a-measurable-function-is-lebesgue-null, def-distribution-function-of-absolute-value, thm-layer-cake-formula-for-l-p-powers, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas, lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets, lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets, lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, cor-c-one-change-of-variables-for-l-one-functions, rem-finite-product-measures-are-the-base-case-for-countable-product-constructions]
examples: []
---

This page fixes the sigma-finite product-measure route used throughout the rest
of the measure-theory track: sections, the measurable-set and functional forms
of Tonelli and Fubini, the completed-product weakening, the Euclidean product
identifications, and the geometric payoffs that later pages reuse.

The false statements isolate the exact hypotheses that do real work:
sigma-finiteness for uniqueness and Tonelli, absolute integrability for
Fubini, completion for pointwise section measurability, and second countability
for the Euclidean Borel-product identification.
