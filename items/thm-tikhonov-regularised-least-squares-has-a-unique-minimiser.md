---
id: thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
kind: theorem
title: "For every $\\lambda>0$, the Tikhonov objective is strictly convex and has the unique minimiser $(A^*A+\\lambda I)^{-1}A^*b$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tikhonov-regularised-least-squares, thm-singular-value-decomposition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stanford CS205L, Unit 12: Regularization"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_12_regularization.pdf"
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let
$A\in M_{m\times n}(\mathbb F)$, let $b\in\mathbb F^m$, and let
$\lambda\in\mathbb R$ satisfy $\lambda>0$. Then
the Tikhonov objective

$$J_\lambda(x)=\|Ax-b\|_2^2+\lambda\|x\|_2^2$$

is strictly convex and has the unique minimiser

$$x_\lambda=(A^*A+\lambda I)^{-1}A^*b.$$

## Facts & Assumptions

**Given:** A matrix $A\in M_{m\times n}(\mathbb F)$, a vector
$b\in\mathbb F^m$, and a real parameter $\lambda>0$, where
$\mathbb F\in\{\mathbb R,\mathbb C\}$.

[L1] The regularised objective is $J_\lambda(x)=\|Ax-b\|_2^2+\lambda\|x\|_2^2$ ([[def-tikhonov-regularised-least-squares]]).

[L2] $A$ admits a singular value decomposition $A=U\Sigma V^*$ ([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], write $A=U\Sigma V^*$ and set $x=Vy$ and $\widehat b:=U^*b$. Since $U$ and $V$ are unitary, $$ J_\lambda(Vy)=\|\Sigma y-\widehat b\|_2^2+\lambda\|y\|_2^2. $$ [L1, L2, algebra]

2.1 If $\sigma_1,\dots,\sigma_r$ are the nonzero singular values, then step 1.1 becomes $$ J_\lambda(Vy)=\sum_{i=1}^r |\sigma_i y_i-\widehat b_i|^2 +\sum_{i=r+1}^m |\widehat b_i|^2 +\lambda\sum_{i=1}^n |y_i|^2. $$ Each variable $y_i$ appears in a one-variable quadratic with positive coefficient $\sigma_i^2+\lambda$ or $\lambda$, so the objective is strictly convex. [step 1.1, algebra]

3.1 Minimising coordinatewise gives $$ y_i=\frac{\sigma_i}{\sigma_i^2+\lambda}\widehat b_i \quad(1\le i\le r), \qquad y_i=0 \quad(r<i\le n). $$ Equivalently, $$ y=(\Sigma^*\Sigma+\lambda I)^{-1}\Sigma^*\widehat b. $$ [step 2.1, algebra]

4.1 Returning to $x=Vy$ and using $A^*A=V\Sigma^*\Sigma V^*$, one gets $$ x_\lambda =V(\Sigma^*\Sigma+\lambda I)^{-1}\Sigma^*U^*b =(A^*A+\lambda I)^{-1}A^*b. $$ [L2, step 3.1, algebra]

5.1 Step 2.1 proves strict convexity and step 4.1 gives the unique minimiser. [step 2.1, step 4.1] ∎
