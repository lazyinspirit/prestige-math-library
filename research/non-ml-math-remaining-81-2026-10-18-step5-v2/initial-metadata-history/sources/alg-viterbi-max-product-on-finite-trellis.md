---
id: alg-viterbi-max-product-on-finite-trellis
kind: algorithm
title: Max-product Viterbi decoding on a finite trellis
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-layered-trellis
  - lem-finite-trellis-prefix-score-recurrence
justified_by: []
aliases: []
axiom_use: "No axiom is used; the supplied finite orders resolve ties."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Definition

**Input:** A finite weighted trellis and a total order on each vertex set.

**Output:** “No admissible path,” or an admissible path and its score.

If $T=0$, return the empty path with score $1$. Otherwise perform the following
steps:

1. Set $D_1(v)=\alpha(v)$ for all $v\in V_1$. For each layer $t=2,\ldots,T$ and
   each $v\in V_t$, compute
   $$D_t(v)=\max\bigl(\{D_{t-1}(u)w_t(u,v):(u,v)\in E_t\}\cup\{0\}\bigr).$$
   If $D_t(v)>0$, store as $p_t(v)$ the first predecessor $u$ in the supplied
   vertex order attaining this maximum; if $D_t(v)=0$, leave $p_t(v)$
   undefined.
2. Compute $Q(v)=D_T(v)\beta(v)$ for all $v\in V_T$. If every $Q(v)=0$,
   return “no admissible path.”
3. Otherwise choose the first $v_T$ in the supplied order maximizing $Q(v)$,
   and follow the stored pointers $p_T(v_T),p_{T-1}(v_{T-1}),\ldots,p_2(v_2)$
   backwards. Return the resulting path and its score $Q(v_T)$.

The stored predecessor at each layer is a **backpointer**. Following these
pointers backward from a maximizing terminal vertex is called **traceback**.
The given orders make the returned path deterministic when several paths have
the same maximum score. The empty path at $T=0$ is the unique path and is
therefore the unique maximum-score output in that case.
