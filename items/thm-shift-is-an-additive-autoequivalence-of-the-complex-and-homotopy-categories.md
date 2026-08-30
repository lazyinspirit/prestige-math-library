---
id: thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories
kind: theorem
title: "Shift is an additive autoequivalence of the complex and homotopy categories"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-shift-of-a-chain-complex, lem-the-shifted-differential-squares-to-zero, def-shift-of-a-chain-map-and-chain-homotopy, def-homotopy-category-of-chain-complexes, thm-the-homotopy-category-is-additive]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Statement

Let $\mathcal A$ be an abelian category. For each integer $k$, shift defines an additive autoequivalence
$$[k]:\operatorname{Ch}(\mathcal A)\to\operatorname{Ch}(\mathcal A)$$
and descends to an additive autoequivalence
$$[k]:K(\mathcal A)\to K(\mathcal A).$$
Its inverse is the shift $[-k]$.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and an integer $k$.

[L1] The shift of a complex is again a chain complex ([[def-shift-of-a-chain-complex]], [[lem-the-shifted-differential-squares-to-zero]]).

[L2] Shifted chain maps and shifted homotopies are defined degreewise, with the sign $(-1)^k$ on shifted homotopies ([[def-shift-of-a-chain-map-and-chain-homotopy]]).

[L3] Morphisms in $K(\mathcal A)$ are homotopy classes ([[def-homotopy-category-of-chain-complexes]]).

[L4] Because $\mathcal A$ is abelian and hence additive, $K(\mathcal A)$ is additive ([[thm-the-homotopy-category-is-additive]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], sending $C$ to $C[k]$ and $f$ to $f[k]$ defines a functor on $\operatorname{Ch}(\mathcal A)$. The formulas are degreewise, so $[k]$ preserves zero maps and sums, and applying $[-k]$ returns the original complex and map on the nose. Hence $[k]$ is an additive autoequivalence of $\operatorname{Ch}(\mathcal A)$. [L1, L2, given, algebra]

2.1 If $f\simeq g$, then [L2] gives $f[k]\simeq g[k]$, so [L3] lets the same formula descend to homotopy classes. Since step 1.1 already gives the inverse $[-k]$ and [L4] provides the additive structure on the quotient, $[k]$ is also an additive autoequivalence of $K(\mathcal A)$. [L2, L3, L4, step 1.1, algebra] ∎
