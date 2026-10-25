---
id: fs-solovays-model-proves-an-inaccessible-exists
kind: false-statement
title: Solovay's model proves that an inaccessible cardinal exists
status: published
origin: pipeline
deps: [thm-collapse-and-levy-collapse-effects, thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice, thm-solovay-model-regularity-relative-to-an-inaccessible]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direction-and-counterconstruction
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
      locator: "Introduction and Part I, Sections 3-4"
---

## False Statement

“Solovay's target model proves that the inaccessible used in its construction exists as an inaccessible cardinal.”

## Facts & Assumptions

**Given:** The external source theory, collapse, and one-way relative-consistency theorem.

[F1] [[thm-collapse-and-levy-collapse-effects]]: the ambient collapse makes the designated $\kappa$ equal to $\omega_1$.

[F2] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]] and [[thm-solovay-l-of-the-reals-satisfies-zf-and-dependent-choice]]: both inner models have all ambient reals and ordinals and are contained in $V[G]$.

[F3] [[thm-solovay-model-regularity-relative-to-an-inaccessible]]: proves only a one-way implication between arithmetized consistency statements.

## Refutation

1.1 By F1, every $\alpha<\kappa$ has in $V[G]$ a real coding a surjection $\omega\twoheadrightarrow\alpha$; F2 puts each code in both $M$ and $L(\mathbb R)$, so every such $\alpha$ is internally countable. Conversely, an internal surjection $\omega\twoheadrightarrow\kappa$ would belong to $V[G]$, contradicting F1 there. Thus the designated construction ordinal is $\omega_1$ in both inner models and is not inaccessible. [F1, F2]

1.2 F3 has logical form $\operatorname{Con}(T_{\mathrm{inacc}})\to\operatorname{Con}(T_{\mathrm{reg}})$. It neither reverses this arrow nor inserts “there is an inaccessible” into $T_{\mathrm{reg}}$. The construction also does not prove that no other ordinal can be inaccessible in a chosen target model; that stronger assertion is not needed. [F3]

2.1 Hence both the proposed survival of the designated $\kappa$ and the inference from relative consistency to an internal inaccessible are invalid. [step 1.1, step 1.2] ∎
