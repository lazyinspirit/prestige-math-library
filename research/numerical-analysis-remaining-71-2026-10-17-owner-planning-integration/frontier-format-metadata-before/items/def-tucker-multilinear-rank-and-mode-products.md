---
id: def-tucker-multilinear-rank-and-mode-products
kind: definition
title: Tucker format, multilinear rank, and mode products
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product]
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §§2.4, 4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "Lieven De Lathauwer, Bart De Moor, and Joos Vandewalle, A Multilinear Singular Value Decomposition, SIAM Journal on Matrix Analysis and Applications 21(4) (2000), §§2–3"
      url: "https://www.math.ucdavis.edu/~saito/data/tensor/lathauwer-etal_mulilinear-SVD.pdf"
    - title: "ACM 270-1, Complete Lecture Notes, Caltech, Spring 2019, Lecture 14, §3"
      url: "https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf"
---

## Definition

For a tensor $A\in\mathbb F^{n_1\times\cdots\times n_d}$, its multilinear rank is
$$ \operatorname{mlrank}(A)=\bigl(\operatorname{rank}A_{(1)},\ldots,\operatorname{rank}A_{(d)}\bigr). $$
If $U\in\mathbb F^{m\times n_k}$, the mode-$k$ product $A\times_k U$ is the tensor with mode-$k$ size $m$ and entries
$$ (A\times_k U)_{i_1,\ldots,i_{k-1},j,i_{k+1},\ldots,i_d} =\sum_{i_k=1}^{n_k}A_{i_1,\ldots,i_d}U_{j,i_k}. $$
The product is bilinear in the entries; no conjugation is used in this tensor contraction.

A Tucker representation with mode ranks bounded by $r=(r_1,\ldots,r_d)$ is a factorization
$$ A=G\times_1 U_1\times_2\cdots\times_d U_d, $$
where $U_k\in\mathbb F^{n_k\times r_k}$ and $G\in\mathbb F^{r_1\times\cdots\times r_d}$. Separately, write
$$ \mathcal T_r=\{B\in\mathbb F^{n_1\times\cdots\times n_d}:\operatorname{rank}B_{(k)}\le r_k\text{ for each }k\} $$
for the multilinear-rank-bounded set used in approximation statements.
