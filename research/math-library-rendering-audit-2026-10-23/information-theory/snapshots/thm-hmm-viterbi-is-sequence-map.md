---
id: thm-hmm-viterbi-is-sequence-map
kind: theorem
title: Finite-HMM Viterbi decoding is exact sequence MAP
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-hidden-markov-model-for-sequence-decoding
  - lem-finite-hmm-joint-law-normalizes
  - thm-viterbi-finite-trellis-is-optimal
  - alg-hmm-viterbi-sequence-map
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; state and path sets and all sums are finite."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Manolis Kellis, 6.096 Algorithms for Computational Biology, Lecture 7: Gene Finding and HMMs, MIT OpenCourseWare (Spring 2005)"
      url: "https://ocw.mit.edu/courses/6-096-algorithms-for-computational-biology-spring-2005/c48f8fdb8e1ff0cb6336e5b9b6cab23f_lecture7.pdf"
    - title: "Stanford CS262, Lecture 7: Hidden Markov Models"
      url: "https://web.stanford.edu/class/cs262/presentations/lecture7.pdf"
---

## Statement

Given a finite discrete HMM and an observation sequence of positive length, the
sequence-decoding algorithm returns no conditional MAP path exactly when the
observation evidence is zero. When the evidence is positive, it returns a
hidden-state sequence maximizing the posterior probability of the entire
sequence, including when there are ties.

## Facts & Assumptions

**Given:** A finite discrete HMM $(S,Y,\pi,A,B)$, a sequence
$y=(y_1,\ldots,y_T)\in Y^T$ with $T\ge1$, and the HMM decoding algorithm.

[F1] [[def-finite-hidden-markov-model-for-sequence-decoding]]: The joint mass
is $p(z,y)=\pi(z_1)B(z_1,y_1)\prod_{t=2}^{T}A(z_{t-1},z_t)B(z_t,y_t)$;
the evidence is the finite sum $p(y)=\sum_{z\in S^T}p(z,y)$, and for
$p(y)>0$ the posterior path mass is $p(z\mid y)=p(z,y)/p(y)$; a sequence MAP
path is any $z$ maximizing this conditional mass.

[F2] [[alg-hmm-viterbi-sequence-map]]: The algorithm creates initial weights
$\pi(s)B(s,y_1)$, transition edges exactly for positive transition and
emission factors, edge weights equal to their products, and terminal weights
$1$; it then runs finite-trellis Viterbi.

[F3] [[thm-viterbi-finite-trellis-is-optimal]]: Finite-trellis Viterbi returns
no path exactly when no trellis path exists; otherwise it returns a path with
maximum product score.

[F4] [[lem-finite-hmm-joint-law-normalizes]]: For each $T\ge1$, the joint
masses $p(z,y)$ sum to $1$ over all $z\in S^T$ and $y\in Y^T$.

## Proof

1.1 A hidden path $z$ has positive joint mass exactly when its initial factor, first emission factor, and every later transition and emission factor are positive. By [F2], this is exactly the condition that $z$ is a path in the constructed trellis. The trellis score is the product of those same factors, with terminal factor $1$, so it equals $p(z,y)$. Conversely every trellis path gives such a positive-mass hidden path. [given, F1, F2, algebra]

2.1 If the trellis has no path, step 1.1 shows every summand in [F1] is zero; hence $p(y)=0$ and no conditional path mass is defined. If it has a path, step 1.1 gives a positive summand, so $p(y)>0$. By [F3], finite-trellis Viterbi then returns a path maximizing $p(z,y)$. Dividing all path masses by the same positive $p(y)$ preserves their order, so this path maximizes $p(z\mid y)$. The normalization in [F4] makes these masses a probability law, and the backpointer tie rule returns one of the maximizers. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
