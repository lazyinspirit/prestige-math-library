---
id: def-indefinite-lebesgue-integral-on-a-compact-interval
kind: definition
title: "Indefinite Lebesgue integral on a compact interval"
status: draft
origin: pipeline
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §6.3"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

Let $f\in L^1([a,b])$ in the sense of
[[def-integrable-real-and-complex-functions-and-their-integrals]].  Its
**indefinite Lebesgue integral based at $a$** is
$$I_f(x):=\int_{[a,x]}f\,d\lambda=\int_a^x f(t)\,dt\qquad(a\le x\le b),$$
where, for real- or complex-valued $f$, the first integral means
$$\int_{[a,b]} f\,\mathbf 1_{[a,x]}\,d\lambda$$
in the sense of
[[def-integrable-real-and-complex-functions-and-their-integrals]]. For
nonnegative $f$ this agrees with the set-integral notation of
[[def-integral-over-a-measurable-set]]. Thus $I_f(a)=0$, including when $a=b$.
