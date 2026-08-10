
## Your cluster — `cat-foundations`: size and class hygiene in category theory

Page: `categories-functors-and-natural-transformations` (A, 60 items).

**This page had seven fatal defects, more than any other in the run, and every
one of them was about size, class hygiene, or ill-typed notation.** That is
exactly where a category-theory page fails and exactly what no gate can see. The
independent reader repaired all seven and explicitly stated its report "describes
the pre-repair text and does not certify the repair." You are the certification.

The page's foundation is ZFC, and `rem-category-theory-class-and-size-conventions`
is the item that fixes what a proper-class-sized assignment is allowed to mean.
**Read that remark first and hold every other item to it.** The library's own
`def-function` makes functions sets.

**F7-01 — `def-category` was ill-typed.** It allowed `Ob(C)` and `Mor(C)` to be
proper classes while calling `dom`, `cod`, identities and composition
"functions". The repair adds the conventions remark as a dependency and says a
map with proper-class domain is a **definable class-function schema** reducing to
an ordinary function on a set domain. Check: is that actually enough to state the
category axioms? Composition is a partial binary operation on a proper class —
does the repaired text say what *that* means as a schema? Is the reduction clause
("reduces to an ordinary function on a set domain") true as stated, or does it
need local smallness it does not have?

**F7-26 — `def-functor-category` was over-large.** `[C,D]` was formed for
arbitrary `C`. If `C` is large, a functor's assignments are proper-class schemas,
not sets, so they cannot be objects of another category without the `CAT`-style
higher-size construction the conventions remark **explicitly refuses**. The
repair restricts the real construction to a **small** source and marks
large-source notation as metatheoretic shorthand. `def-natural-isomorphism` is
now defined intrinsically by a two-sided inverse natural transformation for
arbitrary categories, and identified with an isomorphism in `[C,D]` only when the
small-source functor category exists.

Check every downstream consumer for a surviving large-source use:
`prop-natural-isomorphisms-are-componentwise-isomorphisms`,
`prop-size-of-functor-categories`,
`def-equivalence-and-adjoint-equivalence-of-categories`,
`prop-equivalence-of-categories-is-an-equivalence-relation`,
`thm-every-equivalence-can-be-made-an-adjoint-equivalence`,
`thm-interchange-law-for-natural-transformations`,
`def-strict-two-category`, `thm-small-categories-form-a-strict-two-category`,
`def-diagram-in-a-category`, `ex-quivers-as-a-functor-category`.
A single one that still forms `[C,D]` for a large `C`, or that quantifies over
all natural transformations between two large-source functors as a set, reopens
the defect. Also check "small" is used consistently — small vs locally small are
different and the page has both.

**F7-03 — `prop-category-isomorphisms-are-bijective-on-objects-and-morphisms`
had a set/class domain mismatch.** It quantified over possibly-large categories
while its only inverse-map citation,
`thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`, is about
**set functions**. It also spoke of an isomorphism "in the category of
categories", which the page's convention declines to form. The repair states the
large case via bijective definable class maps and defines "isomorphism of
categories" intrinsically by a two-sided inverse functor. Check the class-map
version of the two-sided-inverse theorem is actually **proved or licensed**
somewhere and not merely asserted by analogy, and that the intrinsic definition
is used consistently by anything citing this proposition.

**F7-02 — `def-comma-slice-and-coslice-categories` was ill-typed.** A comma
category needs two functors into a common codomain; the original wrote
`(1_C ↓ C)` with the **object** `C` in a functor position. The repair introduces
the terminal category `1` and a selector functor `Δ_C : 1 → C`. Check the object
and morphism equations written out in both slice and coslice actually match the
comma-category definition instantiated at those functors, and that the direction
(slice over vs coslice under) is not swapped.

Also verify `fs-every-category-is-locally-small` is a genuine false-statement
item whose refutation is correct, and that
`lem-choice-splits-essential-surjectivity-over-a-small-target` and
`cor-full-faithful-essentially-surjective-small-target-characterises-equivalence`
state their Choice use and their smallness hypothesis honestly in the **title**
as well as the Statement.

Read every one of these in full:

- `rem-category-theory-class-and-size-conventions`
- `def-category`
- `def-small-locally-small-and-large-category`
- `def-functor-category`
- `def-natural-isomorphism`
- `prop-natural-isomorphisms-are-componentwise-isomorphisms`
- `prop-size-of-functor-categories`
- `prop-category-isomorphisms-are-bijective-on-objects-and-morphisms`
- `def-comma-slice-and-coslice-categories`
- `def-equivalence-and-adjoint-equivalence-of-categories`
- `prop-equivalence-of-categories-is-an-equivalence-relation`
- `thm-every-equivalence-can-be-made-an-adjoint-equivalence`
- `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`
- `lem-choice-splits-essential-surjectivity-over-a-small-target`
- `cor-full-faithful-essentially-surjective-small-target-characterises-equivalence`
- `def-strict-two-category`
- `thm-small-categories-form-a-strict-two-category`
- `fs-every-category-is-locally-small`
