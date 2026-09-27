---
id: "lem-regular-local-parameter-is-nonzerodivisor"
kind: "lemma"
title: "regular local parameter is nonzerodivisor"
deps: ["def-axiom-of-choice", "lem-regular-system-of-parameters-equivalent-basis", "lem-regular-local-domain-induction"]
proof_strategy: "Explicit algebraic derivation"
sources:
  references:
    - title: "10.106.2–10.106.3"
      url: "https://stacks.math.columbia.edu/tag/00NN"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In a positive-dimensional regular local ring, every member of a regular system of parameters is a nonzerodivisor.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-system-of-parameters-equivalent-basis]]: Let $(R,\mathfrak m,k)$ be a nonzero Noetherian local ring of dimension $d$, and let $\mathbf x=(x_1,\ldots,x_d)\in\mathfrak m^d$. Then $\mathbf x$ is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^2$. In particular every lift of a cotangent basis in a regular local ring generates $\mathfrak m$ and is a system of parameters.

[F2] [[lem-regular-local-domain-induction]]: Every regular local ring is an integral domain.

## Proof

1.1 The class of any member $x$ is a member of a cotangent basis and hence is nonzero. In particular $x\ne0$. [F1]

2.1 The ring is a domain, so multiplication by this nonzero $x$ is injective. This proves the assertion for every member of the supplied tuple. [F2, step 1.1] ∎
