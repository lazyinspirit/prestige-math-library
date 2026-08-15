---
id: ex-complete-and-empty-hereditary-classes-have-constant-one
kind: example
title: "The classes of complete graphs and of empty graphs have Erdős–Hajnal constant $1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-standard-complete-bipartite-path-and-cycle-graphs, prop-erdos-hajnal-property-is-complement-invariant]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Example

The hereditary class of all complete graphs and the hereditary class of all empty graphs both have Erdős–Hajnal constant $1$.

## Facts & Assumptions

**Given:** The classes $\mathcal K$ of complete graphs and $\mathcal E$ of empty graphs.

[L1] A positive exponent $c$ is a constant for a hereditary class when every nonempty member $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^c$ ([[def-erdos-hajnal-property-and-constant]]).

[L2] The homogeneous number is the maximum of the clique and stable-set numbers ([[def-homogeneous-set-and-homogeneous-number]]).

[L3] A complete graph has every possible edge and an empty graph has none ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L4] Complementary hereditary classes have exactly the same Erdős–Hajnal constants ([[prop-erdos-hajnal-property-is-complement-invariant]]).

## Verification

**Proof technique:** direct.

1.1 Both classes are hereditary because an induced subgraph of a complete graph is complete and one of an empty graph is empty. [L3]

1.2 Every nonempty $G$ in either class has all $|V(G)|$ vertices homogeneous, as a clique in $\mathcal K$ or a stable set in $\mathcal E$, so $\operatorname{hom}(G)=|V(G)|$. [L2, L3]

2.1 Hence $\operatorname{hom}(G)=|V(G)|^1$ and [L1] gives constant $1$ for both classes; equivalently, the result for one class transfers to the other by [L4]. [step 1.1, step 1.2, L1, L4] ∎
