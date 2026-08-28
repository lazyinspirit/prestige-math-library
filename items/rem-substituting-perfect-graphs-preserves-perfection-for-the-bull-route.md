---
id: rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route
kind: remark
title: "Substituting perfect graphs preserves perfection"
status: draft
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-perfect-graph-for-the-bull-route, def-substitution-of-a-graph-for-a-vertex]
justified_by: []
aliases: []
landmark: false
external_dependency:
  source_url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
  exact_statement: "Let H1 and H2 be perfect graphs and let v in V(H1). Then the graph obtained from H1 by substituting H2 for v is perfect."
  local_proof_attempt: "The proof route is classical perfect-graph theory. The present batch needs only the exact preservation statement in order to lift good-function bounds across substitutions."
  necessity: "The theorem that alpha-narrowness is preserved under substitution uses this perfectness-preservation step to verify that the compressed function on the outer graph is still good."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 5.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

If $H_1$ and $H_2$ are perfect finite graphs and the substitution
$H_1[v\to H_2]$ is defined, then $H_1[v\to H_2]$ is perfect.

## Remarks

The page uses this only as a recorded preservation theorem. The substitution
operation itself is already defined on page 397.
