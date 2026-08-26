---
id: cor-localisation-commutes-with-finite-intersections-of-submodules
kind: corollary
title: "Localisation commutes with finite intersections of submodules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-localisation-commutes-with-kernels-images-and-cokernels, thm-localisation-of-modules-commutes-with-quotients-and-sums, thm-universal-property-of-module-direct-sums, def-direct-sum-of-a-family-of-modules]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $N_1,\dots,N_r$ be submodules of a left $R$-module $M$. Then
$$
S^{-1}\!\left(\bigcap_{i=1}^r N_i\right)=\bigcap_{i=1}^r S^{-1}N_i
$$
inside $S^{-1}M$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a left $R$-module $M$, and submodules $N_1,\dots,N_r \le M$.

[L1] Localisation identifies kernels with the kernels of localised maps ([[cor-localisation-commutes-with-kernels-images-and-cokernels]]).

[L2] Localisation commutes with quotient modules and finite direct sums ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L3] The direct sum has its universal diagonal map into a family of targets ([[thm-universal-property-of-module-direct-sums]], [[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Let $\delta:M \to \bigoplus_{i=1}^r M/N_i$ be the diagonal map $\delta(m)=(m+N_1,\dots,m+N_r)$. By construction, $\ker\delta=\bigcap_{i=1}^r N_i$. [L3, algebra]

2.1 By [L1], $S^{-1}(\bigcap_i N_i)\cong\ker(S^{-1}\delta)$. By [L2], the codomain of $S^{-1}\delta$ identifies with $\bigoplus_i (S^{-1}M/S^{-1}N_i)$, and under this identification $S^{-1}\delta$ is the diagonal map $S^{-1}M \to \bigoplus_i (S^{-1}M/S^{-1}N_i)$. [L1, L2, step 1.1]

3.1 An element of $S^{-1}M$ lies in the kernel of that diagonal map exactly when its image in every quotient $S^{-1}M/S^{-1}N_i$ is zero, that is, exactly when it lies in every submodule $S^{-1}N_i$. Therefore $\ker(S^{-1}\delta)=\bigcap_i S^{-1}N_i$. [step 2.1, algebra]

4.1 Combining steps 2.1 and 3.1 gives $S^{-1}(\bigcap_i N_i)=\bigcap_i S^{-1}N_i$ inside $S^{-1}M$. [step 2.1, step 3.1] ∎
