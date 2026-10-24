# Batch 17 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Group: `batch-17`.

## Level 3 checkpoint

Independently reviewed `def-aqft-scheme-and-wilson-coefficients` and its actual suppliers `def-aqft-local-operator-and-dimension` and `def-aqft-operator-basis-quotient`. The input is a fixed-weight finite complex quotient with a supplied ordered basis, not a claim of exhaustive physical equivalence. The logarithmic scale is dimensionless; the formal coefficient expression has weight four; realification is a real-linear bijective isometry. Zero flow and N=1 are admitted; N=0 is explicitly excluded. No AC selection, empirical premise, matching calculation or error bound is asserted. The uninterrupted Definition and subsequent references conform. No diagram is present or needed.

The initial risk-report returned HIGH 6 for this definition and CRITICAL 14 for the theorem. The definition risk review is now complete in the owning contract. No decision is owed for this untouched, unflagged definition.

Sources opened: [Manohar](https://arxiv.org/pdf/1804.05863), sections 3.2 and 5.10, equations (3.6)-(3.11) and (5.49)-(5.52); [Burgess](https://arxiv.org/pdf/hep-th/0701053), section 4.1.3. These motivate scale and scheme conventions, not an existence theorem for the supplied data. Reading is limited to relevant passages, not whole books.

The level-3 review was completed before proceeding to the level-4 theorem.

## Level 4 checkpoint

The theorem proof was checked in full, including all F1-F5 source statements and the Picard support arguments. Openness gives a closed product about the initial point; continuity gives a finite nonnegative bound; nearby radius-r balls stay in the radius-2r ball. The short-time inequalities work at M=0 and L=0. Oriented integration handles both time directions, the norm inequality is proved locally, and repeated Volterra substitution gives the displayed factorial remainder and exponential limit. Equal initial values, t=t0, and N=1 are included. Common-interval uniqueness uses precisely the published Picard clause. This is pure mathematics for supplied data, with no measured input or empirical conclusion.

`refuter:17:1`: confirmed nonfatal. Repaired the owned consumer Facts F3 by defining compact cylinders as [a,b] times positive-radius closed Euclidean balls contained in the domain, and explicitly specifying that interpretation of the locally uniform hypothesis. This leaves the Statement, claim strength and dependencies unchanged. Its contract preserves the exact imported quotation and separately records the local convention. Source title metadata was normalized to the retrieved PDF title page: notes by Yannick Viossat, revisited by Daniela Tonon; Bouin is the host. The manifest source title matches. No prior judge stamp existed. Repair confidence is 1.

`reader:17:1`: confirmed nonfatal, published maintenance remains open. The pinned Definition supplies neither cylinder family; its three direct suppliers do not supply that definition either. Record a nonfatal-recorded adjudication disposition, not a claim that published bytes were fixed. The parameter version is not used by this theorem. The mathematics owner must define the ordinary and parameter product families and check its consumers before reconciling imports. No substantial unproved theorem is missing and no mathematical escalation is required for the now-explicit local use.

[The author-hosted Teschl book](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf), section 2.2, equations (2.10)-(2.20), Theorem 2.2 and proof, supplies the standard continuity and locally uniform state-Lipschitz hypotheses. Its compactness wording uses an open ball while claiming compactness; the local proof instead uses closed balls. [Viossat–Tonon notes](https://www.ceremade.dauphine.fr/~bouin/ens1819/EquaDiff_CoursL3_2018-2019.pdf), section 1.5, Theorem 1.5.4, Lemma 1.5.5 and Lemma 1.5.9, give the contraction and common-interval arguments. Their first-exit wording should use first equality at radius r, rather than a minimal strict-exit time; the intended argument follows by continuity and the strict short-time estimate. Neither typographical issue is adopted as a premise. Only these relevant sections were read.

The example was inspected only for the actual downstream use: its exact two-component solution, all-real-time domain and global Lipschitz bound sqrt(6) establish its use of the theorem. No example or page edit is needed. Both pages have empty bodies and retain compact-v1. No TikZ/tikzcd diagram occurs or is needed.

The following final records and checks complete these routed obligations.

## Final decisions, bindings and records

Exactly two decisions are written in `research/advanced-qft-supersymmetry-build-2026-10-23-alpha-batch-17-3a-decisions.json`, group `batch-17`; the original scope group `r` is unchanged. No touched or page obligation exists.

| Obligation | Route | Verdict | Closed adjudication row |
|---|---|---|---|
| reader:17:1 | reader | confirmed_nonfatal | advanced-qft-supersymmetry-build-2026-10-23-batch-17-published-cylinder (nonfatal-recorded) |
| refuter:17:1 | flagged | confirmed_nonfatal | advanced-qft-supersymmetry-build-2026-10-23-batch-17-consumer-cylinder (fixed) |

These rows have distinct subjects: the published supplier's undefined terminology and the owned consumer's missing explicit interpretation. The first remains mathematics-owner maintenance; the second records the local F3 repair. Both are owned at `caught_at_stage: 3a-adjudicate`, each decision references exactly one row, and completed repair confidence is 1. Neither claims the published item was repaired. No finding was marked false-positive and no historical observation was relabelled.

The reader made no changes: all pre/post item and page hashes agree. The exact theorem preimage is available as `HEAD:physics/items/thm-aqft-truncated-coupled-rge-wellposedness.md` and hashes to `927b82b1269b3ffb7e9e6eaed0470679f3cd9c3f399add47298f1bf5670bf9f3`, matching both snapshots. The current repaired raw theorem SHA256 is `b078c8090697a66788d8370ad5d7b0ff4c42adbd19a5cb56e1c9cdbb55f6c74c`. The Definition, example and both page files remain byte-identical to their frozen snapshots. The imported Lipschitz supplier remains byte-identical to its exact `research/math-imports.json` pin. No missing historical preimage or owner-authorized current-content substitution was needed. Carrier-envelope fingerprints in the scope are distinct from raw file hashes.

The theorem Statement was compared directly against the genuine HEAD preimage and is unchanged. The only content repair is in Facts F3; proof steps and conclusions are unchanged. The attribution correction affects source title metadata and the existing reference label, with unchanged source URL; its manifest source-title mirror was updated. The current contract retains exact supplier quotations, correct derivations and specific complete HIGH/CRITICAL risk reviews. The scoped cross-batch record and owned frontier note describe the local convention and published limitation. No interface event, new prerequisite, outside consumer repair, new page, item withdrawal or publication change is asserted. No judge record existed to invalidate.

The published maintenance ledger was updated under an exclusively created `research/.published-consumer-ledger.lock`, reread after acquisition, merged into the existing deduplicated cylinder-definition index, and released by this writer. The shared defect ledger was appended through its locking append command, which regenerated `research/DEFECT-LEDGER.md`. Other owners' records were preserved.

## Actual local checks

All commands below exited 0. They are scoped mechanical checks, not scientific acceptance stamps.

- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-17.proof-contracts.json`: initial report HIGH 6, CRITICAL 14, MODERATE 3; zero errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-aqft-truncated-coupled-rge-wellposedness.md`: completed; only soft-wrapped Remarks prose changed layout.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-aqft-truncated-coupled-rge-wellposedness.md`: 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/thm-aqft-truncated-coupled-rge-wellposedness.md`: 1 file, YAML and actual KaTeX parsing clean.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-17.proof-contracts.json --strict`: 3/3 checked, 0 errors, 0 warnings.
- `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-17.proof-contracts.json --require-reviewed`: 3 routed, 0 errors.
- `node tools/physics-support/proof-layout.mjs items/thm-aqft-truncated-coupled-rge-wellposedness.md`: run once after the final item edit and formatter; 1 item, all 5 steps, 0 defects.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/aqft-batch-17-defect-rows.json`: exactly 2 rows appended and the generated view refreshed.
- `node tools/physics-support/defect-ledger.mjs validate --run advanced-qft-supersymmetry-build-2026-10-23`: 10 current run rows checked, 0 errors at invocation.
- Scoped `git diff --check`: clean. A focused assertion script verified the exact two obligation IDs, one defect ID per decision, unchanged Statement, untouched frozen carrier hashes, empty page bodies and released published-ledger lock.

## Remaining owner work

The ordinary and parameter cylinder families in the published mathematical Definition remain open maintenance with the exact ID, evidence and strategy recorded in `research/published-consumer-supplier-ledger.md`. No substantial unmet mathematical prerequisite blocks the explicit local product-cylinder proof. The engine must bind current decision hashes and run its normal gate battery. No judge, stamp, self-certification, agent dispatch, native transition, commit, or publication was performed.
