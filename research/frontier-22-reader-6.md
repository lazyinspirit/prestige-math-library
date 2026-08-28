# frontier-22 reader-6 report

Date: Friday, August 28, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-dispatch/reader-reader-6.attempt-1.prompt.md`, and live run state via `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`.
- Batch artifacts: `research/frontier-22-batch-6.pages.json`, `research/frontier-22-batch-6.coverage.json`, `research/frontier-22-batch-6.notes.md`, and `research/frontier-22-batch-6.proof-contracts.json`.
- Assigned pages: `library/complex-analysis/the-riemann-sphere-and-mobius-transformations.md`, `library/complex-analysis/the-riemann-sphere-and-mobius-transformations-examples.md`, `library/complex-analysis/normal-families-and-montels-theorem.md`, and `library/complex-analysis/normal-families-and-montels-theorem-examples.md`.
- Assigned items: all 61 batch-6 manifest items under `items/`, namely the 22 Riemann-sphere A-page items, 12 Riemann-sphere B-page items, 18 normal-family A-page items, and 9 normal-family B-page items named in `research/frontier-22-batch-6.pages.json`.
- Required page dependencies opened: `library/complex-analysis/the-argument-principle-and-rouche.md`, `library/topology/compactness.md`, `library/topology/the-topology-of-euclidean-space.md`, `library/complex-analysis/harmonic-functions-and-the-poisson-integral.md`, `library/topology/ascoli-arzela.md`, and `library/real-analysis/approximation-and-compactness-in-ck.md`.
- Direct dependency items opened for verification: `cor-argument-principle-counts-preimages`, `cor-ascoli-arzela-for-compact-metric-domains`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `cor-euclidean-closed-balls-and-spheres-are-compact`, `cor-exponential-is-a-bijection-onto-positive-reals`, `def-complex-domain`, `def-invertible-matrix-and-general-linear-group`, `def-meromorphic-function-complex-domain`, `def-one-point-compactification`, `def-order-of-zero-holomorphic-function`, `def-quotient-group`, `lem-cauchy-estimates-on-concentric-subdiscs`, `rem-locally-uniform-convergence-dictionary`, `thm-cauchy-integral-formula-circle`, `thm-compact-open-equals-compact-convergence`, `thm-compactness-under-continuous-maps`, `thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity`, `thm-heine-borel-rn`, `thm-hurwitz-zero-free-limit`, `thm-identity-theorem-holomorphic-functions`, `thm-image-subgroup-and-kernel-normal`, `thm-kernel-and-fibres-of-complex-exponential`, `thm-liouville-bounded-entire-function`, `thm-metric-compactness-equivalences`, `thm-one-point-compactification-properties`, `thm-pole-characterizations`, `thm-poles-meromorphic-function-are-discrete-and-countable`, `thm-removable-singularity-characterizations`, `thm-uniform-cauchy-criterion-complex-functions`, `thm-uniform-limit-continuous-complex-functions`, and `thm-weierstrass-convergence-holomorphic-functions`.

## Edits kept

- 37 proof-bearing batch-6 items had an exact duplicated `Statement`, `Example`, or `Statement refuted` block from the authoring pass. I removed the duplicated claim block in all of them so the reader-facing claim section is singular again.
- `items/thm-mobius-preserves-circlines-and-reflections.md`
  Added the missing normalization step sending an arbitrary circline to `\widehat{\mathbb R}`, then rewrote the reflection argument so existence and independence of the normalizing map are explicit.
- `items/thm-automorphisms-punctured-plane.md`
  Replaced the unsupported citation-based extension claim with a direct end-behaviour argument on `\mathbb C^\times`, then derived the sphere extension and removable-singularity step from that proof.
- `items/thm-chordal-limit-theorem-for-meromorphic-functions.md`
  Rewrote the corrupted infinity-chart step, restored the holomorphic-input dichotomy, and adopted the canonical phase numbering that `precheck` requires.
- `items/thm-chordal-arzela-ascoli-criterion-for-meromorphic-families.md`
  Removed the previously undefined right-hand phrase by stating the criterion explicitly as chordal equicontinuity on every compact subset, with the canonical-exhaustion formulation spelled out.
- `items/ex-mobius-transformation-from-three-point-correspondence.md`
  Corrected the explicit Möbius formula from `((1+i)(z-i))/(2(z-1))` to `((1-i)(z-i))/(z-1)`.
- `items/fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism.md`
  Corrected the concrete witness: the old quadruple's cross-ratio was computed incorrectly; the refutation now uses `(1,-i,0,\infty)` and its conjugate.
- `items/thm-classification-mobius-transformations.md`
  Recorded the elliptic / hyperbolic / loxodromic terminology for the dilation normal form so the companion example cites the theorem honestly.
- `items/thm-stereographic-projection-riemann-sphere-homeomorphism.md`, `items/thm-mobius-group-and-projective-linear-identification.md`, and `items/ex-stereographic-projection-formulas-on-the-unit-sphere.md`
  Repaired renderer-facing math syntax that `rendercheck` rejected: multiline `$$...$$` displays were flattened to one source line, and `psmallmatrix` was replaced by KaTeX-supported `pmatrix`.
- `research/frontier-22-batch-6.proof-contracts.json`
  Regenerated all 47 proof-bearing batch-6 contract entries so the citation quotes and derivation step numbers match the repaired on-disk items.

No assigned A-page prose edit was needed.

## Confirmed defects repaired

1. 37 proof-bearing batch-6 items repeated their claim section verbatim, which was an ill-formed reader-facing construction defect.
2. `ex-mobius-transformation-from-three-point-correspondence`
   The displayed interpolation formula did not send `-1` to `1`.
3. `fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism`
   The explicit witness quadruple had the wrong cross-ratio computation.
4. `thm-mobius-preserves-circlines-and-reflections`
   The proof used reflection in an arbitrary circline without first proving that every circline admits a Möbius normalization to `\widehat{\mathbb R}`.
5. `thm-automorphisms-punctured-plane`
   The old proof cited one-point-compactification items for a two-end extension statement they do not prove.
6. `thm-chordal-limit-theorem-for-meromorphic-functions`
   The infinity-chart step was textually corrupted on disk and no longer presented a valid meromorphic-limit argument.
7. `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`
   The right-hand side of the equivalence used an undefined phrase, so the criterion was not fully stated.
8. `thm-classification-mobius-transformations` together with `ex-classification-of-z-plus-one-two-z-and-one-over-z`
   The example cited branch terminology that the theorem had not actually recorded.
9. `thm-stereographic-projection-riemann-sphere-homeomorphism`, `thm-mobius-group-and-projective-linear-identification`, and `ex-stereographic-projection-formulas-on-the-unit-sphere`
   The current disk text contained render-breaking math syntax even though the mathematics itself was otherwise sound.

No additional editable or uneditable defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on all 47 changed proof-bearing batch-6 items
  Result: every file already matched canonical reflow after the repairs.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-6.proof-contracts.json ...`
  Result: regenerated all 47 proof-bearing batch-6 contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts` on the same 47 changed proof-bearing items
  Result: pass, `47 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-22-batch-6.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 47/47 item(s) checked`.
- `node tools/rendercheck.mjs` on the same 47 changed proof-bearing items
  Result: pass, `47` file(s) render cleanly.
- `node tools/content-policy.mjs research/frontier-22-batch-6.pages.json`
  Result: pass, `61 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/prosecheck.mjs research/frontier-22-reader-6.md`
  Result: `0` errors and `5` heuristic warnings (`count-in-prose` / `count-of-this-page` only); no positional claim contradicted the spec.
- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-22-reader-findings-6.json','utf8'))"`
  Result: the structured findings artifact parses as valid JSON.

## Page verdicts

- `the-riemann-sphere-and-mobius-transformations`
  Sufficient after repair on the opened scope. The Möbius-geometry core, the punctured-plane automorphism branch, and the classification terminology now read coherently and cite their prerequisites honestly.
- `the-riemann-sphere-and-mobius-transformations-examples`
  Sufficient after repair on the opened scope. The explicit interpolation map and the cross-ratio counterwitness now compute correctly, and the remaining examples still type-check against the repaired A-page statements.
- `normal-families-and-montels-theorem`
  Sufficient after repair on the opened scope. The chordal-limit theorem is no longer text-corrupted, and the meromorphic Ascoli criterion now states its compact-set equicontinuity condition explicitly.
- `normal-families-and-montels-theorem-examples`
  Clean on the opened scope. The examples and counterexamples remain compatible with the repaired normal-family and chordal-limit statements.

## Blockers

- None in the opened batch-6 scope.
- No uneditable published-dependency defect was confirmed.
