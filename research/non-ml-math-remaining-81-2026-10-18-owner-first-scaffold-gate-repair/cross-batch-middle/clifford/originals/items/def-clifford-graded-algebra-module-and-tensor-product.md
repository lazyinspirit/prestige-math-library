---
id: def-clifford-graded-algebra-module-and-tensor-product
kind: definition
title: "Graded algebras, graded modules, and the graded tensor product"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 0
deps: [cor-finite-iterated-tensor-products-represent-multilinear-maps]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2, Proposition 1.3"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1, Proposition 1.6"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Definition

Let $k$ be a field. A $\mathbb Z/2$-graded $k$-vector space is a direct sum $A=A^0\oplus A^1$; a homogeneous element $a\in A^i$ has parity $|a|=i\in\{0,1\}$. A $\mathbb Z/2$-graded unital associative $k$-algebra is such a space with $1\in A^0$ and $A^iA^j\subseteq A^{i+j\pmod 2}$. A graded left module is a module $M=M^0\oplus M^1$ satisfying $A^iM^j\subseteq M^{i+j\pmod 2}$. A graded submodule is an $A$-submodule $N=N^0\oplus N^1$; a graded-simple module is nonzero and has no proper nonzero graded submodule. An isomorphism of graded modules preserves both parity components.

For graded algebras $A,B$, their graded tensor product $A\widehat\otimes_k B$ has underlying vector space $A\otimes_kB$, parity $(A\widehat\otimes B)^r=\bigoplus_{i+j=r}A^i\otimes_kB^j$, and multiplication

$$
(a\otimes b)(a'\otimes b')=(-1)^{|b||a'|}(aa'\otimes bb')
$$

for homogeneous factors, extended by the finite sum

$$
\sum_{i,j,r,s\in\{0,1\}}(-1)^{jr}(a_i a'_r\otimes b_j b'_s),\qquad a=\sum_i a_i,\ b=\sum_j b_j,\ a'=\sum_r a'_r,\ b'=\sum_s b'_s.
$$

Each parity projection is linear, so this formula is $k$-multilinear in the four inputs and therefore defines a multiplication on $(A\otimes_kB)\times(A\otimes_kB)$ by [[cor-finite-iterated-tensor-products-represent-multilinear-maps]]. The unit is $1_A\otimes1_B$. For three homogeneous tensors, both associative bracketings contribute the sign exponent $|b||a'|+|b||a''|+|b'||a''|$, so the multiplication is associative.
