---
id: fs-rices-theorem-applies-to-state-count
kind: false-statement
title: "FALSE: Rice's theorem applies to having at most a fixed number of states"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-syntactic-properties-lie-outside-rices-theorem, thm-rices-theorem]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

Rice's theorem applies to the property "the machine has at most a fixed number
of states."

## Facts & Assumptions

**Given:** A fixed state bound $k$.

[L1] State-count bounds are syntactic machine properties rather than extensional language properties, by [[prop-syntactic-properties-lie-outside-rices-theorem]].

[L2] Rice's theorem applies only to nontrivial extensional properties of recognized languages, by [[thm-rices-theorem]].

## Refutation

**Proof technique:** direct.

1.1 By [L1], the property "has at most $k$ states" can change when one rewrites the machine without changing its recognized language. So it is not an extensional language property. [L1, given]

2.1 Because the extensionality hypothesis of [L2] fails, Rice's theorem does not apply to this property. Therefore the statement is false. [L2, step 1.1] ∎

