---
id: thm-artinian-ring-has-finite-length
kind: theorem
title: "A commutative ring is Artinian exactly when it has finite length as a module over itself"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-ring, def-composition-series-and-length-of-a-module, thm-composition-series-iff-noetherian-and-artinian, thm-artinian-ring-is-noetherian, def-noetherian-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Corollary (19.15)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring. Then $R$ is Artinian if and only if the regular module ${}_RR$ has finite length.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 If ${}_RR$ has finite length, then by [[def-composition-series-and-length-of-a-module]] it has a composition series. The forward implication of [[thm-composition-series-iff-noetherian-and-artinian]] therefore makes ${}_RR$ Artinian, and [[def-artinian-ring]] says exactly that $R$ is an Artinian ring. [given, algebra]

1.2 Suppose now that $R$ is Artinian. Then [[def-artinian-ring]] says that the regular module ${}_RR$ is Artinian. Under the Axiom of Choice assumed in the Statement, [[thm-artinian-ring-is-noetherian]] makes $R$ Noetherian, so [[def-noetherian-ring]] makes ${}_RR$ Noetherian. Since the same choice assumption also suffices for the dependent-choice use recorded in [[thm-composition-series-iff-noetherian-and-artinian]], that theorem gives a composition series for ${}_RR$. [given, algebra]

2.1 By [[def-composition-series-and-length-of-a-module]], a module has finite length exactly when it has a composition series. So step 1.1 proves the forward implication, and step 1.2 proves the reverse implication. [step 1.1, step 1.2, given, algebra]

3.1 Therefore a commutative ring is Artinian exactly when its regular module has finite length. [step 2.1] ∎
