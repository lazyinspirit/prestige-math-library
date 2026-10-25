---
id: rem-noncompact-flow-completeness-is-an-extra-hypothesis
kind: remark
title: "Completeness of a gradient flow is an extra hypothesis on a noncompact manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-proper-morse-slabs-give-complete-connecting-trajectories, def-complete-vector-field]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

On a noncompact manifold, a gradient or gradient-like field need not be
complete. A compact slab gives only the conditional nonescape conclusion of
[[prop-proper-morse-slabs-give-complete-connecting-trajectories]]; it does not
make all trajectories global. The explicit escape calculation is
already visible on $\mathbb R$: for $f(x)=-x^3/3$, the negative-gradient
equation is $\dot x=x^2$, and the solution from $x_0>0$ is
$x(t)=x_0/(1-x_0t)$, which escapes to $+\infty$ as $t\uparrow1/x_0$.
