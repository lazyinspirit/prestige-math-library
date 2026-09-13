---
id: thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials
kind: theorem
title: Fourier transform of delta constants plane waves and polynomials
status: draft
origin: pipeline
deps: [thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-compactly-supported-distributions-are-tempered, thm-polynomial-growth-functions-define-tempered-distributions, def-dirac-delta-and-its-derivatives, thm-fourier-translation-modulation-dilation-and-reflection-laws, def-countable-choice]
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
      locator: "Proposition 11.23 and equations (11.34)–(11.37), p. 128; constants converted to 2pi normalization"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Examples following Theorem 8.4.3, pp. 129–130"
proof_strategy: direct
---

## Statement

Assume Countable Choice and the negative-sign $2\pi$ normalization.  For
$a,b\in\mathbb R^n$ and every multi-index $\alpha$,

$$\mathcal F\delta_a(\xi)=e^{-2\pi ia\cdot\xi},\qquad \mathcal F1=\delta_0,\qquad \mathcal F(e^{2\pi ib\cdot x})=\delta_b,$$

and

$$\mathcal F(\partial^\alpha\delta_0)=(2\pi i\xi)^\alpha,\qquad \mathcal F(x^\alpha)= \left(-\frac1{2\pi i}\right)^{|\alpha|}\partial^\alpha\delta_0.$$

Functions in these formulas denote their regular tempered distributions.
By linearity, the last identity determines the transform of every polynomial.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], $a,b\in\mathbb R^n$, and
a multi-index $\alpha$.

[F1] Dirac distributions and their derivatives have the bilinear evaluation
convention ([[def-dirac-delta-and-its-derivatives]]) and compactly supported
distributions are tempered
([[thm-compactly-supported-distributions-are-tempered]]).

[F2] Constants, plane waves, and polynomials are regular tempered
distributions ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F3] On $\mathcal S'$, $\mathcal F^2=R$ and $\mathcal F$ is injective
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F4] Fourier differentiation and multiplication have the precise $2\pi$
constants and signs
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F5] The published translation/modulation laws use the same negative-sign
normalization ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

## Proof

**Proof technique:** evaluate delta and use reflection/calculus identities.

1.1 Evaluate the transform of $\delta_a$ on an arbitrary $\varphi\in\mathcal S$. [F1, F2]

$$\langle\mathcal F\delta_a,\varphi\rangle =\widehat\varphi(a) =\int e^{-2\pi ia\cdot\xi}\varphi(\xi)\,d\xi.$$

Thus $\mathcal F\delta_a$ is the displayed plane wave; at $a=0$ this gives
$\mathcal F\delta_0=1$.  The sign agrees with [F5]. [F1, F2, F5]

2.1 Apply $\mathcal F$ to $\mathcal F\delta_0=1$.  Since $R\delta_0=\delta_0$, [F3] gives $\mathcal F1=\delta_0$.  Similarly step 1.1 with $a=-b$ gives $\mathcal F\delta_{-b}=e^{2\pi ib\cdot x}$, so applying $\mathcal F$ once more gives $\mathcal F(e^{2\pi ib\cdot x})=R\delta_{-b}=\delta_b$. [F3, step 1.1]

3.1 Apply the derivative identity in [F4] to $\delta_0$ and use $\mathcal F\delta_0=1$ to obtain $\mathcal F(\partial^\alpha\delta_0)=(2\pi i\xi)^\alpha$. Apply the multiplication identity to the constant distribution and use $\mathcal F1=\delta_0$ to obtain the formula for $x^\alpha$. [F4, step 2.1]

4.1 Every polynomial is a finite complex linear combination of monomials, so linearity completes the polynomial assertion.  The zero multi-index recovers $\mathcal F\delta_0=1$ and $\mathcal F1=\delta_0$.  Countable Choice is used only through the published Fourier suppliers. [step 3.1, algebra] ∎
