---
id: thm-ribbon-evaluation-from-colored-braid-word-procedure-properties
kind: theorem
title: "Correctness and termination of the colored-braid evaluation procedure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - alg-ribbon-evaluation-from-colored-braid-word
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, Theorem 2.5 and §§3–4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

For every valid input of the colored-braid evaluation algorithm, where the braid word has $m$ letters and the total tensor-product dimension is $D$, the procedure terminates after exactly $m$ crossing-matrix updates and one finite pivotal-trace contraction. It returns the ribbon-category evaluation of that framed colored braid closure in the given matrix realization. The stated bound concerns the number of matrix updates; each update is a finite exact matrix multiplication over the effective field.

## Statement references

[[alg-ribbon-evaluation-from-colored-braid-word|Colored-braid evaluation algorithm]]

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, Theorem 2.5 and §§3–4](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** A valid effective matrix input, a color-preserving braid word of length $m$, and the algorithm specified above.

[F1] The algorithm initializes the identity matrix, multiplies the typed positive or inverse braiding matrix for each word letter, checks final color preservation, and returns the finite contraction $\operatorname{ev}_{W^\vee}((J_WM_\beta)\otimes1_{W^\vee})\operatorname{coev}_W$ ([[alg-ribbon-evaluation-from-colored-braid-word]]).

## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement and [F1].

1.1 After $j$ updates, induction on $j$ shows that the running matrix is the composite of the first $j$ typed crossing maps in composition order. The base case $j=0$ is the identity of $W$; the update rule in [F1] composes exactly the next generator or its inverse, proving the induction step. There are precisely $m$ letters, so there are precisely $m$ updates. [F1, given, induction]

2.1 At $j=m$, [F1] identifies the matrix with $M_\beta$. Its final-color check makes it an endomorphism of $W$, and the output contraction is the categorical pivotal trace of that endomorphism, hence the defined closure evaluation. Every update is one finite matrix multiplication and the last contraction is finite; the effective-field procedures terminate, so the algorithm terminates and has the asserted value. [F1, step 1.1, given, construct] ∎
