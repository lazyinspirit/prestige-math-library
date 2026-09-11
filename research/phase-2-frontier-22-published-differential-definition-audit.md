# Frontier-22 published differential-definition audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-differential-of-a-smooth-map` | `588be21cff9fe3dfbc4a6f94a75a77ade8985f691873a75460392366b12b0b01` |
| `def-differential-of-a-smooth-real-valued-function` | `5b74b8eb29d2138067892069a070a19b362a574c4307d976071034c8d17d2313` |

Both complete definitions and their exact germ/derivation interfaces were read.
Both alias lists are empty. The complete ledger was searched by both exact IDs
and by pullback of target germs, tangent derivations, real-valued differential,
the real-line tangent identification and `df_p(v)`. Neither had a
classification row or item-specific finding.

## Bounded dispositions

For a smooth map `F:M->N`, pullback sends a germ at `F(p)` to a germ at `p`;
applying the source derivation is independent of representatives. The supplied
well-definedness and linearity results make the displayed rule a linear
derivation at `F(p)`, hence a tangent vector. This is the standard covariant
action on germs and needs no choice.

For a real-valued function, evaluation of a tangent derivation on the identity
coordinate canonically identifies `T_a R` with `R`; in that coordinate the
general pullback formula is `df_p(v)=v([f])`. The notation therefore matches
the linear functional on `T_pM`, including the empty-base and zero-dimensional
tangent cases.

Classification: two new bounded no-repair-needed dispositions. These are the
exact `df` clauses used by current connection definitions. No current Step-5
blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete definitions and the exact germ/
derivation interfaces above. It does not certify every chain-rule or bundle
consumer. No external source was newly consulted, no published item was edited,
and no independent judgment or exhaustive discovery claim is made.
