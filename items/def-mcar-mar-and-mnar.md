---
id: def-mcar-mar-and-mnar
kind: definition
title: "MCAR, MAR, and MNAR relative to an observation pattern"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-full-observed-and-missing-data
  - def-measure-kernel-and-probability-kernel
  - def-conditional-law-given-a-random-element
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §§1.3–1.5"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 50–52"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
---

## Definition

Fix the full-data/observed-data partition of
[[def-full-observed-and-missing-data]]. A **response mechanism** is a
specified conditional law $g(r\mid w)$ of the pattern $R$ given full data
$W=w$, represented by a probability kernel from the full-data space to the
finite pattern space
([[def-conditional-law-given-a-random-element]],
[[def-measure-kernel-and-probability-kernel]]). In a parameterized model, write
the response kernel as $g_\psi$; it must be a probability distribution over
patterns for each full-data value.

Relative to a specified full-data law, the mechanism is **missing completely
at random (MCAR)** when, for every pattern $r$, $g(r\mid w)$ is constant in
$w$ almost surely. It is **missing at random (MAR)** when, for every pattern
$r$, there is a measurable function $h_r$ on that pattern's observed-data
space such that
$$g(r\mid w)=h_r(W_{\mathrm{obs}}(r))\quad\text{almost surely}.$$
For a family of full-data laws, the condition is required under each law with
the same response mechanism and observed-coordinate function. It is
**missing not at random (MNAR)** when MAR fails for at least one pattern, for
the declared full-data and observed-data partition. MCAR is a special case of
MAR, since a constant is a function of the observed coordinates.

These conditions concern a supplied version of the conditional law; values
off the full-data model's support do not affect the classification. This
definition does not assert that a response mechanism is empirically true or
that every joint law comes with a selected conditional kernel.

## Remarks

When the full-data and pattern spaces are standard Borel and a kernel must be
obtained from a joint law rather than supplied as part of the model, the
library's RCD existence and factor-through results provide that construction
under AC: [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]
and [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]].
The finite examples on the companion page specify their response probabilities
directly and do not use that existence argument.
