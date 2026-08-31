---
id: ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime
kind: example
title: "The right six-vertex prime $\\mathcal H$-graph is the complement of the left one, and is prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-right-six-vertex-prime-h-graph, def-left-six-vertex-prime-h-graph, def-prime-graph, def-module-of-a-graph, def-graph-isomorphism-and-complement, ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
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

The right six-vertex prime $\mathcal H$-graph is the complement of the left
one, and is prime.

## Facts & Assumptions

**Given:** The left and right six-vertex prime $\mathcal H$-graphs on the common
label set $\{t_1,t_2,t_3,\ell_1,\ell_2,\ell_3\}$.

[L1] The right graph is defined as the complement of the left graph
([[def-right-six-vertex-prime-h-graph]], [[def-left-six-vertex-prime-h-graph]], [[def-graph-isomorphism-and-complement]]).

[L2] The left six-vertex prime $\mathcal H$-graph is prime
([[ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull]]).

[L3] A graph is prime exactly when it has no nontrivial module
([[def-prime-graph]], [[def-module-of-a-graph]]).

[F1] A vertex set is a module of a graph if and only if it is a module of the
complement, because outside vertices swap complete and anticomplete behaviour.

## Verification

**Proof technique:** direct.

1.1 By [L1], the identity map on the common label set is an isomorphism from the right graph to the complement of the left graph. [L1]

2.1 Since the left graph is prime by [L2], [L3] says it has no nontrivial module. By [F1], its complement also has no nontrivial module. Therefore the right graph is prime by [L3]. [step 1.1, L2, L3, F1]

3.1 Thus the right six-vertex prime $\mathcal H$-graph is the complement of the left one and is prime. [step 1.1, step 2.1] ∎
