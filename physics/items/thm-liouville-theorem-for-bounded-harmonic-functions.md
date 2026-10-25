---
id: thm-liouville-theorem-for-bounded-harmonic-functions
kind: theorem
title: "Liouville theorem for bounded harmonic functions"
status: published
origin: pipeline
deps: [thm-harnack-inequality-on-a-ball, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (thm-liouville-theorem-for-bounded-harmonic-functions). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6 and Exercise 10, p.8"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $n\ge2$ and $u:\mathbb R^n\to\mathbb R$ be harmonic. If $u$ is bounded above or bounded below on all of $\mathbb R^n$, then $u$ is constant.

## Facts & Assumptions

**Given:** Countable Choice and the objects and hypotheses in the statement ([[def-countable-choice]]).

[F1] Under Countable Choice, nonnegative harmonic functions on $B_R(y)$ satisfy $v(x)\le(R/(R-|x-y|))^n v(y)$ ([[thm-harnack-inequality-on-a-ball]]).

## Proof

**Proof technique:** direct.

1.1 If $u\ge b$, set $v=u-b$; if $u\le b$, set $v=b-u$. In either situation $v$ is nonnegative and entire harmonic. [given, algebra]

2.1 Fix $x,y\in\mathbb R^n$. For every $R>|x-y|$, ball Harnack at center $y$ gives $v(x)\le(R/(R-|x-y|))^n v(y)$. Let $R\to\infty$ to obtain $v(x)\le v(y)$. Interchanging $x,y$ gives equality. Therefore $v$, and hence $u$, is constant. [F1, step 1.1, algebra] ∎
