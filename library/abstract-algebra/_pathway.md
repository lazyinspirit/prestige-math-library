---
category: abstract-algebra
status: published
parts:
  - part: groups-and-quotients
    title: "Groups, quotients and homomorphisms"
    pages:
      - monoids-groups-and-subgroups
      - cosets-and-lagranges-theorem
      - normal-subgroups-and-quotient-groups
      - group-homomorphisms-and-the-isomorphism-theorems
      - cyclic-groups-and-direct-products
  - part: actions-and-presentations
    title: "Actions, permutations and presentations"
    pages:
      - group-actions-and-cayleys-theorem
      - symmetric-groups-and-the-sign-homomorphism
      - conjugacy-and-simplicity-in-the-symmetric-groups
      - free-groups-and-presentations
      - free-products-and-amalgamation
  - part: finite-and-solvable-groups
    title: "Finite and solvable groups"
    pages:
      - the-structure-of-finite-abelian-groups
      - composition-series-and-solvable-groups
  - part: rings-and-polynomials
    title: "Rings, ideals and polynomials"
    pages:
      - rings-subrings-and-integral-domains
      - ideals-and-quotient-rings
      - euclidean-domains-pids-and-unique-factorisation
      - polynomial-rings-and-roots
      - the-field-of-fractions-and-localisation
  - part: field-extensions
    title: "Field extensions"
    pages:
      - field-extensions-and-the-complex-numbers
      - splitting-fields
      - algebraic-extensions-degree-and-finite-fields
      - symmetric-polynomials
      - algebraic-closure-embeddings-and-separability
  - part: modules
    title: "Modules"
    pages:
      - modules-and-module-homomorphisms
      - free-modules-and-exact-sequences
      - tensor-products-of-modules
      - chain-conditions-and-semisimple-modules
      - modules-over-a-pid-and-canonical-forms
  - part: sylow-and-extensions
    title: "Sylow theory and split extensions"
    pages:
      - semidirect-products-and-automorphism-groups
      - sylow-theorems-and-nilpotent-groups
      - the-galois-correspondence
      - frattini-subgroups-and-the-burnside-basis-theorem
      - finite-fields-and-cyclotomic-extensions
      - the-fundamental-theorem-of-algebra
      - solvability-by-radicals-and-kummer-theory
      - the-group-algebra-and-representations
      - maschkes-theorem-and-complete-reducibility
      - characters-and-the-orthogonality-relations
      - induced-representations-and-frobenius-reciprocity
---

## groups-and-quotients

The naturals, the integers, the rationals and the reals were each built with their own
proofs of the same handful of facts, and a group is what those facts have in common: one
associative operation, an identity, inverses. Cosets partition a group and give Lagrange's
theorem, normality is the condition under which the cosets themselves form a group, and the
isomorphism theorems say that every homomorphism is a quotient followed by an inclusion.

## actions-and-presentations

A group acts when its elements become symmetries of a set, and the orbit-stabiliser
relation turns a question about the group into a count. Cayley's theorem embeds any group
in a symmetric group, cycle decomposition and the sign homomorphism describe permutations,
and the alternating group is simple for degree at least five. In the other direction a free
group has no relations at all, so every group is a quotient of one, which is what a
presentation and an amalgamated free product are built from.

## finite-and-solvable-groups

A finite abelian group is a direct product of cyclic groups of prime power order, and the
decomposition is unique, so the classification of that class is complete. A composition
series breaks any finite group into simple pieces, Jordan-Holder says the pieces do not
depend on the series, and solvability is the case where each piece is abelian.

## rings-and-polynomials

A ring has two operations, and the interaction between them is what the earlier number
systems kept re-proving. Ideals are the subobjects a quotient can be taken by, and the same
isomorphism theorems hold. Divisibility then generalises: a Euclidean domain has division
with remainder, every Euclidean domain is a principal ideal domain, and every principal
ideal domain has unique factorisation. Polynomial rings supply the working examples, and
the field of fractions and localisation invert what a domain lacks.

## field-extensions

Adjoining a root of an irreducible polynomial is a quotient of a polynomial ring by a
maximal ideal, which is how the complex numbers appear here rather than by decree. A
splitting field factors a polynomial completely and is unique up to isomorphism; degrees
multiply in towers, which classifies the finite fields; symmetric polynomials express what
depends on the roots but not their order; and an algebraic closure exists, with embeddings
and separability measuring how many extensions of a map there are.

## modules

A module is a vector space over a ring instead of a field, so a submodule need not be a
direct summand and dimension need not exist. Exact sequences state that failure, free,
projective and injective modules describe when it can be repaired, and the tensor product
linearises bilinear maps. Chain conditions bound it from the other side, and
Wedderburn-Artin says which rings have none. Over a principal ideal domain it disappears: a
submodule of a finite free module has an aligned basis, yielding invariant factors,
elementary divisors, Smith normal form and their uniqueness. Over the integers that
classifies the finitely generated abelian groups; over a polynomial ring it gives rational
canonical form, Cayley-Hamilton, Jordan form, and the similarity criterion.

## sylow-and-extensions

A split extension is a semidirect product, so actions assemble groups from normal pieces,
and Sylow theory turns the prime divisors of $|G|$ into existence, conjugacy, and counting
statements for $p$-subgroups. Nilpotence, the Frattini subgroup, the Galois
correspondence, finite fields, cyclotomic extensions, solvability by radicals, and Artin's
proof of the fundamental theorem of algebra show how extensions are built. Representation
theory then passes to $k[G]$-modules: Maschke gives semisimplicity, characters encode
orthogonality and central-character arithmetic, and induction adds Frobenius reciprocity,
Mackey decomposition, and Burnside's $p^aq^b$ solvability theorem.
