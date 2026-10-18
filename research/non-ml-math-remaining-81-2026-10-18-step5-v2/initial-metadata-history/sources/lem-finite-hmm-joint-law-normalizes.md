---
id: lem-finite-hmm-joint-law-normalizes
kind: lemma
title: The finite hidden Markov joint law is normalized
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the proof rearranges finite sums."
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

For every finite discrete HMM and each integer $T\ge1$, the joint masses
$p(z,y)$ in the Definition sum to $1$ over all hidden paths $z\in S^T$ and
observation sequences $y\in Y^T$.

## Facts & Assumptions

**Given:** A finite discrete HMM $(S,Y,\pi,A,B)$ and $T\ge1$.

[F1] [[def-finite-hidden-markov-model-for-sequence-decoding]]: The initial
weights satisfy $\sum_{s\in S}\pi(s)=1$, each transition row satisfies
$\sum_{s'\in S}A(s,s')=1$, each emission row satisfies
$\sum_{y\in Y}B(s,y)=1$, and
$p(z,y)=\pi(z_1)B(z_1,y_1)\prod_{t=2}^{T}A(z_{t-1},z_t)B(z_t,y_t)$.

## Proof

1.1 Fix a hidden path $z$. Finite distributivity and the emission row sums in [F1] give $\sum_{y\in Y^T}p(z,y)=\pi(z_1)\prod_{t=2}^{T}A(z_{t-1},z_t)$, because summing over each coordinate $y_t$ contributes the factor $\sum_{y_t\in Y}B(z_t,y_t)=1$. [given, F1, algebra]

2.1 Sum the expression in step 1.1 over all $z\in S^T$. Summing first over $z_T$, then $z_{T-1}$ down to $z_2$, removes one transition factor at a time by the corresponding row sum in [F1]. The remaining sum is $\sum_{z_1\in S}\pi(z_1)=1$. Thus the total joint mass is $1$. [given, F1, step 1.1, algebra] ∎
