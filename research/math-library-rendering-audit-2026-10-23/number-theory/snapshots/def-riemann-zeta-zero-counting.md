---
id: def-riemann-zeta-zero-counting
kind: definition
title: "The Riemann zeta zero-counting function"
status: published
origin: pipeline
deps: [def-countable-choice, thm-riemann-zeta-meromorphic-continuation]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, §11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Assume countable choice.

For $T>0$, $N(T)$ is the number, with multiplicity, of nontrivial zeros
$\rho=\beta+i\gamma$ of the meromorphic continuation of zeta satisfying
$0<\gamma\le T$.  Thus a zero on the top boundary is included.
