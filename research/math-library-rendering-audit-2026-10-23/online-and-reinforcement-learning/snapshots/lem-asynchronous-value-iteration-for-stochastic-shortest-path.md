---
id: lem-asynchronous-value-iteration-for-stochastic-shortest-path
kind: lemma
title: "Asynchronous value iteration for finite positive-cost shortest paths"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-finite-stochastic-shortest-path-problem
  - thm-finite-stochastic-shortest-path-value-exists
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "§5.3, printed pp. 100–101 (PDF pp. 20–21): asynchronous dynamic programming conditions; the finite positive-cost convergence proof below is local."
---

## Statement

Assume the Axiom of Choice and that the finite positive-cost stochastic shortest-path problem has at least one proper stationary policy. Let $f^*$ be its optimal cost. Let $f_0:S\to\mathbb R$ be finite with $f_0(g)=0$ for every goal and $f_0(s)\le f^*(s)$ for every state. At each integer stage $n$, choose any subset $U_n\subseteq S\setminus G$ and update, using the table before that stage,

$$f_{n+1}(s)=\min_{a\in A(s)}\left[c(s,a)+\sum_{s'\in S}P(s'\mid s,a)f_n(s')\right]\quad(s\in U_n),$$

while leaving all other state values unchanged and keeping goal values $0$. Assume every nonglobal state belongs to $U_n$ for infinitely many $n$. Then $f_n\to f^*$ uniformly on the finite state set $S$.

## Statement references

[[def-finite-stochastic-shortest-path-problem|The transition rows are probabilities and every nonglobal expected cost has a common strictly positive lower bound.]]

[[def-axiom-of-choice|Every family of nonempty sets has a choice function.]]

[[thm-finite-stochastic-shortest-path-value-exists|The SSP has a unique finite nonnegative Bellman fixed point equal to its optimal total cost.]]

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming”](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite positive-cost SSP with at least one proper stationary policy, its optimal cost $f^*$, the initial table below $f^*$ with zero goal values, and the asynchronous update schedule in the Statement.

[A1] A choice function exists for every family of nonempty sets. ([[def-axiom-of-choice]])

[F1] [[def-finite-stochastic-shortest-path-problem]]: $P(\cdot\mid s,a)$ is a probability row and $c(s,a)\ge c_{\min}>0$ off goals; goal costs and values are zero.

[F2] Under the Axiom of Choice and the proper-policy hypothesis, [[thm-finite-stochastic-shortest-path-value-exists]] gives a finite nonnegative $f^*$ satisfying the SSP Bellman equations.

[F3] [[lem-finite-set-has-max]]: every finite nonempty real list has an attained maximum and minimum.

[F4] [[thm-monotone-convergence]]: a nonincreasing real sequence bounded below converges to a finite limit.

## Proof

**Given:** The SSP data and asynchronous value iteration satisfying the Statement.

1.1 Put $e_n(s)=f^*(s)-f_n(s)$ and $E_n=\max_{s\in S}e_n(s)$. Initially $e_0\ge0$ by the Given hypothesis. If $f_n\le f^*$, then each backup is no greater than the corresponding backup of $f^*$ because the transition weights are nonnegative; unupdated entries also remain below $f^*$. Goals remain equal to $f^*(g)=0$. Induction gives $e_n\ge0$ for all $n$. [given, A1, F1, F2, algebra]

2.1 For a nonglobal state and action define the Bellman slack $\delta(s,a)=c(s,a)+\sum_{s'}P(s'\mid s,a)f^*(s')-f^*(s)\ge0$ by [F2]. When state $s$ is updated, its new error is $e_{n+1}(s)=\max_{a\in A(s)}[\sum_{s'}P(s'\mid s,a)e_n(s')-\delta(s,a)]\le E_n$, since each probability row sums to one and $\delta\ge0$. Unupdated errors are unchanged, and goal errors are zero. Thus $0\le E_{n+1}\le E_n$. By [F4], this nonincreasing sequence bounded below by zero has a limit $E_\infty\ge0$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 Suppose $E_\infty>0$ and let $I=\{s\in S:\limsup_n e_n(s)=E_\infty\}$. Choose indices $n_j$ with $E_{n_j}\to E_\infty$ and, at each index, choose a state attaining $E_{n_j}$. Since $S$ is finite, one state occurs for infinitely many $j$; its limsup error is at least $E_\infty$ and at most $\lim_n E_n=E_\infty$, so $I$ is nonempty. Goal states do not lie in $I$ because their errors are always zero. Fix $s\in I$. It is updated infinitely often, and its error is constant between updates. Along a subsequence of times when $e_n(s)\to E_\infty$, the most recent post-update error has the same value; those update times tend to infinity, so a subsequence of post-update errors tends to $E_\infty$. At those updates a maximizing action in step 2.1 is attained by [F3]; since $A(s)$ is finite, pass to a further subsequence on which the same action $a_s$ is selected. Along this subsequence $E_n\to E_\infty$ and $\sum_{s'}P(s'\mid s,a_s)e_n(s')-\delta(s,a_s)\to E_\infty$. The weighted sum is at most $E_n$ and $\delta(s,a_s)\ge0$, so $\delta(s,a_s)=0$ and the weighted sum tends to $E_\infty$. If any successor $s'$ with $P(s'\mid s,a_s)>0$ had $\limsup_n e_n(s')<E_\infty$, its error would stay at least a fixed positive amount below $E_n$ along this subsequence, contradicting convergence of the weighted sum to $E_\infty$. Therefore every positive-probability successor of $a_s$ belongs to $I$. [given, F1, F2, F3, F4, step 2.1, algebra]

4.1 For every $s\in I$, step 3.1 gives at least one Bellman-optimal action $a_s$ whose transition row is supported in $I$. Enumerate finite $I$ and select one such action successively; adjoining one choice at each stage is a finite induction, so no arbitrary-index choice is used. These actions define a deterministic stationary policy on $I$. Starting from $s\in I$, its finite transition laws stay in $I$ and avoid goals. The Bellman equalities imply by induction on $m$ that $f^*(s)=\mathbb E_s[\sum_{t<m}c(S_t,a_{S_t})+f^*(S_m)]\ge m c_{\min}$, because each visited state lies in $I\subseteq S\setminus G$ and $f^*\ge0$. This contradicts finiteness of $f^*(s)$ from [F2] for sufficiently large $m$. Hence $E_\infty=0$, and $0\le e_n(s)\le E_n\to0$ uniformly over finite $S$. [F1, F2, step 3.1, algebra] ∎
