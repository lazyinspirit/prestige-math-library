---
id: def-globally-lipschitz-mean-field-kernel
kind: definition
title: Globally Lipschitz mean-field interaction kernel
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-euclidean-inner-product]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used in the definition.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
---

## Definition

Let $d\ge1$, with the Euclidean norm from [[def-euclidean-inner-product]]. An interaction kernel is a continuous map $K:\mathbb R^d\times\mathbb R^d\to\mathbb R^d$. It is globally Lipschitz with constant $L\ge0$ in the convention used on this page if
$$|K(x,y)-K(x',y')|\le L(|x-x'|+|y-y'|)$$
for all $x,y,x',y'\in\mathbb R^d$. This implies the linear-growth estimate
$$|K(x,y)|\le |K(0,0)|+L(|x|+|y|).$$
The notation $L$ always refers to this two-variable convention; the stability factor below is therefore $2L$.
