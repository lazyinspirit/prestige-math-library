---
id: def-vector-field-tangent-to-a-distribution
kind: definition
title: "Vector fields tangent to a distribution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-distribution-on-a-manifold,
       def-smooth-vector-field-as-a-tangent-bundle-section]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Definition

Let $\mathcal D$ be a smooth distribution on $M$. A smooth vector field $X$ on
$M$ is **tangent to $\mathcal D$** when $X_p \in \mathcal D_p$ for every
$p \in M$.

The set of all smooth vector fields tangent to $\mathcal D$ is denoted
$\Gamma(\mathcal D)$.
