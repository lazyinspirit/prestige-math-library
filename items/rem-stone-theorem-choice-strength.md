---
id: rem-stone-theorem-choice-strength
kind: remark
title: "A. H. Stone's theorem that every metric space is paracompact is not choice-free"
status: published
origin: session
proved_here: false
deps: [rem-urysohn-lemma-not-a-zf-theorem]
justified_by: []
forward_refs: [def-axiom-of-choice, thm-stone-metric-spaces-are-paracompact, rem-paracompactness-choice-and-convention-ledger]
aliases: []
landmark: false
short: "not provable in ZF + DC; not implied by BPI"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice, Proc. Amer. Math. Soc. 126 (1998), 1211-1218"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
    - title: "S. M. Corson, The independence of Stone's theorem from the Boolean prime ideal theorem, Proc. Amer. Math. Soc. 148 (2020), 5381-5386"
      url: "https://doi.org/10.1090/proc/15164"
    - title: "S. M. Corson, The independence of Stone's Theorem from the Boolean Prime Ideal Theorem (arXiv:2001.06513)"
      url: "https://arxiv.org/abs/2001.06513"
    - title: "Paracompact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Paracompact_space"
    - title: "T. Jech, The Axiom of Choice, North-Holland (1973), Theorem 9.1 (multiple choice implies AC in ZF)"
      url: "https://archive.org/details/axiomofchoice0000jech"
pipeline_run: null
---

## Statement

**Stone's theorem.** Every metric space is paracompact.

The following are relative to the consistency of ZF.

**(a) Not provable in ZF + DC.** Good, Tree and Watson (1998) show that Stone's
theorem does not follow from ZF together with the axiom of dependent choice.

**(b) Not implied by BPI.** Corson (2020) gives a permutation model in which the
Boolean prime ideal theorem holds and Stone's theorem fails; the offending metric
space takes only rational distances and is not even metacompact. Transfer
theorems carry the independence to ZF. This answers a question left open by Good,
Tree and Watson.

**(c) What is not known.** Stone's theorem is **not known** to be equivalent to
the Axiom of Choice, and no published result places it strictly below AC. What
Good, Tree and Watson do record on the upper side is that every proof of Stone's
theorem known to them in fact proves a stronger statement that implies AC: their
Proposition 5 shows that "every discrete metric space is *effectively*
metacompact", where a refinement is effective when a function chooses a member of
the cover containing each refining set, already yields the axiom of multiple
choice for disjoint families, and the axiom of multiple choice implies the Axiom
of Choice over ZF. Note that the last step is a ZF fact, not a weakening: over ZF
multiple choice and the Axiom of Choice are **equivalent**, so "the axiom of
multiple choice" is not an upper bound below AC here. It is only over ZFA that
the two come apart, which is why the models in (a) and (b) are permutation models
needing a transfer theorem.

## Remarks

- **Not proved in this library.** No part of the independence analysis is proved
  here. Paracompactness and the choice-based proof of Stone's theorem are
  unavailable at this point in the reading order; they are developed later in
  [[thm-stone-metric-spaces-are-paracompact]].

- **What would prove it.** Permutation models with Pincus-style transfer, the
  same track named in [[rem-cohen-forcing-ac-independent]], together with a ZF
  development of metric spaces, refinements and local finiteness.

- **Why it matters here.** Paracompactness of metric spaces is used silently
  wherever partitions of unity, metrisation theorems or Stone-type refinements
  appear, and it is the sort of statement that reads as pure point-set topology.
  The later proof records its costs in
  [[rem-paracompactness-choice-and-convention-ledger]]; its exact strength
  relative to [[def-axiom-of-choice]] remains open.

- **Conditional discipline.** Clauses (a) and (b) are relative to the consistency
  of ZF. Clause (c) mixes two things and they are kept apart: "not known to be
  equivalent to AC" is a statement about the current state of knowledge and not a
  mathematical claim, recorded so that no later page over-reports the result as
  "equivalent to AC"; the facts about effective metacompactness and about
  multiple choice are ordinary ZF theorems and need no consistency hypothesis.
