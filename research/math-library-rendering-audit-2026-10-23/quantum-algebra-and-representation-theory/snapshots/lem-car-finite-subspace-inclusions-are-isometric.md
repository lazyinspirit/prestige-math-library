---
id: lem-car-finite-subspace-inclusions-are-isometric
kind: lemma
title: Finite-Subspace CAR Inclusions Are Isometric
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 6
deps:
  - def-finite-dimensional-car-algebra
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-real-and-complex-inner-product-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

[F4] Every finite-dimensional inner-product space has a finite orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 The generators $c_G(f)$ for $f\in F$ satisfy the defining relations of $\mathsf{CAR}^{\mathrm{alg}}(F)$. Its universal property [F2] therefore defines a unique unital $*$-homomorphism $\iota_{F,G}$ sending $c_F(f)$ to $c_G(f)$ for every $f\in F$. [given, F2, construct]

2.1 Let $d=\dim F$ and $m=\dim G$. Choose an orthonormal basis $e_1,\ldots,e_d$ of $F$ using [F4], and choose a finite vector-space basis $v_1,\ldots,v_m$ of $G$. Initialize the current orthonormal list by $u_j=e_j$ for $1\le j\le d$, and let $s$ denote its current length, initially $d$. Process $v_1,\ldots,v_m$ in order: set $r_k=v_k-\sum_{j=1}^s\langle v_k,u_j\rangle u_j$, where the current list is orthonormal; then $\langle r_k,u_j\rangle=0$ for every $j$. If $r_k\ne0$, append $r_k/\|r_k\|$; otherwise keep the list unchanged. After processing $v_k$, the list spans $F+\operatorname{span}\{v_1,\ldots,v_k\}$. Thus the resulting finite orthonormal list is a basis of $G$ and retains $e_1,\ldots,e_d$ as its initial vectors. Under these basis identifications in [F1], $\iota_{F,G}$ is the standard inclusion of the first $d$ modes into $m$ modes. If $d<m$, this is the composition of the inclusions from $r$ to $r+1$ for $d\le r<m$; each is isometric by [F3], so the composition is isometric. If $d=m$, the map is the identity and is isometric. Thus $\iota_{F,G}$ is isometric and in particular injective. [given, F1, F3, F4, step 1.1, construct, algebra] ∎

## Remarks

Only finite orthonormal bases are extended. No basis of $H$ is selected.
