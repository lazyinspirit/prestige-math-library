---
id: cex-the-five-cycle-is-bull-free-but-not-perfect
kind: counterexample
title: "The five-cycle is bull-free but not perfect"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bull-graph, def-bull-free-graph, def-clique-stable-set-and-numbers, def-perfect-graph-for-the-bull-route, def-proper-vertex-colouring-and-chromatic-number, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Sections 1-2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement refuted

Every bull-free graph is perfect.

## Facts & Assumptions

**Given:** The cycle graph $C_5$.

[F1] The bull contains a triangle ([[def-bull-graph]], [[def-bull-free-graph]]).

[F2] The graph $C_5$ is the five-vertex cycle ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F3] A graph is perfect when every induced subgraph satisfies $\chi=\omega$ ([[def-perfect-graph-for-the-bull-route]]).

## Counterexample

**Proof technique:** direct.

1.1 The graph $C_5$ is triangle-free by [F2], whereas every bull contains a triangle by [F1]. So $C_5$ contains no induced bull and is bull-free. [F1, F2]

1.2 In $C_5$, the largest clique has size $2$, while a proper vertex colouring needs $3$ colours. Hence $\omega(C_5)=2<3=\chi(C_5)$, so [F3] shows that $C_5$ is not perfect. [F2, F3, algebra]

2.1 Therefore $C_5$ is a bull-free graph that is not perfect, refuting the claim. [step 1.1, step 1.2] ∎
