---
id: thm-determinantal-grade-criterion-free-complex-exactness
kind: theorem
title: Buchsbaum-Eisenbud rank and grade criterion for exact free complexes
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-determinantal-grade-necessary-exact-free-complex
  - lem-determinantal-grade-sufficient-exact-free-complex
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Proposition 10.102.9 (tag 00N1), exactness criterion"
      url: https://stacks.math.columbia.edu/tag/00N1
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a
Noetherian local ring and
$F_\bullet:0\to R^{n_e}\xrightarrow{d_e}\cdots
\xrightarrow{d_1}R^{n_0}$ a finite free complex. Define
$r_i=n_i-n_{i+1}+\cdots+(-1)^{e-i}n_e$. When $r_i\ge0$,
let $I_i$ be the ideal of $r_i$-minors of $d_i$, with the
$0$-minor ideal equal to $R$. Then the complex is exact
at every positive-degree term if and only if, for all
$1\le i\le e$, the integers $r_i$ are nonnegative,
all $(r_i+1)$-minors vanish, and either $I_i=R$ or
$I_i$ contains an $R$-regular sequence of length $i$.
Under these equivalent conditions, $d_i$ has rank
exactly $r_i$.

## Facts & Assumptions

**Given:** The local Noetherian ring, finite free complex, expected ranks, and determinantal ideals.

[F1] Positive-degree exactness forces expected rank, vanishing larger minors, and the regular-sequence alternative, including over nonreduced rings ([[lem-determinantal-grade-necessary-exact-free-complex]]).

[F2] Those rank and regular-sequence conditions force positive-degree exactness ([[lem-determinantal-grade-sufficient-exact-free-complex]]).

## Proof

**Proof technique:** apply the separately proved necessity and sufficiency directions.

1.1 If the complex is positively exact, [F1] gives nonnegative $r_i$, vanishing $(r_i+1)$-minors, the determinantal regular-sequence alternative, and exact rank $r_i$ for every $i$. [F1]

2.1 Conversely, assume the conditions in the Statement. By [F2] the complex is exact in every positive degree, and [F2] also gives exact rank $r_i$. AC is inherited by the two proved directions. [F1, F2, step 1.1] ∎
