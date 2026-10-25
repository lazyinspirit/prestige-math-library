---
id: cor-two-variable-hessian-determinant-test
kind: corollary
title: "The two-variable Hessian determinant test"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multivariable-second-derivative-test, cor-hessian-is-symmetric]
aliases: []
landmark: true
proof_strategy: calculation
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement

Let $a$ be a critical point of a $C^2$ function of two variables, and put $A=f_{xx}(a)$, $B=f_{xy}(a)$, $C=f_{yy}(a)$ and $\Delta=AC-B^2$. If $\Delta>0$, then $A>0$ gives a strict local minimum and $A<0$ a strict local maximum. If $\Delta<0$, there is neither. If $\Delta=0$, this test gives no conclusion.

## Facts & Assumptions
**Given:** $a$ is a critical point of a $C^2$ scalar field $f$ on an open subset of $\mathbb R^2$.

[L1] The Hessian is symmetric ([[cor-hessian-is-symmetric]]).

[L2] The second-derivative test classifies a critical point from definiteness or indefiniteness of its Hessian ([[thm-multivariable-second-derivative-test]]).

## Proof

**Proof technique:** calculation.

1.1 By [L1], the Hessian quadratic form is $Q(s,t)=As^2+2Bst+Ct^2$. If $A\ne0$, completing the square gives $Q=A(s+(B/A)t)^2+(\Delta/A)t^2$. [L1, algebra]

2.1 If $\Delta>0$, the two coefficients in step 1.1 have the sign of $A$, so $Q$ is positive definite for $A>0$ and negative definite for $A<0$. [step 1.1, algebra]

2.2 If $\Delta<0$ and $A\ne0$, then $Q(1,0)=A$ while $Q(-B/A,1)=\Delta/A$, which have opposite signs; hence $Q$ is indefinite. If $A=0$, then $-B^2=\Delta<0$, so $B\ne0$, and $Q(1,t)=2Bt+Ct^2$ has both signs for sufficiently small positive and negative $t$. [step 1.1, algebra]

3.1 Apply [L2] to steps 2.1 and 2.2. When $\Delta=0$ and $A\ne0$, step 1.1 makes $Q=A(s+(B/A)t)^2$, so it is semidefinite but not definite; when $A=0$, then $B=0$ and $Q=Ct^2$, with the same conclusion (including $Q=0$). Thus this is the inconclusive case of [L2]. [L2, step 1.1, step 2.1, step 2.2, algebra] ∎
