# Lane 09: proper hypercover and Hodge spectral sequence

## Scope and evidence

Reviewed only the assigned item, its bound current snapshot, and its five local screenshot assets. The snapshot SHA256 matches the assignment and current source (`ec1e61b3…44f40b`). All five screenshots were inspected at original resolution; the render receipt reports no KaTeX errors or diagram failures. No item content was edited.

## Assessment

Classification: **uncertain; optional diagram opportunity**. The proof already explains the face pullbacks, simplicial identities, spectral sequence, and weight bound. A compact picture could clarify the augmentation and index conventions, but cannot express the identities’ verification and is not needed to validate the proof.

If added, the diagram should show the augmented simplicial object

```text
Y₀ ⇐⇐ Y₁ ⇐⇐⇐ Y₂ ⇐⇐⇐⇐ Y₃ ⇐ ⋯
 ↓
 Y
```

with every `Yₚ` smooth projective, and a first-quadrant `(p,q)` array labelled
`E₁^{p,q}=H^q(Yₚ; Q) ⇒ H^{p+q}(Y; Q)`. On each fixed total-degree diagonal,
`p+q=n`; the Hodge filtration identification is
`Gr^W_q H^n ≅ E₂^{n−q,q}`, so `p=n−q≥0` gives `q≤n`.

## Mathematical checks

- For face maps `dᵢ:Yₚ→Yₚ₋₁`, degeneracies `sᵢ:Yₚ→Yₚ₊₁`, and rightmost-first composition, the standard simplicial identities are `dᵢdⱼ=dⱼ₋₁dᵢ` (`i<j`), `sᵢsⱼ=sⱼ₊₁sᵢ` (`i≤j`), and the three face-degeneracy cases. Pullback reverses arrows and yields the cosimplicial maps. The alternating face sum squares to zero by the face identities.
- The induced `d₁` has bidegree `(1,0)`, from `E₁^{p,q}` to `E₁^{p+1,q}`. Higher `dᵣ` have bidegree `(r,1−r)`.
- The total degree is `p+q`; the item uses this consistently, and [F2] states that each total diagonal is finite. [F3] gives `Gr^W_q H^n≅E₂^{n−q,q}` and `p=n−q≥0`, which proves the stated upper weight bound.
- No mismatch was found in the item’s face/degeneracy or total-degree indexing. The identities are checks on the simplicial structure and should not be represented as if a drawing proved them.

Full provenance, hashes, and proposed diagram labels are recorded in `lane-09.json`.
