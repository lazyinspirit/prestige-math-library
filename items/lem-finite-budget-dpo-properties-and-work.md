---
id: lem-finite-budget-dpo-properties-and-work
kind: lemma
title: "Finite-budget DPO preserves its valid pair and terminates with finite oracle work"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-direct-preference-optimization-finite-budget
  - thm-dpo-reward-policy-reparameterization
  - def-finite-straight-line-computational-program
  - alg-reverse-mode-automatic-differentiation
  - thm-reverse-mode-computes-gradient
  - def-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; graph evaluators and membership oracle are supplied inputs."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Rafailov et al., Direct Preference Optimization, §4 and Appendix B (procedure background; the finite-budget and oracle-work properties are proved locally here)"
      url: "https://arxiv.org/pdf/2305.18290v3"
---

## Statement

For every input of the finite-budget DPO procedure, under its supplied exact evaluator and membership-oracle model, all prescribed loss evaluations are finite and every successful reverse sweep gives the exact stated mini-batch gradient. Throughout the run, the stored pair is $(\theta,L_D(\theta))$ for the most recently accepted parameter $\theta\in\Theta$; initially this is $(\theta_0,L_D(\theta_0))$. In particular, rejected candidates are not used for policy evaluation. The procedure terminates after at most $T$ attempted updates and returns this valid pair with the prescribed diagnostic status on early exit, or $(\theta_T,L_D(\theta_T))$ with status `COMPLETED` when all $T$ updates are accepted. When $T=0$, it returns the initial pair with status `COMPLETED`.

Put $M=\sum_{t=0}^{T-1}m_t$, with $M=0$ for $T=0$. There is a finite constant $C\ge d+1$, determined by the finitely many supplied log-probability graphs, their fixed node dimensions and the unit-cost primitive model, such that the work excluding parameter-domain membership is
$$
O\!\left(C\bigl[n(T+1)+M+T+1\bigr]\right).
$$
The implicit constant is independent of the numerical parameters and step sizes. There are at most $T$ calls to $M_\Theta$. For the actual queried candidates $z_1,\ldots,z_Q$, the membership cost is $\sum_{j=1}^Q c_\Theta(z_j)<\infty$, with $Q\le T$, and is added to the displayed work. If a uniform finite membership bound $C_\Theta$ is supplied, this contribution is at most $TC_\Theta$. These are bounds in the declared exact primitive/oracle model, not a universal algorithm for membership in arbitrary open sets. No convergence, descent, or statistical-optimality conclusion is asserted.

## Statement references

[[alg-direct-preference-optimization-finite-budget]]: gives the full input scope, exact oracle model, accept/reject rule and returned pair.

## Facts & Assumptions

**Given:** The full inputs of the finite-budget DPO procedure, including arbitrary open $\Theta$, $\theta_0\in\Theta$, positive reference and policy coordinates, $\beta>0$, all supplied finite graphs and exact evaluators, finite schedules with $T\ge0$, nonempty mini-batches and $\eta_t\ge0$, and the exact terminating parameter-domain oracle with finite per-call costs.

[F1] [[alg-direct-preference-optimization-finite-budget]]: initializes the stored pair by the full-data loss; computes each trial parameter from the stated mini-batch gradient; accepts only when $M_\Theta$ returns $1$; otherwise returns the previous pair, and uses at most the $T$ listed updates.

[F2] [[thm-dpo-reward-policy-reparameterization]]: the loss per record is $\log(1+e^{-u_i})$ and its derivative is $-\beta\sigma(-u_i)$ times the difference of the two policy-log-probability gradients. The same finite formula applies to a nonempty ordered dataset with repeated records.

[F3] [[def-finite-straight-line-computational-program]] [[alg-reverse-mode-automatic-differentiation]]: finite graphs and reverse sweeps have finite node and parent-slot lists; domain or branch failure returns the corresponding diagnostic, and cotangents are initialized and accumulated in finite-dimensional coordinates.

[F4] [[thm-reverse-mode-computes-gradient]]: on an admissible fixed strict branch, the returned input cotangents are the exact Euclidean gradient of the represented scalar output.

[F5] [[def-natural-logarithm]] [[cor-exponential-reciprocal-and-positivity]] [[thm-exponential-addition-formula]]: the exponential is finite and positive on real inputs, its reciprocal is $e^{-u}$, and the logarithm is a finite real on positive inputs and is inverse to the exponential; $e^{a+b}=e^ae^b$ for real $a,b$.

## Proof

1.1 Fix an accepted parameter in $\Theta$. The reference and policy coordinates are positive, so every log ratio is a finite real and each $u_i$ is finite. By [F5], $1+e^{-u_i}>0$ and its logarithm is finite. For $u\ge0$, the stable evaluation expression is exactly $\log(1+e^{-u})$. For $u<0$, put $a=-u>0$ and $b=\log(1+e^u)$. The exponential addition and reciprocal identities give $e^{a+b}=e^{-u}(1+e^u)=1+e^{-u}$, so [F5] gives $a+b=\log(1+e^{-u})$. Thus the stable expression equals the same finite loss on both branches, including $u=0$, and finite dataset and batch averages are finite. [given, F5, algebra]

1.2 Each supplied graph is finite and its specified exact primitive value, pullback and domain/branch tests terminate. Therefore its forward and reverse traversals terminate. At every successful strict-branch evaluation, [F4] gives both exact policy-log-probability gradients. Apply [F2] to the ordered batch of size $m_t\ge1$, counting duplicated indices with their multiplicity; its gradient is exactly $g_t$. The algorithm does not differentiate the nonsmooth max/absolute-value implementation of the loss value. [given, F2, F3, F4, algebra]

1.3 There are finitely many record graphs with fixed finite node, slot and value-space dimensions. Forward evaluation, cotangent initialization and reverse accumulation consequently have a finite uniform upper bound in the declared unit-cost primitive model; finite branch tables are covered by their supplied terminating tests. Choose $C\ge d+1$ large enough to bound either one record's loss evaluation or its value-and-gradient computation, including the scalar sigmoid and loss operations. This bound depends on graph sizes and dimensions, not on parameter values, since primitive calls have unit cost in this model. [given, F3, choose, algebra]


2.1 The initial parameter lies in $\Theta$, and step 1.1 makes its full-data loss finite, proving the stored-pair invariant at initialization. Suppose it holds before an attempted update. A reverse-mode diagnostic returns that unchanged pair. Otherwise step 1.2 gives a finite vector $g_t$, and the finite step size gives a finite trial $\theta'$. The supplied exact oracle terminates and decides its membership. On rejection the unchanged valid pair is returned, without a policy evaluation at $\theta'$. On acceptance $\theta'\in\Theta$, so step 1.1 gives its finite full-data loss; replacing the stored pair preserves the invariant. Finite induction therefore proves the invariant at every attempted update and every return. [given, F1, step 1.1, step 1.2, induction, algebra]

3.1 Every attempted update traverses only finite graph and coordinate lists, finitely many records, and at most one terminating membership call. Hence it finishes or exits with the specified diagnostic. The outer loop has only $T$ entries, so there are at most $T$ attempts and no infinite search or convergence test. If none exits early, [F1] returns the pair after update $T$ with `COMPLETED`; for $T=0$ it performs no updates and returns the initialized pair. [given, F1, F3, step 2.1, algebra]


4.1 The procedure evaluates the full-data loss initially and after at most $T$ accepted updates, using at most $n(T+1)$ record loss computations. Computing all attempted mini-batch objectives and gradients uses at most a constant times $M$ record computations, even if their forward values are recomputed. The remaining vector updates, loop and status bookkeeping cost $O((d+1)(T+1))$, bounded by $O(C(T+1))$. Step 1.3 gives the stated total work excluding membership. Each attempt makes at most one membership call, so $Q\le T$; the actual costs sum to a finite number and, when bounded uniformly, to at most $TC_\Theta$. This proves the work bound without assigning any general computability property to arbitrary open $\Theta$. [given, F1, step 3.1, step 1.3, algebra] ∎
