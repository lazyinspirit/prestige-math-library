---
id: lem-cft-dual-fusion-product-uniqueness
kind: lemma
title: Uniqueness of a representing dual fusion product
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps: []
justified_by: []
domain: mathematics
library: mathematics
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "Theorem 0.5 and Remark 3.22; the uniqueness argument below is the direct representing-object argument."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\mathcal C$ be a category and let $F:\mathcal C^{\mathrm{op}}\to\mathrm{Vect}_{\mathbb C}$ be a contravariant functor. A representing pair for $F$ is an object $D$ with an element $\gamma\in F(D)$ such that, for every object $M$, the map $\mathrm{Hom}_{\mathcal C}(M,D)\to F(M)$ sending $T$ to $F(T)(\gamma)$ is a bijection. If $(D,\gamma)$ and $(D',\gamma')$ both represent $F$, then there is a unique isomorphism $f:D\to D'$ satisfying $\gamma=F(f)(\gamma')$.

## Statement references

The universal property used here is the abstract representing property that also defines a dual fusion product on this page.

## Facts & Assumptions

**Given:** A contravariant functor $F$ and two representing pairs $(D,\gamma)$ and $(D',\gamma')$.

[A1] Both pairs satisfy the representing bijection in the Statement for every object of $\mathcal C$.

## Proof

1.1 Apply the representing bijection for $(D',\gamma')$ with $M=D$ to $\gamma\in F(D)$. It gives a unique morphism $f:D\to D'$ with $\gamma=F(f)(\gamma')$. [given, A1, construct]

1.2 Apply the representing bijection for $(D,\gamma)$ with $M=D'$ to $\gamma'\in F(D')$. It gives a unique morphism $g:D'\to D$ with $\gamma'=F(g)(\gamma)$. [given, A1, construct]

2.1 By contravariance, $F(g\circ f)=F(f)\circ F(g)$. Steps 1.1–1.2 give $F(g\circ f)(\gamma)=F(f)(\gamma')=\gamma$, and the identity morphism has the same image; uniqueness for $(D,\gamma)$ gives $g\circ f=\mathrm{id}_D$. The same argument gives $f\circ g=\mathrm{id}_{D'}$. Any other compatible morphism is equal to $f$ by uniqueness in the representing bijection for $(D',\gamma')$. Thus $f$ is the unique compatible isomorphism. [given, A1, step 1.1, step 1.2, algebra] ∎
