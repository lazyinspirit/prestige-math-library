---
id: def-absolute-and-conditional-improper-convergence
kind: definition
title: "Absolute and conditional convergence of improper integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       def-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: n/a
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

An improper integral of $f$ is **absolutely convergent** when the corresponding improper integral of $|f|$ converges. It is **conditionally convergent** when the integral of $f$ converges but the integral of $|f|$ does not.

For an integral with several singular ends, absolute convergence means absolute convergence on every separately defined one-ended piece. Conditional convergence means convergence of every piece and failure of absolute convergence on at least one piece. Thus the terminology never permits cancellation between distinct singular ends.
