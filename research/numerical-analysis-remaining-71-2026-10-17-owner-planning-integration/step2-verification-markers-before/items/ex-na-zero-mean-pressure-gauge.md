---
id: ex-na-zero-mean-pressure-gauge
kind: example
title: Fixing the spatially constant pressure mode
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - lem-na-zero-mean-of-zero-boundary-divergence
  - thm-holder-inequality-for-integrals
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
---

## Example

On a bounded connected domain $D$, adding any spatial constant $c(t)$ to a pressure does not change the weak momentum equation with zero-boundary velocity tests. The condition $p(t)\in L^2_0(D)$ fixes that freedom uniquely.

## Facts & Assumptions

**Given:** $D$ bounded and connected, $p(t)\in L^2(D)$, $v\in H^1_0(D)^d$, and a scalar $c(t)$.

[F1] Zero-boundary divergence has zero spatial integral, and $b(v,p)=-\int_Dp\,\operatorname{div}v$. ([[lem-na-zero-mean-of-zero-boundary-divergence]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F2] Since $D$ has finite measure, $p\in L^2(D)$ is integrable and its mean is well-defined. ([[thm-holder-inequality-for-integrals]])

## Verification

1.1 The pressure term changes by $b(v,p+c(t))-b(v,p)=-c(t)\int_D\operatorname{div}v=0$ by [F1]. Therefore the weak equation cannot distinguish pressures differing by a function constant in space. [F1, given, algebra]

2.1 Put $\bar p=|D|^{-1}\int_Dp$. Then $p-\bar p$ has zero mean. If both $p+c_1(t)$ and $p+c_2(t)$ have zero mean, integration over $D$ gives $|D|(c_1-c_2)=0$; because $|D|>0$, $c_1=c_2$. [F2, step 1.1, given, algebra] ∎
