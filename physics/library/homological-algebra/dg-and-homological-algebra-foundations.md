---
page: dg-and-homological-algebra-foundations
title: "Differential Graded Algebras and Homological Foundations"
status: published
items: [def-differential-graded-algebra, def-differential-graded-module]
examples: []
---

This page fixes the cohomological differential graded algebra and module
interfaces used by the adjacent higher-algebra pages. It adds only these signed
definitions; chain-complex, derived-category, and Hochschild results remain in
their canonical pages.

Companion: [[dg-and-homological-algebra-foundations-examples]].

## Reading prerequisites

Read the declared prerequisites in order:
[[algebraic-representation-and-tensor-symmetry-map]], [[derived-categories]],
and [[hochschild-homology-and-diagonal-koszul-resolutions]]. The first is a separate draft page defining unital associative-algebra
representations over a field and their equivalence with bilinear unital module
actions. Its ordinary module convention agrees with the underlying action here;
the cohomological grading and differential signs are specified locally in the DG
module definition over a commutative ring. This reading route adds no logical
dependency on the draft representation theorem. The latter two pages are
published; their exact hypotheses remain local to those pages.

## Existing library route

- [chain-complexes-and-homology](chain-complexes-and-homology.md): the established chain and cochain convention, with cochain differential of degree $+1$.

- [derived-categories](derived-categories.md): localization of complexes at quasi-isomorphisms, under the page's exact-category and size hypotheses.

- [hochschild-homology-and-diagonal-koszul-resolutions](hochschild-homology-and-diagonal-koszul-resolutions.md): Hochschild homology and the polynomial diagonal Koszul calculation over a field; it supplies neither a Gerstenhaber bracket nor formality.

## Scope and local proof obligations

### Local definitions

- [[def-differential-graded-algebra]] fixes a cohomological differential of degree $+1$, $d^2=0$, an associative unital graded product, and the signed Leibniz rule.
- [[def-differential-graded-module]] gives separate left and right module conventions; it does not identify the two actions for a noncommutative algebra.

The polynomial DGA and the failure of a general degree-one derivation to square
to zero are verified on the companion page. No new chain-complex, derived-
category, or Hochschild theorem is claimed. No A-infinity identities, BV
identities, deformation classification, or formality statement is supplied.

## Canonical suppliers and reuse boundaries

- [def-cochain-complex-in-an-abelian-category](../../items/def-cochain-complex-in-an-abelian-category.md): cohomological indexing $d^n:C^n\to C^{n+1}$ and $d^{n+1}d^n=0$.

- [def-chain-complex-in-an-abelian-category](../../items/def-chain-complex-in-an-abelian-category.md): existing homological convention, with differential of degree $-1$.

- [thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism](../../items/thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism.md): a chain homotopy equivalence induces a homology isomorphism; no converse is asserted.

- [def-algebra-over-a-commutative-ring](../../items/def-algebra-over-a-commutative-ring.md): unital associative multiplication with central structure map from the commutative base ring.

- [def-left-and-right-modules](../../items/def-left-and-right-modules.md): unital left/right module axioms.

- [def-bimodule](../../items/def-bimodule.md): commuting left/right actions when both sides are present.

## Conventions, diagrams, and sources

Use cohomological grading throughout: $d:A^n\to A^{n+1}$ and
$d(ab)=d(a)b+(-1)^{|a|}a d(b)$. The DGA is associative and unital but is not
assumed graded commutative. The two source treatments and their inspected
locators are recorded in [batch 41 source coverage](../../research/non-ml-math-remaining-81-2026-10-18-batch-41.source-coverage.json).

- [graded/homotopical scope dossier](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md) (§4)
- [source manifest and reading ranges](../../research/physics-algebras-planning-2026-10-17/sources/06-other-physics-algebras/manifest.md)

The original audit's `reuse` disposition and its no-new-item summary were
superseded for this run by the owner direction to author the exact 81-pair
frontier. The original claim scope remains binding; its source boundaries are
kept in the [batch notes](../../research/non-ml-math-remaining-81-2026-10-18-batch-41.notes.md).
