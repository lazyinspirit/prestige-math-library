---
id: ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices
kind: example
title: "Up to isomorphism the four-vertex path is the only prime graph on four vertices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-modules-of-the-four-vertex-path, def-prime-graph, def-module-of-a-graph, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, lem-unions-of-components-and-of-anticomponents-are-modules, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture — A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Example

Up to isomorphism, the only prime graph on four vertices is the path $P_4$.

## Facts & Assumptions

**Given:** A graph $G$ on four vertices.

[L1] Every union of connected components is a module, and every union of anticonnected components is a module ([[lem-unions-of-components-and-of-anticomponents-are-modules]]).

[L2] A prime graph has only trivial modules ([[def-prime-graph]], [[def-module-of-a-graph]]).

[L3] The path $P_4$ is prime ([[ex-modules-of-the-four-vertex-path]]).

## Verification

**Proof technique:** direct.

1.1 If $G$ is prime, then $G$ is connected and anticonnected. Indeed, if $G$ were disconnected, some union of connected components would have size $2$ or $3$; by [L1] that union would be a nontrivial module, contradicting [L2]. The same argument in $\overline G$ shows that if $\overline G$ were disconnected, a union of anticomponents of $G$ would be a nontrivial module. [L1, L2]

2.1 Let $G$ be connected and anticonnected. No vertex has degree $0$, since $G$ is connected, and no vertex has degree $3$, since such a vertex is isolated in $\overline G$. Thus every vertex has degree $1$ or $2$. [step 1.1, given]

3.1 Some vertex has degree $1$. Otherwise every vertex has degree $2$; following neighbours from any vertex then forces the four vertices to form $C_4$, whose complement is the disjoint union of two edges, contrary to anticonnectedness. [step 2.1, given]

4.1 Let $v_0$ have unique neighbour $v_1$. Connectivity gives $v_1$ a neighbour $v_2\ne v_0$, and connectivity of the remaining vertex $v_3$ forces an edge from $v_3$ to $v_1$ or $v_2$. The edge $v_1v_3$ is impossible, since then $v_1$ has degree $3$; hence $v_2v_3$ is an edge. There are no further edges: $v_0$ has degree $1$, $v_1v_3$ was excluded, and $v_2$ already has the two neighbours $v_1,v_3$. Therefore $G$ is the path $v_0v_1v_2v_3$. [step 2.1, step 3.1, given]

5.1 Every prime graph on four vertices is therefore isomorphic to $P_4$, and [L3] shows that $P_4$ is prime. [step 1.1, step 4.1, L3] ∎
