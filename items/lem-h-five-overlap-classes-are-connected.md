---
id: lem-h-five-overlap-classes-are-connected
kind: lemma
title: "Every $H_5$-overlap class is connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-five-overlap-chain-relation-in-a-comb-block, def-h-zero-through-h-five, def-connected-graph-and-connected-component]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Every $H_5$-overlap class induces a connected graph.

## Facts & Assumptions

**Given:** An $H_5$-overlap class $C$ in one comb block.

[F1] Two vertices in $C$ are joined by a finite chain of induced $H_5$ copies with successive copies sharing a vertex ([[def-h-five-overlap-chain-relation-in-a-comb-block]]).

[F2] The graph $H_5$ is connected ([[def-h-zero-through-h-five]]).

## Proof

**Proof technique:** direct.

1.1 Let $r,s\in C$. By [F1], choose an overlap chain from a copy containing $r$ to a copy containing $s$. Within each copy, [F2] gives paths from its entering vertex to its shared vertex and then to its exiting vertex. [F1, F2, choose]

2.1 Concatenating these paths at the shared vertices is a walk in $G[C]$ from $r$ to $s$, and deleting repetitions gives a path. Thus every two vertices of $C$ are connected. [step 1.1, F2, algebra]

3.1 Hence $G[C]$ is connected. [step 2.1] ∎
