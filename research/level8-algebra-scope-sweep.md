# Level-8 algebra — step 10b, scope-denial sweep of the published corpus

Run 2026-07-28 by the orchestrator. Method per `LEVELS.md` §10b: grep the
published corpus — **items and page summaries both** — for claims that the
library does not contain something, then check each against what level 8 adds.

Level 8 adds, at orders 22 / 42 / 68: divisibility in $\mathbb{Z}$, absolute
value, gcd, Bézout, the Euclidean algorithm, coprimality, lcm; rings, subrings,
integral domains, division rings, the quaternions, ordered rings, ring
homomorphisms, product and function rings, characteristic; vector spaces, linear
subspaces, span, sums and internal direct sums.

## Result: NO published claim is falsified by level 8.

35 candidate scope denials matched the §10b phrase list across published items
and all page summaries. Every one was read. The classes:

- **Topology and analysis denials** (the large majority): separability, first
  countability, uniform convergence, metrizability, ordinal arithmetic, algebra
  of limits at $\pm\infty$, Bolzano–Weierstrass, Abel's theorem, the Hilbert
  transform. Level 8 touches none of them.
- **`ex-p-adic-ultrametric`** — "the general $p$-adic absolute value is not
  available here" because it needs Euclid's lemma. **Still true**: primality and
  Euclid's lemma are order 24 (`primes-and-the-fundamental-theorem-of-arithmetic`),
  which is NOT in this level. Note the wording is scoped to *this item* rather
  than to the library, so it will stay true even after order 24 lands. Worth
  copying that habit.
- **`library/linear-algebra/vector-spaces-and-subspaces.md`** — "what this page
  does not develop: linear independence, bases, dimension". True: those are
  order 70. This is level 8's own page, and the claim is correctly scoped.

## Two published obligations aimed AT this level — both discharged

1. **`thm-division-algorithm-in-z` (order 20, published):** *"This is not a theory
   of divisibility. The relation $b \mid a$ is defined here for use on this page
   and its companion; … that page must record that its general divisibility in a
   ring restricts on $\mathbb{Z}$ to the relation defined here, rather than
   introduce a second notion silently."* The page-20 summary repeats it.

   **Discharged by `def-divides-in-z`**, which declares
   `thm-division-algorithm-in-z` as a dep and says outright: "This is the relation
   the library already has, not a second one … the definition above is that
   relation verbatim and the two usages agree everywhere … this is that page, and
   this item records the agreement."

2. **`thm-division-algorithm-in-z` Remarks:** *"The version for $b \ne 0$, with
   $0 \le r < |b|$, follows once absolute values are in hand."*

   **Delivered by `cor-division-algorithm-nonzero-divisor`** (order 22), exactly
   in that form, over `def-int-abs`. The published claim said "none is available
   at this point in the reading order", which is scoped to order 20 and remains
   true; the promise is fulfilled rather than falsified.

## One OPTIONAL amendment, for the owner — not applied

`thm-division-algorithm-in-z` now promises a result the library proves, with no
link to it. Adding a pointer would be a courtesy to the reader, not a correction:
nothing it says is false. It is left unapplied because touching a published item
clears `verification.audited` and forces a re-audit, which is not worth spending
on a non-defect without the owner's say-so. If approved it lands in the
publishing commit per §10b, never before.

## Re-grep discipline

§10b requires re-grepping any file repaired here, because a level-8 fix once
corrected one sentence and left the same falsehood sixteen lines away. **No
published file was repaired in this sweep**, so no re-grep was owed.
