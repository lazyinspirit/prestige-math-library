---
title: Loewner order, Hermitian inner product, and operator norm
status: draft
research_item: def-expander-sync-matrix-order
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 6, Section 1.2; PDF p. 10, Section 2
      statement: For symmetric matrices of the same dimensions, A ⪰ B means that A − B
        is positive semidefinite; the operator norm of a matrix H is the
        supremum of ||Hf||/||f|| over nonzero f. A Hermitian matrix H is
        positive semidefinite when ⟨f,Hf⟩ ≥ 0 for every complex function f on V,
        with the stated Hermitian inner product.
      hypotheses: The order convention on p. 6 concerns same-size symmetric matrices;
        the quadratic-form convention on p. 10 concerns Hermitian matrices
        acting on complex functions on the finite vertex set.
      reading_limits: PDF pages 6 and 10 were inspected for these conventions. This
        reference attributes the article's formulation; it is not used as proof
        of the justification below.
---

PDF p. 6: ` Section 1.2, Notation `; PDF p. 10: ` Section 2, positive-semidefinite convention `

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:thm-operator-norm-is-the-largest-singular-value](https://alphabetamath.cc/item/thm-operator-norm-is-the-largest-singular-value)
- [math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)


## Definition

Let $V$ be a finite set. A vector is a function $f:V\to\mathbb C$; its Hermitian inner product with $g:V\to\mathbb C$ and its induced norm are $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$ and $\|f\|=\sqrt{\langle f,f\rangle}$. A $V\times V$ matrix $H$ acts by $(Hf)(x)=\sum_{y\in V}H_{xy}f(y)$. Its conjugate transpose has entries $(H^*)_{xy}=\overline{H_{yx}}$; $H$ is Hermitian, or self-adjoint, if $H=H^*$. A real matrix is symmetric if $H_{xy}=H_{yx}$ for all $x,y$.

A Hermitian matrix $H$ is positive semidefinite if $\langle f,Hf\rangle\ge 0$ for every $f\in\mathbb C^V$. For Hermitian matrices $A,B$ indexed by the same $V$, write $A\succeq B$, equivalently $B\preceq A$, if $A-B$ is positive semidefinite. This is the Loewner partial order; in particular it applies to real symmetric matrices of the same dimensions.

For any complex $V\times V$ matrix $H$, its operator norm is $\|H\|=\sup_{f\ne 0}\|Hf\|/\|f\|$ when $V$ is nonempty. When $V$ is empty, set $\|H\|=0$. The operator norm is defined for arbitrary matrices here, not only Hermitian ones.

## Definition references

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)

## Justification

The vertex-space definition establishes the inner product and induced norm, matrix action, conjugate transpose and Hermitian terminology; it also shows that a Hermitian matrix has real quadratic values and that a real symmetric matrix is Hermitian ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)). Thus the displayed inequality is meaningful. The positive-semidefinite and order conventions agree with [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm).

The order is reflexive because the zero quadratic form is nonnegative, and transitive because quadratic forms add. For antisymmetry, suppose both $A\succeq B$ and $B\succeq A$ and put $C=A-B$. Then $\langle f,Cf\rangle=0$ for all $f$. Testing the coordinate vector $e_x$ gives $C_{xx}=0$; for distinct $x,y$, testing $e_x+e_y$ and $e_x+i e_y$ gives respectively $C_{xy}+C_{yx}=0$ and $iC_{xy}-iC_{yx}=0$. Hence every entry of $C$ is zero and $A=B$. These tests use the vertex inner product and matrix action of [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space). Thus reflexivity, transitivity and antisymmetry establish a partial order in the sense of [math:def-partial-order](https://alphabetamath.cc/item/def-partial-order).

For nonempty $V$, normalizing each nonzero $f$ to $f/\|f\|$ makes the displayed supremum equal to the supremum over unit vectors. The matrix action is a linear endomorphism of the finite-dimensional vertex inner-product space ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)). The operator-norm theorem supplies an attained, finite maximum on its unit sphere, so this supremum equals that maximum ([math:thm-operator-norm-is-the-largest-singular-value](https://alphabetamath.cc/item/thm-operator-norm-is-the-largest-singular-value)). The stated value on the zero space is the operator-norm definition's convention ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

## Source attribution

The article uses the symmetric-matrix order and operator norm in Section 1.2 and states the Hermitian quadratic-form convention in Section 2. The empty-set norm convention above makes the finite-dimensional definition explicit; it is not attributed to the article.
