# Frontier-22 published section and zero-bundle audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle` | `f6dee641699da132c13e3abd1c2acb177a802bcbf9e7caef4ac6fb6e7795d77f` |
| `prop-the-zero-section-is-a-smooth-embedding` | `1fa15b0a3a7ad769bf63d4200a567b3fa3f759afa1f30169fed40dd7d76714a1` |
| `def-smooth-section-local-section-and-support` | `9bff6f787781a119e1c16dc6dd842eded3040a8c2d7889aa46005fc32351fafe` |

All three complete items and their exact local-trivialization/embedding
interfaces were read. Their alias lists are empty or absent. The complete
ledger was searched by every exact ID and by smooth/local section, zero
section, support closure, compact support and zero-slice embedding mechanisms.
None had a classification row or item-specific finding.

## Bounded dispositions

The smooth vector-bundle definition correctly combines a smooth fibre bundle,
finite-dimensional real vector-space fibres and fibrewise-linear local
trivializations. Rank, fibre and global triviality use those same data.

In one bundle chart, the zero section is `p -> (p,0)`. It is smooth and has
injective differential, and its slice is an embedded submanifold. Globally it
is injective and its inverse on its image is the restriction of the continuous
projection `pi`, since `pi o 0_M=id_M`. Thus the local slice calculation proves
the stated global smooth embedding; the omitted repetition of the left-inverse
sentence is a correct implicit use of the displayed bundle data.

A smooth section and a local smooth section are maps over the relevant
identity. The support is the closure of the nonzero locus relative to the base,
and “compactly supported” is equivalently the compactness of that closure. The
zero vectors are supplied fibrewise by the vector-bundle definition and the
zero section is smooth by the preceding proposition. Empty-base and rank-zero
cases remain coherent.

Classification: three new bounded no-repair-needed dispositions. These are the
exact section/support clauses used by current connection drafts. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the three complete targets and the exact local bundle
interfaces above. It does not certify every compact-support or connection
consumer. No external source was newly consulted, no published item was edited,
and no independent judgment or exhaustive discovery claim is made.
