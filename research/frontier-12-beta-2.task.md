## Batch 2 of run `frontier-12` — filtration and exactness

Two A/B pairs. You own all four pages, and you author them at step 5.

### Pair A — composition series

| | |
|---|---|
| A page | order **66** · `composition-series-and-solvable-groups` · "Composition Series, the Jordan–Hölder Theorem and Solvable Groups" · `abstract-algebra` |
| B page | order **67** · `composition-series-and-solvable-groups-examples` |
| requires | `conjugacy-and-simplicity-in-the-symmetric-groups` (64), `group-homomorphisms-and-the-isomorphism-theorems` (36), `cyclic-groups-and-direct-products` (38) |
| prose scaffold | `research/plan-algebra-track-expansion.md` |

Subnormal and normal series, refinements, the Zassenhaus (butterfly) lemma,
Schreier refinement, Jordan–Hölder, composition factors, derived series, solvable
and nilpotent groups, the upper and lower central series, solvability of groups
of small order, insolvability of `A_5` and hence `S_n` for `n ≥ 5` if you can
reach it from `conjugacy-and-simplicity-in-the-symmetric-groups`.

Zassenhaus and Schreier are exactly the kind of intermediate machinery the owner
means by "build it": Jordan–Hölder without a proved refinement theorem is a
statement resting on air.

### Pair B — free modules and exact sequences

| | |
|---|---|
| A page | order **104** · `free-modules-and-exact-sequences` · "Free Modules, Exact Sequences, Projective and Injective Modules" |
| B page | order **105** · `free-modules-and-exact-sequences-examples` |
| requires | `modules-and-module-homomorphisms` (102), `the-determinant-of-a-linear-operator` (84), `order-zorn-and-the-axiom-of-choice` (10) |
| prose scaffold | `research/plan-algebra-track-expansion.md` |

Free modules and bases, the universal property, rank and its failure to be
well-defined over a general ring, exact sequences, short exact sequences, the
splitting lemma, the five lemma and snake lemma if in scope, projective and
injective modules, Baer's criterion, enough projectives/injectives.

`order-zorn-and-the-axiom-of-choice` is in your closure and you will need it —
be explicit about **where** choice is used, and scope it (AC vs countable/
dependent choice), since the library tracks that distinction.

### Why these two are in one batch

Both are filtration-and-exactness theory: a composition series is a filtration
with simple factors, a short exact sequence is a two-step filtration, and the
Jordan–Hölder and splitting arguments rhyme. Read them together; the sources
overlap heavily (Dummit & Foote, Rotman, Lang, Hungerford).

The two pairs have **no dependency edge** on each other and neither may cite the
other's items — 66 and 104 are not in each other's `requires` closure, and
`validate-plan` fails such a citation as `undeclared-prereq`.
