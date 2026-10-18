---
id: alg-budgeted-cp-alternating-least-squares
kind: algorithm
title: Budgeted CP alternating least squares
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, def-canonical-polyadic-rank, lem-full-column-rank-matrix-least-squares-solution]
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Tamara G. Kolda and Brett W. Bader, Tensor Decompositions and Applications, SIAM Review 51(3) (2009), §3.4"
      url: "https://www.kolda.net/publication/TensorReview.pdf"
    - title: "ACM 270-1, Complete Lecture Notes, Caltech, Spring 2019, Lecture 13, §4.3"
      url: "https://iqim.caltech.edu/wp-content/uploads/2019/08/ACM270_complete_lecture_notes.pdf"
dependency_level: 2
---

## Definition

Work in exact arithmetic over $\mathbb F\in\{\mathbb R,\mathbb C\}$. Inputs are a tensor $A\in\mathbb F^{n_1\times\cdots\times n_d}$, a proposed CP component count $R\in\mathbb N_0$, initial factor matrices $F_k\in\mathbb F^{n_k\times R}$, and a finite sweep budget $N_{\max}\in\mathbb N_0$. The objective is
$$ \Phi(F_1,\ldots,F_d)=\left\|A-\sum_{j=1}^{R}F_1(:,j)\otimes\cdots\otimes F_d(:,j)\right\|_F^2. $$
On every exit, return the tuple $(F_1,\ldots,F_d,\widehat A,\text{status})$, where
$$ \widehat A=\sum_{j=1}^{R}F_1(:,j)\otimes\cdots\otimes F_d(:,j) $$
is evaluated from the factor matrices as they stand at that exit. If $R=0$, return the empty factor matrices, the zero model, and status “rank-zero-model” immediately. If $N_{\max}=0$, return the current factors and model with status “budget-exhausted”. Otherwise, for each of at most $N_{\max}$ sweeps, visit modes $k=1,\ldots,d$ in that order. With the other factors fixed, form $Z_k$ whose rows are indexed by all tuples $(i_\ell)_{\ell\ne k}$ and whose column $j$ is
$$ (Z_k)_{(i_\ell)_{\ell\ne k},j}=\prod_{\ell\ne k}(F_\ell)_{i_\ell,j}. $$
The mode-$k$ unfolding model is $A_{(k)}\approx XZ_k^{\mathsf T}$. If $Z_k$ is not full column rank, halt and return the current factors and model with status “rank-deficient-design”; no factor has changed at this block. If it has full column rank, solve the equivalent adjoint problem
$$ \min_{Y\in\mathbb F^{R\times n_k}}\|A_{(k)}^*-\overline{Z_k}Y\|_F $$
and replace $F_k$ by $Y^*$. The matrix $\overline{Z_k}$ has full column rank, so the minimizer is unique by [[lem-full-column-rank-matrix-least-squares-solution]]. After each completed sweep, increment the sweep counter. Return the current factors and model with status “budget-exhausted” after the $N_{\max}$th completed sweep. This finite-budget procedure guarantees neither convergence nor a global best CP approximation.
