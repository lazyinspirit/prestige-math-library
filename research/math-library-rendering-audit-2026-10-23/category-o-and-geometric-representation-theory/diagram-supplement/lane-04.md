# Category O diagram supplement — lane 04

## Review

Reviewed all 26 assigned items against their frozen source snapshots, bound source hashes, and original local revision-2 screenshot receipts (56 tiles total). Every source hash and tile receipt matched. All 26 receipts report `tikz_count: 0` and no diagram failures; no existing TikZ mathematics required a separate correctness check.

## Potential diagram candidates

These are optional editorial aids, not confirmed defects. No proof depends on a diagram.

- **Nilpotent pyramid:** [definition lines 40–53](../snapshots/def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character.md) define column-major box labels, the left-neighbor nilpotent action, and column-difference grading. A labeled partition can display those conventions and a few centralizer indices. Check arrow direction, degree signs, and centralizer index bounds.
- **Proper-surjection descent:** [statement and proof lines 25–27, 47–51](../snapshots/lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves.md) use the augmented Cech nerve and contract its stalk row by inserting a selected point. A nerve/stalk-row diagram can show face deletion, the cochain arrow direction, and first-coordinate insertion. Check the alternating-face signs and avoid suggesting the fiber is acyclic.
- **Bicosimplicial totalization:** [statement and proof lines 30–36, 50–58](../snapshots/lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization.md) compare the full bidegree grid with its diagonal and use degree-dependent signs. A lattice diagram can display total-degree diagonals, the p=r diagonal, comparison maps, and signed differentials. Check signs and avoid implying termwise equivalence.
- **Springer moment map:** [statement and proof lines 50–56, 128, 132](../snapshots/lem-pa36-nilpotent-normality-and-springer-functions.md) define the incidence presentation of $T^*X	o N$ and establish singleton geometric fibers only over the regular nilpotent orbit. An incidence/projection diagram can distinguish the open orbit from the boundary. Check quotient well-definedness, projection direction, properness, and the limited scope of the fiber claim.

The machine-readable ledger includes exact frozen source lines, hashes, and original local screenshot paths: [lane-04.json](lane-04.json).
