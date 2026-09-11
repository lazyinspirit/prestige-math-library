---
id: "def-adapted-and-integrable-stochastic-process"
kind: "definition"
title: "Adapted and integrable stochastic process"
deps: ["def-filtration-and-filtered-probability-space", "def-random-element-and-real-random-variable", "def-expectation-of-a-nonnegative-or-integrable-random-variable"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: "draft"
origin: "pipeline"
---

## Definition

On a filtered probability space [[def-filtration-and-filtered-probability-space]], a **real stochastic process** is a sequence $(X_n)_{n\in\mathbb N_0}$ of real random variables [[def-random-element-and-real-random-variable]] on the same space. It is **adapted** when $X_n^{-1}(B)\in\mathcal F_n$ for every $n$ and every real Borel set $B$. It is **integrable** when $E|X_n|<\infty$ for every $n$, using [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

An integrable adapted process satisfies both conditions at each fixed time. Integrability here does not mean $\sup_nE|X_n|<\infty$: the deterministic process $X_n=n$ has $E|X_n|=n<\infty$ at every time but unbounded supremum. Measurability and finiteness of each integral are separate requirements. No versions, limits or choices are selected.
