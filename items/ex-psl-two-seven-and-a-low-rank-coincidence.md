---
id: ex-psl-two-seven-and-a-low-rank-coincidence
kind: example
title: "PSL(2,7) and a low-rank family entry"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual, lecture 1, pp. 17 and 43 n. 6"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
---

## Example

$\operatorname{PSL}(2,7)$ is a sourced Lie-type entry under the table's
low-rank convention.

## Facts & Assumptions

**Given:** Use Smith's Lie-type family table and its rank-one notation cited above.

[L1] Smith's table lists type $A_n$ as the linear family $L_{n+1}(q)$, and its rank-one discussion explicitly names $L_2(q)$ as Lie type. In standard notation $L_2(q)=\operatorname{PSL}(2,q)$.

## Verification

**Proof technique:** direct.

1.1 Specializing [L1] to $n=1$ and $q=7$ places $L_2(7)=\operatorname{PSL}(2,7)$ in the linear Lie-type family. [L1, given]

2.1 This is precisely the claimed table-level Lie-type example; no structural construction is being inferred. [step 1.1] ∎
