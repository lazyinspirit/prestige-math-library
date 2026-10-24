# Knot Theory visual audit — lane 03

## Scope and coverage

The assignment contains 95 items and 169 screenshot tiles. Current source, frozen snapshot, and local HTML hashes match the assignment for all 95 items; all 169 PNG hashes match their local capture receipts. The JSON records the exact source, snapshot, HTML, receipt, and tile hashes, resolutions, and original-resolution view status.

I opened all 169 assigned PNGs individually at original resolution, covering all 95 items. Findings below refer only to those local screenshots and frozen snapshots. No production route or publication status was checked or changed. I did not run builds or tests.

## Confirmed rendering defects

### `ex-knot-kt-06-worked-cases` — lines 87–102

- **Kind:** literal TikZ source rendered as text.
- **Source/snapshot SHA256:** `250f0482a8e26f996f455c43561fe6609775424a8be20e3326312cbc1cae1c` (identical).
- **Visual evidence:** [ex-knot-kt-06-worked-cases--02.png](screenshots/ex-knot-kt-06-worked-cases--02.png), SHA256 `5d82be060166df29518a01f603b33a06d9f72eda838c88d22a7ee1e438cadafb`, 1200×1027, viewed at original resolution.
- **Finding:** The Remarks section prints the `tikzpicture` environment and every `\draw`/`\node` command literally. The source is inside a `~~~tikz` fence. This tile does not render the described three-crossing braid-closure schematic.
- **Repair direction:** use the supported TikZ fence and syntax so the two braid strands, three crossings, under-strand gaps, and closure convention render as a diagram.

### `thm-cochran-davis-ray-strong-winding-injectivity` — lines 47, 63

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `bdf5b64158a1d8614a34317eff5c3088a47bf7fa8e4748e41e963b041f6a6fd1` (identical).
- **Visual evidence:** [thm-cochran-davis-ray-strong-winding-injectivity--01.png](screenshots/thm-cochran-davis-ray-strong-winding-injectivity--01.png), SHA256 `844b6cd61a6bb098b66f4677d87db877978156b3def28cdd36507b8d356bd5ce`, 1200×1400, viewed at original resolution.
- **Finding:** The Statement renders category notation literally as `C^{1/n}→C^{1/n}`, `C_ex→C_ex`, `C_top→C_top`, and `C_sm→C_sm`; line 63 also shows `AC_omega` literally. The notation is source-supported but needs math delimiters.
- **Repair direction:** typeset the category expressions and choice axiom in inline math, preserving the existing functions and hypotheses.

## Rejected visual observations

I initially recorded apparent left clipping in three headings. The coordinator rechecked each standalone PNG separately at original resolution and confirmed that each title is complete. These observations are withdrawn and are not rendering defects:

- [def-encoded-diagram-size-and-exact-output--01.png](screenshots/def-encoded-diagram-size-and-exact-output--01.png), SHA256 `9dfbdf9bf7e193c60294812a51e4e9e03ad812822367798d4ce07fc1fa059f7f`: full “Encoded…” title.
- [def-sl-two-character-variety-and-peripheral-eigenvalues--01.png](screenshots/def-sl-two-character-variety-and-peripheral-eigenvalues--01.png), SHA256 `89bbe4c06a59a4d18899a2f275d900303db0ca5c90cba36d11dce8092b7ecb51`: full “SL2…” title.
- [lem-instanton-knot-complex-asd-analytic-foundations--01.png](screenshots/lem-instanton-knot-complex-asd-analytic-foundations--01.png), SHA256 `4724fc5a179f7eb19965ba207cf6dfb431a87489f737a680285718d3bd3eb662`: full “Analytic…” title.

## Displayed diagram checks

The viewed positive braid generator in `alg-colored-jones-from-ribbon-evaluation` labels the overpassing strand consistently with its text. The connected-sum construction in `def-knot-connected-sum-and-prime-knot` shows the two cut balls and oriented joining arcs described in its caption. The local crossing in `def-oriented-crossing-sign-writhe-and-blackboard-framing` matches the stated determinant convention; the quandle crossing labels in `def-quandle-and-knot-coloring` match the source/over/target rule. The group-extension diagram in `lem-cyclic-branched-cover-homology-is-alexander-module-coinvariants` matches the displayed maps. I found no confirmed mathematical mismatch in the existing diagrams I viewed.

## Source-supported missing-diagram candidates

### `lem-knot-surgery-first-homology-mayer-vietoris` — lines 45–46, 88–92

- **Kind:** topology/Mayer–Vietoris schematic; editorial candidate, not a confirmed defect.
- **Evidence:** [lem-knot-surgery-first-homology-mayer-vietoris--01.png](screenshots/lem-knot-surgery-first-homology-mayer-vietoris--01.png), viewed at original resolution.
- **Concrete content:** show the exterior `E_K` and attached solid torus meeting along `T_K`. Mark the boundary basis `μ, λ`, the attached meridian `α = pμ + qλ`, and a complementary `β = rμ + sλ` with `ps − qr = 1`. Label the Mayer–Vietoris images `α ↦ (p[μ], 0)` and `β ↦ (r[μ], ±v)`, with `v` the core generator. These labels are stated in the source; verify orientation signs against its gluing convention before drawing.

### `def-ideal-tetrahedron-shape-and-cusp-holonomy` — lines 38–40

- **Kind:** ideal-tetrahedron and truncated cusp-triangle schematic; editorial candidate, not a confirmed defect.
- **Evidence:** [def-ideal-tetrahedron-shape-and-cusp-holonomy--01.png](screenshots/def-ideal-tetrahedron-shape-and-cusp-holonomy--01.png), viewed at original resolution.
- **Concrete content:** draw the normalized ideal tetrahedron with vertices `0, 1, ∞, z`, `Im(z) > 0`; label opposite edge pairs by `z`, `z′ = 1/(1−z)`, `z″ = (z−1)/z`, following the exact pair assignments in line 40. Beside it, show a truncated vertex triangle and an oriented normal path cutting off corners; label the left-corner parameter and right-corner reciprocal used in `H(γ)`. Check vertex order and left/right convention against lines 38–40.

## Remaining coverage

The complete per-item and per-tile inventory is in [lane-03.json](lane-03.json). Every assigned screenshot has `viewed_at_original_resolution: true`; no other lane’s screenshot is included.
