---
id: lem-perfect-vertex-deletions-imply-two-narrowness
kind: lemma
title: "Perfect vertex deletions imply 2-narrowness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-alpha-narrow-graph, def-good-function-on-a-graph, def-perfect-graph-for-the-bull-route]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 2 (good functions and narrowness)"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: 'Bounded delegated author review: research/ap-prerequisite-followup/agent-02-receipts.jsonl;
      root proof reading: research/ap-prerequisite-followup/root-local-proof-review.md.
      Not an independent judge verdict or owner-human audit.'
    delegated_by: user
---

## Statement

Let $G$ be a finite graph with at least three vertices. If $G-v$ is perfect
for every vertex $v$, then $G$ is two-narrow.

## Facts & Assumptions

**Given:** A finite graph $G$ with $n=|V(G)|\ge3$ such that every
single-vertex deletion $G-v$ is perfect.

[F1] A good function is nonnegative and has total weight at most $1$ on every
perfect induced subgraph ([[def-good-function-on-a-graph]],
[[def-perfect-graph-for-the-bull-route]]).

[F2] Two-narrowness means that every good function has sum of squared weights
at most $1$ ([[def-alpha-narrow-graph]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be any good function on $G$. Choose a vertex $v_0$ with minimum weight $m=g(v_0)$, and put $A=\sum_{v\ne v_0}g(v)$. [F1, construct]

2.1 Since $G-v_0$ is perfect, [F1] gives $A\le1$. The other $n-1$ weights are each at least $m\ge0$, so $A\ge(n-1)m$. For any $u\ne v_0$, the remaining $n-2$ weights in $A$ are at least $m$, hence $g(u)\le A-(n-2)m$. [F1, step 1.1, algebra]

3.1 Consequently $\sum_{v\in V(G)}g(v)^2\le m^2+(A-(n-2)m)A=A^2-m((n-2)A-m)\le A^2\le1$. Indeed, $(n-2)A\ge(n-2)(n-1)m\ge m$ because $n\ge3$ and $m\ge0$. [step 2.1, algebra]

4.1 This holds for every good $g$, so $G$ is two-narrow by [F2]. [step 3.1, F2] ∎
