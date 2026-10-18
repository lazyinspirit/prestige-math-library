---
id: thm-finite-dimensional-car-algebra-is-matrix-algebra
kind: theorem
title: Finite-Dimensional CAR over an Inner-Product Space Is a Matrix Algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 5
deps:
  - def-finite-dimensional-car-algebra
  - def-finite-mode-car-algebra
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
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
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.2–6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1–4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Let $F$ be a finite-dimensional complex inner-product space of dimension $n$, and let $\mathsf{CAR}^{\mathrm{alg}}(F)$ be the algebra of [[def-finite-dimensional-car-algebra]]. For any orthonormal basis of $F$, the assignment to the $n$ standard finite-mode annihilation and creation generators identifies $\mathsf{CAR}^{\mathrm{alg}}(F)$ with $\mathsf{CAR}^{\mathrm{alg}}_n$. It therefore has a unique finite-dimensional universal C*-norm, and its completion is $*$-isomorphic to $M_{2^n}(\mathbb C)$. Every unital $*$-representation of this completion on a nonzero Hilbert space is isometric.

## Facts & Assumptions
**Given:** A finite-dimensional complex inner-product space $F$, with inner product linear in the first variable, and an orthonormal basis $e_1,\ldots,e_n$.

[F1] The algebra $\mathsf{CAR}^{\mathrm{alg}}(F)$ is the universal unital $*$-algebra generated complex-linearly by $c(f)$ with $\{c(f),c(g)\}=0$, $\{c(f)^*,c(g)^*\}=0$, and $\{c(f)^*,c(g)\}=\langle g,f\rangle1$ ([[def-finite-dimensional-car-algebra]]).

[F2] The standard finite-mode algebra is universal for $\{a_i,a_j\}=0$, $\{a_i^\dagger,a_j^\dagger\}=0$, and $\{a_i,a_j^\dagger\}=\delta_{ij}1$ ([[def-finite-mode-car-algebra]]).

[F3] The standard finite-mode algebra has universal C*-completion $M_{2^n}(\mathbb C)$, and every unital $*$-representation on a nonzero Hilbert space is isometric ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).

[F4] Every finite-dimensional inner-product space has a finite orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 A finite orthonormal basis exists by [F4]; fix the basis in Given. For $f=\sum_{j=1}^n\lambda_j e_j$, set $C(f)=\sum_j\lambda_j a_j^\dagger$ in the standard finite-mode algebra. Since the inner product is linear in the first variable, $\langle g,f\rangle=\sum_j\mu_j\overline{\lambda_j}$ when $g=\sum_j\mu_j e_j$. Bilinearity of the anticommutator and the finite-mode relations give $\{C(f),C(g)\}=0$, $\{C(f)^*,C(g)^*\}=0$, and $\{C(f)^*,C(g)\}=\sum_j\overline{\lambda_j}\mu_j\,1=\langle g,f\rangle1$. Thus [F1] gives a unital $*$-homomorphism $\Phi:\mathsf{CAR}^{\mathrm{alg}}(F)\to\mathsf{CAR}^{\mathrm{alg}}_n$. [given, F1, F2, F4, algebra]

2.1 Conversely, the elements $c(e_j)^*$ and $c(e_j)$ in $\mathsf{CAR}^{\mathrm{alg}}(F)$ satisfy the standard finite-mode relations by [F1] and orthonormality. The universal property [F2] gives $\Psi:\mathsf{CAR}^{\mathrm{alg}}_n\to\mathsf{CAR}^{\mathrm{alg}}(F)$. The maps $\Phi\Psi$ and $\Psi\Phi$ fix, respectively, every standard generator and every $c(e_j)$ and its adjoint. Since the $e_j$ span $F$, linearity makes them fix all generators; hence the maps are inverse $*$-isomorphisms. [given, F1, F2, step 1.1, algebra]

3.1 By [F3] and step 2.1, the finite-mode universal C*-norm transports to $\mathsf{CAR}^{\mathrm{alg}}(F)$ and its completion is $M_{2^n}(\mathbb C)$. The same transport identifies any unital $*$-representation of this completion with a unital representation of the standard finite-mode algebra. Such a representation is isometric by [F3]. If $n=0$, both algebras are $\mathbb C$ and the identity representation is isometric as well. [F3, step 2.1, algebra] ∎

## Remarks

Changing the orthonormal basis changes the generators by a unitary linear transformation of $F$. The basis-free universal presentation gives the same algebra, and the transported finite matrix norm is independent of that choice because every unital representation of the finite matrix algebra is isometric.
