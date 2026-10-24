---
page: nevanlinna-second-main-theorem-and-defects
title: "Nevanlinna's Second Main Theorem and Defects"
status: published
requires: [measures-and-their-basic-properties, lebesgue-measure-on-euclidean-space, jensen-theory-and-nevanlinnas-first-main-theorem, the-riemann-sphere-and-mobius-transformations, bloch-schottky-and-picard, normal-families-and-montels-theorem, isolated-singularities-and-laurent-series, complex-power-series-and-analytic-functions, complex-differentiability-and-cauchy-riemann, the-complex-exponential-and-eulers-formula, the-inverse-function-theorem-completed, product-measures-and-the-fubini-tonelli-theorems]
items: [def-nevanlinna-exceptional-radius-notation,
        def-nevanlinna-truncated-and-ramification-counts,
        lem-borel-nevanlinna-growth-increment,
        lem-nevanlinna-poisson-jensen-derivative-bound,
        lem-nevanlinna-ramification-counting-identity,
        lem-nevanlinna-logarithmic-derivative,
        lem-nevanlinna-growth-dominates-logarithm,
        thm-nevanlinna-second-main-theorem,
        def-nevanlinna-deficiency-and-ramification-index,
        thm-nevanlinna-defect-relation,
        lem-nevanlinna-exterior-three-value-extension,
        thm-local-second-main-theorem-on-a-punctured-disc,
        cor-nevanlinna-picard-theorems,
        thm-nevanlinna-five-value-theorem]
examples: []
---

The Second Main Theorem is the quantitative statement that a meromorphic
function cannot distribute its preimages too evenly. This page sets up the
error notation $S(r,f)$, an error bounded by
$C(\log^+T(r,f)+\log r)$ outside a Lebesgue-measurable set of finite linear
measure, and the truncated count $\bar N$ and ramification count $N_1$, measuring
distinct preimages and local-degree surplus respectively. The ramification counting identity
$N_1(r,f)=N(r,0;f')+2N(r,\infty;f)-N(r,\infty;f')$ converts the derivative
divisor into the local-degree surplus.

The analytic input is the logarithmic-derivative lemma, proved from a
separated-radius Poisson–Jensen derivative bound and the Borel finite-measure
growth increment, with the finite-order refinement $O(\log r)$ at every large
radius and the rational refinement $O(1)$. The plane Second Main Theorem then
reads $\sum_jm(r,a_j;f)+N_1(r,f)\le2T(r,f)+S(r,f)$ for distinct targets
$a_1,\dots,a_q$, $q\ge3$, and rearranges to
$(q-2)T(r,f)\le\sum_j\bar N(r,a_j;f)+S(r,f)$. A separate punctured-disc
theorem supplies the same inequality on an exterior characteristic after
inversion of an isolated singularity, with the exceptional set measured in the
exterior radius.

Deficiency and ramification indices, the defect relation
$\sum_a(\delta(a,f)+\varepsilon(a,f))\le2$, the five-value uniqueness theorem
and the Little and Great Picard theorems are derived from these estimates. A
choice-free Schottky/normal-family exterior lemma gives an independent route to
the three-omitted-values extension. Countable Choice is carried by the
exceptional-set measure interface and by the analytic suppliers that use it;
the counting and covering arguments are choice-free.
