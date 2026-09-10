---
id: "def-de-rham-cohomology-ring"
kind: "definition"
title: "De rham cohomology ring"
deps: ["thm-wedge-product-descends-to-de-rham-cohomology"]
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

The **de Rham cohomology ring** is $H^\bullet_{\mathrm{dR}}(M)=\bigoplus_{k\in\mathbb Z}H^k_{\mathrm{dR}}(M)$ with $[\alpha][\beta]=[\alpha\wedge\beta]$ and unit $[1]$.

By [[thm-wedge-product-descends-to-de-rham-cohomology]] it is a unital graded-commutative real algebra. On the empty manifold it is the zero algebra, with $1=0$; this convention allows the zero algebra among unital algebras.

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
