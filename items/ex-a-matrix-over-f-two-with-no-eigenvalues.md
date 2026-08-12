---
id: ex-a-matrix-over-f-two-with-no-eigenvalues
kind: example
title: '$\begin{pmatrix}0&1\\1&1\end{pmatrix}$ over $\mathbb F_2$ has characteristic polynomial $x^2+x+1$ and no eigenvalue in its base field'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, thm-z-mod-p-is-a-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over $\mathbb F_2$, the matrix

$$A=\begin{pmatrix}0&1\\1&1\end{pmatrix}$$

has characteristic polynomial $x^2+x+1$ and no eigenvalue in $\mathbb F_2$.

## Facts & Assumptions

**Given:** The displayed matrix over $\mathbb F_2=\mathbb Z/2\mathbb Z$.

[L1] Since $2$ is prime, $\mathbb Z/2\mathbb Z$ is a field, whose only elements are $0$ and $1$ ([[thm-z-mod-p-is-a-field]]).

[L2] The spectrum over the base field is exactly the root set in that field of the characteristic polynomial ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

## Verification

**Proof technique:** exhaustive finite computation.

1.1 In $\mathbb F_2[x]$, $\chi_A(x)=\det\begin{pmatrix}x&-1\\-1&x-1\end{pmatrix}=x(x-1)-1=x^2+x+1$. [L1, algebra]

2.1 By [L1], the only candidate roots are $0$ and $1$, and $\chi_A(0)=1$ while $\chi_A(1)=1+1+1=1$ in $\mathbb F_2$. [step 1.1, L1, algebra]

3.1 Thus $\chi_A$ has no root in its base field, and [L2] gives $\sigma_{\mathbb F_2}(A)=\varnothing$. [step 2.1, L2] ∎
