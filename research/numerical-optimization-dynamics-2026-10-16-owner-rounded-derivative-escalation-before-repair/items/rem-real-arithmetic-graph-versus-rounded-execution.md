---
id: rem-real-arithmetic-graph-versus-rounded-execution
kind: remark
title: "Real-arithmetic graph derivatives and rounded execution are different objects"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program, thm-graph-gradient-error-from-local-jacobian-perturbations]
justified_by: []
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4.1"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
    - title: "A. Griewank, Achieving Logarithmic Growth of Temporal and Spatial Complexity in Reverse Automatic Differentiation, §2"
      url: "https://web.archive.org/web/20210506204927/http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.455.4143&rep=rep1&type=pdf"
---

## Remarks

The exact AD identities in this page refer to the real-arithmetic graph and its exact primitive derivatives. A floating-point execution uses rounded intermediate values and rounded derivative arithmetic; it is not asserted to equal the derivative of an end-to-end rounded machine computation. The perturbation theorem [[thm-graph-gradient-error-from-local-jacobian-perturbations]] propagates specified local Jacobian errors, but does not supply them or bound rounding in the reverse accumulation additions.

The batch manifest also requires the finite-precision direct-factorization page for concrete solve/factorization error estimates. That supplier's exact item interface is unavailable during this authoring turn, so no quantitative floating-point solve or factorization guarantee is claimed here.
