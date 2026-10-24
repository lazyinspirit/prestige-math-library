---
id: def-number-sat
kind: definition
title: "NumberSAT"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local definition and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
  precheck: n/a
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Definition

A Boolean formula is a finite expression built from variables, the constants
$\top,\bot$, and the connectives $\neg,\land,\lor$. Under an assignment of
zeros and ones to its variables, evaluate constants as one and zero, negation
as complementation, conjunction as minimum, and disjunction as maximum.
An assignment satisfies the formula when its value is one. Fix an effective
binary encoding of these expression trees and finite lists of variable names.

An input to $\mathrm{NumberSAT}$ is well formed when it encodes a Boolean
formula $\varphi$ together with an ordered list
$(x_1,\ldots,x_n)$ of distinct variables and every variable occurring in
$\varphi$ appears in that list. Its value is the exact number of assignments
$a:\{x_1,\ldots,x_n\}\to\{0,1\}$ that satisfy $\varphi$. Declared variables
count even when unused, so the count ranges over all $2^n$ assignments to the
list. Every input not having this form is malformed and has value zero.
