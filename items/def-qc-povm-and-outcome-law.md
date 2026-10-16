---
id: def-qc-povm-and-outcome-law
kind: definition
title: "Finite POVMs and their outcome law"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-non-negative-and-positive-operator, def-qc-density-operator, def-trace-of-an-endomorphism, def-qc-finite-positive-effect-family, lem-qc-complete-effect-family-members-are-effects, def-dimension, def-real-and-complex-inner-product-space, def-vector-space-of-linear-maps]
justified_by: [thm-qc-povm-probabilities-normalize]
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space; the pairing is linear in its first argument ([[def-dimension]], [[def-real-and-complex-inner-product-space]]). Write $\mathcal L(H)$ for its complex-linear endomorphisms ([[def-vector-space-of-linear-maps]]) and let $\Omega$ be a finite nonempty outcome set. A **finite POVM** on $H$ with outcomes $\Omega$ is a family $E=(E_a)_{a\in\Omega}$ with each $E_a$ nonnegative and $\sum_{a\in\Omega}E_a=I_H$; after any enumeration of $\Omega$, these operators form the finite complete positive family of [[def-qc-finite-positive-effect-family]]. Reordering does not alter the finite sum. The complete-family lemma [[lem-qc-complete-effect-family-members-are-effects]] shows that every $E_a$ also has nonnegative complement $I_H-E_a$, so each is an effect.

For a density operator $\rho$ on $H$ (a nonnegative operator of trace one, [[def-qc-density-operator]]), its **POVM outcome weights** are

$$p_\rho(a):=\operatorname{tr}(\rho E_a),\qquad a\in\Omega.$$

Here $\operatorname{tr}$ is the finite-dimensional endomorphism trace ([[def-trace-of-an-endomorphism]]).

The positivity and normalization of these weights are proved in [[thm-qc-povm-probabilities-normalize]]. A POVM specifies this outcome law; it does not by itself prescribe a conditional output state.
