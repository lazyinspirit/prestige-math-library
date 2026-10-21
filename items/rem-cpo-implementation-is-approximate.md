---
id: rem-cpo-implementation-is-approximate
kind: remark
title: "Practical CPO updates do not inherit exact safety guarantees automatically"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - alg-constrained-policy-optimization
  - thm-policy-performance-bound-by-average-divergence
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§§6.1–6.3 and §9, PDF pp. 4–7."
---

## Remarks

An expected discounted-cost constraint controls an expectation. It bounds the probability of a specified pathwise violation only when the cost signal is linked to that event; by itself it does not guarantee pathwise safety or safe exploration. The performance theorem concerns exact policy returns. Its total-variation branch is choice-free, while its average-KL branch assumes the Axiom of Choice. The practical CPO update instead uses sample estimates, a linearized reward/cost objective, a second-order KL approximation, conjugate-gradient solves, and a backtracking line search against sample-estimated constraints. Optional nonnegative cost shaping changes the constrained signal but supplies no error bound for the sample estimates or numerical solves. Consequently, the ideal theorem does not by itself certify the sampled iterates' true costs or imply convergence of the implementation; this remark asserts no such guarantee.

## Remarks references

[[thm-policy-performance-bound-by-average-divergence|The exact expected-return bounds and their choice-free TV/AC-conditional KL branches.]]

[[alg-constrained-policy-optimization|The sample-based update, quadratic approximation, CG solves, line search, and optional cost shaping.]]

[Achiam et al., *Constrained Policy Optimization*, §§6.1–6.3 and §9](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
