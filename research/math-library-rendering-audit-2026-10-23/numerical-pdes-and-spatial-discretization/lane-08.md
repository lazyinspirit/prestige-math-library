# Lane 08 rendering audit

Reviewed **113 items** and **176 receipt-listed PNG tiles**. Each tile was opened individually with `tools.view_image(detail="original")`; title and complete frozen ItemBody were inspected against the rendered snapshot. No network, builds, tests, or production surfaces were used.

## Findings

### Confirmed rendering defects

- **`ex-disconnected-unanchored-network-solve`** — [source](../../../items/ex-disconnected-unanchored-network-solve.md#L47) lines 49–62 embed a disconnected two-edge network, but [tile](screenshots/ex-disconnected-unanchored-network-solve--01.png) displays the raw `center`/`tikzpicture` code. Intended relation: edges 1→2 (conductance 1) and 3→4 (conductance 3), with RHS labels `(1,0,0,0)`. Tile SHA256: `84ff2e836d53aa9d49e3a0c0e52bc7a0b4134da063c3fadda89daaf07964e37e`. Receipt records `tikz_count: 0`, `diagram_failures: []`.
- **`ex-three-compartment-weighted-migration`** — [source](../../../items/ex-three-compartment-weighted-migration.md#L48) lines 50–60 embed the weighted path, but [tile](screenshots/ex-three-compartment-weighted-migration--01.png) prints literal TikZ source. Intended relation: 1→2→3, conductances 1 and 2, masses 1, 2, 3. Tile SHA256: `c74d953f871a065dc8315393c759c473fbc93119677bd1c458af711ca31ab911`. Receipt records `tikz_count: 0`, no diagram failures.
- **`thm-pe12-l2-projector-w1p-stability`** — [source](../../../items/thm-pe12-l2-projector-w1p-stability.md#L158) describes the unit-square subdivision at lines 158–162 and puts a fenced TikZ figure at 164–178; [tile --04](screenshots/thm-pe12-l2-projector-w1p-stability--04.png) prints the source code. Intended relation: two triangles split on `x1=x2`, with their cell orderings and corner labels. Tile SHA256: `d1a311daa5a1f4586bc5e913b3aa512a51cc9e7275d7e8650240a3ea05b86fe6`. Receipt records `tikz_count: 0`, no diagram failures.

The other three TikZ figures in lane 08 rendered and communicated their stated relations: `def-orthogonal-fv-compressible-viscous-scheme`, `def-sipdg-jump-average-convention`, and `ex-na-primal-p1-flux-is-not-locally-conservative`. No clipping or overlap defects were identified, and no KaTeX defect was confirmed.

### Editorial diagram candidate

- **`cex-na-q1-p0-checkerboard-pressure-mode`** — [source](../../../items/cex-na-q1-p0-checkerboard-pressure-mode.md#L43) specifies a 2×2 mesh; lines 51–55 assign the alternating pressure signs and explain why the sole center Q1 hat couples to zero. A small mesh sketch labeling `+ − / − +` and the center node would make the null mode and cancellation easier to see. This is an editorial aid; the prose is complete and mathematically self-contained.

## Parser coverage

The supplied category blocker inventory has four strict-YAML blockers, none in lane 08. Their parser status is separate from visual review; every lane-08 item was reviewed from the canonical frozen snapshot rendering, with no recovered-body-preview item.

## Coverage and attestations

The companion [lane-08.json](lane-08.json) records all 113 assigned items, frozen source/snapshot hashes, receipt metadata, all 176 individual original-resolution PNG attestations, and the finding-to-item/tile bindings. `native_loader_status` is not audited.
