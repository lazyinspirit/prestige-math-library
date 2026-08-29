---
id: def-distribution-function-of-absolute-value
kind: definition
title: "The distribution function of absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-measure]
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f : X \to \mathbb C$ be measurable. The **distribution function of**
$|f|$ is the map $A_f : [0,\infty) \to [0,\infty]$ defined by

$$A_f(t):=\mu(\{x \in X : |f(x)|>t\}).$$

This is the tail function that appears in the layer-cake formula.
