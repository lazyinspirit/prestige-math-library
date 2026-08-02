---
id: thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
kind: theorem
title: "A nonzero real polynomial of degree $n$ has no more than $n$ distinct real roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-polynomial-degree-leading-coefficient-and-monic, lem-real-polynomial-factor-at-a-root, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

A nonzero real polynomial of degree $n$ has at most $n$ distinct real roots. The conventions and prerequisite facts used below are recorded in [[def-real-polynomial-degree-leading-coefficient-and-monic]], [[lem-real-polynomial-factor-at-a-root]], [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A nonzero real polynomial of degree $n$.

## Proof

**Proof technique:** induction.

1.1 At degree $0$ the polynomial is a nonzero constant and has no root. [base]

1.2 Assume the claim at degree $n$. [ih]

2.1 If a degree-$n+1$ polynomial has a root $a$, the factor lemma writes it as $(x-a)q(x)$ with $q$ of degree $n$; every other root is a root of $q$. [step 1.2, given]

3.1 The induction hypothesis gives at most $n$ other roots, hence at most $n+1$ roots in all. [discharge-induction] ∎
