---
id: ex-induced-co-e-witnesses-for-both-forbidden-path-runs
kind: example
title: "The two induced co-$E$ witnesses behind the forbidden path runs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-e-graph-and-co-e-graph, def-graph-walk-trail-path-and-cycle, lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours]
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
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 8"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

In the ambient configuration of the preceding lemma, an induced $a-b-c$ with $u$ adjacent only to $a$ gives the six-vertex witness on $\{x,y,u,a,b,c\}$. An induced $a-b-c-d$ with $u$ adjacent to $a,b,c$ only gives the six-vertex witness on $\{y,u,a,b,c,d\}$. The other vertex $x$ of the ambient complete nonedge pair does not belong to this second witness.

## Facts & Assumptions

**Given:** The two configurations in the Example.

[F1] Co-$E$ is the complement of the stated $E$ graph ([[def-e-graph-and-co-e-graph]]).

## Proof

**Proof technique:** direct.

1.1 In the first configuration the nonedges are exactly $xy,yu,uc,ca,ub$, the $E$-edges in the order $(p_1,p_2,p_3,p_4,p_5,q)=(x,y,u,c,a,b)$. In the second they are exactly $ca,ad,du,uy,db$, the $E$-edges in the order $(p_1,p_2,p_3,p_4,p_5,q)=(c,a,d,u,y,b)$. Hence both graphs are co-$E$. [F1, algebra]

2.1 Their displayed paths are induced and the mixed vertex has respectively two consecutive nonneighbours and three consecutive neighbours. [step 1.1]

3.1 This verifies both finite witnesses. [step 2.1] ∎
