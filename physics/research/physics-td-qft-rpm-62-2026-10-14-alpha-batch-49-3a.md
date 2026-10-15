# Batch 49 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-49`; role: alpha.

## Completed level-3 theorem

`pthm-qft-example-regulated-probability-control`: accepted_repair, repair_confidence 1. Current raw hash matches the immutable post-reader snapshot (1377ba031ad3d306b08e6d8fade2edbf9daf8899342bd2d64a4f564c83894b78); pre snapshot records 0e3e1012c08d8ca0b0cfc1507cc49dc8113c3101e5e3195952a1a6291d9f14e3. The batch manifest as read before this adjudication’s reconciliation preserved the earlier Statement without A3, providing the claim-level comparison; no exact full pre-reader item-byte preimage was recovered, and no exact historical proof-byte comparison is claimed. The reader report describes the repair; independent current proof review establishes its soundness.

The state-preparation/evolution premise A3 is essential: unitarity alone proves normalized squared norms, while the Born postulate assigns probabilities to the supplied model density. A3 supplies that identification without asserting empirical truth. Reviewed each of the six steps, coefficient sign conventions, projection contractivity, factorial remainder, quartic trigonometric bound, nonexponential derivative comparison and finite trace obstruction. Checked zero coupling/interaction, zero projectors, one outcome/dimension and occupation N=0. All stated finite-regulator conclusions hold. The contract now contains the completed specific critical-risk review.

Sources checked directly: [Tong, §3.1.1, Eqs. (3.215)–(3.225)](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html), and [Griffiths, complete §7, Eqs. (7.2)–(7.9)](https://www.andrew.cmu.edu/course/33-658/qit7.pdf). These support the adopted evolution and measurement formulation; the local Dyson and finite-instrument proofs establish the conditional bounds. Actual prerequisites read: observable-types, framework-units, example-data, countable-choice, finite-bounded-kraus-instrument, finite-instrument-normalization, constructed-model-and-measurement and finite-dyson-unitarity, including the latter proof and the published controlled-dynamics norm-Dyson theorem. Suppliers remain draft except the published mathematical context; no supplier acceptance stamp is inferred.

Checkpoint: theorem review and its risk record completed before the remaining routed work.

## Completed level-3 risk-only example

`ex-qft-x03`: both Verification steps reviewed without defect; no decision owed. Its unchanged raw hash matches both snapshots, b0284584f73d4e02b7c0e13d4c7fad99f03f28139615df0aac1b2b20b3215f7d. Positive oscillator parameters and AC_omega are explicit. The actual finite Hermite core is invariant under position and the phase evolution; the supplier builds the unitary extension before multiplying operators. The first-linear ground-state coefficient gives C_F(t)=e^{-i omega |t|}/(2 omega); at the selected negative time this is -i/(2 omega), whereas G_R=0. Both have units seconds. Zero frequency is excluded; no limit, measurement probability or spatial conclusion is claimed.

Read the current oscillator lemma in full, and the published oscillator scaling/realization and Hermite recurrence statements and relevant proofs. Checked [Tong §§2.1.1 and 2.7.1–2.7.2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html) and [Srednicki §7, Eqs. (7.12)–(7.16), printed pp. 64–65](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf). The latter defines G=i C_F; this factor is respected by the local supplier. Distributional limits and derivative jumps are justified locally, not inferred from a formal pole convention. The critical-risk record is complete.

The exact cited [Watrous TQI.2.pdf §2.3.1, Definition 2.34 and Eqs. (2.199)–(2.202), pp. 100–102](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf) was retrievable during this adjudication and confirms the normalized positive-outcome probability formulation. This resolves the earlier retrieval limitation for the section used here; it does not assert identity with another manuscript version or whole-book review.

Checkpoint: oscillator risk review completed before the level-4 decision.

## Completed level-4 example and page

`ex-qft-x01`: accepted_repair, repair_confidence 1. Raw hash equals post snapshot 11ea070f8e8c8b40d1af8f13b470478b7950fe6be2c053a3f4d15cd5905a8a0a; pre snapshot records e14ffef30abbdbabfe8a38ab4f47ec693a927dec58f812e32b993f74379202b2. The manifest preserves the earlier Example without the explicit inherited assumption; no exact full pre-reader proof-byte recovery is claimed. Read all three Verification steps. Substitution gives z=pi/2, exact probability 1 and coefficient square pi^2/4>1; pi^4/48 is a valid bound exceeding one. Positive g_E and hbar ensure the selected time exists in seconds. No simulated/observed trials, sampling model or statistical inference is asserted.

`qft-x01`: accepted_repair, repair_confidence 1. Exact archived old page hash 93a7bab36f0c06bfcc23e6839c326654c332a660a82eb3278affd5afbf538e55 and current page hash efe35352d93587233430386e86abc6ca04d464eda0cdfed6894312c848abbeba agree with the snapshots. The summary carries A3 and the Born adoption. Both A/B page inventories and placement order remain correct.

Consumer search across items/ and library/ found only ex-qft-x01 and the owning page for the changed theorem, and no item/link consumers of ex-qft-x01. The example adopts A3 explicitly; its own changed public Example has no further item consumers. No outside consumer repair is needed. Closed defect row `physics-td-qft-rpm-62-2026-10-14-3a-batch-49-state-evolution-premise` records the one underlying missing physical premise, with all three decisions referencing it. Manifest Statement/Example and physical-scope metadata were synchronized with the reviewed carriers; carrier bytes were not edited by this adjudicator.

Checkpoint: all three substantive decisions completed before local validation.

## Final local checks and handoff

The task’s reader-findings and refuter-findings arrays are empty. Exactly three decisions are supplied: `touched:49:pthm-qft-example-regulated-probability-control`, `touched:49:ex-qft-x01`, and `page:49:qft-x01`, each `accepted_repair` with confidence 1. The untouched oscillator example has a required risk review but no added decision. A local exact-set check confirmed 3/3 coverage with no extras or duplicates.

Local commands and actual results:

- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-49.proof-contracts.json`: 0 errors; the theorem and oscillator example scored CRITICAL 10 each. Both received specific completed risk reviews; the final rerun with `--require-reviewed` passed, 0 errors, 4 items routed.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-qft-example-regulated-probability-control.md items/ex-qft-x01.md`: PASS for both, 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/pthm-qft-example-regulated-probability-control.md items/ex-qft-x01.md library/quantum-field-theory/qft-x01.md`: 3 files pass; actual KaTeX and renderer YAML parser used.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-49.proof-contracts.json --strict`: 0 errors, 0 warnings, 4/4 checked. The initial non-strict local check exposed an F1 contract quotation in ex-qft-x01 that was a paraphrase of the repaired supplier rather than its exact Statement text. Replaced only that quote with the exact current sentence; retained the preparation/update qualification in its derivation and supplier-context records. Also refreshed the stale postulate excerpt from “unitary group” to its current “evolution family” wording. These are citation-record normalizations, not new carrier defects or invented ledger entries.
- `node tools/physics-support/proof-layout.mjs items/pthm-qft-example-regulated-probability-control.md items/ex-qft-x01.md`: bare invocation failed because the available TS fallback could not resolve the app’s imports. Using `NODE_OPTIONS='--import=/private/tmp/physics-b49-layout.FZoZAs/register.mjs'` with a temporary resolver matching `web/tsconfig.json` (`@/*` maps to `./*`) and extensionless relative TS imports, the same command passed: 2 items, 9 steps, 0 defects, exit 0. No repository or app tool was edited; the actual ItemBody renderer ran. Node emitted a loader deprecation warning, not a content failure.
- Updated the owning `batch-49.cross-batch-dependencies.json` evidence with independently checked current supplier hashes and uses, preserved historical rows, and ran `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14`: refreshed and deduplicated, exit 0. No new dependency edge or outside supplier edit was introduced.
- Final raw hash comparison: all four item carriers and both pages exactly match immutable post-reader snapshot hashes. The batch manifest and contract changed only as described. The Countable Choice import equals the pinned `research/math-imports.json` SHA-256 `28c60d2bef81c4dc87391283f7224d87e51eaa1e2106bb41d4f3c8157d80b006`.

Published findings: none in the published mathematical supplier content inspected for these claims. No published-content edit, published-ledger row or withdrawal is warranted. No substantial unmet prerequisite, outside consumer disposition, or local check blocker remains. The unavailable exact full historical item preimages remain a limit on historical proof-byte comparison, not a claim that those bytes were recovered; the independently reviewed current carriers, immutable pre/post fingerprints, reader report, earlier manifest claim and archived owner content distinguish current validity from historical evidence. The archived owner content used for context is under `research/physics-td-qft-rpm-62-2026-10-14-owner-escalations/qft49-supplier-readiness/final-round-2/observed/`; it is not relabelled as an exact pre-reader item preimage.

No judging, decision stamping, self-certification, agent dispatch, run transition or gate battery was initiated. The engine owns the next hashing and gate actions.
