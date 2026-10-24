# Algebraic Geometry rendering audit — lane 09

Reviewed 111 assigned items and all 228 revision-2 screenshot tiles at original resolution. Each item’s title, rendered sections, proof/facts/remarks/scratch where present, reference titles, and TikZ/diagram region where present were checked against its frozen snapshot.

Confirmed or typography findings recorded: 11.

- **lem-chow-groups-of-projective-space** — confirmed: Inline math delimiters and the LaTeX command are shown literally in the rendered proof-technique sentence. (source lines 75).
- **lem-normal-surface-modification-leray-short-exact-sequence** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 38, 40).
- **lem-normalized-surface-point-blowup-resolution-descends-from-completion** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 41, 43).
- **lem-picard-group-of-a-point-blowup-of-the-projective-plane** — confirmed: Inline math delimiters and the LaTeX command for Pic are shown literally in the rendered proof-technique sentence. (source lines 121).
- **lem-rational-surface-exceptional-ideal-powers-and-sections** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 40, 42).
- **lem-regular-local-surface-is-rational-by-point-blowup-domination** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 41, 43).
- **lem-semisimple-opposite-borel-big-cell** — typography: Rendered proof prose exposes internal item identifiers as backticked slugs rather than item titles. (source lines 101, 109).
- **lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 41, 43).
- **lem-surface-finite-completion-factors** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 38, 40).
- **lem-surface-regular-fibres-preserve-normality** — confirmed: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose. (source lines 42, 44).
- **thm-embedding-dimension-at-least-local-dimension** — confirmed: The linked item title is rendered with a literal underscore as “A_p” in the fact list. (source lines 68).

Coverage and exact screenshot paths are in `lane-09.json`.
