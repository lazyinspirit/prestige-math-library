# Functional Analysis rendering audit — lane 03

Reviewed all 94 assigned items and all 173 screenshot tiles. Each tile was opened separately at original resolution. Every current source, frozen snapshot, local HTML, and screenshot PNG hash matches its assignment or screenshot receipt; the JSON records each value and every tile path/hash.

## Findings

No confirmed LaTeX, MathMarkdown, TikZ, reference-title leak, or clipping defect was found. No Scratch section/disclosure occurs in the assigned sources or their previews. No raw ASCII math formula was found in item-body rendering. Technique banners appear in uppercase as expected; wikilinks display as separate block lines as expected. Source, snapshot, HTML, and tile hashes show no drift.

## Optional typography

- **cex-heine-borel-fails-in-ell-two**, source line 4: The frozen title uses “ell^2”; the standalone preview displays the caret notation literally in the H1, while the Statement body has properly typeset ℓ². Optional suggestion: If title math is intended to match the body, use inline math notation for ℓ².
- **ex-position-operator-on-l-two-of-r**, source line 4: The frozen title uses “L^2(R)”; the standalone preview displays the caret and parenthesized R literally in the H1. The body uses properly typeset L²(ℝ). Optional suggestion: If title math is intended to match the body, use inline math notation for L²(ℝ).
- **lem-quotient-by-c-zero-has-no-countable-separating-family**, source line 4: The frozen title uses “ell-infinity/c_0” and the standalone preview shows those source-style characters literally; the Statement below uses properly typeset ℓ∞/c₀. Optional suggestion: If title math is intended to match the body, use inline math notation for ℓ∞/c₀.
- **thm-l-one-l-two-agreement-of-fourier-transform**, source line 4: The frozen title uses “L2”; the standalone preview displays the numeral as plain title text, while the body uses math notation for L¹ and L². Optional suggestion: If title math is intended to match the body, use inline math notation for L².

## Diagrams and maps

No existing diagrams occur in this lane (0 source TikZ/tikzcd; every screenshot receipt has tikz_count 0 and no diagram failures). Consequently there were no existing diagram orientations, labels, indices, or signs to audit. No diagram is classified as a confirmed omission. One uncertain, optional Fredholm map diagram candidate is recorded in `lane-03.json`; it depicts only the direct sums, restricted isomorphism, partial inverse, and defect ranges stated on source lines 35–45, 72, 74, and 76.

## Coverage and limits

Exact item, source/snapshot/HTML hash, page, full ItemBody coverage, and per-tile SHA256 records are in [lane-03.json](lane-03.json). Review was limited to local frozen previews; no live HTTP website, application, or publication state was accessed.
