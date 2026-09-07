---
id: ex-weak-choice-implication-map
kind: example
title: "A choice-strength implication map"
status: draft
origin: pipeline
deps: ["thm-choice-implies-dependent-implies-countable-choice", "thm-dependent-choice-and-finite-multiple-selections", "thm-multiple-choice-equivalent-to-choice-in-zf"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §§2.4, 8.2, 9.1"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
    - title: "Morillon, §2.1 Question 1, p.6"
      url: https://lim.univ-reunion.fr/staff/mar/mem-HDR.pdf
external_refs: [rem-weak-choice-nonimplication-destinations]
---

## Example

In ZF the proved arrows are $\mathrm{AC}\iff\mathrm{MC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega\Rightarrow\mathrm{AC}_{\omega,\mathrm{fin}}\Rightarrow\mathrm{AC}_{\omega,2}$, together with $\mathrm{AC}\Rightarrow\mathrm{AC}_2$ and $\mathrm{DC}\iff(\mathrm{DMC}\text{ and }\mathrm{AC}_{\omega,\mathrm{fin}})$. The branch $\mathrm{AC}_2$ concerns arbitrary index sets.

## Facts & Assumptions

[F1] [[thm-choice-implies-dependent-implies-countable-choice]]: The AC–DC–countable-choice chain and pair-choice restriction hold.

[F2] [[thm-multiple-choice-equivalent-to-choice-in-zf]]: MC and AC are equivalent in ZF.

[F3] [[thm-dependent-choice-and-finite-multiple-selections]]: DC is equivalent to DMC together with countable finite choice.

## Verification

**Given:** The objects and hypotheses in the statement.

1.1 Insert the MC equivalence immediately beside AC, then concatenate the proved implications through the countable pair-choice endpoint. Keep arbitrary-family pair choice on its separately proved AC branch. [F1, F2]

2.1 The finite-level description of DC requires both DMC and countable finite choice. Thus the displayed conjunction represents exactly the proved equivalence. [F3] ∎

## Remarks

Unproved reverse-arrow separations are recorded in [[rem-weak-choice-nonimplication-destinations]]. They are external orientation and are not inputs to this verification.
