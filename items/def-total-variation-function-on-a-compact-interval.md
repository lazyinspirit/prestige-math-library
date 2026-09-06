---
id: def-total-variation-function-on-a-compact-interval
kind: definition
title: "Total-variation function on a compact interval"
status: draft
origin: pipeline
deps: [def-bounded-variation-and-total-variation]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "R. K. Srivastava, MA550 Measure Theory Lecture Notes, §4.11"
      url: "https://www.iitg.ac.in/rksri/MA550_Measure_Theory_Lecture_Notes_2024.pdf"
---

## Definition

If $F:[a,b]\to\mathbb R$ has bounded variation in the sense of
[[def-bounded-variation-and-total-variation]], its **total-variation
function** is
$$V_F(x):=\operatorname{Var}_{[a,x]}(F),\qquad a\le x\le b.$$ 
In particular $V_F(a)=0$; this agrees with the singleton convention in the
cited definition.
