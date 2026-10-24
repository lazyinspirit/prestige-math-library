---
id: ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution
kind: example
title: "Cohomology of a finite cyclic group"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, ex-a-periodic-resolution-for-a-finite-cyclic-group]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Corollary 1.6.13"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Example

For $C_m=\langle t\rangle$ and a left $C_m$-module $M$, put $N=1+t+\cdots+t^{m-1}$. Then $H^0(C_m;M)=\ker(t-1)$, and for $q\ge0$,
$$H^{2q+1}(C_m;M)=\ker N/(t-1)M,\qquad H^{2q+2}(C_m;M)=\ker(t-1)/NM.$$

## Verification

**Given:** The periodic free resolution.

1.1 Applying $\operatorname{Hom}_{\mathbb Z[C_m]}(-,M)$ identifies every cochain group with $M$; the coboundaries alternate between $t-1$ and $N$. [given]

2.1 Taking kernel modulo preceding image gives exactly the displayed groups, including the degree-zero kernel. [step 1.1] ∎
