---
id: "def-two-open-set-de-rham-mayer-vietoris-cochain-maps"
kind: "definition"
title: "Two open set de rham mayer vietoris cochain maps"
deps: ["def-de-rham-cochain-complex", "prop-pullback-is-a-morphism-of-de-rham-complexes"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
---

## Definition

For an open cover $M=U\cup V$, put $W=U\cap V$. The two-open-set de Rham maps are $r:\Omega^\bullet(M)\to\Omega^\bullet(U)\oplus\Omega^\bullet(V)$, $r\omega=(\omega|_U,\omega|_V)$, and $s:\Omega^\bullet(U)\oplus\Omega^\bullet(V)\to\Omega^\bullet(W)$, $s(\alpha,\beta)=\beta|_W-\alpha|_W$.

The complexes are [[def-de-rham-cochain-complex]]. Restrictions are pullbacks along open inclusions, so [[prop-pullback-is-a-morphism-of-de-rham-complexes]] gives $dr=rd$ and $ds=sd$. Both maps are real linear. The middle differential acts componentwise. Empty opens have zero form spaces. The order **second minus first** fixes the sign of every connecting map below.

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.
