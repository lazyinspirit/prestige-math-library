---
id: lem-bessel-potential-norm-is-positive-definite
kind: lemma
title: The weighted Fourier seminorm separates Schwartz functions
status: published
origin: pipeline
deps:
  - def-bessel-potential-pre-hilbert-norm-on-schwartz-space
  - thm-plancherel
  - def-schwartz-space-and-its-seminorms
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, formula (12.5), printed p. 140 (weighted Fourier norm)"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Proposition 4.8 and proof, printed p. 69 (Hilbert norm via the weighted Fourier image)"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Countable Choice. For every $n\ge1$, real $s$, and
$u\in\mathcal S(\mathbb R^n)$, $q_s(u)=0$ implies that $u=0$ as an actual
smooth function. Consequently $Q_s$ from
[[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]] is a
positive-definite inner product, and its induced norm is
$q_s(u)=\|\langle\xi\rangle^s\widehat u\|_{L^2}$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, and
$u\in\mathcal S(\mathbb R^n)$.

[F1] The form and candidate seminorm satisfy
$Q_s(u,v)=(\langle\xi\rangle^s\widehat u,
\langle\xi\rangle^s\widehat v)_{L^2}$ and
$q_s(u)=\|\langle\xi\rangle^s\widehat u\|_2$
([[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]]).

[F2] The repository Fourier transform extends to a unitary map on complex
$L^2$ and preserves the $L^2$ norm of Schwartz functions
([[thm-plancherel]]).

[F3] A Schwartz function is an actual continuous smooth function, not only an
almost-everywhere class ([[def-schwartz-space-and-its-seminorms]]).

## Proof

**Proof technique:** Weighted $L^2$ separation and continuity.

1.1 Suppose $q_s(u)=0$. By [F1], $\|w_s\widehat u\|_2=0$, so $w_s\widehat u=0$ almost everywhere. [F1, given]

2.1 Since $w_s(\xi)=\langle\xi\rangle^s>0$ at every $\xi$, step 1.1 implies $\widehat u=0$ almost everywhere; Plancherel [F2] then gives $\|u\|_2=\|\widehat u\|_2=0$. [F2, step 1.1, algebra]

3.1 If $u(x_0)\ne0$, continuity from [F3] gives a ball on which $|u|>|u(x_0)|/2$; its positive Lebesgue measure contradicts $\|u\|_2=0$. Therefore the actual Schwartz function vanishes everywhere. [F3, step 2.1]

4.1 By [F1], $Q_s$ is the complex $L^2$ inner product of the weighted Fourier images, hence is linear in the first variable, conjugate symmetric, and nonnegative on the diagonal; step 3.1 makes it positive definite, and [F1] gives $Q_s(u,u)^{1/2}=q_s(u)$. [F1, step 3.1]

5.1 Conversely, if $u=0$, its Fourier transform vanishes and the defining formula [F1] gives $q_s(u)=0$; thus the kernel is exactly $\{0\}$. [F1] ∎
