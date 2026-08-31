---
id: cex-regular-expression-syntax-is-its-denoted-language
kind: counterexample
title: "The expression $a+b$ is not literally the set $\\{a,b\\}$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-regular-expression-syntax-is-its-denoted-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement refuted

The false statement claims that a regular expression is literally the same
object as the language it denotes.

## Facts & Assumptions

**Given:** The regular expression $a+b$.

[L1] By [[fs-regular-expression-syntax-is-its-denoted-language]], the refuted claim is that a regular expression is literally the same object as its denoted language.

## Counterexample

**Proof technique:** direct.

1.1 The object $a+b$ is a formal expression, while its denotation is the language $\{a,b\}$. [given]

2.1 A formal expression and a two-element set of words are not literally the same object, so the example contradicts the claim in [L1]. [L1, step 1.1] ∎
