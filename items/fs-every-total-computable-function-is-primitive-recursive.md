---
id: fs-every-total-computable-function-is-primitive-recursive
kind: false-statement
title: "FALSE: every total computable function is primitive recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-ackermann-is-total-computable-but-not-primitive-recursive]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
---

## Statement

**False claim:** every total computable function on a finite power of
$\mathbb N$ is primitive recursive.

## Facts & Assumptions

**Given:** The false claim above.

[A1] Every total computable function on a finite power of $\mathbb N$ is
primitive recursive.

[L1] The Ackermann function is total computable but not primitive recursive, by [[prop-ackermann-is-total-computable-but-not-primitive-recursive]].

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Ackermann function $A$ is a total computable function on $\mathbb N^2$, so it is directly an instance of the universal claim [A1]. [L1, given]

2.1 The same fact [L1] states that $A$ is not primitive recursive. This contradicts [A1]. [A1, L1, step 1.1] ∎
