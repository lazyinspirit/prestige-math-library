# frontier-29 · Beta · batch-16 notes — `vector-fields-flows-and-lie-derivatives`

Run `frontier-29`, batch `16`, one A/B pair, category `differential-geometry`.
Author: Beta. Session date: Wednesday, September 2, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-16.pages.json`
- `research/frontier-29-batch-16.coverage.json`
- this file

Per the dispatch, I edited only those batch-16 scaffold artifacts and did not
touch workflow state, another batch, published content, or plan structure
outside batch `16`.

## 1. Outcome

The pair is now scaffolded as:

- A page `vector-fields-flows-and-lie-derivatives`: **50 items**
- B page `vector-fields-flows-and-lie-derivatives-examples`: **10 items**

No split is needed. The A page stays below the hard 60-item ceiling even after
keeping all six designed `fs-` items.

The scaffold follows the DG-9 design's route where it matters:

1. vector fields are built as smooth tangent-bundle sections and as derivations
2. the Lie bracket is defined before the flow formula, so Jacobi comes from
   operator commutators
3. maximal integral curves and the maximal flow are proved as genuine manifold
   statements, not as a hand-wave about "working in charts"
4. the Lie derivative of a vector field uses inverse-time pushforward so that
   `L_XY=[X,Y]`
5. commuting flows are treated only on common local-flow domains
6. tensor-field and differential-form Lie derivatives are explicitly deferred to
   DG-11 and DG-12

## 2. Control Files And Live Run Context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-29-beta-16.task.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-16.prompt.md`, the seed manifest
`research/frontier-29-batch-16.pages.json`, the live plan entry in
`research/plan-spec.json`, the drift note
`research/frontier-29-alpha-step0-drift.md`, and the controlling design block in
`research/plan-differential-geometry-track.md`.

Per `AGENTS.md`, I also checked the live controller from disk rather than
trusting old resume prose:

- `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot-frontier-29 research/frontier-29-batch-16.pages.json research/frontier-29-dispatch/beta-batch-16.prompt.md`
  shows no batch-local workflow override on disk.

That is recorded here as context only. It is outside this batch's writable
scope.

## 3. Design Control And Local Repair

### Controlling design block

The task points to `research/plan-differential-geometry-track.md` line `2451`,
but that line is the start of the B-page subsection inside the larger DG-9
block. The full controlling design section begins earlier at line `2301`, with
`2451` sitting inside it. I therefore treated the whole DG-9 block as
controlling, not just the B-page slice.

### Design-vs-spec drift

There is no order or prerequisite drift for this pair:

- the design table row says DG-9 requires DG-2 through DG-5, DG-7, and DG-8
- `research/plan-spec.json` resolves those to the same six concrete page ids
- `research/frontier-29-alpha-step0-drift.md` already records `VERDICT:
  no-drift`

So the scaffold follows the current spec without further adjudication.

### One local mathematical repair

The design's B-page slot
`cex-pointwise-zero-vector-fields-with-a-nonzero-bracket-at-the-point` is not a
valid counterexample: if `X_p=0` and `Y_p=0`, then `[X,Y]_p=0` as well because
both derivations vanish on every germ at `p`.

I repaired that slot to the valid item
`cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point`, comparing
the pairs `(d/dx, x d/dx)` and `(d/dx, 0)` at `0 in R`. This preserves the
design's intended lesson, namely that first derivatives of the coefficients
matter for the bracket, while avoiding an impossible claim.

## 4. Proposed Page Summaries

### `vector-fields-flows-and-lie-derivatives`

This page turns smooth tangent directions into local one-parameter groups. It
starts with vector fields as smooth sections and as derivations of smooth
functions, then builds F-relatedness and diffeomorphic pushforwards, defines the
Lie bracket by commutators, proves the manifold flow theorem and its flow-box
corollaries, and finally fixes the vector-field Lie derivative sign so that
`L_XY=[X,Y]`. It ends with the equivalence between vanishing bracket and
commuting local flows, plus the local/global theory of time-dependent evolution
operators on compact time intervals with compact spatial support.

### `vector-fields-flows-and-lie-derivatives-examples`

The examples page keeps the algebra and dynamics concrete: translations,
dilations, planar rotations, finite-time escape for `x^2 d/dx`, a compactly
supported cutoff restoring completeness, a nonzero bracket computed in
coordinates, commuting coordinate fields with commuting flows, the repaired
counterexample showing that point values do not determine the bracket, an
explicit time-dependent translation field, and a worked flow-box coordinate
change for `d/dx + y d/dy`.

## 5. Exact Item Inventory

### A page — 50 items

1. `def-smooth-vector-field-as-a-tangent-bundle-section`
2. `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components`
3. `def-action-of-a-vector-field-on-smooth-functions`
4. `prop-a-vector-field-acts-as-a-derivation-of-smooth-functions`
5. `thm-derivations-of-smooth-functions-are-smooth-vector-fields`
6. `def-f-related-vector-fields`
7. `prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law`
8. `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism`
9. `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed`
10. `prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field`
11. `def-lie-bracket-of-smooth-vector-fields`
12. `lem-the-commutator-of-vector-field-derivations-is-a-derivation`
13. `prop-coordinate-formula-for-the-lie-bracket`
14. `thm-vector-fields-form-a-lie-algebra`
15. `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples`
16. `prop-related-vector-fields-have-related-lie-brackets`
17. `cor-diffeomorphism-pushforward-preserves-lie-brackets`
18. `prop-coordinate-vector-fields-commute`
19. `def-integral-curve-of-a-vector-field`
20. `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`
21. `thm-unique-maximal-integral-curve-through-each-point`
22. `def-complete-vector-field`
23. `def-local-and-global-flow`
24. `thm-fundamental-theorem-on-flows`
25. `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains`
26. `prop-the-generating-vector-field-is-invariant-under-its-flow`
27. `prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global`
28. `thm-compactly-supported-vector-fields-are-complete`
29. `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete`
30. `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it`
31. `thm-flow-box-theorem`
32. `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves`
33. `def-flowout-of-an-embedded-submanifold`
34. `thm-flowout-theorem`
35. `def-lie-derivative-of-a-function`
36. `def-lie-derivative-of-a-vector-field`
37. `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket`
38. `prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes`
39. `thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute`
40. `prop-related-complete-vector-fields-have-intertwined-flows`
41. `def-time-dependent-vector-field-and-evolution-operator`
42. `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`
43. `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`
44. `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`
45. `fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field`
46. `fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map`
47. `fs-every-smooth-vector-field-is-complete`
48. `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field`
49. `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p`
50. `fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent`

### B page — 10 items

1. `ex-constant-vector-fields-and-translation-flows`
2. `ex-the-radial-vector-field-and-dilation-flow`
3. `ex-the-rotation-vector-field-and-circle-flow`
4. `ex-a-vector-field-with-finite-time-escape`
5. `ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete`
6. `ex-coordinate-formula-for-a-nonzero-lie-bracket`
7. `ex-commuting-coordinate-fields-and-their-commuting-flows`
8. `cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point`
9. `ex-a-time-dependent-translation-field-and-its-evolution-operator`
10. `ex-the-flow-box-coordinates-for-a-nonconstant-planar-field`

## 6. Sources Actually Read

I verified and read four independent full-text treatments:

1. Will J. Merry, *Differential Geometry*:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
2. Nigel Hitchin, *Differentiable Manifolds*:
   `https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf`
3. John M. Lee, *Introduction to Smooth Manifolds, 2nd ed.* (recovered full-text
   mirror):
   `https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html`
4. Marius Crainic, Rui Loja Fernandes, and Ioan Marcut, *Lectures on Poisson
   Geometry*:
   `https://webspace.science.uu.nl/~crain101/gsm217.pdf`

### Source roles

- Merry remains the main open lecture-note backbone for vector fields, the
  manifold flow theorem, completeness, and the sign-sensitive vector-field Lie
  derivative.
- Hitchin remains the independent second treatment for sections, derivations,
  integral curves, one-parameter groups, and the bracket/Lie-derivative link.
- Lee now supplies the exact DG-9 `Flowouts` carrier required by the design,
  covering items `33`-`34`.
- Crainic--Fernandes--Marcut supplies the missing time-dependent suspension,
  cocycle, and compact-support global-flow carrier for items `41`-`44`.

### Lee recovery

The design-named Lee DOI and publisher pages were still metadata or preview
pages in this environment, not reader-visible full text. I therefore recovered a
live full-text mirror of the same second-edition book, re-read the `Flowouts`
range there, and preserved the DOI as `original_url` provenance in the coverage
file.

### URL handling

All four recorded source URLs were opened on Wednesday, September 2, 2026.
Merry, Hitchin, and Crainic--Fernandes--Marcut were verified as PDFs; Lee was
verified as reader-visible HTML full text. The Crainic--Fernandes--Marcut PDF
was also fetched unrestricted and stamped with its byte count, page count, and
SHA-256 digest.

## 7. Key Route Choices And Dependency Rationale

- **Vector fields first as sections, then as derivations.** This matches the
  design and keeps the tangent-bundle and function-action viewpoints visibly
  equivalent before the Lie bracket appears.
- **No arbitrary pushforward.** The scaffold separates `F`-relatedness from
  diffeomorphic pushforward, so the page never implies that a smooth map with
  many-point fibres can transport vector fields canonically.
- **Extension versus restriction along submanifolds are split.** A field tangent
  to an embedded submanifold restricts directly, while global extension to all
  of `M` is asserted only for closed embedded submanifolds, using tubular
  neighbourhood plus cutoff.
- **The manifold flow theorem is genuinely global.** The scaffold keeps local
  existence, maximal curves, maximal flow, inverse-time diffeomorphisms, and
  flow invariance separate so the open-domain and group-law work is not hidden
  inside a single vague "ODE theorem" item.
- **The sign convention is fixed at definition time.** Item 36 uses
  inverse-time pushforward precisely so item 37 yields `L_XY=[X,Y]`.
- **Time-dependent theory stays modest.** DG-9 only takes the local evolution
  operator, the two-time cocycle law, and the compact-time compact-support
  globalisation result promised by the design. General transport formulas for
  time-dependent tensors and forms are not scaffolded early.

## 8. Coverage And Scope Notes

The coverage file records only one A page, as required. The Step-3 repair was a
source-sufficiency repair only:

- `research/frontier-29-batch-16.pages.json` did not need a structural change.
- a recovered Lee row now carries
  `def-flowout-of-an-embedded-submanifold` and `thm-flowout-theorem`
- a Crainic--Fernandes--Marcut row now carries
  `def-time-dependent-vector-field-and-evolution-operator`,
  `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`,
  `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`, and
  `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`
- Merry's tensor-derivation Definition 22.6 remains `out-of-scope` because
  DG-9 stops at functions and vector fields
- Merry's Theorem 22.12 remains `deferred` to
  `tensor-fields-exterior-algebra-and-differential-forms`
- Merry's Proposition 22.14 remains `deferred` to
  `the-exterior-derivative-and-cartan-calculus`, where the general tensor and
  form flow formulas belong

No source row was removed merely to clear a gate. Where a source pushed the page
to build a genuine intermediate result, the scaffold kept the result rather than
dropping the seam.

## 9. Published Dependencies Opened On Disk

I opened the published items or pages actually carrying the reused interfaces:

- `library/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md`
- `library/differential-geometry/tangent-cotangent-and-the-differential.md`
- `library/differential-geometry/rank-theorems-and-embedded-submanifolds.md`
- `library/differential-geometry/smooth-vector-bundles-and-sections.md`
- `library/differential-geometry/whitney-embedding-tubular-neighbourhoods-and-approximation.md`
- `library/differential-geometry/euclidean-ordinary-differential-equations-with-smooth-dependence.md`
- `items/def-derivation-at-a-point-and-tangent-space.md`
- `items/def-embedded-submanifold-and-slice-chart.md`
- `items/def-global-differential-or-tangent-map.md`
- `items/prop-the-tangent-bundle-construction-is-functorial.md`
- `items/thm-the-global-differential-of-a-smooth-map-is-smooth.md`
- `items/thm-fundamental-theorem-for-autonomous-smooth-odes.md`
- `items/thm-fundamental-theorem-for-nonautonomous-smooth-odes.md`
- `items/thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold.md`
- `items/thm-smooth-partitions-of-unity-exist-on-manifolds.md`

That is enough for the scaffold's declared proof routes. I did not identify any
need for a `proved_here: false` fallback item.

## 10. Validation

- `node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-16.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-16.coverage.json","utf8")); console.log("json-parse: ok")'`:
  **PASS**
- `node tools/coverage-checklist.mjs research/frontier-29-batch-16.coverage.json --require-destination`:
  **PASS** — `1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-16.coverage.json`:
  **PASS** — `4/4 source(s) fetch-verified`
- whole-run manifest-only content policy:
  `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`:
  **PASS** — `753 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **PASS** — the repository's standing `redundant-prereq` advisories remain,
  and the run ends with the standard terminal `OK` line
- `git diff --check -- research/frontier-29-batch-16.coverage.json research/frontier-29-batch-16.notes.md`:
  **PASS**

## 11. Open Risks

- The only intentional design departure is the repaired B-page counterexample at
  slot 8. It is mathematically necessary and should be defended as a correction,
  not as a route change.
- The Lee carrier now exists, but it is a recovered full-text mirror rather than
  a publisher-hosted PDF. If that mirror dies, a same-text URL recovery will be
  required rather than a metadata citation.
- Shell-side URL liveness is still likely to fail under local DNS resolution,
  even though the current source URLs were verified through the web reader.

## Step-3 fix pass

- `B16-1` — **applied**
  Evidence: the Alpha review was correct that the live coverage had no carrier
  for items `33`-`34` and `41`-`44`. I re-read Lee's `Flowouts` section at
  `https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html`
  (printed pp. 217-220 / HTML lines 3340-3380) and Wurzbacher's time-dependent
  discussion at
  `https://www.researchgate.net/publication/238033962_Introduction_to_Differentiable_Manifolds_and_Symplectic_Geometry`
  (OCR pp. 83-84 / HTML lines 8047-8155).
  Changed scaffold record: `research/frontier-29-batch-16.coverage.json` gained
  a recovered Lee textbook row carrying
  `def-flowout-of-an-embedded-submanifold` and `thm-flowout-theorem`, plus a
  Wurzbacher lecture-notes row carrying
  `def-time-dependent-vector-field-and-evolution-operator`,
  `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`,
  `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`, and
  `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`.
  `research/frontier-29-batch-16.pages.json` stayed unchanged because the defect
  was source coverage, not scaffold structure.

## Owner URL intervention

- `B16-URL-1` — **applied after the Step-3 recheck released batch 16**
  The Step-3 fixer restored the four missing time-dependent-flow carriers with
  Wurzbacher's full text, but its reader-facing ResearchGate URL returned HTTP
  429 in the owner's unrestricted post-fix sweep. I replaced that citation with
  the stable direct PDF of Crainic--Fernandes--Marcut, *Lectures on Poisson
  Geometry*, Appendix A.3, printed pp. 433-435. That section explicitly gives
  the time-dependent vector-field definition, the smooth local two-time flow,
  relation (A.12), and Proposition A.12 on compact-support completeness. The
  ResearchGate URL remains in `original_url` only as provenance.

## Step-5 authoring

- Authored the full owned scope: all 50 A-page items and all 10 B-page items
  from `## 5. Exact Item Inventory`, plus
  `library/differential-geometry/vector-fields-flows-and-lie-derivatives.md`,
  `library/differential-geometry/vector-fields-flows-and-lie-derivatives-examples.md`,
  and `research/frontier-29-batch-16.proof-contracts.json`.
- Provenance rationale:
  the theorem/definition spine stays `literature-derived` or `ai-altered`
  because it follows the DG-9 design route and the batch-16 coverage sources;
  the written local proofs are `ai-generated`; the worked B-page examples and
  the repaired point-value counterexample are `ai-generated` with the schema's
  required `generation.role`; the six `fs-` statements are `ai-altered`
  because the schema does not permit `ai-generated` false-statement claims.
- Narrowed or dropped claims:
  none at Step 5. I preserved the Step-3 repair
  `cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point` and made
  no further scope change.
- Canonical precheck repair applied:
  I adopted the checker's phase-order repair on the items it flagged and then
  made one manual follow-up fix in
  `lem-the-commutator-of-vector-field-derivations-is-a-derivation` to remove a
  self-reference after the reorder. No other proof-structure repair was needed.
- Blockers:
  none inside batch 16.
- Checks run after authoring:
  `node tools/tsx-run.mjs tools/reflow.mts <60 batch item files>` -> reflowed
  the proof-bearing files into single-line proof rows and left the definition
  files unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts <60 batch item files>`:
  **PASS** after adopting the canonical repairs; final run ends
  `48 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  **PASS** with the repository's standing `redundant-prereq` advisories only;
  the run ends with `OK`.
- `node tools/content-policy.mjs research/frontier-29-batch-16.pages.json`:
  **PASS** — `60 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-16.proof-contracts.json <48 proof-bearing ids>`:
  **PASS** — regenerated all `48` contract entries from the final on-disk item
  text.
- `node tools/proof-contract.mjs research/frontier-29-batch-16.proof-contracts.json --strict`:
  **PASS** — `0 error(s), 0 warning(s), 48/48 item(s) checked`.
- `node tools/prosecheck.mjs library/differential-geometry/vector-fields-flows-and-lie-derivatives.md library/differential-geometry/vector-fields-flows-and-lie-derivatives-examples.md`:
  **PASS** — `2 file(s) checked. 0 error(s), 0 warning(s).`
