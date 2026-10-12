---
id: lem-nrqm-composites-finite-naimark-compression
kind: lemma
domain: mathematics
title: "Finite Naimark compression: a finite POVM as a compression of a PVM"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-finite-effects-and-instruments, thm-continuous-functional-calculus-for-bounded-self-adjoint-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  thm-continuous-functional-calculus-for-bounded-self-adjoint-operators: mathematical-premise
  def-borel-functional-calculus-for-a-bounded-normal-operator: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Ch. 3 pp. 90-100 (bounded self-adjoint calculus)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 4 'Dirac's Bra and Ket Notation'"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H$ be a nonzero complex Hilbert space ([[def-hilbert-space]]) and $(F_1,\dots,F_n)$ a finite POVM on $H$: effects with $\sum_aF_a=I$ ([[lem-nrqm-composites-finite-effects-and-instruments]]). Let $C=\mathbb C^n$ with standard orthonormal basis $(e_a)$ and form $H\widehat\otimes C$ ([[lem-nrqm-composites-hilbert-tensor-construction]]). Then

$$W:H\to H\widehat\otimes C,\qquad W\psi:=\sum_{a=1}^nF_a^{1/2}\psi\otimes e_a,$$

is a linear isometry, the operators $P_a:=I_H\otimes T_{e_a,e_a}$ are orthogonal projections with $\sum_aP_a=I$ (a finite PVM on $\{1,\dots,n\}$, [[def-hilbert-orthogonal-projection]]), and

$$W^*P_aW=F_a\qquad(a=1,\dots,n).$$

The square roots $F_a^{1/2}$ are the positive square roots supplied by the bounded functional calculus. The construction asserts no physical realization of the ancilla.

## Facts & Assumptions

**Given:** $H$; a finite POVM $(F_a)$; the ancilla $C=\mathbb C^n$ with orthonormal basis $(e_a)$.

[F1] $0\le F_a\le I$; for the bounded self-adjoint $F_a$ the continuous functional calculus provides a unique isometric unital star-homomorphism $f\mapsto f(F_a)$; in particular $\sqrt{F_a}$ is bounded, self-adjoint, positive, satisfies $\sqrt{F_a}^2=F_a$ and commutes with $F_a$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[lem-nrqm-composites-finite-effects-and-instruments]]).

[F2] The completed tensor product has the inner product $\langle u\otimes c,u'\otimes c'\rangle=\langle u,u'\rangle\langle c,c'\rangle$, the elementary tensors span a dense subspace, and bounded operators extend as $S\otimes T$ with adjoint $S^*\otimes T^*$ ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]]).

[F3] $T_{e_a,e_a}$ is the orthogonal projection of $C$ onto $\mathbb Ce_a$; $T_{e_a,e_a}T_{e_b,e_b}=\delta_{ab}T_{e_a,e_a}$ and $\sum_aT_{e_a,e_a}=I_C$ ([[lem-nrqm-composites-finite-effects-and-instruments]], [[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

## Proof

1.1 [The isometry] The map $\psi\mapsto\sum_aF_a^{1/2}\psi\otimes e_a$ is well defined and linear; for finite sums of elementary tensors the inner product is computed by [F2], and for $\psi\in H$, $\|W\psi\|^2=\sum_{a,b}\langle F_a^{1/2}\psi,F_b^{1/2}\psi\rangle\langle e_a,e_b\rangle=\sum_a\|F_a^{1/2}\psi\|^2=\sum_a\langle F_a\psi,\psi\rangle=\langle\psi,\psi\rangle$ by [F1] and [F3]. Hence $W$ is an isometry. [given, F1, F2, F3, algebra]

2.1 [The projections] The operators $P_a=I_H\otimes T_{e_a,e_a}$ are orthogonal projections by [F2] and [F3]; distinct ones are orthogonal and $\sum_aP_a=I_H\otimes I_C=I$ by [F3]. [step 1.1, F2, F3, algebra]

3.1 [Compression] Compute the adjoint directly: for $\xi\in H$, vectors $\xi_a\in H$ and scalars $z_a$, $\bigl\langle W\xi,\sum_az_a\xi_a\otimes e_a\bigr\rangle=\sum_a\overline{z_a}\langle F_a^{1/2}\xi,\xi_a\rangle=\sum_a\overline{z_a}\langle\xi,F_a^{1/2}\xi_a\rangle$ by [F2] and [F1], so $W^*\bigl(\sum_az_a\xi_a\otimes e_a\bigr)=\sum_az_aF_a^{1/2}\xi_a$; in particular $W^*(\xi\otimes e_a)=F_a^{1/2}\xi$. Then $P_aW\psi=F_a^{1/2}\psi\otimes e_a$ and $W^*P_aW\psi=F_a^{1/2}F_a^{1/2}\psi=F_a\psi$ by [F1]. [step 1.1, F1, F2, algebra] ∎
