---
id: ex-dagger-interactive-expert-labels
kind: example
title: DAgger queries expert labels on learner-visited states
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-imitation-learning-and-expert-surrogate-loss
  - alg-dagger
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
      locator: "Algorithm 3.1, §3, PDF p. 3: expert labels at states visited by the current mixed policy and dataset aggregation."
    - title: "James A. Bagnell, Byron Boots, and Sanjiban Choudhury, Modern Adaptive Control and Reinforcement Learning, Chapter 6: An Invitation to Imitation"
      url: "https://macrl-book.github.io/assets/pdf/6_macrl.pdf"
      locator: "Chapter 6 DAgger algorithm and expert relabeling, PDF pp. 4–6 / printed pp. 57–59."
---

## Example

Use states $g,b$, initial state $g$, actions $A(g)=\{c,e\}$ and $A(b)=\{r,e\}$, and deterministic transitions/costs: at $g$, $c$ returns to $g$ with cost $0$ and $e$ moves to $b$ with cost $1$; at $b$, $r$ moves to $g$ with cost $0$ and $e$ returns to $b$ with cost $1$. The expert chooses $c$ at $g$ and $r$ at $b$. The learner class contains two deterministic policies: $\pi^{\rm bad}$ chooses $e$ at both states, and $\pi^{\rm good}$ chooses $c$ at $g$ and $r$ at $b$. Run two DAgger rounds with horizon $T=2$, one trajectory per round, expert-use probabilities $\beta_1=\beta_2=0$, initial policy $\pi^{\rm bad}$, and statewise 0–1 disagreement loss. The round-1 rollout visits $g$ and then $b$; DAgger queries the expert at both states, aggregates the labels $(g,c)$ and $(b,r)$, and fits $\pi^{\rm good}$ as the unique minimum-loss policy. The second rollout then remains at $g$. The label $(b,r)$ could not be obtained from expert-only demonstrations because the expert stays at $g$.

The diagram labels each deterministic transition by action/task-cost and marks the initial state; the expert and the two learner policies are specified in the text.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle] (g) at (0,0) {$g$};
  \node[draw,circle] (b) at (4,0) {$b$};
  \draw[->] (-1.5,0) -- (g) node[midway,above] {start};
  \draw[->] (g) edge[loop above] node[above] {$c/0$} (g);
  \draw[->] (g) to[bend left=18] node[above] {$e/1$} (b);
  \draw[->] (b) edge[loop above] node[above] {$e/1$} (b);
  \draw[->] (b) to[bend left=18] node[below] {$r/0$} (g);
\end{tikzpicture}
```

## Example references

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Algorithm 3.1, §3, PDF p. 3.

[Bagnell, Boots, and Choudhury, *Modern Adaptive Control and Reinforcement Learning*, Chapter 6](https://macrl-book.github.io/assets/pdf/6_macrl.pdf): PDF pp. 4–6 / printed pp. 57–59.

## Facts & Assumptions

**Given:** The two-state MDP, expert, learner class, two DAgger rounds, and loss in the Example.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: the deterministic expert label at state $s$ is $\pi^*(s)$, and DAgger's training loss evaluates candidate policies on labeled states.

[F2] [[alg-dagger]]: each round executes the current expert/learner mixture, queries the expert on every visited state, aggregates the labels, and updates by minimizing cumulative empirical loss.

[A1] $T=2$, $m=1$, $N=2$, $\beta_1=\beta_2=0$, and the initial learned policy is $\pi^{\rm bad}$.

## Verification

1.1 With $\beta_1=0$, the first round executes $\pi^{\rm bad}$. From $S_0=g$ it takes $e$ to $S_1=b$; at both visited states the expert labels are $c$ at $g$ and $r$ at $b$. By [F2], both labeled pairs enter the aggregate dataset. [A1, F1, F2, construct]

2.1 On this two-example dataset, $\pi^{\rm good}$ has total 0–1 loss $0$, while $\pi^{\rm bad}$ disagrees on both labeled states and has loss $2$. Thus the unique FTL minimizer is $\pi^{\rm good}$, which is the next policy. [A1, F2, step 1.1, algebra]

3.1 In round 2, $\beta_2=0$ and $\pi^{\rm good}$ takes $c$ at $g$, so the state remains $g$ and the expert label is $c$. Adding this pair preserves $\pi^{\rm good}$ as the unique zero-loss minimizer. Since the expert itself remains at $g$ on every expert-only rollout, it never labels $b$; the first interactive DAgger round supplies that missing recovery label. [A1, F1, F2, step 2.1, algebra] ∎
