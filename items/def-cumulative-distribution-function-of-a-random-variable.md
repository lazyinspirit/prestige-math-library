---
id: def-cumulative-distribution-function-of-a-random-variable
kind: definition
title: "Cumulative distribution function of a real random variable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-law-or-distribution-of-a-random-element]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 2.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
    - title: "Jean-Francois Le Gall, Integration, Probabilities and Stochastic Processes, Section 8.1.6"
      url: "https://www.imo.universite-paris-saclay.fr/~jean-francois.le-gall/IPPA2.pdf"
---

## Definition

Let $X$ be a real random variable. Its **cumulative distribution function** is
the function
$$F_X:\mathbb R\to[0,1],\qquad F_X(x):=\mathbb P(X\le x)=\mathbb P_X((-\infty,x]).$$

The second expression is the same quantity written in terms of the law
[[def-law-or-distribution-of-a-random-element]] of $X$.
