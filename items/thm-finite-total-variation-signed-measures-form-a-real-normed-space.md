---
id: thm-finite-total-variation-signed-measures-form-a-real-normed-space
kind: theorem
title: "The finite-total-variation signed measures form a real normed space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-space-of-finite-total-variation-signed-measures, thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals, prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation, def-vector-space, def-norm-and-normed-space]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Theorem 9.13"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 12.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Fix a measurable space $(X,\mathcal A)$. With pointwise addition and scalar
multiplication, $\mathcal M(X,\mathcal A)$ is a real vector space. Moreover,
$$\|\nu\|:=|\nu|(X)$$
defines a norm on it.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal A)$.

[L1] $\mathcal M(X,\mathcal A)$ consists of the signed measures with
$|\nu|(X)<+\infty$. ([[def-the-space-of-finite-total-variation-signed-measures]])

[L2] Total variation is the supremum of unit-bounded simple integrals.
([[thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]])

[L3] A signed-measure null set is exactly a set of zero total variation.
([[prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation]])

[L4] A normed space is a real vector space together with a norm satisfying
separation, absolute homogeneity, and the triangle inequality.
([[def-vector-space]], [[def-norm-and-normed-space]])

## Proof

**Proof technique:** direct.

1.1 If $\nu,\mu\in\mathcal M(X,\mathcal A)$ and $a\in\mathbb R$, then the [L1, L2, L4]
pointwise set functions $\nu+\mu$ and $a\nu$ are again signed measures because
their values are finite on every measurable set and countable additivity is
preserved termwise. Also [L2] gives
$$|\nu+\mu|(X)\le |\nu|(X)+|\mu|(X),\qquad |a\nu|(X)=|a|\,|\nu|(X),$$
so $\nu+\mu$ and $a\nu$ remain in $\mathcal M(X,\mathcal A)$. Thus
$\mathcal M(X,\mathcal A)$ is closed under the pointwise operations, and the
vector-space axioms are inherited from the real-valued function space on
$\mathcal A$.

1.2 The formula $\|\nu\|=|\nu|(X)$ is nonnegative by definition. If $\|\nu\|=0$, [L1, L3, L4]
then [L3] makes $X$ null for $\nu$, so every measurable set has $\nu$-value
$0$ and therefore $\nu$ is the zero measure. Conversely the zero measure has
variation $0$. Thus the separation axiom of [L4] holds.

2.1 Step 1.1 already proved absolute homogeneity and the triangle inequality: [L2, L4, step 1.1]
$$\|a\nu\|=|a|\,\|\nu\|,\qquad \|\nu+\mu\|\le \|\nu\|+\|\mu\|.$$
Hence [L4] shows that $\|\cdot\|$ is a norm.

3.1 Steps 1.1 through 2.1 prove that $\mathcal M(X,\mathcal A)$ is a real [step 1.1, step 1.2, step 2.1] ∎
normed space.
