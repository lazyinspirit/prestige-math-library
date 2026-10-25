# Numerical Linear Algebra and Approximation visual audit — lane 07

## Scope and coverage

Reviewed all 100 assigned frozen ItemBody previews, including title and complete rendered body, across all 143 receipt-listed PNG tiles. Every PNG was opened individually with view_image at original resolution; path, receipt hash, file hash, and original dimensions are attested per tile in lane-07.json. The screenshots cover 4113 KaTeX expressions with zero reported KaTeX errors. One TikZ diagram was rendered and inspected; its realification maps and labels are consistent. No mathematical or visual TikZ defects were found.

One assigned item, ex-jordan-block-epsilon-pseudospectrum, has a strict source YAML parse blocker recorded in frontmatter-parse-blockers.json. Its exact frozen title and body were reviewed as **recovered body-preview coverage** after only malformed proof_strategy/judge metadata was removed for preview rendering. This is not successful canonical source parsing or native loader coverage. No visual body defect was found in that recovered preview.

## Confirmed visual findings

No confirmed visible LaTeX or TikZ defects were found.

## Rejected viewer observations

The initial title-glyph observations for alg-symbolic-geometric-determinant-tie-break and lem-lifted-flip-potential-decreases were withdrawn after the coordinator independently reopened each standalone original-resolution tile and confirmed the complete title is visible. Tile hashes and recheck attestations are in lane-07.json.

## Diagram candidates and checks

No diagram was required for the scalar analysis or matrix algorithms reviewed. These three geometric/computational items are concrete candidates where a small diagram would materially clarify the described configuration; the report records each source line span, frozen tile path/hash, and mathematical check.

- **alg-incremental-three-dimensional-regular-cavity-repair**, snapshot lines 33–39: High-value geometric picture: one inserted site, the conflict cavity, its boundary facets, and replacement tetrahedra; distinguish weighted lifted lower-hull visibility from planar intuition. The text supplies the relevant definitions and orientation/ordering; no mathematical inconsistency or missing prerequisite was found. A diagram is optional explanatory support.
- **ex-fmm-two-separated-charge-clusters**, snapshot lines 27–45: High-value cell diagram: nested source/target quadtree cells, split order, the separated (C,D) far pair, and zero-charge labels that make its order-one multipole checkable. The text supplies the relevant definitions and orientation/ordering; no mathematical inconsistency or missing prerequisite was found. A diagram is optional explanatory support.
- **lem-lifted-flip-potential-decreases**, snapshot lines 36–38: High-value orientation aid: convex quadrilateral ABCD with AC and BD triangulations, lifted D relative to the plane through A,B,C, and the sign direction for the strict integral decrease. The text supplies the relevant definitions and orientation/ordering; no mathematical inconsistency or missing prerequisite was found. A diagram is optional explanatory support.

The existing realification commutative diagram was checked for domain, codomain, map direction, and labels and is correct.

## Ledger

The JSON ledger records the complete 100-item coverage, all 143 tile attestations, exact findings, parse-blocker separation, and diagram review.
