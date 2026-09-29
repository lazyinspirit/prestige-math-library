---
id: ex-period-two-of-simple-random-walk-on-a-bipartite-graph
kind: example
title: "Period two on a bipartite graph"
status: draft
origin: pipeline
deps:
  - def-period-of-a-state
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-accessibility-communication-and-irreducibility
  - lem-period-is-constant-on-a-communicating-class
proof_strategy: direct
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§1.3, Lemma 1.6 and period-two partition/even-cycle discussion, printed pp. 7–8 (PDF pp. 23–24); §1.4 simple random walk on graphs, printed p. 8 (PDF p. 24). The general locally finite bipartite claim is derived locally."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Example

Let $G=(V,F)$ be an at most countable simple undirected graph that is
connected, locally finite, bipartite with $V=V_0\sqcup V_1$, and has no
isolated vertices. For $x\in V$, write
$N(x)=\{y\in V:\{x,y\}\in F\}$ and $\deg(x)=|N(x)|$. Define simple random
walk by
$$p(x,y)=\begin{cases}1/\deg(x),&y\in N(x),\\0,&y\notin N(x).\end{cases}$$
Then every vertex has period $d(x)=2$.

## Facts & Assumptions

**Given:** The graph and transition matrix $p$ specified above. Local finiteness
and the absence of isolated vertices mean $1\le\deg(x)<\infty$ for every
$x\in V$.

[F1] The $n$-step probabilities satisfy $p^{(n)}(x,y)=K^n(x,\{y\})$ and
$p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$.
([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] For $m,n\ge0$,
$p^{(m+n)}(x,y)=\sum_{z\in V}p^{(m)}(x,z)p^{(n)}(z,y)$.
([[lem-matrix-chapman-kolmogorov-equations]])

[F3] States communicate when each is accessible from the other, and
$x\to y$ means $p^{(n)}(x,y)>0$ for some $n\in\mathbb N_0$.
([[def-accessibility-communication-and-irreducibility]])

[F4] $R_x=\{n\in\mathbb N:n\ge1,\ p^{(n)}(x,x)>0\}$, and, when it is
nonempty, $d(x)$ is the greatest positive integer dividing every element of
$R_x$.
([[def-period-of-a-state]])

[F5] If $x$ and $y$ communicate, then $d(x)=d(y)$.
([[lem-period-is-constant-on-a-communicating-class]])

## Proof

**Proof technique:** use bipartite parity and a two-step backtrack at one
vertex, then transfer the period across the connected graph.

1.1 If $V=\varnothing$, there is no vertex to check. Otherwise fix $x_0\in V$. Every degree is finite and positive, so the displayed transition probabilities give a stochastic row at each vertex and are positive exactly on graph edges. [given]

2.1 Let $x_0\in V_i$. Induction on $n$ using [F1] and [F2] shows that $p^{(n)}(x_0,z)>0$ only for $z\in V_i$ when $n$ is even and for $z\in V_{1-i}$ when $n$ is odd: the base row is the identity row, and in the induction step Chapman–Kolmogorov together with the fact that every positive one-step transition crosses the bipartition flips the support side. Therefore $p^{(n)}(x_0,x_0)=0$ for every odd $n\ge1$, so every element of $R_{x_0}$ is even. [F1, F2, F4, step 1.1, given]

2.2 Since $x_0$ is not isolated, choose a neighbor $z$. Undirectedness gives $p(x_0,z)=1/\deg(x_0)>0$ and $p(z,x_0)=1/\deg(z)>0$. The $m=n=1$ case of [F2] yields $p^{(2)}(x_0,x_0)\ge p(x_0,z)p(z,x_0)>0$, so $2\in R_{x_0}$. [F2, F4, step 1.1, given]

3.1 By [F4], the positive return set at $x_0$ contains $2$ and consists only of even integers. Thus $2$ divides every return time, while every common positive divisor must divide the member $2$; hence the greatest such divisor is $d(x_0)=2$. [F4, step 2.1, step 2.2, given]

4.1 Fix any $y\in V$. Connectedness gives a finite edge path $x_0=v_0,v_1,\ldots,v_k=y$. If $k\ge1$, repeated application of [F2] gives $p^{(k)}(x_0,y)\ge\prod_{j=0}^{k-1}p(v_j,v_{j+1})>0$; if $k=0$, [F1] gives $p^{(0)}(x_0,y)=1$. Reversing the path gives positive accessibility from $y$ to $x_0$ as well. Thus $x_0$ and $y$ communicate by [F3], and [F5] yields $d(y)=d(x_0)=2$. Since $y$ was arbitrary, every state has period two. [F1, F2, F3, F5, step 3.1, given]

5.1 The empty graph has no vertices; a one-vertex graph would have an isolated vertex and is excluded. Degree-one vertices are allowed, and their immediate backtrack still gives a positive two-step return. The zero transitions within each bipartition side force the odd-time vanishing in step 2.1. Period uses positive return times, so the $n=0$ identity in [F1] does not enter $R_x$; steps 2.1–3.1 establish the positive-time gcd. The neighbor and path witnesses are used only for each fixed vertex as needed, so the argument uses no choice function or AC. There is no iff claim. [F1, F4, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, given] ∎

## Source notes

LPW §1.3, printed pp. 7–8 (PDF pp. 23–24), defines period using positive return times, proves period invariance for irreducible chains in Lemma 1.6, and explains alternating support classes for a chain of period two; its Example 1.8 uses an even cycle. Section 1.4, printed p. 8 (PDF p. 24), defines simple random walk on an undirected graph by choosing a neighbor uniformly. These finite-chain passages do not prove the general locally finite bipartite-graph claim. The row definition, parity induction, backtrack, and connected-path transfer needed here are made explicit above.
