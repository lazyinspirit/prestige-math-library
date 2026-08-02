---
id: ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees
kind: example
title: "Exact sine and cosine values at $\\pi/10$, $\\pi/5$, and $2\\pi/5$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-chebyshev-multiple-angle-identities, thm-double-angle-and-power-reduction-identities, thm-of-square-roots, thm-sine-cosine-signs-monotonicity-and-ranges]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Example

Writing $\varphi=(1+\sqrt5)/2$, one has
$$\cos(\pi/5)=\varphi/2,\quad \sin(\pi/10)=(\sqrt5-1)/4,\quad \cos(2\pi/5)=(\sqrt5-1)/4,$$
with the complementary sine values determined by positive square roots. The conventions and prerequisite facts used below are recorded in [[thm-chebyshev-multiple-angle-identities]], [[thm-double-angle-and-power-reduction-identities]], [[thm-of-square-roots]], [[thm-sine-cosine-signs-monotonicity-and-ranges]].

## Facts & Assumptions

**Given:** $5(\pi/5)=\pi$ and the sign ranges on the first quadrant.

## Verification

1.1 By the defining recurrence for $T_n$, $T_5(t)=16t^5-20t^3+5t$. Put $c=\cos(\pi/5)$. The multiple-angle identity gives $T_5(c)=\cos\pi=-1$; factoring $16c^5-20c^3+5c+1=(c+1)(4c^2-2c-1)^2$ and using $0<c<1$ yields $4c^2-2c-1=0$. [given, algebra]

2.1 The positive solution is $c=(1+\sqrt5)/4=\varphi/2$. The double-angle identity gives $\cos(2\pi/5)=2c^2-1=(\sqrt5-1)/4$, and power reduction at $\pi/10$ gives $\sin(\pi/10)=\sqrt{(1-\cos(\pi/5))/2}=(\sqrt5-1)/4$. The signs are positive because the angles lie in the first quadrant. [step 1.1, algebra] ∎
