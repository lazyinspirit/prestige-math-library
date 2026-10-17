---
id: lem-naive-all-pairs-collision-search-has-quadratic-work
kind: lemma
title: Naive all-pairs sphere-contact search has quadratic work
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - alg-event-driven-frictionless-sphere-contact-with-certified-events
  - thm-induction-principle
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
axiom_use: No choice axiom is used; the pair list is finite and explicitly ordered.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 6.1.8, pp. 221–222; computational-cost context; the unordered-pair count is proved locally here.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 23, slides 302–303; finite projected-step iteration context.
---

## Statement

For $P\ge2$ spheres, the naive search that evaluates every unordered pair guard exactly once per smooth segment performs $P(P-1)/2$ pair-guard evaluations. Thus it uses $O(P^2)$ pair checks; this count excludes the cost of each certified event solve, dense reintegration, and restart-error certificate. With zero or one sphere the pair list is empty, but the event-driven algorithm is defined for $P\ge2$.

## Facts & Assumptions

**Given:** The pair-enumeration loop of [[alg-event-driven-frictionless-sphere-contact-with-certified-events]] and the particle count $P\in\mathbb N$.

[F1] [[alg-event-driven-frictionless-sphere-contact-with-certified-events]]: on each smooth segment, the naive search inspects each unordered pair $i<j$ once; event-certificate solves and reintegration are charged separately.

[F2] [[lem-finite-sum-laws]]: finite sums split and telescope, and [[thm-induction-principle]] supplies induction on $P$.

## Proof

1.1 For each lower index $i=1,\ldots,P-1$, the loop tests exactly $P-i$ higher indices. Every unordered pair has a unique smaller index, so these sets of tests are disjoint and include every pair once. The count is therefore $\sum_{i=1}^{P-1}(P-i)$. [F1, given]

2.1 Reindexing by $r=P-i$ gives $\sum_{r=1}^{P-1}r$. This sum is $P(P-1)/2$: it is $0$ for $P=0$ and $P=1$, and increasing $P$ to $P+1$ adds exactly $P$, which changes $P(P-1)/2$ to $P(P+1)/2$; induction gives the formula. For every $P\ge2$, it is at most $P^2/2$, proving the stated $O(P^2)$ bound. [F2, step 1.1, given, algebra, induction] ∎
