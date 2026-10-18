---
id: thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi
kind: theorem
title: The complexified N=1 super-Poincare bracket data satisfy super-Jacobi
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-complexified-four-dimensional-n1-super-poincare-bracket-data
  - def-lie-superalgebra-over-complex-numbers
  - def-classical-complex-matrix-lie-algebras
  - def-tensor-product-of-modules-by-generators-and-relations
  - lem-field-is-a-commutative-ring
  - thm-universal-property-of-module-tensor-products
  - thm-commutative-ring-module-structure-on-a-tensor-product
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "José Miguel Figueroa-O'Farrill, BUSSTEPP Lectures on Supersymmetry, §I.3 and Appendix A.2–A.3"
      url: https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/BUSSTEPP.pdf
      locator: "Printed pp. 10–11 and 71–73: supercharge brackets, Lorentz action, and sign conventions. The representation and Jacobi checks are supplied here."
---

## Statement

The bracket data in [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]] define a complex Lie superalgebra.

## Facts & Assumptions

**Given:** $S_+=\mathbb C^2$, $S_-=(\mathbb C^2)^*$, $\mathfrak l=\mathfrak{sl}(S_+)\oplus\mathfrak{sl}(\mathbb C^2)$, $V=S_+\otimes S_-$, and the bracket data of [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]].

[F1] [[def-classical-complex-matrix-lie-algebras]]: each $\mathfrak{sl}_2(\mathbb C)$ factor is a Lie algebra under the matrix commutator.

[F2] [[def-complexified-four-dimensional-n1-super-poincare-bracket-data]]: $V$ is abelian, $\mathfrak l$ acts on $V,S_+,S_-$ as displayed, translations act trivially on the odd part, and the only nonzero odd bracket is the symmetric map $S_+\otimes S_-\to V$, $u\otimes\phi\mapsto u\otimes\phi$.

[F3] [[def-lie-superalgebra-over-complex-numbers]]: the bracket must have the assigned parity, satisfy graded skew symmetry and signed Jacobi, and obey odd self-Jacobi; over $\mathbb C$ the last clause follows from signed Jacobi.

[F4] [[thm-universal-property-of-module-tensor-products]]: every balanced pairing on $S_+\times S_-$ into an abelian group induces a unique homomorphism from $S_+\otimes_{\mathbb C}S_-$.

[F5] [[thm-commutative-ring-module-structure-on-a-tensor-product]]: for a commutative ring $R$, the tensor product of two $R$-modules is an $R$-module with the scalar action on elementary tensors.

[F6] [[def-tensor-product-of-modules-by-generators-and-relations]]: every tensor is a finite sum of elementary tensors.

[F7] [[lem-field-is-a-commutative-ring]]: the complex field is a commutative ring.

## Proof










1.1 By [F7], $\mathbb C$ is commutative. For fixed $A,B$, the pairings $(u,\phi)\mapsto Au\otimes\phi$ and $(u,\phi)\mapsto-u\otimes\phi B$ are complex-bilinear and balanced, so [F4] induces additive endomorphisms of $V$. By [F5], $c(u\otimes\phi)=(cu)\otimes\phi$; since $A$ and right multiplication by $B$ are complex-linear, each induced endomorphism is complex-linear on elementary tensors and hence on all of $V$ by [F6]. Thus the displayed tensor action is well-defined and complex-linear, and [F5] gives the complex-vector-space structure on $V$. [F4, F5, F6, F7, algebra]


2.1 The action $A\cdot u=Au$ is a representation by matrix multiplication. For the dual action, $[\rho_B,\rho_{B'}]\phi=-\phi[B,B']$, so it is also a representation. On each elementary tensor, the left and right actions commute, and their commutator sends $u\otimes\phi$ to $[A,A']u\otimes\phi-u\otimes\phi[B,B']$. By [F6], elementary tensors span $V$, so this proves the displayed $\mathfrak l$-action on all of $V$ is a representation. To organize the Jacobi checks, set $J(x,y,z)=(-1)^{|x||z|}[x,[y,z]]+(-1)^{|y||x|}[y,[z,x]]+(-1)^{|z||y|}[z,[x,y]]$. From graded skew symmetry, $J(x,y,z)=(-1)^{|x||z|}\bigl([x,[y,z]]-\left\lbrack[x,y],z\right\rbrack-(-1)^{|x||y|}[y,[x,z]]\bigr)$, so $J=0$ is equivalent to the derivation-form Jacobi identity; the same skew relation gives $J(y,x,z)=-(-1)^{|x||y|+|y||z|+|z||x|}J(x,y,z)$, while cyclic rotation preserves $J$. Thus one representative ordering for each parity pattern suffices. [F1, F2, F3, F6, step 1.1, algebra]




3.1 The even bracket is the semidirect bracket for the representation of $\mathfrak l$ on $V$, so its Jacobi identity has $\mathfrak l$-component equal to Jacobi in [F1] and $V$-component equal to the representation identity verified in step 2.1. Thus $\mathfrak g_{\bar0}$ is a Lie algebra. [F1, F2, step 2.1, algebra]




3.2 The action of $\mathfrak g_{\bar0}$ on $S_+\oplus S_-$ is a representation: its restriction to $\mathfrak l$ is the direct sum of the two actions in step 2.1, and the ideal $V$ acts by zero, consistently with $[\mathfrak l,V]\subseteq V$. Therefore Jacobi holds for triples with two even and one odd entry. [F1, F2, step 2.1, algebra]




3.3 The odd bracket is symmetric and is $\mathfrak l$-equivariant because $(A,B)\cdot(u\otimes\phi)=Au\otimes\phi+u\otimes(-\phi B)$; it is $V$-equivariant since both $[V,S_+\oplus S_-]$ and $[V,V]$ vanish. This is exactly Jacobi for one even and two odd entries. [F2, F3, step 2.1, algebra]




4.1 For three odd entries, each inner bracket lies in $V$, and $[V,S_+\oplus S_-]=0$; every nested-bracket term is zero. Hence Jacobi holds for this triple type. [F2, step 3.3, algebra]




5.1 The even bracket is skew because reversing $[(L,v),(L',v')]$ negates both $[L,L']$ and $L\cdot v'-L'\cdot v$. Mixed brackets are defined by the even action and graded skew symmetry; the odd bracket is symmetric by its formula. Each bracket lands in the parity-sum component. The earlier even, mixed, and all-odd checks cover every homogeneous Jacobi triple type, so the signed Jacobi identity holds. For any odd $x$, put $A=[x,[x,x]]$. Applying that identity to $(x,x,x)$ gives $A=[ [x,x],x]-A$, while graded skew symmetry and the even parity of $[x,x]$ give $[ [x,x],x]=-A$. Thus $3A=0$, and $A=0$ because $\mathbb C$ has characteristic zero. The separate odd self-Jacobi clause in [F3] therefore holds, so the data satisfy all the Lie-superalgebra axioms. [F2, F3, step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, algebra] ∎
