---
id: ex-doubling-dyadic-preimage-computation
kind: example
title: Dyadic preimages under doubling
deps: ["prop-doubling-map-preserves-lebesgue-measure", "def-countable-choice"]
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
    - title: E–W Example 2.4
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. For doubling $D(x)=\{2x\}$ on the circle, $D^{-1}[0,1/2)=[0,1/4)\cup[1/2,3/4)$, of measure $1/2$. In contrast, $D[0,1/2)=[0,1)$ has measure one.

## Facts & Assumptions

[F1] Doubling preserves Lebesgue probability by inverse images. [[prop-doubling-map-preserves-lebesgue-measure]].

## Verification

**Given:** Assume countable choice. For doubling $D(x)=\{2x\}$ on the circle, $D^{-1}[0,1/2)=[0,1/4)\cup[1/2,3/4)$, of measure $1/2$. In contrast, $D[0,1/2)=[0,1)$ has measure one.

1.1 On $[0,1/2)$, $D(x)=2x$, and $0\le2x<1/2$ is equivalent to $0\le x<1/4$. On $[1/2,1)$, $D(x)=2x-1$, and $0\le2x-1<1/2$ is equivalent to $1/2\le x<3/4$. These two branches exhaust the circle and their solution intervals are disjoint. Each interval has length $1/4$, so their union has measure $1/2$, agreeing with the preservation in [F1]. [F1]

2.1 For $x\in[0,1/2)$, the image $2x$ ranges through every $y\in[0,1)$, with inverse $x=y/2$. Thus the forward image has measure one although the source has measure $1/2$. In particular inverse-image preservation does not assert equality of forward-image measures. The included points 0 and 1/2 map to 0, and the excluded right endpoints 1/4 and 3/4 map to 1/2. Countable choice is inherited from the Lebesgue probability in [F1]. [1.1, F1] ∎

