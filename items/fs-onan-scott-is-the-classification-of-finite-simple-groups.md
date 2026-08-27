---
id: fs-onan-scott-is-the-classification-of-finite-simple-groups
kind: false-statement
title: "FALSE: the O'Nan-Scott theorem is the classification of finite simple groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-cfsg-refinements-of-the-onan-scott-reduction, thm-onan-scott-classification-of-finite-primitive-groups]
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
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement

**False claim:** the O'Nan-Scott theorem is the classification of finite simple
groups.

## Facts & Assumptions

**Given:** The finite O'Nan-Scott theorem and the classification of finite simple groups are distinct named results.

[L1] The O'Nan-Scott theorem classifies finite primitive permutation groups of
degree at least $2$ by socle type
([[thm-onan-scott-classification-of-finite-primitive-groups]]).

[A1] Later refinements involving finite simple groups lie beyond the structural
O'Nan-Scott reduction.

## Refutation

**Proof technique:** direct.

1.1 By [L1], the O'Nan-Scott theorem concerns primitive permutation actions, not the class of all finite simple groups. [L1]

2.1 The sourced boundary fact [A1] separates the structural reduction from the later theory of finite simple groups. Therefore the two theorems serve different purposes, and the claim is false. [A1, step 1.1] ∎
