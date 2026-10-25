# Round 03 · lane 01

## `lem-smooth-pullback-of-multiple-test-blowups`

**Finding:** diagram opportunity warranted; classification `uncertain` (editorial aid). The bound source snapshot SHA256 `665b7a299e75a01d13b73800e8302f7267ea6033881eb8da2bdee6a026fc93c7` matches the current source hash. Exact statement and proof claims from lines 36–42 and 62–68 are recorded in `lane-01.json`.

Draw the repeated cartesian square

```text
X'_{i+1} = X'_i ×_{X_i} X_{i+1}  →  X_{i+1}
          σ'_{i+1} ↓                  ↓ σ_{i+1}
X'_i ─────────── φ_i ───────────────→ X_i
```

At each stage, show `C'_i=φ_i⁻¹(C_i)`. When `C'_i` is empty, the map is an isomorphism and there is no exceptional divisor. When it is nonempty, the pulled-back map is the blowup along `C'_i`. Keep both edge cases visible: a nonempty Cartier center can give an isomorphic blowup morphism while retaining a nonempty exceptional divisor; a center equal to a whole connected component deletes that component under blowup, as the proof notes at line 62. The diagram should not equate “blowup map is an isomorphism” with “center is empty.”

Label `D'_{i+1}=φ_{i+1}⁻¹(D_{i+1})`, and show the ordered boundary pullback `E'_{i+1}=φ_{i+1}⁻¹(E_{i+1})` after empty members are omitted. The controlled ideal relation is

```text
I'_{i+1} = I(D'_{i+1})^{-μ}(σ'_{i+1})* I'_i = φ_{i+1}* I_{i+1}.
```

The domains, codomains, fibre product, center map, exceptional divisor indices, boundary order, and exponent `−μ` match the statement and proof. Inserted identity steps should be shown by transporting `X'_{i+1}=X'_i` and `φ_{i+1}=φ_i`. No independent mathematical inconsistency was found; the missing diagram alone is not a defect.

Both listed screenshot tiles were inspected at original resolution:

| Asset | SHA256 | Evidence |
| --- | --- | --- |
| `screenshots/lem-smooth-pullback-of-multiple-test-blowups--01.png` | `1cd25996a98b6e1d73593a37c0b3374662a96411e10fd3b74aaacf186a174193` | Statement and assumptions render legibly. |
| `screenshots/lem-smooth-pullback-of-multiple-test-blowups--02.png` | `8a4af8ad9d85ee3cc9e8251e9f814fdd42bd383475a4da92061d219f088ada6c` | Induction and transform identities render legibly. |

The bound render receipt reports no KaTeX errors, TikZ diagrams, or diagram failures. No item content or publication metadata was changed.
