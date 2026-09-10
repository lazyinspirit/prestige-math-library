---
id: "thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology"
kind: "theorem"
title: "Pullback induces a well defined map on de rham cohomology"
deps: ["def-de-rham-cohomology", "prop-pullback-is-a-morphism-of-de-rham-complexes", "thm-a-chain-map-induces-a-well-defined-map-on-homology"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a smooth $F:M\to N$, the formula $F^*[\omega]=[F^*\omega]$ defines a linear map $H^k_{\mathrm{dR}}(N)\to H^k_{\mathrm{dR}}(M)$ for every integer $k$.

## Facts & Assumptions

**Given:** A smooth $F$ and a closed $k$-form $\omega$ on $N$.

[F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

[F2] [[prop-pullback-is-a-morphism-of-de-rham-complexes]]: A smooth map $F:M\to N$ induces a degree-zero real cochain map $F^*:\Omega^\bullet(N)\to\Omega^\bullet(M)$.

[F3] [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]: Let $f:C_\bullet\to D_\bullet$ be a chain map. For every $n\in\mathbb Z$ there is a unique morphism $$H_n(f):H_n(C)\to H_n(D)$$ such that the quotient maps from cycles to homology commute with $Z_n(f)$.

## Proof

**Proof technique:** direct.

1.1 The cochain identity gives $dF^*\omega=F^*d\omega=0$. If $\omega\prime=\omega+d\eta$, then $F^*\omega\prime-F^*\omega=F^*d\eta=d(F^*\eta)$, so both representatives produce the same class. [F1, F2, given]

2.1 Reindex by $C_n=\Omega^{-n}(N)$ and $D_n=\Omega^{-n}(M)$, with unchanged differentials. The cochain identity is the chain-map identity; its cycles and boundaries at $-k$ are exactly $Z^k$ and $B^k$. The induced-homology theorem therefore gives the displayed linear map, agreeing with step 1.1 by its quotient property. [F3, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
