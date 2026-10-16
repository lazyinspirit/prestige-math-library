---
id: thm-qa-binary-field-f2-is-a-field
kind: theorem
title: "The quotient Z/2 is the binary field"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-binary-field-f2
  - def-prime
  - thm-z-mod-p-is-a-field
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the proof checks the finite divisor set and specializes the published prime-modulus theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Statement

The quotient operations on $\mathbb Z/2\mathbb Z$ make the carrier $\mathbb F_2$ of [[def-qa-binary-field-f2]] a field. This is only the modulus-$2$ specialization of the published prime-modulus theorem; it does not assert a classification of finite fields.

## Facts & Assumptions
**Given:** The binary residue carrier and its quotient operations.

[F1] [[def-qa-binary-field-f2]]: $\mathbb F_2$ is the two residue classes $[0]_2,[1]_2$ with addition and multiplication induced from $\mathbb Z$.

[F2] [[def-prime]]: an integer $p$ is prime when $p>1$ and its only positive divisors are $1$ and $p$.

[F3] [[thm-z-mod-p-is-a-field]]: for every prime $p$, the quotient operations on $\mathbb Z/p\mathbb Z$ make it a field.

## Proof

1.1 The integer $2$ is greater than $1$. If a positive integer $d$ divides $2$, write $2=dq$ with positive integer $q$. If $d=1$ it is the first allowed divisor; if $d\ne1$, then $d\ge2$, which forces $q=1$ and $d=2$. Thus the only positive divisors are $1$ and $2$, so $2$ is prime by [F2]. [given, F2, algebra]

2.1 Apply [F3] with $p=2$ using step 1.1. The carrier and both operations in [F1] are exactly those of $\mathbb Z/2\mathbb Z$, so every field axiom supplied by that specialization holds for $\mathbb F_2$. [given, F1, F3, step 1.1, algebra] ∎

