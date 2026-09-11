# Frontier-22 published supplied-projective Ext audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-ext-via-a-projective-resolution-of-the-first-variable` | `298cbcf9149235fd0081cb26101c9f149fe64953814a399fc036defe6c80d2d9` |
| `def-supplied-projective-resolution-datum` | `459ac6169992d4ad4725e7a73629948871a914c82ffbdaa56c9ef7abd1d70668` |

Both complete definitions and their exact abelian-category interfaces were
read. Neither file declares aliases. The complete ledger was searched by both
exact IDs and by supplied resolution datum, objectwise choice, Hom cochain
differential, resolution independence and subscript-recording mechanisms.
The Ext definition occurs only as a supplier in existing findings; neither ID
had a classification row or an item-specific defect record.

## Bounded dispositions

The supplied datum is explicitly extra structure assigning one displayed
projective resolution to each object of its stated domain. It does not assert
that all objects admit resolutions or that simultaneous choices exist
canonically, so it imports no unstated choice principle.

For one supplied resolution `P`, precomposition with
`d_P:P_(q+1)->P_q` sends `Hom(P_q,N)` to `Hom(P_(q+1),N)`, and two successive
cochain differentials vanish because the two resolution differentials
compose to zero. Its cohomology therefore defines `Ext_P^n`. The subscript and
closing sentence expressly retain dependence on the supplied datum and make no
projective/injective or different-resolution identification. Those comparisons
remain separate theorems with their own choice contracts.

Classification: two new bounded no-repair-needed dispositions. This is the
exact fixed-resolution interface used by the current UCT repair route. It does
not erase the separately recorded well-definedness and balanced-Ext debt in
the published UCT consumer. No current Step-5 blocker, new Phase-2 supplier or
new pair was found.

## Limits

This pass certifies only the two complete definitions and their fixed supplied-
resolution clauses. It does not certify resolution independence, balanced Ext,
injective comparison or every consumer. No external source was newly
consulted, no published item was edited, and no independent judgment or
exhaustive discovery claim is made.
