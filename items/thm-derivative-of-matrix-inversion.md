---
id: thm-derivative-of-matrix-inversion
kind: theorem
title: "On the invertible locus, $D\\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-matrix-differentials-obey-sum-product-and-adjoint-rules,
       def-invertible-matrix-and-general-linear-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $A$ be invertible. Then the inversion map is real Fr\'echet differentiable
at $A$, and for every direction $H$,

$$D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}.$$

## Facts & Assumptions

**Given:** An invertible matrix $A$ and a perturbation direction $H$.

[L1] Matrix differentials satisfy the product rule $d(AB)=dA\,B+A\,dB$ ([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

## Proof
**Proof technique:** direct.

1.1 Because $A$ is invertible, $\det(A)\ne0$. Since $\det(A+K)$ is a polynomial in the real coordinates of $K$ with value $\det(A)$ at $K=0$, there is $\varepsilon>0$ such that $A+K$ is invertible whenever $\|K\|_F<\varepsilon$. For such $K$, the identities $(A+K)^{-1}(A+K)=I=A^{-1}A$ give $$(A+K)^{-1}-A^{-1}=-A^{-1}K(A+K)^{-1},$$ and hence $$\bigl((A+K)^{-1}-A^{-1}\bigr)+A^{-1}KA^{-1}=A^{-1}KA^{-1}K(A+K)^{-1}.$$ [given, algebra]

2.1 Shrink $\varepsilon$ so that $\|A^{-1}\|_2\|K\|_F\le \tfrac12$ whenever $\|K\|_F<\varepsilon$. From step 1.1, $$\|(A+K)^{-1}\|_2\le \|A^{-1}\|_2+\|A^{-1}\|_2\|K\|_F\|(A+K)^{-1}\|_2,$$ so $\|(A+K)^{-1}\|_2\le 2\|A^{-1}\|_2$. Applying this bound to the second identity in step 1.1 yields $$\bigl\|(A+K)^{-1}-A^{-1}+A^{-1}KA^{-1}\bigr\|_F\le 2\|A^{-1}\|_2^3\|K\|_F^2=o(\|K\|_F).$$ Therefore inversion is real Fr\'echet differentiable at $A$ with derivative $K\mapsto -A^{-1}KA^{-1}$. [step 1.1, algebra]

3.1 Differentiating the identity $A\,A^{-1}=I$ and using the product rule [L1] gives $$H\,A^{-1}+A\,D\operatorname{inv}(A)[H]=0.$$ Left-multiplying by $A^{-1}$ recovers $$D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1},$$ which is the formula claimed in the statement. [L1, step 2.1, algebra] ∎
