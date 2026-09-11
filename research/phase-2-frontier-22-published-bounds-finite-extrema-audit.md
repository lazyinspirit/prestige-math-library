# Frontier-22 published bounds and finite-extrema audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-bounded-set` | `fc31bfa13123c64f752b7d40b35ffce14091a7ae269f96303669c40f89240f8d` |
| `def-max-min` | `d685ad0eb99f550e9cde0cc08274cb2bb185e5203eeffbc4c400e697f5864ffa` |
| `lem-finite-set-has-max` | `95612c8f12dbeba0a982531232a3010bce73f6a1e5cf1a47a41db0becb2e2975` |
| `lem-finite-subsets-listable` | `41f4b13fb367940cd596a7133a419f9c9b288bd03c1295a48c6072cd2b122379` |

All four complete items were read. Before classification, each exact ID was
searched in the complete canonical ledger and in every classification section.
The aliases and mechanisms searched included lower/upper bounds, empty-set
boundedness, greatest/least elements, finite-set extrema, finite/listable
equivalence, the stated stipulation and its later discharge, and the apparent
cross-reference cycle. None of the four IDs had a classification row or an
item-specific defect finding. Existing mentions are supplier checks in other
bounded audits and do not classify these targets.

## Bounded dispositions

The lower-bound, bounded-below and bounded definitions are the exact order
duals of the already fixed upper-bound clauses. The quantifiers correctly make
the empty set bounded while not assigning it a supremum, infimum, maximum or
minimum. The maximum/minimum definition includes membership, and antisymmetry
proves uniqueness.

The finite-extrema proof establishes the exact list-form statement by induction:
a singleton has both extrema, and adjoining one real replaces each old extremum
only when the new entry is larger or smaller. Totality and transitivity cover
ties and duplicate entries.

The later listability lemma proves, independently of extrema, that every
nonempty set equinumerous with a natural is the image of one successor natural,
and conversely that every such finite list is finite. The successor step extends
one explicit bijection after testing membership; it does not choose from a
family. Only after that equivalence is proved does the page invoke the earlier
list-form extrema theorem for its consequence.

The two pages therefore have no circular mathematical proof. The earlier
extrema item records the later equivalence under `justified_by`, while the later
item lists the earlier list-form theorem as a dependency. This is the precise
well-definedness-discharge pattern sanctioned by `SCHEMA.md`; the dependency
checker deliberately excludes `justified_by` from prerequisite cycles and
verifies that the discharge target depends back on the item.

Classification: four new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies the four complete targets and the exact finite/listable
bridge. It does not certify arbitrary downstream uses of boundedness or finite
extrema. No external source was newly consulted, no published item was edited,
and no independent judgment or exhaustive discovery claim is made.
