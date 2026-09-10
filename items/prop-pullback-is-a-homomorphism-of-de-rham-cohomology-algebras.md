---
id: "prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras"
kind: "proposition"
title: "Pullback is a homomorphism of de rham cohomology algebras"
deps: ["prop-de-rham-cohomology-is-a-contravariant-functor", "thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology", "def-de-rham-cohomology-ring", "prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges"]
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
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Smooth pullback induces a unital graded real algebra homomorphism $H^\bullet_{\mathrm{dR}}(N)\to H^\bullet_{\mathrm{dR}}(M)$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and closed homogeneous forms $\alpha,\beta$ on $N$.

[F1] [[prop-de-rham-cohomology-is-a-contravariant-functor]]: De Rham cohomology is contravariant: for smooth $F:M\to N$ and $G:N\to P$, $(G\circ F)^*=F^*\circ G^*$, and $\operatorname{id}_M^*=\operatorname{id}_{H^k(M)}$.

[F2] [[def-de-rham-cohomology-ring]]: The **de Rham cohomology ring** is $H^\bullet_{\mathrm{dR}}(M)=\bigoplus_{k\in\mathbb Z}H^k_{\mathrm{dR}}(M)$ with $[\alpha][\beta]=[\alpha\wedge\beta]$ and unit $[1]$. By thm-wedge-product-descends-to-de-rham-cohomology it is a unital graded-commutative real algebra. On the empty manifold it is the zero algebra, with $1=0$; this convention allows the zero algebra among unital algebras.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]: For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to smooth differential forms on $M$, is functorial, and satisfies $$ F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta. $$

[F4] [[thm-pullback-induces-a-well-defined-map-on-de-rham-cohomology]]: For a smooth $F:M\to N$, the formula $F^*[\omega]=[F^*\omega]$ defines a linear map $H^k_{\mathrm{dR}}(N)\to H^k_{\mathrm{dR}}(M)$ for every integer $k$.

## Proof

**Proof technique:** direct.

1.1 Pullback is already a degree-preserving linear map on cohomology. The class formula F4 and the wedge formula give $F^*([\alpha][\beta])=[F^*(\alpha\wedge\beta)]=[F^*\alpha\wedge F^*\beta]=F^*[\alpha]F^*[\beta]$. [F1, F2, F3, F4, given]

2.1 For functions, $F^*1=1\circ F=1$, so F4 gives $F^*[1]=[1]$. Linearity extends step 1.1 from homogeneous elements to their finite sums in the direct sum algebra. These are precisely the multiplicativity and unit conditions, also for the zero target algebra when $M$ is empty. [F2, F4, step 1.1, given] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
