---
id: alg-positive-integer-power-sample-size-search
kind: algorithm
title: "Search over all positive sample sizes with explicit stopping certificates"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - def-power-and-sample-size-planning-specification
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7 §§7.1–7.2, printed pp. 149–152; local operational formulation"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
dependency_level: 2
---

## Definition

Input the full planning specification [[def-power-and-sample-size-planning-specification]] and an exact evaluator $E$ on every positive integer $n$. Each call $E(n)$ must terminate and return a Boolean with the following meaning: $E(n)$ is true exactly when the specification has a feasible plan of total size $n$, including its sampling law/test, power or precision target, allowed allocation and resource conditions. With a fixed allocation rule this is the ordinary per-size power calculation. For several candidate plans at one size, this assumption requires exact resolution of whether any is feasible; it is not supplied by the procedure. The evaluator, and any stopping certificate below, are inputs, not a universal ability to compute probabilities of arbitrary models.

Choose one of these admissible modes.

1. **Unbounded ascending search.** Set $n=1$. Evaluate $E(n)$. If true, return $n$; otherwise replace $n$ by $n+1$ and repeat. This branch never returns $\mathrm{none}$ merely because a finite prefix failed.

2. **Certified bounded search.** Supply a nonnegative integer $B$ and a valid completeness certificate that, if any positive size is feasible, some feasible size is at most $B$. Evaluate $E(1),\ldots,E(B)$ in order, returning the first true index. If all are false, return $\mathrm{none}$; for $B=0$, return $\mathrm{none}$ immediately. The certificate is a mathematical premise covering all positive sizes, not a claim inferred from those finite evaluations. A proved feasible witness of size $B$ is one sufficient certificate.

3. **Certified infeasibility.** Supply a valid proof that $E(n)$ is false for every positive integer $n$. Return $\mathrm{none}$ without an evaluation.

The output is a sample size, not a selected allocation. Selecting a plan at that size requires an explicit witness-producing evaluator or an independently specified selection rule. The extensional target remains the least feasible positive integer, or $\mathrm{none}$ if no such integer exists. Termination properties are separate proved results; no global infeasibility decision is asserted for unrestricted black-box input.
