---
id: thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value
kind: theorem
title: "The total variation of an absolutely continuous signed or complex measure has density the absolute value of the Radon-Nikodym derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-finite-complex-measures-admit-integrable-radon-nikodym-densities, def-radon-nikodym-derivative, thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, §6.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $\mu$ be a sigma-finite positive measure.

1. If $\nu$ is a finite signed measure with $\nu\ll\mu$ and Radon-Nikodym derivative $h=d\nu/d\mu$, then
   $$|\nu|(E)=\int_E|h|\,d\mu\qquad(E\in\mathcal A).$$
2. If $\nu$ is a finite complex measure with $\nu\ll\mu$ and Radon-Nikodym derivative $h=d\nu/d\mu$, then
   $$|\nu|(E)=\int_E|h|\,d\mu\qquad(E\in\mathcal A).$$

## Facts & Assumptions

**Given:** A sigma-finite positive measure $\mu$ and an absolutely continuous finite signed or finite complex measure $\nu$.

[L1] A real $L^1$ density defines a finite signed measure whose total variation is the integral of its absolute value. ([[thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data]])

[L2] A complex $L^1$ density defines a complex measure whose total variation is the integral of its modulus. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[L3] Finite absolutely continuous signed measures and finite absolutely continuous complex measures admit integrable representatives of their Radon-Nikodym derivatives. ([[def-radon-nikodym-derivative]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[cor-finite-complex-measures-admit-integrable-radon-nikodym-densities]])

## Proof

**Proof technique:** direct.

1.1 In the finite signed case, [L3] gives an integrable real-valued representative $h$ of $d\nu/d\mu$, and [L1] applied to that density yields exactly $$|\nu|(E)=\int_E|h|\,d\mu\qquad(E\in\mathcal A).$$ [L1, L3]

1.2 In the finite complex case, [L3] gives an integrable complex representative $h$ of $d\nu/d\mu$, and [L2] applied to that density yields the same formula $$|\nu|(E)=\int_E|h|\,d\mu\qquad(E\in\mathcal A).$$ [L2, L3]

2.1 Steps 1.1 and 1.2 prove the signed and complex clauses. [step 1.1, step 1.2] ∎
