---
id: alg-factorable-mccormick-box-relaxation
kind: algorithm
title: Finite McCormick convex relaxation construction for factorable box problems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 5
deps: [alg-interval-dag-box-enclosure-and-bound, def-factorable-box-convex-relaxation-interface, def-mccormick-bilinear-box-envelope, def-outward-rounded-interval-and-ball-operations]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§16 and 18"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §§4–5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

Input a bounded factorable optimization problem on a box $B$, a finite expression DAG, and a finite rule table giving an outer graph enclosure and convex underestimator for every non-affine node other than a product. Traverse nodes in topological order. Compute each operand range with [[alg-interval-dag-box-enclosure-and-bound]] using outward rounding. For an affine node, add its exact affine relation. For a product node $w=uv$, add the four McCormick inequalities from [[def-mccormick-bilinear-box-envelope]] using the certified operand bounds. For every other nonlinear node, add only its supplied graph enclosure and convex underestimator; if its domain hypotheses or interval bounds cannot be verified, return unsupported-relaxation or inconclusive.

Return the resulting convex feasible region $R_B$ and convex objective underestimator $\phi_B$ only when each lifted relation has a verified outer-graph certificate and all coefficient enclosures preserve the declared inequalities. Optionally pass this relaxation to a finite convex-bound routine. A dual-feasible pair and a verified lower bound on its Lagrangian dual value produce a dual-certificate record; if no such record is available, return bound-unavailable. The procedure asserts no solver convergence or polynomial running-time bound.

