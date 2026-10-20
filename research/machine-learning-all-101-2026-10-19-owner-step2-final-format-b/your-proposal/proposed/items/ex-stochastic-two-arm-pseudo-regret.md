---
id: ex-stochastic-two-arm-pseudo-regret
kind: example
title: "Two stochastic arms: pseudo-regret and reward regret"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps: [def-adversary-and-feedback-model, def-static-dynamic-and-strongly-adaptive-regret, lem-finite-arm-regret-decomposes-into-expected-action-counts, cor-expectation-of-an-indicator-is-probability, cor-expectation-linearity-monotonicity-and-modulus-bound]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§§4.1, 4.4–4.5, PDF pp. 64–71 / printed pp. 56–63: finite stochastic arms, expected reward regret, and action-count decomposition."
verification:
  precheck: pass
---

## Example

Take horizon $T=1$ and two fixed Borel probability laws $P_1,P_2$ on $(\mathbb R,\mathcal B(\mathbb R))$, each concentrated on $\{0,1\}$, such that $P_1(\{1\})=3/4$, $P_1(\{0\})=1/4$, and $P_2(\{1\})=P_2(\{0\})=1/2$. The arm means are the integrals of the coordinate $y\mapsto y$, so $\mu_1=3/4$ and $\mu_2=1/2$. The learner chooses arm $A_1=2$. Realize the chosen reward on $\Omega=\{0,1\}$ with the full power set and each point of probability $1/2$, setting $Y_1(\omega)=\omega$. Then the pseudo-regret is $1/4$, the expected realized reward regret is $1/4$, and the expected action-count decomposition equals $1/4$.

## Example references

[[def-adversary-and-feedback-model]]: a finite-arm stochastic reward model specifies fixed arm laws and generates the reward after the chosen arm.

[[def-static-dynamic-and-strongly-adaptive-regret]]: pseudo-regret uses arm means; realized reward regret uses sampled rewards.

[[lem-finite-arm-regret-decomposes-into-expected-action-counts]]: expected reward regret equals expected pseudo-regret and the gap-weighted expected pull counts.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §§4.1, 4.4–4.5, PDF pp. 64–71.

## Facts & Assumptions

**Given:** The two fixed Borel Bernoulli reward laws, $T=1$, $A_1=2$, and the equiprobable sample space $\Omega=\{0,1\}$ with $Y_1(\omega)=\omega$.

[F1] In the fixed-law finite-arm model, the conditional-mean event identity is stated for every history-and-arm event contained in the chosen-arm event ([[def-adversary-and-feedback-model]]).

[F2] Pseudo-regret is $\sum_t(\mu^*-\mu_{A_t})$, realized reward regret is $\sum_t(\mu^*-Y_t)$, and arm counts sum the indicators of the chosen-arm events ([[def-static-dynamic-and-strongly-adaptive-regret]]).

[F3] For the stated conditional-mean model, the finite-arm lemma gives $\mathbb E[R_T^{\rm rew}]=\mathbb E[\bar R_T]=\sum_i(\mu^*-\mu_i)\mathbb E[N_i(T)]$ ([[lem-finite-arm-regret-decomposes-into-expected-action-counts]]).

[F4] For an event $B$, $\mathbb E[\mathbf1_B]=\mathbb P(B)$ ([[cor-expectation-of-an-indicator-is-probability]]).

[F5] Expectation is linear for integrable random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Verification

1.1 Under each arm law, the coordinate $y\mapsto y$ equals $\mathbf1_{\{1\}}$ almost surely, so its integral is the probability of $\{1\}$: $\mu_1=3/4$ and $\mu_2=1/2$. Thus $\mu^*=3/4$. In the realized process, $Y_1(\omega)=\omega$ has Borel law $P_2$, since both put mass $1/2$ at each of $0$ and $1$ and zero elsewhere, so $\mathbb E[Y_1]=1/2$. [given, algebra]

2.1 The pre-reward history is trivial and $A_1=2$ deterministically. Thus for arm 2 the history-and-arm events are $B=\varnothing$ or $B=\Omega$, while for arm 1 only $B=\varnothing$ is possible. For every Borel $C$, the fixed-law identity for $B=\Omega$ is $\mathbb P(\Omega\cap\{Y_1\in C\})=P_2(C)=\mathbb P(\Omega)P_2(C)$ by step 1.1; it is trivial for $B=\varnothing$. The conditional-mean identity likewise holds: for $B=\Omega$, $\mathbb E[\mathbf1_B Y_1]=1/2=\mu_2\mathbb P(B)$, and for $B=\varnothing$ both sides are zero. [given, F1, step 1.1]

2.2 The sole chosen arm is 2, so $\bar R_1=3/4-1/2=1/4$, $N_1(1)=0$, and $N_2(1)=1$. [given, F2, step 1.1, algebra]

2.3 The realized reward regret is $3/4-Y_1$. By linearity and $\mathbb E[Y_1]=\mathbb P(\omega=1)=1/2$, its expectation is $3/4-1/2=1/4$. [given, F4, F5, step 1.1, algebra]

3.1 The gap-weighted count sum is $(3/4-3/4)\mathbb E[N_1(1)]+(3/4-1/2)\mathbb E[N_2(1)]=0\cdot0+(1/4)\cdot1=1/4$. This agrees with the pseudo-regret and realized-regret expectations in steps 2.2 and 2.3, as the finite-arm lemma asserts. [given, F3, step 2.2, step 2.3, algebra] ∎

