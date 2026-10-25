# Diagram supplement lane 01

Reviewed only the two items in `assignments/assignment-01.json`, using their bound current snapshots and local screenshot assets at original resolution. Source and snapshot hashes match the assignment. No application or item files were changed. Neither diagram is a proof dependency.

## `lem-ag-finite-field-extension-separable-factorization`

**Opportunity: warranted; existing diagram checked correct.** The statement already includes a useful commutative square for the finite purely inseparable extensions. Its objects are fields `k`, `K`, `k'`, `K'`; all four arrows are embeddings; the vertical maps have the stated extension labels; and commutativity says the two composites `k → K'` agree. The result `K'/k'` separably generated is correctly placed after the square. No label, direction, index, or sign mismatch was found. This is not a missing-diagram defect.

Exact source lines 24–27 and source SHA256 are recorded in `lane-01.json`. Original-resolution screenshot evidence inspected:

| Asset | SHA256 | Relevant evidence |
| --- | --- | --- |
| `screenshots/lem-ag-finite-field-extension-separable-factorization--01.png` | `1b1c511cfb95efc3519eb9ae50fc9717a4d4b4c0bf4409c4e286f43543b764d6` | Statement and existing square |
| `screenshots/lem-ag-finite-field-extension-separable-factorization--02.png` | `21d40c447896e27cc6292b2d20a91031c8bb4bcf483615fd59d0a1713f0af0d9` | Remaining facts and assumptions |
| `screenshots/lem-ag-finite-field-extension-separable-factorization--03.png` | `65bfdeb11d860f4b3edb68ec40d8b9b9e81454c6b24c7ccf411bd32b6326afb1` | Proof rendering |
| `screenshots/lem-ag-finite-field-extension-separable-factorization--04.png` | `d866a26804c59201ab817ee45a86599520b64cea6a040e224dcdf31b7bc2026f` | Proof conclusion |

The bound render receipt reports no KaTeX errors, TikZ diagrams, or diagram failures.

## `ex-sl3-two-minimal-parabolic-projections`

**Opportunity: warranted; classification: uncertain.** A compact flag diagram would help readers distinguish the two quotient maps and their fibre families. Suggested content:

- Center `X_B = SL₃/B = {(L,H): 0 ⊊ L ⊊ H ⊊ C³}`.
- `f_{α₁}: X_B → G/P_{α₁} ≅ Gr(2,C³)`, `(L,H) ↦ H`: forget `L`; fibre is the set of lines in fixed `H`, hence `P¹`.
- `f_{α₂}: X_B → G/P_{α₂} ≅ Gr(1,C³) = P²`, `(L,H) ↦ L`: forget `H`; fibre is the set of planes containing fixed `L`, hence `P¹`.
- Beside the two fibre families, show the degree matrix with rows `(L_{ω₁}, L_{ω₂})`, columns `(f_{α₁}, f_{α₂})`, and entries `[[1,0],[0,1]]`. This follows from `⟨ωᵢ, αⱼ∨⟩ = δᵢⱼ` in that order. It implies degree `(1,1)` for `L_ρ` and `(-2,-2)` for `ω_{G/B} ≅ L_{-2ρ}`.

The root/subspace correspondence checks out for the stated upper triangular Borel: `P_{α₁}` stabilizes the standard plane and its quotient forgets the line; `P_{α₂}` stabilizes the standard line and its quotient forgets the plane. The fibre descriptions, target domains/codomains, order of roots, Kronecker delta degrees, and negative canonical-bundle sign agree with the cited theorem and line-bundle convention. No independent diagram-mathematics error was found; the candidate is only an editorial aid, not a presumed defect.

Exact statement lines 51–61 and source SHA256 are recorded in `lane-01.json`. Original-resolution screenshot evidence inspected:

| Asset | SHA256 | Relevant evidence |
| --- | --- | --- |
| `screenshots/ex-sl3-two-minimal-parabolic-projections--01.png` | `983f142501ef9d5133d77847bbd2b3ae5d0804c7f1c0a56660717d96de0c5564` | Statement and degree claim |
| `screenshots/ex-sl3-two-minimal-parabolic-projections--02.png` | `2c00a03eeb50aa592f797e19625b3fbba925ec8c7574d23ea336888b9ae4625e` | Root data and stabilizer/projection check |
| `screenshots/ex-sl3-two-minimal-parabolic-projections--03.png` | `58aeb68b809da68f1e943c65c140b4118d6dfb1dc4df741e770f67c704cedd47` | Fibre and line-bundle degree calculations |

The bound render receipt reports no KaTeX errors, TikZ diagrams, or diagram failures.
