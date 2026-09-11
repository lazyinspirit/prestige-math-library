# Frontier-22 published natural finite-sum audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-nat-finite-sum-and-product` | `851f18926778dd8757191a07863e5854796b164652f0094b93b269e02b85b763` |
| `lem-nat-finite-sum-laws-and-the-canonical-embedding` | `7e5d77c91dd3e176cc3b5e4213e18bc11d7be22074a7e4976db68f838bf3bedd` |

Both complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. Natural-valued finite
sums/products, truncated difference, zero cases, permutation scope and
canonical-real-embedding mechanisms were also searched. Neither target has an
alias, item-specific finding or classification row.

## Bounded dispositions

Product-valued recursion carries the index with the accumulated natural sum or
product. Induction identifies the first coordinate, recursion uniqueness makes
the second coordinate single-valued, and the base values give the empty sum and
product. Truncated difference is defined by the unique additive gap when the
smaller index is below the larger and by zero otherwise; trichotomy makes the
cases exhaustive and disjoint. No value is selected from a family.

The companion lemma separately checks zero arguments before importing the
positive-natural field identities. Induction proves natural additivity,
constant sums, splitting, monotonicity, component bounds, product laws and
nonvanishing. The natural-to-real embedding preserves zero, one, sums and
products, including all zero cases, and induction commutes it with both finite
operations. Natural trichotomy plus strict order preservation proves
injectivity and the converse order implication. The lemma correctly says that
permutation invariance is outside its scope.

Classification: two new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the two complete targets and their exact recursion,
arithmetic and embedding clauses. It does not certify later finite-set sums,
permutation invariance or all counting consumers. No external source was newly
consulted, no published item was edited, and no independent judgment or
exhaustive discovery claim is made.
