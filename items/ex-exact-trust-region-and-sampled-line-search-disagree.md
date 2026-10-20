---
id: ex-exact-trust-region-and-sampled-line-search-disagree
kind: example
title: "Exact CPO cost feasibility can disagree with a sampled line-search cost check"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-axiom-of-choice
  - alg-constrained-policy-optimization
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - def-discounted-value-and-advantage-functions
  - def-kullback-leibler-divergence
  - thm-logarithm-derivative-and-integral
  - thm-policy-performance-bound-by-average-divergence
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§5.3, equation (10), and §6.1, Algorithm 1, PDF pp. 4–5."
---

## Example

Assume the Axiom of Choice. In a one-state CMDP with discount $\gamma=0$, let the only costs be $0$ for `safe` and $1$ for `risky`, with threshold $b=1/20$. The old policy chooses `risky` with probability $1/100$, and the proposed policy chooses it with probability $1/5$. Its exact average KL is less than the radius $\delta=4$, while its exact expected cost is $1/5>b$. The ideal single-cost CPO cost surrogate is $J_c^\pi+(1-\gamma)^{-1}\mathbb E_{s\sim d^\pi,a\sim\pi'}A_c^\pi(s,a)\le b$; because $\gamma=0$, the performance theorem makes this surrogate equal to the proposed policy's exact expected cost, so the ideal constraint rejects the proposal. If a one-row rollout sample from the old policy observes `safe` and supplies zero baseline-cost and advantage estimates, the empirical line-search cost is zero and passes the threshold; this sample occurs with probability $99/100$.

## Example references

[[def-constrained-markov-decision-process|The finite CMDP and its cost signal.]]

[[def-discounted-value-and-advantage-functions|The cost value and advantage used in the exact idealized constraint.]]

[[alg-constrained-policy-optimization|The empirical surrogate and backtracking sample-cost check.]]

[[thm-policy-performance-bound-by-average-divergence|The exact average-KL performance/cost comparison under AC.]]

[[def-axiom-of-choice|Every family of nonempty sets has a choice function.]]

## Facts & Assumptions

**Given:** One state $s$, two actions, a self-transition, zero reward, discount $0$, cost $c(s,\text{safe},0,s)=0$, cost $c(s,\text{risky},0,s)=1$, threshold $b=1/20$, old policy $\pi(\text{risky}\mid s)=1/100$, and proposed policy $\pi'(\text{risky}\mid s)=1/5$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the KL form of the policy-performance theorem.

[F1] [[def-constrained-markov-decision-process]]: the discounted CMDP has finite transition laws and the stated bounded cost signal.

[F2] [[def-discounted-cost-constraint]]: with $\gamma=0$, expected discounted cost is the one-step expected cost.

[F3] [[def-discounted-value-and-advantage-functions]]: $V_c^\pi(s)=J_c^\pi(\delta_s)$ and $A_c^\pi(s,a)=Q_c^\pi(s,a)-V_c^\pi(s)$.

[F4] [[def-kullback-leibler-divergence]]: for finite action probabilities, $D_{\rm KL}(q\|p)=\sum_aq(a)\log(q(a)/p(a))$ when $q\ll p$, with natural logarithms.

[F5] [[thm-logarithm-derivative-and-integral]]: $\log x=\int_1^xdt/t$ for $x>0$.

[F6] [[alg-constrained-policy-optimization]]: the sample line search tests the finite sample cost surrogate supplied with the on-policy batch; it does not test the exact population cost.

[F7] [[thm-policy-performance-bound-by-average-divergence]]: when $\gamma=0$, the total-variation remainder is zero, so the exact baseline cost surrogate equals the return difference.

## Proof

1.1 The old expected cost is $J_c^\pi(\mu)=1/100$, while the proposed expected cost is $J_c^{\pi'}(\mu)=1/5$. Since $1/5>1/20$, the exact cost constraint rejects $\pi'$. [F1, F2, given, algebra]

1.2 By [F4], the average KL at the single state is $K=(1/5)\log20+(4/5)\log(80/99)$. The second logarithm is negative. Also [F5] gives $\log20=\int_1^{20}dt/t<19<20$, so $K<(1/5)20=4=\delta$. Thus the proposal satisfies the exact average-KL radius despite violating the exact cost limit. [A1, F4, F5, given, algebra]

2.1 The ideal CPO cost advantage under $\pi$ is $A_c^\pi(s,\text{risky})=1-1/100=99/100$ and $A_c^\pi(s,\text{safe})=0-1/100=-1/100$. Its exact surrogate is therefore $J_c^\pi+(1-\gamma)^{-1}\mathbb E_{a\sim\pi'}A_c^\pi(s,a)=1/100+(1/5)(99/100)+(4/5)(-1/100)=1/5>1/20$. By [F7], this is the proposed policy's exact expected cost at $\gamma=0$. [F2, F3, F7, step 1.1, algebra]

3.1 Under $\pi$, one sampled action is `safe` with probability $99/100$. On that event the observed cost is zero; choosing the corresponding supplied baseline-cost estimate and cost-advantage estimate as zero makes the sample cost surrogate at $\pi'$ equal zero. Since $0\le b$, the line search in [F6] accepts this sample check if $\pi'$ is proposed, even though step 1.1 gives its exact expected cost $1/5$. [F2, F6, given, step 1.1, algebra] ∎
