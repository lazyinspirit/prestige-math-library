# Computability Theory rendering audit — lane 05

Reviewed all **87 assigned items** and opened all **107 assigned screenshot tiles** individually at original resolution. The frozen source, snapshot body, generated HTML, and screenshot tile hashes match their assignments and capture metadata; exact SHA256 coverage for every item and tile is recorded in [lane-05.json](lane-05.json). The capture metadata reports no KaTeX errors or diagram failures, and no Scratch (open) heading occurs in this lane.

## Confirmed rendering defects

- [cor-delta-one-sets-are-exactly-decidable](../../../items/cor-delta-one-sets-are-exactly-decidable.md#L4): title notation `Delta_1^0` displays literally; the body notation is properly typeset.
- [def-bounded-reachability-recursion](../../../items/def-bounded-reachability-recursion.md#L4): title notation `2^i` displays with a literal caret; body notation is properly typeset.
- [ex-distinguishable-prefix-nonregularity-criterion](../../../items/ex-distinguishable-prefix-nonregularity-criterion.md#L4): title notation `0^n1^n` and `>=` display as raw ASCII; body notation is properly typeset.
- [thm-greedy-set-cover-is-an-h-n-approximation](../../../items/thm-greedy-set-cover-is-an-h-n-approximation.md#L4): title notation `H_n` displays with a literal underscore; the statement body is properly typeset.
- [lem-sum-check-verifier-is-polynomial-time-given-point-evaluation](../../../items/lem-sum-check-verifier-is-polynomial-time-given-point-evaluation.md#L38): fact [F1] uses raw `d_i+1` in prose, which displays literally instead of as mathematical notation.

## Diagram review

No existing TikZ diagrams or diagram failures occurred in the lane, so there were no displayed maps, orientations, indices, or signs to check. Three optional, source-supported diagram candidates are recorded in the JSON: the NFA and its four-state subset DFA, midpoint splitting for bounded reachability, and the explicit three-row computation tableau. The source already states each construction fully; none is classified as a missing-diagram defect. The JSON specifies the exact content and mathematical checks for each candidate.

No clipping was confirmed in standalone original-resolution tiles. Technique banners are expected uppercase styling, and wikilink titles render as intended block lines. This review did not access a live site or modify item content or publication status.
