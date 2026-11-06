---
id: lem-gts-differential-character-structure-maps-well-defined
kind: lemma
title: Differential-character curvature and characteristic class are well-defined
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 3
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - def-gts-smooth-integral-singular-chain-complex
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - thm-free-modules-are-projective-with-choice-boundary
  - lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  thm-injective-modules-over-a-pid-are-exactly-divisible: mathematical-premise
  thm-free-modules-are-projective-with-choice-boundary: mathematical-premise
  lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, differential-character construction and characteristic cocycle, PDF pp. 3–4.
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 2.3, Definition 2.5 and cochain differential, PDF pp. 8–10.
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

For a degree-$k$ Cheeger–Simons character, the curvature form is unique, closed and has integral periods; the formula $I(h)=[\operatorname{Int}(R(h))-\delta\widetilde h]$ is an integral cocycle class independent of the chosen real lift and is natural under smooth pullback.

## Statement references

[[def-gts-cheegersimons-differential-character]]

## Facts & Assumptions

**Given:** Full AC, a finite-dimensional Hausdorff second-countable smooth manifold $M$, an integer $k\ge1$, and a character $h$ as in [[def-gts-cheegersimons-differential-character]].

[F1] [[def-gts-cheegersimons-differential-character]]: $h$ is a homomorphism on smooth integral $(k-1)$-cycles and satisfies $h(\partial c)=\int_c\omega_h\pmod{\mathbb Z}$ for every smooth integral $k$-chain.

[F2] [[def-gts-smooth-integral-singular-chain-complex]]: smooth chains are finite integral sums of smooth simplices and $\partial^2=0$.

[F3] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a smooth $(k-1)$-form $\eta$ and a smooth integral $k$-chain $c$, $\int_c d\eta=\int_{\partial c}\eta$.

[F4] [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]]: under AC, cycle and boundary subgroups in a free integral chain complex are free and the cycle-boundary sequences split.

[F5] [[thm-free-modules-are-projective-with-choice-boundary]] and [[thm-injective-modules-over-a-pid-are-exactly-divisible]]: free abelian groups are projective and the divisible group $\mathbb R$ is injective.

[F6] [[lem-gts-smooth-integral-chains-compute-singular-homology]] identifies smooth and ordinary integral homology under the stated manifold scope. For each nonnegative free integral chain complex $C_*$, [[lem-singular-uct-extension-from-cycle-projections]] gives the natural exact sequence $0\to\operatorname{Ext}^1(H_{k-1}(C_*),\mathbb Z)\to H^k(\operatorname{Hom}(C_*,\mathbb Z))\to\operatorname{Hom}(H_k(C_*),\mathbb Z)\to0$. Apply it to ordinary and smooth chains. Naturality for inclusion puts $H^k(\iota^*)$ between the induced Ext and Hom maps; both are isomorphisms because $\iota_*$ is an isomorphism in every degree. Exactness then gives that the middle map is an isomorphism: injectivity follows by sending a kernel element to zero on the right and then using injectivity on the left, while surjectivity follows by lifting the desired right-hand image and correcting the remaining left-hand difference. This is the cohomology comparison used to regard the characteristic cocycle as an ordinary integral cohomology class.

## Proof

1.1 Suppose $\omega$ and $\omega'$ both satisfy [F1], and put $\alpha=\omega-\omega'$. For each oriented smooth integral $k$-simplex $\sigma$, $\int_\sigma\alpha\in\mathbb Z$. If $k>\dim M$, then $\alpha=0$ by degree, so assume $k\leq\dim M$. In a coordinate chart about $x$, choose any ordered $k$ coordinate directions and, for every sufficiently small $t>0$, the oriented affine simplex with vertices $x,x+te_1,\ldots,x+te_k$. Its integral of $\alpha$ is integer-valued, depends continuously on $t$, and tends to $0$ as $t\downarrow0$; hence it is $0$ for all sufficiently small $t$. Dividing by the simplex volume and taking the limit gives $\alpha_x(e_1,\ldots,e_k)=0$. Varying the coordinate directions shows $\alpha_x=0$, and $x$ was arbitrary. Thus $\omega=\omega'$. [F1, F2, algebra]

2.1 For every smooth integral $k$-cycle $z$, [F1] gives $\int_z\omega_h\equiv h(0)=0\pmod{\mathbb Z}$, so every period is integral. If $k+1>\dim M$, then $d\omega_h=0$ by degree. Otherwise, for every smooth integral $(k+1)$-simplex $\sigma$, Stokes and [F1] give $\int_\sigma d\omega_h=\int_{\partial\sigma}\omega_h\in\mathbb Z$. The oriented-affine-simplex argument of step 1.1, applied in degree $k+1$, shows that every coefficient of $d\omega_h$ vanishes. Hence $d\omega_h=0$. [F1, F2, F3, step 1.1]

3.1 The subgroup $Z_{k-1}^\infty$ is free by [F4], so it is projective by [F5]. Lift the homomorphism $h:Z_{k-1}^\infty\to\mathbb R/\mathbb Z$ through $\mathbb R\to\mathbb R/\mathbb Z$ to a homomorphism $\ell:Z_{k-1}^\infty\to\mathbb R$. Since $\mathbb R$ is injective, extend $\ell$ to a real cochain $\widetilde h$ on $C_{k-1}^\infty$. For each $c\in C_k^\infty$, [F1] implies $\operatorname{Int}(\omega_h)(c)-\delta\widetilde h(c)\in\mathbb Z$. Stokes and $d\omega_h=0$ from step 2.1 show that its coboundary is $0$, so it is an integral cocycle. By [F6], its cohomology class is viewed canonically as an ordinary singular class. [F1, F4, F5, F6, step 2.1, construct]

4.1 If $\widetilde h'$ is another real extension of a lift of $h$, then $u=\widetilde h'-\widetilde h$ takes integer values on $Z_{k-1}^\infty$. By [F4], $C_{k-1}^\infty=Z_{k-1}^\infty\oplus s(B_{k-2}^\infty)$ for some splitting $s$. Extend $u|_{Z_{k-1}^\infty}$ to the integer cochain $v(c)=u(\operatorname{pr}_{Z}c)$. For every $k$-chain $c$, $\partial c\in Z_{k-1}^\infty$, hence $\delta(u-v)(c)=0$ and $\delta u=\delta v$. Thus the two integral cocycles differ by the integral coboundary $\delta v$, proving independence of $I(h)$. [F2, F4, step 3.1]

5.1 For a smooth map $f:N\to M$, pullback of chains commutes with boundary and pullback of forms commutes with exterior derivative. The character $f^*h(z)=h(f_*z)$ has curvature $f^*\omega_h$. Pulling back a chosen extension $\widetilde h$ gives an extension for $f^*h$; its integral cocycle is the pullback of the cocycle in step 3.1. Independence from the extension is step 4.1, so $R$ and $I$ are natural. [F1, F2, step 2.1, step 3.1, step 4.1] ∎
