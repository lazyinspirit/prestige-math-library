---
id: thm-integration-against-a-density
kind: theorem
title: "Integrating against a density agrees with integrating the product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-with-density, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-monotone-convergence-for-the-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f,g:X\to[0,+\infty]$ be measurable. Then
$$\int g\,d(f\,d\mu)=\int gf\,d\mu.$$

## Facts & Assumptions

**Given:** Nonnegative measurable functions $f$ and $g$.

[L1] The density measure is defined by $(f\,d\mu)(A)=\int_A f\,d\mu$ ([[def-measure-with-density]]).

[L2] The nonnegative integral is additive on measurable sets ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L3] Nonnegative measurable functions admit increasing simple approximations, and products with simple functions are measurable by finite sums of indicator products ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L4] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L5] The nonnegative integral is homogeneous, and on simple functions it agrees with the simple integral for any measure. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

## Proof

**Proof technique:** direct.

1.1 Suppose first that $g=\sum_{j=1}^m c_j\chi_{E_j}$ is a simple representation, so the sets $E_j$ are pairwise disjoint. Applying [L5] on the measure space $(X,\mathcal A,f\,d\mu)$ and then using [L1], one gets. [L1, L2, L5, given, algebra]

$$\int g\,d(f\,d\mu)=\sum_{j=1}^m c_j(f\,d\mu)(E_j) =\sum_{j=1}^m c_j\int_{E_j}f\,d\mu.$$

Also $gf=\sum_{j=1}^m c_jf\chi_{E_j}$, and the summands have pairwise disjoint supports. Therefore [L2] and [L5] give

$$\int gf\,d\mu=\sum_{j=1}^m\int c_jf\chi_{E_j}\,d\mu =\sum_{j=1}^m c_j\int_{E_j}f\,d\mu.$$

Hence $\int g\,d(f\,d\mu)=\int gf\,d\mu$.


2.1 For general measurable $g\ge0$, choose simple $g_n\uparrow g$ by [L3]. Then $g_nf\uparrow gf$ pointwise. Applying [L4] twice and step 1.1 to each $g_n$ yields. [step 1.1, L3, L4] ∎

$$\int g\,d(f\,d\mu)=\lim_n\int g_n\,d(f\,d\mu) =\lim_n\int g_nf\,d\mu =\int gf\,d\mu.$$
