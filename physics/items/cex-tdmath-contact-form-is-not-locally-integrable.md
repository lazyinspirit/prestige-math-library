---
id: cex-tdmath-contact-form-is-not-locally-integrable
kind: counterexample
title: 'A one-form with $\omega\wedge d\omega\ne0$ has no local exact multiple'
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tdmath-one-form-and-horizontal-path, lem-tdmath-exact-multiple-implies-pfaff-integrability]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  lem-tdmath-exact-multiple-implies-pfaff-integrability: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Pavel Etingof, Lie groups and Lie algebras, arXiv:2201.09397v5, §10.1, Theorem 10.6 and Example 10.7, pp. 55–56"
      url: "https://arxiv.org/pdf/2201.09397v5"
verification:
  precheck: n/a
---

## Statement refuted

Every nowhere-zero $C^2$ one-form on an open subset of $\mathbb R^3$ has a nonzero local integrating factor making it exact.

## Facts & Assumptions

**Given:** A local integrating factor means a nowhere-zero $C^1$ function $\mu$ with $\mu\omega=dS$ for some $C^2$ scalar $S$ on a neighborhood.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: the coordinate exterior derivative and wedge product are defined by antisymmetrized partials and alternating products.

[F2] [[lem-tdmath-exact-multiple-implies-pfaff-integrability]]: any such exact nonzero multiple satisfies $\omega\wedge d\omega=0$.

## Counterexample

1.1 On $\mathbb R^3$ with coordinates $(x,y,z)$ take $\omega=dz-y\,dx$. It is smooth and nowhere zero because the $dz$ coefficient is $1$. [given, F1]

2.1 Its exterior derivative is $d\omega=dx\wedge dy$, so $\omega\wedge d\omega=(dz-y\,dx)\wedge dx\wedge dy=dz\wedge dx\wedge dy$, a nonzero coordinate volume form. [F1, step 1.1, algebra]

3.1 If a local $\mu,S$ as in the refuted claim existed on any open neighborhood, [F2] would force $\omega\wedge d\omega=0$ there, contradicting step 2.1 at every point. Therefore no such local exact multiple exists. [given, F2, step 2.1, discharge-contradiction] ∎
