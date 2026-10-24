---
page: real-complex-clifford-classification-and-graded-products
title: "Clifford Classification, Modules, and Graded Tensor Products"
status: published
items:
  - def-clifford-graded-algebra-module-and-tensor-product
  - def-real-quaternion-matrix-algebra-notation
  - lem-clifford-quotient-has-canonical-z2-grading
  - lem-clifford-zero-dimensional-algebra-is-base-field
  - lem-real-quaternions-form-a-division-algebra
  - thm-graded-module-classification-from-even-subalgebra
  - lem-real-division-algebra-tensor-identities
  - lem-clifford-even-subalgebra-signature-identification
  - lem-real-clifford-low-dimensional-models
  - thm-clifford-graded-tensor-product-for-orthogonal-sums
  - lem-real-clifford-signature-recurrences-and-periodicity
  - thm-real-complex-clifford-algebra-classification
  - thm-graded-clifford-modules-and-real-complex-types
examples: []
---

This page uses the plus-square convention $\bar v^{\,2}=Q(v)1$ and orders real signatures as $(+^p,-^q)$. Thus $\mathrm{Cl}_{1,0}\cong\mathbb R\oplus\mathbb R$ and $\mathrm{Cl}_{0,1}\cong\mathbb C$. The matrix tables apply to finite-dimensional **nondegenerate** real or complex forms; the Clifford PBW supplier itself also covers degenerate forms, but those algebras are not included in this semisimple classification.

The A-page results establish the canonical quotient parity grading, build the real coefficient-algebra table from explicit low-dimensional models and signature recurrences, derive the complex table by scalar extension, classify graded-simple modules through the even subalgebra, and prove the orthogonal-sum formula using the Koszul sign in the graded tensor product. Real, complex, and quaternionic types refer to the endomorphism division algebra of the corresponding simple even-algebra module; split factors are counted separately.

The relation between the generator map and its Clifford-algebra extension is shown here as a reading aid. In the diagram, $i_{Q\oplus R}$ is the canonical generator map from $V\oplus W$ into its Clifford algebra, $\psi(v,w)=\bar v\otimes1+1\otimes\bar w$, and $\Phi$ is its unique algebra extension. The triangle commutes on generators; the local proof establishes the algebra relations, surjectivity, and injectivity independently of the diagram.

```tikzcd
V\oplus W \arrow[r,"i_{Q\oplus R}"] \arrow[dr,"\psi"'] &
\mathrm{Cl}(V\oplus W,Q\oplus R) \arrow[d,"\Phi"]\\
& \mathrm{Cl}(V,Q)\widehat{\otimes}_k\mathrm{Cl}(W,R)
```

Here $\psi$ sends the two orthogonal summands to $\bar v\otimes1$ and $1\otimes\bar w$, respectively. The diagram records only the generator compatibility $\Phi\circ i_{Q\oplus R}=\psi$; the proof does not rely on the diagram.

## Reading prerequisites

Read [[clifford-universal-algebras-and-pbw]] first for the tensor-algebra quotient, universal property, polarized relation, and PBW basis. The current local classification uses the actual draft supplier bodies and records their still-open native acceptance checks in batch evidence.

## Scope boundary

This page supplies algebraic inputs to the later Pin/Spin, spinor, and real $KO$/ABS routes. It does not prove group covering claims, geometric Dirac/index theorems, Bott periodicity in $KO$, or a free-fermion classification. The examples and sign failures are on [[real-complex-clifford-classification-and-graded-products-examples]].
