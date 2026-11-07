---
id: def-moment-curve-plates-and-osculating-subspaces
kind: definition
title: Moment-Curve Osculating Subspaces and Plates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-moment-curve
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§6, pp. 640–643: osculating subspaces V_k(t) and plates with axes parallel
      to V_k(t) and its orthogonal complement.'
---

## Definition

Let $n\ge2$, $R\ge1$, and $1\le k\le n$. For any $k$-dimensional subspace $V\subset\mathbb R^n$, a **plate of type $(R,V)$** is a translate of a closed rectangular box whose $k$ mutually orthogonal short axes span $V$ and have side length $R^{1/2}$, and whose remaining $n-k$ mutually orthogonal axes span $V^\perp$ and have side length $R$. For $t\in[0,1]$, define the moment curve's $k$-dimensional osculating subspace by
$$V_k(t)=\operatorname{span}\{\Gamma_n'(t),\Gamma_n''(t),\ldots,\Gamma_n^{(k)}(t)\}.$$
A **moment-curve plate of type $(R,k,t)$** means a plate of type $(R,V_k(t))$.

## Facts & Assumptions

**Given:** An integer $n\ge2$, an integer $1\le k\le n$, a parameter $t\in[0,1]$, and the curve $\Gamma_n(t)=(t,t^2,\ldots,t^n)$ from [[def-moment-curve]].

[F1] The $j$th coordinate of $\Gamma_n^{(m)}(t)$ is $j!/(j-m)!\,t^{j-m}$ when $j\ge m$ and is $0$ when $j<m$ ([[def-moment-curve]]).

## Verification

**Proof technique:** Compute a nonzero minor to establish the dimension of the span, then use the Euclidean orthogonal decomposition.

1.1 The matrix formed by the first $k$ coordinates of the column vectors $\Gamma_n'(t),\ldots,\Gamma_n^{(k)}(t)$ has entry $0$ when row $j$ is less than column $m$, by [F1], and diagonal entry $j!$ in row and column $j$. It is triangular with determinant $\prod_{j=1}^k j!\ne0$, so $V_k(t)$ has dimension $k$. [F1, given, algebra]

2.1 Since $\mathbb R^n=V_k(t)\oplus V_k(t)^\perp$ orthogonally and $\dim V_k(t)=k$, the complement has dimension $n-k$. Thus the stated orthogonal axes comprise $n$ axes and define the plate shape without a dimension ambiguity. [step 1.1, given] ∎
