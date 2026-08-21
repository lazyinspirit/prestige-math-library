---
id: def-semifinite-part-of-a-measure
kind: definition
title: "The semifinite part of a measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sigma-finite-and-semifinite-measures, lem-extended-reals-complete, def-countable-choice]
justified_by: [thm-semifinite-part-is-a-measure]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., §1.3, Exercise 15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $\mu$ be a measure on $(X,\mathcal A)$. Its **semifinite part** is the set function

$$\mu_{\mathrm{sf}}(E):=\sup\{\mu(F):F\in\mathcal A,\ F\subseteq E,\ \mu(F)<+\infty\},\qquad E\in\mathcal A.$$

The set inside the supremum is nonempty because it contains the value $\mu(\varnothing)=0$, and its supremum exists in $[0,+\infty]$ by [[lem-extended-reals-complete]]. Assuming the Axiom of Countable Choice ([[def-countable-choice]]), [[thm-semifinite-part-is-a-measure]] proves that this set function is a semifinite measure and identifies when it equals $\mu$.
