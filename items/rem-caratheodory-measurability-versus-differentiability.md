---
id: rem-caratheodory-measurability-versus-differentiability
kind: remark
title: "Carathéodory measurability is not Carathéodory's differentiability criterion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-caratheodory-measurable-set, thm-caratheodory-characterisation]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

Carathéodory measurability ([[def-caratheodory-measurable-set]]) is a condition on a subset $E$ of the domain of an outer measure: every test set must split additively across $E$ and its complement. The theorem [[thm-caratheodory-characterisation]] concerns differentiability of a real function at a limit point and characterizes it by a continuous factorization. The shared name records the mathematician, not a logical relationship between the conditions.
