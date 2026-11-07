---
id: thm-local-trace-dual-is-a-fractional-ideal
kind: theorem
title: "The trace dual of local integers is a fractional ideal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-different-ideal-of-a-finite-local-extension
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-countable-choice
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-field-norm-and-trace
  - thm-field-norm-and-trace-by-embeddings
  - def-formal-derivative-of-a-polynomial
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter III, Section 2, Proposition 2.4"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Section 3, Theorem 3.7 and Section 4, Theorem 4.3"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite separable extension of
nonarchimedean local fields with finite residue fields. Choose $\alpha\in
\mathcal O_L$ with $\mathcal O_L=\mathcal O_K[\alpha]$, and let $f\in
\mathcal O_K[T]$ be its monic minimal polynomial. Then
$$\mathfrak D_{L/K}^{-1}=f'(\alpha)^{-1}\mathcal O_L, \qquad \mathfrak D_{L/K}=f'(\alpha)\mathcal O_L.$$
In particular the trace dual in the definition of the codifferent is a
nonzero fractional $\mathcal O_L$-ideal, so the different definition is
well-defined.

## Statement references

[[def-different-ideal-of-a-finite-local-extension]]

[[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]

[J. Neukirch, *Algebraic Number Theory*, Chapter III, Section 2, Proposition 2.4](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Section 3, Theorem 3.7 and Section 4, Theorem 4.3](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the finite separable extension $L/K$, and a monogenic generator $\alpha$ of $\mathcal O_L$ over $\mathcal O_K$.

[A1] Countable Choice is the premise used by the local monogeneity supplier. ([[def-countable-choice]])

[F1] [[def-different-ideal-of-a-finite-local-extension]]: The codifferent is $\{x\in L:\operatorname{Tr}_{L/K}(x\mathcal O_L)\subseteq\mathcal O_K\}$, and the different is its inverse once this set is a nonzero fractional ideal.

[F2] [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]]: $\mathcal O_L=\mathcal O_K[\alpha]$ and the powers $1,\alpha,\ldots,\alpha^{n-1}$ form an $\mathcal O_K$-basis, where $n=[L:K]$.

[F3] [[def-field-norm-and-trace]]: $\operatorname{Tr}_{L/K}(x)$ is the trace of the $K$-linear multiplication map $y\mapsto xy$ on $L$.

[F4] [[thm-field-norm-and-trace-by-embeddings]]: Since $L/K$ is separable, $\operatorname{Tr}_{L/K}(x)$ is the sum of the images of $x$ under the $K$-embeddings of $L$ into a splitting field.

[F5] [[def-formal-derivative-of-a-polynomial]]: For $f(T)=\sum_j a_jT^j$, $f'(T)=\sum_{j\ge1}j a_jT^{j-1}$.

[F6] [[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]: A polynomial over a field is separable exactly when it is relatively prime to its formal derivative.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 The roots $\alpha_1,\ldots,\alpha_n$ of $f$ in a splitting field are distinct by [F6]. For every integer $m\ge0$, put $S_m:=\sum_{r=1}^n\frac{\alpha_r^m}{f'(\alpha_r)}.$ For $0\le m<n$, the Lagrange interpolation identity $T^m=\sum_{r=1}^n\alpha_r^m\frac{f(T)}{(T-\alpha_r)f'(\alpha_r)}$ holds because both sides have degree less than $n$ and agree at all $n$ distinct roots. Comparing coefficients of $T^{n-1}$ gives $S_m=0$ for $m<n-1$ and $S_{n-1}=1$. For $m\ge n$, write $T^m=qf+r$ with $r=\sum_{j=0}^{n-1}r_jT^j$ and each $r_j\in\mathcal O_K$, by division by the monic $f$. Evaluating at every root gives $S_m=\sum_{j=0}^{n-1}r_jS_j$; the previously computed $S_j$ are $0$ or $1$, so $S_m\in\mathcal O_K$. [F2, F4, F5, F6, algebra]

2.1 Let $\beta_i=\alpha^i/f'(\alpha)$ for $0\le i<n$. By [F4], the matrix with entries $\operatorname{Tr}_{L/K}(\beta_i\alpha^j)=S_{i+j}$ has entries in $\mathcal O_K$. It is anti-triangular with zeros when $i+j<n-1$ and ones when $i+j=n-1$, so its determinant is $\pm1$. Thus it is invertible over $\mathcal O_K$. [F2, F3, F4, step 1.1, algebra]

3.1 An element $x\in L$ is in the trace dual exactly when all $\operatorname{Tr}_{L/K}(x\alpha^j)$ lie in $\mathcal O_K$, since the powers in [F2] form a basis of $\mathcal O_L$. Invertibility of the matrix in step 2.1 shows this is equivalent to $x=\sum_{i=0}^{n-1}c_i\beta_i$ with each $c_i\in\mathcal O_K$. Hence the trace dual is $\sum_i\mathcal O_K\beta_i=f'(\alpha)^{-1}\mathcal O_L$. [F1, F2, step 2.1, algebra]

4.1 Separability makes $f'(\alpha)\ne0$, and $f'(\alpha)\in\mathcal O_L$ because $f$ is monic over $\mathcal O_K$ and $\alpha\in\mathcal O_L$. Therefore $f'(\alpha)^{-1}\mathcal O_L$ is a nonzero fractional ideal with inverse $f'(\alpha)\mathcal O_L$, proving both formulas and discharging the well-definedness condition in [F1]. [A1, F1, F5, F6, step 3.1, algebra] ∎
