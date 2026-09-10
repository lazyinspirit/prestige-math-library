---
id: "prop-zero-and-out-of-range-de-rham-cohomology"
kind: "proposition"
title: "Zero and out of range de rham cohomology"
deps: ["def-de-rham-cohomology"]
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

$H^k_{\mathrm{dR}}(M)=0$ if $k<0$ or $k>\dim M$. If $M=\varnothing$, its cohomology vanishes in every degree.

## Facts & Assumptions

**Given:** The de Rham complex with zero out-of-range terms.

[F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

## Proof

**Proof technique:** direct.

1.1 If $k<0$ or $k>\dim M$, the cycle space is a subspace of $\Omega^k(M)=0$, so $Z^k=B^k=0$. Its quotient is therefore zero. [F1, given]

2.1 On the empty manifold there is just one section of each form bundle, namely the zero section. Thus in every degree the quotient is again $0/0=0$, proving the empty clause as well. [F1, given] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
