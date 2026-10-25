# Category Theory rendering audit — lane 05

Reviewed all **109 assigned items** and opened all **133 assigned PNG tiles** at original resolution. Exact item IDs, source hashes, screenshot paths, and screenshot hashes are in [`lane-05.json`](lane-05.json). All current source hashes match the assignment.

## Confirmed rendering defect

- [`ex-the-braid-group-on-three-strands`](../../../items/ex-the-braid-group-on-three-strands.md#L4), line 4: the title uses literal ASCII `S_3`, which the screenshot visibly displays as plain text. The body uses math notation for the same group symbol.

## Diagram review

No displayed diagram mismatch or diagram rendering failure was confirmed. I checked the two snake-data diagrams, the half nine-lemma 3×3 diagram, and the pullback square against their source claims and map labels.

One optional diagram candidate is recorded separately: a three-strand braid illustration for the Artin relation and the quotient map to `S_3`. The statement already gives these algebraically, so its absence is not a defect. The report records the crossing convention, relation, endpoint, and permutation checks a drawing would need to satisfy.

This was read-only: no item or publication status changed, and no live website or HTTP(S) was accessed.
