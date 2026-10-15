---
id: ex-zero-inclusion-probability-and-unobserved-unit
kind: example
title: "An unobserved unit prevents universal unbiased estimation"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-population-and-sampling-design
  - thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness
  - def-statistic-and-estimator
  - def-unbiased-estimator-and-umvu
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $U=\{1,2\}$ and let the design always sample $s=\{1\}$. Compare the
fixed populations $y=(0,0)$ and $y'=(0,1)$. The second unit has $\pi_2=0$;
both populations produce the same observed record $({\{1\}},0)$, while their
totals are $0$ and $1$. This is the two-unit instance of
[[thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness]].

## Facts & Assumptions

**Given:** The fixed two-unit population set $U=\{1,2\}$, the degenerate
design supported only on $\{1\}$, and the two value functions shown above.

[F1] [[def-finite-population-and-sampling-design]]: A design law specifies
the sample support, inclusion probabilities, observed record, and total while
holding population values fixed.

[F2] [[thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness]]:
A zero first-order inclusion probability gives equal observed laws for some
populations with different totals and rules out an estimator unbiased for all
finite populations.

[F3] [[def-statistic-and-estimator]]: An estimator is a statistic, hence a
function of the observed record with the specified real target.

[F4] [[def-unbiased-estimator-and-umvu]]: An estimator is unbiased when its
expectation equals its estimand at every parameter value.

## Verification

1.1 The only supported sample is $\{1\}$, so $\pi_2=0$. Under both $y$ and $y'$, the record is $({\{1\}},0)$, but $T(y)=0$ and $T(y')=1$. [given, F1, algebra]

2.1 Any observed-record estimator has one value $d$ at $({\{1\}},0)$, so its design expectation is $d$ under both populations. It cannot equal both totals $0$ and $1$. This explicit calculation verifies the instance asserted by [F2], using the unbiasedness definition [F4]. [F1, F2, F3, F4, step 1.1, algebra] ∎