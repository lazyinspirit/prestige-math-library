---
id: ex-na-zero-mean-pressure-gauge
kind: example
title: Fixing the spatially constant pressure mode
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - lem-na-zero-mean-of-zero-boundary-divergence
  - thm-holder-inequality-for-integrals
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53: Stokes equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: Mean-zero pressure gauge and mixed formulation; the spatial-constant
        cancellation is verified locally.
verification:
  precheck: pass
---

## Example

Assume Countable Choice. On a nonempty bounded connected open set $D\subset\mathbb R^d$, adding any spatial constant $c(t)$ to a pressure does not change the weak momentum equation with zero-boundary velocity tests. The condition $p(t)\in L^2_0(D)$ fixes that freedom uniquely.

## Facts & Assumptions

**Given:** Countable Choice, a nonempty bounded connected open $D\subset\mathbb R^d$, $p(t)\in L^2(D)$, $v\in H^1_0(D)^d$, and a scalar $c(t)$.

[F1] Under Countable Choice, zero-boundary divergence belongs to $L^2(D)$ and has zero spatial integral on every bounded open $D$. ([[def-countable-choice]], [[lem-na-zero-mean-of-zero-boundary-divergence]])

[F2] Holder makes $p\in L^2(D)$ integrable and the pairing $\widetilde b(v,p):=-\int_Dp\,\operatorname{div}v$ finite for every $p\in L^2(D)$. This explicitly extends the mean-zero pressure pairing; on the Lipschitz domains in dimensions two and three of [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], it agrees with $b$ when $p\in L^2_0(D)$. ([[thm-holder-inequality-for-integrals]])

## Verification

1.1 The pressure term changes by $\widetilde b(v,p+c(t))-\widetilde b(v,p)=-c(t)\int_D\operatorname{div}v=0$ by [F1]. Therefore the weak equation cannot distinguish pressures differing by a function constant in space. [F1, F2, given, algebra]

2.1 Put $\bar p=|D|^{-1}\int_Dp$. Then $p-\bar p$ has zero mean. If both $p+c_1(t)$ and $p+c_2(t)$ have zero mean, integration over $D$ gives $|D|(c_1-c_2)=0$; because $|D|>0$, $c_1=c_2$. [F2, step 1.1, given, algebra] ∎
