# Complex Analysis lane 08 rendering review

## Coverage

Reviewed all 140 assigned items and all 256 local screenshot tiles individually at original resolution. For every item, the assigned source, current source, and frozen snapshot SHA256 values match; the assigned and current preview HTML SHA256 values also match. Exact per-item and per-tile hashes are recorded in [lane-08.json](lane-08.json).

## Rendering findings

No confirmed LaTeX, TikZ, MathMarkdown, clipping, raw ASCII formula/caret/underscore, or reference-title leak defects were found. The earlier suspicion that a `STATEMENT` label was clipped was not confirmed: the reopened standalone original tile displays the full label. Reference titles render on intentional block lines as specified by the schema. CSS uppercase technique banners are expected; no raw math defect was found in the inspected banners.

## Diagram candidates

### thm-hankel-representation-for-reciprocal-gamma

- **Source:** lines 33–37 and 53–55 state the principal branch cut, the Hankel integral, vanishing small-circle contribution, and opposite signed ray contributions.
- **Kind:** Hankel contour around a branch cut.
- **Draw/check:** Show the negative real axis cut, the large and small arcs, arrow directions, and the lower/upper ray terms `e^(πiz)Γ(1−z)` and `−e^(−πiz)Γ(1−z)`. Verify the orientation and the small-circle limit for `0 < Re z < 1`.
- **Status:** Optional source-backed candidate; no diagram defect asserted.
- **Evidence:** `screenshots/thm-hankel-representation-for-reciprocal-gamma--01.png`.

### thm-riemann-hurwitz-formula

- **Source:** lines 54–58 and proof lines 90–100 describe triangulating the target with branch values at vertices, lifting through a degree-`d` covering away from those vertices, and the vertex defect `Σ(e_x−1)`.
- **Kind:** Branched covering with lifted triangulation.
- **Draw/check:** Show target faces with at most one marked branch vertex, their lifts under `f`, local `z ↦ z^e` behavior at a ramified vertex, and the cell-count correction. Check that the correction gives `χ(X)=dχ(Y)−Σ(e_x−1)`, equivalent to the displayed genus formula.
- **Status:** Optional source-backed candidate; no diagram defect asserted.
- **Evidence:** `screenshots/thm-riemann-hurwitz-formula--01.png` through `--04.png`.

### ex-annulus-harmonic-measure-of-boundary-circles

- **Source:** lines 44–51 and 77 specify the round annulus, its two boundary circles, and the logarithmic-radius harmonic measure formulas.
- **Kind:** Concentric annulus with radial harmonic measure.
- **Draw/check:** Show `C_r`, `C_R`, and an interior point `z` with `r < |z| < R`; label each boundary with its complementary logarithmic distance divided by `log(R/r)`. Check the limits at both boundary circles and that the two weights sum to one.
- **Status:** Optional source-backed candidate; no diagram defect asserted.
- **Evidence:** `screenshots/ex-annulus-harmonic-measure-of-boundary-circles--01.png` and `--02.png`.

## Existing diagrams and Scratch

No TikZ/TikZ-cd or equivalent diagram blocks occur in the assigned item sources, so there were no existing diagram maps, orientations, indices, signs, or labels to check. No assigned item has a Scratch section.

## Limitations

The review used local snapshots, preview HTML, and PNGs only; no live website or HTTP(S) requests were accessed. All source, snapshot, and preview hashes match. Candidate diagrams are optional and do not assert a mathematical defect.
