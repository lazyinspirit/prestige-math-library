# Batch 10 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-10`.

The scope routes six findings and no touched/page obligations. Reader pre/post snapshots are identical; reader made no repairs. The observations are bound to exact carrier fingerprints in the scope (distinct from raw item hashes in the pre/post snapshots). No historical disposition is inferred.

## Completed level 0

`lem-equivariant-rescaled-heat-kernel-extension`: reader:10:1 and refuter:10:1 confirmed nonfatal. The original raw SHA256 was `24659fc31546b3598f72a813179732d282b62d893d1cd7bd282164781aa713f5`. Defined Schwartz regularity by every polynomial-weighted derivative seminorm, including matrix norm/entrywise equivalence, and cited the exact published definition. Statement strength is preserved; manifest and contract synchronized. All six proof steps and all cited mathematical supplier statements checked. The sole direct item consumer, `lem-equivariant-relative-tangent-groupoid-heat-trace-limit`, uses precisely the unchanged positive-symbol estimate and limit; no surgical consumer repair is needed for this clarification. No additional hop is triggered.

Sources checked: Gilkey first edition §1.7 Lemmas 1.7.2–1.7.3, printed pp. 52–53 (https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf), and Yi Proposition 4.3, PDF pp. 8–9 (https://arxiv.org/pdf/2003.00955). These corroborate parametrix/rescaling context; the local Volterra proof supplies its own decay and normalization argument. Published Fourier, partition, Fubini and dominated-convergence statements have exactly the hypotheses used. Imported sources remain read-only. No diagrams occur in this carrier or its direct consumer. Risk review is complete in the batch contract; final focused checks are recorded below.



## Completed sphere example (level 1)

`ex-equivariant-index-on-a-two-sphere`: reader:10:3 and refuter:10:3 confirmed nonfatal. Verification 1.1 now computes the positive-frequency symbol $B=i\xi\wedge$, defines metric contraction, proves $Bh+hB=I$ for $h=(i|\xi|^2)^{-1}\iota_{\xi^\sharp}$, and checks $d^2=0$ and rotation equivariance before invoking the index definition. This supplies exactness also at degrees zero and two. The cohomology, normalized area integral, rotation character, pole determinant and fiber alternating trace were independently checked. All three steps and exact countable-choice sphere/Stokes premises were read. Public Example unchanged; contract derivation synchronized. Risk review complete; no diagrams or additional prerequisites. 

## Completed relative heat-trace limit (level 1)

`lem-equivariant-relative-tangent-groupoid-heat-trace-limit`: reader:10:2 and refuter:10:2 confirmed nonfatal. Proof 2.1 now uses the supplier-defined one-variable kernel $k_x^j(dg_x^{-1}v-v)$; contract synchronized. All four steps checked, including symbol positivity from exactness, Hilbert–Schmidt trace factorization, the integrable $(1+c|v|)^{-L}$ bound for $L>n$, complementary decay, and orthogonal determinant Jacobian. Empty fixed sets and dimension zero retain the stated conventions. Public Statement unchanged. The corrected notation exactly instantiates the supplier limit, without a new hypothesis or changed conclusion. Risk review complete; no diagrams. 

## Completed character-formula risk review (level 5)

`thm-equivariant-index-character-formula` has no owed decision. All five steps and eight exact direct supplier interfaces checked. Read the current compact-symbol definition and proofs of `lem-equivariant-symbol-index-comparison`, `lem-equivariant-symbol-fixed-inclusion-localization`, and `lem-equivariant-symbol-chern-character-pushforward`. The general proof uses full AC, analytic Gysin compatibility for arbitrary real normal embeddings, localized reconstruction by $(\pi^*e)^{-1}$, and eigenvalue-weighted relative compact-support pushforward with the $d\theta$ orientation. The full characteristic denominator and both pullbacks are present. The empty fixed locus, identity, zero-rank normal, positive-dimensional components and isolated points are covered. The independent countable-choice branch uses equivariant positive-eigenspace cancellation, trace-class summability, and the local heat limit, with its Hodge assumptions explicit. No new defect found; theorem source unchanged and risk review complete.

Additional sources read: Segal §4 Proposition 4.1 and its proof, printed pp. 144–145 (https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf); BGV §6.2 introductory hypotheses and Lemma 6.4 (https://djvu.online/file/ruwkno3rtNaI5); Heitsch §3 Theorem 3.1 and spectral cancellation/concentration discussion (https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf). BGV restricts its proof to complexes with Dirac folding; Heitsch explicitly describes an outline. They are context, not sufficient substitutes for the local general matrix-symbol argument. The Atiyah–Singer PDF was downloaded after the web extractor rejected its size, but its scanned sections have not been independently reconstructed; no reading attestation is claimed. Lower analytic realization/product/Bott/slice statements were checked for the actual uses. This is not a reconstruction or audit of every transitive supplier.

No published defect or outside repair has been identified.

## Decisions, ledger and consumer disposition

Exactly six decisions are recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-alpha-batch-10-3a-decisions.json`, with group `batch-10`; the original scope group `p` is unchanged. All are `confirmed_nonfatal`, with completed repair confidence 1. Each reader/refuter pair shares one closed ledger row through an explicit `same_defect_as` reference:

| Obligations | Closed defect ID suffix | Correction |
| --- | --- | --- |
| reader:10:1, refuter:10:1 | batch-10-schwartz-criterion | Explicit seminorm definition and exact supplier. |
| reader:10:3, refuter:10:3 | batch-10-elliptic-symbol-check | Defined contraction and proved symbol exactness. |
| reader:10:2, refuter:10:2 | batch-10-tangent-kernel-notation | Supplier-defined one-variable kernel. |

The full defect IDs use the run prefix `advanced-qft-supersymmetry-build-2026-10-23-`. Three rows were appended through the serialized defect-ledger tool at `caught_at_stage: 3a-adjudicate`, `disposition: fixed`, and the generated view was refreshed. Owned dependency dispositions were appended to `briefs/tasks/frontier-dependency-ledger.md`. The sole Statement clarification preserves all hypotheses/conclusions; its only direct item consumer was checked at its actual uses. No consumer Statement changed, so no further hop is needed. Pages and published/imported suppliers were not edited; no published defect, withdrawal or escalation is pending. No TikZ/tikzcd diagram appears in the reviewed carriers.

## Local checks and handoff

All commands were run from the physics workspace.

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-10.proof-contracts.json`: initially routed four CRITICAL items; all received specific completed reviews before proceeding above their dependency levels.
- Same command with `--require-reviewed`: 6 items routed, 0 errors; all four required reviews complete.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-10.proof-contracts.json --strict`: 6/6 checked, 0 errors, 0 warnings. The first attempt caught two missing uses of the newly added F1 citation; its uses were synchronized to 1.1, 2.1 and 6.1, then the check passed. This was a mechanical contract correction, not a new mathematical defect.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with all three changed item paths: 3 checked, 0 failing. Successful prechecks recorded on those draft items.
- `node tools/physics-support/rendercheck.mjs` with those same three paths: YAML and all math spans parse, no delimiter/link defects.
- `node tools/physics-support/content-policy.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-10.pages.json`: 6 scoped items, 0 errors, 0 warnings.
- After the final item edits, one batched `node tools/physics-support/proof-layout.mjs items/lem-equivariant-rescaled-heat-kernel-extension.md items/ex-equivariant-index-on-a-two-sphere.md items/lem-equivariant-relative-tangent-groupoid-heat-trace-limit.md`: 3 items, 13 steps, 0 defects.

No judge cycle, acceptance stamp, engine hash stamp, full gate battery, publication or stage transition was performed. The engine owns hash stamping and its gate battery. No blocker remains in this dispatched scope.
