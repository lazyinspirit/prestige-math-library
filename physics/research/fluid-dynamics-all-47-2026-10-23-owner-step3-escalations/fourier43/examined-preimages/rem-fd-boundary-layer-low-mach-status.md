---
id: rem-fd-boundary-layer-low-mach-status
kind: remark
title: "Boundary inviscid and nonlinear low-Mach limits require separate estimates"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - thm-fd-periodic-inviscid-limit
  - thm-fd-global-linear-acoustics
  - prop-fd-fluid-equation-scaling
  - def-countable-choice
dependency_roles:
  thm-fd-periodic-inviscid-limit: mathematical-premise
  thm-fd-global-linear-acoustics: mathematical-premise
  prop-fd-fluid-equation-scaling: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §3.5"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "Boundary-layer discussion; the present remark records only the scope of this batch's theorems."
    - title: "David Tong, Fluid Mechanics, Chapter 3, §4.4.4"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "Linear sound-wave tangent system and longitudinal mode; no finite-amplitude convergence estimate is asserted here."
verification:
  precheck: pass
---

## Remark

Assume Countable Choice. The inviscid-limit result in this batch assumes a fixed periodic domain and smooth solutions on a common local time interval; it gives no wall inviscid-limit or boundary-layer estimate. The acoustic result is an exact linear tangent-system theorem, and the scaling proposition is a chain-rule calculation. Neither result supplies a nonlinear low-Mach convergence theorem or a finite-amplitude error estimate. Those claims require separate hypotheses and estimates that are not established by these items.

## Remark references

[[thm-fd-periodic-inviscid-limit]]

[[thm-fd-global-linear-acoustics]]

[[prop-fd-fluid-equation-scaling]]

[Tong, *Fluid Mechanics*, Chapter 2, §3.5](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Tong, *Fluid Mechanics*, Chapter 3, §4.4.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

## Facts & Assumptions

**Given:** The exact theorem scopes and conclusions of the three named batch items.

[F1] [[thm-fd-periodic-inviscid-limit]]: the proved $O(\nu)$ and $O(\nu^{1/s})$ estimates concern only smooth solutions on a fixed periodic domain and a common local interval; the statement explicitly excludes a wall inviscid limit and boundary-layer estimate.

[F2] [[thm-fd-global-linear-acoustics]]: the result concerns an exact linear tangent system on the normalized periodic torus and does not assert equality with finite-amplitude nonlinear fluid evolution.

[F3] [[prop-fd-fluid-equation-scaling]]: the dimensionless coefficients and equation symmetries follow by chain rule; the proposition asserts no continuum or empirical similarity limit.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

1.1 By [F1], the inviscid estimate is established on a fixed periodic domain and common local smooth interval, and the boundary case is outside its stated conclusion. Therefore it does not imply a wall inviscid-limit theorem or a boundary-layer estimate. [given, A1, F1, algebra]

2.1 By [F2] and [F3], the acoustic result solves only the displayed linear tangent equations and the scaling result is an exact change of variables. Neither statement contains a nonlinear convergence conclusion or controls a finite-amplitude remainder. The remark consequently records these limits of coverage and requires separate hypotheses and estimates for such stronger claims. [given, A1, F2, F3, algebra] ∎