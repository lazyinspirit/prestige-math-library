# Step 5b published complex class-function inner product repair

`def-standard-inner-product-on-complex-class-functions` cited
`def-sum-over-a-finite-index-set` for the displayed sum of complex numbers,
but that supplier defines finite sums only for real or natural summands.
`def-finite-sum-in-a-commutative-monoid` defines finite sums for arbitrary
commutative monoids, so it applies to the additive monoid of $\mathbb C$.

The owner claimed the published item at pre-edit guard
`ab8a211cc9940937565419db92da6e39a5719d031592a62e23c71a2eb2c02c0d`
and replaced exactly that dependency and citation. The complex-valued pairing
formula and its Hermitian/positive-definite properties are unchanged. The
current guard is
`7f23f02b4a70822a831b21adfe5978ed54fff787487a2011daf5d0302ab11773`.
The shared plan entry now declares the same supplier. The old audit and judge
stamps were removed; the exact Step-5b published-repair handoff is recorded.

All ten current direct item consumers were checked against the unchanged
pairing formula and finite-group hypotheses. Their current hashes, exact body
anchors, consumed clauses and individual dispositions are in
`research/frontier-35-ten-categories-step5b-standard-inner-direct-uses.jsonl`.
No consumer Statement or Definition needs a repair. In particular the batch-1
additive-character lemma already cites the arbitrary-monoid finite sum for its
complex-valued summands. `rendercheck` passes the repaired item. Independent
publication certification remains pending.
