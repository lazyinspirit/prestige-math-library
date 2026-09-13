---
id: thm-rasiowa-sikorski-and-ch-implies-ma
kind: theorem
title: MA(aleph_0) and the implication from CH to MA
status: draft
origin: pipeline
deps: [def-martins-axiom, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Exercise 7.2 and Theorem 1.14 (Rasiowa–Sikorski)", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, $\mathrm{MA}(\aleph_0)$ holds for every nonempty preorder, without ccc. Consequently CH implies MA, because under CH every infinite cardinal below the continuum is $\aleph_0$.

## Facts & Assumptions

**Given:** AC, a nonempty preorder, and a countable family of dense sets.

[F1] [[def-martins-axiom]] fixes the desired filter and the strict continuum range.

[F2] [[thm-transfinite-recursion]] constructs the descending sequence.

## Proof

1.1 Enumerate the dense family as $D_0,D_1,\ldots$ (repetitions allowed, and for an empty family choose any $p_0$). Choose recursively $p_{n+1}\le p_n$ in $D_n$. The upward closure $G=\{q:\exists n p_n\le q\}$ is directed and upward closed, and it meets each $D_n$. No chain condition was used. AC provides the enumeration and choices. [F1, F2]

2.1 Under CH, $2^{\aleph_0}=\aleph_1$. The only infinite cardinal strictly below the continuum is $\aleph_0$, so the MA scheme of F1 is exactly the instance proved in step 1.1. [F1, step 1.1] ∎
