---
id: ex-quarter-turn-diagonalises-after-complexification
kind: example
title: "The real quarter-turn diagonalises after complexification but has no real eigenvector"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-characteristic-and-minimal-polynomials-survive-complexification, thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Example

Let $T:\mathbb R^2\to\mathbb R^2$ be the quarter-turn with matrix

$$A=\begin{pmatrix}0&-1\\ 1&0\end{pmatrix}$$

in the standard basis. Its complexification $T_{\mathbb C}$ acts on $\mathbb C^2$ by the same matrix, has eigenvalues $i$ and $-i$ with eigenvectors $(1,-i)$ and $(1,i)$, and is therefore diagonalised over $\mathbb C$ by that eigenbasis. Nevertheless $T$ itself has no real eigenvector.

## Facts & Assumptions

**Given:** The quarter-turn $T$ with the displayed matrix $A$.

[L1] Complexification preserves the characteristic and minimal polynomials of a finite-dimensional real operator ([[thm-characteristic-and-minimal-polynomials-survive-complexification]]).

[L2] The canonical conjugation interchanges the generalised eigenspaces of $\lambda$ and $\overline\lambda$ ([[thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs]]).

## Verification

**Proof technique:** direct.

1.1 The characteristic polynomial is $\chi_T(x)=\det(xI-A)=x^2+1$, and by [L1] the complexified operator has the same polynomial, which factors as $(x-i)(x+i)$ over $\mathbb C$. [L1, algebra]

1.2 For $\lambda=i$, the equation $(A-iI)w=0$ is $-ix-y=0$ and $x-iy=0$, so $y=-ix$ and $w_i=(1,-i)$ is an eigenvector; symmetrically $w_{-i}=(1,i)$ is an eigenvector for $\lambda=-i$. [algebra]

2.1 The vectors $w_i$ and $w_{-i}$ are complex-linearly independent, so they form a complex basis of $\mathbb C^2$ in which $T_{\mathbb C}$ has the diagonal matrix $\operatorname{diag}(i,-i)$. [step 1.2, algebra]

2.2 Conjugation satisfies $\sigma(w_i)=(1,i)=w_{-i}$, the conjugate-pair behaviour recorded in [L2] with exponent $1$. [L2, step 1.2]

2.3 A real eigenvector $v\ne0$ would carry a real eigenvalue $\lambda$ with $Av=\lambda v$; taking a nonzero coordinate of $v$ shows $\lambda$ is real, and then step 1.1 gives $\lambda^2+1=0$, which has no real solution. [step 1.1, algebra]

3.1 Steps 2.1 and 2.3 together prove the example: diagonalisation after complexification with no real eigenvector beforehand. [step 2.1, step 2.3] ∎
