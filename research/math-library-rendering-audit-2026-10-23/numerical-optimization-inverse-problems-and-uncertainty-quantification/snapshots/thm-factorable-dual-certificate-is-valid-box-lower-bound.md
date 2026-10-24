---
id: thm-factorable-dual-certificate-is-valid-box-lower-bound
kind: theorem
title: A verified dual certificate for a McCormick relaxation is a valid global lower bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 6
proof_strategy: direct
deps: [alg-factorable-mccormick-box-relaxation, def-convex-program-duality-and-slater-condition, def-factorable-box-convex-relaxation-interface, lem-mccormick-envelope-equals-graph-convex-hull, thm-lagrangian-weak-duality, thm-outward-rounded-operations-are-isotone-and-dag-sound]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§16 and 20"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

Suppose [[alg-factorable-mccormick-box-relaxation]] returns a certified convex relaxation $(R_B,\phi_B)$ of an original problem on a box $B$ with $B\cap C\ne\emptyset$, and a dual-feasible pair $(\lambda,\nu)$ with a verified lower bound $\ell\le q(\lambda,\nu)$. Then $\ell$ is a valid lower bound for the original box problem:
$$\ell\le \inf_{x\in B\cap C} f(x).$$
This certificate applies only to the stated relaxation and its verified coefficient/domain enclosures. A solver residual or an approximate dual objective without a verified lower bound is not a certificate.

## Facts & Assumptions

**Given:** A certified relaxation from [[def-factorable-box-convex-relaxation-interface]] with $B\cap C\ne\emptyset$, a dual-feasible pair, a verified $\ell\le q(\lambda,\nu)$, and finite outward-rounded arithmetic.

[F1] For every original feasible $x$, the exact DAG values define an embedded relaxed point $\iota_B(x)\in R_B$ and $\phi_B(\iota_B(x))\le f(x)$. [[def-factorable-box-convex-relaxation-interface]]

[F2] Every exact bilinear graph point over its operand box lies in the McCormick polytope; the four inequalities give its convex hull. [[lem-mccormick-envelope-equals-graph-convex-hull]]

[F3] Every exact finite arithmetic-DAG node value lies in its finite outward-rounded enclosure; a non-finite status makes no enclosure claim. [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]

[F4] For a primal-feasible point and dual-feasible pair, the Lagrangian dual value satisfies $q(\lambda,\nu)\le f_0(y)$. [[thm-lagrangian-weak-duality]]

## Proof

1.1 Fix $x\in B\cap C$. Traverse its finite expression DAG in topological order and assign each lifted variable its exact node value. Affine equalities hold by construction. At each product node the exact operands lie within their certified ranges by [F3], and the exact product graph lies in its McCormick polytope by [F2]. Every other nonlinear relation is included only with a verified outer graph enclosure by the algorithm definition. Thus the constructed lifted point $\iota_B(x)$ lies in $R_B$, and the relaxed objective satisfies $\phi_B(\iota_B(x))\le f(x)$ by [F1]. [given, F1, F2, F3, construct, induction]

2.1 Weak duality [F4], applied to the relaxed primal point $\iota_B(x)$ from step 1.1, gives $q(\lambda,\nu)\le\phi_B(\iota_B(x))$. Since the verified certificate satisfies $\ell\le q(\lambda,\nu)$, we obtain $\ell\le\phi_B(\iota_B(x))\le f(x)$. [given, F1, F4, step 1.1, algebra]

3.1 The inequality in step 2.1 holds for every $x\in B\cap C$, so taking the infimum over that set yields $\ell\le\inf_{x\in B\cap C}f(x)$. [step 2.1, algebra] ∎

