---
id: ex-sigma-one-sets-are-exactly-ce-sets
kind: example
title: "Reading a c.e. definition as a Sigma_1^0 formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-sigma-one-sets-are-exactly-ce-sets, thm-halting-is-sigma-one-complete]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 2.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Example

The halting set is expressed by
$$ \langle e,x\rangle\in K\iff\exists s\,T(e,x,s), $$
where $s$ encodes a complete halting computation history.

## Facts & Assumptions

**Given:** the fixed computation-history coding for $K$.

## Verification

**Proof technique:** direct.

1.1 Validity of a proposed finite history is primitive recursive, so the displayed formula has one leading unbounded existential quantifier over a bounded matrix. [given, construct]

2.1 Hence it is a $\Sigma_1^0$ presentation. The witness is precisely the finite accepting computation used by the recognizer of $K$. [step 1.1] ∎
