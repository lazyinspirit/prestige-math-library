---
id: rem-probability-characteristic-function-normalization
kind: remark
title: Characteristic-function normalization
deps: ["def-integrable-real-and-complex-functions-and-their-integrals", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity"]
status: published
origin: pipeline
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: §14.1
---

## Convention

For a positive Borel probability measure $\mu$ on $\mathbb R^n$, define $\varphi_\mu(t)=\int e^{it\cdot x}\,d\mu(x)$. This integral exists because the integrand is Borel of modulus one and $\mu(\mathbb R^n)=1$; use [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. With the negative $2\pi$ Fourier convention, the same integral is
$$\varphi_\mu(t)=\widehat\mu(-t/(2\pi)),$$
because $-2\pi ix\cdot(-t/(2\pi))=it\cdot x$. In particular $\varphi_\mu(0)=1$. This is a sign-and-scale dictionary for a supplied positive probability measure; no measure construction, uniqueness theorem or choice principle is used.
