---
id: lem-clifford-even-subalgebra-signature-identification
kind: lemma
title: "Even subalgebras of real and complex Clifford algebras"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 4
deps:
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-quotient-has-canonical-z2-grading
  - lem-clifford-polarized-relations
  - lem-clifford-zero-dimensional-algebra-is-base-field
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-complex-numbers-form-a-field
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §5, Proposition 5.4 (negative-definite case and its complexification)"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Ivan Todorov, Clifford Algebras and Spinors, §1, Exercise 1.1 and equation (7), printed p. 5 (real signature formulas)"
      url: https://www.bjp-bg.com/papers/bjp2011_1_003-028.pdf
---

## Statement

Use the plus-square convention $v^2=Q(v)1$. For the real standard form $Q_{p,q}(x)=\sum_{i=1}^p x_i^2-\sum_{j=1}^q x_{p+j}^2$, write $\mathrm{Cl}_{p,q}^0$ for the even part of the canonical $\mathbb Z/2$ grading. If $p>0$, then

$$
\mathrm{Cl}_{p,q}^0\cong \mathrm{Cl}_{q,p-1};
$$

if $p=0$ and $q>0$, then $\mathrm{Cl}_{0,q}^0\cong\mathrm{Cl}_{0,q-1}$. For the standard complex form $Q_n(z)=\sum_{i=1}^n z_i^2$ with $n>0$, the even subalgebra is isomorphic over $\mathbb C$ to $\mathrm{Cl}_{0,n-1}(\mathbb C)$, the complex Clifford algebra on $n-1$ generators each having square $-1$, and hence to the standard complex Clifford algebra $\mathrm{Cl}_{n-1}(\mathbb C)$.

## Facts & Assumptions

**Given:** The quotient definition of a Clifford algebra, standard orthogonal generators with the displayed squares, and positive dimension.

[F1] The Clifford quotient has the canonical grading with each generator odd, and its even subalgebra is the degree-zero part ([[lem-clifford-quotient-has-canonical-z2-grading]]).

[F2] The canonical image $\bar v$ satisfies $\bar v^2=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F3] Orthogonal generators anticommute: $\bar v\bar w+\bar w\bar v=2B(v,w)1$ ([[lem-clifford-polarized-relations]]).

[F4] A linear map from a quadratic space into a unital associative algebra that satisfies the square relation extends uniquely to its Clifford algebra ([[thm-universal-property-of-clifford-algebra]]).

[F5] In dimension $n$, the ordered square-free Clifford monomials form a basis; the even monomials therefore give a basis of the even subalgebra ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F6] $\mathbb C$ is a field ([[thm-complex-numbers-form-a-field]]).

[F7] The zero-dimensional Clifford algebra over $\mathbb R$ is $\mathbb R$ ([[lem-clifford-zero-dimensional-algebra-is-base-field]]).

## Proof

**Proof technique:** direct generator comparison.

1.1 Suppose first that $p>0$. Let $e_1$ be a positive generator, let $e_2,\ldots,e_p$ be the other positive generators, and let $f_1,\ldots,f_q$ be the negative generators. Set $u_i=e_1e_{i+1}$ for $1\le i<p$ and $v_j=e_1f_j$ for $1\le j\le q$. These elements are even by [F1]. Using $e_1^2=1$ and the orthogonal anticommutation in [F3], each $u_i^2=-1$, each $v_j^2=+1$, and every two distinct elements in the combined list anticommute. Thus the $v_j$ are the $q$ positive generators and the $u_i$ the $p-1$ negative generators for the defining relations of $\mathrm{Cl}_{q,p-1}$; [F4] gives an algebra homomorphism $\mathrm{Cl}_{q,p-1}\to\mathrm{Cl}_{p,q}^0$. [given, F1, F2, F3, F4, construct]

1.2 If $p=0$, choose a negative generator $f_1$ and set $u_j=f_1f_{j+1}$ for $1\le j<q$. Each $u_j$ is even by [F1], squares to $-1$, and anticommutes with the other $u_l$ by [F2]–[F3]. For distinct remaining generators $f_i,f_j$, the identity $(f_1f_i)(f_1f_j)=f_if_j$ shows that these pair products generate every even ordered monomial; when $q=1$ there are no $u_j$ and the only even monomial is the unit. Thus [F4] gives a surjection $\mathrm{Cl}_{0,q-1}\to\mathrm{Cl}_{0,q}^0$. [given, F1, F2, F3, F4, construct]

2.1 The image contains every product of two distinct standard generators: $e_1e_i$ and $e_1f_j$ are generators of the image, while for $i,j>1$, $(e_1e_i)(e_1e_j)=-e_ie_j$, and the same identity holds for a pair of negative generators or one positive and one negative generator. Every even ordered monomial is a product of such pairs, so the homomorphism is surjective; if $p=1,q=0$, the only even monomial is the unit and the scalar map is already surjective. [step 1.1, algebra]

2.2 Both algebras in step 1.2 have dimension $2^{q-1}$ by [F5], so the surjection is an isomorphism. This includes $q=1$, when [F7] identifies the source with $\mathbb R$ and the even part of $\mathrm{Cl}_{0,1}$ is its scalar subalgebra. [F5, F7, step 1.2, algebra]

3.1 By [F5], $\mathrm{Cl}_{p,q}^0$ has dimension $2^{p+q-1}$, equal to the dimension of $\mathrm{Cl}_{q,p-1}$. The surjective map of finite-dimensional vector spaces is therefore injective, proving the first isomorphism. [F5, step 2.1, algebra]

4.1 For the complex standard form, choose the first generator $e_1$ and set $u_j=e_1e_{j+1}$. The construction and checks in steps 1.1, 2.1, and 3.1 show that the even subalgebra is generated by $n-1$ pairwise anticommuting elements of square $-1$ and has the PBW dimension $2^{n-1}$; hence it is $\mathrm{Cl}_{0,n-1}(\mathbb C)$. Multiplying each of these generators by $i\in\mathbb C$ changes its square to $+1$ and gives a surjective homomorphism from the standard complex Clifford algebra $\mathrm{Cl}_{n-1}(\mathbb C)$; the equal PBW dimensions make it an isomorphism. The argument includes $n=1$, where the even subalgebra is $\mathbb C$. [given, F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, algebra] ∎
