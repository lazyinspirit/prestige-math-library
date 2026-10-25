---
id: def-discrete-stopping-time
kind: definition
title: Discrete stopping time
status: published
origin: pipeline
deps: [def-filtration-and-filtered-probability-space, def-random-element-and-real-random-variable]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.3, pp. 9–11", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

For a filtration $(\mathcal F_n)_{n\ge0}$, a map
$$\tau:\Omega\longrightarrow\mathbb N_0\cup\{\infty\}$$
is a **stopping time** if $\{\tau\le n\}\in\mathcal F_n$ for every $n\ge0$. It is **bounded** if some deterministic $N$ satisfies $\tau\le N$ almost surely, and **finite** if $P(\tau<\infty)=1$. These notions are distinct: finite does not mean bounded.

The event condition is literal, not merely modulo null sets; no completion of the filtration is assumed. Measurability as an extended-integer-valued random variable follows from the equivalent event tests below.
