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
$V=\sum_{t=1}^{T}|V_t|$ and $E=\sum_{t=2}^{T}|E_t|$ (with empty sums taken
as $0$), then when each real
multiplication and comparison is counted as one operation the running time is
$O(1+T+V+E)$ and the auxiliary storage is $O(1+V)$. In the $T=0$ case the
algorithm returns the unique empty path with score $1$.

## Facts & Assumptions

**Given:** A finite weighted trellis, a total order on each vertex set, and the
algorithm in the Definition.

[F1] [[def-finite-layered-trellis]]: When $T=0$, the unique path is the empty
tuple with score $1$. When $T\ge1$, every allowed edge weight is positive. A
path has positive initial and terminal weights, follows one allowed edge
between each pair of consecutive layers, and has score equal to the product of
its endpoint and edge weights.

[F2] [[lem-finite-trellis-prefix-score-recurrence]]: When $T=0$, the unique
prefix path through no layers has score $1$. When $T\ge1$, the recurrence table
$D_t(v)$ is the maximum score of a prefix path ending at $v$, and is zero
exactly when no such prefix path exists.

[F3] [[alg-viterbi-max-product-on-finite-trellis]]: When $T=0$, the algorithm
returns the empty path with score $1$. When $T\ge1$, it stores a maximizing
predecessor for each positive $D_t(v)$ with $t\ge2$, maximizes $D_T(v)\beta(v)$ at the
terminal layer, and returns the path obtained by following those backpointers.

## Proof

1.1 If $T=0$, [F1] gives the unique empty path and its score $1$, which the branch in [F3] returns. If $T\ge1$, [F2] shows that every positive $D_t(v)$ is attained by a prefix path and a zero value means there is no such prefix. Therefore, for each terminal vertex $v$, $D_T(v)\beta(v)>0$ exactly when some full path ends at $v$; when positive it is the largest score of such a path. [given, F1, F2, F3, algebra]

2.1 Suppose $T\ge1$. The finite set of terminal values has a positive maximum exactly when at least one full path exists. If it is positive, let $v_T$ be the maximizing terminal vertex; then $D_T(v_T)>0$ and $\beta(v_T)>0$. If $T=1$, then $D_1(v)=\alpha(v)$ and $Q(v)=\alpha(v)\beta(v)$, so the selected one-vertex tuple $(v_1)$ is already an admissible path of maximum score; no backpointer is needed. If $T\ge2$, then by [F3], $p_T(v_T)$ is defined and selects an allowed edge from some $v_{T-1}$ with $D_{T-1}(v_{T-1})w_T(v_{T-1},v_T)=D_T(v_T)>0$, so $D_{T-1}(v_{T-1})>0$ because the edge weight is positive. In the $T\ge2$ case, repeating this argument for the layers $t=T,T-1,\ldots,2$ shows every pointer is defined, each selected pair is an allowed edge, and the chain ends at $v_1$ with $D_1(v_1)=\alpha(v_1)>0$. The chain is therefore a path, and its score is $D_T(v_T)\beta(v_T)$, the maximum terminal value from step 1.1. If all terminal values are zero, step 1.1 shows there is no path, so the algorithm correctly returns “no admissible path.” The $T=0$ case is settled by step 1.1. [given, F1, F2, F3, step 1.1, induction, algebra]

3.1 The $T=0$ branch takes constant time. For $T\ge1$, each vertex is initialized or scanned a bounded number of times, each edge contributes one candidate product and comparison, and traceback visits at most $T$ layers. Thus the time is $O(1+T+V+E)$. The algorithm stores at most one backpointer per vertex and scores for the current and preceding layers, so auxiliary storage is $O(1+V)$. [given, F3, step 2.1, algebra] ∎
