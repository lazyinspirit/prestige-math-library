---
id: prop-finite-projector-energy-reality-and-gradient
kind: proposition
title: "The finite projector energy is real and has the stated Frobenius gradient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-trace-of-ab-equals-trace-of-ba
  - def-finite-basis-projector-energy-model
  - prop-differentials-of-trace-and-frobenius-linear-functionals
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond, MIT OpenCourseWare, Lecture 1"
      url: https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf
verification: {}
---

## Statement

For the data of [[def-finite-basis-projector-energy-model]], $E(P)$ is real
and $C^2$ on its stated neighborhood. For every Hermitian $P$ in that
neighborhood and every Hermitian direction $H$,
$$DE(P)[H]=\operatorname{tr}\big((h+G(P)+\nabla E_{xc}(P))H\big)=\langle F(P),H\rangle_F.$$
Thus $F(P)$ is the Hermitian Frobenius gradient of $E$.

## Facts & Assumptions

**Given:** Hermitian $h,P,H$, a real-linear self-adjoint map $G$ on $\mathbb H_n$, and a real $C^2$ functional $E_{xc}$ on an open neighborhood of $P$.

[F1] Trace and Frobenius-linear functionals differentiate by their linear increments ([[prop-differentials-of-trace-and-frobenius-linear-functionals]]).

[F2] Matrix differentials obey the sum, product, and adjoint rules ([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

[F3] In the projector energy model, $G$ is real-linear and self-adjoint and $E_{xc}$ has its Frobenius gradient ([[def-finite-basis-projector-energy-model]]).

[F4] For conformable matrices over a field, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

1.1 If $A,B$ are Hermitian, then $\overline{\operatorname{tr}(AB)}=\operatorname{tr}((AB)^*)=\operatorname{tr}(BA)=\operatorname{tr}(AB)$ by the trace identity [F4]. Hence $\operatorname{tr}(hP)$ and $\operatorname{tr}(P G(P))$ are real; $E_{xc}$ is real by [F3]. The first two terms are polynomial in the real coordinates of $P$, so together with the $C^2$ term they give a real $C^2$ function. [F2, F3, F4, given, algebra]

1.2 For real $t$, real-linearity gives $G(P+tH)=G(P)+tG(H)$. Expanding and collecting the coefficient of $t$ yields $\left.\frac{d}{dt}\right|_{t=0}\tfrac12\operatorname{tr}((P+tH)G(P+tH))=\tfrac12\operatorname{tr}(H G(P)) +\tfrac12\operatorname{tr}(P G(H))$. The linear trace term differentiates to $\operatorname{tr}(hH)$ by [F1], and the $E_{xc}$ term differentiates to $\langle\nabla E_{xc}(P),H\rangle_F$ by its gradient definition. [F1, F2, F3, given, algebra]

2.1 Self-adjointness of $G$ gives $\operatorname{tr}(P G(H))=\langle P,G(H)\rangle_F=\langle G(P),H\rangle_F=\operatorname{tr}(G(P)H)$. Since these traces are real, the two quadratic contributions in step 1.2 combine to $\operatorname{tr}(G(P)H)$. Adding the other derivatives gives $DE(P)[H]=\langle h+G(P)+\nabla E_{xc}(P),H\rangle_F$. This is the unique Frobenius gradient pairing, so it equals $\langle F(P),H\rangle_F$. [F1, F3, step 1.1, step 1.2, algebra] ∎

