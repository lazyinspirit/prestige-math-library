# Frontier-22 published countability-core audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-injection-surjection-bijection` | `4bc08b74210719a72f4bea5c91a86c44f37ea612bde984350cb0def739fc928a` |
| `def-countable` | `2b247279db3517d8a7bd749fc66e4e6d81d2cee96a43f98b630f293d903e154e` |
| `lem-countable-iff-surjection-from-n` | `0b936d6dfada4a45f7a59bda61cf137d69e8f1b91dab8d3c11f71d68af6655b7` |
| `lem-subset-of-countable` | `3757def161a07638f4d675f4a48031473a08b6f85e918983316c232a60c4314d` |

All four complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. The aliases
`def-injective`, `def-surjective`, `def-bijective`, `def-finite-set`,
`def-countably-infinite` and `def-uncountable`, and the least-preimage,
increasing-enumeration, subset-countability and right-inverse/choice mechanisms
were also searched. Each alias only names its displayed target. None of the four
targets had an item-specific finding or classification row; existing exact-ID
occurrences are supplier mentions.

## Bounded dispositions

The injection, surjection and bijection clauses agree with the function/image
interfaces. The inverse discussion correctly uses uniqueness for a bijection
and explicitly refuses to infer a right inverse for an arbitrary surjection.
Thus it makes no hidden choice claim.

The countability definition consistently means at most countable and handles
the empty set as finite. The finite/countably-infinite disjointness remark is
supplied by the published pigeonhole result; the definition itself does not
need that theorem to be well formed.

For a subset of a countable set, restriction reduces to a subset of the
naturals. Strong induction proves a subset of a bounded natural initial segment
finite. For an unbounded subset, the successor map sends an element to the
least larger member, and recursion from the least member produces the strictly
increasing enumeration. The proof that this enumeration is onto, using the
least index whose value reaches a fixed target, is complete. Every selected
element is the unique least member of a definable nonempty subset of the
naturals, so no dependent or countable choice is spent.

For a nonempty countable set, a finite bijection is extended to a surjection
from the naturals by a fixed repeated value; a countably infinite bijection is
already such a surjection. Conversely, a supplied surjection defines the
injection `a -> min s^{-1}({a})`. The subset theorem then makes its image
countable. The nonempty hypothesis exactly excludes the impossible map from
the naturals onto the empty set.

Classification: four new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the four complete targets and their exact finite,
enumeration and choice clauses. It does not certify arbitrary theorems about
countable products or unions, whose choice costs remain item-specific. No
external source was newly consulted, no published item was edited, and no
independent judgment or exhaustive discovery claim is made.
