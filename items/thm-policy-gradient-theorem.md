---
id: thm-policy-gradient-theorem
kind: theorem
title: "Discounted episodic policy gradients from trajectory likelihoods"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-finite-markov-decision-process
  - def-differentiable-stochastic-policy
  - def-discounted-return-and-value-functions
  - def-episodic-returns-td-errors-and-policy-support
  - lem-finite-mdp-policy-action-state-reward-path-law
  - lem-policy-score-has-zero-conditional-mean
  - def-axiom-of-choice
  - def-countable
  - def-natural-number-coding-of-finite-sequences
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-conditional-expectation-given-a-sigma-algebra
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - thm-chain-rule-for-total-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-taking-out-what-is-known
  - thm-dominated-convergence
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "§13.2, complete episodic policy-gradient theorem derivation, printed pp. 268–270; §13.3, the discounted REINFORCE estimator and gamma-to-time factor, printed p. 270."
    - title: "Ronald J. Williams, Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning, Machine Learning 8 (1992)"
      url: "https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf"
      locator: "§4 and Appendix A.2, episodic REINFORCE and the unfolded-time proof, printed pp. 233–234 and PDF pp. 252–253."

---

## Statement

Assume the Axiom of Choice. Let a finite Markov decision process have nonempty finite state set $S$, finite nonempty action sets $A(s)$, finite reward set $\mathcal R$, and fixed joint transition-reward masses $p(s',r\mid s,a)$. Fix an initial state $s_0\in S$, a terminal set $S_\dagger\subseteq S$, and $0\le\gamma<1$. Let $U\subseteq\mathbb R^d$ be open, let $\theta_0\in U$, and let $\pi_\theta$ be a differentiable stationary policy family with fixed common support on an open neighborhood $U_0$ of $\theta_0$. Suppose every episode from $s_0$ under $\pi_\theta$, for $\theta\in U_0$, reaches $S_\dagger$ in finite time almost surely. Let $T$ be the first terminal time, let

$$G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}\quad(t<T),\qquad G_T=0,$$

and set $J(\theta)=V^{\pi_\theta}(s_0)=\mathbb E_\theta[\sum_{k=0}^{T-1}\gamma^kR_{k+1}]$. Let $\mathcal T$ be the set of finite trajectories that use only actions in the common policy support, have positive transition masses, and stop at their first terminal state. For $\tau=(s_0,a_0,r_1,s_1,\ldots,a_{m-1},r_m,s_m)\in\mathcal T$, define

$$p_\theta(\tau)=\prod_{t=0}^{m-1}\pi_\theta(a_t\mid s_t)p(s_{t+1},r_{t+1}\mid s_t,a_t),\qquad R_\gamma(\tau)=\sum_{k=0}^{m-1}\gamma^kr_{k+1}.$$

Assume the trajectory masses $p_\theta(\tau)$ are totally differentiable at $\theta_0$, the linear map $h\mapsto\sum_{\tau\in\mathcal T}R_\gamma(\tau)Dp_{\theta_0}(\tau)h$ is defined by an absolutely convergent sum, and there is a summable $H:\mathcal T\to[0,\infty)$ that dominates the return-weighted normalized remainders below and for which those remainders tend to zero pathwise:

$$\frac{|R_\gamma(\tau)|\,|p_{\theta_0+h}(\tau)-p_{\theta_0}(\tau)-Dp_{\theta_0}(\tau)h|}{\|h\|_2}\le H(\tau),\qquad \frac{|R_\gamma(\tau)|\,|p_{\theta_0+h}(\tau)-p_{\theta_0}(\tau)-Dp_{\theta_0}(\tau)h|}{\|h\|_2}\longrightarrow0$$

for every $\tau\in\mathcal T$ as $h\to0$, with $\sum_{\tau\in\mathcal T}H(\tau)<\infty$.

Also assume

$$\mathbb E_{\theta_0}\!\left[\sum_{t<T}\sum_{k<T}\gamma^k\|\psi_{\theta_0}(S_t,A_t)\|_2\,|R_{k+1}|\right]<\infty,$$

where $\psi_\theta(s,a)=\nabla_\theta\log\pi_\theta(a\mid s)$ on the common support. Then $J$ is totally differentiable at $\theta_0$ and

$$\nabla_\theta J(\theta_0)=\mathbb E_{\theta_0}\!\left[\sum_{t=0}^{T-1}\gamma^t\,\nabla_\theta\log\pi_{\theta_0}(A_t\mid S_t)\,G_t\right].$$

## Statement references

[Sutton and Barto, *Reinforcement Learning: An Introduction*, second-edition draft](https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf).

[Williams, *Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning*](https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf).

## Facts & Assumptions

**Given:** The finite MDP, Axiom of Choice, start and terminal states, discount, policy family, almost-sure termination, and the two stated dominated-differentiation and integrability assumptions.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; it is used to obtain the policy path law.

[A2] The return-weighted normalized likelihood remainders in the Statement tend to zero pathwise and are dominated by one summable envelope; this is the exact hypothesis for applying dominated convergence to the trajectory series.

[A3] The discounted score-reward double sum in the Statement is integrable; it permits the expectation and time sums in the proof to be interchanged by dominated convergence.

[F1] [[def-finite-markov-decision-process]]: state, action, and reward sets are finite; $p(s',r\mid s,a)$ is a normalized joint next-state/reward law, and the dynamics do not depend on $\theta$.

[F2] [[def-differentiable-stochastic-policy]]: each $\pi_\theta(\cdot\mid s)$ is normalized and totally differentiable, with fixed positive support; $\psi_\theta(s,a)=\nabla_\theta\log\pi_\theta(a\mid s)$ on that support.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: the episode stops at its first terminal state, terminates almost surely, and $G_t=\sum_{k=t}^{T-1}\gamma^{k-t}R_{k+1}$ is the return from time $t$; its initial value is the discounted value on the absorbing extension.

[F4] [[lem-finite-mdp-policy-action-state-reward-path-law]]: under AC, every feasible finite action-state-reward prefix has mass equal to the product of its policy probabilities and joint transition-reward masses; its one-step record alphabet is finite.

[F5] [[def-countable]] and [[def-natural-number-coding-of-finite-sequences]]: a set is at most countable when it injects into $\mathbb N$, and every finite sequence of natural numbers has an injective natural-number code.

[F6] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: for a bounded bilinear map, $D(B(f,g))h=B(Df\,h,g)+B(f,Dg\,h)$.

[F7] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions are compositions of total derivatives.

[F8] [[thm-logarithm-derivative-and-integral]]: for positive $x$, $\log'(x)=1/x$.

[F9] [[lem-policy-score-has-zero-conditional-mean]]: before each action, the conditional expectation of its score vector given the entire past and current state is zero.

[F10] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation preserves integrals on conditioning events; [[thm-taking-out-what-is-known]] permits an integrable measurable past factor to be taken outside it.

[F11] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant permits convergence of the corresponding integrals.

[F12] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of an integrable real random variable is its finite Lebesgue integral.

## Proof

**Proof technique:** differentiate the finite-trajectory likelihood, then remove rewards earned before each action by the zero-mean score identity.

1.1 If $s_0\in S_\dagger$, then $T=0$, the return and gradient are zero, and the sum in the conclusion is empty. Otherwise, the transition-record alphabet is finite by [F1] and [F4]. Fix an enumeration of that alphabet; every finite terminal path becomes a finite sequence of natural-number indices, so [F5] injects $\mathcal T$ into $\mathbb N$. [given, F1, F3, F4, F5, algebra]

1.2 Fix $\tau=(s_0,a_0,r_1,s_1,\ldots,a_{m-1},r_m,s_m)\in\mathcal T$. By [F4], its probability is the displayed product. Repeatedly applying the bounded-bilinear product rule [F6] to its finitely many policy factors, and using [F2], [F7], and [F8], gives $Dp_{\theta_0}(\tau)=p_{\theta_0}(\tau)\sum_{t=0}^{m-1}\psi_{\theta_0}(s_t,a_t)$. Paths with a zero transition mass or an unsupported action have probability zero throughout $U_0$ and are omitted from $\mathcal T$. The empty trajectory has empty product $1$ and empty score sum $0$. [F1, F2, F4, F6, F7, F8, algebra]

2.1 The episode termination assumption makes the masses of $\mathcal T$ sum to one, and [F3] identifies $J(\theta)=\sum_{\tau\in\mathcal T}p_\theta(\tau)R_\gamma(\tau)$. By [A2] and [F11], the derivative of this series at $\theta_0$ is the absolutely convergent sum $\sum_\tau R_\gamma(\tau)Dp_{\theta_0}(\tau)$. Substituting step 1.2 shows that, for every direction $h\in\mathbb R^d$, $DJ(\theta_0)h=\mathbb E_{\theta_0}[R_\gamma(\tau)\langle\sum_{t<T}\psi_{\theta_0}(S_t,A_t),h\rangle]$. [A1, A2, F3, F4, F11, F12, step 1.2]

3.1 Expand $R_\gamma=\sum_{k<T}\gamma^kR_{k+1}$. For each $k<t$, the event $t<T$ and the past reward $R_{k+1}$ are $\mathcal H_t$-measurable. By [F9] and [F10], each coordinate of $\mathbb E[\mathbf1_{\{t<T\}}R_{k+1}\psi_t]$ is zero. The bound [A3] dominates every finite rectangular truncation of the double sum by an integrable random variable, so [F11] permits passing to the full sum. All terms with $k<t$ therefore vanish in step 2.1. [A3, F9, F10, F11, step 2.1]

4.1 The remaining terms have $k\ge t$, and the return definition [F3] gives $\sum_{k=t}^{T-1}\gamma^kR_{k+1}=\gamma^tG_t$. Hence step 2.1 becomes $DJ(\theta_0)h=\langle\mathbb E_{\theta_0}[\sum_{t=0}^{T-1}\gamma^tG_t\psi_{\theta_0}(S_t,A_t)],h\rangle$. Since this holds for every $h$, the vector inside the inner product is the Euclidean gradient of $J$ at $\theta_0$, proving the assertion. [F2, F3, step 2.1, step 3.1, algebra] ∎

## Remarks

The factor $\gamma^t$ is part of the identity for the discounted start-state objective and the return convention stated here. The result is episodic. A continuing average-reward policy-gradient statement uses a different objective and requires an existing stationary state distribution independent of the start state under the source's ergodicity premise. No convergence theorem for nonlinear or deep parameter updates is asserted here.
