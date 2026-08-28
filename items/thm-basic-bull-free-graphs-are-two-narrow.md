---
id: thm-basic-bull-free-graphs-are-two-narrow
kind: theorem
title: "Every basic bull-free graph is 2-narrow"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alpha-narrow-graph, prop-bull-free-graphs-are-complement-invariant, thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect, rem-weak-perfect-graph-theorem-for-the-bull-route, def-basic-and-composite-bull-free-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 4.4"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Every basic bull-free graph is two-narrow.

## Facts & Assumptions

**Given:** A basic bull-free graph $G$.

[F1] A graph is two-narrow exactly when every good function $g$ on it satisfies $\sum_{v\in V(G)} g(v)^2\le1$ ([[def-alpha-narrow-graph]]).

[L1] For every vertex $u$, either $G[N(u)]$ or $G[V(G)\setminus N[u]]$ is perfect ([[thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect]]).

[L2] Perfectness is complement-invariant ([[rem-weak-perfect-graph-theorem-for-the-bull-route]]).

[L3] Bull-freeness, hence basicness, is complement-invariant ([[prop-bull-free-graphs-are-complement-invariant]], [[def-basic-and-composite-bull-free-graphs]]).

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $|V(G)|$. Let $g$ be a good function on $G$. If $|V(G)|\le1$, then $\sum_v g(v)^2\le1$ because every one-vertex graph is perfect and therefore the good-function condition already gives $g(v)\le1$. Assume now $|V(G)|\ge2$, and choose $u\in V(G)$ with $g(u)$ maximal. Since every two-vertex induced subgraph is perfect, the good-function inequality implies $g(u)+g(v)\le1$ for every $v\ne u$, so if $g(u)=1$ then all other weights are $0$ and the desired inequality is immediate. Thus we may assume $g(u)<1$. By [L1], [L2], and [L3], after replacing $G$ by its complement if necessary we may assume that $G[N(u)]$ is perfect; this replacement preserves basicness, good functions, and the two-narrow inequality. Put $N=N(u)$ and $M=V(G)\setminus N[u]$. Any composite witness inside $G[M]$ would also be a composite witness inside $G$, so $G[M]$ is basic; by induction it is two-narrow. [F1, L1, L2, L3, choose, induction, algebra]

2.1 For every perfect induced subgraph $P$ of $G[M]$, the graph $G[P\cup\{u\}]$ is perfect because $u$ is anticomplete to $P$ and adjoining an isolated vertex preserves the equalities $\chi=\omega$ on every induced subgraph. Hence the function $f(v)=g(v)/(1-g(u))$ on $M$ is good on $G[M]$, so induction and [F1] give $\sum_{v\in M} g(v)^2\le (1-g(u))^2$. Also $G[N\cup\{u\}]$ is perfect because $u$ is complete to $N$ and adjoining a universal vertex raises both $\chi$ and $\omega$ by $1$. Thus the good-function inequality gives $\sum_{v\in N} g(v)\le1-g(u)$. Since $g(u)$ is maximal, $g(v)^2\le g(u)g(v)$ for every $v\in N$, and therefore $\sum_{v\in N} g(v)^2\le g(u)(1-g(u))$. [step 1.1, F1, algebra]

3.1 Combining the contributions of $u$, $M$, and $N$ gives $\sum_{v\in V(G)} g(v)^2\le g(u)^2+(1-g(u))^2+g(u)(1-g(u))=1-g(u)+g(u)^2\le1$. Since $g$ was an arbitrary good function, [F1] shows that $G$ is two-narrow. [step 2.1, F1, algebra, discharge-induction] ∎
