---
id: lem-unisolvent-dofs-define-reference-interpolant
kind: lemma
title: Unisolvent degrees of freedom define a unique reference interpolant
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-reference-finite-element-and-unisolvent-dofs]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "Definition 64, printed p. 54: finite-element degrees of freedom and the dual basis."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.4, printed pp. 123–125: reference interpolation operator and polynomial invariance."
verification: {}
---

## Statement

Let $(\widehat K,\widehat P,\widehat\Sigma)$ be a reference finite element
with $N=\dim\widehat P$, dual shape functions $\widehat\phi_i$, and bounded
extensions of its degrees of freedom to a normed function space $X$ containing
$\widehat P$. Then the operator
$$\widehat I v:=\sum_{i=1}^N\widehat\sigma_i(v)\widehat\phi_i$$
is the unique linear map $X\to\widehat P$ satisfying
$\widehat\sigma_i(\widehat I v)=\widehat\sigma_i(v)$ for every $i$, and
$\widehat I p=p$ for every $p\in\widehat P$.

## Facts & Assumptions

**Given:** The reference finite-element convention of [[def-reference-finite-element-and-unisolvent-dofs]] and an input $v\in X$ on which every degree of freedom is defined.

[F1] The degree-of-freedom map $J_{\widehat\Sigma}:\widehat P\to\mathbb K^N$ is bijective, and the shape functions satisfy $\widehat\sigma_i(\widehat\phi_j)=\delta_{ij}$. ([[def-reference-finite-element-and-unisolvent-dofs]])

## Proof

1.1 If $N=0$, then $\widehat P=\{0\}$ and the empty sum defines the unique linear map $X\to\widehat P$; all degree-of-freedom identities are vacuous and reproduction holds for the sole element $p=0$. For $N\ge1$, define $\widehat I v=\sum_{i=1}^N\widehat\sigma_i(v)\widehat\phi_i$. The sum is finite and each coefficient is linear in $v$, so $\widehat I$ is a well-defined linear map into $\widehat P$. Applying the $j$th degree of freedom gives $\widehat\sigma_j(\widehat I v)=\sum_i\widehat\sigma_i(v) \widehat\sigma_j(\widehat\phi_i)=\widehat\sigma_j(v)$ by [F1]. [F1, given]

2.1 If $p\in\widehat P$, then both $p$ and $\widehat I p$ have the same degree-of-freedom vector, by step 1.1; injectivity of $J_{\widehat\Sigma}$ therefore gives $\widehat I p=p$. If another $J:X\to\widehat P$ has the same degree-of-freedom values, then $J_{\widehat\Sigma}(Jv-\widehat I v)=0$, and injectivity again gives $Jv=\widehat I v$. This proves uniqueness. [F1, step 1.1] ∎
