---
id: cor-positive-relative-consistency-of-ch-and-gch
kind: corollary
title: Positive relative consistency of CH and GCH
status: draft
origin: pipeline
deps: [thm-formal-consistency-of-zfc-plus-gch-from-zf]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI Corollary 4.9, p. 175"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
justified_by: []
forward_refs: []
---

## Statement

$\operatorname{Con}(\mathrm{ZF})$ implies
$\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ and
$\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$; consequently
$\operatorname{Con}(\mathrm{ZFC})$ implies both positive consistency
statements.

## Facts & Assumptions

**Given:** The fixed effective presentations used by the preceding theorem;
CH is the $\aleph_0$ instance of its selected GCH sentence.

[F1] [[thm-formal-consistency-of-zfc-plus-gch-from-zf]] proves in PA that
$\operatorname{Con}(\mathrm{ZF})$ implies
$\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$.

## Proof

1.1 There is a fixed finite $\mathrm{ZFC}+\mathrm{GCH}$ proof of CH: instantiate GCH at the first infinite initial ordinal and expand the selected cardinal notation. Hence appending this proof and replacing uses of the CH axiom gives a primitive-recursive map from any $\mathrm{ZFC}+\mathrm{CH}$ refutation to a $\mathrm{ZFC}+\mathrm{GCH}$ refutation, and PA verifies the map by its finite line-prefix check. Therefore $\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ implies $\operatorname{Con}(\mathrm{ZFC}+\mathrm{CH})$. [given, construct]

2.1 Combining step 1.1 with F1 gives both implications from $\operatorname{Con}(\mathrm{ZF})$. Separately, the inclusion of every certified ZF axiom in ZFC gives an identity-on-lines primitive-recursive map from ZF refutations to ZFC refutations. Thus PA proves $\operatorname{Con}(\mathrm{ZFC})\to\operatorname{Con}(\mathrm{ZF})$. Composing this with the two implications already proved gives both conclusions from $\operatorname{Con}(\mathrm{ZFC})$ as claimed. [F1, step 1.1] ∎
