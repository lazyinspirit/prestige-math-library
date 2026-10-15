---
id: post-rpm-h-massless-shell-action
kind: postulate
title: "Separate massless shell action"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-cotangent-phase-space, def-rpm-h-regular-constraint-system]
dependency_roles:
  def-rpm-h-regular-constraint-system: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  def-rpm-h-cotangent-phase-space: dimensional-prerequisite
physical_scope: "Separate classical massless test-particle formulation with nonzero future-null momentum; no proper-time parameter, no mU identification and no empirical realization claim."
sources:
  references:
    - title: "W. F. Chagas-Filho, Free massless particles and extended space-time algebra, complete paper"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§§1–2, pp. 1–3, einbein action and massless constraint."
    - title: "David Tong, General Relativity, complete notes, §1.2.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 11–13, massive square-root formulation contrasted with the null model."
---

## Postulate

On a prescribed background $(M,g,T)$, adopt a distinct massless classical particle model with fields $x:I\to M$, $p(\lambda)\in T^*_{x(\lambda)}M$, and a positive smooth multiplier $e(\lambda)>0$:

$$S_0[x,p,e]=\int_I\left[p_a x'^a-eC_0(x,p)\right]d\lambda,\qquad C_0=\tfrac12g^{ab}p_ap_b.$$

Variations of $p,e$ are independent; the physical branch is $p\ne0$, $p^\sharp$ future null. With all spacetime coordinates measured in metres and dimensionless λ, $p_a$ has units kg m/s, $C_0$ has units kg²m²/s² and $e$ has units s/kg, making the action J s. Other parameter units scale $e$ accordingly. This is a separate adopted model: null curves have no proper-time parameter, the model does not arise by setting $m=0$ in $P=mU$, and its positive momentum scale is additional initial data. On the nonzero branch, $C_0$ is a regular primary constraint in the sense of [[def-rpm-h-regular-constraint-system]]; regularity is checked by the shell theorem. This postulate is not an empirical observation or a deduction from the massive model.

The cotangent phase-space carrier convention assumes countable choice ACω only; full choice is not assumed.
