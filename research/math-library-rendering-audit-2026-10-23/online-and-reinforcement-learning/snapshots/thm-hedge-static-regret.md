---
id: thm-hedge-static-regret
kind: theorem
title: Hedge's second-order and static-regret bounds
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-hedge
  - def-online-decision-protocol
  - def-adversary-and-feedback-model
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-exponential-dominates-one-plus-x
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the randomized statement assumes the specified measurable protocol draws."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.3.3, Theorem 1.5 and complete proof, PDF pp. 34–35."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§§11.7.2 and 11.7.4, FTRL regret and entropy-regularized expert update, PDF pp. 156–160."
---

## Statement

Let $N,T\ge1$ be integers and let $\epsilon>0$. Let $\ell_t(i)\ge0$ be a finite real loss for every $t\in\{1,\ldots,T\}$ and $i\in[N]=\{1,\ldots,N\}$. Run Hedge with $W_1(i)=1$, $x_t(i)=W_t(i)/\sum_{j=1}^N W_t(j)$, measurable draws $I_t$ satisfying $\mathbb P(I_t=i)=x_t(i)$, and updates $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_t(i))$. Assume the entire loss-vector sequence is fixed before the learner's random choices. For every fixed expert $i^\star\in[N]$, writing $\ell_t^{(2)}(i)=\ell_t(i)^2$, one has
$$
\sum_{t=1}^T\sum_{i=1}^N x_t(i)\ell_t(i)\le\sum_{t=1}^T\ell_t(i^\star)+\epsilon\sum_{t=1}^T\sum_{i=1}^N x_t(i)\ell_t^{(2)}(i)+\frac{\log N}{\epsilon},
$$
where $\log$ is the natural logarithm.

If every loss lies in $[0,1]$ and $N\ge2$, choosing $\epsilon=\sqrt{\log N/T}$ gives expected static regret at most $2\sqrt{T\log N}$:
$$
\mathbb E\!\left[\sum_{t=1}^T\ell_t(I_t)-\min_{i\in[N]}\sum_{t=1}^T\ell_t(i)\right]\le2\sqrt{T\log N}.
$$
For $N=1$, the expected static regret is $0$.

## Statement references

[[alg-hedge]]: the initial weights, normalized expert probabilities, sampled actions, and exponential update.

[[def-online-decision-protocol]]: the learner chooses before current-round feedback.

[[def-adversary-and-feedback-model]]: full-information feedback and an oblivious loss sequence.

[[def-static-dynamic-and-strongly-adaptive-regret]]: realized and expected static regret against a fixed comparator.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation as a Lebesgue integral for bounded sampled losses.

[[def-natural-logarithm]]: the natural logarithm is the inverse of the real exponential.

[[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing and $\log 1=0$.

## Facts & Assumptions

**Given:** Positive integers $N,T$, a learning rate $\epsilon>0$, nonnegative finite expert losses, and the Hedge updates in the Statement.

[A1] [[def-adversary-and-feedback-model]]: an oblivious adversary fixes the whole loss sequence before learner randomization; full-information feedback reveals the entire expert-loss vector after the choice.

[F1] [[alg-hedge]]: $W_1(i)=1$, $x_t(i)=W_t(i)/\sum_jW_t(j)$, and $W_{t+1}(i)=W_t(i)\exp(-\epsilon\ell_t(i))$.

[F2] [[lem-exponential-dominates-one-plus-x]]: $1+z\le\exp(z)$ for every real $z$.

[F3] [[cor-exponential-reciprocal-and-positivity]]: $\exp(z)>0$ and $\exp(-z)=1/\exp(z)$ for every real $z$.

[F4] [[thm-exponential-addition-formula]]: $\exp(a+b)=\exp(a)\exp(b)$ for all real $a,b$.

[F5] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing.

[F6] [[def-natural-logarithm]]: for $x>0$, $\exp(\log x)=x$.

[F7] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and $\log 1=0$.

[F8] [[cor-expectation-of-an-indicator-is-probability]]: for each measurable event $A$, $\mathbb E[\mathbf 1_A]=\mathbb P(A)$.

[F9] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on integrable random variables.

[F10] [[def-static-dynamic-and-strongly-adaptive-regret]]: static regret is loss minus the finite-horizon loss minimum, and expected regret is the expectation of the realized regret when it is measurable and integrable.

[F11] [[def-online-decision-protocol]]: the learner chooses using only its previous history and does not observe the current loss before its choice.

[F12] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is defined for nonnegative or integrable random variables.

## Proof

1.1 For every $z\ge0$, [F2] gives $\exp(z)\ge1+z>0$, so [F3] gives $\exp(-z)\le1/(1+z)$. Since $(1-z+z^2)(1+z)=1+z^3\ge1$ and $1+z>0$, one also has $1/(1+z)\le1-z+z^2$. Thus $\exp(-z)\le1-z+z^2$ for all $z\ge0$. [F2, F3, algebra]

2.1 Put $S_t=\sum_{i=1}^N W_t(i)$, $m_t=\sum_i x_t(i)\ell_t(i)$, and $q_t=\sum_i x_t(i)\ell_t(i)^2$. By [F3], every factor $\exp(-\epsilon\ell_t(i))$ is a positive finite real. Starting with $W_1(i)=1$, [F1] therefore gives positive finite weights through round $T+1$ by induction, so $S_t>0$ is finite and $x_t$ is a probability vector. This induction is pointwise and does not require the loss sequence to be fixed before randomization. Applying step 1.1 to $z=\epsilon\ell_t(i)$ and summing with weights $x_t(i)$ gives $S_{t+1}=S_t\sum_i x_t(i)\exp(-\epsilon\ell_t(i))\le S_t(1-\epsilon m_t+\epsilon^2q_t)\le S_t\exp(-\epsilon m_t+\epsilon^2q_t)$, where the last inequality is [F2]. [F1, F3, step 1.1, F2, algebra]

3.1 Dividing the positive ratios from step 2.1 by $S_t$ and multiplying over $t$, then using [F4] and $S_1=N$, gives $S_{T+1}\le N\exp(-\epsilon\sum_t m_t+\epsilon^2\sum_t q_t)$. For any fixed $i^\star$, [F1] also gives $S_{T+1}\ge W_{T+1}(i^\star)=\exp(-\epsilon\sum_t\ell_t(i^\star))$. Since $N=\exp(\log N)$ by [F6], combining the bounds and applying [F5] yields $-\epsilon\sum_t\ell_t(i^\star)\le\log N-\epsilon\sum_t m_t+\epsilon^2\sum_t q_t$. [F1, F4, F5, F6, step 2.1, algebra]

4.1 Rearranging step 3.1 and dividing by $\epsilon>0$ gives $\sum_t m_t\le\sum_t\ell_t(i^\star)+\epsilon\sum_tq_t+\log(N)/\epsilon$, which is the first assertion. [given, step 3.1, algebra]

5.1 For losses in $[0,1]$, $q_t\le\sum_i x_t(i)=1$. Since $[N]$ is finite and nonempty, fix $i^\star$ attaining $\min_i\sum_t\ell_t(i)$. If $N\ge2$, then $N>1$ and [F7] gives $\log N>\log1=0$, so $\epsilon=\sqrt{\log N/T}$ is positive; step 4.1 now gives the deterministic mixed-loss regret bound $\epsilon T+\log N/\epsilon=2\sqrt{T\log N}$. If $N=1$, the only sampled expert is the only comparator, so the static regret is zero. [given, F7, step 4.1, choose, algebra]

6.1 For each $t$, $\ell_t(I_t)=\sum_{i=1}^N\ell_t(i)\mathbf 1_{\{I_t=i\}}$. By [A1], the entire loss sequence is fixed before randomization; [F11] gives the choice-before-feedback order, and [F1] makes every $x_t$ deterministic from the fixed losses and previous updates. Thus [F8]–[F9] give $\mathbb E[\ell_t(I_t)]=\sum_i\ell_t(i)\mathbb P(I_t=i)=m_t$ and $\mathbb E[\sum_t\ell_t(I_t)]=\sum_t m_t$. The bounded losses are measurable by the algorithm's protocol and integrable by [F12]. Subtracting the deterministic best-expert loss proves the expected static-regret assertion from step 5.1 using [F10]. [A1, given, F1, F8, F9, F10, F11, F12, step 5.1, algebra] ∎
