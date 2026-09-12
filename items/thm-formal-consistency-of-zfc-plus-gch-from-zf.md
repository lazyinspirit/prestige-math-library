---
id: thm-formal-consistency-of-zfc-plus-gch-from-zf
kind: theorem
title: Formal consistency of ZFC plus GCH relative to ZF
status: draft
origin: pipeline
deps: [lem-finite-fragment-l-interpretation-with-gch, thm-formal-relative-consistency-from-verified-proof-reduction]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kunen, Set Theory, Chapter VI Corollary 4.9, p. 175"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
    - title: "UCLA 220C notes, Constructible Sets §8, pp. 293–295"
      url: https://www.math.ucla.edu/~dam/220c.1.14s/220Cynm.pdf
justified_by: []
forward_refs: []
---

## Statement

For the fixed arithmetizations, a verified proof transformation establishes
$\operatorname{Con}(\mathrm{ZF})$ implies
$\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. It does not assume a
transitive set model of ZF.

## Facts & Assumptions

**Given:** The certified theories, contradiction sentence and PA
representations fixed in the preceding lemma and in F2.

[F1] [[lem-finite-fragment-l-interpretation-with-gch]] supplies a total
primitive-recursive translation of certified
$\mathrm{ZFC}+\mathrm{GCH}$ derivations to ZF derivations, together with the
PA proof of checker acceptance and the fixed contradiction-refutation block.

[F2] [[thm-formal-relative-consistency-from-verified-proof-reduction]] turns a
base-verified total map from target refutations to source refutations into the
corresponding formal consistency implication.

## Proof

1.1 Define $r(p)$ by the translator of F1 followed by its fixed block which turns the guarded translation of the target contradiction into the selected ZF contradiction. If $p$ is malformed, use the translator's stipulated total default. PA proves totality and $\forall p\bigl(\operatorname{Prf}_{\mathrm{ZFC}+\mathrm{GCH}}(p,\ulcorner\bot\urcorner)\to\operatorname{Prf}_{\mathrm{ZF}}(r(p),\ulcorner\bot\urcorner)\bigr)$. This is one assertion about all proof codes, not an external selection of a new finite fragment after entering PA. [F1, given]

2.1 Apply F2 with $T=\mathrm{ZF}$ and $U=\mathrm{ZFC}+\mathrm{GCH}$ to the map $r$. It yields $\mathrm{PA}\vdash\operatorname{Con}(\mathrm{ZF})\longrightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$. Only numerical proof codes occur in this argument. In particular, neither step constructs nor assumes a set model, a well-founded model, or a transitive model of ZF. [F2, step 1.1] ∎
