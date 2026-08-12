---
id: ex-singular-projection-has-zero-determinant
kind: example
title: "A nonidentity projection of the plane has determinant zero and is not invertible"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-determinant-of-a-linear-operator,
       thm-operator-invertible-iff-determinant-nonzero, thm-reals-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over $\mathbb R$, the projection $T(x,y)=(x,0)$ has determinant $0$ and is
not invertible.

## Facts & Assumptions

**Given:** $T:\mathbb R^2\to\mathbb R^2$, $T(x,y)=(x,0)$.

[F1] $\mathbb R$ is a field ([[thm-reals-field]]).

[F2] An operator determinant is the determinant of any representing matrix
([[def-determinant-of-a-linear-operator]]).

[L1] A finite-dimensional operator over a field is invertible exactly when
its determinant is nonzero
([[thm-operator-invertible-iff-determinant-nonzero]]).

## Verification

**Proof technique:** direct.

1.1 In the standard ordered basis, $[T]=\begin{pmatrix}1&0\\0&0\end{pmatrix}$, so [F2] gives $\det(T)=1\cdot0-0\cdot0=0$. [F1, F2, algebra]
1.2 Directly, $(0,1)$ is a nonzero vector in the kernel and the image is $\{(x,0):x\in\mathbb R\}$, so $T$ is neither injective nor surjective. [given, algebra]
2.1 The invertibility criterion [L1] agrees with step 1.2 because the determinant computed in step 1.1 is zero. [step 1.1, step 1.2, L1] ∎