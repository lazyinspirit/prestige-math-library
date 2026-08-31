---
id: fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions
kind: false-statement
title: "Tensor components do not transform as independent scalar functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-transition-laws-define-a-smooth-vector-bundle,
       prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

**False claim:** tensor coordinate components transform as if each were an
independent scalar function.

## Facts & Assumptions

**Given:** The Euclidean metric $g=dx\otimes dx+dy\otimes dy$ on $\mathbb R^2$ and the polar chart $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ on $\{r>0\}$.

[L1] Tensor-coordinate changes involve Jacobian factors on each slot ([[thm-tensor-transition-laws-define-a-smooth-vector-bundle]]).

## Refutation
**Proof technique:** direct.

1.1 In Cartesian coordinates, the coefficient matrix of $g$ is $\begin{pmatrix}1&0\\0&1\end{pmatrix}$. [given]

2.1 In polar coordinates, $dx=\cos\theta\,dr-r\sin\theta\,d\theta$ and $dy=\sin\theta\,dr+r\cos\theta\,d\theta$, so $$ g=dr\otimes dr+r^2\,d\theta\otimes d\theta. $$ Thus the coefficient matrix becomes $\begin{pmatrix}1&0\\0&r^2\end{pmatrix}$, not the unchanged scalar pair from step 1.1. This is exactly the Jacobian action described in [L1]. [L1, step 1.1, algebra]

3.1 Therefore tensor components do not transform as independent scalar functions. [step 2.1] ∎