---
id: ex-two-sided-basis-change-for-a-rectangular-linear-map
kind: example
title: 'Changing both domain and codomain bases of a map $F^2\to F^3$ uses both sides of the formula'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-two-sided-change-of-basis-formula,
       def-coordinate-column-and-matrix-of-a-linear-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $T:F^2\to F^3$ be
$T(x,y)=(x+2y,3x-y,x+y)$. Use the standard bases $\mathcal B,\mathcal C$ and
the new bases

$$\mathcal B'=(e_0+e_1,e_1),\qquad \mathcal C'=(f_0+f_2,f_1,f_2).$$

Then

$$[T]_{\mathcal B'}^{\mathcal C'}=\begin{pmatrix}3&2\\2&-1\\-1&-1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed map and four ordered bases.

[L1] The two-sided formula is $[T]_{\mathcal B'}^{\mathcal C'}=P_{\mathcal C'\leftarrow\mathcal C}[T]_{\mathcal B}^{\mathcal C}P_{\mathcal B\leftarrow\mathcal B'}$ ([[thm-two-sided-change-of-basis-formula]]).

## Verification

**Proof technique:** direct.

1.1 Here $[T]_{\mathcal B}^{\mathcal C}=\begin{pmatrix}1&2\\3&-1\\1&1\end{pmatrix}$, $P_{\mathcal B\leftarrow\mathcal B'}=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, and $P_{\mathcal C'\leftarrow\mathcal C}=\begin{pmatrix}1&0&0\\0&1&0\\-1&0&1\end{pmatrix}$. Multiplying in the order of [L1] gives $\begin{pmatrix}3&2\\2&-1\\-1&-1\end{pmatrix}$. [given, L1]

2.1 Independently, $T(e_0+e_1)=(3,2,2)=3(f_0+f_2)+2f_1-f_2$ and $T(e_1)=(2,-1,1)=2(f_0+f_2)-f_1-f_2$, producing the same two coordinate columns. [step 1.1, L1] ∎
