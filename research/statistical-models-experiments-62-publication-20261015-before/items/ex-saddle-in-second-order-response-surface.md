---
id: ex-saddle-in-second-order-response-surface
kind: example
title: "A second-order response surface with a saddle point"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-local-response-surface-model
  - thm-second-order-response-surface-stationary-point-and-classification
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 19, §§19.5–19.7"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Example

On $\mathcal R=[-1,1]^2$, consider $m(x_1,x_2)=x_1^2-x_2^2$. Its curvature matrix is $B=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, so the stationary point at the origin is a saddle in the fitted polynomial.

## Facts & Assumptions

**Given:** The region and polynomial in the Example.

[F1] [[def-local-response-surface-model]]: a second-order response-surface model has $m(x)=\beta_0+x^{\mathsf T}\beta+x^{\mathsf T}Bx$ with symmetric $B$ and is interpreted only on its declared region.

[F2] [[thm-second-order-response-surface-stationary-point-and-classification]]: a nonsingular symmetric curvature matrix with eigenvalues of both signs gives a saddle at its stationary point; an interior stationary point has that local classification in the fitted region.

## Verification

1.1 The matrix $B$ is symmetric and nonsingular, and its eigenvalues are $1$ and $-1$. The stationary point formula in [F2] gives $x_0=0$, which lies in the interior of $\mathcal R$. [given, F1, F2, algebra]

2.1 Directly, $m(h,0)-m(0,0)=h^2>0$ and $m(0,h)-m(0,0)=-h^2<0$ for every $0<|h|<1$. Thus arbitrarily close points in the region give increments of both signs, verifying the saddle classification in [F2]. [given, F2, choose, algebra] ∎