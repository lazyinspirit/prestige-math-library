---
id: rem-schwarz-reflection-as-analytic-continuation
kind: remark
title: "Schwarz reflection is an analytic continuation construction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-harmonic-and-holomorphic-schwarz-reflection-principles, def-function-element-and-direct-analytic-continuation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 6 §6.5"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

The reflection theorem of
[[thm-harmonic-and-holomorphic-schwarz-reflection-principles]] is a direct
analytic continuation statement in the present language. If a function is
holomorphic on the upper half-disc, continuous on its closure, and real-valued
on the diameter, the theorem constructs a holomorphic reflected function on
the full disc. The original and reflected elements agree on the upper
half-disc. That agreement is exactly the overlap relation of
[[def-function-element-and-direct-analytic-continuation]].

So Schwarz reflection is not a competing construction beside analytic
continuation. It is one of its cleanest geometric instances.
