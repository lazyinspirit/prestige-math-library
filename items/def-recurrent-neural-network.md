---
id: def-recurrent-neural-network
kind: definition
title: Shared-parameter recurrent neural network
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
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
    - title: "Goodfellow, Bengio, and Courville, Deep Learning, Chapter 10, §§10.1–10.2"
      url: "https://www.deeplearningbook.org/contents/rnn"
---

## Definition

Fix positive finite dimensions $d_x,d_h,d_y$, a finite horizon $T\in\mathbb N$, a parameter set $\Theta$, an initial state $h_0\in\mathbb R^{d_h}$, and inputs $x_1,\ldots,x_T\in\mathbb R^{d_x}$. A shared-parameter recurrent neural network is specified by a state map $F:\mathbb R^{d_h}\times\mathbb R^{d_x}\times\Theta\to\mathbb R^{d_h}$ and, optionally, an output map $G:\mathbb R^{d_h}\times\mathbb R^{d_x}\times\Theta\to\mathbb R^{d_y}$. For a fixed $\theta\in\Theta$, it computes $h_t=F(h_{t-1},x_t;\theta)$ and, when $G$ is supplied, $y_t=G(h_t,x_t;\theta)$ for $1\le t\le T$, using the same $\theta$ at every time. Its unrolling is the finite directed acyclic computation graph whose vertices are the input, state, output, and map-evaluation occurrences and whose edges record which values each evaluation uses. The folded schematic may show a feedback edge, while the time-indexed unrolled graph is acyclic.

For horizon $T=2$, the following TikZ graph shows the dependency edges in the unrolling. The boxes $F_1,F_2$ are two time-indexed occurrences of the same map $F$; the dashed edges indicate that both occurrences receive the identical parameter $\theta$. The graph omits the optional output map $G$.

\begin{center}
\begin{tikzpicture}[>=stealth, every node/.style={draw, rounded corners, inner sep=4pt}]
  \node (h0) at (0,0) {$h_0$};
  \node (x1) at (0,-1.1) {$x_1$};
  \node (f1) at (2,-0.55) {$F_1$};
  \node (h1) at (4,-0.55) {$h_1$};
  \node (x2) at (4,-1.65) {$x_2$};
  \node (f2) at (6,-1.1) {$F_2$};
  \node (h2) at (8,-1.1) {$h_2$};
  \node (theta) at (4,1) {$\theta$};
  \draw[->] (h0) -- (f1);
  \draw[->] (x1) -- (f1);
  \draw[->] (f1) -- (h1);
  \draw[->] (h1) -- (f2);
  \draw[->] (x2) -- (f2);
  \draw[->] (f2) -- (h2);
  \draw[->, dashed] (theta) -- (f1);
  \draw[->, dashed] (theta) -- (f2);
\end{tikzpicture}
\end{center}

## Definition references

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 10, §§10.1–10.2](https://www.deeplearningbook.org/contents/rnn)
