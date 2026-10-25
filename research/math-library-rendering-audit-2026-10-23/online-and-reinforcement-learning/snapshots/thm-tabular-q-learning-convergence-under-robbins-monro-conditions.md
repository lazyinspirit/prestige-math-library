---
id: thm-tabular-q-learning-convergence-under-robbins-monro-conditions
kind: theorem
title: Tabular Q-learning converges under per-pair Robbins–Monro steps and full visitation
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-finite-markov-decision-process
  - def-bellman-optimality-operator
  - thm-bellman-contraction-and-unique-fixed-point
  - def-optimal-action-value-bellman-operator
  - alg-q-learning
  - lem-asynchronous-finite-dimensional-contraction-stochastic-approximation
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-martingale-difference-sequence
  - def-axiom-of-choice
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - lem-optimal-action-value-is-attained-by-greedy-policy
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John N. Tsitsiklis, Asynchronous Stochastic Approximation and Q-Learning"
      url: "https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf"
      locator: "§§2–7, especially Theorem 3, Assumptions 2, 3, and 5, and §7 Theorem 4 for discounted Q-learning."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§6.5, Q-learning update and convergence discussion, printed pp. 157–160."
    - title: "Han-Dong Yang, Optimal Control and Reinforcement Learning, Chapter 2: Value-based Reinforcement Learning"
      url: "https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html"
      locator: "§2.1.4.3, tabular Q-learning and its stated GLIE/Robbins–Monro convergence conditions."
---

## Statement

Assume the Axiom of Choice. Let a finite MDP have nonempty state set $S$, finite state-action set $D$, finite reward alphabet $\mathcal R$, and discount $0\le\gamma<1$. Put $M=\max_{\rho\in\mathcal R}|\rho|$. On a discrete filtered probability space $(\Omega,\mathcal F,(\mathcal F_n)_{n\ge0},P)$, let $Q_0\in\mathbb R^D$ be deterministic. At time $n$, the current pair $I_n=(S_n,A_n)\in D$ is $\mathcal F_n$-measurable, the reward $R_{n+1}\in\mathcal R$ almost surely and next state $S_{n+1}\in S$ are $\mathcal F_{n+1}$-measurable, and

$$
E[\mathbf1_{\{S_{n+1}=s',\,R_{n+1}=\rho\}}\mid\mathcal F_n]=p(s',\rho\mid S_n,A_n)
$$

almost surely for every $s'\in S$ and $\rho\in\mathcal R$. Define $N_n(i)=\#\{k<n:I_k=i\}$. Suppose every $i\in D$ is selected infinitely often almost surely and the deterministic per-pair step sizes satisfy

$$
0\le\alpha_k(i)\le1,\qquad \sum_{k\ge0}\alpha_k(i)=\infty,\qquad \sum_{k\ge0}\alpha_k(i)^2<\infty\quad(i\in D).
$$

Apply the Q-learning update

$$
Q_{n+1}(I_n)=Q_n(I_n)+\alpha_{N_n(I_n)}(I_n)\big[R_{n+1}+\gamma\max_{b\in A(S_{n+1})}Q_n(S_{n+1},b)-Q_n(I_n)\big],
$$

leaving all other coordinates unchanged.

For each initial pair $(s,a)\in D$, define $Q^*(s,a)$ as the supremum of $E[\sum_{k=0}^{\infty}\gamma^kR_{k+1}]$ over all discrete filtered processes with initial pair $(S_0,A_0)=(s,a)$ almost surely, $S_n\in S$, $A_n\in A(S_n)$, $R_{n+1}\in\mathcal R$ almost surely, current state-action pairs measurable at time $n$, next states and rewards measurable at time $n+1$, and the same conditional reward-transition law displayed above at every time. The rewards are bounded, so all these discounted returns are absolutely convergent and integrable.

Then $Q_n$ converges almost surely in the finite-state sup norm to the unique function $Q^*\in\mathbb R^D$ satisfying

$$
Q^*(s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)\big[\rho+\gamma\max_{b\in A(s')}Q^*(s',b)\big]\qquad((s,a)\in D).
$$

This unique fixed point is the optimal action-value function.

The claim uses diminishing per-pair steps and full visitation; it gives no convergence guarantee for a constant step size.

## Statement references

[[def-axiom-of-choice|The Axiom of Choice assumed for conditional-expectation existence]].

[[def-finite-markov-decision-process|The finite joint reward-transition law and bounded reward alphabet]].

[[def-bellman-optimality-operator|The state-value Bellman optimality operator]].

[[thm-bellman-contraction-and-unique-fixed-point|The state-value Bellman operator is a gamma contraction with a unique fixed point]].

[[def-optimal-action-value-bellman-operator|The finite action-value Bellman map targeted by Q-learning]].

[[lem-optimal-action-value-is-attained-by-greedy-policy|The maximal discounted action value equals the Bellman action value of the optimal state value and is attained by a greedy stationary continuation]].

[[alg-q-learning|The sampled tabular Q-learning update]].

[[lem-asynchronous-finite-dimensional-contraction-stochastic-approximation|The locally proved coordinate-wise stochastic-approximation result]].

[Tsitsiklis, *Asynchronous Stochastic Approximation and Q-Learning*](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf).

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Yang, *Optimal Control and Reinforcement Learning*, Chapter 2](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite MDP, $0\le\gamma<1$, the filtered interaction process and its conditional transition-reward law, the per-pair visit counts and step sizes, and the Q-learning update in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is inherited by conditional-expectation classes and martingale differences used below.

[F1] [[def-finite-markov-decision-process]]: for each admissible pair $(s,a)$, $p(s',\rho\mid s,a)\ge0$ and its finite sum over $(s',\rho)$ is $1$; $r(s,a)=\sum_{s',\rho}\rho p(s',\rho\mid s,a)$ and $P(s'\mid s,a)=\sum_\rho p(s',\rho\mid s,a)$; the expected reward is bounded in absolute value by $M$.

[F2] [[def-bellman-optimality-operator]]: $(T^*V)(s)=\max_{a\in A(s)}\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V(s')]$.

[F3] [[thm-bellman-contraction-and-unique-fixed-point]]: $T^*$ has a unique fixed point $V^*\in\mathbb R^S$ when $0\le\gamma<1$.

[F4] [[def-optimal-action-value-bellman-operator]]: $(HQ)(s,a)=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma\max_{b\in A(s')}Q(s',b)]$.

[F5] [[alg-q-learning]]: the visited action-value coordinate is updated toward $R_{n+1}+\gamma\max_bQ_n(S_{n+1},b)$.

[F6] [[def-filtration-and-filtered-probability-space]] and [[def-martingale-difference-sequence]]: the filtration is increasing, and a martingale difference is adapted, integrable, and has zero conditional mean given the preceding sigma-algebra.

[F7] [[def-conditional-expectation-given-a-sigma-algebra]] and [[def-conditional-expectation-as-an-ae-class]]: conditional-expectation versions satisfy event-integral identities; the class is unique almost surely and exists under the stated AC assumption.

[F8] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] and [[thm-taking-out-what-is-known]]: conditional expectation is linear, expectation preserving, and order preserving (if $X\le Y$ almost surely then $E[X\mid\mathcal F_n]\le E[Y\mid\mathcal F_n]$ almost surely); bounded measurable factors can be taken outside.

[F9] [[lem-asynchronous-finite-dimensional-contraction-stochastic-approximation]]: a bounded MDS-driven coordinate-wise recursion converges to its contraction fixed point under infinite visitation and per-coordinate Robbins–Monro steps.

[F10] [[lem-optimal-action-value-is-attained-by-greedy-policy]]: for each initial state-action pair, the maximal expected discounted return over all adapted MDP continuations is attained by following a greedy stationary policy after the initial action and equals $\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V^*(s')]$, where $V^*$ is the unique fixed point of $T^*$.

## Proof

**Given:** The hypotheses, definitions, and conventions in the Statement and [A1], [F1]–[F10].

1.1 Let $V^*$ be the unique fixed point of $T^*$ supplied by [F3], and define $Q^\dagger(s,a)=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V^*(s')].$ For each $(s,a)$, the finite sum in [F1] gives $Q^\dagger(s,a)=r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)V^*(s')$. Thus [F2] and $T^*V^*=V^*$ give $\max_{a\in A(s)}Q^\dagger(s,a)=V^*(s)$. Substituting this identity into [F4] yields $HQ^\dagger=Q^\dagger$. For finite lists $(x_b)$ and $(y_b)$, let $m=\max_b|x_b-y_b|$; then $x_b\le y_b+m$ for every $b$, so $\max_bx_b\le\max_by_b+m$, and exchanging the lists gives $|\max_bx_b-\max_by_b|\le m$. Therefore, for each $(s,a)$, $|(HQ)(s,a)-(H\widetilde Q)(s,a)| \le\gamma\sum_{s',\rho}p(s',\rho\mid s,a)\left|\max_bQ(s',b)-\max_b\widetilde Q(s',b)\right| \le\gamma\|Q-\widetilde Q\|_\infty.$ Taking the maximum over $(s,a)\in D$ proves $\|HQ-H\widetilde Q\|_\infty\le\gamma\|Q-\widetilde Q\|_\infty$. Any other fixed point $Q$ would then satisfy $\|Q-Q^\dagger\|_\infty\le\gamma\|Q-Q^\dagger\|_\infty$; since $\gamma<1$, this forces $Q=Q^\dagger$. By [F10], this fixed point is the pointwise maximal expected discounted return from each initial state-action pair and is attained by a greedy stationary continuation, so it is the optimal action-value function $Q^*$ in the Statement. [A1, F1, F2, F3, F4, F10, algebra]

1.2 Put $C=\max\{\|Q_0\|_\infty,M/(1-\gamma)\}$. Then $M+\gamma C\le C$. If $\|Q_n\|_\infty\le C$, the sampled target $Y_{n+1}=R_{n+1}+\gamma\max_bQ_n(S_{n+1},b)$ lies in $[-M-\gamma C,M+\gamma C]\subseteq[-C,C]$. The update is a convex combination of $Q_n(I_n)$ and $Y_{n+1}$ because $0\le\alpha_{N_n(I_n)}(I_n)\le1$; hence induction gives $\|Q_n\|_\infty\le C$ for every $n$. [given, F1, F5, algebra, induction]

2.1 By induction from deterministic $Q_0$, the update and the observation measurability in the Statement make $Q_n$ $\mathcal F_n$-measurable. Define $\xi_{n+1}=Y_{n+1}-(HQ_n)(I_n)$. Expand $Y_{n+1}$ as a finite sum over $s'\in S$ and $\rho\in\mathcal R$ using the indicators of $(S_{n+1},R_{n+1})=(s',\rho)$. Since $Q_n$ and $I_n$ are $\mathcal F_n$-measurable, the conditional transition-reward identity in the Statement, linearity, and taking out known factors [F7]–[F8] give $E[Y_{n+1}\mid\mathcal F_n]=(HQ_n)(I_n)$. Thus $\xi_{n+1}$ is an $\mathcal F_{n+1}$-measurable martingale difference by [F6]. Step 1.2 bounds both $Y_{n+1}$ and its conditional expectation by $C$, so $|\xi_{n+1}|\le2C$ almost surely. Rewriting the update as $Q_{n+1}(i)=Q_n(i)+\mathbf1_{\{I_n=i\}}\alpha_{N_n(i)}(i)\big[(HQ_n)(i)-Q_n(i)+\xi_{n+1}\big]$ shows that all hypotheses of [F9] hold for index set $D$, map $H$, fixed point $Q^*$ from step 1.1, and contraction constant $\gamma$. [A1, F1, F4, F5, F6, F7, F8, F9, step 1.1, step 1.2, algebra]

3.1 Applying [F9] gives $Q_n\to Q^*$ almost surely in $\|\cdot\|_\infty$. This is the asserted convergence. [step 2.1, F9] ∎

