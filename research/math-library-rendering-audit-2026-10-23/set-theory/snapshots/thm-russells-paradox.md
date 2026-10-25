---
id: thm-russells-paradox
kind: theorem
title: "There is no $R$ with $x \\in R \\leftrightarrow x \\notin x$ for every $x$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-language-of-set-theory]
justified_by: []
aliases: [thm-russell-paradox]
landmark: true
short: "Russell's paradox"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Theorem 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

There is no set $R$ such that, for every set $x$,

$$x \in R \leftrightarrow x \notin x .$$

## Facts & Assumptions

**Given:** the language of set theory, in which $x \in R$ and $x \notin x$ are formulas ([[def-language-of-set-theory]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose there is a set $R$ such that $x \in R$ holds if and only if $x \notin x$, for every set $x$. [assume-contra]

2.1 The hypothesis holds for every set $x$, and $R$ is a set, so it holds for $x := R$: $R \in R$ if and only if $R \notin R$. [step 1.1]

3.1 A statement equivalent to its own negation is contradictory: if $R \in R$ then $R \notin R$, and if $R \notin R$ then $R \in R$, so each alternative refutes itself. There is therefore no such $R$. [step 2.1, discharge-contradiction] ∎

## Remarks

- **What fails is unrestricted comprehension, not a particular formula.** The argument uses only that $x \notin x$ is a formula of the language and that the supposed $R$ is itself a set, so it refutes any principle asserting that every formula has a set of all its instances. [[rem-why-separation-replaces-unrestricted-comprehension]] records how [[def-axiom-schema-of-separation]] avoids it.
