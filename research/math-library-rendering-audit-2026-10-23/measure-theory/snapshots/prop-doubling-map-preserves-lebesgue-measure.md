---
id: prop-doubling-map-preserves-lebesgue-measure
kind: proposition
title: Doubling preserves Lebesgue measure
deps: ["def-circle-rotation-and-doubling-map", "prop-integer-base-map-preserves-lebesgue-measure", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.4 pp.14–15
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. The doubling map $D(x)=\{2x\}$ is a continuous, surjective, non-injective transformation preserving Borel Lebesgue probability on the circle and its completion.

## Facts & Assumptions

[F1] The preservation theorem applies to every integer b>=2. [[prop-integer-base-map-preserves-lebesgue-measure]].

[F2] The stable doubling map has the fractional-part formula. [[def-circle-rotation-and-doubling-map]].

## Proof

**Given:** Assume countable choice. The doubling map $D(x)=\{2x\}$ is a continuous, surjective, non-injective transformation preserving Borel Lebesgue probability on the circle and its completion.

1.1 By the definitions, $D=D_2$. Since 2 is an allowed integer base, the base-map theorem proves preservation on both sigma-algebras and continuity. Its countable-choice measure and completion hypothesis is the assumption here. [F1, F2]

2.1 Explicitly $D^{-1}[a,c)=[a/2,c/2)\cup[(a+1)/2,(c+1)/2)$ for $0\le a<c\le1$; the two pieces have total length c-a. For each y, y/2 is a preimage, while $D(0)=D(1/2)=0$ exhibits failure of injectivity. These branch identities also show why preservation concerns inverse images. [step 1.1, F2] ∎

