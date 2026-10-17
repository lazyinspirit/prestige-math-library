---
id: alg-periodic-orbit-pseudoarclength-continuation
kind: algorithm
title: "Finite pseudo-arclength continuation of phase-fixed periodic orbits"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-validated-periodic-orbit-corrector
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - lem-phase-bordered-shooting-jacobian-invertibility
  - thm-pseudo-arclength-local-newton-correction
  - thm-c2-ode-flow-on-common-tube
  - def-validated-periodic-shooting-jet-enclosure
  - def-ck-euclidean-maps-and-diffeomorphisms
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Definition

Let $f(x,\mu)$ be a $C^2$ one-parameter family in the map convention of [[def-ck-euclidean-maps-and-diffeomorphisms]], and let $G(x,T,\mu)$ be the parameterized phase-bordered shooting map of [[def-validated-periodic-shooting-jet-enclosure]]. Applying [[thm-c2-ode-flow-on-common-tube]] to its static-parameter augmented field $g(x,\mu)=(f(x,\mu),0)$ makes this shooting map $C^2$ on a common compact tube. The branch residual is $F=G:\mathbb R^{d+2}\to\mathbb R^{d+1}$. A finite periodic-orbit continuation request supplies a validated seed section root, a unit orientation, step size, requested step count, finite continuation/corrector budgets, residual tolerance, angle margin, and the sound flow/jet range provider.

At a certified root, a tangent routine must certify a unit vector in $\ker DF$ and a rank-$d+1$ condition. The predictor is advanced along that tangent. The corrector is [[alg-validated-periodic-orbit-corrector]] in section mode, which appends the pseudo-arclength plane and validates the resulting square residual by Krawczyk inclusion. The arithmetic evaluator supplies exact or interval-enclosed $F$ and $DF$ from the validated shooting jet. The local inverse and chart interfaces are [[lem-phase-bordered-shooting-jacobian-invertibility]] and [[thm-pseudo-arclength-local-newton-correction]]. Run [[alg-pseudo-arclength-continuation-with-certified-local-corrector]] with these callbacks and its chart, angle, inverse, and finite-budget checks.

When the fixed-parameter phase-bordered $(x,T)$ Jacobian is certified invertible, the full derivative $DF$ has row rank $d+1$: its $(x,T)$ columns already span $\mathbb R^{d+1}$. Thus a fold in the parameter projection does not by itself make the branch singular. Missing tangent/rank evidence, tube exit, failed Krawczyk inclusion, unresolved angle, or exhausted finite budgets returns the corresponding inconclusive status; no global branch-completeness claim is made. Any requested fold certificate is emitted only when the generic continuation algorithm's separate fold checks succeed.
