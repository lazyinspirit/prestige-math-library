# Step 5 repair: impact-initial-pass-2, round 1, unit 3

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/impact-initial-pass-2-1.json.





Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-pass-2-r1-u3.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"impact-initial-pass-2",round:1,unit:"3",input_sha256:"060d7fdd56fafcf1a1110d022585923c3b96a3d5b356e5549e9e39a3ac641ce2",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

This pass retains your own genuine prior reviewer session. Selected same-reviewer obligations for this lane: thm-qa-35-swap-test-measurement-effect, alg-qa-35-swap-test-fingerprint, alg-qc-bounded-error-amplification, thm-qa-32-simon-sample-rank-correctness, ex-qa-32-simon-small-instance, thm-qa-35-fingerprint-correctness-and-cost, thm-qc-bqp-error-robustness, thm-qc-dense-coding-correctness-and-resource-count. Actually examine each current assigned consumer against your earlier supplier changes. Another reviewer may separately owe the same consumer in a later serialized pass; your review supplies only your own obligation.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "lem-qc-positive-choi-matrix-yields-kraus-operators",
    "status": "fixed-in-assigned-draft",
    "finding": "Proof 2.1 now compares the product-indexed Choi coefficient with the output-space alpha,beta coefficient. The square-root vectorization gives K_a entries w_a,i alpha and hence exactly Phi(E_ij); linearity and the empty zero-space family remain valid. Statement unchanged. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "09341964487e9c591f4c7df8c79147adf5bd6d507a85b55f19c54171e1625859",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "thm-qc-diamond-norm-ancilla-dimension-bound",
    "status": "fixed-in-assigned-draft",
    "finding": "Defined both Schmidt embeddings C^m to Z and the compressed vectors before use in 1.2. Padding is possible since m<=min(dim H,dim Z); the two independent isometries preserve nonzero singular values, allowing compression of arbitrary rank-one inputs. The compactness/SVD argument and original Statement are unchanged. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "3f5e3ba843451dc2c1aa8582acd501010d50f6a74c89f0a6c1945039b9c86b3c",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "thm-qa-25-sparse-hamiltonian-block-encoding-correctness",
    "status": "fixed-in-assigned-draft",
    "finding": "Corrected F5 to u_i conjugate(v_j) under the linear-first root pairing; u=i e_1,v=e_1 now yields i. Proof 2.1 already puts the column-state amplitude first and obtains H_ij/(d_H h). The row/column support match, zero bound branch and inverse/value-query accounting are unaffected; Statement unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "9b39d44052f8309a2174268b3a1b89c1ed131bc08dcf6229bd6d966a9813d588",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "def-qa-16-input-mismatch-matrices",
    "status": "fixed-in-assigned-draft",
    "finding": "Changed only the defining heading required by SCHEMA. Delta_i, F, J and entrywise multiplication are byte-identical; zero extension of the physical oracle does not change the N input coordinates or any mismatch mask. Direct consumer uses of the unchanged masks remain valid.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "03d9dddb10b2745e82e23343dce1bb57a82cb5d4cb7a646efd3151bde3a5807e",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "def-qa-16-query-address-projectors",
    "status": "fixed-in-assigned-draft",
    "finding": "Changed only Statement to Definition. The local address space remains C^N with basis i mapped to e_(i-1), so Pi_i and its full identity resolution are unchanged; unused qubit labels are outside this local factor. No mathematical formula or prerequisite changed.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "c0de097fbfe4d172ceba2f60509577c4d5a441afec70e7730bf7173c19d411fa",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "def-qa-16-general-adversary-bound",
    "status": "fixed-in-assigned-draft",
    "finding": "Changed only the defining heading to Definition. The admissible real symmetric matrices, positive denominator, attained maximum and constant-zero conventions are byte-identical; all direct norm-ratio uses retain the identical interface. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "d6eb82ecd99a351bcadf8b707409573276361960195321a909be2d15577e7d2d",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "alg-qa-23-polynomial-root-isolation",
    "status": "fixed-in-assigned-draft",
    "finding": "Replaced the unsupported gcd admissibility inheritance in ROOTS step 6 by a constant-zero branch and exact tests of (1+i t)h for t=0,...,8. Each of four vertices excludes at most one scalar since h(v)!=0; each edge excludes at most one since two zero imaginary restrictions would force h to vanish on the edge. Nine candidates therefore suffice. Scalar multiplication preserves roots, square-freeness and boundary freedom, so the existing crossing count gives the correct derivative membership and least multiplicity by m=deg p.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "0f432f718b494143dd4a237f71603749edfd2d20da8fefbcc2f3e22c5c379be6",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "thm-qa-28-matrix-function-error-cost",
    "status": "fixed-in-assigned-draft",
    "finding": "Renamed the max_j d_j resource coordinate as selected-component branch length in the Statement and proof 4.1. A serial controlled SELECT can contain sum_j d_j oracle occurrences, which remain charged to its implementation. The spectral bound B, parity identification, weighted approximation/robustness error and all separate PREPARE/phase/control costs remain unchanged. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "8a7f86a5f4dfc8a8736f84e74494ba1aaa1d7ed943bf50bd7b37053d9e3d97e1",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "alg-qa-12-amplitude-amplification",
    "status": "fixed-in-assigned-draft",
    "finding": "Added explicit supplied and charged good/bad instrument access: the prepared-success-subspace contract grants A, its inverse and phase reflections but does not grant an arbitrary projective instrument. The finite k iterate and positive-branch conditional output are unchanged. This also meets the query-tree requirement that every preparation/instrument be declared and charged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "47bbd8ea7bba7a5b8a62d14034c34402620c3558fd6e1b9f120d4269c7f61ef9",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "def-qa-13-amplitude-estimation-task",
    "status": "fixed-in-assigned-draft",
    "finding": "F5 now attributes only gate/query accounting to the elementary-resource supplier and declares measurement/bit coordinates locally, as the unchanged Definition already does. Its counting Hadamards start from zero; repeated-mode controlled A, A-adjoint and reflections retain distinct charged accesses. No Definition change. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "a0334618d3197c80775c59a7478e296475e4c04a3720ecb6e9dcd310ad7b6ed9",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "alg-qa-13-relative-approximate-counting",
    "status": "fixed-in-assigned-draft",
    "finding": "Replaced the operational appeal to the rounding existence lemma by an explicit call to its newly extracted algorithm on N,M,y and declared that direct procedure dependency. The supplier admits every returned dyadic M>=2 and label y; its 2/3 bound, zero branch and charged rational work are unchanged. Both scheduling loops still use only public data. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "4705d2bc3968b4281a494e1ccd4c8dd0733c2b72cf13da31d6a02152cf87b02e",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "alg-qa-29-variance-aware-monte-carlo",
    "status": "fixed-in-assigned-draft",
    "finding": "Made both operational logarithm calls explicit through the newly extracted algorithm, with direct deps and inputs (1/rho_1,1/8) and (1/rho,1/8). All are positive rationals, and the lemma gives exactly the required width<=1/4 upper enclosures. Fresh conditional sampler circuits and their explicit inverse/control costs still meet the revised query model; no probability or precision schedule changed. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "4d5d49bf57d8033fb200e535f4aa195d2897eac4086aa7b23df506c5f1425635",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "lem-qa-33-witness-acceptance-effect",
    "status": "fixed-in-assigned-draft",
    "finding": "Changed the Given label from clean-ancilla registers to zero-initialized workspace, matching the revised verifier interface that imposes no return-to-zero contract. The proof uses only the unit zero input to make J_x isometric and then traces all unmeasured wires; no clean-return assumption is needed. Statement unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "4db72fafd604dd472fe1b71dbafc6cf32db9cdd7f066cff6dcc079fb3cff1447",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "def-qa-33-qma-promise-class",
    "status": "fixed-in-assigned-draft",
    "finding": "Reconciled the workspace label with the supplier: a(n) is zero-initialized verifier workspace, not an exact clean-return ancilla contract. The full-list verifier still provides one fixed polynomial generator of widths, circuit and predicate. Completeness, soundness and all thresholds are unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "f532405ec5b7fea5386917ea00c37c06a134392d1e9827fc79e17fe9274ba416",
    "independent_review": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "owner-repair-reconciliation",
    "id": "thm-qa-30-sdp-binary-search-correctness",
    "status": "fixed-in-assigned-draft",
    "finding": "The changed MMW supplier requires rational e and threshold alpha, but the theorem allowed arbitrary real epsilon with e=epsilon/8. Preserved the real target by supplying rational epsilon_0 in (epsilon/2,epsilon], executing the same search at e=epsilon_0/8 and rational endpoints. The proof gives objective error <epsilon_0<=epsilon and the same logarithmic call bound. Conditional budget and adaptive first-failure reasoning are unchanged. The direct epsilon>=2R boundary remains in the original target tolerance and needs no auxiliary rational choice. Owning metadata was reconciled to the exact current supplier sections and repaired carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u1.json",
    "post_sha256": "ed4c3fae5ee674be75a5ae17b99503c16d78200ee544cf3f348c2f2065e4e5c8",
    "independent_review": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-change",
    "reason": "All edited carriers and all direct consumers of changed interfaces are draft frozen-frontier items. No published defect was established. Existing historical ledger/adjudication evidence is preserved; no published repair, verdict or stamp is asserted."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "thm-qc-solovay-kitaev-bit-complexity",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Supplied the conditioned square-root estimate before summing losses in 5.1. The balanced radicand r/2>tau_j/2 permits additive parent precision, selected from the explicit levelwise dyadic lower bound 2^(-19-A ceil((3/2)^j)); its guard losses sum geometrically to O(B). Rational-endpoint bisection is cubic and norm evaluation is Lipschitz. Reexamined these actual routines against F4; the stated polynomial exponent and branch rule remain sound, with Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "thm-qa-finite-abelian-double-annihilator",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "F3 now states the actual dual-group supplier's equal cardinality and step 2.1 attributes |dual G|=|G| to F3 rather than double-dual evaluation F1. Descent/inflation leaves both annihilator cardinalities unchanged; positivity of subgroup cardinality permits cancellation and injective evaluation gives the claimed subgroup equality. Statement unchanged. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "lem-qa-16-adversary-progress-endpoints",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Added admissible real symmetric Gamma with cross-output support, excluding the Gamma=I counterexample, and explicitly retained the ordinary oracle-only scope required by the repaired normal-form supplier. Reexamined the effect of that supplier change: identical initial states, deferred projection, cross-block equal class norms and the overlap factorization remain valid, including Gamma=0 and epsilon=0. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "thm-qc-channel-composition-hybrid-bound",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Added nonzero H0,H1,H2 to the Statement, matching the diamond norm domain and existing Given. Amplification composition, norm submultiplicativity and channel norm one prove the unchanged hybrid bound on this domain. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "thm-qa-finite-cyclic-discrete-logarithm-correctness-success-cost",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Qualified the sampling/success/cost guarantee by the actual direct-f oracle or complete supported fallback, and excluded FAIL/UNSUPPORTED_ACCESS from the verified-exponent claim. F1 now respects early success; a hypothetical length-t independent sample list justifies the same miss probability. Unit-coordinate inversion, verification, confidence preprocessing and separate controlled/group/gate/bit bounds remain valid. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "lem-qa-35-smp-entropy-drop",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Updated F1 to the supplier's row-vector convention for X_j, so (DA)X_j^T is a scalar with matching dimensions. The actual acceptance averages, beta_j bound, weight at least 1/2 and entropy/KL finite-sum identity are unchanged; zero coordinates of P have zero positive-weight posterior mass. Statement unchanged. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-owner-repair-proposal",
    "id": "lem-qa-33-unary-clock-locality",
    "status": "fixed-in-assigned-carrier",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u2.json",
    "reason": "Specified floor(2K+4K^2/g)+1 as the polynomially bounded integer choice, instead of inferring an upper bound for every weight above a lower threshold. Adjacent 01 penalties have exactly the legal unary kernel and unit illegal gap; local supports and projection-lemma error are unchanged. The linear history-map normalization clarification does not affect these uses. Statement unchanged. Reconciled its owning contract or manifest with the inspected current source interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "No published carrier or outside-frontier consumer was changed or found defective in the direct interface inventory; historical ledger evidence is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-channel-tensor-error-bound",
    "status": "fixed-in-assigned-source",
    "reason": "Current2.1 chooses X_i on H_i tensor C^(dim H_i), while Phi_i has domain L(H_i). Thus Phi_i(X_i) is not typed. The actual attaining outputs are amplified maps (Phi_i tensor id)(X_i). The factor permutation and trace-norm product argument then proves the same lower bound. Existing Statement is unchanged. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "599ac80f31e3d80bef41520d914feb212760b0f304aa2254c13a0bd5ea3689dc",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-terminal-measurement-circuit-equivalence",
    "status": "fixed-in-assigned-source",
    "reason": "Current4.1 first computes joint h,z probabilities from terminal effects, then claims conditional outputs after dividing that common probability. A POVM specifies probabilities but no terminal instrument/output. Earlier3.1 proves equal preterminal h-branch operators. State precisely that the preterminal history-conditioned outputs agree on positive history probability, rather than attributing post-POVM outputs to a POVM. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "56dae31846a748aea7798ab8660e1d4382ab321f5782194cea09d32aab71bb04",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "ex-qc-degenerate-code-kl-matrix",
    "status": "fixed-in-assigned-source",
    "reason": "Read the full example and all displayed matrices: V:C^2->C^4 and each E:C^4->C^4 make every V*E_a*E_bV an operator on C^2. Its actual blocks are C_ab I_2, not scalars C_ab. E1V=E3V=V/sqrt3 and E2V=W/sqrt3 verify the intended coefficients. State (V*E_a*E_bV)=(C_ab I_2) and define scalar C separately, or explicitly declare the scalar-identity identification. The actual recovery and rank2 calculation are unchanged. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "22f8eac2528337237d61c1d7002fbca4677cfc671e0ccf7064bd49194f7ccec0",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "ex-qc-knill-laflamme-orthogonal-error-recovery",
    "status": "fixed-in-assigned-source",
    "reason": "Read full orthogonal-error example. V*V=W*W=I_2 and W*V=0 give diagonal compression blocks I_2/2 and off-diagonal zero operators. The displayed 2x2 scalar matrix is not the operator-valued table unless that identification is declared. Add the identity factors or explicitly state the identification; keep both syndromes and the full recovery calculation. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "280d065e917117bc7f676a294f6b8d7b481b649aaa674ae0ac3d3ee216086149",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "lem-qa-crt-sign-vector-factorization",
    "status": "fixed-in-assigned-source",
    "reason": "Read full CRT sign factorization proof: step1.1 correctly chooses generator g_i of order M_i, but F3 universally asserts the equivalence for g in a cyclic group without saying g generates it. In C2, g=identity and t=1 refute F3. Qualify F3 by g a generator, matching the existing element-order characterization. The Statement, chosen generators and actual gcd argument stay intact. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "42f5a791cb302aeeb45f75a269ecf9e3015c930319fa098738056e7f707a6773",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "ex-qc-clifford-t-exact-period-and-phase",
    "status": "fixed-in-assigned-source",
    "reason": "Read actual Remarks. The independent proof of the converse characterization is now fully present and frozen through Step3; calling it still-escalated is stale operational prose. Remove only that status assertion, preserving the mathematical independence claim. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "aecc917c8bb1c9a6f346b1af1f17d00488927449309e2a5ee6bef8dbe6098ddf",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/abs/1206.5236"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "lem-qc-ninefold-nearest-neighbor-multiplexor-routing",
    "status": "fixed-in-assigned-source",
    "reason": "Read the full routing proof and check the two-wire-edge case directly from the stated CNOT action. Label reflection already maps0->1,1->2 to2->1,1->0. Reversing arrows again produces1->2,0->1, whose square fixes001 rather than the required101. Delete the second arrow reversal; the reflected sequence alone gives the opposite remote CNOT and retains the exact same length/count. Statement and all layout/resource claims unchanged. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "dee787720a4d23d23132dd969c0c9f9127411c8508c1e1e243d8d0d03a316167",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-single-qubit-exact-clifford-t-characterization",
    "status": "fixed-in-assigned-source",
    "reason": "Read the actual F4 and unit-circle supplier Statement. Units of D are not all modulus-one elements:2 has inverse1/2 in D and is not an eighth root of unity. The cited lemma requires z conjugate(z)=1; restore exactly that premise in F4. The theorem actual proof obtains it for lambda, so preserve the characterization Statement. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "f8728374772212f34b55e84e38f129df733dabce2b1a85d23f655ec16ebe5814",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/abs/1206.5236"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "lem-qa-36-history-path-restricted-gap",
    "status": "fixed-in-assigned-source",
    "reason": "Read full restricted history-gap proof. It establishes all Rayleigh quotients on v-perp are>=t/(4N²), then says those quotients also are>=E1-E0. Those two lower bounds alone do not order E1-E0. Choose a normalized E1 eigenvector, orthogonal to the simple ground vector by the cited finite spectral theorem; its quotient equals E1-E0, giving the required inequality and same1/(48N²) constant. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "5832faa838fabaf35335a0cdaf0f2a62366bea12cd8a3113302f98922c2fdfa2",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "ex-qa-17-two-state-reversible-walk",
    "status": "fixed-in-assigned-source",
    "reason": "Read full two-state walk example. F8 explicitly defines sigma as a set, but1.3,1.4,3.1 use it to display eigenvalue multisets with repeated1 or-1. The finite matrix computations and multiplicities are correct. Define a separate local multiset notation and use it in those displays, retaining the complete four-eigenvalue calculations and both endpoints; do not change the global spectrum Definition. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "1e69c18078530c8c117647e2aeea579a23204b34027b38999566893af06af8a9",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "def-qc-dyadic-cyclotomic-ring",
    "status": "fixed-in-assigned-source",
    "reason": "Read actual source reference and fetched the actual arXiv1206.5236 abstract HTML title. It is Fast and efficient exact synthesis of single qubit unitaries generated by Clifford and T gates. The local Practical approximation title is a mismatched citation. Correct this bibliographic title without source or mathematical-interface changes; the reviewer also identified other same-page occurrences for the native batch owner to inspect. Repaired the identified clause; the Statement/Definition is unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "8305e9f745a046ee384d9649fc764f559cd35105b251fbad1b626b75c256fd6b",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/abs/1206.5236"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-teleportation-reference-stability",
    "status": "fixed-in-assigned-source",
    "reason": "F11 and step 1.1 now cite the published finite orthonormal-basis corollary, including its empty-basis case. Tensor expansion and each norm-one corrected reference branch remain valid; normalized input excludes R=0. Statement unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "1ef0996bfb1b4d2492c3df988cad16779cfb9d58456e7fea05059c230201d64c",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-bounded-error-amplification-correct",
    "status": "fixed-in-assigned-source",
    "reason": "The identity base-circuit witness refutes ancillary restoration when the declared register intersects input wires. Restricted only the ancillary-contract clause to registers disjoint from those wires. Copying then acts as a data unitary tensored with ancillary identity, so blockwise exact contracts compose; probability, width, gate and query formulas remain unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "70e8565c0935223e1af3f682e428c6a43ace88ccb2a8f81329108c87008a9ddd",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "prop-qa-34-sample-inner-product-estimator",
    "status": "fixed-in-assigned-source",
    "reason": "Added the missing entry-query access to x and charged up to mr queries to each vector. The estimator now has the information needed for its signed quotient. Its expectation and second-moment calculation, Chebyshev block bound and lower-median union bound remain valid, including zero y.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "4bed46ce52019ce3dc1d732d67c2f267b547725ed7d621ce05237ace937d716a",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qa-34-tang-recommendation-sampler",
    "status": "fixed-in-assigned-source",
    "reason": "Step 1.1 now obtains the sketch and its retained rank before testing k=0. For each h entry in step 2.1, x=A_i,* has norm/sample/entry access and y is a stored S row of known norm F/sqrt(q); thus the repaired estimator applies and the extra x query changes no asymptotic bound. F2 now records this access explicitly. All confidence and countable-choice assumptions are preserved.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "67a8f41c1544bc2eb8d9dcb61ce2c2083ab1e3b2235175697f68e8becec4b7f3",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "lem-qa-30-membership-height-geometry",
    "status": "fixed-in-assigned-source",
    "reason": "The final separator clause now explicitly assumes a>=0, needed for -a||y||>=-aR. Its premise at y=0 implies b>=0; therefore dividing the nonnegative error budget by ||(-v,1)||>=1 preserves the claimed bound. Geometry, binary-search and coherent-query clauses are unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "97d9e9fcf11e660e0afa418e8d99338861eb39eb405d36853f300b39255d0525",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "alg-qc-dense-coding",
    "status": "fixed-in-assigned-source",
    "reason": "Clarified the four input cases: each fixed pair has one decoded weight one and three weights zero. Direct Pauli actions and inverse Bell transform give that law, as proved in the existing correctness theorem step 2.2. Phase-bit/flip-bit order and every instruction are unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "4a191831802e376f0e422a11a97e1069cbfb0ed63748187aeb24b775d0ab94e8",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "def-qa-35-swap-test-effect",
    "status": "fixed-in-assigned-source",
    "reason": "Retained the swap and projection operators on every finite-dimensional H, and restricted their measurement interpretation to H nonzero. On H=0 there is no density input under the cited convention. The proving theorem and fingerprint consumers already use unit vectors in nonzero message spaces.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "274fe376424eb8df1710d3b7ea0ab68d6c6eb0bc400b59b399b7da81fb7ee5a1",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "def-qa-16-nonnegative-adversary-bound",
    "status": "fixed-in-assigned-source",
    "reason": "Changed only the defining section heading to Definition as required for kind definition. The feasible nonnegative matrices, positive mismatch denominator, constant-function zero convention and compactness proof are byte-identical, so all existing adversary uses remain valid.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "f41fffa566cfb07cecf645017246e51fdf849849fb050cc058da13eaaff6ddb0",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "cex-qa-16-negative-weights-matter",
    "status": "fixed-in-assigned-source",
    "reason": "Stated explicitly the false equality assertion refuted by the signed-versus-nonnegative family and used the counterexample headings. Retained the full base separation, multiplicative signed lower bound and product-distribution upper bound for every iterate; no numerical or domain claim was removed.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "1ebbd9ec84004b496cbff3f1cbca3acb7b8fa6c87b36f00b3a2e2761f0a6c9cc",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "cex-qa-20-sparse-oracle-does-not-give-term-list",
    "status": "fixed-in-assigned-source",
    "reason": "Added the explicit false automatic canonical-list/term-access assertion under Statement refuted. The diagonal signs still give 2^N distinct lists and an unqueried-sign adversary, proving N-bit worst-case description and N-query deterministic exact recovery bounds only for that canonical list.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "93c559a8c0737d1f2b37eb6ec68019b379a37f42a3fadd9e6ed40b3b3fa84550",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "ex-qa-36-two-gate-history-state",
    "status": "fixed-in-assigned-source",
    "reason": "Identified X,Z as two algebraic macro gates; the six transitions and K=4,N=6 now refer explicitly to macro-step padding. Literal H,T expansion has a different count. Verified the seven orthogonal clock components, prefixes |0>,|1>,-|1> and each propagation-kernel equation; used Example/Verification headings.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "75e3561af7db97a2ef7d36c902afd80c4eac316a8fdb2546b5ce471056c7632f",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-circuit-inverse-reversal",
    "status": "fixed-in-assigned-source",
    "reason": "The Statement already requires legal explicitly granted inverse occurrences with separately declared costs. Updated F3 to match the supplier unconditional separate-record rule instead of saying when the model declares it. The layer reversal, embedding-adjoint identity and empty-circuit case remain unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "1f50ad5ae4c39666aac958cbcbaff83bb73e550df456a36ef65af768c77073d2",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "alg-qa-32-simon-query-rank-test",
    "status": "fixed-in-assigned-source",
    "reason": "Removed complexity assertions from the procedure Definition and referred to the existing separate rank-test theorem. The two H layers, one query and two register measurements per each of n+2 runs remain explicit instructions; elimination is unchanged. Routed the theorem owner to export/prove the remaining direct Hadamard and readout counts without editing its outside-lane carrier.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "0098df586aedc88faa71afcce0cc2d318a5be4e838a8999a3a28e3ed6cb13981",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-pattern-is-measurement-circuit",
    "status": "fixed-in-assigned-source",
    "reason": "Repaired the unsupported measurement-count attribution in the Statement and F5: the pattern supplies one readout per listed measured vertex, while elementary resources supply wire/gate counts. Step 1.1 already counts exactly q such vertices. Raw/corrected branch maps, suffix access costs, zero-weight conventions and every numerical coordinate remain unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "8fc07b6c8f66fa0a296f97290041014200a781c356496e87a71bc0fce2e8999b",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-proper-code-concatenated-threshold",
    "status": "fixed-in-assigned-source",
    "reason": "Added the genuinely missing finite port-substitution hypothesis and recursive final decoder. F3 now states hierarchical residual correctness, F7 is limited to its actual one-level interface, and step 3.1 applies simultaneous recursion before comparing decoded states. The independent bad-probability envelope, all q/ell/d conditions, Np_r distances and fixed-code overhead bounds are preserved.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "e9052fa9dd69bcdbb63f8f029ffdce63cb2f6a018fd487083b0089a4124ca86d",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-local-stochastic-concatenated-threshold",
    "status": "fixed-in-assigned-source",
    "reason": "Added the finite port-substitution hypothesis and recursive decoder needed for the actual hierarchical sectors. F4 and step 2.1 now compare finally decoded states using simultaneous recursion; the conditional per-location channels remain local and their indicators may be correlated. The witness bound, threshold inequality, union bound, trace/POVM errors and fixed-code overhead are unchanged.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "991cd5fac7872a157f9e69476d7b710602e5526c63ab2308c6dce6c653c87ea8",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qa-27-cks-linear-condition-guarantee",
    "status": "fixed-in-assigned-source",
    "reason": "The current prescribed precision schedule gives inverse logarithms O(Lambda), Q0=O(m^2 Lambda), T0=O(kappa Lambda), and least OP1A degree D_j=O(d 2^j Lambda); F8 now cites that degree theorem directly. Simulator/value and phase-slot tolerances consequently have controlled logarithms, while actual access certificates remain required. Supplied half-scale rational targets preserve real requested accuracy/confidence, and the cost recurrence starts at r0=s0=1,v0=0.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "8e5c5332e116127abc417f55a94430d452bb257bf3757005ec469ab98afc6ee5",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "lem-qc-sparse-fault-path-implies-code-deviation",
    "status": "fixed-in-assigned-source",
    "reason": "Separated a finite port-substitution hypothesis from the weak one-level contract, defined typed hierarchical sectors and recursive decoded recovery, and proved simultaneous level induction before chronological induction. Constructed a finite supported-unitary spanning family before normalizing its mixed channel; scalar recovery and Gram diagonalization then handle attached syndromes, coherent error sums and reference correlations. The extra finite certificate is a concrete supplier obligation, not assumed all-level correctness. Adopted the phase checker numbering and updated every corresponding proof reference.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "fe0db1b521d3fe9e610447555302392d0eb57c2b62d04c89b563c6dffa0edaf3",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-repair-resolution",
    "id": "thm-qc-explicit-proper-code-and-universal-gadgets",
    "status": "fixed-in-assigned-source",
    "reason": "Verified the finite port experiment from the actual four-round correction proof: input-idle attraction, refreshed cat/data/classical ports, separate acceptance/decoder workspaces, shared raw-bit majority protection and one-coordinate residual/invalid-output alignment. Added these as finite steps 5.3–5.5 before simultaneous level induction, including the stronger zero-marked weight-four clause. Constructed the normalized finite Pauli channel before scalar-Gram factorization. The original existence Statement is unchanged. Its added sparse-correctness dependency raises the owning dependency level to 23. Adopted the phase checker numbering and updated every corresponding proof reference.",
    "evidence": "research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-impact-initial-r1-u3.json",
    "post_sha256": "63530799630587daa3b0384d48ee10b1c1ad2ba932e13ca73fb6b431e0cf04a9",
    "independent_acceptance_claimed": false,
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/quant-ph/9611025"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "All changed carriers and all direct item consumers are draft frozen-frontier items. No published mathematics defect or published consumer was found, no published carrier was edited, and no published adjudication/gate duty is proposed. Separate bibliography findings are routed to their frontier owners.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "thm-qa-35-swap-test-measurement-effect",
  "alg-qa-35-swap-test-fingerprint",
  "alg-qc-bounded-error-amplification",
  "thm-qa-32-simon-sample-rank-correctness",
  "ex-qa-32-simon-small-instance",
  "lem-qc-clifford-t-entry-ring",
  "prop-qa-12-amplitude-access-cost-accounting",
  "thm-qa-12-fixed-amplification-query-cost",
  "thm-qa-33-pure-witness-suffices",
  "thm-qa-35-fingerprint-correctness-and-cost",
  "thm-qc-bqp-error-robustness",
  "thm-qc-circuit-pattern-equivalence-and-universality",
  "thm-qc-dense-coding-correctness-and-resource-count"
]


