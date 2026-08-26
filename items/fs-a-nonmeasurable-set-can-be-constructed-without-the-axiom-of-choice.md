---
id: fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice
kind: false-statement
title: "FALSE, relative to an inaccessible cardinal: ZF + DC proves that a nonmeasurable subset of $\\mathbb{R}$ exists"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [rem-solovay-model, rem-shelah-inaccessible-and-the-baire-property]
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. M. Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: "https://en.wikipedia.org/wiki/Solovay_model"
    - title: "S. Shelah, Can you take Solovay's inaccessible away?"
      url: "https://doi.org/10.1007/BF02760522"
pipeline_run: null
---

## Statement

Assume ZFC together with the existence of an inaccessible cardinal is
consistent. **FALSE.** ZF + DC proves that a nonmeasurable subset of
$\mathbb{R}$ exists. Equivalently, relative to this consistency hypothesis,
ZF + DC alone cannot guarantee a construction of such a set.

## Facts & Assumptions

**Given:** The consistency of ZFC together with the existence of an inaccessible
cardinal, and the external consistency-strength results recorded on the
published choice pages.

[L1] If ZFC together with the existence of an inaccessible cardinal is consistent, then so is ZF + DC + "every set of reals is Lebesgue measurable" ([[rem-solovay-model]]).

[L2] If ZF + DC + “every set of reals is Lebesgue measurable” is consistent, then so is ZFC + “there exists an inaccessible cardinal”; in contrast, Con(ZF) implies the consistency of ZF + DC + “every set of reals has the Baire property” ([[rem-shelah-inaccessible-and-the-baire-property]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the stated consistency hypothesis supplies a model of ZF + DC in which every set of reals is Lebesgue measurable. [L1]

2.1 If ZF + DC proved that a nonmeasurable subset of $\mathbb{R}$ exists, every model of ZF + DC would contain one. The model from step 1.1 contains none, so the asserted theorem of ZF + DC is false relative to the stated consistency hypothesis. This is precisely the consistency-strength obstruction recorded in [L2]. [step 1.1, L2] ∎
