---
page: modes-of-convergence-egorov-and-lusin
title: "Modes of Convergence Egorov and Lusin"
status: published
items: [def-convergence-almost-everywhere-relative-to-a-measure, def-convergence-in-measure, def-cauchy-in-measure, def-almost-uniform-convergence, def-convergence-in-l-one-of-a-measure, thm-convergence-in-measure-limits-are-unique-almost-everywhere, thm-l-one-convergence-implies-convergence-in-measure, fs-l-one-convergence-implies-almost-everywhere-convergence, thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure, thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces, fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space, prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces, thm-riesz-subsequence-theorem-for-convergence-in-measure, cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence, fs-convergence-in-measure-implies-almost-everywhere-convergence, thm-cauchy-in-measure-converges-in-measure, thm-egorovs-theorem, fs-egorovs-theorem-holds-on-every-measure-space, cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space, lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set, lem-simple-approximants-converge-uniformly-on-a-large-closed-set, thm-lusins-theorem, cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function, cor-bounded-domain-lusin-core-can-be-chosen-compact, fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set, def-uniformly-integrable-family, thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces, prop-dominated-families-are-uniformly-integrable, fs-uniform-integrability-implies-domination-by-an-integrable-function, def-tight-family-of-integrable-functions, thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces, cor-dominated-convergence-is-a-vitali-corollary, rem-finite-measure-implication-table-for-the-main-modes-of-convergence]
examples: []
---

This page fixes the core dictionary of measure-theoretic convergence modes used
later in the library: almost-everywhere convergence, convergence in measure,
almost uniform convergence, and convergence in $L^1$. It then proves the exact
finite-measure bridges among them, culminating in Riesz's subsequence theorem,
Egorov's theorem, Lusin's theorem, and the finite-measure form of Vitali's
convergence theorem.

The page is deliberately honest about where extra hypotheses are spent. Finite
total measure is what turns almost-everywhere convergence into convergence in
measure and what makes Egorov work; uniform integrability is what recovers
$L^1$ from convergence in measure; tightness is what restores that recovery on
sigma-finite spaces. The false statements and the closing implication-table
remark point every failed arrow to a concrete witness on the companion examples
page.
