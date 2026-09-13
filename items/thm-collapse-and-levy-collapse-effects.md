---
id: thm-collapse-and-levy-collapse-effects
kind: theorem
title: Cardinal effects of collapse and Lévy-collapse forcing
status: draft
origin: pipeline
deps: [def-cohen-collapse-and-levy-collapse-forcings, thm-closure-distributivity-and-no-short-sequences, thm-chain-condition-preserves-cofinalities-and-cardinals, thm-regular-uncountable-finite-delta-system, thm-forcing-theorem, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapters 3–4", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, if $\kappa$ is infinite regular and $\kappa\le\lambda$, $\operatorname{Col}(\kappa,\lambda)$ is $\kappa$-closed and its generic union is a surjection $\kappa$ onto $\lambda$. If $\theta$ is regular uncountable, $\operatorname{Lv}(\theta)$ is $\theta$-cc, collapses every nonzero $\alpha<\theta$ to countable size, preserves $\theta$, and therefore forces $\theta=\aleph_1$.

## Facts & Assumptions

**Given:** AC and the stated regularity hypotheses.

[F1] [[def-cohen-collapse-and-levy-collapse-forcings]] gives both partial-function orders.

[F2] [[thm-closure-distributivity-and-no-short-sequences]] and [[thm-chain-condition-preserves-cofinalities-and-cardinals]] give the preservation consequences.

[F3] [[thm-regular-uncountable-finite-delta-system]] thins finite supports.

[F4] [[thm-forcing-theorem]] turns dense-set calculations into extension assertions.

## Proof

1.1 A descending sequence of fewer than $\kappa$ collapse conditions has union of domain size below $\kappa$, so $\operatorname{Col}(\kappa,\lambda)$ is $\kappa$-closed. For each $\xi<\kappa$ and $\beta<\lambda$, the sets requiring $\xi$ in the domain and $\beta$ in the range are dense (using a fresh coordinate for the latter). Hence the generic union is a total surjection $\kappa\twoheadrightarrow\lambda$. [F1, F4]

1.2 Given $\theta$ many Lévy conditions, F3 thins their finite domains to a delta system with a fixed finite root. At each root coordinate $(\alpha,n)$ there are only $|\alpha|<\theta$ possible values; regularity and finiteness of the root therefore leave fewer than $\theta$ possible root assignments. Thin the $\theta$ conditions until their root restrictions agree. Two remaining conditions then have compatible union, so $\operatorname{Lv}(\theta)$ is $\theta$-cc. [F1, F3]

2.1 For every $0<\alpha<\theta$, the union of the generic restrictions to $\{\alpha\}\times\omega$ is total by coordinate dense sets and hits every $\beta<\alpha$ by range dense sets. It is a surjection $\omega\twoheadrightarrow\alpha$. step 1.2 and F2 preserve the cardinal and regularity of $\theta$, while all smaller infinite ordinals become countable; hence the extension identifies $\theta$ with $\aleph_1$. [F2, F4, step 1.2] ∎
