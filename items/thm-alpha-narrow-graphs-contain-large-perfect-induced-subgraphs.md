---
id: thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs
kind: theorem
title: "An $\\alpha$-narrow graph contains a perfect induced subgraph of order at least $|V(G)|^{1/\\alpha}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-alpha-narrow-graph, def-good-function-on-a-graph, def-perfect-graph-for-the-bull-route, def-real-power, thm-real-power-laws, thm-real-power-continuity-and-derivatives, thm-monotonicity-from-the-derivative, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $G$ be a nonempty finite graph and let $\alpha>0$. If $G$ is
$\alpha$-narrow, then it has a perfect induced subgraph of order at least
$|V(G)|^{1/\alpha}$.

## Facts & Assumptions

**Given:** A nonempty finite graph $G$ and a real number $\alpha>0$.

[F1] A graph is $\alpha$-narrow when every good function $g$ satisfies $\sum_{v\in V(G)} g(v)^\alpha\le1$ ([[def-alpha-narrow-graph]]).

[F2] A good function has weight at most $1$ on every perfect induced subgraph ([[def-good-function-on-a-graph]], [[def-perfect-graph-for-the-bull-route]]).

[L1] For every real $\beta>0$, the function $x\mapsto x^\beta$ is increasing on $(0,\infty)$: its derivative is $\beta x^{\beta-1}$, the factor $x^{\beta-1}$ is positive for $x>0$ because real powers are defined through $\exp$ and $\exp$ is positive, and the derivative-sign theorem then gives monotonicity ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[cor-exponential-reciprocal-and-positivity]], [[thm-monotonicity-from-the-derivative]]).

[L2] For positive reals, $(a^r)^s=a^{rs}$ ([[thm-real-power-laws]]).

[F3] Real powers use the notation $x^{1/\alpha}$ for positive $x$ ([[def-real-power]]).

## Proof

**Proof technique:** direct.

1.1 Let $K$ be the maximum order of a perfect induced subgraph of $G$. Since $G$ is nonempty, every one-vertex induced subgraph is perfect, so $K\ge1$. Define $g(v)=1/K$ for every $v\in V(G)$. If $P$ is a perfect induced subgraph of $G$, then $|V(P)|\le K$, so $\sum_{v\in V(P)} g(v)=|V(P)|/K\le1$. Thus $g$ is good by [F2]. [F2, choose, algebra]

2.1 If $G$ is $\alpha$-narrow, [F1] applied to the good function of step 1.1 yields $|V(G)|/K^\alpha=\sum_{v\in V(G)} g(v)^\alpha\le1$. Therefore $K^\alpha\ge |V(G)|$. Since $K\ge1$ and $|V(G)|\ge1$, both sides are positive, so applying [L1] with exponent $1/\alpha>0$ and then using [L2] gives $K=(K^\alpha)^{1/\alpha}\ge |V(G)|^{1/\alpha}$. [step 1.1, F1, L1, L2, F3, algebra]

3.1 By definition of $K$, there is a perfect induced subgraph of order $K$, and step 2.1 gives $K\ge |V(G)|^{1/\alpha}$. [step 2.1] ∎
