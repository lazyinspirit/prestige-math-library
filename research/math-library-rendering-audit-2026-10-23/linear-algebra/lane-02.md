# Linear Algebra rendering review — lane 02

## Scope and method

Reviewed all 75 assigned frozen source snapshots and their local HTML renders. Opened all 92 assigned PNG tiles individually at original resolution. Source and HTML digests match the assignment manifest. This is a local preview review and makes no production-route claim. Inline SVG math output was counted as formula rendering, not as authored diagrams; no TikZ or diagram markup was present in the assigned snapshots.

## Confirmed rendering defects

1. `def-operator-norm-on-a-finite-dimensional-inner-product-space`, title, source line 4: `max_{||v||=1} ||Tv||` renders with literal underscores and braces. The definition body typesets the corresponding maximum. Suggested repair: wrap the title expression in inline math delimiters. Tile: `screenshots/def-operator-norm-on-a-finite-dimensional-inner-product-space--01.png`.

2. `fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field`, Refutation, source line 50: the standalone `[L2, algebra]` annotation is visible as literal text between the equation and proof step 2.1. Suggested repair: remove the standalone line or use supported proof markup. Tile: `screenshots/fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field--01.png`.

## Diagram candidate

`prop-complete-invariant-flags-and-upper-triangular-matrices`, source lines 31–32 — editorial and uncertain, not a defect. Consider a compact nested flag and adapted-basis schematic: `0=V_0 ⊂ V_1 ⊂ … ⊂ V_n=V`, `dim V_j=j`, and `T(V_j)⊆V_j`; next to it, show an adapted basis and the matrix `[T]_B` with entries below the diagonal set to zero. Check that the jth matrix column has no nonzero entries below row j. The source supports all labels and relations.

## Coverage and hashes

Coverage includes 75 items and 92 individually viewed screenshot tiles. Each coverage entry in `lane-02.json` records the frozen snapshot SHA-256, local HTML SHA-256, every tile path and its SHA-256, and whether the item was clean or had a confirmed rendering defect. Assignment source and HTML hashes matched for all items.
