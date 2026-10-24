---
id: ex-promise-oracle-off-promise-answers
kind: example
title: "Promise oracle off promise answers"
status: published
origin: pipeline
deps: [def-promise-preserving-reduction, rem-oracle-and-promise-conventions-are-distinct]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Goldreich, On Promise Problems; §1.2 oracle-reduction convention, p5; finite illustration."
      url: "https://www.wisdom.weizmann.ac.il/~oded/PSX/prpr-r.pdf"
---

## Example

For the target promise $Y'=\{0\}$, $N'=\{1\}$, a caller which accepts its sole promised YES input exactly when the target answers YES to query $00$ is not a valid oracle promise reduction.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For promise problems $(Y,N)$ and $(Y',N')$ in the stated convention, a polynomial-time many-one promise reduction is a total polynomial-time function $f$ satisfying $f(Y)\subseteq Y'$ and $f(N)\subseteq N'$. There is no condition on $f$ outside $Y\cup N$. A polynomial-time oracle promise reduction is a polynomially clocked deterministic oracle machine $M$ which solves $(Y,N)$ for **every** total language $B$ satisfying $Y'\subseteq B$ and $B\cap N'=\varnothing$. This uses binary, consistent membership completions: an off-promise word may have either bit, but repeated queries to that word receive the same bit. The clock is uniform over all completions. ([[def-promise-preserving-reduction]]).

[F2] A total membership oracle in the stated convention fixes the answer on every query word. A promise target in the stated convention describes a collection of total completions. Correctness of a promise reduction must hold for each completion, including its arbitrary answers outside the target promise. A promised input to the caller does not by itself guarantee that the caller's queries satisfy the target promise. ([[rem-oracle-and-promise-conventions-are-distinct]]).


## Verification

1.1 Both $B_0=\{0\}$ and $B_1=\{0,00\}$ are total membership completions respecting $Y'$ and $N'$. They disagree on the off-promise word $00$. Their unspecified words are simply NO membership answers. [F2]

2.1 Take the source pair $(\{0\},\varnothing)$. On input $0$ the caller rejects with $B_0$ and accepts with $B_1$. Universal correctness over completions therefore fails at a promised YES input, despite the caller's constant running time. No source-NO obligation is needed for this failure. [F1, step 1.1] ∎
