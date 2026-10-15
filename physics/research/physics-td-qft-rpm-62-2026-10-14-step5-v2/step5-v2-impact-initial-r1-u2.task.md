# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"impact-initial",round:1,unit:"2",input_sha256:"f0ab6ed18385d613f28c760de7246f6743d356d938252a55dbd7c2a14116dc65",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "canonical_defect_ledger": [
      {
        "ledger": "research/defect-ledger.jsonl",
        "subject": "def-td-process-and-protocol",
        "batch": "1",
        "severity": "nonfatal",
        "location": "definition",
        "disposition": "fixed",
        "correction": "Explicitly define exact core closed-class membership, requiring no matter crossing throughout the interval, positive fixed mass, supplied endpoint quantities and zero omitted-energy changes.",
        "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u1.json"
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "subject": "def-td-process-and-protocol",
        "batch": "1",
        "severity": "nonfatal",
        "location": "definition",
        "disposition": "fixed",
        "correction": "The assigned supplier used an unqualified adiabatic predicate and consumers evaluated transfer maps on P_s although their domain was only P_cl(s). Declare transfer maps on P_s and keep the energy-balance scope restricted to the core; this resolves the inspected accessibility and reverse-record uses.",
        "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u1.json"
      }
    ],
    "published_consumer_supplier_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record_fixed",
    "id": "post-td-unattainability-scoped",
    "model": "gpt-6-luna",
    "context_sha256": "19269bdea069512f3b7eaf0b8b626faff4ac0822b36e1cf2b7e72ce5cd0d811d",
    "outcome": "confirmed_nonfatal",
    "reason": "Tong §4.5 and Arovas §2.6.2 discuss zero-temperature entropy, not finite-protocol unattainability; Arovas §2.5.5 concerns finite-power Carnot engines. The explicitly adopted reachability exclusion is logically well-defined, but its operational source attribution was incomplete. Added Masanes–Oppenheim v4, Introduction, as formulation source and distinguished its conditional quantum bounds from the adopted postulate. The Postulate and physical_scope are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf",
      "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf",
      "https://arxiv.org/pdf/1412.3828v4"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record_fixed",
    "id": "def-td-reservoir-cycle",
    "model": "gpt-6-luna",
    "context_sha256": "eb927f90c4b5ff90ea1be696f6248b755fdc47a76e30ecfa00fba422aac14366",
    "outcome": "confirmed_nonfatal",
    "reason": "The old Definition fixed positive bath temperatures and all transfer roles but used hot/cold without defining their order. This is a naming ambiguity, not a fatal gap in either bound: both theorem Statements already require 0<T_c<T_h. Made h,c explicit transfer labels and reserved hot/cold for that strict subfamily, preserving equal/reversed positive-temperature bookkeeping and all signed formulas. No realizing process is claimed.",
    "uncertain": false,
    "source_urls": [
      "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "ids": [
      "post-td-unattainability-scoped",
      "def-td-reservoir-cycle"
    ],
    "reason": "Both assigned carriers and their two direct reservoir-bound consumers are draft frontier items. No potentially defective published supplier or consumer was found in these examined uses. No published repair or maintenance adjudication is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "def-tdmath-diagonal-operator-model",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "The real diagonal model is well defined by the Hilbert/domain lemma. The existing self-adjointness lemma tests coordinate unit vectors to force the adjoint coefficients E_i y_i and exact domain equality, including empty I. Added that missing justified_by discharge and its imported Countable Choice qualification in Scope; the Definition is byte-for-byte unchanged.",
    "post_sha256": "b34177dadb56fe9247e0e2a374903fab73e2fd25edd26f7a8114abc152c421ea",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "lem-tdmath-conditional-memory-entropy",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "Step 1.1 used an unrestricted conditional entropy sum, so zero conditional weights could evaluate log(0). Restricted precisely that proof sum to q(m|r)>0, matching the unchanged Statement. Positive joint entries factor as a_r q; their sums give the chain rule, zero marginals contribute nothing, and 0<q<=1 gives nonnegative entropy.",
    "post_sha256": "5aeb7a14734c6ea6fa7d5d5a541f813002922e6e373dedf3b7433ccf88e10c33",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "thm-tdmath-independent-bulk-limit",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "F4 named the exponential series definition where the partition factorization needs the addition law. Added the exact published addition theorem to deps, roles and F4. Finite Fubini now explicitly factors Z_N; coordinate independence gives variance Nv, the event-square estimate gives the probability bound, and positive-product logarithm laws give the unchanged free-energy identity. This is a nonfatal citation repair: the addition law also follows from the already declared logarithm inverse and product laws.",
    "post_sha256": "bfa920b7a0d031e83b4ea01b47b2f4a5d89d1a23accd79405f0c436d4d599edc",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "thm-tdmath-limiting-derivative-and-concentration",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "The mean-value supplier states an intermediate-derivative equality, whereas F5 compressed its consequences. Expanded F5 accurately and derived monotonicity of p_L prime, convexity and the secant sandwich by explicit MVT applications to smooth functions. Added exact calculus and exponential/logarithm algebra suppliers and chose one tilt satisfying both differentiability bounds. The variance identity, derivative squeeze and two exponential tails establish the unchanged claim; the omitted elementary MVT bridge is nonfatal.",
    "post_sha256": "c674ef9b8c2b4a32b2616cbaa352dd1e69cc2757bb13ab5e5975bbbf90be95e2",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "ex-tdmath-finite-ensemble-mismatch",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "F2 omitted the summable compact-interval majorant required by the cited differentiation theorem. Restated that exact hypothesis and checked it on J=(0,infinity): the two majorants are 1 and (1+epsilon^2)exp(-epsilon min K), with exponential monotonicity and positivity explicitly sourced. The canonical excited weight is positive, while the stipulated nonempty half-open shell is the ground singleton and assigns it zero; the Example is unchanged.",
    "post_sha256": "9dab31a39fc32435c0a1e67f99afd877ce43ea40fc52e1e5ea6183aad2a56a2e",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "thm-tdmath-measurable-canonical-identities",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "caught_at_stage": "step5-initial-r1-u11",
    "correction": "F3 attributed positivity to the series definition and derivative theorem; it now attributes positivity to the already declared logarithm inverse definition. Added the existing local monotone-convergence theorem for real integral linearity and exact derivative-algebra support. MVT bounds both measurable difference quotients by G_K; DCT along arbitrary increment sequences proves C2 and the moment identities. Normalization, variance expansion and the explicit absolute-entropy bound then prove the unchanged Statement on noncomplete measure spaces as well.",
    "post_sha256": "d54e303294d93a6d9bc75871ad4e328abc685eccc1761c927946a849641f91d4",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u11.json",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "none",
    "reason": "No published supplier or consumer was edited or found defective in these assigned mathematical uses; no published audit status is changed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tdmath-elastic-collision-kernel",
    "proposed_status": "fixed",
    "reason": "The old phrase each test function used specified neither a testing domain nor an output map. The repair declares positive measurable input representatives, a map into real locally integrable representatives, maximal absolutely integrable tests and a nonzero declared testing subspace. The weak identity is an admissibility condition, not an existence or uniqueness theorem; arbitrary symmetric collision measures and the entropy-only test branch are preserved."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tdmath-finite-site-shell-and-canonical-law",
    "proposed_status": "fixed-nonfatal",
    "reason": "The Definition correctly allows every nonnegative width and asserts no asymptotic narrowness. Only the display title overpromised narrowness; removed that adjective without restricting widths or changing the Definition. The block-limit supplier use separately assumes delta_N/N tends to zero and a sufficient lower width."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-tdmath-continuous-ideal-gas-block-limit",
    "proposed_status": "fixed",
    "reason": "The Lebesgue Definition explicitly withholds the measure property; product/Tonelli and change-of-variables therefore needed the complete-measure theorem and its Countable Choice premise. Added the precise measure, sigma-finiteness, box, product-completion and Riemann-to-Lebesgue bridges, plus integral order/linearity and compact uniform continuity. Rechecked Gaussian moments, factorial asymptotics and the fixed-block tail estimate; defined the zero-probability normalization branch without changing any limit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-tdmath-pure-state-versus-average-entropy",
    "proposed_status": "fixed-nonfatal",
    "reason": "F2 attributed unit modulus to definitions, although the correct modulus corollary was already declared and stated in F1. Corrected F2 to that corollary. Checked the rank-one spectrum, offdiagonal Cesaro bound and limiting two eigenvalues; the argument and Example are unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-tdmath-compact-continuous-mixture-attainment",
    "proposed_status": "fixed",
    "reason": "The two definitions did not supply the bounded-Borel integration and linearity used in step 4.1. Added the actual order, simple-integral agreement and L1 linearity suppliers and derived the boundedness/error estimates. Checked compact graph hull, fiber attainment, arbitrary-measure approximation, lower semicontinuity, convexity, d+1 support and finite Jensen. Statement unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-tdmath-noncompact-mixture-nonattainment",
    "proposed_status": "fixed-nonfatal",
    "reason": "F1 confused the mean energy integral with the barycenter-constrained infimum. This is a nonfatal nomenclature/restatement defect: A1 and both proof steps already use the unconstrained objective explicitly. Corrected that distinction, supplied nonnegative integral order and simple-integral agreement, and checked finite integrability. Countable additivity forces positive mass on some [1/n,1), giving positive energy for every law; point masses at 1/n approach zero."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "none",
    "reason": "The only direct item consumers of the changed collision Definition are draft, and the changed ideal-gas Statement has no direct item consumers. No published defect or published repair is claimed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-ex-td-finite-two-state-partition-smooth",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-finite-two-state-partition-smooth",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The original step established continuous derivatives of every order but gave no local convergent power-series argument for its nonanalyticity exclusion. The repair applies the published exponential series, local log(1+h) series, analytic composition and nonzero quotient results; all domains are positive and the temperature substitution is analytic.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-pthm-td-fixed-tp-reaction-potential-minimum",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "pthm-td-fixed-tp-reaction-potential-minimum",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The system core-record assumptions do not imply zero excluded kinetic/external-field changes for its larger compound. The revised Statement explicitly requires an admitted core compound record with positive mass, defined fixed-chart COM endpoints and zero excluded endpoint changes. The second law now applies to the admitted additive split, and direct algebra gives Delta Phi=-T0 Delta S_total and S_total=C0-Phi/T0 on the exact projection.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-ex-td-phase-fraction-lever-rule",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-phase-fraction-lever-rule",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The original one-mole values and interphase additivity leave amount dependence undetermined. The repaired constructed model explicitly adopts V_i=n_i v_i for every admitted phase amount at fixed T,p. Substitution now gives V/N=lambda_alpha v_alpha+lambda_beta v_beta; its nonzero volume difference gives unique fractions 1/2, with positive one-mole amounts satisfying both totals.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-ex-td-phase-rule-single-component",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-phase-rule-single-component",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The original chi(O) used an undefined full-coordinate domain. The repair specifies a positive-amount interval and full open inverse neighborhood; its block-triangular Jacobian has determinant -n^2 c kappa. Gibbs differential cancellation then gives entropy derivatives (1/T,p/T,-g/T) with C1 coefficients, proving C2 entropy on the inverse patch. The nonzero pressure minor of g2-g1 gives dimension one.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-ex-td-reactive-phase-rule-three-component",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-reactive-phase-rule-three-component",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "The symbol q denoted a molar-volume parameter in the Gibbs model but was reused as an equation count in step 4.1. The calculation of the rank-four minor and dimension two is sound; renaming the count q_eq repairs that nonfatal type collision. The additional undefined full chart domain and state-map arity were repaired, and C2 entropy follows from the differential identity with C1 inverse coefficients.",
    "defect_type": "other",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-pthm-td-regular-gibbs-phase-rule",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "pthm-td-regular-gibbs-phase-rule",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "Bilateral exchange with compensating changes in other coordinates would not isolate the entropy partials used by F1. The repaired Statement requires each pure pairwise transfer curve with all nonselected phase and auxiliary coordinates fixed, exactly meeting the intensive-coexistence supplier. Reaction stationarity is separately proved and the dimension follows from the stated nonsingular combined minor, not equation counting alone.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-ex-td-clapeyron-linear-branches",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-clapeyron-linear-branches",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The C1 inverse theorem supplies only a C1 state inverse; the original proof did not verify the local C2 energy hypothesis omitted from its F1 restatement. The repair explicitly solves T and p from entropy/amount and volume/amount, proves the reconstructed energy C2 and homogeneous, and establishes C2 entropy and valid Gibbs charts. The exact transfer and core reversible-compound assumptions justify slope 1000 Pa/K and absorbed heat 900 J/mol.",
    "defect_type": "logic",
    "evidence": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u13.json",
        "note": "Native tuple adjudication and immediate current review-context hashes; self-checked repair, not independent certification."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u13-reactive-domain",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-td-reactive-phase-rule-three-component",
    "batch": "13",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "correction": "In addition to the assigned nonfatal q overload, the full state domain O was undefined and chi(O) mixed a (T,p,n) signature with composition/amount coordinates. The repair defines O, corrects chi and the five-coordinate SI map, and supplies the C2 entropy required by the intensive definition."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-owner-review-proposal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "pthm-td-clapeyron-local",
    "batch": "13",
    "disposition": "owner-review-required-outside-assignment",
    "location": "Statement latent-heat clause; Facts A2; Proof 3.1",
    "affected_use": "A2 says forward and reverse isolated records obey the second law, then Proof 3.1 uses zero total entropy to infer Q/T=n(s_beta-s_alpha). The public reversible-compound clause does not explicitly name the core closed-record class or zero compound COM/external-field energy changes required by post-td-macroscopic-second-law.",
    "invalidated_claim": "Without core scope or an explicitly independent adopted entropy-inequality premise, the cited second-law postulate alone does not apply to every reversible isolated record in the stated class. A2 may be interpreted as separately assuming those inequalities; the owner should make that choice explicit.",
    "minimality": "Clarify the core compound record and zero-change conditions, or explicitly carry A2 entropy inequalities into the public claim. No change to the slope or latent-heat formula is needed. The assigned example now supplies core forward/reverse records and derives heat from the exact postulate directly.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "source_edits": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-scoped-result-proposal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "13",
    "disposition": "no-published-repair-performed",
    "reason": "No direct published item consumer of the changed assigned supplier Statements or physical_scope was found. Imported mathematics remained read-only. The Step-4 digest alert about thm-tdmath-compact-continuous-mixture-attainment remains its original read-only evidence and is not a new native adjudication or publication acceptance in this unit.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-batch-13-step5-context.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "pthm-td-finite-mode-occupation-and-trace-formulas",
    "model": "gpt-6-luna",
    "context_sha256": "75661be129396f7992eb552efbe1f036d289568e155491d9a0a152cac7f0206f",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "The physical occupation law required a declared sharp readout, not just diagonal operators. Assigned (N_r,1), exact-domain composite number readouts and an injectively encoded joint sharp observable; its coordinate projections give Born weights and matching marginals. Finite boxes yield the product trace, F1(b) supplies trace class, and one-mode sums ensure absolute first moments. All original formulas and choice assumptions are preserved.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "ex-td-two-site-no-thermalization",
    "model": "gpt-6-luna",
    "context_sha256": "c76b3e113bb2899cd8228b627e36bc3a9b3d4b022eb9026c5022b0681a236bbf",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The ground-state verification was valid but did not support the generic eigenstate title and scope. Preserved the claim by defining any unit eigenvector, including arbitrary superpositions in the middle degenerate eigenspace. Spectral evolution gives a scalar phase and hence a constant rank-one projector, distinct from the positive rank-four Gibbs density; therefore no matrix-norm convergence occurs. Retained the explicit ground-state probabilities.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "post-td-canonical-sampling",
    "model": "gpt-6-luna",
    "context_sha256": "3ba26d5070d4189b6f07cb5ee50c5df968a76c875bb3b0dabb713fccb1ac0565",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "The countable definition admits arbitrary positive reference weights g_i, but the postulate omitted them without declaring g_i=1; for nonunit weights its displayed numerator need not normalize against the supplied Z. Preserved the counted-once law by explicitly setting g_i=1 and included the full declared-weight branch P_i=g_i exp(-beta E_i)/Z, with numerical energy e_i and inverse-energy coordinate b. The finite and measurable preparations, existence restriction and nonderivation scope are unchanged.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "pthm-td-countable-canonical-identities",
    "model": "gpt-6-luna",
    "context_sha256": "7e6b0b9f7f7b235776b752cf80c0aaec20bc04600cecf45ffdd808e8c2f2be5b",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The expression 1+|E_i|^2 added a dimensionless number to joules squared. This was a unit-convention defect in an otherwise valid counted-once identity, repaired without changing the claimed identities: e_i=E_i/E_* and b=E_*beta with E_*=1 J give the real supplier envelope. Compact parameter intervals correspond under scaling; derivative difference quotients yield E_* and E_*^2 factors, and moments and entropy retain their physical units. The supplier proof was checked through uniform derivative tails and its mean-value differentiation argument.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "pthm-td-measurable-canonical-identities",
    "model": "gpt-6-luna",
    "context_sha256": "de3fd3819cedeaaf998e3976377142d0f08464a1036c485469e78bcd365bb0e5",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The envelope added 1 to a joule-squared quantity. Repaired the unit convention with real measurable e=E/E_* and b=E_*beta, E_*=1 J, and matched compact-interval domination exactly to L1. Scaling derivative difference quotients gives E_* and E_*^2 factors, preserving all physical identities and absolute relative-entropy integrability. The complete supplier proof uses measurable limits and dominated convergence without requiring measure completeness. Also corrected F1 to distinguish signed energies from nonnegative Boltzmann weights.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-adjudication-record",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "15",
    "subject": "pthm-td-differentiable-pressure-concentration",
    "model": "gpt-6-luna",
    "context_sha256": "4c9e4d06c55970292d9179ef1cc8cb751e80fdbbcaf5ab5125cc01941a449048",
    "outcome": "false_positive",
    "severity": null,
    "disposition": "false-positive",
    "defect_type": null,
    "reason": "The claimed model-class mismatch is absent: pthm-td-lattice-bulk-pressure Statement names def-tdmath-bounded-finite-range-lattice, and thm-tdmath-finite-range-lattice-pressure-limit Statement explicitly uses p_L of that same definition. L1 uses precisely those models. Checked the complete L1 argument: convex secants give mean convergence, and partition ratios at beta plus/minus t give both exponential tails at a differentiability point. Finite canonical weights and SI energy-density conventions match; no edit is needed.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-maintenance-finding",
    "subject": "lem-nrqm-composites-hilbert-tensor-construction",
    "existing_defect_id": "physics-td-qft-rpm-62-2026-10-14-3a-batch-15-published-tensor-bilinearity",
    "current_raw_sha256": "24ef973efec35a5f3a9a538e17ed689ee4bdccda20cee043e4a0a94479ecb62b",
    "affected_use": "items/pthm-td-finite-mode-occupation-and-trace-formulas.md Statement product-basis construction and F5; items/ex-td-two-site-no-thermalization.md composite Hilbert space.",
    "invalidated_claim": "Only the published source phrase asserting linearity on H x K is false; the bilinear quotient argument supports the consumed result.",
    "minimality": "Published owner can replace C-linear on H x K by C-bilinear, preserving the generator calculation and every theorem statement. No consumer repair is needed.",
    "disposition": "outside_published_maintenance",
    "reason": "Current Proof 1.2 calls (u,v) -> <u,u0><v,v0> C-linear on the product vector space. With H=K=C and u0=v0=1, values at (1,0) and (0,1) are zero but the value at their sum is one. It is bilinear; the subsequent generator cancellation correctly uses bilinearity, so the consumed tensor construction and complete product basis remain valid. This existing nonfatal terminology finding stays in separate published maintenance, alongside the missing audit marker.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "post-nrqm-many-body-canonical-equilibrium-ensemble",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-post-nrqm-many-body-canonical-equilibrium-ensemble",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "8eeb198c1ce8bac26d191d2c12999fb96fe942e01aad728b14e00c404dd7f394",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "post-nrqm-framework-autonomous-dynamics",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-post-nrqm-framework-autonomous-dynamics",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "f892bb8064d6709200a4ec1425c7ab689a35dadd80a998df81fbf5b89d8bc22a",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "pthm-nrqm-many-body-thermal-occupation-predictions",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-pthm-nrqm-many-body-thermal-occupation-predictions",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "bb2f47edca573413abaf9cc08b5a410a37837cd827fd9416f73ebd38ea944e2d",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "470f2631d525809c4160529565205dfb5fb1075fb57c4b88c7a7efee6b4797ea",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "lem-nrqm-many-body-two-level-thermal-formulas",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-lem-nrqm-many-body-two-level-thermal-formulas",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "219e53dfaeafc2f40533983535fb6d5c6cd54ce58a23fba9e6c14b667a54eb2d",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "lem-nrqm-composites-hilbert-tensor-construction",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-lem-nrqm-composites-hilbert-tensor-construction",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "24ef973efec35a5f3a9a538e17ed689ee4bdccda20cee043e4a0a94479ecb62b",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-publication-evidence-hold",
    "subject": "lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b15-lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma",
    "disposition": "OPEN; separate published owner maintenance",
    "current_raw_sha256": "fc36dc92401c24c4491198fe8fe27b97baf9a94802d3f859b21bbc58b8c92c84",
    "reason": "The inspected published carrier lacks the required source-review or proof-audit acceptance record. This report checks the exact consumed argument and does not certify the published supplier or close its existing acceptance hold.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-current-adjudication-proposal",
    "subject": "rem-td-local-equilibrium-branch",
    "batch": "16",
    "stage": "step5-initial-r1",
    "severity": "fatal",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "correction": "The target set was defined only by the words local equilibrium, so arbitrary labels satisfied the central definition. Replaced this circular specification with explicit cell state, entropy, constraints, conserved-value maps and constrained maximizers, requiring a supplied attaining selection q; other formulations must provide and satisfy their full mathematical condition. Likharev §1.2 supports constrained maximum entropy; §6.1 requires collision equilibrium to annihilate the collision term; Arovas §8.2 separates local comparison equilibrium from the transport equation. No attainment, choice or dynamics is deduced.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json",
    "preserve_prior_rows": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-current-adjudication-proposal",
    "subject": "rem-td-transport-branch",
    "batch": "16",
    "stage": "step5-initial-r1",
    "severity": null,
    "outcome": "false_positive",
    "disposition": "false-positive",
    "correction": "The opening sentence explicitly adopts the fields of rem-td-local-equilibrium-branch, whose first paragraph declares T:O×I->(0,infinity), T=(1 K)z_jT, on the open spatial/time domain, with C1 component regularity. At fixed t the inherited function x->T(x,t) therefore has the cited spatial partial derivatives. The later formula uses this same domain; the claimed missing-domain defect is absent. The repaired equilibrium criterion adds no gradient or constitutive conclusion and leaves this use sound.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json",
    "preserve_prior_rows": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-current-adjudication-proposal",
    "subject": "def-td-macro-versus-micro-entropy-claim",
    "batch": "16",
    "stage": "step5-initial-r1",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "correction": "The cited §§5–6 of Likharev cover fluctuations and kinetics, and Arovas §§9.2 and 9.5 are stochastic-process sections. The entropy definitions and finite-model arithmetic are sound, but the locators are unfaithful. Corrected only the references to Likharev §1.2 (SI scaling), §2.2 equations (2.24a),(2.29), and Arovas §1.4.1 equation (1.42), after retrieving and reading those sections. The Definition and physical scope are byte-for-byte unchanged.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json",
    "preserve_prior_rows": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-current-adjudication-proposal",
    "subject": "ex-td-macrocell-and-gibbs-entropy",
    "batch": "16",
    "stage": "step5-initial-r1",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "correction": "The example omitted the energy-map component required by the finite-model supplier. This is an interface-completeness defect; neither displayed entropy depends on energy. Supplied epsilon:Omega->R identically zero on two explicitly distinct states, physical energies 0 J, and the singleton-label coarse-graining. Steps 1.1–2.1 still give SB=kB log2>0 and SG=0 with no log evaluated at zero, sampling postulate or internal-energy identification.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json",
    "preserve_prior_rows": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-current-adjudication-proposal",
    "subject": "rem-td-fluctuation-model-hypotheses",
    "batch": "16",
    "stage": "step5-initial-r1",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "correction": "The phrase tau>0 seconds leaves the real-coordinate versus physical-duration convention implicit when invoking the real interval supplier. This is a units/type declaration defect without a false stochastic calculation. Declared tau as a positive real numerical duration, physical duration (1 s)tau, and physical time (1 s)t for t in [0,tau]. The path and protocol domains are now explicit real intervals; measurability, integrability and the distinction between mean and individual outcomes are preserved.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json",
    "preserve_prior_rows": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-open-maintenance",
    "subject": "def-nrqm-many-body-framework-entropy-and-free-energy",
    "marker": "physics-td-qft-rpm-62-2026-10-14-b16-published-review-def-nrqm-many-body-framework-entropy-and-free-energy",
    "affected_use": "def-td-macro-versus-micro-entropy-claim Definition uses the finite-sector dimensionless entropy s(rho) and physical scaling k_B s(rho), with no infinite-sector extension.",
    "reason": "Current published frontmatter still records only verification.precheck: n/a. The existing acceptance-metadata maintenance finding remains OPEN; the unchanged finite-sector interface use and this citation-only repair neither resolve it nor establish publication acceptance. No new mathematical defect is alleged and no published carrier is edited.",
    "route": "separate published-owner maintenance; excluded from this unit’s frontier item gates",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u16.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "def-tdmath-finite-region-relative-entropy",
    "batch": "17",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The generic measurable-space relative entropy is sound: AC supplies a probability density, its representative is immaterial, and the negative entropy part is bounded. Only the title promised a region not introduced in this carrier. Renamed the display title; the Definition and all restriction uses remain unchanged.",
    "evidence": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json",
      "tuple_context_sha256": "2e5395254b143d1b62933dcd08d171b23b75f3f1ba5bb24a94c133cdc993c606"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "def-tdmath-poisson-configuration-reference",
    "batch": "17",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The intended law is correct, but the declared exponential supplier defines exp(t), not real powers of e. Wrote exp(-lambda) in the count probability and defined e^t=exp(t), including pointwise function notation. The power-series normalization is now explicitly exp(-lambda)exp(lambda)=1; the configuration space and all laws are unchanged.",
    "evidence": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json",
      "tuple_context_sha256": "a6414e7a15323468166feb9883571d295d750844dafce6c2cad96f21a7cf6d9f"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "lem-tdmath-relative-entropy-variational-and-chain-rules",
    "batch": "17",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "A1 falsely attributed an AC requirement to the supplied kernel construction. Its exact published Statement and proof require no AC for density/event identities with a supplied filler; AC is already assumed for RN. Corrected that attribution and identified Q_Y as filler, preserving the Statement and every deduction.",
    "evidence": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json",
      "tuple_context_sha256": "806d38441137f5774eda5798abe872c5a77d48152937ac266f8bfe175b776349"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "thm-tdmath-local-tame-entropy-compactness",
    "batch": "17",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "A2 omitted the ultrafilter principle from its attribution of Eberlein–Smulian, whose exact published Statement assumes UL, DC and HB. All three were already in this theorem Statement, Given and deps, so no application lacked a hypothesis. Corrected A2 to state all three and cite the exact equivalence.",
    "evidence": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json",
      "tuple_context_sha256": "9779ea8b557894c9d2b931001e04ab34954fc41d728bbc67594edcbdbc88c8cf"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain-existing-history-no-published-repair",
    "reason": "No published carrier was assigned or edited. Exact published RN, conditional-kernel, exponential, Eberlein–Smulian, Dunford–Pettis and Kolmogorov interfaces supply the reviewed uses. These reads do not certify the original suppliers; no new published defect was identified."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed-finding",
    "subject": "ex-tdmath-poisson-intensity-information-density",
    "batch": "17",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The required stationary finite-intensity hypothesis follows from the available Poisson supplier, but step 4.1 did not check the exact class before using its theorem. Added the class Definition as a dependency and explicitly combined full translation invariance with the m=1 mean z<infinity. Applied the integer supremum formula, which equals the real-side limit; Example unchanged.",
    "evidence": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u17.json",
      "tuple_context_sha256": "2a881606386511bd41fc67cdd829deab0100a5fd7f710fdfa7ac9a8811921862"
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-tdmath-van-hove-sequence",
    "model": "gpt-6-luna",
    "context_sha256": "28399277630955a56e799aa0973d7ab2934c0a3b7ae58b86a5b9a9bd944a0930",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "Positive-index regions reindex bijectively by k+1 on N; all volume and boundary-layer limits ignore finite initial terms. Aligned index zero with the sequence convention without changing the geometric conditions.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-tdmath-superstable-regular-interaction",
    "model": "gpt-6-luna",
    "context_sha256": "b0ceae79422693634b1c9a1b416cefd63d6ec46510f915974894b55c168aeb16",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "A stable or superstable nonregular potential can have infinite positive values at all distant separations, so far-image absolute convergence needs regularity. Explicitly qualified only the periodic branch; the tail lemma proves convergence from the envelope without assuming that periodic convention.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-tdmath-periodized-empirical-field",
    "model": "gpt-6-luna",
    "context_sha256": "7c2972a0f3e800f597bd09325d62643297e7586f0aba16ed63074fda0715888a",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "An arbitrary finite-configuration law can have infinite mean count and undefined signed tame expectations. Retained its probability mixture on measurable events; restricted finite signed evaluations to absolute integrability, with an explicit periodic-copy count bound proving finite mean count suffices.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-integrable-tail-diagonal-gap",
    "model": "gpt-6-luna",
    "context_sha256": "001164ee32b5509f7c2e8c0e7f5a8077a60808e91198563a245d0ceddcb4dae0",
    "outcome": "false_positive",
    "disposition": "false_positive",
    "reason": "The definition introduces the regular envelope; steps 1.1–1.3 derive summability from monotonicity and its integral, step 2.1 gives the diagonal gap, and step 3.1 proves far-image convergence without assuming periodic convergence. Its reverse justified_by link is expressly permitted by SCHEMA and is not a deps cycle.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-periodized-empirical-field-stationary-density",
    "model": "gpt-6-luna",
    "context_sha256": "316b81041bd0950bb9f5c5178683689f6a1bdbbc769ead5eff7a0d2c22373aaf",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "The unit-cell expectation already defines rho in the transitive interaction supplier; the attribution to local-tame topology alone was incomplete. F2 now explicitly identifies that notation through the empirical-field definition. Fundamental-domain translations and Tonelli give N|A|/L^d and the finite-mean mixture intensity. The Statement is unchanged.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-periodic-law-local-tame-transfer",
    "model": "gpt-6-luna",
    "context_sha256": "8e72fe5b80a32d57275559e7cd2623c8be16ce7cfe6e13130d1381d17ddbc4a8",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "The cited stationary specific-entropy-level theorem does not control each finite periodic law on arbitrary cubes. Replaced that attribution by direct eventual-per-cube weak L1 density extraction: entropy bounds imply uniform integrability, Dunford-Pettis and Eberlein-Smulian give diagonal subsequences, standard-Borel extension preserves consistency/stationarity, and Poisson count tails give tame convergence. Variational lower semicontinuity then proves the entropy liminf. No new item or Statement change is needed.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tdmath-continuum-variational-pressure",
    "model": "gpt-6-luna",
    "context_sha256": "b21a57f9cde82503862792af06e7dd746c20bd6c07e6dee4aba1ef8433b17443",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "F4 supplied only integer-side information convergence. Corrected its restatement and proved the real-side extension in step 1.3: the added-region conditional log density has negative-part mean at most 1/e and entropy increment D_L-D_floor(L)=o(L^d). The integer L1 likelihood limit therefore extends to every real L. Read the cached authoritative Georgii text, printed pp.172–187 including complete Sections 3–5, and checked its superstable regular hypotheses, energy existence, good rate sublevels and free/periodic normalization. Statement unchanged.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-canonical-empirical-field-conditioning",
    "model": "gpt-6-luna",
    "context_sha256": "3388412052d6f72d763462e3df5533e6862d0ae9d161be636c0adcea6930242f",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "The variational supplier requires four named choice hypotheses, omitted from this Statement; it also needs the superstable regular potential stated explicitly. Added their dependencies and inherited hypotheses. Exact-N conditioning has zero logarithmic rate by canonical-grand duality. Also repaired the digest measurability defect without dropping arbitrary neighborhoods: define outer probability, cover the compact minimizer set by finitely many evaluation-measurable basic neighborhoods inside U, and apply the source upper bound to their closed measurable complement. Conditioning preserves its strictly negative exponential rate. Read the cached Georgii Sections 3–5 proof and printed pp.172,175–176 measurability clauses.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-tdmath-hard-core-zero-beta",
    "model": "gpt-6-luna",
    "context_sha256": "c5c3dd69ac6def04a40fe69f37bfa12efc81a58793129f6d2bca982158753d4e",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "The beta-zero grand weight contains z^N, whereas the displayed partition is its canonical coefficient. F2 now explicitly divides by that sector constant (equivalently z=1), leaving the admissibility indicator. The ordered allowed triangle has area (L-a)^2/2; symmetry and division by 2! give the stated partition. The numerical Example and Verification remain unchanged.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tdmath-controlled-shell-three-ensemble-equivalence",
    "model": "gpt-6-luna",
    "context_sha256": "b308247bce493830aec9654bd0a376a82a4c8844253e16959204f43ddc9fc130",
    "outcome": "confirmed_fatal",
    "disposition": "repaired",
    "reason": "Periodic fixed-N convergence alone cannot dominate exp(2 beta delta_L L^d). Corrected F1 and invoked the conditioning lemma directly in step 1.2 after verifying its periodic exact-N rate and supporting activity. Differentiability gives the energy Chernoff estimates; thresholds L_k>=k select an eventually positive shell with canonical probability tending to one. The bounded density ratio on that shell transfers the negative exponential rate to its uniform reference law. Explicit choice and outer-probability conventions preserve arbitrary-neighborhood convergence; measurable basic neighborhoods also justify the grand/free conclusions. Read Georgii Sections 3–5 in the cached source.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-canonical-empirical-field-conditioning",
    "finding": "Step-4 digest arbitrary-open-set measurability",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "repaired",
    "reason": "Source p.172 separates the evaluation sigma-algebra from tau_L; pp.175–176 require measurable test functionals/sets. The new outer-probability formulation and finite measurable basic cover repair this without dropping any neighborhood.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tdmath-fixed-n-local-ensemble-equivalence",
    "disposition": "frontier_owner_referral",
    "affected_use": "The Statement and terminal proof use ordinary probability/concentration outside arbitrary open local-tame neighborhoods via the conditioning supplier.",
    "invalidated_claim": "Ordinary probability is undefined when the empirical-field preimage is not evaluation-measurable.",
    "minimality": "Carry the repaired conditioning outer-probability convention; retain ordinary probabilities for measurable events and all model/rate hypotheses.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tdmath-periodic-fixed-n-limit",
    "disposition": "frontier_owner_referral",
    "affected_use": "The Statement and terminal proof use ordinary probability/concentration outside arbitrary open local-tame neighborhoods via the conditioning supplier.",
    "invalidated_claim": "Ordinary probability is undefined when the empirical-field preimage is not evaluation-measurable.",
    "minimality": "Carry the repaired conditioning outer-probability convention; retain ordinary probabilities for measurable events and all model/rate hypotheses.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-tdmath-interval-event-ensemble-limit",
    "disposition": "frontier_owner_referral",
    "affected_use": "Proof step 5.1 applies the source LDP to K intersect U complement and the retained-admissibility constraint intersect U complement for arbitrary tau_L-open U.",
    "invalidated_claim": "Those complements need not be evaluation-measurable; the source measurable-set upper bound does not directly license their displayed ordinary probabilities.",
    "minimality": "Use outer probability and a finite evaluation-measurable basic cover of the compact relevant minimizers. In step 3.1 K itself is evaluation-measurable because rho is a measurable count expectation and Phi is a countable-cube limit of measurable energy expectations; record that fact rather than replacing the event exponent.",
    "source_urls": [
      "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    ],
    "familiar": false,
    "uncertain": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "disposition": "no_published_repair_proposed",
    "reason": "No potentially defective published consumer was found in these direct interface uses; unassigned draft probability-qualification findings are routed to frontier ownership, with outside consumers kept in separate maintenance.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "subject": "ex-td-biased-memory-reset-bound",
    "finding": "Incorrect unconditional entropy restatement; valid singleton specialization was implicit.",
    "classification": "confirmed_nonfatal",
    "defect_type": null,
    "disposition": "repaired",
    "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u19.json",
    "reason": "F2 incorrectly restated the conditional bound as an unconditional H(M) supplier statement. This is nonfatal because the Example already fixes R={r0}; a_r0=1 and q(1|r0)=p, q(0|r0)=1-p give H(M|R)=H(M). Repaired F2 to the exact conditional bound and expanded F1 and step 1.1; retained every endpoint physical assumption and the original Example and physical_scope.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "subject": "def-td-driven-finite-path-model",
    "finding": "Unrestricted row-stochastic kernels incorrectly described as single-reservoir heat stages without thermal consistency.",
    "classification": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "repaired",
    "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u19.json",
    "reason": "The original physical_scope called arbitrary row-stochastic stages single-reservoir bath transitions, but row sums do not imply canonical detailed balance: K=((0,1),(0,1)) has K(0,1)>0 and K(1,0)=0. Repaired the Definition and scope to preserve every formal kernel and all W, Q_in, F, and path-law formulas while specifying a detailed-balanced thermal subclass with an adopted pure-heat transfer interpretation. No measured bath realization is inferred.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "subjects": [],
    "reason": "All six direct consumers of the changed Definition are draft original-frontier items. Their inspected uses remain sound, and this review discovered no defective published supplier or consumer. No published-maintenance finding is invented.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-td-thermal-contact-constraints",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "proposed_status": "fixed",
    "evidence": "Confirmed undefined internal heat predicate: external Q has a different boundary and restricted record domain. Added q_A_to_B on the admitted contact-record set with joule magnitudes, signed reversal and exact zero test; selected records and equilibrium-preparation subset make the protocol-relative relation explicit. No equivalence or temperature theorem is inferred. L&Y IV.A pp. 51–54 uses adiabatic equivalence with a thermal join, a distinct convention.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-td-isolated-compound-feasible-set",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "proposed_status": "fixed",
    "evidence": "Confirmed incomplete endpoint product: unlisted devices could receive energy inside an isolated boundary without their states or energies appearing in F. Added typed auxiliary sets, energy and entropy maps, complete endpoint product, total bookkeeping and explicit reduced projection. The k=0 thermodynamic product is preserved; aggregate composition and partitioned endpoints are distinguished, with separate total maps required outside the aggregate admission domain.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-td-local-entropy-maximum-below-global",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "proposed_status": "fixed",
    "evidence": "Confirmed missing contact-record data. Authored the compound configuration space, tagged family, constituent and aggregate endpoint maps, admitted core records, control and transfer sets and internal q. Also confirmed the Step-4 digest contradiction: fixed aggregate coordinates could not carry both 13s_*/10 and 19s_*/10. Repaired by explicitly adopting the retained product entropy and restricting the simple aggregate admission set to equal-energy pairs, with aggregate entropy 3s_*Uhat/2. Original toy laws, feasible partitions, local maximum at 3/10 and global maximum at 9/10 are preserved. Verified the relative-open neighborhood and difference 3s_*/5 directly.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-td-noncompact-entropy-supremum-not-attained",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "proposed_status": "fixed",
    "evidence": "Confirmed missing completeness prerequisite in L1: thm-of-archimedean quantifies over complete ordered fields, not an arbitrary real-labelled field. Added the existing imported cor-cauchy-reals-lub-complete and explicitly instantiated its complete ordered field. Checked the cover thresholds, greatest finite index and uncovered point, the entropy upper bound 2s_*, its leastness, and strict improvement x -> (x+1)/2. Also repaired the digest aggregate-entropy contradiction and supplied complete contact records as in the local example: aggregate admission is the equal-energy subset with entropy 3s_*Uhat/2, while retained product entropy is separately adopted. Original open F, toy laws, supremum and nonattainment conclusion are unchanged.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-td-local-entropy-maximum-below-global",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "Step-4 digest confirmed: fixed aggregate coordinates and entropy additivity forced a constant S_A+S_B, contradicting the varying s_*(1+x). Repaired by supplying the retained product entropy separately and restricting aggregate admission to equal-energy pairs with a consistent affine aggregate entropy. Core feasible set and maximum conclusions preserved.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-td-noncompact-entropy-supremum-not-attained",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "Step-4 digest confirmed: fixed aggregate coordinates and entropy additivity forced a constant S_A+S_B, contradicting the varying s_*(1+x). Repaired by supplying the retained product entropy separately and restricting aggregate admission to equal-energy pairs with a consistent affine aggregate entropy. Core feasible set and maximum conclusions preserved.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-td-macroscopic-second-law",
    "proposed_status": "open-owner-referral",
    "defect_type": "logic",
    "route": "frontier-owner continuation, not this unit",
    "evidence": "The Postulate permits an auxiliary outside the thermodynamic split if its entropy change is zero, then declares the complete F inside only the thermodynamic product. Zero entropy change does not imply fixed auxiliary energy; omitted variable device states must appear in complete F or an explicit projected energy/entropy model. The displayed entropy inequality remains the intended claim.",
    "repair_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-td-collision-h-theorem",
    "proposed_status": "OPEN",
    "route": "frontier owner outside unit 20",
    "affected_use": "Proof 1.1 says the hypotheses match L1 and A1 supplies the kinetic equation at each time; A1 imports only product-almost-everywhere equality. A3 strengthens the weak tests to every (x,t), not the kinetic equation. The mathematical supplier substitutes the transport equation at a fixed time in Proof 1.1.",
    "invalidated_claim": "The cited interface alone does not establish the displayed all-time entropy derivative identity or all-time equality characterization from the physical item’s present assumptions.",
    "minimality": "Owner should supply the needed time-slice transport equality at every time, or prove an extension across exceptional time slices; unit 20 makes no edit or adjudication of this outside assignment.",
    "evidence_paths": [
      "items/pthm-td-collision-h-theorem.md",
      "items/post-td-boltzmann-molecular-chaos-model.md",
      "items/thm-tdmath-regular-collision-entropy.md",
      "research/physics-td-qft-rpm-62-2026-10-14-batch-20-step5-context.json"
    ],
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-td-rectangular-local-equilibrium-fields",
    "model": "gpt-6-luna",
    "context_sha256": "7e2428b0d8bc32fb0d428f276755e4a6c00059cee84b355fb0fd70b36115bea3",
    "outcome": "confirmed_fatal",
    "proposed_status": "FIXED",
    "reason": "An arbitrary optional flux can lack the partial derivatives in the unconditional divergence formula. The repaired Definition makes this classical operation conditional on their existence and requires consumers to supply regularity for domain-wide use.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-td-regular-elastic-collision-model",
    "model": "gpt-6-luna",
    "context_sha256": "2fec4ed902c96f37f3f07975e8f5bd22a1a0e0fc900d61f0f84fd621b7e240bc",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "FIXED",
    "reason": "The standalone definition did not identify density or its units, although the consuming Boltzmann postulate already assigns f units s^3 m^-6. The repair states that convention, Q=f/s, common test units and measure units m^9 s^-7; it does not assert existence or fix a measured rate.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-td-fourier-conductivity",
    "model": "gpt-6-luna",
    "context_sha256": "f85183410a54b03df45c57ac9ee6d9d390dbba8d35fee6c18041b97902279c11",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "FIXED",
    "reason": "The skew part cancels algebraically, but quadratic entropy production was undefined without a caloric entropy relation and energy balance. The repair defines sigma_Q=-j_Q dot grad T/T^2 with its units, proves skew cancellation in prose and explicitly conditions its entropy interpretation on those additional assumptions.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-td-diffusive-infinite-propagation",
    "model": "gpt-6-luna",
    "context_sha256": "2a689841aca1bac10fe0cac903caf17775d59cbe1eb6604b5328a413bdfcd939",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "FIXED",
    "reason": "F1 overstated its physical supplier by omitting strict positive bounds and bounded uniformly continuous derivatives through order two. The actual g=T_b+epsilon phi_per already satisfies all these hypotheses. F1 and their verification are now exact; Gaussian unit mass explicitly yields the background-subtracted formula, preserving the original claim.",
    "uncertain": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "proposed_updates": [],
    "reason": "All direct consumers found for the three changed interfaces are draft frontier items; no published consumer defect or repair was discovered in this unit.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "def-td-stable-tempered-continuum-preparation",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The physical exponent beta H is already dimensionless and downstream limit items individually convert it, but the definition omits the required numerical-temperature map for its mathematical partition supplier. Added beta_hat=E0 beta and H_hat=H/E0 for free and periodic energies, preserving all finite-region, stability, tail and SI conventions.",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "ex-td-forbidden-pair-beta-zero",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The inherited coordinate convention makes a dimensionless interpretation possible, but the Example never declares the units of L and a. Declared d=1, dimensionless L,a and physical lengths ell0 L,ell0 a; defined the hard-core potential explicitly. The forbidden band has area 2aL-a^2 and unrestricted grand probability exp(-zL) z^2(2aL-a^2)/2>0, while the retained normalizer lies in [1,exp(zL)] and its band probability is zero.",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "post-td-grand-variational-phase-uniqueness",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The unconditional finite T>0 setup forces beta>0, making the advertised beta-zero branch impossible. Repaired the Postulate by selecting either finite T>0 with beta>0 or formal retained beta=0 with no finite T, retaining both singleton assumptions and the exact stationary/count-sigma domains. Also defined I and Phi on their own finite-limit domains so the beta-zero assumption does not silently require finite original energy density. Positive-beta consumers retain beta Phi=beta_hat Phi_hat; the interval consumer already chooses its parameter branch explicitly.",
    "defect_type": "logic",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [
      "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "pthm-td-controlled-thermodynamic-ensemble-duality",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The rate P was defined using unspecified Z(V,N), whereas the cited mathematical duality supplies free-cube limits only; generic regions or periodic weights were not justified. Specified Lambda_L=[0,L)^d, V_L=L^d, the free-wall Z_L(N;beta) and every fixed-density cube sequence, retaining both closed-concave dual identities and physical unit conversions. Verified the missing near-origin lower-regularity bridge with two-particle stability and a constant extension of the decreasing tail envelope.",
    "defect_type": "dependency_citation",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [
      "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "ex-td-nonunique-variational-phases",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The elementary calculation correctly identifies exactly two scalar minimizers, but Verification 2.1 incorrectly says the continuum stationary-law premise F1 fails for the toy domain. Repaired only that inference: the scalar example illustrates a need for uniqueness assumptions and neither instantiates nor refutes F1 without a minimizer-identifying map. The Example and physical scope are unchanged.",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "ex-td-volume-sized-external-field",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The inherited finite-region convention permits V=0, where dividing log Xi by V is undefined. Kept both exact partition formulas for 0<=V<infinity and assigned the displayed rates only for V>0, recording both partitions equal one at V=0. Declared beta>0 and z>0 explicitly, so c nonzero implies exp(-beta c) differs from one. The added uniform cN energy cannot arise from ideal phi=0 interacting with a deterministic exterior.",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_native_step5_evidence_preserve_historical_rows",
    "subject": "pthm-td-interacting-three-ensemble-local-limit",
    "outcome": "false_positive",
    "disposition": "rejected_finding_false_positive",
    "reason": "Current physical L1 explicitly cites controlled-shell supplier Proof 2.1, which constructs delta_L with canonical selected-shell probability tending to one. Read that supplier proof: the limiting log moment generating function and differentiability give fixed-window Chernoff concentration, and its diagonal thresholds give the selected probability bound. A proved subclaim may be cited from the dependency proof. Checked the Poisson shell entropy bound and periodic transfer hypotheses; the physical carrier needs no edit. Supplier units, support inequality, positive interior density and unique-minimizer qualifications are retained.",
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u21.json",
    "uncertain": false,
    "source_urls": [
      "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "refer_to_supplier_frontier_owner",
    "subject": "thm-tdmath-fixed-n-local-ensemble-equivalence",
    "assigned_to_unit": false,
    "disposition": "owner_referral",
    "severity": "nonfatal",
    "affected_use": "Proof 1.1 calls alpha a supporting slope of concave F and puts z=exp(alpha); the desired activity supporting F(r)+alpha r is the negative of the ordinary supporting slope.",
    "invalidated_claim": "This slope-to-activity proof sentence has the sign reversed; the Statement using a selected supporting activity and the physical consumer explicit inequality remain sound.",
    "minimality": "For ordinary supporting slope s with F(r)<=F(rho)+s(r-rho), use alpha=-s and z=exp(-s), or use the supporting alpha already assumed in the Statement. Proof-only correction; no physical interface change or propagated cone is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "refer_to_frontier_owner",
    "subject": "pthm-td-stable-tempered-free-cube-grand-pressure",
    "assigned_to_unit": false,
    "disposition": "owner_referral",
    "severity": "nonfatal",
    "affected_use": "F1 and Proof 1.1 verify only the maximum-norm far-tail bound before invoking thm-tdmath-canonical-grand-duality, whose regularity definition also requires a lower envelope near zero.",
    "invalidated_claim": "The lower-regularity hypothesis is true but its verification is not written; this is a reader-closable proof qualification rather than an incorrect pressure Statement.",
    "minimality": "Use two-particle stability phi_hat(x)>=-2 B_hat for x nonzero; extend the tail envelope by a finite constant on [0,R), also bounding phi_hat(0) below. This supplies the all-radius integrable lower envelope without modifying any hypothesis or physical interface. The assigned duality item contains this argument now.",
    "uncertain": false,
    "source_urls": [
      "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record_scoped_no_published_effects",
    "subject": "step5-v2-initial-r1-u21",
    "reason": "Current direct dependency/reference searches and examination found fifteen affected draft consumers, all in batch 21. No published consumer or supplier repair was performed or certified; separate draft mathematical-supplier sign and pressure regularity clarifications are routed to their frontier owners. Historical published maintenance entries remain untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-rpm-spacetime-observer-and-worldline",
    "model": "gpt-6-luna",
    "context_sha256": "2616ab90f73ffbfbea54eb1a5f59db700d8b709de472c57374318aeca9cfb398",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "reason": "The flat clause imposed an affine-line restriction although massive and null worldlines are kinematic C² causal curves. Replaced it by arbitrary C² curves into A with origin-independent displacement derivative; no geodesic restriction remains. For an orthonormal e0,e1, x(s)=o+s e0+s²e1 is timelike on |s|<1/2 and is now admitted. Curved definitions, cones, observers and units are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-rpm-shell-tangent-force-ivp",
    "model": "gpt-6-luna",
    "context_sha256": "93a5b263f4a8eca4b29dfe2abe33ebf873752c20e0f616345582e12c5ae0f985",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: the stipulated background is the object of def-rpm-spacetime-observer-and-worldline, which explicitly adopts def-gr-smooth-lorentzian-objects. Clause (c) of that exact definition assumes AC_omega for the smooth tangent-bundle structure, and its scope clause records no further choice. This inherited hypothesis supplies the AC_omega premise of the cited Levi-Civita theorem. Smooth coordinate ODE, orthogonal-force norm preservation, future-cone continuity, parameter dependence and uniqueness gluing establish the stated local/maximal result without arbitrary family choice.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-rpm-incomplete",
    "model": "gpt-6-luna",
    "context_sha256": "caa115c02c7319737c42a930786d5de245c1b09a810b0092ae793e003ac26004",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed missing explicit coordinate/parameter units in this physics-domain example. Specified SI length coordinates theta, xi, periods L, ell and affine parameter s in metres, dimensionless metric components and normalized dgamma/ds, and proper time ds/c in seconds. Local constant-metric coordinate lines have zero acceleration; quotient periodicity gives the closed timelike geodesic, while endpoint coordinate limits 0 and ell prohibit extending the slab geodesic. No measured claim or completeness assumption is introduced.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-rpm-length-action-first-variation",
    "model": "gpt-6-luna",
    "context_sha256": "9d6bd80febee4366578fb148105f4aa9432c5b0dc52410479cdf5cb95eb409b0",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "The smooth pullback definition cited in F10 did not define derivatives for the stated C² variations. Added Proof 1.1: define the component derivative for C¹ fields along C¹ curves, prove chart independence by matching values and first derivatives with smooth data, and derive metric pairing from the component compatibility identity. Then C² H supplies commuting mixed derivatives, continuous integrands and integration by parts; supported coordinate variations prove necessity, including endpoints. The Statement and its reparametrization class remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-rpm-clock-reunion",
    "model": "gpt-6-luna",
    "context_sha256": "49804bd4a4ace0fb16413ba7e30628b93d8db99dbb2733d59f62f9584f8a3619",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The flat reunion setup left the metric identification implicit. Made its intended background explicit: M=A with the affine smooth structure, g induced by eta and constant future field N=e0, so the named orthonormal inertial chart has diag(-1,1,1,1). The lab density is 1; both traveler legs have density sqrt(1-v²/c²)>0; piecewise proper-time additivity gives the stated readings. The instantaneous turn remains an idealized corner, not an empirical measurement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-rpm-einbein-variation-and-equivalence",
    "model": "gpt-6-luna",
    "context_sha256": "3cd58ec837a7b4368486600c1682641d2c638489b1d0a75724be665da304aef6",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "F11 originally supplied only a smooth pullback derivative for the C² variation class. It now explicitly uses the coordinate derivative for C¹ fields and cites the completed coordinate-independence and metric-pairing proof in lem-rpm-length-action-first-variation, Proof 1.1. C² variations have C¹ tangent fields, justifying mixed derivatives and integration by parts in step 1.2. Independent positive-einbein bumps yield the constraint; massive elimination, the separately nonzero null branch and smooth reparametrization density are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-rpm-mechanical-momentum-and-observer-energy",
    "model": "gpt-6-luna",
    "context_sha256": "7378d2b59c9be1fb162f87aac3f2f702e9107ec41f3aa854f70cb8fafe1bb73e",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The definition named a future normalized tangent without displaying the normalization of the adopted trajectory. Specified an admissible C² future timelike curve on an interval, T=dx/ds and U=cT/sqrt(-g(T,T)); the already adopted positive proper-time density gives U=dx/dtau by chain rule and g(U,U)=-c² by bilinearity. This is an explicit formulation repair, preserving arbitrary parameters and open or finite segments. Null momentum, projections, energy and units are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-rpm-mass-shell-and-force-work",
    "model": "gpt-6-luna",
    "context_sha256": "6626b572764ac8e5b9d3659efe02203293ab907ca938cf84b592c6dbe49373d4",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "False positive: although the pairing supplier Statement is phrased for smooth sections, its Proof 1.1 explicitly states that the component formula and pairing calculation hold for C¹ fields along a C¹ curve; Proof 2.1 expands the metric components and uses compatibility, which indeed requires only these first derivatives. Applying that established calculation to C¹ U yields g(U,D_tau U)=0, and the product rule gives -c² dm/dtau. For the digest concern, the exact F3 supplier clause 1 covers every nonzero future causal vector, including null P, and licenses the positive null energy used in step 1.2. The mass-shell decomposition and flat inertial work deduction also have their stated hypotheses. No carrier edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u22.json"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-published-consumer-effects",
    "suppliers": [
      "def-rpm-spacetime-observer-and-worldline",
      "def-rpm-mechanical-momentum-and-observer-energy"
    ],
    "consumers": [],
    "reason": "Every direct item dependency/reference consumer identified for the two changed Definition interfaces belongs to the frozen draft frontier. The physics example setup/unit clarifications have no direct item consumers. No published item was edited or adjudicated. Published smooth pairing Proof 1.1 already covers the questioned C¹ calculation; no published mathematical repair is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-rpm-prescribed-force-local-motion",
    "action": "refer-to-existing-frontier-owner",
    "severity": "nonfatal",
    "location": "Facts & Assumptions, L1",
    "affected_use": "L1 writes the shell-system equation as D_s x=U when the base-point equation is dx/ds=U. The current supplier lem-rpm-shell-tangent-force-ivp correctly states dx/ds=U.",
    "invalidated_claim": "Only the notation of the cited position equation is ill-typed: a connection differentiates fields, not a map into M. Proof 1.1 uses the correctly intended position/velocity ODE and is not invalidated.",
    "minimality": "Replace D_sx by dx/ds in L1, leaving the Statement, force assumptions and proof deductions intact. This item is outside unit 22 ownership and has not been edited.",
    "reason": "Current direct consumer inspection confirmed the stale supplier-restatement notation in L1. This is a referral to its own frontier lane, not a new adjudication or outside-maintenance gate.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudicated_defect",
    "id": "texp-rpm-ideal-fusion-mass",
    "model": "gpt-6-luna",
    "context_sha256": "170c3423e6aea61efc1c546da5894fcdb0b877c26e9d7d3422d7a74ddb18c4e3",
    "before_sha256": "9e66f776aba01515321ce8ce660ba3e28d459f197e08a35e019359d8bff6a720",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F2 erased the cited theorem's C2 open-interval worldline hypothesis, leaving both momentum substitutions unsupported. Step 1.1 now realizes every massive leg P=aU by y(tau)=p+tau U, checks proper time, positive laboratory time slope, smooth time reparametrization and constant mass, and identifies velocity by c U_sp/U0. This licenses both incoming and rest-output identities. The exact Statement, physical_scope, empirical qualifications and dependencies are unchanged; the kinetic and zero-speed conclusions follow by subtraction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudicated_defect",
    "id": "pthm-rpm-fixed-target-threshold",
    "model": "gpt-6-luna",
    "context_sha256": "b97e399faa83adb3369a5e466be43c6888959f0c75e3dcf44c511901f852a49c",
    "before_sha256": "21c8e681435a592536498e6e1713e65c382b87bea41a50c5662781456f77719e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F2 cited the shell/positivity theorem without its C2 worldline and open-interval hypotheses. Step 1.1 now constructs the smooth affine representative y(tau)=p+tau P/a, checks proper time and invertible inertial-time parametrization, and keeps mass a constant. The original shell and E1>0 therefore hold for the collision leg. The Lorentz-norm expansion, timelike incoming total, division by 2m2c^2>0, independent E1>=m1c^2 bound and strict null-final threshold have been checked. Statement, scope, empirical qualifications and dependencies are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudicated_defect",
    "id": "texp-rpm-one-null-decay-recoil",
    "model": "gpt-6-luna",
    "context_sha256": "0a129429d8e56778839cb17a87ec54e9cc2cb9b4d3d3c1c1f92f5a704e923440",
    "before_sha256": "bcc06e2c447d4429974e095dbbf1d5c1e5c8e0da4338acc69c1bdcc8293b7080",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "F3 incorrectly generalized a C2 worldline theorem to an event-local daughter momentum. Step 1.1 now realizes each massive leg by the smooth affine curve y(tau)=p+tau P/a, verifies proper-time normalization and a positive invertible inertial-time slope, keeps mass a constant, and identifies the coordinate velocity using the same normalized tangent. The original inverse-momentum theorem then gives v=c^2 p/E. The parent rest total, strict M>m two-body threshold, positive k and energies, subluminal daughter speed and kinetic-energy remainder are checked. Statement, physical scope, empirical qualifications and dependencies are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_frontier_owner",
    "id": "pthm-rpm-system-mass-threshold",
    "path": "items/pthm-rpm-system-mass-threshold.md",
    "affected_use": "F3 generalizes pthm-rpm-inverse-momentum-and-work to a massive collision leg; proof 1.2 uses F3 to identify its invariant mass with its recorded rest mass.",
    "snippet": "[F3] [[pthm-rpm-inverse-momentum-and-work]]: for a massive leg of constant mass $m>0$, the adopted momentum $P=mU$ has invariant shell",
    "finding": "Same omitted C2-worldline specialization as this batch. The conclusion is independently supplied by the mass-specified collision definition: P=mU, eta(U,U)=-c^2 implies eta(P,P)=-m^2c^2. No mathematical uncertainty remains for its use in fixed-target; the outside carrier needs its owning lane to inspect and minimally correct the citation or supply a representative.",
    "minimality": "Repair its fact/citation or prove the affine representative; no Statement change is needed. Outside this unit; no edit or adjudication performed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_frontier_owner",
    "id": "pthm-rpm-two-body-com-kinematics",
    "path": "items/pthm-rpm-two-body-com-kinematics.md",
    "affected_use": "F5 cites pthm-rpm-inverse-momentum-and-work for a massive final leg; proof 1.1 invokes F1/F5 for the two event-local mass shells.",
    "snippet": "[F5] [[pthm-rpm-inverse-momentum-and-work]] supplies the massive-leg mass shell",
    "finding": "Same omitted C2-worldline specialization. Its shell equations also follow directly from the recorded-mass collision definition and observer decomposition. The subtraction, factorization, positive-energy converse and strict exclusion of zero null legs were inspected and remain sound for the recoil use. Owner review of the citation mismatch is required outside this unit.",
    "minimality": "Change only the fact/citation to the actual pointwise supplier or add the affine representative; do not weaken the two-body statement. No outside item edit or adjudication performed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No potentially defective published supplier or consumer was found in this assigned review. The two referred citation mismatches are draft frontier suppliers outside unit 23, so they belong to their frontier owners.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "tdqftrpm62-step5-initial-r1-u24-integral-nonnegativity",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "batch": "24",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-assumptions",
      "subject": "lem-rpm-curved-charge-action-variation",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "repair_confidence": 1,
      "adjudication_ref": [
        "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u24.json#decisions:lem-rpm-curved-charge-action-variation"
      ],
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u24.json",
          "note": "F12 omits the nonnegativity clause actually used in step 6.1. The named and declared supplier proves it explicitly as claim 1, so the omission is a local restatement defect, not a missing integral theorem. Restored that clause and retained claim 3 for the strictly positive integral over K."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "tdqftrpm62-step5-initial-r1-u24-ivp-derivative-scope",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "batch": "24",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-assumptions",
      "subject": "lem-rpm-external-charge-local-ivp",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "repair_confidence": 1,
      "adjudication_ref": [
        "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u24.json#decisions:lem-rpm-external-charge-local-ivp"
      ],
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u24.json",
          "note": "The F5 restatement overstates the one-variable derivative supplier. The needed finite-dimensional sum/product rules are an elementary local bridge, not an unavailable substantial theorem: step 1.1 now proves them directly from first-order remainders and verifies derivative continuity; step 2.1 supplies the bounded-Jacobian Lipschitz estimate before Picard-Lindelof is applied."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_existing",
    "subjects": [
      "def-gr-smooth-lorentzian-objects",
      "lem-em-particle-curve-variation",
      "lem-gr-future-causal-classification-by-a-timelike-field",
      "thm-gr-compact-metric-and-timelike-curve-variation",
      "thm-gr-nondegenerate-levi-civita-and-tensor-derivative"
    ],
    "reason": "No new published-interface mathematical defect was found in the supplier uses examined for these two draft repairs. Existing batch-24 publication-marker maintenance entries remain unchanged; this review does not close them or certify those published suppliers."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "def-rpm-h-background-and-model-quantities",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "The Definition computes units of a length functional but adopts no motion law. The old scope excluded even mentioning an action. Clarified physical_scope to permit the dimensional example while excluding a stationary-action premise; flat/sharp inversion, q_n(n)=0, positive spatial norm and positive reparameterization calculation remain sound.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "def-rpm-h-background-and-model-quantities",
      "model": "gpt-6-luna",
      "context_sha256": "3903e76972e07a40fb66fd27d14db560b7d77c1bf3dc20ce15820b88dbaade80"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "def-rpm-h-regular-constraint-system",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "The regular-level supplier explicitly assumes a nonempty fibre. Preserved the vacuous empty family case using its unique empty smooth structure, with no dimension assertion, and applied the supplier only to nonempty C. Specified a smooth time-dependent H_c:J×U→R and smooth phase-independent multipliers on J; tangent and weak-equality definitions are preserved.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "def-rpm-h-regular-constraint-system",
      "model": "gpt-6-luna",
      "context_sha256": "716e5224af68b898bf4e6d14684dd6ff81b44af83095fc8287120a0f16e4c30c"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "thm-rpm-h-canonical-poisson-and-flow",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "Parameter dependence was not quantified. Added Λ open in R^ell and a jointly smooth Hamiltonian on an open time-state-parameter domain, including ell=0. Its field (H_p,-H_q) meets the exact ODE supplier; the common-interval and joint smoothness claims follow from that proof. Corrected F3 to its smooth hypotheses. Independently checked chain-rule evolution and A^T J A=J for local autonomous flow; all claims remain local.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "thm-rpm-h-canonical-poisson-and-flow",
      "model": "gpt-6-luna",
      "context_sha256": "81fdc666c0253b4d6fc323512c6968ae85f2c6f2e3c68eb5ad0b1d5470b37f49"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "post-rpm-h-free-test-particle-action",
    "batch": "25",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "The postulate defined a functional and variation class but no condition selecting physical paths: stationary-action was only a name. Added x_0=x, a common ε/λ domain and the exact requirement dS[x_ε]/dε at zero =0 for every admissible family on every compact segment. This missing physical-assumption formulation is defect_type other, not a purported proof of nature. Corrected the author initial using the arXiv record.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "post-rpm-h-free-test-particle-action",
      "model": "gpt-6-luna",
      "context_sha256": "53102133e5abe1352b5d9404b7a6dc2391f5a7ae1f4f68366fb9dc0fbfd16338"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "thm-rpm-h-first-class-local-reduction",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "F7 cited a cotangent theorem for general symplectic P, and F2 attributed Hamiltonian fields to a definition that only states closedness/nondegeneracy. Supplied the existing general symplectic bracket definition and explicit smooth inverse construction in F7. The argument is valid: independent dχ span (TN)^ω; first-classness makes that span tangent; closure makes its kernel involutive and its transverse coefficients independent of leaf coordinates, yielding the unique local reduced symplectic form. Statement unchanged.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "thm-rpm-h-first-class-local-reduction",
      "model": "gpt-6-luna",
      "context_sha256": "4b5dac15f6d5553749111f01b0ca5ba56ce2493ab071c73c99cb1481b071820a"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "thm-rpm-h-second-class-dirac-bracket",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "F4 falsely attributed action units to the regular-constraint definition. Replaced it by the actual regularity/restriction convention and supplied the general symplectic bracket in F1. Corrected the transposed C index in the independence calculation and treated empty N explicitly. Invertible C proves independent dχ and nondegenerate restricted ω; the projected X_F^D contracts to d(F|N), giving the restricted bracket, extension independence and Casimir identity. Statement unchanged.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "thm-rpm-h-second-class-dirac-bracket",
      "model": "gpt-6-luna",
      "context_sha256": "206025fe6ff76476c4e66e4e0a4ee71eb37456eaf831c21a3be1de6c83501c04"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "pthm-rpm-h-action-mechanical-momentum",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "F2 already proves the fibre derivative pointwise on the timelike tangent cone, so the arbitrary C1 statement p-sharp=mU is valid without stationarity. The proof nevertheless asserted unconditional agreement with an independent first-order covector via F5, whose supplier requires a smooth stationary triple. Qualified F5 and that comparison by its actual hypotheses while preserving the C1 Statement and its flat mechanical-momentum consistency check.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "pthm-rpm-h-action-mechanical-momentum",
      "model": "gpt-6-luna",
      "context_sha256": "c2dd3f4e15560ed9c9134fa7a20c6ca9c6466158c1fa2c12288bb0282011779d"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "pthm-rpm-h-coordinate-versus-observer-energy",
    "batch": "25",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "The title omitted the lapse: E_n=cκ and H=c(Nκ−β·p) imply H=N E_n−cβ·p, including a difference at zero shift when N≠1. Renamed the title to include lapse and shift. The unchanged Statement and proof correctly give observer positivity, massive/null speed bounds, positivity for |β|_h<N, aligned high-momentum negativity for |β|_h>N, and dH/dt=H_t with its trajectory-specific conservation equivalence.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "pthm-rpm-h-coordinate-versus-observer-energy",
      "model": "gpt-6-luna",
      "context_sha256": "89ceb1f8152003b1a9d435bcaeddf45c74c29e677e846bebfc196eccc3b7be8c"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append_current_finding",
    "subject": "ex-rpm-h-shifted-chart-negative-energy",
    "batch": "25",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "location": "current Step-5 initial round-1 unit-25 tuple",
    "reason": "The metric and positive lapse do not select a future cone; reversing orientation reverses the admissible shell root, so the claimed future-root calculation lacked a necessary premise. Specified T=partial_X0=partial_0−2partial_1 and future causal v by g(v,T)<0, making n=T future unit. Also repaired the digest inequality: p1/κ<1, not its lower bound >1/2, gives 2−p1/κ>1. Verified the invertible flat coordinate transformation, κ<2p1, H<0 and E_n=cκ>0.",
    "preserve_historical_rows": true,
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u25.json",
      "id": "ex-rpm-h-shifted-chart-negative-energy",
      "model": "gpt-6-luna",
      "context_sha256": "ac988f92b31115096cd06e0082764f3136a40185c453014403503744b86edd4a"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "proposed_owned_use_note",
    "subjects": [
      "thm-a-regular-level-set-is-an-embedded-submanifold",
      "thm-smooth-dependence-of-ode-solutions-on-parameters",
      "def-poisson-bracket-on-a-symplectic-manifold",
      "thm-smooth-functions-form-a-poisson-algebra"
    ],
    "disposition": "current_owned_uses_checked_no_published_repair",
    "reason": "The regular-level theorem requires a nonempty fibre and is now invoked only then. The ODE theorem and its proof provide common-interval unique solutions and joint smoothness for jointly smooth parameterized fields, as explicitly supplied by the repaired Hamiltonian theorem. The general symplectic bracket has i_X omega=dH and {F,G}=dF(X_G), and its Poisson-algebra theorem applies to both ambient and symplectic reduced manifolds. No published carrier is edited or claimed globally recertified.",
    "supplier_itemHashGuard": {
      "thm-a-regular-level-set-is-an-embedded-submanifold": "8fc1f25d0475dc2891f620bc6d9d1d8d0a80ea38f7e82acd0567c50ff1ba9672",
      "thm-smooth-dependence-of-ode-solutions-on-parameters": "57bbb8d9a841396bfe06718b06594fd4f5031e58bdaffa27b543e658d6abea35",
      "def-poisson-bracket-on-a-symplectic-manifold": "3d43f9fbb8b1792d65a5e82c69976e7e678d86cb6bde122b5f94d0999e7c5b26",
      "thm-smooth-functions-form-a-poisson-algebra": "b4d83a222d82d605799edc45701a81f8644ebae43a121bccd37508868bd1379c"
    }
  },
  {
    "ledger": "defect",
    "id": "def-rpm-h-first-class-constraint-family",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "The cotangent supplier fixes the sign but does not define a bracket on arbitrary symplectic P. Defined X_F intrinsically by i_XF omega=dF and {F,G}=dF(X_G); smooth matrix inversion supplies well-definedness and preserves the canonical specialization and pointwise regular-surface closure.",
    "proposed_only": true
  },
  {
    "ledger": "defect",
    "id": "thm-rpm-h-local-hamilton-jacobi",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The endpoint-action and inverse-projection proof gives a smooth local HJ solution for arbitrary smooth numerical S0. SI dimensions additionally require S0 to have action units; the repaired interpretation states that assignment explicitly, without narrowing the mathematical existence theorem.",
    "proposed_only": true
  },
  {
    "ledger": "defect",
    "id": "ex-rpm-h-two-shell-consistency-obstruction",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The example proves failure for V(z)=lambda z at explicit regular common-shell points, not a genericity theorem in any topology. Replaced only the overstated title; both momentum-block regularity and the nonzero bracket witness, and the multiplier consequences, were checked and preserved.",
    "proposed_only": true
  },
  {
    "ledger": "defect",
    "id": "thm-rpm-h-killing-shell-first-integral",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "reason": "GR clause (a) assumes an oriented time-oriented Lorentzian four-manifold, and H7 also restricts geometry, multiplier sign and shell branch. They do not license the stated arbitrary Lorentzian manifold and any smooth multiplier. Preserved the Statement verbatim: locally defined Killing by L_xi g=0, derived L_xi g_inverse=-g_inverse (L_xi g) g_inverse by coordinate differentiation, and applied the canonical chain rule directly to z_prime=e X_C. Removed those unnecessary restricted suppliers; the bracket identity and conservation now hold at the original scope.",
    "proposed_only": true
  },
  {
    "ledger": "defect",
    "id": "thm-rpm-h-complete-integral-coordinates",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "reason": "An arbitrary H cannot be identified with -c p0 of the future shell: flat H=0 and S=q dot alpha have nonsingular mixed Hessian and solve HJ but the massive covariant shell has no p0=0 solution. Preserved the general canonical theorem and made its relativistic specialization explicitly n=3 with H exactly the temporal-shell root Hamiltonian. Defined the spacetime action S(x0/c,q,alpha), required positive lapse and spatial metric and the nonzero massless domain, and checked the future-root equivalence in both directions.",
    "proposed_only": true
  },
  {
    "ledger": "defect",
    "id": "pthm-rpm-h-classical-orbit-evolution",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The positive-spin supplier assumes AComega and the Poincare charge/KKS data, not H10. Replaced the inaccurate dependency restatement with its exact positive-mass positive-spin orbit and invariant interface. Also explicitly defined the Hamiltonian field on the KKS orbit by i_XH omega=dH, so the cotangent convention is not mistaken for an orbit existence supplier. The pairing mu_xi0=-P0 and KKS moment equation give X_H=c xi0_O; exp(-ct xi0) is defined for every real t and preserves the fixed orbit labels. The conditional physical Statement and scope are unchanged.",
    "proposed_only": true
  },
  {
    "defect_ledger": {
      "path": "research/defect-ledger.jsonl",
      "proposed_updates": [
        {
          "subject": "lem-rpm-body-spin-size-bound",
          "action": "append-native-adjudication",
          "outcome": "false_positive",
          "severity": "false-positive",
          "disposition": "false-positive",
          "finding": "Both actual published suppliers declare domain: mathematics. The affine model supplies geometric data only, and observer-decomposition clause (c) proves the positive-definite three-dimensional rest space. Independently checked cross-product domination, componentwise Lebesgue integrability, unit-vector scalarization and positive Mc division; no physical premise enters.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json",
          "defect_type": null
        },
        {
          "subject": "lem-rpm-charge-multipole-remainder",
          "action": "append-native-adjudication",
          "outcome": "confirmed_fatal",
          "severity": "fatal",
          "disposition": "fixed",
          "finding": "Step 1.2 used the Lebesgue L1 triangle inequality on the Riemann integral supplied by FTC, with no comparison bridge. Repaired by proving pointwise Riemann comparison from Darboux lower/upper sums and evaluating the bounding primitives. Also confined Q,d,B to the support ball where b is defined, and proved integrability of rho times the continuous remainder before the final Lebesgue estimate.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json",
          "defect_type": "dependency_citation"
        },
        {
          "subject": "pthm-rpm-hidden-momentum",
          "action": "append-native-adjudication",
          "outcome": "confirmed_nonfatal",
          "severity": "nonfatal",
          "disposition": "fixed",
          "finding": "TD used m after defining it only under the Pirani branch. Defined m=-g(p,U)/c2 explicitly in the TD branch and its positivity from future timelike pairing. Independently substituted n=p/mu into the zero-torque SSC identity, checked En=c mu and gamma=mc/mu, and removed S p times Dmu only through TD. This gives the unchanged intended mc2 p=mu2 U+S Dp identity.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json",
          "defect_type": null
        },
        {
          "subject": "ex-rpm-bmt-fw-and-g-two",
          "action": "append-native-adjudication",
          "outcome": "confirmed_nonfatal",
          "severity": "nonfatal",
          "disposition": "fixed",
          "finding": "A1 incorrectly attributed both equations to the BMT postulate. The Example already explicitly assumes local-potential action stationarity and lists the action-equivalence supplier, so its deduction is sound with that premise; the attribution defect is nonfatal. Repaired Given, A1 and F3 to state finite-segment C2 fixed-endpoint stationarity and distinguish adopted spin law from derived translation. Checked G=0, G=1, metric symmetry, preserved orthogonality and spin norm.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json",
          "defect_type": null
        },
        {
          "subject": "ex-rpm-spinless-td",
          "action": "append-native-adjudication",
          "outcome": "confirmed_fatal",
          "severity": "fatal",
          "disposition": "fixed",
          "finding": "The invariant theorem assumes TD along the solution; its interface cannot alone justify preservation from the initial state. Added the existing local-closure lemma directly as F3 and a mathematical dependency, applied its initial-constraint preservation first, and then applied the invariant theorem. Checked the closure proof homogeneous constraint equation and uniqueness, the invariant theorem positive spatial tensor-norm argument at initial zero spin, and the resulting constant-mu geodesic reduction. The Example claim is preserved without extra assumptions.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json",
          "defect_type": "dependency_citation"
        },
        {
          "subject": "lem-rpm-charge-multipole-remainder",
          "action": "append-native-adjudication",
          "severity": "nonfatal",
          "disposition": "fixed",
          "finding": "The original Statement evaluates b outside its declared domain in the all-space B integral. All moment integrals now have the support-ball domain, and the proof integrates the continuous remainder there.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json"
        },
        {
          "subject": "def-rpm-body-moments",
          "action": "refer-to-frontier-owner",
          "severity": "nonfatal",
          "disposition": "open-outside-assignment",
          "finding": "Clause (b) asserts parametrization independence of sqrt(det G) dy without an exact change-of-variables supplier or local transformation proof. Under X-prime=X composed with phi, the chain rule gives G-prime=Dphi-transpose G Dphi and sqrt(det G-prime)=abs(det Dphi) sqrt(det G). The remaining measure equivalence requires the C1 diffeomorphism substitution theorem; insert that exact supplier and identity. No assigned conditional SSC calculation relies on proving this measure equality.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json"
        },
        {
          "subject": "pthm-rpm-td-invariants",
          "action": "refer-to-frontier-owner",
          "severity": "nonfatal",
          "disposition": "open-outside-assignment",
          "finding": "Its final Remark says the zero-spin result is not an inference from a vanishing norm, but proof step 2.1 explicitly uses TD to set S-a0=0 and writes half S-ab S-ab=half sum-ij (S-ij)^2. Conserved zero spatial norm implies S=0. Qualify the Remark as excluding the unrestricted indefinite tensor norm alone; the conditional theorem proof and spinless consuming use remain sound.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json"
        },
        {
          "subject": "pthm-rpm-bmt-constraints",
          "action": "refer-to-frontier-owner",
          "severity": "nonfatal",
          "disposition": "open-outside-assignment",
          "finding": "Facts A1 attributes adopted BMT transport and Lorentz-force translation jointly to post-rpm-bmt-dipole-model, although that postulate refers translation to the action law. The Statement, A2 and F3 explicitly assume stationarity, and proof step 1.1 correctly obtains translation from F3, so the conditional deduction remains sound. Apply the same minimal attribution correction as in ex-rpm-bmt-fw-and-g-two: A1 adopts spin transport and F3 supplies translation under A2.",
          "evidence_path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u27.json"
        }
      ]
    },
    "published_ledger": {
      "path": "research/published-consumer-supplier-ledger.md",
      "proposed_updates": [],
      "reason": "No potentially defective published supplier or consumer was found in these examined uses. The two additional concerns target unassigned draft frontier carriers and are routed to their owner; no published repair or certification is proposed."
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-rpm-constant-electric-orbit",
    "action": "record_false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "2188739587af454d5ad5d897ab2e1d250b451a0e08380f920b975724531dfb8e",
    "reason": "F8 is valid under def-derivative, Definition, “Differentiability on a set”: differentiable means at every point of the domain, including interval endpoints. Such differentiability implies continuity on I (cor-differentiable-implies-continuous), so cor-zero-derivative-implies-constant applies. The proposed f on [0,1] is not differentiable at 1: its quotient is -1/(x-1), unbounded as x tends to 1 from below. Step 4.1 uses differences of C2 model position curves and the smooth explicit solution on a common interval containing the initial event; these are continuous, have zero derivative and zero initial value. Hence componentwise uniqueness is sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "def-rpm-relativistic-coulomb-phase-system",
    "batch": "29",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The IVP supplier defines interval solutions but no extension or maximality. The Hamiltonian and smooth noncollision vector field are sound; the inaccurate locator is a nonfatal definitional defect. Defined interval extension and maximality locally without asserting existence or uniqueness.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json",
      "id": "def-rpm-relativistic-coulomb-phase-system",
      "model": "gpt-6-luna",
      "context_sha256": "f4cee9064af8d2ee5c95fb6ea16c83fdf5aeb01e8cf9bcf852f2f88257d1fc37"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "lem-rpm-schwarzschild-null-geodesic-reduction",
    "batch": "29",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "correction": "A parameter reversal sends (E,L) to (-E,-L), so it cannot make E>0 and L>=0 for a ray with L/E<0. This is a fatal logical overclaim. Kept both angular directions by retaining signed L and defining b=|L|/E; the radial first integral depends on L squared and its threshold is unchanged.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json",
      "id": "lem-rpm-schwarzschild-null-geodesic-reduction",
      "model": "gpt-6-luna",
      "context_sha256": "8ca8f019bac5e40533f158536900df9bcc17239fad58894868d3eae2a91a5162"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "pthm-rpm-schwarzschild-circular-stability",
    "batch": "29",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The energy-trapping and one-sided escape arguments establish the stated threshold, but their unscaled Euclidean balls mix length and speed. This is a nonfatal dimensional-coordinate omission. Specified SI and dimensionless (r/s,w/c,c*tau/s), with energy bounds c^2*epsilon^2/8, perturbations s*delta/2, and escape radius eta/s; all three classifications are preserved.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json",
      "id": "pthm-rpm-schwarzschild-circular-stability",
      "model": "gpt-6-luna",
      "context_sha256": "a8f76e4a013358fa9d27cbbf45b7d909c2ae8c84e2d63156732ec8d8dad2db13"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "pthm-rpm-static-clock-redshift",
    "batch": "29",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "A1 inaccurately restates free fall for all ideal massive test bodies, although the actual postulate restricts it to freely falling test bodies. The proof uses accelerated static clocks and null-ray observer energies, not massive free fall, so this is nonfatal. Replaced A1 with the exact clock/light/test-field assumptions and identified static observers as constrained. Also closed the digest logarithm concern using derivative-zero/MVT proofs of the quotient and square laws and the integral remainder identity.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json",
      "id": "pthm-rpm-static-clock-redshift",
      "model": "gpt-6-luna",
      "context_sha256": "5dd5d7c3a0322c879b2436cc5f1118a5db016a2c3efa99532ac607f95e2f5c6d"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-rpm-schwarzschild-null-critical-impact",
    "batch": "29",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The algebra and scattering classification are valid, and SI lengths can be recovered from the Schwarzschild supplier, but the physical example never states its unit convention explicitly. This is a nonfatal exposition defect under the content model. Specified SI s,r,b,bc as lengths, H as inverse squared length and b^2H as dimensionless, retaining the same exact turning and critical-ray claims.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u29.json",
      "id": "ex-rpm-schwarzschild-null-critical-impact",
      "model": "gpt-6-luna",
      "context_sha256": "3a2575c0030ca08f285efc72567303b52ad4ccbf7910cef60cf1f4bb4eb7fb43"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "retain_and_route_open_finding",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-owner-step5-coulomb-positive-root-necessity",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "prop-rpm-relativistic-coulomb-scattering-branch",
    "disposition": "open",
    "route": "frontier owner",
    "reason": "Pre-existing Proof 7.1 necessity overclaim is outside this rejected assignment: at J=kappa/c, C=0 and Q(u)=A-2du has positive simple root A/(2d), below (W-mc^2)/kappa. Current supplier Definition change does not invalidate the consumer. Existing canonical owner row already records this finding; retain it without duplicate registration."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "reason": "Current direct dependency/reference consumers of the changed assigned interfaces are draft frontier items; no potentially defective published consumer was found. No published item was edited or certified."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tdmath-type-offset-vector-space",
    "model": "gpt-6-luna",
    "context_sha256": "6f14cd4af813944678b5b232e932ba1c1b5ea877930ed537f97dd55dd349ee4f",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The generic complete-ordered-field and function-space suppliers do not identify the concrete real scalar field. Added thm-reals-ordered-field, which reaches def-real-numbers, thm-reals-field and def-real-order and supplies the ordered field used in F and the positive-scaling index set. The finite-list construction and quotient discharge remain sound; Definition unchanged. This is a nonfatal missing supplier declaration, repaired in item metadata.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-tdmath-signed-comparison",
    "model": "gpt-6-luna",
    "context_sha256": "27793f0dc7a05f0be9c3d3cc34b565b1f0e0486b3fa7e5758af5bacdc2f65abe",
    "outcome": "false_positive",
    "proposed_disposition": "false-positive",
    "reason": "SCHEMA explicitly permits a justified_by result to depend on its definition. Here the definition only introduces d^+ and d^- and the comparison notation. Lemma step 1.1 proves finite support and equal masses from total(d)=0 without assuming any signed-order property; step 1.2 proves unsigned cancellation, and steps 2.1 and 3.1 then derive the signed laws. There is no logical circularity or deps cycle.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tdmath-spectator-cancellation",
    "model": "gpt-6-luna",
    "context_sha256": "eaf54016f84f9cfd52394350fe6c1b1fe36e36373a1d83f178cd6a7ca13f8db3",
    "outcome": "false_positive",
    "proposed_disposition": "false-positive",
    "reason": "Step 1.2 does not cancel C/r prematurely. For 0<=j<n, add j copies of B/r and n-j-1 copies of A/r to A/r+C/r<=B/r+C/r. This compares P_j to P_(j+1), with P_j=(n-j) copies of A/r plus j copies of B/r plus C/r. Transitivity yields P_0=A+C/r<=P_n=B+C/r, retaining exactly one shared C/r throughout. The supplied positive decreasing reciprocals then satisfy stability. Zero-mass C is zero; the pointwise-minimum decompositions also prove signed agreement, translation, transitivity and addition.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-tdmath-reference-order",
    "model": "gpt-6-luna",
    "context_sha256": "92d196006547c46aa36128a6ee0f1fff3045e82990c178da5ce80b840e44283a",
    "outcome": "false_positive",
    "proposed_disposition": "false-positive",
    "reason": "The supplied def-ordered-field uses positive-cone trichotomy: exactly one of x>0, x=0, -x>0. Assuming -1>0 and squaring gives 1>0 while -1>0 still holds, contradicting trichotomy at x=1. Hence 1>0 and -1 cannot be positive. If c>0 but c^(-1)<0, the product c*(-c^(-1))=-1 would be positive, a contradiction. Thus positive rescaling is licensed. The strict pair is distinct by reflexivity; all three signs of mu-lambda establish the claimed all-real equivalence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-tdmath-reference-order-two-state",
    "model": "gpt-6-luna",
    "context_sha256": "e4a243b3a01e18a0ed445b53251b6cf1c4c5cc735b4b2a79c853d71f1770c9b9",
    "outcome": "confirmed_nonfatal",
    "proposed_disposition": "fixed",
    "reason": "The Verification Given already assumes distinct tags, so steps 1.1 and 2.1 are valid under their stated premises. However, the standalone Example setup X={a,b} did not impose distinctness and therefore permitted a=b, contradicting its unqualified strict-order assertion. Repaired this nonfatal public-setup omission by stating that a,b are distinct state tags in the Example. The proof, comparison rule and intended two-state model are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-rpm-self-force-status",
    "action": "record_false_positive",
    "model": "gpt-6-luna",
    "context_sha256": "ca965ce4b548a0b52e7239e66c8e729a8ddda14b0c3904305c164496e07f963e",
    "reason": "The rejected source-locator objection is resolved by inspecting the exact cited HTML edition. Record this tuple as false positive; no published-consumer finding or repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://link.springer.com/article/10.12942/lrr-2011-7"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-rpm-finite-time-ode-comparison",
    "model": "gpt-6-luna",
    "context_sha256": "2daa1e22ffe64afbef1e850405fb80b176cabe0ae67fe23120aa1ced53afe57e",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The cited vector FTC requires a<b. The target bound and integral inequality at t=0 are immediate equalities, but step 1.1 applied FTC to every [0,t]. Repaired by restricting FTC to 0<t<=T and treating t=0 directly using the zero-length integral convention; no claim or constant changes.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-rpm-controlled-newtonian-reduction",
    "model": "gpt-6-luna",
    "context_sha256": "add1bb422cd1e2ae4b2859272c410b46d9db9afbb9836fc21fb440aef7b86270",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The supplied interfaces explicitly identify the thresholds: thm-gr-weak-field-scaled-trajectory-limit takes epsilon_* from lem-gr-weak-field-christoffel-bounds, whose Statement in turn takes epsilon_* from lem-gr-weak-field-admissibility-and-inverse-bounds. The latter defines it as min{epsilon_0,1,(128C)^(-1)}. Thus L3 has exactly the admissibility range; g00<=-1/2 along the compact segment and continuity give the stated open time-oriented neighborhood without narrowing any hypothesis.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-rpm-low-speed-energy-bound",
    "model": "gpt-6-luna",
    "context_sha256": "443bca985a52fdb9f42d2a53cce9ea939f7c22f5440e8f4e088f7cb9bf95159c",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The Example explicitly stipulates gamma=(1-|v|^2/c^2)^(-1/2), E=gamma*m*c^2 and T=E-m*c^2; the only deduction is the purely algebraic low-speed lemma with delta=1/10. It does not infer this energy formula from unspecified motion. No worldline assumption is needed for that conditional calculation. Its physical state reading is also realizable: in the named inertial chart any stipulated vector |v|<=c/10 is the velocity of the smooth curve t -> (ct,x0+t*v) on R, whose tangent (c,v) is future timelike since -c^2+|v|^2<0. No dynamics or empirical premise enters.",
    "uncertain": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_new_finding",
    "id": "thm-gr-weak-field-scaled-trajectory-limit",
    "reason": "No published item was edited or adjudicated. Its current H1-H3, scaled equation, force Lipschitz argument and Gronwall estimate support the assigned consumer. The owning contract already records a historical nonfatal omitted-explicit-FTC observation at published proof step 2.1; this review does not recategorize or close that historical entry. Its integral inequality follows from continuous derivative components and forward vector integration; no new unsound published claim was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-emg-lorentz-hodge-calculus",
    "classification": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "Remove the inaccurate A1 formulation and redundant step citations; preserve supplied background axioms. Correct the separate presentation locator to step 2.2."
  },
  {
    "ledger": "defect",
    "id": "cex-qft-yukawa-source-power",
    "outcome": "false_positive",
    "reason": "Reject the judge allegation that the cited arXiv v2 uses r^-1: inspected its page 11 display, which instead prints r^-2. The independent local differentiation correctly exposes this printed expression error.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.04051"
    ],
    "familiar": false
  },
  {
    "ledger": "defect",
    "id": "cex-qft-yukawa-source-power",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Corrected source locators to Fewster–Rejzner PDF/printed pages 11–12 and Bastianelli pages 8–9. These are citation metadata repairs; no mathematical public interface changed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1904.04051",
      "https://www-th.bo.infn.it/people/bastianelli/1-Relativistic-quantum-mechanics-21-22.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "id": "def-qft-fock-and-test-spaces",
    "model": "gpt-6-luna",
    "context_sha256": "37fddfb016076749dc9c21e0f4d0c43adfb6fe0ce86b8af1af5e30dce8d97cdf",
    "outcome": "confirmed_nonfatal",
    "resolution": "The tensor, projection, contraction and square-summable Fock definitions are valid for arbitrary complex Hilbert H under Countable Choice. Only the closing cross-reference overstates the scope actually proved in lem-qft-fock-ccr-car, whose Statement assumes separability. Added that hypothesis to the cross-reference without restricting any construction or changing an operator formula; this is a nonfatal citation-scope defect.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "id": "ex-qftmath-mode-domain",
    "model": "gpt-6-luna",
    "context_sha256": "f0ffbb4e34547ed8cfd6cdad0420f7f82c285ab0f54777b6fe8ad443f58b0a9f",
    "outcome": "confirmed_fatal",
    "resolution": "As written, CCR on the individual maximal ladder domains is an undefined operator identity: for c_n=(n+1)^(-3/2), both ladder-domain sums converge, but aa† would require sum (n+1)^2|c_n|^2=sum 1/(n+1), which diverges. Step 1.1 and the cited lemma prove CCR on the invariant finite-particle domain and CAR on the whole fermionic Fock space. Replaced only the ambiguous opening domain sentence by these explicit domains, preserving every formula, witness and proved claim. Its three owning-contract boundary excerpts were aligned to the same domains and the unnormalized Fock witness.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "refer_to_frontier_owner",
    "id": "lem-qft-fock-ccr-car",
    "classification": "confirmed_nonfatal",
    "affected_use": "Proof 2.1 writes a_{n+1}^dagger(h)Phi_n for an output in sector n+1, although the Statement defines the subscript by the input sector.",
    "evidence": "The correct coordinate is a_n^dagger(h)Phi_n: creation takes input sector n to n+1. Proof 1.2 already gives this exact sector adjoint identity. This confirms the existing Step-4 digest concern; no source statement changes are needed.",
    "minimality": "In proof 2.1 write the adjoint test against an input vector supported in sector n+1 and the forced coordinate as a_n^dagger(h)Phi_n; align its owning contract derivation. This is an unassigned proof-only indexing correction, not a changed operator statement.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_new_published_consumer_finding",
    "reason": "All 32 direct item consumers found for this changed draft definition belong to the frozen draft frontier. No published item was edited or adjudicated; the separate unassigned indexing observation is in a draft lemma.",
    "uncertain": false
  },
  {
    "path": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "38",
    "id": "lem-qft-scalar-causal-commutator",
    "phase": "initial",
    "round": 1,
    "unit": "38",
    "model": "gpt-6-luna",
    "context_sha256": "177674dcd2d652c811459352c3bfcd7010c9bc784d2b55281dc6cf2d357d6444",
    "outcome": "confirmed_nonfatal",
    "defect": "Step 4.1 applies CCR without explicitly supplying separability of the shell Hilbert space.",
    "status": "fixed",
    "resolution": "Cite lem-qft-mass-shell-test-range-dense in deps and F3 and invoke it in step 4.1; it supplies separability for every mu >= 0 under Countable Choice. Claim unchanged.",
    "post_sha256": "87977397853123b5ebd8e3ae1317911726c9c6e35493fc2876962d3f78a97b83",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u38.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "thm-tdmath-local-implicit-rank",
    "batch": "4",
    "severity": "nonfatal",
    "location": "Facts & Assumptions L1",
    "disposition": "fixed",
    "correction": "L1 omitted openness, C1 regularity and base-point membership required by the exact imported IFT. Step 1.1 already verifies those hypotheses; corrected L1 to state the exact graph and derivative interface without changing Statement or proof.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-tdmath-extended-convex-epigraph-equivalence",
    "batch": "4",
    "severity": "nonfatal",
    "location": "Facts & Assumptions F2; Proof 1.3, 2.1",
    "disposition": "fixed",
    "correction": "The metric-topology Definition supplies openness by balls and closedness by complement, not continuity or the closed-preimage theorem attributed in F2. The existing distance-identity proof already establishes the required closedness directly. Repaired F2 and expressed both directions solely by explicit balls.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "thm-tdmath-phase-dimension",
    "batch": "4",
    "severity": "nonfatal",
    "location": "Facts & Assumptions L1, L2; Proof 1.1, 2.1",
    "disposition": "fixed",
    "correction": "L2 inaccurately attributes C1 closure to a supplier whose Statement proves only total differentiability and its derivative formulas. The continuity conclusion follows from the given C1 functions and F1 by elementary finite sums, so this is not a false dimension claim. Corrected L2 and supplied explicit coordinate-lifting, derivative-entry continuity and finite-remainder arguments for both equation maps.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u4.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-qft-framework-units",
    "batch": "40",
    "proposal": "record-confirmed-fatal-repaired",
    "defect_type": "logic",
    "reason": "The autonomous exponential lacked a defined spectral construction for its stated operator class. Repaired with dense-domain self-adjointness, explicit Countable Choice and the exact bounded Borel integral. Native rejudgment and certification remain controller duties.",
    "uncertain": false,
    "source_urls": [
      "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
    ],
    "familiar": true,
    "row": {
      "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u40-autonomous-spectral-exponential",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-qft-framework-units",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "batch": "40",
      "group": "batch-40",
      "correction": "The autonomous exponential lacked a defined spectral construction for its stated operator class. Repaired with dense-domain self-adjointness, explicit Countable Choice and the exact bounded Borel integral. Native rejudgment and certification remain controller duties.",
      "adjudication_ref": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u40.json",
          "id": "def-qft-framework-units",
          "model": "gpt-6-luna",
          "context_sha256": "dc6d7b184aa477d23013f32c2f1c92f70068bee03790fee07332369cae089557"
        }
      ],
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u40.json",
          "note": "The repair notes record inspected suppliers, exact current review hashes, all 26 direct consumer uses, source locators and actual scoped check results."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "def-qft-framework-units",
    "proposal": "no-published-update-required",
    "reason": "All 26 direct item consumers are draft frontier items; examined exact references and affected dynamics uses. No published or outside-frontier consumer was found and no published repair is requested. Owning page qft-c01 remains sound because its text claims no evolution construction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "lem-qft-example-golden-kernel",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "caught_at_stage": "step5-initial-r1-u41",
    "disposition": "false_positive",
    "reason": "The alleged physics supplier is actually a definition with domain: mathematics and deps: []. Its Definition fixes formal parameters, units and pairings without physical postulates or observations. F4 uses only these dimensional conventions; this is an allowed mathematical prerequisite. Independently, Plancherel on 1_[0,T], the affine Jacobian 2 pi, the omega^-2 tail estimate and E=E0+hbar omega yield all stated constants and the coefficient limit.",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "thm-qft-example-finite-dyson-unitarity",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "caught_at_stage": "step5-initial-r1-u41",
    "disposition": "false_positive",
    "reason": "The rejected dependency premise is false: def-qft-example-data is domain: mathematics, has no prerequisites, and supplies formal units and finite-matrix conventions rather than physical assumptions. The bounded-dynamics supplier is also mathematical. Applying it to H=C^d, I=[0,T], and the norm-continuous Hermitian family lambda V_I satisfies its Countable Choice and bounded-generator hypotheses. Its recursion is latest-time-left as required. The separate undefined matrix imaginary-part notation from the Step-4 digest is recorded as an owner follow-up, not misclassified as confirmation of this rejected dependency allegation.",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "lem-qft-example-oscillator-feynman-prescription",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "caught_at_stage": "step5-initial-r1-u41",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "Step 1.2 now chooses a fixed radius r for a prescribed eta and then epsilon0; the two existing error estimates are uniformly below eta for all 0<epsilon<epsilon0. The public Statement is unchanged.",
    "post_sha256": "699071709885d215e6acadb4fd4857197f959ffa678a62c3fddbcea897de2922",
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "subject": "thm-qft-example-finite-dyson-unitarity",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "caught_at_stage": "step5-initial-r1-u41",
    "severity": "nonfatal",
    "disposition": "open",
    "location": "items/thm-qft-example-finite-dyson-unitarity.md: Statement coefficient identity and Proof step 3.1",
    "reason": "The operator identity is proved for Im_H A=(A-A^dagger)/(2i), but the public Statement uses Im T2 without defining the matrix convention. The scalar diagonal Im and operator Im must be distinguished. This independent Step-4 concern is verified, not a confirmation of the false rejected dependency allegation. The dispatch explicitly says not to edit false-positive items; owner authorization/routing of this separate repair is required.",
    "affected_use": "The displayed 2 Im T2=T1^dagger T1 in the Statement requires the Hermitian imaginary part. For H0=0 and constant V=[[1,i],[-i,1]], numeric hbar=T=1, T1=-V and T2=i V^2/2. Then V^2=[[2,2i],[-2i,2]], whereas 2 Im_entrywise T2=2I.",
    "invalidated_claim": "The matrix coefficient identity interpreted entrywise; the Hermitian imaginary-part identity and every other claimed conclusion remain sound.",
    "minimality": "Define Im_H A=(A-A^dagger)/(2i) before the coefficient identity and use Im_H for T2 in Statement and step 3.1. Preserve scalar Im T_ii and all hypotheses, estimates and other claims. This future Statement edit requires direct consumer examination.",
    "consumer_evidence": [
      {
        "id": "pthm-qft-example-regulated-probability-control",
        "path": "items/pthm-qft-example-regulated-probability-control.md:90",
        "affected_use": "Statement defines Im_H A=(A-A*)/(2i), displays 2 Im_H mathsf T2=mathsf T1* mathsf T1, and cites the theorem in F7 and Proof 1.2.",
        "disposition": "The relevant convention is already explicit and correct; no repair proposed."
      },
      {
        "id": "ex-qftmath-x01",
        "path": "items/ex-qftmath-x01.md:45",
        "affected_use": "F2 and Verification 1.1-3.1 use only the two-level exact and first-order squares and survival counterexample, not the matrix imaginary-part identity.",
        "disposition": "Unaffected by the proposed definition clarification."
      }
    ],
    "owner_route": "Separate native frontier-owner follow-up for this additional concern; no published item is implicated.",
    "closure_blocker": true,
    "adjudication_report": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qft-dirac-projection-matrices",
    "status": "fixed",
    "defect_type": "dependency_citation",
    "reason": "The imported adjoint definition requires a first-variable-linear pairing, whereas H_D uses a second-variable-linear pairing. F2 now transports through (u,v)_1=<v,u> with unchanged norm and density, and conjugates the defining identity. The existing cutoff test then identifies q=±omega g and proves the exact maximal self-adjoint domain without changing the Statement."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qft-dirac-fermionic-translation-spectrum",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "For every scalar c, H(c Omega)=0. Step 4.2 proves that all positive-particle sectors have positive energy almost everywhere, including mu=0 off the null apex; hence ker H=C Omega, not a unique vector. The Statement now gives the exact eigenspace and uniqueness of normalized vectors only up to phase. F4 also explicitly transports the first-variable adjoint/PVM suppliers to the second-variable Fock pairing, licensing the unchanged cutoff proofs and domains."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qft-dirac-covariance-spectrum",
    "status": "false-positive",
    "reason": "Step 1.1 first proves S(Γ(p)±mu)beta S†=(Γ(Λp)±mu)beta. Applying r=Λp to the resulting integral for S C±(z) S† gives phase ±i(Λ^-1 r)∘z=±i r∘(Λz), invariant measure and coefficient (Γ(r)±mu)beta, hence exactly C±(Λz). The judge assumes the substitution starts in C±(Λz), which the proof does not require; there is no reversed covariance. No kernel-proof edit was made for this false positive."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-qft-dirac-covariance-spectrum",
    "status": "fixed",
    "defect_type": "logic",
    "reason": "Independent inherited defect: Statement and proof 5.1 repeat the false unique-zero-energy-vector wording. Both now state the eigenspace C Omega, while the rejected kernel proof is unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-qft-dirac-free-properties",
    "status": "open",
    "defect_type": "logic",
    "reason": "Frontier consumer Statement repeats the literal unique zero-energy vector claim. Refer to its owner: replace it with ker K_D=C Omega and carry the same kernel through positive SI scaling."
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-qft-free-time-ordered-kernel",
    "model": "gpt-6-luna",
    "context_sha256": "e6c31888088f17e66668040a5ebb6ea3af58c1c52e1afbf074b255041cb9e006",
    "outcome": "false_positive",
    "reason": "The Statement explicitly introduces H_mu as an element of S'(R^4) by its test-pairing formula. Every occurrence of H_mu in this carrier denotes that distribution; none is a one-particle vector, a Hilbert-space argument, or a Fock-space base. F4 and F5 instead pair the shell vectors K_mu f and K_mu g in the supplied L2 Hilbert space. The shell supplier's locally defined Hilbert-space symbol therefore is not substituted by the kernel in any inference. Reusing a symbol across separately scoped items does not create the claimed unresolved type collision.",
    "uncertain": false,
    "source_urls": [
      "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "subject": "ex-qft-qed-two-polarizations",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "batch": "44",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The original Example and step 2.1 identify the global section quotient K0/N with a single rank-two plane. The null-quotient supplier instead maps it onto H_T. Repaired the global identification and proved the separate finite fiber quotient using T_n(a,v)=v-na, its kernel C(1,n), onto map and induced positive form.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u44.json",
      "id": "ex-qft-qed-two-polarizations",
      "model": "gpt-6-luna",
      "context_sha256": "61254f335fe5f65447745cb2b9ad4dd61f965aa1304c581d47125aabb9d80991"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "subject": "cex-qft-qed-torus-charge",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "batch": "44",
    "class": "accuracy",
    "subclass": "other",
    "severity": "fatal",
    "disposition": "false-positive",
    "correction": "The cited Coulomb-constraint carrier is kind lemma, domain mathematics, library mathematics, physical_scope null, with purely mathematical prerequisites. It defines a formal density and derives a conditional periodic PDE, rather than assuming an empirical Maxwell law. At fixed time periodic first derivatives cancel on opposite faces; a constant rho0 has integral rho0 L^3, nonzero for either sign. The claimed physics-to-mathematics dependency is absent and the counterexample is valid.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u44.json",
      "id": "cex-qft-qed-torus-charge",
      "model": "gpt-6-luna",
      "context_sha256": "6388367f13870421007d7ac760904e9e5fdc5065c66bb4221482a69e78cb5754"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "subject": "lem-qft-photon-local-weyl-observables",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "batch": "44",
    "class": "accuracy",
    "subclass": "citation-missing",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "The mathematical projection is supplied transitively by field-strength -> smeared-potential -> transverse-space, so the separability argument has an available valid premise. However this item conflates the pointwise matrix P_T with its bounded L2 multiplication operator and supplies no exact direct definition/citation for step 1.1. Added the existing transverse-space supplier directly, defined M_{P_T} and its range with the integral pairing, and cited its contractivity in the explicit projected-density estimate. No conclusion or hypothesis was weakened.",
    "adjudication_ref": {
      "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u44.json",
      "id": "lem-qft-photon-local-weyl-observables",
      "model": "gpt-6-luna",
      "context_sha256": "6f3e2ccffe7a2fe363db177e6832e0339aa885d65ff4d6a1ff4871466b511702"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update_required",
    "reason": "No published supplier or consumer defect was found in these assigned mathematical uses. The two direct Weyl consumers are draft frontier carriers and remain sound; no published item was edited or assigned an adjudication obligation."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_false_positive",
    "id": "lem-qft-qed-formal-matrix-ward",
    "model": "gpt-6-luna",
    "context_sha256": "f1b024e588c27bf546ce8dfd82c5c4e38f241999611708d27a7dd4469d448ef6",
    "outcome": "false_positive",
    "reason": "False scope rejection: def-qft-qed-gauge-data is a mathematics-domain definition of smooth maps, fixed Clifford matrices and symbolic unit conventions; its Definition expressly adopts no measured charge or continuum-existence premise. F3 supplies only the separate phase convention. Finite coefficient cancellation gives KS=SK=I, conjugation gives covariance, differentiating KS=I gives delta S=-S(delta K)S, and the commutator and resolvent identities follow by multiplication. No physical premise is used.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_false_positive",
    "id": "cex-qft-qed-energy-fock-limit",
    "model": "gpt-6-luna",
    "context_sha256": "a73c9db10243405d534b8f454cb239eddc0a84fa97c5ab06637f9a15db67e34d",
    "outcome": "false_positive",
    "reason": "The cited coherent-ir-obstruction carrier explicitly gives P_T(n)=I-n n^top in Facts F1 and Proof 1.1; the Construction references that exact supplier, so the profile is defined by earlier mathematical data. Thus b(n)=e-n(n dot e) is continuous, bounded, and n dot b=0. The rotated sphere patch has area at least 1/4 and |b| squared at least 3/4, giving C_b>=3/16>0. The supplier proves unit coherent vectors in D(H_ph), uniform energy <=hbar c C_b kappa and weak limit zero with no strong limit. The alleged undefined-map gap is absent.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_false_positive",
    "id": "ex-qft-qed-coherent-angular",
    "model": "gpt-6-luna",
    "context_sha256": "4b83c6e36c8f73e19f17efae9320986e4fb072c713bfa97833bc1d263243e834",
    "outcome": "false_positive",
    "reason": "False domain rejection: coherent-ir-obstruction is a mathematics-domain lemma about a specified transverse L2 space, a maximal multiplier and symmetric Fock direct sum, with symbolic positive hbar,c and Countable Choice. It assumes no physical postulate or observation. The local projection identity gives |b| squared=lambda squared(1-(n dot e) squared); the sphere chart has Gram density one and null seam/poles, so 2pi lambda squared integral_{-1}^{1}(1-u squared)du=8pi lambda squared/3. This is an admissible purely mathematical dependency and calculation.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record_fixed",
    "id": "lem-qft-qed-conserved-current-gauge",
    "model": "gpt-6-luna",
    "context_sha256": "c9633a678b95c899a2b62fdab6f80076e28efc4a31a8c748d995858626108431",
    "outcome": "confirmed_fatal",
    "reason": "Confirmed logical gap in the polarization clause: the tree supplier proves ell_a J^a=0 only for the current's own transfer ell, while the old statement shifts every such current along the unrelated fixed k. For mu=1 choose p1=p2'= (sqrt(2),1,0,0) and p1'=p2=(1,0,0,0), hence k=(sqrt(2)-1,1,0,0). A separate rest scattering current with p=p'=(1,0,0,0), u=(1,0,0,0)^T has ell=0 and J=(1,0,0,0), so k_a J^a=sqrt(2)-1 is nonzero. The repaired clause explicitly requires k=ell or -ell for each of the two supplied current forms; the kernel clause is retained. Lowering with h makes the cancellation exact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u47-countable-choice",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "subject": "ex-qftmath-x06",
    "batch": "47",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "location": "Example; Facts & Assumptions; Verification 2.1; owning contract",
    "correction": "F2 and F4 explicitly assume Countable Choice, as does F3. The original Example, Given and facts omitted that hypothesis and the contract marked nonempty-choice inapplicable, leaving the null seam/pole deduction in step 2.1 and coherent-state applications unlicensed. Added explicit AC_omega in Example/Given/A1, its direct dependency and mathematical-premise role, and A1 step tags; synchronized the owning contract and manifest without changing any formula or conclusion.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u47.json",
        "obligation": "initial:1:47:ex-qftmath-x06"
      }
    ],
    "evidence": [
      {
        "path": "items/ex-qftmath-x06.md",
        "note": "A1 states Countable Choice and its exact supplier uses; all four steps carry A1."
      },
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-batch-47.proof-contracts.json",
        "note": "A1 exact definition citation, derivation inputs and nonempty-choice boundary now record inherited countable-choice hypotheses."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "subject": "ex-qftmath-x06",
    "reason": "No new published-supplier or published-consumer defect was found. The repaired carrier is draft; existing canonical published maintenance findings remain untouched."
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-qftmath-x08",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "affected_use": "Original Verification 1.1 applied a real-domain R to hertz quantities without defining numerical coordinates.",
    "resolution": "Define formal hertz quantities and numerical coordinates in Given/A1; F1 and both verification steps now use the real-domain R. Preserved the Example and its exact stipulated values and deterministic qualifications.",
    "published_ledger_updates": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-fixed",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "id": "lem-tdmath-variational-flow-and-commutation",
    "stage": 5,
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "disposition": "fixed",
    "affected_use": "Original proof setup and steps 1.1, 2.1 and 3.1 invoked F1, F4 and F5 without restricting the ambient dimension to m≥1.",
    "reason": "The cited flow, compactness and Euclidean-completeness results exclude dimension zero, while this item’s Statement does not. Step 1.1 now proves the singleton branch directly, and the remaining argument is explicitly positive-dimensional. The strongest stated claim is preserved.",
    "adjudication_ref": {
      "model": "gpt-6-luna",
      "context_sha256": "14a03a3b46746949283cef7aba1eb34fcb3f991a869cd4738fd90085118515bb"
    },
    "post_sha256": "6b66e8ff0090b90a3a7c0f2855051f55d26d919c28e187f45f28af50de87a6b6",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-fixed",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "id": "lem-tdmath-variational-flow-and-commutation",
    "stage": 5,
    "severity": "nonfatal",
    "defect_type": "other",
    "disposition": "fixed",
    "affected_use": "Proof step 5.1 omitted the outer closing parenthesis of Y(φ_X^t(φ_Y^s(q))).",
    "reason": "Verified the digest’s presentation concern against the current item and repaired the missing parenthesis in both the proof formula and its owning derivation claim. The intended transport and uniqueness argument, Statement and dependencies are unchanged.",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-batch-5-step5-context.json",
    "post_sha256": "6b66e8ff0090b90a3a7c0f2855051f55d26d919c28e187f45f28af50de87a6b6",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "ex-qft-qed-nonempty-gauss",
    "model": "gpt-6-luna",
    "context_sha256": "61c77952e988436fe36bb470487f84625ef21bf49e003cec19ed8459b7f1428b",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 attributed draft/readiness workflow assertions to a Statement that only supplies the conditional Gauss construction. Those assertions are not needed: the normalized zero-link vector with occupations (1,0) has Gauss labels 0-(1-1)=0 and -0-(0-0)=0. Removed the status assertions and restated the actual diagonal criterion; the Example and verification remain unchanged.",
    "post_sha256": "1148d04b75059e8b9b9a53d1f4b9db97a0205683dbfd5053edd90e7f52b3a779",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "lem-qft-qed-gauss-localization",
    "model": "gpt-6-luna",
    "context_sha256": "eaabf2fb31543f4ca4ab148708015c1b7d4876f93b8c8579bdeee6316042df12",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Step 1.1 restated a basis-multiplier calculation absent from the cited Statement, although that calculation is valid and appears in supplier proof 1.1. It is redundant: the supplied physical-domain identity is already exactly the needed premise. Replaced step 1.1 by identifying Q_R=N_R and applying that identity on D_R; also removed unsupported workflow-status text from F1. Domain preservation justifies both applications in step 2.1. No missing mathematical premise or changed conclusion remains.",
    "post_sha256": "c90a01429228772177a402971d4087b47b025a80a20ed2411e732f5ebbe1f3f9",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-qft-lattice-gauge-ward",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "The L3 Statement supplies the regional-charge commutator obstruction, but does not assert the charge/flux identity attributed to it in Facts L3 and step 1.4. This is a nonfatal interface-attribution defect: L3 proof step 1.1 and its declared local-Gauss-flux supplier prove that identity on precisely the physical/boundary domain, and L3 Statement directly implies the claimed obstruction. Repaired Facts L3 to describe its actual Statement and step 1.4 to apply that conclusion with every preservation and commutation hypothesis checked; no mathematical claim was weakened.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "pthm-qft-lattice-gauge-ward",
    "action": "no_update",
    "reason": "The assigned carrier and relevant local Ward/Gauss suppliers are drafts. No published defect or changed public interface was found; this proof-only repair creates no published-consumer maintenance event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "54",
    "id": "post-qft-example-formal-observable-map",
    "model": "gpt-6-luna",
    "context_sha256": "0cf4b1ad2864ea713b53cbb59a29d072d21098a6002183870548982c8753e37e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "disposition": "repaired",
    "reason": "The Postulate attributes iq_n gamma^a to any particle, but its actual QFT-G02 supplier restricts that vertex to Dirac species. Tong section 6.5.1 instead gives scalar momentum and two-photon vertices. Replaced particle by Dirac species and made A1 explicit; the separately adopted scalar contact and decay rules are preserved.",
    "uncertain": false,
    "source_urls": [
      "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "54",
    "id": "pthm-qft-example-formal-scattering-decay",
    "model": "gpt-6-luna",
    "context_sha256": "aeefb6131cb14e1320c4c6e043f06e80e9f55e734c24d1f3b64398247a0c6308",
    "outcome": "confirmed_nonfatal",
    "disposition": "repaired",
    "reason": "Step 1.1 incorrectly equates natural photon momentum with the joule-valued P: the actual denominator is s/(hbar c)^2. This is nonfatal because A2 independently adopts the exact amplitude and the trace, current-conservation and coefficient calculations follow from that premise. Repaired the step by explicitly converting photon momentum and rescaling all four external spinors, so both current factors cancel the propagator scale and recover g^2/s.",
    "uncertain": false,
    "source_urls": [
      "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update",
    "reason": "The changed postulate has only draft direct item consumers, all examined uses remain sound, and the theorem repair changes only its proof. No defective published consumer was found or repaired in this assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u56-def-qft-free-scalar-model",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "class": "accuracy",
      "subclass": "step5-adjudication",
      "severity": "fatal",
      "location": "Definition",
      "subject": "def-qft-free-scalar-model",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "batch": "56",
      "defect_type": "logic",
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u56.json",
          "note": "The global action was asserted for arbitrary smooth real fields although its density need not be integrable (a nonzero constant background at mu>0 already diverges). The adopted postulate instead specifies a local density and finite compact-variation differences. Restored those exact conventions without changing the Fock field or Hamiltonian."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u56.json",
          "obligation": "gpt-6-luna:dfd9b0ae6bce2b2d499f8432a9a2d0502ee555ba14c2db23d4c90ba2b8460837"
        }
      ],
      "correction": "The global action was asserted for arbitrary smooth real fields although its density need not be integrable (a nonzero constant background at mu>0 already diverges). The adopted postulate instead specifies a local density and finite compact-variation differences. Restored those exact conventions without changing the Fock field or Hamiltonian.",
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u56-pthm-qft-scalar-free-properties",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "class": "accuracy",
      "subclass": "step5-adjudication",
      "severity": "fatal",
      "location": "Statement",
      "subject": "pthm-qft-scalar-free-properties",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "batch": "56",
      "defect_type": "logic",
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u56.json",
          "note": "Literal vector uniqueness is false: H Omega=0 implies H(z Omega)=0 for every complex z, including z=0 and z=2. Step 2.1 instead proves positive energy on all n>=1 sectors, hence ker H=C Omega. Corrected the Statement and identified normalized kernel vectors as phase multiples; retained the massive threshold and massless no-gap claims."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u56.json",
          "obligation": "gpt-6-luna:e9d8c66b9383e7cfd7786fdfd75b3757d769c3e9a2770adb464a2e516fa4b6f9"
        }
      ],
      "correction": "Literal vector uniqueness is false: H Omega=0 implies H(z Omega)=0 for every complex z, including z=0 and z=2. Step 2.1 instead proves positive energy on all n>=1 sectors, hence ker H=C Omega. Corrected the Statement and identified normalized kernel vectors as phase multiples; retained the massive threshold and massless no-gap claims.",
      "repair_confidence": 1
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The assigned draft interface corrections have only draft direct consumers. Examined uses remain sound; no potentially defective published consumer or supplier was discovered in this scoped review."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "58",
    "id": "pthm-qft-free-observable-domain-limits",
    "model": "gpt-6-luna",
    "context_sha256": "08468a177811a29e024644e399057015db4da62bbd55ae4e6ea793267ecedad1",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed a local typing error: x_0 is a spacetime point, whereas h has domain R^3. Declared x_0=(x_0^0,mathbf x_0) and used h at its spatial projection in the Statement and DCT calculation. The normalized spatial profile and CAR lower bound remain unchanged; this is a nonfatal notation defect with an unambiguous sound repair.",
    "post_sha256": "5725f7f51761e190dbdb175f2ce4ed9800a8b6f237f2772afd246b5824f89019",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "58",
    "id": "cex-qft-point-operator-assumption",
    "model": "gpt-6-luna",
    "context_sha256": "02698e8a235f9e30342749f4da18f2365b8d4e03210ff8ce6ee7450ed51d5844",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The repository sequence convention includes index zero, so epsilon_n=(1 metre)/n is undefined at its first index. Replaced it by epsilon_n=(1 metre)/(n+1), explicitly indexed from zero; all widths are positive and decrease to zero. The supplied scalar divergence and boundedness of norms of convergent vectors still refute exactly the original finite Fock-norm limit. This is a nonfatal indexing defect, not a failure of the divergence argument.",
    "post_sha256": "0b6f208df3e7167735b3a9ff9d6c4cbb64d1ece0cc41b0e6508601310dc9ff22",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "58",
    "id": "pthm-qft-free-observable-domain-limits",
    "status": "fixed",
    "reason": "Verified the Step-4 digest time-unit concern against def-qft-dirac-projections Definition and lem-qft-free-dirac-car-locality: W_D takes a length increment, whereas the physics theorem retains seconds-valued time. Defined Psi_phys,t(u)=Psi_ct(u) and used that definition in the Statement and proof 1.6. The CAR estimate holds for every fixed length increment, so all claimed norm divergence is preserved.",
    "post_sha256": "5725f7f51761e190dbdb175f2ce4ed9800a8b6f237f2772afd246b5824f89019",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "58",
    "id": "pthm-qft-free-observable-domain-limits",
    "status": "fixed",
    "reason": "The assigned theorem contract quoted a stale full Definition of def-qft-framework-units. The used Minkowski signature, x^0=ct, inverse-length mass parameter and shell phase remain exactly present. Replaced only the owning contract citation/excerpt with those exact current clauses and validated both assigned contracts strictly; no additional item interface change was needed.",
    "post_sha256": "5725f7f51761e190dbdb175f2ce4ed9800a8b6f237f2772afd246b5824f89019",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "def-tdmath-forward-sector-hypotheses",
        "model": "gpt-6-luna",
        "context_sha256": "654771ff357f7947ab2784b6869f74c9486e453a68f4136d92bba888b0b8e7f1",
        "outcome": "confirmed_fatal",
        "status": "fixed",
        "reason": "The preparation interpretation referred to a declared relation without binding its set, mass invariant or binary relation. Added the preparation set, M(Pi(c))=m(c), a chosen equal-mass Q and A prec B iff Q(Pi(A),Pi(B)); A1–A7, S1–S3 and all represented weights are unchanged. The compound supplier defines mass only.",
        "uncertain": false,
        "defect_type": "logic"
      },
      {
        "id": "def-tdmath-forward-signed-comparison",
        "model": "gpt-6-luna",
        "context_sha256": "bf938be87991e58efa0b6df880ef50fa161ae50885594139fe30a6a6ca818853",
        "outcome": "false_positive",
        "status": "false-positive",
        "reason": "u and v are raw coefficient maps, not coefficients in a J-state expansion. For J_Gamma(x)=w_Gamma e_(Gamma,x), the raw coefficient already equals w_Gamma. Thus the proposed weights 2 and 1 have raw totals 2 and 1, not equal totals. Sum(v-u)=0 implies m(d+)=m(d-); no weight is applied twice.",
        "uncertain": false
      },
      {
        "id": "cex-tdmath-bare-contact-interface-incoherent",
        "model": "gpt-6-luna",
        "context_sha256": "705e98177f7b62ce3ea1917b35d791c811502f3636c56c405bdb3bcaac44b596",
        "outcome": "confirmed_fatal",
        "status": "fixed",
        "reason": "The original equality interpretation of thermal equivalence was not realized by the imported accessibility definition. Replaced it by an equal-mass compound equivalence generated only at mass two: x~T x holds, but its distinct tagged join fails thermal equivalence with x at mass three. Universal equal-mass accessibility supplies the second model. Neither model claims A/S/T axioms beyond the bare coordinate premise.",
        "uncertain": false,
        "defect_type": "logic"
      },
      {
        "id": "ex-tdmath-logarithmic-coherence-witness",
        "model": "gpt-6-luna",
        "context_sha256": "ccb1ce6a009df1292d14577eba6b28e8603e450ee7bc991c3b03859480d93fa3",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Old step 1.5 used undefined theta and its thermal-equivalence criterion before step 2.1. Moved this check to 2.2 after defining theta_T=U/C_T and proving equivalence iff equal labels by the unique entropy-maximizing split. Also checked A7/S1–S3, equal-state T2, T4/T5 and C1 for arbitrary finite joined simple types, preserving all public Example formulas.",
        "uncertain": false
      },
      {
        "id": "def-tdmath-decorated-chain-costs",
        "model": "gpt-6-luna",
        "context_sha256": "e6154b3d1877fb910fb137b0f9dfde3f793f8ae03a36c2a0de662411fc7f102c",
        "outcome": "confirmed_fatal",
        "status": "fixed",
        "reason": "Reversible identifications and their commuting state maps were unbound. Enumerated structural identifications with the identity coefficient-map transport, and specified optional additional bijections preserving composition, mass, entropy and mutual accessibility with inverse/composition/product/scaling coherence. These are declared hypotheses, not consequences of calibration; arbitrary product states are not identified with equal-state splits.",
        "uncertain": false,
        "defect_type": "other"
      },
      {
        "id": "def-tdmath-cost-offset-difference-space",
        "model": "gpt-6-luna",
        "context_sha256": "08af972277f2f0d7a052ee2090fa8980e3700b1fa00c83279bb779712ccc03cf",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "The Definition declared positive scaling and pair negation but omitted scalar multiplication at zero and at negative reals. Added 0v=[(1,1)] and t[(A,B)]=[((-t)B,(-t)A)] for t<0. The actual well-definedness proof 3.1–5.1 gives representative-independence and all real vector laws for these exact formulas, without zero or negative type scaling.",
        "uncertain": false
      },
      {
        "id": "thm-tdmath-unattained-cost-entropy-inference",
        "model": "gpt-6-luna",
        "context_sha256": "653eecd9470d71be150e5a328b520ecb865778408d746e9350d038bc43d2006a",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "The mathematical sequence in F5 is exact: the supplier Facts F2–F3 interpret n+1 as the canonical embedded successor. Only the attribution to the supplier Statement was inaccurate. Corrected that attribution. Independently checked both implications: finite witness tolerance, same-composition input/output matching, sequential use of all edges, common-output cancellation and fixed positive-meter stability; no attained infimum or simultaneous witness choice is required.",
        "uncertain": false
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "companion": "research/DEFECT-LEDGER.md",
    "id": "lem-qft-finite-gaussian-wick-moments",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "reason": "The final Statement modifier falsely attributes a covariance-pairing computation to an absolute polynomial moment. With N=1, C=1 and P(q)=q, the odd pairing sum is zero but E|Q|=sqrt(2/pi)>0, as follows directly by integrating the supplied scalar density over the two half-lines. Step 2.1 proves absolute integrability, while steps 3.1–5.1 compute signed expectations. The repair separates these two claims without changing the Wick formula or hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-qft-finite-gaussian-wick-moments",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Owning contract boundary records cite the wrong proof steps: empty is at 5.1, variance zero is at 1.1 and 3.1, and the k=1 odd diagonal is at 3.1. The mathematical proof itself treats each correctly.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "companion": "research/DEFECT-LEDGER.md",
    "evidence": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_resolved_nonfatal",
    "id": "thm-qft-bounded-regulator-dyson-factorization",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "61",
    "model": "gpt-6-luna",
    "context_sha256": "887f9fb9c1c0a3a1166645704a3e2afdf939645567d38a46a88bbcb3a3025bfa",
    "outcome": "confirmed_nonfatal",
    "reason": "The undefined adjective regulated occurs only in the title; the precise Statement and all seven proof paragraphs establish bounded strongly continuous self-adjoint evolution, without a regulator limit. Removed the adjective while preserving every mathematical assertion.",
    "post_sha256": "8fc73ef1a1cc31991c54c994c7ed462e2ea26f2c1648a1efe98fb0da415af882",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_resolved_nonfatal",
    "id": "def-qft-regular-formal-time-ordering",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "phase": "initial",
    "round": 1,
    "unit": "61",
    "model": "gpt-6-luna",
    "context_sha256": "bf7d02210210c76a92626e6c689aa7dbb5e047af3e4011f0b0b06b344302b5c9",
    "outcome": "confirmed_nonfatal",
    "reason": "The block-kernel formula uses an unbound X, although the surrounding relative kernel, lift and regular inputs uniquely specify four dimensions. Set X=R^4, type each real smooth field on X, and specify zero-variable and coordinate-volume conventions; contraction formulas and scope are preserved.",
    "post_sha256": "ba2a60b014f03d660b777fb99867dd0805adb8f9ceb8079dfb69a0dfec384329",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "Both repaired carriers and their two direct item consumers are draft frontier items. No published affected use or defective published supplier was discovered in this assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u62-extension-family",
      "run": "physics-td-qft-rpm-62-2026-10-14",
      "class": "accuracy",
      "subclass": "other",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-qft-distribution-scaling-degree",
      "batch": "62",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "correction": "Define the unrestricted extension family E(t) and its exact-degree subfamily E_delta(t), including the test-level restriction condition; retain the original scaling convention and defer existence and affine classification to proved results.",
      "evidence": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u62.json",
          "note": "The original Definition stopped at individual extensions. The added family equals the classification proposition's existing set; all five direct frontier consumers retain sound affected uses."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u62.json",
          "id": "def-qft-distribution-scaling-degree",
          "model": "gpt-6-luna",
          "context_sha256": "d05e1c112f2fabe542cebff13c30a10126b984c306dfa9e6e9494a6e6c600b99"
        }
      ],
      "at": "2026-10-14T21:00:10.356Z",
      "subclass_note": "Missing promised extension-family definition; existing assertions and locally defined consumer family were logically sound."
    }
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-def-td-adiabatic-accessibility",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "def-td-adiabatic-accessibility",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "dependency_citation",
    "location": "definition",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "The original Q[P] predicate exceeded its supplier domain. The current process supplier now defines Q on all P_s; the Definition explicitly states that domain and preserves the original admitted witnesses without extending the core-only energy law.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "def-td-adiabatic-accessibility",
        "obligation": "initial:1:7:def-td-adiabatic-accessibility"
      }
    ],
    "evidence": [
      {
        "path": "items/def-td-adiabatic-accessibility.md",
        "sha256": "695405812f4a039669feccdadb99d98b4effa2030081b2ce62522f245d703705",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-def-td-scaled-products-and-comparison",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "def-td-scaled-products-and-comparison",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "dependency_citation",
    "location": "definition",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "The general bulk postulate designates optional scale tags with partial B_c,lambda domains, so universal scaling was unsupported. Added an explicit fully scalable family with bijective full-domain coordinate maps, full finite products, and reversible coherent tag/preparation transport; no empirical universal-scaling claim is inferred.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "def-td-scaled-products-and-comparison",
        "obligation": "initial:1:7:def-td-scaled-products-and-comparison"
      }
    ],
    "evidence": [
      {
        "path": "items/def-td-scaled-products-and-comparison.md",
        "sha256": "e86e3c131395b6176a73ea97dff4aec360b90d0337bf90e8067f5aa0f7827b1a",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-post-td-accessibility-a1-a6",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "post-td-accessibility-a1-a6",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "dependency_citation",
    "location": "postulate",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "A4 previously applied every positive scale without total scale-map existence. Its Postulate now expressly uses the fully scalable supplier family and coherent transport, so A4–A6 have defined operands. A3 spectator availability follows from full finite state products; all are adopted model assumptions.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "post-td-accessibility-a1-a6",
        "obligation": "initial:1:7:post-td-accessibility-a1-a6"
      }
    ],
    "evidence": [
      {
        "path": "items/post-td-accessibility-a1-a6.md",
        "sha256": "3327df59cbbc59efdc9514f1df0ff7b47d1aa596b97227f501da9dc1edc753fb",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-post-td-thermal-join-axioms",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "post-td-thermal-join-axioms",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "logic",
    "location": "postulate",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "The old second T2 clause repeated A5 and omitted thermal equilibrium of the scaled copies. Restored the typed join (u,tv,(1-t)v) equivalent to the separated scaled pair; equivalence of that pair to x remains supplied separately by A5 and A2. Source IV.A T2 has exactly the join-to-pair clause.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "post-td-thermal-join-axioms",
        "obligation": "initial:1:7:post-td-thermal-join-axioms"
      }
    ],
    "evidence": [
      {
        "path": "items/post-td-thermal-join-axioms.md",
        "sha256": "bfd2271dd8043993dd26a1921becc4c1fbbfd35416b8dbbe332ccf356cec49da",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-ex-td-positive-log-contact-witness",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "ex-td-positive-log-contact-witness",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "dependency_citation",
    "location": "example",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "Equal formal mass does not authorize a change of primitive composition. The example now explicitly supplies one formal endpoint channel per equal-mass type pair, exact configuration/endpoints/protocol/transfer data and admitted records determined by the entropy inequality. This preserves all original comparisons and supplies their witnesses. Scaled T2 is also checked against the actual joined state.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "ex-td-positive-log-contact-witness",
        "obligation": "initial:1:7:ex-td-positive-log-contact-witness"
      }
    ],
    "evidence": [
      {
        "path": "items/ex-td-positive-log-contact-witness.md",
        "sha256": "3d9eb57e7c29e7ecca7b276b703ddb9caea8c84b3295df76448ea5b68ba3b6a4",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-pthm-td-entropy-under-product-comparison",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "pthm-td-entropy-under-product-comparison",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "logic",
    "location": "statement-and-proof",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "The contact supplier Proof1.1 already constructs a weighted encoding, so omission from its Statement alone is not a fatal output gap. However the consumer attributed the construction to its pairwise fact and, more seriously, quantified over finite join-closed families, a vacuous condition for retained tagged joins. Repaired the actual missing full-contact premise using closures of finite generators, constructed the encoding directly from exact mathematical definitions, and proved reversible extension from primitive products to joined states. The original entropy conclusion is retained.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "pthm-td-entropy-under-product-comparison",
        "obligation": "initial:1:7:pthm-td-entropy-under-product-comparison"
      }
    ],
    "evidence": [
      {
        "path": "items/pthm-td-entropy-under-product-comparison.md",
        "sha256": "0bf36654812f0e82eaa513d6fb57d0c1302595e631230df9aa46f385edb8e1c0",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-def-td-cross-type-reaction-network",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "def-td-cross-type-reaction-network",
    "severity": "fatal",
    "disposition": "fixed",
    "subclass": "dependency_citation",
    "location": "definition",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "correction": "A core process has six fields while a channel has seven, and whole-process transfer functionals were not supplied as maps of r alone. Added the fixed-boundary insertion/deletion bijection onto the exact core admitted subset and used complete-record transfer maps. No-matter-crossing and kinetic/external restrictions are carried through. Also separated empty raw channel data from the nonempty reflexive A1–A6 network subclass.",
    "adjudication_ref": [
      {
        "path": "research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u7.json",
        "id": "def-td-cross-type-reaction-network",
        "obligation": "initial:1:7:def-td-cross-type-reaction-network"
      }
    ],
    "evidence": [
      {
        "path": "items/def-td-cross-type-reaction-network.md",
        "sha256": "bc09aa97318c42acf358ab75072a3791df55a8c8dd826a7ae1215985cc996a1b",
        "note": "Current native itemHashGuard; this repair is not independently judged or certified."
      }
    ],
    "class": "accuracy"
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-unassigned-thermometer-permutation",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "cex-td-degenerate-thermometer-comparison",
    "severity": "fatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "Under def-td-scaled-products-and-comparison permutation identification, (1,3) and (3,1) are the same two-unit-copy compound. Counterexample1.1 and2.1 therefore exclude reflexive accessibility for this very state; the proposed coordinate relation does not descend to the compound state space.",
    "affected_use": "Counterexample1.1 starts at (1,3), claims (3,1) inaccessible, and Counterexample2.1 reverses these representatives.",
    "invalidated_claim": "Those two representatives cannot witness product incomparability or failure of an additive entropy representation on the declared quotient.",
    "minimality": "Use genuinely different factor multisets with a proved permutation-invariant forward relation, or explicitly adopt and define ordered apparatus slots consistently with the supplier. Do not merely relabel identical copies.",
    "evidence": [
      {
        "path": "items/cex-td-degenerate-thermometer-comparison.md",
        "sha256": "82af782b4198a2e23bcc17b852548fed9b2c61119960d8f940b228ec1f76b856"
      }
    ],
    "uncertain": false
  },
  {
    "target": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-td-qft-rpm-62-2026-10-14-step5-initial-r1-u7-unassigned-contact-finite-family",
    "run": "physics-td-qft-rpm-62-2026-10-14",
    "batch": "7",
    "subject": "pthm-td-contact-product-comparison",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "The Statement quantifies a declared finite family closed under thermal joins. Repeated self-joins retain distinct tags and double positive formal weight, so no nonempty literal finite family satisfies this condition. This is a nonvacuous applicability/interface clarification, not a counterexample to the conditional deduction.",
    "affected_use": "Statement first sentence: For every declared finite family of simple-system domains closed under the thermal joins.",
    "invalidated_claim": "The literal interface cannot supply contact calibrators for any actual nonempty finite-generator model family.",
    "minimality": "Specify the possibly infinite join closure of finitely many generators, matching the actual mathematical calibrator Statement; preserve the full A1–A7/S1–S3/T1–T5/C1 branch and pairwise conclusions.",
    "evidence": [
      {
        "path": "items/pthm-td-contact-product-comparison.md",
        "sha256": "8b7f0538ef4cda71545e28623dcc2ffabc54654a73378d04a16d6c2a1f902085"
      }
    ],
    "uncertain": false
  },
  {
    "target": "research/published-consumer-supplier-ledger.md",
    "action": "no_change_proposed",
    "reason": "All direct item consumers identified for these seven changed physics interfaces are draft original-frontier items; both owning pages are draft. No published consumer or outside maintenance carrier was found or edited. The two unassigned discoveries route to frontier owners, not published maintenance.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-tdmath-smooth-partial-legendre-transform-differential",
    "model": "gpt-6-luna",
    "context_sha256": "82665c8bc55ebb2ac69987768cd604ff342259f411af90f236be491b684c5a0f",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The supplier defines smooth as C-infinity, whereas the hypotheses and conclusion are C2. The inverse identity, chain rule and bilinear product rule cancel x dot dg, and the resulting C1 coefficients make the transform C2. Only the inaccurate title was changed; Statement and proof are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-td-isentropic-compressibility",
    "model": "gpt-6-luna",
    "context_sha256": "7149a5cd476ee930a1d1e6905650112b1124215e07bc06c56c731a222e449e59",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The SI supplier gives U in J, V in cubic metres and Pa=J/m3, but does not assign a unit to p. The existing local-energy supplier gives p=-U_V at fixed entropy and amounts, which yields Pa. The definition now cites that identity before dimensional conversion; kappa_S=-V^-1 V_p at fixed s,n is unchanged. Physical scope now states the supplied C2 regularity explicitly."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-td-useful-work-bound",
    "model": "gpt-6-luna",
    "context_sha256": "aaf2a9a0dffb5391e604eac1d75aba7aa6d00ea3c669d08dfd0b687db56af4c4",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "A3 originally stated only isolation and an entropy sum; it supplied neither an admitted compound core record nor the same feasible-set endpoint association and admitted independent separated entropy split required by F2. Thus step 1.1 could not infer nonnegative total entropy: this is a logical missing-hypothesis defect. The repaired conditional model supplies both records, the feasible endpoint association, all device and zero-energy-change conditions and the admitted entropy split, preserving the bound and proving its equality caveat.",
    "defect_type": "logic"
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no_update",
    "reason": "The direct-use inventory contains only the draft compressibility ratio theorem and the owning draft page. No published consumer or published repair was identified in this assigned scope."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-qft-finite-wick-quadratic-pair",
  "pthm-qft-free-fock-statistics",
  "ex-qft-mode-occupations",
  "pthm-qft-scalar-free-properties",
  "ex-qft-scalar-vacuum-correlation",
  "lem-qft-test-frechet-uniform-scaling-order",
  "thm-qft-finite-scaling-degree-extension",
  "prop-qft-local-counterterm-jet-classification",
  "ex-qft-unique-subcritical-extension",
  "lem-qft-free-time-ordered-kernel",
  "post-qft-formal-qed-coefficients",
  "pthm-qft-example-formal-scattering-decay",
  "ex-qft-x04",
  "ex-qft-x05",
  "ex-qftmath-mode-domain",
  "thm-rpm-h-temporal-shell-reduction",
  "thm-rpm-h-complete-integral-coordinates",
  "ex-rpm-h-free-relativistic-complete-integral",
  "ex-rpm-h-shifted-chart-negative-energy",
  "thm-rpm-h-constraint-consistency",
  "ex-rpm-h-two-shell-consistency-obstruction",
  "ex-rpm-incomplete",
  "pthm-rpm-free-massive-and-null-geodesics",
  "ex-rpm-null-scale",
  "pthm-rpm-schwarzschild-null-scattering",
  "ex-rpm-schwarzschild-null-critical-impact",
  "ex-rpm-schwarzschild-radial-stability-values",
  "ex-rpm-straight",
  "pthm-td-intensive-coexistence-conditions",
  "ex-td-clapeyron-linear-branches",
  "ex-td-finite-mode-thermal-ensemble",
  "post-td-canonical-protocol-preparation",
  "post-td-stationary-bath-kernel",
  "pthm-td-finite-jarzynski",
  "ex-td-finite-quench-work-fluctuation",
  "post-td-first-law-energy",
  "ex-td-first-law-sign-convention",
  "ex-td-forbidden-pair-beta-zero",
  "ex-td-infinite-mode-trace-divergence",
  "ex-td-irreversible-adiabatic-compression",
  "ex-td-local-entropy-maximum-below-global",
  "ex-td-local-equilibrium-profile",
  "ex-td-mean-vs-trial-outcome",
  "ex-td-no-automatic-equilibration",
  "ex-td-noncompact-entropy-supremum-not-attained",
  "post-td-equilibrium-ensemble-sampling",
  "thm-tdmath-poisson-reference-count-properties",
  "post-td-grand-variational-phase-uniqueness",
  "ex-td-nonunique-variational-phases",
  "post-td-mechanical-conjugate-identification",
  "ex-td-nonzero-isothermal-work-loop",
  "ex-td-phase-rule-single-component",
  "post-td-equilibrium-join-coherence",
  "post-td-universal-thermal-range",
  "ex-td-positive-log-contact-witness",
  "ex-td-reactive-phase-rule-three-component",
  "pthm-td-interior-exchange-equilibrium",
  "ex-td-retained-volume-thermal-equilibrium",
  "ex-td-two-particle-hard-core-preparation",
  "ex-td-two-site-no-thermalization",
  "thm-tdmath-decreasing-integrable-tail-free-cube-pressure",
  "thm-tdmath-canonical-interior-density-limit",
  "thm-tdmath-canonical-grand-duality",
  "pthm-td-stable-tempered-free-cube-grand-pressure",
  "lem-tdmath-superstable-cell-energy-bound",
  "thm-tdmath-superstable-van-hove-pressure",
  "lem-tdmath-superquadratic-positive-core",
  "thm-tdmath-uniform-tempered-exterior-pressure",
  "thm-tdmath-van-hove-fixed-n-limit",
  "pthm-td-qualified-van-hove-and-exterior-limit",
  "ex-td-volume-sized-external-field",
  "ex-tdmath-close-packing-endpoint",
  "lem-tdmath-periodized-empirical-field-stationary-density",
  "thm-tdmath-specific-entropy-density",
  "thm-tdmath-local-tame-entropy-compactness",
  "lem-tdmath-periodic-law-local-tame-transfer",
  "lem-tdmath-conditional-log-density-convergence",
  "thm-tdmath-spatial-mean-information",
  "thm-tdmath-continuum-variational-pressure",
  "thm-tdmath-retained-hard-zero-beta-limit",
  "ex-tdmath-hard-core-zero-beta",
  "ex-tdmath-logarithmic-coherence-witness",
  "ex-tdmath-poisson-intensity-information-density",
  "ex-tdmath-superlinear-count-test-is-not-tame",
  "ex-tdmath-unit-poisson-reference-information-zero",
  "lem-qft-dirac-covariance-spectrum",
  "lem-qft-photon-smeared-potential",
  "lem-qft-qed-coherent-ir-obstruction",
  "lem-rpm-shell-tangent-force-ivp",
  "lem-tdmath-canonical-empirical-field-conditioning",
  "post-qft-compact-lattice-gauge-model"
]


