---
id: ex-the-bird-theorem-properly-extends-the-bull-case
kind: example
title: "The Bird theorem reaches an induced bull witness"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-bird-graph-has-the-erdos-hajnal-property, def-bird-graph-and-co-bird-graph, def-bull-graph, def-h-free-and-family-free-graph, def-induced-embedding-and-induced-copy, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, cor-the-bull-graph-has-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Introduction and Figure 5"
      url: "https://arxiv.org/pdf/2606.06258v2"
---

## Example

The five-vertex bull is Bird-free but is not bull-free. Every bull-free graph is
Bird-free, since deleting Bird's added leaf $w$ leaves an induced bull. Hence
the Bird-free theorem covers a strictly larger forbidden-pattern class than the
earlier bull-free theorem.

## Facts & Assumptions

**Given:** The Bird graph on $\{x_1,x_2,x_3,y,z,w\}$, the bull on $\{x_1,x_2,x_3,y,z\}$, and an arbitrary finite graph $G$.

[L1] The Bird graph has vertex set $\{x_1,x_2,x_3,y,z,w\}$ and edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}$, so the vertices $\{x_1,x_2,x_3,y,z\}$ span the bull and $w$ is an added leaf ([[def-bird-graph-and-co-bird-graph]]).

[L2] The bull has vertex set $\{x_1,x_2,x_3,y,z\}$ and edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z\}$ ([[def-bull-graph]]).

[L3] An induced embedding of $H$ in $G$ is an injection $V(H)\to V(G)$ preserving adjacency and nonadjacency on distinct pairs; $G$ is $H$-free when no such embedding exists ([[def-induced-embedding-and-induced-copy]], [[def-h-free-and-family-free-graph]]).

[L4] There is $\epsilon_B>0$ such that every nonempty Bird-free graph has a clique or stable set of size at least $|V(G)|^{\epsilon_B}$ ([[thm-the-bird-graph-has-the-erdos-hajnal-property]]).

[L5] The bull has the Erdős-Hajnal property, and an Erdős-Hajnal constant for the bull-free class is a positive exponent bounding the homogeneous number of every nonempty member from below by $|V(G)|$ to that exponent ([[cor-the-bull-graph-has-the-erdos-hajnal-property]], [[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]]).

## Verification

**Proof technique:** direct finite checks of the two witnesses and the induced-bull restriction.

1.1 The identity map on $\{x_1,x_2,x_3,y,z\}$ preserves adjacency and nonadjacency, so it is an induced embedding of the bull in itself by [L3]; hence the bull is not bull-free. [L2, L3]

1.2 The six-element set $\{x_1,x_2,x_3,y,z,w\}$ has no injection into the five-element set $\{x_1,x_2,x_3,y,z\}$; hence no induced embedding of Bird in the bull exists, and the bull is Bird-free. [L1, L2, L3]

1.3 Suppose the finite graph $G$ is not Bird-free. By [L3] there is an induced embedding $\psi$ of Bird in $G$. Its restriction $\psi'$ to $\{x_1,x_2,x_3,y,z\}$ is again an injection preserving adjacency and nonadjacency, and by [L1] and [L2] the induced subgraph of Bird on those five vertices is exactly the bull, with the same edge set $x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z$. So $\psi'$ is an induced embedding of the bull in $G$, and $G$ is not bull-free. Contrapositively, every bull-free graph is Bird-free. [L1, L2, L3]

2.1 By step 1.3 the class of bull-free graphs is contained in the class of Bird-free graphs, and the containment is strict because the bull itself is Bird-free by step 1.2 yet is not bull-free by step 1.1. [step 1.1, step 1.2, step 1.3]

3.1 The Bird theorem [L4] bounds every nonempty graph in the larger Bird-free class, hence in particular every nonempty graph in the bull-free class, whereas the earlier bull theorem [L5] concerns only that smaller class. Since both theorems merely assert the existence of positive exponents, step 2.1 is a strict inclusion of hypothesis classes and implies no comparison between the two exponents. [step 2.1, L4, L5]

4.1 The witness bull, the general inclusion of step 1.3 and the strictness of step 2.1 verify all assertions of the example. [step 2.1, step 3.1] ∎

## Remarks

- This example is a leaf: it is homed on the companion examples page and no later item cites it. It is the Bird analogue of the $P_5$ containment example on the same page.
