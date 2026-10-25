# Information Theory rendering audit — lane 09

## Scope and method

Reviewed the 46 assigned frozen Markdown snapshots and corresponding local HTML files from `assignment-09.json`. Verified every snapshot and HTML SHA256 against the assignment. Opened all 59 assigned screenshot tiles individually with original resolution; all tile hashes matched their screenshot manifests. Coverage records the exact paths and hashes in `lane-09.json`.

## Findings

1. **Confirmed rendering defect — `thm-componentwise-shannon-mcmillan-breiman`, Statement line 33.** The expression `-n^{-1}log_2 P(X_0^{n-1})` lacks math delimiters. The local HTML shows literal caret, braces, underscore, and `log_2` source notation. Wrap the expression in supported math syntax.
2. **Confirmed rendering defect — `lem-cost-constrained-dmc-mutual-information-under-average-cost`, title line 4.** `n C_I(Gamma)` appears as literal ASCII mathematical notation in the heading. Use a plain-language title or supported title math syntax.

Other assigned titles and bodies were visually legible. The reference links render as blocks as intended. The upper-case technique banners are not present in this lane. No standalone screenshot clipping was observed; multi-tile items were checked through their final tile. No TeX/KaTeX error was recorded in the assigned screenshot manifests. Inline-code IDs are source authored. No Scratch content was found.

## Diagrams

No assigned item contains a rendered diagram: all 46 screenshot manifests report `tikz_count: 0`. No existing diagram mathematics could therefore be reviewed.

The JSON records three source-supported **editorial candidates**, not defects: a two-step HMM trellis for the marginal-mode counterexample; a three-node full-duplex relay architecture; and a separate-encoder/common-decoder diagram for the multiterminal lossy code. Each entry gives exact source lines and the labels/relations the diagram should preserve.

## Coverage summary

- 46/46 assigned items: snapshot and HTML hashes verified; title and full rendered body inspected.
- 59/59 assigned PNG tiles: individually viewed at original resolution; each tile hash matched its manifest.
- No production route or live-site status was checked.
