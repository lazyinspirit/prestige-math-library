---
id: lem-finite-arm-regret-decomposes-into-expected-action-counts
kind: lemma
title: "Finite-arm regret decomposes into expected action counts"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-adversary-and-feedback-model, def-static-dynamic-and-strongly-adaptive-regret, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-expectation-linearity-monotonicity-and-modulus-bound, cor-expectation-of-an-indicator-is-probability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§§4.4–4.5, PDF pp. 68–71 / printed pp. 60–63; complete finite/countable-arm regret-decomposition argument."
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.1, PDF pp. 23–24: fixed-comparator regret convention."
verification:
  precheck: pass
---

## Statement

Let $T,N\ge1$ be integers, let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, and let $A_t:\Omega\to[N]$ be measurable arm choices and $Y_t:\Omega\to\mathbb R$ integrable rewards for $t=1,\ldots,T$. Let $\mu_1,\ldots,\mu_N\in\mathbb R$ be finite arm means and assume the conditional-mean identity
$$
\mathbb E\!\left[Y_t\mathbf1_{\{A_t=i\}}\right]=\mu_i\mathbb P(A_t=i)\qquad(t=1,\ldots,T,\ i\in[N]).
$$
Set $\mu^*:=\max_{i\in[N]}\mu_i$, define the pseudo-regret $\bar R_T:=\sum_{t=1}^T(\mu^*-\mu_{A_t})$, the realized reward regret $R_T^{\rm rew}:=\sum_{t=1}^T(\mu^*-Y_t)$, and the number of pulls of arm $i$ by $N_i(T):=\sum_{t=1}^T\mathbf1_{\{A_t=i\}}$. Then
$$
\mathbb E[R_T^{\rm rew}]=\mathbb E[\bar R_T]=\sum_{i=1}^N(\mu^*-\mu_i)\,\mathbb E[N_i(T)].
$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §§4.4–4.5, PDF pp. 68–71.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §1.1, PDF pp. 23–24.

## Facts & Assumptions

**Given:** The finite stochastic-arm model in the statement, integrable rewards $Y_t$, measurable choices $A_t\in[N]$, and finite means satisfying the stated conditional-mean identity.

[F1] Expectation of an integrable real random variable is its Lebesgue integral on the probability space ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F2] Expectation is linear for finite linear combinations of integrable random variables ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[F3] For every measurable event $B$, $\mathbb E[\mathbf1_B]=\mathbb P(B)$ ([[cor-expectation-of-an-indicator-is-probability]]).

[A1] In the fixed-law finite-arm model, for any round $t$, arm $i$, and event $B$ determined by the pre-reward history and chosen arm with $B\subseteq\{A_t=i\}$, $\mathbb E[Y_t\mathbf1_B]=\mu_i\mathbb P(B)$ ([[def-adversary-and-feedback-model]]). In particular, this holds for $B=\{A_t=i\}$.

## Proof

1.1 For each fixed $t$, the events $E_{t,i}:=\{A_t=i\}$, $i\in[N]$, are a measurable partition of $\Omega$, because $A_t$ takes exactly one value in $[N]$. The conditional-mean hypothesis gives $\mathbb E[Y_t\mathbf1_{E_{t,i}}]=\mu_i\mathbb P(E_{t,i})$. Since $Y_t=\sum_{i=1}^N Y_t\mathbf1_{E_{t,i}}$ pointwise and the sum is finite, linearity of expectation gives $\mathbb E[Y_t]=\sum_{i=1}^N\mu_i\mathbb P(E_{t,i})$. [given, A1, F1, F2]

1.2 Pointwise, $\mu_{A_t}=\sum_{i=1}^N\mu_i\mathbf1_{E_{t,i}}$ and $\mu^*=\sum_{i=1}^N\mu^*\mathbf1_{E_{t,i}}$. Thus $\bar R_T=\sum_{t=1}^T\sum_{i=1}^N(\mu^*-\mu_i)\mathbf1_{E_{t,i}}$. Linearity of expectation and $\mathbb E[\mathbf1_{E_{t,i}}]=\mathbb P(E_{t,i})$ yield $\mathbb E[\bar R_T]=\sum_{t=1}^T\sum_{i=1}^N(\mu^*-\mu_i)\mathbb P(E_{t,i})$. [given, F2, F3, algebra]

2.1 Linearity of expectation and $\mathbb E[\mathbf1_\Omega]=\mathbb P(\Omega)=1$ give $\mathbb E[R_T^{\rm rew}]=T\mu^*-\sum_{t=1}^T\mathbb E[Y_t]$. Substituting step 1.1 and rearranging the finite sums gives $\mathbb E[R_T^{\rm rew}]=\sum_{t=1}^T\sum_{i=1}^N(\mu^*-\mu_i)\mathbb P(E_{t,i})$, which equals the expression in step 1.2. [given, F1, F2, F3, step 1.1, step 1.2, algebra]

3.1 Since $N_i(T)=\sum_{t=1}^T\mathbf1_{E_{t,i}}$, linearity of expectation and the indicator expectation identity give $\mathbb E[N_i(T)]=\sum_{t=1}^T\mathbb P(E_{t,i})$. Summing these equalities over the finite set of arms with coefficients $\mu^*-\mu_i$ identifies the result from step 1.2 with $\sum_{i=1}^N(\mu^*-\mu_i)\mathbb E[N_i(T)]$ and proves the claimed identity. [given, F2, F3, step 1.2, algebra] ∎
