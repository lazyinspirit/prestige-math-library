---
id: thm-relative-consistency-bpi-without-urysohn
kind: theorem
title: "Relative consistency of BPI without Urysohn's lemma"
status: draft
origin: pipeline
deps: [thm-countable-first-order-completeness, def-brunner-ordered-lauchli-permutation-models, lem-brunner-choice-and-urysohn-obstructions, thm-extreme-amenability-yields-bpi-in-finite-support-models, lem-ordered-rational-automorphism-stabilizers-are-extremely-amenable, lem-brunner-urysohn-obstruction-is-injectively-boundable, thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-boolean-prime-ideal-principle, def-normal-and-t4-spaces]
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

[F4] Pincus transfer with the exceptional clauses permits BPI to be conjoined with the certified sentence ([[thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions]]). The verified constructible-universe reduction gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]), and countable first-order completeness supplies a model of that theory without any transitivity or well-foundedness conclusion ([[thm-countable-first-order-completeness]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. By [F4] obtain a possibly externally ill-founded model $M$ of $\mathrm{ZFC}+\mathrm{GCH}$. All constructions in the next steps are interpreted internally in $M$. [given, F4]

2.1 Inside $M$, let $A=\{\langle0,q\rangle:q\in\mathbb Q^M\}$, ordered by the rational order of $M$, and represent sets by tagged objects $\langle1,S\rangle$. Define the tagged ZFA hierarchy by $X_0=A$, $X_{\alpha+1}=A\cup\{\langle1,S\rangle:S\subseteq X_\alpha\}$ and unions at limits, and put $u\in_*\langle1,S\rangle$ exactly when $u\in S$. Interpreted inside $M$, this is a model of ZFA+AC: the usual tagged constructions give Extensionality, Pairing, Union and Power Set; translated Separation and Replacement are instances in $M$ (Collection bounds the construction ranks of Replacement images); minimal construction rank gives Foundation; the tagged copy of $\omega^M$ gives Infinity; and an $M$-well-order of every underlying member set gives the tagged choice function. This internal tagged construction does not require $M$ to be externally transitive. [step 1.1]

3.1 In this ZFA+AC interpretation form the rational-ordered finite-support Läuchli model of [F1]. The automorphism group and all finite stabilisers are the objects computed internally by $M$. Thus [F1] gives their internal extreme amenability, and the arbitrary-ground formulation [F2] gives BPI in the hereditarily symmetric interpretation. [step 2.1, F1, F2]

4.1 By [F3] the same interpretation contains the certified Urysohn obstruction, so BPI and that certified sentence hold together there. [step 3.1, F3]

5.1 By [F4], the conjunction of BPI with the certified sentence transfers to an atom-free model of $\mathrm{ZF}$. Therefore $$\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+\neg\mathrm{URY}).$$ This is an external relative-consistency construction. The model supplied by completeness need not be transitive; the internal tagged interpretation and the arbitrary-ground BPI theorem are precisely what makes the construction apply. No unprovided uniform proof-code reduction for the subsequent permutation and Pincus constructions is asserted. [step 1.1, step 2.1, step 3.1, step 4.1, F4] ∎
