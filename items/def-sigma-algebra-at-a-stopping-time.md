---
id: def-sigma-algebra-at-a-stopping-time
kind: definition
title: Sigma-algebra at a stopping time
status: draft
origin: pipeline
deps: [def-discrete-stopping-time, lem-equivalent-event-tests-for-a-discrete-stopping-time]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Definition 2.36, p. 20", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

For a stopping time $\tau$, define
$$\mathcal F_\tau= \{A\in\mathcal F:A\cap\{\tau\le n\}\in\mathcal F_n\text{ for every }n\ge0\}.$$
It represents the events observable by time $\tau$. The definition applies when $\tau$ may equal $\infty$ and treats events as literal sets, not modulo null sets. Its closure and comparison properties are proved in the next lemma.
