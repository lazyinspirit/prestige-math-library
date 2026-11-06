---
id: def-cmp-heterotic-slope
kind: definition
title: Slope of a holomorphic bundle on a Kähler threefold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Björn Eurenius, From the Donaldson–Uhlenbeck–Yau theorem to stability in mirror symmetry"
      url: "https://odr.chalmers.se/bitstreams/f124ffe2-1d73-4b8d-bd00-38f03504f9f8/download"
      locator: "Chapter 4, §4.1, equations (4.1)–(4.3): degree and slope defined from a Kähler class; the local definition fixes the complex threefold normalization."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical degree and slope convention for locally free holomorphic bundles; no stability-to-Hermitian–Yang–Mills existence theorem is asserted."
---

## Definition

Let $X$ be a compact Kähler complex threefold with complex structure $J$ and a specified Kähler form $\omega$; orient $X$ by its complex structure and write $[\omega]\in H^2_{\mathrm{dR}}(X;\mathbb R)$ for its de Rham class. For a locally free holomorphic vector bundle $E\to X$ of rank $r>0$, let $c_1^{\mathrm{top}}(E)\in H^2(X;\mathbb Z)$ be its topological first Chern class as in `def-chern-classes-from-the-projective-bundle-relation`. Write $c_1^{\mathbb R}(E)\in H^2_{\mathrm{dR}}(X;\mathbb R)$ for the inverse de Rham image of its coefficient change $c_1^{\mathrm{top}}(E)\mapsto(c_1^{\mathrm{top}}(E))_{\mathbb R}$, using the natural de Rham isomorphism specified in `thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals`. Assume full AC as in that supplier. Define its $\omega$-degree and $\omega$-slope by
$$\deg_\omega(E):=\left\langle c_1^{\mathbb R}(E)\smile[\omega]^2,[X]\right\rangle,\qquad \mu_\omega(E):=\frac{\deg_\omega(E)}{r},$$
where $[X]$ is the complex-orientation fundamental class. A rescaling $\omega\mapsto t\omega$ for $t>0$ multiplies both degree and slope by $t^2$. This convention alone does not assert (semi)stability or existence of a Hermitian–Yang–Mills connection.

## Definition references

[[def-gts-kahler-class-canonical-bundle-and-ricci-form]]

[[def-chern-classes-from-the-projective-bundle-relation]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

## Facts & Assumptions

**Given:** A compact Kähler complex threefold $(X,J)$, its specified Kähler form $\omega$ and class $[\omega]$, a rank-$r>0$ locally free holomorphic bundle $E$, the real Chern class $c_1^{\mathbb R}(E)$, and the complex orientation.

[F1] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] reserves $J$ for the complex structure and defines the Kähler form $\omega$ as a smooth positive real $(1,1)$-form with $d\omega=0$; its de Rham class is $[\omega]$.

[F2] [[def-chern-classes-from-the-projective-bundle-relation]] defines $c_1^{\mathrm{top}}(E)$. Under full AC, [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] specifies the natural isomorphism $J_X:H^*_{\mathrm{dR}}(X;\mathbb R)\to H^*(X;\mathbb R)$ and identifies normalized Chern forms with the real coefficient images of topological Chern classes for arbitrary smooth complex bundles with supplied Hermitian connection. Here only $c_1^{\mathbb R}(E):=J_X^{-1}((c_1^{\mathrm{top}}(E))_{\mathbb R})$ is needed; no connection is selected and no tangent-bundle formula is applied to $E$.

[A1] The Axiom of Choice is assumed as in [F2]. The integral is the cohomological pairing, not an integral of a chosen nonclosed representative.

## Proof

**Given:** The data in the Definition and [F1]–[F2], with AC.

1.1 The cup product $c_1^{\mathbb R}(E)\smile[\omega]^2$ has real cohomological degree six, equal to the real dimension of $X$. Its evaluation on the complex-orientation fundamental class is therefore a scalar determined by the two cohomology classes, which defines $\deg_\omega(E)$. [given, F1, F2, A1]

2.1 The rank $r$ is a positive integer, so division defines $\mu_\omega(E)$. Replacing $\omega$ by $t\omega$ replaces $[\omega]^2$ by $t^2[\omega]^2$, hence multiplies $\deg_\omega(E)$ and $\mu_\omega(E)$ by $t^2$. No stability inequality or existence conclusion is part of these definitions. [given, step 1.1, algebra] ∎
