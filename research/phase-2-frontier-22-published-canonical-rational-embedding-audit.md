# Frontier-22 published canonical rational-embedding audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-canonical-natural` | `fd0b22b059a0e20fcb7347170382eba39793cb1e25f87e53dc69b7e759c5a4cf` |
| `lem-of-q-embeds` | `a32385fc95c02568a322ff458a8f431f9768c1a656c64e9d2c7a7bd768a5c338` |

Both complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. Canonical-natural,
canonical-copy-of-the-rationals, rational representative independence,
signed-integer extension, characteristic and order-preservation mechanisms were
also searched. Neither target has an alias, item-specific finding or
classification row; existing exact-ID occurrences are supplier mentions.

## Bounded dispositions

The canonical natural is the unique recursion starting at the field zero and
adding the field unit. The definition correctly distinguishes a von Neumann
natural from its field image, treats zero separately before reciprocals and
does not claim injectivity in positive characteristic.

For an ordered field, positive canonical naturals are nonzero. Mapping a
positive integer to its canonical natural, a negative integer to its negative,
and a rational `p/q` to the corresponding quotient is therefore defined.
Cross-multiplication proves representative independence. The signed-integer
addition and multiplication check is compressed into one line; the published
integer ring laws and field negation identities supply the routine sign cases,
so this is a correct adequate implicit use rather than a gap. Field algebra
then proves addition, multiplication and preservation of the unit on rationals.
Positive numerators and denominators map to positives, which gives order
preservation, injectivity and uniqueness of the homomorphism.

Classification: two new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete targets and their exact recursion,
rational-quotient and order clauses. It does not certify every consumer that
suppresses the embedding notation. No external source was newly consulted, no
published item was edited, and no independent judgment or exhaustive discovery
claim is made.
