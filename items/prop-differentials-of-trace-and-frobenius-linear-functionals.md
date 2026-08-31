---
id: prop-differentials-of-trace-and-frobenius-linear-functionals
kind: proposition
title: "Trace and Frobenius-linear matrix functionals differentiate by inspection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       def-trace-of-a-square-matrix,
       def-frobenius-matrix-norm]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

For square matrices,

$$D(\operatorname{tr})(A)[H]=\operatorname{tr}(H).$$

For a fixed matrix $B$, the real-valued Frobenius-linear functional

$$\Phi_B(A):=\operatorname{Re}\operatorname{tr}(B^\ast A)$$

satisfies

$$D\Phi_B(A)[H]=\operatorname{Re}\operatorname{tr}(B^\ast H).$$

Thus the Frobenius gradient of $\Phi_B$ is $B$.

## Facts & Assumptions

**Given:** A matrix $A$, a perturbation direction $H$, and a fixed matrix $B$.

[F1] Real Fr\'echet differentiability identifies the first-order linear term in
$F(A+H)-F(A)$ ([[def-real-frechet-derivative-on-real-and-complex-matrix-spaces]]).

## Proof
**Proof technique:** direct.

1.1 The trace is linear, so $\operatorname{tr}(A+H)-\operatorname{tr}(A)=\operatorname{tr}(H)$. Likewise, $$\Phi_B(A+H)-\Phi_B(A) =\operatorname{Re}\operatorname{tr}(B^\ast H).$$ Each increment is already linear in $H$. [F1, algebra]

2.1 Therefore [F1] gives the displayed derivatives. The Frobenius gradient is the unique matrix $G$ satisfying $D\Phi_B(A)[H]=\operatorname{Re}\operatorname{tr}(G^\ast H)$ for every $H$, and step 1.1 shows that $G=B$. [F1, step 1.1] ∎