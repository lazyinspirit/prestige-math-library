---
id: fs-the-baire-property-model-needs-an-inaccessible
kind: false-statement
title: "False: the all-Baire-property model needs an inaccessible"
status: draft
origin: pipeline
deps: [thm-baire-property-model-equiconsistent-with-zfc, thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible, thm-shelah-baire-model-separates-baire-property-from-measurability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Conclusion 7.17 and its proof remark, p. 44"}
---

## Statement

False: obtaining a model of ZF+DC in which every set of reals has the Baire
property requires the consistency of an inaccessible cardinal. In fact its
consistency strength is exactly that of ZFC, whereas making every set of reals
Lebesgue measurable has the consistency strength of an inaccessible cardinal.

## Facts & Assumptions

**Given:** The equiconsistency theorems of this pair and the separation theorem.

[F1] [[thm-baire-property-model-equiconsistent-with-zfc]]: the equiconsistency of ZFC with ZF+DC plus universal Baire property.

[F2] [[thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible]]: the equiconsistency of universal measurability with an inaccessible.

[F3] [[thm-shelah-baire-model-separates-baire-property-from-measurability]]: the separating model with Baire property but not measurability.

## Refutation


1.1 The claim under refutation asserts that $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all BP})$ implies $\operatorname{Con}(\mathrm{ZFC}+\text{inaccessible})$. [given, F1]

1.2 By [[thm-baire-property-model-equiconsistent-with-zfc]], the theory ZF+DC plus "every set of reals has the Baire property" is equiconsistent with ZFC alone: $\operatorname{Con}(\mathrm{ZFC})$ is equivalent to $\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all BP})$, with no inaccessible-cardinal hypothesis in either direction. This is a complete refutation of the asserted implication. [F1]

1.3 The comparison with measurability is exact: by [[thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible]], universal Lebesgue measurability is equiconsistent with ZFC plus an inaccessible cardinal, so the two regularity properties differ in consistency strength while both are consequences of the single Solovay-style model. [F2]

2.1 The semantic separation is also witnessed: by [[thm-shelah-baire-model-separates-baire-property-from-measurability]] there is, relative to $\operatorname{Con}(\mathrm{ZFC})$, a model of ZF+DC in which every set of reals has the Baire property and some set of reals is not Lebesgue measurable; in such a model the measurability lower bound of step 1.3 cannot hold, while the Baire-property clause does. [F3]

3.1 Steps 1.2 and 1.3 refute the alleged inaccessible requirement for the Baire-property model and identify the exact strength of each regularity property, and step 2.1 supplies the semantic contrast; no lower bound for measurability transfers to the Baire property. [step 1.2, step 1.3, step 2.1] ∎
