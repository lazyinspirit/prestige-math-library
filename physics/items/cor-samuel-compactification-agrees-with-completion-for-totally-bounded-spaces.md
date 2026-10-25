---
id: cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces
kind: corollary
title: "Under dependent choice the Samuel completion of a separated totally bounded space is its uniform completion; under the ultrafilter lemma it is compact"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-compactification, def-completion-of-a-uniform-space, lem-totally-bounded-uniformities-equal-their-samuel-uniformity, lem-total-boundedness-passes-to-dense-uniform-extensions, thm-uniform-completion-universal-property-and-uniqueness, thm-complete-and-totally-bounded-uniform-spaces-are-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Uniform space"
      url: "https://encyclopediaofmath.org/wiki/Uniform_space"
pipeline_run: null
---

## Statement

**Assume dependent choice.** For a separated totally bounded uniform space $X$, every Samuel completion is, up to the unique uniform isomorphism fixing $X$, a Hausdorff completion of the original uniformity. **Assume also the ultrafilter lemma.** This common completion is compact.

## Facts & Assumptions

**Given:** A separated totally bounded uniform space $X$, dependent choice, and, for compactness, the ultrafilter lemma.

[L1] For a totally bounded uniform space, dependent choice makes the original and Samuel uniformities equal ([[lem-totally-bounded-uniformities-equal-their-samuel-uniformity]]).

[L2] Hausdorff completions are unique up to the unique uniform isomorphism commuting with their canonical maps ([[thm-uniform-completion-universal-property-and-uniqueness]]).

[L3] A Hausdorff completion has a dense uniformly continuous canonical map and complete target; a dense uniformly continuous image of a totally bounded space is totally bounded, and under the ultrafilter lemma a complete totally bounded uniform space is compact ([[def-completion-of-a-uniform-space]], [[lem-total-boundedness-passes-to-dense-uniform-extensions]], [[thm-complete-and-totally-bounded-uniform-spaces-are-compact]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], a Samuel completion is a Hausdorff completion of the original uniformity. [L1]

2.1 The uniqueness theorem [L2] identifies it with every other Hausdorff completion by the unique uniform isomorphism fixing $X$. [L2, step 1.1]

2.2 Its dense canonical image and [L3] make it totally bounded, while a Hausdorff completion is complete; hence [L3] makes it compact under the ultrafilter lemma. [L3, step 1.1]

3.1 This proves the DC identification and the separately qualified compactness assertion. [step 2.1, step 2.2] ∎
