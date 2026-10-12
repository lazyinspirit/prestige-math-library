---
id: rem-gr-high-regularity-scope
kind: remark
title: "Scope and status of the Gr14 high-regularity symmetric hyperbolic material"
status: draft
origin: session
dependency_level: 27
domain: physics
physical_scope: "Classical general relativity in the smooth high-regularity branch with the selected matter sectors (vacuum with Lambda, scalar field, strict barotropic perfect fluid, geodesic dust) and smooth constrained initial data; purely conditional local-in-time model statements with no empirical content."
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [pthm-gr-high-regularity-local-development, thm-gr-high-regularity-selected-matter-development, post-gr-einstein-field-law, def-gr-dust-matter-model, def-gr-perfect-fluid-matter-model, def-gr-scalar-field-matter-model]
dependency_roles:
  pthm-gr-high-regularity-local-development: physical-result
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
  post-gr-einstein-field-law: physical-assumption
  def-gr-dust-matter-model: formulation-prerequisite
  def-gr-perfect-fluid-matter-model: formulation-prerequisite
  def-gr-scalar-field-matter-model: formulation-prerequisite
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: n/a
---

## Scope and status

This page contains the Gr14 high-regularity symmetric hyperbolic proof material:
the periodic first-order theory (E0), the harmonic-gauge reduced Einstein
equation and its subsidiary system (E1), the geometric data and local
development theorems (E2), and the selected matter reductions with the complete
geodesic-dust residual chain (E3, E3d--E3d.2). Its content is conditional:
the physical reading is the model deduction of
[[pthm-gr-high-regularity-local-development]] from the adopted postulates
[[post-gr-einstein-field-law]] and the matter definitions
[[def-gr-scalar-field-matter-model]], [[def-gr-perfect-fluid-matter-model]],
[[def-gr-dust-matter-model]]; the mathematical carriers are
[[thm-gr-high-regularity-selected-matter-development]] and its prerequisites.

**What is established.** Local-in-time smooth developments of the adopted field
law with the selected matter sectors, from smooth constrained data, with
uniqueness near the initial surface up to a data-fixing time-orientation-
preserving isometry, and with the initial surface lying in the interior of its
domain of dependence.

**What is not established or assumed away.** No global or all-time existence,
no uniform existence time on noncompact data, no maximality or boundary
behaviour of the development (that is the scope of the successor page), no
shocks, free boundaries, vacuum boundaries or junction conditions, no
distributional or low-regularity sources, no optimal Sobolev threshold (the
theorem works in the smooth/high-regularity branch with $s\ge5$), no
quantitative measurement or observational claim. For dust, the construction
occurs before flow crossings and the velocity is prescribed separately, so
empty regions with $\rho=0$ are included and no division by $\rho$ occurs; the
density solves $\partial_sr=-r\chi$ with the explicit positive solution of
[[thm-gr-dust-local-evolution]]. For the fluid branch the strict hypotheses
$\epsilon+p>0$, $0<p'<1$ are essential; the failure at negative $p'$ is the
companion counterexample on the examples page. No statement is made that any
model here describes nature, and no empirical premise enters.

**Review flags recorded for the owner.** (i) The dust reduction's Schouten
normalization in the research design displayed the Kulkarni--Nomizu bracket
expression with a normalization that does not reproduce the
constant-curvature check under the stated Schouten tensor; the production items
fix the standard normalization explicitly and record the discrepancy in the
batch notes for independent review. (ii) The dust derivation uses Friedrich and
Rendall (arXiv:gr-qc/0002074) as provenance only, with all claims reproved
locally against the stated conventions; no literature authority substitutes for
a local argument.
