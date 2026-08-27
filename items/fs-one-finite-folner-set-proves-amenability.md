---
id: fs-one-finite-folner-set-proves-amenability
kind: false-statement
title: "FALSE: one finite Folner set proves amenability"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

The existence of one finite Folner set is enough to prove that a group is
amenable.

## Facts & Assumptions

**Given:** The false claim above.

[L1] The Folner condition requires the inequalities over every finite test set and every tolerance; under the ultrafilter lemma it is equivalent to amenability ([[thm-folner-criterion-for-amenability]]).

## Refutation

**Proof technique:** direct.

1.1 Let $G=F_2$, which is nonamenable. The singleton $\{e\}$ satisfies $|e\{e\}\triangle\{e\}|=0$, so it is a $(\{e\},1)$-Folner set. [given, construct]

2.1 This single accidental Folner set does not make $G$ amenable, because [L1] requires the inequalities for all finite test sets and arbitrarily small tolerances. Therefore the statement is false. [L1, step 1.1] ∎
