---
id: thm-liouville-theorem-for-bounded-harmonic-functions
kind: theorem
title: "Liouville theorem for bounded harmonic functions"
status: draft
origin: pipeline
deps: [thm-harnack-inequality-on-a-ball]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6 and Exercise 10, p.8"
---

## Statement

Let $n\ge2$ and $u:\mathbb R^n\to\mathbb R$ be harmonic. If $u$ is bounded above or bounded below on all of $\mathbb R^n$, then $u$ is constant.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Nonnegative harmonic functions on $B_R(y)$ satisfy $v(x)\le(R/(R-|x-y|))^n v(y)$. ([[thm-harnack-inequality-on-a-ball]]).

## Proof

**Proof technique:** direct.

1.1 If $u\ge b$, set $v=u-b$; if $u\le b$, set $v=b-u$. In either situation $v$ is nonnegative and entire harmonic. [given, algebra]

2.1 Fix $x,y\in\mathbb R^n$. For every $R>|x-y|$, ball Harnack at center $y$ gives $v(x)\le(R/(R-|x-y|))^n v(y)$. Let $R\to\infty$ to obtain $v(x)\le v(y)$. Interchanging $x,y$ gives equality. Therefore $v$, and hence $u$, is constant. [F1, step 1.1, algebra] ∎
