---
id: thm-doubly-robust-ope-is-unbiased-under-either-correct-component
kind: theorem
title: "Doubly robust evaluation is unbiased under either exact component"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-doubly-robust-ope
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-offline-reinforcement-learning-dataset
  - lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative
  - lem-finite-mdp-policy-action-state-reward-path-law
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-conditional-expectation-exists-by-radon-nikodym
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-taking-out-what-is-known
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§3.3 equation (8), §4.1 equation (10), and Theorem 1 in §4.2."
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§3.1, PDF pp. 11–12, equation (6) and its correct-propensity/correct-model qualification."
---

## Statement

Assume AC and the finite-horizon dataset conditions with fixed target policy $\pi$, behavior policy $\mu$, horizon $H$, discount $0\le\gamma\le1$, and initial state $s_0$. Hold the finite functions $\widehat Q_t$ and multipliers $\widehat\rho_t$ fixed when taking expectation over the evaluation trajectories. Set $\widehat V_H(s)=0$ and $\widehat V_t(s)=\sum_{a\in A(s)}\pi(a\mid s)\widehat Q_t(s,a)$. Let

$$D(\tau)=\widehat V_0(s_0)+\sum_{t=0}^{H-1}\gamma^t\widehat W_{0:t}(\tau)\left(R_{t+1}+\gamma\widehat V_{t+1}(S_{t+1})-\widehat Q_t(S_t,A_t)\right),\qquad \widehat W_{0:t}=\prod_{k=0}^{t}\widehat\rho_k(S_k,A_k).$$

For a dataset of $n$ independent evaluation trajectories, let $\widehat J_{\mathrm{DR}}=n^{-1}\sum_{i=1}^nD(\tau_i)$. Then $\mathbb E[\widehat J_{\mathrm{DR}}]=J_H(\pi;s_0)$ under either of these separate conditions:

1. The full target trajectory law is absolutely continuous with respect to the behavior trajectory law, and every multiplier is the correct action ratio $\widehat\rho_t(s,a)=\pi(a\mid s)/\mu(a\mid s)$ on every behavior-positive state-action pair reachable before time $H$; the ratio is $0$ when $\pi(a\mid s)=0<\mu(a\mid s)$. No correctness assumption is imposed on the functions $\widehat Q_t$.

2. For every $0\le t<H$, state $s$, and action $a$, the value model is exact:

   $$\widehat Q_t(s,a)=Q_t^\pi(s,a):=\sum_{s'\in S}\sum_{r\in\mathcal R}p(s',r\mid s,a)\left(r+\gamma V_{t+1}^\pi(s')\right),\qquad V_H^\pi(s)=0,\qquad V_t^\pi(s)=\sum_{a\in A(s)}\pi(a\mid s)Q_t^\pi(s,a),$$

   so $\widehat V_t=V_t^\pi$ at every step, including the zero terminal value. This branch requires no trajectory coverage and no correctness assumption on the fixed finite multipliers. If neither exact condition holds, this theorem asserts no unbiasedness.

## Statement references

[[alg-doubly-robust-ope|The finite-horizon doubly robust score and its zero terminal-value convention.]]

[[def-offline-reinforcement-learning-dataset|The finite-horizon path law, target value, and behavior-data sampling convention.]]

[[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative|Exact prefix density change under correct action ratios.]]

[[lem-finite-mdp-policy-action-state-reward-path-law|The shared transition/reward law conditional on each finite history.]]

[[def-axiom-of-choice|AC is used for path-law, RN-density, and conditional-expectation existence.]]

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)

## Facts & Assumptions

**Given:** AC, a finite MDP, finite horizon $H$, $0\le\gamma\le1$, fixed initial state $s_0$, stationary target and behavior policies, independent behavior trajectories, fixed finite Q functions and multipliers, and the OPE estimator in the Statement.

[A1] [[def-axiom-of-choice]]: AC is required by the finite path-law, RN-density, and conditional-expectation existence suppliers cited below.

[F1] [[def-offline-reinforcement-learning-dataset]]: the same finite joint reward/next-state mass is used under both policies, the dataset trajectories have behavior law $P^\mu_H$, and $J_H(\pi;s_0)=\mathbb E_{P^\pi_H}G_H$.

[F2] [[alg-doubly-robust-ope]]: $\widehat V_H=0$, $\widehat V_t(s)=\sum_a\pi(a\mid s)\widehat Q_t(s,a)$, and the estimator is the average of the stated finite weighted residual scores.

[F3] [[lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative]]: under full coverage, exact products of action ratios are the RN densities on every prefix through the next reward and state.

[F4] [[lem-finite-mdp-policy-action-state-reward-path-law]]: conditional on a finite history ending at state $s$ and action $a$, the next reward/state atom has probability $p(s',r\mid s,a)$; this follows by dividing the successive prefix atom masses when the conditioning history has positive behavior probability.

[F5] [[def-conditional-expectation-as-an-ae-class]] and [[thm-conditional-expectation-exists-by-radon-nikodym]]: under AC, conditional expectations exist as almost-sure classes with versions satisfying the event-integral definition [[def-conditional-expectation-given-a-sigma-algebra]].

[F6] [[thm-taking-out-what-is-known]]: if $X$ is integrable and $Z$ is bounded and measurable with respect to the conditioning sigma-algebra, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$ almost surely.

[F7] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and preserves total expectation.

[F8] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: finite-MDP, finite-horizon terms are integrable, and finite real sums may be integrated termwise.

## Proof

**Given:** The hypotheses and conventions in the Statement and [A1], [F1]–[F8].

1.1 First assume condition 1. For every $t$, the residual $C_t=R_{t+1}+\gamma\widehat V_{t+1}(S_{t+1})-\widehat Q_t(S_t,A_t)$ is a function of the prefix through $(R_{t+1},S_{t+1})$, so [F3] gives $\mathbb E_\mu[\widehat W_{0:t}C_t]=\mathbb E_\pi[C_t]$. The baseline term is the same under both laws because $S_0=s_0$ is fixed. [given, F1, F2, F3, construct]

1.2 Now assume condition 2. For each $s$, let $U_t^\pi(s)$ be the expected discounted return over steps $t,\ldots,H-1$ under target policy $\pi$, starting at state $s$ at time $t$, and set $U_H^\pi(s)=0$. The zero-step return gives $U_H^\pi=V_H^\pi$. If $U_{t+1}^\pi=V_{t+1}^\pi$, then conditioning on the finite target action sum and the joint next-state/reward mass gives $U_t^\pi(s)=\sum_a\pi(a\mid s)\sum_{s',r}p(s',r\mid s,a)(r+\gamma V_{t+1}^\pi(s'))=\sum_a\pi(a\mid s)Q_t^\pi(s,a)=V_t^\pi(s)$. Backward induction proves $U_t^\pi=V_t^\pi$ for all $t$, hence $V_0^\pi(s_0)=J_H(\pi;s_0)$. Condition 2 and the algorithm's definition of $\widehat V_t$ then give $\widehat V_t=V_t^\pi$ for all $t$. [given, F1, F2, algebra]

1.3 Fix $t$ and let $\mathcal H_t$ be the finite sigma-algebra generated by the history through $(S_t,A_t)$. For each positive-probability history atom $h$ ending at $(s,a)$, the path-law formula in [F4] gives $P_\mu(h,(R_{t+1},S_{t+1})=(r,s'))=P_\mu(h)\,p(s',r\mid s,a)$; dividing by $P_\mu(h)>0$ proves that the conditional next reward/state mass is $p(s',r\mid s,a)$. Therefore $E_\mu[C_t\mid\mathcal H_t]=\sum_{s',r}p(s',r\mid s,a)\left(r+\gamma V_{t+1}^\pi(s')-Q_t^\pi(s,a)\right)=0$. The equality follows because $Q_t^\pi(s,a)$ is defined by the same finite sum. Each $\widehat W_{0:t}$ is a finite $\mathcal H_t$-measurable function, since the trajectory space and horizon are finite and the multipliers are fixed. Applying [F6] and then expectation preservation [F7] yields $\mathbb E_\mu[\widehat W_{0:t}C_t]=0$. [given, A1, F4, F5, F6, F7, F8, construct, algebra]

2.1 For each state $s$, $\sum_a\pi(a\mid s)\widehat Q_t(s,a)=\widehat V_t(s)$, so averaging over the target-law distribution of $S_t$ gives $\mathbb E_\pi[\widehat Q_t(S_t,A_t)]=\mathbb E_\pi[\widehat V_t(S_t)]$. Substituting the density identities from step 1.1 into the expected score, the $\widehat V_t$ terms telescope: $\mathbb E_\mu D=\widehat V_0(s_0)+\sum_{t=0}^{H-1}\gamma^t\mathbb E_\pi[R_{t+1}]+\sum_{t=0}^{H-1}\gamma^{t+1}\mathbb E_\pi[\widehat V_{t+1}(S_{t+1})]-\sum_{t=0}^{H-1}\gamma^t\mathbb E_\pi[\widehat V_t(S_t)]=J_H(\pi;s_0)$ because $S_0=s_0$ and $\widehat V_H=0$. This proves condition 1 without requiring a correct Q model. [given, F1, F2, F3, F8, step 1.1, algebra]

2.2 Every residual term in $D$ has zero expectation by step 1.3, while the baseline is $\widehat V_0(s_0)=V_0^\pi(s_0)=J_H(\pi;s_0)$ by step 1.2. Hence $\mathbb E_\mu D=J_H(\pi;s_0)$. No coverage or ratio-correctness premise was used in this branch. [given, F2, step 1.2, step 1.3, algebra]

3.1 Condition 1 implies that one trajectory score has expectation $J_H(\pi;s_0)$ by step 2.1, and condition 2 implies the same by step 2.2. Every evaluation trajectory has this same behavior law by [F1], so linearity of the integral [F8] makes their finite sample average have expectation $J_H(\pi;s_0)$. Thus either exact condition is sufficient. [step 2.1, step 2.2, F1, F8, algebra] ∎