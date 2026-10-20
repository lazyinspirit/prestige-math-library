---
id: lem-orthonormal-lasso-soft-thresholding
kind: lemma
title: Lasso on an orthonormal design is coordinatewise soft-thresholding
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-linear-regression-objectives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §3.4.1 and §18.4"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §§2.3–2.4"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Statement

Let $n,p\ge1$, $X\in\mathbb R^{n\times p}$ satisfy $X^{\mathsf T}X=I_p$, and let $y\in\mathbb R^n$ and $\lambda>0$. The objective
$$\frac{1}{2n}\|y-X\beta\|_2^2+\lambda\|\beta\|_1$$
has the unique minimizer $\widehat\beta_j=S_{n\lambda}((X^{\mathsf T}y)_j)$, where $S_a(t)=\operatorname{sgn}(t)(|t|-a)_+$, $(u)_+=\max\{u,0\}$, and $\operatorname{sgn}(0)=0$. Thus the threshold is $n\lambda$ under this loss normalization.

## Statement references

[The Elements of Statistical Learning, §3.4.1 and §18.4](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Rigollet and Hütter, §§2.3–2.4, soft thresholding and the Lasso objective](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** $n,p\ge1$, $X^{\mathsf T}X=I_p$, $y\in\mathbb R^n$, and $\lambda>0$.

[F1] The fixed-design empirical squared loss is $\|y-X\beta\|_2^2/(2n)$ and the Lasso penalty is $\lambda\|\beta\|_1$ ([[def-linear-regression-objectives]]).

## Proof

1.1 Put $z=X^{\mathsf T}y$. Expanding the squared norm and using $X^{\mathsf T}X=I_p$ gives $\frac{1}{2n}\|y-X\beta\|_2^2+\lambda\|\beta\|_1=\frac{\|y\|_2^2-\|z\|_2^2}{2n}+\sum_{j=1}^p\left(\frac{(\beta_j-z_j)^2}{2n}+\lambda|\beta_j|\right)$. The first term is constant in $\beta$, so the minimization separates into scalar strictly convex objectives. [F1, given, algebra]

2.1 For a scalar $z$, the derivative of $(t-z)^2/(2n)+\lambda|t|$ on $t>0$ is $(t-z)/n+\lambda$, and on $t<0$ it is $(t-z)/n-\lambda$. The positive stationary point is $t=z-n\lambda$ exactly when $z>n\lambda$; the negative stationary point is $t=z+n\lambda$ exactly when $z<-n\lambda$. When $|z|\le n\lambda$, the one-sided derivatives at zero satisfy $(-z/n-\lambda)\le0\le(-z/n+\lambda)$, so zero minimizes. Strict convexity makes each minimizer unique, and these cases are precisely $S_{n\lambda}(z)$. [step 1.1, algebra]

3.1 Applying step 2.1 to every coordinate yields the stated vector formula and uniqueness. [step 1.1, step 2.1] ∎
