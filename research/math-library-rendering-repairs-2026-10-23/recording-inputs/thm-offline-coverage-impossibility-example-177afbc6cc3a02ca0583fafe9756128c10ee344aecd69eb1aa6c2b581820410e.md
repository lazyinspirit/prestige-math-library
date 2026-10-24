---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-offline-coverage-impossibility-example.json
  precheck: pass
id: thm-offline-coverage-impossibility-example
kind: theorem
title: "Without trajectory coverage, logged data need not identify policy value"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.4, PDF pp. 8–9; lack of logged transitions and counterfactual queries."
    - title: "Nan Jiang and Lihong Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning"
      url: "https://proceedings.mlr.press/v48/jiang16.pdf"
      locator: "§2, PDF p. 2; distribution mismatch in finite-horizon off-policy evaluation."
---

## Statement

There are two finite one-step Markov decision processes with the same logged-data law under one behavior policy, but different target-policy values and different uniquely optimal actions. A finite one-step Markov decision process here has a finite state set, finite nonempty action sets, a finite reward set, and a probability mass on the next-state/reward pair for every state/action pair. Let the state set be $\{s_0,z\}$, the action sets be $A(s_0)=\{a,b\}$ and $A(z)=\{c\}$, the reward set be $\{-1,0,1\}$, and the horizon be $H=1$. In both processes, action $a$ at $s_0$ gives reward $0$ and moves to $z$, and action $c$ at $z$ gives reward $0$ and stays at $z$. In process $M_+$, action $b$ at $s_0$ gives reward $1$ and moves to $z$; in process $M_-$, it gives reward $-1$ and moves to $z$. The behavior policy chooses $a$ at $s_0$ with probability $1$, while the target policy chooses $b$ there with probability $1$; both policies choose $c$ at $z$ with probability $1$. Every behavior-generated logged trajectory is $(s_0,a,0,z)$ in both processes, so every sample size $n\ge1$ has the same logged-data law in $M_+$ and $M_-$. The target value is the expected one-step reward: it is $1$ in $M_+$ and $-1$ in $M_-$, and the unique value-maximizing initial action is $b$ in $M_+$ and $a$ in $M_-$. An estimator here is a real-valued function of the logged dataset; it is unbiased for a target value when its expectation under the logged-data law equals that value. Consequently, no such estimator can be unbiased for the target value in both processes, and no data-based action selector can identify the unique optimal initial action with certainty in both.

## Statement references

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation is the Lebesgue integral under a probability law.]]

[Levine, Kumar, Tucker, and Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems](https://arxiv.org/pdf/2005.01643)

[Jiang and Li, Doubly Robust Off-policy Value Evaluation for Reinforcement Learning](https://proceedings.mlr.press/v48/jiang16.pdf)

## Facts & Assumptions

**Given:** The one-step finite-MDP construction and the behavior and target policies in the Statement; estimator expectations are with respect to the logged-data law.

[F1] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a real integrable estimator is its Lebesgue integral under the logged-data probability law.

## Proof

1.1 In each process, every state-action pair has a valid reward/next-state probability row: the specified reward and next state occur with probability $1$. Under the behavior policy the only possible one-step trajectory is $(s_0,a,0,z)$. Hence each size-$n$ logged dataset consists of the same fixed trajectory tuple in both processes, so its law is the same point mass for every $n\ge1$. [given, construct, algebra]

1.2 The target policy chooses $b$ at $s_0$, so its one-step expected return is $1$ in $M_+$ and $-1$ in $M_-$. Since action $a$ has value $0$, the unique maximizing action is $b$ in $M_+$ and $a$ in $M_-$. The behavior law gives zero probability to action $b$, while the target law gives it probability $1$; thus full trajectory coverage fails. [given, F1, algebra]

2.1 Let $T$ be any real-valued estimator of finite expectation computed from the logged dataset. Equality of the two dataset laws in step 1.1 implies $\mathbb E_{M_+}T=\mathbb E_{M_-}T$ by [F1]. Unbiasedness in both processes would require this common expectation to equal both $1$ and $-1$, which is impossible. A data-based action selector has the same output distribution in both processes; if it chooses $b$ with probability $q$, its probability of being correct is $q$ in $M_+$ and $1-q$ in $M_-$, so it cannot identify the unique maximizing action with certainty in both. [step 1.1, step 1.2, F1, algebra] ∎


## Remarks

The paired diagrams show all deterministic transition rows (each has probability $1$). Solid arrows are selected by the behavior policy; the dashed initial arrow is selected by the target policy instead. Both policies select $c$ at $z$. Edge labels give the action and reward; the horizon is $H=1$.

```tikz
\begin{tikzpicture}[>=stealth,thick]
\node at (1.5,1.6) {$M_+$};
\node[circle,draw,minimum size=9mm] (sp) at (0,0) {$s_0$};
\node[circle,draw,minimum size=9mm] (zp) at (3,0) {$z$};
\draw[->] (sp) to[bend left=30] node[above] {$a,\ r=0$} (zp);
\draw[->,dashed] (sp) to[bend right=30] node[below] {$b,\ r=+1$} (zp);
\draw[->] (zp) to[loop right] node[right] {$c,\ r=0$} (zp);
\node at (8.5,1.6) {$M_-$};
\node[circle,draw,minimum size=9mm] (sm) at (7,0) {$s_0$};
\node[circle,draw,minimum size=9mm] (zm) at (10,0) {$z$};
\draw[->] (sm) to[bend left=30] node[above] {$a,\ r=0$} (zm);
\draw[->,dashed] (sm) to[bend right=30] node[below] {$b,\ r=-1$} (zm);
\draw[->] (zm) to[loop right] node[right] {$c,\ r=0$} (zm);
\end{tikzpicture}
```

In both panels the logged trajectory is $(s_0,a,0,z)$, while the target values are respectively $1$ and $-1$. Thus the part sampled by the behavior policy agrees even though the target reward differs. The diagram illustrates the construction; the proof above is independent of it.
