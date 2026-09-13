---
id: ex-fourier-transform-of-a-plane-wave
kind: example
title: Fourier transform of a plane wave
status: published
origin: pipeline
deps: [thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Proposition 11.23 and distributional Fourier discussion, p. 128; sign converted to the 2pi convention"
proof_strategy: direct
---

## Example

Assume Countable Choice.  For $b\in\mathbb R^n$, the positive-frequency plane
wave satisfies

$$\mathcal F(e^{2\pi ib\cdot x})=\delta_b$$

in $\mathcal S'(\mathbb R^n)$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and $b\in\mathbb R^n$.

[F1] The elementary-transform theorem gives
$\mathcal F\delta_a=e^{-2\pi ia\cdot\xi}$ and
$\mathcal F(e^{2\pi ib\cdot x})=\delta_b$
([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

## Verification

**Proof technique:** check the sign against a translated delta and apply the supplied plane-wave formula.

1.1 Set $a=-b$ in [F1].  Then $\mathcal F\delta_{-b}=e^{2\pi ib\cdot\xi}$; the positive exponential sign therefore corresponds to a delta initially placed at $-b$. [F1]

2.1 The plane-wave clause of [F1] directly gives $\mathcal F(e^{2\pi ib\cdot x})=\delta_b$.  Step 1.1 checks the sign by locating the pre-transform delta at $-b$.  For $b=0$, the formula reduces to $\mathcal F1=\delta_0$.  Countable Choice is used only through [F1]. [F1, step 1.1] ∎
