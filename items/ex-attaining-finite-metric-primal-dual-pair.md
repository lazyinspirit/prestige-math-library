---
id: ex-attaining-finite-metric-primal-dual-pair
kind: example
title: "An attaining coupling and potential on a three-point metric space"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-metric-space
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - thm-finite-metric-transport-duality
justified_by: []
axiom_use: "No choice principle is used; the coupling and potential are explicit finite vectors."
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §§3.3 and 6.1"
      url: "https://ar5iv.labs.arxiv.org/html/1803.00567"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.3, PDF pp. 5–6"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Example

Let $X=\{x_1,x_2,x_3\}$ have the metric with zero diagonal and $d(x_1,x_2)=d(x_2,x_3)=1$, $d(x_1,x_3)=2$, with symmetric values. For $p=(1/2,0,1/2)$ and $q=(0,1,0)$, the coupling
$$
\pi=\begin{pmatrix}0&1/2&0\\0&0&0\\0&1/2&0\end{pmatrix}
$$
and normalized potential $f=(0,-1,0)$ both attain value $1$.

The straight segments show the two distance-one edges, the node labels give the source and target masses, and the curved arrows represent the two positive coupling entries.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,circle] (x1) at (0,0) {$x_1:\ (p_1,q_1)=(1/2,0)$};
\node[draw,circle] (x2) at (4,0) {$x_2:\ (p_2,q_2)=(0,1)$};
\node[draw,circle] (x3) at (8,0) {$x_3:\ (p_3,q_3)=(1/2,0)$};
\draw (x1) -- node[above] {$d(x_1,x_2)=1$} (x2);
\draw (x2) -- node[above] {$d(x_2,x_3)=1$} (x3);
\draw[->,bend right=35] (x1) to node[below] {$\pi_{12}=1/2$} (x2);
\draw[->,bend left=35] (x3) to node[below] {$\pi_{32}=1/2$} (x2);
\end{tikzpicture}
```

## Example references

[Peyré and Cuturi, Computational Optimal Transport, §§3.3 and 6.1](https://ar5iv.labs.arxiv.org/html/1803.00567)

[Santambrogio, Introduction to Optimal Transport Theory, §1.3](https://arxiv.org/pdf/1009.3856)

## Facts & Assumptions

**Given:** The specified three-point distance matrix and the probability vectors in the Example.

[F1] The finite-metric theorem equates the minimum coupling cost and maximum normalized 1-Lipschitz objective and gives complementary slackness on positive coupling entries ([[thm-finite-metric-transport-duality]]).

[F2] A coupling is a nonnegative matrix with prescribed row and column sums, and its cost is the finite sum of distance times transported mass ([[def-finite-metric-coupling]], [[def-finite-metric-wasserstein-one]]).

[F3] A probability vector has nonnegative coordinates summing to one ([[def-finite-probability-vector]]).

## Verification

1.1 The specified distances are symmetric, vanish exactly on equal points, and are positive for distinct points. For the three distinct points, the triangle inequalities are $2\le1+1$, $1\le2+1$, and $1\le1+2$; when a point repeats, each inequality is $0\le d+d$ or $d\le d+0$. Thus this is a metric. The displayed matrix is nonnegative, has row sums $(1/2,0,1/2)$ and column sums $(0,1,0)$, and has cost $(1/2)\cdot1+(1/2)\cdot1=1$. [given, F2, F3, algebra]

1.2 The vector $f=(0,-1,0)$ has $f_1=0$. Its pairwise differences have magnitudes $1,1,0$, bounded respectively by distances $1,1,2$. Its objective is $(1/2)\cdot0-1\cdot(-1)+(1/2)\cdot0=1$. [given, F3, algebra]

2.1 The feasible plan and potential in steps 1.1 and 1.2 have the same value. By [F1], the primal optimum is at most the plan cost, the dual optimum is at least the potential value, and the two optima are equal; hence both are attained with value $1$. The positive entries are $\pi_{12}=\pi_{32}=1/2$, and they satisfy $f_1-f_2=d(x_1,x_2)=1$ and $f_3-f_2=d(x_3,x_2)=1$, as complementary slackness requires. [step 1.1, step 1.2, F1, algebra] ∎
