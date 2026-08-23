---
id: fs-minimum-modulus-principle-without-nonvanishing
kind: false-statement
title: "FALSE: every interior local modulus minimum forces constancy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimum-modulus-principle, thm-algebra-of-complex-derivatives, lem-complex-conjugation-and-modulus-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 3.3.18(b)"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.4"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Every holomorphic function on a complex domain whose modulus has an interior local minimum is constant.

## Facts & Assumptions

**Given:** The open unit disc $\mathbb D$ and the identity function $f(z)=z$, which is holomorphic and has derivative $1$ ([[thm-algebra-of-complex-derivatives]]). Complex modulus is nonnegative and vanishes only at $0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L1] A nowhere-zero holomorphic function on a complex domain cannot have an interior local modulus minimum unless it is constant ([[thm-minimum-modulus-principle]]).

## Refutation

**Proof technique:** direct.

1.1 The identity function $f(z)=z$ is holomorphic on the nonempty complex domain $\mathbb D$. [given]

2.1 Its modulus satisfies $|f(z)|=|z|\ge0=|f(0)|$, so it has a global, and hence local, minimum at the interior point $0$. [step 1.1, algebra]

3.1 The map is not constant, since $f(0)=0$ and $f(1/2)=1/2$. The valid theorem [L1] does not apply because $f$ vanishes at the minimizer, so nonvanishing is essential. [step 1.1, step 2.1, L1] ∎
