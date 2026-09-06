---
id: def-cutoff-relation-f-prec-u
kind: definition
title: "The compactly supported cutoff relation $f\\prec U$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compact-support-c-c-and-c-zero-on-an-lch-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.2"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

For an open $U\subseteq X$, write $f\prec U$ when $f\in C_c(X)$,
$0\le f\le1$, and $\operatorname{supp}f\subseteq U$. This is an admissibility
condition, not the pointwise relation $f\le\mathbf1_U$.
