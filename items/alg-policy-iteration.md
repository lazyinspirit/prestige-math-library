---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-policy-iteration.json
  precheck: n/a
id: alg-policy-iteration
kind: algorithm
title: "Exact finite policy iteration with retained greedy actions"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-markov-decision-process
  - def-policy-bellman-operator
  - def-bellman-optimality-operator
  - thm-bellman-contraction-and-unique-fixed-point
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§4.3, policy iteration and its arbitrary-tie cycling warning; the exact evaluation and retained-tie procedure is specified locally."
---

## Definition

Input a finite MDP, a discount $0\le\gamma<1$, an initial deterministic policy $\pi_0$, and, for each state $s$, an ordered list containing each member of $A(s)$ exactly once. For $k=0,1,\ldots$:

1. Associate to each deterministic policy $\pi_k$ the stationary Markov policy $\widehat\pi_k(a\mid s)=1$ if $a=\pi_k(s)$ and $0$ otherwise. Compute the unique exact policy evaluation $V_k\in\mathbb R^S$ satisfying $T^{\widehat\pi_k}V_k=V_k$.
2. For each $s$, set

$$ Q_k(s,a)=r(s,a)+\gamma\sum_{s'\in S}P(s'\mid s,a)V_k(s'). $$

If $\pi_k(s)$ attains $\max_{a\in A(s)}Q_k(s,a)$, set $\pi_{k+1}(s)=\pi_k(s)$. Otherwise set $\pi_{k+1}(s)$ to the earliest maximizing action in the supplied list.
3. If $\pi_{k+1}=\pi_k$, return $(\pi_k,V_k)$. Otherwise continue with $\pi_{k+1}$.

The operator fixed point used for exact policy evaluation exists and is unique by the finite-MDP contraction theorem.

## Definition references

[[def-finite-markov-decision-process|The finite MDP data and deterministic policies]].

[[def-policy-bellman-operator|The policy evaluation map]].

[[def-bellman-optimality-operator|The greedy action values]].

[[thm-bellman-contraction-and-unique-fixed-point|Existence and uniqueness of each exact policy evaluation]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Remarks

The flow below separates the statewise retained-greedy choice from the policy equality test. In the choice box, apply the rule to every state: retain the current action whenever it is maximizing, even if other actions tie. The arrows describe the algorithm's control flow, not transitions of the MDP.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners,align=center,minimum width=6cm] (policy) at (0,0) {Current deterministic policy $\pi_k$};
\node[draw,rounded corners,align=center,minimum width=6cm] (eval) at (0,-1.3) {Exact evaluation $V_k\in\mathbb R^S$\\ $T^{\widehat\pi_k}V_k=V_k$};
\node[draw,rounded corners,align=center,minimum width=6cm] (q) at (0,-2.8) {Compute $Q_k(s,a)$ for each admissible $(s,a)$};
\node[draw,rounded corners,align=center,minimum width=6cm] (greedy) at (0,-4.4) {For every $s$: retain $\pi_k(s)$ if maximizing;\\otherwise choose the earliest maximizer.\\This defines $\pi_{k+1}$.};
\node[draw,rounded corners,align=center,minimum width=4cm] (test) at (0,-6) {Is $\pi_{k+1}=\pi_k$?};
\node[draw,rounded corners,align=center] (stop) at (5,-6) {Return $(\pi_k,V_k)$};
\draw[->] (policy) -- (eval);
\draw[->] (eval) -- (q);
\draw[->] (q) -- (greedy);
\draw[->] (greedy) -- (test);
\draw[->] (test) -- node[above] {yes} (stop);
\draw[->] (test.west) -- (-4.6,-6) -- node[left,align=center] {no\\ $k\leftarrow k+1$} (-4.6,0) -- (policy.west);
\end{tikzpicture}
```
