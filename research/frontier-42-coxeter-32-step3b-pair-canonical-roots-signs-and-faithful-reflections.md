# Step 3b — scaffold audit and authoring: `canonical-roots-signs-and-faithful-reflections`

Run `frontier-42-coxeter-32`, batch 7, design label CG-04 (orders 1730/1731),
role `alpha-high`. A page `canonical-roots-signs-and-faithful-reflections`,
B page `canonical-roots-signs-and-faithful-reflections-examples`, category
`coxeter-groups`. Only this pair is owned; sibling rows in shared files are
preserved.

## Owned IDs and obligations (entry record, 2026-10-07)

Authoring order (dependency level, then page order and item ID as dispatched):

| # | ID | page | level | decision |
|---|---|---|---|---|
| 1 | `lem-cg-rank-two-prefix-and-chamber-length-induction` | A | 7 | repaired |
| 2 | `thm-cg-root-sign-and-simple-reflection-positivity` | A | 8 | accept |
| 3 | `thm-cg-root-length-criterion-and-faithfulness` | A | 9 | accept |
| 4 | `ex-cg-mixed-sign-vector-is-not-a-root` | B | 9 | accept |
| 5 | `def-cg-geometric-inversion-set` | A | 10 | accept |
| 6 | `ex-cg-indefinite-form-admits-faithful-reflection-representation` | B | 10 | repaired |
| 7 | `thm-cg-root-inversion-formulas-and-strong-exchange` | A | 11 | accept |
| 8 | `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` | B | 12 | repaired |

Entry obligations (all now closed):

- Eight item carriers and both pages were unauthored scaffolds; all eight items
  and both page carriers are now written and checked.
- The in-run suppliers (batch 2: `def-hh-coxeter-matrix-word-group-and-length`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`; batch 4:
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-cg-dual-chambers-and-reflection-hyperplanes`,
  `lem-cg-dual-action-and-chamber-faces-exist`) are now on disk with proofs; every
  use was reconciled against the current statements (see the cross-batch input).
- Shared artifacts owned at hand-off: the two page carriers, item decisions for the
  eight original scaffold IDs, batch-7 cross-batch dependency input, batch-7 proof
  contracts, and this report.

## Checkpoint log

### Item 1 — `lem-cg-rank-two-prefix-and-chamber-length-induction` (A, level 7)

- Claim kept verbatim from the scaffold: the rank-two half-space alternative with the
  descent clause, the trivial (P_0)/(Q_0), the simultaneous induction (P_n)/(Q_n) with
  both implication steps, the canonical factorisation and the chamber-descent
  equivalence. 18 numbered steps.
- Proof route: restriction `pi:V* -> P*` is surjective and `W_{s,t}`-equivariant, so
  the alternative reduces to the rank-two plane; sector interiors avoid the walls;
  finite dihedral handled by the Cayley-cycle argument (connected 2-regular graph on
  the `2m` displayed vertices) giving `l_{s,t}(u_k)=min(k,2m-k)`; sign tables and
  descent identifications in both finite and infinite type; both conditional steps;
  the factorisation and the equivalence (4) via (P).
- Scaffold defect repaired (strategy only, no claim changed): the scaffold derivation
  "`l_{s,t}(u_k)=min(k,2m-k)` follows from `u_{2m-k}=u_k^{-1}`" is false in general
  (for `m=5`, `k=3`: `u_3=sts` and `u_7=tst` are different reflections); replaced by
  the Cayley-cycle argument.
- Checks: precheck PASS; proof-layout 18 steps 0 defects; rendercheck clean;
  depcheck/content-policy clean.
- Decision recorded: `repaired`, confidence 1, dependencies = the 17 declared deps
  (10 batch-2/4 suppliers + 7 published items).

### Item 2 — `thm-cg-root-sign-and-simple-reflection-positivity` (A, level 8)

- Claim kept: cone sign criterion; root sign partition with the `w^{-1}C°` criterion;
  `r_s`-action on positive roots. 6 steps; no crystallographic or root-system axiom
  substituted.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck/depcheck/content-policy
  clean. Decision `accept`, confidence 1.

### Item 3 — `thm-cg-root-length-criterion-and-faithfulness` (A, level 9)

- Claim kept: two-sided length criterion; disjoint chambers (`C°` prefundamental);
  faithfulness of `rho` and of the dual action with the last-letter negative-root
  clause, for every finite-rank Coxeter matrix, indefinite or degenerate `B`
  included. 4 steps.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck/depcheck/content-policy
  clean. Decision `accept`, confidence 1.

### Item 4 — `ex-cg-mixed-sign-vector-is-not-a-root` (B, level 9)

- Claim kept: `e_s-e_t` has mixed signs and fails the norm test (`2+2c != 1`), hence
  is not a root; explicit `m=3` and `m=infinity` values. 6 steps.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck/depcheck/content-policy
  clean. Decision `accept`, confidence 1.

### Item 5 — `def-cg-geometric-inversion-set` (A, level 10)

- Claim kept: `N(w)=Phi_+ cap rho(w)^{-1}Phi_-`; the elementary identities, the step
  recursion and the reduced-word convention (suffix roots for `N(w)`, prefix roots
  for `N(w^{-1})`); no finiteness asserted in the definition; justifier
  `thm-cg-root-inversion-formulas-and-strong-exchange` as bound in
  `research/coxeter-scaffold/definition-justifications.json`. No `B`-duality use.
- Checks: precheck not-applicable (no phase proof); proof-layout 0 defects;
  rendercheck/depcheck/content-policy clean. Decision `accept`, confidence 1.

### Item 6 — `ex-cg-indefinite-form-admits-faithful-reflection-representation` (B, level 10)

- Claim kept: rank-three `2I-J` form of signature `(2,1)`; root computations and a
  nontrivial image; degenerate rank-two comparison with radical `R(e_s+e_t)`; both
  indefinite and degenerate forms leave `rho` faithful. 5 steps.
- Repair: added `lem-hh-dihedral-root-recurrence-and-root-sign` to `deps` (cited by
  `[F2]` for ambient reducedness of the alternating words; depcheck had flagged the
  omission).
- Checks: precheck PASS; proof-layout 0 defects; rendercheck/depcheck/content-policy
  clean. Decision `repaired`, confidence 1.

### Item 7 — `thm-cg-root-inversion-formulas-and-strong-exchange` (A, level 11)

- Claim kept: root-reflection dictionary (independence, `rho(t_alpha)=r_alpha`,
  conjugation, `t_{-alpha}=t_alpha`, bijections `{+-alpha}->T` and `Phi_+->T`); the
  inversion formula `|N(w)|=l(w)` with suffix/prefix root lists; strong exchange with
  the unique deleted index and `t=r_i`. 6 steps.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck/depcheck/content-policy
  clean. Decision `accept`, confidence 1.

### Item 8 — `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` (B, level 12)

- Authored from the batch-7 scaffold statement, kept verbatim: A_2 constant `1/2` by
  the triple-angle factorisation; `Phi_+` and the six `N`-sets in A_2; the I_2(5)
  constant `2c=phi`, `4c^2-1=phi` and the five positive roots; `N(u_k)` for
  `1<=k<=5` by the recursion together with the complement identity
  `N(u_5 w)=Phi_+ \\ N(w)` and `N(u_7)`; the ten sectors with the wall-side ranges;
  infinite type with `u=e_s+e_t`, `B(u,.)=0`, `rho(w)u=u`,
  `Phi_+={e_s+ku} cup {e_t+ku}`, the inductive formulas for `N((st)^k)` and
  `N((st)^k s)`, and the chambers as cones over the intervals `(j,j+1)` of the
  affine line with walls at `0` and `1`. 13 steps.
- Adopted the normative canonical step order/labels produced by the precheck repair
  (layers by citation); prose cross-references updated to the new labels.
- Repair: added `lem-cg-reflection-form-invariance-and-rank-two-orders` and
  `lem-cg-reflection-representation-descends-and-root-norms` to `deps` (both cited
  in Facts; depcheck had flagged the omissions).
- Checks: precheck PASS; proof-layout 13 steps 0 defects; rendercheck clean;
  depcheck/content-policy clean.
- Decision recorded: `repaired`, confidence 1.

## Dependency levels and supplier reconciliation

- Pre-splice findings rechecked against current inputs: the Step-1 drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`) gives `VERDICT: no-drift`
  for this page and records only "the simultaneous half-space induction remains a
  draft obligation", now discharged by item 1; all eight Step-1 readiness records
  are still `ready`, and `step1-blockers.json` names no item of this pair.
- Levels confirmed by `item-dependency-levels check --run frontier-42-coxeter-32`
  (7, 8, 9, 9, 10, 10, 11, 12 as in the item metadata). The check reports **no error
  for any item of this pair**; the run-wide errors at the time of this report are
  `ex-cg-reducible-semidefinite-forms-are-factorwise`,
  `ex-cg-interval-realized-tree-versus-vertex-graph-metric` and
  `ex-cg-hexagonal-a2-cell-and-graph-distance`, all outside this pair and owned by
  their authors (see run-level observations).
- The batch-7 manifest deps were synchronised to the authored item deps (the same
  convention every finished pair in this run follows); `manifest-deps` reports
  0 errors, 0 normalizations.
- All 54 rows of
  `research/frontier-42-coxeter-32-batch-7.cross-batch-dependencies.json` were
  rechecked against the current supplier statements and set to `verified`, each row
  naming the exact required clause and the consumer location (Facts/steps). The
  unified ledger was refreshed with
  `frontier-dependency-ledger refresh --run frontier-42-coxeter-32`.
- Supplier proofs themselves are not certified here; Steps 5-8 own independent
  auditing. If a batch-2/4 supplier statement changes, the affected item decisions
  go stale and must be refreshed by the gate cycle.

## Pages

- A page `library/coxeter-groups/canonical-roots-signs-and-faithful-reflections.md`:
  `items` = the five A items in dependency order, `examples` = `[]`; authored prose
  keeps the scaffold promises (rank-two half-space alternative and `(P_n)/(Q_n)`
  induction; root sign coherence and `r_s`-positivity; root-length criterion with
  faithfulness; the inversion set with its conventions; the inversion formula and
  strong exchange), notes that only open chambers are used, and states that every
  argument is choice-free.
- B page `library/coxeter-groups/canonical-roots-signs-and-faithful-reflections-examples.md`:
  `items` = `[]`, `examples` = the three B items; the prose keeps the leaf status
  (no other page or item depends on them) and summarises the computations.
- Both pages render cleanly (rendercheck, 10 files including the eight items).

## Proof contracts

Created `research/frontier-42-coxeter-32-batch-7.proof-contracts.json` (version 1,
batch 7, all eight items): exact citation contracts (fact -> source, section, the
source's own statement text as quote, and every using step), derivation entries for
all 58 numbered steps with their stated inputs, and the eight standard boundary
worksheets per item. `node tools/proof-contract.mjs
research/frontier-42-coxeter-32-batch-7.proof-contracts.json --strict` reports
**0 errors, 0 warnings, 8/8 items checked**.

## Checks actually run (final pass)

| Check | Command | Actual result |
|---|---|---|
| phase format | `node tools/tsx-run.mjs tools/precheck.mts items/<8 items>` | 7 PASS, 1 not-applicable (definition), 0 failing |
| proof layout | `node tools/proof-layout.mjs items/<8 items>` | 8 items, 58 steps, 0 defects |
| rendering | `node tools/rendercheck.mjs items/<8 items> library/.../<2 pages>` | OK: 10 files, all clean |
| content policy | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-7.pages.json` | 8 scoped items, 0 errors, 0 warnings |
| dependencies | `node tools/depcheck.mjs` (filtered to this pair) | 0 errors, 0 warnings for all eight items and both pages |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error for this pair (three unrelated errors in other pairs) |
| manifest deps | `node tools/manifest-deps.mjs research/...-batch-7.pages.json` | 8 items, 0 errors |
| strict proof contracts | `node tools/proof-contract.mjs research/...-batch-7.proof-contracts.json --strict` | 0 errors, 0 warnings, 8/8 |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK: order acyclic/consistent; no item-level cycle/forward/B-page/unresolved findings |
| coverage | `node tools/coverage-checklist.mjs research/...-batch-7.coverage.json --require-destination` | 1 page, 35 results, 0 errors, 0 warnings |
| sources | `node tools/source-fetch-check.mjs --coverage research/...-batch-7.coverage.json` | 2/2 fetch-verified, 2/2 resolved |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed and deduplicated |
| pair artifacts | `checkPairAuthorArtifacts(...)` | 12 required carriers present, ok |

## Decisions

Recorded with `tools/step3-decisions.mjs record-item` (no `--owner`, no stamps):
items 2, 3, 4, 5, 7 = `accept`; items 1, 6, 8 = `repaired`; all confidence 1 with
the examined dependency IDs and concrete evidence. The Step-3a scope decision was
refreshed (`record-scope ... sufficient`) because the receipt hash no longer matched
the current manifest snapshot while no id, kind, title or statement had changed; the
refresh reason is in the new receipt
`research/frontier-42-coxeter-32-step3a-review-canonical-roots-signs-and-faithful-reflections.json`
and the Step-3a narrative remains in
`research/frontier-42-coxeter-32-step3a-pair-canonical-roots-signs-and-faithful-reflections.md`.

## Open obligations and handoff

- No escalation remains for this pair: every item is authored, checked, contracted
  and decided; every in-run supplier exists and its use was reconciled.
- Added suppliers: none. No prerequisite was missing from both the published
  library and the current scaffold, so no new item was created; the two in-run
  prerequisite pairs (`coxeter-presentations-exchange-and-reduced-word-theorems`,
  `real-forms-and-reflection-geometry`) already carry every supplier used.
- Not certified here: the suppliers' own proofs (Steps 5-8) and the run-wide Step-3
  final gate. If any batch-2/4 supplier statement changes, the affected pair item
  decisions must be refreshed before the final gate and the batch-7 citation
  contracts regenerated with `tools/regen-contract-entries.mjs` (this happened once
  during authoring: `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  was restated by its own pair, and the two citation contracts quoting it were
  regenerated on 2026-10-07 with the strict contract gate re-run clean).
- No pre-splice plan mismatch was found: `research/plan-spec.json` carries orders
  1730/1731 with empty item arrays and the two A-page `requires` edges, and the
  batch-7 manifest is the authored inventory. The four downstream pages that declare
  this A page as a prerequisite (orders 1734, 1736, 1740, 1744) consume the five A
  items as stated; the B page remains a leaf.
- No published defect was found in the prerequisite items examined for this pair
  (the published trigonometric suppliers, the dual/basis items and the induction
  principle were read at the level of the uses).

## Run-level observations outside this pair (not edited; reported for the owner)

- The run-wide `item-dependency-levels check` reports level mismatches in other
  pairs whose `deps` changed during authoring
  (`ex-cg-reducible-semidefinite-forms-are-factorwise`: 15 vs computed 16;
  `ex-cg-interval-realized-tree-versus-vertex-graph-metric` and
  `ex-cg-hexagonal-a2-cell-and-graph-distance`: 5 vs computed 3). Their owners
  should recompute the levels; this is unrelated to this pair.
- The repo-wide `depcheck` still lists unresolved in-run ids in other pairs' items
  (e.g. `thm-cg-affine-gram-classification-and-euclidean-realization`,
  `lem-cg-bowditch-quantitative-short-loop-control`, and the typo'd wikilink
  `thm-hh-coexeter-exchange-deletion-and-faithfulness` in
  `ex-cg-infinite-dihedral-growth`); those belong to the owning pairs and are not
  touched here.
