---
id: lem-delayed-q-learning-optimism-and-update-counts
kind: lemma
title: "Delayed Q-learning optimism and update-count bounds"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-delayed-q-learning
  - def-admissible-mdp-heuristic
  - def-pac-mdp-known-state-action-mdp
  - lem-pac-mdp-adaptive-sample-concentration
  - thm-pac-mdp-value-functions
  - thm-finite-union-bound
  - def-axiom-of-choice
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
      locator: "§3.3.2, Lemmas 18–25, PDF pp. 21–24 (printed pp. 2433–2436)."
    - title: "Alexander L. Strehl, Lihong Li, Eric Wiewiora, John Langford, and Michael L. Littman, PAC Model-Free Reinforcement Learning"
      url: "https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf"
      locator: "§5.2, Lemmas 1–4, PDF pp. 5–6 (printed pp. 885–886)."
---

## Statement

Assume AC. Fix a bounded-reward finite discounted MDP, write $S=|S|$ and $A=\max_s|A(s)|$, and fix an admissible heuristic with cap $V_{\max}$, and $0<\epsilon_1<1$. Put $D(s,a)=[U(s,a)-V^*(s)]_+$, $\kappa=\lceil SA V_{\max}/\epsilon_1\rceil$, $N=SA(1+\kappa)$, and $C_1=1+\gamma V_{\max}$. Run Delayed Q-learning with a positive integer $m$ satisfying
$$m\ge\left\lceil\frac{C_1^2}{2\epsilon_1^2}\ln\frac{8N}{\delta}\right\rceil\qquad(0<\delta<1).$$
For $V_t(s)=\max_aQ_t(s,a)$, define
$$K_t=\left\{(s,a):Q_t(s,a)-\left(r(s,a)+\gamma\sum_{s'}P(s'\mid s,a)V_t(s')\right)\le3\epsilon_1\right\}.$$
With probability at least $1-\delta$, all estimates remain optimistic, $Q_t(s,a)\ge Q^*(s,a)$ for every $t,s,a$; every attempted update whose first sample is taken with its pair outside $K_t$ succeeds; the number of successful updates is at most
$$G=\sum_{s,a}\left(1+\frac{D(s,a)}{\epsilon_1}\right);$$
and the number of visits selecting a pair outside $K_t$ is at most $2mG$. The additive $1$ in each pair's update allowance is necessary, including when $U(s,a)=V^*(s)$.

## Statement references

[[alg-delayed-q-learning|The delayed batch target, success threshold, and global learning flags]].

[[def-axiom-of-choice|AC, assumed for the potential-stream and conditional-expectation concentration supplier]].

[[def-admissible-mdp-heuristic|The admissible initial upper values and discounted-value cap]].

[[def-pac-mdp-known-state-action-mdp|The known-state/action model used to evaluate escape pairs]].

[[lem-pac-mdp-adaptive-sample-concentration|Conditional tails for bounded reward/next-state targets under adaptive visits]].

[[thm-pac-mdp-value-functions|The optimal action value and finite-state greedy maximizer]].

[Strehl, Li, and Littman, *Reinforcement Learning in Finite MDPs: PAC Analysis*](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf).

[Strehl et al., *PAC Model-Free Reinforcement Learning*](https://hunch.net/~jl/projects/RL/Delayed_Q/icml06.pdf).

## Facts & Assumptions

**Given:** AC, the MDP, admissible heuristic, Delayed Q-learning algorithm, and parameters in the Statement.

[F1] [[lem-pac-mdp-adaptive-sample-concentration]]: for a bounded predictable target $Y_i\in[0,C_1]$, its sample mean differs from its predictable mean by at least $x$ with probability at most $2e^{-2mx^2/C_1^2}$; pair visits can be coupled to independent potential outcomes.

[F2] [[alg-delayed-q-learning]]: a successful update replaces $Q(s,a)$ by a nonnegative batch mean plus $\epsilon_1$, decreases that entry by at least $\epsilon_1$, and Q-values never otherwise change. A failed batch disables its flag exactly when $b>t^*$; before sampling, a flag is re-enabled when $b\le t^*$.

[F3] [[def-admissible-mdp-heuristic]] and [[thm-pac-mdp-value-functions]]: initially $Q=U\ge Q^*$, $0\le Q^*,V^*\le V_{\max}$, and an optimal action attaining $V^*(s)$ exists at each state.

[F4] By the definition of $K_t$ in the Statement, the Bellman residual outside $K_t$ is strictly greater than $3\epsilon_1$. The known model agrees with the true MDP on $K_t$ by [[def-pac-mdp-known-state-action-mdp]].

[F5] [[thm-finite-union-bound]]: a finite union of events has probability at most the sum of their probabilities.

## Proof

1.1 Each successful update decreases one entry by at least $\epsilon_1$, while every updated entry stays nonnegative and starts at most $V_{\max}$, by [F2]. Therefore the total number of updates is at most $SA V_{\max}/\epsilon_1\le\kappa$. For two consecutive batch starts $b_j<b_{j+1}$ of one pair, some successful global update occurs in $[b_j,b_{j+1})$: either the earlier batch succeeds, or it fails with $b_j\le t^*$, or it disables learning and a later global update re-enables it. These intervals are disjoint for that pair. Charging each start after its first to such an update gives at most $1+\kappa$ starts per pair and at most $N$ overall, including unfinished batches. [given, F2, algebra]

2.1 Condition on a batch-start history at time $k_1$ for pair $(s,a)$ and freeze $V_{k_1}$. The next $m$ potential joint outcomes give targets $X_i=R_i+\gamma V_{k_1}(S_i')\in[0,C_1]$ with common mean $r(s,a)+\gamma P V_{k_1}$. By [F1], except with probability $2e^{-2m\epsilon_1^2/C_1^2}$, their average is within $\epsilon_1$ of that mean. Also, the fixed targets $X_i^*=R_i+\gamma V^*(S_i')$ lie in $[0,C_1]$ and have mean $Q^*(s,a)$, so their average is within $\epsilon_1$ of $Q^*(s,a)$ except with the same probability. By [F5], a finite union over the at most $N$ batch starts and these two error events has failure at most $4N e^{-2m\epsilon_1^2/C_1^2}\le\delta/2$. [given, F1, F3, F5, step 1.1, algebra]

3.1 On the event from step 2.1, if a batch begins outside $K_{k_1}$, then $Q_{k_1}(s,a)-[r+\gamma P V_{k_1}]>3\epsilon_1$. During that batch all action values can only decrease, so $V_{k_i}\le V_{k_1}$ at every sample time $k_i$. Its actual target average is therefore at most the frozen-target average, which is at most $r+\gamma P V_{k_1}+\epsilon_1$. The old value minus this average is strictly greater than $2\epsilon_1$, so the attempted update succeeds. [given, F1, F2, F4, step 2.1, algebra]

3.2 Initially $Q\ge Q^*$ by [F3]. Induct over successful updates. Before an update, all current values satisfy $V_{k_i}\ge V^*$ by the induction hypothesis, so each actual target $R_i+\gamma V_{k_i}(S_i')$ is at least $R_i+\gamma V^*(S_i')$. Step 2.1 bounds the latter sample mean below by $Q^*(s,a)-\epsilon_1$. Adding the update bonus $\epsilon_1$ leaves the new entry at least $Q^*(s,a)$; unchanged entries remain optimistic. This proves the all-time optimism claim. The event used above has probability at least $1-\delta/2\ge1-\delta$. [given, F1, F2, F3, step 2.1, induction]

4.1 Fix a pair $(s,a)$. If $U(s,a)<V^*(s)$, choose an optimal action $a^*$ at $s$. On the optimism event, $Q_t(s,a^*)\ge Q^*(s,a^*)=V^*(s)$ for every $t$, while the pair's value never increases and therefore stays at most $U(s,a)<V^*(s)$. It is never selected, so it cannot be updated. If $U(s,a)\ge V^*(s)$ and the pair is selected, its current value is the greedy maximum and hence at least $V^*(s)$ by optimism of $a^*$. If the pair has $n\ge1$ successful updates, the value immediately before its $n$th update is at most $U(s,a)-(n-1)\epsilon_1$ and at least $V^*(s)$. Indeed, each of the first $n-1$ updates decreases it by at least $\epsilon_1$, and if any post-update value were below $V^*(s)$, the pair could never be selected again. Thus $n\le1+[U(s,a)-V^*(s)]_+/\epsilon_1$. The same bound holds when $n=0$ and in the first case. Summing over pairs proves the stated bound $G$. [given, F2, F3, step 3.2, algebra]

5.1 It remains to count visits outside $K_t$. First, a failed attempted update that disables the learning flag must leave the pair inside $K$: since $b>t^*$, no Q table entry changed after that batch began, so the residual was constant through the batch; if it had been outside at batch start, step 3.1 would have forced success. Consequently a visit outside $K_t$ cannot occur with the flag still disabled: before sampling, [F2] tests $b\le t^*$, and an outside residual after the failed batch requires a later global update, which re-enables the flag. Now fix an outside visit for a pair while its flag is true. The next attempted batch occurs within at most $m$ visits to that pair. If the batch began outside $K$, step 3.1 makes it successful. If it began inside $K$, the residual became outside by the escape visit after a global update; with the pair's own Q value unchanged, other Q values only decrease, so its Bellman backup can only decrease and its residual remains outside through the attempted batch. Because a global update occurred after that batch began, a failed attempt does not disable the flag. The next attempted batch occurs within at most another $m$ visits and starts outside $K$, so step 3.1 makes it successful. Thus every interval between successive successful updates of this pair, including the initial interval, contains at most $2m$ outside visits. To include a possible final unfinished interval, count only intervals containing an outside visit. If the pair has $n$ successful updates and such an interval remains after the last update, its Q-value at an outside selection is at least $V^*(s)$ by step 4.1, while its $n$ previous updates have decreased it by at least $n\epsilon_1$. Hence $n\epsilon_1\le D(s,a)$ and these $n+1$ intervals number at most $1+D(s,a)/\epsilon_1$. If there is no such final interval, the at most $n$ completed intervals have the same bound by step 4.1. An interval with fewer than the $2m$ visits needed for its next success is included in this count; an interval with $2m$ outside visits would force that success by the preceding argument. Summing over pairs therefore gives at most $2mG$. [given, F2, F4, step 3.1, step 4.1, algebra] ∎
