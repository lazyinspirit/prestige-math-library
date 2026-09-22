---
id: thm-baire-property-model-equiconsistent-with-zfc
kind: theorem
title: The exact equiconsistency of ZFC and the all-Baire-property model
status: published
origin: pipeline
deps: [thm-shelah-inner-model-all-sets-of-reals-have-baire-property, thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-constructible-inner-model-semantic-and-formal-schema, thm-constructible-universe-satisfies-choice, thm-shelah-ch-omega-one-sweet-construction, thm-shelah-inner-model-satisfies-zf-and-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Conclusion 7.17 and its proof remark, p. 44"}
verification:
  audited: 2026-09-22
---

## Statement

The following theories are equiconsistent: ZFC; ZFC plus "every real set
first-order definable from a real and an ordinal parameter has the Baire
property"; and ZF+DC plus "every set of reals has the Baire property". In
particular, $\operatorname{Con}(\mathrm{ZFC})$ is equivalent to
$\operatorname{Con}(\mathrm{ZF}+\mathrm{DC}+\text{all real sets have BP})$,
with no inaccessible-cardinal hypothesis.

## Facts & Assumptions

**Given:** Fixed arithmetizations of the three theories and of ZFC as in the formal-consistency items.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]]: a verified proof transformation gives $\operatorname{Con}(\mathrm{ZF})\to\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$, without a transitive model assumption.

[F2] [[thm-shelah-ch-omega-one-sweet-construction]]: under ZFC+CH there is a CH-length sweet construction whose final algebra is ccc and has the stated homogeneity, free-amalgamation and $\mathrm{UM}$-quotient properties. This interface supplies that mathematical construction, not a uniform formal forcing verification.

[F3] Shelah's numbered conclusion cited in the source block states exactly that ZFC, ZFC plus the real-and-ordinal-definable Baire-property assertion, and ZF+DC plus universal Baire property are equiconsistent. Its proof remark supplies both forward models: Theorem 7.16 gives the definable-set Baire property in the full forcing extension, while $HOD(S)$ gives the ZF+DC model with universal Baire property. It invokes Gödel's $L$ for the reverse implications. This item uses that published equiconsistency theorem directly; it does not infer a proof-code compiler from [F2].

[F4] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]] with [[thm-shelah-inner-model-all-sets-of-reals-have-baire-property]]: inside the extension, $N$ satisfies ZF+DC and every set of reals in $N$ has the Baire property. This interface supplies only the inner model; it is not used to transfer Baire-property witnesses or arbitrary definable sets upward to the full extension.

[F5] [[thm-constructible-inner-model-semantic-and-formal-schema]] with [[thm-constructible-universe-satisfies-choice]]: for every model of any of the three theories, its constructible universe satisfies ZFC internally.

## Proof

1.1 The exact three-way equiconsistency assertion is Shelah's cited conclusion by [F3]. We record how its two directions match the semantic interfaces developed on this page. [F3]

1.2 For the forward construction, the standard $L$ reduction and [F1] provide the CH ground assumed by [F2]. The source theorem and proof remark incorporated in [F3] give the real-and-ordinal-definable Baire-property clause in the full forcing extension. Separately, [F4] gives the inner model $N\models\mathrm{ZF}+\mathrm{DC}+$ universal Baire property. These are the two models named in [F3]; no inference from the inner model's witnesses to the full extension is made. [F1, F2, F3, F4]

1.3 For the reverse direction, [F3] invokes Gödel's work on $L$; [F5] is the library's semantic counterpart: the constructible universe internally satisfies ZFC, and the Baire-property clause plays no role. [F3, F5]

1.4 No inaccessible cardinal is used: the forward route of [F3] is the ccc sweet construction over CH, and the reverse route is $L$. [F1, F2, F3]

2.1 Thus the published equiconsistency theorem [F3], with steps 1.2--1.3 identifying its constructions with the exact semantic results proved on this page, gives the Statement. Nothing here claims that [F2] alone supplies the uniform proof-code verification required by a formal forcing compiler. [F3, step 1.2, step 1.3, step 1.4] ∎
