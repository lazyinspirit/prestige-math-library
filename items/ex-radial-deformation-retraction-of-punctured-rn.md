---
id: ex-radial-deformation-retraction-of-punctured-rn
kind: example
title: "The radial homotopy is checked explicitly on punctured Euclidean space and on the unit sphere"
status: published
origin: session
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, thm-radial-straight-line-map-on-punctured-rn]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

For $P=\mathbb R^n\setminus\{0\}$ with $n\ge1$, the radial deformation retraction onto $S^{n-1}$ is

$$H(x,t)=\left((1-t)+\frac{t}{\lVert x\rVert_2}\right)x.$$

At $t=0$ it is the identity, at $t=1$ it is radial normalisation, and every point of the unit sphere remains fixed.

## Facts & Assumptions

**Given:** A natural $n\ge1$, a point $x\in P$, a parameter $t\in I$, and a point $s\in S^{n-1}$.

[L1] The radial formula is continuous on $P\times I$, is nonzero there, starts at $x$, ends at $x/\lVert x\rVert_2$, and fixes norm-one vectors ([[thm-radial-straight-line-map-on-punctured-rn]]).

[L2] This map and radial normalisation form a deformation retraction of $P$ onto $S^{n-1}$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

## Verification

**Proof technique:** direct.

1.1 Substituting $t=0$ gives $H(x,0)=x$, and substituting $t=1$ gives $H(x,1)=x/\lVert x\rVert_2$. [algebra]

1.2 If $s\in S^{n-1}$ then $\lVert s\rVert_2=1$, so $H(s,t)=((1-t)+t)s=s$ for all $t\in I$. [algebra]

2.1 Continuity and avoidance of the origin are supplied by [L1]. Thus steps 1.1 and 1.2 explicitly verify the endpoint and fixed-sphere clauses of the deformation retraction [L2]. [step 1.1, step 1.2, L1, L2] ∎
