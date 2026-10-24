---
id: thm-submodules-and-quotients-of-semisimple-modules
kind: theorem
title: "Under Choice, submodules and quotients of semisimple modules are semisimple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-equivalent-characterizations-of-semisimple-modules, thm-second-isomorphism-theorem-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. See [[thm-equivalent-characterizations-of-semisimple-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. ([[thm-equivalent-characterizations-of-semisimple-modules]]).

[L2] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 A submodule inherits the complement property by intersecting a complement in the ambient module. [L1, L2, given, algebra]

2.1 For a quotient, complement the kernel and identify the quotient with that semisimple complement. [step 1.1, given, algebra]

3.1 The extreme submodules are admitted and give nothing new: the zero submodule is the empty direct sum, hence semisimple, and its quotient $M/0\cong M$ is semisimple by hypothesis; the whole submodule $M$ is semisimple by hypothesis and its quotient $M/M=0$ is again the empty direct sum. This proves the stated claim. [step 1.1, step 2.1, given, algebra] ∎
