---
id: rem-characteristic-class-construction-is-cited-not-rebuilt
kind: remark
title: "The characteristic-class construction is cited, not rebuilt"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-pontryagin-classes-by-complexification", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-naturality-of-stiefel-whitney-classes", "thm-pontryagin-whitney-product-away-from-two", "cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion", "def-axiom-of-choice", lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class, cor-high-normal-pontryagin-classes-obstruct-oriented-immersions]
justified_by: []
dependency_level: 0
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## The interface used

Assume AC. Remark. This page computes with the characteristic classes but does not construct them. The exact interfaces are: the Stiefel-Whitney classes $w_i$ and the conventions $w_0=1$, $w_i=0$ for $i>\operatorname{rank}$ of [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]] together with the Whitney product and naturality of [[thm-whitney-sum-formula-for-stiefel-whitney-classes]] and [[thm-naturality-of-stiefel-whitney-classes]]; the Euler class as the zero-section pullback of the Thom class of [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]; and the Pontryagin classes $p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ of [[def-pontryagin-classes-by-complexification]] with the Whitney product away from two of [[thm-pontryagin-whitney-product-away-from-two]] and the odd-Chern two-torsion fact of [[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]]. Authoring must substitute these exact item ids and the two-torsion qualification before performing the calculations of [[lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class]] and [[cor-high-normal-pontryagin-classes-obstruct-oriented-immersions]]; no construction, normalization or product formula is minted here.
