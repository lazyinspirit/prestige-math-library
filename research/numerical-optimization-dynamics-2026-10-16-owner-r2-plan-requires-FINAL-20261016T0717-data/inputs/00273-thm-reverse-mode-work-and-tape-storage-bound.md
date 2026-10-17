---
id: thm-reverse-mode-work-and-tape-storage-bound
kind: theorem
title: "Reverse-mode work is a fixed multiple of primal work under explicit primitive-cost bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, alg-reverse-mode-automatic-differentiation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "W. Baur and V. Strassen, The Complexity of Partial Derivatives, Theoretical Computer Science 22 (1983), §§2 and 4"
      url: "https://web.vu.lt/mif/s.jukna/tropical/Baur-Strassen.pdf"
dependency_level: 2
---

## Statement

Fix a finite set of scalar/vector primitive types with at most $r$ parent slots per operation. Suppose each operation $j$ has primal work $w_j\ge1$, its local vector-Jacobian product costs at most $c w_j$, and accumulating each parent-slot contribution costs at most $a$ operations. Count all state-vector dimensions and input-gradient entries in the primal-tape size $S$. Then the exact reverse-mode algorithm for a scalar output uses at most $(1+c+ar)\sum_{j=1}^T w_j$ operations for the primal evaluation, reverse sweep, and parent accumulations, and stores $O(S)$ scalar entries. Opaque solver calls are excluded unless their primal and derivative costs satisfy the same hypotheses.

## Facts & Assumptions

**Given:** A finite graph and the stated primitive-cost model, with $W:=\sum_{j=1}^T w_j$.

[F1] [[def-finite-straight-line-computational-program]]: there are finitely many topologically ordered nodes and the primal tape stores their values and parent slots.

[F2] [[alg-reverse-mode-automatic-differentiation]]: reverse mode evaluates each primitive once in the primal pass, then visits each node once and applies one local vector-Jacobian product per node while accumulating a contribution for each parent slot.

[A1] The primitive set has fixed finite type and bounded dimensions. Local primal, pullback, and parent-accumulation costs obey the constants $w_j,c,a,r$ in the statement; an opaque solver call has no uncharged derivative cost.

## Proof

**Proof technique:** direct operation and storage count.

1.1 The primal pass evaluates each node once, so its cost is $\sum_j w_j=W$. The reverse pass makes one local pullback call at node $j$, costing at most $c w_j$, and handles at most $r$ parent slots, costing at most $ar$ operations. Since $w_j\ge1$, this node's reverse work is at most $(c+ar)w_j$. Summing over all nodes gives total work at most $(1+c+ar)W$. [F1, F2, A1, given, algebra]

2.1 The primal tape contains the recorded graph values and fixed-size node/parent metadata; by the definition of $S$, this is $O(S)$ scalar entries. Reverse cotangents require one vector of the corresponding dimension per node and one input-gradient vector, all dimensions already counted in $S$. Bounded primitive workspace adds at most $O(S)$ entries. Hence total storage is $O(S)$; the bound says nothing about an opaque solver whose local tape or pullback cost was excluded in [A1]. [F1, F2, A1, algebra] ∎

## Remarks

Baur–Strassen proves a separate nonscalar arithmetic-circuit complexity theorem over an infinite field. The local bound above is proved directly for a fixed smooth primitive set with explicit primal/pullback cost ratios; it does not extend the arithmetic-circuit theorem to arbitrary opaque procedures or claim that every differentiable primitive has a cheap derivative.
