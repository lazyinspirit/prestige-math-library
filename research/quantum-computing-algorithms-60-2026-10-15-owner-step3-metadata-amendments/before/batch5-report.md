# Batch 5 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-5`.

Scope: seven touched obligations, no page, reader or refuter findings. Review follows the generated item order. Reader and refuter artifacts are evidence only. No engine transitions, stamps, judge cycles or publication are performed.

## Completed item reviews

### lem-qc-linear-isometry-adjoint-identities

Proof 1.1 applies first-linear complex polarization to the four norm squares; 2.1 uses the existing finite-dimensional adjoint and nondegeneracy with conjugate symmetry to obtain V†V=I; 3.1 uses a pointwise preimage for the surjective identity. Exact supplier Statements/Definitions read. Zero spaces satisfy both identities; finite bases and pointwise preimages require no AC. Reader/refuter report no findings. No defect.

### thm-qc-trace-preserving-kraus-normalization

Proof 1.1 uses rectangular cyclicity and trace linearity on the entire endomorphism space, giving tr(Phi(X))=tr(SX). Proof 2.1 applies the exact trace-pairing nondegeneracy statement to S-I, proving the converse. Exact supplier Statements/Definitions read. Empty Kraus family is trace preserving precisely for H=0; zero output with positive input cannot be trace preserving. No positivity premise or AC is used. Reader/refuter report no findings. No defect.

### prop-qc-unitary-conjugation-global-phase-invariant

Proof 1.1 proves norm preservation and surjectivity of zU using |z|=1 and a pointwise preimage; 2.1 uses the conjugated scalar in the exact adjoint-algebra supplier to cancel z times conjugate(z). All supplier Statements/Definitions read. Nonzero equal-dimensional spaces and single-conjugation scope are explicit, so the controlled-relative-phase caveat is respected. No AC or defect; reader/refuter have no findings.

### def-qc-choi-matrix

Accepted reader repair: the input basis indexes the sum; zero output dimension makes every summand zero without making the index set empty. Definition is linear under the first-linear pairing and has the stated input-first/output-second shape. Read current register, tensor-register and tensor-map Definitions. Snapshot comparison distinguishes this actual item change from six dependent quotation changes. Consumer inspection will finish with the higher-level items.

### lem-qc-tensor-products-of-operator-matrix-units-form-a-basis

Proof 1.1 computes each tensor matrix unit on every product basis vector; 2.1 recovers every endomorphism uniquely from its coordinate columns. Read exact coordinate, tensor-map and tensor-basis supplier statements. Both spanning and independence follow entrywise, with no dimension-count shortcut. If either factor is zero the endomorphism space is zero and its empty basis is valid. No AC. Reader/refuter have no findings; no defect.

### lem-qc-positive-choi-matrix-yields-kraus-operators

Proof 1.1 handles zero H, zero K and J=0 by the matrix-unit expansion; 1.2 uses the exact nonnegative square-root and spectral-characterization suppliers, retaining positive eigenvalues and reshaping w_(i,alpha) into K_(alpha,i). In 2.1 the Choi entry ((i,alpha),(j,beta)) equals the (alpha,beta) entry of the Kraus output on E_ij; conjugate-transpose adjoints give precisely w_(i,alpha) conjugate(w_(j,beta)). Proof 3.1 extends by linearity and counts at most nm operators. Read all exact direct supplier statements; no AC or unsupported rank-minimality claim. Reader/refuter have no findings. Touched contract only refreshes the corrected Choi Definition quotation; no new defect.

Verdict: `reviewed_no_defect`, `change_kind: metadata`, no defect IDs.

### lem-qc-complete-positivity-implies-choi-positivity

Proof 1.1 handles either zero dimension, then constructs the self-adjoint positive rank-one Q_Omega under the first-linear pairing. Step 2.1 checks its ancilla blocks E_ij, so the actual CP Definition applies at r=n>0, with output on K tensor C^n. Step 3.1 explicitly changes factor order by a unitary W and checks the conjugated elementary tensors; 4.1 preserves self-adjointness and quadratic positivity. Read all direct exact supplier statements and the full block-amplification well-definedness proof. No reliance on an undefined tensor of superoperators. Reader/refuter have no findings. Contract-only Choi quote update is metadata; no defect or AC.

### thm-qc-kraus-map-completely-positive

Proof 1.1 establishes the amplification identity on product operator matrix units and extends to the full operator space, using the exact block CP Definition and tensor composition/adjoint supplier. Zero H is treated independently, zero K causes zero output, and the fixed r is any positive integer. Step 2.1 verifies both self-adjointness and nonnegative quadratic form of every congruence and its finite sum, including empty families. Step 3.1 correctly discharges arbitrary r. All direct Statements/Definitions and the block-amplification lemma were read. No AC, circular CP characterization or reader/refuter finding; no defect.

### prop-qc-unitary-conjugation-is-channel

Proof 1.1 uses the single rectangular Kraus operator U, exact CP theorem and normalization U†U=I. Step 2.1 proves VU and U† are surjective isometries before identifying conjugation composition and the two inverse maps on all X. Direct supplier Statements/Definitions and proofs of owned suppliers were read. All spaces are explicitly nonzero; no unsupported physical realization, controlled-phase identity, AC or defect. Reader/refuter have no findings.

### thm-qc-isometry-partial-trace-is-channel

Proof 1.1 constructs the coordinate projections P_a and verifies their adjoints by pairing; the exact partial-trace coordinate formula in any environment orthonormal basis gives the finite Kraus formula. Step 2.1 applies the proved Kraus CP supplier. Step 3.1 proves sum P_a†P_a=I on a product basis, normalizes L_a=P_aV using V†V=I, and uses rectangular trace cyclicity for all input endomorphisms. All exact direct supplier Statements/Definitions were read. Empty E or K forces H=0 under the isometry hypothesis; zero H with nonzero output also works. No AC or missing prerequisite; reader/refuter have no findings.

### thm-qc-kraus-choi-equivalence

Proof 1.1 and 2.1 form the cycle CP => Choi nonnegative => finite Kraus => CP. Each exact supplier was independently reviewed earlier in dependency order with identical H,K and fixed orthonormal input basis, including zero spaces, empty families and zero map. No circular assumption or additional finiteness/choice premise. The Choi quotation alone changed in the contract; current item equals reader-post and pre item. Reader/refuter have no findings; no defect.

### thm-qc-channels-compose-and-tensor

Proof 1.1 types B_j A_i:H->L correctly, applies reversed adjoints, and normalizes the composite finite family. Step 1.2 establishes the tensor superoperator on the proved basis of product operator matrix units; matching finite Kraus sums on that basis proves the asserted full-space map. Step 2.1 normalizes tensor Kraus operators using tensor composition, adjoints and identities. All exact cited supplier Statements/Definitions and owned proofs were read. Empty-family/zero-input cases are included; only finitely many existence choices are made, requiring no AC. Reader/refuter have no findings. No defect.

### thm-qc-choi-trace-preservation-condition

Proof 1.1 derives the output partial trace entries as sum_(alpha,a) K_(alpha,i) conjugate(K_(alpha,j))=S_(j,i), correctly retaining the transpose rather than incorrectly asserting equality with S. Both directions reduce S^T=I to S=I and invoke exact Kraus normalization. Exact direct supplier Statements/Definitions were read, including basis-independent partial trace, and owned CP/Kraus proofs independently reviewed. The CP hypothesis licenses the chosen finite Kraus family. H=0 is vacuous; K=0,H nonzero makes both conditions false. Contract-only Choi quotation refresh; no AC, reader/refuter finding or new defect.

### thm-qc-finite-stinespring-dilation

Proof 1.1 takes any chosen N-term finite Kraus representation, obtains normalization from trace preservation and constructs Vx=sum K_a x tensor u_a. The first-linear product pairing yields sum ||K_a x||^2=||x||^2, so V is an isometry. Step 2.1 verifies V†(y tensor u_b)=K_b†y by the pairing and contracts exactly diagonal environment blocks. Direct supplier Statements/Definitions read; no circular dilation assumption or minimal-environment assertion. N=0 forces H=0, including empty sums and environment. The finitely many basis choices need no AC. Reader/refuter have no findings; no defect.

### thm-qc-finite-kraus-choi-stinespring-equivalence

Proof 1.1 first obtains CP from Choi nonnegativity before using the CP-hypothesized trace-preservation theorem in the reverse direction. Step 1.2 combines the complete-positivity/Kraus equivalence with normalization in both directions, and 1.3 uses the two proved dilation implications. Step 2.1 now correctly cites 1.1,1.2,1.3; its former prose self-reference is removed. All exact direct supplier Statements/Definitions and owned proofs were read. Same fixed input-first basis, finite spaces and all-input identities persist; H=0 and zero-output/positive-input cases agree across all four conditions. No AC. Reader/refuter have no findings. Accept reader citation repair with confidence 1.

### ex-qc-dephasing-channel-kraus-choi

Verification 1.1 computes Z†=Z, Z²=I and normalization pI+(1-p)I=I, then derives the density-matrix off-diagonal multiplier 2p-1 and verifies self-adjoint positivity and trace one. Step 1.2 computes all four matrix-unit images; the explicit orthonormal eigenbasis has eigenvalues 2p,2(1-p),0,0, proving positivity directly from the quadratic-form definition. Step 2.1 contracts the output factor and obtains I. Read exact direct supplier Statements/Definitions and the proved finite equivalence. Endpoints p=0,1 retain a zero Kraus operator and unitary channels; p=1/2 kills precisely the coherences. No unsupported claim that every p completely dephases. No AC or reader/refuter finding. Touched contract only refreshes Choi quote; no defect.

## Decisions and historical comparison

The decisions file contains exactly seven `touched:5:<id>` entries. The Choi boundary carrier is `amended_repair` because its stale manifest quotation was corrected in this adjudication, while retaining the reader item text. The final equivalence proof's prose self-reference correction is `accepted_repair`. Both have `repair_confidence: 1`. Their closed defect-ledger rows are `qca60-b5-3a-choi-zero-output-index` and `qca60-b5-3a-equivalence-self-reference`, both owned at `3a-adjudicate`. These are nonfatal corrections; neither changes the resulting Choi operator or the proved equivalence. No reader/refuter finding obligation exists.

The other five touched carriers retain identical pre/post item bytes and are `reviewed_no_defect`, `change_kind: metadata`, `defect_ids: []`: their contract quotations follow the corrected Choi Definition. The finite equivalence also has a matching reader correction to its contract derivation. No new mathematical edit or verification stamp was applied to any item in this adjudication.

Compared the exact pre/post snapshot records with current raw SHA-256 hashes: all twenty current item files equal reader-post. The Choi pre-reader bytes can be recovered in memory by replacing only the corrected final paragraph with its old manifest quotation; the result exactly matches `8cf362a4ee75fc3e96a031d18cc9606b8d75c7ea3eaf50e8b395ef63d91cc3d2`. Its current reader-post hash is `1ffe921fba825f4e73f501800cc181d6ac74bb991e305f82ad29b9913b8e1c1b`. For the equivalence theorem, pre/post hashes and the reader report identify the citation correction and reflow; this report does not assert a reconstructed byte-for-byte full pre-reader theorem. Its current hash is `8526e8651e501b4f82b6551332934dd506d8a4c0fc8e8fac0bdb7c9101079644`.

The sole additional correction was synchronizing `batch-5.pages.json`'s stale Choi Definition quotation to the current item. The item provenance already describes the literature-derived statement and inapplicable definition proof; no provenance change is needed. Existing contracts already contain the six corrected supplier quotations and the corrected equivalence derivation. Fifteen specific `risk_review` entries were added to the owned proof contract.

## Dependencies and consumer impact

Read every current owned carrier and all direct cited supplier Statements/Definitions. Read the full extra `lem-qc-finite-ancilla-amplification-is-block-map` proof behind the CP Definition. Supplier use is detailed item by item above. The imported finite-dimensional adjoint, polarization, coordinate, trace, orthonormal-basis, spectral and square-root statements have exactly the domains used. This is an interface review of imported published foundations, not a recursive audit of every transitive proof.

A search across all `items/` and `library/` finds exactly six item consumers of `def-qc-choi-matrix`: positive-Choi-to-Kraus, CP-to-Choi, Kraus/Choi equivalence, Choi trace preservation, finite four-way equivalence and the dephasing example. Each current argument was inspected above. They use the unchanged input-first formula; zero cases either explicitly give zero operators/empty families or have positive dimensions. None relies on an empty output-indexed Choi sum. The A-page summary also remains correct. All consumers are in batch 5; no outside consumer repair or further propagation is necessary. Stable item IDs and all existing withdrawal proposals remain present.

The owned cross-batch input retains its 44 item and 4 page edges and their historical native evidence unchanged. Read the four in-run supplier page summaries: finite complex interfaces fixes the first-linear pairing and coordinates; registers/tensors supplies factor order, zero factors and partial trace; measurements supplies finite block CP; states supplies positive trace-one density operators. Their actual item interfaces support the owned consumers. No published defect was identified, so no published ledger edit or lock was necessary.

Historical Step 1 caveat: the batch notes retain eleven `escalated` records based on a reported duplicate `deps`/`justified_by` edge for the CP Definition. The same notes' final correction says the claimed current defect was absent and leaves disposition to the owner. Current frontmatter indeed has the amplification lemma once in `deps` and no `justified_by`; its full local proof supplies the block rule. This adjudication does not clear, overwrite or mark those owner-only Step 1 records ready. No substantial current mathematical prerequisite is missing in this batch.

## External source evidence

Read [Watrous, The Theory of Quantum Information](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), §2.2.2: Proposition 2.20 (printed pp. 80–81), Theorem 2.22 and its complete proof (pp. 82–84; PDF pages 89–91), Theorem 2.26 and its complete proof (pp. 87–89; PDF pages 94–96), and Corollary 2.27 (p. 89). These support the finite representation and trace-preservation identities. Watrous orders output before input and states Theorem 2.22 for nonzero maps. Local proofs explicitly swap factors and prove the zero cases independently. The local bound is at most dim(H)dim(K), without a minimality claim. Preskill references were not independently inspected in this adjudication; no inference above relies on them instead of the supplied local proofs.

## Local checks

- Initial `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-5.proof-contracts.json`: fifteen HIGH/CRITICAL items, zero errors. Final rerun with `--require-reviewed`: all fifteen complete, zero errors.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-5.proof-contracts.json --strict`: 15/15 checked, zero errors/warnings after the final contract edits.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-qc-choi-matrix.md items/thm-qc-finite-kraus-choi-stinespring-equivalence.md`: one applicable proof checked, zero failures; Definition has no proof phase.
- `node tools/rendercheck.mjs items/def-qc-choi-matrix.md items/thm-qc-finite-kraus-choi-stinespring-equivalence.md`: two files, valid YAML and real KaTeX parsing, zero errors.
- Final item-layout check: `node tools/proof-layout.mjs items/def-qc-choi-matrix.md items/thm-qc-finite-kraus-choi-stinespring-equivalence.md`: two items, four proof steps, zero defects. No item was subsequently edited.
- Exact obligation-set assertion: 7/7 with no extras; all twenty item bytes match reader-post; Choi manifest statement equals the current Definition exactly.
- `node tools/defect-ledger.mjs append --file /tmp/qca60-batch5-defect-rows.json`: two closed rows appended through its serialized writer and generated view refreshed.

These are local checks, not a judge verdict, engine stamp, or gate-battery certification.

## Blockers and handoff

No unresolved batch-5 mathematical blocker or new outside-scope defect was found. Existing owner-only Step 1 escalation records remain for owner disposition as described above. The actual autopilot status recomputed during this review reports the run running through Step 3a with the pre-existing spec blocker: `1-scaffold` has invalid construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. No engine state was changed. The engine owns decision hashes, the gate battery and stage transitions. Required report and decisions are complete.
