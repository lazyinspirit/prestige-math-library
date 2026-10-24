# Commutative Algebra rendering audit — lane 07

Reviewed all 82 assigned items and all 116 revision-2 screenshot tiles at original resolution. Each title and complete rendered ItemBody was checked. The JSON ledger records exact item IDs, sections, screenshot paths, frozen source hashes, and per-tile hashes. Enlarged crops of the two reported definition previews were checked against the original PNG pixels. No HTTP(S) site or live route was used.

## Confirmed rendering defects

- **def-inverse-system-and-inverse-limit-of-modules** — Definition, frozen snapshot line 31. Only the trailing “g.” is visible where “Let $R$ be a commutative ring.” should appear; the opening text is absent at the left edge. See [screenshot](screenshots/def-inverse-system-and-inverse-limit-of-modules--01.png). Suggested repair: Correct the rendering or capture layout so the full opening definition sentence remains visible.
- **def-separated-and-complete-filtered-module** — Definition, frozen snapshot lines 31–32. The rendered start reads “g and let” before the filtration, omitting the authored opening text. The original PNG crop confirms the missing left-side text. See [screenshot](screenshots/def-separated-and-complete-filtered-module--01.png). Suggested repair: Correct the rendering or capture layout so the opening sentence and displayed filtration are fully visible and remain separated.

## Optional typography observation

- **ex-local-test-for-an-isomorphism** — Title, frozen snapshot line 4. The map and direct sum display as literal ASCII “->” and “direct-sum”; the body has typeset notation. See [screenshot](screenshots/ex-local-test-for-an-isomorphism--01.png). Suggested repair: Typeset the title notation or use plain-language wording.

## Diagram review

No assigned item contains a TikZ diagram. The mathematical statements/proofs reviewed did not have a concrete missing commutative-algebra, ideal-spectrum, localization, or exact-sequence diagram, nor an actual map/index/sign rendering error that a diagram would resolve.

## Coverage

The JSON coverage has 82 rows and declares all 116 screenshot tiles. Each row records its exact source SHA256 and each captured tile SHA256; the lane consolidator can independently check the declared inventory against capture receipts. Items without a finding above were reviewed and recorded as clean.
