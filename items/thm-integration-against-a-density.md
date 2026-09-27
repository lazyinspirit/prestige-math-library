---
id: thm-integration-against-a-density
kind: theorem
title: "Integrating against a density agrees with integrating the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-with-density, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-monotone-convergence-for-the-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-integration-against-a-density). No independent judge or whole-closure certification.
    delegated_by: owner
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

1.1 Suppose first that $g=\sum_{j=1}^m c_j\chi_{E_j}$ is simple with pairwise disjoint measurable $E_j$. By [L5] for the measure $f\,d\mu$ and then [L1], $\int g\,d(f\,d\mu)=\sum_jc_j(f\,d\mu)(E_j)=\sum_jc_j\int_{E_j}f\,d\mu$. Also $gf=\sum_jc_jf\chi_{E_j}$ has pairwise disjoint summand supports, so [L2] and [L5] give $\int gf\,d\mu=\sum_jc_j\int_{E_j}f\,d\mu$. Hence $\int g\,d(f\,d\mu)=\int gf\,d\mu$. [L1, L2, L5, given, algebra]

2.1 For general measurable $g\ge0$, choose simple $g_n\uparrow g$ by [L3]. Then $g_nf\uparrow gf$ pointwise (using $0\cdot\infty=0$). Applying [L4] to both measures and step 1.1 to each $g_n$ yields $\int g\,d(f\,d\mu)=\lim_n\int g_n\,d(f\,d\mu)=\lim_n\int g_nf\,d\mu=\int gf\,d\mu$. [step 1.1, L3, L4] ∎
