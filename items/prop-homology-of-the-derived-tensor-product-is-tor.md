---
id: "prop-homology-of-the-derived-tensor-product-is-tor"
kind: "proposition"
title: "Homology of the derived tensor product is tor"
deps: ["def-derived-tensor-product-in-the-bounded-above-setting", "def-balanced-tor-bifunctor"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a right $R$-module $N$, a left $R$-module $M$, and $n\geq0$, with supplied projective resolutions, $H^{-n}(N[0]\otimes_R^{\mathbf L}M[0])\cong\operatorname{Tor}_n^R(N,M)$ naturally in both modules.

## Facts & Assumptions

**Given:** For a right $R$-module $N$, a left $R$-module $M$, and $n\geq0$, with supplied projective resolutions, $H^{-n}(N[0]\otimes_R^{\mathbf L}M[0])\cong\operatorname{Tor}_n^R(N,M)$ naturally in both modules.

[F1] The derived tensor is represented using either projective replacement with the two-replacement balancing zigzag ([[def-derived-tensor-product-in-the-bounded-above-setting]]).

[F2] Balanced Tor is resolution tensor homology, with maps induced by comparison maps ([[def-balanced-tor-bifunctor]]).

## Proof

1.1 Represent the derived tensor by $N\otimes_RP_M$ with the projective resolution reindexed by $P_M^{-i}=(P_M)_i$. Its degree $-n$ cohomology is exactly $H_n(N\otimes_R(P_M)_\bullet)$, including $n=0$ and zero modules. [F1]

2.1 This homology is the definition of balanced Tor on the left-resolution side. The common two-resolution tensor complex gives the same balance on the other side, and comparison maps on resolutions induce exactly the maps used in that definition. Thus the identification is natural and compatible with either supplied resolution. [F2, step 1.1] ∎
