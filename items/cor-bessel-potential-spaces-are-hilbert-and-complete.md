---
id: cor-bessel-potential-spaces-are-hilbert-and-complete
kind: corollary
title: Every real-order Bessel-potential completion is Hilbert
status: published
origin: pipeline
deps:
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - def-real-order-bessel-potential-sobolev-space
  - def-hilbert-space
  - lem-complex-lp-completeness-density-and-inner-product
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, property (1), printed p. 140; the completion-to-weighted-L2 isometry is proved locally"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, Proposition 4.8 and proof, printed p. 69; Fourier normalization converted"
---

## Statement

Assume Countable Choice. For every $n\ge1$ and $s\in\mathbb R$, the space
$H^s(\mathbb R^n)$ is a complex Hilbert space for the first-variable-linear
inner product
$$ (U,V)_{H^s}=\int_{\mathbb R^n}(J_sU)(\xi)\overline{(J_sV)(\xi)}\,d\xi, $$
where $J_s$ is the surjective weighted Fourier isometry from
[[thm-bessel-potential-completions-embed-in-tempered-distributions]]. Its
induced norm is exactly the defining completion norm, and $H^s$ is complete.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, and $U,V\in H^s(\mathbb R^n)$.

[A1] Countable Choice permits choosing one element from each nonempty set in a
countable family ([[def-countable-choice]]).

[F1] The weighted Fourier map $J_s:H^s\to L^2$ is a surjective linear
isometry ([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F2] Under Countable Choice, complex $L^2$ has the first-variable-linear
inner product $\int f\overline g$, its norm is the $L^2$ norm, and it is
complete ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F3] $H^s$ is the normed-space completion of Schwartz space with its defining
completion norm ([[def-real-order-bessel-potential-sobolev-space]]).

[F4] A complex Hilbert space is a complex inner-product space complete for its
induced norm ([[def-hilbert-space]]).

## Proof

**Proof technique:** Pull back the complex $L^2$ inner product along $J_s$.

1.1 Define $(U,V)_{H^s}:=(J_sU,J_sV)_{L^2}$. The map $J_s$ is well-defined and linear by [F1], so this pairing is well-defined; the inner-product properties of the complex $L^2$ pairing [F2] give first-variable linearity and conjugate symmetry. [F1, F2, given]

2.1 For every $U\in H^s$, $(U,U)_{H^s}=\|J_sU\|_2^2\ge0$ and $(U,U)_{H^s}^{1/2}=\|J_sU\|_2=\|U\|_{H^s}$ by [F1, F2, F3]. If $(U,U)_{H^s}=0$, the isometry makes $\|U\|_{H^s}=0$, hence $U=0$; thus the pairing is positive definite and induces exactly the completion norm. [F1, F2, F3, step 1.1]

3.1 Let $(U_j)$ be Cauchy in this induced norm. By step 2.1 and [F1], $(J_sU_j)$ is Cauchy in complex $L^2$, so Countable Choice [A1] and [F2] give a limit $g\in L^2$. Surjectivity [F1] gives the unique $U\in H^s$ with $J_sU=g$, and the isometry yields $\|U_j-U\|_{H^s}=\|J_sU_j-g\|_2\to0$. Thus the induced norm is complete. [A1, F1, F2, step 2.1]

4.1 By [F4], steps 1.1 and 2.1 give a complex inner product whose induced norm is complete by step 3.1. Therefore $H^s(\mathbb R^n)$ is a complex Hilbert space with the stated inner product and norm. [F4, step 1.1, step 2.1, step 3.1] ∎
