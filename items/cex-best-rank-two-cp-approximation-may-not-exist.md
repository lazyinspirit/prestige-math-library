---
id: cex-best-rank-two-cp-approximation-may-not-exist
kind: counterexample
title: A best rank-two CP approximation need not exist
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-canonical-polyadic-rank]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §3.3"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "Mi-Song Dupuy, Tensor trains for high-dimensional problems, full lecture notes, Chapter 1, §1.2.3 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
dependency_level: 2
---

## Statement refuted

Every finite tensor has a best Frobenius approximation among tensors of CP rank at most two.

## Facts & Assumptions

**Given:** Real three-way tensors in $\mathbb R^{2\times2\times2}$, with standard basis $e_1,e_2$ in each mode.

[F1] [[def-canonical-polyadic-rank]]: CP rank is the least number of elementary tensors whose sum is the tensor; a rank-at-most-two tensor is a sum of at most two elementary tensors.

## Counterexample

1.1 Set $W=e_2\otimes e_1\otimes e_1+e_1\otimes e_2\otimes e_1+e_1\otimes e_1\otimes e_2$. It has an explicit three-term CP expression, so its CP rank is at most three. Its first-mode slices are $W_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $W_2=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. They are linearly independent, and $\det(xW_1+yW_2)=-x^2$. [given, F1, construct, algebra]

2.1 Suppose $W$ had a two-term expression $a\otimes b\otimes c+a'\otimes b'\otimes c'$. The first-mode slices being independent forces $a,a'$ to be independent. If $b,b'$ or $c,c'$ were dependent, every linear combination of the two slices would have matrix rank at most one, so its determinant would vanish identically, contrary to $\det(xW_1+yW_2)=-x^2$. Thus both pairs are independent. For any $x,y$, the pencil slice is $(xa_1+ya_2)bc^{\mathsf T}+(xa'_1+ya'_2)b'c'^{\mathsf T}$. Its determinant is a nonzero constant times $(xa_1+ya_2)(xa'_1+ya'_2)$. Independence of $a,a'$ makes the two linear factors nonproportional, so this determinant has two distinct zero lines; it cannot equal $-x^2$, which vanishes on the repeated line $x=0$. This contradiction proves $\operatorname{rank}_{CP}(W)>2$, hence it is exactly three. [F1, step 1.1, algebra]

3.1 For every $\varepsilon>0$, define $W_\varepsilon=\varepsilon^{-1}\bigl((e_1+\varepsilon e_2)^{\otimes3}-e_1^{\otimes3}\bigr)$. This is a difference of two elementary tensors, with the scalar absorbed into one factor, so its CP rank is at most two. Expanding gives $W_\varepsilon=W+\varepsilon(e_2\otimes e_2\otimes e_1+e_2\otimes e_1\otimes e_2+e_1\otimes e_2\otimes e_2)+\varepsilon^2e_2^{\otimes3}$, so $\|W_\varepsilon-W\|_F\to0$. Thus the infimal rank-two approximation error is zero. Since step 2.1 shows $W$ itself has rank three, no rank-at-most-two tensor attains that infimum. [F1, step 2.1, algebra] ∎
