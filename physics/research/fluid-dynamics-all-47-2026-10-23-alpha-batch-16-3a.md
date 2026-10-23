# Batch 16 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Role: alpha. Group: `batch-16`. Covers: batch `16` only. Item order: the single routed level-4 item `pthm-fd-nonnewtonian-conditional-admissibility`, including its HIGH-risk review and both refuter findings. No page, touched-carrier, reader-finding, or outside-producer decision is owed.

## Decisions and complete repairs

1. `refuter:16:1`: **confirmed_fatal**, repaired with `repair_confidence: 1`. The original entropy qualification named a Helmholtz density and thermostat without specifying entropy production or the heat/entropy exchange relation. The mechanical identity alone cannot supply that interpretation: its supplier `lem-fd-conformation-storage` explicitly makes no entropy-production claim. The corrected Statement retains the complete mechanical result and defines an additional thermodynamic realization along the same trajectory: fixed positive temperature `T0`; C1 internal-energy and entropy densities per current volume `e_v,s_v`; continuous signed heat-removal rate `h`, positive outward; energy balance `e_v'=P-h`; Helmholtz identification `w=e_v-T0*s_v`; entropy exchange outward `h/T0`; and production `pi_s=s_v'+h/T0`. Here `P=(tau_s+tau_p):D`. Units and one-sided endpoint derivatives are explicit. Proof 2.1 differentiates the Helmholtz relation and cancels the heat term to obtain `T0*pi_s=P-w'>=0`. Production nonnegativity is derived, not assumed, and no empirical or PDE-existence conclusion is added. Closed defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-16-entropy-realization`.

2. `refuter:16:2`: **confirmed_nonfatal**, repaired with `repair_confidence: 1`. Original Proof 1.2 cited graph equivariance F6 without invoking the already available kinematic identity F5. This is an immediately repairable inference/citation gap. The current step explicitly combines `D*=QDQ^T` with `B(QDQ^T)=QB(D)Q^T`, obtaining the transformation of every allowed stress, including the entire rest ball. No new supplier, changed supplier claim, or additional kinematic hypothesis is required. Closed defect: `fluid-dynamics-all-47-2026-10-23-3a-batch-16-bingham-observer-kinematics`.

Exactly these two obligations appear in `research/fluid-dynamics-all-47-2026-10-23-alpha-batch-16-3a-decisions.json`, each mapped to its own fixed defect-ledger row at `caught_at_stage: 3a-adjudicate`. Rows were appended through the serialized defect-ledger tool, which refreshed its generated view. No mechanical failure was recorded as a mathematical defect.

## Historical evidence

Read the exact batch scope, order task, reader report, empty reader findings, refuter report, owning manifest, proof contract and cross-batch input. Compared the immutable pre/post-reader snapshots: all three item carriers, contracts, manifest fingerprints and both page carriers are equal. The reader reports no repair. The theorem's original raw item fingerprint in those snapshots is `503a2124ac5fe40caec546f9a5e1b97643bb036b9e4c3b5029754d56177878bd`; both routed refuter findings carry observed canonical fingerprint `de240550bfbc21d35f6d82044fdfd2512c1e673c8e18ea588a64f9e76a907da2`. These are distinct fingerprint types. There is no touched-reader repair to accept, amend or revert. The current corrections are Alpha repairs to the two bound findings; no historical verdict or original report was rewritten.

## Independent mathematical and physical review

The four direct suppliers were opened: `def-fd-adopted-nonnewtonian-models`, `lem-fd-generalized-newtonian-dissipation`, `lem-fd-bingham-monotone-graph`, and `lem-fd-conformation-storage`. Read each current result's full proof. Also opened the underlying `def-fd-nonnewtonian-laws`, `def-fd-smooth-motion`, `lem-fd-observer-calculus` and adopted continuum-balance postulate to check the actual conventions and use. These locally authored suppliers remain drafts, not certified results.

Generalized-Newtonian power is `eta(dot-gamma)*dot-gamma^2>=0`, including finite zero-rate viscosity and zero viscosity. Bingham power is `2*mu_p*|D|^2+tau_y*|D|` off zero and exactly zero for every allowed rest stress. The rest graph remains nonempty at zero yield radius. The graph lemma's supporting inequalities prove its subdifferential characterization at zero and nonzero rate; its conjugation equivariance and the independent observer calculation supply the needed objectivity. Symmetry, trace and the Frobenius normalization are preserved.

For conformation, continuity of `L` along the closed trajectory licenses the fundamental matrix `Z'=LZ`, `Z(0)=I`, and its invertibility. The supplier's transformed matrix `Y=exp(t/lambda)*Z^-1*C*Z^-T` has derivative `exp(t/lambda)*Z^-1*Z^-T/lambda`. For forward time, its integral adds a positive-semidefinite matrix to positive-definite `C0`. Congruence and the positive exponential preserve positivity, including t=0. Product differentiation, Jacobi's formula and the logarithm derivative give the exact storage identity. Independently, `tr(C+C^-1-2I)=tr((C-I)^T*C^-1*(C-I))>=0`. At `C=I` the relaxation term vanishes; the solvent contribution vanishes as well when `D=0`. Zero solvent viscosity is allowed. No backward-time positivity or fluid PDE existence is inferred.

Inspected the exact published mathematical supplier statements used by that conformation proof: continuous-coefficient matrix ODE existence/uniqueness on a compact interval, fundamental-matrix invertibility, matrix-inversion derivative, total-derivative chain rule, algebra of derivatives, Jacobi's formula, real spectral theorem, determinant multiplicativity, logarithm derivative/integral and integral-logarithm product law, positive-definite square roots, exponential derivative and exponential positivity. Their finite-dimensional hypotheses match the cited uses. Published and imported carriers were not edited; this is a scoped supplier-use check, not an audit of their full transitive proofs.

The optional thermodynamic realization is explicit and additional. It uses volume densities rather than confusing them with the postulate's mass-specific quantities; incompressibility removes a volume-expansion term. A signed thermostat exchange is allowed, and its sign cancels in the deduction. Fixed `T0>0` permits division without a zero-temperature boundary. No finite sampling, experimental measurement, uncertainty estimate, parameter fit or statistical inference is asserted. The theorem remains a conditional deduction from chosen model assumptions.

## Sources and reading limits

- [Reddy, Chapter 5](https://courses.washington.edu/mengr503/Chapter_5.pdf), §§5.4.2–5.4.3, PDF pp. 27–31: checked energy equation (5.4.11), entropy-production convention (5.4.20), and entropy/Helmholtz equations (5.4.23)–(5.4.30). The theorem states its same-temperature, volumetric trajectory specialization as added physical assumptions and proves the resulting identity locally.
- [Boyaval–Lelièvre–Mangoubi](https://www.numdam.org/item/10.1051/m2an/2009008.pdf), §§2.1.1–2.1.2, PDF pp. 5–7: read the conformation formulation, positive-initial-conformation Lemma 2.1, free-energy Theorem 2.2 and its proof. The paper's spatial integral theorem assumes a smooth PDE solution and homogeneous velocity boundary conditions; the local supplier reconstructs the trajectory identity instead of importing that global conclusion.
- Existing Reddy Chapter 6, Mei, Barrett–Boyaval and Tong references remain in the carrier. Their metadata and relevant local supplier uses were inspected; no fresh full-text reading of all those references is claimed. The additional Reddy Chapter 5 source and exact locator were added to source metadata and the immediately following Statement references section. Web extraction supplied the inspected source passages; the attempted local `pdftotext` fallback was unavailable and is not represented as a successful source read.

No uncertainty about an unfamiliar external theorem remains load-bearing for this local repair. No source is being used as empirical proof of these material models.

## Consumers, presentation and metadata

The public entropy clause changed, so searched `items/` and `library/` for the exact stable theorem ID. The only reference consumer is `library/fluid-dynamics/fd-f04.md`, whose full current carrier is frontmatter-only with `page_layout: compact-v1` and lists the theorem without a narrative claim. It needs no repair. No item consumer or affected outside consumer was found; therefore no further hop or owner escalation is needed. The underlying constitutive definition and all external suppliers are unchanged.

Synchronized the owning pages-manifest Statement and source metadata. Updated Proof 1.2 and 2.1 contract claims/inputs, the F5 citation-use list, endpoint/degenerate boundary evidence, and an exact thermostat-cancellation finite calculation. Recorded the complete HIGH-risk review in the same owning contract. Existing IDs, page inventories, prerequisite edges and provenance categories are preserved. The owned cross-batch input remains valid without edits; the scoped consumer disposition was appended to `briefs/tasks/frontier-dependency-ledger.md`.

The complete Statement is uninterrupted by hyperlinks; links follow in Statement references. Every proof step is a complete paragraph separated by blank lines, with valid terminal tags and QED on the last step. No TikZ/tikzcd diagram occurs in the routed theorem, and none is needed for this algebraic deduction. No page body or summary was authored. No defective published supplier, proposed withdrawal, new item, outside repair or missing prerequisite was identified.

## Focused checks and handoff

Executed from the physics workspace:

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-16.proof-contracts.json`: HIGH theorem (score 6), MODERATE example (score 4), zero errors, before recording the review.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/pthm-fd-nonnewtonian-conditional-admissibility.md`: unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/pthm-fd-nonnewtonian-conditional-admissibility.md`: one checked, zero failures.
- `node tools/physics-support/rendercheck.mjs items/pthm-fd-nonnewtonian-conditional-admissibility.md`: one file, no errors; actual YAML and KaTeX parsing performed.
- `node tools/physics-support/proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-16.proof-contracts.json --strict --items pthm-fd-nonnewtonian-conditional-admissibility`: zero errors/warnings, one checked. The initial run requested explicit anchors for two revised boundary descriptions; adding the actual Statement/step locators resolved both mechanical diagnostics without changing the argument.
- `node tools/physics-support/proof-layout.mjs items/pthm-fd-nonnewtonian-conditional-admissibility.md`: one item, four steps, zero defects; run once after the final item edit and reflow.
- Owning risk report with `--require-reviewed`: zero errors, two items routed, including the completed HIGH-risk review; repeated after the final contract metadata correction.
- Local data checks: exactly the two owed obligations, exactly one matching fixed ledger row per decision, identical immutable reader pre/post fingerprints, and exact current manifest Statement mirror.

Current theorem raw SHA256: `d8184cdda39af83fc793d593a07cadb509b56bed5211c1c370dfe607eff78d87`. This is a current-source locator, not an engine decision stamp.

Both repairs and the risk review are complete. No blocker remains within the assigned scope. No judging, certification, decision stamping, gate battery, workflow transition, publication, push or commit was performed. The engine owns subsequent hash stamping and gates.
