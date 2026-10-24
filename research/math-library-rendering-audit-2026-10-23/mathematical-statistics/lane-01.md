# Mathematical Statistics visual audit — lane 01

## Scope and coverage

Reviewed all 49 assigned items, including each frozen title and complete ItemBody, and opened all 81 assigned screenshot tiles individually at original resolution. Source, frozen snapshot, rendered HTML, receipt, and tile hashes match the assignment/capture records; no items or tiles remain unreviewed. Per-item coverage and exact hashes are in [lane-01.json](lane-01.json).

No assigned item contains an existing TikZ or mathematical diagram. No clipping was confirmed from standalone originals, and no source-supported missing-diagram candidate was identified. Block rendering of wikilinks and punctuation wrapping are expected; findings below concern raw math text within linked titles or a technique banner. The uppercase technique banner styling is intended.

## Confirmed rendering findings

- **[def-sample-covariance-and-operator-norm-loss](snapshots/def-sample-covariance-and-operator-norm-loss.md#L37), line 37:** the linked operator-norm title displays max_{||v||=1} ||Tv|| as raw ASCII math.
- **[lem-clean-dense-gaussian-covariance-minimax-lower-bound](snapshots/lem-clean-dense-gaussian-covariance-minimax-lower-bound.md#L123), line 123:** the same linked operator-norm title displays raw ASCII math.
- **[lem-second-order-kernel-convolution-l2-bias-bound](snapshots/lem-second-order-kernel-convolution-l2-bias-bound.md#L59), line 59:** the linked Sobolev-space title displays W^{k,p}(R^n) as raw caret notation.
- **[lem-second-order-kernel-convolution-l2-bias-bound](snapshots/lem-second-order-kernel-convolution-l2-bias-bound.md#L63), line 63, and [thm-kde-pointwise-second-order-bias](snapshots/thm-kde-pointwise-second-order-bias.md#L69), line 69:** the linked change-of-variables title displays C^1 and L^1 as raw caret notation.
- **[lem-qmd-score-centered-and-finite-information](snapshots/lem-qmd-score-centered-and-finite-information.md#L72), line 72:** the technique banner prints the literal $L^2(\mu)$. Keep the intended technique label while moving the formula to a math-enabled prose field or replacing it with plain-language wording.

These are visual findings only; this local audit does not make production-route claims or alter any item.
