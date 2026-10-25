---
id: ex-local-gch-at-omega-and-its-power-set
kind: example
title: "The two local hypotheses at omega"
status: published
origin: pipeline
deps: ["thm-specker-two-local-gch", "thm-hartogs", "thm-omega-one-is-the-least-uncountable-ordinal"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Carneiro, Theorem 1 and local-to-global discussion, p.2"
      url: https://arxiv.org/pdf/1506.03533
---

## Example

In ZF, $\mathrm{CH}(\omega)$ together with $\mathrm{CH}(\mathcal P(\omega))$ implies $\mathcal P(\omega)\approx\omega_1$. These are two separate local hypotheses.

## Facts & Assumptions

[F1] [[thm-specker-two-local-gch]]: The two local hypotheses at a set containing omega give its power set equinumerous with its Hartogs number.

[F2] [[thm-omega-one-is-the-least-uncountable-ordinal]]: The Hartogs number of omega is omega_1, the least uncountable ordinal.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Apply Specker with $X=\omega$ and the identity injection of omega. The two premises concern respectively sizes between omega and its power set, and sizes between that power set and its own power set. The conclusion is $\mathcal P(\omega)\approx h(\omega)$. [F1]

2.1 By the definition and characterization of the first uncountable ordinal, $h(\omega)=\omega_1$. Substitution gives the asserted bijection, and hence well-orders the power set. [F2, step 1.1] ∎
