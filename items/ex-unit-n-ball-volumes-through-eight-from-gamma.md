---
id: ex-unit-n-ball-volumes-through-eight-from-gamma
kind: example
title: 'The unit-ball volumes through dimension eight from the Gamma formula'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.4"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Example

For dimensions $1$ through $8$, the unit-ball volumes are

$$2,\quad\pi,\quad\frac{4\pi}{3},\quad\frac{\pi^2}{2},\quad\frac{8\pi^2}{15},\quad\frac{\pi^3}{6},\quad\frac{16\pi^3}{105},\quad\frac{\pi^4}{24}.$$

## Facts & Assumptions

**Given:** Positive integer dimensions $1\le n\le8$.

[F1] For every $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]).

[F2] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]).

[F3] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $n=1,2,3,4$ into [F1] and use [F2] and [F3]. This gives $2,\pi,4\pi/3,\pi^2/2$. [F1, F2, F3, algebra]

1.2 The same substitution with [F2] and [F3] for $n=5,6,7,8$ gives $8\pi^2/15,\pi^3/6,16\pi^3/105,\pi^4/24$. [F1, F2, F3, algebra]

2.1 Steps 1.1 and 1.2 establish every value in the displayed list. [step 1.1, step 1.2] ∎
