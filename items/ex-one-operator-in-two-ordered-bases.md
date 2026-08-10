---
id: ex-one-operator-in-two-ordered-bases
kind: example
title: 'The same operator has two different matrices in two ordered bases'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coordinate-column-and-matrix-of-a-linear-map,
       thm-change-of-basis-matrices-are-inverses,
       thm-two-sided-change-of-basis-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Example 3.83'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Example

Let $T:F^2\to F^2$ be $T(x,y)=(x,2y)$. In the standard ordered basis
$\mathcal E=(e_0,e_1)$,

$$[T]_{\mathcal E}^{\mathcal E}=\begin{pmatrix}1&0\\0&2\end{pmatrix}.$$

For $\mathcal B=(e_0+e_1,e_1)$, the same operator has

$$[T]_{\mathcal B}^{\mathcal B}=\begin{pmatrix}1&0\\1&2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed operator and ordered bases.

[L1] A matrix of an operator records the coordinate columns of its basis-vector images, and basis change acts by the two-sided formula ([[def-coordinate-column-and-matrix-of-a-linear-map]], [[thm-two-sided-change-of-basis-formula]]).

## Verification

**Proof technique:** direct.

1.1 The standard images are $T(e_0)=e_0$ and $T(e_1)=2e_1$. The transition matrices are $P_{\mathcal E\leftarrow\mathcal B}=\begin{pmatrix}1&0\\1&1\end{pmatrix}$ and $P_{\mathcal B\leftarrow\mathcal E}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$, whose products in either order are $I_2$. [given, L1]

2.1 Directly, $T(e_0+e_1)=e_0+2e_1=(e_0+e_1)+e_1$ and $T(e_1)=2e_1$, giving the columns $(1,1)$ and $(0,2)$. Equivalently, $P_{\mathcal B\leftarrow\mathcal E}[T]_{\mathcal E}^{\mathcal E}P_{\mathcal E\leftarrow\mathcal B}=\begin{pmatrix}1&0\\1&2\end{pmatrix}$. [step 1.1, L1] ∎
