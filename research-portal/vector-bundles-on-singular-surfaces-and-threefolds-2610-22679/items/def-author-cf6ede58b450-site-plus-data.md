---
id: def-author-cf6ede58b450-site-plus-data
kind: definition
title: Small sites and the plus construction
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition
Fix Grothendieck universes U in V. Let C be a U-small category. A sieve R on an object X is a set of arrows with codomain X closed under precomposition. For f: Y → X, its pullback f*R is the sieve of arrows g into Y for which fg belongs to R. A Grothendieck topology J assigns to each X a set J(X) of covering sieves such that the maximal sieve covers, pullbacks of covering sieves cover, and a sieve S covers X whenever there is a covering sieve R on X for which f*S covers the domain of f for every f in R. The pair (C,J) is a small site.

A presheaf of sets is a contravariant functor F from C to V-small sets. A matching family of F on R is a choice of an element $s_f$ in F(dom f) for every f in R, compatible with restriction along every arrow into dom f. Write Match(R,F) for the set of such families. The canonical map F(X) → Match(R,F) restricts a section to all arrows of R. The presheaf is separated if this map is injective for every covering sieve and a sheaf if it is bijective for every covering sieve.

For a presheaf F, define F+(X) to be pairs (R,s), with R covering X and s in Match(R,F), modulo the relation that two families agree after restriction to some common covering subsieve. For f: Y → X, restrict a representative to f*R by assigning to g the value $s_{fg}$. The unit $\eta_F$ sends a section of F(X) to its restrictions on the maximal sieve.

## Justification
Sieves and matching families are sets, and the indicated pairs form a V-small set because C is U-small and F has V-small values. The topology axioms make pullbacks and covering refinements available. The subsequent lemmas establish that the displayed relation is an equivalence relation, that restriction is well defined and functorial, and that $\eta_F$ is natural; those assertions are not assumed here.
