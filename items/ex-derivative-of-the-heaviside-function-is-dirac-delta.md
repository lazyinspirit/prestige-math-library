---
id: "ex-derivative-of-the-heaviside-function-is-dirac-delta"
kind: "example"
title: "Derivative of the heaviside function is dirac delta"
deps: ["def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "lem-complex-integration-by-parts-on-intervals-and-decaying-lines", "def-countable-choice", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume Countable Choice for Lebesgue integration. On $\mathbb R$, let $H=\mathbf1_{(0,\infty)}$. Then $D u_H=\delta_0$. Any assigned value of $H(0)$ gives the same regular distribution.

## Facts & Assumptions

[F1] Locally integrable functions have regular functionals $u_f(\varphi)=\int f\varphi$ ([[def-regular-distribution-from-a-locally-integrable-function]]), and under Countable Choice these functionals are distributions ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F2] $(Du)(\varphi)=-u(\varphi')$, and $\delta_0(\varphi)=\varphi(0)$ ([[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).

[F3] Under Countable Choice, the complex FTC gives $\int_a^b\varphi'=\varphi(b)-\varphi(a)$ ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]], [[def-countable-choice]]).

[F4] A singleton is Lebesgue null ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

## Proof

**Given:** the bounded measurable function $H$ and Countable Choice.

1.1 Since $|H|\le1$, its absolute integral on every compact interval is finite, so F1 makes $u_H$ a distribution. Altering its value only at zero changes no integral by F4. For a test $\varphi$, choose $R>0$ beyond its compact support. Then F2 and F3 give $Du_H(\varphi)=-\int_0^R\varphi'(x)\,dx=\varphi(0)-\varphi(R)=\varphi(0)=\delta_0(\varphi)$. This calculation applies to complex tests componentwise. [given, F1, F2, F3, F4]

2.1 The equality on every test proves the distribution identity. The sign is positive because the negative transpose sign cancels the lower-endpoint sign. A test supported away from zero gives zero; the zero test gives zero; only the finite interval $[0,R]$ enters, so no endpoint at infinity is evaluated. $\square$ [step 1.1, F2]
