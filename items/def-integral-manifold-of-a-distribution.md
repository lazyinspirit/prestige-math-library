---
id: def-integral-manifold-of-a-distribution
kind: definition
title: "Integral manifolds of a distribution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-distribution-on-a-manifold,
       def-immersed-submanifold,
       def-global-differential-or-tangent-map]
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

Let $\mathcal D$ be a smooth distribution on $M$. A connected injectively
immersed submanifold $i:N \to M$ is an **integral manifold of $\mathcal D$**
when

$$ di_q(T_qN) = \mathcal D_{i(q)} $$

for every $q \in N$.

This definition uses the intrinsic manifold structure on $N$; the image
$i(N) \subseteq M$ need not carry the subspace topology.
