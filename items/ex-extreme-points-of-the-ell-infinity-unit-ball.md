---
id: ex-extreme-points-of-the-ell-infinity-unit-ball
kind: example
title: Extreme points of the ell-infinity unit ball
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

Over $\mathbb R$ or $\mathbb C$, the extreme points of the closed unit ball of
$\ell^\infty$ are exactly the sequences $x=(x_n)$ satisfying $|x_n|=1$ for
every $n$.

## Facts & Assumptions

**Given:** The real or complex Banach space $\ell^\infty$ and its closed unit ball.

[F1] Extreme points are characterized by strict convex representations ([[def-extreme-point-and-face]]).

[F2] The norm on $\ell^\infty$ is $\lVert x\rVert_\infty=\sup_n|x_n|$ ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct coordinate calculation.

1.1 Suppose $x$ lies in the closed unit ball and $|x_N|<1$ for some $N$.  Over $\mathbb R$, choose $0<\varepsilon\leq1-|x_N|$ and put $u_N=1$; over $\mathbb C$, put $u_N=1$ if $x_N=0$ and $u_N=ix_N/|x_N|$ otherwise, and choose $0<\varepsilon\leq\sqrt{1-|x_N|^2}$.  With $e$ supported at $N$ and equal there to $u_N$, both $x+\varepsilon e$ and $x-\varepsilon e$ have sup norm at most one, are distinct, and have midpoint $x$.  Thus $x$ is not extreme by [F1]. [F1, F2, given]

1.2 Conversely suppose $|x_n|=1$ for all $n$ and $x=(1-t)y+tz$ with $y,z$ in the unit ball and $0<t<1$.  For each $n$, the scalar identity $|(1-t)y_n+tz_n|^2=(1-t)|y_n|^2+t|z_n|^2-t(1-t)|y_n-z_n|^2$ gives $1\leq1-t(1-t)|y_n-z_n|^2$ by [F2].  Hence $y_n=z_n$, and their convex combination equals $x_n$, so $y_n=z_n=x_n$ for every $n$. [F2, given]

2.1 Step 1.1 excludes exactly the sequences with an interior coordinate, while step 1.2 and [F1] prove every sequence with all coordinates on the scalar unit circle is extreme. [F1, step 1.1, step 1.2] ∎
