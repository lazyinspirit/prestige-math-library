---
id: ex-hessian-and-divergence-in-euclidean-coordinates
kind: example
title: "Hessian and divergence in euclidean coordinates"
status: published
origin: pipeline
deps: ["prop-gradient-hessian-and-divergence-connection-formulas","ex-the-euclidean-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

In Cartesian coordinates on Euclidean $\mathbb R^n$, $(\operatorname{Hess}f)_{ij}=\partial_i\partial_j f$ and $\operatorname{div}X=\sum_i\partial_iX^i$. For $f(x,y)=x^2y$ and $X=x^2\partial_x+xy\partial_y$, these become
$$\operatorname{Hess}f=\begin{pmatrix}2y&2x\\2x&0\end{pmatrix},\qquad \operatorname{div}X=3x.$$

## Facts & Assumptions

**Given:** The Euclidean metric, the stated smooth functions and vector field.

[F1] Hessian and divergence have the connection formulas $(\operatorname{Hess}f)_{ij}=\partial_i\partial_jf-\Gamma^k{}_{ij}\partial_kf$ and $\operatorname{div}X=\partial_iX^i+\Gamma^i{}_{ik}X^k$ ([[prop-gradient-hessian-and-divergence-connection-formulas]]).

[F2] Cartesian Euclidean Christoffel symbols vanish ([[ex-the-euclidean-levi-civita-connection]]).

## Verification

1.1 Insert [F2] into [F1] to obtain the general Cartesian formulas. For the given $f$, the first derivatives are $\partial_xf=2xy$ and $\partial_yf=x^2$. Differentiating again gives $\partial_x^2f=2y$, $\partial_x\partial_yf=2x$, $\partial_y\partial_xf=2x$, $\partial_y^2f=0$, exactly the displayed symmetric matrix. [F1, F2, given]

2.1 The coordinate derivatives of the vector components contributing to divergence are $\partial_x(x^2)=2x$ and $\partial_y(xy)=x$, whose sum is $3x$. At $(0,0)$ both the Hessian and divergence vanish; at $(1,1)$ they are respectively the matrix with rows $(2,2)$ and $(2,0)$, and the scalar $3$. Constant $f$ gives zero Hessian and zero $X$ gives zero divergence. In dimension zero the general formulas use empty sums, while dimension one gives $f''$ and $(X^1)'$. [step 1.1] ∎
