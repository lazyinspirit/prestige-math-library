---
id: lem-gts-integral-period-forms-lift-to-characters
kind: lemma
title: Integral-period forms lift to differential characters
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
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
  - def-axiom-of-choice
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, the two exact sequences in the Character Diagram, PDF pp. 2–4.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.2, exact sequence (20), PDF pp. 36–39.
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

Assume full AC. Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary, let $k\ge1$, and let $\omega\in\Omega^k(M)$ be closed with integral periods on all smooth integral $k$-cycles. Then there is a degree-$k$ differential character $h$ with curvature $\omega$.

## Statement references

[[def-gts-cheegersimons-differential-character]]

## Facts & Assumptions

**Given:** Full AC, $M$, $k\ge1$, and a closed $k$-form $\omega$ with integral periods.

[F1] [[def-gts-smooth-integral-singular-chain-complex]] gives the free smooth integral chain complex and its homology.

[F2] [[lem-gts-smooth-integral-chains-compute-singular-homology]] identifies its homology with ordinary singular homology.

[F3] [[lem-singular-uct-extension-from-cycle-projections]] gives the evaluation short exact sequence for cohomology of a free integral chain complex under AC.

[F4] [[cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology]] identifies real-coefficient cohomology with homomorphisms from homology because $\mathbb R$ is divisible.

[F5] [[thm-stokes-theorem-for-smooth-singular-chains]] gives $\int_c d\eta=\int_{\partial c}\eta$ for finite real smooth chains. Restriction along integer coefficients gives the same identity for the integral chains used here.

## Proof

1.1 Integration of $\omega$ defines a real cochain $w(c)=\int_c\omega$. [F5] gives $\delta w(c)=w(\partial c)=\int_c d\omega=0$, so $w$ is a cocycle. By the integral-period hypothesis, evaluation of $[w]$ on $H_k^\infty(M;\mathbb Z)$ has values in $\mathbb Z$; denote this homomorphism by $\lambda$. [F1, F5, given]

2.1 Apply [F3] to the free complex $C_*^\infty(M;\mathbb Z)$ and coefficient group $\mathbb Z$. Its evaluation map onto $\operatorname{Hom}(H_k^\infty(M;\mathbb Z),\mathbb Z)$ is surjective, so choose an integral cocycle $c$ whose evaluation equals $\lambda$. [F1, F3, step 1.1, choose]

3.1 Under coefficient inclusion $\mathbb Z\hookrightarrow\mathbb R$, $c$ and $w$ have the same evaluation on $H_k^\infty(M;\mathbb Z)$. By [F4], evaluation is injective for real coefficients, so $[w-c_{\mathbb R}]=0$. Hence there is a real cochain $\widetilde h\in C^{k-1}_\infty(M;\mathbb R):=\operatorname{Hom}_{\mathbb Z}(C_{k-1}^\infty(M;\mathbb Z),\mathbb R)$ with $\delta\widetilde h=w-c_{\mathbb R}$. [F2, F4, step 2.1]

4.1 Define $h(z)=\widetilde h(z)\pmod{\mathbb Z}$ for $z\in Z_{k-1}^\infty(M;\mathbb Z)$. For every smooth integral $k$-chain $b$, $h(\partial b)=\delta\widetilde h(b)\pmod{\mathbb Z}=w(b)-c(b)\pmod{\mathbb Z}= \int_b\omega\pmod{\mathbb Z}$, because $c(b)$ is integral. Thus $h$ is a differential character with curvature $\omega$. The construction uses a choice of cocycle and primitive, but the statement asserts existence only. [F1, step 3.1] ∎
