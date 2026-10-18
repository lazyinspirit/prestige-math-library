---
id: cex-hmm-zero-evidence-has-no-posterior-map
kind: counterexample
title: Zero-evidence observations have no conditional MAP path
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the counterexample has two hidden paths."
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
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

## Statement refuted

For every finite HMM and every finite observation sequence, the posterior
distribution on hidden paths is defined and therefore has a sequence MAP path.

## Facts & Assumptions

**Given:** A finite discrete HMM with two hidden states and one observed symbol.

[F1] [[def-finite-hidden-markov-model-for-sequence-decoding]]: For an
observation sequence $y$, its evidence is $p(y)=\sum_z p(z,y)$; the
conditional path mass $p(z\mid y)=p(z,y)/p(y)$ is defined only when $p(y)>0$,
and a sequence MAP path maximizes this conditional mass.

## Counterexample

Take $S=\{u,v\}$, $Y=\{0,1\}$, and initial probabilities
$\pi(u)=\pi(v)=1/2$. Let both transition rows be $(1/2,1/2)$. In each state
let $B(s,0)=1$ and $B(s,1)=0$. These are normalized initial, transition, and
emission parameters. Observe the length-one sequence $y=(1)$.

1.1 For the two possible hidden paths, the joint masses are $p((u),(1))=(1/2)\cdot0=0$ and $p((v),(1))=(1/2)\cdot0=0$. Thus $p((1))=0+0=0$. [given, F1, algebra]

2.1 By [F1], division by this zero evidence does not define conditional path masses, so there is no posterior MAP path for this observation. Both paths maximize the zero joint mass, but that arbitrary tie is not a conditional posterior distribution. This refutes the Statement. [given, F1, step 1.1, algebra] ∎
