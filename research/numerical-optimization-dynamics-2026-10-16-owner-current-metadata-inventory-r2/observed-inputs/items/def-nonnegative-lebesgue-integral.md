---
id: def-nonnegative-lebesgue-integral
kind: definition
title: "The nonnegative Lebesgue integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-real-valued-measurable-function, def-nonnegative-simple-measurable-function, def-integral-of-a-nonnegative-simple-function]
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $f:X\to[0,+\infty]$ be measurable
([[def-extended-real-valued-measurable-function]]). Its
**nonnegative Lebesgue integral** is
$$\int f\,d\mu:=\sup\left\{\int s\,d\mu:\ s \text{ is nonnegative simple and } 0\le s\le f\right\},$$
where the simple integral on the right is the one from
[[def-integral-of-a-nonnegative-simple-function]].

The set of admissible simple minorants is nonempty because it contains the zero
function, which is simple ([[def-nonnegative-simple-measurable-function]]).
