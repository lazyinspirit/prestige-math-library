---
id: def-integrable-distribution
kind: definition
title: "Integrable distributions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integral-manifold-of-a-distribution]
justified_by: []
aliases: []
landmark: false
verification:
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

A rank-$k$ smooth distribution $\mathcal D$ on $M$ is **integrable** when every
point $p \in M$ lies on an integral manifold $i:N \to M$ of $\mathcal D$ with
$\dim N = k$.
