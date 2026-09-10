# phase-2-hg-prerequisite — reader-1 report

Run `phase-2-hg-prerequisite`, batch `1`, Step 6a independent reader.

## Scope opened

- Live-run state: `.autopilot/phase-2-hg-prerequisite/state.json` and the supported status command. The run was live in `6a-read`; the historical `*RESUME.md` files were not used.
- Task and batch artifacts: `research/phase-2-hg-prerequisite-reader.task.md`, `research/phase-2-hg-prerequisite-batch-1.pages.json`, `.coverage.json`, `.notes.md`, `.proof-contracts.json`, and the pre-read hash receipt.
- A page: `library/group-theory/asymptotic-cones-and-the-sublinear-triangle-criterion.md`, with all 22 listed items: `def-rescaled-ultralimit-and-asymptotic-cone`, `lem-bounded-real-ultralimits-and-free-tail-extension`, `lem-rescaled-ultradistance-is-a-quotient-metric`, `def-geodesic-rays-and-lines`, `lem-geodesic-segments-have-isometric-ultralimits`, `def-real-tree-tripods-and-geodesic-triangle-minsize`, `lem-triangle-extrema-and-real-tree-tripod-rules`, `lem-tree-cones-give-uniform-two-side-control`, `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness`, `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic`, `thm-sublinear-triangle-minsize-implies-hyperbolicity`, `def-bounded-edge-coarse-triangular-filling`, `def-singular-planar-labelled-relator-diagram`, `lem-finite-polygonal-disk-and-collar-surgery`, `lem-relator-expressions-give-controlled-singular-planar-diagrams`, `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`, `lem-relator-disks-give-area-controlled-coarse-fillings`, `lem-polygonal-boundary-crossing-for-affine-disk-maps`, `lem-coarse-triangle-minsize-is-bounded-by-square-root-area`, `thm-linear-relator-area-implies-slim-geodesic-triangles`, `lem-point-wedges-preserve-a-common-triangle-minsize-bound`, and `lem-uniform-filling-data-give-a-uniform-slimness-bound`.
- B page: `library/group-theory/asymptotic-cones-and-the-sublinear-triangle-criterion-examples.md`, with `ex-asymptotic-cones-of-lines-and-trees`, `ex-euclidean-triangle-has-positive-linear-minsize`, and `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter`.
- Direct published interfaces opened: all 32 external direct dependencies recorded in `/tmp/hgp-external-direct.txt`, including the metric/geodesic, ultrafilter/choice, Cauchy-real, topology/compactness, group-presentation/word-metric, and Euclidean-square-root interfaces. I also opened the source passages available at the current URLs: Druţu--Kapovich (including Proposition 11.167/Lemma 11.168), Frigerio--Sisto Lemma 11, and Erickson Theorem 1.10. The Bridson endpoint returned an internal browser error on this read; its local proof was not accepted on citation alone and was checked line-by-line from the current owned construction.

## Mathematical review

- The ultralimit construction keeps the fixed-ultrafilter, arbitrary-basepoint, and ordinary-null-scale quantifiers intact. The bounded-real proof handles the reciprocal estimate with a non-strict denominator comparison, quotient representative changes occur only on large sets, and the segment proof keeps original and rescaled parameters distinct.
- The tree-cone and sublinear-minsize route correctly handles finite/infinite endpoint alternatives, the bounded-perimeter branch, and the all-triangles maximum in the fat-triangle contradiction. The point-wedge argument uses the actual root subsegments and preserves the common profile bound.
- The planar route explicitly accounts for literal free reductions, loops, bigons, face incidences, thin bridges, outer walks, disk topology, and the coarse-triangulation count. The affine boundary-crossing argument retains the edge-interior loss `h=m/2-r`; the resulting square-root estimate and linear-area corollary have the displayed constants and boundary error.
- The three examples type-check: the line-cone maps are inverse isometries, the Euclidean witness has the stated non-optimal minsize bounds, and the moving-scale calculation distinguishes bounded perimeters from sublinear profiles.

## Confirmed uneditable defect

`items/thm-metric-continuity-characterisations.md` states, without an assumption, that epsilon-delta continuity, open/closed preimages, sequential continuity, and the closure-image condition are all equivalent. Its own fact L3 and proof step 1.6 explicitly invoke `thm-metric-sequential-closure` in the direction that *uses countable choice*, while `def-countable-choice` merely defines that independent axiom. Thus the published theorem's five-way statement needs `AC_omega` (or must omit the sequential leg); it is a fatal missing-hypothesis defect. The assigned consumer is `def-real-tree-tripods-and-geodesic-triangle-minsize`, which cites the theorem only for the choice-free metric/topological continuity correspondence, so the current A-page claim is not mathematically blocked. Published content was not edited.

## Edits, checks, and verdicts

No file was edited by this reader; hence no reflow, per-item post-edit precheck, contract update, or verification-record removal was applicable.

- `node tools/tsx-run.mjs tools/precheck.mts` on all 25 assigned items: PASS (20 proof-bearing items checked, 0 failures).
- `node tools/proof-contract.mjs --strict research/phase-2-hg-prerequisite-batch-1.proof-contracts.json`: 0 errors, 1 nonfatal `shotgun-bracket` style warning for the relator-disks contract; the cited facts are in fact used at its step 1.2, so this is not a mathematical or contract defect.
- `node tools/content-policy.mjs --manifest-only research/phase-2-hg-prerequisite-batch-1.pages.json`: PASS (25 scoped items, 0 warnings).
- `node tools/coverage-checklist.mjs research/phase-2-hg-prerequisite-batch-1.coverage.json --require-destination`: PASS (36 dispositions, 0 errors/warnings).

Page verdicts: A page passes on its owned current mathematics, subject to the separately routed published-supplier defect above; B page passes. The only blocker is the Phase-3 repair of the published five-way continuity theorem. The machine-readable uneditable finding is in `research/phase-2-hg-prerequisite-reader-findings-1.json`.
