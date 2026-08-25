---
id: ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc
kind: example
title: "The complex Jacobian and its determinant for $(z_0z_1, z_0+z_1)$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-holomorphic-map-and-complex-jacobian, thm-componentwise-holomorphy-in-several-complex-variables, prop-algebra-of-holomorphic-functions-in-several-variables, cor-complex-jacobian-determinant-is-multiplicative, thm-chain-rule-for-holomorphic-maps-in-several-variables, def-determinant-of-a-square-matrix, ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space, lem-complex-linear-real-differential-criterion, def-holomorphic-function-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Let $F:\mathbb C^2\to\mathbb C^2$ be given by

$$F(z_0,z_1)=(z_0z_1,\ z_0+z_1).$$

Then

$$J_{\mathbb C}F(z)= \begin{pmatrix} z_1 & z_0 \\ 1 & 1 \end{pmatrix}, \qquad \det J_{\mathbb C}F(z)=z_1-z_0.$$

So the complex Jacobian determinant vanishes exactly on the diagonal
$\{z_0=z_1\}$. If $S(w_0,w_1)=(w_1,w_0)$ is the coordinate swap, then
$\det J_{\mathbb C}S=-1$ and
$\det J_{\mathbb C}(S\circ F)=-(z_1-z_0)$, in agreement with the multiplicative
chain rule.

## Facts & Assumptions

**Given:** The map $F(z_0,z_1)=(z_0z_1,\ z_0+z_1)$ and the swap $S(w_0,w_1)=(w_1,w_0)$.

[L1] A map is holomorphic exactly when its components are, and for a holomorphic map the complex Jacobian entries are $(J_{\mathbb C}F)_{jk}=\partial_{z_k}F_j$ ([[thm-componentwise-holomorphy-in-several-complex-variables]]). The coordinate projections $(z_0,z_1)\mapsto z_0$ and $(z_0,z_1)\mapsto z_1$ are complex-linear functionals and hence holomorphic ([[lem-complex-linear-real-differential-criterion]], [[def-holomorphic-function-in-several-complex-variables]]); sums and products of holomorphic functions are holomorphic with the usual derivative rules ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L2] The determinant of a $2\times2$ matrix is $ad-bc$ ([[def-determinant-of-a-square-matrix]]).

[L3] The composite of holomorphic maps is holomorphic and its complex Jacobian is the product ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[L4] For equidimensional holomorphic maps, the complex Jacobian determinant of a composite is the product of the determinants ([[cor-complex-jacobian-determinant-is-multiplicative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $J_{\mathbb C}F(z)$ is $\begin{pmatrix} z_1 & z_0 \\ 1 & 1 \end{pmatrix}$. [L1]

1.2 The swap $S$ is linear with matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, so $\det J_{\mathbb C}S=-1$ by [L2]. [L2]

2.1 Apply [L2] to that matrix: $\det J_{\mathbb C}F(z)=z_1\cdot1-z_0\cdot1=z_1-z_0$, so the determinant vanishes exactly when $z_0=z_1$. [step 1.1, L2]

3.1 By [L3], $J_{\mathbb C}(S\circ F)=J_{\mathbb C}S(F(z))\,J_{\mathbb C}F(z)$, and [L4] gives $\det J_{\mathbb C}(S\circ F)=(-1)(z_1-z_0)=z_0-z_1$, exactly as the direct calculation of the swapped matrix would give. [step 2.1, step 1.2, L3, L4] ∎
