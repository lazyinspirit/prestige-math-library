---
id: def-barycentric-rational-quotient
kind: definition
title: Barycentric rational quotient with support values and reduced poles
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - lem-barycentric-denominator-polynomial-nonzero
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm
        for rational approximation, Section 2
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
    - title: Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange
        Interpolation, Section 9.2
      url: https://people.maths.ox.ac.uk/trefethen/barycentric.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $k\ge1$, let $z_1,\ldots,z_k\in\mathbb C$ be distinct support nodes, let
$f_1,\ldots,f_k\in\mathbb C$ be data, and let each weight $w_j\in\mathbb C$ be
nonzero. Define the cleared polynomials
$$P(z)=\sum_{j=1}^{k}w_jf_j\prod_{\ell\ne j}(z-z_\ell), \qquad Q(z)=\sum_{j=1}^{k}w_j\prod_{\ell\ne j}(z-z_\ell).$$
The **barycentric rational quotient** is the rational function $r=P/Q$.
Away from the support nodes this equals
$$r(z)= \frac{\sum_{j=1}^{k} w_jf_j/(z-z_j)} {\sum_{j=1}^{k} w_j/(z-z_j)}.$$
At a support node its value is given by the cleared quotient $P(z_j)/Q(z_j)$.
A **pole** means a zero of the denominator after all common polynomial
factors of numerator and denominator have been canceled.
