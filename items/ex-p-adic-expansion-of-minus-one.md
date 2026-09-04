---
id: ex-p-adic-expansion-of-minus-one
kind: example
title: "The p-adic expansion of minus one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-p-adic-digit-expansion]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Chapter 7"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
pipeline_run: null
---

## Example

In $\mathbb Q_p$ one has

$$-1 = (p-1) + (p-1)p + (p-1)p^2 + \cdots.$$

## Facts & Assumptions

**Given:** A prime $p$.

[L1] Every $p$-adic number has a unique digit expansion
([[thm-p-adic-digit-expansion]]).

## Verification

**Proof technique:** direct.

1.1 The $N$th partial sum is $$(p-1)(1+p+\cdots+p^N) = p^{N+1}-1.$$ Its difference from $-1$ is $p^{N+1}$, whose $p$-adic absolute value tends to $0$. Hence the series converges to $-1$. [L1, given, algebra]

2.1 Every digit is $p-1$, so by the uniqueness part of [L1] this is the digit expansion of $-1$. [step 1.1] ∎
