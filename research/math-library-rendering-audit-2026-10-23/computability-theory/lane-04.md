# Computability Theory visual review — lane 04

Reviewed the complete frozen title and ItemBody for all 88 assigned items and opened all 97 assigned PNG tiles individually at original resolution. Source, frozen snapshot, HTML, and tile hashes are recorded per item in [lane-04.json](lane-04.json).

## Coverage and drift

- 88/88 item bodies and 97/97 screenshot tiles reviewed; no unreviewed items or tiles.
- Every source matches its frozen snapshot and assignment SHA256.
- Every captured HTML file matches its assignment SHA256.
- Every PNG SHA256 matches its screenshot metadata; original tile dimensions are listed in the JSON.
- Capture metadata reports no KaTeX errors and no TikZ render failures for this lane.

## Confirmed rendering findings

1. [thm-one-way-and-two-way-tapes-are-equivalent](../../../../items/thm-one-way-and-two-way-tapes-are-equivalent.md:40): `$mathbb Z` is missing the backslash before `mathbb`; the original tile visibly renders the literal `mathbb Z` in the output convention.
2. [prop-every-finite-language-is-regular](../../../../items/prop-every-finite-language-is-regular.md:38): the long piecewise transition rule is clipped at the right edge of its standalone 1200×1400 original tile.
3. [thm-posts-theorem](../../../../items/thm-posts-theorem.md:31): the long inline hierarchy equivalence is clipped at the right edge of its standalone 1200×1400 original tile.

Optional title typography is listed separately in the JSON: the raw `x^2-y^2` in `ex-pit-is-in-corp` and `Sigma_1^0` in `thm-sigma-one-sets-are-exactly-ce-sets` display as literal caret/underscore text in the titles; their body math renders correctly. Technique banners are uppercase CSS text and were treated as expected. Wikilink reference lines render as block lines, as expected.

## Diagram review

Capture metadata reports zero TikZ diagrams among the 88 items, so there were no existing diagram maps or orientations to inspect. The JSON records three source-supported optional candidates, with exact item lines and proposed content: the CYK span triangle, a single bounded computation tableau, and the folded two-way tape map. Each suggestion includes the indices, labels, and relations to preserve; no candidate is recorded as a confirmed mathematical defect.

## Limits

This was a local review of the frozen audit materials only. No HTTP/live-site review, application access, item edits, publication changes, tests, builds, or commits were made.
