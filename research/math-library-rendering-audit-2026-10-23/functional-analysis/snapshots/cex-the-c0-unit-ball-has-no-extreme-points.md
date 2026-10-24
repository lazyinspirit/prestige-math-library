---
id: cex-the-c0-unit-ball-has-no-extreme-points
kind: counterexample
title: The c0 unit ball has no extreme points
status: published
origin: pipeline
deps: ["def-extreme-point-and-face", "def-c-zero-and-ell-infinity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.2, sequence-space extreme-point examples, pp. 144–145"
proof_strategy: direct
---

## Statement

Over either $\mathbb R$ or $\mathbb C$, the closed unit ball of $c_0$ has no
extreme points.

## Facts & Assumptions

**Given:** The real or complex space $c_0$ and an arbitrary $x$ in its closed unit ball.

[F1] A point is extreme only if every strict two-term convex representation is trivial ([[def-extreme-point-and-face]]).

[F2] The elements of $c_0$ are bounded scalar sequences tending to zero, with the supremum norm ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct finite-coordinate perturbation.

1.1 Since $x_n\to0$, there is an index $N$ with $|x_N|<1$; take the least such index if a canonical witness is desired.  Put $\varepsilon=(1-|x_N|)/2>0$ and let $e_N$ be the sequence equal to one at $N$ and zero elsewhere. [F2, given]

2.1 The sequences $y=x+\varepsilon e_N$ and $z=x-\varepsilon e_N$ still tend to zero and satisfy $|y_N|,|z_N|\leq|x_N|+\varepsilon<1$, while every other coordinate is unchanged.  Hence $y,z\in B_{c_0}$ by [F2]; they are distinct and $x=(y+z)/2$. [F2, step 1.1]

3.1 By [F1], the nontrivial midpoint representation in step 2.1 shows that the arbitrary $x\in B_{c_0}$ is not extreme.  Therefore the ball has no extreme points over either scalar field. [F1, step 2.1] ∎
