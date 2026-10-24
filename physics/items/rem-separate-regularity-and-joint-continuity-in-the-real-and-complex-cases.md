---
id: rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases
kind: remark
title: "Why local boundedness gives joint continuity here and nothing like it holds in the real case"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-locally-bounded-separate-holomorphy, lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz, def-separately-holomorphic-function, cor-cauchy-inequalities, thm-osgood-lemma-in-several-complex-variables, fs-separately-real-analytic-functions-are-jointly-continuous, def-real-analytic-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, Ex. 1.1.5"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Remark

The locally bounded theorem on this page is not a disguised continuity theorem
for arbitrary separate regularity. The false statement
[[fs-separately-real-analytic-functions-are-jointly-continuous]] gives the
concrete contrast: the real-valued function
$f(x,y)=xy/(x^2+y^2)$ off the origin, with $f(0,0)=0$, is bounded and every
coordinate slice is real analytic, yet the function is not jointly continuous.
The published B-page item named `cex-partial-derivatives-without-continuity`
uses the same witness for a different purpose; it is named here only in prose,
without a wikilink, because examples pages are leaves.

What changes in the holomorphic setting is not the bare word "separate" but the
one-variable Cauchy theory. A bound on a holomorphic slice controls its
derivative by [[cor-cauchy-inequalities]], and the control is uniform in the
remaining coordinates when the bound is uniform there. That is exactly the input
used in
[[lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz]]:
the bounded separately holomorphic function becomes locally Lipschitz, hence
continuous, and then [[thm-osgood-lemma-in-several-complex-variables]] upgrades
that continuity plus separate holomorphy to full holomorphy.

So the hypothesis "locally bounded" is not decoration. It is the condition that
turns one-variable holomorphic control into a joint estimate. The real-analytic
counterexample shows that without the Cauchy inequality there is no reason for
separate regularity and boundedness to force any joint continuity at all.
