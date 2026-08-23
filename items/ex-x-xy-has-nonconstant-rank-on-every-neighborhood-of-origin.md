---
id: ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin
kind: example
title: 'The map $(x,y)\mapsto(x,xy)$ has nonconstant rank on every neighbourhood of the origin'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-differential-rank-and-constant-rank, lem-matrix-rank-detected-by-nonzero-minors, def-jacobian-matrix-and-gradient, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-metric-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, rank theorem examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Example

For $f(x,y)=(x,xy)$, the derivative has rank $1$ on the vertical axis and rank $2$ off it. Thus no neighbourhood of $(0,0)$ has constant rank, although $Df$ is continuous.

## Facts & Assumptions

**Given:** The polynomial map $f:\mathbb R^2\to\mathbb R^2$, $f(x,y)=(x,xy)$.

[L1] The power and product rules give the continuous partial derivatives $Jf(x,y)=\begin{pmatrix}1&0\\y&x\end{pmatrix}$, and the continuous-partials theorem identifies this Jacobian with the total derivative ([[def-jacobian-matrix-and-gradient]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] A square matrix has rank $2$ exactly when its determinant is nonzero, while its nonzero first row gives rank at least $1$; every point of an open set has a ball contained in it ([[lem-matrix-rank-detected-by-nonzero-minors]], [[def-differential-rank-and-constant-rank]], [[def-metric-topology]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\det Jf(x,y)=x$. Thus [L2] gives rank $2$ when $x\ne0$ and rank exactly $1$ when $x=0$. [given, L1, L2, algebra]

1.2 Every open ball about the origin contains $(0,0)$ and also $(\varepsilon,0)$ for some nonzero sufficiently small $\varepsilon$. [given, L2, choose]

2.1 Step 1.1 assigns different ranks to those points, so no neighbourhood of the origin has constant rank. The polynomial entries in [L1] are continuous, proving the final assertion. [step 1.1, step 1.2] ∎
