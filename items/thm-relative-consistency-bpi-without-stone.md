---
id: thm-relative-consistency-bpi-without-stone
kind: theorem
title: "Relative consistency of BPI with failure of Stone's theorem"
status: draft
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, lem-corson-rational-metric-not-metacompact, lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable, thm-extreme-amenability-yields-bpi-in-finite-support-models, lem-corson-stone-obstruction-is-ordinal-boundable, thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions, def-boolean-prime-ideal-principle, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-paracompact-space, def-metacompact-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "Theorem 1 and Lemma 5"
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF} + \mathrm{BPI}$ with a
metrizable nonmetacompact space is consistent; a fortiori
$\mathrm{ZF} + \mathrm{BPI}$ does not prove that every metrizable space is
paracompact ([[def-boolean-prime-ideal-principle]], [[def-metacompact-space]],
[[def-paracompact-space]]).

## Facts & Assumptions

**Given:** Corson's permutation model, its rational metric space, and the assumed consistency of $\mathrm{ZF}$.

[F1] The finite point stabilisers of the model are extremely amenable, so the model satisfies BPI ([[lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable]], [[thm-extreme-amenability-yields-bpi-in-finite-support-models]], [[def-corson-ordered-rational-permutation-model]]).

[F2] The model contains the rational metric space with an open cover having no point-finite refinement ([[lem-corson-rational-metric-not-metacompact]]), and that failure is certified as an atom-blind boundable sentence with the bound $\omega+41$ ([[lem-corson-stone-obstruction-is-ordinal-boundable]]).

[F3] Pincus transfer with the exceptional clauses transfers BPI together with the certified sentence ([[thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions]]). Corson's Proposition 6 states this exact transfer for the conjunction of BPI and the ordinal-boundable Stone obstruction. [source]

[F4] The verified constructible-universe reduction gives $operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]). A model of ZFC expands in the standard way to a model of ZFA+AC with a countably infinite set of atoms; Corson's construction is then carried out inside that atom model. [source]

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. By [F4], start with a model of $\mathrm{ZFC}+\mathrm{GCH}$, adjoin a countably infinite set of atoms, and form Corson's ordered-rational finite-support permutation model. [given, F4]

2.1 By [F1] the model satisfies BPI, and by [F2] it contains the certified metric space whose cover has no point-finite refinement; the space is metrizable with a rational-valued metric. [step 1.1, F1, F2]

3.1 By [F3], the conjunction of BPI with the certified sentence transfers from this permutation model to an atom-free model of $\mathrm{ZF}$. Consequently $$\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF} + \mathrm{BPI} + \text{there is a metrizable nonmetacompact space}).$$ This is the external relative-consistency construction proved by Corson; no application of the formal proof-reduction interface, and hence no unprovided uniform code map, is being asserted. [step 1.1, step 2.1, F3]

4.1 A space that is not metacompact has an open cover with no point-finite refinement, hence no locally finite open refinement, so it is not paracompact; therefore in that model the metrizable space is not paracompact and Stone's theorem fails. [step 3.1, F2] ∎
