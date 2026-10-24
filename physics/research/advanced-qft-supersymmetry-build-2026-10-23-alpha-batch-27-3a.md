# Batch 27 Step 3a adjudication

Run: advanced-qft-supersymmetry-build-2026-10-23. Group: batch-27. Scope group c remains unchanged.

## Checkpoint: level 4

`post-aqft-smeft-model`: amended reader repair. The reader correctly supplied missing spin/internal carriers, Pauli matrices and component connections. Its newly fixed Clifford relation and adjoint make B_S gamma^mu anti-Hermitian; integration by parts makes the corresponding integrated bilinear Hermitian. Thus multiplying it by i gives an anti-Hermitian kinetic action. Changed the prefactor to -1, defined Grassmann conjugation explicitly, set gamma_5=+i gamma^0 gamma^1 gamma^2 gamma^3 to preserve the source projectors, and supplied the exact mostly-minus source dictionary Gamma=-i gamma, bar_src=-bar, eta_src=-eta. The symmetric kinetic density differs only by a total divergence. This preserves the conventional source action and coefficient labels rather than inventing a new fermion model.

Source checked: Falkowski, §0, PDF p. 2, Eq. (0.1) and the preceding kinetic formula, https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf; Grzadkowski et al., §2 Eqs. (2.1)–(2.4), PDF p. 3, https://arxiv.org/pdf/1008.4884. These sources use their own conventions; the correction and Hermiticity calculation are local algebra, not a claim the sources use our gamma convention.

Current dependency statements inspected: def-countable-choice (published read-only), def-aqft-operator-basis-physical-data, def-qftx-nonabelian-gauge-data, def-qftx-associated-covariant-derivative, and lem-qftx-principal-curvature-cartan-bianchi. The last two proofs and their local-section/curvature diagrams agree with the use here. Gauge fields, couplings, full-potential conditions, finite truncation and empirical scope remain as adopted. Risk review complete in the owning contract.

Consumer check: post-aqft-heft-model uses shared spacetime/gauge/fermion representation data; def-aqft-warsaw-basis-contract uses source-defined representatives and coefficients with the explicit source translation; pthm-aqft-smeft-as-restricted-heft-branch uses finite polynomial substitution; ex-aqft-smeft-heft-observable-map uses only scalar and gauge terms. The three batch-46 fit records exp-aqft-atlas-global-smeft-fit-2026, exp-aqft-cms-global-smeft-fit-2026 and exp-aqft-cms-multiboson-smeft-2026 cite the field/expansion and source-coefficient convention and report source fits, without deriving a fermion amplitude from the prefactor. No consumer requires a statement change. The batch-44 threshold data independently fixes a mostly-plus Clifford/adjoint convention and its own opposite chirality sign and does not take its kinetic prefactor from this item; no threshold correction follows. Outside sources remain read-only.

Historical evidence: all six HEAD:physics/items/<id>.md raw SHA256 values exactly equal the native pre-reader item hashes; all six initial working carriers exactly equal post-reader hashes. Thus the three reader diffs have recoverable exact preimages; no historical waiver or unknown delta is needed. Git commit binding and final checks will be recorded on completion.

The subsequent sections complete the remaining dependency levels.

## Level 5: Warsaw coefficient contract

Completed the HIGH risk review without item changes. The source-defined list has 15+19+25 structures before flavor/h.c.; the three-family coefficient convention is not a claim of 59 complex parameters. Checked the source tables and dimension-five L-violating representative, and independently read the finite-jet, finite-dimensionality and relation-quotient suppliers. The quotient is explicitly formal and no complete EOM/IBP/Fierz proof is smuggled in. The exact Q_HBox convention is retained. The model source dictionary makes its Clifford/adjoint normalization explicit; scalar operator definitions continue to use the stated local mostly-plus metric. No public interface changes here, no new consumer repairs.

## Level 6: chiral/loop count

Amended reader repair: retained the finite nonempty connected multigraph, compatible half-edges, loop number |E|-|V|+1, disjoint no-h/h-dependent Yukawa counts, external-field counts and six schematic families. Fixed a missing closing math delimiter in the new (j,a) exclusion; no change to the mathematical claim. Independently checked the formula and meanings against Buchalla–Catà–Krause §3 Eqs. (10)–(12), PDF pp. 4–5, https://arxiv.org/pdf/1307.5017. The finite-jet supplier defines canonical weights; the HEFT supplier explicitly defines the h/v domain and U chart. For a tree the loop count is zero; a one-vertex self-edge gives one; empty vertices are excluded. Pure scalar two-derivative vertices introduce no extra negative count. Arbitrarily many external h/Goldstone insertions are consistent with structural families rather than six individual operators; no numerical convergence or uncertainty claim follows. Only the theorem and example cite this definition; both use the distinction of gradings and permitted smooth functions, with no changed calculation or statement.

The subsequent sections complete the theorem and example reviews.

## Level 7: restricted-branch theorem

CRITICAL risk review complete. Checked all six proof steps, exact F1–F5 supplier content, both inverse compositions, positivity of rho, SU(2) pseudoreality, hypercharge equivariance, compatible covariant-derivative product rule, finite radial-degree bound, coefficient linearity for the fixed model/gauge parameters, and seventh-derivative exclusion of e^x. H=0 and h=-v are excluded; zero Wilson coefficients and dependent output monomials cause no problem. The finite interaction-coefficient tuple records the prefactors of the selected representatives; R does not assert linearity in every primitive gauge/Yukawa parameter simultaneously. The claim is expressly before further radial reparametrization and proves no converse or physical invariant-space equality. No item edit. Corrected stale full-AC wording in the contract's boundary/risk evidence to the actual AC_omega interface; this is audit enrichment, not a new mathematical defect or routed decision.

Alonso's notes were opened for context only; local inverse, coefficient degree and smooth inverse arguments do not rely on its unproved assertions or a general linearization criterion. The formal-quotient limitation remains explicit.

## Level 8: observable example

Reader heading correction is reviewed_no_defect, change_kind metadata: Proof → Verification is class normalization, with no mathematical delta and no defect row. CRITICAL risk review complete. Read every Verification step. The s Box s integration-by-parts sign, mostly-plus K, W+/W− normalization, local smooth inverse, inverse derivative and kappa formula all follow. C=0 gives K=1 and kappa=1; K(0)<=0 is excluded, not silently normalized. Positive v,g,Lambda keep the defining denominator nonzero. The optional full-potential minimum is separate from the kinetic calculation. No measurements, new statistics or numerical discarded-order precision occur. Refreshed exact contract quotations from the changed suppliers and existing manifest statement copies.

Both authored pages remain frontmatter-only with compact-v1, and no diagram occurs in this batch. The two diagrams encountered in gauge suppliers correctly show local-section coordinate changes and curvature covariance; no new diagram is needed for the explicit two-component inverse computation.

## Decisions, ledger and current evidence

Exactly three owed obligations are recorded in the task-named decisions JSON. There are no reader findings, refuter findings or page obligations. Verdicts: SMEFT model amended_repair, counting definition amended_repair, example reviewed_no_defect with change_kind metadata. Both completed content repairs have repair_confidence 1. No judge stamp was present on either changed content carrier. No acceptance stamp, historical snapshot, reader/refuter artifact or engine state was written.

Closed canonical defect rows, caught_at_stage 3a-adjudicate:

- aqft-20261023-b27-3a-spinor-typing: missing spin/internal and gauge-component typing repaired by the reader and independently checked here.
- aqft-20261023-b27-3a-kinetic-convention: kinetic/chirality convention mismatch introduced by fixing the reader's explicit gamma convention, amended here with the source dictionary.
- aqft-20261023-b27-3a-diagram-input: implicit graph inputs made explicit by the reader and checked here.

The missing math delimiter and multiline display formatting are mechanical corrections, not extra defect rows. The example's schema-heading normalization has no defect row. Stale contract full-AC wording was replaced by its actual AC_omega scope during risk-review enrichment. The defect-ledger append command validated and appended three rows and refreshed its generated view.

The exact pre-reader carrier bytes are Git commit b12e4e0b9023b24743ed8811e173c621696d2341, paths physics/items/<id>.md; each raw SHA256 equals its native pre-reader item hash. The initial six working carriers exactly matched the native post-reader hashes. Diff inspection confirms only the reader's described field/gauge definitions, graph definitions and heading change. No historical_delta_unknown or owner-resolution waiver is used. Final current raw item hashes:

| Item | SHA256 |
|---|---|
| post-aqft-smeft-model | 50f8673319fb462a6b274f610994bb0fa2cbd1d0da24813e00cf48e093b391df |
| post-aqft-heft-model | 7db52d747bd66abda54c8464d38669b66a506d681e178b603b5178d47ea49058 |
| def-aqft-warsaw-basis-contract | fdf1c8eaf8576fa9d0a0f9b42a088554ff9baa2fab732230d10cad7d54108a68 |
| def-aqft-chiral-power-counting | 3d0c7197736f82ac944ae5334be9b723f9b3d2dca3b443b6806a324105dc3efa |
| pthm-aqft-smeft-as-restricted-heft-branch | 3be87126bf7dd2be097a845218ce5ea7cada14004dadb0fa8bbd68a7d13da728 |
| ex-aqft-smeft-heft-observable-map | 54646f0430cc0c205d727f56003d93ae74550b90c59624567848c70ac4d83bc0 |

## Focused checks and limits

All final checks exited 0:

- Reflow on the three touched item paths: all unchanged.
- precheck.mts on those paths plus the restricted-branch theorem: postulate nonproof structure and two direct arguments pass; the definition has no proof rows.
- rendercheck.mjs on all six batch items and both pages: 8 files, no YAML, delimiter, multiline-display or KaTeX errors.
- proof-contract.mjs on the owning batch-27 contract with --strict: 6/6 items, 0 errors and 0 warnings.
- risk-report.mjs on the owning contract was run before the reviews and then with --require-reviewed: all four HIGH/CRITICAL reviews complete; 0 errors.
- Final single batched proof-layout.mjs command on post-aqft-smeft-model, def-aqft-chiral-power-counting and ex-aqft-smeft-heft-observable-map: 3 items, 5 steps, 0 defects.
- Explicit decision/scope check: exactly three obligations; all six public claim sections uninterrupted by links; both compact-v1 pages have empty bodies.

Initial focused checks detected the reader's multiline aligned display and a missing anchor in newly enriched contract boundary evidence; both were fixed and the corresponding checks rerun successfully. These mechanical failures were not recorded as scientific defects. No full gate battery, judge cycle, certification, publication or empirical reanalysis was performed. Source reading was confined to the cited conventions and counting passages; contextual geometry is not an imported proof. Statistical reports were read only for changed-interface impact, without claiming their raw data or calibrations were audited.

No defective published supplier was identified, so no published ledger edit or lock was needed. Imported mathematical suppliers and all outside content remain read-only. No substantial prerequisite gap, affected outside consumer requiring repair, proposed withdrawal or blocker remains in this dispatched scope. The engine retains decision hashing and the gate battery.
