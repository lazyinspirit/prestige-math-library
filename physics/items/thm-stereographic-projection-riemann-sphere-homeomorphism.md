---
id: thm-stereographic-projection-riemann-sphere-homeomorphism
kind: theorem
title: "Stereographic projection identifies the Riemann sphere with the unit two-sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-riemann-sphere-one-point-compactification, cor-euclidean-closed-balls-and-spheres-are-compact, thm-compactness-under-continuous-maps, def-one-point-compactification, thm-one-point-compactification-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Let
$$S^2:=\{(x,y,t)\in\mathbb R^3:x^2+y^2+t^2=1\}.$$
Define
$$\Sigma(z)=\left(\frac{2\operatorname{Re}z}{1+|z|^2},\ \frac{2\operatorname{Im}z}{1+|z|^2},\ \frac{|z|^2-1}{1+|z|^2}\right)\qquad(z\in\mathbb C)$$
and $\Sigma(\infty)=(0,0,1)$. Then $\Sigma:\widehat{\mathbb C}\to S^2$ is a
homeomorphism, with inverse
$$\Pi(x,y,t)=\begin{cases}\dfrac{x+iy}{1-t},&(x,y,t)\neq(0,0,1),\\ \infty,&(x,y,t)=(0,0,1).\end{cases}$$

## Facts & Assumptions

**Given:** The Riemann sphere $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$, the unit sphere $S^2$, and the displayed formulas for $\Sigma$ and $\Pi$.

[L1] In the one-point compactification, a neighbourhood of $\infty$ is exactly the complement of a closed compact subset of $\mathbb C$, and $\widehat{\mathbb C}$ is compact Hausdorff ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

## Proof

**Proof technique:** direct.

1.1 Direct algebra gives $\Sigma(z)\in S^2$ for every finite $z$, and the displayed formulas satisfy $\Sigma(\Pi(x,y,t))=(x,y,t)$ for $(x,y,t)\neq(0,0,1)$ and $\Pi(\Sigma(z))=z$ for finite $z$, with $\Sigma(\infty)=(0,0,1)$ and $\Pi(0,0,1)=\infty$. [given, algebra]

1.2 On $\mathbb C$ and on $S^2\setminus\{(0,0,1)\}$ the formulas are rational with nonzero denominator, so both restrictions are continuous; and for the cap $U_t=\{(x,y,s):s>t\}\cup\{(0,0,1)\}$ one has $\Sigma^{-1}(U_t)=\{z:|z|>\sqrt{(1+t)/(1-t)}\}\cup\{\infty\}$, which is a neighbourhood of $\infty$ by [L1]. [L1, given, algebra]

1.3 If $V=\widehat{\mathbb C}\setminus K$ is a neighbourhood of $\infty$, compactness of $K$ gives $R>0$ with $K\subseteq\overline D(0,R)$, so the cap $U_{(R^2-1)/(R^2+1)}$ satisfies $\Pi(U_{(R^2-1)/(R^2+1)})\subseteq V$; therefore $\Pi$ is continuous at the north pole. [L1, choose, algebra]

2.1 The maps $\Sigma$ and $\Pi$ are continuous inverse bijections by the preceding three steps, so $\Sigma$ is a homeomorphism. [given] ∎
