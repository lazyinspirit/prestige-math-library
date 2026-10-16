---
id: ex-qc-short-reed-solomon-syndrome-table
kind: example
title: A short Reed–Solomon code over $F_5$ and its symbol-error syndromes
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: [def-matrix-product-and-identity-matrix, def-matrix-space, def-qc-classical-error-syndrome, def-qc-classical-linear-code-over-finite-field, def-qc-generator-and-parity-check-matrices, def-qc-hamming-weight-distance-and-linear-code-distance, def-row-space-column-space-nullspace-and-matrix-ranks, thm-dimension-of-a-linear-subspace, thm-qc-classical-distance-correction-and-erasure-radius, thm-qc-full-column-rank-matrix-image-has-dimension, thm-rank-nullity, thm-row-rank-equals-column-rank, thm-z-mod-p-is-a-field]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Madhu Sudan, Essential Coding Theory, MIT 6.895, Lecture 5, “Reed-Solomon Codes” (Fall 2004)
      url: https://ocw.mit.edu/courses/6-895-essential-coding-theory-fall-2004/84d8b31edc51751920d3cf5fe57dea0e_lect05slx4.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

In $F_5=\mathbb Z/5\mathbb Z$, evaluate the degree-less-than-two polynomials $f(x)=a+bx$ at $0,1,2,3$. This gives the Reed–Solomon evaluation code

$$C=\{(a,a+b,a+2b,a+3b):a,b\in F_5\}\subseteq F_5^4,$$

with encoding $(a,b)\mapsto(a,a+b,a+2b,a+3b)$ and generator/parity-check matrices

$$G=\begin{bmatrix}1&0\\1&1\\1&2\\1&3\end{bmatrix},\qquad H=\begin{bmatrix}4&3&2&1\\0&3&4&3\end{bmatrix}.$$

It has parameters $[4,2,3]_5$. Its four parity-check columns give distinct projective directions, so every one-symbol error value at every position has a distinct syndrome.

## Facts & Assumptions

**Given:** The field $F_5=\mathbb Z/5\mathbb Z$, evaluation points $0,1,2,3$, and matrices $G,H$ displayed above.

[F1] [[thm-z-mod-p-is-a-field]]: For every prime $p$, $\mathbb Z/p\mathbb Z$ is a field.

[F2] [[def-matrix-product-and-identity-matrix]]: Matrix products are the finite coordinate sums over the field.

[F3] [[thm-rank-nullity]]: The dimension of a finite-dimensional domain is the sum of kernel and image dimensions.

[F4] [[thm-dimension-of-a-linear-subspace]]: A subspace of a finite-dimensional space with equal dimension is the whole space.

[F5] [[thm-row-rank-equals-column-rank]]: The row rank and column rank of a finite matrix over a field are equal.

[L1] [[thm-qc-full-column-rank-matrix-image-has-dimension]]: The image of a full-column-rank $4\times2$ matrix has dimension $2$.

[L2] [[def-qc-classical-error-syndrome]]: A received vector's syndrome is $Hr$.

[L3] [[thm-qc-classical-distance-correction-and-erasure-radius]]: Distance $3$ uniquely decodes one unknown symbol error and distinct allowed errors have distinct syndromes.

## Verification


1.1 The map $(a,b)\mapsto(a,a+b,a+2b,a+3b)$ is injective because its first two coordinates recover $a$ and $b$. Hence the displayed $G$ has independent columns and [L1] gives $\dim C=2$. [F1, L1, given, algebra]

1.2 Multiplication gives $HG=0$: the four row-column dot products are $10,10,10,20$, all zero in $F_5$. The first two columns of $H$, $(4,0)$ and $(3,3)$, are independent, so its column rank is $2$; [F5] makes its row rank $2$ as well. [F2, F5, given, algebra]

1.3 If $b=0$ and $(a,b)\ne(0,0)$, then $f(x)=a$ has no roots. If $b\ne0$, the equation $a+bx=0$ has the unique solution $x=-ab^{-1}$, so at most one of the four distinct evaluation points is a root. Every nonzero codeword therefore has weight at least $3$, and $f(x)=x$ gives $(0,1,2,3)$ of weight $3$. Thus $d(C)=3$. [given, algebra]

1.4 The columns of $H$ are $h_0=(4,0)$, $h_1=(3,3)$, $h_2=(2,4)$, and $h_3=(1,3)$. Their six pairwise determinants in $F_5$ are $2,1,2,1,1,2$, all nonzero, so no two are scalar multiples. A nonzero error $a e_j$ has syndrome $a h_j$; within one position distinct nonzero $a$ give distinct syndromes, and across positions equality would force proportional columns. Hence all $4\cdot4=16$ nonzero one-symbol errors have distinct syndromes. [F2, given, algebra]

2.1 Therefore $C=\operatorname{im}G\subseteq\ker H$. By [F3], $\dim\ker H=4-2=2=\dim C$; [F4] gives $C=\ker H$. [F3, F4, step 1.1, step 1.2]

3.1 For example, the error $e=2e_1$ has syndrome $2h_1=(6,6)=(1,1)$ in $F_5^2$. Since $d(C)=3$, [L3] gives unique one-symbol correction. The example uses the evaluation-code definition; its exact distance and syndrome claims above are proved here rather than inferred from a source formula. [L2, L3, step 1.3, step 1.4, given] ∎

## Remarks

The MIT lecture notes define Reed–Solomon codes by evaluating degree-less-than-$k$ polynomials at distinct field points. Their displayed root-count bound is one looser than the sharp degree bound needed to derive the stated exact distance formula; this example does not rely on it and proves its $[4,2,3]_5$ parameters directly.
