---
id: ex-dual-basis-and-transpose-on-f-three
kind: example
title: 'A dual basis and transpose computed for a linear map on $\mathbb F_3^2$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-dual-family-is-a-basis-in-finite-dimension, thm-matrix-of-transpose-is-the-transposed-matrix, thm-z-mod-p-is-a-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $e_1,e_2$ be the standard basis of $\mathbb F_3^2$, with dual basis $\varepsilon_1,\varepsilon_2$, and let

$$[T]=\begin{pmatrix}1&2\\0&1\end{pmatrix}.$$

Then $T^*(\varepsilon_1)=\varepsilon_1+2\varepsilon_2$, $T^*(\varepsilon_2)=\varepsilon_2$, and

$$[T^*]=\begin{pmatrix}1&0\\2&1\end{pmatrix}=[T]^{\mathsf T}.$$

## Facts & Assumptions

**Given:** The displayed matrix in the standard basis over $\mathbb F_3$.

[L1] Since $3$ is prime, $\mathbb F_3=\mathbb Z/3\mathbb Z$ is a field ([[thm-z-mod-p-is-a-field]]).

[L2] The coordinate functionals form the dual basis ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L3] In dual bases, the matrix of $T^*$ is the transpose of that of $T$ ([[thm-matrix-of-transpose-is-the-transposed-matrix]]).

## Verification

**Proof technique:** exhaustive coordinate evaluation.

1.1 The matrix columns give $T(e_1)=e_1$ and $T(e_2)=2e_1+e_2$. Therefore $T^*(\varepsilon_1)$ takes values $1,2$ on $e_1,e_2$, while $T^*(\varepsilon_2)$ takes values $0,1$. [L1, L2, algebra]

2.1 By the dual-basis expansion [L2], these four values give $T^*(\varepsilon_1)=\varepsilon_1+2\varepsilon_2$ and $T^*(\varepsilon_2)=\varepsilon_2$. [step 1.1, L2]

3.1 The coordinate columns in step 2.1 give $[T^*]=\begin{pmatrix}1&0\\2&1\end{pmatrix}$, which independently agrees with [L3]. [step 2.1, L3] ∎
