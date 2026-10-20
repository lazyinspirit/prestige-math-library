---
id: thm-pac-mdp-escape-event-reduction
kind: theorem
title: "Escape-event reduction for optimistic greedy learning"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-pac-mdp-bounded-reward-model
  - def-pac-mdp-sample-complexity
  - def-pac-mdp-known-state-action-mdp
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-tower-property-of-conditional-expectation
  - thm-taking-out-what-is-known
  - cor-markov-inequality-for-random-variables
  - thm-pac-mdp-value-functions
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Alexander L. Strehl, Lihong Li, and Michael L. Littman, Reinforcement Learning in Finite MDPs: PAC Analysis"
      url: "https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf"
      locator: "§3.1, Definitions 6–7, Lemma 9, Theorem 10 and complete proof, PDF pp. 13–16 (printed pp. 2425–2428)."
    - title: "Alexander L. Strehl, Lihong Li, Eric Wiewiora, John Langford, and Michael L. Littman, PAC Model-Free Reinforcement Learning"
      url: "https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf"
      locator: "§5.2.1, proof of Theorem 1, PDF pp. 7–8 (printed pp. 887–888)."
---

## Statement

Assume AC. Let a learning algorithm interact with a bounded-reward finite discounted MDP. Suppose constants $B,W,Q_c$ satisfy $0<B$, $0<W\le(1-\gamma)^{-1}$, $0<Q_c\le(1-\gamma)^{-1}$, and $V^*(s)\le B$. The learner maintains $0\le Q_t(s,a)\le Q_c$ and, whenever $(s,a)\notin K_t$, $Q_t(s,a)\le W$. Put $V_t(s)=\max_{a\in A(s)}Q_t(s,a)$, and let $\pi_t$ be the deterministic greedy policy under a fixed tie order. Before acting at time $t$, let $K_t$ be a history-measurable set of known pairs; assume it stays fixed until a Q-value update or a selection of a pair outside $K_t$. Write $M_t=M_{K_t}(Q_t)$ for the known-state/action MDP and $C=B+W$. For parameters $0<\eta\le C$ with $\eta(1-\gamma)<1$ and $0<\rho<1/2$, suppose that with probability at least $1-\rho$, simultaneously for every $t,s$,
$$V_t(s)\ge V^*(s)-\eta,\qquad V_t(s)-V^{\pi_t}_{M_t}(s)\le\eta,$$
and the total number of Q-update times plus outside-$K_t$ selection times is at most a finite real $\zeta\ge0$. Define $q=\eta/(2C)$, set
$$H=\begin{cases}1,&\gamma=0,\\ \max\{1,\lceil \ln(1/[\eta(1-\gamma)])/(-\ln\gamma)\rceil\},&0<\gamma<1,\end{cases}\qquad M=\left\lceil\frac{2(\zeta+1)+2\ln(1/\rho)}{q}\right\rceil.$$
Then, with probability at least $1-2\rho$, the PAC-MDP count satisfies $N_{4\eta}\le HM$. Here $\ln$ is the natural logarithm.

## Statement references

[[def-pac-mdp-bounded-reward-model|Finite discounted MDPs, history-dependent continuation behaviors, and nonnegative rewards]].

[[def-pac-mdp-sample-complexity|The bad-step count and PAC-MDP bound convention]].

[[def-pac-mdp-known-state-action-mdp|The dedicated absorbing state and reward assigned to each pair outside the known set]].

[[thm-pac-mdp-value-functions|Continuation values are bounded by the optimal value, with a finite discounted geometric tail]].

[[def-axiom-of-choice|AC for the countable path law]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Strehl et al., *PAC Model-Free Reinforcement Learning*](https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf).

## Facts & Assumptions

**Given:** The MDP, AC, the algorithm and predictable known sets, the value caps, and the simultaneous optimism, policy-accuracy, and complexity event in the Statement.

[F1] [[def-pac-mdp-known-state-action-mdp]]: on a known pair the trap model has the true transition/reward law; outside the known set it has a dedicated absorbing state whose value is $Q_t(s,a)$.

[F2] [[thm-pac-mdp-value-functions]]: a history-conditioned continuation value in the true MDP is at most $V^*(s)\le B$, and truncating a nonnegative discounted return after $H$ terms loses at most $\gamma^H/(1-\gamma)$ in expectation.

[F3] [[def-pac-mdp-sample-complexity]]: a time $t$ is counted in $N_{4\eta}$ exactly when the conditional continuation value is strictly less than $V^*(s_t)-4\eta$.

[A1] [[def-axiom-of-choice]]: AC supplies the path law for each history-dependent continuation used in the coupling argument.

[F4] [[def-filtration-and-filtered-probability-space]]: the history through each successive trial is an increasing filtration.

[F5] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-tower-property-of-conditional-expectation]], and [[thm-taking-out-what-is-known]]: conditional expectation is linear, iterates through nested histories, and allows bounded history-measurable factors to be removed from the conditional expectation.

[F6] [[cor-markov-inequality-for-random-variables]]: if $Z\ge0$ and $c>0$, then $\mathbb P(Z\ge c)\le\mathbb E[Z]/c$.

[F7] [[thm-measurability-of-integration-against-a-kernel]]: integration of a nonnegative product-measurable function against a probability kernel gives a measurable function of the history parameter.

## Proof

1.1 Fix a history at time $t$ at which the current optimism and policy-accuracy inequalities in the Statement hold, and let $W_t$ be the event that before $H$ transitions elapse the algorithm updates some Q-value or selects a pair outside $K_t$. If $W_t$ does not occur, the greedy policy and known set remain fixed, every selected pair is in $K_t$, and the true interaction and $M_t$ have the same transition/reward kernels along these $H$ steps by [F1]. The expected truncated returns therefore agree on $W_t^c$. On $W_t$, stop the coupling at the first update or outside-pair selection. The common prefix cancels. At any history, the true continuation value is at most $B$ by [F2]. In $M_t$, before the first outside pair a policy follows a true-MDP prefix; its expected nonnegative prefix is at most $B$, since continuing that policy in the true MDP can only add nonnegative rewards. After the first outside pair its dedicated sink contributes exactly $Q_t(s,a)\le W$ by [F1] and the Statement. Thus every policy value in $M_t$, including its continuation after the stopping history, is at most $B+W=C$. Since both continuation values are nonnegative, their absolute difference is at most $C$, and the expected loss contributed by $W_t$ is at most $C\mathbb P(W_t\mid h_t)$. [given, F1, F2, F3, A1, construct]

2.1 The known-model policy's infinite return exceeds its $H$-step truncated return by at most $\gamma^H/(1-\gamma)\le\eta$, by the definition of $H$; for $\gamma=0$ the tail is zero. The true return is at least its truncated return because rewards are nonnegative. Combining step 1.1 with the assumed policy accuracy and optimism gives $V^{A_t}(h_t)\ge V_t(s_t)-2\eta-C\mathbb P(W_t\mid h_t)\ge V^*(s_t)-3\eta-C\mathbb P(W_t\mid h_t)$. Therefore, if $t$ is counted by $N_{4\eta}$, then $\mathbb P(W_t\mid h_t)>\eta/C\ge q$. [given, F2, F3, step 1.1, algebra]

3.1 Construct trials by starting at the first bad time not already covered by a previous trial window, running that window for $H$ transitions, and then waiting for the next bad time. The starts are stopping times: each bad-time test and current inequality is history measurable. For the continuation-value test, finite-horizon continuation values are measurable by recursive kernel integration using [F7], and the discounted continuation value is their increasing limit. The windows are disjoint. At a trial start satisfying the two current optimism and accuracy inequalities, its conditional chance of containing an update or escape is at least $q$ by step 2.1; this statement conditions only on its starting history, not on the future simultaneous good event. Every such success occurs at a distinct update/escape time, so on the simultaneous complexity event there are at most $\zeta$ successes. Each trial window contains at most $H$ bad times, and there are no bad times between a completed window and the next trial start. [given, step 2.1, F7, construct]

4.1 Write $\tau_i$ for the successive trial starts, setting $\tau_i=\infty$ when no such start exists. For $i\le M$, set $X_i=1$ if $\tau_i=\infty$ or either current optimism/accuracy inequality fails at its start; otherwise let $X_i$ indicate an update or escape during its window. Use the stopped-history sigma-algebra at $\tau_i$, with the full path sigma-algebra on $\{\tau_i=\infty\}$. It contains every earlier window outcome. On the first two cases $X_i=1$; in the remaining case step 2.1 gives conditional success probability at least $q$. Thus $\mathbb E[X_i\mid\mathcal F_{\tau_i}]\ge q$ without conditioning on the simultaneous future good event. Since $e^{-\lambda X_i}=1-(1-e^{-\lambda})X_i$, [F5] and induction give $\mathbb E[e^{-\lambda\sum_{i=1}^M X_i}]\le(1-q(1-e^{-\lambda}))^M\le e^{-Mq/2}$ for $\lambda=\ln2$. Applying [F6] to this nonnegative exponential yields $\mathbb P(\sum_{i=1}^M X_i\le\zeta)\le e^{(\zeta+1)\ln2-Mq/2}\le\rho$ by the definition of $M$. If more than $M$ bad-time trials occurred while the simultaneous optimism, accuracy and complexity event held, the first $M$ starts would be finite and every $X_i$ would be its actual update/escape indicator, so their sum would be at most $\zeta$. This has probability at most $\rho$. Adding the probability at most $\rho$ that the simultaneous assumptions fail proves that, with probability at least $1-2\rho$, there are at most $M$ trials and hence at most $HM$ bad times. [given, F4, F5, F6, step 3.1, algebra] ∎
