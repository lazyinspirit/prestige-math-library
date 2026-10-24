# Numerical Linear Algebra and Approximation rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/assignment-08.json`.
- Reviewed all 100 frozen titles and complete ItemBody texts.
- Opened all 141 receipt-listed screenshot tiles individually using `tools.view_image(detail="original")`. Per-item and per-tile SHA256 values and original-resolution attestations are in [lane-08.json](lane-08.json).
- Compared source, frozen snapshot, captured HTML and screenshot hashes to their assignment/receipt values. All assigned source, HTML and tile hashes match; all assigned items identify lane 08.
- The receipts report 4,674 KaTeX renders, zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No TikZ/tikzcd block occurs in the assigned bodies. No open Scratch section was found.
- **Recovered body-preview coverage only:** `ex-jordan-eigenvalue-residual-square-root-instability` and `thm-ilu0-factor-pattern-and-work-counts` have strict source YAML parse blockers recorded in `frontmatter-parse-blockers.json`. I inspected their exact frozen titles and complete bodies and their screenshot tiles. The preview fallback removes only malformed `proof_strategy` and nested judge metadata; it does not establish canonical source parsing or native-loader coverage. No visual issue was conflated with the metadata blockers.

## Rendering findings

- **Minor raw formula notation:** [ex-subnormal-and-overflow-range-failure](snapshots/ex-subnormal-and-overflow-range-failure.md:31) writes `N_min=2^-1022`, `2^-1074`, and related sums as ordinary ASCII without math delimiters. The symbols remain legible, but the subscripts, exponents, and arithmetic are not typeset. The screenshot evidence and hash are bound in [lane-08.json](lane-08.json).
- Other reviewed body formulas render correctly. Reference-title lines and their punctuation layout are consistent with the frozen renderer’s linked-reference convention. No clipping was confirmed after reviewing every tile standalone at original resolution; continuation seams match the adjacent tiles.

## Potentially useful missing diagrams

1. [lem-francis-compact-bulge-support-propagation](snapshots/lem-francis-compact-bulge-support-propagation.md:33): the support sets `I_j` and changing Hessenberg zero band are tracked in the proof (lines 33–35, 51–53). A sparsity-pattern sequence could show the bulge support, targeted column, unchanged earlier columns, and terminal boundary. Keep the source’s one-based indices and both `r=1` and `r=2` supports clear. This is a strong explanatory candidate, not a confirmed defect.
2. [alg-na-alternating-tensor-optimization-and-effective-eigenproblems](snapshots/alg-na-alternating-tensor-optimization-and-effective-eigenproblems.md:53): the procedure alternates forward/backward sweeps over one- or two-site windows, maintains canonical left/right environments, and splits two-site centers by direction-dependent SVD absorption (lines 53–61). A TT-core sweep schematic could show window direction, isometric environments, the `UΣV*` split, and post-sweep optional rounding. It would supplement the exact prose, not replace it.

## Existing diagram checks and limits

There are no existing lane-08 TikZ/tikzcd diagrams to check for labels, maps, domains/codomains, signs, orientations, or index conventions. This is limited to the assigned lane and is not a proof audit or a claim about diagrams elsewhere in the category. No live website or external source was used, and no production source, app, library, or publication status was changed.
