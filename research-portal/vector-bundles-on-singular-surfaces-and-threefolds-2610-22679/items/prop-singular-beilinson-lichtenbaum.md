---
id: prop-singular-beilinson-lichtenbaum
kind: proposition
title: Singular Beilinson–Lichtenbaum input
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-2ac325480ae8-slice-site
  - lem-author-2ac325480ae8-slice-localization
  - lem-author-2ac325480ae8-chosen-root
  - lem-author-2ac325480ae8-truncated-root-map
  - lem-author-2ac325480ae8-motivic-restriction-coefficients
  - thm-author-2ac325480ae8-bem-finite-comparison
  - thm-author-2ac325480ae8-bem-field-model
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-2ac325480ae8-slice-site: mathematical-premise
  lem-author-2ac325480ae8-slice-localization: mathematical-premise
  lem-author-2ac325480ae8-chosen-root: mathematical-premise
  lem-author-2ac325480ae8-truncated-root-map: mathematical-premise
  lem-author-2ac325480ae8-motivic-restriction-coefficients: mathematical-premise
  thm-author-2ac325480ae8-bem-finite-comparison: mathematical-premise
  thm-author-2ac325480ae8-bem-field-model: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Fasel–Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p6, proof of Proposition2.6, cited BEM Cor7.20
      reading_limits: Read the specified target and article application. Original
        formula retained with explicit big-site meaning and chosen-root map.
proof_strategy: direct
dependency_level: 13
---

## Statement
Assume the Axiom of Choice and compatible universe bounds for the small étale sites, big cdh sites, slices and products in the supplied constructions. Let $k$ be a characteristic-zero field, let $p$ be a prime, and choose a primitive $p$th root $\zeta\in k$ (in particular this can be done for the article’s algebraically closed $k$). On all qcqs $k$-schemes there is the specified natural equivalence
$$\mathbb Z(3)_{\rm cdh}/p\simeq L_{\rm cdh,k}\tau^{\leq3}R\Gamma_{\rm et}(-,\mathbb Z/p).$$
Here the left side is the restriction of the actual EM cdh-local weight-three complex on qcqs $\mathbb Q$-schemes, with its objectwise derived quotient; $L_{\rm cdh,k}$ is BEM big-site complex-valued cdh localization on qcqs $k$-schemes, with the induced topology and ordinary reflective sheafification specified by the slice-site construction. Equivalently the right side is the restriction of the ambient localized Tate-twisted complex followed by the specified root trivialization. No comparison with a separately fixed separated finite-type or hypercomplete site is asserted.

## Statement references
[[lem-author-2ac325480ae8-slice-site]]

## Facts & Assumptions
[A1] Choice and the compatible site and universe bounds are used when invoking the derived-sections construction in [[lem-author-2ac325480ae8-truncated-root-map]]. [[math:def-axiom-of-choice]]

[F1] [[thm-author-2ac325480ae8-bem-finite-comparison]] supplies the actual ambient twisted comparison in weight3 mod-$p$.

[F2] [[lem-author-2ac325480ae8-motivic-restriction-coefficients]] identifies its restricted left side with the specified EM finite quotient.

[F3] [[lem-author-2ac325480ae8-slice-localization]] and [[lem-author-2ac325480ae8-truncated-root-map]] supply the actual slice-localization equivalence and the localized inverse of the root coefficient map.

## Proof
**Given:** $k,p,\zeta$ as stated, with fixed compatible universes and AC.

**Goal:** Prove the formula with the actual coefficient/truncation/localization maps.

1.1 Restrict the actual comparison of [F1] to the slice $\mathcal C/\operatorname{Spec}k$. Its source identifies with the left side of the statement by [F2]. Restriction is a functor, so this remains a natural equivalence, including after evaluation at any qcqs $X/k$. [F1, F2]

2.1 Since $k$ has characteristic zero, $p$ is invertible in $k$; the chosen primitive root, qcqs slice and ordinary localizations satisfy the hypotheses of the truncated-root-map supplier under [A1]. Apply [F3] to the target from step 1.1. The unit-compatible interchange identifies it with $L_{\rm cdh,k}\tau^{\leq3}R\Gamma_{\rm et}(-,\mu_p^{\otimes3})$ on the slice. Compose with localization of the inverse coefficient map induced by $1\mapsto\zeta^{\otimes3}$, after the stated objectwise truncation. The result is exactly the displayed right side. Every arrow is now a specified natural map of the stated complexes. [A1, F3, step 1.1]

3.1 The composite is an equivalence and is contravariantly natural on qcqs $k$-schemes. This proves the characteristic-zero application without a site substitution or any use of a degree-three truncated comparison in an unsupported degree. [step 1.1, step 2.1] ∎
