---
page: car-algebras-majorana-generators-and-clifford-comparison
title: "CAR Algebras, Majorana Generators, and Clifford Comparison"
status: published
requires:
  - clifford-universal-algebras-and-pbw
  - fredholm-determinants-and-the-lidskii-trace-formula
  - operator-algebraic-states-and-gns-representations
items:
  - def-fermionic-fock-space-over-hilbert-space
  - def-finite-mode-car-algebra
  - thm-square-summable-families-form-a-hilbert-space
  - def-finite-dimensional-car-algebra
  - lem-finite-mode-car-occupation-matrix-units
  - lem-fock-creation-annihilation-satisfy-car
  - thm-finite-mode-car-clifford-majorana-isomorphism
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - def-countable-mode-car-algebra
  - lem-car-finite-subspace-inclusions-are-isometric
  - def-car-algebra-over-hilbert-space
  - lem-countable-mode-car-particle-hole-automorphism
  - thm-countable-mode-car-has-universal-inductive-limit-norm
  - lem-countable-mode-car-fock-representation-is-irreducible
  - thm-general-car-has-universal-inductive-limit-norm
  - thm-countable-mode-car-has-inequivalent-irreducible-representations
examples: []
---

This page fixes the complex CAR relations and the plus-$Q$ Clifford convention. It proves the finite-mode CAR algebra is $M_{2^n}(\mathbb C)$, gives the inverse Majorana maps, and constructs CAR C*-algebras over arbitrary complex Hilbert spaces as directed limits of finite-dimensional matrix algebras.

For the standard countable mode set, the occupation representation is irreducible, and composing it with particle-hole exchange gives an inequivalent irreducible representation. This proves inequivalent irreducible representations may occur. The abstract Hilbert-space Fock existence proof retains Countable Choice for the Hilbert tensor/Fock construction and adjoints; the countable occupation proof is a separate choice-free branch. Neither branch classifies all representations or proves a QFT spin-statistics theorem.

The norm completion defining the CAR algebra over an arbitrary Hilbert space assumes Countable Choice. The countable-mode CAR completion stays choice-free because its explicit rational finite-matrix subalgebra is countable and dense.

## Reading route

Read [[clifford-universal-algebras-and-pbw]] first for the plus-$Q$ Clifford quotient, its universal property, and the ordered PBW basis. This is a page-level reading route; each item lists its actual logical suppliers.

## Local results

- [[def-finite-mode-car-algebra]] defines the algebraic universal presentation.
- [[def-finite-dimensional-car-algebra]], [[thm-finite-dimensional-car-algebra-is-matrix-algebra]], and [[lem-car-finite-subspace-inclusions-are-isometric]] extend the finite matrix model and isometric embeddings to every finite-dimensional subspace.
- [[def-car-algebra-over-hilbert-space]] and [[thm-general-car-has-universal-inductive-limit-norm]] define and prove the universal inductive-limit norm over an arbitrary complex Hilbert space. [[def-fermionic-fock-space-over-hilbert-space]] and [[lem-fock-creation-annihilation-satisfy-car]] supply its Fock representation under Countable Choice by explicit normalized-wedge and pairing transport from the canonical mathematical result [[lem-qft-fock-ccr-car]].
- [[thm-square-summable-families-form-a-hilbert-space]] proves the occupation-space $\ell^2$ completion is Hilbert without Countable Choice, which keeps the explicit countable representation branch choice-free.
- [[thm-finite-mode-car-clifford-majorana-isomorphism]] proves the mutually inverse Majorana/Clifford maps with $\gamma_{2j-1}=a_j+a_j^\dagger$ and $\gamma_{2j}=i(a_j^\dagger-a_j)$.
- [[lem-finite-mode-car-occupation-matrix-units]] constructs the finite occupation representation and all matrix units; [[thm-finite-mode-car-algebra-is-full-matrix-algebra]] proves the universal finite C*-completion is the full matrix algebra.
- [[lem-finite-mode-car-canonical-inclusions-are-isometric]], [[def-countable-mode-car-algebra]], and [[thm-countable-mode-car-has-universal-inductive-limit-norm]] give the explicit standard countable construction and its choice-free occupation representation.
- [[lem-countable-mode-car-fock-representation-is-irreducible]], [[lem-countable-mode-car-particle-hole-automorphism]], and [[thm-countable-mode-car-has-inequivalent-irreducible-representations]] establish the explicit pair of inequivalent irreducible representations.

The companion page contains checked one- and two-mode calculations and the countable-mode counterexample.

Companion: [[car-algebras-majorana-generators-and-clifford-comparison-examples]].
