---
id: thm-exp4-expected-regret
kind: theorem
title: Exp4 expected regret against the best fixed expert
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - def-static-dynamic-and-strongly-adaptive-regret
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-conditional-expectation-given-a-sigma-algebra
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-exp4-unbiased-expert-reward-estimates
  - lem-exp4-weighted-estimated-loss-second-moment
  - lem-exp4-potential-inequality
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-nonnegative-square-root-exists-and-unique
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the instance, expert set, action set, horizon, and action-history tree are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 18 §18.4, Theorem 18.1 and its full proof, PDF pp. 238–240 / printed pp. 229–231. The source leaves Lemma 18.2 as Exercise 18.2; its proof is supplied locally."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§7, Theorem 7.1 and complete proof, PDF pp. 17–20 / SIAM printed pp. 65–68. Its uniform-exploration algorithm and constants are not imported."
---

## Statement

Let $n\ge1$, $k>1$, and $M>1$ be integers. For each $t\in[n]$, let $x_t\in[0,1]^k$ and let $E(t)$ be an $M\times k$ matrix with nonnegative entries whose every row sums to one. Assume the reward vectors and advice matrices are deterministic and fixed before learner randomization, each advice matrix is revealed before its action, and the learner observes only the reward of its sampled action. Run Exp4 with
$$
\eta=\sqrt{\frac{2\log M}{nk}},
$$
where $\log$ is the natural logarithm and the square root is the nonnegative real root. Define expected regret against the best fixed expert by
$$
R_n=\mathbb E\left[\max_{m\in[M]}\sum_{t=1}^n\sum_{i=1}^k E(t)_{m,i}x_{t,i}-\sum_{t=1}^n X_t\right],\qquad [M]=\{1,\ldots,M\}.
$$
Then
$$
R_n\le\sqrt{2nk\log M}.
$$

## Statement references

[[def-contextual-bandit-protocol|Oblivious contextual bandit protocol and expected regret]]: the fixed reward/advice scope, action feedback, and reward-regret convention are defined there.

[[alg-exp4|Exp4 algorithm]]: the action mixture, importance-weighted estimates, and expert update used in the theorem are defined there.

[[lem-exp4-unbiased-expert-reward-estimates|Conditional unbiasedness of expert reward estimates]]: supported action estimates recover each fixed expert's expected reward, including the zero-support boundary.

[[lem-exp4-weighted-estimated-loss-second-moment|Weighted estimated-loss second moment]]: the expected quadratic term in the potential bound is at most $k$ per round.

[[lem-exp4-potential-inequality|Exp4 potential inequality]]: every fixed expert's estimated-reward advantage is bounded by the log-prior term and estimated-loss second moments.

## Facts & Assumptions

**Given:** The finite oblivious contextual bandit instance, Exp4 with the stated learning rate, and expected regret against its best fixed expert.

[A1] The reward vectors $x_t$ and advice matrices $E(t)$ are fixed before learner randomization, as stated in the Statement; hence a best expert can be chosen deterministically.

[F1] [[def-contextual-bandit-protocol]]: advice rows are probability vectors, the instance is oblivious, the learner observes $X_t=x_{t,A_t}$, and $R_n$ is the expectation of the best-fixed-expert reward minus the learner's cumulative reward.

[F2] [[alg-exp4]]: $P_{t,i}=\sum_mQ_{t,m}E(t)_{m,i}$, $Q_t$ is determined before the current draw, and all estimates are finite under the zero-quotient convention.

[F3] [[lem-exp4-unbiased-expert-reward-estimates]]: $\mathbb E[\widetilde X_{t,m}\mid\mathcal F_{t-1}]=\sum_iE(t)_{m,i}x_{t,i}$ for every expert, including zero-probability actions.

[F4] [[lem-exp4-weighted-estimated-loss-second-moment]]: $\mathbb E[\sum_mQ_{t,m}\widetilde L_{t,m}^{2}\mid\mathcal F_{t-1}]\le k$.

[F5] [[lem-exp4-potential-inequality]]: for every fixed $m^*$, the pathwise estimated-reward gap is at most $\log(M)/\eta+(\eta/2)\sum_{t,m}Q_{t,m}\widetilde L_{t,m}^{2}$.

[F6] [[def-static-dynamic-and-strongly-adaptive-regret]]: expected regret is the expectation of the specified measurable, integrable regret random variable.

[F7] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional expectation is characterized by its integrals on events in the pre-action sigma-algebra.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of an integrable random variable is its Lebesgue integral.

[F9] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: finite sums of integrable random variables have the corresponding sum of expectations.

[F10] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log1=0$, and $\log(ab)=\log a+\log b$ for positive $a,b$.

[F11] [[lem-nonnegative-square-root-exists-and-unique]]: each nonnegative real number has a unique nonnegative square root.

## Proof

1.1 Since $[M]$ is finite and the advice and rewards are fixed, choose a maximizing expert $m^*$; it is nonrandom. At any positive-probability pre-action history, [F2] makes $Q_t$ and $P_t$ fixed. By [F3], the conditional mean of the comparator estimate is its true expert reward. Finite summation and $P_{t,i}=\sum_mQ_{t,m}E(t)_{m,i}$ give $\mathbb E[\sum_mQ_{t,m}\widetilde X_{t,m}\mid\mathcal F_{t-1}]=\sum_mQ_{t,m}\sum_iE(t)_{m,i}x_{t,i}=\sum_iP_{t,i}x_{t,i}=\mathbb E[X_t\mid\mathcal F_{t-1}]$. All histories and estimates are finite, so summing these conditional identities over histories and rounds gives $R_n=\mathbb E[\sum_t\widetilde X_{t,m^*}-\sum_{t,m}Q_{t,m}\widetilde X_{t,m}]$. This uses finite conditional sums, not a general tower-property theorem. [A1, F1, F2, F3, F6, F7, F8, F9, algebra, choose]

2.1 Apply [F5] pathwise to $m^*$. Taking expectations, using [F9], and summing the conditional bound [F4] over the finite pre-action histories gives $R_n\le\log M/\eta+(\eta/2)\sum_{t=1}^n\mathbb E[\sum_mQ_{t,m}\widetilde L_{t,m}^{2}]\le\log M/\eta+\eta nk/2$. [F4, F5, F7, F8, F9, step 1.1, algebra]

3.1 Since $M>1$, [F10] gives $\log M>0$. Thus $2\log M/(nk)>0$, and [F11] supplies the positive learning rate in the Statement. Substituting it into step 2.1 makes both terms equal to $\sqrt{nk\log M/2}$, whose sum is $\sqrt{2nk\log M}$. [F10, F11, step 2.1, algebra] ∎
