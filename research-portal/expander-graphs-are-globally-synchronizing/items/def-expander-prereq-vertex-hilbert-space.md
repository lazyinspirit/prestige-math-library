---
id: def-expander-prereq-vertex-hilbert-space
kind: definition
title: Finite vertex Hilbert space in the article convention
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-inner-product-space
  - math:def-inner-product-norm
  - math:def-matrices-over-a-commutative-ring
  - math:def-finite-sum-in-a-commutative-monoid
  - math:cor-inner-product-induces-a-norm
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:def-hilbert-space
  - math:def-adjoint-of-a-linear-map-between-inner-product-spaces
  - math:def-linear-map
  - math:def-linear-basis
  - math:def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - math:def-vector-space
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:lem-complex-conjugation-and-modulus-laws
dependency_roles:
  math:def-inner-product-space: mathematical-premise
  math:def-inner-product-norm: mathematical-premise
  math:def-matrices-over-a-commutative-ring: mathematical-premise
  math:def-finite-sum-in-a-commutative-monoid: mathematical-premise
  math:cor-inner-product-induces-a-norm: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  math:def-hilbert-space: mathematical-premise
  math:def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  math:def-linear-map: mathematical-premise
  math:def-linear-basis: mathematical-premise
  math:def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  math:def-vector-space: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:lem-complex-conjugation-and-modulus-laws: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $V$ be a finite set. The complex vector space $\mathbb C^V$ consists of all functions $f:V\to\mathbb C$, with addition and scalar multiplication defined pointwise. Its vertex inner product, linear in the second argument, and its induced norm are

$$\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x),\qquad \|f\|_2=\sqrt{\langle f,f\rangle}.$$

Thus $f$ and $g$ are orthogonal when $\langle f,g\rangle=0$. This is a complex Hilbert space: its induced norm metric is complete, meaning that every Cauchy sequence converges in $\mathbb C^V$.

A complex $V\times V$ matrix is an array $A=(A_{xy})_{x,y\in V}$. It acts on $\mathbb C^V$ by $(Af)(x)=\sum_{y\in V}A_{xy}f(y)$. Its conjugate transpose is the matrix $A^*$ with $(A^*)_{xy}=\overline{A_{yx}}$. An adjoint of this action is a linear map $T$ satisfying $\langle Af,g\rangle=\langle f,Tg\rangle$ for all $f,g$; here it is the action of $A^*$. The matrix is self-adjoint, or Hermitian, when $A=A^*$; in particular every real symmetric matrix, one satisfying $A_{xy}=A_{yx}\in\mathbb R$, is self-adjoint.

For comparison with the library's linear-first convention, put $(f,g)_{\mathrm{lib}}=\sum_{x\in V}f(x)\overline{g(x)}=\overline{\langle f,g\rangle}$. The two conventions have the same norm and orthogonality. The adjoint and self-adjoint matrices are also the same in both conventions. For self-adjoint $A$, the quadratic values $\langle f,Af\rangle$ and $(f,Af)_{\mathrm{lib}}$ coincide and are real. Consequently a linear-first Cauchy–Schwarz bound transfers by taking absolute values, and a linear-first self-adjoint spectral statement transfers with the same operator, eigenvectors and real eigenvalues, subject to the hypotheses of the statement used.

## Definition references

[[math:def-inner-product-space]]

[[math:def-inner-product-norm]]

[[math:def-matrices-over-a-commutative-ring]]

[[math:def-finite-sum-in-a-commutative-monoid]]

[[math:def-hilbert-space]]

[[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]]

[[math:def-linear-map]]

[[math:def-linear-basis]]

[[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum]]

[[math:def-vector-space]]

[[math:def-complex-conjugate-real-imaginary-part-and-modulus]]

[[math:lem-complex-conjugation-and-modulus-laws]]

## Justification

The finite sums are independent of enumeration and include the empty sum ([[math:def-finite-sum-in-a-commutative-monoid]]). Pointwise operations make $\mathbb C^V$ a complex vector space in the sense of [[math:def-vector-space]]. Direct expansion using [[math:def-complex-conjugate-real-imaginary-part-and-modulus]] and [[math:lem-complex-conjugation-and-modulus-laws]] shows that $(f,g)_{\mathrm{lib}}$ is linear in $f$, conjugate symmetric and has diagonal $\sum_x|f(x)|^2$, which is nonnegative and vanishes only when $f=0$; it is therefore an inner product in the library convention ([[math:def-inner-product-space]]). Its conjugate is the displayed second-linear pairing. Both have the same diagonal and hence the same induced norm ([[math:def-inner-product-norm]]), which is a norm by [[math:cor-inner-product-induces-a-norm]].

Choose an enumeration of the finite set $V$. The indicator functions of its singletons form an ordered basis in the sense of [[math:def-linear-basis]]: they span each function by its finite coordinate expansion, and evaluating a linear combination at each vertex proves independence. This includes the empty basis when $V=\varnothing$. Thus [[math:cor-finite-dimensional-normed-spaces-are-banach]] makes the induced norm complete, and [[math:def-hilbert-space]] gives the Hilbert-space designation.

An enumeration identifies the array with a finite square matrix as in [[math:def-matrices-over-a-commutative-ring]]; the displayed action is linear by distributivity, in the sense of [[math:def-linear-map]]. Interchanging the two finite sums gives $\langle Af,g\rangle=\sum_y\overline{f(y)}\sum_x\overline{A_{xy}}g(x)=\langle f,A^*g\rangle$. The action of $A^*$ is linear, so it is an adjoint under the stated convention; it is unique because pairing the difference of two candidates with every $f$, including the difference itself, forces that difference to vanish. Conjugating the adjoint identity gives the defining linear-first identity of [[math:def-adjoint-of-a-linear-map-between-inner-product-spaces]], so the same adjoint works there.

Conjugation preserves zero and absolute value ([[math:lem-complex-conjugation-and-modulus-laws]]), proving the orthogonality and Cauchy–Schwarz transfers. If $A=A^*$, the adjoint identity and conjugate symmetry give $\langle f,Af\rangle=\overline{\langle f,Af\rangle}$; the value is real and hence equals its conjugate, the library-convention value. The eigenvector equation $Af=\lambda f$ with $f\ne0$, as in [[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum]], does not involve a pairing, and self-adjointness is unchanged, so a spectral theorem in the library convention applies to the same operator and vectors whenever its own hypotheses hold.
