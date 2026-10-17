---
id: alg-naive-sequential-three-block-admm
kind: algorithm
title: "Naive sequential three-block ADMM"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Caihua Chen, Bingsheng He, Yinyu Ye, and Xiaoming Yuan, The direct extension of ADMM for multi-block convex minimization problems is not necessarily convergent, §§2–3"
      url: "https://web.stanford.edu/~yyye/ADMM-final.pdf"
    - title: "Stephen Boyd, Neal Parikh, Eric Chu, Borja Peleato, and Jonathan Eckstein, Distributed Optimization and Statistical Learning via the Alternating Direction Method of Multipliers, §3"
      url: "https://stanford.edu/~boyd/papers/pdf/admm_distr_stats.pdf"
---

## Definition

For proper closed convex $f_i:\mathbb R^{n_i}\to(-\infty,+\infty]$, linear
$A_i:\mathbb R^{n_i}\to\mathbb R^p$, data $b\in\mathbb R^p$, penalty
$\rho>0$, and scaled multiplier $u^k$, the **naive sequential three-block
ADMM** sweep is
$$x_1^{k+1}\in\arg\min_{x_1}f_1(x_1)+\frac\rho2\|A_1x_1+A_2x_2^k+A_3x_3^k-b+u^k\|^2,$$
then $x_2^{k+1}$ minimizes the same augmented residual with $x_1^{k+1}$,
$x_2$ variable and $x_3^k$ fixed; then $x_3^{k+1}$ minimizes it with the
first two new blocks; finally
$$u^{k+1}=u^k+A_1x_1^{k+1}+A_2x_2^{k+1}+A_3x_3^{k+1}-b.$$
These formulas specify the exact recurrence conditional on attained block
minima; proper closed convexity alone does not ensure attainment.

The executable procedure takes the data above, a current state
$(x_1^k,x_2^k,x_3^k,u^k)$, three positive integer caps $C_i$, and, for each
block, a supplied deterministic solver program $S_i$ and Boolean certificate
checker $V_i$. Their complete instructions and data representations are part
of the input. Each program uses discrete steps that terminate; the checker
is also such a program. A solver takes its displayed block objective and may
halt with **failed** or a candidate-certificate pair $(v,e)$. Admissibility
requires that $V_i(H,v,e)=\mathrm{true}$ implies $H(v)<+\infty$ and
$H(v)\le H(w)$ for every block vector $w$. This is a soundness requirement
on supplied checkers, not a claim that such certificates can always be found
or that arbitrary function descriptions can be checked automatically.

Execute one sweep as follows. Return **invalid-input** for mismatched
dimensions, nonpositive $\rho$, or caps that are not positive integers.
Keep the old state and store tentative blocks separately. For $i=1,2,3$ in
that order, form its block objective using the already computed new blocks
and the remaining old blocks. Run $S_i$ on that objective, then, if it returns
$(v,e)$, run $V_i$ on this triple, allowing at most $C_i$ program steps in
total for this solver-checker pair. After each step inspect for termination:
an explicit failure, malformed output, or a false checker result returns
**block-$i$-solve-failed**; a true result stores $v$ as the tentative block.
If the budget is used without such a result or failure, return
**block-$i$-cap-exhausted**. A true result on the last allowed step is accepted.
Any failure returns the unchanged old state. Only after all three blocks
are accepted, perform the displayed multiplier update, commit the four new
vectors, and return **success** with that state. A requested finite run
repeats this sweep for an input nonnegative integer number of sweeps and
stops at its first nonsuccess status. No convergence is asserted.

## Facts & Assumptions

**Given:** The three proper closed convex objectives, linear maps, $b$, $\rho>0$, current state, positive integer caps, and the supplied solver and sound certificate-checker programs in the Definition.

[A1] Dimensions match, $f_i$ are proper closed convex, $\rho>0$, caps are positive integers, and the supplied programs satisfy the Definition's step and certificate-soundness requirements.


[F1] [[def-proper-closed-convex-function-on-rn]]: each objective is proper closed convex.

[F2] [[def-euclidean-inner-product]]: the augmented residual norm is the Euclidean norm in $\mathbb R^p$.

## Verification


1.1 Each displayed block objective is the corresponding convex objective plus a nonnegative continuous quadratic in its block variable; the order fixes later blocks at their newest available values. The update is therefore precisely the sequential Gauss–Seidel extension of the two-block recurrence. [A1, F1, F2, given, given]

2.1 An exact update requires each argmin to be nonempty and attained; [F1] alone does not guarantee this. The supplied programs and the ordered solver-then-checker calls specify the capped implementation, including which status to return and whether to commit the tentative state. The certificate requirement concerns exact attained minimizers, so an approximate point cannot be accepted merely because the cap has been used. [A1, F1, given] ∎
