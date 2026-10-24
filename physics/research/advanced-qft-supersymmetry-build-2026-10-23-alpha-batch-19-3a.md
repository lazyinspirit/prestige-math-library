# Batch 19 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-19`; role: Alpha.

Scope has exactly three touched obligations and no reader/refuter findings or page obligations. No agents dispatched, judgments/stamps issued or engine gates initiated.

## Completed level 2 review

`post-qftx-nonabelian-yang-mills-model`: reader mathematical repair retained with a final display-format amendment, confidence 1. The real adjoint quotient and charts give inverse-adjoint transitions; the Hodge operator is uniquely specified by the nondegenerate wedge/metric pairing in degrees 0–4, with signature (-+++). The adopted SU(2) action, units, bundle sector and compact-support relative action convention are preserved. All eight direct suppliers were inspected; no empirical premise, diagram or quantum claim. Incoming raw hash before Alpha formatting matches post-reader 2089f0fda4652dc969a293b8576f4a16d46a383963ede103ab9fdfff1fbc6a40; exact pre-reader source is Git HEAD:physics/items/post-qftx-nonabelian-yang-mills-model.md (raw e9dc442c51074a6f18fb3a043eaf474f6f3134f10b28e5b4b9ef8ab85e274fff). Complete risk review entered in the owning contract.

The following sections complete the higher-level reviews and final checks.

## Level 3 example reviews

The noncommuting example has F=a²T3 dx¹∧dx² and star(dx¹∧dx²)=dx⁰∧dx³, giving exactly the stated negative density. The pure-gauge example has u⁻¹du=T3 cos(x⁰/ell) dx⁰/ell, dA=0 and [A∧A]=0; its potential is nonzero as a field, though zero at some points. Both two-step verifications and all direct suppliers checked, including zero parameters and ell>0. No field-equation claim is added to the first example; no observation is claimed by either. Complete risk reviews recorded; neither untouched item owes a decision.

## Gauge-invariance review

`pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance`: amended reader repair, confidence 1. Independently checked steps 1.1–4.1 against exact connection/curvature/gauge suppliers: the pushforward connection has inverse pullback form, hence the chosen inverse local representative gives the asserted adjoint curvature law. The real bundle is defined by the postulate, the complexified adjoint derivative preserves it, and the metric Hodge map commutes with fibre conjugation. Pointwise scalar-density equality proves every defined action equality without integration by parts or falloff assumptions. Identity/zero cases checked.

The pre-reader source is recoverable at Git HEAD and its raw SHA matches the pre snapshot; reader-result bytes matched the post snapshot before this Alpha edit. The explanatory triviality qualification over R4 agrees with Vákár Remark 1.1.18; it is not used as a premise of the action-invariance proof. Husemöller was downloaded from the cited URL into /tmp and inspected with PyMuPDF: the numerability observation follows Definition 9.2 in Chapter 4, printed p.50/PDF p.71; Corollary 10.3 is Chapter 4 §10, printed p.53/PDF p.74. The reader locator incorrectly said Chapters 9/10 and PDF pp.70/73. Only that source metadata is amended. Smooth-bundle triviality is explicitly stated in Vákár’s smooth setting; the Husemöller passage supplies the general topological criterion, not a separate local smooth-trivialization proof.

Both external gauge-invariance consumers, `def-qftx-formal-perturbative-yang-mills-data` and `pthm-qftx-perturbative-yang-mills-st-identity`, use the unchanged conditional action invariance in local charts and do not assume a nontrivial bundle on R4. No consumer repair is needed; the complete risk review is recorded.

## Euler–Lagrange review

`pthm-qftx-nonabelian-yang-mills-euler-lagrange`: accepted reader repair, confidence 1. All seven steps independently checked with the nine exact direct suppliers. The curvature polynomial and common compact support justify differentiation; invariant pairing with the degree-one variation gives the stated integration-by-parts sign. The first variation is −g⁻²∫kappa(a∧D(*F)); smooth scalar tests in each basis component prove the converse, while a zero equation immediately proves stationarity. The real adjoint restriction after complexification is explicit; inverse-adjoint transition differentiation cancels the added Maurer–Cartan term. The phrase “initial tangent X” in step 5.1 is understood as the already specified image dg_ij(X) in the group; its correct derivative is explicitly computed in the next formula, so no substantive gap follows from that shorthand. Empty charts, zero fields/variations and nonintegrable unvaried actions are covered. No positive-definite spacetime pairing is assumed. Statement unchanged; no second-hop interface event. Complete risk review entered before the level 4 consumer.

## Level 4 review

The null-wave example has F=T3(b/ell)cos(q/ell)dq∧dx¹ with q=x⁰−x³. Directly from the postulate Hodge definition, star(dq∧dx¹)=−dq∧dx²; repeated dq kills both d(*F) and F∧*F. The Lie bracket vanishes in the T3 direction. The reviewed Euler–Lagrange equivalence therefore gives stationarity, with no finite-energy or uniqueness assertion. All three verification steps, zero-field reduction, isolated cosine zeros, ell>0 and b≠0 were checked. Complete risk review recorded; this unchanged item owes no decision.

Manifest statement copies for the postulate and gauge theorem, and legacy full-postulate quotations in owned contracts, are synchronized with the reviewed carriers. This synchronization changes no inventory or public interface; the separate final direct F7 citation edge is recorded below.

## Consumer and supplier coverage

The postulate public-interface additions were checked at every actual direct dependency/reference use. Besides the three owned examples and two owned theorems, the current outside consumers are:

- `def-qftx-formal-perturbative-yang-mills-data` and `pthm-qftx-perturbative-yang-mills-st-identity`: local SU(2) action, field dimensions, compact variations and conditional gauge invariance; the added real-bundle definition preserves these uses.
- `def-qftx-n1-vector-superfield`, `post-qftx-n1-gauge-matter-model`, and `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`: represented connection and inverse-adjoint/associated transitions, natural dimensions and the same gauge density. Their additional matter is explicitly supplied by their own models.
- `post-qftx-n2-vector-hypermultiplet-model`, `post-qftx-n4-super-yang-mills-model`, `ex-qftx-n4-su2-noncommuting-scalar-potential`, and `post-qftx-n2-pure-su2-ultraviolet-model`: the same real/complex adjoint convention and trace-normalized gauge term. In particular the N4 local real scalar sections use exactly the now explicit inverse-adjoint transition; the scalar example uses the unchanged matrix bracket/form.
- `def-qftx-euclidean-yang-mills-sector`: a nonlogical reference explicitly says the Lorentzian postulate supplies no Euclidean branch. The additions do not add one.

No consumer needs a source repair, so there is no further interface propagation or outside escalation. The Euler–Lagrange Statement is unchanged. Its null-wave consumer was checked after completing that supplier review. The cross-batch records for associated-derivative uses now explicitly distinguish complexification from the real adjoint bundle. The frontier dependency ledger has an owned-consumer entry. Stable IDs and proposed inventories are retained; no withdrawal exists.

All direct dependency interfaces of the seven owned carriers were opened. In addition to the five gauge-geometry carriers and the owned SU(2) lemma, these include `def-qft-framework-units`, `def-gauge-group-of-a-smooth-principal-bundle`, `prop-gauge-transformations-act-on-principal-connections`, `lem-sr-compact-variation-and-fundamental-lemma`, `prop-adjoint-is-a-smooth-lie-group-representation`, `thm-the-differential-of-adjoint-is-ad`, `ex-unitary-and-special-unitary-lie-groups`, and `thm-heine-borel-rn`. The normalized SU(2) lemma was checked as context: closed/bounded matrix locus, explicit noncommuting witnesses, real traceless skew-Hermitian basis and trace pairing. Its exact supplier statements apply with n=2 and ambient real dimension 8. The inherited countable-choice assumption remains explicit; no new arbitrary choice is used. The three compact-variation clauses apply to smooth coordinate coefficients with a single compact support. Zero extension is valid because the support lies inside the open chart.

The owned items contain no TikZ/tikzcd diagrams and require none for these explicit computations. The two diagrams in opened gauge-geometry suppliers were also inspected as context: local potential change commutes with forming curvature, and component change commutes with the associated derivative. Their arrow directions and inverse representation actions match the equations; no outside edit is proposed. Both owned A/B pages remain draft, frontmatter-only `compact-v1` with unchanged inventories and empty bodies; neither owes a page decision.

## Sources and reading limits

- Vákár, https://arxiv.org/html/2110.06334: §1.1.5/Claim 1.1.5 (quotient and local chart construction), Remark 1.1.18 (triviality on Minkowski R4 and global representatives after trivialization), §1.3.1 (connection/curvature convention), and §2.6.5/Claim 2.6.11 and Theorem 2.6.12 (curvature variation and Yang–Mills equation). The web source and existing local full-text extracts were used; the complete relevant §2.6.5 argument was read. Its source-current equation is specialized to no matter. The action coefficient/signature here are explicitly adopted, not inferred without a convention conversion.
- Neeb, https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf: inspected existing text at §5.4, Definitions 5.4.1–2, Proposition 5.4.4 and Remark 5.4.5, and §6.1, Definition 6.1.1, Lemma 6.1.2 and Remark 6.1.3. Connection-form pullback, real adjoint-valued curvature and local transition conventions agree; note that the theorem pushes forward H and hence uses inverse pullback.
- Tong, https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf: inspected existing text at §2.1.1 and §2.1.2, equations (2.8), (2.11)–(2.12), for the quadratic action, coupling normalization and conjugation covariance. Its Hermitian matrix convention is distinct from the adopted anti-Hermitian basis; the local derivations are checked in the latter convention.
- Husemöller, https://www.maths.ed.ac.uk/~aar/papers/husemoller.pdf: web extraction failed, but curl retrieved the actual 376-page PDF into `/tmp/aqft-b19-husemoller.pdf`; PyMuPDF exposed PDF pp.70–71 and 73–74. Read cross-section/triviality Corollary 8.3, Definition 9.2 and following paracompactness observation, Theorems 9.8–9.9 and Corollaries 10.2–10.3. This confirms the corrected locator. No full-book or complete homotopy-classification proof audit is claimed.

These are source checks and conditional mathematical/model reviews, not empirical evidence or a publication judgment. No measurements, apparatus claims or statistical inference occur in this batch. No defective published supplier was identified at the actual uses; no published ledger edit was required. Broad transitive foundations, unrelated supplier proofs and consumer theories were not independently audited.

## Final amendments and records

The reader-result raw hashes of all three touched carriers matched the immutable post snapshot before Alpha edits. Every owned Git HEAD source matched the corresponding immutable pre-reader raw hash. Historical delta is therefore known; no missing-preimage or owner-resolution exception is invoked.

Final Alpha changes are restricted to: joining one postulate display formula onto one source line; correcting the Husemöller locator; citing the exact differential-of-adjoint theorem directly in gauge-invariance F7 and adding its mathematical prerequisite edge; synchronizing affected manifest Statement copies and exact contract quotations; recording the six complete risk reviews, owned consumer evidence, decisions and closed defects. The compact-support arguments and public claims are retained. No prior judge stamp existed or was added. The direct citation edge does not change the theorem Statement or any consumer interface.

Six distinct confirmed historical/source defects have closed, nonfatal ledger rows: `real-adjoint-definition`, `hodge-definition`, `fixed-base-bundle-qualification`, `gauge-real-adjoint-citation`, `el-real-adjoint-citation`, and `husemoller-locator`, each with prefix `advanced-qft-supersymmetry-build-2026-10-23-batch-19-`. Each row is owned at `3a-adjudicate` and referenced by its exact touched decision. No defect row was created for a formatter, parser or mechanical contract failure. Decisions are exactly the three routed touched obligations: amended postulate repair, amended gauge-invariance repair, accepted Euler–Lagrange repair, each with repair_confidence 1. Untouched examples receive risk reviews but no decisions.

## Local verification and handoff

- `risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-19.proof-contracts.json` initially identified six HIGH/CRITICAL items; all received specific complete reviews. The final `--require-reviewed` invocation passed with 0 errors over 7 items.
- Strict `proof-contract.mjs` passed: 0 errors, 0 warnings, 7/7 items. Initial check exposed five stale quotations/invalid section names; exact quotations were synchronized and F7 was bound to its actual theorem Statement.
- `citation-fidelity.mjs` with `--fail-on-missing-quote` passed: all 42 quotes found, no widening candidates.
- Scoped `precheck.mts` via `tools/physics-support/tsx-run.mjs` passed all three reader-touched items, including nonproof postulate structure. A direct Node attempt on `.mts` had failed operationally; the documented loader succeeded.
- Scoped `rendercheck.mjs` passed all three touched items after joining the postulate display's hard source break. No remaining YAML, math or delimiter defect.
- `depcheck.mjs --items-file /tmp/aqft-b19-items.json --quiet` passed the seven exact owned items and their prerequisite cycle checks.
- After final item edits, the single batched `proof-layout.mjs` invocation over the three touched paths passed: 3 items, 11 steps, 0 defects.

No scientific blocker or unresolved escalation remains. The engine retains decision-hash stamping, the full gate battery and stage transitions; none was initiated here. All new content remains draft.

Final carrier raw SHA-256 values:

- `post-qftx-nonabelian-yang-mills-model`: `4a28188863349d3673a8748b7e92759ee2b5370361f5ef047c4098edbbbb71fb`.
- `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance`: `d4222cb8e84cf1517ffb3a023c70264d72feddc088ad11d29db99795d2a5a915`.
- `pthm-qftx-nonabelian-yang-mills-euler-lagrange`: `57cc5652e27c968a9b9be871c9f9208be420a19b7b21f2fb7331ffd91515dcec`.

The six newly appended ledger rows passed scoped taxonomy validation (6 rows, 0 errors). Scoped `git diff --check` passed. The decisions file has exactly the three expected touched obligations, with no duplicates or extra decisions.
