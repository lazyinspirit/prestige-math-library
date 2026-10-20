---
id: lem-finite-group-relative-update-termination-and-calls
kind: lemma
title: "Finite group-relative updates preserve admissibility and have bounded oracle calls"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-finite-group-relative-policy-update
  - def-verifier-and-generation-protocol
  - thm-of-square-roots
  - def-natural-logarithm
  - lem-of-sign-rules
  - def-finite-sum
  - def-ordered-field
  - lem-of-naturals-positive
  - lem-of-inverse-positive
  - lem-of-zero-mult
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; exact sampling, evaluation, gradient-decision and domain oracles are supplied inputs."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1, §2.2.1 (group-relative procedure background; finite oracle bounds proved locally)"
      url: "https://arxiv.org/pdf/2501.12948v1"
    - title: "Schulman et al., Proximal Policy Optimization Algorithms, §2.2 and §3 (clipped-surrogate background)"
      url: "https://arxiv.org/pdf/1707.06347v1"
---

## Statement

For every input of the finite group-relative policy-update procedure, under its supplied exact terminating operation and oracle model, every formed advantage, sequence ratio and objective value at a parameter in $U$ is a finite real number. Zero group standard deviation uses the stated zero-advantage branch, without division by zero. The last valid parameter always lies in $U$ and retains the stipulated fixed positive support.

The procedure terminates with one of its specified statuses after at most $TMG$ response draws, $TMG$ reward evaluations, $TK$ objective-gradient attempts and $TK$ domain-oracle calls. An undefined gradient returns the previous valid parameter with status undefined-gradient; a rejected candidate returns it with status invalid-update; if all iterations succeed it returns $\theta_T\in U$ with status complete. All these bounds hold pathwise and allow early exit. The work consists of finite arithmetic over the prescribed finite lists and the sum of the finite costs of the actual supplied calls. In particular it is finite, but no uniform bound on the internal cost of arbitrary objective-gradient or open-set membership oracles is claimed. No unbiasedness, monotone-improvement or convergence conclusion is asserted.

## Statement references

[[alg-finite-group-relative-policy-update]]: gives the finite loops, full clipped objective and exact gradient/domain oracle model.

## Facts & Assumptions

**Given:** All algorithm inputs: finite prompt and support lists, $\theta_0\in U$ with arbitrary open $U$, fixed positive policy/reference support, finite rewards, integers $T,K\ge1$ and $G\ge2$, $\epsilon\in(0,1)$, $\beta\ge0$, positive finite step sizes, and supplied terminating exact draws, scalar/evaluation operations and oracles. Returned draws lie in the supported finite response lists.

[F1] [[alg-finite-group-relative-policy-update]]: each outer iteration draws $G$ responses per prompt, freezes their rewards and advantages, and attempts at most $K$ gradient-oracle updates, accepting only when the exact $U$ oracle accepts the proposal. Otherwise it returns the previous valid parameter with the specified status.

[F2] [[def-verifier-and-generation-protocol]]: supported policy and reference masses are finite and positive, the support lists are finite and fixed, and rewards are finite reals.

[F3] [[lem-of-zero-mult]] and [[lem-of-sign-rules]]: each real square is nonnegative, including the zero case. [[thm-of-square-roots]]: every nonnegative real has a unique finite nonnegative square root.

[F4] [[def-natural-logarithm]]: the logarithm is a finite real on positive inputs.

[F5] [[def-finite-sum]] gives the recursive finite-sum clauses, and [[def-ordered-field]] gives closure of positive elements under addition. [[lem-of-naturals-positive]] and [[lem-of-inverse-positive]] imply $1/G>0$ for the input $G\ge2$.

## Proof

1.1 Fix an outer iteration begun at a valid parameter. Every returned response belongs to its finite fixed support, so the $G$ rewards and their mean are finite. Each squared deviation is nonnegative by [F3]. Let $S_k$ be the sum of the first $k$ squared deviations, with $S_0=0$. If $S_k$ or the next term is zero, $S_{k+1}$ is the other nonnegative term; if both are positive, [F5] makes their sum positive. Induction gives $S_G\ge0$. Since $1/G>0$ by [F5], the standard-deviation radicand is finite and nonnegative. Thus [F3] gives a finite nonnegative standard deviation. If it is positive, the normalized advantages are finite quotients; if it is zero, the explicit branch sets them to zero and makes no division. [given, F1, F2, F3, F5, induction, algebra]

1.2 At any candidate parameter in $U$, old and new supported policy masses are positive by [F2], so each sampled sequence ratio is finite and has a nonzero denominator. The positive reference masses make every KL log ratio a finite real by [F4]; its sum over each finite support is finite. Clipping, products, minima and finite averages in the exact displayed objective therefore produce a finite real value. This requires no differentiability of the clipped minimum at a boundary. [given, F1, F2, F4, algebra]

2.1 Initially the last valid parameter is $\theta_0\in U$. Suppose it is valid before an inner attempt. The supplied exact gradient oracle terminates; if the total derivative does not exist, it reports undefined-gradient and the procedure returns the unchanged valid parameter. Otherwise its gradient is a finite vector in $\mathbb R^d$, so the finite step size gives a finite proposal. The supplied exact domain oracle terminates and returns zero or one. A zero returns the previous parameter with invalid-update; a one places the new parameter in $U$, where fixed positive support holds. Induction over inner and outer iterations proves the invariant and stated return statuses. The frozen data and objective are well-defined by steps 1.1 and 1.2. [given, F1, F2, step 1.1, step 1.2, induction, algebra]

3.1 Each reached outer iteration uses exactly $MG$ supported response draws and reward evaluations, followed by at most $K$ inner attempts. Every attempt makes one gradient-oracle call and at most one domain-oracle call. There are at most $T$ reached outer iterations, so the respective counts are at most $TMG$, $TMG$, $TK$ and $TK$. Every support, group and coordinate computation is finite, and every supplied call has finite cost. Thus the finite sum of actual call costs and finite bookkeeping costs is finite; the procedure completes the prescribed loops or exits earlier as described in step 2.1. This argument decides neither arbitrary differentiability nor arbitrary open-set membership without the supplied oracles. [given, F1, step 2.1, algebra] ∎
