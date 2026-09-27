---
id: cor-dimension-drops-under-a-parameter
kind: corollary
title: "Quotienting by a first parameter lowers local dimension by one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-system-of-parameters-and-parameter-ideal, lem-parameter-dimension-drop-is-exact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §21"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local ring of positive dimension, and let $(x_1,\ldots,x_d)$ be a system of parameters. Then
$$ \dim(R/(x_1))=d-1. $$

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian local ring $(R,\mathfrak m)$ of positive dimension and a system of parameters $(x_1,\ldots,x_d)$.

[L1] By definition, $x_1$ is the first member of a system of parameters ([[def-system-of-parameters-and-parameter-ideal]]).

[L2] Under the Axiom of Choice, a first parameter lowers the local dimension by exactly one ([[lem-parameter-dimension-drop-is-exact]]).

## Proof

**Proof technique:** direct.

1.1 The tuple $(x_1,\ldots,x_d)$ satisfies the hypothesis of [L2] by [L1]. [L1, L2, given]

2.1 Therefore $\dim(R/(x_1))=d-1$. [L2, step 1.1] ∎
