---
id: cex-mixedness-of-blocks-is-not-transitive
kind: counterexample
title: "Mixedness of block pairs is not transitive"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-edges-between-sets-and-pure-mixed-pairs, def-mixed-block-reachability-relation-on-a-blockade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

If $(A,B)$ is mixed and $(B,C)$ is mixed, then $(A,C)$ must also be mixed.

## Facts & Assumptions

**Given:** Three disjoint vertex sets
$$A=\{a_1,a_2\},\qquad B=\{b_1,b_2\},\qquad C=\{c_1,c_2\},$$
with cross-edges
$$a_1b_1,\ a_2b_2,\ b_1c_1,\ b_2c_2,$$
and no other cross-edges between these sets.

[L1] A pair is mixed when it is neither complete nor anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L2] The mixed-block reachability relation is built from chains of mixed pairs, precisely because mixedness itself need not be transitive ([[def-mixed-block-reachability-relation-on-a-blockade]]).

## Counterexample

**Proof technique:** direct.

1.1 The pair $(A,B)$ is mixed: it has edges $a_1b_1$ and $a_2b_2$, but also nonedges $a_1b_2$ and $a_2b_1$. The same calculation shows that $(B,C)$ is mixed. [given, L1]

1.2 By construction there are no edges between $A$ and $C$, so $(A,C)$ is anticomplete and therefore not mixed. [given, L1]

2.1 Thus mixedness can hold for $(A,B)$ and $(B,C)$ while failing for $(A,C)$. This is why [L2] passes to the reachability closure $\mathcal M$ rather than treating mixedness itself as an equivalence relation. [step 1.1, step 1.2, L2] ∎
