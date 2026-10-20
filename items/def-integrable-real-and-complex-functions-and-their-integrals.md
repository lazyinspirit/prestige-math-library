---
id: def-integrable-real-and-complex-functions-and-their-integrals
kind: definition
title: "Integrable real and complex functions, and their integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-closure-properties-of-measurable-functions-used-by-the-integral, def-nonnegative-lebesgue-integral, def-complex-conjugate-real-imaginary-part-and-modulus]
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-integrable-real-and-complex-functions-and-their-integrals.json
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Definition 6.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.8"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Definition

Let $f:X\to\mathbb R$ be measurable. Its positive and negative parts are
$$f^+:=\max\{f,0\},\qquad f^-:=\max\{-f,0\};$$
they are measurable by
Closure properties of measurable functions used by the integral and
satisfy $f=f^+-f^-$ and $|f|=f^++f^-$.

The **Lebesgue integral of a real measurable function** is defined whenever at
most one of $\int f^+\,d\mu$ and $\int f^-\,d\mu$ is $+\infty$, in which case
$$\int f\,d\mu:=\int f^+\,d\mu-\int f^-\,d\mu.$$
The function is **integrable** when both integrals are finite, equivalently
when $\int|f|\,d\mu<+\infty$.

For a complex measurable function $h=u+iv$ with
$u=\operatorname{Re}h,\ v=\operatorname{Im}h$
(Real and imaginary parts, complex conjugation, and modulus), define $h$ to be
**integrable** when $|h|$ is integrable, and then define
$$\int h\,d\mu:=\int u\,d\mu+i\int v\,d\mu.$$

## Definition references

[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

