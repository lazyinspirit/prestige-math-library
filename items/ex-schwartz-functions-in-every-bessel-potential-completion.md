---
id: ex-schwartz-functions-in-every-bessel-potential-completion
kind: example
title: Every Schwartz function belongs to every real-order H^s
status: draft
origin: pipeline
deps:
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - def-bessel-potential-pre-hilbert-norm-on-schwartz-space
  - def-real-order-bessel-potential-sobolev-space
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-schwartz-space-is-dense-in-l-two
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
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "Section 12.1.2, property (4), printed pp. 140–141"
    - title: "Richard B. Melrose, Differential Analysis, Chapter 3"
      url: https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf
      locator: "Section 4, Proposition 4.8, Schwartz inclusion and density, printed p. 69"
---

## Statement

Assume Countable Choice. For every $n\ge1$, real $s$, and actual Schwartz
function $u\in\mathcal S(\mathbb R^n)$, its canonical completion class is
sent by $E_s$ to the usual regular distribution of $u$. In particular
$\mathcal S(\mathbb R^n)\subset H^s(\mathbb R^n)$ for every real $s$, with
$$\|u\|_{H^s}=\|\langle\xi\rangle^s\widehat u\|_2<\infty.$$
This inclusion does not assert that the intersection of all real-order
$H^s$ spaces is exactly Schwartz space.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, and
$u\in\mathcal S(\mathbb R^n)$.

[A1] Countable Choice is used by the metric completion construction defining
$H^s$ ([[def-countable-choice]]).

[F1] Multiplication by $\langle\xi\rangle^s$ maps Schwartz space continuously
to itself ([[lem-japanese-bracket-powers-preserve-schwartz-space]]).

[F2] Fourier transformation is an automorphism of Schwartz space
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[F3] Every Schwartz function determines a complex $L^2$ class
([[lem-schwartz-space-is-dense-in-l-two]]).

[F4] The candidate norm is $q_s(u)=\|\langle\xi\rangle^s\widehat u\|_2$
([[def-bessel-potential-pre-hilbert-norm-on-schwartz-space]]).

[F5] The canonical constant-sequence map embeds Schwartz space linearly and
isometrically into its completion $H^s$ ([[def-real-order-bessel-potential-sobolev-space]]).

[F6] The canonical embedding sends a Schwartz class to its usual regular
distribution ([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

## Proof

**Proof technique:** Apply the weighted Fourier norm directly to a Schwartz function.

1.1 By [F2], $\widehat u\in\mathcal S$; then [F1] gives $f(\xi)=\langle\xi\rangle^s\widehat u(\xi)\in\mathcal S$. Thus [F3] gives $f\in L^2$ and the defining integral calculation is $q_s(u)^2=\int_{\mathbb R^n}|\langle\xi\rangle^s\widehat u(\xi)|^2\,d\xi=\|f\|_2^2<\infty$ by [F4]. [F1, F2, F3, F4, given]

2.1 Under the stated Countable Choice assumption [A1], [F5] places the constant sequence $i(u)=[(u,u,\ldots)]$ in $H^s$ with $\|i(u)\|_{H^s}=q_s(u)$; [F6] gives $E_s(i(u))=u_u$, the regular distribution of $u$. Step 1.1 supplies the finite norm, proving the asserted inclusion and formula for every real $s$. [A1, F5, F6, step 1.1] ∎
