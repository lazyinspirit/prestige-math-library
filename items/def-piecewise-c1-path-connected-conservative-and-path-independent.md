---
id: def-piecewise-c1-path-connected-conservative-and-path-independent
kind: definition
title: "Piecewise-C1 path-connected domains, potential functions, conservative fields, and path independence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Definition

An open set $U\subseteq\mathbb R^n$ is **piecewise-$C^1$ path-connected** when it is nonempty and every two points of $U$ are joined in $U$ by a piecewise-$C^1$ path.

For a continuous vector field $F:U\to\mathbb R^n$, a $C^1$ function $\phi:U\to\mathbb R$ is a **potential** when $F=\nabla\phi$, with the gradient of [[def-jacobian-matrix-and-gradient]]. The field is **conservative** when it has a potential. It is **path-independent** when any two piecewise-$C^1$ paths in $U$ with the same initial and terminal points have equal vector line integrals as defined in [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]].
