---
id: ex-annihilator-of-a-coordinate-plane
kind: example
title: 'The annihilator of the coordinate plane $z=0$ in $\mathbb R^3$ is the line spanned by the third coordinate functional'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilators-under-the-evaluation-pairing, thm-double-annihilator-and-annihilator-dimension, lem-standard-basis-of-f-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapter 6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Example

For $U=\{(x,y,0):x,y\in\mathbb R\}\le\mathbb R^3$,

$$U^\circ=\operatorname{span}\{z^*\},\qquad z^*(x,y,z)=z.$$

## Facts & Assumptions

**Given:** The coordinate plane $U$ and coordinate functionals $x^*,y^*,z^*$.

[L1] The annihilator $U^\circ$ consists of the functionals that vanish on every vector of $U$ ([[def-annihilators-under-the-evaluation-pairing]]).

[L2] In finite dimension, $\dim U^\circ=\dim V-\dim U$ ([[thm-double-annihilator-and-annihilator-dimension]]).

[L3] The three standard coordinate vectors form a basis of $\mathbb R^3$ ([[lem-standard-basis-of-f-n]]).

## Verification

**Proof technique:** direct coordinate computation.

1.1 By [L3], a general functional is $f=ax^*+by^*+cz^*$. If $f\in U^\circ$, evaluation at $(1,0,0)$ and $(0,1,0)$ gives $a=b=0$. [L1, L3, algebra]

1.2 Conversely every $cz^*$ vanishes on $(x,y,0)$, so [L1] gives $U^\circ=\operatorname{span}\{z^*\}$. [L1, algebra]

2.1 As a check, $\dim U=2$ and [L2] gives $\dim U^\circ=3-2=1$, agreeing with step 1.2. [step 1.2, L2, L3] ∎
