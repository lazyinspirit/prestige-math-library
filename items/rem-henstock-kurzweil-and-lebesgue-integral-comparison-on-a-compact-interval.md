---
id: rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval
kind: remark
title: "Henstock--Kurzweil and Lebesgue integral comparison on a compact interval"
status: draft
origin: pipeline
proved_here: false
deps: [rem-henstock-kurzweil-vs-lebesgue, def-henstock-kurzweil-integral-on-a-compact-interval, thm-every-derivative-is-henstock-kurzweil-integrable, cor-indefinite-henstock-kurzweil-integral-is-a-primitive, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
external_dependency:
  source_url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
  exact_statement: "On a compact interval, a real function is Lebesgue integrable if and only if both it and its absolute value are Henstock--Kurzweil integrable; the integrals of the function agree."
  local_proof_attempt: "The local HK FTC proves that derivatives are HK integrable, but it does not supply the Saks--Henstock and convergence machinery needed for this equivalence."
  necessity: "The comparison is a source-recorded seam between the established Lebesgue and gauge-integral developments."
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Appendix H, Exercises 18, 20, and 22"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

The compact-interval comparison is recorded in
[[rem-henstock-kurzweil-vs-lebesgue]]: $f\in L^1[a,b]$ exactly when $f$ and
$|f|$ are Henstock--Kurzweil integrable, and then the values of the two
integrals of $f$ agree.  The local HK notions and unconditional derivative FTC
are [[def-henstock-kurzweil-integral-on-a-compact-interval]],
[[thm-every-derivative-is-henstock-kurzweil-integrable]], and
[[cor-indefinite-henstock-kurzweil-integral-is-a-primitive]].

## Remarks

**Not proved here.** The cited source supplies the comparison.  In particular,
it must not be inferred merely from the definition of Lebesgue integrability
[[def-integrable-real-and-complex-functions-and-their-integrals]] or from the
unconditional HK theorem for derivatives.
