# Step 3a adjudication: batch 1

Run: `quantum-computing-algorithms-60-2026-10-15`. Group: `batch-1`; original scope assignment `m` retained.

Scope: two touched obligations, no page, reader, or refuter obligations. Read the dispatched order, scope, reader report/findings, refuter report, and pre/post snapshots. All eleven current raw item hashes match the post-reader snapshot. The two touched source hashes differ from pre-reader; all other source hashes are unchanged.

## Dependency-ordered review

1. `thm-qc-dirac-notation-coordinate-identity` (level 1, HIGH): reviewed all five steps and exact F1–F7 supplier statements/definitions. Root linearity gives coordinates `<z,e_j>`; conjugate symmetry gives entries `x_i conjugate(y_j)`. The operator sum agrees on every vector; the amplitude is the defining conversion. Rectangular, empty domain/codomain, zero-vector and one-dimensional cases hold. Given bases and finite sums require no AC. No defect; complete risk review recorded. Source: de Wolf v6 Appendix A.3, printed p.194, https://arxiv.org/pdf/1907.09415v6.

2. `thm-qc-trace-norm-duality-and-norm-properties` (level 1, CRITICAL): **accepted_repair**, confidence 1. Reviewed all nine steps and current F1-F10 suppliers, including the complete repaired published SVD proof. Trace linearity is proved by diagonal sums. The SVD calculates the operator-norm maximum even at rank zero; conjugate symmetry correctly converts the adjoint pairing in step 1.4. B_0 maps positive right singular vectors to left ones and vanishes on the complementary basis, so it is a contraction and attains the singular-value sum. The zero map is an admissible maximizer when rank or either dimension is zero. Homogeneity includes alpha=0; definiteness holds in both directions by SVD; the same contraction set proves the triangle inequality. No arbitrary choice or cyclic rectangular trace is used. Watrous Eq.1.173 with p=1 and Eq.1.174 agree. The exact pre-reader text recovered from native reader log lines 11634 onward hashes to the frozen pre snapshot; current source matches post exactly. The only mathematical delta is replacing undefined subscript-infinity operator-norm notation by the cited local norm; fact reflow is whitespace only. Accept the complete nonfatal reader repair, confidence 1; no remaining defect. Closed ledger row: `quantum-computing-algorithms-60-2026-10-15-3a-batch-1-duality-notation`.

3. `thm-qc-trace-norm-rank-one-formula` (level 1, HIGH): Reviewed all four steps and exact F1-F6 supplier statements and proofs. Under the root convention A*z=<z,x>y and A*A z=||x||²<z,y>y. Nonzero x,y make lambda positive; the explicit projection decomposition has a one-dimensional positive eigenspace and orthogonal zero eigenspace. The constructed R is self-adjoint, nonnegative and squares to A*A, so square-root uniqueness identifies its singular values. Zero x or y is handled before division, including either zero-dimensional space. No AC. Source context: Watrous Ch.1 singular values and trace norm, Eqs.1.167/1.181; de Wolf A.3/A.10 for the outer product. No reader/refuter finding or current defect. Complete risk review recorded.

4. `thm-qc-trace-norm-spectral-formula` (level 1, HIGH): Reviewed both steps and exact F1-F4 suppliers. The positive square root is an endomorphism of H even for rectangular A. Its orthonormal eigenbasis has precisely the domain singular values with multiplicity; the diagonal trace and trace-norm sum therefore coincide. At H=0 both sums are empty. At K=0, A=0 and all domain singular values vanish. Only a finite eigenbasis is chosen; no AC. Watrous Eq.1.181, printed p.34, explicitly states the same formula. No reader/refuter finding or current defect. Complete risk review recorded.

5. `thm-qc-trace-norm-unitary-invariance-and-positive-formula` (level 1, HIGH): Reviewed all three steps and exact F1-F6 suppliers, including isometry characterisations and square-root uniqueness. V* sends an orthonormal domain basis to one, and U does the same for the codomain. The adjoint identity rewrites <Vz,e_j> as <z,V*e_j>; the resulting SVD has unchanged positive singular values. Conversely an expansion with these orthonormal bases determines (UAV)*(UAV) diagonally, so the singular-value inference is valid also at rank zero. For nonnegative P, P*=P and P is the unique nonnegative square root of P²; its trace is the sum of its nonnegative eigenvalues. Checked empty domain/codomain, zero operators and repeated/zero eigenvalues. Finite bases require no AC. Watrous Eq.1.171 and Eqs.1.165/1.181 support the claims; the local proof supplies all steps. No reader/refuter finding or current defect. Complete risk review recorded.

6. `prop-qc-trace-holder-inequality` (level 2, HIGH): **accepted_repair**, confidence 1. Reviewed all three steps and exact F1-F9 suppliers after accepting the level-1 duality proof. An SVD establishes the operator-norm maximum; beta=0 forces B=0 by scaling unit vectors (including H=0). For beta>0, C=B/beta is a contraction; adjoint scalar conjugation has no effect because beta is positive real. The diagonal-sum calculation supplies trace homogeneity locally and duality yields the claimed bound. Checked A=0, B=0, rank zero, rectangular spaces, empty domain/codomain and norm-one boundary. No AC. Watrous Eq.1.174, printed p.33, agrees. Exact pre-reader source recovered from native reader log lines 11838 onward matches its frozen pre hash; current source matches post. The mathematical delta only replaces undeclared infinity subscripts for B/C norms by the local defined norm; the rest is fact reflow. Accept the complete nonfatal reader repair, confidence 1; no remaining defect. Closed ledger row: `quantum-computing-algorithms-60-2026-10-15-3a-batch-1-holder-notation`.

7. `thm-qc-hermitian-trace-norm-positive-negative-parts` (level 2, HIGH): Reviewed all four steps and exact F1-F9 suppliers after the level-1 spectral trace formula. The adjoint identity makes every eigenvalue real. Clipping the finite real eigenvalues constructs linear, diagonal self-adjoint positive/negative parts; their ranges use disjoint orthonormal basis subsets and are orthogonal for every u,v. The diagonal operator with eigenvalues |lambda_j| is nonnegative and squares to X*X, so uniqueness identifies its square root and the trace-norm sum. Trace zero equates positive and negative eigenvalue sums, giving both factor-two identities. Checked zero dimension, X=0, repeated eigenvalues, all-positive/all-negative spectra and zero eigenvalues; no claim of uniqueness is added and no AC is used. Watrous Eqs.1.141-1.144 (pp.26-27) and Eq.3.18 (p.129) corroborate the construction and trace identity. No reader/refuter finding or current defect. Complete risk review recorded.

8. `ex-qc-inner-product-dirac-coordinate-check` (level 2, HIGH): Reviewed all four verification steps and exact F1-F4 suppliers after the coordinate identity. Direct substitution gives T(z_0,z_1)=(z_1,0), columns (0,0),(1,0), and S(w_0,w_1)=(0,w_0). For all z,w, both adjoint pairings equal z_1 conjugate(w_0); S is linear, so finite-dimensional adjoint uniqueness gives T*=S and the displayed conjugate-transpose matrix. Zero vectors and each coordinate basis vector agree. This example fixes C² and introduces no dimension, endpoint or choice quantifier. de Wolf Appendix A.3/A.10 confirms the translated convention. No reader/refuter finding or current defect. Complete risk review recorded.

## Historical comparison and authored changes

Both touched items retain the exact reader-post raw source hashes. The pre-reader complete source texts were recovered, without modifying the log, from `research/quantum-computing-algorithms-60-2026-10-15-dispatch/reader-reader-1.attempt-1.log`: duality begins at line 11634; Holder begins at line 11838. Each source ends immediately before the following item's opening frontmatter. Their SHA-256 values equal the immutable pre snapshot (`fd1a37de178c7126dc680c9c537e0987565658644889ac37ede91c34d67bd76b` and `007e56cffd36f027494c666ff25e80ab18db28d2b26cc3608679b6e18442bedf`). Exact comparison confirms operator-norm subscript removal plus whitespace-only fact reflow. Historical delta is known; no owner current-content exception was used.

This adjudication changes no item, statement, definition, manifest, provenance or prior verification record. It adds eight specific `risk_review` records to the owning proof contract, two accepted-repair decisions, and the two closed nonfatal notation defect rows named above. Removing only `risk_review` from each current contract entry reproduces its reader-post canonical contract hash, for all nine proof-bearing entries. Prior hash-bound template reviews remain historical evidence; they were not refreshed or represented as current certification.

## Consumer dispositions and owner alert

The notation repairs preserve all hypotheses, quantifiers and conclusions. I searched all current `items/` and `library/` references to both edited IDs and inspected the relevant current fact and proof uses. The only item occurrence of `prop-qc-trace-holder-inequality` is its own frontmatter ID; no direct item consumer of Holder was found. The direct duality consumers have these dispositions:

| Consumer | Current use checked | Disposition |
|---|---|---|
| `prop-qc-trace-holder-inequality` | F1, steps 2.1–3.1 | Reader already made the necessary local notation correction; accepted above. |
| `thm-qc-fidelity-range-equality-and-products` | L2, steps 1.1–1.2 | Nonnegativity and definiteness unchanged; no repair. |
| `thm-qc-channel-tensor-error-bound` | F1, step 3.1 | Triangle inequality unchanged; no repair. |
| `thm-qc-diamond-norm-ancilla-dimension-bound` | L4, step 1.1 | Norm continuity/triangle inequality unchanged; no repair. |
| `lem-qc-fidelity-classical-measurement-minimum` | L5, step 1.2 | Norm continuity unchanged; no repair. |
| `thm-qc-full-rank-pair-no-broadcasting` | L4, steps 3.1, 5.1–5.2 | Polar/spectral trace identity and square-root uniqueness unchanged; no repair required by this supplier delta. |
| `thm-qa-34-product-state-error-bound` | F7, step 2.1 | Finite-sum triangle inequality unchanged; no repair. |
| `thm-qc-channel-diamond-norm-one` | L3/F2, steps 1.1–2.1 | F2 explicitly introduces the infinity-subscript operator norm; the same contraction duality applies. No repair required by this delta. |
| `thm-qc-channel-composition-hybrid-bound` | L2, steps 1.1–2.1 | Triangle inequality unchanged; no repair. |
| `thm-qc-fidelity-purification-characterization` | L4, steps 1.2 and 2.1 | Mathematical duality use unchanged; notation alert below. |
| `thm-qa-36-circuit-to-adiabatic-simulation` | F7, step 5.1 | Trace-distance triangle inequality unchanged; no repair. |
| `thm-qa-34-channel-hybrid-bound` | F5, step 1.1 | Triangle inequality unchanged; no repair. |

The owning A page lists both supplier IDs; this inventory remains accurate. These are focused supplier-impact checks, not whole-item audits of outside consumers. No consumer Statement or Definition was changed, so no further propagation hop is required.

**Owner alert, outside batch 1:** batch 6, `items/thm-qc-fidelity-purification-characterization.md:41`, L4 still writes `max_{||C||_infty <= 1}` while citing the corrected duality supplier, which now uses the local defined operator norm without a subscript. The current consumer has no local definition of this infinity-subscript notation (the only occurrence is L4); steps 1.2 and 2.1 use its contraction formula. This is the same nonfatal notation concern, not a counterexample to the duality result. Required owner action: have the batch-6 owner replace this one norm occurrence by the supplier's notation, or explicitly declare the alias, and synchronize any affected contract quote/derivation. The consumer is outside this dispatch and remains untouched; no closed defect row or decision purports to resolve it here.

The owned batch's `research/quantum-computing-algorithms-60-2026-10-15-batch-1.cross-batch-dependencies.json` is `[]`: all owned logical suppliers are either in this same batch or published prerequisites, so no cross-batch input change or merged-ledger refresh is needed. No proposed withdrawal was removed.

## Sources and prerequisite limits

All cited dependency statements/definitions for the eight routed risk subjects were read from their current carriers. The direct finite-dimensional SVD, adjoint-existence/algebra, Parseval, positivity, positive-square-root, isometry-characterisation, complex-spectral, coordinate-inner-product, Cauchy–Schwarz and complex-modulus arguments were also inspected. No defective published supplier was identified in these uses; the published-consumer ledger therefore needs no entry. This is not an audit of their complete transitive foundations.

External corroboration was read directly from the author-hosted [Watrous manuscript](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), Chapter 1, §1.1.3, Eqs. (1.165)–(1.174), (1.181), printed pp.32–34; Jordan–Hahn Eqs. (1.141)–(1.144), pp.26–27; and the trace identity in Chapter 3, Eq. (3.18), p.129. These are finite-dimensional statements; Chapter 1 is a summary rather than a proof source. The local proofs supply their own derivations.

[de Wolf v6](https://arxiv.org/pdf/1907.09415v6), Appendices A.3, A.5, A.7 and A.10, printed pp.194–198, supplies the alternate pairing, matrix/trace and Dirac context. Its SVD derivation abbreviates the zero-singular-value completion; this review relies on the complete current local SVD proof for that case. Source pairings conjugate the first slot; the authored root pairing conjugates the second, and the translation was checked explicitly.

## Local checks and handoff

All commands below completed with exit code 0:

- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-1.proof-contracts.json` — initial routing: seven HIGH and one CRITICAL item, plus one MODERATE item; zero errors.
- The same command with `--require-reviewed` — all eight required reviews complete; zero errors.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-1.proof-contracts.json --strict` — 9/9 checked, zero errors and warnings.
- `node tools/citation-fidelity.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-1.proof-contracts.json --fail-on-missing-quote` — 71 citations across nine items; no missing quotes or widening candidates. Mathematical fidelity was reviewed independently above.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-trace-norm-duality-and-norm-properties.md items/prop-qc-trace-holder-inequality.md` — two checked, zero failing.
- `node tools/proof-layout.mjs items/thm-qc-trace-norm-duality-and-norm-properties.md items/prop-qc-trace-holder-inequality.md` — one batched final invocation, two items, twelve steps, zero defects. No item edit or formatter followed it.
- Both `defect-ledger append` operations validated and appended their single closed row and regenerated the shared view under the tool's lock.
- Raw item hash checks matched all eleven reader-post carriers; canonical contract checks matched all nine reader-post entries after removing only the new risk-review field.

All two owed obligations are decided. No batch-1 mathematical blocker remains. The outside batch-6 notation alert is for owner disposition. The engine owns decision sealing, gate execution and transitions; none was initiated or claimed here.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
