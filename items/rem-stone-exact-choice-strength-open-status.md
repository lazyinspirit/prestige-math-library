---
id: rem-stone-exact-choice-strength-open-status
kind: remark
title: "The exact choice strength of Stone's theorem remains open"
status: draft
origin: pipeline
deps: [thm-relative-consistency-dc-without-stone, thm-relative-consistency-bpi-without-stone, thm-effective-metacompact-discrete-metrics-implies-ac, thm-stone-metric-spaces-are-paracompact, def-metacompact-space, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Section 4, question and Proposition 5, printed pp. 8-9"
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "Introduction and Theorem 1"
---

## Statement

As of 15 September 2026: AC proves Stone's theorem, while, assuming the
consistency of ZF, neither DC nor BPI proves it; the stronger assertion that
every open cover of every discrete metrizable space has a point-finite
refinement equipped with a refinement map implies AC; the exact strength of the
ordinary existential Stone theorem over $\mathrm{ZF}$ is not identified here
and remains open in the cited line of work.

## Remarks

- **The ZFC positive theorem.** [[thm-stone-metric-spaces-are-paracompact]] proves
  that under AC every metric space is paracompact, and it is the positive half of
  the ledger.

- **The two countermodels.** Conditional on $\operatorname{Con}(\mathrm{ZF})$,
  [[thm-relative-consistency-dc-without-stone]] gives a model of
  $\mathrm{ZF}+\mathrm{DC}$ with a metrizable nonparacompact space, and
  [[thm-relative-consistency-bpi-without-stone]] gives a model of
  $\mathrm{ZF}+\mathrm{BPI}$ with a metrizable nonmetacompact space
  ([[def-metacompact-space]]); hence, under that same consistency hypothesis,
  neither DC nor BPI proves Stone's theorem.

- **The stronger assertion.** [[thm-effective-metacompact-discrete-metrics-implies-ac]]
  proves that if every open cover of every discrete metrizable space has a
  point-finite refinement together with a refinement map, then the Axiom of
  Choice holds ([[def-axiom-of-choice]]). The refinement map is part of the
  hypothesis: the statement is about a per-cover existential pair, not about a
  global class operator, and it is not identified with the ordinary Stone
  theorem.

- **What remains open.** The gap between the ordinary existential Stone theorem
  and the effective strengthening is not closed here: no model of
  $\mathrm{ZF}$ is known to the cited authors in which Stone's theorem holds
  while the effective refinement assertion fails, and no proof of the ordinary
  theorem from a principle weaker than AC is known. The status is dated for that
  reason.
