# Frontier-22 published finite-sum and recursion audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `thm-recursion` | `f94afd7ad48ea0267245bd4bd88d63c94da9c3fd70f83b0d6d976aa06ddc8e71` |
| `def-finite-sum` | `3fbdfd3af47db591becd127f1568c108038aac685915fedf8b20fee14148c943` |
| `lem-finite-sum-laws` | `55fd6629dbcf796a39950bc75ca8f43e29c9522db7075c0e975ff1009a8e2d92` |
| `def-interval` | `7ca04d0d405fcbd3e2f7e4a9d4f9d249d569febd8a8fd4ba6e9e1bdee1a84c91` |

All four complete targets were read. Every exact ID was searched in the whole
canonical ledger and in each classification section. The aliases
`dedekind-recursion`, `recursion-theorem` and `def-finite-product`, and the
finite-sum, telescoping, natural-subtraction, order-convexity and interval
mechanisms were also searched. None of the aliases names another canonical
item, and none of the four targets had an item-specific finding or
classification row; existing occurrences are supplier mentions.

## Bounded dispositions

The recursion theorem forms the least closed relation inside the set
`N times A`. Induction proves totality. Removing a hypothetical second output
at zero or at a successor preserves closure, using nonzeroness and injectivity
of successor; minimality therefore proves functionality. A final induction
proves uniqueness. The collection being intersected is a nonempty subset of a
power set defined by Separation, so the construction is set-sized and makes no
choice selection.

For real finite sums and products, recursion on the product set carries the
running index with the accumulated value. Induction identifies the first
coordinate, making the second coordinate satisfy the desired recursion, and
recursion uniqueness makes the operation single-valued. Extension of a fixed
finite list by zero or one is definable rather than selected.

The finite-sum laws use property induction whose predicate quantifies over all
input sequences and scalars. The successor calculations prove additivity,
scaling, monotonicity, telescoping and product laws, including the empty-product
positivity base. Separate induction on the trailing length proves splitting.
Splitting and nonnegative tails then prove the single-term bound and the
zero-sum conclusion. The notation `n-m` and the comparison `m<=n` omit direct
natural-order dependencies, but `def-nat-order` plus published natural addition
commutativity and cancellation give the unique gap; the published
`def-nat-finite-sum-and-product` records the same truncated-difference
convention explicitly. These are adequate implicit uses, not a proof defect.

The nine interval forms have the displayed order-convexity and boundedness.
Midpoint and repeated-halving arguments give two interior points when `a<b`;
the positive unit and field inverse laws supply the implicit division step.
The unboundedness witnesses work without Archimedeanness, and the definition
correctly distinguishes a presented endpoint length from recovery from the
underlying set.

Classification: four new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies only the four complete targets and the exact recursion,
finite-algebra and interval clauses above. It does not certify all finite-sum or
interval consumers. The natural-order and natural-finite-sum items were read
only to verify the truncated-difference interface and are not classified here.
No external source was newly consulted, no published item was edited, and no
independent judgment or exhaustive discovery claim is made.
