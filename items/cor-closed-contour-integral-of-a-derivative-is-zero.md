---
id: cor-closed-contour-integral-of-a-derivative-is-zero
kind: corollary
title: "The integral of a continuous complex derivative over every closed rectifiable contour is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-for-complex-line-integrals, def-complex-contours-reversal-concatenation-and-closedness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

If $F$ is holomorphic on an open set, $F'$ is continuous there, and $\gamma$ is a closed rectifiable contour in that set, then $\int_\gamma F'(z)\,dz=0$.

## Facts & Assumptions

**Given:** A function $F$ and a closed rectifiable contour $\gamma$ as in the Statement.

[L1] The contour fundamental theorem gives $\int_\gamma F'\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L2] A contour is closed exactly when its endpoint values agree ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] and then [L2]: the endpoint increment is $F(\gamma(a))-F(\gamma(a))=0$. [L1, L2, algebra]

2.1 Thus the integral vanishes, including for a constant closed contour. [step 1.1] ∎
