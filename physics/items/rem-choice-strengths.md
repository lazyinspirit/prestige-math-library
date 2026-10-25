---
id: rem-choice-strengths
kind: remark
title: "The proved choice cost of the ultrafilter lemma"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-ultrafilter-lemma, cor-ac-iff-zorn, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
short: "the local proof gives AC as an upper bound"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Axiom of Choice (Stanford Encyclopedia of Philosophy)"
      url: "https://plato.stanford.edu/entries/axiom-choice/"
pipeline_run: null
---

This item records only the choice cost established by proofs already present in
the library.

The Axiom of Choice implies Zorn's lemma, and the converse implication is also
proved here ([[cor-ac-iff-zorn]]). The proof of the ultrafilter lemma applies
Zorn's lemma to the partially ordered set of filters extending a given filter
([[thm-ultrafilter-lemma]]). Consequently the present development proves

$$\mathrm{AC}\Longrightarrow\text{every filter extends to an ultrafilter}.$$

That is an **upper bound on this proof**, not a lower bound on the statement.
Nothing in the argument proves that the ultrafilter lemma implies AC, that it is
provable in ZF, or that it is not provable in ZF. Those questions require the
later Boolean-algebra and symmetric-model machinery. Until those proofs are
built, no Foundations item may use the recorded model results as a substitute.

The distinction matters downstream. A theorem that assumes an ultrafilter may
cite that assumption directly. A theorem that constructs one using
[[thm-ultrafilter-lemma]] inherits the AC-based proof supplied here. Neither
case licenses an unproved assertion about the least possible choice principle.
