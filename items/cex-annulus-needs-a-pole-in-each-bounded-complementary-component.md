---
id: cex-annulus-needs-a-pole-in-each-bounded-complementary-component
kind: counterexample
title: "The annulus shows Runge approximation needs a pole in each bounded complementary component"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-runge-approximation-with-prescribed-poles,
       thm-fundamental-theorem-for-complex-line-integrals]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

A single pole placed only in the unbounded complementary component always
suffices for Runge approximation on a compact annulus.

## Facts & Assumptions

**Given:** The compact annulus $K=\{z:1\le|z|\le2\}$ and the function $1/z$ on a
neighbourhood of $K$.

[L1] A rational function with all poles outside the unit disc is holomorphic on
$|z|<1$, so its integral around $|z|=1$ is $0$
([[thm-fundamental-theorem-for-complex-line-integrals]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $r$ be any rational function whose poles all lie in the unbounded complementary component of $K$. Then $r$ is holomorphic on the closed unit disc, so [L1] gives $\int_{|z|=1}r(z)\,dz=0$. [given, L1]

2.1 But $\int_{|z|=1}dz/z=2\pi i$. Therefore no such rational function can approximate $1/z$ uniformly on $K$, because the contour integral on the inner circle would preserve the limit. So the inner complementary component also needs a pole representative. [step 1.1, algebra] ∎