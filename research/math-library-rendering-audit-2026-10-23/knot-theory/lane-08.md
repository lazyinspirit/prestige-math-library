# Knot Theory visual audit — lane 08

## Scope and coverage

The assignment contains 94 items and 181 screenshot tiles. The assignment SHA256 and each item’s frozen snapshot, local HTML, source, receipt, and tile hashes are recorded in [lane-08.json](lane-08.json). Source, snapshot, and HTML hashes match the assignment for all 94 items; all 181 PNG hashes match their local capture receipts. I opened every assigned PNG individually through `view_image` at original resolution. No standalone image assets occur in the assigned frozen Markdown, so standalone-image clipping was not applicable.

I reviewed the full rendered item bodies and corresponding frozen snapshots/local HTML for titles, literal ASCII math, TeX/KaTeX, TikZ, reference-title leaks, Scratch text, clipping, current diagrams, and source-supported missing-diagram candidates. No production route or publication status was checked or changed. I did not run builds or tests.

## Confirmed rendering defect

### `lem-string-link-exterior-homology-and-meridian-maps` — frozen snapshot lines 108–123

- **Kind:** TikZ source rendered literally.
- **Frozen snapshot SHA256:** `e28b244d882cdbc51d5062b8713e8d005ac729e9f88578b0255bd6f42617173c` (same as source).
- **Local HTML SHA256:** `b15ea600cb1c68bf068bde3fe8ce871e1cae56ce456ad18bf61ba126787cfb8f`.
- **Visual evidence:** [`lem-string-link-exterior-homology-and-meridian-maps--03.png`](screenshots/lem-string-link-exterior-homology-and-meridian-maps--03.png), SHA256 `ac3cd76ebbfa2f2b22e34e5b06f47f8b05de22f832329ec97501a4bf5f888a69`, 1200×1261, viewed at original resolution.
- **Finding:** The Remarks diagram appears as literal `tikzpicture` commands rather than a diagram. The snapshot uses a `~~~tikz` fence; the HTML contains `<pre><code class="language-tikz">…</code></pre>`, and its capture receipt reports `tikz_count: 0`. Other assigned TikZ diagrams render as diagrams. The intended picture is a punctured disk with three marked points and three dashed access paths from the basepoint; those labels and relations should remain visible.
- **Repair direction:** Use the renderer-supported TikZ fence delimiter and confirm that the punctured disk, labels `p_1`, `p_2`, `p_3`, basepoint, and three access paths render.

## Diagram review

The assigned local receipts report no KaTeX errors or diagram failures. Existing rendered diagrams reviewed included the Khovanov Frobenius maps, the figure-eight/Wirtinger crossing charts, the 2-by-2 grid, the Kontsevich singular-crossing/resolution schematic, and trefoil braid closures. I found no confirmed mathematical mismatch in the diagrams I viewed. I recorded no source-supported missing-diagram candidate. This audit is about rendering and visual coverage, not a proof or mathematical content audit.

## Remaining coverage

Visual coverage is complete for this lane: 94 of 94 items and 181 of 181 assigned tiles were reviewed. The JSON inventory lists each tile’s resolution, SHA256, receipt match, and original-resolution viewing record.
