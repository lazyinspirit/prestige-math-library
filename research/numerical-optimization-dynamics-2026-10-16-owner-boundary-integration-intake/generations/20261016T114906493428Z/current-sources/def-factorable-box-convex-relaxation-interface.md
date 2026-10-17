---
id: def-factorable-box-convex-relaxation-interface
kind: definition
title: Certified factorable convex relaxations on a box
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 4
deps: [def-convex-program-duality-and-slater-condition, def-mccormick-bilinear-box-envelope, def-outward-rounded-interval-and-ball-operations, def-intervals-rectangles-and-complex-balls, def-spatial-global-optimization-problem]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§16 and 20"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

A finite **factorable expression DAG** on a box $B$ has input variables, certified constants, affine nodes, product nodes, and optional unary nonlinear nodes. A **certified convex relaxation** of its constrained minimization problem consists of a convex-program representation in the form of [[def-convex-program-duality-and-slater-condition]], with feasible set $R_B$ in lifted variables and convex objective $\phi_B$ on $R_B$, and an exact-value embedding $\iota_B$ with these properties:

1. For every original feasible point $x\in B\cap C$, the exact value of each DAG node defines $\iota_B(x)\in R_B$.
2. The relaxed objective underestimates the original: $\phi_B(\iota_B(x))\le f(x)$.
3. Every product node $w=uv$ is represented by a McCormick polytope from [[def-mccormick-bilinear-box-envelope]] using operand bounds that enclose their exact ranges. Every other nonlinear node must use supplied convex and concave graph enclosures with verified domain hypotheses. If no such enclosure is supplied, no relaxation is defined.
4. Every interval bound and coefficient affected by finite precision carries an outward-rounded enclosure from [[def-outward-rounded-interval-and-ball-operations]]. A non-finite status or unverified coefficient makes the relaxation unavailable.

For a convex program represented in [[def-convex-program-duality-and-slater-condition]], a dual certificate is a dual-feasible pair $(\lambda,\nu)$ together with a verified real lower bound $\ell$ for its Lagrangian dual value $q(\lambda,\nu)$. The definition records a certificate interface only; it does not assert that a solver finds one.

