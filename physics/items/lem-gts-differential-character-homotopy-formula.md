---
id: lem-gts-differential-character-homotopy-formula
kind: lemma
title: Homotopy formula for differential characters
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
proof_strategy: direct
deps:
  - def-gts-cheegersimons-differential-character
  - def-gts-smooth-integral-singular-chain-complex
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.3, Proposition 3.28, homotopy formula, PDF pp. 41–42.
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 2.3, cochain model for differential characters, PDF pp. 8–10.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary, let $J\subset\mathbb R$ be an open interval containing $[0,1]$, and let $k\ge1$. For a smooth $(k-1)$-form $\eta$ on $M$, define $a(\eta)$ on smooth integral $(k-1)$-cycles by $a(\eta)(z)=\int_z\eta\pmod{\mathbb Z}$; Stokes makes this a differential character with curvature $d\eta$. For $\widehat h\in\widehat H^k(M\times J;\mathbb Z)$, write $h_t=i_t^*\widehat h$ for its restriction to $M\times\{t\}$. Orient $J$ by increasing $t$, and define $\int_JR(\widehat h)$ by contraction with $\partial_t$ followed by integration over $[0,1]$. Then
$$h_1-h_0=a\left(\int_JR(\widehat h)\right)\in\widehat H^k(M;\mathbb Z).$$

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[def-gts-smooth-integral-singular-chain-complex]]

## Facts & Assumptions

**Given:** A positive-degree differential character on $M\times J$ and the increasing orientation on the interval.

[F1] [[def-gts-cheegersimons-differential-character]] says $\widehat h(\partial C)=\int_C R(\widehat h)\pmod{\mathbb Z}$ for every smooth integral $k$-chain $C$.

[F2] [[def-gts-smooth-integral-singular-chain-complex]] defines finite integral sums of smooth simplices with the alternating-face boundary and $\partial^2=0$.

[F3] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines integration by pullback to the standard simplex and is additive over finite chains.

[F4] The local formula in the Statement defines $a(\eta)$; [[thm-stokes-theorem-for-smooth-singular-chains]] verifies its character boundary identity $a(\eta)(\partial c)=\int_c d\eta\pmod{\mathbb Z}$.

## Proof

1.1 For a smooth singular simplex $\sigma:\Delta^r\to M$, triangulate the prism $\Delta^r\times[0,1]$ into the $r+1$ simplices with ordered vertices $(v_0,0),\ldots,(v_j,0),(v_j,1),\ldots,(v_r,1)$ for $0\le j\le r$, orient their sum by the interval-first product orientation $[0,1]\times\Delta^r$, and map it to $M\times J$ by $(x,t)\mapsto(\sigma(x),t)$. Let $P(\sigma)$ be this signed sum. In its boundary each interior face occurs twice with opposite orientations; the two endpoint faces remain as $i_{1*}\sigma-i_{0*}\sigma$, and the side faces are the negative interval-first prism on the alternating boundary of $\sigma$. Hence $\partial P(c)=i_{1*}c-i_{0*}c-P(\partial c)$ for every finite chain $c$, by additivity. [F2, F3, given, construct]

2.1 If $z$ is a smooth integral $(k-1)$-cycle on $M$, then [F2] gives $\partial P(z)=i_{1*}z-i_{0*}z$. By [F1],
$$h_1(z)-h_0(z)=\widehat h(\partial P(z))=\int_{P(z)}R(\widehat h)\pmod{\mathbb Z}.$$
The prism triangulation and the product orientation identify the last integral with $\int_z\int_0^1\iota_{\partial_t}R(\widehat h)\,dt$. By [F4] this is exactly $a(\int_JR(\widehat h))(z)$. Equality on every cycle proves the asserted equality of differential characters. [F1, F2, F3, F4, step 1.1, algebra] ∎
