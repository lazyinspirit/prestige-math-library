# Differential Topology rendering audit — lane 07

Reviewed **98 assigned items** and opened all **190 screenshot tiles individually at original resolution**. Current source, frozen ItemBody snapshot, HTML, capture-manifest, and PNG hashes were checked and recorded in `lane-07.json`; no hash drift was found. Captures are local SSR/browser previews, not production HTTP pages.

Confirmed rendering findings: 1. No KaTeX parse errors, existing TikZ diagrams, or confirmed clipping. The one defect is raw inline TeX in a proof-technique banner.

## Confirmed rendering finding

### `prop-mod-two-self-intersection-needs-no-orientation`

- Section: Proof technique
- Source line: 51
- Kind: Raw math in technique banner
- Symptom: The ItemBody HTML leaves `$\mathbb F_2$` as literal text in the banner; the standalone screenshot shows it CSS-uppercased as ` $\MATHBB F_2$ `. Ordinary math elsewhere on the item renders through KaTeX.
- Screenshot: `screenshots/prop-mod-two-self-intersection-needs-no-orientation--02.png`
- Suggested repair: Keep math out of the plain-text technique banner or pass that value through MathMarkdown before uppercase styling. Keep the mathematical explanation in the proof.

## Optional diagram candidates

These are source-supported editorial options, not confirmed defects. Each item currently has no rendered diagram.

### `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation`

- Source lines: 34, 38, 54, 56, 58, 60
- Kind: Finger move and signed intersection schematic
- Why: It contrasts a unit algebraic count with three geometric intersections and constructs the extra pair by a finger move.
- Draw/check: Show the original positive intersection and the finger-created opposite-sign pair, yielding signs `+,+,-`. Mark it as a schematic and do not imply the drawing proves existence or cancellation.
- Classification: Likely useful; no rendering defect.
- Screenshots: `screenshots/lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation--01.png`, `screenshots/lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation--02.png`

### `ex-cancelling-one-two-handle-pair-on-a-surface`

- Source lines: 30, 34, 36, 38, 46, 48
- Kind: Surface handle and attaching-belt intersection diagram
- Why: The band forms an annulus, the belt `S^0` meets each boundary circle once, and attaching the 2-handle along one circle gives exactly one intersection. The cited source includes handle figures.
- Draw/check: Show the starting disk and attaching intervals, the band and annulus, both belt points, and the selected boundary circle with its unique intersection. Keep orientation marks only where the convention is unambiguous.
- Classification: Likely useful; no rendering defect.
- Screenshots: `screenshots/ex-cancelling-one-two-handle-pair-on-a-surface--01.png`, `screenshots/ex-cancelling-one-two-handle-pair-on-a-surface--02.png`

### `def-self-transverse-immersion-and-double-point-locus`

- Source lines: 38–46
- Kind: Branch-pair to collision-image schematic
- Why: At a triple image, the branch-pair set has three elements mapping to one collision-image point. That distinction is central to the definition.
- Draw/check: Show source sheets `x1,x2,x3` and the three unordered pairs mapping to one point `r`; optionally compare with the two-sheet bijective case. Do not assign a single sign to the triple image.
- Classification: Likely useful; no rendering defect.
- Screenshot: `screenshots/def-self-transverse-immersion-and-double-point-locus--01.png`

### `ex-negative-gradient-lines-for-a-quadratic-morse-function`

- Source lines: 27–30, 36
- Kind: Morse saddle phase portrait
- Why: The equations `u'=2u`, `v'=-2v` and stable/unstable coordinate axes have a direct planar picture.
- Draw/check: In the `r=s=1` case, show expansion along `u`, contraction along `v`, and label `{u=0}` forward-stable and `{v=0}` backward-unstable.
- Classification: Lower-priority and uncertain editorial value; formulas are already explicit.
- Screenshot: `screenshots/ex-negative-gradient-lines-for-a-quadratic-morse-function--01.png`

## Existing diagram checks and limits

All 98 assigned items report `tikz_count: 0` and no diagram failures, so this lane contained no existing TikZ/tikzcd maps, orientation conventions, indices, or signs to validate. The textual claims above were checked against their source and screenshots. No external sources were opened; no proof verification, application changes, live-site checks, builds, tests, or publication/status changes were made.
