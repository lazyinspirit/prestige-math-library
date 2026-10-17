---
id: alg-factorable-mccormick-box-relaxation
kind: algorithm
title: Finite McCormick convex relaxation construction for factorable box problems
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 5
deps: [alg-interval-dag-box-enclosure-and-bound, def-factorable-box-convex-relaxation-interface, def-mccormick-bilinear-box-envelope, def-outward-rounded-interval-and-ball-operations, lem-mccormick-envelope-equals-graph-convex-hull]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§16 and 18"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §§4–5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

Input a bounded factorable optimization problem on a box $B$, its objective DAG $F$, a finite list of inequality-constraint DAGs $G_i$ representing $g_i(x)\le0$, a finite rule table, a precision $p\ge2$, and a dyadic interval format with fixed exponent bounds. For each non-product nonlinear node, the table must supply certified convex and concave graph bounds $\psi^-\le w\le\psi^+$ on its certified operand domain, with proof that they contain the exact graph and that the imposed epigraph/hypograph inequalities form a convex relation. The table must also supply a convex underestimator $\phi_B$ for the objective DAG's final value, verified to satisfy $\phi_B(\iota_B(x))\le f(x)$ for every exact input $x\in B$. All domain hypotheses and interval/coefficient enclosures must be certified. For each interval call, pass the same declared precision and format to [[alg-interval-dag-box-enclosure-and-bound]]. Traverse the union of the objective and constraint DAGs in topological order, using a lifted variable for each node. For an affine node, add its exact affine relation. For a product node $w=uv$, add the four McCormick inequalities from [[def-mccormick-bilinear-box-envelope]] using certified operand bounds; [[lem-mccormick-envelope-equals-graph-convex-hull]] proves this relation is a convex outer enclosure of the product graph. For every other nonlinear node, add its certified convex and concave graph bounds; if its domain hypotheses, interval bounds, graph containment, or convexity cannot be verified, return unsupported-relaxation or inconclusive. For each constraint DAG, require its final lifted value to be at most zero.

Return the resulting convex feasible region $R_B$ and the certified objective underestimator $\phi_B$ only when every lifted relation is convex, every original feasible point has its exact node values in the lifted region, and all coefficient enclosures preserve the declared inequalities. These checks make the construction a relaxation of both the objective and all listed constraints in the sense of [[def-factorable-box-convex-relaxation-interface]]. Optionally pass this relaxation to a finite convex-bound routine. A dual-feasible pair and a verified lower bound on its Lagrangian dual value produce a dual-certificate record; if no such record is available, return bound-unavailable. The procedure asserts no solver convergence or polynomial running-time bound.

