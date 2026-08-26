---
id: thm-localisation-of-modules-is-exact
kind: theorem
title: "Localisation of modules is exact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-of-modules-is-tensor-product, thm-right-exactness-of-tensor-products, lem-localisation-preserves-injectivity, def-exact-and-short-exact-sequences-of-modules]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 12.20"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 5.11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

If
$$
0 \longrightarrow M' \xrightarrow{f} M \xrightarrow{g} M'' \longrightarrow 0
$$
is a short exact sequence of $R$-modules, then
$$
0 \longrightarrow S^{-1}M' \xrightarrow{S^{-1}f} S^{-1}M \xrightarrow{S^{-1}g} S^{-1}M'' \longrightarrow 0
$$
is a short exact sequence of $S^{-1}R$-modules.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, and a short exact sequence $0 \to M' \xrightarrow{f} M \xrightarrow{g} M'' \to 0$.

[L1] Localisation is naturally $(S^{-1}R) \otimes_R -$ ([[thm-localisation-of-modules-is-tensor-product]]).

[L2] Tensoring a right-exact sequence with a fixed module preserves right exactness ([[thm-right-exactness-of-tensor-products]]).

[L3] Injective module homomorphisms remain injective after localisation ([[lem-localisation-preserves-injectivity]]).

[L4] A short exact sequence is exact, with left map injective and right map surjective ([[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], the tail $M' \xrightarrow{f} M \xrightarrow{g} M'' \to 0$ is exact. Using [L1] to identify localisation with tensor product, [L2] gives an exact sequence $S^{-1}M' \xrightarrow{S^{-1}f} S^{-1}M \xrightarrow{S^{-1}g} S^{-1}M'' \to 0$. [L1, L2, L4]

1.2 The map $f$ is injective by [L4], so [L3] makes $S^{-1}f$ injective. [L3, L4]

2.1 Steps 1.1 and 1.2 show that the localised sequence is short exact. [step 1.1, step 1.2] ∎
