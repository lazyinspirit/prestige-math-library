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
  - part: reflections-and-monads
    title: "Reflections, adjoint functors and monads"
    pages:
      - reflective-subcategories-and-the-adjoint-functor-theorems
      - monads-comonads-and-their-algebras
      - monadicity-and-becks-theorem
---

## categories-and-yoneda

A category is objects, arrows and composition, and the point of the definition is that
sets, groups, rings, vector spaces, modules, spaces and posets all satisfy it. Functors and
natural transformations make constructions and comparisons themselves objects of study, and
the Yoneda lemma says an object is determined by the arrows into it, which is what turns a
universal property into a definition.

## limits-and-adjunctions

Limits and colimits specify an object by all the arrows to or from a diagram, so products,
equalisers, pullbacks and their duals become one construction with one uniqueness argument.
An adjunction pairs two functors through a natural bijection of hom-sets, equivalently
through a unit and counit satisfying the triangle identities, and left adjoints preserve
colimits while right adjoints preserve limits.

## reflections-and-monads

A reflective subcategory has an inclusion with a left adjoint, and the adjoint functor
theorems say when preservation and size give a functor an adjoint. Every
adjunction induces a monad and a comonad, and the monad's algebras measure how much of the
adjunction it remembers. Beck's theorem says when nothing is forgotten: every algebra is a
canonical coequalizer of free ones, split coequalizers are absolute, and the comparison
functor is an equivalence exactly when the right adjoint creates coequalizers of the pairs
it sends to split ones, with strict and reflexive variants. It shows groups, rings, modules,
models of finitary algebraic theories and, through the ultrafilter monad, compact Hausdorff
spaces are algebraic over sets, and the contravariant power-set functor monadic.
