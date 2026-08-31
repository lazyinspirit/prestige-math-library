---
category: category-theory
status: published
parts:
  - part: categories-and-yoneda
    title: "Categories, functors and Yoneda"
    pages:
      - categories-functors-and-natural-transformations
      - universal-properties-and-the-yoneda-lemma
  - part: limits-and-adjunctions
    title: "Limits and adjunctions"
    pages:
      - limits-and-colimits
      - adjunctions-units-and-counits
      - ends-coends-and-weighted-limits
      - preadditive-and-additive-categories-and-biproducts
  - part: reflections-and-monads
    title: "Reflections, adjoint functors and monads"
    pages:
      - reflective-subcategories-and-the-adjoint-functor-theorems
      - monads-comonads-and-their-algebras
      - abelian-categories
      - monadicity-and-becks-theorem
      - kan-extensions-density-and-the-free-cocompletion
      - subobject-lattices-generators-and-the-grothendieck-axioms
      - monoidal-categories-and-monoidal-functors
      - exactness-and-the-member-calculus
      - strictification-and-mac-lanes-coherence-theorem
      - closed-monoidal-categories-and-the-internal-hom
      - the-diagram-lemmas-in-an-abelian-category
---

## categories-and-yoneda

A category is objects, arrows and composition, and the point of the definition is that
sets, groups, rings, vector spaces, modules, spaces and posets all satisfy it. Functors and
natural transformations make constructions and comparisons themselves objects of study, and
the Yoneda lemma says an object is determined by the arrows into it, which is what turns a
universal property into a definition.

## limits-and-adjunctions

Limits and colimits specify an object by all arrows to or from a diagram, so products,
equalisers, pullbacks and their duals become instances of one universal construction.
Adjunctions express the same economy for functors, and ends, coends and weighted limits
extend it to bifunctors and naturality. The added page shows how this universal language
becomes additive: preadditive categories identify hom-sets with abelian groups, biproducts
force the needed enrichment, matrix calculus organises maps between finite biproducts, and
kernels and cokernels recover finite limits and colimits. Additive functors and idempotent
completion then supply the standard structural consequences.

## reflections-and-monads

Reflective subcategories and the adjoint functor theorems explain when completeness and
size hypotheses force left adjoints, while monads, comonads, and Beck turn adjunction
data into algebraic and cocompletion structure. Abelian categories add kernels,
cokernels, subobjects, Grothendieck axioms, exactness, and diagram lemmas, while
monoidal categories organize tensor products and coherence. Strictification replaces
every monoidal category by a monoidally equivalent strict one. The added closed page then
makes tensoring representable: internal homs encode maps out of tensor products,
symmetric closure identifies left and right versions, cartesian and locally cartesian
closure recover exponentials and pullback-right-adjoint criteria, and subobject
classifiers represent monomorphisms in `Set` and presheaf examples.
