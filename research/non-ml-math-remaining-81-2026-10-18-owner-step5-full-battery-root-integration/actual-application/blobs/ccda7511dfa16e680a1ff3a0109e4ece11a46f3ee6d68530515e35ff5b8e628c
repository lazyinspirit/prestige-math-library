---
id: lem-matrix-algebra-is-a-c-star-algebra
kind: lemma
title: Finite matrix algebras with the operator norm are C star algebras
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-c-star-algebra
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-inner-product-induces-a-norm
  - cor-finite-dimensional-normed-spaces-are-banach
dependency_level: 0
axiom_use: "No choice principle is used; the finite coordinate basis and every sum in the proof are explicit."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, complete author-hosted book"
      url: "https://linear.axler.net/LADR4e.pdf"
      locator: "Section 7F, printed pp. 280-283 / PDF pp. 293-296: finite-dimensional operator norms, the least-bound characterization, and the norm of an adjoint. The local proof derives the C*-identity directly."
---
## Statement

Let $n\ge1$, let $H_n=\mathbb C^n$ with inner product
$$\langle x,y\rangle=\sum_{j=1}^n x_j\overline{y_j}$$
and induced Euclidean norm, and let $M_n(\mathbb C)$ act on $H_n$ by matrix
multiplication. Give it the conjugate-transpose involution $a^*=\overline a^{\mathsf T}$
and the operator norm
$$\|a\|=\sup\{\|ax\|_2:x\in H_n,\ \|x\|_2\le1\}.$$
Then $M_n(\mathbb C)=\mathcal B(H_n)$ is a unital complex C*-algebra.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the standard basis of $H_n=\mathbb C^n$, and the stated inner product, matrix operations, involution, and operator norm.

[F1] [[def-real-and-complex-inner-product-space]]: a complex inner product is linear in its first variable and conjugate-linear in its second; its induced norm is $\|x\|=\sqrt{\langle x,x\rangle}$.

[F2] [[def-operator-norm]]: for a bounded linear map, the operator norm is the supremum on the unit ball; rescaling gives the bound $\|Tx\|\le\|T\|\,\|x\|$.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$ for vectors in a real or complex inner-product space.

[F4] [[cor-finite-dimensional-normed-spaces-are-banach]]: a normed complex vector space with a finite ordered basis is complete.

[F5] [[def-c-star-algebra]]: a complex C*-algebra is a complete complex normed associative algebra with submultiplicative norm and a conjugate-linear involution satisfying $(ab)^*=b^*a^*$ and $\|a^*a\|=\|a\|^2$.

[F6] [[thm-complex-numbers-form-a-field]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $z=a+bi$ has conjugate $a-bi$ and modulus $\sqrt{a^2+b^2}$; the displayed coordinate addition and multiplication laws give the conjugation identities used below.

[F7] [[cor-inner-product-induces-a-norm]]: the length induced by an inner product is a norm, so it satisfies absolute homogeneity and the triangle inequality; these properties are used for the Euclidean vector norm below.

## Proof

**Given:** The data above, with $n\ge1$.

1.1 By distributing finite sums the displayed form is linear in its first variable, and conjugating the sum gives $\langle x,y\rangle=\overline{\langle y,x\rangle}$. Also $\langle x,x\rangle=\sum_j|x_j|^2$ is nonnegative and zero only for $x=0$, by [F6]. Thus it satisfies the complex inner-product conditions [F1]. The matrix units $E_{ij}$ form a basis of the complex vector space $M_n(\mathbb C)$. Matrix multiplication is bilinear by its coordinate formula, has unit $I_n$, and is associative because both $(a(bc))_{ij}$ and $((ab)c)_{ij}$ equal $\sum_{k,l}a_{ik}b_{kl}c_{lj}$. Entrywise conjugation and transposition make $a\mapsto a^*$ conjugate-linear and give $(a^*)^*=a$ and $(ab)^*=b^*a^*$: the $(i,j)$ entry of $(ab)^*$ is $\overline{\sum_k a_{jk}b_{ki}}=\sum_k\overline{b_{ki}}\,\overline{a_{jk}}$, which is the $(i,j)$ entry of $b^*a^*$ by [F6]. Also $\langle ax,y\rangle=\langle x,a^*y\rangle$ by expanding the finite coordinate sums using [F1] and [F6]. The coordinate formula makes $x\mapsto ax$ complex-linear. For each row $i$, apply [F3] to $(a_{i1},\ldots,a_{in})$ and $(\overline{x_1},\ldots,\overline{x_n})$ to get $|\sum_j a_{ij}x_j|^2\le(\sum_j|a_{ij}|^2)\|x\|_2^2$, so $\|ax\|_2^2\le(\sum_{i,j}|a_{ij}|^2)\|x\|_2^2$ and every matrix action is bounded. Conversely, every linear map on $H_n$ is represented by its columns in this basis. Hence $M_n(\mathbb C)=\mathcal B(H_n)$. [given, F1, F3, F6, construct, algebra]

2.1 For $a,b\in M_n(\mathbb C)$ and $\|x\|_2\le1$, rescaling the unit-ball definition [F2] gives $\|abx\|_2\le\|a\|\,\|bx\|_2\le\|a\|\,\|b\|$, so taking the supremum yields $\|ab\|\le\|a\|\,\|b\|$. For any matrix $a$, [F3] and the adjoint identity in step 1.1 show $\sup_{\|x\|_2,\|y\|_2\le1}|\langle ax,y\rangle|=\|a\|=\|a^*\|$: the inner supremum over $y$ equals $\|ax\|_2$ (choose $y=ax/\|ax\|_2$ if $ax\ne0$, which has unit norm by [F7]), and the adjoint identity swaps the two unit-ball suprema. Therefore $\|a^*a\|\le\|a^*\|\,\|a\|=\|a\|^2$. For every unit vector $x$, $\|ax\|_2^2=\langle ax,ax\rangle=\langle x,a^*ax\rangle\le\|a^*ax\|_2\le\|a^*a\|$ by [F1] and [F3]; taking the supremum over the nonempty unit sphere gives the reverse inequality $\|a\|^2\le\|a^*a\|$. Thus the C*-identity holds. [F1, F2, F3, F7, step 1.1, algebra]

3.1 The operator norm is nonnegative by [F2]. The vector norm is absolutely homogeneous by [F7], so the unit-ball formula gives $\|\lambda a\|=|\lambda|\|a\|$; its triangle inequality [F7] gives $\|(a+b)x\|_2\le\|ax\|_2+\|bx\|_2$ for every unit-ball vector $x$, hence $\|a+b\|\le\|a\|+\|b\|$. If $\|a\|=0$, then each basis vector $e_j$ has $\|ae_j\|_2=0$, so $ae_j=0$ by [F7]; all columns vanish and $a=0$. Conversely, $a=0$ has norm zero by the definition. Thus the operator norm is a norm. The basis $(E_{ij})_{1\le i,j\le n}$ is finite, so [F4] makes $M_n(\mathbb C)$ complete for this norm. Steps 1.1 and 2.1 supply associativity, the unit, the involution, submultiplicativity, and the C*-identity; these are exactly the clauses in [F5]. Since $n\ge1$, $I_n\ne0$, so the algebra is unital under the library's convention. [F2, F4, F5, F7, step 1.1, step 2.1, algebra] ∎

## Remarks

No choice principle is used. The matrix units, the coordinate estimates, and the finite-dimensional completeness result are all explicit.
