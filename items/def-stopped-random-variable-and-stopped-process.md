---
id: def-stopped-random-variable-and-stopped-process
kind: definition
title: Stopped random variable and stopped process
status: draft
origin: pipeline
deps: [def-discrete-stopping-time, def-adapted-and-integrable-stochastic-process]
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
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §§2.3 and 2.8", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

For an adapted real process $X$, a stopping time $\tau$, and a fixed real cemetery value $x_\infty$, define
$$X_\tau=\sum_{k\ge0}X_k1_{\{\tau=k\}}+x_\infty1_{\{\tau=\infty\}}.$$
The level events are disjoint and exactly one displayed term is active, so the value is unambiguous. If an actual terminal variable $X_\infty$ is separately supplied, it may replace $x_\infty$ on $\{\tau=\infty\}$, but that convention must be stated.

The **stopped process** is
$$X_n^\tau=X_{n\wedge\tau}.$$
Because $n\wedge\tau\in\{0,\ldots,n\}$, this expression never evaluates the cemetery value and equals the finite sum
$$\sum_{k=0}^{n-1}X_k1_{\{\tau=k\}}+X_n1_{\{\tau\ge n\}}.$$
