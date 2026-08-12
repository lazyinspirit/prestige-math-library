---
id: ex-sylvesters-criterion-for-a-three-by-three-matrix
kind: example
title: 'Sylvester''s criterion verifies positive definiteness for a concrete symmetric $3\times3$ matrix'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sylvesters-criterion-for-positive-definiteness]
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

The symmetric matrix

$$A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix}$$

is positive definite.

## Facts & Assumptions

**Given:** The displayed real symmetric matrix $A$.

[L1] A real symmetric matrix is positive definite exactly when all of its leading principal minors are positive ([[thm-sylvesters-criterion-for-positive-definiteness]]).

## Verification

**Proof technique:** determinant computation with an independent square completion.

1.1 The leading principal minors are $\Delta_1=2$, $\Delta_2=\det\begin{pmatrix}2&1\\1&2\end{pmatrix}=3$, and $\Delta_3=2(4-1)-(2)=4$. All three are positive. [algebra]

1.2 Independently, for $(x,y,z)\ne0$, one has $\begin{pmatrix}x&y&z\end{pmatrix}A\begin{pmatrix}x\\y\\z\end{pmatrix}=2\left(x+\frac y2\right)^2+\frac32\left(y+\frac{2z}{3}\right)^2+\frac43z^2>0$, because the three squared linear forms vanish simultaneously only at $(0,0,0)$. [algebra]

2.1 Hence [L1] proves that $A$ is positive definite. [step 1.1, L1]

3.1 Both calculations agree, and each boundary minor $k=1,2,3$ has been evaluated explicitly. [step 1.1, step 2.1, step 1.2] ∎
