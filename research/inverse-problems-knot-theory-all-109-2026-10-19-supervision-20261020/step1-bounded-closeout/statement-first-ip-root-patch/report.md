# IP-only statement formatting proposal, unapplied

Exact input: `/tmp/prestige-step1-second-battery-failures-complete.json`, statement-first output. Partition:49 flagged IDs containing `-ip-`,84 reported defects. Knot/non-IP subjects belong to floer_duality_repair and were not touched.

`heading-only.patch` changes14 files only. Seven existing example-kind carriers use `Statement` rather than `Example`; only those two corresponding headings are renamed. Six reference lists following proof/status/counterexample-description sections become generic `References`, preserving their complete text and placement rather than relabeling a proof as a claim. One `Theorem references` heading becomes the matching `Statement references` heading.

Preimages and proposed copies are preserved for all49 inspected subjects. Canonical files were not written. The optional `apply-after-root-review.py` checks ALL14 exact changed preimages before its first write and applies only changed entries after root review. It was not executed.

Formatting invariants: every source byte outside level-two heading lines is identical for each proposed copy. All frontmatter, mathematical prose, assumptions, formulas, arguments, inline display labels, hyperlink targets and link order remain identical. Thus no mathematical claim or source reading/acceptance is added. No accepted proof was audited.

The native focused `inspectStatement` function was run only against49 proposed copies, never the canonical frontier. The independent tool owner repaired valid math-wiki counting during this check. Result:14 real heading mismatches resolved;68 valid one-line math-labeled reference false positives no longer occur;2 residual ambiguous source aliases remain:

- `ex-ip-gaussian-series-at-besov-threshold`: alias `L²([0,1]) is a real Hilbert space under countable choice` contains an internal closing square bracket.
- `ex-ip-small-volume-contrast-in-born-regime`: alias `The cube $[0,\ell]^3$ has Lebesgue measure $\ell^3$.` contains an internal closing square bracket.

These two do not match the renderer's own current raw-wiki syntax because its label matcher excludes closing square brackets. They were preserved unchanged and referred to root for a label-only formatting decision. This is not a mathematical hold. No valid math alias was stripped, duplicated or weakened to placate the parser.

`focused-temp-format-result.json` records the exact2 residual errors and zero remaining non-reference-format errors. `manifest.json` records per-file operations and invariants. No hashes, canonical writes, readiness changes or frontier gates were run.
