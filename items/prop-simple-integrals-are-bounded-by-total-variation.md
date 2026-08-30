---
id: prop-simple-integrals-are-bounded-by-total-variation
kind: proposition
title: "Simple integrals are bounded by total variation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-of-a-nonnegative-simple-function, def-simple-integral-against-a-signed-or-complex-measure, def-total-variation-of-a-signed-or-complex-measure, thm-total-variation-is-a-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 12.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\nu$ be a signed measure or a complex measure on $(X,\mathcal A)$, let
$F\in\mathcal A$, and let
$$s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$$
be the canonical disjoint representation of a complex simple function using
only its nonzero level sets. Assume $|\nu|(E_j\cap F)<+\infty$ for every $j$.
Then
$$\left|\int_F s\,d\nu\right|\le \int_F |s|\,d|\nu|.$$
In particular, if $|s|\le M$ on $F$ and $|\nu|(F)<+\infty$, then
$$\left|\int_F s\,d\nu\right|\le M\,|\nu|(F).$$

## Facts & Assumptions

**Given:** A signed measure or complex measure $\nu$, a measurable set $F$, and the canonical nonzero-level-set representation $s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$ of a complex simple function, with $|\nu|(E_j\cap F)<+\infty$ for every $j$.

[L1] The simple integral against $\nu$ is computed from a disjoint measurable level-set representation. ([[def-simple-integral-against-a-signed-or-complex-measure]])

[L2] The integral of a nonnegative simple function against a positive measure is the weighted sum over a disjoint representation. ([[def-integral-of-a-nonnegative-simple-function]])

[L3] The total variation $|\nu|$ is a measure. ([[thm-total-variation-is-a-measure]])

## Proof

**Proof technique:** direct.

1.1 Write the canonical disjoint representation of $s$ as [L1] $s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$. For each $j$, the one-piece partition of $E_j\cap F$ gives $|\nu(E_j\cap F)|\le |\nu|(E_j\cap F)<+\infty$, so [L1] makes $\int_F s\,d\nu$ well defined and gives $$\int_F s\,d\nu=\sum_{j=1}^m c_j\nu(E_j\cap F).$$ By the triangle inequality, $$\left|\int_F s\,d\nu\right|\le \sum_{j=1}^m |c_j|\,|\nu(E_j\cap F)|\le \sum_{j=1}^m |c_j|\,|\nu|(E_j\cap F).$$ [L1]

2.1 Because $|\nu|$ is a measure by [L3], the sets $E_j\cap F$ are disjoint [L2, L3, step 1.1] and measurable, and [L2] gives $$\int_F |s|\,d|\nu|=\sum_{j=1}^m |c_j|\,|\nu|(E_j\cap F).$$ Substituting this into step 1.1 proves the first inequality. If $|s|\le M$ on $F$ and $|\nu|(F)<+\infty$, then [L3] gives $|\nu|(E_j\cap F)\le |\nu|(F)<+\infty$ for every $j$, so the displayed finiteness hypothesis is automatic. Moreover $|s|\mathbf 1_F\le M\mathbf 1_F$, so monotonicity of the simple integral with respect to the positive measure $|\nu|$ gives $\int_F |s|\,d|\nu|\le M|\nu|(F)$. [L2, L3, step 1.1]

3.1 The displayed inequalities follow from steps 1.1 and 2.1. [step 1.1, step 2.1] ∎
