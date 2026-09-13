---
id: lem-stopped-random-variable-is-measurable-at-the-stopping-time
kind: lemma
title: A stopped random variable is measurable at the stopping time
status: published
origin: pipeline
deps: [def-stopped-random-variable-and-stopped-process, def-sigma-algebra-at-a-stopping-time, lem-equivalent-event-tests-for-a-discrete-stopping-time]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Exercise 2.40, p. 20", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

If $X$ is adapted, $\tau$ is a stopping time, and the value on $\{\tau=\infty\}$ is a fixed real number, then $X_\tau$ is $\mathcal F_\tau$-measurable. In particular, $X_{\tau\wedge n}$ is $\mathcal F_{\tau\wedge n}$-measurable.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-stopped-random-variable-and-stopped-process]] gives the disjoint level-set formula.

[F2] [[def-sigma-algebra-at-a-stopping-time]] gives the event tests for $\mathcal F_\tau$.

[F3] [[lem-equivalent-event-tests-for-a-discrete-stopping-time]] makes $\{\tau=k\}\in\mathcal F_k$.

## Proof

1.1 For Borel $B$, $$\{X_\tau\in B\} =\bigcup_{k\ge0}(\{\tau=k\}\cap\{X_k\in B\}) \ \cup\ \bigl(\{\tau=\infty\}\text{ if }x_\infty\in B\bigr).$$ All finite-level terms lie in $\mathcal F$, and $\{\tau=\infty\}$ is the complement of their countable union, so the inverse image is in $\mathcal F$. [F1, F3]

2.1 Intersecting that inverse image with $\{\tau\le m\}$ deletes the infinity term and all levels above $m$, leaving $$\bigcup_{k=0}^m\{\tau=k\}\cap\{X_k\in B\}\in\mathcal F_m.$$ Thus every inverse image passes F2's tests and $X_\tau$ is $\mathcal F_\tau$-measurable. Apply the same proof to the bounded stopping time $\tau\wedge n$ for the final assertion. [F2, F3, step 1.1] ∎