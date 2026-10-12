# Step 3b — pair `cyclotomic-klr-algebras-and-highest-weight-categorification`

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-cyclotomic-klr-algebras-and-highest-weight-categorification-cc6f9711587fe966`.
Owned A page: `cyclotomic-klr-algebras-and-highest-weight-categorification`
(order 1838, 28 items). Owned B page:
`cyclotomic-klr-algebras-and-highest-weight-categorification-examples`
(order 1839, 5 items), category `special-topics-in-representation-theory`.
Batch 11 holds only this pair, so the shared batch files hold no sibling rows.

Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`, the
dispatch task, the batch-11 manifest and coverage, the batch-11 notes, the Step
3a scope review (decision `sufficient`), the owner authoring direction sections
naming this pair, the owner cyclotomic first-strand/right-append convention
note, the plan design QG-8 (`research/plan-quantum-groups-track.md`), the
batch-11 cross-batch dependency input, and the batch-10 scaffold records of the
unfinished sibling suppliers.

## Entry checkpoint — owned item IDs (authoring order)

Level 2: `def-cyclotomic-klr-quotient-at-a-dominant-weight`,
`def-minimal-parabolic-klr-diagram-proof-category`.
Level 3: `lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action`.
Level 5: `def-cyclotomic-klr-induction-and-restriction-functors`.
Level 6: `lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings`,
`lem-generic-klr-induction-and-restriction-mixed-relations`,
`lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations`.
Level 7: `lem-klr-one-step-simple-restriction-induction-and-first-dot-index`,
`lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form`,
`thm-cyclotomic-klr-induction-is-projective-on-the-right`.
Level 8: `lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations`,
`lem-klr-two-color-jump-formula-and-strict-elementary-embeddings`,
`thm-cyclotomic-klr-sl-two-categorical-commutator`.
Level 9: `lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates`,
`lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action`,
`lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star`.
Level 10: `thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`.
Level 16: `lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors`,
`lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient`.
Level 17: `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`,
`lem-the-vacuum-projective-is-a-highest-weight-generator`,
`thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`.
Level 18: `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`,
B `ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two`, B
`ex-self-dual-shift-normalization-for-a-cyclotomic-projective`.
Level 19: `thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`,
B `cex-k-zero-categorification-alone-does-not-identify-a-global-basis`, B
`ex-the-categorical-sl-two-commutator-in-a-small-weight`.
Level 20: `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`,
B `ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block`.
Levels 30/31/32 (manifest currently records 28/29/30 — recomputed levels per
the dependency-level checker; rows to be updated):
`lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`,
`thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`,
`thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.

Open obligations at entry: author all 33 item files and both page files (no
item/page file for this pair exists yet — all 33 IDs are missing from
`items/`); keep the batch-11 manifest rows consistent with the authored items
(deps, `dependency_level` 30/31/32 for the last three); write
`research/frontier-44-special-representation-examples-28-batch-11.proof-contracts.json`;
refresh the batch-11 cross-batch dependency input; re-dispatch the item
decisions with `tools/step3-decisions.mjs record-item` after authoring and
checks; report completed IDs, checks run, added suppliers, published concerns
and open obligations.

Known unfinished sibling suppliers (batch 10, dispatched in parallel; all 15
item files absent at entry): the batch-10 scaffold records are the interim
statements for
`def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`,
`def-klr-grading-and-diagrammatic-composition`,
`def-klr-induction-and-restriction-bimodules`,
`thm-klr-pbw-basis-theorem`,
`thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives`,
`def-divided-power-klr-idempotents-and-projectives`,
`lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases`,
`lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head`,
`lem-klr-projective-duality-and-positive-divided-string-leading-terms`,
`def-the-klr-cartan-pairing`,
`thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
`thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations`,
`thm-klr-categorification-of-the-negative-quantum-half` and
`thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
Consumers of these are authored anyway; their decisions stay escalated until
the supplier files exist and the actual proof uses are reconciled. The three
conditional global-basis items stay escalated (owner-held geometric branch).

## Item log

Authoring order followed the dispatch (ascending dependency level, ties by page
order and item ID). All 33 item files and both page files were authored; the
convention throughout is the owner binding note: FIRST-strand cyclotomic
relation, RIGHT-append induction, based-quotient map `pi_Lambda o *`, word-mirror
generators `rho(e_nu)=e_rev nu`, `rho(x_a)=x_{n+1-a}`, `rho(tau_a)=-tau_{n-a}`.
Every item passed `precheck` (29 proof-bearing items; the 4 definitions are
skipped by the precheck), `rendercheck` OK, `proof-layout` 0 defects, and the
strict proof contract (33/33 items, 0 errors, 0 warnings). Decisions were
recorded with `tools/step3-decisions.mjs record-item` per item below.

### Level 2–3 (structural core)

- `def-cyclotomic-klr-quotient-at-a-dominant-weight` (L2, accept): the quotient
  `R_a^Lambda(beta)=R(beta)/J_a(beta)` by the first-strand monic relations, the
  standard choice `a_i(u)=u^{lambda_i}`, the graded/ungraded boundary and the
  first-strand/right-append convention. Suppliers: batch-10
  `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum`,
  `def-klr-grading-and-diagrammatic-composition` (consumed in the Definition).
  Sources: Kang–Kashiwara arXiv:1102.4677v4 Sec. 4.1 (4.1)-(4.3). Boundaries
  empty/zero/one/endpoints answered from the Definition; all checks clean.
- `def-minimal-parabolic-klr-diagram-proof-category` (L2, accept): the formal
  additive graded category with native crossing translated by `kappa=-tau`, the
  rank-one matrix and bubble slides. Sources: Elias–Williamson-style parabolic
  diagrams, Secs. 1.1–1.3 and 3.2 (cached full text). All checks clean.
- `lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action`
  (L3, accept): finite rank-one orbits, the rank-one adjoint module and the
  string bound giving local nilpotence. Suppliers: Drinfeld–Jimbo datum,
  quantum integers, sl2 string formulas, Pascal recurrence, Kashiwara i-string.
  All checks clean.

### Level 5–7 (functors, mixed relations, parabolic models)

- `def-cyclotomic-klr-induction-and-restriction-functors` (L5, accept):
  right-append induction `F_i^Lambda(M)=R^Lambda(beta+alpha_i)e(beta,i)⊗M` and
  restriction, with the adjunction. Consumes the batch-10 induction bimodules
  per its deps. Checks clean.
- `lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings` (L6, accept):
  monic dot-annihilator propagation, finite dimensionality, the tail vanishing
  and the ungraded monic branch. Sources: KK Lemma 4.2–4.3, Cor. 4.4. Clean.
- `lem-generic-klr-induction-and-restriction-mixed-relations` (L6, accept):
  generic mixed relations and the opposite-end exact sequence. Sources: KK
  Prop. 3.2–3.3, Cor. 3.4. Clean.
- `lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations`
  (L6, accept): the polynomial flag model realizes the graded relations with
  the prescribed signs and shifts. Clean.
- `lem-klr-one-step-simple-restriction-induction-and-first-dot-index` (L7,
  accept): unique simple socle/head of one-step restriction/induction, the
  first-dot index criterion `epsilon_i^LEFT<=lambda_i`, over the general field.
  Clean.
- `lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form` (L7, accept):
  PBW and bubble normal form with the finite coefficient slides. Clean.
- `thm-cyclotomic-klr-induction-is-projective-on-the-right` (L7, accept):
  right projectivity of cyclotomic induction via PBW and dot-annihilators.
  Clean.

### Level 8–10 (commutator, biadjunction, finiteness, symmetry)

- `lem-cyclotomic-cap-off-quotient-has-no-extra-downward-relations` (L8,
  accept): the cap-off quotient adds no downward relations. Clean.
- `lem-klr-two-color-jump-formula-and-strict-elementary-embeddings` (L8,
  accept): the general-Q jump formula, strictness and everywhere-positive
  extraction. Consumes batch-10 Krull–Schmidt at step 2.1. Clean.
- `thm-cyclotomic-klr-sl-two-categorical-commutator` (L8, accept): the
  categorical sl2 commutator in both weight-sign cases. Clean.
- `lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates` (L9,
  accept): coherent graded biadjunction and crossing mates with the defect
  shift. Clean.
- `lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action` (L9,
  accept): the normalized functors satisfy the full relations and local
  nilpotence. Clean.
- `lem-word-mirror-involution-of-a-klr-algebra-and-the-quantum-star` (L9,
  accept): the word-mirror anti-involution realizing the quantum star with the
  owner-recorded generator signs. Clean.
- `thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric` (L10,
  accept): finite dimensionality, nilpotent dots, the degree-`t_beta` trace and
  `D_psi P ≅ P^#{t_beta}`. Sources: KK Cor. 4.4 and Sec. 6. Clean.

### Level 16–20 (covers, K_0/G_0, crystals)

- `lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors`
  (L16, accept): canonical extraction and the survivor criterion, with the
  inherited Axiom of Choice recorded at step 5.1 and `def-axiom-of-choice` in
  the deps. Clean.
- `lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient`
  (L16, accept): normalized covers and dualities descend through the quotient.
  Clean.
- `def-cyclotomic-klr-diagram-duality-and-graded-module-duals` (L17, accept):
  vector `D_psi` and projective `#` dualities, normalized representatives and
  the defect comparison; distinguishes the two dualities in rank one.
  Boundaries answered from the Definition. Clean.
- `lem-the-vacuum-projective-is-a-highest-weight-generator` (L17, repaired):
  `U_A^-1_Lambda=K_0(R^Lambda)` by divided words. Repair: added the consumed
  `def-cyclotomic-klr-quotient-at-a-dominant-weight` dependency to the item and
  manifest. Clean after repair.
- `thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`
  (L17, accept): the normalized action on `K_0` and `G_0` with the mixed
  relations. Clean.
- `thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`
  (L18, repaired): `K_0(R^Lambda) ≅ V_A(Lambda)` compatible with bases and the
  perfect pairing. Repair: cited the previously unlinked suppliers actually
  used — `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`
  and `def-quantum-verma-module-and-simple-highest-weight-quotient` (universal
  property, step 2.1), `def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules`,
  `def-lusztig-divided-power-integral-form` (integral form, step 2.1), and
  `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`,
  `thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
  `def-the-klr-cartan-pairing` (pairing, step 3.1) — and resynced deps,
  manifest, cross-batch input and contract. Clean after repair.
- `thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`
  (L19, accept): `G_0` is the restricted dual, keeping the canonical and KK
  normalizations distinct. Clean.
- `thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`
  (L20, accept): simple and projective crystals agree with `B(Lambda)`.
  Clean.

### Examples page (B)

- `ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two` (L11, repaired): the
  rank-0/1/2 blocks, the `NH_2/(x_1^2) ≅ P_{i,2}^{⊕(q+q^{-1})}` decomposition
  and the inhomogeneous deformation boundary. Repair: cited the PBW supplier
  `thm-klr-pbw-basis-theorem` for the nil-Hecke basis asserted in F1 and
  resynced deps, manifest and contract. Clean after repair.
- `ex-self-dual-shift-normalization-for-a-cyclotomic-projective` (L18, accept):
  projective Hom duality centers the rank-one regular module at `0` while
  vector duality centers it at `-(lambda-1)`. Clean.
- `cex-k-zero-categorification-alone-does-not-identify-a-global-basis` (L19,
  repaired): the rank-two witness `[R^Lambda(2 alpha_i)]=(q+q^{-1})[P_{i,2}]`
  versus `F_i^{(2)}v`. Repair: moved the `Given` and `[F1]`,`[F2]` facts into
  `## Facts & Assumptions` (they had been left under `## Counterexample`), so
  the labelled facts and the numbered steps are both parsed; contract
  regenerated. Clean after repair.
- `ex-the-categorical-sl-two-commutator-in-a-small-weight` (L18, accept): the
  vacuum commutator and its `K_0` evaluation at `Lambda=2Lambda_1`. Clean.
- `ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block` (L20,
  accept): the cover/simple pairing, the `(q+q^{-1})` scalar and the restricted
  dual. Clean.

### Levels 30–32 (conditional global bases — escalated)

- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient` (L30,
  escalate, defect `dependency`): the lemma is authored with the raw map
  `pi_Lambda o *` and FIRST/RIGHT cancellation, but its F1/F3 uses depend on the
  owner-held geometric branch supplying the generic global-basis input; all
  local gates are clean. Open obligation: owner resolution of the geometric
  branch, then reconcile `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`
  with `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`
  and `thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module`.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
  (L31, escalate, defect `dependency`): same owner-held branch through
  `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`; local gates
  clean.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`
  (L32, escalate, defect `dependency`): depends on the escalated cyclotomic
  lower-basis theorem and the QG-5 duality; local gates clean.

## Handoff

**Completed IDs.** All 33 dispatched IDs are authored: A page
`cyclotomic-klr-algebras-and-highest-weight-categorification` (28 items, levels
2–32) and B page `-examples` (5 items, levels 11–20), plus both page files with
their `requires`/inventory. No new item IDs were added: every scaffold ID is an
original ID and received an ordinary current item decision (30 accept/repaired,
3 escalate).

**Checks actually run (batch-11 explicit paths).**
`precheck.mts` over all 33 item paths: 29 checked, 0 failing. `rendercheck.mjs`
over all 33: OK (33 files, no wikilink-in-math or delimiter problems).
`proof-layout.mjs` once at the end over all 33 changed item paths: 33 items,
128 steps, 0 defects. `proof-contract.mjs … -batch-11.proof-contracts.json
--strict`: 33/33 items, 0 errors, 0 warnings (citations, per-step inputs and
all eight boundary dispositions per item). `manifest-deps.mjs` batch-11
manifest: 33 items, 0 errors. `content-policy.mjs` batch-11 manifest: 33
scoped items, 0 errors, 0 warnings. `item-dependency-levels.mjs check --run`:
no batch-11 row flagged (the 5 reported errors are pre-existing rows of other
batches; the run-wide command exits nonzero through them and is not owed by
this pair). `coverage-checklist.mjs --require-destination`: 2 pages, 66
harvested rows, 0 errors. `source-fetch-check.mjs --coverage`: 13/13 sources
fetch-verified. `validate-plan.mjs research/plan-spec.json --run`: exit 1 with
exactly 2 `undeclared-prereq` errors and 0 `intra-order`/forward-ref errors on
this pair; both errors are on other pages (`equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
`ariki-categorification-and-graded-decomposition-numbers`) and are reported
for Step 4, not hidden. `frontier-dependency-ledger.mjs refresh --run`: run
after the cross-batch input update. `step3-decisions.mjs check --phase final`:
30 of 33 owned items closed; the 3 escalations are exactly the conditional
global-basis items.

**Added suppliers/declarations.** No prerequisite item was created (none was
missing from library+scaffold). Dependency declarations added during repair:
`lem-the-vacuum-projective-is-a-highest-weight-generator` gains
`def-cyclotomic-klr-quotient-at-a-dominant-weight`;
`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`
gains `def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules`,
`def-lusztig-divided-power-integral-form`,
`def-quantum-verma-module-and-simple-highest-weight-quotient`,
`def-the-klr-cartan-pairing`,
`thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
`thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form`,
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`
(with inline citations at proof steps 2.1 and 3.1);
`ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two` gains
`thm-klr-pbw-basis-theorem` (cited in F1).

**Cross-batch input.** `research/frontier-44-special-representation-examples-28-batch-11.cross-batch-dependencies.json`
now holds 129 rows (63 open, 53 verified review records preserved untouched, 13
removed). All 4 page edges and every declared batch-11 cross-batch item edge
has a row; the 3 previously missing edges were added
(`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module ←
def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules`;
`lem-klr-one-step-simple-restriction-induction-and-first-dot-index ←
def-klr-grading-and-diagrammatic-composition`;
`lem-klr-two-color-jump-formula-and-strict-elementary-embeddings ←
lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases`). Open rows
record the actual authored use location (proof step(s) or section) or, for
declared-but-uncited rows, that finding; the 13 `removed` rows state that the
authored consumer's deps and full text no longer reference the supplier. The
three owner-escalated conditional items keep all their rows open with the
escalation recorded. The unified ledger was refreshed (3 batch-11 orphaned
review rows remain: the two in-batch escalation edges and the published-page
`grothendieck-groups-and-graded-cartan-pairings` prerequisite edge, retained
deliberately as records). Batch 10 was re-surveyed at handoff: all 20 batch-10
item files exist, so no assigned consumer has an unfinished supplier file any
more; supplier proof certification is Step 5 work.

**Published concerns.** None confirmed. One confirmed authoring defect was
found and repaired (the unlinked universal-property/pairing suppliers of the
`K_0` theorem; the mis-placed facts of the counterexample; the missing PBW
citation). Residual items for Step 5, not claimed solved here: (i) the 63 open
cross-batch rows (60 item rows plus the 3 page edges) include 6
declared-but-uncited item edges and several transitive-only edges whose
load-bearing status the supplier-first review must confirm;
(ii) run-wide noise not owned by this pair (5 dependency-level errors on
perverse-sheaf items, 2 `validate-plan` `undeclared-prereq` errors on other
pages) is unchanged.

**Open obligations.** The three escalated conditional items above; the Step-5
supplier-first review of the batch-11 input rows; and Step 4's review of the
two pre-existing `validate-plan` errors outside this pair. Nothing in this
handoff is marked complete that is not closed by a current receipt.
