---
page: the-maximal-function-and-lebesgue-differentiation
title: "The Maximal Function and Lebesgue Differentiation"
status: draft
items: [def-locally-integrable-function-on-r-n, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-ball-average-operator-on-r-n, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-sublinear-operator-weak-and-strong-type-p-q, def-lebesgue-point-and-lebesgue-set, def-density-of-a-measurable-set-at-a-point, def-family-shrinking-nicely-to-a-point, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates, prop-ball-average-is-continuous-in-centre-and-radius, thm-centered-hardy-littlewood-maximal-function-is-borel-measurable, prop-centered-and-uncentered-maximal-functions-are-comparable, thm-hardy-littlewood-maximal-inequality-for-balls, prop-hardy-littlewood-maximal-function-is-l-infinity-bounded, thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity, cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, thm-riesz-thorin-interpolation, lem-continuous-compactly-supported-functions-differentiate-by-ball-averages, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-almost-every-point-is-a-lebesgue-point, thm-lebesgue-density-theorem, thm-differentiation-along-families-shrinking-nicely, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, thm-first-fundamental-theorem-of-calculus-for-l-one, cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one]
examples: []
---

This page builds the Euclidean maximal-function and differentiation package in
the route fixed by the MT-17 design. Ball averages and the centered and
uncentered maximal functions are defined separately, measurability of the
centered maximal function is proved as a theorem rather than treated as obvious,
and the weak `(1,1)` estimate keeps the honest `5^n` constant from the Vitali
selection argument.

The second half of the page turns the maximal inequality into differentiation:
continuous compactly supported functions differentiate first, then the full
Lebesgue differentiation theorem follows by density and error-set control, and
the page closes with Lebesgue points, density points, nicely shrinking
families, differentiation of measures, and the `L^1` first fundamental theorem
of calculus. In the current library route, the measure-theoretic parts of this
package inherit the Axiom of Countable Choice from the published Lebesgue
measure regularity and density inputs they cite.
