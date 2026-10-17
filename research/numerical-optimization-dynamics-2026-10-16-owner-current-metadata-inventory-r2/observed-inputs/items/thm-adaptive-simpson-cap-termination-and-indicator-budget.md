---
id: thm-adaptive-simpson-cap-termination-and-indicator-budget
kind: theorem
title: Termination and indicator bookkeeping for capped adaptive Simpson
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-simpson-with-finite-depth-and-panel-cap
  - def-adaptive-simpson-refinement-indicator
justified_by: []
proof_strategy: induction
axiom_use: None. The finite recursion uses only integer induction and arithmetic.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7
      url: https://fncbook.com/adaptive/
      locator: §§5.7.1–5.7.3 and Example 5.7.2; recursive adaptive Simpson procedure and estimator limitations.
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: Chapter 13, quadrature definitions and error-analysis conventions.
---

## Statement

For valid inputs, [[alg-adaptive-simpson-with-finite-depth-and-panel-cap]]
terminates after at most $P$ recursive panel calls and at most $5P$ evaluation
requests. A finite result is a sum of the refined Simpson values on the
returned leaf intervals, and its reported indicator is the sum of their
nonnegative indicators. An evaluation failure, including an unrepresentable
required node reported by the evaluator, returns `failure` with no estimate.
If the status is `accepted`, that indicator sum is at
most the requested tolerance $\tau$. If a rejected leaf cannot split because
of the depth or panel-call cap, the result has status `cap-reached`. These
claims do not bound the true quadrature error.

## Facts & Assumptions

**Given:** $a<b$, $\tau>0$, finite $D\ge0$, finite $P\ge1$, and a
deterministic evaluation routine returning finite values at every requested
node or an explicit failure.

[F1] [[alg-adaptive-simpson-with-finite-depth-and-panel-cap]]: a call accepts
when $\eta\le t$, returns `cap-reached` when rejected and $d=0$ or $p<3$,
and otherwise splits into two calls with depth $d-1$, positive budgets
$\lfloor(p-1)/2\rfloor,\lceil(p-1)/2\rceil$, and tolerances $t/2$.

[F2] [[def-adaptive-simpson-refinement-indicator]]: each leaf indicator is
$|S_1-S_0|/15\ge0$.

## Proof

1.1 If $d=0$ or $p<3$, the call cannot split by [F1]. It requests at most five values and either returns failure immediately on a failed evaluation or returns its finite refined value and indicator as an accepted or cap-reached leaf. The leaf estimate is its refined Simpson value and its indicator is nonnegative by [F2]; if accepted, its indicator is at most $t$. [given, F1, F2, base, algebra]

2.1 For strong induction on positive $p$, assume [IH] the claims hold for every smaller positive panel budget. If $d>0$ and $p$ is at least $3$, [F1] gives two positive child budgets, each smaller than $p$, whose sum is $p-1$. The induction hypothesis applies to both recursive calls, so they terminate and together use at most $p-1$ panel calls; adding the parent gives at most $p$. Each call uses at most five requests, so the total is at most $5p$. [given, F1, ih, induction, step 1.1, algebra]

3.1 If the call does not split, its output is a single leaf and step 1.1 gives the leaf-sum representation and, when accepted, its indicator is at most $t$. If it splits, the child panels partition the parent and [F1] adds their estimates and nonnegative indicators, so the induction hypothesis gives the leaf-sum representation. The parent is accepted in this branch only when both child results are accepted; their indicator totals are each at most $t/2$ by induction, hence their sum is at most $t$. By [F1], a cap result is either returned at a rejected terminal leaf or propagated from a child; because the tree is finite by step 2.1, following such propagation reaches a rejected leaf whose depth or panel-call cap prevents another split. No implication to true error is in [F1] or [F2]. [given, F1, F2, ih, induction, step 1.1, step 2.1, discharge-induction, algebra] ∎
