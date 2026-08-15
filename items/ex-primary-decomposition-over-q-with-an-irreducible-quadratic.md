---
id: ex-primary-decomposition-over-q-with-an-irreducible-quadratic
kind: example
title: "Primary decomposition over $\\mathbb Q$ with one linear and one irreducible quadratic factor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-primary-decomposition-for-an-endomorphism, cor-primary-projections-are-polynomials-in-the-endomorphism, lem-x-squared-plus-one-is-irreducible-over-the-reals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §5, Theorem 5.19'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Example

On $V=\mathbb Q\oplus\mathbb Q^2$, let $T$ act by multiplication by $2$ on the first summand and by

$$C=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$$

on the second. Then $\mu_T=(x-2)(x^2+1)$, the primary components are the displayed summands, and their polynomial projections are

$$E_1=\frac{T^2+I}{5},\qquad E_2=\frac{4I-T^2}{5}.$$

## Facts & Assumptions

**Given:** The rational endomorphism $T$ in the Example.

[L1] Irreducible-power factors of a minimal polynomial give the direct sum of their kernels ([[thm-primary-decomposition-for-an-endomorphism]]).

[L2] The associated primary projections are polynomial expressions in the endomorphism ([[cor-primary-projections-are-polynomials-in-the-endomorphism]]).

[L3] The polynomial $x^2+1$ is irreducible over $\mathbb R$, hence also over its subfield $\mathbb Q$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

## Verification

**Proof technique:** direct.

1.1 The first block has minimal polynomial $x-2$, and $C^2=-I$ makes the second block's minimal polynomial $x^2+1$; [L3] rules out a rational linear factor. The two factors are coprime, so the direct sum has minimal polynomial their product and [L1] identifies the two primary components. [L1, L3, algebra]

2.1 The polynomial $e_1=(x^2+1)/5$ is $1$ at $x=2$ and is $0$ modulo $x^2+1$; $e_2=1-e_1=(4-x^2)/5$ has the opposite residues. Therefore [L2] gives the displayed projections. [L2, algebra] ∎
