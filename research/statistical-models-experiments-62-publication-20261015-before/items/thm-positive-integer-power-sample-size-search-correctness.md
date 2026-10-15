---
id: thm-positive-integer-power-sample-size-search-correctness
kind: theorem
title: "Correctness and exact termination conditions for all-size planning search"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - alg-positive-integer-power-sample-size-search
  - def-power-and-sample-size-planning-specification
  - lem-least-feasible-sample-size-exists
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 7 §§7.1–7.2, printed pp. 149–152; local exact-evaluator proof"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
dependency_level: 3
---

## Statement

Use the exact terminating evaluator and admissible modes of [[alg-positive-integer-power-sample-size-search]], and let $S=\{n\in\mathbb N_{\ge1}:E(n)\text{ is true}\}$. The unbounded ascending mode terminates if and only if $S\ne\varnothing$, and then returns $\min S$ after exactly $\min S$ evaluations. If $S=\varnothing$, it continues forever and returns no value, including no $\mathrm{none}$.

With a valid finite completeness bound $B$, the bounded mode terminates after at most $B$ evaluations and returns the full-domain extensional answer: $\min S$ if $S\ne\varnothing$ and $\mathrm{none}$ if $S=\varnothing$. The certified-infeasibility mode returns that answer immediately. No monotonicity is needed for these conclusions. If feasibility is nondecreasing and $E(B)$ is true, that witness is a valid bound, but monotonicity without a crossing witness or other stopping certificate does not guarantee termination in the empty case.

## Facts & Assumptions

**Given:** The algorithm's exact per-size evaluator, each evaluation terminating, and the stated valid certificate whenever a certified mode is chosen.

[F1] The planning specification defines feasibility and its extensional output as the least feasible positive integer, or none when the feasible set is empty. [[def-power-and-sample-size-planning-specification]]

[F2] The ascending mode visits positive integers in order; the bounded mode visits the prefix through $B$; the infeasibility mode uses the supplied all-size proof. [[alg-positive-integer-power-sample-size-search]]

[F3] A nonempty set of positive integers has a unique least member. [[lem-least-feasible-sample-size-exists]]

## Proof

1.1 Suppose $S\ne\varnothing$. By [F3] let $n_*=\min S$. In ascending mode [F2] calls the evaluator at $1,\ldots,n_*$: each call terminates, every earlier answer is false by leastness, and the answer at $n_*$ is true. The finite sequence of calls therefore terminates at $n_*$, with exactly $n_*$ evaluations and the output required by [F1]. [F1, F2, F3, given]

1.2 In bounded mode at most $B$ calls occur and every call terminates, so the mode terminates, including when $B=0$. If an index is returned, every smaller positive integer has already answered false, and exactness makes the returned integer the least of $S$, not merely least in a selected list. [F1, F2, given, algebra]

2.1 If ascending mode terminates, [F2] says it returns only at a true answer, so its returned integer is in $S$ and $S$ is nonempty. Conversely, if $S$ is empty, every terminating call answers false and [F2] increments to the next positive integer. No return instruction is reached, so the execution continues forever. Together with step 1.1 this proves the equivalence and the empty-case behavior. [F2, step 1.1, given]

2.2 If bounded mode returns none, every index at most $B$ is infeasible. Were $S$ nonempty, the completeness certificate would place some element of $S$ at most $B$, contradicting those answers. Thus $S$ is empty and none is the answer of [F1]. Conversely, empty $S$ makes every bounded answer false, so none is returned. [F1, F2, given, step 1.2]

3.1 In the infeasibility mode the supplied proof states that $S$ is empty, so immediate return of none is correct by [F1]. A true answer at a positive $B$ proves that $B\in S$ and therefore is itself a finite completeness witness, whether or not feasibility is monotone. The constant-false evaluator is nondecreasing but has empty $S$, so step 2.1 shows that monotonicity alone does not give termination of ascending search. These observations establish all remaining assertions. [F1, F2, given, step 2.1, algebra] ∎