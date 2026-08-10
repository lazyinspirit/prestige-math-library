---
id: ex-one-planar-graph-two-nonisomorphic-duals
kind: example
title: "Two plane embeddings of one connected planar graph have nonisomorphic dual multigraphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-dual-multigraph, thm-plane-dual-exists-and-double-dual-recovers-primal, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. A. Bondy and U. S. R. Murty, Graph Theory with Applications, plane duals"
      url: "https://math.arizona.edu/~kglasner/math443/BondyMurtyGTWA.pdf"
    - title: "Jeff Erickson, Planar Graphs"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf"
pipeline_run: null
---

## Example

The abstract graph below has two plane embeddings whose dual multigraphs are distinguished by their degree multisets. For a finite multigraph with the endpoint map of [[def-multigraph-loop-and-digraph]], count an ordinary incident edge once and a loop twice in the degree. An isomorphism of such endpoint-map structures is a pair of vertex and edge bijections preserving endpoints, and therefore preserves the degree multiset.

## Facts & Assumptions

**Given:** Let $G$ have vertices $s,t,a,b,c,w$. Its edges form three internally disjoint $s$-$t$ paths $P_1=st$, $P_2=sat$, and $P_3=sbct$, together with the bridge $sw$.

[L1] Every connected plane graph has a plane dual ([[thm-plane-dual-exists-and-double-dual-recovers-primal]]).

[F1] An endpoint-preserving multigraph isomorphism preserves the degree multiset because it bijects the incident edge-ends at every vertex, with a loop contributing two ends.

## Verification

**Proof technique:** constructive.

1.1 Embed the three $s$-$t$ paths in cyclic order. Write $f_{12},f_{23},f_{31}$ for the faces between the indicated path pairs. In the dual of [[def-plane-dual-multigraph]], the path lengths $1,2,3$ give respectively that many parallel dual edges between the two faces on each side of the path. Before accounting for $sw$, the degrees of $f_{12},f_{23},f_{31}$ are $3,5,4$. The bridge may be drawn into any one of these face sectors at $s$; it then gives a dual loop at that face. [L1, construct]

2.1 In one embedding draw $sw$ into $f_{12}$; the dual degree multiset is then $\{5,5,4\}$. In another draw it into $f_{31}$; the dual degree multiset is $\{3,5,6\}$. These multisets differ, since a loop contributes two to its incident degree. By [F1] the two dual multigraphs are nonisomorphic, although both arise from the same connected planar graph $G$. [L1, F1, step 1.1, discharge-construct] ∎
