---
id: lem-baer-sum-is-independent-of-extension-representatives
kind: lemma
title: "The Baer sum is independent of extension representatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baer-sum-of-abelian-kernel-extensions]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

The Baer sum depends only on the equivalence classes of the two input
extensions.

## Facts & Assumptions

**Given:** Two pairs of equivalent extensions representing the same two classes.

[F1] The Baer sum is defined by pullback over $G$ and pushout along addition on
$M\oplus M$
([[def-baer-sum-of-abelian-kernel-extensions]]).

## Proof

**Proof technique:** direct.

1.1 An equivalence of extensions induces an isomorphism of the corresponding pullbacks over $G$, because the pullback is defined by the universal condition that the two quotient maps agree. [F1, given, algebra]

2.1 Pushing out along the fixed homomorphism $M\oplus M\to M$ respects those pullback isomorphisms. Hence equivalent input extensions produce equivalent pushout extensions. [F1, step 1.1, algebra]

3.1 Therefore the Baer sum depends only on extension classes. [step 2.1] ∎
