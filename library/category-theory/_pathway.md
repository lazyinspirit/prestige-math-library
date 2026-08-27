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
      - monadicity-and-becks-theorem
      - kan-extensions-density-and-the-free-cocompletion
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

A reflective subcategory has an inclusion with a left adjoint, and the adjoint functor
theorems say when preservation and size force such adjoints. Every adjunction induces a
monad and a comonad, and Beck's theorem tests when the comparison with Eilenberg-Moore
algebras is an equivalence. Kan extensions then generalise adjunctions and limits:
restriction along a functor sits between left and right Kan extension, comma-category and
coend formulas make Kan extensions calculable, and fully faithful functors recover genuine
extension. Density shows every presheaf as a colimit of representables, Yoneda as its own
left Kan extension, and the presheaf category as the free
cocompletion of a small category. The same language ends with codensity monads, including
the ultrafilter monad from finite sets.
