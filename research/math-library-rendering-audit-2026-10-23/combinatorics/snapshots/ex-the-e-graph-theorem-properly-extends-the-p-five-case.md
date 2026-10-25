---
id: ex-the-e-graph-theorem-properly-extends-the-p-five-case
kind: example
title: "The $E$ theorem reaches an induced $P_5$ witness"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-e-graph-has-the-erdos-hajnal-property, def-e-graph-and-co-e-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-h-free-and-family-free-graph, def-induced-embedding-and-induced-copy, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Introduction and Figure 4"
      url: "https://arxiv.org/pdf/2606.06258v2"
---

## Example

The five-vertex path $P_5$ is $E$-free but is not $P_5$-free. More generally
every $P_5$-free graph is $E$-free, because the vertices $p_1,\dots,p_5$ of $E$
induce $P_5$. Thus the $E$-free theorem applies to a strictly larger
forbidden-pattern class than the earlier $P_5$-free theorem.

## Facts & Assumptions

**Given:** The $E$-graph on $\{p_1,\dots,p_5,q\}$, the path $P_5$ on $\{0,1,2,3,4\}$, and an arbitrary finite graph $G$.

[L1] The $E$-graph has vertex set $\{p_1,p_2,p_3,p_4,p_5,q\}$ and edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$ ([[def-e-graph-and-co-e-graph]]).

[L2] The path $P_5$ has vertex set $\{0,1,2,3,4\}$ and edges $\{i,i+1\}$ for $0\le i<4$, and no others ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] An induced embedding of $H$ in $G$ is an injection $V(H)\to V(G)$ preserving adjacency and nonadjacency on distinct pairs; $G$ is $H$-free when no such embedding exists ([[def-induced-embedding-and-induced-copy]], [[def-h-free-and-family-free-graph]]).

[L4] There is $\epsilon_E>0$ such that every nonempty $E$-free graph has a clique or stable set of size at least $|V(G)|^{\epsilon_E}$ ([[thm-the-e-graph-has-the-erdos-hajnal-property]]).

[L5] The graph $P_5$ has the Erdős-Hajnal property, and an Erdős-Hajnal constant for the $P_5$-free class is a positive exponent bounding the homogeneous number of every nonempty member from below by $|V(G)|$ to that exponent ([[cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]], [[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]]).

## Verification

**Proof technique:** direct finite checks of the two witnesses and the induced-$P_5$ restriction.

1.1 The identity map on $\{0,1,2,3,4\}$ preserves adjacency and nonadjacency, so it is an induced embedding of $P_5$ in itself by [L3]; hence $P_5$ is not $P_5$-free. [L2, L3]

1.2 The six-element set $\{p_1,\dots,p_5,q\}$ has no injection into the five-element set $\{0,1,2,3,4\}$; hence no induced embedding of $E$ in $P_5$ exists, and $P_5$ is $E$-free. [L1, L2, L3]

1.3 Suppose the finite graph $G$ is not $E$-free. By [L3] there is an induced embedding $\varphi$ of $E$ in $G$. Its restriction $\varphi'$ to $\{p_1,\dots,p_5\}$ is again an injection preserving adjacency and nonadjacency, and by [L1] the induced subgraph of $E$ on those five vertices has exactly the edges $p_1p_2,p_2p_3,p_3p_4,p_4p_5$, which is a $P_5$ under [L2]. So $\varphi'$ is an induced embedding of $P_5$ in $G$, and $G$ is not $P_5$-free. Contrapositively, every $P_5$-free graph is $E$-free. [L1, L2, L3]

2.1 By step 1.3 the class of $P_5$-free graphs is contained in the class of $E$-free graphs, and the containment is strict because the graph $P_5$ itself is $E$-free by step 1.2 yet is not $P_5$-free by step 1.1. [step 1.1, step 1.2, step 1.3]

3.1 The $E$ theorem [L4] bounds every nonempty graph in the larger $E$-free class, hence in particular every nonempty graph in the $P_5$-free class, whereas the earlier $P_5$ theorem [L5] concerns only that smaller class. Since both theorems merely assert the existence of positive exponents, step 2.1 is a strict inclusion of hypothesis classes and implies no comparison between the two exponents. [step 2.1, L4, L5]

4.1 The witness $P_5$, the general inclusion of step 1.3 and the strictness of step 2.1 verify all assertions of the example. [step 2.1, step 3.1] ∎

## Remarks

- This example is a leaf: it is homed on the companion examples page and no later item cites it.
