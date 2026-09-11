# Frontier-22 published finite-cardinality audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Prior index state |
|---|---|---|
| `lem-pigeonhole` | `a09450782d4faac7726a5a9770d836ce1473669d6cc53bbc2d505a9f2ea95f69` | U-P page-prerequisite row |
| `def-finite-cardinality` | `8ca319ada621a75ab63623caf585db7bdadcf32699d876beb12e8e80f743deef` | absent |

Both complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. The aliases
`lem-pigeonhole-principle` and `pigeonhole-principle`, and the transposition,
finite-size uniqueness, Dedekind-finiteness and choice mechanisms were also
searched. The sole prior row is the U-P entry for `lem-pigeonhole`, labelled
“7.2 Page prerequisites, DC, and B-leaf repairs.” That section requests adding
the lemma's page as an ordinal-page prerequisite; it does not identify a defect
in the lemma. The exact audit therefore moves that one row to clear rather than
adding a duplicate.

## Bounded dispositions

The pigeonhole induction normalizes a hypothetical injection from the next
successor by one explicit codomain transposition, then restricts away from the
top value to contradict the inductive hypothesis. Restriction gives the
smaller-domain consequence. The same sharp case rules out a bijection between
the naturals and a finite initial segment, proves distinct naturals are not
equinumerous, and proves a natural is not equinumerous with a proper subset.
The only witness chosen is one element of one fixed nonempty finite difference;
no choice principle is needed.

For a finite set `A`, existence of a natural `n` equinumerous with `A` is the
definition of finiteness. If two naturals are equinumerous with `A`, inverse and
composition give a bijection between them, and the pigeonhole result makes them
equal. Thus `|A|` is a unique natural, not a selected bijection. The empty-set,
bijection-transport and equality-of-cardinalities consequences all follow with
the stated boundary cases.

Classification: the existing `lem-pigeonhole` U-P row moves to bounded clear,
and `def-finite-cardinality` is one new bounded clear. No current Step-5
blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete targets and their exact finite-size
and choice clauses. It does not certify later cardinal arithmetic or every
finite counting consumer. No external source was newly consulted, no published
item was edited, and no independent judgment or exhaustive discovery claim is
made.
