---
id: ex-fundamental-solution-by-division-of-a-fourier-symbol
kind: example
title: Fundamental solution by division of a fourier symbol
status: draft
origin: pipeline
deps: [thm-constant-coefficient-differential-operators-become-polynomial-multipliers, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, def-countable-choice]
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
      locator: "Chapter 11 introduction and equations (11.34)–(11.37), pp. 119, 128; elementary symbol calculation under 2pi normalization"
proof_strategy: direct
---

## Example

Assume Countable Choice and write $D=d/dx$.  The integrable function

$$E(x)=\frac12e^{-|x|}$$

defines a tempered fundamental solution for $1-D^2$ on $\mathbb R$:

$$(1-D^2)E=\delta_0,\qquad \mathcal F E(\xi)=\frac1{1+4\pi^2\xi^2}.$$

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the $2\pi$ Fourier
convention.

[F1] The distributional transform of an $L^1$ function is represented by its
integral transform
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F2] The symbol identity is
$\mathcal F(P(D)u)=P(2\pi i\xi)\mathcal Fu$
([[thm-constant-coefficient-differential-operators-become-polynomial-multipliers]]).

[F3] Fourier transformation is injective on $\mathcal S'$, and
$\mathcal F\delta_0=1$
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]],
[[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

## Verification

**Proof technique:** explicit integral transform and symbol multiplication.

1.1 Since $E\in L^1(\mathbb R)$, [F1] applies.  Split at zero and use the elementary decaying exponential antiderivative. [F1, algebra]

$$\begin{aligned} \widehat E(\xi) &=\frac12\left(\int_0^\infty e^{-(1+2\pi i\xi)x}dx +\int_0^\infty e^{-(1-2\pi i\xi)x}dx\right)\\ &=\frac12\left(\frac1{1+2\pi i\xi}+\frac1{1-2\pi i\xi}\right) =\frac1{1+4\pi^2\xi^2}. \end{aligned}$$

[F1, algebra]

2.1 For $P(z)=1-z^2$, apply the Fourier-symbol identity to step 1.1. [F2, step 1.1]

$$\mathcal F((1-D^2)E) =(1-(2\pi i\xi)^2)\widehat E(\xi)=1.$$

But $1=\mathcal F\delta_0$ by [F3], so injectivity yields
$(1-D^2)E=\delta_0$. [F2, F3, step 1.1]

3.1 The denominator is strictly positive on the real frequency axis, so this particular division produces a smooth bounded multiplier.  The calculation does not assert that an arbitrary polynomial symbol can be divided in $\mathcal S'$, nor any general PDE existence or regularity theorem. Countable Choice is used only through [F1]–[F3]. [given, step 2.1] ∎
