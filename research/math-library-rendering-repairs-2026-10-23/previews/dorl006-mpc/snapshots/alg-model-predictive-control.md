---
id: alg-model-predictive-control
kind: algorithm
title: "Finite-horizon model-predictive control"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-learned-mdp-model
  - def-finite-horizon-mdp-return
  - lem-finite-set-has-max
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.1, PDF p. 3, and §5.1, PDF pp. 25–26: model-based planning, online use via MPC, and model-error distribution shift."
---

## Definition

Input: a finite learned MDP model, a current state $s_0$, a horizon $H\in\mathbb N$ with $H\ge1$, and, for each state $s$, an ordered finite list containing every action in $A(s)$ exactly once; this ordering determines deterministic tie-breaking. Initialize $V_0(s)=0$ for every state. For $h=1,\ldots,H$, compute for every admissible pair

$$Q_h(s,a)=\hat r(s,a)+\sum_{s'\in S}\hat P(s'\mid s,a)V_{h-1}(s'),\qquad V_h(s)=\max_{a\in A(s)}Q_h(s,a).$$

At the current state $s_0$, return the first action in its supplied listing that attains $V_H(s_0)$. The controller executes only this first action in the true environment, observes the next state, and may invoke the procedure again with the new state and a newly supplied learned model. The procedure specifies no model-update rule and makes no guarantee about the true return of the model-selected action.

## Definition references

[[def-learned-mdp-model|A finite model provides an estimated reward and probability distribution for every admissible state-action pair.]]

[[def-finite-horizon-mdp-return|Finite-horizon expected return is the sum of model-expected one-step rewards under state occupancies.]]

[[lem-finite-set-has-max|Every finite nonempty list of real action values has an attained maximum.]]

[Levine, Kumar, Tucker, and Fu, *Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems*](https://arxiv.org/pdf/2005.01643).


## Remarks

The diagram separates the finite-horizon model calculation from the single true-environment transition. Here $a_0$ is the first action in the supplied ordering with $Q_H(s_0,a_0)=V_H(s_0)$, and $s_1$ denotes the observed next state. The dashed arrow is an optional new invocation at $s_1$, with a newly supplied model; it specifies no model-update rule. The algorithm is defined fully above, independently of this illustration.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}, box/.style={draw,rounded corners,align=center,text width=5.8cm,minimum height=1cm}]
\node[box] (plan) at (0,0) {Learned model, current state $s_0$, horizon $H$\\Compute $V_0=0$, then $Q_h,V_h$ for $h=1,\ldots,H$};
\node[box] (choose) at (0,-1.9) {Select $a_0\in A(s_0)$\\First listed action attaining $V_H(s_0)$};
\node[box] (execute) at (0,-3.8) {Execute only $a_0$ in the true environment};
\node[box] (observe) at (0,-5.7) {Observe the next state $s_1\in S$};
\draw[->] (plan) -- (choose);
\draw[->] (choose) -- (execute);
\draw[->] (execute) -- (observe);
\draw[->,dashed] (observe.east) -- (4.7,-5.7) -- (4.7,0) -- (plan.east);
\node[align=center,text width=2.2cm] at (6.1,-2.85) {Optional replan\\at $s_1$ with a\\supplied model};
\end{tikzpicture}
```
