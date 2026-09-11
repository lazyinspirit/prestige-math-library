# Frontier-22 published choice-contract reconciliation

Date: 2026-09-11

## Scope and deduplication

This follow-up rechecks the one existing classification for
`def-relative-projectivity` against the repository's explicit Axiom of Choice
contract rule. The complete target has SHA-256
`4e2746586b5e4b8d3c6df94e31513d561acb7bba44f9a7664830b949e2aefcaa`.
Published suppliers `def-axiom-of-choice`,
`cor-every-vector-space-has-a-basis` and
`thm-projective-module-characterizations` have respective SHA-256 hashes
`9c045248c142fcf687fdc3c5d25d8b3890ac08d1eca8b4e6d71bb00a4eb6ff58`,
`947a554c3833cad8957a0b67be328ea8e532eb10282771dfc298f0ac16eafce0`
and `a46bf9511cf7308a094cd33e5974cd16c0230b0eaa6c3509670116ba0b924b88`.

Before changing the index, the exact item ID, the `H=1` comparison, basis
selection, free-summand argument, AC declaration mechanism and all three
supplier IDs were searched across the whole canonical ledger and every
classification section. The item had exactly one bounded-clear row and its
earlier U-C history was prose only. This correction moves that one row to A-P;
it does not add a duplicate or a second defect.

## Exact contract defect

The definition's main relative-projectivity clause is choice-free. Its next
paragraph separately states, “Assuming the Axiom of Choice,” and proves that
relative `1`-projectivity equals ordinary projectivity by choosing a basis of
an arbitrary-dimensional vector space and using the free-summand
characterization. The mathematical implication under AC is sound and the two
published algebra suppliers are adequate.

The front matter nevertheless declares only `def-projective-module` and
`thm-projective-module-characterizations`. It omits `def-axiom-of-choice` and
the direct basis supplier. `CLAUDE.md` rule 11 is specific: when a proof needs
AC, the item must state it in the contract, identify the exact use, declare
`def-axiom-of-choice`, and propagate the assumption to consumers. Therefore
the adequate-implicit-supplier rule does not make this missing axiom contract
optional. Add `def-axiom-of-choice` and
`cor-every-vector-space-has-a-basis` to the dependency contract while retaining
the paragraph's explicit AC qualification. No theorem statement or new Phase-2
pair is needed.

Classification: bounded clear to A-P, preserving the initial U-C finding and
the intervening clear disposition as audit history.

## Current frontier impact

The current Green examples that actually use the relative-`1` comparison,
`ex-green-correspondence-for-a-trivial-intersection-subgroup` and
`ex-green-correspondence-identity-boundaries`, both declare
`def-axiom-of-choice` and explicitly retain AC in their assumptions. The
definition `def-green-exceptional-intersection-families` uses only the
choice-free defining clause. Thus this published contract repair is not a
current frontier mathematical blocker.

## Limits

This is an item-contract and exact-use audit, not a full transitive audit of
relative projectivity or the Green correspondence. No published or draft item
was edited, no external source was newly consulted, and no independent judgment
or exhaustive discovery claim is made.
