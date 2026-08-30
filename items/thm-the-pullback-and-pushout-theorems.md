---
id: thm-the-pullback-and-pushout-theorems
kind: theorem
title: "The pullback and pushout theorems"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       cor-the-pushout-of-a-monomorphism-is-a-monomorphism,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
       thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
       thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Sections 2.5 and 2.6"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "The Stacks Project, Section 12.5, Lemmas 12.5.11 to 12.5.13"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

In an abelian category:

1. pullbacks of epimorphisms are epimorphisms;
2. pushouts of monomorphisms are monomorphisms;
3. in a pullback square, the induced map on kernels of the parallel arrows is
   an isomorphism;
4. a commuting square is cartesian exactly when the associated short sequence is
   exact;
5. a cartesian square over an epimorphism is also cocartesian.

## Facts & Assumptions

**Given:** The named pullback and pushout situations in the statement.

[L1] Each of the five claims has already been proved under the displayed names
([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]],
[[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]],
[[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]],
[[thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact]],
[[thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian]]).

## Proof

**Proof technique:** direct.

1.1 The first claim is [L1]'s pullback-of-epimorphism theorem. The second claim is its pushout-of-monomorphism dual. The third claim is its kernel-comparison theorem. [L1, given]

1.2 The fourth claim is [L1]'s exact-square criterion, and the fifth claim is the cartesian-implies-cocartesian theorem over an epimorphism. [L1, given]

2.1 Hence the pullback and pushout results actually used by the diagram-lemma proofs are exactly the previously published theorems listed above. [step 1.1, step 1.2] ∎
