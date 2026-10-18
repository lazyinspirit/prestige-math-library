---
id: lem-car-finite-subspace-inclusions-are-isometric
kind: lemma
title: Finite-Subspace CAR Inclusions Are Isometric
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 6
deps:
  - def-finite-dimensional-car-algebra
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
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
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to the Representations of the Canonical Commutation and Anticommutation Relations, §4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

If $F\subseteq G$ are finite-dimensional complex inner-product subspaces of a Hilbert space $H$, the generator-preserving map $\mathsf{CAR}^{\mathrm{alg}}(F)\to\mathsf{CAR}^{\mathrm{alg}}(G)$ extends to an isometric unital $*$-homomorphism between their finite-dimensional C*-completions.

## Facts & Assumptions
**Given:** Finite-dimensional subspaces $F\subseteq G\subseteq H$ with the inherited inner products.

[F1] Each finite-dimensional CAR algebra is the standard finite-mode CAR algebra after a choice of orthonormal basis, and its universal C*-completion is a matrix algebra ([[thm-finite-dimensional-car-algebra-is-matrix-algebra]]).

[F2] The algebraic CAR presentation is universal for the linear creation generators and their adjoints ([[def-finite-dimensional-car-algebra]]).

[F3] The standard inclusion from $n$ to $n+1$ modes, in the occupation representation, is $A\mapsto A\otimes I_2$ and is isometric ([[lem-finite-mode-car-canonical-inclusions-are-isometric]]).

[F4] An orthonormal basis of a finite-dimensional subspace can be extended to an orthonormal basis of a larger finite-dimensional subspace by finite Gram–Schmidt ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 The generators $c_G(f)$ for $f\in F$ satisfy the defining relations of $\mathsf{CAR}^{\mathrm{alg}}(F)$. Its universal property [F2] therefore defines a unique unital $*$-homomorphism $\iota_{F,G}$ sending $c_F(f)$ to $c_G(f)$ for every $f\in F$. [given, F2, construct]

2.1 Let $d=\dim F$ and $m=\dim G$. Choose an orthonormal basis $e_1,\ldots,e_d$ of $F$ and extend it to $e_1,\ldots,e_m$ of $G$ using [F4]. Under the basis identifications in [F1], $\iota_{F,G}$ is the standard inclusion of the first $d$ modes into $m$ modes. If $d<m$, this is the composition of the inclusions from $r$ to $r+1$ for $d\le r<m$; each is isometric by [F3], so the composition is isometric. If $d=m$, the map is the identity and is isometric. Thus $\iota_{F,G}$ is isometric and in particular injective. [given, F1, F3, F4, step 1.1, algebra] ∎

## Remarks

Only finite orthonormal bases are extended. No basis of $H$ is selected.
