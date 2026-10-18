---
id: thm-viterbi-finite-trellis-is-optimal
kind: theorem
title: Finite-trellis Viterbi decoding returns a maximum-score path
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-layered-trellis
  - lem-finite-trellis-prefix-score-recurrence
  - alg-viterbi-max-product-on-finite-trellis
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; finite maxima are selected by the supplied orders."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Statement

For every finite weighted trellis, the algorithm returns “no admissible path”
exactly when the trellis has no path. Otherwise it returns an admissible path
whose score is maximal among all admissible paths. If
$V=\sum_{t=1}^{T}|V_t|$ and $E=\sum_{t=2}^{T}|E_t|$, then when each real
multiplication and comparison is counted as one operation the running time is
$O(T+V+E)$ and the auxiliary storage is $O(1+V)$.

## Facts & Assumptions

**Given:** A finite weighted trellis, a total order on each vertex set, and the
algorithm in the Definition.

[F1] [[def-finite-layered-trellis]]: Every allowed edge weight is positive. A
path has positive initial and terminal weights, follows one allowed edge
between each pair of consecutive layers, and has score equal to the product of
its endpoint and edge weights.

[F2] [[lem-finite-trellis-prefix-score-recurrence]]: The recurrence table
$D_t(v)$ is the maximum score of a prefix path ending at $v$, and is zero
exactly when no such prefix path exists.

[F3] [[alg-viterbi-max-product-on-finite-trellis]]: The algorithm stores a
maximizing predecessor for each positive $D_t(v)$, maximizes
$D_T(v)\beta(v)$ at the terminal layer, and returns the path obtained by
following those backpointers.

## Proof

1.1 By [F2], every positive $D_t(v)$ is attained by a prefix path, and a zero value means there is no such prefix. Therefore, for each terminal vertex $v$, $D_T(v)\beta(v)>0$ exactly when some full path ends at $v$; when positive it is the largest score of such a path. [given, F1, F2, algebra]

2.1 The finite set of terminal values has a positive maximum exactly when at least one full path exists. If it is positive, let $v_T$ be the maximizing terminal vertex; then $D_T(v_T)>0$ and $\beta(v_T)>0$. By [F3], $p_T(v_T)$ is defined and selects an allowed edge from some $v_{T-1}$ with $D_{T-1}(v_{T-1})w_T(v_{T-1},v_T)=D_T(v_T)>0$, so $D_{T-1}(v_{T-1})>0$ because the edge weight is positive. Repeating this argument backward through the finitely many layers shows every pointer is defined, each selected pair is an allowed edge, and the chain ends at $v_1$ with $D_1(v_1)=\alpha(v_1)>0$. The chain is therefore a path, and its score is $D_T(v_T)\beta(v_T)$, the maximum terminal value from step 1.1. If all terminal values are zero, step 1.1 shows there is no path, so the algorithm correctly returns “no admissible path.” [given, F1, F2, F3, step 1.1, induction, algebra]

3.1 Each vertex is initialized or scanned a bounded number of times, each edge contributes one candidate product and comparison, and traceback visits at most $T$ layers. Thus the time is $O(T+V+E)$. The algorithm stores at most one backpointer per vertex and scores for the current and preceding layers, so auxiliary storage is $O(1+V)$. [given, F3, step 2.1, algebra] ∎
