---
id: lem-gts-general-refinement-ambiguity
kind: lemma
title: Ambiguity of a differential refinement with fixed characteristic class and curvature
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-smooth-integral-singular-chain-complex
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - thm-de-rham-theorem
  - def-axiom-of-choice
dependency_roles:
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.3, Definition 3.39 and discussion of ker(I) intersect ker(R), PDF pp. 42–43.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary, let $k\ge1$, and let two differential characters $x_0,x_1\in\widehat H^k(M;\mathbb Z)$ satisfy $I(x_0)=I(x_1)$ and $R(x_0)=R(x_1)$. Their difference belongs to
$$\ker I\cap\ker R\cong H^{k-1}_{\mathrm{dR}}(M;\mathbb R)/\operatorname{im}\bigl(H^{k-1}(M;\mathbb Z)\to H^{k-1}_{\mathrm{dR}}(M;\mathbb R)\bigr).$$
Every class in this quotient occurs as such a difference from $x_0=0$.

## Statement references

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[thm-de-rham-theorem]]

## Facts & Assumptions

**Given:** Full AC, a finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary, the two exact sequences for ordinary differential characters, and the de Rham isomorphism.

[F1] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]] says $\ker I=\operatorname{im}(a)$, $R(a(\eta))=d\eta$, and $\ker a=\Omega^{k-1}_{\mathbb Z}(M)$.

[F2] [[thm-de-rham-theorem]] identifies closed forms modulo exact forms with real singular cohomology by integration.

[F3] [[def-gts-smooth-integral-singular-chain-complex]] supplies free integral smooth chains; [[lem-gts-smooth-integral-chains-compute-singular-homology]] and the natural evaluation sequence of [[lem-singular-uct-extension-from-cycle-projections]] identify their integral cohomology with ordinary integral cohomology under full AC. The same evaluation sequence is onto with integer coefficients, and [[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]] makes evaluation an isomorphism with real coefficients.

## Proof

1.1 Let $x=x_1-x_0$. Then $I(x)=0$, so [F1] gives $x=a(\eta)$ for some $(k-1)$-form $\eta$, modulo a closed integral-period form. Since $R(x)=0$ and $R(a(\eta))=d\eta$, the chosen representative is closed. Thus its de Rham class determines a class in $H^{k-1}_{\mathrm{dR}}(M;\mathbb R)$. [F1, given]

1.2 For every $j\ge0$, a closed $j$-form $\theta$ has integral periods if and only if its real cohomology class realifies an integral class. Indeed integration gives a real cocycle $w$ on the free integral smooth chains. If its periods are integral, evaluation defines $\lambda:H_j^\infty(M;\mathbb Z)\to\mathbb Z$. The integer evaluation surjection in [F3] supplies an integral cocycle $c$ with that evaluation. Real evaluation is injective by [F3], hence $[w]=[c_{\mathbb R}]$. The natural smooth-to-ordinary cohomology comparison transports $[c]$ to an ordinary integral class, whose realification is $[\theta]$ by [F2]. Conversely, such a realification evaluates integrally on every smooth integral cycle. The argument includes $j=0$, where integration evaluates functions on point chains and there are no negative-degree boundaries. [F2, F3, given, algebra]

2.1 Two closed representatives give the same differential character exactly when their difference lies in $\Omega^{k-1}_{\mathbb Z}(M)$ by [F1]. By step 1.2 and [F2], this subgroup maps onto exactly the image of $H^{k-1}(M;\mathbb Z)$, so the quotient displayed in the Statement maps bijectively onto $\ker I\cap\ker R$. Conversely every closed form gives an element of that common kernel by [F1]; taking $x_0=0$ realizes every quotient class as a difference. [F1, F2, step 1.1, step 1.2] ∎
