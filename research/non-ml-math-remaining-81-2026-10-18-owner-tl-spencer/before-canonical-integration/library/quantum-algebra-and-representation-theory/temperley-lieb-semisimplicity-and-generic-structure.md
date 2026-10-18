---
page: temperley-lieb-semisimplicity-and-generic-structure
title: "Temperley–Lieb Semisimplicity and Generic Structure"
status: draft
items:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - lem-temperley-lieb-link-state-gram-determinant
  - lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c
  - thm-temperley-lieb-complex-semisimplicity-classification
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
  - def-temperley-lieb-jones-wenzl-recursion
  - lem-temperley-lieb-jones-wenzl-recursion-properties
  - thm-temperley-lieb-trace-degenerates-at-first-root-boundary
  - lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective
  - thm-temperley-lieb-spencer-jones-wenzl-existence-criterion
examples: []
---

This page fixes the loop convention $\delta=q+q^{-1}$ and the recurrence for quantum integers before stating any parameter criterion, and distinguishes the complex parameter $\kappa=\operatorname{ord}(q^2)$ from the recurrence quantum characteristic. The A-page proves the link-state Gram determinant, derives the complex semisimplicity regimes, constructs the Temperley–Lieb closure trace directly, and proves that its first root-boundary degeneracy at rank $\ell-1$ can occur while the algebra remains semisimple.

The complex cases remain separate: $\kappa=1$ is semisimple at every rank; $\kappa=2$ has rank zero semisimple and, from rank one onward, the odd/even split at $\delta=0$; and for $\kappa\ge3$, semisimplicity holds exactly below rank $\kappa$. The trace form is a distinct test from algebra semisimplicity. No Hecke trace descent is assumed; [[thm-the-ocneanu-markov-trace-exists-and-is-unique]] supplies only the Hecke-tower trace, and [[def-temperley-lieb-quotient-and-jones-specialization]] explicitly leaves trace descent through its localized quotient unproved.

The Spencer quantum-characteristic statement is retained at full field scope as [[thm-temperley-lieb-spencer-jones-wenzl-existence-criterion]], but its required composition-factor argument is escalated because it is not yet proved locally. It is not a logical supplier. The field criterion is not an integral-ring descent statement, and a failed Jones–Wenzl recursion is not a nonexistence proof.

## Results

- [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]] fixes the recurrence and distinguishes the complex order $\ell$ from Spencer's field characteristic digits.
- [[lem-temperley-lieb-link-state-gram-determinant]] derives the Gram determinant from the capping form and link-state basis.
- [[lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c]] proves the exact cellular criterion over $\mathbb C$; [[thm-temperley-lieb-complex-semisimplicity-classification]] handles every complex order separately.
- [[def-temperley-lieb-normalized-markov-trace-by-closure]] and [[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]] define and prove the local trace rules without assuming Hecke descent.
- [[def-temperley-lieb-jones-wenzl-recursion]] states the denominator range; [[lem-temperley-lieb-jones-wenzl-recursion-properties]] proves idempotence, annihilation, primitivity, and trace value.
- [[thm-temperley-lieb-trace-degenerates-at-first-root-boundary]] records the semisimple-but-trace-degenerate case $n=\ell-1$ for $\ell\ge3$.
- [[lem-temperley-lieb-jones-wenzl-projector-exists-iff-trivial-projective]] proves the elementary projective-idempotent bridge; the arbitrary-field completion remains explicitly escalated in [[thm-temperley-lieb-spencer-jones-wenzl-existence-criterion]].

## Reading route

Use [[temperley-lieb-cellularity-and-representation-theory]] for the link-state modules, capping form, and cellular datum. The page-level route through [[hecke-markov-traces-and-polynomial-link-invariants]] is contextual: its Hecke trace and localized quotient are not logical substitutes for the locally defined Temperley–Lieb trace.

Companion: [[temperley-lieb-semisimplicity-and-generic-structure-examples]].
