---
id: thm-relative-consistency-bpi-without-stone
kind: theorem
title: "Relative consistency of BPI with failure of Stone's theorem"
status: published
origin: pipeline
deps: [thm-countable-first-order-completeness, def-corson-ordered-rational-permutation-model, lem-corson-rational-metric-not-metacompact, lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable, thm-extreme-amenability-yields-bpi-in-finite-support-models, lem-corson-stone-obstruction-is-ordinal-boundable, thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions, def-boolean-prime-ideal-principle, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-paracompact-space, def-metacompact-space]
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
verification:
  audited: 2026-09-22
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

[F2] The model contains the rational metric space with an open cover having no point-finite **open** refinement ([[lem-corson-rational-metric-not-metacompact]]), and that failure is certified as an atom-blind boundable sentence with the bound $\omega+41$ ([[lem-corson-stone-obstruction-is-ordinal-boundable]]).

[F3] Pincus transfer with the exceptional clauses transfers BPI together with the certified sentence ([[thm-pincus-transfer-for-bpi-and-injectively-boundable-conjunctions]]). Corson's Proposition 6 states this exact transfer for the conjunction of BPI and the ordinal-boundable Stone obstruction. [source]

[F4] The verified constructible-universe reduction gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]), and countable first-order completeness supplies a model of the latter theory without a transitivity or well-foundedness conclusion ([[thm-countable-first-order-completeness]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. By [F4] obtain a possibly externally ill-founded model $M$ of $\mathrm{ZFC}+\mathrm{GCH}$. All following constructions are interpreted internally in $M$. [given, F4]

2.1 In $M$ choose its countable rational ordered Urysohn metric structure $U_{\mathbb Q}^{<}$ and let $A=\{\langle0,u\rangle:u\in U_{\mathbb Q}^{<}\}$, carrying the transported order and metric. Represent sets by tagged objects $\langle1,S\rangle$ and form the class hierarchy $X_0=A$, $X_{\alpha+1}=A\cup\{\langle1,S\rangle:S\subseteq X_\alpha\}$, with unions at limits and membership in a tag given by membership in its second coordinate. Internally this satisfies ZFA+AC: tagged set operations give the elementary axioms and Power Set; translated Separation and Replacement follow in $M$, with Collection bounding construction ranks; minimal construction rank gives Foundation; and $M$'s well-orders give tagged choice functions. No external well-foundedness of $M$ is used. [step 1.1]

3.1 Form Corson's ordered-rational finite-support permutation model inside this ZFA+AC interpretation. The group, topology, finite stabilisers and their extreme amenability are all computed internally. Hence [F1], using the arbitrary-ground form of the fixed-point theorem, gives BPI in the hereditarily symmetric interpretation. By [F2] that interpretation also contains the certified rational metric space and its open cover with no point-finite open refinement. [step 2.1, F1, F2]

4.1 By [F3], the conjunction of BPI with the certified sentence transfers from this permutation model to an atom-free model of $\mathrm{ZF}$. Consequently $$\operatorname{Con}(\mathrm{ZF}) \Rightarrow \operatorname{Con}(\mathrm{ZF}+\mathrm{BPI}+ \text{there is a metrizable nonmetacompact space}).$$ This is Corson's external relative-consistency construction. Completeness did not supply a transitive model; the internal tagged interpretation and the arbitrary-ground BPI theorem provide the required bridge. No application of the formal proof-reduction interface, and hence no unprovided uniform code map, is asserted. [step 1.1, step 2.1, step 3.1, F3]

5.1 A space that is not metacompact has an open cover with no point-finite open refinement. Every locally finite open refinement is point-finite, so that cover has no locally finite open refinement either. The space is therefore not paracompact, and Stone's theorem fails in the transferred model. [step 4.1, F2] ∎
