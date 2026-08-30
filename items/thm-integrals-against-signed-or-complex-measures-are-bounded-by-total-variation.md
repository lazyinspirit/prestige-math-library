---
id: thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation
kind: theorem
title: "Integrals against signed or complex measures are bounded by total variation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integration-against-a-signed-or-complex-measure, prop-simple-integrals-are-bounded-by-total-variation]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 12.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\nu$ be a signed measure or complex measure on $(X,\mathcal A)$ and let
$f\in L^1(\nu)$. Then
$$\left|\int f\,d\nu\right|\le \int |f|\,d|\nu|.$$
More generally, for every measurable $E$,
$$\left|\int_E f\,d\nu\right|\le \int_E |f|\,d|\nu|.$$

## Facts & Assumptions

**Given:** A signed measure or complex measure $\nu$, a function $f\in L^1(\nu)$,
and a measurable set $E$.

[L1] Integration against $\nu$ is defined as the limit of simple integrals
along an $L^1(|\nu|)$-approximating sequence. ([[def-integration-against-a-signed-or-complex-measure]])

[L2] Simple integrals satisfy
$|\int_E s\,d\nu|\le\int_E |s|\,d|\nu|$. ([[prop-simple-integrals-are-bounded-by-total-variation]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose complex simple functions $s_n$ with [L1, L2]
$\int |f-s_n|\,d|\nu|\to0$ and
$$\int f\,d\nu=\lim_n \int s_n\,d\nu.$$
Applying [L2] to $s_n-s_m$ shows that $(\int s_n\,d\nu)$ is Cauchy.

2.1 By [L2], [L1, L2, step 1.1]
$$\left|\int s_n\,d\nu\right|\le \int |s_n|\,d|\nu|\le \int |f|\,d|\nu|+\int |f-s_n|\,d|\nu|.$$
Letting $n\to\infty$ in step 1.1 yields
$$\left|\int f\,d\nu\right|\le \int |f|\,d|\nu|.$$
Applying the same argument to $f\mathbf 1_E$ gives the measurable-subset
version.

3.1 Step 2.1 proves both inequalities. [step 2.1] ∎
