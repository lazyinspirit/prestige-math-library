---
id: lem-fock-creation-annihilation-satisfy-car
kind: lemma
title: Fock Creation and Annihilation Operators Satisfy the CAR
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 1
deps:
  - def-fermionic-fock-space-over-hilbert-space
  - def-hilbert-exterior-power-and-induced-operator
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-countable-choice
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - lem-nrqm-composites-hilbert-tensor-construction
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space with inner product linear in the first variable, and let $\mathcal F_-(H)$ be its fermionic Fock space. The creation rule $C(f)\xi=f\wedge\xi$ extends to a bounded operator on $\mathcal F_-(H)$ with $\|C(f)\|=\|f\|$. Writing $A(f)=C(f)^*$ for its adjoint, one has, for all $f,g\in H$,

$$ \{C(f),C(g)\}=0,\qquad \{A(f),A(g)\}=0,\qquad \{A(f),C(g)\}=\langle g,f\rangle I. $$

Thus $f\mapsto C(f)$ is a bounded complex-linear CAR family in the convention of [[def-finite-dimensional-car-algebra]].

## Facts & Assumptions
**Given:** Countable Choice, a complex Hilbert space $H$, its fermionic Fock space, and vectors $f,g\in H$.

[F1] The Fock space is the Hilbert completion of the orthogonal direct sum of the Hilbert exterior powers; the vacuum is $1\in\Lambda^0H$ ([[def-fermionic-fock-space-over-hilbert-space]]).

[F2] The local tensor powers use the product pairing, their antisymmetrizers are the signed permutation averages $A_n$, and $x_1\wedge\cdots\wedge x_n=\sqrt{n!}A_n(x_1\otimes\cdots\otimes x_n)$. Wedges of decomposable vectors have inner product $\langle x_1\wedge\cdots\wedge x_k,y_1\wedge\cdots\wedge y_k\rangle=\det[\langle x_i,y_j\rangle]$ ([[def-hilbert-exterior-power-and-induced-operator]]).

[F3] The inner product on $H$ is linear in its first variable and conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[A1] Countable Choice is assumed for the canonical Hilbert tensor/Fock construction and Hilbert-space adjoints ([[def-countable-choice]], [[def-qft-fock-and-test-spaces]], [[def-hilbert-space-adjoint]]).

[F4] Under [A1], every bounded operator on a Hilbert space has a bounded adjoint, and $\|T^*\|=\|T\|$ ([[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F5] Under Countable Choice, the canonical fermionic Fock creation and annihilation operators are bounded adjoints with norms $\|f\|$ and satisfy the CAR on the whole Fock space, using the second-variable-linear pairing $\langle f,g\rangle_2$ ([[lem-qft-fock-ccr-car]]).

[F6] The canonical Fock space is the square-summable direct sum of antisymmetric tensor sectors; its pairing is $\langle f,g\rangle_2=\langle g,f\rangle$, its vacuum is $(1,0,\ldots)$, and sector creation is $c^\dagger(f)\xi=\sqrt{n+1}A_{n+1}(f\otimes\xi)$ ([[def-qft-fock-and-test-spaces]]).

[F7] Completed Hilbert tensor products have the product pairing and dense elementary tensors; completions are identified by the unique surjective linear isometry fixing the dense algebraic tensor product ([[lem-nrqm-composites-hilbert-tensor-construction]]).

## Proof

1.1 Reverse the canonical second-variable pairing as in [F6], so all tensor pairings are linear in the first variable. The identity on elementary tensors preserves the product pairings of [F2, F7]; by their dense spans and completion uniqueness it extends, degree by degree, to a surjective linear isometry between the local and canonical tensor powers. It intertwines every permutation on the dense elementary tensors and hence the finite averages $A_n$, so it restricts to an isometry $J_n$ of their antisymmetric sectors; set $J_0=I_{\mathbb C}$. Their orthogonal direct sum is an isometry on finite sector sums. The local Fock space is its completion by [F1], and finite sector sums are dense in the canonical square-summable Fock space by [F5, F6]. Thus it extends to a surjective linear isometry $J$ between the Fock spaces, taking the local vacuum to the canonical vacuum. [given, A1, F1, F2, F3, F5, F6, F7, construct]

2.1 The permutation averages satisfy $A_{n+1}(I\otimes A_n)=A_{n+1}$: applying any permutation of the last $n$ factors before $A_{n+1}$ multiplies it by that permutation's sign, and the signed average cancels this sign. Hence, for $n\ge1$, on a decomposable $n$-wedge $\xi=x_1\wedge\cdots\wedge x_n$, the normalization in [F2] gives $c^\dagger(f)J_n\xi=\sqrt{n+1}\sqrt{n!}A_{n+1}(f\otimes A_n(x_1\otimes\cdots\otimes x_n))=J_{n+1}(f\wedge\xi)$ by [F6]. For $n=0$, both sides send the scalar vacuum to $f$. Thus the local creation rule on its dense decomposable subspace is $J^{-1}c^\dagger(f)J$. [F1, F2, F6, step 1.1, algebra]

3.1 By [F5] and step 2.1, $C(f)$ extends to $J^{-1}c^\dagger(f)J$ with norm $\|f\|$. The adjoint identity and uniqueness in [F4] give $A(f)=J^{-1}c(f)J$. Transporting the canonical CAR of [F5] through $J$ gives the two zero anticommutators and $\{A(f),C(g)\}=\langle f,g\rangle_2 I=\langle g,f\rangle I$ by [F6]. Creation is complex-linear in $f$ on the dense wedge subspace and therefore after bounded extension. This includes $f=0$ and $H=\{0\}$, whose Fock space retains the vacuum line. [given, A1, F1, F4, F5, F6, step 1.1, step 2.1, algebra] ∎

## Remarks

This proof transports the canonical published mathematical Fock result through the explicit normalization and pairing identification; it does not reprove that supplier. The annihilation map $f\mapsto A(f)$ is conjugate-linear under the stated first-variable-linear inner-product convention. The creation map $f\mapsto C(f)$ is complex-linear.
