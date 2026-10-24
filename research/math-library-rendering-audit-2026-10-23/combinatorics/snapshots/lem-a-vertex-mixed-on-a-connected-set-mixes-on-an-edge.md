---
id: lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge
kind: lemma
title: "A vertex mixed on a connected set has opposite adjacency on some edge of that set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-connected-graph-and-connected-component, def-graph-walk-trail-path-and-cycle, def-edges-between-sets-and-pure-mixed-pairs]
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
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Claim 6.4.3"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

If $S$ induces a connected graph and $u\notin S$ is mixed on $S$, then some
edge $ab$ of $G[S]$ has exactly one endpoint adjacent to $u$.

## Facts & Assumptions

**Given:** A connected set $S$ and a vertex $u$ mixed on it.

[F1] Mixedness supplies a neighbour and a nonneighbour of $u$ in $S$ ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[F2] Connected vertices are joined by a path in the induced graph ([[def-connected-graph-and-connected-component]]).

## Proof

**Proof technique:** direct.

1.1 Choose $a,b\in S$ with $ua$ an edge and $ub$ a nonedge by [F1], and choose an $a$--$b$ path in $G[S]$ by [F2]. [F1, F2, choose]

2.1 Along this finite path, the adjacency indicator to $u$ begins at $1$ and ends at $0$, so it first changes across one consecutive pair. That pair is an edge of $G[S]$ with opposite adjacencies to $u$. [step 1.1, algebra]

3.1 This is the required mixed edge. [step 2.1] ∎
