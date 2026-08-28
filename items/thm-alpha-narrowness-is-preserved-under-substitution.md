---
id: thm-alpha-narrowness-is-preserved-under-substitution
kind: theorem
title: "Substituting two $\\alpha$-narrow graphs yields another $\\alpha$-narrow graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alpha-narrow-graph, def-substitution-of-a-graph-for-a-vertex, rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, Theorem 2.5"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, proof of Theorem 1.3"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Let $\alpha>0$. If $H_1$ and $H_2$ are $\alpha$-narrow finite graphs and the
substitution $G=H_1[v\to H_2]$ is defined, then $G$ is $\alpha$-narrow.

## Facts & Assumptions

**Given:** A real number $\alpha>0$, $\alpha$-narrow finite graphs $H_1$ and $H_2$, and a defined substitution $G=H_1[v\to H_2]$.

[F1] A graph is $\alpha$-narrow when every good function has $\alpha$-power sum at most $1$ ([[def-alpha-narrow-graph]]).

[F2] In a substitution, every vertex of the substituted graph $H_2$ has exactly the outside adjacencies that the vertex $v$ had in $H_1$ ([[def-substitution-of-a-graph-for-a-vertex]]).

[L1] Substituting a perfect graph for a vertex of a perfect graph preserves perfection ([[rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be a good function on $G$. Let $\mathcal P_2$ be the family of perfect induced subgraphs of $H_2$, and let $K=\max_{P\in\mathcal P_2}\sum_{x\in V(P)} g(x)$. If $K=0$, then every one-vertex induced subgraph of $H_2$ has weight $0$, so $g$ vanishes on $V(H_2)$. Choose any vertex $x\in V(H_2)$, define $g_1$ on $H_1$ by copying $g$ outside $v$ and setting $g_1(v)=0$, and note from [F2] that every perfect induced subgraph of $H_1$ corresponds either to the same perfect induced subgraph of $G$ or to one obtained by replacing $v$ with $x$. Hence $g_1$ is good on $H_1$, so [F1] gives $\sum_{y\in V(H_1)} g_1(y)^\alpha\le1$. Because $g$ vanishes on $H_2$, this is exactly $\sum_{z\in V(G)} g(z)^\alpha\le1$. [F1, F2, choose, algebra]

1.2 Assume now that $K>0$. Define $g_1$ on $H_1$ by copying $g$ outside $v$ and setting $g_1(v)=K$. If $Q$ is a perfect induced subgraph of $H_1$ not containing $v$, then it appears unchanged in $G$ and has total $g_1$-weight at most $1$. If $v\in V(Q)$, choose $P\in\mathcal P_2$ with $\sum_{x\in V(P)} g(x)=K$; then [L1] makes the substitution $Q[v\to P]$ a perfect induced subgraph of $G$, so $\sum_{y\in V(Q)} g_1(y)=\sum_{y\in V(Q)\setminus\{v\}}g(y)+K=\sum_{z\in V(Q[v\to P])} g(z)\le1$. Thus $g_1$ is good on $H_1$. Likewise $g_2:=g/K$ is good on $H_2$ by the definition of $K$. Applying [F1] to $g_1$ and $g_2$ gives $\sum_{y\in V(H_1)\setminus\{v\}} g(y)^\alpha+K^\alpha\le1$ and $\sum_{x\in V(H_2)} g(x)^\alpha\le K^\alpha$. [F1, L1, choose, algebra]

2.1 In the case $K>0$, step 1.2 yields $\sum_{z\in V(G)} g(z)^\alpha=\sum_{y\in V(H_1)\setminus\{v\}} g(y)^\alpha+\sum_{x\in V(H_2)} g(x)^\alpha\le1$. Together with step 1.1, this proves that every good function on $G$ has $\alpha$-power sum at most $1$. Therefore [F1] shows that $G$ is $\alpha$-narrow. [step 1.1, step 1.2, F1] ∎
