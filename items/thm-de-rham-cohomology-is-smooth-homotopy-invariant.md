---
id: "thm-de-rham-cohomology-is-smooth-homotopy-invariant"
kind: "theorem"
title: "De rham cohomology is smooth homotopy invariant"
deps: ["cor-smoothly-homotopic-maps-induce-the-same-de-rham-map", "prop-de-rham-cohomology-is-a-contravariant-functor", "prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras", "def-homotopy-equivalence"]
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

A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

## Facts & Assumptions

**Given:** Smooth maps $f:M\to N$, $g:N\to M$ with smooth homotopies $gf\simeq\operatorname{id}_M$ and $fg\simeq\operatorname{id}_N$.

[F1] [[cor-smoothly-homotopic-maps-induce-the-same-de-rham-map]]: Smoothly homotopic smooth maps induce equal maps on de Rham cohomology in every degree.

[F2] [[prop-de-rham-cohomology-is-a-contravariant-functor]]: De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

[F3] [[prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras]]: Smooth pullback induces a unital graded real algebra homomorphism $H^\bullet_{\mathrm{dR}}(N)\to H^\bullet_{\mathrm{dR}}(M)$.

## Proof

**Proof technique:** direct.

1.1 By smooth-homotopy invariance and functoriality, $f^*g^*=(gf)^*=(\operatorname{id}_M)^*=\operatorname{id}_{H^\bullet(M)}$. [F1, F2, given]

2.1 The other homotopy gives $g^*f^*=(fg)^*=\operatorname{id}_{H^\bullet(N)}$. Both maps preserve multiplication and units, so these two identities exhibit inverse graded algebra homomorphisms. The conclusion includes empty manifolds, since a homotopy equivalence to an empty manifold forces both to be empty. [F1, F2, F3, step 1.1, given] ∎

## Source locator

Lee, Theorem 17.11, pp.445–446; this item assumes smooth homotopies explicitly, so does not use a continuous smoothing theorem.
