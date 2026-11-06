---
id: thm-gts-product-on-ordinary-differential-cohomology
kind: theorem
title: Product on ordinary differential cohomology
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 6
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - def-gts-smooth-deligne-cohomology-model
  - def-gts-deligne-cup-product-input
  - lem-gts-deligne-character-comparison
  - def-gts-character-diagram-geometric-input
  - def-gts-good-cover-singular-cech-comparison-input
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-gts-deligne-cup-product-input: mathematical-premise
  lem-gts-deligne-character-comparison: mathematical-premise
  def-gts-character-diagram-geometric-input: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.4, Definition 3.94 and Proposition 3.95, PDF pp. 57–60.
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 1, Character Diagram, PDF pp. 2–4.
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

Assume full AC, the category-level geometric input of [[def-gts-character-diagram-geometric-input]], the good-cover comparison input of [[def-gts-good-cover-singular-cech-comparison-input]], and a Deligne cup-product input as in [[def-gts-deligne-cup-product-input]]. Then on $\mathcal C_{\mathrm{geo}}$, for every $p,q\ge1$ the ordinary Cheeger–Simons character groups admit natural products $\widehat H^p(M;\mathbb Z)\times\widehat H^q(M;\mathbb Z)\to\widehat H^{p+q}(M;\mathbb Z)$ that are associative and graded-commutative, preserve the integral cup product and wedge product of curvatures, and obey $a(\eta)\smile x=a(\eta\wedge R(x))$.

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[def-gts-smooth-deligne-cohomology-model]]

## Facts & Assumptions

**Given:** Full AC, the stated category-level input on $\mathcal C_{\mathrm{geo}}$, and a Deligne cup-product input.

[F1] [[def-gts-deligne-cup-product-input]] gives natural associative graded-commutative products on Deligne classes and states the $I$, $R$, and form-action identities.

[F2] [[lem-gts-deligne-character-comparison]] conditionally gives a natural isomorphism $\Phi_M:\widehat H^k(M;\mathbb Z)\to\widehat H^k_{\mathrm{Del}}(M;\mathbb Z)$ commuting with $I$, $R$, pullback and form action.

## Proof

1.1 For $x\in\widehat H^p(M;\mathbb Z)$ and $y\in\widehat H^q(M;\mathbb Z)$ define $x\smile y:=\Phi_M^{-1}(\Phi_M(x)\smile_{\mathrm{Del}}\Phi_M(y))$. The inverse exists by [F2], and bilinearity follows by applying the homomorphisms $\Phi_M$, the bilinear Deligne product, and $\Phi_M^{-1}$. [F1, F2, given, construct]

2.1 Naturality follows by applying the naturality square for $\Phi$ and the pullback-natural Deligne product in [F1]. Associativity and graded commutativity follow by applying the injective map $\Phi_M$ to the two sides and using the corresponding Deligne identities. Since [F2] commutes with $I$, $R$ and $a$, the Deligne identities in [F1] transport respectively to the integral cup-product identity, the curvature wedge-product identity, and $a(\eta)\smile x=a(\eta\wedge R(x))$. These are conditional deductions; this proof does not establish existence of the Deligne cup-product input. [F1, F2, step 1.1, algebra] ∎

## Remarks

The local cochain construction and its omitted verifications are not promoted to a proved supplier here. This item is escalated until the conditional Deligne product data are supplied by a complete local construction and the Character Diagram geometric input has a current readiness record.
