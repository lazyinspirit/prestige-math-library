---
id: cor-localisation-commutes-with-kernels-images-and-cokernels
kind: corollary
title: "Localisation commutes with kernels images and cokernels"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-of-modules-is-exact, def-module-homomorphism-kernel-image-and-cokernel]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 12.20"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For every $R$-module homomorphism $f:M \to N$, localisation identifies
$$
S^{-1}(\ker f) \cong \ker(S^{-1}f), \qquad S^{-1}(\operatorname{im}f) \cong \operatorname{im}(S^{-1}f), \qquad S^{-1}(\operatorname{coker}f) \cong \operatorname{coker}(S^{-1}f).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, left $R$-modules $M,N$, and an $R$-module homomorphism $f:M \to N$.

[L1] Localisation sends short exact sequences to short exact sequences ([[thm-localisation-of-modules-is-exact]]).

[L2] The kernel, image, and cokernel of $f$ are the standard submodule and quotient constructions associated to $f$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 The standard short exact sequences $0 \to \ker f \to M \to \operatorname{im}f \to 0$ and $0 \to \operatorname{im}f \to N \to \operatorname{coker}f \to 0$ localise, by [L1], to short exact sequences $0 \to S^{-1}(\ker f) \to S^{-1}M \to S^{-1}(\operatorname{im}f) \to 0$ and $0 \to S^{-1}(\operatorname{im}f) \to S^{-1}N \to S^{-1}(\operatorname{coker}f) \to 0$. [L1, L2]

2.1 In the first localised sequence, the middle map is $S^{-1}f$ restricted to $S^{-1}M$, so its kernel is exactly $S^{-1}(\ker f)$ and its image is exactly the embedded copy of $S^{-1}(\operatorname{im}f)$. [step 1.1, L2]

3.1 In the second localised sequence, the quotient by the image of $S^{-1}f$ is therefore $S^{-1}(\operatorname{coker}f)$, so $S^{-1}(\operatorname{coker}f) \cong \operatorname{coker}(S^{-1}f)$. [step 2.1, L2]

4.1 Steps 2.1 and 3.1 prove the kernel, image, and cokernel identifications. [step 2.1, step 3.1] ∎
