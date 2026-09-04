---
id: def-random-element-and-real-random-variable
kind: definition
title: "Random elements and real random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-probability-measure, def-measurable-function-between-measurable-spaces, def-borel-sigma-algebra]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, Definition 1.10"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 2.1"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Definition

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let
$(S,\Sigma)$ be a measurable space. A **random element** of $S$ is a measurable
map
$$X:(\Omega,\mathcal F)\to(S,\Sigma)$$
in the sense of [[def-measurable-function-between-measurable-spaces]].

When $S=\mathbb R$ and $\Sigma=\mathcal B(\mathbb R)$ from
[[def-borel-sigma-algebra]], the map $X$ is a **real random variable**.
