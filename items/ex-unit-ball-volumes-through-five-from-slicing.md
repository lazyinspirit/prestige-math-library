---
id: ex-unit-ball-volumes-through-five-from-slicing
kind: example
title: 'Slicing gives the unit-ball volumes through dimension five'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-volume-recursion-for-closed-euclidean-balls, cor-disc-jordan-content-is-pi-r-squared, prop-riemann-graph-area-equals-jordan-content, lem-wallis-integrals-recurrence-and-squeeze, lem-derivative-of-a-power, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.4"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Example

Writing $V_n:=V_n(1)$, slicing gives

$$V_1=2,\quad V_2=\pi,\quad V_3=\frac{4\pi}{3},\quad V_4=\frac{\pi^2}{2},\quad V_5=\frac{8\pi^2}{15}.$$

## Facts & Assumptions

**Given:** Unit closed balls in positive integer dimensions.

[F1] For $n\ge2$, $V_n=V_{n-1}\int_{-1}^{1}(1-t^2)^{(n-1)/2}\,dt$ ([[thm-volume-recursion-for-closed-euclidean-balls]]).

[F2] The Wallis integrals satisfy $I_0=\pi/2$, $I_1=1$, and $I_n=(n-1)I_{n-2}/n$ for $n\ge2$ ([[lem-wallis-integrals-recurrence-and-squeeze]]).

## Verification

**Proof technique:** direct.

1.1 Starting with $V_1=2$, [F1] and the upper-semicircle area give $V_2=\pi$, while $\int_{-1}^1(1-t^2)\,dt=4/3$ gives $V_3=4\pi/3$. [F1, algebra]

2.1 With $t=\sin\theta$, $\int_{-1}^1(1-t^2)^{3/2}\,dt=2\int_0^{\pi/2}\cos^4\theta\,d\theta=3\pi/8$ by [F2], giving $V_4=\pi^2/2$. Also $\int_{-1}^1(1-t^2)^2\,dt=16/15$, giving $V_5=8\pi^2/15$. [step 1.1, F1, F2, algebra]

3.1 Combining the preceding calculations gives the displayed table without using the Gamma closed form. [step 1.1, step 2.1] ∎
