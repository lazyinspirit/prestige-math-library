---
id: fs-the-baire-property-model-needs-an-inaccessible
kind: false-statement
title: "False: the all-Baire-property model needs an inaccessible"
status: published
origin: pipeline
deps: [thm-baire-property-model-equiconsistent-with-zfc, thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible, thm-shelah-baire-model-separates-baire-property-from-measurability]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Conclusion 7.17 and its proof remark, p. 44"}
verification:
  audited: 2026-09-22
---

## Statement

False: an inaccessible-cardinal hypothesis is needed as an upper-bound
assumption to establish the relative consistency of a model of ZF+DC in which
every set of reals has the Baire property. In fact Con(ZFC) already implies the
consistency of that theory, whereas making every set of reals Lebesgue
measurable is equiconsistent with an inaccessible cardinal. This refutes the
claimed need for that stronger hypothesis; it does not assert the separate
metatheoretic negation of
$\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\mathrm{all\ BP})\to
\operatorname{Con}(\mathrm{ZFC}+\text{an inaccessible})$.

## Facts & Assumptions

**Given:** The equiconsistency theorems of this pair and the separation theorem.

[F1] [[thm-baire-property-model-equiconsistent-with-zfc]]: the equiconsistency of ZFC with ZF+DC plus universal Baire property.

[F2] [[thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible]]: the equiconsistency of universal measurability with an inaccessible.

[F3] [[thm-shelah-baire-model-separates-baire-property-from-measurability]]: the separating model with Baire property but not measurability.

## Refutation


1.1 The claim under refutation is the usual relative-consistency assertion that an inaccessible-cardinal hypothesis is needed to obtain the all-Baire-property model. To refute that requirement it suffices to produce the model relative to ZFC alone. This reading is weaker than, and must not be replaced by, the formal assertion that the target theory's consistency disproves the consistency of ZFC plus an inaccessible. [given, F1]

1.2 By [[thm-baire-property-model-equiconsistent-with-zfc]], the theory ZF+DC plus "every set of reals has the Baire property" is equiconsistent with ZFC alone: in particular,
$$\operatorname{Con}(\mathrm{ZFC})\longrightarrow\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all BP}).$$
The construction therefore needs no inaccessible-cardinal assumption, which refutes the requirement fixed in step 1.1. Equiconsistency with ZFC by itself does not prove that the target consistency fails to imply the consistency of a stronger theory, and no such claim is used here. [F1, step 1.1]

1.3 The comparison with measurability is a separate calibration: by [[thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible]], universal Lebesgue measurability is equiconsistent with ZFC plus an inaccessible cardinal. This fact neither supplies a separating model nor, by itself, proves a strict nonimplication between the two bare consistency statements; no such inference is made here. [F2]

1.4 The semantic separation is also witnessed: by [[thm-shelah-baire-model-separates-baire-property-from-measurability]] there is, relative to $\operatorname{Con}(\mathrm{ZFC})$, a model of ZF+DC in which every set of reals has the Baire property and some set of reals is not Lebesgue measurable. This shows that the two regularity assertions themselves separate; it is not offered as a proof that one formal consistency statement fails to imply another. [F3]

2.1 Steps 1.2 and 1.3 refute the alleged need to assume an inaccessible in the relative-consistency construction and identify the established equiconsistency calibrations; step 1.4 supplies the semantic contrast. No lower bound for measurability transfers to the Baire property, and no unproved nonimplication between bare consistency statements is asserted. [step 1.2, step 1.3, step 1.4] ∎
