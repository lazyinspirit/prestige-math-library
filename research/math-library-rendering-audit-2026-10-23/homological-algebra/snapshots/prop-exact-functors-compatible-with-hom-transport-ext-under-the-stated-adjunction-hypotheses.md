---
id: prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses
kind: proposition
title: "Exact functors compatible with Hom transport Ext under stated adjunction hypotheses"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, def-exact-functor-between-abelian-categories, thm-the-adjunction-hom-set-bijection-under-local-smallness]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Let $F:\mathcal A\to\mathcal B$ be exact and have a right adjoint $G$. If $F$ sends projectives to projectives, then the adjunction isomorphisms induce
$$\operatorname{Ext}_{\mathcal B}^n(FM,X)\cong\operatorname{Ext}_{\mathcal A}^n(M,GX)$$
for every $n\geq0$, provided the displayed projective resolutions exist. The dual assertion holds for an exact $G$ that sends injectives to injectives.

## Facts & Assumptions

**Given:** The stated exactness, adjunction, preservation, and resolution hypotheses.

## Proof

**Proof technique:** direct.

1.1 Apply $F$ to a projective resolution of $M$. Exactness preserves its augmentation exactness and the preservation hypothesis makes it a projective resolution of $FM$. The adjunction [[thm-the-adjunction-hom-set-bijection-under-local-smallness]] identifies its Hom cochain complex into $X$ with the original Hom cochain complex into $GX$. [given, construct]

2.1 Taking cohomology and using [[def-balanced-ext-bifunctor]] gives the claimed isomorphism. The dual argument applies the stated injective preservation to the adjoint construction; no assertion is made without these hypotheses. [step 1.1, algebra] ∎
