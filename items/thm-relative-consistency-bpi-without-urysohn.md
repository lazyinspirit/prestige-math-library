---
id: thm-relative-consistency-bpi-without-urysohn
kind: theorem
title: "Relative consistency of BPI without Urysohn's lemma"
status: draft
origin: pipeline
deps: [def-brunner-ordered-lauchli-permutation-models, lem-brunner-choice-and-urysohn-obstructions, thm-extreme-amenability-yields-bpi-in-finite-support-models, lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable, lem-brunner-urysohn-obstruction-is-injectively-boundable, thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions, thm-formal-consistency-of-zfc-plus-gch-from-zf, thm-formal-relative-consistency-from-verified-proof-reduction, def-boolean-prime-ideal-principle, def-normal-and-t4-spaces]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
    - title: "Andreas Blass, Partitions and Permutation Groups"
      url: "https://janos.cs.technion.ac.il/RESEARCH/AMS-Book-files/pdfs/11_Blass.pdf"
      locator: "Definition 2.1, Theorems 5.1-5.2, pp. 2 and 12-14"
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF} + \mathrm{BPI} + \text{failure
of Urysohn's lemma}$ is consistent: there is a model of $\mathrm{ZF}$ in which
the Boolean prime ideal principle holds ([[def-boolean-prime-ideal-principle]])
and some normal space has two disjoint closed sets admitting no continuous
separation ([[def-normal-and-t4-spaces]]).

## Facts & Assumptions

**Given:** The rational-ordered finite-support Läuchli model, its continuum, and the assumed consistency of $\mathrm{ZF}$.

[F1] In the rational-ordered finite-support model the stabilisers of finite atom sets are extremely amenable, because they are finite products of copies of $\operatorname{Aut}(\mathbb{Q},<)$ ([[lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable]], [[def-brunner-ordered-lauchli-permutation-models]]).

[F2] Extreme amenability of the finite stabilisers yields BPI in the finite-support permutation model ([[thm-extreme-amenability-yields-bpi-in-finite-support-models]]).

[F3] The same model contains the ordered continuum with every continuous real-valued function constant, hence a normal space violating Urysohn's lemma ([[lem-brunner-choice-and-urysohn-obstructions]]), and that failure is certified with an absolute bound ([[lem-brunner-urysohn-obstruction-is-injectively-boundable]]).

[F4] Pincus transfer with the exceptional clauses permits BPI to be conjoined with the certified sentence ([[thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions]]), and the formal consistency compilers turn the transfer into a syntactic implication ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]], [[thm-formal-relative-consistency-from-verified-proof-reduction]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$ and form the rational-ordered finite-support Läuchli permutation model. [given]

2.1 By [F1] the finite stabilisers in that model are extremely amenable, so by [F2] the model satisfies BPI. [step 1.1, F1, F2]

2.2 By [F3] the model contains the certified Urysohn obstruction, so BPI and that certified sentence hold together in the permutation model. [step 1.1, F3]

3.1 By [F4] the conjunction of BPI with the certified sentence transfers to a model of $\mathrm{ZF}$, and the formal consistency compilers yield $\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF} + \mathrm{BPI} + \neg\mathrm{URY})$; the statement is therefore proved relative to $\operatorname{Con}(\mathrm{ZF})$. [step 2.1, step 2.2, F4] ∎
