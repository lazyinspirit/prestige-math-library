---
id: ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime
kind: example
title: "The right six-vertex prime $\\mathcal H$-graph is the complement of the left one, and is prime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-right-six-vertex-prime-h-graph, def-left-six-vertex-prime-h-graph, def-prime-graph, def-module-of-a-graph, def-graph-isomorphism-and-complement, ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized corrected graph and complement-primality audit; targeted precheck/rendercheck and finite edge correspondence; no independent judgment."
    delegated_by: owner
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
one, and is prime. On the common labels $a,b,c,d,e,f$, its edge set is
$\{ac,ae,af,bf,cd,ce,cf,df\}$.

## Facts & Assumptions

**Given:** The left and right six-vertex prime $\mathcal H$-graphs on the common
label set $\{a,b,c,d,e,f\}$.

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

1.1 The left graph has edges $ab,bc,ad,bd,be,de,ef$. The remaining eight of the fifteen unordered vertex pairs are exactly $ac,ae,af,bf,cd,ce,cf,df$, the right graph's edges. Thus the identity on the common label set is an isomorphism from the right graph to the complement of the left graph. [L1, given]

2.1 Since the left graph is prime by [L2], [L3] says it has no nontrivial module. By [F1], its complement also has no nontrivial module. Therefore the right graph is prime by [L3]. [step 1.1, L2, L3, F1]

3.1 Thus the right six-vertex prime $\mathcal H$-graph is the complement of the left one and is prime. [step 1.1, step 2.1] ∎

## Remarks

For comparison with Nguyen–Scott–Seymour Figure 1, label the right drawing's
top row $A,B,C$ and bottom row $D,E,F$. The bijection
$$a\mapsto D,\quad b\mapsto F,\quad c\mapsto B,\quad d\mapsto C,\quad e\mapsto A,\quad f\mapsto E$$
sends the eight edges above to $BD,AD,DE,EF,BC,AB,BE,CE$, exactly the
edges of that drawing. The former labels and complement-of-net interpretation
are superseded; the complement argument now applies to the corrected
seven-edge left graph.
