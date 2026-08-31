---
id: ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull
kind: example
title: "The left six-vertex prime $\\mathcal H$-graph is prime, and deleting any pendant leaf gives the bull"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-six-vertex-prime-h-graph, def-prime-graph, def-module-of-a-graph, def-bull-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Figure 1"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The left six-vertex prime $\mathcal H$-graph is prime, and deleting any of its
three leaves produces the bull graph.

## Facts & Assumptions

**Given:** The left six-vertex prime $\mathcal H$-graph on triangle vertices
$t_1,t_2,t_3$ and leaves $\ell_1,\ell_2,\ell_3$.

[L1] A graph is prime exactly when it has no nontrivial module
([[def-prime-graph]], [[def-module-of-a-graph]]).

[L2] The bull is a triangle with leaves attached to two distinct triangle
vertices ([[def-bull-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Deleting any leaf gives the bull. For instance, after deleting $\ell_1$ the triangle $t_1t_2t_3$ remains, with leaves $\ell_2$ at $t_2$ and $\ell_3$ at $t_3$; by [L2] this is the bull. The same argument works for deleting $\ell_2$ or $\ell_3$. [L2, given]

1.2 To check primeness, let $M$ be a nontrivial module. First, $M$ cannot contain two leaves: if it contains $\ell_i,\ell_j$ and omits one support, that support sees its own leaf but not the other; if it contains both supports as well, then either the remaining triangle vertex or the remaining leaf splits the set. Hence $M$ contains at most one leaf. [given, algebra]

2.1 Now $M$ cannot contain one leaf together with another vertex. If $\ell_i,t_i\in M$, then another triangle vertex is adjacent to $t_i$ but not to $\ell_i$. If $\ell_i\in M$ and $t_i\notin M$, then any other vertex of $M$ is either another leaf, excluded by step 1.2, or some $t_j$ with $j\ne i$, and then $\ell_j$ is outside $M$ and adjacent to $t_j$ but not to $\ell_i$. Therefore a module containing a leaf must be the singleton $\{\ell_i\}$. [step 1.2, given]

3.1 Consequently a nontrivial module contains no leaves, so it is a subset of $\{t_1,t_2,t_3\}$ with at least two vertices. But if $t_i,t_j\in M$, then the outside leaf $\ell_i$ is adjacent to $t_i$ and not to $t_j$, so $M$ is not a module. This contradiction shows that no nontrivial module exists. By [L1], the graph is prime. [step 2.1, L1, given] ∎
