---
id: alg-real-time-dynamic-programming
kind: algorithm
title: "Trial-based real-time dynamic programming"
status: draft
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
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew G. Barto, Steven J. Bradtke, and Satinder P. Singh, Learning to Act Using Real-Time Dynamic Programming"
      url: "https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf"
      locator: "§§6.1–6.2, PDF pp. 102–104: greedy real-time decisions, current-state backups, and trial-based RTDP."
---

## Definition

Input: a finite stochastic shortest-path model, a finite value table $V_0:S\to\mathbb R$ with $V_0(g)=0$ on goals, a nonempty finite start set $S_0\subseteq S\setminus G$, a positive integer trial cap $L$, and an infinite supplied start sequence in which each member of $S_0$ occurs infinitely often. For each trial, set the current state to the next supplied start. For at most $L$ decision steps, or until a goal is reached, do the following: at the current nonglobal state $s$, compute

$$q_V(s,a)=r(s,a)+\sum_{s'\in S}P(s'\mid s,a)V(s')\qquad(a\in A(s)),$$

choose uniformly from the nonempty set of actions attaining $\max_{a\in A(s)}q_V(s,a)$ using a fresh tie draw, execute the chosen action in the given MDP and observe the next state, then replace $V(s)$ by $\max_{a\in A(s)}q_V(s,a)$ using the value table from before that backup. Keep every other value unchanged. At a goal keep value $0$. After a trial ends, reset the state to the next supplied start without resetting the value table. The procedure returns the successive value tables and selected actions; it asserts no convergence guarantee by itself.

## Definition references

[[def-finite-stochastic-shortest-path-problem|The finite undiscounted MDP has absorbing zero-reward goals and strictly positive expected costs away from them.]]

[[lem-finite-set-has-max|Every finite nonempty set of real action values has an attained maximum.]]

[Barto, Bradtke, and Singh, “Learning to Act Using Real-Time Dynamic Programming”](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf).
