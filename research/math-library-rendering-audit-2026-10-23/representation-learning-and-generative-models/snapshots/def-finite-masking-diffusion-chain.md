---
id: def-finite-masking-diffusion-chain
kind: definition
title: Finite masking diffusion chain
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
justified_by:
  - lem-finite-masking-chain-is-well-defined
axiom_use: No choice axiom is used; the state space and time horizon are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Subham Sekhar Sahoo et al., Simple and Effective Masked Diffusion Language Models, arXiv v1"
      url: https://arxiv.org/pdf/2406.07524v1
      locator: "§3.2.1, finite absorbing-state masking process"
    - title: "Jacob Austin et al., Structured Denoising Diffusion Models in Discrete State-Spaces"
      url: https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf
      locator: "§3, discrete transition matrices and absorbing-state model"
---

## Definition

Fix a finite nonempty clean vocabulary $V$, a mask symbol $m\notin V$, integers $L,N\ge1$, a grid $0=t_0<t_1<\cdots<t_N=1$, a survival schedule $1=\alpha_0>\alpha_1>\cdots>\alpha_N=0$, and a probability vector $\mu$ on $V^L$ (nonnegative entries summing to one). Put $S=(V\cup\{m\})^L$ and $r_j=\alpha_j/\alpha_{j-1}$ for $1\le j\le N$. On one coordinate, the step-$j$ transition from $v\in V$ stays at $v$ with probability $r_j$ and moves to $m$ with probability $1-r_j$; from $m$ it stays at $m$ with probability one. All other one-coordinate transitions have probability zero. The sequence-state transition from $z$ to $z'$ in $S$ is the product of these one-coordinate probabilities over the $L$ coordinates. Starting with $Z_0=X\sim\mu$, the conditional path mass is
$$\Pr(Z_0=z_0,\ldots,Z_N=z_N\mid X=x)=\mathbf 1_{\{z_0=x\}}\prod_{j=1}^N\prod_{i=1}^L a_j(z_{j-1,i},z_{j,i}),$$
where $a_j$ is the stated one-coordinate transition rule. Thus, conditional on the clean sequence, the coordinate trajectories are independent. At each step, the next-coordinate states are independent conditional on the preceding sequence state, with the transition probabilities above; successive states of a coordinate need not be independent. The mask is absorbing.

The following one-coordinate diagram records the three transition formulas at step $j$; each arrow label is its transition probability. The clean-state loop has probability $r_N=0$ at the terminal step $j=N$, so it is absent from the support there.

```tikz
\begin{tikzpicture}
  \node[draw,circle] (v) at (0,0) {$v\in V$};
  \node[draw,circle] (m) at (3,0) {$m$};
  \draw[->] (v.east) to[bend left=15] node[above] {$1-r_j$} (m.west);
  \draw[->] (v.north) .. controls (-0.8,1.4) and (0.8,1.4) .. node[above] {$r_j$} (v.north);
  \draw[->] (m.south) .. controls (2.2,-1.4) and (3.8,-1.4) .. node[below] {$1$} (m.south);
\end{tikzpicture}
```

## Definition references

[[def-measure-kernel-and-probability-kernel]]: a probability kernel assigns a probability measure to each state and has measurable evaluation functions; on the finite power-set space above this is exactly a row-stochastic transition matrix.
