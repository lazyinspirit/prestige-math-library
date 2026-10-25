---
page: martingale-inequalities-and-convergence
title: "Martingale Inequalities and Convergence"
status: published
items: [def-upcrossing-number-of-an-interval, lem-doob-upcrossing-inequality, thm-doob-submartingale-convergence, thm-doob-l1-maximal-inequality, thm-doob-lp-maximal-inequality, thm-lp-bounded-martingale-convergence, thm-uniformly-integrable-martingale-convergence, thm-closed-martingale-characterization, def-reverse-filtration-and-reverse-martingale, thm-reverse-martingale-convergence, thm-levy-upward-convergence-of-conditional-expectations, thm-levy-downward-convergence-of-conditional-expectations, cor-kolmogorov-zero-one-law-from-reverse-martingales, lem-conditional-hoeffding-bound-for-bounded-martingale-differences, thm-azuma-hoeffding-inequality, cor-symmetric-bounded-increment-azuma-bound, def-square-integrable-martingale-difference-array-and-variance-clock, thm-martingale-central-limit-theorem]
examples: []
---

Upcrossing counts are defined without selecting optimal crossing times. A convex truncation and complementary predictable holdings give Doob's upcrossing inequality, from which rational crossings and separate positive/negative Fatou bounds yield almost-sure convergence. The maximal inequalities use finite first-crossing events and a layer-cake/Hölder calculation, with the sharp displayed factor $p/(p-1)$.

Uniform integrability is the bridge from almost-sure or probability convergence to $L^1$ convergence. Closed martingales, $L^p$-bounded martingales, reverse martingales, and Levy's upward and downward convergence theorems are proved with their distinct measurability and limiting arguments. The zero-one corollary is derived from finite-initial independence rather than importing the existing zero-one theorem.

Conditional Hoeffding permits predictable random endpoints but requires deterministic width bounds. Azuma follows by iterating conditional exponential moments and optimizing the Chernoff parameter. The martingale CLT keeps its variance-clock and unconditional Lindeberg hypotheses separate and uses conditional characteristic-function telescoping plus clock localization; no independence is assumed. All conditional-expectation results explicitly inherit AC from the library's Radon–Nikodym construction.
