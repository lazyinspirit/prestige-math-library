---
id: fs-a-bounded-plane-set-has-an-area
kind: false-statement
title: "FALSE: every bounded plane set has Jordan area"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-bounded-diameter, lem-q-and-irrationals-dense-r, def-metric-interior-closure-boundary, def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "A. Treibergs, MATH 3225 final solutions"
      url: "https://www.math.utah.edu/~treiberg/M3225_Final_Solutions.pdf"
pipeline_run: null
---

## Statement

Every bounded subset of $\mathbb R^2$ is Jordan measurable and therefore has a Jordan area.

## Facts & Assumptions

**Given:** The set $E:=(\mathbb Q\cap[0,1])^2\subseteq\mathbb R^2$.

[L1] A set is bounded if it is empty or is contained in some metric ball ([[def-metric-bounded-diameter]]).

[L2] The rationals and the irrationals are both dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L3] A boundary consists exactly of the points every ball about which meets both the set and its complement ([[def-metric-interior-closure-boundary]]).

[L4] Every finite inner-packing sum is at most every finite outer-cover sum, and the Jordan contents are their supremum and infimum ([[def-jordan-inner-and-outer-content]]).

[L5] The unit square $[(0,0),(1,1)]$ has rectangle volume $(1-0)(1-0)=1$ ([[def-multidimensional-rectangle-and-volume]]).

[L6] A metric-bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

## Refutation

**Proof technique:** direct.

1.1 The set $E$ lies in the unit square, hence in a sufficiently large ball about the origin, so it is bounded by [L1]. [given, L1]

1.2 The unit square is both a one-rectangle inner family and a one-rectangle outer cover of itself, each of total volume $1$ by [L5]; the inner-versus-outer inequality in [L4] therefore forces both contents to equal $1$, so the square does not have content zero. [L4, L5, algebra]

2.1 By coordinatewise use of [L2], every ball centred at a point of $[0,1]^2$ meets $E$ and also meets its complement, including at the four sides; no point outside the closed square is adherent to $E$. Thus [L3] gives $\partial E=[0,1]^2$. [step 1.1, L2, L3]

3.1 By steps 2.1 and 1.2, the boundary of $E$ does not have content zero, so [L6] shows that $E$ is not Jordan measurable. [step 2.1, step 1.2, L6]

4.1 The bounded set $E$ has no Jordan area, contradicting the universal Statement. [step 1.1, step 3.1] ∎

## Remarks

The same witness is developed further in [[cex-rational-points-in-unit-square-have-no-jordan-content]], where its nullity is also proved. That item is not used in this refutation.
