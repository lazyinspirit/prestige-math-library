---
id: ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space
kind: example
title: "Componentwise holomorphy checked for an explicit map $\\mathbb{C}^2\\to\\mathbb{C}^3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-componentwise-holomorphy-in-several-complex-variables, def-holomorphic-map-and-complex-jacobian, prop-algebra-of-holomorphic-functions-in-several-variables, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, def-coordinate-column-and-matrix-of-a-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Define $F:\mathbb C^2\to\mathbb C^3$ by

$$F(z_0,z_1)=(z_0z_1,\ z_0+z_1,\ \exp(z_0)).$$

Then each component is holomorphic, so $F$ is holomorphic. Its complex Jacobian
matrix is

$$J_{\mathbb C}F(z)= \begin{pmatrix} z_1 & z_0 \\ 1 & 1 \\ \exp(z_0) & 0 \end{pmatrix},$$

and at the origin this becomes

$$J_{\mathbb C}F(0,0)= \begin{pmatrix} 0 & 0 \\ 1 & 1 \\ 1 & 0 \end{pmatrix}.$$

## Facts & Assumptions

**Given:** The map $F(z_0,z_1)=(z_0z_1,\ z_0+z_1,\ \exp(z_0))$.

[L1] A map into $\mathbb C^n$ is holomorphic exactly when each component is holomorphic ([[thm-componentwise-holomorphy-in-several-complex-variables]]).

[L2] Sums and products of holomorphic scalar functions are holomorphic ([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L3] The complex exponential is entire and has derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[def-complex-exponential]]).

[L4] The complex Jacobian matrix records the derivatives $\partial F_j/\partial z_k$ ([[def-holomorphic-map-and-complex-jacobian]]).

## Verification

**Proof technique:** direct.

1.1 The first component $(z_0,z_1)\mapsto z_0z_1$ and the second component $(z_0,z_1)\mapsto z_0+z_1$ are holomorphic by [L2], and the third component $(z_0,z_1)\mapsto\exp(z_0)$ is holomorphic by [L3]. [L2, L3]

2.1 Therefore [L1] makes $F$ holomorphic. [step 1.1, L1]

2.2 By [L4], $\partial(z_0z_1)/\partial z_0=z_1$, $\partial(z_0z_1)/\partial z_1=z_0$, $\partial(z_0+z_1)/\partial z_0=\partial(z_0+z_1)/\partial z_1=1$, $\partial(\exp(z_0))/\partial z_0=\exp(z_0)$, and $\partial(\exp(z_0))/\partial z_1=0$, which gives the displayed matrix. [step 1.1, L3, L4]

3.1 Substituting $(z_0,z_1)=(0,0)$ into that matrix gives the displayed value at the origin. [step 2.2] ∎
