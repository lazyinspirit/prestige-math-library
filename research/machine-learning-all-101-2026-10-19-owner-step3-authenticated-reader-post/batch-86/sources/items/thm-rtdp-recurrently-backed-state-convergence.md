---
id: thm-rtdp-recurrently-backed-state-convergence
kind: theorem
title: RTDP convergence on recurrently backed states
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-finite-stochastic-shortest-path-problem
  - thm-finite-stochastic-shortest-path-value-exists
  - alg-real-time-dynamic-programming
  - thm-tower-property-of-conditional-expectation
  - thm-monotone-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Barto, Bradtke and Singh, Learning to Act Using Real-Time Dynamic Programming, Appendix A recurrent-set argument, corrected to exclude the false all-optimal-reachable conclusion
      url: https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf
---

## Statement

Assume the Axiom of Choice. Let a finite positive-cost stochastic shortest-path problem have a proper stationary policy and optimal cost $f^*$. Supply a probability law for an infinite sequence of exact current-state RTDP backups with initial finite costs $f_0\le f^*$ and zero goal values. At each decision the action is sampled uniformly from the current minimizing actions using a fresh draw, and the next state has conditional transition row $P(\cdot\mid s,a)$ given the entire previous history and selected action. Trial resets are separate operations and do not enter a Bellman backup. Each designated start is backed infinitely often. Assume the following outcome-backup fairness: every nonglobal state that occurs infinitely often as an executed transition's next state is also backed infinitely often.

Let $I$ be the random set of nonglobal states backed infinitely often. Then, almost surely, $f_n(s)\to f^*(s)$ uniformly for $s\in I$. In particular, convergence holds at every designated start. Almost surely there is a finite decision index after which every minimizing action at a backed state is globally Bellman-optimal and has its transition support in $I\cup G$. Every stationary policy selecting any of these eventual minimizing actions on $I$ reaches a goal almost surely from $I$ and has optimal total cost there. The result applies to capped trials satisfying outcome-backup fairness and to trials continued until a goal when each designated start initiates infinitely many finite trials. Without a further initialization condition it does not assert convergence at every state reachable under every optimal policy. Define the cost Bellman operator $T$ on all of $S$ by $(Tf)(g)=0$ for $g\in G$ and $(Tf)(s)=\min_{a\in A(s)}[c(s,a)+\sum_tP(t\mid s,a)f(t)]$ for $s\notin G$. If in addition $f_0(s)\le (Tf_0)(s)$ for every $s\in S$, then the entire table is nondecreasing and converges to a finite limit, and that limit equals $f^*$ at every state reachable with positive probability from a designated start under any optimal policy, including states not backed infinitely often.

## Statement references

[[def-finite-stochastic-shortest-path-problem]]

[[thm-finite-stochastic-shortest-path-value-exists]]

[[alg-real-time-dynamic-programming]]

## Facts & Assumptions

**Given:** AC, the finite SSP, the supplied history law, non-overestimating initialization, recurrent starts, fresh uniform greedy ties, correct conditional transitions, and outcome-backup fairness.

[A1] AC is the axiom used by the full policy trajectory-law and conditional-expectation suppliers. [[def-axiom-of-choice]]

[F1] Nonglobal costs have a common positive lower bound; goal costs are zero and goals absorb. [[def-finite-stochastic-shortest-path-problem]]

[F2] The finite nonnegative optimal cost solves the Bellman equations and is attained by a proper policy. [[thm-finite-stochastic-shortest-path-value-exists]]

[F3] The RTDP procedure takes a nonempty finite start set $S_0\subseteq S\setminus G$, uses exact current-state Bellman backups in the cost convention, and resets the start state without changing the value table. [[alg-real-time-dynamic-programming]]

[F4] The tower property iterates conditional expectations across nested histories, passing one-step conditional transition expectations to finite-prefix expectations. [[thm-tower-property-of-conditional-expectation]]

[F5] A bounded monotone real sequence has a limit. [[thm-monotone-convergence]]

## Proof
**Given:** The hypotheses in the Statement; write $n$ for the decision/backup index.

1.1 Bellman monotonicity and [F2] imply $f_n\le f^*$ after every backup: an updated value is no greater than the same backup of $f^*$, and other values do not change. Put $e_n=f^*-f_n\ge0$ and $\delta(s,a)=c(s,a)+\sum_tP(t\mid s,a)f^*(t)-f^*(s)\ge0$. An update at $s$ gives $e_{n+1}(s)=\max_a\{\sum_tP(t\mid s,a)e_n(t)-\delta(s,a)\}$. Consequently $\max_s e_n(s)$ is nonincreasing and all errors are bounded by their finite initial maximum. [given, F1, F2, F3, algebra]

1.2 We first justify the probability-one recurrence fact used below. At each of the successive opportunities when a fixed pair $(s,a)$ is currently greedy at a backed state $s$, the conditional probability of selecting $a$ is at least $1/|A(s)|$. For any finite number $m$ of such opportunities after a fixed index, iterated conditioning [F4] bounds the probability of avoiding $a$ through all of them by $(1-1/|A(s)|)^m$; for random opportunity times, first stop at a finite horizon and then increase the horizon, so the same inequality holds on the event those opportunities exist. Letting $m$ increase proves that infinitely many opportunities imply infinitely many selections almost surely. At successive selections of a fixed $(s,a)$, the same argument with probability $P(t\mid s,a)>0$ shows that successor $t$ occurs infinitely often almost surely. Countably many tail indices and finitely many states/actions/successors allow one common probability-one event for all these implications. [given, A1, F4, algebra]

2.1 Work on that event. Since there are finitely many states, after some finite index only states in $I$ are backed. An action greedy at infinitely many backups of a state in $I$ is selected infinitely often by step 1.2. Every nonglobal positive-probability successor is then an outcome infinitely often, hence belongs to $I$ by outcome-backup fairness. There are only finitely many remaining state-action pairs, so after another finite index every minimizing action at every backed state has transition support in $I\cup G$. In particular, after this index the errors of any successors used by a minimizing action are errors inside $I$, or zero goal errors. [given, step 1.2, construct]

3.1 Let $E_n=\max_{s\in I}e_n(s)$ after the index in step 2.1. The set $I$ is nonempty because infinitely many backups occur on a finite state set. The maximum is attained on a finite set. Choose any minimizing action at the current backed state; the error identity in step 1.1, evaluated at that action, and step 2.1 give its post-backup error at most $E_n$. Unupdated errors stay fixed. Hence $E_n$ is nonincreasing, nonnegative, and has a finite limit $E$ by [F5]. [given, F5, step 1.1, step 2.1, algebra]

4.1 Suppose $E>0$ and put $J=\{s\in I:\limsup_n e_n(s)=E\}$. Finiteness and attainment of the maxima imply $J$ is nonempty. Each $s\in J$ is backed infinitely often and its value is constant between backups, so some sequence of its post-backup errors tends to $E$. On a subsequence one fixed minimizing action $a_s$ realizes these backups, since the action set is finite. In the error identity from step 1.1 its successor errors are all at most $E_n\to E$, by step 2.1; attaining limiting error $E$ forces $\delta(s,a_s)=0$, excludes positive-probability goal successors, and forces every positive-probability successor to have limsup error $E$. Thus every successor lies in $J$. [given, F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Select one such $a_s$ at each member of finite $J$ by finite enumeration. These actions are globally Bellman-optimal and keep every finite transition law in $J$. Iterating their Bellman equalities for $m$ steps gives $f^*(s)=\mathbb E_s[\sum_{k<m}c(S_k,a_{S_k})+f^*(S_m)]\ge m c_{\min}$ by [F1] and nonnegativity of $f^*$. This contradicts finiteness of $f^*(s)$ for large $m$. Therefore $E=0$, giving uniform convergence on $I$. [F1, F2, step 4.1, algebra, contradiction]

6.1 Any action greedy at infinitely many backups has support in $I\cup G$ by step 2.1. Along those backups all successor estimates tend to their optimal values by step 5.1, and the updated state estimate does also. Passing to the limit in its finite Bellman backup proves that its slack $\delta$ is zero. There are finitely many state-action pairs, so after some finite index no action of positive slack is currently minimizing at a backed state. Every designated start is nonglobal by [F3] and belongs to $I$. A stationary policy choosing any eventual minimizing action on $I$ has zero Bellman slack and support in $I\cup G$. For any $s\in I$ and $m\ge1$, iterating its Bellman equalities gives $f^*(s)=\mathbb E_s[\sum_{k<m}c(S_k,A_k)1_{\{S_k\notin G\}}+f^*(S_m)]$. If $q_k=\mathbb P_s(S_k\notin G)$, absorbing goals make $q_k$ nonincreasing, and the identity implies $m c_{\min}q_m\le c_{\min}\sum_{k<m}q_k\le f^*(s)$. Hence $q_m\le f^*(s)/(m c_{\min})\to0$. Since $f^*$ is bounded and zero on $G$, $\mathbb E_s f^*(S_m)\le\max_x f^*(x)q_m\to0$; taking $m\to\infty$ in the identity shows that the policy is proper on $I$ and has total cost $f^*(s)$. [F1, F2, F3, F4, step 2.1, step 5.1, algebra]

6.2 Suppose additionally $f_0\le Tf_0$. Whenever $f_n\le Tf_n$, each updated coordinate satisfies $f_{n+1}(s)=Tf_n(s)\ge f_n(s)$, while unupdated coordinates are unchanged, so $f_{n+1}\ge f_n$. Monotonicity of $T$ then gives $f_{n+1}\le Tf_{n+1}$: at the updated coordinate $f_{n+1}(s)=Tf_n(s)\le Tf_{n+1}(s)$, and at every unupdated coordinate $f_{n+1}(t)=f_n(t)\le Tf_n(t)\le Tf_{n+1}(t)$. Induction shows that the tables increase coordinatewise and remain subsolutions. They are bounded above by $f^*$ by step 1.1, so on finite $S$ they converge to a finite $\bar f\le f^*$; continuity of finite minima and sums gives $\bar f\le T\bar f$. Every designated start is nonglobal by [F3], is backed infinitely often by hypothesis, and hence belongs to $I$; step 5.1 gives $\bar f=f^*$ there. [given, F3, F5, step 1.1, step 5.1, algebra]

7.1 In goal-terminated trials, every nonglobal executed successor is the next backed state before any reset, so outcome-backup fairness holds pathwise. Capped trials are covered precisely when they satisfy the stated fairness condition; no assumption about unvisited optimal branches follows from fresh ties. This proves the trial-schedule assertions. [given, F3, step 6.1]

7.2 If $\bar f(s)=f^*(s)$ and $a$ is globally Bellman-optimal at $s\notin G$, then $f^*(s)=\bar f(s)\le T\bar f(s)\le c(s,a)+\sum_tP(t\mid s,a)\bar f(t)=f^*(s)-\sum_tP(t\mid s,a)(f^*(t)-\bar f(t))\le f^*(s)$. Equality throughout forces every positive-probability successor to satisfy $\bar f=f^*$, since $f^*-\bar f\ge0$. [F1, F2, step 6.2, algebra]

8.1 Fix an optimal policy $\sigma$ from a designated start $s_0$. Let $\delta(s,a)=c(s,a)+\sum_tP(t\mid s,a)f^*(t)-f^*(s)$, which is nonnegative and zero at goals. For every $n$, [F4] and the conditional transition law give $\mathbb E_{s_0}^\sigma[\sum_{k<n}c(S_k,A_k)1_{\{S_k\notin G\}}+f^*(S_n)]=f^*(s_0)+\sum_{k<n}\mathbb E_{s_0}^\sigma[\delta(S_k,A_k)]$. Because $J^\sigma(s_0)=f^*(s_0)<\infty$ and costs off goals are at least $c_{\min}$, $\sum_{k\ge0}\mathbb P_{s_0}^\sigma(S_k\notin G)\le J^\sigma(s_0)/c_{\min}<\infty$, so these probabilities tend to zero. Boundedness of $f^*$ and $f^*|_G=0$ make the terminal expectation tend to zero; letting $n\to\infty$ in the identity gives $\sum_{k\ge0}\mathbb E_{s_0}^\sigma[\delta(S_k,A_k)]=J^\sigma(s_0)-f^*(s_0)=0$. Thus $\delta(S_k,A_k)=0$ almost surely at every $k$, so every action on a positive-probability prefix of $\sigma$ is globally Bellman-optimal. Starting with $\bar f=f^*$ at $s_0$ and applying step 7.2 along each such prefix proves $\bar f=f^*$ at every state reachable with positive probability under $\sigma$. Since $\sigma$ was arbitrary and $S$ is finite, convergence is uniform on the union of all such reachable states. [given, F1, F2, F4, step 6.2, step 7.2, algebra] ∎
