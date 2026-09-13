---
id: ex-fourier-transform-of-delta-derivatives-and-monomials
kind: example
title: Fourier transform of delta derivatives and monomials
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
      locator: "Equations (11.36)–(11.37), p. 128; first-order calculation converted to 2pi"
proof_strategy: direct
---

## Example

Assume Countable Choice.  In one dimension,

$$\mathcal F(\delta_0')=2\pi i\xi, \qquad \mathcal F(x)=-\frac1{2\pi i}\delta_0'.$$

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the negative-sign
$2\pi$ convention.

[F1] The elementary-transform theorem supplies the derivative and monomial
identities in $\mathcal S'$ with their distributional signs
([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

## Verification

**Proof technique:** test calculation and the supplied transform table.

1.1 Evaluate the transform of $\delta_0'$ on an arbitrary $\varphi\in\mathcal S(\mathbb R)$. [F1]

$$\langle\mathcal F\delta_0',\varphi\rangle =-\left.\frac d{dx}\widehat\varphi(x)\right|_{x=0} =2\pi i\int_{\mathbb R}\xi\varphi(\xi)\,d\xi.$$

Thus $\mathcal F\delta_0'=2\pi i\xi$.  The two minus signs are respectively
the derivative of delta and the negative Fourier exponential. [F1]

2.1 The monomial clause of [F1], specialized to the one-dimensional multi-index $1$, directly gives $\mathcal F(x)=-(2\pi i)^{-1}\delta_0'$, which is the second formula.  Together with step 1.1 this records both directions of the delta-derivative/monomial pair.  Countable Choice is used only through [F1]. [F1, step 1.1] ∎
