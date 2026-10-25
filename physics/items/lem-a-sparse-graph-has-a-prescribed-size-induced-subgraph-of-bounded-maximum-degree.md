---
id: lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree
kind: lemma
title: "A sparse graph has a prescribed-size induced subgraph of bounded maximum degree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 4.2"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph with at most

$$\epsilon |V(G)|(|V(G)|-1)/2$$

edges, where $\epsilon\geq 0$. If $m$ is an integer with
$1\leq m\leq (|V(G)|+1)/2$, then there exists $X\subseteq V(G)$ with $|X|=m$
such that the induced subgraph $G[X]$ has maximum degree at most
$4\epsilon(m-1)$.

## Facts & Assumptions

**Given:** A finite graph $G$, a real $\epsilon\geq 0$, and an integer $m$ with $1\leq m\leq (|V(G)|+1)/2$, such that $G$ has at most $\epsilon |V(G)|(|V(G)|-1)/2$ edges.

## Proof

**Proof technique:** direct.

1.1 If $m=1$, then any single vertex set $X$ works, because a one-vertex graph has maximum degree $0=4\epsilon(m-1)$. [given]

1.2 If $\epsilon=0$, then $G$ has no edges, so any $m$-vertex set $X$ has maximum degree $0=4\epsilon(m-1)$. Hence we may assume from now on that $m\geq 2$ and $\epsilon>0$. Average the edge count over all $(2m-1)$-vertex subsets $Y\subseteq V(G)$. Some such $Y$ satisfies $e(G[Y])\leq \epsilon(2m-1)(m-1)$, because the expected edge count in a random $(2m-1)$-subset is exactly the global edge count multiplied by the probability that both endpoints of a given edge are chosen. [given, algebra, cases]

2.1 In this chosen set $Y$, fewer than $m$ vertices have degree greater than $4\epsilon(m-1)$. Otherwise at least $m$ vertices would contribute more than $4\epsilon(m-1)$ each to the degree sum, giving $2e(G[Y])>4\epsilon m(m-1)>2\epsilon(2m-1)(m-1)$, contrary to step 1.2. [step 1.2, algebra]

3.1 Delete all vertices of $Y$ whose degree in $G[Y]$ exceeds $4\epsilon(m-1)$. By step 2.1 at least $m$ vertices remain; choose any $m$ of them and call the resulting set $X$. Every vertex of $G[X]$ has degree at most its degree in $G[Y]$, so $\Delta(G[X])\leq 4\epsilon(m-1)$. [step 2.1, choose]

4.1 This $X$ has the required size and degree bound. [step 1.1, step 1.2, step 3.1, cases-exhaustive] ∎
