---
id: ex-turan-graph-t-ten-three
kind: example
title: "$T_{10,3}=K_{3,3,4}$ has $33$ edges and is the unique $10$-vertex $K_4$-extremal graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-turan-graph-edge-count-and-balance, thm-turan-exact-and-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Example

The balanced three-partite graph on ten vertices is

$$T_{10,3}=K_{3,3,4},$$

and it has $33$ edges. It is the unique extremal graph for forbidding $K_4$ on ten vertices.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Among complete $r$-partite graphs on $n$ vertices, $T_{n,r}$ has maximum edge count, with equality exactly for balanced part sizes ([[lem-turan-graph-edge-count-and-balance]]).

[F2] For $n\in\mathbb N$ and $r\ge1$, Turán's theorem gives $\operatorname{ex}(n,K_{r+1})=e(T_{n,r})$, and an $n$-vertex $K_{r+1}$-free graph attains equality exactly when it is isomorphic to $T_{n,r}$ ([[thm-turan-exact-and-unique]]).

## Verification

**Proof technique:** compute by the two edge-count formulas.

1.1 Division gives $10=3\cdot3+1$, so the balanced sizes are $4,3,3$. Counting cross-part edges gives $4\cdot3+4\cdot3+3\cdot3=33$; equivalently $\binom{10}{2}-\binom42-2\binom32=45-6-6=33$. [given, algebra, F1]

2.1 Turán's theorem with $r=3$ says this is $\operatorname{ex}(10,K_4)$ and that equality occurs only for $T_{10,3}$. [step 1.1, given, F2] ∎
