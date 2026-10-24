# Complex Analysis visual rendering audit — lane 09

Reviewed **140 assigned items** and opened **all 252 assigned PNG tiles individually at original resolution**. For every item, the frozen snapshot, current source, and prepared HTML hashes matched the assignment manifest; the source and frozen snapshot bytes matched. The complete title and item body were checked in the local preview, including all sections shown in opened Scratch disclosures.

## Confirmed findings

- **cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane** — confirmed title-formatting defect: The preview title displays the exponent as literal ASCII e^(nz), including the caret and parentheses, rather than typeset mathematics. Source line 4; evidence: screenshots/cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane--01.png.
- **ex-a-harmonic-conjugate-of-x-squared-minus-y-squared** — confirmed title-formatting defect: The preview title displays x^2-y^2 with a literal caret and exponent digits; the formula is not typeset. Source line 4; evidence: screenshots/ex-a-harmonic-conjugate-of-x-squared-minus-y-squared--01.png.
- **ex-residue-evaluates-int-one-over-one-plus-x-squared** — confirmed title-formatting defect: The preview title exposes x^2 as literal ASCII with a caret rather than rendered mathematics. Source line 4; evidence: screenshots/ex-residue-evaluates-int-one-over-one-plus-x-squared--01.png.
- **lem-e2-transformation-law** — confirmed title-formatting defect: The preview title exposes E_2 with a literal underscore rather than a typeset subscript. Source line 4; evidence: screenshots/lem-e2-transformation-law--01.png.

No other confirmed LaTeX/MathMarkdown failures, raw formulas in body text or technique banners, reference-title leaks, Scratch rendering problems, or clipping were observed. The uppercase technique banners are expected. No optional typography-only findings are recorded.

## Diagram review

No authored TikZ or other source diagrams were present in the 140 assigned items. Existing map/orientation/index/sign checks therefore had no authored diagrams to assess; formula SVGs in the preview are typesetting output.

Optional source-supported diagram candidates are recorded in the JSON with exact source lines, proposed content, and local screenshot evidence:

- **ex-boundary-free-fundamental-parallelogram** — uncertain optional complex-plane geometric schematic: The boundary-versus-lattice relation is the central geometric comparison and is easier to check in a diagram. Source lines 45, 49, 53; screenshots: screenshots/ex-boundary-free-fundamental-parallelogram--01.png, screenshots/ex-boundary-free-fundamental-parallelogram--02.png.
- **ex-genus-two-cocompact-fuchsian-quotient** — uncertain optional branched-cover and quotient schematic: The branched degree-two map and its six ramification points are a concrete map with a useful visual check; the later uniformization quotient is a separate relation that may be shown as a commuting schematic. Source lines 83, 89, 92, 94, 99, 104; screenshots: screenshots/ex-genus-two-cocompact-fuchsian-quotient--01.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--02.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--03.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--04.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--05.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--06.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--07.png, screenshots/ex-genus-two-cocompact-fuchsian-quotient--08.png.
- **thm-winding-number-circle-traversed-k-times** — uncertain optional oriented contour and complementary-region schematic: The sign and magnitude of the index depend directly on traversal direction and multiplicity, which a labeled geometric diagram can make explicit. Source lines 32, 34, 38, 40, 42; screenshots: screenshots/thm-winding-number-circle-traversed-k-times--01.png, screenshots/thm-winding-number-circle-traversed-k-times--02.png, screenshots/thm-winding-number-circle-traversed-k-times--03.png.
- **ex-index-of-the-boundary-cycle-of-a-round-annulus** — uncertain optional oriented annular chain and region-index schematic: The negative coefficient on the inner circle, three index regions, and the distinct ambient annulus are concrete geometry where a visual could prevent sign or domain confusion. Source lines 32, 34, 35, 37, 39, 44; screenshots: screenshots/ex-index-of-the-boundary-cycle-of-a-round-annulus--01.png, screenshots/ex-index-of-the-boundary-cycle-of-a-round-annulus--02.png.

## Limits

This is a local frozen-snapshot and preview review. It does not establish live-site routes, navigation, dependency behavior, or bibliography widgets. Diagram candidates are optional visual suggestions and do not change mathematical proof obligations. Exact source, snapshot, HTML, and per-tile SHA256 values and tile dimensions are listed in `lane-09.json`.
