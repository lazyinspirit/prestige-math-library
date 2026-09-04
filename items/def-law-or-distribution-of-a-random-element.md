---
id: def-law-or-distribution-of-a-random-element
kind: definition
title: "Law or distribution of a random element"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-random-element-and-real-random-variable, def-probability-measure]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 2.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Definition

Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element. Its
**law** or **distribution** is the set function
$$\mathbb P_X:\Sigma\to[0,+\infty],\qquad \mathbb P_X(B):=\mathbb P(X^{-1}(B)).$$

Thus the law of $X$ records the probability of each measurable target set by
pulling it back to an event in the original probability space.
