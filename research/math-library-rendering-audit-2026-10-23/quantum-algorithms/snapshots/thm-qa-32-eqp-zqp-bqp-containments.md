---
id: thm-qa-32-eqp-zqp-bqp-containments
kind: theorem
title: PromiseP is contained in EQP, EQP in ZQP, and ZQP in BQP
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 14
deps:
  - def-promise-problem
  - def-qa-32-eqp-promise-class
  - def-qa-32-zqp-promise-class
  - def-qc-bqp-promise-class
  - thm-qc-output-acceptance-law-normalizes
  - lem-polynomial-time-computations-have-logspace-uniform-circuits
  - lem-qa-32-indexed-to-full-list-conversion
  - lem-qa-32-exact-clifford-t-boolean-circuit-embedding
justified_by: []
proof_strategy: direct
axiom_use: "None; the compiler and output predicates are finite and deterministic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Watrous, Quantum Computational Complexity, Sections IV.1–IV.3"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Statement

In the QC14 promise-problem model,

$$ \mathrm{PromiseP}\subseteq\mathrm{EQP}\subseteq\mathrm{ZQP}\subseteq\mathrm{BQP}. $$

Here $\mathrm{ZQP}$ has the bounded-failure, no-wrong-definite-answer convention of [[def-qa-32-zqp-promise-class]], and $\mathrm{BQP}$ uses the exact $2/3,1/3$ thresholds of [[def-qc-bqp-promise-class]].

## Facts & Assumptions

**Given:** A binary-string promise pair and the class definitions and suppliers below. Prove each containment for the stated QC14 gate alphabet and full-list uniformity.

[F1] [[def-promise-problem]]: PromiseP has one deterministic polynomial-time machine correct on $Y$ and $N$, with no condition off the promise.

[F2] [[lem-polynomial-time-computations-have-logspace-uniform-circuits]]: every fixed deterministic polynomial-time machine has a polynomial-size logspace-uniform Boolean circuit family computing its answer.

[F3] [[lem-qa-32-indexed-to-full-list-conversion]]: a logspace indexed Boolean family can be emitted as a complete self-delimiting list by a deterministic polynomial-time generator.

[F4] [[lem-qa-32-exact-clifford-t-boolean-circuit-embedding]]: each such Boolean circuit has an exact QC14 reversible embedding, with a polynomial-time full-list compiler.

[F5] [[def-qa-32-eqp-promise-class]]: EQP requires acceptance probability one on YES and zero on NO for a full-list QC14 family.

[F6] [[def-qa-32-zqp-promise-class]]: ZQP has a polynomial-time label decoder, no wrong definite answer, and correct definite answer probability at least $2/3$ on each promised side.

[F7] [[def-qc-bqp-promise-class]]: BQP requires acceptance probability at least $2/3$ on YES and at most $1/3$ on NO, with the same full-list QC14 model.

[F8] [[thm-qc-output-acceptance-law-normalizes]]: the finite output strings of the witnessed computation have a normalized probability law.

## Proof

1.1 Let $\Pi=(Y,N)\in\mathrm{PromiseP}$ and choose its deterministic polynomial-time decider $M$ from [F1]. The Boolean circuit family of [F2] computes $M$; [F3] gives a polynomial-time full-list generator, and [F4] compiles each list into a QC14 family whose one-bit target is $1$ exactly when $M$ accepts. The two polynomial-time stages compose to one fixed deterministic multitape generator $G$ on input $1^n$: it emits the Boolean list and compiles that list to the complete QC14 description. Its intermediate list length and total running time are polynomial in $n$. Convert $G$ to one tape by storing the finitely many simulated tape contents in aligned tracks of a finite product alphabet, with one head marker per tape. During a computation of at most $P(n)$ steps, each track uses at most $n+P(n)+O(1)$ cells; a constant number of sweeps across this interval simulates each transition, so the one-tape time is $O(P(n)(n+P(n)))$. Write the generated circuit description on an output track starting at cell $0$; at halt, a cleanup sweep replaces each product symbol by its output-track component, leaving the exact binary description followed by blanks on the final tape. This is one fixed deterministic one-tape polynomial-time generator as required by [F5]. Use the target bit as the acceptance predicate. For every $x\in Y$ the acceptance probability is $1$, and for every $x\in N$ it is $0$, so $\Pi\in\mathrm{EQP}$. [given, F1, F2, F3, F4, F5, construct]

1.2 If $\Pi\in\mathrm{EQP}$, take its witnessing family and define $D_n(x,z)=\mathrm{YES}$ when its acceptance predicate accepts and $D_n(x,z)=\mathrm{NO}$ otherwise. This is a total polynomial-time decoder. The exact probabilities in [F5] make the wrong definite label have probability zero and the correct definite label have probability one on each promised side; therefore the same family witnesses $\Pi\in\mathrm{ZQP}$. [F5, F6, construct]

2.1 If $\Pi\in\mathrm{ZQP}$, keep its full-list family and define the BQP acceptance predicate to accept exactly when $D_n(x,z)=\mathrm{YES}$. On $Y$ this event has probability at least $2/3$. On $N$ it has probability zero, since a wrong definite YES label is forbidden. By [F8] these event probabilities are normalized, and [F7] gives $\Pi\in\mathrm{BQP}$. [given, F6, F7, F8, step 1.2, algebra] ∎
