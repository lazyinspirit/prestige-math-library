---
id: lem-optimal-action-value-is-attained-by-greedy-policy
kind: lemma
title: "The optimal action value is attained by a greedy stationary policy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-bellman-optimality-operator
  - def-countable
  - def-discounted-return-and-value-functions
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-finite-markov-decision-process
  - def-filtration-and-filtered-probability-space
  - def-max-min
  - def-measure-kernel-and-probability-kernel
  - def-policy-bellman-operator
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-bounded-discounted-return-converges
  - lem-finite-mdp-policy-action-state-reward-path-law
  - lem-finite-set-has-max
  - lem-geometric-sequence-null
  - lem-nat-nonzero-is-successor
  - lem-nat-order-is-membership
  - lem-policy-value-satisfies-bellman-equation
  - cor-expectation-of-an-indicator-is-probability
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-bellman-contraction-and-unique-fixed-point
  - thm-dominated-convergence
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-product-rule
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.8, printed pp. 75–76; equations (3.13)–(3.17), optimal state/action values and greedy optimal policies."
    - title: "Leslie Pack Kaelbling, Michael L. Littman, and Anthony R. Cassandra, Planning and Acting in Partially Observable Stochastic Domains, Brown CS-96-08"
      url: "https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf"
      locator: "§2.2, printed pp. 3–5 (PDF pp. 5–7); non-stationary and stationary policies, discounted optimal value, and a greedy optimal policy."
---

## Statement

Assume the Axiom of Choice. Let a finite MDP have nonempty finite state set $S$ and discount $0\le\gamma<1$, and let $T^*$ be its Bellman optimality operator. For a fixed initial pair $(s,a)\in D$, an **admissible continuation** is any discrete filtered process $(S_n,A_n,R_{n+1})_{n\ge0}$ on a probability space such that $(S_0,A_0)=(s,a)$ almost surely, $S_n,S_{n+1}\in S$, $A_n\in A(S_n)$, $R_{n+1}\in\mathcal R$ almost surely, $(S_n,A_n)$ is measurable with respect to $\mathcal F_n$, $R_{n+1}$ and $S_{n+1}$ are measurable with respect to $\mathcal F_{n+1}$, and

$$ E[\mathbf1_{\{S_{n+1}=s',\,R_{n+1}=\rho\}}\mid\mathcal F_n]=p(s',\rho\mid S_n,A_n) $$

almost surely for every $n\ge0$, $s'\in S$, and $\rho\in\mathcal R$. Its discounted return is $G=\sum_{n=0}^{\infty}\gamma^nR_{n+1}$. Let $V^*$ be the unique fixed point of $T^*$ and define $Q_{\mathrm{opt}}(s,a)$ as the supremum of $E[G]$ over all admissible continuations from $(s,a)$. Then this supremum is finite and attained by a continuation that, after the prescribed initial action, always chooses an action maximizing $r(s',b)+\gamma\sum_{u\in S}P(u\mid s',b)V^*(u)$ at the current state $s'$. In particular,

$$ Q_{\mathrm{opt}}(s,a)=\sum_{s'\in S}\sum_{\rho\in\mathcal R}p(s',\rho\mid s,a)[\rho+\gamma V^*(s')]. $$

## Statement references

[[def-finite-markov-decision-process|Finite state/action sets, the joint reward-transition law, and bounded rewards]].

[[def-filtration-and-filtered-probability-space|Adapted processes on a discrete filtration]].

[[def-bellman-optimality-operator|The state-value Bellman optimality operator]].

[[def-discounted-return-and-value-functions|Expected discounted policy returns and values]].

[[thm-bellman-contraction-and-unique-fixed-point|Unique fixed points of discounted policy and optimality operators]].

[[lem-policy-value-satisfies-bellman-equation|A stationary policy value is its Bellman fixed point]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

[Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).

## Facts & Assumptions

**Given:** The finite MDP, its reward-transition law, $0\le\gamma<1$, and the Axiom of Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is used for the path-law construction and to select one maximizing action at each state.

[F1] [[def-finite-markov-decision-process]]: each $A(s)$ is finite nonempty, $D$ and the reward/state sets are finite, $p(\cdot,\cdot\mid s,a)$ is a probability mass, and $|\rho|\le M$.

[F2] [[def-filtration-and-filtered-probability-space]]: $(\mathcal F_n)$ is increasing; current state-action pairs are measurable at time $n$ in an admissible continuation.

[F3] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, preserves order and constants, and preserves expectation.

[F4] [[def-bellman-optimality-operator]]: $(T^*V)(s)=\max_{b\in A(s)}[r(s,b)+\gamma\sum_uP(u\mid s,b)V(u)]$.

[F5] [[def-policy-bellman-operator]]: $(T^\pi V)(s)=\sum_b\pi(b\mid s)[r(s,b)+\gamma\sum_uP(u\mid s,b)V(u)]$.

[F6] [[thm-bellman-contraction-and-unique-fixed-point]]: $T^*$ and each stationary-policy operator $T^\pi$ have unique fixed points for $0\le\gamma<1$.

[F7] [[def-discounted-return-and-value-functions]]: $V^\pi(s)$ is the expected discounted return from state $s$ under the policy-induced path law.

[F8] [[lem-policy-value-satisfies-bellman-equation]]: $T^\pi V^\pi=V^\pi$ under the stated Axiom of Choice and discount hypotheses.

[F9] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under Choice, an initial law and a sequence of history-dependent probability kernels determine a probability law with the prescribed finite-prefix laws.

[F10] [[lem-finite-mdp-policy-action-state-reward-path-law]]: a stationary Markov policy has the stated finite-prefix action-state-reward path probabilities from each fixed initial state.

[F11] [[lem-bounded-discounted-return-converges]]: bounded rewards give an absolutely convergent discounted return and a uniform tail bound $M\gamma^N/(1-\gamma)$.

[F12] [[thm-dominated-convergence]]: pointwise-convergent measurable functions under one integrable majorant have convergent expectations.

[F13] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-of-an-indicator-is-probability]], and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: a bounded constant is integrable on a probability space because $E[\mathbf1_\Omega]=P(\Omega)=1$ and the nonnegative integral preserves scaling and order.

[F14] [[def-countable]], [[lem-nat-order-is-membership]], and [[lem-nat-nonzero-is-successor]]: each nonempty finite action set is bijective with a successor natural and can be enumerated by the corresponding finite list $a_0,\ldots,a_n$.

[F15] [[lem-finite-set-has-max]] and [[def-max-min]]: every finite real list has an attained maximum, which is an upper bound for the list and is unique.

[F16] [[lem-geometric-sequence-null]]: $\gamma^n\to0$ for $0\le\gamma<1$.

[F17] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: the pointwise limit of a sequence of measurable real functions is measurable.

[F18] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: coordinate projections from the history product spaces are measurable.

[F19] [[def-measure-kernel-and-probability-kernel]]: a history-dependent assignment of probability measures with measurable event sections is a probability kernel of the type required by [F9].

[F20] [[thm-product-rule]]: each finite history-coordinate space formed from finitely many finite state, reward, and state-action sets is finite.

## Proof

**Given:** The hypotheses, definitions, and conventions in the Statement and [A1], [F1]–[F20].

1.1 The unique fixed point $V^*$ exists by [F6]. Let $B=\|V^*\|_\infty$, which is finite because $S$ is finite. Fix $s\in S$ and enumerate $A(s)=\{a_0,\ldots,a_n\}$ using [F1] and [F14]. For $u_j=r(s,a_j)+\gamma\sum_xP(x\mid s,a_j)V^*(x)$, [F15] gives an attained list maximum; because the list enumerates all actions, its maximum is exactly the maximum in [F4], independent of the enumeration by uniqueness in [F15]. For each $j$, expanding $r$ and $P$ by [F1] gives $u_j=\sum_{x,\rho}p(x,\rho\mid s,a_j)[\rho+\gamma V^*(x)]$. The triangle inequality, $|\rho|\le M$, and the probability-mass identity give $|u_j|\le M+\gamma B$. Since the maximum is one of the list entries, $|(T^*V^*)(s)|\le M+\gamma B$. As $s$ was arbitrary, $B=\|T^*V^*\|_\infty\le M+\gamma B$. Since $1-\gamma>0$, $B\le M/(1-\gamma)$. [F1, F4, F6, F14, F15, algebra]

2.1 Fix any admissible continuation from $(s,a)$. For each $n\ge1$, expand $R_{n+1}+\gamma V^*(S_{n+1})$ as the finite sum $\sum_{s',\rho}(\rho+\gamma V^*(s'))\mathbf1_{\{S_{n+1}=s',R_{n+1}=\rho\}}$. These variables are bounded by [F1] and step 1.1, so they are integrable. Conditional linearity and the transition-reward identity in the definition give $E[R_{n+1}+\gamma V^*(S_{n+1})\mid\mathcal F_n]=\sum_{s',\rho}p(s',\rho\mid S_n,A_n)[\rho+\gamma V^*(s')]$. The right side is the one-step action value of the measurable current action $A_n$, so it is at most $(T^*V^*)(S_n)=V^*(S_n)$ by [F4] and the fixed-point identity. [given, F1, F2, F3, F4, step 1.1]

2.2 The attained list maximum argument in step 1.1 makes the maximizing-action set nonempty at every state. By [A1], choose one such action at every state and call the resulting deterministic stationary policy $\pi^*$. Define its stationary probability-family embedding by $\widehat\pi^*(b\mid s)=\mathbf1_{\{b=\pi^*(s)\}}$ for $b\in A(s)$. These numbers are nonnegative and sum to one because exactly one legal action equals $\pi^*(s)$, so $\widehat\pi^*$ is a stationary Markov policy in [F5]–[F8]. Its policy Bellman sum has only the chosen maximizing action as a nonzero term. The definitions [F4]–[F5] and $T^*V^*=V^*$ give $T^{\widehat\pi^*}V^*=V^*$. By [F6] this is the unique fixed point of $T^{\widehat\pi^*}$, while [F8] gives $T^{\widehat\pi^*}V^{\widehat\pi^*}=V^{\widehat\pi^*}$; hence $V^{\widehat\pi^*}=V^*$. [A1, F4, F5, F6, F8, step 1.1]

3.1 Apply order and expectation preservation from [F3] to the conditional inequality in step 2.1, multiply by the nonnegative scalar $\gamma^n$, and sum for $n=1,\ldots,N$. The intermediate state-value terms cancel, giving $\sum_{n=1}^N\gamma^nE[R_{n+1}]+\gamma^{N+1}E[V^*(S_{N+1})]\le\gamma E[V^*(S_1)]$. The initial transition law gives $E[R_1+\gamma V^*(S_1)]=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V^*(s')]=:Q^\dagger(s,a)$. Since $|E[V^*(S_{N+1})]|\le B$ by step 1.1 and [F13], it follows that $E[\sum_{n=0}^N\gamma^nR_{n+1}]\le Q^\dagger(s,a)+\gamma^{N+1}B$. [F1, F3, F13, step 1.1, step 2.1, algebra]

4.1 Write $G_N=\sum_{n=0}^N\gamma^nR_{n+1}$. Each $G_N$ is measurable because it is a finite sum of measurable rewards, and [F11] gives pointwise convergence to $G$ and the bound $|G_N|\le M/(1-\gamma)$. Thus $G$ is measurable by [F17]; the constant bound is integrable by [F13], so [F12] gives $E[G_N]\to E[G]$. Also $\gamma^{N+1}B\to0$ by [F16]. Passing to the limit in the upper bound of step 3.1 shows $E[G]\le Q^\dagger(s,a)$. The continuation was arbitrary, so $Q_{\mathrm{opt}}(s,a)\le Q^\dagger(s,a)$. [F11, F12, F13, F16, F17, step 3.1]

5.1 Construct a continuation with initial pair $(s,a)$ and thereafter action $\pi^*(S_{n+1})$ following each transition. Take $E_0=D$ and $E_{n+1}=\mathcal R\times D$ with their discrete sigma-algebras, initial law concentrated at $(s,a)$, and history kernels $K_n(h,B)=\sum_{s',\rho}p(s',\rho\mid s_n,a_n)\mathbf1_B(\rho,(s',\pi^*(s')))$ for every measurable $B\subseteq E_{n+1}$, where $(s_n,a_n)$ is the last pair in $h$. For disjoint sets $B_j\subseteq E_{n+1}$, their preimages $\{(s',\rho):(\rho,(s',\pi^*(s')))\in B_j\}$ are disjoint subsets of the finite set $S\times\mathcal R$, so only finitely many are nonempty and the finite mass formula is countably additive; its total mass is one by [F1]. It is measurable in $h$ because it is a finite sum of functions of the current-pair coordinate projection, which is measurable by [F18]. Thus each $K_n$ is a probability kernel by [F19], and [F9] gives a path law with these prefix products. Set $\mathcal F_n=\sigma(X_0,Y_1,\ldots,Y_n)$, where $X_0=(S_0,A_0)$ and $Y_j=(R_j,(S_j,A_j))$. The coordinate projections make current pairs measurable at time $n$ and next observations measurable at time $n+1$ by [F18]. The finite history-coordinate set is finite by [F20], so each atom of $\mathcal F_n$ fixes a finite history. On a positive-mass atom ending at $(s_n,a_n)$, the prefix product in [F9] shows that extending it by reward $\rho$, state $s'$, and next action $\pi^*(s')$ has conditional probability $p(s',\rho\mid s_n,a_n)$; all other next-action extensions have conditional probability zero. Thus the conditional probability of $\{R_{n+1}=\rho,S_{n+1}=s'\}$ given $\mathcal F_n$ is $p(s',\rho\mid S_n,A_n)$ on every positive-mass atom, which proves the required almost-sure conditional identity. Hence this process is admissible. By the product form of the finite-prefix probabilities, after the first transition its conditional continuation from $S_1=s'$ has the stationary-policy prefix laws in [F10] for $\widehat\pi^*$: the next action equals $\pi^*$ at its current state with probability one, so [F7] identifies its conditional expected discounted tail as $V^{\widehat\pi^*}(s')$. The expectation convergence proved for every admissible continuation in step 4.1 passes this prefix identity to the infinite return. Therefore $E[G]=\sum_{s',\rho}p(s',\rho\mid s,a)[\rho+\gamma V^{\widehat\pi^*}(s')]=Q^\dagger(s,a)$ by step 2.2. This admissible continuation attains the upper bound, so $Q_{\mathrm{opt}}(s,a)=Q^\dagger(s,a)$ and the supremum is a finite maximum. [F1, F7, F9, F10, F18, F19, F20, step 4.1, step 2.2, construct]

6.1 Since $(s,a)$ was arbitrary, the formula and finite attainment claim hold on all of $D$. [given, step 5.1] ∎
