---
id: ex-model-accurate-on-behavior-support
kind: example
title: "An inaccurate model can give the exact return on behavior support"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-learned-mdp-model
  - thm-single-policy-finite-horizon-simulation-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
---

## Example

Let $S=\{s,g\}$, with one dummy action $d$ at $g$ and actions $a,b$ at $s$. At $g$, action $d$ has reward $0$ and returns to $g$. At $s$, action $a$ has reward $1$ and moves to $g$, while action $b$ returns to $s$ with true reward $0$ and learned reward $1$. The true and learned models agree on $(s,a)$ and $(g,d)$. Let the supported set be $B=\{(s,a),(g,d)\}$, let the initial state be $s$, and let $H\ge2$. A policy that chooses $a$ at $s$ and $d$ at $g$ has identical true and learned $H$-step returns, although the learned model is wrong on the unsupported pair $(s,b)$.

The TikZ diagram shows the two model transition/reward tables: a label $u:r$ gives action $u$ and its immediate reward on the arrow, and an arrow returning to its source denotes a self-transition. The learned reward for $b$ is marked with a hat.

\begin{center}
\begin{tikzpicture}[>=stealth, node distance=32mm]
  \node[circle,draw] (s) {$s$};
  \node[circle,draw,right of=s] (g) {$g$};
  \draw[->] (s) to[bend left=12] node[above] {$a:1$} (g);
  \draw[->] (g) to[loop right] node[right] {$d:0$} (g);
  \draw[->] (s) to[loop left] node[left] {$b:0\ (\widehat b:1)$} (s);
\end{tikzpicture}
\end{center}

## Example references

[[def-learned-mdp-model|The true and learned reward and transition tables share a finite state-action domain, and errors can be restricted to a pair set.]]

[[thm-single-policy-finite-horizon-simulation-bound|A fixed policy's finite-horizon return difference is bounded by reachable-pair reward and transition errors.]]

## Facts & Assumptions

**Given:** The two-state models, supported set, initial law, horizon, and policy in the Example.

[F1] [[def-learned-mdp-model]]: the true and learned reward means lie in $[0,1]$, and each transition row is a probability distribution.

[F2] [[thm-single-policy-finite-horizon-simulation-bound]]: for a common initial law and fixed Markov policy, uniform errors on the union of reachable pairs give the stated finite-horizon return bound.

## Verification

**Given:** The finite models and policy in the Example.

1.1 The true and learned occupancies under the policy place mass only on $(s,a)$ at time $0$ and on $(g,d)$ at each later time. These pairs are exactly the listed supported pairs, and the models agree on both, so the reachable reward and transition errors are zero. Theorem [F2] applies with $\epsilon_r=\epsilon_p=0$. [given, F1, F2, algebra]

2.1 Substitution into [F2] gives $|J_H-\widehat J_H|\le0$. Since an absolute value is nonnegative, $J_H=\widehat J_H$. Directly, each return is $1$ from the reward at the first step and $0$ thereafter. Thus model errors outside the fixed policy's support do not affect this return. [step 1.1, F2, algebra] ∎
