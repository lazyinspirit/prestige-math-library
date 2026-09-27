# Reviewer 05 report — 163 U-P items

All 163 assigned items were reviewed one at a time in `agent-05.jsonl` order. Each assessment was appended to `agent-05-receipts.jsonl` before the next item. Decisions: **124 accept, 20 surgical repair, 19 defer**. Two of the repaired interfaces, the spherical-average derivative and graded-kernel lemma, remain U-P pending coordinated downstream work. This report does not change the canonical ledger.

## Repairs

| Assignment | Item | Repair and outcome |
| ---: | --- | --- |
| 3 | `ex-selecting-an-admissible-contour-height` | Added the inherited countable-choice premise to the Example interface; impact file `agent-05-impact-selecting-height.json`. |
| 7 | `ex-shapiro-lemma-for-the-trivial-subgroup` | Matched the supplier's AC premise and clarified its exact use. |
| 10 | `cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces` | Corrected a stale quoted remetrization fact. |
| 36 | `ex-derivative-of-the-nth-root-by-the-inverse-rule` | Corrected the endpoint treatment for the first root. |
| 42 | `ex-independent-but-not-identically-distributed-coordinate-sequence` | Added the product-measure countable/dependent-choice premises to the Example interface; impact file `agent-05-impact-bernoulli-coordinate-example.json`. |
| 47 | `ex-pullback-over-an-evenly-covered-open-set-is-trivial` | Repaired the local verification of the pullback trivialization. |
| 58 | `fs-absolute-value-measurable-does-not-imply-measurability` | Repaired the counterexample's measurability argument. |
| 61 | `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel` | Repaired the refutation and its precise extension-classification facts. |
| 62 | `fs-limit-computable-has-a-known-stabilization-stage` | Repaired the diagonal refutation. |
| 67 | `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data` | Added ACω and completed the smooth bump-map construction; impact file `agent-05-impact-coordinate-bump.json`. |
| 68 | `lem-affine-morphism-local-on-target` | Added AC and reconciled the affine-target proof; impact file `agent-05-impact-affine-target.json`. |
| 70 | `lem-base-change-of-intertwiner-spaces` | Repaired the base-change proof without changing its interface. |
| 76 | `lem-elementary-detection-at-a-fixed-element` | Repaired the exact elementary-detection argument. |
| 78 | `lem-finite-evaluations-separate-from-a-dual-subspace` | Repaired the finite-evaluation separation proof. |
| 88 | `lem-radial-derivative-of-a-spherical-average` | Added ACω and corrected the flux/derivative proof. Its 25-item published closure is classified in `agent-05-impact-spherical-derivative.json`; source remains U-P for unresolved consumers. |
| 89 | `lem-regular-local-graded-surjection-has-zero-kernel` | Added AC and repaired the graded-kernel proof. Its 34-item published closure is classified in `agent-05-impact-graded-kernel.json`; source remains U-P for unresolved consumers. |
| 99 | `prop-schur-multiplier-of-a-free-group-is-trivial` | Added DC and the supplied projective-resolution premise to the Statement; impact file `agent-05-impact-free-multiplier.json` records no published item consumer. |
| 125 | `thm-hasse-minkowski-over-the-rationals` | Replaced an invalid `Z×` denominator claim by a nonzero integer and made the local square-class openness argument explicit. |
| 126 | `thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted` | Replaced a circular assumed orbit estimate with the published positive stable-length result. |
| 157 | `cor-l-p-norm-recovery-by-unit-l-q-pairings` | Corrected the complex norming phase to `conjugate(u)/|u|` and used Hölder directly for the upper bound, avoiding the separate defective norm-equality supplier. |

The seven changed claim interfaces are assignments 3, 42, 67, 68, 88, 89, and 99. Their published direct/indirect consumer traces and dispositions are in the named impact files. No new lemma was authored.

## Deferrals retained U-P

| Assignment | Item | Specific unresolved route |
| ---: | --- | --- |
| 1 | `cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated` | Hopf formula and group-homology choice/resolution premises are not discharged at this use. |
| 2 | `ex-optimizing-the-prime-number-theorem-contour-height` | The quantitative truncated Perron error upstream is unresolved; the optimization algebra alone is sound. |
| 4 | `thm-von-mangoldt-explicit-formula-truncated` | The displayed quantitative Perron error lacks a secure complete bound. |
| 5 | `lem-zeta-horizontal-logarithmic-derivative-comparison` | The zero-bound supplier's countable-choice premise and complete downstream trace remain open. |
| 6 | `def-riemann-zeta-zero-counting` | Its zero-set definition needs a choice-free derivation or a qualified Definition with consumer trace. |
| 8 | `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null` | Null preservation and countable-atlas supplier routes remain unsecured. |
| 17 | `def-effectively-open-set-in-cantor-space` | The measure assertion lacks an exact published product-measure route under its premises. |
| 41 | `ex-growth-degree-of-the-discrete-heisenberg-group` | The Bass–Guivarc'h supplier or a full two-sided word-ball count is missing. |
| 49 | `ex-schur-multiplier-of-a-cyclic-group` | Its cyclic-multiplier supplier still needs a sound Hopf-based or independent proof. |
| 64 | `fs-schur-covering-groups-are-unique-for-all-finite-groups` | The abelian multiplier calculation and Schur-cover existence path remain unresolved. |
| 69 | `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension` | The depth-bound and associated-prime route remains unsecured. |
| 72 | `lem-cohen-macaulay-parameter-sequence-induction` | First-parameter regularity carries unresolved associated-prime/choice premises. |
| 74 | `lem-depth-at-a-prime-bounded-by-local-dimension` | Parameter and minimal-support-prime dimension-drop justifications remain open. |
| 75 | `lem-derivatives-of-harmonic-functions-are-harmonic` | Its distributional clause uses a Weyl-lemma/mean-value route that now inherits ACω. |
| 81 | `lem-koszul-depth-first-nonzero-cohomology` | Associated-prime existence and regular-quotient depth drop need secure premises. |
| 103 | `rem-hahn-banach-discontinuous-additive-open` | The present-tense open-status claim was not verified against a current authoritative source. |
| 128 | `thm-leaf-deletion-preserves-virality-of-a-finite-family` | The local proof restates its conclusion; the external theorem exists, but the published proof needs a real derivation or an honest external record. |
| 129 | `thm-liouville-theorem-for-bounded-harmonic-functions` | The unqualified Harnack/ball-mean route inherits unresolved ACω premises. |
| 145 | `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary` | The cellular differential calculation is sound; transfer to singular homology for arbitrary CW complexes invokes an AC-qualified infinite-CW comparison without AC here. Root direction `root-route-agent-09-042` names this same gap. |

## Coordination and sources

`agent-05-events.jsonl` contains 34 events: 21 cross-shard repair notices, 7 completed interface impacts, and 6 pre-edit interface notices. Root directions were checked throughout. The seven impact JSON files are valid and distinguish affected uses from sound references. No other shard's assigned item or canonical ledger was edited.

Exact local published pages and Phase-2 suppliers consulted for each item are listed in its receipt. Additional external reading was limited to: Tan's Freyd–Mitchell PDF (abstract and Corollary 7.17); Nguyen–Scott–Seymour's virality PDF (Theorem 7.8 and the displayed proof paragraph); Karagila's *Zornian Functional Analysis* PDF (Theorem 23 and automatic-continuity discussion); Larson–Shelah's 2026 PDF (abstract and introduction); and the PMC article's abstract and “The Peculiarity of BinChamp” passage. These limited readings were not treated as complete verification of the surrounding papers. A Kedlaya page returned HTTP 406 and no source text was obtained.

Focused precheck and rendercheck passed for repaired item pages; diffs were inspected, with whitespace checks recorded where run. Stale verification stamps were removed after edits. Final JSON validation found 163 parseable receipts in exact assignment order, with all required fields. Recorded SHA-256 item hashes match the current files. No global build, autopilot transition, or commit was run.
