---
id: alg-finite-candidate-power-sample-size-search
kind: algorithm
title: "Finite-candidate power and sample-size search"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-power-and-sample-size-planning-specification
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §§7.1 and 7.3–7.4, printed pp. 149–150, 153–159"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Input a planning specification [[def-power-and-sample-size-planning-specification]], a finite ordered list $d_1,\ldots,d_m$ of its candidate plans with $n(d_1)\le\cdots\le n(d_m)$, and an exact evaluator that terminates on each listed plan and returns true exactly when that plan meets all requested power, precision, allocation, and resource conditions. The list order among equal-size plans is part of the input.

Inspect $d_1,\ldots,d_m$ in order. Return the first plan for which the evaluator returns true, together with its total size $n(d_j)$. If no entry passes, return $\text{none}$. If $m=0$, return $\text{none}$ without an evaluation.

This procedure certifies $\text{none}$ only for the supplied finite list. The exact evaluator is an input subroutine; no numerical approximation or universal termination claim for arbitrary probability laws is part of this algorithm.
