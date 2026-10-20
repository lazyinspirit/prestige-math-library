---
id: thm-finite-stochastic-shortest-path-value-exists
kind: theorem
title: "Finite positive-cost stochastic shortest-path value"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-stochastic-shortest-path-problem
  - def-axiom-of-choice
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - lem-finite-set-has-max
  - thm-monotone-convergence
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "§§5.1–5.3, PDF pp. 99–102: positive-cost undiscounted SSP Bellman convergence conditions; all value and existence arguments below are supplied locally."
---

## Statement

Assume the Axiom of Choice and let a finite positive-cost stochastic shortest-path problem have at least one proper stationary policy. For any policy $\sigma$ whose action distribution may depend on the entire finite history, use its trajectory law from the initial state $s$ and define

$$J^\sigma(s)=\sum_{t=0}^{\infty}\mathbb E_s^\sigma\!\left[c(S_t,A_t)\,1_{\{S_t\notin G\}}\right],$$

where $c(s,a)=-r(s,a)>0$ off the absorbing goal set $G$ and $c(g,a)=0$ at goals. The optimal total cost $f^*(s)=\inf_\sigma J^\sigma(s)$ is finite for every state. It is the unique finite nonnegative function satisfying

$$f^*(g)=0\quad(g\in G),\qquad f^*(s)=\min_{a\in A(s)}\left[c(s,a)+\sum_{s'\in S}P(s'\mid s,a)f^*(s')\right]\quad(s\notin G).$$

The minimum is attained by a deterministic stationary policy that is proper and has total cost $f^*$ from every initial state.

## Statement references

[[def-finite-stochastic-shortest-path-problem|Nonglobal expected costs have a common positive lower bound, goals absorb with zero cost, and properness is defined by finite-prefix survival probabilities.]]

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming”](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).

## Facts & Assumptions

**Given:** AC, a finite SSP with nonempty finite state and action sets, absorbing zero-cost goals, nonglobal costs $c(s,a)\ge c_{\min}>0$, and a proper stationary policy.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is used only through the history-dependent path-law construction in [F2].

[F1] [[def-finite-stochastic-shortest-path-problem]]: $P(\cdot\mid s,a)$ is a probability row; every nonglobal expected cost is at least $c_{\min}>0$; properness means the finite-step survival probabilities tend to zero from each state.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: under AC, an initial law and a sequence of probability kernels depending on finite histories determine a trajectory law with the prescribed finite-prefix probabilities.

[F3] [[lem-finite-set-has-max]]: every nonempty finite list of real numbers has an attained minimum as well as a maximum.

[F4] [[thm-monotone-convergence]]: a nondecreasing real sequence bounded above converges to a finite real limit.

## Proof

**Given:** The SSP, a proper stationary policy, and AC as stated.

1.1 If $S=G$, all costs and values are zero, and the theorem follows. Otherwise let $S\setminus G\ne\emptyset$. For any history-dependent policy, finite state/action histories form finite discrete spaces at each time, so the conditional action and transition rules are probability kernels. By [A1] and [F2], the corresponding trajectory law exists with the specified finite-prefix probabilities; this justifies the expectations in the Statement. [given, A1, F1, F2, construct]

1.2 Define the Bellman map $T$ by $(Tu)(g)=0$ on goals and $(Tu)(s)=\min_{a\in A(s)}[c(s,a)+\sum_{s'}P(s'\mid s,a)u(s')]$ off goals. Set $f_0(s)=0$ and $f_{n+1}=Tf_n$. The minimum is attained by [F3]. These are finite-horizon optimal costs: for $n=0$ the continuation cost is zero; if the claim holds at horizon $n$, conditioning on the first action and next state gives the displayed recursion at horizon $n+1$. Any randomized first action gives a convex combination of action costs, which is at least their minimum; a minimizing pure action attains that minimum, so the finite-horizon optimum is the displayed value. [given, F1, F3, construct]

2.1 The recursion is monotone in its value argument because all transition weights are nonnegative, and $f_1\ge f_0=0$; induction gives $0\le f_n\le f_{n+1}$. For any stationary policy $\pi$, let $U=S\setminus G$ and define the substochastic matrix $Q^\pi$ on $U$ by $Q^\pi(s,t)=\sum_{a\in A(s)}\pi(a\mid s)P(t\mid s,a)$. The properness recursion gives $q_0^\pi|_U=\mathbf 1$ and $q_{n+1}^\pi|_U=Q^\pi q_n^\pi|_U$, so $q_n^\pi|_U=(Q^\pi)^n\mathbf 1$; since $Q^\pi\mathbf 1\le\mathbf 1$, these survival probabilities are nonincreasing. For the proper stationary policy $\bar\pi$ in the Given assumptions, choose $N_s\ge1$ with $q_{N_s}^{\bar\pi}(s)<1$ for each state. Since $S$ is finite, $N=\max_sN_s$ and $\rho=\max_s q_N^{\bar\pi}(s)$ satisfy $\rho<1$. Also $q_N^{\bar\pi}(s)=\sum_{t\in U}(Q^{\bar\pi})^N(s,t)$ for $s\in U$, and $q_{(k+1)N}^{\bar\pi}=(Q^{\bar\pi})^Nq_{kN}^{\bar\pi}$. Thus induction gives $q_{kN}^{\bar\pi}(s)\le\rho^k$ for every state and $k\ge0$. The finite maximum $c_{\max}=\max\{c(s,a):s\in U,\ a\in A(s)\}$ exists by [F3]. During block $k$, each stage cost has expectation at most $c_{\max}q_{kN}^{\bar\pi}(s)\le c_{\max}\rho^k$, because survival decreases in time. Hence $J^{\bar\pi}(s)\le Nc_{\max}\sum_{k\ge0}\rho^k=Nc_{\max}/(1-\rho)$. Since $f_n$ is the $n$-step optimum, $f_n(s)\le J^{\bar\pi}(s)$; thus each increasing sequence $f_n(s)$ is bounded above, and [F4] gives a finite limit $f(s)$. [given, F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Passing to the limit in the finite sums and finite minima in step 1.2 is valid coordinatewise; the minimum of finitely many convergent real sequences converges to the minimum of their limits. Hence $f(g)=0$ on $G$ and $f(s)=\min_a[c(s,a)+\sum_{s'}P(s'\mid s,a)f(s')]$ off $G$. Therefore $f$ is a finite nonnegative Bellman fixed point. [step 1.2, step 2.1, algebra]

4.1 Enumerate the finite state set as $s_1,\ldots,s_m$. For each nonglobal state, [F3] gives a nonempty finite set of actions minimizing the fixed-point expression in step 3.1. Inductively along this finite list, select one minimizer at each state; at each successor stage one nonempty finite set is added to the already chosen finite tuple, so this finite construction uses no arbitrary-index choice. The selected actions define a deterministic stationary policy $\pi^*$. For $n=0$ the identity is $f(s)=f(s)$. If it holds at $n$, condition on the next state and apply the Bellman equality at the current state to obtain it at $n+1$; hence induction gives $f(s)=\mathbb E_s^{\pi^*}[\sum_{t<n}c(S_t,A_t)1_{\{S_t\notin G\}}+f(S_n)]$ for every $n$. By step 2.1 and [F4], the survival probabilities under $\pi^*$ have a limit; if that limit were $q_\infty>0$, the partial cost expectation would be at least $n c_{\min}q_\infty$, contradicting the finite left side and nonnegative terminal term. Thus $\pi^*$ is proper. Since $f$ is bounded on finite $S$ and $f=0$ on $G$, properness gives $\mathbb E_s^{\pi^*}f(S_n)\le\max_xf(x)q_n^{\pi^*}(s)\to0$; letting $n\to\infty$ in the identity yields $J^{\pi^*}(s)=f(s)$. [given, F1, F3, F4, step 2.1, step 3.1, algebra]

5.1 Fix an initial state $s$ and any policy $\sigma$. The fixed-point equation gives $f(x)\le c(x,a)+\sum_{x'}P(x'\mid x,a)f(x')$ for each nonglobal $x$ and every action $a$, with equality at goals. Averaging over each history-dependent action distribution gives the one-step inequality; conditioning successively on the finite-prefix laws and inducting on $n$ gives $f(s)\le\mathbb E_s^\sigma[\sum_{t<n}c(S_t,A_t)1_{\{S_t\notin G\}}+f(S_n)]$. Under $\sigma$, the events $\{S_n\notin G\}$ decrease because goals are absorbing. If their probabilities tend to zero, boundedness of the terminal term makes $f(s)\le J^\sigma(s)$. If they do not tend to zero, their limit is positive, and the positive cost lower bound makes $J^\sigma(s)=+\infty$; again $f(s)\le J^\sigma(s)$. Thus $f$ is a lower bound for every policy cost, while step 4.1 exhibits a policy attaining it. Consequently $f=f^*$. [F1, F2, step 3.1, step 4.1, algebra]

6.1 Let $g$ be any finite nonnegative solution of the same Bellman equations. Since $f_0=0\le g$, the monotonicity of $T$ from step 2.1 gives $f_n=T^n0\le T^ng=g$ for every $n$, hence $f^*\le g$. The Bellman minimum for $g$ is no larger than any action value, so $g(x)\le c(x,a)+\sum_{x'}P(x'\mid x,a)g(x')$ for every nonglobal $x$ and action $a$. Average this inequality along the proper policy $\pi^*$ from step 4.1 and iterate over $n$ steps to obtain $g(s)\le\mathbb E_s^{\pi^*}[\sum_{t<n}c(S_t,A_t)1_{\{S_t\notin G\}}+g(S_n)]$. The terminal term tends to zero because $g$ is bounded and $\pi^*$ is proper, so $g(s)\le J^{\pi^*}(s)=f^*(s)$. Therefore $g=f^*$, proving uniqueness. [given, F1, F2, step 1.2, step 2.1, step 4.1, algebra] ∎
