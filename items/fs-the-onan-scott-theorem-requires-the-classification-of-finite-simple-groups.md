---
id: fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups
kind: false-statement
title: "FALSE: the O'Nan-Scott theorem requires the classification of finite simple groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-cfsg-refinements-of-the-onan-scott-reduction, thm-onan-scott-classification-of-finite-primitive-groups]
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
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

**False claim:** the O'Nan-Scott theorem itself requires the classification of
finite simple groups.

## Facts & Assumptions

**Given:** The structural O'Nan-Scott theorem and its later applications.

[L1] The O'Nan-Scott theorem gives a structural classification of finite
primitive groups of degree at least $2$
([[thm-onan-scott-classification-of-finite-primitive-groups]]).

[A1] The classification of finite simple groups enters later refinements rather
than the structural reduction itself.

## Refutation

**Proof technique:** direct.

1.1 The theorem [L1] is already a completed structural classification of finite primitive permutation groups. [L1]

2.1 The sourced boundary fact [A1] states that CFSG is used later, not in the theorem itself. So the claim is false. [A1, step 1.1] ∎
