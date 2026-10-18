---
id: alg-hmm-viterbi-sequence-map
kind: algorithm
title: Viterbi sequence decoding for a finite hidden Markov model
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
  - def-finite-layered-trellis
  - alg-viterbi-max-product-on-finite-trellis
justified_by: []
aliases: []
axiom_use: "No axiom is used; the procedure uses finite sets and the supplied state order."
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

**Input:** A finite discrete HMM $(S,Y,\pi,A,B)$, an observation sequence
$y=(y_1,\ldots,y_T)\in Y^T$ with $T\ge1$, and a total order on $S$.

1. Form a trellis with $V_t=S$ at every layer. Set
   $\alpha_y(s)=\pi(s)B(s,y_1)$ and terminal weights $\beta_y(s)=1$.
2. For every $t=2,\ldots,T$, include the edge $(r,s)$ exactly when
   $A(r,s)>0$ and $B(s,y_t)>0$, and give it weight
   $w_t(r,s)=A(r,s)B(s,y_t)$.
3. Run [[alg-viterbi-max-product-on-finite-trellis]] on this trellis using the
   supplied state order. If it returns no admissible path, return
   “zero evidence; no conditional sequence MAP.” Otherwise return its path as
   the decoded hidden-state sequence.

Zero transition or emission factors are omitted from the trellis, so every
trellis path has positive joint mass.
