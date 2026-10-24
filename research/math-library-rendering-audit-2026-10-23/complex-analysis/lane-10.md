# Complex Analysis visual review — lane 10

## Scope and coverage

Reviewed the frozen assignment snapshots, local preview HTML and all local screenshot tiles only. Each tile was opened individually at original resolution. No live website or HTTP(S) request was used. The JSON report contains exact item source/snapshot/HTML hashes and SHA256 for every assigned tile.

- Items: 140; source, snapshot and assignment hashes match for 140; preview HTML hashes match the assignment for 140.
- Screenshot tiles: 260, each individually viewed and hash recorded.
- Findings: 3; diagram candidates: 4.
- No Scratch sections, existing TikZ diagrams, or screenshot clipping findings were identified. Wikilinks remain intentionally block-line. CSS uppercase proof-technique banners are expected; raw escaped math inside one is reported below.

## Confirmed rendering findings

1. **`cex-reversing-orientation-preserves-a-contour-integral`**, source lines 29–31, “Statement refuted”: section label/banner is absent in the rendered tile and the refuted claim appears directly after the title. Evidence: `screenshots/cex-reversing-orientation-preserves-a-contour-integral--01.png` (SHA256 `33b1f1d09a51d60f831cb2d8ef46d87af7e645c9bd1d811b4984955816835b8d`).
2. **`thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range`**, source line 88, “Proof”: proof-technique banner displays escaped TeX delimiters and commands literally (`$I-B$`, `\Delta\prime\prime`) after uppercase styling. Evidence: tile `--02.png` (SHA256 `270a8cf205278f1ea58c8d6ce491c5440226902c159ba13cf48a3a2110bed08`).
3. **`thm-poisson-jensen-formula-meromorphic-function`**, source lines 69–75, proof step 1.3: the step lead-in is visually separated from its display formula and continuation, breaking their grouping in the rendered proof. Evidence: tile `--02.png` (SHA256 `1813947928ba13edab6e2d4269173fea0b5a1ceca8f8ccf8d944725ee4f9a470`). No clipping is claimed.

## Optional typography

These title strings are rendered as ordinary text and preserve source ASCII math shorthand. They are separate from confirmed rendering findings: `cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle` (`e^(1/z)`), `ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc` (`e^z`), `fs-level-one-e2-is-a-weight-two-modular-form` (`E_2`), and `ex-residue-evaluates-sine-over-x-principal-value` (`sin x / x`, `pi / 2`). Each screenshot hash and source line 4 are recorded in the JSON.

## Diagram candidates

- **`ex-hartogs-figure-in-modulus-coordinates`**, lines 34–37: TikZ modulus-coordinate region showing the union `[0,1)×[0,s)` and `(r,1)×[0,1)` and the excluded corner. Check open boundaries and mark r,s. Local evidence: `--01.png`. Confirmed source-supported opportunity.
- **`ex-complex-torus-parabolic-deck-lattice`**, lines 85, 109, 143: lattice parallelogram and quotient square with side labels/directions for `a b a^{-1} b^{-1}`, translations by ω1,ω2 and quotient map q. The generators need not be orthogonal. Local evidence: `--01.png`. Confirmed source-supported opportunity.
- **`ex-winding-numbers-of-a-keyhole-contour`**, lines 32–49: oriented keyhole chain with both radial traversals, opposite directions, two circle orientations and index regions 0/1/0. Leave trace points unassigned. Local evidence: `--01.png`, `--02.png`. Confirmed source-supported opportunity.
- **`thm-standard-fundamental-domain-for-the-modular-group`**, lines 50–57: upper-half-plane region with vertical and unit-circle boundaries, T/S side identifications and marked elliptic points i, ω, ω+1. Local evidence: `--01.png`, `--02.png`. Confirmed source-supported opportunity.

## Existing diagrams and limits

No existing diagrams were present in the assigned set. Thus there are no existing maps/orientations/indices/signs to validate. The review is limited to the frozen local rendering evidence; it makes no claims about live deployment. Exact per-item and per-tile hash coverage is in `lane-10.json`.
