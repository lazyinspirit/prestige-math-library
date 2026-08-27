---
id: fs-the-boundary-definition-needs-no-properness-or-equivalence-check
kind: false-statement
title: "FALSE: a proposed Gromov boundary quotient needs no equivalence check"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boundary-topology-by-gromov-products, def-gromov-boundary-by-asymptotic-sequences, lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

**False claim:** once a class of boundary sequences and a proposed
"asymptotic" relation have been written down, one may form the Gromov boundary
as their quotient without proving that asymptoticity is an equivalence
relation.

## Facts & Assumptions

**Given:** The boundary construction on this page.

[L1] The quotient by asymptoticity is justified only after proving that
asymptoticity is an equivalence relation
([[lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]]).

## Refutation

**Proof technique:** direct.

1.1 A quotient set consists of equivalence classes, so it is defined only when the proposed relation is an equivalence relation. The sequence model on this page therefore depends essentially on [L1]. [L1]

2.1 Consequently the proposed quotient cannot be licensed merely by writing down the relation: reflexivity, symmetry, and transitivity must be checked. The properness hypothesis used elsewhere on this page is a scope choice for this construction, not a claim that every possible boundary model requires properness. [step 1.1] ∎ 
