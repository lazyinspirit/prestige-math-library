# Knot Theory visual audit — lane 09

## Scope and coverage

The assignment contains 94 items and 196 screenshot tiles. The assignment SHA256 and exact item, snapshot, HTML, receipt, and tile hashes are recorded in [lane-09.json](lane-09.json). The frozen source snapshots, local HTML, and local sources match the assignment hashes for all 94 items; every tile hash matches its capture receipt.

I opened all 196 assigned PNGs individually with `view_image` at original resolution, covering all 94 items. Findings below are limited to those local frozen captures. I did not access a live website, external sources or images, item/app files, publication state, or run builds, tests, or gates.

## Confirmed rendering defects

### `cex-knot-kt-18-boundary-case` — source lines 59–75

- **Kind:** literal TikZ source.
- **Source/snapshot SHA256:** `e8df10f69d1e1c55af18ff97742ac7342c60ca141a578a10b7421409022c6f55` (snapshot identical).
- **Visual evidence:** [`cex-knot-kt-18-boundary-case--01.png`](screenshots/cex-knot-kt-18-boundary-case--01.png), SHA256 `ddae249e4f1a48ef6bcf7b0d781f0861b5c7ab2abddfa7ac1b12574d67268fec`, 1200x1400, viewed at original resolution.
- **Visual evidence:** [`cex-knot-kt-18-boundary-case--02.png`](screenshots/cex-knot-kt-18-boundary-case--02.png), SHA256 `809c752b268899971f93908d938856d0778d3f5c5bcb8ee4ee46aaf5f6f32fac`, 1200x851, viewed at original resolution.
- **Finding:** The Diagram section prints the raw `\begin{center}` and `tikzpicture` source, including commands and node text. No diagram is rendered. The source description specifies a quotient sphere, a removed shaded disk, knot orbit q(K), and exceptional orbit orders 3 and 2.
- **Repair direction:** Use a supported TikZ fence for the existing picture or another supported diagram form; preserve the quotient sphere, shaded disk, q(K), and order labels.

### `def-kirby-moves-on-integral-framed-links` — source lines 62–76

- **Kind:** literal TikZ source.
- **Source/snapshot SHA256:** `6ba99608e792e48a7dda375cb75072be12b21f964fcfa65799158ee8c7dbafb5` (snapshot identical).
- **Visual evidence:** [`def-kirby-moves-on-integral-framed-links--01.png`](screenshots/def-kirby-moves-on-integral-framed-links--01.png), SHA256 `49f6f7297922931b67837d7ff4dde0521c9c1d64076f372b906edb914ad4ce83`, 1200x1400, viewed at original resolution.
- **Finding:** The Diagram section displays the literal TikZ block rather than the two band-slide schematics.
- **Repair direction:** Replace the unsupported `~~~tikz` fence with the renderer-supported TikZ syntax; retain the two framed components, band, and band-sum result.

### `def-normal-surface-coordinate-box` — source lines 47–66

- **Kind:** literal TikZ source.
- **Source/snapshot SHA256:** `8fb1a9560bef8ba59f8907b0b46f2eb6f6ebc865acb02ee988dcb000ddfbed83` (snapshot identical).
- **Visual evidence:** [`def-normal-surface-coordinate-box--01.png`](screenshots/def-normal-surface-coordinate-box--01.png), SHA256 `e9cc2d157a295b64135c0eb8f5a24f63b1fc0122b96a76e21c4ab5a18a6c3eb6`, 1200x1400, viewed at original resolution.
- **Finding:** The definition’s tetrahedron schematic is printed as code. It does not display the tetrahedron with its triangular and quadrilateral normal-disk boundary patterns.
- **Repair direction:** Use supported TikZ syntax and verify both disk types, vertex labels A–D, and the stated face-intersection pattern.

### `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation` — source lines 77–94

- **Kind:** failed TikZ render.
- **Source/snapshot SHA256:** `3f69b0d04e0f9ad00721593243ea17c295ce0fcd103631db0fc6f51f82b7dd98` (snapshot identical).
- **Visual evidence:** [`lem-knot-infinite-cyclic-cover-cut-and-paste-presentation--02.png`](screenshots/lem-knot-infinite-cyclic-cover-cut-and-paste-presentation--02.png), SHA256 `109720276d19642c96c5ad45a6243fafc06f65e0dfd5ca07c3cb1f063abfd572`, 1200x652, viewed at original resolution.
- **Finding:** The renderer replaces the Remarks diagram with a “diagram failed to render” panel and the source code. The intended coordinate square identifies the Seifert matrix map and the cut-open-cover map.
- **Repair direction:** Repair the TikZ rendering while preserving the four objects and labeled arrows: H1(F;Z) to H1(Y;Z), i_- to V−tV^T, basis coordinates, linking dual, and cut-open cover map.

### `lem-positive-hopf-plumbing-has-trefoil-seifert-matrix` — source lines 75–89

- **Kind:** literal TikZ source.
- **Source/snapshot SHA256:** `2924bee8afebbfbdfca2c350c45f6b65552c26e1ab437744ab494c4c3874c271` (snapshot identical).
- **Visual evidence:** [`lem-positive-hopf-plumbing-has-trefoil-seifert-matrix--02.png`](screenshots/lem-positive-hopf-plumbing-has-trefoil-seifert-matrix--02.png), SHA256 `d8df47cba8492a6f34e0857c9f786bb3823c0b92ec6a94a36c145216fa5dd79c`, 1200x741, viewed at original resolution.
- **Finding:** The Diagram section displays raw TikZ commands instead of the plumbing-square schematic. The Statement and proof identify the red and blue Hopf bands and oriented core classes a and b.
- **Repair direction:** Use supported TikZ syntax; keep the two colored bands, oriented core arrows a and b, and plumbing square.

### `thm-amenable-signature-vanishing-for-solvable-bordisms` — source lines 42–48

- **Kind:** raw ASCII mathematical notation.
- **Source/snapshot SHA256:** `e9df2c183c8d63ae31c4818b32907600e1044a8654e42711f2131e8c5f16ac7e` (snapshot identical).
- **Visual evidence:** [`thm-amenable-signature-vanishing-for-solvable-bordisms--01.png`](screenshots/thm-amenable-signature-vanishing-for-solvable-bordisms--01.png), SHA256 `6fa77d1d8764d1a8b4a6a922d635042a26e4eca4842cb7b451c24d261df8b140`, 1200x1400, viewed at original resolution.
- **Finding:** The Statement renders symbols as literal text, for example `G^(n+1)={e}` and `φ:π₁(M(K))→G`, instead of typeset math. This is visible in the captured Statement.
- **Repair direction:** Wrap the mathematical notation in inline math while preserving the current claim and hypotheses.

### `def-integral-half-solutions-strebel-and-l2-signatures` — source lines 39–47

- **Kind:** raw ASCII mathematical notation.
- **Source/snapshot SHA256:** `f834c23a3879ce5b5724d7c76b03380d5c5bc48e0d225303a628ca285a3153fa` (snapshot identical).
- **Visual evidence:** [`def-integral-half-solutions-strebel-and-l2-signatures--01.png`](screenshots/def-integral-half-solutions-strebel-and-l2-signatures--01.png), SHA256 `567b7121865a74dadd3d8ed6b69ff8d5b0ba83c108252d133febfe699d4256dd`, 1200x1400, viewed at original resolution.
- **Finding:** The Definition renders much of its notation as plain text, including `π=π₁(W)`, `π^(j+1)=[π^(j),π^(j)]`, `H₂(W;Z)`, `x₁,…,xᵣ`, and `λⱼ`.
- **Repair direction:** Typeset the mathematical clauses inline; preserve the definitions and exact indices.

### `thm-dualizable-handle-link-has-two-knot-trace-descriptions` — source lines 102–115

- **Kind:** literal TikZ source.
- **Source/snapshot SHA256:** `bb4939464db37b233a8a9d24527c46d527214095247490da5e624fbb40e72db1` (snapshot identical).
- **Visual evidence:** [`thm-dualizable-handle-link-has-two-knot-trace-descriptions--03.png`](screenshots/thm-dualizable-handle-link-has-two-knot-trace-descriptions--03.png), SHA256 `fbf077e97d346ac9a8304b830313f6c31fcf274c8fe11d6cee4a2020d315a088`, 1200x406, viewed at original resolution.
- **Finding:** The Diagram section prints literal TikZ source rather than the two handle-slide and cancellation paths.
- **Repair direction:** Replace the unsupported `~~~tikz` fence with supported TikZ syntax; preserve both slide/cancellation paths and their shared trace identification.

### `cex-knot-kt-28-boundary-case` — source lines 73–89

- **Kind:** diagram label overlap.
- **Source/snapshot SHA256:** `e0dc25e79260638a3a3cce23ac21395747d96b63e63a39ded37fb552e546286a` (snapshot identical).
- **Visual evidence:** [`cex-knot-kt-28-boundary-case--01.png`](screenshots/cex-knot-kt-28-boundary-case--01.png), SHA256 `194439a0d5c8abe946169815cd1772ae68c1ec9783a72d4ad5757c2ceee3ffe3`, 1200x1400, viewed at original resolution.
- **Visual evidence:** [`cex-knot-kt-28-boundary-case--02.png`](screenshots/cex-knot-kt-28-boundary-case--02.png), SHA256 `e7c1a836a3650549f6ac0be0f8e3f0098a32f35224b54c542ad6db4be6e248ba`, 1200x173, viewed at original resolution.
- **Finding:** The endpoint labels at the top of the trefoil-closure schematic overlap and are not separately readable. Lines 86–87 place “left endpoint” and “right endpoint” directly above x=−0.8 and x=0.8 at the current compact scale.
- **Repair direction:** Move the labels farther apart or use shorter labels; preserve which closure arc joins each equal endpoint position.

## Existing diagram coverage

The triangle and quadrilateral boundary patterns in `lem-normal-disk-candidate-check-characterization` were checked where visible in the text; no rendered diagram was present there. The existing diagrams reviewed include the 3×3 grid marking schematic, ideal tetrahedron edge-label schematic, and the trefoil closure schematic. The first two are legible and consistent with their textual labels. The trefoil schematic itself shows the intended braid-box closure, with the noted endpoint-label collision. No mathematical error in a diagram that actually rendered was confirmed.

No source-supported missing-diagram candidate was recorded from the reviewed subset. All assigned tiles were opened, but candidate missing-diagram screening was limited to the assigned items and their captured content.

## Remaining coverage

The exact per-item and per-tile inventory is in [lane-09.json](lane-09.json); every assigned tile is marked viewed at original resolution.
