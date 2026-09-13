---
id: ex-fourier-transform-of-dirac-and-one
kind: example
title: Fourier transform of dirac and one
status: draft
origin: pipeline
deps: [thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Proposition 11.23, p. 128; normalized constants converted to the 2pi convention"
proof_strategy: direct
---

## Example

Assume Countable Choice.  On $\mathbb R^n$ with the $2\pi$ normalization,

$$\mathcal F\delta_0=1,\qquad \mathcal F1=\delta_0.$$

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the fixed bilinear
Fourier convention.

[F1] The elementary-transform theorem gives the formulas for delta and the
constant distribution
([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

## Verification

**Proof technique:** direct test calculation and the supplied transform table.

1.1 For $\varphi\in\mathcal S$, $\langle\mathcal F\delta_0,\varphi\rangle=\widehat\varphi(0) =\int\varphi=\langle1,\varphi\rangle$.  Thus $\mathcal F\delta_0=1$. [F1]

2.1 The constant-distribution formula in [F1] gives $\mathcal F1=\delta_0$ directly.  Together with step 1.1, this checks that the reciprocal pair carries no factor of $(2\pi)^n$ in the repository normalization.  Countable Choice is used only through [F1]. [F1, step 1.1] ∎
