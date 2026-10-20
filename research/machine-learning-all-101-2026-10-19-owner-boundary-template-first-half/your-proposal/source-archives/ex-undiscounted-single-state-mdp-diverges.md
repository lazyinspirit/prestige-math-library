---
id: ex-undiscounted-single-state-mdp-diverges
kind: example
title: "A unit reward on a self-loop has no finite undiscounted return"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-markov-decision-process, thm-geometric-series, def-lipschitz-holder-contraction, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "§3.7, the restriction to discounted continuing returns when 0≤γ<1."
---

## Example

Take the finite MDP with $S=\{s\}$, $A(s)=\{a\}$, reward alphabet $\mathcal R=\{1\}$, and $p(s,1\mid s,a)=1$. At $\gamma=1$, the first $N$ terms of the return sum to $N$, so the undiscounted return diverges. The formal backup $F:\mathbb R\to\mathbb R$, $F(v)=1+v$, has no real fixed point and is not a contraction with any constant $0\le q<1$ in the usual metric $d_{\mathbb R}(v,w)=|v-w|$.

## Example references

[[def-finite-markov-decision-process|The finite MDP data and joint reward-transition convention]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** $S=\{s\}$, $A(s)=\{a\}$, $p(s,1\mid s,a)=1$, and the undiscounted parameter $\gamma=1$.

[F1] [[def-finite-markov-decision-process]]: the sole transition keeps the state at $s$ and gives reward $1$ with probability $1$.

[F2] [[thm-geometric-series]]: the series $\sum_{j\ge0}r^j$ diverges when $|r|\ge1$.

[F3] [[lem-real-line-is-a-metric-space]]: $d_{\mathbb R}(v,w)=|v-w|$ is the usual metric on $\mathbb R$.

[F4] [[def-lipschitz-holder-contraction]]: a contraction with constant $q$ must satisfy $d(F(v),F(w))\le qd(v,w)$ for some $0\le q<1$.

## Verification

1.1 Every reward is $1$, so the first $N$ summands are $1$ and their partial sum is $N$. Since these partial sums are unbounded, the undiscounted return does not have a finite real sum. [given, F1, algebra]

1.2 The formal backup equation $F(v)=v$ would give $1+v=v$, hence $1=0$, which is impossible in $\mathbb R$. [given, algebra]

2.1 For any distinct $v,w$, $d_{\mathbb R}(F(v),F(w))=|v-w|=d_{\mathbb R}(v,w)$ by [F3]. This contradicts the strict contraction bound required by [F4] for any $0\le q<1$. Also, [F2] with $r=1$ confirms divergence of the corresponding geometric series. [given, F2, F3, F4, algebra] ∎
## Remarks

The diagram uses a circle for the state and a rectangle for the action. The arrow from the state to the action indicates the sole policy choice; the return arrow is the transition with joint mass $p(s,1\mid s,a)=1$. The value of $\gamma$ is specified in the example statement and is not encoded by the graph. The verification does not rely on the diagram.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (s) at (0,0) {$s$};
  \node[rectangle,draw] (a) at (2,0) {$a$};
  \draw[->] (s) -- node[above] {choose $a$} (a);
  \draw[->] (a) to[bend left=35] node[below] {$p(s,1\mid s,a)=1$} (s);
\end{tikzpicture}
```
