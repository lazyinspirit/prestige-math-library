---
id: def-author-cf6ede58b450-site-plus-data
kind: definition
title: Small sites and the plus construction
status: published
domain: mathematics
deps:
  - math:def-grothendieck-universe-closure-convention
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-equivalence-relation
  - math:def-natural-transformation
formulation_deps:
  - math:def-grothendieck-universe-closure-convention
  - math:def-category
  - math:def-functor-and-contravariant-functor
  - math:def-equivalence-relation
argument_deps:
  - math:def-grothendieck-universe-closure-convention
  - math:def-equivalence-relation
  - math:def-natural-transformation
dependency_roles:
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-category: mathematical-premise
  math:def-functor-and-contravariant-functor: mathematical-premise
  math:def-equivalence-relation: mathematical-premise
  math:def-natural-transformation: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
justified_by:
  - lem-author-cf6ede58b450-plus-presheaf
---

## Definition
Fix Grothendieck universes U in V. Here a W-small set means an element of the universe W, and a W-small category is a category whose object set and morphism set are W-small. The category of V-small sets has those sets as objects and all functions between them as morphisms. Let C be a U-small category. A sieve R on an object X is a set of arrows with codomain X closed under precomposition. For f: Y → X, its pullback f*R is the sieve of arrows g into Y for which fg belongs to R. A Grothendieck topology J assigns to each X a set J(X) of covering sieves such that the maximal sieve covers, pullbacks of covering sieves cover, and a sieve S covers X whenever there is a covering sieve R on X for which f*S covers the domain of f for every f in R. The pair (C,J) is a small site.

A presheaf of sets is a contravariant functor F from C to V-small sets. A matching family of F on R is a choice of an element $s_f$ in F(dom f) for every f in R, compatible with restriction along every arrow into dom f. Write Match(R,F) for the set of such families. The canonical map F(X) → Match(R,F) restricts a section to all arrows of R. The presheaf is separated if this map is injective for every covering sieve and a sheaf if it is bijective for every covering sieve.

For a presheaf F, define F+(X) to be pairs (R,s), with R covering X and s in Match(R,F), modulo the relation that two families agree after restriction to some common covering subsieve. For f: Y → X, restrict a representative to f*R by assigning to g the value $s_{fg}$. The unit $\eta_F$ sends a section of F(X) to its restrictions on the maximal sieve.

## Definition references
[[math:def-grothendieck-universe-closure-convention]]

[[math:def-category]]

[[math:def-functor-and-contravariant-functor]]

[[math:def-equivalence-relation]]

[[math:def-natural-transformation]]

## Justification
The size convention uses the transitivity, pairing, power-set and indexed-union closure in [[math:def-grothendieck-universe-closure-convention]]. In detail, let $I$ be the morphism set of C and put $T=\bigcup_{f\in I}F(\operatorname{dom}f)$. Since $U\in V$, the set $I$ belongs to V; indexed-union closure gives $T\in V$. Sieves on X are subsets of I, and a matching family on any sieve is a function with graph contained in $I\times T$. Power-set and pairing closure therefore bound the set of all pairs (R,s) by a V-small set. Taking the subset of covering matching pairs and then its quotient still gives a V-small set, since each equivalence class is a subset of that set and the quotient is a subset of its power set. This argument requires no choice of representatives.

The quotient convention is that of [[math:def-equivalence-relation]]. The deferred well-definedness obligations are supplied by [[lem-author-cf6ede58b450-plus-presheaf]]: the displayed relation is an equivalence relation, restriction is independent of representatives and is functorial, and the unit is natural. Here natural means a natural transformation in the sense of [[math:def-natural-transformation]]. These assertions are deferred to that lemma, rather than assumed as extra axioms; its proof uses the definitions and the covering-intersection lemma.
