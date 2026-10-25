---
id: ex-the-zero-weight-singular-central-character
kind: example
title: "The zero-weight singular central character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weyl-vector-rho-for-a-chosen-positive-system, lem-harish-chandra-projection-computes-highest-weight-scalars]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (ex-the-zero-weight-singular-central-character). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

For a supplied positive-root system, the weight $-\rho$ is fixed by the dot action of every Weyl-group element: for every $w\in W$,

$$w\cdot (-\rho)=-\rho.$$

Its highest-weight central character is singular in the sense that its label has full dot-action stabilizer $W$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra with a supplied positive-root system, Weyl group $W$, and Weyl vector $\rho$.

## Verification

**Proof technique:** direct.

1.1 By definition of the dot action, $w\cdot (-\rho)=w((-\rho)+\rho)-\rho=w(0)-\rho=-\rho$ for every $w\in W$. [given, algebra]

2.1 The cyclic highest-weight module $M(-\rho)$ has a central character $\chi_{-\rho}$ because [[lem-harish-chandra-projection-computes-highest-weight-scalars]] makes every central element act by a scalar. Step 1.1 shows that the label $-\rho$ has the full Weyl group as its dot-action stabilizer, which is the asserted singularity. [step 1.1] ∎
