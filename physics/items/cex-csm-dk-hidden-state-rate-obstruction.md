---
id: cex-csm-dk-hidden-state-rate-obstruction
kind: counterexample
title: "Reversible finite chain with hidden-state exit-rate obstruction"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-finite-reversible-rate-model
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - thm-csm-dk-strong-lumpability
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  thm-csm-dk-nonexplosive-ctmc-and-gap: mathematical-premise
  thm-csm-dk-strong-lumpability: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2: finite continuous-time transition rates and forward equations; all example rates are checked directly."
---

## Statement refuted

Every finite reversible stochastic rate model induces, for every partition of its states, one time-homogeneous Markov law for the block process that is valid for all microscopic initial preparations.

## Facts & Assumptions

**Given:** The Axiom of Choice, a three-state rate model, and the partition below.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: a valid model has a finite state set, positive Gibbs weights, connected bidirectional positive-rate edges, and rates satisfying detailed balance.

[F2] [[thm-csm-dk-nonexplosive-ctmc-and-gap]]: the transition matrix is $P_t=e^{tQ}$ and its finite matrix exponential has the expansion $P_t=I+tQ+O(t^2)$ as $t\downarrow0$.

[F3] [[thm-csm-dk-strong-lumpability]]: a single time-homogeneous block generator works for every microscopic initial law exactly when each outgoing block-rate sum is constant within its source block.

## Counterexample

**Given:** [A1], [F1]–[F3]. Take $E=\{1,2,3\}$, $e_1=e_2=e_3=0$, $\beta=1$, and rates
$$w_{12}=w_{21}=1,\qquad w_{23}=w_{32}=1,\qquad w_{13}=w_{31}=0.$$
Let $C_1=\{1,2\}$ and $C_2=\{3\}$.

1.1 The positive-rate graph is the connected path $1\leftrightarrow2\leftrightarrow3$. Equal state energies give $\pi=(1/3,1/3,1/3)$, and every positive edge has equal forward and reverse rates, so $\pi_aw_{ab}=\pi_bw_{ba}$. Thus [F1] holds. [F1, construct, algebra]

1.2 The exit rate from state $1$ to $C_2$ is $q(1,C_2)=w_{13}=0$, while from state $2$ it is $q(2,C_2)=w_{23}=1$. Starting with observed block $C_1$, [F2] gives $\Pr_1(\bar X_h=C_2)=O(h^2)$ and $\Pr_2(\bar X_h=C_2)=h+O(h^2)$, because a transition from $1$ to $3$ needs at least two jumps, while the direct $2\to3$ rate is $1$. The two preparations have the same initial block but different first-order block-transition probabilities. [A1, F1, F2, algebra]

2.1 Therefore no single transition law on $\{C_1,C_2\}$ can govern the projection for both microscopic preparations. Equivalently, the required block-rate constancy in [F3] fails. This refutes the universal all-preparations claim; it makes no assertion about special initial preparations. [A1, F2, F3, step 1.1, step 1.2] ∎

## Remarks

The following graph displays the same finite model. Each double arrow denotes two directed transitions, one in each direction, with the rate label shown; the missing $1$–$3$ edge means both corresponding rates are zero. Node labels are the states, not coordinates of an observed trajectory.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (a) at (0,0) {$1$};
  \node[circle,draw] (b) at (3,0) {$2$};
  \node[circle,draw] (c) at (6,0) {$3$};
  \draw[<->] (a) -- node[above] {$w_{12}=w_{21}=1$} (b);
  \draw[<->] (b) -- node[above] {$w_{23}=w_{32}=1$} (c);
\end{tikzpicture}
```

The proof uses the explicitly listed rates and generator expansion, not the drawing.
