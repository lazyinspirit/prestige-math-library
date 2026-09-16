---
id: thm-baire-property-model-equiconsistent-with-zfc
kind: theorem
title: The exact equiconsistency of ZFC and the all-Baire-property model
status: draft
origin: pipeline
deps: [thm-shelah-inner-model-all-sets-of-reals-have-baire-property, thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-formal-consistency-transfer-by-forcing, thm-constructible-inner-model-semantic-and-formal-schema, thm-constructible-universe-satisfies-choice, thm-shelah-ch-omega-one-sweet-construction, thm-shelah-inner-model-satisfies-zf-and-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Conclusion 7.17 and its proof remark, p. 44"}
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

[F2] [[thm-shelah-ch-omega-one-sweet-construction]]: under ZFC+CH there is a uniformly definable CH-length sweet construction whose final algebra is ccc and has the homogeneity, free-amalgamation and $\mathrm{UM}$-quotient properties; the construction, the generic extension and the class $N=HOD(S)$ are first-order definable from the ground model and its well-order.

[F3] [[thm-formal-consistency-transfer-by-forcing]]: a uniform formal forcing verification produces the proof transformation $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(T)$ for a certified target theory $T$; the definability of [F2] supplies the required uniform verification fragment by fragment.

[F4] [[thm-shelah-inner-model-satisfies-zf-and-dependent-choice]] with [[thm-shelah-inner-model-all-sets-of-reals-have-baire-property]]: inside the extension, $N$ satisfies ZF+DC, and every set of reals in $N$ has the Baire property; hence the definable-real-and-ordinal-parameter clause of the second theory holds in the full extension.

[F5] [[thm-constructible-inner-model-semantic-and-formal-schema]] with [[thm-constructible-universe-satisfies-choice]]: for every model of any of the three theories, its constructible universe satisfies ZFC internally.

## Proof

1.1 From a model of ZFC: passing to its constructible universe gives a model of ZFC+GCH by [F5] and the formal transformation [F1], in particular one satisfying CH, the only extra hypothesis of [F2]. [F1, F5]

1.2 Apply [F2] inside that model: the construction is defined by a transfinite recursion from the well-order, so it defines a forcing notion and a generic extension uniformly in the finite fragment considered (each axiom instance of the target theory uses only finitely much of the construction). [F2]

1.3 Conversely, let $T$ be either ZFC or the definable-BP theory or ZF+DC+all-BP. By [F5], the internally defined constructible universe of a model of $T$ satisfies ZFC, giving $\operatorname{Con}(T)\to\operatorname{Con}(\mathrm{ZFC})$ with the constructible well-order supplying Choice. The Baire-property clause plays no role in this direction. [F5]

2.1 In the resulting extension, every set of reals definable from a real and ordinal parameter has the Baire property by [F4], and the inner model $N$ of the extension satisfies ZF+DC with all real sets having the Baire property, again by [F4]. Thus both stronger theories are modelled from a ZFC model, uniformly in the fragment. [F4, step 1.2]

2.2 No inaccessible cardinal is used in either direction: the upper bound is obtained from ZFC+CH by the ccc sweet construction, and the lower bound uses only the constructible universe, whose existence needs no large cardinal. [F1, F2, F3, step 1.3]

3.1 The compiler [F3] turns the uniform verification of step 2.1 into a proof of $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(T)$ for $T$ either of the two stronger theories, without assuming a transitive model of ZFC. [F3, step 2.1]

4.1 The steps above give the two implications between $\operatorname{Con}(\mathrm{ZFC})$ and the consistency of each of the two stronger theories, and step 2.2 records the absence of any inaccessible hypothesis; this is the Statement. [step 3.1, step 1.3, step 2.2] ∎
