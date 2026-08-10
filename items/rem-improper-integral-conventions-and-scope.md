---
id: rem-improper-integral-conventions-and-scope
kind: remark
title: "Conventions and proved scope for improper integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       def-absolute-and-conditional-improper-convergence,
       def-cauchy-principal-value, thm-improper-p-test-rational,
       thm-frullani-integral-proper-factor]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Every singular end is tested separately, and changing a finite split point does not change convergence or value. A finite limit is required: divergence to an infinite extended value is still divergence. Absolute and conditional convergence inherit the same piecewise convention.

A Cauchy principal value is a coupled symmetric limit and can exist without the corresponding improper integral. The $p$-test on this page is proved for rational exponents only. Frullani's formula deliberately retains the proper factor $\int_a^b dt/t$; no logarithm identity, Lebesgue-integrability statement, or arbitrary-real-exponent extension is claimed.
