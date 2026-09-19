---
id: thm-relative-consistency-countable-choice-without-urysohn
kind: theorem
title: "Relative consistency of Countable Choice without Urysohn's lemma"
status: draft
origin: pipeline
deps: [def-brunner-ordered-lauchli-permutation-models, lem-brunner-choice-and-urysohn-obstructions, lem-brunner-urysohn-obstruction-is-injectively-boundable, thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-countable-choice, def-normal-and-t4-spaces]
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
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF} + \mathrm{AC}_{\omega} +
\text{failure of Urysohn's lemma}$ is consistent: there is a model of
$\mathrm{ZF}$ with countable choice ([[def-countable-choice]]) in which some
normal space has two disjoint closed sets admitting no continuous separation
([[def-normal-and-t4-spaces]]).

## Facts & Assumptions

**Given:** The real-ordered countable-compact-support Läuchli model, its continuum, and the assumed consistency of $\mathrm{ZF}$.

[F1] The real-ordered model satisfies countable choice, and its continuum is a normal space on which every continuous real-valued function is constant, so Urysohn's lemma fails there ([[lem-brunner-choice-and-urysohn-obstructions]], [[def-brunner-ordered-lauchli-permutation-models]]).

[F2] The failure is certified by an atom-blind boundable sentence with a fixed absolute bound below $\omega+\omega$ ([[lem-brunner-urysohn-obstruction-is-injectively-boundable]]).

[F3] Pincus transfer: a certified atom-blind boundable sentence transfers to a model of $\mathrm{ZF}$, and the exceptional clauses permit countable choice to be conjoined when it holds in the permutation model ([[thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions]]).

[F4] The verified constructible-universe reduction gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]). A model of ZFC expands in the standard way to a ZFA+AC model with the required countably infinite atom set. The subsequent permutation-model and Pincus constructions are used as an external model construction, not as an unprovided uniform proof-code reduction.

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. By [F4], start with a model of $\mathrm{ZFC}+\mathrm{GCH}$, adjoin the countably infinite ordered atom set, and form the real-ordered countable-compact-support Läuchli permutation model. [given, F4]

2.1 By [F1] the model satisfies countable choice and contains the continuum with its two endpoint closed sets, on which every continuous real-valued function is constant; this is the failure of Urysohn's lemma, and by [F2] it is certified with an absolute bound. [step 1.1, F1, F2]

3.1 By [F3] the certified sentence and countable choice transfer together to a model of $\mathrm{ZF}$; the transfer is applied to the finite conjunction consisting of the certified obstruction and the exceptional clause $\mathrm{AC}_\omega$, and no other sentence crosses. [step 2.1, F3]

4.1 The model obtained in step 3.1 yields the external relative-consistency implication $$\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF} + \mathrm{AC}_\omega + \neg\mathrm{URY}),$$ where $\neg\mathrm{URY}$ asserts the existence of the carried normal space with no separating continuous function. No claim is made that the formal proof-reduction theorem applies without its required uniform verified code map. [step 1.1, step 3.1, F4]

5.1 The result is conditional on $\operatorname{Con}(\mathrm{ZF})$ throughout, and no unconditional model or nonprovability claim is made; the inaccessible Tachtsis paper and its erratum are not used, and countable choice is not mislabelled as an injectively boundable sentence. [step 4.1, F3] ∎
