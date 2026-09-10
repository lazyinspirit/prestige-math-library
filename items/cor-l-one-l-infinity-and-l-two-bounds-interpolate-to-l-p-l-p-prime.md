---
id: cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
kind: corollary
title: Interpolate L1 to Linfinity and L2 to L2 bounds
deps: [lem-riesz-thorin-bound-on-the-finite-simple-core, def-conjugate-exponents, cor-complex-interpolation-extensions-agree-on-intersections,
  def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Laugesen Theorem C.6 pp.168–173; Teschl Corollary 15.4 p.415 as application motivation
      url: https://arxiv.org/pdf/0903.3845
  scraped: []
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

On sigma-finite measure spaces suppose a complex-linear finite-simple-core operator satisfies $\|Tf\|_\infty\le A\|f\|_1$ and $\|Tf\|_2\le B\|f\|_2$, for finite $A,B\ge0$. For $1<p<2$, with $1/p+1/p'=1$,
$$\|Tf\|_{p'}\le A^{2/p-1}B^{2-2/p}\|f\|_p.$$
At p=1 and p=2 retain the respective given estimates. Under countable choice these maps have the unique compatible bounded extensions to the full Lp spaces.

## Facts & Assumptions

[F1] The core interpolation bound holds at reciprocal-affine exponents on sigma-finite spaces [[lem-riesz-thorin-bound-on-the-finite-simple-core]].

[F2] Conjugacy means reciprocal exponents sum to one, with reciprocal infinity zero [[def-conjugate-exponents]].

[F3] Under countable choice the core bounds give unique compatible extensions [[cor-complex-interpolation-extensions-agree-on-intersections]].

[F4] Countable choice is assumed only for the full-space extension conclusion [[def-countable-choice]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $1<p<2$, set $\theta=2-2/p$. Then $0<\theta<1$, $(1-\theta)/1+\theta/2=1/p$, and $(1-\theta)/\infty+\theta/2=1-1/p=1/p'$. Thus the core interpolation theorem with endpoints $(1,\infty)$ and $(2,2)$ gives exactly $A^{1-\theta}B^\theta=A^{2/p-1}B^{2-2/p}$ and proves membership in $L^{p'}$. Zero A or B is allowed because the interior powers are positive. [F1, F2]

2.1 At p=1 the target is infinity and at p=2 the target is two, so the asserted estimates are the respective hypotheses. Assuming countable choice, the compatible-extension result applies with finite source endpoint exponents 1 and 2 and the given sigma-finite spaces, providing the claimed unique bounded extensions and agreement. [F3, F4, step 1.1, given] ∎
