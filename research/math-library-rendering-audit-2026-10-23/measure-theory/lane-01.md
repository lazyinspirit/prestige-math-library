# Measure Theory visual audit — lane 01

## Scope and coverage

Visually audited all 103 assigned items, including each title and the complete rendered ItemBody, by opening all 127 assigned PNG tiles individually at original resolution. Per-item coverage, frozen source/snapshot/HTML hashes, and each viewed tile’s SHA-256 and pixel dimensions are recorded in [lane-01.json](lane-01.json). The inspection used only the frozen snapshots and local HTML previews. No production route or live site was inspected; no source files or publication status were changed.

## Confirmed findings

- Raw math in titles: `cex-fubini-fails-without-l-one-integrability` line 4 (`x^2` and `y^2`), `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function` line 4 (`R^n`), `ex-finite-partition-sigma-algebra` line 4 (`2^k`), `fs-c-c-is-dense-in-l-infinity-for-radon-measures` line 4 (`C_c(X)` and `L^infinity(mu)`), and `thm-cardinality-of-the-borel-sigma-algebra-on-rn` line 4 (`R^n`). Each title renders the ASCII notation literally.
- Raw math in technique banners: `cex-l-two-not-subset-l-one-on-the-line` line 34; `cor-cauchy-schwarz-inequality-for-l-two` line 45; `cor-l-p-convergence-implies-convergence-in-measure` line 43; `thm-parallelogram-law-in-l-two` line 42; `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` line 51; and `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` line 63. The uppercase technique banner is intentional; its raw math delimiters/notation remain visible.
- `thm-integer-base-map-is-strongly-mixing`, lines 26, 30, and 38, includes un-delimited variables and `D_b`; the underscore is visible in the Facts & Assumptions rendering. The repeated statement in the Proof Given block has the same problem.

Exact excerpts, screenshot paths and suggested repairs are in the findings ledger. No clipping or Scratch disclosure issue was observed in the assigned previews. No existing diagrams were present in the assigned tiles. The grid-subdivision lemma has one optional source-supported diagram candidate recorded separately; it is editorial, not a defect.
