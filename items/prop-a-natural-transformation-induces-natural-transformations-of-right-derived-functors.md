---
id: prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors
kind: proposition
title: "A natural transformation induces natural transformations of right derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, def-natural-transformation, def-cochain-complex-in-an-abelian-category, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, thm-a-chain-map-induces-a-well-defined-map-on-homology, def-right-derived-map-relative-to-resolution-data]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum, let
$F,G:\mathcal A\to\mathcal B$ be additive functors, and let
$\alpha:F\Rightarrow G$ be a natural transformation. Then for every
$n\in\mathbb Z$ the maps
$$\mathbf R_I^n(\alpha)_A:=H^n\!\bigl(\alpha_{I(A)_{\mathrm{del}}}\bigr):R_I^nF(A)\to R_I^nG(A)$$
define a natural transformation
$$\mathbf R_I^n(\alpha):R_I^nF\Rightarrow R_I^nG.$$
## Facts & Assumptions

**Given:** An integer $n$.

[L1] A natural transformation is objectwise and satisfies the naturality equation on every morphism ([[def-natural-transformation]]).

[L2] A cochain complex is read as a reindexed chain complex ([[def-cochain-complex-in-an-abelian-category]]).

[L3] Additive functors apply degreewise to chain maps, and every chain map induces a homology map ([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]], [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L4] Right derived maps are induced by comparison extensions on the chosen injective resolutions ([[def-right-derived-map-relative-to-resolution-data]]).

[L5] The source and target assignments are already functors ([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

## Proof

**Proof technique:** direct.

1.1 For each object $A$, the components $\alpha_{I^k(A)}$ commute with the cochain differentials by [L1], so they form a cochain map $F(I(A)_{\mathrm{del}})\to G(I(A)_{\mathrm{del}})$. Reindexing by [L2] turns this into a chain map. [L1, L2, given, algebra]

2.1 By [L3], step 1.1 induces a map on homology of the reindexed complexes, hence on cohomology: $\mathbf R_I^n(\alpha)_A:R_I^nF(A)\to R_I^nG(A)$. [L2, L3, step 1.1, construct]

3.1 Let $u:A\to B$, and choose a comparison extension $\widetilde u^\bullet:I^\bullet(A)\to I^\bullet(B)$. Naturality in [L1] gives degreewise commutative squares with the maps $\alpha_{I^k(A)}$ and $\alpha_{I^k(B)}$. Passing to cohomology and translating through [L4] gives $$R_I^nG(u)\circ\mathbf R_I^n(\alpha)_A =\mathbf R_I^n(\alpha)_B\circ R_I^nF(u).$$ Thus the components from step 2.1 are natural. [L1, L4, L5, step 2.1, algebra] ∎
