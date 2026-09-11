# Frontier-22 published ordered-field foundation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-ordered-field` | `ddd269b28beea22f0822230513bd6e52b674e7b4c99ef1941e2548a7e6d4131c` |
| `def-complete-ordered-field` | `4ab015fe555e4572204505fa1141cfd89c713967d27bee953654b5ad16084a35` |
| `def-abs-value` | `12d45beed227d9ac9f3661592d5f191133285d85b386d48cbab166c21c9430d2` |
| `lem-of-abs-value` | `f1adb01b6b45140f1356a7a157466290a595a29aab417dcffca724b47913fc78` |
| `lem-of-add-order` | `541e0db5632d42f8ec4b60b8a9219c8936a39fddc475b92f30fc508cfbdca776` |
| `lem-of-sign-rules` | `d75b43b2eec5dfc7434fcdd9e68c022e61da5fa6c5b804c428ba28de8a29b368` |
| `lem-of-mult-neg` | `18f1e1f04f0a2dfdd7ecf12403bd42009019eaa7e8eb61ff1152740fc487886d` |
| `lem-of-zero-mult` | `9bcf94be9d995a08d92097dccd745759769d071b51325e2c6d16718ed97ff52d` |
| `lem-of-inverse-unique` | `d93f88e5643c6776d7c78566906b85c67c62fffbb27f6ab642acc1d4cc3a2920` |

All nine complete targets and the current `def-field` contract were read. Every
exact ID was searched in the whole canonical ledger and in each classification
section. The alias `def-dedekind-complete-field`, positive-cone/trichotomy,
antisymmetry, multiplication-by-zero, product-sign and absolute-value
mechanisms, and the exact field/order supplier IDs were also searched. The
alias names only this complete-ordered-field item. None of the nine targets had
an item-specific finding or classification row; existing occurrences are
supplier mentions.

## Bounded dispositions

The current field definition asserts multiplication and its identity on every
field element, including zero. Its group clauses give uniqueness of both
identities and both kinds of inverse. Distributivity plus additive cancellation
then proves multiplication by zero; the two negation identities follow by
uniqueness of additive inverses. These exact clauses close
`lem-of-inverse-unique`, `lem-of-zero-mult` and `lem-of-mult-neg`.

The positive-cone trichotomy and closure axioms induce the stated strict total
order. Translation preserves a positive difference, and two strict
inequalities add because the cone is additively closed. Cone multiplication and
the negation identities prove all product-sign cases. The reverse directions
of multiplication monotonicity follow from trichotomy: equality contradicts a
strict product inequality, while the opposite ordering gives both a difference
and its negative in the cone.

The least-upper-bound definition has the correct nonempty and bounded-above
hypotheses. For a nonempty set bounded below, applying it to the negated set
gives the stated infimum dual, and antisymmetry gives uniqueness. No element
family is selected.

The absolute-value cases cover zero and both signs. The product formula follows
from the product-sign cases and the negation identities; the interval
characterization follows by translating inequalities and reversing them under
negation. The proof's zero-product and order-translation steps have adequate
published suppliers even where an additional direct dependency edge would
improve exposition. Under the canonical adequate-implicit-use rule, those are
clear uses rather than dependency defects.

Classification: nine new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the nine complete targets and the exact current field
clauses they use. It does not certify all ordered-field arithmetic or the many
downstream consumers. It does not reclassify the field definition's documented
older wording repair. No external source was newly consulted, no published item
was edited, and no independent judgment or exhaustive discovery claim is made.
