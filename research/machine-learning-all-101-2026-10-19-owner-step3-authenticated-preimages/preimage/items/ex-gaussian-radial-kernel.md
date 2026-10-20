---
id: ex-gaussian-radial-kernel
kind: example
title: The Gaussian radial kernel is positive semidefinite
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
      locator: 'Section 5.8.2, printed pp. 172–173.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.2.1, printed pp. 133–135; squared-exponential kernel formula.'
verification:
  precheck: pass
---

## Example

For $p\ge1$ and $\sigma>0$, the Gaussian radial kernel on $\mathbb R^p$ is $k_\sigma(x,z)=\exp(-\|x-z\|_2^2/(2\sigma^2))$. It is a real positive semidefinite kernel, including on finite samples with repeated points or a singular Gram matrix.

## Example references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §5.8.2](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.2.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]

## Facts & Assumptions

**Given:** $p\ge1$, $\sigma>0$, a finite sample $x_1,\ldots,x_m\in\mathbb R^p$ with $m\ge1$, and real coefficients $c_1,\ldots,c_m$.

[F1] Positive semidefiniteness means symmetry and nonnegative finite Gram quadratic forms ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

## Verification

1.1 For each sample point put $a_i=c_i\exp(-\|x_i\|_2^2/(2\sigma^2))$. The identity $\|x_i-x_j\|_2^2=\|x_i\|_2^2+\|x_j\|_2^2-2x_i^Tx_j$ gives $\sum_{i,j}c_ic_jk_\sigma(x_i,x_j)=\sum_{i,j}a_i a_j\exp(x_i^Tx_j/\sigma^2)$. [given, algebra]

1.2 For each fixed pair $i,j$, the exponential series has the absolutely convergent multi-index expansion $\exp(x_i^Tx_j/\sigma^2)=\sum_{\alpha\in\mathbb N_0^p}(x_i^\alpha x_j^\alpha)/(\sigma^{2|\alpha|}\alpha!)$, since the corresponding series of absolute values is $\prod_{r=1}^p\exp(|x_{ir}x_{jr}|/\sigma^2)<\infty$. The sample sums are finite, so they can be interchanged with this absolutely convergent series. [given, algebra]

2.1 Substitution into [step 1.1] yields $\sum_{i,j}c_ic_jk_\sigma(x_i,x_j)=\sum_{\alpha\in\mathbb N_0^p}\frac{1}{\sigma^{2|\alpha|}\alpha!}(\sum_i a_ix_i^\alpha)^2\ge0$. Symmetry of $k_\sigma$ is immediate from $\|x-z\|_2=\|z-x\|_2$, so [F1] proves positive semidefiniteness; zero eigenvalues or repeated points do not affect the sum-of-squares argument. [step 1.1, step 1.2, F1, algebra] ∎
