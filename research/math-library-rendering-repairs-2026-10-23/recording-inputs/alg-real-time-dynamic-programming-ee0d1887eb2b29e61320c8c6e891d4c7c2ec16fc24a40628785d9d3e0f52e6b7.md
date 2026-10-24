---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-real-time-dynamic-programming.json
  precheck: n/a
id: alg-real-time-dynamic-programming
kind: algorithm
title: "Trial-based real-time dynamic programming"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-stochastic-shortest-path-problem
  - lem-finite-set-has-max
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "§§6.1–6.2, printed pp. 102–104 (PDF pp. 22–24): greedy real-time decisions, current-state backups, and trial-based RTDP."
---

## Definition

Input: a finite stochastic shortest-path model, a finite value table $V_0:S\to\mathbb R$ with $V_0(g)=0$ on goals, a nonempty finite start set $S_0\subseteq S\setminus G$, a positive integer trial cap $L$, and an infinite supplied start sequence in which each member of $S_0$ occurs infinitely often. For each trial, set the current state to the next supplied start. For at most $L$ decision steps, or until a goal is reached, do the following: at the current nonglobal state $s$, compute

$$q_V(s,a)=r(s,a)+\sum_{s'\in S}P(s'\mid s,a)V(s')\qquad(a\in A(s)),$$

choose uniformly from the nonempty set of actions attaining $\max_{a\in A(s)}q_V(s,a)$ using a fresh tie draw, execute the chosen action in the given MDP and observe the next state, then replace $V(s)$ by $\max_{a\in A(s)}q_V(s,a)$ using the value table from before that backup. Keep every other value unchanged. At a goal keep value $0$. After a trial ends, reset the state to the next supplied start without resetting the value table. The procedure returns the successive value tables and selected actions; it asserts no convergence guarantee by itself.

## Definition references

[[def-finite-stochastic-shortest-path-problem|The finite undiscounted MDP has absorbing zero-reward goals and strictly positive expected costs away from them.]]

[[lem-finite-set-has-max|Every finite nonempty set of real action values has an attained maximum.]]

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming”](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).

## Remarks

The flow below separates the trial-local state and step count from the value table retained across trials. Initially $V=V_0$. Here $k$ counts completed decision steps in the current trial; $W$ is a saved copy of the table before the current backup, and $m$ is the maximum computed from that copy. The figure describes the procedure only and adds no convergence assertion.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}, box/.style={draw, rounded corners, align=center, text width=7.1cm, minimum height=0.85cm}, check/.style={draw, align=center, text width=4.8cm, minimum height=0.85cm}]
\node[box] (start) at (0,0) {Next supplied start: $s\gets s_0$, $k\gets0$; retain $V$};
\node[check] (stop) at (0,-1.5) {Is $s\in G$ or $k=L$?};
\node[box] (compute) at (0,-3) {Save $W\gets V$; compute all $q_W(s,a)$\\ and $m=\max_{a\in A(s)}q_W(s,a)$};
\node[box] (choose) at (0,-4.5) {Fresh uniform draw among actions\\ attaining $q_W(s,a)=m$};
\node[box] (execute) at (0,-6) {Execute that action; observe $s'$};
\node[box] (backup) at (0,-7.5) {Set $V(s)\gets m$; keep all other entries};
\node[box] (advance) at (0,-9) {Set $s\gets s'$, $k\gets k+1$};
\node[draw, align=center, text width=2cm] (end) at (6,-1.5) {Trial ends\\ retain $V$};
\draw[->] (start) -- (stop);
\draw[->] (stop) -- node[right] {no} (compute);
\draw[->] (compute) -- (choose);
\draw[->] (choose) -- (execute);
\draw[->] (execute) -- (backup);
\draw[->] (backup) -- (advance);
\draw[->] (advance.west) -- (-4.6,-9) -- (-4.6,-1.5) -- (stop.west);
\draw[->] (stop.east) -- node[above] {yes} (end.west);
\draw[->] (end.north) -- (6,0) -- (start.east);
\end{tikzpicture}
```

The stopping test precedes every decision step, so a goal is never backed up and the cap allows at most $L$ such steps. Since starts lie outside $G$ and only a current non-goal entry is changed, the initial goal values remain $0$. In the backup box, $s$ still denotes the state from which the action was executed; the assignment to the observed state occurs only in the next box. Both the greedy draw and the backup use the same saved $W$. These relations restate the Definition independently of the picture.
