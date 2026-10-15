---
id: thm-finite-candidate-power-sample-size-search-correctness
kind: theorem
title: "Finite-candidate power and sample-size search is correct"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-finite-candidate-power-sample-size-search
  - def-power-and-sample-size-planning-specification
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7, §§7.1 and 7.3–7.4, printed pp. 149–150, 153–159"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

For the finite-candidate algorithm [[alg-finite-candidate-power-sample-size-search]], suppose the input list is ordered by nondecreasing total size and its evaluator returns the exact feasibility truth value for every candidate. The algorithm terminates after at most $m$ evaluations. If it returns a plan, that plan is feasible and its total size is least among feasible plans in the supplied list; if it returns $\text{none}$, no plan in that list is feasible. When several feasible plans have the same least size, the algorithm returns the first such plan in the supplied tie order.

## Facts & Assumptions

**Given:** A finite list of $m\ge0$ candidate plans ordered by nondecreasing positive-integer size, an exact evaluator that terminates for each plan, and the algorithm of [[alg-finite-candidate-power-sample-size-search]].

[F1] Feasibility is the exact set of test, precision, allocation, and resource conditions declared by the planning specification. [[def-power-and-sample-size-planning-specification]]

[F2] The algorithm evaluates each listed candidate once, returns at the first true result, and returns $\text{none}$ after a finite list is exhausted. [[alg-finite-candidate-power-sample-size-search]]

## Proof

1.1 Each evaluator call terminates by the hypothesis. The loop makes at most $m$ calls; for $m=0$ it returns immediately. Thus the algorithm terminates after finitely many calls. [given, F2, algebra]

1.2 If the algorithm returns $d_j$, it does so only after the evaluator returns true, which by [F1] means $d_j$ is feasible. Each earlier $d_k$, $k<j$, was evaluated false; since the list is ordered by size, no feasible listed plan has smaller total size than $d_j$. The first passing index also gives the declared tie rule. [given, F1, F2, algebra]

2.1 If the algorithm returns $\text{none}$, it evaluated every listed plan and each exact result was false, so no candidate in that list is feasible. [given, F1, F2] ∎