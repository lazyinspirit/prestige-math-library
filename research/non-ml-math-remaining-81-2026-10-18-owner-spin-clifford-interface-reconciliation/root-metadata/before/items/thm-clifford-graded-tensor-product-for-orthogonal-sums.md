---
id: thm-clifford-graded-tensor-product-for-orthogonal-sums
kind: theorem
title: "The graded tensor product for orthogonal sums of quadratic spaces"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 4
deps:
  - def-clifford-graded-algebra-module-and-tensor-product
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-quotient-has-canonical-z2-grading
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-tensor-product-basis-from-bases
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2, Proposition 1.3"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1, Proposition 1.6"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $k$ be a field of characteristic not $2$, and let $(V,Q)$ and $(W,R)$ be finite-dimensional quadratic spaces over $k$, with associated symmetric bilinear forms $B_Q,B_R$ defined by $B_Q(v,v')=(Q(v+v')-Q(v)-Q(v'))/2$ and likewise for $R$. Give $V\oplus W$ the orthogonal-sum form $(Q\oplus R)(v,w)=Q(v)+R(w)$. With each Clifford generator odd in the canonical grading of [[lem-clifford-quotient-has-canonical-z2-grading]], the canonical map

$$\Phi:\mathrm{Cl}(V\oplus W,Q\oplus R)\longrightarrow\mathrm{Cl}(V,Q)\widehat\otimes_k\mathrm{Cl}(W,R),\qquad (v,w)\longmapsto\bar v\otimes1+1\otimes\bar w$$

is an isomorphism of graded $k$-algebras. No nondegeneracy assumption is needed.

## Facts & Assumptions

**Given:** The field $k$, finite-dimensional quadratic spaces $(V,Q)$ and $(W,R)$, and the displayed orthogonal-sum form.

[F1] In the graded tensor product, homogeneous factors multiply by $(a\otimes b)(a'\otimes b')=(-1)^{|b||a'|}aa'\otimes bb'$ ([[def-clifford-graded-algebra-module-and-tensor-product]]).

[F2] In a Clifford algebra the canonical image satisfies $\bar v^{\,2}=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F3] A linear map into a unital associative $k$-algebra satisfying $f(x)^2=S(x)1$ extends uniquely to $\mathrm{Cl}(X,S)$ ([[thm-universal-property-of-clifford-algebra]]).

[F4] If $X$ is finite-dimensional, $\dim_k\mathrm{Cl}(X,S)=2^{\dim X}$, including degenerate $S$ ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F5] Each canonical Clifford generator is odd in the quotient grading ([[lem-clifford-quotient-has-canonical-z2-grading]]).

[F6] Tensors of basis elements form a basis of the tensor product of finite-dimensional vector spaces ([[thm-tensor-product-basis-from-bases]]).

## Proof

**Proof technique:** construct the universal map and compare dimensions.

1.1 For $v\in V$ and $w\in W$, set $c(v,w)=\bar v\otimes1+1\otimes\bar w$. Each summand is odd by [F5]. By [F1], $(\bar v\otimes1)(1\otimes\bar w)=\bar v\otimes\bar w$ and $(1\otimes\bar w)(\bar v\otimes1)=-\bar v\otimes\bar w$, so their cross terms cancel in the square. By [F2], the two squares are $Q(v)1$ and $R(w)1$, so $c(v,w)^2=(Q(v)+R(w))1$. [given, F1, F2, F5, algebra]

2.1 By [F3], the linear map $(v,w)\mapsto c(v,w)$ extends uniquely to a unital algebra homomorphism $\Phi$ with the stated generator values. It preserves parity because every generator maps to an odd element by [F5]. [given, F3, F5, step 1.1, construct]

3.1 The image of $\Phi$ contains $\bar v\otimes1$ by taking $(v,0)$ and $1\otimes\bar w$ by taking $(0,w)$. These elements generate both Clifford factors, and [F4] gives finite bases consisting of products of canonical generators; their elementary tensors span the graded tensor product by [F6]. Thus $\Phi$ is surjective. [F4, F6, step 2.1, algebra]

4.1 By [F4], the source has dimension $2^{\dim V+\dim W}$, and [F6] gives the same dimension for the tensor-product target. A surjective linear map between equal finite-dimensional vector spaces is injective, hence $\Phi$ is an isomorphism. This includes either zero-dimensional factor and degenerate forms. [F4, F6, step 3.1, algebra] ∎
