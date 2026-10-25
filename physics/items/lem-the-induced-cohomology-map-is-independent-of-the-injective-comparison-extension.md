---
id: lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension
kind: lemma
title: "The induced cohomology map is independent of the chosen injective comparison extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-right-derived-object-relative-to-injective-resolution-data, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-cochain-complex-in-an-abelian-category, def-chain-homotopy, def-additive-functor, prop-an-additive-functor-preserves-zero-morphisms, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
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
$F:\mathcal A\to\mathcal B$ an additive functor. If
$u:A\to B$ is a morphism and
$$\widetilde u^\bullet,\widehat u^\bullet:I^\bullet(A)\to I^\bullet(B)$$
are two injective comparison extensions of $u$, then for every $n\in\mathbb Z$
the induced maps on cohomology
$$H^n\!\bigl(F(\widetilde u^\bullet)\bigr),\,H^n\!\bigl(F(\widehat u^\bullet)\bigr):R_I^nF(A)\to R_I^nF(B)$$
are equal.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and two comparison extensions $\widetilde u^\bullet,\widehat u^\bullet$ of $u$.

[L1] Two injective comparison maps extending the same morphism are cochain-homotopic ([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).

[L2] A cochain complex is read as a reindexed chain complex by reversing the grading sign ([[def-cochain-complex-in-an-abelian-category]]).

[L3] A chain homotopy is an equation of the form $f_n-g_n=d_{n+1}s_n+s_{n-1}d_n$ ([[def-chain-homotopy]]).

[L4] Additive functors preserve sums and zero morphisms ([[def-additive-functor]], [[prop-an-additive-functor-preserves-zero-morphisms]]).

[L5] Chain-homotopic maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L6] The objects $R_I^nF(A)$ and $R_I^nF(B)$ are the cohomology objects of the deleted injective resolutions after applying $F$ ([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the two comparison extensions are cochain-homotopic. Using [L2], read that cochain homotopy as a chain homotopy after reindexing the complexes. [L1, L2, given, construct]

2.1 Applying $F$ to the homotopy equations from [L3] preserves their sum-and- zero form by [L4]. Hence the two reindexed chain maps $F(\widetilde u^\bullet)$ and $F(\widehat u^\bullet)$ remain chain-homotopic. [L3, L4, step 1.1, algebra]

3.1 By [L5], these two maps induce the same homology map on the reindexed complexes. Translating back through [L2] and [L6], that is exactly equality of the induced maps on cohomology $R_I^nF(A)\to R_I^nF(B)$. [L2, L5, L6, step 2.1] ∎
