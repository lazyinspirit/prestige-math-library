# Statistical Learning and Classical Models visual audit — lane 01

## Scope and coverage

Reviewed all 44 assigned frozen titles and complete ItemBody sections, matching local item sources and rendered HTML. Opened all 75 receipt-listed screenshot tiles individually through `view_image` at original resolution. Assignment, live source, frozen snapshot, HTML, screenshot receipt, and tile SHA256 values match their recorded hashes. No items or tiles remain unreviewed. See [lane-01.json](lane-01.json) for the per-item hashes, tile paths, capture positions, and view attestations.

The capture receipts report three TikZ diagrams: `ex-correlated-predictors-and-shrinkage`, `ex-isolated-vertex-in-normalized-cut`, and `ex-three-node-gaussian-chain`. Each was visually checked; no diagram rendering or mathematical issue was apparent. No KaTeX errors, diagram failures, confirmed clipping, or other visual defects were found in this lane.

## Potential diagram addition

- **`def-cpdag-markov-equivalence-class`**, lines 31–52: a definition diagram could show the CPDAG path `A—B—C` alongside its three consistent no-collider DAG extensions: `A→B→C`, `A←B←C`, and `A←B→C`. Show `A→B←C` separately as excluded because it introduces an unshielded collider. This is source-supported and optional; it would make the relation among the skeleton, compelled directions, and consistent extensions concrete.

The exact claim, relations, confidence, and screenshot evidence are recorded in the JSON ledger. This review changed no item, library, application, or publication-status files.
