# Step 3a reader report — batch 58

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `58`  
Role: `reader-58`

## Opened inventory

Pages:

- `crossing-signs-writhe-and-linking-number` — `library/knot-theory/crossing-signs-writhe-and-linking-number.md`
- `crossing-signs-writhe-and-linking-number-examples` — `library/knot-theory/crossing-signs-writhe-and-linking-number-examples.md`

Assigned items, read in dependency order:

- `def-oriented-crossing-sign-writhe-and-blackboard-framing`
- `lem-linking-number-even-sum-and-reidemeister-invariance`
- `alg-oriented-linking-number-from-diagram`
- `thm-oriented-linking-number-scan-terminates-and-is-correct`
- `thm-linking-number-equals-signed-intersection`
- `lem-framed-knot-push-off-self-linking-well-defined`
- `def-framed-knot-self-linking-and-seifert-framing`
- `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing`
- `thm-blackboard-framing-self-linking-is-writhe`
- `thm-linking-number-is-invariant-and-writhe-is-not`
- `ex-knot-kt-03-worked-cases`
- `cex-knot-kt-03-boundary-case`

The 34 unique immediate dependencies below were opened before their assigned consumers. Their current item carriers all have `status: published`; the batch cross-dependency inventory is empty, so there was no draft supplier in another run batch.

- Definitions: `def-axiom-of-choice`, `def-closure-of-a-geometric-braid`, `def-countable-choice`, `def-elementary-geometric-half-twist`, `def-geometric-braid-with-setwise-endpoints`, `def-local-oriented-intersection-sign`, `def-mod-two-intersection-number`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-oriented-intersection-number`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-reidemeister-moves`, `def-regular-oriented-link-diagram`, `def-smooth-bundle-metric`, `def-the-standard-smooth-step-function`, `def-tubular-neighbourhood-of-an-embedded-submanifold`.
- Results: `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy`, `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`, `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `prop-stacking-of-geometric-braids-is-well-defined`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric`, `thm-lebesgue-number-lemma`, `thm-mod-two-intersection-number-is-homotopy-invariant`, `thm-oriented-intersection-number-is-homotopy-invariant`, `thm-oriented-reidemeister-equivalence-theorem`, `thm-relative-whitney-approximation-for-manifold-valued-maps`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-transverse-preimage-for-manifolds-with-boundary`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`.

Supporting run artifacts opened for inventory and context: the batch-58 page manifest, cross-batch dependency file, authoring notes, proof-contract file, and current autopilot status. The notes, contracts, and prior decisions were treated as evidence, not review verdicts. The current run was `running` at `3a-read`; the assigned item carriers are draft items from this run.

## Review and edits

The crossing-sign determinant and positive-half-twist calibration agree: in the stated positive local chart the over and under tangent coordinates are `(1,-2h)` and `(1,2h)`, so the determinant is positive. The mixed-crossing parity proof uses transverse intersections of the projected component maps with the diagonal, then homotopes one projection outside the other. The Reidemeister checks preserve the mixed sum as stated. The algorithm has a finite crossing scan, rejects non-two-component input, and its separate theorem proves termination and integer output.

The signed-intersection theorem states its supplied-surface and supplied-diagram conditions. Its proof establishes that the positive meridian evaluates to `+1`, computes the local homology change at an over/under switch, and compares the final planar diagonal sign with the crossing determinant. The push-off lemma establishes small embedded disjoint push-offs and independence under radius, section homotopy, and normalized-chart changes. The local blackboard-push-off lemma’s two mixed crossings have the original sign; the blackboard self-linking, Reidemeister, Hopf, Whitehead, and type-I kink conclusions then follow from the stated crossing counts and invariance results.

One repair was made in `def-framed-knot-self-linking-and-seifert-framing`:

- The relative-angle formula now explicitly normalizes both the reference and comparison sections. The lift argument now shows that its endpoint difference is a complete degree coordinate: linear interpolation contracts the periodic difference to the degree-`m` rotation, and every integer is realized by such a rotation. This closes the unit-length condition in the formula and the previously implicit completeness step in the torsor assertion.
- The item’s proof-contract `endpoints` evidence was updated. The dependent `F1` quotation in the `thm-blackboard-framing-self-linking-is-writhe` contract was refreshed to the exact current Definition text after the repair.
- The item had no `verification.judge` record, so no judge record needed removal. Its source statement, title, dependencies, and proof strategy were unchanged.
- The current consumers in the dependency closure were checked against the clarified framing-class interface: `thm-blackboard-framing-self-linking-is-writhe`, `thm-linking-number-is-invariant-and-writhe-is-not`, `ex-knot-kt-03-worked-cases`, and `cex-knot-kt-03-boundary-case`. Their claims do not use the relative framing integer, and no consumer edit was needed.

Checks after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-framed-knot-self-linking-and-seifert-framing.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-framed-knot-self-linking-and-seifert-framing.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-framed-knot-self-linking-and-seifert-framing.md` — 1 item, 0 steps, 0 defects.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-58.proof-contracts.json --strict` — after refreshing the affected source quote, 12/12 items checked, 0 errors, 0 warnings.

## Diagrams

All four TikZ diagrams in the assigned items were adjudicated against their text:

- The determinant-rule diagram has rightward over and upward under tangent arrows and labels the positive determinant.
- The push-off diagram places the original and offset horizontal/vertical branches so that `m_1` and `m_2` are mixed crossings with the original over/under order; `c'` is the offset self-crossing.
- The Hopf braid diagram has two positive generators, the intermediate strand labels are exchanged, and the closure arcs join corresponding endpoints.
- The kink diagram is one oriented circle with a positive crossing, and deleting the local kink yields the crossing-free unknot diagram.

No diagram repair or additional diagram was needed. The proofs remain independent of these illustrations.

## Uneditable finding

`prop-stacking-of-geometric-braids-is-well-defined`, a published dependency of assigned item `ex-knot-kt-03-worked-cases`, has a proof-format defect at Proof step 5.1 (source line 108): the final step ends `∎ [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1]`. The proof format requires the justification tags before the final `∎`, with no tags after it. The mathematical argument is readable, but the published dependency is outside this batch’s edit scope. This is the sole finding routed in `inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-58.json`.

## Page verdicts

- `crossing-signs-writhe-and-linking-number` (A): page carrier is valid frontmatter only, remains draft with `compact-v1`, and has no summary body. All ten assigned items were reviewed; the framed-knot definition repair is recorded above. No page-prose defect remains.
- `crossing-signs-writhe-and-linking-number-examples` (B): page carrier is valid frontmatter only, remains draft with `compact-v1`, and has no summary body. Both assigned example items and their diagrams were reviewed. The Hopf and Whitehead crossing computations and the positive-kink counterexample are supported; the published dependency format finding above remains routed.

## Sources and coverage limits

The full relevant argument in Elhamdadi, Hajij, and Istvan, *Framed Knots* v6 was opened at §3, pp. 3–4 (half-sum and Reidemeister checks), §3.1, pp. 5–7 (meridian coefficient and signed surface intersection), and pp. 8–9 (self-linking, blackboard framing, and two-crossing push-off calculation): https://arxiv.org/pdf/1910.10257v6. The Whitehead Link entry was opened and confirms the braid word and linking number zero at lines 17–20: https://mathworld.wolfram.com/WhiteheadLink.html. The Calegari course-note PDF was too large for full browser retrieval (12,780,609 bytes); search excerpts exposed §3.3, Definitions 3.11 and Theorem 3.13, but I do not claim a full reading of that PDF. The alternative full relevant proof above supplied the source check, and the local arguments were independently checked. The cited Gonzalez-Meneses and Birman–Brendle braid material was consulted for generator and stacking conventions; local crossing signs were also computed from the assigned definitions.

Coverage is the two assigned pages, all twelve assigned items, and their thirty-four unique immediate published dependencies. I did not recursively re-audit every transitive proof dependency of those already-published suppliers. No in-run dependency finding or unresolved mathematical uncertainty remains. No blocker requires owner input; the one published-dependency formatting defect is outside this batch’s write scope.
