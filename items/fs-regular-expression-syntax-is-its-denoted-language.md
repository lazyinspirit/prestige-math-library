---
id: fs-regular-expression-syntax-is-its-denoted-language
kind: false-statement
title: "FALSE: a regular expression is the same object as its denoted language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-regular-expression-syntax, def-regular-expression-denotation]
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
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

**False claim:** every regular expression is literally the same object as the
language it denotes.

## Facts & Assumptions

**Given:** The regular expression $a+b$ over the alphabet $\{a,b\}$.

[A1] The statement refuted is: every regular expression is literally the same object as the language it denotes.

[L1] By [[def-regular-expression-syntax]], $a+b$ is a formal expression built from two letter expressions by one application of the union constructor.

[L2] By [[def-regular-expression-denotation]], the language denoted by $a+b$ is $\{a,b\}$.

## Refutation

**Proof technique:** direct.

1.1 The object $a+b$ is, by [L1], a syntactic expression tree with an outer union node and two letter leaves. [L1, given]

2.1 The object $\mathcal L(a+b)$ is, by [L2], the two-element set $\{a,b\}$ of words. [L2, step 1.1]

3.1 A formal expression tree and a two-element set of words are not literally the same kind of object, so [A1] is false. [A1, step 1.1, step 2.1] ∎
