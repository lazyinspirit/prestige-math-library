---
id: thm-countable-mode-car-has-universal-inductive-limit-norm
kind: theorem
title: The Countable CAR Algebra Has the Universal Inductive-Limit Norm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 7
deps:
  - def-countable-mode-car-algebra
  - def-finite-mode-car-algebra
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - lem-finite-mode-car-occupation-matrix-units
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
  - def-hilbert-space
  - thm-square-summable-families-form-a-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
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
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.1 and 6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Let $\mathsf{CAR}_{\mathbb N}$ be the inductive-limit C*-algebra of [[def-countable-mode-car-algebra]]. A bounded CAR representation on a nonzero complex Hilbert space $H$ means a sequence of bounded linear operators $T_j$ together with specified bounded adjoints $T_j^*$, in the sense of [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], satisfying

$$ \{T_i,T_j\}=0,\qquad \{T_i^*,T_j^*\}=0,\qquad \{T_i,T_j^*\}=\delta_{ij}I_H\qquad(i,j\in\mathbb N). $$

Write $\mathcal B_{\mathrm{ad}}(H)$ for the subalgebra of $\mathcal B(H)$ consisting of bounded operators that possess bounded adjoints, with that adjoint as involution. For every such representation there is a unique contractive unital $*$-homomorphism $\rho:\mathsf{CAR}_{\mathbb N}\to\mathcal B_{\mathrm{ad}}(H)$ with $\rho(a_j)=T_j$. The inductive-limit norm on the algebraic union $\mathsf{CAR}_{\mathrm{loc}}$ equals the universal norm

$$ \|x\|_{\mathrm u}=\sup_\rho\|\rho(x)\|,\qquad x\in\mathsf{CAR}_{\mathrm{loc}}, $$

where the supremum is over these representations. The norm is finite and the family of representations is nonempty; a concrete representation is the occupation-space representation on $\ell^2(\mathcal P_{\mathrm{fin}}(\mathbb N))$ constructed in the proof. Its coordinate vectors $e_S$ form an orthonormal basis, so finite-support vectors are dense.

## Facts & Assumptions
**Given:** The finite and countably infinite-mode CAR algebras, a nonzero complex Hilbert space $H$ with inner product linear in the first variable, and a bounded CAR representation $(T_j,T_j^*)_{j\ge1}$.

[F1] $\mathsf{CAR}_{\mathbb N}$ is the completion of the increasing union $\mathsf{CAR}_{\mathrm{loc}}$ of the finite-mode C*-algebras under their isometric inclusions ([[def-countable-mode-car-algebra]], [[lem-finite-mode-car-canonical-inclusions-are-isometric]]).

[F2] Every finite-mode C*-algebra is $M_{2^n}(\mathbb C)$, and every unital $*$-representation on a Hilbert space is isometric and has the matrix-unit amplification form proved there ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).

[F3] The finite occupation operators are given on subset basis vectors by toggling one mode with sign $(-1)^{|\{s\in S:s<j\}|}$, and they satisfy the finite CAR ([[lem-finite-mode-car-occupation-matrix-units]]).

[F4] A complex Hilbert space is complete for its induced norm ([[def-hilbert-space]]), and its pairing is linear in the first variable and conjugate-linear in the second ([[def-real-and-complex-inner-product-space]]).

[F5] $\mathcal B(H)$ denotes bounded linear operators on $H$, with operator norm $\|S\|=\sup_{\|x\|\le1}\|Sx\|$ ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[F6] The operators possessing bounded adjoints form the unital $*$-subalgebra $\mathcal B_{\mathrm{ad}}(H)$: the pairing identity gives $(S+T)^*=S^*+T^*$, $(zS)^*=\overline zS^*$ and $(ST)^*=T^*S^*$, all bounded; uniqueness and conjugation give $(S^*)^*=S$ and $I^*=I$. The specified adjoint $S^*$ is characterized by $\langle Sx,y\rangle=\langle x,S^*y\rangle$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F7] $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] For every set $I$, the canonical complex square-summable family space $\ell^2(I,\mathbb C)$ is a Hilbert space, its finitely supported families are dense, and its coordinate vectors form an orthonormal basis ([[thm-square-summable-families-form-a-hilbert-space]]).

## Proof

1.1 Restrict the given family to its first $n$ modes. The quotient universal property of [[def-finite-mode-car-algebra]] gives the finite algebraic $*$-homomorphism on generators, and [F2] identifies it with a contractive unital $*$-representation $\rho_n:\mathsf{CAR}_n\to\mathcal B(H)$. If $m\le n$, the maps $\rho_n\circ\iota_{m,n}$ and $\rho_m$ agree on all generators of $\mathsf{CAR}_m$, so uniqueness of the finite quotient map gives $\rho_n\circ\iota_{m,n}=\rho_m$. [given, F1, F2, construct]

1.2 Let $\mathcal P_{\mathrm{fin}}(\mathbb N)$ be all finite subsets of $\mathbb N$, and let $\mathcal F_\infty=\ell^2(\mathcal P_{\mathrm{fin}}(\mathbb N))$ with coordinate vectors $e_S$. By [F8], this is a complex Hilbert space, the vectors $e_S$ are an orthonormal basis, and their finite span is dense. Define $c_j e_S=0$ if $j\notin S$, and $c_j e_S=(-1)^{|\{s\in S:s<j\}|}e_{S\setminus\{j\}}$ if $j\in S$; define $c_j^\dagger$ by the reverse toggle with the same sign. Each map is a partial isometry on the basis and extends boundedly, and the coefficient of each reverse basis transition shows $c_j^\dagger$ is its adjoint. For any finite set of indices, choose $n$ containing them; under the decomposition of the basis into first-$n$ and tail subsets, the first $n$ operators act as the finite occupation representation tensored with the identity. Hence the CAR hold for every pair of indices. The finite universal property gives compatible contractive representations of all $\mathsf{CAR}_n$ on $\mathcal F_\infty$, which extend to a representation $\pi_\infty$ of the inductive limit. [given, F1, F2, F3, F4, F8, construct]

2.1 Define $\rho_0$ on $\mathsf{CAR}_{\mathrm{loc}}$ by $\rho_0(x)=\rho_n(x)$ whenever $x\in\mathsf{CAR}_n$. Compatibility in step 1.1 makes this well defined, and contractivity at each stage gives $\|\rho_0(x)\|\le\|x\|$. The space $\mathcal B(H)$ is complete: for an operator-norm Cauchy sequence $(S_k)$, each $(S_kx)$ converges in $H$; its pointwise limit $Sx$ is linear and bounded because $(\|S_k\|)$ is bounded, and taking the pointwise limit in the uniform Cauchy bound shows $\|S_k-S\|\to0$. Thus $\rho_0$ extends uniquely and contractively to the completion. Products pass to limits by $\|AB\|\le\|A\|\|B\|$. For any bounded operator $A$ with a specified adjoint, [F6] and [F7] give $\|A^*y\|=\sup_{\|x\|\le1}|\langle A^*y,x\rangle|=\sup_{\|x\|\le1}|\langle Ax,y\rangle|\le\|A\|\|y\|$, hence $\|A^*\|\le\|A\|$. Conjugating [F6] shows $A$ is the adjoint of $A^*$; uniqueness gives $(A^*)^*=A$, so applying the same inequality to $A^*$ yields $\|A^*\|=\|A\|$. Therefore if $S_k\to S$, the adjoints $S_k^*$ are Cauchy and converge to some $R$; passing to the limit in [F6] gives $\langle Sx,y\rangle=\langle x,Ry\rangle$, so $R$ is the adjoint of $S$. Thus the extension takes values in $\mathcal B_{\mathrm{ad}}(H)$, preserves $*$, and is a unital $*$-homomorphism into this subalgebra. [given, F1, F4, F5, F6, F7, step 1.1, construct, algebra]

2.2 Under the basis bijection $\mathcal P_{\mathrm{fin}}(\mathbb N)\cong\mathcal P_n\times\mathcal P_{\mathrm{fin}}(\{n+1,n+2,\ldots\})$, the first $n$ toggle signs depend only on the first subset coordinate because every tail index is larger than every mode $j\le n$. Thus the restriction of $\pi_\infty$ to $\mathsf{CAR}_n$ is the finite matrix representation acting identically on each tail coordinate. The tail contains the empty subset, so it is nonzero; by the isometric amplification statement in [F2], $\|\pi_\infty(x)\|=\|x\|_{\mathsf{CAR}_n}$ for every $x\in\mathsf{CAR}_n$. [given, F2, step 1.2, algebra]

3.1 For any bounded CAR representation $\sigma$ and $x\in\mathsf{CAR}_n$, its restriction is contractive by [F2], so $\|\sigma(x)\|\le\|x\|_{\mathsf{CAR}_n}$. Step 2.2 supplies a representation attaining this norm. Therefore the supremum over all representations equals the inductive-limit norm on each finite stage. Every element of $\mathsf{CAR}_{\mathrm{loc}}$ lies in some finite stage, so the universal norm is finite and equals the inductive-limit norm on the entire union. Step 1.2 proves the representing family is nonempty. The extension in step 2.1 is unique because $\mathsf{CAR}_{\mathrm{loc}}$ is dense. [given, F1, F2, step 2.1, step 1.2, step 2.2, algebra] ∎

## Remarks

No choice axiom is used. A representation is supplied together with its bounded adjoint operators; the proof does not assert that every bounded operator on every Hilbert space has an adjoint in the absence of additional choice principles.
