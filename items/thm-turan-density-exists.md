---
id: thm-turan-density-exists
kind: theorem
title: "Every finite graph with an edge has a Turán density $\\pi(H)=\\lim_{n\\to\\infty}\\operatorname{ex}(n,H)/\\binom n2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-normalized-extremal-number-monotonicity, def-asymptotic-extremal-notation-and-edge-density, thm-monotone-convergence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For every finite graph $H$ with at least one edge, the limit

$$\pi(H):=\lim_{n\to\infty}\frac{\operatorname{ex}(n,H)}{\binom n2}$$

exists in $[0,1]$. It equals

$$\inf_{n\ge2}\frac{\operatorname{ex}(n,H)}{\binom n2}.$$

## Facts & Assumptions

**Given:** Monotonicity from [[prop-normalized-extremal-number-monotonicity]] and the normalization of [[def-asymptotic-extremal-notation-and-edge-density]].

The theorem [[thm-monotone-convergence]] states that every nonincreasing real sequence bounded below converges to its infimum.

## Proof

**Proof technique:** apply bounded monotone convergence.

1.1 The normalized extremal numbers are nonincreasing. They lie in $[0,1]$ because an edge count is nonnegative and no simple $n$-vertex graph has more than $\binom n2$ edges. [given]

2.1 Bounded monotone convergence makes the sequence converge to its infimum. The bounds in step 1.1 place that value in $[0,1]$. [step 1.1, given] ∎
