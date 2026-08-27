---
id: thm-integral-triangle-inequality
kind: theorem
title: "The modulus of an integral is bounded by the integral of the modulus"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-complex-conjugate-real-imaginary-part-and-modulus, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.22"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

If $f\in L^1(\mu)$, then
$$\left|\int f\,d\mu\right|\le\int |f|\,d\mu.$$

## Facts & Assumptions

**Given:** An integrable function $f$.

[L1] The integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L2] Real and imaginary parts, complex conjugation, and modulus are as in [[def-complex-conjugate-real-imaginary-part-and-modulus]].

[L3] Real and complex integrability are defined in [[def-integrable-real-and-complex-functions-and-their-integrals]].

[L4] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 For real-valued $f$, the functions $|f|+f=2f^+$ and $|f|-f=2f^-$ are nonnegative. Therefore [L1] and [L4] give $$0\le\int(|f|+f)\,d\mu=\int|f|\,d\mu+\int f\,d\mu,$$ $$0\le\int(|f|-f)\,d\mu=\int|f|\,d\mu-\int f\,d\mu.$$ So $$-\int|f|\,d\mu\le\int f\,d\mu\le\int|f|\,d\mu,$$ and hence $\left|\int f\,d\mu\right|\le\int|f|\,d\mu$. [L1, L3, L4, algebra]

2.1 For complex-valued $f$, let $I:=\int f\,d\mu$. If $I=0$ there is nothing to prove. Otherwise set $\alpha:=\overline I/|I|$, so $|\alpha|=1$ by [L2]. Then $$|I|=\alpha I=\int \alpha f\,d\mu,$$ and $|\operatorname{Re}(\alpha f)|\le|\alpha f|=|f|$, so step 1.1 applies to the integrable real-valued function $\operatorname{Re}(\alpha f)$. Taking real parts gives $$|I|=\int \operatorname{Re}(\alpha f)\,d\mu\le\int |\alpha f|\,d\mu=\int|f|\,d\mu,$$ because $\operatorname{Re}z\le|z|$ for every complex $z$. [L1, L2, step 1.1, L4, algebra] ∎
