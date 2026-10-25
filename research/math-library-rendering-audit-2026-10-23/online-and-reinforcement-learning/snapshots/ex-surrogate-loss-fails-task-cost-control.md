---
id: ex-surrogate-loss-fails-task-cost-control
kind: example
title: A candidate loss score that does not control task cost
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-imitation-learning-and-expert-surrogate-loss
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Theorem 2.2, §2.2, PDF pp. 2–3: the surrogate must upper-bound expert-action disagreement for task-cost conversion."
---

## Example

Let $S=\{s\}$, $A(s)=\{a^*,b\}$, and let both actions return deterministically to $s$ at every decision. For every time, set task costs $c_t(s,a^*)=0$ and $c_t(s,b)=1$. Let the expert always choose $a^*$, let the learner class contain both the expert and a learner that always chooses $b$, and define a candidate loss score by $\ell(s,\theta)=0$ for every class policy. Then the learner's score is zero under every state distribution, while its total task cost over horizon $T\ge1$ is $T$ and the expert's task cost is zero. This score fails the required disagreement-domination condition $\ell(s,\theta)\ge\sum_{a\ne\pi^*(s)}\pi_\theta(a\mid s)$, so the example does not contradict the DAgger task-cost lemma; it shows why that premise is necessary.

The diagram labels each deterministic self-transition by action/task-cost. The two actions have the same next state but different task costs.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle] (s) at (0,0) {$s$};
  \draw[->] (s) edge[loop above] node[above] {$a^*/0$} (s);
  \draw[->] (s) edge[loop below] node[below] {$b/1$} (s);
\end{tikzpicture}
```

## Example references

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Theorem 2.2, §2.2, PDF pp. 2–3.

## Facts & Assumptions

**Given:** The one-state MDP, expert, learner, task costs, candidate loss score, and horizon in the Example.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: the expert-action disagreement probability is $\sum_{a\ne\pi^*(s)}\pi_\theta(a\mid s)$, and task cost is the finite-horizon expected sum of per-time costs.

[A1] $T$ is an integer with $T\ge1$.

## Verification

1.1 The state is always $s$ under both policies, so every occupancy is the point mass at $s$. By the defined candidate score, the learner's expected loss score is $\ell(s,\theta)=0$. Its disagreement probability is $1$, so [F1]'s required domination premise fails. [F1, A1, given]

2.1 At each of the $T$ decisions the learner pays cost $1$, while the expert pays cost $0$. Therefore $J(\hat\pi)=T$ and $J(\pi^*)=0$. Any unconditional claim that a zero candidate score alone forces $J(\hat\pi)\le J(\pi^*)$ would assert $T\le0$, contradicting $T\ge1$. [A1, given, algebra] ∎
