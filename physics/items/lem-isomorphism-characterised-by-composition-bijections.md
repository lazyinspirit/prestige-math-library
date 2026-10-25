---
id: lem-isomorphism-characterised-by-composition-bijections
kind: lemma
title: "A morphism is an isomorphism exactly when postcomposition, equivalently precomposition, induces bijections on every hom-collection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isomorphism-groupoid-and-connected-category, thm-category-theoretic-duality-principle, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a morphism $f:A\to B$, the following are equivalent: $f$ is an isomorphism;
for every object $X$, postcomposition
$f\circ-:\mathcal C(X,A)\to\mathcal C(X,B)$ is bijective; and for every $X$,
precomposition $-\circ f:\mathcal C(B,X)\to\mathcal C(A,X)$ is bijective.

## Facts & Assumptions

**Given:** A morphism $f:A\to B$ in a category $\mathcal C$.

[L1] Isomorphisms have two-sided inverses ([[def-isomorphism-groupoid-and-connected-category]]), and a map is bijective exactly when it has a two-sided inverse ([[def-injection-surjection-bijection]]).

[L2] Reversing arrows exchanges postcomposition with precomposition ([[thm-category-theoretic-duality-principle]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ has inverse $f^{-1}$, postcomposition by $f^{-1}$ is a two-sided inverse to postcomposition by $f$, and similarly precomposition by $f^{-1}$ inverts precomposition by $f$; both maps are bijections. [given, L1]

2.1 Conversely, suppose every postcomposition map is bijective. Surjectivity at $X=B$ gives $g:B\to A$ with $f\circ g=1_B$; injectivity at $X=A$ applied to $f\circ(g\circ f)=f=f\circ1_A$ gives $g\circ f=1_A$, so $f$ is an isomorphism. [step 1.1, L1]

3.1 The identical argument in $\mathcal C^{\mathrm{op}}$, using [L2], proves that bijectivity of every precomposition map also characterises isomorphisms. [step 2.1, L2] ∎

