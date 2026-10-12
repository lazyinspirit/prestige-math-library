# Step 3b — scaffold audit and authoring: `ariki-categorification-and-graded-decomposition-numbers`

Run `frontier-44-special-representation-examples-28`, batch 25 (orders 1842/1843),
role `alpha-high`, label
`step3b-pair-ariki-categorification-and-graded-decomposition-numbers-2f4d24b550deea37`.
A page `ariki-categorification-and-graded-decomposition-numbers` (26 scaffold
items), B page `ariki-categorification-and-graded-decomposition-numbers-examples`
(2 scaffold items). Category `special-topics-in-representation-theory`. Report
opened at entry 2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A page, in the dispatch's dependency order (level, then page order, item ID):

| level | id |
|---:|---|
| 0 | `def-tableau-domination-order-garnir-tableaux-and-bricks` |
| 0 | `lem-integer-cyclic-presentation-descends-the-simple-head-generator-line` |
| 21 | `lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels` |
| 22 | `lem-standard-fock-vectors-expand-in-the-upper-global-basis` |
| 33 | `def-graded-module-and-projective-grothendieck-groups-for-klr-towers` |
| 33 | `def-nondegenerate-root-of-unity-level-one-hecke-regime` |
| 34 | `def-graded-cartan-pairing-between-projectives-and-modules` |
| 34 | `def-graded-specht-module-by-homogeneous-standard-tableaux` |
| 34 | `def-integral-form-of-the-cyclotomic-hecke-klr-block` |
| 35 | `lem-degree-and-codegree-of-standard-tableaux` |
| 35 | `lem-graded-algebra-isomorphism-transports-the-graded-module-category` |
| 36 | `prop-qg8-categorification-transports-across-the-hecke-klr-bridge` |
| 36 | `prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux` |
| 37 | `thm-graded-specht-module-has-homogeneous-tableau-basis` |
| 38 | `lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator` |
| 38 | `thm-graded-specht-restriction-has-the-removable-node-filtration` |
| 39 | `thm-graded-specht-classes-realize-standard-fock-vectors` |
| 40 | `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group` |
| 40 | `thm-ariki-canonical-basis-theorem-in-characteristic-zero` |
| 41 | `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero` |
| 42 | `thm-graded-specht-heads-classify-the-graded-simple-modules` |
| 43 | `lem-reduction-of-characteristic-zero-simple-modules-modulo-p` |
| 44 | `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree` |
| 45 | `def-graded-adjustment-polynomials-in-positive-characteristic` |
| 46 | `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment` |
| 47 | `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers` |

B page: `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`
(level 42), `cex-specializing-v-to-one-forgets-graded-decomposition-information`
(level 43).

Open obligations at entry:

1. Audit the owner-integrated NEW25 scaffold (statements, strategies, sources,
   direct suppliers, proof route) against current on-disk inputs.
2. Author all 28 item files under `items/` in the dependency order above.
3. Author both pages under `library/special-topics-in-representation-theory/`.
4. Write `research/frontier-44-special-representation-examples-28-batch-25.proof-contracts.json`.
5. Run the dispatch checks (proof-layout, precheck, rendercheck, content
   policy, strict proof contracts, dependency levels, validate-plan).
6. Reconcile actual supplier uses; flag each unfinished supplier with its exact
   ID and consuming step; record item decisions.
7. Preserve the shared batch files, plan, coverage and all owner decisions; no
   publication, no gate, no owner stamp, no shared-ledger write.

## Supplier status at entry (audited, not assumed)

Direct in-run prerequisite pairs named by the dispatch, with their batch and the
number of item files present at entry (`items/<id>.md` counts):

| pair | batch | item files at entry |
|---|---|---|
| `level-one-fock-space-and-residue-crystals` | 23 | 8/8 authored |
| `quantum-affine-type-a-and-level-one-fock-space` | 9 | 29/29 authored |
| `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` | 50 | partial |
| `cyclotomic-klr-algebras-and-highest-weight-categorification` | 11 | partial |
| `cyclotomic-hecke-and-quiver-hecke-algebras` | 24 | 0/47 authored |
| `klr-algebras-induction-and-quantum-serre-categorification` | 10 | 0/20 authored |

Consumers of items whose files are absent are authored anyway; each consumer's
decision is escalated until the supplier file lands and the actual proof use is
reconciled. Exact supplier/consumer/step rows are appended in the checkpoint log
below.

## Checkpoint log

(Updated after each item; resume here.)

### Checkpoint 0 — report opened, nothing edited yet

Owned IDs and obligations recorded above; scaffold manifest, coverage,
cross-batch input, Step 3a review and owner-authoring direction read; the four
NEW25 local-helper drafts located under
`research/frontier-44-special-representation-examples-28-owner-native24-cyclotomic-consumer-review/native25-consumer-review/`.

### Checkpoint 1 — authoring pass complete (all 28 items, both pages, contracts)

Consolidated at handoff from the current files, the recorded receipts and fresh
check runs (not from memory; the per-item text was re-read where the ledger
below names a supplier). All 28 assigned items are fully authored under
`items/` in the dispatch's dependency-level order (ties by page order and item
ID); both pages are authored under
`library/special-topics-in-representation-theory/`; and
`research/frontier-44-special-representation-examples-28-batch-25.proof-contracts.json`
covers 28/28 items. The four owner-native NEW25 helper proof drafts were
converted into the library items `lem-integer-cyclic-presentation-descends-the-simple-head-generator-line`,
`lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels`,
`lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator`
and `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`.
No item or page ID was added, removed or re-homed; the only claim-level
adjustments are the four `nontrivial grading` phrases repaired to match the
completed batch-24 corollary's actual statement (recorded in the supplier
reconciliation section below). All 28 IDs are original scaffold IDs (they appear in the immutable
`research/frontier-44-special-representation-examples-28-step3-auditor-baseline.json`
items list), so all 28 received ordinary current item decisions; the batch
contains no engine-certified new additions.

**Conventions carried through the pair.** Hecke parameter `ξ` and grading
variable `q` are kept independent (no `ξ=q²` identification); the KLR tower and
the Hecke tower Grothendieck groups are kept distinct (`K_0^gr ≠ G_0^gr`); the
graded Specht module is the LEFT Murphy cell module obtained by star conversion,
with the homogeneous tableau basis proved via the shifted-degree/Garnir
machinery; Specht classes are the standard Fock vectors, the characteristic-zero
graded decomposition numbers are the global-basis transition polynomials, and
the normalized self-dual simples are the upper global basis. The (C0)
crystal/head label comparison `D(λ) ≅ Ḋ(λ)` is asserted; the (CP) analogue
[BK 2009, Theorem 5.18] is deliberately NOT asserted and is covered locally by
`lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`;
the adjustment matrix is not asserted to be the identity, and the final remark
records the unsolved general positive-characteristic boundary. Choice is stated
and propagated exactly where it is transported through the QG-8 suppliers
(`def-axiom-of-choice` is declared on every item that records inherited AC).

| level | item | authoring basis / direct suppliers read | decision |
|---:|---|---|---|
| 0 | `def-tableau-domination-order-garnir-tableaux-and-bricks` | BKW §3.2–3.4 tableaux/Bruhat/Garnir conventions, proved locally over published `def-bruhat-order-on-the-symmetric-group` and `lem-bruhat-order-basic-properties-for-permutations` | accept |
| 0 | `lem-integer-cyclic-presentation-descends-the-simple-head-generator-line` | NEW25 owner-native draft; regular-trace radical base change and saturated annihilator lattice | accept |
| 21 | `lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels` | NEW25 owner-native draft; batch-10/11/23 tail, one-step, divided-power, crystal and duality suppliers | accept |
| 22 | `lem-standard-fock-vectors-expand-in-the-upper-global-basis` | Fock/global-basis expansion over published unitriangularity inputs | accept |
| 33 | `def-graded-module-and-projective-grothendieck-groups-for-klr-towers` | two-tower restricted-sum definition, blockwise transport | escalate |
| 33 | `def-nondegenerate-root-of-unity-level-one-hecke-regime` | level-one nondegenerate regime definition, branches (C0)/(CP) | escalate |
| 34 | `def-graded-cartan-pairing-between-projectives-and-modules` | blockwise specialization of the graded Hom pairing | accept |
| 34 | `def-graded-specht-module-by-homogeneous-standard-tableaux` | LEFT Murphy cell module, `z_T`/`v_T` and the recursive tableau degree | escalate |
| 34 | `def-integral-form-of-the-cyclotomic-hecke-klr-block` | free integral form of the cyclotomic block | escalate |
| 35 | `lem-degree-and-codegree-of-standard-tableaux` | degree/codegree recursion and shifted-degree bookkeeping | accept |
| 35 | `lem-graded-algebra-isomorphism-transports-the-graded-module-category` | restriction/extension along a homogeneous isomorphism | escalate |
| 36 | `prop-qg8-categorification-transports-across-the-hecke-klr-bridge` | QG-8 global-basis transport across the blockwise Hecke–KLR bridge | escalate |
| 36 | `prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux` | shifted degrees, Garnir exchanges and weak-graph edges | accept |
| 37 | `thm-graded-specht-module-has-homogeneous-tableau-basis` | homogeneous tableau basis of the graded Specht module | accept |
| 38 | `lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator` | NEW25 owner-native draft; rational Garnir kernel lines and integral saturation | accept |
| 38 | `thm-graded-specht-restriction-has-the-removable-node-filtration` | removable-node filtration with exact source shifts | accept |
| 39 | `thm-graded-specht-classes-realize-standard-fock-vectors` | Specht classes equal the standard Fock vectors | accept |
| 40 | `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group` | basis corollary in `G_0^gr` | accept |
| 40 | `thm-ariki-canonical-basis-theorem-in-characteristic-zero` | Ariki canonical-basis identification via transported QG-8 | accept |
| 41 | `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero` | graded decomposition numbers = global-basis transition coefficients | accept |
| 42 | `thm-graded-specht-heads-classify-the-graded-simple-modules` | cellular head classification, both branches; Choice declared | repaired |
| 42 | `ex-projective-versus-simple-grothendieck-classes-in-a-small-block` (B) | small nonsemisimple block: `[P]≠[D]` while dual bases | escalate |
| 43 | `lem-reduction-of-characteristic-zero-simple-modules-modulo-p` | lattice reduction of characteristic-zero simples | accept |
| 43 | `cex-specializing-v-to-one-forgets-graded-decomposition-information` (B) | `v=1` forgets graded shift information | accept |
| 44 | `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree` | NEW25 owner-native draft; local (CP) label agreement | accept |
| 45 | `def-graded-adjustment-polynomials-in-positive-characteristic` | bar-invariant adjustment coefficients through reduced classes | accept |
| 46 | `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment` | factorization `Σ_ν a_{λν}(v)d_{νμ}(v)`; no identity adjustment claimed | accept |
| 47 | `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers` | boundary remark, no proof obligation | accept |

The seven `escalate` rows above are the owner-held receipts exactly as recorded
before the batch-24 suppliers landed; the reconciliation below supersedes their
gap text on disk but does not (and may not) move the receipts.

## Supplier reconciliation at handoff — the three former blockers

The three batch-24 (`cyclotomic-hecke-and-quiver-hecke-algebras`) suppliers
were the only unauthorized suppliers at the time the seven consumer decisions
were recorded (12:41 UTC). They landed on disk during this dispatch — at
12:46:40 (`def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`,
precheck n/a as a definition), 12:47:07
(`thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism`, precheck pass) and
12:48:41 (`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`,
precheck pass) — so no supplier remains missing at handoff. Their statements
were read in full and reconciled against the exact consuming uses:

| supplier | owned consumers and exact consuming steps | reconciliation |
|---|---|---|
| `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` | `def-graded-module-and-projective-grothendieck-groups-for-klr-towers` (definitional "two towers (ii)" clause, [F5], steps 1.3–1.4); `def-nondegenerate-root-of-unity-level-one-hecke-regime` ([F6], steps 1.1, 1.3, 2.1); `def-integral-form-of-the-cyclotomic-hecke-klr-block` ([F2], steps 1.2, 1.3, 2.1); `lem-graded-algebra-isomorphism-transports-the-graded-module-category` ([F3], steps 2.2, 3.1); `prop-qg8-categorification-transports-across-the-hecke-klr-bridge` ([F4], steps 1.1–1.4, 2.1) | matches: mutually inverse normalized isomorphisms ρ, σ (ρ(e(i))=e(i), dot images (1-q^{-i_r}X_r) and (x_r-i_r)), both q≠1 and q=1 branches |
| `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks` | `def-graded-module-...` (definitional two-tower clause); `def-nondegenerate-...` ([F6], steps 1.1, 1.3, 2.1); `ex-projective-versus-simple-grothendieck-classes-in-a-small-block` ([F1], step 1.1) | matches: central residue-sequence idempotents e(ν), content idempotents e_α, and H^Λ_α = e_αH^Λ_d blocks, with the level-one finite-Hecke dictionary |
| `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` | same five as the blockwise isomorphism, plus `def-graded-specht-module-by-homogeneous-standard-tableaux` (declared grading clause) and `ex-projective-...` ([F2], step 1.2) | **qualified**: the corollary transports a ℤ-grading unique for a fixed admissible series and exhibits a nontrivial witness (level-one e=2 rank two), but explicitly does NOT assert that every block is nontrivially graded (one-dimensional level-one rank-two e=3 blocks are trivially graded). Four consumers over-claimed "nontrivial" and were repaired (below); no other use claims blockwise nontriviality |

The corollary finding was reconciled as an authoring repair, not hidden: the
unqualified phrase "nontrivial grading" was replaced by "transported grading"
in `def-graded-module-...` [F5] and `def-integral-form-...` [F2]; the step 1.3
of `def-nondegenerate-...` now states the transported ℤ-grading, nontrivial on
the corollary's e=2 rank-two sector and trivial on a one-dimensional block; and
`ex-projective-...` [F2] now reads "the transported grading (nontrivial for
this e=2 rank-two block, the corollary's explicit witness)", which is exactly
the corollary's witness case. The affected item bodies were re-authored, and
the batched `proof-layout`, `precheck`, `rendercheck`, contracts regeneration
and the strict contract/boundary/citation/finite-smoke checks were all re-run
clean afterwards.

Because only the owner may move a recorded escalation, the seven receipts for
these consumers remain `escalate --defects ["dependency"]` (each reason records
the supplier IDs and consuming steps as they stood at 12:41); after the
suppliers landed, `step3-decisions check --phase final` reports exactly these
seven as "changed inputs require a current owner decision", with the other 21
owned items closed. Owner resolution after this reconciliation is the only
remaining bookkeeping step.

## Landed in-run suppliers — reconciliation status

All other suppliers that were unfinished at entry (the batch 9/10/11/23/50
items named in the entry table and in the Step 3a notes, plus the three batch-24
suppliers above) are now on disk
(`status: draft`, precheck pass). The previously flagged set was re-read at
statement level against the exact F-block use in each owned consumer, covering
`def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras` (degrees
`deg y_r=2`, `deg ψ_r e(i)=-a_{i_r i_{r+1}}`, ψ=-τ convention),
`def-affine-and-cyclotomic-type-a-hecke-algebras`,
`thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric`,
`def-cyclotomic-klr-diagram-duality-and-graded-module-duals` (unique
D_ψ-self-dual representative, normalized cover `Hom⁰(P,S)=k`),
`thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero`
(E_i/F_i normalizations, tensor pairing), the lower/upper global-basis theorems,
`thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module`,
`thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module`,
`thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda`,
`lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head`,
`lem-klr-one-step-simple-restriction-induction-and-first-dot-index`,
`def-divided-power-klr-idempotents-and-projectives`,
`prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`,
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`,
`thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`,
`cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`,
`thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular` and
`lem-cyclotomic-hecke-algebra-basis-and-dimension`. No statement-level
mismatch was found among these (the one mismatch found across the whole flagged
set is the batch-24 corollary's nontriviality qualification handled in the
previous section), and consumers of these suppliers are recorded `accept` or
`repaired` accordingly. The full step-by-step proof-use audit of these
suppliers remains the independent Step 5–7 work.

## Checks run (exact commands and current results)

| check | command | result |
|---|---|---|
| proof layout (final, batched) | `node tools/proof-layout.mjs <28 item paths>` | **28 items, 140 steps, 0 defects** (rerun after the last item edit) |
| precheck | `node tools/tsx-run.mjs tools/precheck.mts <28 item paths>` | **27 checked, 0 failing — all clean** (remark not applicable); the four wording-repaired items rechecked after the repair: 4 checked, 0 failing |
| rendering | `node tools/rendercheck.mjs <28 items + 2 pages>` | **30 file(s) OK** |
| content policy | `node tools/content-policy.mjs research/...-batch-25.pages.json` | **28 scoped item(s), 0 error(s), 0 warning(s)** |
| manifest deps | `node tools/manifest-deps.mjs research/...-batch-25.pages.json` | **28 item(s), 0 errors** (after manifest deps sync) |
| strict proof contracts | `node tools/proof-contract.mjs research/...-batch-25.proof-contracts.json --strict` | **0 error(s), 0 warning(s), 28/28 item(s)** (contracts regenerated after the wording repair) |
| boundary audit | `node tools/boundary-audit.mjs <contracts> --fail-on-contradicted --fail-on-template` | exit 0; no contradicted rows, no template clusters |
| citation fidelity | `node tools/citation-fidelity.mjs <contracts> --fail-on-missing-quote` | no missing quote, no widening candidates |
| finite smoke | `node tools/finite-smoke.mjs <contracts>` | 0 error(s), 0 obligations |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28` | **868 item(s) across 100 page(s), maximum level 47, exit 0**; no mismatch for any owned item |
| validate-plan | `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28` | 1 run-level error, **not** this pair (below); the pair's former `undeclared-prereq` is cleared; 38 inherited `redundant-prereq` advisories name this A page's plan `requires` list |
| splice dry-run | `node tools/splice-plan.mjs --run frontier-44-special-representation-examples-28 --batch 25 --dry-run` | **batch 25 WITHHELD — 1 requires edge awaits adjudication**: `ariki-categorification-and-graded-decomposition-numbers: kazhdan-lusztig-bases-polynomials-and-cells` |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-25.coverage.json --require-destination` | 2 page(s), 79 harvested result(s), 0 error(s), 0 warning(s) |
| source fetch | `node tools/source-fetch-check.mjs --coverage research/...-batch-25.coverage.json` | 11/11 fetch-verified, 11/11 resolved (0 documented drops) |
| scope integrity | `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` | 100 page(s) owed, 100 in the manifests, no scope drift |
| depcheck (scoped) | `node tools/depcheck.mjs --items-file /tmp/f44b25/items.json` | **OK — selected item/page checks and prerequisite cycle checks passed**; repo-wide filtering shows no finding naming any of the 28 (earlier: 15 `[dep-unresolved]` rows for the then-missing suppliers, all now resolved) |
| fwdcheck (scoped) | `node tools/fwdcheck.mjs --items-file /tmp/f44b25/items.json` | **OK — selected item/page checks and forward cycle checks passed** |
| extcheck (scoped) | `node tools/extcheck.mjs --items-file /tmp/f44b25/items.json` | 28 items, 0 recorded-not-proved, 0 resting on them — OK |
| Step 3 decisions | `node tools/step3-decisions.mjs check --run ... --phase scope` / `--phase final` | scope: only the sibling `level-one-fock-space-and-residue-crystals` pair is open, ours closed; final: **21 owned items closed** (accept/repaired) and exactly the 7 escalation receipts open as "changed inputs require a current owner decision" |

## Item decisions recorded

Receipts `research/frontier-44-special-representation-examples-28-step3b-review-<id>.json`:
**20 `accept`** (unchanged acceptance, defects `[]`), **1 `repaired`**
(`thm-graded-specht-heads-classify-the-graded-simple-modules`, defects
`["dependency"]`: the missing declared `def-axiom-of-choice` dependency for the
stated Choice inheritance was added), and **7 `escalate`** with defects
`["dependency"]` for the unfinished batch-24 suppliers:
`def-graded-module-and-projective-grothendieck-groups-for-klr-towers`,
`def-nondegenerate-root-of-unity-level-one-hecke-regime`,
`def-graded-specht-module-by-homogeneous-standard-tableaux`,
`def-integral-form-of-the-cyclotomic-hecke-klr-block`,
`lem-graded-algebra-isomorphism-transports-the-graded-module-category`,
`prop-qg8-categorification-transports-across-the-hecke-klr-bridge` and
`ex-projective-versus-simple-grothendieck-classes-in-a-small-block`. Each
reason names the exact supplier IDs and consuming steps as they stood when the
receipts were recorded (12:41 UTC, before the suppliers landed). The three
suppliers then landed during the dispatch and their actual uses were
reconciled (previous section), including the four-item wording repair for the
transported grading; the 21 non-escalated receipts were re-recorded against the
post-repair inputs and are closed, while the 7 escalation receipts remain
owner-held because only the owner may resolve an escalation. No `--owner`
recording and no judge/audit stamp was used.

## Manifest, scope, requires and plan reconciliation

- **Manifest item-dep sync (3 items).** The authored frontmatter deps were
  propagated into the batch manifest so the plan splice carries the actual
  edges: `def-tableau-domination-order-garnir-tableaux-and-bricks` added
  published `def-bruhat-order-on-the-symmetric-group` and
  `lem-bruhat-order-basic-properties-for-permutations`;
  `thm-graded-specht-classes-realize-standard-fock-vectors` added same-page
  `lem-degree-and-codegree-of-standard-tableaux`;
  `def-graded-adjustment-polynomials-in-positive-characteristic` added
  same-page `def-graded-module-and-projective-grothendieck-groups-for-klr-towers`.
  The manifest now matches every item's `deps` list exactly. All four additions
  are published or same-batch edges, so no in-run dependency level changes
  (level check green, levels unchanged).
- **One further declared dep.** `def-axiom-of-choice` was added to the heads
  item file and manifest as the declared Choice carrier (published item on
  `relations-functions-and-quotients`, already inside the page's `requires`
  closure), recorded `repaired`.
- **Page `requires` refresh (11th entry) and Step 4 plan amendment.**
  `def-tableau-domination-order-garnir-tableaux-and-bricks` genuinely uses
  published `lem-bruhat-order-basic-properties-for-permutations` for the
  transposition criterion (F6, step 1.1), whose home page
  `kazhdan-lusztig-bases-polynomials-and-cells` (order 1540) was not in the
  page's declared `requires` closure. The edge was added to the batch-25
  manifest and to the library A page's `requires` list. `research/plan-spec.json`
  was NOT edited (Step 4 territory); consequently the Step 4 splice records a
  refusal: batch 25 is withheld until an adjudicating Alpha decides the edge
  (`splice-plan --accept-requires` after adjudication). The justified remedy is
  to accept it; the alternative (dropping the dep) would require restating the
  published Bruhat cover-chain facts locally and is not recommended.
- **Scope decision still current.** `step3-decisions` scope hashing covers
  page/item identity plus statement; deps/`requires` edits do not invalidate
  the recorded `sufficient` scope decision, and the scope check remains closed
  for this pair. No owner-held decision was overridden and no verdict stamp was
  added.
- **Cross-batch inputs.** The four added dep edges are published or same-batch,
  so no new cross-batch rows were created; the shared dependency ledger was
  left to its serial reconciler as instructed.

## Published concerns, run-level findings, and source caveats

- **No published-content defect confirmed** and no published carrier was
  edited; every published contact is a read citation.
- **Other-pair validate-plan error (report only):**
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
  has an item depending on `divisors-riemann-roch-and-duality`, outside its
  declared `requires` closure. Not this pair; owner pair should add the requires
  edge or restate the dep.
- The pair's 38 `redundant-prereq` advisories are inherited from the plan's own
  `requires` list (not edited); the newly added KL edge is not redundant
  (`reqClosure` does not already reach it).
- Repo-wide depcheck `[published-unaudited]` rows (2729) and fwdcheck's two
  `[forward-undeclared]` rows are in other content, not this batch.
- **Source caveat inherited from Step 3a:** the Ariki 1996 endpoint is
  currently bot-walled for a direct re-fetch; the mathematics is redundantly
  carried by Brundan–Kleshchev (arXiv:0901.4450) and BKW (arXiv:0901.0218),
  all of whose cited passages were read completely. Recorded, not hidden.

## Handoff state

- Completed: all 28 assigned items, both pages, the 28-item proof-contract file;
  21 accept/repaired decisions recorded and current; all listed checks run with
  the results above; final batched `proof-layout` clean after the last edit.
- Open obligations: (1) owner resolution of the 7 escalation receipts, whose
  underlying suppliers have now landed and whose uses are reconciled — the
  only remaining step is the bookkeeping decision reserved to the owner; and
  (2) the Step 4 `requires`-edge adjudication for
  `kazhdan-lusztig-bases-polynomials-and-cells`.
- No publication, no gate stamp, no owner stamp, no shared-ledger write, no
  sibling content edited.
