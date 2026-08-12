---
id: cex-first-moment-threshold-one-is-not-enough
kind: counterexample
title: "Expectation equal to $1$ does not force a nonnegative integer-valued variable to vanish somewhere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-expectation-on-a-finite-probability-space, thm-first-moment-method]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapter 2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement refuted

If a nonnegative integer-valued random variable satisfies $\mathbb E[X]\le1$, then some outcome has $X=0$.

## Facts & Assumptions

**Given:** The uniform probability space on a singleton and its constant random variable $X=1$.

[L1] A nonempty singleton carries a uniform finite probability space ([[def-uniform-finite-probability-space]]).

[L2] Expectation is the finite weighted sum of values ([[def-expectation-on-a-finite-probability-space]]).

[L3] The first-moment avoidance conclusion assumes the strict inequality $\mathbb E[X]<1$ ([[thm-first-moment-method]]).

## Counterexample

**Proof technique:** constructive.

1.1 Construct $X$ to equal $1$ on the unique outcome. That outcome has weight $1$, so $\mathbb E[X]=1$. [given, L1, L2, construct]

1.2 The event $\{X=0\}$ is empty. [given]

2.1 Thus the weak threshold $\mathbb E[X]\le1$ does not force a zero outcome; the strict hypothesis in [L3] is necessary. [step 1.1, step 1.2, L3, discharge-construct] ∎
