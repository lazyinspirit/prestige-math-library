---
id: ex-linear-and-polynomial-kernels
kind: example
title: Linear and polynomial kernels as finite feature inner products
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 5.8.2, printed p. 171; Section 12.3.1, printed pp. 423–424.'
verification:
  precheck: pass
---

## Example

For $x,z\in\mathbb R^p$ with $p\ge1$, the linear kernel $k_{\rm lin}(x,z)=x^Tz$ and, for each integer $d\ge0$, the inhomogeneous polynomial kernel $k_d(x,z)=(1+x^Tz)^d$ are positive semidefinite. When $p=2$ and $d=2$, the polynomial kernel has the explicit feature map $h(x)=(1,\sqrt2x_1,\sqrt2x_2,x_1^2,x_2^2,\sqrt2x_1x_2)$ with $k_2(x,z)=h(x)^Th(z)$.

## Example references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §5.8.2](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]

## Facts & Assumptions

**Given:** Integers $p\ge1$ and $d\ge0$, vectors in $\mathbb R^p$, and the two kernels in the Example.

[F1] Positive semidefiniteness means symmetry and nonnegative finite Gram quadratic forms ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

## Verification




1.1 For any finite sample $x_1,\ldots,x_m\in\mathbb R^p$ and coefficients $c_1,\ldots,c_m\in\mathbb R$, the linear Gram quadratic form is $\sum_{i,j}c_ic_jx_i^Tx_j=\|\sum_i c_ix_i\|_2^2\ge0$. Thus $k_{\rm lin}$ satisfies the nonnegative-form condition in [F1], and it is symmetric because $x^Tz=z^Tx$. [given, F1, algebra]


1.2 For $\alpha=(\alpha_0,\ldots,\alpha_p)\in\mathbb N_0^{p+1}$ with $|\alpha|=d$, define $\psi_\alpha(x)=\sqrt{d!/\alpha_0!\cdots\alpha_p!}\prod_{r=1}^p x_r^{\alpha_r}$. The multinomial theorem gives $(1+x^Tz)^d=\sum_{|\alpha|=d}\psi_\alpha(x)\psi_\alpha(z)$. [given, construct, algebra]


2.1 Therefore, for every finite sample and coefficients, $\sum_{i,j}c_ic_jk_d(x_i,x_j)=\sum_{|\alpha|=d}(\sum_i c_i\psi_\alpha(x_i))^2\ge0$. The polynomial kernel is symmetric and positive semidefinite by [F1]. [step 1.2, F1, algebra]


3.1 When $p=2$ and $d=2$, the six multi-indices in [step 1.2] give $h(x)=(1,\sqrt2x_1,\sqrt2x_2,x_1^2,x_2^2,\sqrt2x_1x_2)$, so the stated feature identity holds. [step 1.2, algebra] ∎

