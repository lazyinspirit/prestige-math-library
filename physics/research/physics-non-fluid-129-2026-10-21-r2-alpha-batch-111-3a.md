# Batch 111 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-111`.

Scope: four routed page findings, and four ordered risk reviews. The immutable pre/post snapshots agree on all six item and two page fingerprints: there were no reader repairs to accept or revert. No item verdict is owed.

## Level 1: finite CAR construction

`lem-qsmx-finite-car-quasifree-gibbs-construction`: Reviewed every proof step against the finite CAR definition and the published occupation-basis and matrix-state-calculus suppliers. Finite spectral diagonalization gives a positive normalized Bernoulli product density, including eigenvalues 0 and 1. CAR reordering gives the determinant with the reversed annihilator order and covariance C_ji; exterior-power unitary conjugation carries it to general C. Vacuum projection and creators/annihilators generate every matrix unit, proving uniqueness without a circular use of the definition's Gibbs assertion. Gibbs eigenvalues factor with q_j>0 for arbitrary real chemical potential, so Z is strictly positive and finite. Repeated eigenvalues and r=1 cause no exception; r=0 is excluded. No arbitrary choice, limiting assertion, empirical premise, or diagram is used. Reader/refuter report no item defect; their title findings do not concern this proof.

Evidence: `items/def-qsmx-quasifree-finite-covariance.md`, `items/lem-qsm-fock-occupation-basis-and-car-relations.md`, `items/lem-qsm-matrix-state-calculus.md`; exact facts F1–F3 and steps 1.1–4.1. Risk report without `--require-reviewed` succeeded and routed four items (scores 7, 8, 10, 10). Contract risk review complete; no source edit.

## Level 2: finite CAR entropy

`thm-qsmx-quasifree-entropy`: Reviewed steps 1.1–3.1 and facts F1–F6 against the current CAR construction, covariance definition, information conventions, occupation signs, finite spectral calculus, and orthonormal-basis supplier. The Bernoulli entropy sum factors over the positive-probability occupations; deterministic eigenvalues 0 and 1 contribute zero, avoiding log(0). With K modes first, their CAR operators act as c_K tensor I, so the ordinary partial trace inherits exactly the determinant moments and compressed covariance. For v in K, 0<=<C_K v,v><=<v,v>, giving a positive contraction; uniqueness supplies its quasifree density. Basis changes act by exterior-power unitaries on the retained/traced factors, preserving entropy/partial trace. K nonzero is required; K equal to the full space leaves a one-dimensional vacuum complement and is covered. No arbitrary choice or empirical inference. No diagram is present or needed. Reader/refuter identify no item defect.

Evidence: current item Facts F1–F6 and steps 1.1–3.1, `items/def-qsmx-information-conventions.md`, and `items/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.md` (including its zero-dimensional clause). Risk review complete; no source edit.

## Level 5: finite Bose stability

`thm-qsmx-finite-boson-stability`: Independently checked all seven steps and every F1–F10/A1–A2 supplier interface. Current finite Bogoliubov proof explicitly converts grouped/interleaved coordinates and gives M*R_g M=S_g R_g; current metaplectic proof supplies a Schwartz automorphism, so conjugation of quadratic products stays on the common invariant domain. The explicit certificate S_g^T G S_g=D_omega is assumed, not inferred from positivity. Hermite eigenvalues are c+sum hbar omega_j(n_j+1/2). The maximal diagonal multiplier is self-adjoint; a real scalar shift preserves its domain/adjoint; finite Hermite truncations are a graph core. Integration by parts on Schwartz identifies the differential restriction with that multiplier, so its closure and its unitary conjugate are self-adjoint. Strict positivity, beta>0, finite r and hbar>0 imply every q_j lies in (0,1), max q<1 and sum q finite. Trace class is established before using the positive trace theorem, and the zero-point shift yields exactly the sinh product. Arbitrary finite real c, repeated frequencies and r=1 are allowed; zero frequencies and infinite modes are excluded. AC and Countable Choice are explicit and satisfy the suppliers. F9 calls exp(-beta x) bounded: this is read on the lower-bounded spectrum of T/H, where it is bounded; it is not a global boundedness claim needed by the proof, since the cited calculus permits arbitrary Borel functions. No diagram or empirical premise; no substantive defect found.

Read the complete current Bogoliubov, metaplectic, Fock–Schrödinger and diagonal occupation-trace carriers; checked the exact Statement/Definition of all remaining directly cited operator/trace/choice suppliers. These draft batch-52 suppliers are read-only context, not independently certified by this review. The additional Remarks link to finite-mode symplectic data was checked for its grouped/interleaved conversion and quadrature definitions. Risk review complete; no source edit.

## Level 6: zero-mode counterexample

`cex-qsmx-bogoliubov-zero-mode`: Reviewed all three counterexample steps against the just-reviewed positive-frequency theorem, complete diagonal occupation-trace supplier and both explicit Choice definitions. Statement refuted deliberately asserts a false finite formula. The reduced positive-frequency modes obey the geometric trace hypotheses and give a strictly positive finite product. Allowing zero-mode occupation 0 through N multiplies it by N+1; these nonnegative partial sums diverge, so the full sum is infinite and admits no normalized positive Gibbs weights. At r=1 the reduced set is empty and the partial sums are N+1 exactly; the trace supplier explicitly covers the empty set. The example does not apply the strictly-positive theorem at zero frequency, nor identify removal of a mode with the full system. No thermodynamic limit, empirical conclusion or diagram is present. Reader/refuter report no item defect.

Evidence: current item F1–F2, A1 and steps 1.1–3.1; diagonal occupation-trace Statement and steps 1.2, 2.1, 2.2 and 3.1. Risk review complete; no source edit.

## Page findings and repairs

| Obligations | Carrier | Verdict | Closed defect |
|---|---|---|---|
| reader:111:1; refuter:111:1 | qsmx-quasifree-gases | confirmed_fatal | physics-non-fluid-129-2026-10-21-r2-3a-batch-111-title-A |
| reader:111:2; refuter:111:2 | qsmx-quasifree-gases-examples | confirmed_fatal | physics-non-fluid-129-2026-10-21-r2-3a-batch-111-title-B |

The exact original phrase “interacting boundaries” has no supporting result in either inventory or the inspected required-page inventories. This is a false scope promise in the public title, so the reader's nonfatal classification is not retained. The refuter's fatal classification is confirmed after independent review. Each page's reader/refuter observations have identical observed carrier fingerprints despite differing severity and location wording; `same_defect_as` records that each pair concerns one defect, with one shared ledger row. The original reports and scope remain unchanged. No unbound observation or missing historical preimage is involved.

Both titles now read “Finite quasifree CAR states and positive quadratic Bose Hamiltonians”, with “ — Examples” on the B page. The two owning manifest title fields match. This correction removes an unsupported promise, not a proved result: the original batch authoring notes explicitly exclude interacting depletion, superfluidity and infinite-mode claims. All six current item raw hashes match the immutable post-reader snapshot. Neither Statement/Definition nor a physical public interface changes. There are no additional touched/page obligations in the frozen routed scope.

The only outside current page consumer located by searching items/ and library/ is `qsmx-transverse-ising-spectral` (batch 112), whose frontmatter requires this A page by stable ID and has an empty body. Its actual use does not depend on the title or any interacting-boundary claim. The companion B page likewise requires the stable A-page ID. No consumer repair or outside escalation is needed. No page/item inventory, prerequisite list or ID is removed, and there is no proposed withdrawal.

## Sources, classifications and limits

The six carriers have mathematical domain; their conclusions use no observation, empirical premise or statistical inference. The source of each actual mathematical input is the exact local Statement/Definition identified in the risk reviews. External bibliography URLs in the items were retained; this adjudication did not retrieve those PDFs or claim a full-text source audit. The reader's targeted external-source checks remain attributed to that reader and are not adopted as my own reading. The local finite CAR construction, entropy sum, graph-closure argument and geometric-series divergence were checked directly. No uncertainty in those deductions requires an outside source lookup. Draft metaplectic context is used only for its finite Schwartz-preserving implementer interface; this review does not certify its entire transitive mathematics.

No TikZ/tikzcd diagrams occur in the scoped pages or items, and these explicit algebraic/spectral arguments require no additional diagram. No defective published supplier was found, so no published-maintenance ledger edit is needed. Imported snapshots and root mathematics remain read-only.

## Contract quotation maintenance

The first local strict-contract check found one `citation-quote-mismatch`: stability F2 retained the former Bogoliubov Statement. The independently read current producer adds explicit interleaved/grouped Weyl-label conversion and explicitly states the same quadrature covariance used here. Replaced this one local contract quotation with the exact complete current Statement; no supplier or consumer source, dependency, derivation, provenance or public interface changed. This is audit enrichment of a stale excerpt, not a new mathematical defect or a new adjudication obligation; no defect-ledger row was created for the mechanical mismatch. The four routed page decisions remain the complete owed decision set.

## Final local checks and handoff

- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-111.proof-contracts.json`: exit 0, four items routed; then `--require-reviewed`: exit 0 after completing the reviews, and again after the quotation refresh.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-111.proof-contracts.json --strict`: initial stale F2 quotation diagnostic; after the recorded quotation refresh, exit 0, 4/4 checked, zero errors/warnings.
- `node tools/physics-support/rendercheck.mjs library/quantum-statistical-mechanics/qsmx-quasifree-gases.md library/quantum-statistical-mechanics/qsmx-quasifree-gases-examples.md`: exit 0, two files, no rendering/YAML errors.
- Defect-ledger append: exit 0, two closed rows appended through the serialized tool; generated view refreshed. No unrelated ledger row was edited.
- Final scoped consistency assertions: exactly four routed decisions, two shared fixed ledger defects, matching page/manifest titles, empty page bodies, all six current item raw hashes identical to the immutable post snapshot, and four complete risk reviews.

No item was edited, so item reflow, precheck and the changed-item proof-layout handoff command are not applicable. The changes are the two draft page titles, their two manifest title mirrors, four risk-review records, one refreshed contract quotation, the required report/decisions, the two appended ledger rows/generated view and the owned frontier dependency note. No new judge/verification stamps or decision hashes were written. No engine gate or judge cycle was initiated. All routed work is complete; no substantive blocker remains. Engine stamping, collection and the gate battery are the next owner-controlled actions.
