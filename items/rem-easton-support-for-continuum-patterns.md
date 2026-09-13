---
id: rem-easton-support-for-continuum-patterns
kind: remark
title: Easton-support orientation for many regular cardinals
status: draft
origin: pipeline
deps: [thm-higher-cohen-forcing-violates-gch, thm-konig]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Kunen, Set Theory, Chapter VII", url: "https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf"}
---

## Remark

The one-cardinal construction in [[thm-higher-cohen-forcing-violates-gch]] does not control a whole continuum function by naive iteration: full support can destroy closure, while finite support at uncountable coordinates can destroy the intended chain condition. Easton forcing instead uses support bounded below every regular cardinal when combining higher Cohen factors.

Any proposed regular-cardinal continuum function $F$ must at least be monotone and satisfy $\operatorname{cf}(F(\kappa))>\kappa$; the latter is the König obstruction from [[thm-konig]]. This is orientation only. It asserts neither Easton's realization theorem nor any singular-cardinal prescription.

