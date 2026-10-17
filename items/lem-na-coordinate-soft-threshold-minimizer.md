---
id: lem-na-coordinate-soft-threshold-minimizer
kind: lemma
title: "The one-coordinate absolute-value quadratic minimizer"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-soft-thresholding-function
  - def-abs-value
  - lem-of-abs-value
  - lem-of-triangle-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, §2.2.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
---

## Statement

Let $a>0$, $b\in\mathbb R$, and $\tau>0$. The scalar convex function
$$q(u)=\frac a2u^2-bu+\tau|u|\qquad(u\in\mathbb R)$$
has the unique global minimizer $u^*=S_\tau(b)/a$, where $S_\tau$ is the soft-threshold map of [[def-soft-thresholding-function]]. At $b=\tau$ and $b=-\tau$, the unique minimizer is $0$.

## Facts & Assumptions

**Given:** The parameters in the Statement.

[F1] [[def-soft-thresholding-function]]: $S_\tau(b)=b-\tau$ for $b>\tau$, $0$ for $-\tau\le b\le\tau$, and $b+\tau$ for $b<-\tau$.

[F2] [[lem-of-triangle-inequality]] and [[lem-of-abs-value]]: absolute value is subadditive and positively homogeneous.

## Proof

1.1 For $0\le s\le1$, the square identity $$((1-s)u+sv)^2=(1-s)u^2+sv^2-s(1-s)(u-v)^2$$ and $a>0$ make the quadratic term convex; [F2] makes the absolute-value term convex, and the linear term is affine. Thus $q$ is convex. On $u\ge0$, completing the square gives $q(u)=\frac a2(u-(b-\tau)/a)^2-\frac{(b-\tau)^2}{2a}$, so the unique minimizer on that half-line is $u_+=\max\{(b-\tau)/a,0\}$. [given, F2, algebra]

1.2 On $u\le0$, $q(u)=\frac a2(u-(b+\tau)/a)^2-\frac{(b+\tau)^2}{2a}$, so the unique minimizer on that half-line is $u_-=\min\{(b+\tau)/a,0\}$. [given, algebra]

2.1 If $b>\tau$, then $u_+=(b-\tau)/a>0$ and $q(u_+)=-\frac{(b-\tau)^2}{2a}<0=q(0)$, while the negative-half-line minimum is $0$; hence this is the unique global minimizer. If $b<-\tau$, then $u_-=(b+\tau)/a<0$ and $q(u_-)=-\frac{(b+\tau)^2}{2a}<0=q(0)$, while the positive-half-line minimum is $0$; hence this is the unique global minimizer. If $-\tau\le b\le\tau$, then $u_+=u_-=0$, the unique minimizer on each half-line by steps 1.1–1.2. These cases equal $S_\tau(b)/a$ by [F1], including the two kink values. [F1, step 1.1, step 1.2, algebra] ∎

## Remarks

For the finite sanity case $b=3$ and $\tau=1$, the formula gives $S_1(3)=2$ and the minimizer of $\tfrac12u^2-3u+|u|$ is $u=2$.
