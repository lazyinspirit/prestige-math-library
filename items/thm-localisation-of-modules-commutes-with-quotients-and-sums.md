---
id: thm-localisation-of-modules-commutes-with-quotients-and-sums
kind: theorem
title: "Localisation commutes with quotient modules and arbitrary direct sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-of-modules-is-tensor-product, thm-right-exactness-of-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, def-quotient-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary 12.22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.9: Localization"
      url: "https://stacks.math.columbia.edu/tag/00CM"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $S \subseteq R$ be multiplicative.

1. For every submodule $N \le M$, there is a natural isomorphism
$$
S^{-1}(M/N) \cong (S^{-1}M)/(S^{-1}N).
$$
2. For every family $(M_i)_{i \in I}$ of left $R$-modules, there is a natural isomorphism
$$
S^{-1}\!\left(\bigoplus_{i \in I} M_i\right) \cong \bigoplus_{i \in I} S^{-1}M_i.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a multiplicative subset $S \subseteq R$.

[L1] Localisation is naturally $(S^{-1}R) \otimes_R -$ ([[thm-localisation-of-modules-is-tensor-product]]).

[L2] Tensoring a right-exact sequence with a fixed module preserves right exactness ([[thm-right-exactness-of-tensor-products]]).

[L3] Tensor products commute with arbitrary direct sums ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L4] A quotient module is the module of cosets $M/N$ ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 For a submodule $N \le M$, the sequence $N \to M \to M/N \to 0$ is right exact, so [L2] and [L1] give a right-exact sequence $S^{-1}N \to S^{-1}M \to S^{-1}(M/N) \to 0$. Therefore $S^{-1}(M/N)$ is the quotient of $S^{-1}M$ by the image of $S^{-1}N \to S^{-1}M$, namely by the submodule $S^{-1}N$. [L1, L2, L4]

1.2 For a family $(M_i)_{i \in I}$, [L3] and [L1] give $S^{-1}(\bigoplus_i M_i) \cong (S^{-1}R) \otimes_R (\bigoplus_i M_i) \cong \bigoplus_i ((S^{-1}R) \otimes_R M_i) \cong \bigoplus_i S^{-1}M_i$. [L1, L3]

2.1 Thus $S^{-1}(M/N) \cong (S^{-1}M)/(S^{-1}N)$ naturally in $M$ and $N$. [step 1.1]

3.1 Steps 2.1 and 1.2 prove the quotient and direct-sum claims. [step 2.1, step 1.2] ∎
