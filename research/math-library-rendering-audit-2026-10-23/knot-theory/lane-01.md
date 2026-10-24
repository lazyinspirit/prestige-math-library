# Knot Theory visual audit — lane 01

## Scope and coverage

Reviewed all 95 assigned ItemBodies and opened every one of the 204 assigned PNG tiles individually through `view_image` at original resolution. Current source, frozen snapshot, and local HTML hashes match the assignment for all 95 items; all 204 PNG hashes match their capture receipts. The JSON records exact per-item hashes and per-tile resolution, hash, receipt match, and view status. Assignment SHA256 is recorded there as well.

The pass checked each title and full rendered body across continuation tiles, including literal ASCII math, TeX/KaTeX, TikZ, reference-title leaks, Scratch output, image clipping where applicable, and diagram content. Technique banners are intended uppercase styling; block links and source-authored code IDs are not defects. No standalone image clipping issue was observed. This is a local-preview audit only; no production route or publication status was checked or changed. No builds or tests were run.

## Confirmed rendering defects

### `cex-knot-kt-40-boundary-case` — lines 45–53

- **Kind:** failed TikZ diagram render.
- **Source/snapshot SHA256:** `5da203ad590ef332e479633f0114a5110760fada1902861b845da6f62985fcc2` (identical).
- **Visual evidence:** [`cex-knot-kt-40-boundary-case--01.png`](screenshots/cex-knot-kt-40-boundary-case--01.png), SHA256 `f353b8dda637999b515b558449561cc551b736f5ebf78a9b10850ff4ec02454e`, 1200×1400, viewed at original resolution.
- **Finding:** The standalone `tikzcd` is replaced by a red “diagram failed to render” box. The same map `A → A⊗A → A` is rendered correctly in the preceding KaTeX display. Its labels are `id_A⊗η` and `id_A⊗ε`.
- **Repair direction:** use a supported diagram form for the two arrows and preserve the identity tensor unit/counit labels.

### `def-poly-torsion-free-abelian-group` — lines 40–42

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `a628da7f303a631165d103dd63515bcccbe51aca5c7006f84abadd72e8faf323`
- **Visual evidence:** [`def-poly-torsion-free-abelian-group--01.png`](screenshots/def-poly-torsion-free-abelian-group--01.png), SHA256 `9ad4b63c9d0627c1d69e7fae7ff76e1628b8a0155ec66b01b4d34b1ef948bea7`, 1200×1400, viewed at original resolution.
- **Finding:** `1=G_0 ◁ G_1 ◁ ⋯ ◁ G_m=G` and `G_{j+1}/G_j` appear with raw underscores and braces.
- **Repair direction:** mark the series and indexed quotient as inline math.

### `ex-knot-kt-14-worked-cases` — lines 92–104

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `a3d5dc9c9ddbfc64a0cd56602604456172159d3ecc65ae3a14725976c16b9a8f` (identical).
- **Visual evidence:** [`ex-knot-kt-14-worked-cases--02.png`](screenshots/ex-knot-kt-14-worked-cases--02.png), SHA256 `5345af5d117d0a55d22c922b3199c082bb4c2a852c318e68fe6ff383de2cc867`, 1200×875, viewed at original resolution.
- **Finding:** The Diagram section prints the `tikzpicture` environment and drawing commands as text. It is intended to show an empty surgery diagram, a 0-framed unknot, and a positive-p-framed unknot.
- **Repair direction:** change the tilde fence to the renderer-supported TikZ fence and verify all three panels and arrows.

### `ex-knot-kt-24-worked-cases` — lines 115–128

- **Kind:** TikZ source rendered literally.
- **Source/snapshot SHA256:** `770864410be954ef567a385fadc773da03e18e112570a09af9740879e92854fb` (identical).
- **Visual evidence:** [`ex-knot-kt-24-worked-cases--02.png`](screenshots/ex-knot-kt-24-worked-cases--02.png), SHA256 `09fbcf05769320dd5050b1bdd3f57743cd72b8f83c9b7ada547aeeb6b6ed114b`, 1200×1400, viewed at original resolution; continuation appears in `--03.png`.
- **Finding:** The positive-trefoil closure diagram’s `tikzpicture` source appears literally. The adjoining prose fixes the intended two-strand closure and crossing convention.
- **Repair direction:** use the renderer-supported TikZ fence and preserve the three positive crossings and closure arcs.

### `lem-amenable-D-R-l2-dimension-estimate` — line 46

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `bcc821f54017c883694149a1f5b39d6ff708166b9c49528e0a66c8de11f188af` (identical).
- **Visual evidence:** [`lem-amenable-D-R-l2-dimension-estimate--01.png`](screenshots/lem-amenable-D-R-l2-dimension-estimate--01.png), SHA256 `d343a9a664800d7af2156583a34b684ca9bec1bd2a861c26d9384581ee17ede3`, 1200×1400, viewed at original resolution.
- **Finding:** The statement exposes unmarked forms such as `F_p`, `C_*`, `C_i`, `H_i`, and `NΓ` in running prose.
- **Repair direction:** delimit the mathematical names, module notation, and indexed homology groups with inline math.

### `thm-cheeger-gromov-uniform-rho-bound` — line 38

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `b319bbd9f9ed66378ad69263e5e70a8329bc75c49b78236cb56c19c0bdfda608` (identical).
- **Visual evidence:** [`thm-cheeger-gromov-uniform-rho-bound--01.png`](screenshots/thm-cheeger-gromov-uniform-rho-bound--01.png), SHA256 `d3b0758ff51c40be0b5c2114f45a7ddc3e241b65a2f785918c9f89d9250de1ca`, 1200×1400, viewed at original resolution.
- **Finding:** `C_M`, `π₁(M)`, `φ:π₁(M)→Γ`, and the bound `|ρ(M,φ)|≤C_M` are unmarked inline notation, leaving ASCII subscripts visible.
- **Repair direction:** delimit the constant, homomorphism, and rho bound as math.

### `lem-strong-winding-stable-under-companion-insertion` — lines 49–63

- **Kind:** literal ASCII math notation leaks into prose.
- **Source/snapshot SHA256:** `1a625702d9a05d28bcb6bbd62e4fe47829640f0cd9cbb0672829640006f8415d` (identical).
- **Visual evidence:** [`lem-strong-winding-stable-under-companion-insertion--01.png`](screenshots/lem-strong-winding-stable-under-companion-insertion--01.png), SHA256 `f73ad2b583b121fe0773592eab515605fec7d6b5a5cfb0eec4c5c7b8051c2fa6`, 1200×1400, viewed at original resolution.
- **Finding:** Facts and proof prose leave `μ_K`, `λ_K`, `π₁(S³\K)`, `ST\P`, and `P(K)` unmarked, so underscores and formula structure render as plain text.
- **Repair direction:** mark the group, meridian/longitude, exterior, and satellite-knot notation inline.

## Displayed diagram checks

The abelian-cover triangle’s edge labels agree with the face-sum equation. The positive R1 kink, type-I kink, torus-knot slope segment, ribbon local model, Seifert closure, trefoil braid closure, and the Gordon–Luecke filling square match their adjacent descriptions. Their conventions and labels are consistent with the displayed statements and prose. No confirmed mathematical mismatch in an existing viewed diagram was found.

No source-supported missing-diagram candidate was identified. No unresolved diagram/editorial issue remains from this pass.
