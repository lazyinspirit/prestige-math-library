# Step-6a independent reader report — batch 1

## Scope opened

- A page: `library/group-theory/small-cancellation-disc-diagrams-and-torsion-toolkit.md`.
- B page: `library/group-theory/small-cancellation-disc-diagrams-and-torsion-toolkit-examples.md`.
- A-page items: `def-sc-toolkit-symmetrised-relators-and-pieces`, `def-sc-toolkit-labelled-planar-disc-diagram`, `thm-sc-toolkit-van-kampen-existence`, `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction`, `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram`, `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces`, `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs`, `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram`, `lem-boundary-spur-or-at-most-three-shell-from-curvature`, `thm-greendlinger-shell-existence-from-the-curvature-count`, `def-minimal-cyclic-power-diagram-and-relator-root`, `lem-sc-toolkit-commuting-positive-words-have-a-common-root`, `lem-sc-toolkit-periodic-relator-overlap-is-a-piece`, `def-sc-toolkit-cyclically-dehn-reduced-word`, `lem-sc-toolkit-periodic-word-square-alternative`, `lem-minimal-power-diagram-has-a-periodic-boundary-shell`, and `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots`.
- B-page items: `ex-curvature-ledger-for-a-two-cell-diagram`, `ex-a-three-shell-after-arc-reduction`, `ex-relator-root-versus-proper-power`, and `cex-a-boundary-spur-when-free-reduction-is-omitted`.
- Direct published dependency interfaces: `def-alphabet-words-and-reduction`, `def-cyclically-reduced-word`, `def-group-power`, `def-group-presentation`, `prop-normal-closure-is-products-of-conjugates`, and `thm-well-ordering-principle`.
- Source targets checked: the text of Touikan §§3.4 and 3.5 and the cited complete Touikan notes were opened; the batch source check resolved and fetch-verified all four cited source records, including Lipschutz (1964). The local proofs, rather than source summaries or contracts, were used to check the claims.

The current manifest contains this pair only: historical Hyperbolic-Geometry material in the batch notes is deferred and is not assigned current content.

## Mathematical reading

- The symmetrised-relator convention retains duplicate removal and proper powers; the piece definition, its rotation argument, and the vacuous empty-relator case are consistent with the stated torsion conclusion.
- The van Kampen construction preserves the exact boundary word through free-reduction folds, including zero-face trees and the minimal-factor safeguard against a spherical closure. The minimal-area, block-cut, arc-reduction, Euler-curvature, and shell arguments retain the required singular, spur, one-face, and attachment cases.
- The strict $C'(1/6)$ bounds give seven interior arcs and an exterior segment longer than half a relator. The boundary-basepoint and bridge cases in the Greendlinger argument are accounted for.
- The periodic-word proof retains the common-root branch. Its length comparisons, cyclic reductions, relator-rotation comparisons, and the all-powers Dehn-reduced alternatives support the torsion deduction without a finiteness assumption on the relator set.
- The examples and counterexample have the advertised curvature, shell-length, root/order, and non-freely-reduced spur computations.

## Edits and uneditable defects

No edit was made. No uneditable defect remains in the assigned pages, items, or opened direct dependency interfaces.

## Verdicts

| Page | Verdict |
| --- | --- |
| `small-cancellation-disc-diagrams-and-torsion-toolkit` (A) | Pass. |
| `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` (B) | Pass. |

## Validation and blockers

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-1.coverage.json`: 1 source page, 25 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-1.coverage.json --require-verified`: 4/4 source records fetch-verified and resolved.
- Explicit batch precheck: 16 proof-bearing items checked, 0 failing.
- Explicit batch rendercheck: 23 files, all frontmatter and math parse checks pass.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-1.pages.json`: 21 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-1.pages.json`: 21 items, 0 normalization changes, 0 errors.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-1.proof-contracts.json --strict`: 21/21 items checked, 0 errors, 0 warnings.
- The current `research/phase-2-wave-1-author-check-1.json` records the same four focused gates as passing. Repository-wide `node tools/depcheck.mjs --quiet` remains nonzero due to 82 unrelated worktree errors and 474 unrelated warnings; it reports no batch-1-specific error.

No batch-local blocker remains. Next action: hand this report and the empty findings artifact to the Step-6 collector.
