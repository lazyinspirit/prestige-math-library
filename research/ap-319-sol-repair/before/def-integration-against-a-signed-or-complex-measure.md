---
id: def-integration-against-a-signed-or-complex-measure
kind: definition
title: "Integration against a signed or complex measure, and the class L^1(nu) = L^1(|nu|)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-l-one-of-a-measure, def-simple-integral-against-a-signed-or-complex-measure, prop-simple-integrals-are-bounded-by-total-variation, thm-total-variation-is-a-measure, thm-l-one-functions-admit-dominated-complex-simple-approximations]
verification:
  audited: 2026-08-30
  precheck: n/a
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 12"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Definition

Let $\nu$ be a signed measure or complex measure on $(X,\mathcal A)$. Because
$|\nu|$ is a measure ([[thm-total-variation-is-a-measure]]), define
$$L^1(\nu):=L^1(|\nu|)$$
using the published meaning of $L^1$ from [[def-l-one-of-a-measure]].

If $f\in L^1(\nu)$, choose complex simple functions $s_n$ as in
[[thm-l-one-functions-admit-dominated-complex-simple-approximations]] with
$\int |f-s_n|\,d|\nu|\to0$. The simple-integral bound
[[prop-simple-integrals-are-bounded-by-total-variation]] makes
$(\int s_n\,d\nu)$ a Cauchy sequence in $\mathbb C$, and its limit is
independent of the chosen approximating sequence. Define
$$\int f\,d\nu:=\lim_{n\to\infty}\int s_n\,d\nu.$$

For a measurable set $E\in\mathcal A$, define
$$\int_E f\,d\nu:=\int f\mathbf 1_E\,d\nu.$$
