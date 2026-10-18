---
id: def-finite-hidden-markov-model-for-sequence-decoding
kind: definition
title: Finite hidden Markov models for sequence decoding
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by:
  - lem-finite-hmm-joint-law-normalizes
aliases: []
axiom_use: "No choice axiom is used; the joint law is defined on finite sets."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Definition

A **finite discrete hidden Markov model (HMM)** is a tuple
$(S,Y,\pi,A,B)$, where $S$ is a finite nonempty hidden-state set, $Y$ is a
finite nonempty observation alphabet, $\pi:S\to[0,1]$ is an initial
probability distribution, $A:S\times S\to[0,1]$ is a transition matrix, and
$B:S\times Y\to[0,1]$ is an emission matrix. The parameters satisfy
$$\sum_{s\in S}\pi(s)=1,\qquad \sum_{s'\in S}A(s,s')=1\quad(s\in S),\qquad \sum_{y\in Y}B(s,y)=1\quad(s\in S).$$

For each length $T\ge1$, hidden path $z=(z_1,\ldots,z_T)\in S^T$, and
observation sequence $y=(y_1,\ldots,y_T)\in Y^T$, define the joint mass
$$p(z,y)=\pi(z_1)B(z_1,y_1)\prod_{t=2}^{T}A(z_{t-1},z_t)B(z_t,y_t).$$
The **evidence** of $y$ is $p(y)=\sum_{z\in S^T}p(z,y)$. When $p(y)>0$,
the conditional path mass is $p(z\mid y)=p(z,y)/p(y)$, and a
**sequence MAP (maximum-a-posteriori) path** is any $z$ maximizing this conditional mass. If $p(y)=0$,
the conditional path mass is undefined, so there is no posterior sequence MAP
path for that observation sequence. A zero transition or emission factor gives
that hidden path zero joint mass.
