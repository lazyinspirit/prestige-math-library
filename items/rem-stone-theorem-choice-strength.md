---
id: rem-stone-theorem-choice-strength
kind: remark
title: "A. H. Stone's theorem that every metric space is paracompact is not choice-free"
status: draft
origin: session
proved_here: false
deps: [rem-urysohn-lemma-not-a-zf-theorem]
justified_by: []
forward_refs: [rem-choice-ledger, def-axiom-of-choice]
aliases: []
landmark: false
short: "not provable in ZF + DC; not implied by BPI"
verification:
  precheck: n/a
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
the Axiom of Choice, and no published result places it strictly below AC. The
best upper bound recorded in the literature is the axiom of multiple choice.

## Remarks

- **Not proved in this library.** No part of this is proved here; no topology
  track exists at this point in the library, so even the statement of
  paracompactness is being borrowed.

- **What would prove it.** Permutation models with Pincus-style transfer, the
  same track named in [[rem-cohen-forcing-ac-independent]], together with a ZF
  development of metric spaces, refinements and local finiteness.

- **Why it matters here.** Paracompactness of metric spaces is used silently
  wherever partitions of unity, metrisation theorems or Stone-type refinements
  appear, and it is the sort of statement that reads as pure point-set topology.
  When this library reaches those pages, Stone's theorem must be recorded in
  [[rem-choice-ledger]] as a use of choice, not as a free structural fact, and
  the honest entry has to say that its exact strength relative to
  [[def-axiom-of-choice]] is open.

- **Conditional discipline.** Clauses (a) and (b) are relative to the consistency
  of ZF. Clause (c) is a statement about the current state of knowledge and is
  not a mathematical claim; it is recorded so that no later page over-reports the
  result as "equivalent to AC".
