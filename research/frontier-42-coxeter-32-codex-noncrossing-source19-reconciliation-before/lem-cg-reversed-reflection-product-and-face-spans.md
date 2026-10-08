---
id: lem-cg-reversed-reflection-product-and-face-spans
kind: lemma
title: "Moved space of a reversed reflection product with independent normals"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps:
  - def-real-and-complex-inner-product-space
  - def-linear-independence
  - def-linear-subspace
  - def-linear-basis
  - def-dimension
  - def-linear-map
  - def-kernel-and-image-of-a-linear-map
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-rank-nullity
  - def-cg-canonical-reflection-homomorphism
  - lem-cg-reflection-representation-descends-and-root-norms
  - def-cg-brady-watt-ordered-spherical-root-complex
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-reflection-length-absolute-order-and-moved-space
  - thm-cg-finite-type-positive-definite-criterion
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in Finite Real Reflection Groups, Transactions of the American Mathematical Society 360 (2008), 4809–4844, arXiv:math/0501502"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "§2, printed pp. 2–3, for reflection length, absolute order and moved spaces; §7, proof of Theorem 7.8, printed pp. 24–25, where the authors assert M(σ)=span(v₀,…,v_d) for the reversed product associated with a maximal simplex, without isolating or proving that identity. The complete 29-page article was read."
---

## Statement

Let $(V,\langle\cdot,\cdot\rangle)$ be a finite-dimensional real inner-product space, let $k\ge0$, and let $\sigma_1,\ldots,\sigma_k\in V$ be linearly independent unit vectors ([[def-real-and-complex-inner-product-space]], [[def-linear-independence]], [[thm-finite-dimensional-orthogonal-decomposition]]). For a unit vector $v$ define the orthogonal reflection
$$R(v)x:=x-2\langle x,v\rangle v.$$
For a linear map $A:V\to V$ write $M(A):=\operatorname{im}(A-\mathrm{id}_V)$ ([[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]]). Then:

**(1) The moved space.**
$$M\bigl(R(\sigma_k)R(\sigma_{k-1})\cdots R(\sigma_1)\bigr)=\operatorname{span}(\sigma_1,\ldots,\sigma_k),$$
and its dimension is $k$. When $k=0$, the product is the identity, the span of the empty set is $\{0\}$, and the moved space is $\{0\}$.

**(2) Reflection length.** For a finite-type Coxeter system, specialize the inner-product space of (1) to $V=\mathbb R^S$ with Coxeter form $B$ ([[def-cg-real-coxeter-form-and-reflection]]); this is positive definite by [[thm-cg-finite-type-positive-definite-criterion]]. Let $\rho$ be the canonical reflection homomorphism and $T$ the reflection set ([[def-cg-canonical-reflection-homomorphism]], [[def-cg-reflection-length-absolute-order-and-moved-space]]). If $\sigma_1,\ldots,\sigma_k$ are roots, choose any $r_i\in T$ with $\rho(r_i)=R(\sigma_i)$; such reflections exist by [[lem-cg-reflection-representation-descends-and-root-norms]] (3),(4). Then
$$\ell_T(r_k r_{k-1}\cdots r_1)=\dim M\bigl(R(\sigma_k)\cdots R(\sigma_1)\bigr)=k.$$
The product order is the reverse of the root list, as in [[def-cg-brady-watt-ordered-spherical-root-complex]] (1),(2): the reflection with normal $\sigma_k$ acts first on vectors when applying the product.

**(3) Limits.** Clause (1) needs only linear independence and unit norms; the normals need not lie in a common open half-space and no Coxeter complex is needed. Clause (2) uses finite type so that the Coxeter form is a positive definite inner product. No crystallographic assumption or Choice is used.

## Facts & Assumptions

**Given:** A finite-dimensional real inner-product space and a finite list of linearly independent unit vectors; for clause (2), a finite-type Coxeter system, its canonical reflection representation and roots.

[F1] In a finite-dimensional inner-product space, $V=U\oplus U^\perp$ for every subspace $U$ ([[thm-finite-dimensional-orthogonal-decomposition]]). If a linear map sends $U$ into itself and is injective on finite-dimensional $U$, it is onto $U$ by rank-nullity ([[thm-rank-nullity]]).

[F2] For a unit vector $v$, the displayed formula gives $R(v)x-x=-2\langle x,v\rangle v$, so $R(v)-\mathrm{id}$ has image $\operatorname{span}(v)$ (take $x=v$) and $R(v)$ fixes $v^\perp$. Also $\langle R(v)x,v\rangle=-\langle x,v\rangle$, whence $R(v)^2=\mathrm{id}$, and expanding $\langle R(v)x,R(v)y\rangle$ gives $\langle x,y\rangle$ because $\langle v,v\rangle=1$. Thus it is an orthogonal reflection.

[F3] For finite-type $W$, the Coxeter form is positive definite and $\rho(W)$ preserves it. Every root has unit norm, and for every $t\in T$ its operator $\rho(t)$ is the reflection $R(\alpha)$ for a root $\alpha$ ([[thm-cg-finite-type-positive-definite-criterion]], [[lem-cg-reflection-representation-descends-and-root-norms]] (2)–(4)).

[F4] The reflection length $\ell_T(g)$ is the least number of factors from $T$ in a factorization of $g$ ([[def-cg-reflection-length-absolute-order-and-moved-space]] (1)).

[F5] The list of independent vectors $\sigma_1,\ldots,\sigma_k$ is a basis of its span $U$, so $\dim U=k$ by the definition of dimension ([[def-linear-basis]], [[def-dimension]]).

## Proof

**Proof technique:** show that the product fixes exactly the orthogonal complement of the span, then use a rank bound for products of reflections.

**Given:** The data in the Statement. For clause (1), put $U=\operatorname{span}(\sigma_1,\ldots,\sigma_k)$ and $A=R(\sigma_k)\cdots R(\sigma_1)$.

1.1 (Moved space of the product.) If $k=0$, then $A=\mathrm{id}_V$ and $M(A)=\{0\}=U$. Otherwise each $R(\sigma_i)$ sends $U$ into $U$ and fixes $U^\perp$ pointwise, so $A(U)\subseteq U$, $A$ fixes $U^\perp$, and $M(A)\subseteq U$. To prove the reverse inclusion, let $x\in U$ satisfy $Ax=x$, set $x_0=x$, and for $i=1,\ldots,k$ set $x_i=R(\sigma_i)x_{i-1}$. Then $x_k=Ax=x_0$, so $0=x_k-x_0=\sum_{i=1}^k(x_i-x_{i-1})=-2\sum_{i=1}^k\langle x_{i-1},\sigma_i\rangle\sigma_i.$ Linear independence forces every coefficient to vanish. Thus $x_i=x_{i-1}$ for every $i$, and each reflection fixes $x$; hence $x\perp\sigma_i$ for every $i$. Since $x\in U$, this gives $x\in U\cap U^\perp=\{0\}$. Therefore $(A-\mathrm{id})|_U:U\to U$ is injective, and rank-nullity makes it surjective. Thus $U\subseteq M(A)$, so $M(A)=U$ and $\dim M(A)=k$ by [F5]. [F1, F2, F5, algebra]

2.1 (Reflection-length rank bound.) Assume the finite-type hypotheses of clause (2) and let $g=r_k\cdots r_1$, so $\rho(g)=A$ by [F3]. For any two invertible linear maps $X,Y$, $XY-\mathrm{id}=(X-\mathrm{id})+X(Y-\mathrm{id}),$ hence $M(XY)\subseteq M(X)+X M(Y)$ and $\dim M(XY)\le\dim M(X)+\dim M(Y)$ because $X$ is invertible. Iterating this inequality, any factorization of $g$ into $m$ elements of $T$ gives $\dim M(\rho(g))\le m$, since each image under $\rho$ is an orthogonal reflection with one-dimensional moved space by [F3]. Step 1.1 gives $\dim M(\rho(g))=k$, so every reflection factorization has at least $k$ factors. The displayed factorization $g=r_k\cdots r_1$ has exactly $k$, and therefore $\ell_T(g)=k$, including the empty-product case. [F3, F4, step 1.1, algebra] ∎
## Remarks

- **Open supplier obligations.** The following current in-run suppliers do not yet have closed Step-3 dispositions; their statements were inspected provisionally. `def-cg-canonical-reflection-homomorphism` and `lem-cg-reflection-representation-descends-and-root-norms` supply the roots and reflection images used in clause (2), Fact [F3], and proof step 2.1. `def-cg-real-coxeter-form-and-reflection` supplies the Coxeter form and reflection convention used in clause (2), Fact [F3], and proof step 2.1. `def-cg-brady-watt-ordered-spherical-root-complex` supplies the reverse-order convention used in clause (2) and proof step 2.1. `def-cg-reflection-length-absolute-order-and-moved-space` supplies $\ell_T$ used in clause (2), Fact [F4], and proof step 2.1. `thm-cg-finite-type-positive-definite-criterion` supplies positive definiteness used in clause (2), Fact [F3], and proof step 2.1. Reconcile these exact supplier statements with these uses before clearing this item's decision.
