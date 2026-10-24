# Hopf algebras and Hecke algebras visual audit — lane 06

## Scope and coverage

Reviewed all 23 assigned titles and complete ItemBody content against each frozen source snapshot and local HTML. Viewed all 36 assigned PNG tiles individually at original resolution. Per-item source, snapshot, HTML, screenshot paths, and SHA256 values are in [lane-06.json](lane-06.json). Every assigned source and snapshot matches the manifest digest, and every local HTML file matches its assigned digest. No item content or publication status was changed. No live HTTP(S) site was accessed.

## Confirmed rendering defects

One raw-math title defect is confirmed: `lem-hh-reduced-word-independence-and-length-multiplication` has an un-delimited `T_w` in the title (source line 4), and the rendered title shows the underscore literally. Its body formulas render correctly. The item-specific screenshot, hashes, checks, and suggested repair are recorded in the JSON finding.

No other raw ASCII math/caret/underscore issue, TeX/KaTeX failure, TikZ source, Scratch text, clipping in standalone tiles, or reference-title leak was confirmed. Cross-reference links render as blocks as expected. No existing diagram mathematics was present to correct, and no source-supported missing-diagram candidate was identified.
