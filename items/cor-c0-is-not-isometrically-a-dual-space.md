---
id: cor-c0-is-not-isometrically-a-dual-space
kind: corollary
title: c0 is not isometrically a dual space
status: draft
origin: pipeline
deps: ["cex-the-c0-unit-ball-has-no-extreme-points", "cor-dual-unit-ball-has-extreme-points"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.2, c0 and dual-ball extreme-point discussion, pp. 144–145"
proof_strategy: contradiction
---

## Statement

**Assume the Axiom of Choice.**  Over $\mathbb R$ or $\mathbb C$, $c_0$ is not
linearly isometric onto the dual of any normed space.

## Facts & Assumptions

**Given:** AC and the real or complex space $c_0$.

[F1] The closed unit ball of $c_0$ has no extreme points ([[cex-the-c0-unit-ball-has-no-extreme-points]]).

[F2] Under AC, the closed dual unit ball of every nonzero normed space has an extreme point ([[cor-dual-unit-ball-has-extreme-points]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume for contradiction that $T:c_0\to Y^*$ is a surjective linear isometry.  The space $Y$ cannot be zero, because then $Y^*=\{0\}$ whereas $c_0$ contains a nonzero coordinate vector. [given, assume-contra]

2.1 The isometry maps $B_{c_0}$ bijectively onto $B_{Y^*}$.  It preserves extreme points in both directions: applying $T$ or $T^{-1}$ to a strict convex representation preserves its coefficient and turns trivial endpoint equality into trivial endpoint equality. [given, step 1.1]

3.1 By [F2], $B_{Y^*}$ has an extreme point, whose inverse image under $T$ is extreme in $B_{c_0}$ by step 2.1.  This contradicts [F1], so the assumed surjective linear isometry does not exist. [F1, F2, step 1.1, step 2.1, discharge-contradiction] ∎
