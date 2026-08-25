---
id: rem-the-field-is-a-hypothesis-of-every-bound-on-this-page
kind: remark
title: "Which field each bound is proved over, and what changes when it is replaced"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-oddtown, thm-eventown, thm-nonuniform-fisher-inequality, thm-graham-pollak, thm-combinatorial-nullstellensatz, thm-cauchy-davenport, def-standard-bilinear-form-on-a-coordinate-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "N. Alon, Combinatorial Nullstellensatz"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Remarks

Oddtown and Eventown are proved over $\mathbb{F}_2$, and they use only the
bilinear form and dimension facts available there. Fisher's inequality and
Graham-Pollak are proved over $\mathbb{R}$, because each uses the fact that a sum
of nonnegative squares vanishes only termwise.

The combinatorial Nullstellensatz is field-generic: the proof uses only the
polynomial ring over a field and the strict degree bounds. Cauchy-Davenport is
the specialised finite-field application where the field is $\mathbb{Z}/p$, and
primality is the step that makes that field available and keeps the decisive
binomial coefficient nonzero.

The companion-page false statements test these hypotheses alongside sharpness
and boundary claims: changing the field or losing positivity breaks some linear
arguments, deleting the top coefficient breaks the Nullstellensatz, while the
Oddtown and Sauer--Shelah examples test whether their numerical bounds can be
strengthened.
