# Frontier 40 — batch 5 Step 1 notes

**Run:** `frontier-40-geometry-braids-rep-27`. **Role:** beta (Step 1 scaffolding), batch 5.
**Pair:** `the-burau-representations` (A, order 745) / `the-burau-representations-examples` (B, order 746), category `braid-groups`.
**Outputs written:** `research/frontier-40-geometry-braids-rep-27-batch-5.pages.json` (26 items),
`research/frontier-40-geometry-braids-rep-27-batch-5.coverage.json`, 26 `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`
readiness records, `research/frontier-40-geometry-braids-rep-27-batch-5.cross-batch-dependencies.json`.
This file records scaffold decisions and evidence, not Step-3 mathematical approval.

## 1. Scope, plan and design

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the binding owner direction
`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`, the run drift review, the whole of
`research/plan-braid-groups-track.md` §0–§4 with the BG-9 tables at the two task-designated locations, the canonical
`research/plan-spec.json` entry for this pair, and the planning evidence
(`research/braid-groups-planning/pages.json`, `proposed-items.json`, `source-manifest.json`,
`researcher-05-representations-linearity.md`).

Which design location controls: the task points at L490 and L517 of `research/plan-braid-groups-track.md`. L490 is the
heading of the BG-9 A-page table and L517 is the heading of the BG-9 examples table, so **both tables together are the
design for this pair**: L490–L515 controls the A inventory, proof routes and conventions; L517–L526 controls the B
inventory. Where they are silent or stale, the current plan (`research/plan-spec.json`) controls; the plan's page
metadata for this pair (order 745/746, category `braid-groups`, companion, and the five `requires` pages) agrees exactly
with the design, and its item lists are intentionally empty pending this scaffold. The owner direction is binding and
does not conflict: it permits lower-order in-run dependencies (this pair needs none — every supplier is published), and
it requires the promised claim scope to be preserved (it is: cyclic cover, matrix computation, exact sequence,
same-kernel field bridge, `n <= 3` faithfulness, and a status remark that keeps the `n = 4` preprint provisional).

## 2. Conflicts and substitutions recorded

1. **Remark ID conflict inside the design document.** The BG-9 table (L515) and
   `research/braid-groups-planning/proposed-items.json` name the status remark
   `rem-current-faithfulness-status-of-the-reduced-burau-representation`; the track plan's binding per-item provenance
   rule (§4, L186–L189) names the same exception `rem-current-status-of-burau-faithfulness`. I adopted the BG-9 table
   ID (supported by `proposed-items.json` and researcher 05) and recorded the shorter §4 spelling as a stale alias. No
   other design location references either ID, so this is a naming reconciliation for the owner, not a scope change.
2. **Design dependency replaced.** The design's `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` cites
   `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` (published on `pure-braids-fadell-neuwirth-and-asphericity`,
   outside this page's declared closure). I replaced it with the published
   `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis` on `the-artin-action-on-a-free-group`,
   which states the deformation retract for the **closed** punctured disk used on this page (the design's supplier is
   stated for the open disk / the plane) and is inside the declared closure.
3. **`requires` closure vs consumed published pages.** The design's proof route consumes published items on
   `classification-of-covering-spaces`, `relative-homology-excision-and-mayer-vietoris`,
   `cw-complexes-and-cellular-homology`, `polynomial-rings-and-roots`, `the-field-of-fractions-and-localisation`,
   `determinants-of-matrices-over-a-commutative-ring` and others. A simulated splice of this manifest into
   `plan-spec.json` (run with `validate-plan.mjs --repo <checkout>` on a temporary copy) exits 0: those pages are all in
   the transitive closure of the declared `requires`, so no plan edge is undeclared. The single exception was
   `the-group-algebra-and-representations` (`def-group-ring`, `thm-group-ring-is-a-unital-algebra-with-basis-g`,
   `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`), which is **not** in the closure. Rather than reach
   into an undeclared page or change the plan, I added the local definition
   `def-the-laurent-polynomial-ring` (principal localisation `Z[t]_t`, universal property, augmentation with kernel
   `(t-1)`) and rewired those five items to it. The simulated splice then passes with no errors.
4. **Researcher-05 caveats.** Researcher 05 flags that the design's `n = 3` route (minus-one specialisation plus a
   scalar computation) differs from the preprint's Moody-polynomial proof, and that the preprint's `n = 4` claim must
   stay provisional. Both points are preserved: the page proves the design's independent route explicitly (including the
   presentation computation `SL_2(Z) = <U,V | UVU=VUV, (UVU)^4=1>`), and the remark records the `n = 4` statement as an
   unreviewed v1 preprint. Researcher 05's demand that the `Lambda`-module structure be stated with basepoint and deck
   conventions is met by the module definitions and the spine lemma.

## 3. Inventory and dependency audit

The A scaffold has 22 items, the B scaffold 4 items (26 total; the page cap is 100 and no split is needed). Levels
count only in-run predecessors (the tool's rule; published suppliers do not raise a level). 16 of the A items are the
design's own IDs, kept unchanged; the additions are marked NEW.

| level | item (kind) | note |
|---|---|---|
| 0 | `def-total-winding-homomorphism-of-the-punctured-disk` (definition) | design; invariance checked on the frozen Artin generators; AC declared for the geometric form |
| 0 | `lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected` (lemma) | NEW; supplies the classification hypotheses for `X = D^2 \ Q_n` |
| 0 | `def-the-laurent-polynomial-ring` (definition) | NEW; local realisation of `Lambda_1 = Z[t^{+-1}]` as `Z[t]_t`, with universal property and augmentation |
| 1 | `def-burau-infinite-cyclic-cover` (definition) | design; kernel cover, regular with deck group `Z`, positive generator fixed |
| 1 | `lem-units-and-powers-of-the-laurent-polynomial-ring` (lemma) | NEW; domain, distinct powers, units `+-t^m`, nonunit `1+...+t^{n-1}` |
| 2 | `def-reduced-burau-homology-module` (definition) | design; absolute `H_1` with the deck `Lambda_1`-action |
| 2 | `lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine` (lemma) | NEW; lifted retract, deck-equivariant collapse, one-vertex-per-level spine, boundaries |
| 2 | `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover` (lemma) | design; existence/uniqueness/normalisation of the lift; AC declared |
| 3 | `def-unreduced-burau-relative-homology-module` (definition) | design; relative `H_1(X-tilde, p^{-1}d)` |
| 3 | `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` (lemma) | design; basis `e_i - e_n` |
| 4 | `def-reduced-burau-representation` (definition) | design; topological definition, `GL_{n-1}(Lambda_1)` |
| 4 | `def-unreduced-burau-matrices` (definition) | design; column-convention block `(1-t, t; 1, 0)`, explicit inverse |
| 5 | `lem-unreduced-burau-matrices-satisfy-the-artin-relations` (lemma) | design |
| 5 | `lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block` (lemma) | NEW; the geometric computation behind the matrix convention; AC declared |
| 6 | `lem-the-invariant-vector-and-covector-of-the-unreduced-burau` (lemma) | NEW; `v`, `sigma` and uniqueness of invariant covectors |
| 7 | `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module` (proposition) | design; pair LES, `s(e_i) = t^{i-1}(t-1)`, no integral splitting claimed |
| 8 | `thm-topological-and-matrix-burau-representations-agree` (theorem) | design; generator comparison and reduced matrices in the `g_i` basis; AC declared |
| 8 | `ex-specializing-burau-at-t-equals-one-recovers-permutation-data` (B example) | design |
| 9 | `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel` (proposition) | design; field splitting only, explicitly non-integral; AC declared |
| 9 | `lem-the-minus-one-specialization-of-three-strand-burau-has-kernel-generated-by-delta-to-the-fourth` (lemma) | design; presentation/Euclidean route, AC declared |
| 9 | `lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three` (lemma) | design; AC declared |
| 9 | `ex-unreduced-and-reduced-burau-matrices-for-b-three` (B example) | design; AC declared |
| 9 | `ex-the-burau-image-of-the-full-twist` (B example) | design; AC declared |
| 10 | `thm-reduced-burau-is-faithful-for-at-most-three-strands` (theorem) | design; `n = 4` not claimed |
| 10 | `cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring` (B counterexample) | design; AC declared via the same-kernel proposition |
| 11 | `rem-current-faithfulness-status-of-the-reduced-burau-representation` (remark) | design; `proved_here: false` status record with `external_dependency` |

The six NEW items are each a prerequisite the design's route uses implicitly: the closed-disk local topology for the
covering classification; the spine model with decks levels for both free modules and the connecting map; the Laurent
ring structure (to stay inside the declared closure); the invariant vector/covector computation; the geometric
half-twist computation on the lifted edges (the design asks the agreement theorem to do this, but it is a separable,
checkable prerequisite); and the unit/power facts used by the `B_2` case, the detection lemma and the counterexample.

Axiom of Choice: the published mapping-class identification
(`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`prop-the-geometric-action-on-meridians-is-the-artin-representation`) assumes AC, and the items whose proofs use it
declare it, list `def-axiom-of-choice`, and identify the exact use: the total-winding invariance in its geometric form,
the lift of braid mapping classes, the topological reduced representation, the geometric half-twist computation, the
agreement theorem and its dependents (same-kernel, minus-one, detection, `n <= 3` faithfulness, the three AC-marked B
items). The covering-classification, spine, matrix-algebra, invariant-covector and units items are choice-free; the
`t = 1` example and the non-splitting counterexample are choice-free apart from the declaration inherited through the
same-kernel proposition cited by the counterexample.

Dependency directions checked: no A item depends on a B item; no same-page forward edges (every dep lies earlier on its
page); no cycle; the only "cross-batch" content is on the consumer side (batches 6 and 8 declare this page in their
`requires`, and batch 6's planned `prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid` / batch
8's planned decategorification proposition name this page's items). Those consumers own their review rows; batch 5's
own consumer input is empty.

## 4. Mathematical verification performed at scaffold time

- **Matrices and relations.** With the column convention of `def-unreduced-burau-matrices`, the block
  `B_i = (1-t, t; 1, 0)` satisfies the braid and far-commutation relations; the reduced matrices in the kernel basis
  `g_i = t e_i - e_{i+1}` act by `g_{j-1} -> g_{j-1}+g_j`, `g_j -> -t g_j`, `g_{j+1} -> t g_j + g_{j+1}`. I checked
  both relations and `Delta^2 -> t^n I_{n-1}` by explicit Laurent-polynomial multiplication for `n = 2,...,6`; for
  `n = 3` the reduced matrices are `(-t, t; 0, 1)` and `(1, 0; 1, -t)` and `(M_1 M_2 M_1)^2 = t^3 I_2`.
- **Invariant vector and covector.** `B_i v = v` for `v = (1,...,1)^T`, and `tau B_i = tau` for all `i` forces
  `tau_{i+1} = t tau_i`, hence `tau in Lambda_1 sigma` with `sigma = (1, t, ..., t^{n-1})`; `sigma(v) = 1+...+t^{n-1}`
  is nonzero in the domain. This also pins every equivariant map onto the trivial line over `K = Q(t)`.
- **Exact sequence and basis.** The lifted spine has `C_1 = Lambda_1^n`, `C_0 = Lambda_1`, `d e_i = (t-1)v`; the
  relative complex has `C_0 = 0`, so `H_1(X-tilde, p^{-1}d)` is free of rank `n` and the connecting map is
  `s(e_i) = t^{i-1}(t-1)` in the level-shifted basis `e_i = t^{i-1} e_i^{(0)}`; `ker s = ker sigma` has basis
  `g_1,...,g_{n-1}`, matching the absolute module and the reduced matrices.
- **`t = -1` specialization.** At `t = -1` the reduced matrices are `U = (1,-1;0,1)` and `V = (1,0;1,1)`;
  `UVU = (0,-1;1,0)` has order four, `U^{-1}` and `UVU` are the standard generators of `SL_2(Z)`, and the presentation
  `<U,V | UVU=VUV, (UVU)^4=1>` is the Euclidean normal-form presentation of `SL_2(Z)`. Hence the kernel of
  `B_3 -> SL_2(Z)` is the normal closure of `Delta^4`, which is the central cyclic subgroup `<Delta^4>` because
  `Delta^4 = (Delta^2)^2` is a power of the central full twist.
- **`n <= 3` faithfulness.** `B_2` has reduced image the scalar `-t`, injective because `t^k != 1` for `k != 0`; for
  `B_3` the specialisation argument plus `rho-bar(Delta^{4k}) = t^{6k} I_2` forces `k = 0`.
- **Non-splitting counterexample.** If `Lambda_1 v` had a `B_n`-invariant complement, the associated equivariant
  projection would base-change to `K` and be an invariant covector, hence `tau_1 sigma` with `tau_1 = 1/sigma(v)`;
  integrality of the projection forces `tau_1 in Lambda_1`, so `sigma(v)` would be a unit of `Lambda_1`, contradicting
  the units computation. This proves the stated stronger claim, not merely the failure of the displayed projector.

Honest caveats recorded for Step 3: (i) the geometric half-twist computation on the lifted edges (item 14) is the
heaviest geometric obligation; its strategy fixes the representative, the two affected edges and the deck-level
bookkeeping, but the sign/orientation compatibility of the block with the connecting map must be displayed explicitly
in authoring; (ii) the writer must keep the two distinct uses of the letter `s` apart (connecting map `s` vs invariant
covector `sigma`), which the manifest already separates; (iii) the pre-authoring claims above are local computations,
not an independent audit.

## 5. Sources and dispositions

All sources were fetched as full text and stamped by
`node tools/source-fetch-check.mjs --coverage research/frontier-40-geometry-braids-rep-27-batch-5.coverage.json --stamp`
(6/6 fetch-verified, first attempt each, no drops, no owner escalation; the Stacks Project Tag 00CM
source was added to coverage in the final pass, see §10). `coverage-checklist --require-destination`
reports 1 page, 48 harvested results, 0 errors, 1 advisory warning (`coverage-low-yield`, see §10).

| source (kind) | URL | exact locator | stamp | supports |
|---|---|---|---|---|
| Birman–Brendle, *Braids: A Survey* (survey, primary) | https://www.math.columbia.edu/~jb/Handbook-21.pdf | §4.2 pp. 46–47, §4.4 pp. 52–54 | PDF 91 pp, 809077 B, sha16 `22f52d9961a3f0fc` | matrices, `t = 1`, winding cover, rank `n-1`, lift, status |
| Bharathram–Birman–Brendle, *The Burau representation is faithful for n = 4*, arXiv:2607.05283v1 (paper) | https://arxiv.org/pdf/2607.05283 | Introduction, §2 pp. 1–5, §4 pp. 7–8 | PDF 28 pp, 3336389 B, sha16 `d8e722bbedea4deb` | unreduced relative module, cover, status history and `n = 4` claim |
| González-Meneses, *Basic results on braid groups* (lecture-notes, primary) | https://arxiv.org/pdf/1010.0321 | §1.6 pp. 8–10, §4.3 p. 30 | PDF 45 pp, 474454 B, sha16 `8fef987df3601d1e` | free basis, Artin action, total winding invariance, center |
| Bigelow, *The Burau representation is not faithful for n = 5* (paper) | https://arxiv.org/pdf/math/9904100 | Definition 1.1 and Theorems 1.2/1.4, pp. 397–399 | PDF 8 pp, 110820 B, sha16 `04e402f09205809e` | cover, rank, lift, non-faithfulness `n >= 5` |
| Bigelow, *The Lawrence–Krammer representation* (paper) | https://arxiv.org/pdf/math/0204057 | §2.1 p. 3 | PDF 20 pp, 175625 B, sha16 `2200c8829ae37714` | analogous kernel-cover and deck-module construction |
| The Stacks Project, §10.9 Localization, Tag 00CM (reference-work) | https://stacks.math.columbia.edu/tag/00CM | §10.9, Definition 10.9.1–Lemma 10.9.16 | HTML, 15570 chars of extracted text, stamped in the final pass | Laurent ring `Λ1 = Z[t]_t` as the `A_f` case of Example 10.9.8; universal property Prop 10.9.3 (all other §10.9 results disposed out of scope in the coverage file) |

Harvest dispositions after the final pass: 17 `included` (all into scaffolded items), 4 `inline`, 7 `already-published`,
1 `deferred` (formula (15) to `hecke-markov-traces-and-polynomial-link-invariants`) and 19 `out-of-scope` with specific
reasons (the Moody-polynomial machinery, Bigelow's arc criterion and digon lemma, the Jones corollary, Observation 2.1,
the Hecke characteristic equation, and the module/ideal localisation results of Stacks §10.9 not used by this page).
No harvested result was left undisposed and no drop record was needed.

Source-version note for the canonical ledger: the live arXiv copy of arXiv:2607.05283 fetched on 2026-10-04 has
28 pages and sha16 `d8e722bbedea4deb`, whereas the 2026-09-07 planning cache recorded 26 pages and sha16
`ecaf125b6075bcbc`. I inspected the live copy: the Main Theorem (unreduced `rho_4` faithful), §2's relative-homology
definition and the `n >= 5` history are unchanged in substance. The remark records the v1 status; a later review should
re-check the version if the item is ever made load-bearing.

## 6. Published defects and canonical-ledger notes

No mathematical defect was found in any published supplier consumed by this scaffold. The published items were read at
their statements and, where a computation is inherited, at their proof sketches
(`thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`, `def-standard-meridians-of-a-punctured-disk`,
`def-artin-automorphisms-of-the-free-group`, `prop-the-geometric-action-on-meridians-is-the-artin-representation`,
`lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`,
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`lem-subgroup-quotient-of-universal-cover`, `thm-classification-of-connected-covering-spaces`,
`cor-deck-group-of-a-regular-covering`, `lem-deck-transformations-correspond-to-normalizer-cosets`,
`thm-long-exact-sequence-of-a-pair-in-singular-homology`, `thm-cellular-homology-computes-singular-homology`,
`thm-relative-homology-of-consecutive-cw-skeleta`, the Laurent-ring localisation items, the polynomial degree/unit
items, `thm-von-dyck`, `def-garside-half-twist-and-simple-positive-braid`,
`lem-conjugation-by-delta-reverses-artin-generators`, `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two`,
`thm-the-two-strand-braid-group-is-infinite-cyclic`, `thm-the-braid-group-surjects-onto-the-symmetric-group`).
Two observations are recorded for the owner rather than as defects: (i) the design-internal remark-ID naming conflict
of §2.1 above; (ii) the live-vs-cached BBB version difference of §5. The design's own `requires` list does not directly
name several published pages it consumes; the simulated splice shows they are all reached transitively, so no
`requires` edit is requested, but this is the kind of closure assumption Step 3 should re-verify before the gate.

## 7. Cross-batch dependencies

`research/frontier-40-geometry-braids-rep-27-batch-5.cross-batch-dependencies.json` is `[]`: this batch consumes no
other in-run batch. Outgoing page-level edges (batch 5 as supplier): `hecke-markov-traces-and-polynomial-link-invariants`
(batch 6) and `categorical-braid-actions-and-decategorification` (batch 8) declare this page's A page in their
`requires`; item-level edges from their planned Burau-dependent items will appear when those manifests are scaffolded.
Those consumers own the review rows. `frontier-dependency-ledger.mjs refresh` ran clean (exit 0); batch 5's input is
recorded as reviewed, and the two outgoing rows above are open pending their owners.

## 8. Checks run and actual results

Commands were run from the repository root on 2026-10-04 (Australia/Sydney).

| check | result |
|---|---|
| `coverage-checklist.mjs research/...-batch-5.coverage.json --require-destination` | 1 page, **48 harvested, 0 errors**, 1 advisory `coverage-low-yield` warning (17/48 `included`; the declines are all reasoned, see §10) |
| `source-fetch-check.mjs --coverage research/...-batch-5.coverage.json --stamp` | **6/6 fetch-verified**, 6/6 resolved, no drops (Stacks Tag 00CM newly stamped in the final pass) |
| `source-fetch-check.mjs --coverage research/...-batch-5.coverage.json` (gate mode) | 6/6 fetch-verified, exit 0 |
| `url-sweep.mjs --coverage research/...-batch-5.coverage.json --out /tmp/batch5-url-liveness-2.json --recover --fail-on-dead` | **6/6 live**, 0 failed, exit 0 (scoped run; the run-level artifact is written by the engine gate over all batches) |
| `content-policy.mjs --manifest-only research/...-batch-5.pages.json` | 26 scoped items, **0 errors, 0 warnings** |
| `manifest-deps.mjs research/...-batch-5.pages.json` | 26 items, 0 missing, 0 errors |
| `item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | no error names any batch-5 item; every label matches the computed level (max 11). The run-wide exit is 1 only because other batches still have empty scaffold inventories |
| `step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27` | **no batch-5 work item remains**; all 26 records current. Run-wide, other batches are still incomplete |
| `step1-decisions.mjs record` | 26 records, all `ready`, recorded in dependency order and **re-recorded once more after the final-pass corrections of §10** (all 26 hashes were invalidated because the run hash covers the whole live dependency closure); `step1-decisions.mjs check` then reports no unresolved batch-5 item |
| `validate-plan.mjs research/plan-spec.json` | exit 0; my page's item list is not yet in the plan (Step 4 splices it) |
| **Simulated splice** (re-run after the final-pass corrections): `validate-plan.mjs /tmp/plan-spec-sim.json --repo <checkout>` with this manifest's items injected into the plan | **exit 0**, no undeclared-prereq, no item cycle, no forward/B-leaf edge, size 22 <= 100; only the plan's pre-existing `redundant-prereq` notices mention this page |
| `extcheck.mjs` | exit 0 (its listings are pre-existing published `proved_here: false` remarks elsewhere) |
| `drift-review-check.mjs --run frontier-40-geometry-braids-rep-27` | exit 0: 27 pages reviewed, no blocked edges |
| `frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27` | exit 0, deduplicated |
| Whole-run `content-policy.mjs --manifest-only research/...-batch-*.pages.json` | one error, in batch 27 (`thm-abelian-variety-dual-and-polarization` depends on the literal `AC` instead of `def-axiom-of-choice`) — **not this batch**; no batch-5 finding |
| `depcheck.mjs` | FAIL on pre-existing `published-unaudited` items elsewhere in the corpus; no finding names any batch-5 item (batch-5 items are not authored yet) |

## 9. Outstanding findings and handoff

- Step 3 must author the 26 items with the recorded contracts, keeping the conventions frozen here (closed disk,
  boundary basepoint `d`, positive meridians, kernel cover, deck generator `t`, column vectors, composition order,
  level-shifted relative basis, `g_i = t e_i - e_{i+1}`, field-only splitting).
- The heaviest authoring obligation is the geometric half-twist computation (item 14) and the sign/orientation
  compatibility it must display; the second is the presentation computation in item 18. Both have complete strategies.
- AC is declared and propagated item by item; do not silently drop the declarations, and do not add AC to the
  choice-free spine, matrix, invariant-covector and units items (`t = 1` example included).
- The remark stays `proved_here: false` with both primary URLs; do not report the reduced `B_4` case as settled, and do
  not let it become load-bearing.
- Owner reconciliation items: the remark-ID naming (§2.1), the live-vs-cached BBB version note (§5), and the
  confirmation that the transitive closure indeed covers the published suppliers used (§2.3). No escalation is
  requested for any item: every prerequisite is either published or scaffolded earlier on this page.

## 10. Final scaffold-pass corrections (2026-10-04, after the first readiness pass)

A second, adversarial read of every scaffolded item against the frozen published conventions found and fixed the
following. Each fix invalidated the item hashes, so all 26 Step-1 records were re-recorded `ready` (the run hash
covers the whole live dependency closure); no escalation was needed.

1. **False clause removed (item 13).** `lem-the-invariant-vector-and-covector-of-the-unreduced-burau` claimed in
   clause (a) that `(1-t)sigma` annihilates `v`. In fact `(1-t)sigma(v) = 1 - t^n != 0`, and item 14 correctly uses
   `partial_*(v) != 0` for the opposite purpose. The clause now states the true fact used downstream: the line
   `Lambda_1 v` is a `B_n`-invariant submodule.
2. **Frozen Artin convention restored (items 1 and 15).** The published `def-artin-automorphisms-of-the-free-group`
   freezes `rho(sigma_i)(x_i) = x_i x_{i+1} x_i^{-1}`, `rho(sigma_i)(x_{i+1}) = x_i`. Two strategies had quoted the
   *inverse* substitution instead. The strategies were corrected, and the half-twist block was independently
   re-derived from this frozen action: expanding the lifts of the two affected loops by their accumulated winding
   gives `e_i -> (1-t)e_i + e_{i+1}`, `e_{i+1} -> t e_i` in the level-shifted basis, exactly the frozen block `B_i`.
3. **Basis notation de-clashed (item 8).** `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` had named the
   level-0 edges `e_i`, while the page convention (item 11) uses `e_i = t^{i-1} epsilon_i` for the level-shifted
   basis; under the page convention `e_i - e_n` is not even a cycle. The item now states the basis as
   `epsilon_i - epsilon_n` in the level-0 notation of the spine lemma.
4. **Missing domain prerequisite supplied and ordered (items 7, 8, 13, 14, 17).** These items use `t-1 != 0`, the
   vanishing of `(t-1)sigma(x)` only when `sigma(x)=0`, and `sigma(v) != 0`, i.e. the integral-domain and unit facts
   proved in `lem-units-and-powers-of-the-laurent-polynomial-ring`. That lemma had sat at list position 18, after its
   consumers. It was moved to position 4 (right after `def-the-laurent-polynomial-ring`, level 1 unchanged) and added
   to the five consumer deps. No dependency level changed (the added dep is level 1 in every case).
5. **Center prerequisite added (item 19).** The claim that the normal closure of `Delta^4` is the *infinite cyclic*
   central subgroup needs `Delta^4` central of infinite order; the published center theorem (which B item 2 already
   cites) was added to the deps and to the strategy.
6. **Unused dependency removed (item 20).** The conjugation lemma was dropped: `Delta^2 = (sigma_1 sigma_2 sigma_1)^2`
   is the definition of the half twist, not a conjugation fact.
7. **`Z` vs `Q` splitting corrected (B item 3).** The `t = 1` example had claimed the *integral* direct sum
   `Z^n = Z v (+) {x : sum x_i = 0}`. That is false (`Z v + {sum x_i = 0}` is only the even-sum sublattice, already
   for `n = 2`). The item now proves the correct statements: the rational splitting
   `Q^n = Q v (+) {sum x_i = 0}`, the specialized exact sequence
   `0 -> {sum x_i = 0} -> Z^n -> Z -> 0` as the specialization of the image part
   `0 -> ker sigma -> Lambda_1^n -> (t-1)Lambda_1 -> 0` (whose right term is free, so the sequence splits), and the
   integral sublattice fact; `n = 2` sign representation is kept.
8. **Misleading clause corrected (B item 2).** The old sentence said `Delta^2` lies "in the kernel of the `t=-1`
   specialization"; in fact `Delta^2` maps to `-I_2` there and the kernel is `<Delta^4>`. The sentence now states that
   `Delta^2` and every `Delta^{2k}` (`k != 0`) are outside the kernel over `Lambda_1`.
9. **AC convention aligned with the plan (12 items).** The nonstandard boolean `assumes_ac: true` (used nowhere else
   in the repository) was replaced by the plan-spec convention `axiom_use: "<exact use>"` on the 12 AC-declaring
   items, including item 1, which had stated AC in prose but carried no field. The declarations trace every use to
   the published mapping-class identification (`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
   `prop-the-geometric-action-on-meridians-is-the-artin-representation`); the choice-free items stay free.
10. **Source-accuracy fixes.** The reference "James McKernan, MIT 18.703, lecture notes on localisation" was wrong:
   the linked document (fetched, sha16 checked) is *Lecture 21: Polynomial rings* and contains no localisation. It was
   removed from item 3 and replaced by the already-stamped Birman–Brendle coefficient-ring reference, while the
   Stacks Tag 00CM source was added to the coverage file with a full §10.9 harvest and fetch stamp. The Hatcher
   locator "section 4.1 (cellular homology)" in items 2, 4, 7 was corrected to section 2.2. The remark's stale
   "26-page" preprint count was dropped (the live fetched v1 has 28 pages; §5 records the version difference).
11. **Advisory warning.** `coverage-checklist --require-destination` now reports one `coverage-low-yield` warning
   (17 `included` of 48 harvested; the ratio fell because the Stacks reference-work contributes fourteen §10.9
   results, thirteen of them properly disposed out of scope for a Burau page). This is an advisory for Alpha at
   Step 5; every decline carries a specific reason and no harvested result is undisposed.
12. **Run-level ledger state.** `frontier-dependency-ledger.mjs refresh --run ...` exits 0; the `--require-reviewed`
   form still exits 1 run-wide because other batches have not supplied/scaffolded their inputs and the consumer rows
   toward this page (batches 6 and 8) are owned by them. Batch 5's own consumer input remains `[]`.

13. **Scope precision (item 21).** `thm-reduced-burau-is-faithful-for-at-most-three-strands` originally said
   "for 0 <= n <= 3", but `GL_{-1}` is undefined at n = 0 (the published braid definition does make B_0 trivial, so
   the phrase was not false about B_0, only ill-typed). The scope is now 1 <= n <= 3 with B_1 handled trivially and
   the substantive cases n = 2, 3; item 22 (which cites it) was re-recorded together with it.

Corrections 1–8 also change the *content* of items on the `requires`-closure border: no statement or proof of a
published item is affected, and no published consumer debt is created (the page is not yet spliced or authored).
