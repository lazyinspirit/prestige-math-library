---
id: ex-ordinary-importance-sampling-infinite-variance
kind: example
title: Ordinary importance sampling can have infinite variance under full support
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-finite-markov-decision-process
  - lem-finite-mdp-policy-action-state-reward-path-law
  - def-episodic-returns-td-errors-and-policy-support
  - lem-finite-episode-policy-importance-ratio-is-unbiased
  - alg-monte-carlo-policy-evaluation
  - thm-continuity-from-above-for-measures
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-monotone-convergence-for-the-integral
  - thm-geometric-series
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§5.5, ordinary importance sampling and the infinite-variance two-step example."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.1, ordinary importance-sampling estimator and variance caveat."

---

## Example

Let the state set be $\{s,d\}$ with actions $A(s)=\{a,b\}$ and $A(d)=\{c\}$. The reward alphabet is $\{0,1\}$ and the discount is $\gamma=9/10$. At $s$, action $a$ gives reward $0$ and returns to $s$, while action $b$ gives reward $1$ and transitions to terminal state $d$. At $d$, action $c$ gives reward $0$ and returns to $d$, but episodes stop upon first reaching $d$. The behavior policy chooses $a,b$ at $s$ with probabilities $1/10,9/10$, respectively; the target policy chooses them with probabilities $1/2,1/2$. Both policies choose $c$ at $d$. Starting from $s$, both policies terminate almost surely and target support holds. If $N$ is the number of $a$ actions before $b$, the ordinary importance-sampling return $X=\Lambda_{0:T-1}G_0$ has mean $10/11$ and infinite variance.

## Example references

[[def-finite-markov-decision-process|The finite joint reward-transition model]].

[[def-episodic-returns-td-errors-and-policy-support|The discounted episodic return and action likelihood ratio]].

[[lem-finite-episode-policy-importance-ratio-is-unbiased|The ordinary importance-sampling mean identity under support]].

[[alg-monte-carlo-policy-evaluation|The ordinary first-visit estimator]].

[[def-axiom-of-choice|Choice used by the path-space construction]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** The two-state finite MDP, its terminal state, $\gamma=9/10$, the stationary behavior and target policies, and AC for the path laws.

[A1] [[def-axiom-of-choice]]: the policy path laws exist under the Axiom of Choice.

[F1] [[def-finite-markov-decision-process]]: the joint reward-transition masses at $s$ are deterministic for $a,b$ as stated, and the two actions have the stated policy probabilities.

[F2] [[lem-finite-mdp-policy-action-state-reward-path-law]]: a finite action-state-reward trajectory has probability equal to the product of its policy action probabilities and MDP transition-reward masses.

[F3] [[def-episodic-returns-td-errors-and-policy-support]]: $G_0=\sum_{k=0}^{T-1}\gamma^kR_{k+1}$ and $\Lambda_{0:T-1}$ is the product of target-to-behavior action-probability ratios.

[F4] [[lem-finite-episode-policy-importance-ratio-is-unbiased]]: with target support and almost-sure termination under both policies, the ordinary weighted return has target-policy mean.

[F5] [[thm-geometric-series]]: $\sum_{n=0}^\infty r^n=1/(1-r)$ for $|r|<1$ and diverges for $|r|\ge1$.

[F6] [[thm-continuity-from-above-for-measures]]: probabilities of decreasing events converge to the probability of their intersection.

[F7] [[def-probability-measure]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: trajectory probabilities form a probability measure and nonnegative expectations are their Lebesgue integrals.

[F8] [[thm-monotone-convergence-for-the-integral]]: expectations of increasing nonnegative truncations converge to the expectation of their pointwise limit.

## Proof

1.1 Under $\mu$, the event $\{N\ge n\}$ consists of $n$ successive choices of $a$ and has probability $(1/10)^n$ by [F2]. Under $\pi$ it has probability $(1/2)^n$. These events decrease to the event of never choosing $b$; [F6] shows that this event has probability zero under either policy. Since both actions have positive probability under both policies, target support holds. [given, A1, F1, F2, F6]

2.1 Under $\pi$, $P_\pi(N=n)=2^{-(n+1)}$ and the return on that episode is $(9/10)^n$. Summing first over $N\le m$ and then letting $m\to\infty$, [F7]–[F8] and [F5] give $V^\pi(s)=\sum_{n=0}^{\infty}2^{-(n+1)}(9/10)^n =\frac12\sum_{n=0}^{\infty}(9/20)^n=\frac{10}{11}.$ For the episode with $N=n$, the likelihood ratio is $5^n(5/9)$ and hence $X_n=(5/9)(9/2)^n$. By [F4] and the support and termination verified in step 1.1, $E_\mu[X]=V^\pi(s)=10/11$. [given, F2, F3, F4, F5, F7, F8, step 1.1, algebra]

3.1 The behavior probability of $N=n$ is $(9/10)(1/10)^n$. Therefore $E_\mu[X^2]=\sum_{n=0}^{\infty}\frac9{10}\left(\frac1{10}\right)^n\left[\frac59\left(\frac92\right)^n\right]^2 =\frac5{18}\sum_{n=0}^{\infty}\left(\frac{81}{40}\right)^n=+\infty,$ where [F7]–[F8] justify the nonnegative path sum and [F5] gives divergence because $81/40>1$. Let $m=10/11$. Since $X_n\to\infty$, there is $n_0$ such that $X_n\ge2m$ for all $n\ge n_0$, and then $(X_n-m)^2\ge X_n^2/4$. The tail second moment is infinite, so $E_\mu[(X-m)^2]=+\infty$. Together with the finite mean from step 2.1, this proves that $X$ has infinite variance. [given, F5, F7, F8, step 2.1, algebra] ∎
