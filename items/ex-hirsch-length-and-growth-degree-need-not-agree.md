---
id: ex-hirsch-length-and-growth-degree-need-not-agree
kind: example
title: Hirsch length and growth degree differ
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Definition 13.46, p.474
status: published
origin: pipeline
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["ex-bass-dimension-of-the-discrete-heisenberg-group", "ex-bass-dimension-of-unitriangular-four-by-four-integers", "def-bass-guivarch-dimension"]
---
## Example

The nilpotent Hirsch length and growth degree need not agree: for the integer Heisenberg group H, h(H)=3 and D(H)=4; for $\operatorname{UT}_4(\mathbb Z)$, h=6 and D=10.

## Facts & Assumptions

**Given:** Use the ranks computed in the two matrix examples.

[F1] The Heisenberg lower-central ranks are 2,1 ([[ex-bass-dimension-of-the-discrete-heisenberg-group]]).

[F2] The UT_4 lower-central ranks are 3,2,1 ([[ex-bass-dimension-of-unitriangular-four-by-four-integers]]).

[F3] h sums ranks and D sums ranks multiplied by their layer ([[def-bass-guivarch-dimension]]).

## Verification

1.1 For H, the factor ranks (2,1) give $h=2+1=3$ and $D=1\cdot2+2\cdot1=4$. Their difference is $(2-1)\cdot1=1$, contributed by the central second-layer free generator. [F1, F3]

2.1 For $\operatorname{UT}_4(\mathbb Z)$ the ranks (3,2,1) give $h=3+2+1=6$ and $D=1\cdot3+2\cdot2+3\cdot1=10$. The difference is $(2-1)\cdot2+(3-1)\cdot1=4$. Thus h counts each free coordinate once, while D records its lower-central layer; these two explicit nilpotent groups have different values of the two invariants. [F2, F3, algebra] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Definition 13.46, p.474. Revised Definition 13.46 supplies the distinction between the two sums; actual factor calculations are cited at their uses.
