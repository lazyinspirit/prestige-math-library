# Topology rendering audit — lane 07

## Scope and verification

Reviewed the 94 assigned titles and complete ItemBodies from their frozen snapshots, compared each snapshot byte-for-byte with its current item source, checked all matching local HTML SHA-256 values, and opened all 180 receipt-listed PNG tiles individually with `tools.view_image` at original resolution. Tile hashes match the capture receipts; there are no missing tiles or unreviewed items. No live site was visited. No item, library, app, or publication status was changed. Full per-item hashes, receipt data, tile paths, dimensions, and view attestations are in [lane-07.json](lane-07.json).

## Findings

1. **Missing diagram — `ex-sphere-polygonal-schema`, source lines 31–36, 41–50, 98–104.** A digon with inverse edge pairing is cut into two bigons and the boundary circles are glued to recover the sphere. A paired polygon/hemisphere diagram would clarify the quotient relation and cell counts. The concrete relations are `s₁(t) ~ s₂(1−t)` and the two piecewise hemisphere formulas for `Φ` in verification step 2.1.

2. **Missing diagram — `ex-torus-polygonal-schema`, source lines 31–43, 88–96.** The square schema and quotient are the central object. A square with paired opposite edges would clarify the word `a b a⁻¹ b⁻¹`, the single vertex class, and the cell counts `V=1, E=2, F=1`. The quotient map is `f(s,t)=(p(s),p(t))` to `(ℝ/ℤ)²`, with fibres exactly the edge-pairing classes.

3. **Missing diagram — `def-connected-sum-of-compact-surfaces`, source lines 33–53.** The definition is a cut-and-glue construction. A schematic of `S\int(D_S)` and `T\int(D_T)` with boundary points identified by `φ` would make the quotient model clear; for oriented inputs, `φ` reverses the induced boundary orientations.

4. **Missing commutative diagram — `prop-covering-morphism-subgroup-criterion`, source lines 31–43.** The statement concerns a map `f` between based coverings over the same base and its projection compatibility. Show `E₁ --f--> E₂`, `p₁↓`, `p₂↓`, and `B --id_B--> B`, with the basepoint condition `f(e₁)=e₂`; relate this to `(p₁)₊π₁(E₁,e₁) ⊆ (p₂)₊π₁(E₂,e₂)`.

No confirmed LaTeX/TikZ rendering failures were found in the inspected lane. Other assigned items did not warrant a diagram flag. Mathematical proofs were not independently certified as part of this visual rendering audit.
