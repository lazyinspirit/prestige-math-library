---
id: lem-rosenbrock-matrix-inverse-perturbation
kind: lemma
title: Matrix inverse perturbation identity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–37"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
verification:
  precheck: pending
---

## Statement

If $P,Q\in\mathbb R^{d\times d}$ are invertible, then $P^{-1}-Q^{-1}=P^{-1}(Q-P)Q^{-1}$. Consequently, for any submultiplicative matrix norm,
$$
\|P^{-1}-Q^{-1}\|\le\|P^{-1}\|\,\|Q-P\|\,\|Q^{-1}\|.
$$

## Facts & Assumptions

**Given:** Invertible square matrices $P,Q$ of the same size and a submultiplicative matrix norm.

[A1] Submultiplicativity means $\|BC\|\le\|B\|\|C\|$ for composable matrices.

## Proof

1.1 Since $Q-P=P(P^{-1}-Q^{-1})Q$, multiplication on the left by $P^{-1}$ and on the right by $Q^{-1}$ yields $P^{-1}-Q^{-1}=P^{-1}(Q-P)Q^{-1}$. [given, algebra]

1.2 Apply submultiplicativity [A1] to the three factors in the identity of step 1.1 to obtain the stated norm bound. [A1, step 1.1, algebra] ∎
