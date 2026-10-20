---
id: ex-short-versus-long-model-rollouts
kind: example
title: "A small transition error accumulates over longer rollouts"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let the states be $u$ (safe) and $v$ (failure), each with one action. Both true and learned rewards are $1$ at $u$ and $0$ at $v$. The true model stays at $u$ with probability $1$, while the learned model moves from $u$ to $v$ with probability $\epsilon$ and stays at $u$ with probability $1-\epsilon$, where $0<\epsilon<1$; both models keep $v$ absorbing. Starting at $u$ and following the only policy for horizon $H$, the true return is $H$ and the learned return is $\sum_{t=0}^{H-1}(1-\epsilon)^t$.

The diagram compares the true transition model on the left with the learned transition model on the right. Nodes are states, and arrows carry transition probabilities; each state label gives its reward. The dashed arrow is present only in the learned model.

\begin{center}
\begin{tikzpicture}[>=stealth, node distance=25mm]
  \node[circle,draw] (u1) {$u,\ r=1$};
  \node[circle,draw,right of=u1] (v1) {$v,\ r=0$};
  \draw[->] (u1) to[loop above] node[above] {$1$} (u1);
  \draw[->] (v1) to[loop right] node[right] {$1$} (v1);
  \node at (1.25,-0.8) {true};
  \begin{scope}[xshift=7cm]
    \node[circle,draw] (u2) at (0,0) {$u,\ r=1$};
    \node[circle,draw] (v2) at (2.8,0) {$v,\ r=0$};
    \draw[->] (u2) to[loop above] node[above] {$1-\epsilon$} (u2);
    \draw[->,dashed] (u2) to[bend left=12] node[above] {$\epsilon$} (v2);
    \draw[->] (v2) to[loop right] node[right] {$1$} (v2);
    \node at (1.4,-0.8) {learned};
  \end{scope}
\end{tikzpicture}
\end{center}

## Example references

[[def-learned-mdp-model|The learned transition error is total variation on each state-action pair.]]

[[thm-single-policy-finite-horizon-simulation-bound|The fixed-policy return discrepancy is controlled by horizon and reachable transition error.]]

## Facts & Assumptions

**Given:** The two-state models, initial state, policy, error parameter, and horizon in the Example.

[F1] [[def-learned-mdp-model]]: each model has probability transition rows and rewards in $[0,1]$; transition error is total variation.

[F2] [[thm-single-policy-finite-horizon-simulation-bound]]: a fixed policy with zero reward error and transition error at most $\epsilon$ on its reachable pairs has return discrepancy at most $\binom{H}{2}\epsilon$ from a common initial state.

## Verification

**Given:** The finite model pair and policy in the Example.

1.1 Under the true model, the state remains $u$, so each of the $H$ rewards is $1$ and $J_H=H$. Under the learned model, the probability of occupying $u$ at time $t$ is $(1-\epsilon)^t$, by induction from the transition row, and the only positive reward is received at $u$. Hence $\widehat J_H=\sum_{t=0}^{H-1}(1-\epsilon)^t$. [given, F1, algebra]

2.1 The reward error is zero. At $u$, the total variation between the true row $(1,0)$ and learned row $(1-\epsilon,\epsilon)$ is $\frac12(\epsilon+\epsilon)=\epsilon$; at $v$ the rows agree. Every reachable pair therefore satisfies the hypotheses of [F2], and $H-\widehat J_H\le\binom{H}{2}\epsilon$. The exact difference from step 1.1 is $\sum_{t=0}^{H-1}[1-(1-\epsilon)^t]$, which is nondecreasing in $H$ and is positive for $H\ge2$. Thus even a fixed, small one-step transition error can produce a larger return discrepancy on longer rollouts, within the finite-horizon bound. [given, F1, F2, step 1.1, algebra] ∎
