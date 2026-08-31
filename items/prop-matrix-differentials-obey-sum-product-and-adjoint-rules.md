---
id: prop-matrix-differentials-obey-sum-product-and-adjoint-rules
kind: proposition
title: "Matrix differentials obey the sum rule, product rule, and adjoint rule"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       def-matrix-product-and-identity-matrix,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

In the real Fr\'echet sense on matrix spaces:

1. $D(A\mapsto A+B)(A)[H]=H$ for fixed $B$;
2. $D(A,B\mapsto AB)(A,B)[H,K]=HB+AK$;
3. $D(A\mapsto A^\ast)(A)[H]=H^\ast$.

Equivalently, differential notation gives
$d(A+B)=dA+dB$, $d(AB)=dA\,B+A\,dB$, and $d(A^\ast)=(dA)^\ast$.

## Facts & Assumptions

**Given:** Compatible matrices and perturbation directions.

[F1] Real Fr\'echet differentiability means
$F(A+H)=F(A)+DF(A)[H]+o(\|H\|_F)$
([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

## Proof
**Proof technique:** direct.

1.1 For the sum map, $(A+H)+B=(A+B)+H$, so the linear term is already $H$. For the adjoint map, $(A+H)^\ast=A^\ast+H^\ast$, so the linear term is $H^\ast$. Both have zero remainder in the sense of [F1]. [F1, algebra]

2.1 For the product map, $$(A+H)(B+K)=AB+HB+AK+HK.$$ The bilinear term $HK$ satisfies $\|HK\|_F\le \|H\|_F\|K\|_F=o(\|(H,K)\|)$, so [F1] identifies the derivative as $(H,K)\mapsto HB+AK$. This is exactly the product rule. [F1, algebra] ∎