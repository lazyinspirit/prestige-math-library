---
id: cex-every-total-computable-function-is-primitive-recursive
kind: counterexample
title: "The Ackermann function refutes the claim that all total computable functions are primitive recursive"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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

## Statement refuted

The false statement claims that every total computable function is primitive
recursive. The Ackermann function
$$ A(0,n)=n+1,\qquad A(m+1,0)=A(m,1),\qquad A(m+1,n+1)=A(m,A(m+1,n)) $$
is a counterexample.

## Facts & Assumptions

**Given:** The Ackermann function $A$.

[L1] The Ackermann function is total computable but not primitive recursive, by [[prop-ackermann-is-total-computable-but-not-primitive-recursive]].

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the function $A$ is total computable. [L1, given]

1.2 The same proposition [L1] states that $A$ is not primitive recursive. [L1, given]

2.1 Steps 1.1 and 1.2 exhibit one total computable function that fails to be primitive recursive, so $A$ refutes the universal claim stated above. [step 1.1, step 1.2] ∎
