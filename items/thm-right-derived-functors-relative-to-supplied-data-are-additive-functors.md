---
id: thm-right-derived-functors-relative-to-supplied-data-are-additive-functors
kind: theorem
title: "Right derived functors relative to supplied data are additive functors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-right-derived-map-relative-to-resolution-data, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension, def-additive-functor, def-cochain-complex-in-an-abelian-category, thm-the-category-of-complexes-in-an-additive-category-is-additive, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

Let $I$ be a supplied injective resolution datum and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
For every $n\in\mathbb Z$, the assignments
$$A\longmapsto R_I^nF(A),\qquad u\longmapsto R_I^nF(u)$$
define an additive functor on the domain of $I$.
## Facts & Assumptions

**Given:** An integer $n$.

[L1] Right derived maps are defined from injective comparison extensions
([[def-right-derived-map-relative-to-resolution-data]]).

[L2] The cochain comparison-extension construction is available for every
morphism, and its induced cohomology map is independent of the chosen extension
([[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]],
[[lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]]).

[L3] A cochain complex may be reindexed as a chain complex
([[def-cochain-complex-in-an-abelian-category]]).

[L4] The category of complexes in an additive category is additive, and
additive functors apply degreewise to chain maps
([[thm-the-category-of-complexes-in-an-additive-category-is-additive]],
[[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L5] Two injective comparison extensions of the same morphism are
cochain-homotopic, and after reindexing chain-homotopic maps induce the same
map on homology
([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]],
[[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L6] An additive functor is a functor that is additive on each hom-group
([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 Identity and composition are proved exactly as on the projective side: choose comparison extensions for the relevant morphisms, compare the extension of a composite or identity with the obvious chain-level candidate, and use [L5] after reindexing by [L3]. Therefore the assignments in [L1] form a functor. [L1, L2, L3, L5, given, algebra]

1.2 Let $u,v:A\to B$. Choose comparison extensions $\widetilde u^\bullet$ and $\widetilde v^\bullet$. By [L4], their degreewise sum is a cochain map and extends $u+v$, so it is a comparison extension of $u+v$. [L2, L4, construct]

2.1 Reindexing by [L3], applying $F$ degreewise by [L4], and using homotopy invariance from [L5], the induced cohomology map of $\widetilde u^\bullet+\widetilde v^\bullet$ equals the sum of the induced cohomology maps of $\widetilde u^\bullet$ and $\widetilde v^\bullet$. Hence $$R_I^nF(u+v)=R_I^nF(u)+R_I^nF(v).$$ [L3, L4, L5, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 give the functoriality and hom-group additivity required by [L6]. Therefore $R_I^nF$ is an additive functor. [L6, step 1.1, step 2.1] ∎
