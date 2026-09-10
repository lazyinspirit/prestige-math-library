---
id: "prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles"
kind: "proposition"
title: "Riemannian metrics induce metrics on dual tensor and exterior bundles"
deps: ["thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms", "thm-universal-property-of-the-finite-dimensional-exterior-power", "lem-wedge-monomials-in-a-dual-basis-form-a-basis", "thm-universal-property-of-module-tensor-products", "thm-tensor-product-basis-from-bases"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A Riemannian metric induces smooth metrics on dual, tensor and exterior bundles. On decomposable covectors, $\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle=\det(\langle\alpha_i,\beta_j\rangle)$; increasing orthonormal wedge monomials have norm one.

## Facts & Assumptions

**Given:** A Riemannian metric $g$ on a smooth manifold.

[F1] [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]: $\flat:TM\to T^*M$ and $\sharp:T^*M\to TM$ are smooth inverse bundle isomorphisms.

[F2] [[thm-universal-property-of-the-finite-dimensional-exterior-power]]: Let $A:V^k\to W$ be an alternating $k$-linear map into a real vector space $W$. Then there is a unique linear map $$ \widetilde A:\bigwedge^kV\to W $$ such that $$ \widetilde A(v_1\wedge\cdots\wedge v_k)=A(v_1,\ldots,v_k) $$ for all $v_1,\ldots,v_k\in V$.

[F3] [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]: Let $e_1,\ldots,e_n$ be a basis of $V$, with dual basis $e^1,\ldots,e^n$. Then the wedges $$ e^{i_1}\wedge\cdots\wedge e^{i_k}\qquad (1\le i_1<\cdots<i_k\le n) $$ form a basis of $\operatorname{Alt}^k(V)$.

[F4] [[thm-universal-property-of-module-tensor-products]]: Let $R$ be a unital ring, $M$ a right $R$-module, $N$ a left $R$-module, and $$\tau:M\times N\longrightarrow M\otimes_RN,\qquad \tau(m,n)=m\otimes n.$$ The map $\tau$ is balanced (def-balanced-and-bilinear-maps). For every abelian group $A$ and every balanced map $b:M\times N\to A$, there is a unique group homomorphism $$\overline b:M\otimes_RN\longrightarrow A$$ such that $\overline b(m\otimes n)=b(m,n)$ for all $m,n$. Consequently composition with $\tau$ is a bijection $$\operatorname{Hom}_{\mathbf{Ab}}(M\otimes_RN,A)\cong\operatorname{Bal}_R(M,N;A).$$

[F5] [[thm-tensor-product-basis-from-bases]]: Let $R$ be a commutative ring. If $M$ is free with basis $(e_i)_{i\in I}$ and $N$ is free with basis $(f_j)_{j\in J}$, then $M\otimes_RN$ is free with basis $$\bigl(e_i\otimes f_j\bigr)_{(i,j)\in I\times J}.$$ Equivalently, the canonical map $R^{(I\times J)}\to M\otimes_RN$ sending the standard basis vector at $(i,j)$ to $e_i\otimes f_j$ is an isomorphism. This includes an empty basis in either factor.

## Proof

**Proof technique:** direct.

1.1 Define the dual pairing by $\langle\alpha,\beta\rangle=g(\alpha^\sharp,\beta^\sharp)$. It is positive definite and smooth because $\sharp$ is a smooth isomorphism. Define the tensor pairing on pure tensors by the product of the pairings of the factors and extend multilinearly; the tensor universal property applied successively in each list makes this well defined. Here the base ring is $\mathbb R$, and multilinearity implies balance in each adjacent pair of factors. The descended maps are real linear because scaling an elementary tensor scales the product, and elementary tensors generate. The tensor-product-basis theorem, iterated over the finitely many factors, gives a basis of products of orthonormal basis vectors. Its Gram matrix is the identity, so the pairing is positive definite. [F1, F4, F5, given]

2.1 The determinant is multilinear and alternating in each of its two lists, so the exterior universal property, applied twice, gives a bilinear pairing on the two exterior powers. In an orthonormal covector basis, its matrix on increasing wedge monomials is the identity: equal index lists give determinant one, and different lists give a zero row. The wedge-basis theorem therefore proves positive definiteness and the stated normalization, with no factor $k!$. [F2, F3, step 1.1]

3.1 Local smooth orthonormal frames are obtained from a coordinate frame by $w_j=e_j-\sum_{i<j}g(e_j,u_i)u_i$, $u_j=w_j/\sqrt{g(w_j,w_j)}$. Linear independence makes each denominator positive; induction makes all coefficients smooth. In these frames the constructed metrics have constant matrices, hence are smooth. Their intrinsic pairing formulas prove agreement on overlaps. For $k=0$ the empty determinant is one; for zero exterior spaces the metric is vacuous. [step 1.1, step 2.1] ∎

## Source locator

Lee, pp.330 and 341–342, local orthonormal frames and dual metrics; Problem 16-18(a), pp.437–438, determinant pairing on exterior powers. Tensor existence and product bases use the two declared algebra theorems over the field of real numbers.
