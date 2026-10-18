---
id: lem-clifford-quotient-has-canonical-z2-grading
kind: lemma
title: "The Clifford quotient has its canonical parity grading"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 1
deps:
  - def-clifford-graded-algebra-module-and-tensor-product
  - def-clifford-algebra-of-a-quadratic-space
  - def-tensor-algebra-of-a-vector-space
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
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1, statements (1.1)–(1.4)"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $k$ be a field of characteristic not $2$, let $V$ be a finite-dimensional $k$-vector space, let $B$ be a symmetric bilinear form on $V$ (possibly degenerate), and put $Q(v)=B(v,v)$. Form the plus-$Q$ Clifford algebra $\mathrm{Cl}(V,Q)$ as in [[def-clifford-algebra-of-a-quadratic-space]]. Then the grading of the tensor algebra by tensor length modulo $2$ descends to a canonical $\mathbb Z/2$-grading

$$
\mathrm{Cl}(V,Q)=\mathrm{Cl}^0(V,Q)\oplus\mathrm{Cl}^1(V,Q)
$$

in which $1\in\mathrm{Cl}^0(V,Q)$ and every canonical generator $\bar v$ lies in $\mathrm{Cl}^1(V,Q)$. Here a $\mathbb Z/2$-graded algebra and its even part are as in [[def-clifford-graded-algebra-module-and-tensor-product]]. No nondegeneracy assumption on $Q$ is needed.

## Facts & Assumptions

**Given:** A field $k$ with $\operatorname{char}(k)\ne2$, a finite-dimensional $k$-vector space $V$, a symmetric bilinear form $B$ that may be degenerate, and $Q(v)=B(v,v)$.

[F1] The Clifford algebra is $T_k(V)/J_Q$, where $J_Q$ is the smallest two-sided ideal containing $r_v=j(v)^2-Q(v)1$ for every $v\in V$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F2] The tensor algebra is $T_k(V)=\bigoplus_{m\ge0}V^{\otimes m}$ with multiplication by concatenation and canonical inclusion $j:V\to V^{\otimes1}$ ([[def-tensor-algebra-of-a-vector-space]]).

## Proof

**Proof technique:** prove the defining ideal is graded.

1.1 In the tensor-length parity grading of [F2], each $r_v=j(v)^2-Q(v)1$ is even, since its two terms have tensor lengths $2$ and $0$. Let $I$ be the subspace of finite sums of elements $a r_v b$ with $a,b\in T_k(V)$ and $v\in V$. It is a two-sided ideal containing every $r_v$, and every two-sided ideal containing all $r_v$ contains $I$; hence [F1] gives $I=J_Q$. [given, F1, F2, construct, algebra]

2.1 Write $a=a_0+a_1$ and $b=b_0+b_1$ according to tensor-length parity. Then $a r_v b=\sum_{i,j\in\{0,1\}}a_i r_v b_j$, and each summand has parity $i+j\pmod2$ and belongs to $I$. Thus every homogeneous component of every generator $a r_v b$ lies in $I$; by linearity the same holds for every element of $I=J_Q$. Therefore $J_Q$ is a graded ideal. [F2, step 1.1, algebra]

3.1 Since $J_Q$ is graded, its quotient decomposes as the direct sum of the images of the two parity components of $T_k(V)$, and the quotient multiplication preserves their parities. The tensor-algebra unit has even length, while each $j(v)$ has odd length; their quotient images therefore satisfy $1\in\mathrm{Cl}^0(V,Q)$ and $\bar v\in\mathrm{Cl}^1(V,Q)$. This is the claimed canonical grading, including when $Q$ is degenerate. [given, F1, F2, step 2.1, algebra] ∎
