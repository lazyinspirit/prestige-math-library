---
id: "prop-de-rham-cohomology-is-a-contravariant-functor"
kind: "proposition"
title: "De rham cohomology is a contravariant functor"
deps: ["thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges", "prop-homology-respects-identities-and-composition"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
verification:
  audited: 2026-09-10
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

## Facts & Assumptions

**Given:** Composable smooth maps $F:M\to N$, $G:N\to P$ and an integer $k$.

[F1] [[thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology]]: For a smooth $F:M\to N$, the formula $F^*[\omega]=[F^*\omega]$ defines a linear map $H^k_{\mathrm{dR}}(N)\to H^k_{\mathrm{dR}}(M)$ for every integer $k$.

[F2] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

[F3] [[prop-homology-respects-identities-and-composition]]: For every $n\in\mathbb Z$: 1. $H_n(1_C)=1_{H_n(C)}$ for every chain complex $C$. 2. If $f:C\to D$ and $g:D\to E$ are chain maps, then $$H_n(g\circ f)=H_n(g)\circ H_n(f).$$

## Proof

**Proof technique:** direct.

1.1 On forms, pullback satisfies $(G\circ F)^*=F^*G^*$ and $\operatorname{id}^*=\operatorname{id}$. These are identities between cochain maps, with arrows from $P$ to $M$. [F2, given]

2.1 Using $C_n=\Omega^{-n}$, apply homology at degree $-k$ to these identities. Homology preserves identities and composition; the induced maps are those already defined on de Rham classes. This gives both identities in the statement. [F1, F3, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
