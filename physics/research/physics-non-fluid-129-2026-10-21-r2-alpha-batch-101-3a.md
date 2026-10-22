# Batch 101 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; role alpha; group `batch-101`; scope batch 101 only.

## Completed level 0

`def-qsmx-information-conventions`: touched **reviewed_no_defect** (`audit_enrichment`, harmless extra blank line); `refuter:101:1` **confirmed_fatal**, repaired with confidence 1. The exact pre-reader archive is `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/def-qsmx-information-conventions.md` (raw SHA256 matches the immutable pre snapshot); its delta to the reader carrier consists only of one extra blank line before the Proof heading. Current entry hash initially matched the post snapshot. F4 defines only second-factor contraction, so it did not justify the stated first-factor traces. Added the published, pinned `def-qc-first-factor-partial-trace` as dependency, Definition reference and F6, and corrected step 1.1. Contract and manifest now declare the same prerequisite. The Definition itself is unchanged, so no interface propagation is triggered.

Checked exact Definitions of `def-qc-density-operator`, `def-it-von-neumann-entropy`, `def-it-finite-dimensional-quantum-relative-entropy`, both partial traces, and the Statement and full proof of `lem-it-partial-traces-of-a-state-are-states`. Ordered grouped factors remain ordered; all entropy arguments are density operators. Finite spectral sums cover zero and repeated eigenvalues and dimension one; D(0||Y)=0 and failed support inclusion gives +infinity. Risk review complete in the owning contract. No experiment or empirical inference is asserted.

Ledger defect: `physics-non-fluid-129-2026-10-21-r2-3a-101-first-factor-citation`, fixed, owned at 3a-adjudicate.

## Completed level 1: channel and conditional information

`thm-qsmx-cmi-and-channel-dpi`: touched **amended_repair**, confidence 1. Exact pre-reader archive: `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/thm-qsmx-cmi-and-channel-dpi.md`, matching the pre snapshot. The reader changes only the diagram note from step 2.1 to 1.2, correctly pointing to the dilation construction. All four current proof steps checked. SSA gives precisely the ordered conditional-information inequality. The Kraus TP identity implies q>0 and gives V*V=I. The lift preserves and reflects supports and preserves QRE; tracing the environment then gives channel DPI, including zero and singular inputs and +infinity. No recovery/equality or infinite-dimensional claim.

Read the full current `def-qsm-dt-channel-definition`, `thm-it-finite-strong-subadditivity`, `thm-it-quantum-relative-entropy-partial-trace-data-processing`, `thm-qsm-dt-choi-kraus`, and `lem-qsm-matrix-state-calculus` (its proof 3.1 supplies cyclicity and basis independence); remaining direct suppliers were read for level 0. The triangle has the PSD input, lifted output/environment, and output cones, with the arrows and composition computed in 1.2. It requires no repair. Moved the inline Statement link to its existing following references section to satisfy statement-first formatting, preserving the mathematical wording/content and synchronizing the manifest. Risk review complete.

Source independently opened: [Watrous, Chapter 5](https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf), Definitions 5.17–5.18, pp.265–266, and Theorems 5.35–5.36 with complete proofs, pp.280–282. This edition uses bits; multiplying both entropy and relative entropy by ln(2) gives the local nats convention. Supplier statements and local calculations, rather than the source citation alone, justify each inference.

## Completed level 1: thermal bound

`thm-qsmx-thermal-mutual-information-bound`: touched **amended_repair**, confidence 1. Exact pre-reader archive is `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-qsm101-gibbs-log/final/items/thm-qsmx-thermal-mutual-information-bound.md`, matching the immutable pre snapshot. Retained the reader correction to the Wolf locator and explicit crossing-label/support definitions. Made the order lexicographic and both internal-label comprehensions explicitly range over J_s; synchronized the previously stale manifest Statement and source title. The unconditional finite-matrix inequality and conditional norm-count scope are preserved.

Read every direct supplier: `def-axiom-of-choice`, `def-qsm-relative-entropy-domain`, `thm-qsm-finite-entropy-composition`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, `thm-qsm-finite-gibbs-variational`, plus the already-read conventions, second partial trace, state-marginal and matrix-calculus items. Checked the full Gibbs supplier proof, particularly its faithful Gibbs logarithm, finite tangent-log inequality, all support cases and equality argument; the owned proof needs its free-energy minimum, not its equality characterization. For the partial-trace supplier only (a)–(b) and their proofs are used. AC is explicitly retained through the broader declared supplier closures; the present finite calculation needs no infinite selection.

All five owned proof steps are valid: faithful Gibbs density, product competitor, product entropy divided by k_B, correct sign in the variational rearrangement, cancellation of both local expectations, and the spectral absolute expectation bound yielding twice the boundary norm. Empty site sets and empty partitions use a one-dimensional empty tensor product. Nonempty interaction supports then yield no crossing labels when either side is empty; the boundary sum is zero. One-dimensional factors, singular competitors, C=0 and zero interaction are covered; beta=0 and infinite-dimensional limits are excluded.

Source independently checked: [Wolf et al.](https://arxiv.org/pdf/0704.3906v2), “Area laws for classical and quantum systems,” Eq. (3), printed p.2 (PDF page index 1), derives the Gibbs product comparison and local-energy cancellation. The local proof supplies its own absolute operator-norm estimate and assumes its explicit norm-count condition; it does not infer geometric area scaling without that condition. [Naaijkens](https://arxiv.org/pdf/1311.2717v2), §3.4, “Free energy,” Eq. (3.4.3), printed p.79 (PDF index 78), uses Srel(sigma|rho)=D(rho||sigma) and dimensionless entropy; the local k_B conversion is consistent. These passages were read, not the entire books.

Consumer search over current items and library pages finds no thermal-theorem consumer other than its A-page placement, whose title/inventory remain accurate. The conventions Definition was unchanged by Alpha. Inspected the actual outside uses in `thm-qsmx-quasifree-entropy` F3/steps 2.1–3.1 and `thm-qsmx-schmidt-mps-error` F5/steps 1.2, 4.1: unchanged spectral entropy in nats and ordered traces support them; no repair needed. No outside repair or escalation required. Thermal risk review complete before moving to the example.

## Completed level 1: Bell and dephased densities

`ex-qsmx-bell-and-classical-information`: touched **amended_repair**, confidence 1. Hash-matching pre-reader archive: `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/ex-qsmx-bell-and-classical-information.md`. Reader adds the first-factor supplier, its F4 coordinate formula and correct proof-step citations. Both verification steps and all suppliers were independently checked: normalized Bell projector and dephased density are positive trace-one; both coordinate traces erase the two off-diagonal Bell terms; both marginals are I_2/2. Their global spectra are (1,0,0,0) and (1/2,1/2,0,0), giving the claimed 2 ln(2) and ln(2) mutual informations in nats. The zero convention covers all singular terms. Alpha synchronizes the missing manifest dependency and role. Example interface is unchanged. Risk review complete.

[Wilde v8](https://arxiv.org/pdf/1106.1445v8), §11.6 Definition 11.6.1 and Exercise 11.6.2, printed pp.334–335, match the mutual-information definition and maximally entangled/dephased comparison after unit conversion. Theorem 11.7.1 statement (p.338) and 11.8.1 statement (p.342) were checked; this chapter defers their proofs to Chapter 12, which I did not read. Watrous and the exact local suppliers carry the full proof review above. No claimed source-wide audit.

## Closed defects and obligation ownership

Exactly five decisions are owed: four touched carriers and one refuter finding. The untouched mathematical content behind the conventions layout delta is recorded as audit enrichment; the separate refuter decision alone closes its substantive citation defect. The other touched decisions each own their reader-repair defect rows, with the thermal decision owning its two distinct definition/locator defects. All rows have caught_at_stage 3a-adjudicate and disposition fixed; none records a mechanical validator failure as a scientific defect. IDs:

- `physics-non-fluid-129-2026-10-21-r2-3a-101-first-factor-citation` (refuter; fatal).
- `physics-non-fluid-129-2026-10-21-r2-3a-101-dilation-note-locator` (nonfatal).
- `physics-non-fluid-129-2026-10-21-r2-3a-101-crossing-count-definition` (fatal).
- `physics-non-fluid-129-2026-10-21-r2-3a-101-wolf-locator` (nonfatal).
- `physics-non-fluid-129-2026-10-21-r2-3a-101-bell-first-factor-citation` (fatal).

## Scope and frontier

All four items are mathematical-domain finite-dimensional claims. No preparation postulate, empirical premise, observed dataset, p-value or confidence statement occurs. All prerequisite roles are mathematical. No published carrier or imported snapshot was edited; no defective published claim was identified in these actual uses. No published-ledger row is required. The single assigned diagram was reviewed; none is needed for the elementary entropy computations. A/B pages retain their inventory, order and frontmatter-only bodies. There is no page-only obligation.

The batch cross-batch input is [], since every in-run logical supplier for these four owned consumers is the same-batch conventions definition. Outside published suppliers remain read-only context. Outside consumers of that definition require its unchanged nats entropy/ordered partial traces, and need no correction. Stable IDs, all items and pages, and the approved mathematical scope are preserved. No proposed withdrawal, missing supplier or unresolved escalation.

## Validation

All final checks below exited 0 after the final item edits.

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-101.proof-contracts.json --strict`: 4/4 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/def-qsmx-information-conventions.md items/thm-qsmx-cmi-and-channel-dpi.md items/thm-qsmx-thermal-mutual-information-bound.md items/ex-qsmx-bell-and-classical-information.md`: 4 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` with the same four explicit item paths and both assigned page paths: all 6 files pass actual YAML/KaTeX checks. Diagram mathematics was reviewed directly as described above.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-101.proof-contracts.json --require-reviewed`: all four HIGH/CRITICAL records complete, 0 errors. The mandatory initial report without that flag was run before level-0 repair.
- Final single batched `node tools/physics-support/proof-layout.mjs` with all four explicit item paths: 4 items, 13 steps, 0 defects. No item edit followed it.
- Local artifact consistency: exactly 5 owed decisions, 5 distinct closed defect rows, all 4 manifest statements and dependency lists agree with current items, all risks complete.

Initial command discovery encountered an unavailable `python` executable (recovered with python3), direct Node execution of an .mts file (recovered with the prescribed tsx runner), and an incorrect proof-contract helper filename (recovered with proof-contract.mjs). These were invocation issues, not scientific defects or successful checks. No ledger row was created for them.

No judge/stamp, certification, agent dispatch or gate battery was initiated. Decision hashes remain for the engine to stamp; these focused checks do not certify mathematical truth or production readiness. No unresolved blocker remains.

