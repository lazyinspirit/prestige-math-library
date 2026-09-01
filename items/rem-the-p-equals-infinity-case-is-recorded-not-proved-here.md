---
id: rem-the-p-equals-infinity-case-is-recorded-not-proved-here
kind: remark
title: "The $p=\\infty$ case is recorded but not proved here"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_refs: [rem-dual-of-l-infinity]
external_dependency:
  source_url: "https://djvu.online/file/NPF4BEtSuqdFA"
  exact_statement: "For $p=\\infty$, the map $g\\mapsto\\phi_g$ from $L^1$ into the bounded linear functionals on $L^\\infty$ is almost never surjective."
  local_proof_attempt: "No local proof is supplied because the standard witness extends point evaluation or an equivalent subspace functional by Hahn-Banach."
  necessity: "MT-16 must record the $p=\\infty$ boundary honestly without importing Hahn-Banach before the functional-analysis track."
verification:
  sources_checked: 2026-09-01
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., paragraph after Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, paragraph after Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Remark

For $p=\infty$, the concrete map
$$g \longmapsto \Lambda_g,\qquad \Lambda_g(f):=\int fg\,d\mu,$$
from $L^1(\mu)$ into the bounded linear functionals on $L^\infty(\mu)$ is not
surjective in general. This page therefore stops at $1 \le p < \infty$ and
records the failure of the $p=\infty$ analogue without proving it here.

The boundary witness belongs to the library's recorded-not-proved functional
analysis seam [[rem-dual-of-l-infinity]]. On $[0,1]$ the standard route extends
point evaluation from a smaller subspace by Hahn-Banach, which this page does
not use.
