# Batch 25 scaffold notes — `lie-algebra-cohomology-and-kostants-nilradical-theorem`

Run `frontier-39-analysis-30`, role beta, label `batch-25`, covering pair
`lie-algebra-cohomology-and-kostants-nilradical-theorem` (A, order 510.021,
lie-theory) with companion `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples`
(B, order 510.022). Artifacts written: `research/frontier-39-analysis-30-batch-25.pages.json`
(18 items), `research/frontier-39-analysis-30-batch-25.coverage.json` (46 harvested
headings over 6 source records), 18 `research/frontier-39-analysis-30-step1-<item>.json`
readiness records, and `research/frontier-39-analysis-30-batch-25.cross-batch-dependencies.json` (`[]`).

## Read before construction

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`.
- Design: `research/plan-representation-theory-lie-track.md` §RL-11 at line 1195
  (the task's L792 pointer is a table mention, not a heading; the section was
  located and read in full, including the "Reconciled proof architecture"
  block and the A/B item tables).
- Plan: the `lie-algebra-cohomology-and-kostants-nilradical-theorem` entry of
  `research/plan-spec.json` (`items: []`, 8 declared `requires`).
- Run evidence: `research/frontier-39-analysis-30-alpha-step1-drift.md`
  (VERDICT drift-applied — compact-lie-groups-maximal-tori-and-peter-weyl-theory),
  `research/frontier-39-analysis-30-step1-owner-resolution.md` (owner resolution 3),
  `research/frontier-39-analysis-30-planning-notes.md`,
  `research/frontier-39-analysis-30-scope-ledger.json`, `.autopilot/frontier-39-analysis-30/state.json`.
- `briefs/tasks/frontier-dependency-ledger.md` and the existing batch inputs of
  `frontier-38-owner-30` for the input-file convention.
- Checked for `research/frontier-39-analysis-30-owner-authoring-direction.md`:
  **it does not exist**, so no run-local authoring direction overrides the design.

## Design vs plan; conflicts and corrections recorded

1. **Requires list.** The plan-spec `requires` array matches the design's
   declared contract, including the owner-resolved backward edge to
   `compact-lie-groups-maximal-tori-and-peter-weyl-theory`. No conflict.
2. **Retained duplicate claim.** The design's
   `prop-h-zero-is-the-invariant-subspace` restates the already-published DG-29
   `prop-zero-th-lie-algebra-cohomology-is-invariants` in the page's convention.
   It is retained (the design says to keep every item ID and claim) and its
   deps declare the published item; recorded here for the reconciliation
   ledger. No page split or escalation is needed.
3. **Source locator corrections.**
   - The design cites `E755 §45, pp.245–249` for the derived-invariants
     proposition. The full text shows §45.2 (pp.246–249) defines the
     trivial-coefficient Chevalley–Eilenberg complex; coefficients and the
     Ext connection are at OWTU §3.2.2, p.68 (statement) and E755 §48.1,
     pp.259–261. Those locators are recorded in the item's sources.
   - The design cites Goodman–Wallach "Appendix E, §§E.2.1–E.2.5 (printed
     pp.17–27)". The supplement is live at the Rutgers address; §E.2.1 begins
     on printed p.18 and §E.2.5 ends at p.27. Verified content: a Casimir
     identity **on cohomology** (Theorem E.2.1, Corollary E.2.2), the equality
     case (Lemma E.2.8) and the Weyl-character application (§E.2.6) — not a
     Chevalley–Eilenberg Laplacian identity on cochains. This matches the
     design's warning; the local anticommutator calculation remains an explicit
     authoring obligation of `lem-kostant-laplacian-is-scalar-on-weight-components`.
4. **Source slips, verified and not copied.**
   - OWTU Lemma 3.4.4 prints the equality clause `S = Φ^+`; its proof and
     Lemma 3.4.5 require `S = Φ^+(w) = {α>0 : w^{-1}α<0}` (for `w=1`, `S=Φ^+`
     already fails). Corrected in the scaffold and recorded in the coverage row.
   - OWTU Remark 3.4.6(ii) prints `ω ∈ B^p`; the argument requires a nonzero
     cocycle in `Z^p`, since an exact cochain cannot generate the asserted
     nonzero class. Recorded as an inline correction.
   - Woit p.4 uses `wβ < 0` while indexing by `wλ`; the plan's consistent
     convention is `w^{-1}α < 0`. Verified on A2 that the printed condition
     would give the wrong weight; the scaffold uses `w^{-1}α<0`.
5. **Foundations.** The HA-8 datum-comparison corollary
   `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable`
   assumes the Axiom of Dependent Choice, so `prop-lie-algebra-cohomology-is-derived-invariants`
   states DC and declares `def-dependent-choice`. This is inherited from the
   published HA supplier, not introduced by RL. All other choice statements are
   routed through their actual suppliers: AC for the RL-1 Harish–Chandra
   interface, DG-32 weight/extremality theory, DG-33 unitarizability and the
   injective-resolution corollary of HA-5. `def-inversion-set-of-a-weyl-group-element`
   and the two DG-29 boundary propositions are choice-free.
6. **Euler-class comparison uses separate character contexts.** The batch-25
   A13 statement now places the BGG alternating class in $K_0(\mathcal O_\lambda)$
   and the nilradical cohomology in finite-dimensional $\mathfrak h$-modules,
   then compares their formal characters after clearing the Verma denominator.
   No class equality across these categories is claimed. A11 now distinguishes
   its direct Kostant character sum from the separate BGG interpretation as the
   Weyl numerator. The design's BWB bridge stays prose (plan line 534); no
   spectral sequence is constructed, per the design.

## Inventory (18 items, dependency-ordered)

| id | kind | level | direct deps | statement / proof provenance |
|---|---|---|---|---|
| `prop-lie-algebra-cohomology-is-derived-invariants` | proposition | 0 | 13 | literature-derived / ai-altered |
| `prop-h-zero-is-the-invariant-subspace` | proposition | 0 | 5 | literature-derived / ai-altered |
| `prop-a-normalizer-acts-on-lie-algebra-cohomology` | proposition | 0 | 12 | literature-derived / ai-altered |
| `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` | lemma | 1 | 17 | literature-derived / ai-altered |
| `thm-casselman-osborne-nilradical-cohomology-constraint` | theorem | 2 | 13 | literature-derived / ai-altered |
| `def-inversion-set-of-a-weyl-group-element` | definition | 0 | 8 | literature-derived / not-applicable |
| `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` | lemma | 1 | 24 | literature-derived / ai-altered |
| `lem-kostant-laplacian-is-scalar-on-weight-components` | lemma | 2 | 31 | literature-derived / ai-altered |
| `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` | lemma | 3 | 8 | literature-derived / ai-altered |
| `thm-kostant-nilradical-cohomology-theorem` | theorem | 4 | 13 | literature-derived / ai-altered |
| `cor-kostant-cohomology-in-degrees-zero-and-top` | corollary | 5 | 8 | literature-derived / ai-altered |
| `cor-kostant-euler-character-recovers-the-weyl-numerator` | corollary | 5 | 8 | literature-derived / ai-altered |
| `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` | proposition | 6 | 11 | literature-derived / ai-altered |
| `ex-kostant-n-cohomology-for-sl2` | example | 6 | 11 | literature-derived / ai-altered |
| `ex-kostant-n-cohomology-for-the-trivial-sl3-module` | example | 5 | 8 | literature-derived / ai-altered |
| `ex-degree-one-kostant-classes-correspond-to-simple-reflections` | example | 5 | 9 | ai-altered / ai-altered |
| `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` | counterexample | 7 | 9 | literature-derived / ai-altered |
| `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` | counterexample | 7 | 8 | ai-generated / ai-generated, `generation.role: counterexample` |

The A page carries 13 items and the B page 5, well below the 100-item cap. No
item was added beyond the design's inventory: the metric, Hodge decomposition,
CE anticommutators and equality case are proved inside the two designated
lemmas, as the reconciled architecture requires.

## Dependency verification

- Every published supplier cited was read on disk at the statement level and, for
  the load-bearing ones, at the proof level: DG-29 CE complex/differential/long
  exact sequence/Whitehead lemmas, RL-1 Harish–Chandra projection and central
  characters, RL-6 `cor-bgg-euler-character-identity` (which is exactly the
  Weyl-numerator identity reused in A12–A13), the DG-30/31/32 root, length,
  weight and extremality items, DG-33 unitarizability and classification,
  HA-5 enough injectives, HA-8 Ext.
- No dependency is circular, forward, or missing. The A-page order is
  `A1..A13` with levels `0,0,0,1,2,0,1,2,3,4,5,5,6`; the B page is `6,5,5,7,7`.
  The two independent routes (Casselman–Osborne A4–A5, harmonic A7–A9) are both
  retained; the theorem's proof is the harmonic route specified by the design,
  and A4–A5 are the independent weight constraint, not a second dependency of
  A10.
- Page-level placement: every supplier page lies in the closure of the declared
  `requires` (checked against `research/plan-spec.json`), so no
  `undeclared-prereq` edge is introduced. The pages outside the direct list
  (DG-27, DG-30, the finite-Weyl invariants page, HA-5, RL-4 and the Hilbert
  inner-product page) are reached through that closure.
- The ai-generated counterexample row is not a dependency target of any item.

## Sources and dispositions

Two independent treatments plus a book appendix and a full lecture-note set:
Faisal Al-Faisal's Waterloo thesis (monograph, Chapter 3, printed pp.64–84),
Woit's G4344 notes (lecture notes, pp.1–7), Etingof's 18.755 notes (§45.2,
§48.1) and Goodman–Wallach's Appendix E (textbook supplement). All four were
fetched in full and stamped (`source-fetch-check`: 6/6 source records
fetch-verified, 0 drops); `url-sweep` reports 4/4 live. Every heading listed in
the coverage file carries an explicit disposition (included/inline/deferred/
already-published/out-of-scope); deferrals name `borel-weil-and-borel-weil-bott`
and `weyl-character-and-multiplicity-formulas` with reasons. No retrieval
failure occurred, so no `source_resolution` record was needed.

## Cross-batch dependencies

None: every supplier of this pair is a published item on an earlier page; no
consumer of this batch is in-run, and no in-run item is consumed. The input
file `research/frontier-39-analysis-30-batch-25.cross-batch-dependencies.json`
is therefore `[]`; `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
completed and registered batch 25 as reviewed with no edges.

## Published defects

No defect was found in the examined published suppliers. The only overlap is
the design-mandated restatement of DG-29's `prop-zero-th-lie-algebra-cohomology-is-invariants`
by `prop-h-zero-is-the-invariant-subspace` (row 2 above), recorded for the
reconciliation ledger; it is not a mathematical defect and does not block this
supplier. Unrelated published consumer debt was not investigated, per brief.

## Checks (actual results at record time)

| check | result |
|---|---|
| `manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json` | 164 items, 0 missing, 0 errors |
| `content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json` | 164 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run frontier-39-analysis-30` | no error mentions batch 25; the 48 remaining errors are `empty scaffold inventory` for batches still being scaffolded concurrently |
| `step1-decisions.mjs check --run frontier-39-analysis-30` | all 18 batch-25 items closed (`ready`); no stale batch-25 record |
| `coverage-checklist.mjs ... --require-destination` | 2 pages, 46 harvested results, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage ...` | 6/6 source records resolved (fetch-verified stamps) |
| `url-sweep.mjs --coverage ...` | 4/4 live, 0 failed |
| `source-backing.mjs --coverage ... --liveness ...` | 15 authored `included` results, every one backed |
| `validate-plan.mjs research/plan-spec.json` | OK (plan not yet spliced with this manifest; items are copied at Step 4) |
| `extcheck.mjs` / `fwdcheck.mjs --quiet` | OK (corpus-wide; no run-item files exist before Step 3) |

## Escalations and readiness

No escalation. No cross-batch change, new prerequisite pair or page split is
required: the complete local closure fits on the A/B pages as planned. All 18
items are recorded `ready` with their examined dependency IDs and evidence.
The local Chevalley–Eilenberg anticommutator expansion and the equality case in
`lem-kostant-laplacian-is-scalar-on-weight-components` are stated authoring
obligations of Step 3, with the normalization and target identities fixed in
the design; this scaffold claims no proof completion and no independent audit.


## Independent Step 3 proof audit handoff

An independent read-only audit confirms the RL-11 normalizations and target Casimir scalar are algebraically consistent, but no cited source supplies the local Chevalley–Eilenberg cochain anticommutator calculation. Step 3 must expand the mixed $A,D$ and exterior $D,D^*$ terms and show the non-Cartan root-action and off-diagonal exterior cancellations; “standard calculation” is insufficient. Keep the compact conjugation, Killing-form root-vector normalization, Cartan orthonormal basis, Casimir, and weight norm tied to the same form; conjugate structure constants in $D^*$; and retain the $w^{-1}\alpha<0$ inversion convention in the equality case. This audit is preparation only and does not certify a completed proof.

## Owner corrections after scaffold

The owner repaired the cross-category K-group claim in A13 and clarified A11's
independence wording. Both readiness records were refreshed; statements and
pair scope remain unchanged in substance. The A13 comparison now takes place in
the common formal-character completion after clearing the Verma denominator.


## Independent Step 3b closure audit — 2026-10-05

Reviewer lane: `/root/resume_b12_b14/audit_b14_core`; latest verified task is `frontier-39-analysis-30-step3b-pair-lie-algebra-cohomology-and-kostants-nilradical-theorem-0b8c5c0e8009f6dc.task.md` (latest on-disk mtime). Read CLAUDE.md and WORKFLOW.md; audited all eighteen current items supplier-first. Prior author receipts were current but did not certify the defects found below. No shared supplier, outside batch, page, or other pair was edited.

### Mathematical findings and repairs

1. `prop-lie-algebra-cohomology-is-derived-invariants`: Step 6.1 incorrectly treated finite-dimensional vector subspaces as Lie subalgebras; this fails for arbitrary Lie algebras and cannot prove the stated arbitrary-dimensional theorem. Rebuilt Steps 3.2–6.1 using the PBW filtration directly on the arbitrary ordered basis and the filtered colimit of finite polynomial-variable Koszul complexes. Filtration descent terminates for each element's finite degree. Corrected the chain identity order/detection in Step 3.1 and the free-module inverse target in Step 1.2. The arbitrary field/Lie algebra scope and essential AC assumption remain unchanged.
2. `prop-a-normalizer-acts-on-lie-algebra-cohomology`: Step 2.2 used the false sign identity x(x_i v)=-x_i(xv)+[x,x_i]v. Replaced its commutation argument with the explicit action-commutator and Jacobi cancellation; Step 2.1 now separates value and slot operators to give the correct representation identity. Cartan homotopy and quotient descent remain valid.
3. `lem-extremal-weight-cochain-for-a-weyl-element-is-closed`: the Statement incorrectly made a nonzero cohomology class independent of scalar choices. Owner approved the invariant one-dimensional cohomology line. Step 1.4 also used half-root exponents in the weight lattice and interchanged Phi_w with Phi_(w inverse); replaced it with the subset bijection from Step 1.3 and the W-invariant finite subset-sum character. All five direct consumers are B25 and were reviewed: Laplacian, harmonic-space lemma, Kostant theorem, sl2 example, and degree-one example. No outside consumer exists on the current item-reference scan.
4. `lem-kostant-laplacian-is-scalar-on-weight-components`: Step 2.1 used ad(f_r) as an endomorphism of n-plus although it does not preserve n-plus, and assigned a nonzero trace to its commutator. Use the projection P onto n-plus and F=P ad(f_r); the finite commutator has trace zero, while the explicit boundary operator R gives ||r|| squared and the root-decomposition coefficients. Corrected the leading Killing-pairing sign in Step 1.7 and the factor error in Step 3.1: square={d,d-star}, not one-half that expression. Added exact complex-classification, Cartan-conjugacy and simply-connected compact-form suppliers to F2 and integrated the given representation rather than its adjoint. Rechecked the CAR normal ordering, mixed root cancellations, Jacobi quartic reduction, Hodge decomposition and common metric/Casimir normalization. All original operator and scalar claims are retained.
5. Central-action supplier: clarified preservation of monomorphisms and the AC inherited from Ext, leaving dimension shifting and the unshifted Harish–Chandra identity unchanged.
6. Owner-approved endpoint/example corrections: degree-zero cohomology terminology; nonnegative integral m in the sl2 example and its rank-one consumer; explicit inherited AC in the examples; simple-reflection indexing comparison with the first BGG term without identifying finite cohomology lines with Verma modules. Direct consumers are confined to B25; their consumed mathematical clauses remain sound.
7. Rechecked remaining corollaries/examples: top degree, finite Euler numerator, cleared-denominator BGG comparison, A2 weights/dimensions, both rank-one counterexamples. Refreshed seventeen proof contracts; the Definition's existing contract is preserved. Corrected contract boundary prose confusing C0 with H0, the old finite Lie subalgebra route, exactness with the chain identity, direct sum with union, and the central-character equivalence directions.

### Frozen carriers and focused checks

Current batch scope: `49c35316f1de7146db2ba6a6372da9c3387ebbeda4a1a6518ad16828c2274cfa`. Source/manifest/contracts frozen; owner proceed refresh requested before ordinary receipts. All direct external suppliers are published; no open external B25 prerequisite or owner-held item row was found. Changed source count: eleven. Writes are confined to these B25 item files, batch-25 pages/proof-contracts/notes, and the forthcoming B25 review receipts. The cross-batch dependency file remains [] because no in-run outside supplier is consumed.

After the final source edit, explicit changed-path proof-layout: **11 items, 55 steps, 0 defects**. Final B25-only strict proof-contract check: **18/18 items checked, 0 errors, 0 warnings**. No tests, run gates or stage transitions were performed. A first focused strict-contract attempt reported five missing textual anchors in repaired boundary evidence; those anchors were repaired and the final attempt passed.

### Current transitive hashes at freeze

| Item | Hash |
|---|---|
| `def-inversion-set-of-a-weyl-group-element` | `d511689d00cf2e01bb436f6e87aa92e7c7e3dd9d2a780b4fc3449643aef7f3a7` |
| `prop-a-normalizer-acts-on-lie-algebra-cohomology` | `07528e6e4d01c32e6057415c4db487568e603a945cd17d7853f914b570ea87fe` |
| `prop-h-zero-is-the-invariant-subspace` | `e3aa644a5f04cc60119abd4b2cb7f8ed8281950c2a34e855a40aa8d23eb9805d` |
| `prop-lie-algebra-cohomology-is-derived-invariants` | `bf6047202bcb42c273d6a1a2cf1cde537fc21c6e6283c2d486095154a12609a1` |
| `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` | `f29d3193103b6471dac1de633c58df86939ec97d64715b5db983b9273c7b3b6d` |
| `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` | `24dc24d0a1be6e6bd6c292aba345f823400e825d0ef46e68e00fcb5a95577dbf` |
| `lem-kostant-laplacian-is-scalar-on-weight-components` | `426f2fdf3f643ea887f03ba509f413cf9857cbd0126d66ce0b60475a77f6d1b1` |
| `thm-casselman-osborne-nilradical-cohomology-constraint` | `c90a86d1109c0d6aeae6d0c492a8b4530b34872d4f871f54e68e98cbd2a45e35` |
| `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` | `4d8b6d59157a9690e657d376372df0d503b9c296420051640bf6fcde78cfe27e` |
| `thm-kostant-nilradical-cohomology-theorem` | `158955cc56f8bb89ce3155ffec8abd3ec425f1b85f8e951fcf6559a294c000a8` |
| `cor-kostant-cohomology-in-degrees-zero-and-top` | `83b74fe0c1d4bdfcf2665b585d7ecc29dfe88a59773b172e2f91dcc41eab5765` |
| `cor-kostant-euler-character-recovers-the-weyl-numerator` | `da290f0782d5f423d2e47934ce33ef341708bf3c9978b7359e1862ac73c05bd1` |
| `ex-degree-one-kostant-classes-correspond-to-simple-reflections` | `3188c167c2de973663c027de8e9ba63f0a7d0199f924a7f373940a234831d801` |
| `ex-kostant-n-cohomology-for-the-trivial-sl3-module` | `a8cef96e3e8144939b3aa5b2259d3066957a2895d726ec0a2c66aae8f5b67dd4` |
| `ex-kostant-n-cohomology-for-sl2` | `8ca62263924af53de204325566c0cdaab69e782b69a907d62eaf83252c360750` |
| `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` | `e5337a8886462dc9fe38a8677cb64745318dbef712c648284d6a75035c798a04` |
| `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` | `c116e75b1558534fa055c1ca1ee577d67772ef01fb6905781b298d8873f0f173` |
| `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` | `feff3c1fb86924070cfa6dbc9478ffcab38a3efb78d27b1a3040848b36a0d53d` |

### Final independent receipts and closure

The owner refreshed proceed at scope `49c35316f1de7146db2ba6a6372da9c3387ebbeda4a1a6518ad16828c2274cfa`. After rehashing each item and checking that all direct in-run suppliers were current, recorded eighteen ordinary confidence-1 accept receipts for B25 in dependency order. Final live inventory: **18/18 current closed**, no B25 item or external supplier blocker; scope current/closed. No content edit followed these receipts.

Exact source writes:

- `items/prop-lie-algebra-cohomology-is-derived-invariants.md`
- `items/prop-a-normalizer-acts-on-lie-algebra-cohomology.md`
- `items/lem-extremal-weight-cochain-for-a-weyl-element-is-closed.md`
- `items/lem-kostant-laplacian-is-scalar-on-weight-components.md`
- `items/lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra.md`
- `items/prop-h-zero-is-the-invariant-subspace.md`
- `items/ex-kostant-n-cohomology-for-sl2.md`
- `items/cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight.md`
- `items/ex-degree-one-kostant-classes-correspond-to-simple-reflections.md`
- `items/ex-kostant-n-cohomology-for-the-trivial-sl3-module.md`
- `items/cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical.md`

Other writes: B25 `.pages.json`, `.proof-contracts.json`, `.notes.md`, and the eighteen `frontier-39-analysis-30-step3b-review-<B25 ID>.json` rows listed in the hash table above. No cross-batch-dependency carrier change, shared supplier edit, outside consumer edit, test, gate or stage transition occurred.
