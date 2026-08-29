---
id: prop-explicit-formulas-for-normwise-and-componentwise-backward-error
kind: proposition
title: "Residual formulas for normwise and componentwise backward error"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normwise-and-componentwise-backward-error-for-linear-systems, thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized, thm-residual-to-forward-error-bounds-for-linear-systems, def-abs-value, thm-cauchy-schwarz-and-the-euclidean-norm, lem-p-norms-are-norms-and-induce-the-published-metrics]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---



## Statement

Let $n\ge 1$, let $A\in\operatorname{GL}_n(\mathbb{R})$, let $b\in\mathbb{R}^{n}$,
let $\widehat x\in\mathbb{R}^{n}$, and put $r=b-A\widehat x$.

1. **Normwise formula (spectral norm).**
   $$\eta_2(\widehat x)=\frac{\lVert r\rVert_2}{\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2},$$
   with the convention $0/0:=0$.
2. **Componentwise formula.** With $(|A|\,|\widehat x|)_i:=\sum_{j<n}|a_{ij}|\,|\widehat x_j|$,
   $$\omega(\widehat x)=\max_{i<n}\frac{|r_i|}{(|A|\,|\widehat x|)_i+|b_i|},$$
   where a term with $|r_i|=0$ and denominator $0$ is interpreted as $0$. Every
   such degenerate term has $|r_i|=0$, so the maximum is a finite real number.

Here $\eta_2$ and $\omega$ are the backward errors of
[[def-normwise-and-componentwise-backward-error-for-linear-systems]], and
$\lVert\cdot\rVert_2$ is the spectral (operator) norm, which on vectors is the
Euclidean norm of [[lem-p-norms-are-norms-and-induce-the-published-metrics]].

## Facts & Assumptions

**Given:** An invertible matrix $A\in\operatorname{GL}_n(\mathbb{R})$ with $n\ge1$,
vectors $b,\widehat x\in\mathbb{R}^{n}$, the residual $r=b-A\widehat x$, and the
backward errors $\eta_2(\widehat x)$, $\omega(\widehat x)$.

[L1] An admissible perturbation satisfies $\Delta A\,\widehat x-\Delta b=r$ and
the stated norm or entrywise bounds ([[def-normwise-and-componentwise-backward-error-for-linear-systems]]).

[L2] Compatibility of the induced spectral norm: $\lVert My\rVert_2\le\lVert M\rVert_2\lVert y\rVert_2$
([[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]),
and the vector $2$-norm is the Euclidean norm with the triangle inequality
([[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L3] Cauchy–Schwarz: $|u^{\mathsf T}v|\le\lVert u\rVert_2\lVert v\rVert_2$, with
equality for $v$ a positive multiple of $u$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L5] Absolute value: $|u+v|\le|u|+|v|$ and $|uv|=|u||v|$ ([[def-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Lower bound for the normwise error. For any admissible pair of [L1], $\lVert r\rVert_2=\lVert\Delta A\,\widehat x-\Delta b\rVert_2\le\lVert\Delta A\rVert_2\lVert\widehat x\rVert_2+\lVert\Delta b\rVert_2\le\varepsilon(\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2)$, using [L1], [L2] and the triangle inequality of [L2]. [L1, L2, algebra]

1.2 Attainment for the normwise error. Put $\gamma:=\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2$ and suppose first $\gamma>0$. If $\widehat x\ne 0$, define $\Delta A:=(\lVert A\rVert_2/\gamma)\,r\,\widehat x^{\mathsf T}/\lVert\widehat x\rVert_2$ and $\Delta b:=-(\lVert b\rVert_2/\gamma)\,r$; then $\Delta A\,\widehat x-\Delta b=r$ and, by [L3] applied row-wise, $\lVert r\,\widehat x^{\mathsf T}\rVert_2=\lVert r\rVert_2\lVert\widehat x\rVert_2$, so $\lVert\Delta A\rVert_2=\eta\lVert A\rVert_2$ and $\lVert\Delta b\rVert_2=\eta\lVert b\rVert_2$ with $\eta:=\lVert r\rVert_2/\gamma$. [L1, L3, algebra, construct]

1.3 If $\widehat x=0$ then $r=b$ and $\gamma=\lVert b\rVert_2>0$; the perturbations $\Delta A=0$ and $\Delta b=-r$ satisfy $\Delta A\,\widehat x-\Delta b=r$ with $\lVert\Delta b\rVert_2=\lVert r\rVert_2=\eta\lVert b\rVert_2$, so the same $\eta$ is attained. [L1, algebra, construct]

1.4 If $\gamma=0$ then $\lVert A\rVert_2\lVert\widehat x\rVert_2=0$ and $b=0$, so $r=b-A\widehat x=0$; the convention $0/0:=0$ and the zero perturbations of [L1] give $\eta_2(\widehat x)=0$, matching the formula. [L1, algebra]

1.5 Lower bound for the componentwise error. For any admissible pair of [L1], $|r_i|=|\sum_j\Delta a_{ij}\widehat x_j-\Delta b_i|\le\sum_j|\Delta a_{ij}|\,|\widehat x_j|+|\Delta b_i|\le\varepsilon\bigl(\sum_j|a_{ij}|\,|\widehat x_j|+|b_i|\bigr)$ by [L5] and the entrywise bounds of [L1]. [L1, L5, algebra]

1.6 A term with denominator $0$ has $b_i=0$ and $a_{ij}\widehat x_j=0$ for every $j<n$, so $r_i=b_i-(A\widehat x)_i=0$; thus every degenerate term carries numerator $0$, and the maximum is finite as claimed. [given, algebra]

1.7 Attainment for the componentwise error. Put $d_i:=(|A|\,|\widehat x|)_i+|b_i|$ and $\omega:=\max_{i<n}|r_i|/d_i$ with the convention of the statement. For each $i<n$ with $d_i>0$ define $\Delta b_i:=-r_i|b_i|/d_i$ and, for each $j<n$, $\Delta a_{ij}:=|a_{ij}|\,\operatorname{sgn}(\widehat x_j)\,r_i/d_i$ when $\widehat x_j\ne 0$ and $\Delta a_{ij}:=0$ when $\widehat x_j=0$; for $d_i=0$ set all these entries to $0$. [construct, algebra]

2.1 Hence every admissible $\varepsilon$ is at least $\lVert r\rVert_2/(\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2)$, so the infimum satisfies $\eta_2(\widehat x)\ge\lVert r\rVert_2/(\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2)$ when the denominator is positive. [step 1.1, algebra]

2.2 For every $i<n$ with $(|A|\,|\widehat x|)_i+|b_i|>0$, step 1.5 gives $\varepsilon\ge|r_i|/((|A|\,|\widehat x|)_i+|b_i|)$, so every admissible $\varepsilon$ is at least the maximum over such $i$; hence $\omega(\widehat x)\ge\max_{i<n}|r_i|/((|A|\,|\widehat x|)_i+|b_i|)$ with the stated convention. [step 1.5, algebra]

2.3 For $d_i>0$ one has $(\Delta A\,\widehat x)_i=\sum_j|a_{ij}|\,|\widehat x_j|\,r_i/d_i=r_i(|A|\,|\widehat x|)_i/d_i$ and $\Delta b_i=-r_i|b_i|/d_i$, so $(\Delta A\,\widehat x)_i-\Delta b_i=r_i$; and $|\Delta a_{ij}|=|a_{ij}|\,|r_i|/d_i\le\omega|a_{ij}|$ together with $|\Delta b_i|\le\omega|b_i|$, since $|r_i|\le\omega d_i$. For $d_i=0$ every displayed entry vanishes and step 1.6 gives $r_i=0$. [step 1.7, step 1.6, L5, algebra]

3.1 Combining steps 2.1, 1.2, 1.3 and 1.4, the infimum is attained and equals $\lVert r\rVert_2/(\lVert A\rVert_2\lVert\widehat x\rVert_2+\lVert b\rVert_2)$ under the stated convention, which is claim 1. [step 2.1, step 1.2, step 1.3, step 1.4]

3.2 The perturbations of step 1.7 are admissible with $\varepsilon=\omega$ by step 2.3, so $\omega(\widehat x)\le\omega$; with step 2.2 the formula of claim 2 holds. [step 2.3, step 2.2, L1]

4.1 Claim 1 is step 3.1 and claim 2 is step 3.2. [step 3.1, step 3.2] ∎
