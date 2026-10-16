---
id: lem-qc-linear-isometry-adjoint-identities
kind: lemma
title: "Finite-dimensional linear isometries satisfy the adjoint identity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-linear-isometry-and-orthogonal-or-unitary-operator, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, thm-jordan-von-neumann-polarization]
justified_by: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Theorem 2.22"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional (have finite bases by [[def-dimension]])
complex inner-product spaces and let
$V:H\to K$ be a linear isometry. Then $V^\dagger V=I_H$. If $V$ is also
surjective, then $VV^\dagger=I_K$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$ and a linear
isometry $V:H\to K$.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a linear
isometry preserves the norm of every vector.

[F2] [[thm-jordan-von-neumann-polarization]]: for the first-argument-linear
complex pairing,
$\langle x,y\rangle=\tfrac14(\|x+y\|^2-\|x-y\|^2+i\|x+iy\|^2-i\|x-iy\|^2)$.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the
adjoint satisfies $\langle Vx,y\rangle_K=\langle x,V^\dagger y\rangle_H$.

[F4] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear
map between these finite-dimensional inner-product spaces has a unique
adjoint.

[F5] [[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]:
if $\langle u,v\rangle=0$ for every $v$, then $u=0$.

## Proof


1.1 For all $x,y\in H$, [F2] expresses each inner product using the four displayed norm squares. Applying [F1] to $x+y$, $x-y$, $x+iy$, and $x-iy$ therefore gives $\langle Vx,Vy\rangle_K=\langle x,y\rangle_H$. [given, F1, F2, algebra]

2.1 The adjoint exists by [F4]. By [F3] and step 1.1, $\langle x,(V^\dagger V-I_H)y\rangle_H=0$ for every $x,y\in H$. For each fixed $y$, conjugate symmetry and [F5] force $(V^\dagger V-I_H)y=0$, hence $V^\dagger V=I_H$. [given, F3, F4, F5, step 1.1, algebra]

3.1 If $V$ is surjective, choose for arbitrary $z\in K$ a vector $x\in H$ with $Vx=z$. Step 2.1 gives $VV^\dagger z=VV^\dagger Vx=Vx=z$, so $VV^\dagger=I_K$. The proof includes zero-dimensional spaces and uses only pointwise preimages, not a choice axiom. [given, step 2.1, choose, algebra] ∎

