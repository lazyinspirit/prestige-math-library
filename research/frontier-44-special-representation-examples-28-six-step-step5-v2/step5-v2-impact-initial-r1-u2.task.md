# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"impact-initial",round:1,unit:"2",input_sha256:"89168a1003544af26f9b2a04174bbe9d8b2e93b7a98885655e843c81f31711c5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support",
    "outcome": "false_positive",
    "reason": "False positive: the published Hom theorem Proof 1.1–2.1 proves the flagged-source form and exactness degree by degree, then projects the word target idempotent; Proof 3.1 proves the dual flagged-target exactness. Its special-Hom supplier explicitly covers arbitrary flagged sources/targets. These canonical-flag sequences license both lifts in classification Proof 5.1; the p_x image equality makes the composite identity on the top layer, hence nonnilpotent and invertible in the finite local endomorphism algebra.",
    "repair_status": "no_defect_no_item_edit",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal convention defect: reduction has degrees 2,0,0,-2 and hence graded dimension v^2+2+v^{-2}. Corrected Example and Verification 1.1 to distinguish this polynomial from its v=1 ordinary dimension 4, and clarified ordinary dimensions in 4.1. The explicit cyclic-generator proof gives scalar degree-zero endomorphisms, hence two-letter indecomposability; KL triangularity and the supplied rank-two triple splitting are preserved.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "def-invariant-intersection-form-on-a-bott-samelson-bimodule",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal dual-type error in Remark (vi): right S-duality does not give real vector-space duality of the unreduced polynomial bimodule. For the empty word S, degree 2 is nonzero but real graded dual degree 2 is zero. Replaced that sentence with the finite homogeneous right-basis argument identifying the reduction with its real dual; Definition is unchanged. The trace and induced unit-determinant pairing remain perfect.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs",
    "outcome": "false_positive",
    "reason": "False positive: the actual invariant-form supplier proves reduced-word bottom positivity in Proof 1.1, then normalizes the intrinsic form to bottom value one in Proof 2.1. Positive deletion coefficients and at least one reduced deletion give a strictly positive top coefficient; nonreduced deletions vanish by normalized degree spans. This proof establishes the precise normalization assertion used here without assuming hard Lefschetz. The HR definition correctly includes S(x), while embedded HR is unconditional.",
    "repair_status": "no_defect_no_item_edit",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "def-local-intersection-form-for-a-soergel-summand",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal type defect: invariant S-valued forms identify finite right-free bimodules with D B=Hom_{-S}(B,S), not their real algebraic duals. Replaced the ill-typed real transpose citation by the explicit degree-zero bimodule formula g*=Phi_By^{-1} Dg Phi_M and its invariance proof. This preserves the actual local form, symmetry and positive scalar comparison; all three direct item consumers use only those unchanged properties.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed fatal logic defect in Statement (d): a stable graded direct summand need not have centered hard Lefschetz, as the top line of the two-degree string shows. Added an operator-stable complement to the direct-summand clause and proved restriction by blockwise injectivity and surjectivity. The symmetric-dimension HR clause is unchanged. Parts (a)–(c) already have bimodule inclusion/projection commuting with rho and remain sound; Hodge theorem F5/8.1 uses precisely these unchanged top-summand clauses.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "lem-local-intersection-forms-embed-in-primitive-lefschetz-forms",
    "outcome": "false_positive",
    "reason": "False positive: Hom theorem Proof 1.1–2.1 proves freeness and rank additivity for arbitrary Delta-filtered sources and Soergel targets, including Delta_y and the quotient Q; its special-Hom supplier explicitly states the flagged domains. The positive-degree kernel, Hilbert-series comparison, right-split graph-support inclusion, and HR(y) then give injective bottom evaluation and the adjoint isometry. Rechecked F4/3.1 against the corrected right S-dual definition: these uses remain well typed. No item edit is needed.",
    "repair_status": "no_defect_no_item_edit",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "thm-deformed-hard-lefschetz-for-b-x-b-s",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Confirmed dependency-citation gap: F5/F7 dropped the actual multiplicities m_{z,1} and their parity zeros; additionally F7 imported a tensor perverse bound not stated by the linearity theorem. Restored multiplicities everywhere and proved the bound in 4.2: under S(z), actual standard filtration multiplicities make mu(u,z) nonnegative, the ascent product is perverse without S(zs), descents contract, and stupid-filtration triangles preserve the shift bound. The forward cancellation and ker(d3) form identity then give the three hL cases with their existing hypotheses. Statement unchanged.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1212.0791v2"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "thm-hodge-riemann-for-indecomposable-soergel-bimodules",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal hypothesis misquotation in F7: unshifted ascent decomposition needs ys>y and S(<ys); descents have shifts ±1. Replaced F7 with both exact cases and separated the positive comparison of B_y forms, which needs S(y) alone and passes to induced tensor forms. The induction uses only that latter comparison in 4.1/6.1, with HR(z) explicitly supplied to the deformed theorem. Each new ascent is proved before the next character, and all positive descents follow after S and HR, so no circular hypothesis is introduced.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1212.0791v2"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_round_adjudication",
    "id": "thm-soergels-character-conjecture",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed fatal logic defect in the descent clause: the triangular matrix is only the right-reduced operator; positive-degree right multiplications survive on the unreduced bimodule. For rank one rho=alpha_s/2 and zeta=1, middle multiplication squares to right multiplication by alpha_s^2/4, contradicting the claimed unreduced square-zero off-diagonal part. Corrected Statement and Proof 3.1 to the right reduction, preserving the character identity, all Hodge conclusions, positive descent implication and zero-parameter failure. Both direct consumers use only the unchanged character equality.",
    "repair_status": "locally_repaired_pending_engine_rejudgment",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "append_scoped_observation",
    "ids": [
      "thm-the-type-a-soergel-hom-formula",
      "lem-type-a-soergel-special-hom-formula",
      "lem-type-a-top-support-layers-are-controlled-by-reflection-localization"
    ],
    "reason": "Current published special-Hom Statement covers the flagged domains; Hom Proof 1.1–3.1 proves the extensions to summands and canonical-flag exactness, while top-support Proof 2.1 proves the right splitting used in evaluation. The two assigned flagged-Hom rejections are false positives against these actual proofs. No new published defect found, no published bytes edited, no historical defect category guessed, and no replacement whole-item audit or independent acceptance claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u10.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_proposal",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u11-1",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:54:13.213267+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "def-removable-border-strip-and-height",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "11",
      "group": "step5-v2-initial-r1-u11",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "Exact tuple, counterexample and completed repair are recorded in decisions and reviews for def-removable-border-strip-and-height."
        }
      ],
      "repair": "Corrected Remarks to permit lambda/lambda as the empty skew diagram, while excluding it from removable border strips; Definition unchanged.",
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "obligation": "def-removable-border-strip-and-height / gpt-6.1-sol / 30df7d47a191f604ca0a832665c14dfe57b8edd4b58ccd9a1fd83bc9983c59cf"
        }
      ],
      "post_sha256": "500dbd321e0d59e55b89c22cdba7e2b7811b65d6831a8b705c26da56ce18da16"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_proposal",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u11-2",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:54:13.213267+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "statement",
      "subject": "cor-no-removable-cycle-length-strip-forces-a-character-zero",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "11",
      "group": "step5-v2-initial-r1-u11",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "Exact tuple, counterexample and completed repair are recorded in decisions and reviews for cor-no-removable-cycle-length-strip-forces-a-character-zero."
        }
      ],
      "repair": "Replaced cycle-type part equality by c_r(rho)>0 in Statement/F3, bounded the indexed r by n, and synchronized the owning manifest and contract.",
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "obligation": "cor-no-removable-cycle-length-strip-forces-a-character-zero / gpt-6.1-sol / 7322c03024331d1f6fd376c8afc7406a4df411afa7d62c9a782f1d1b5d387df0"
        }
      ],
      "post_sha256": "b3924c76d5be8723ff8aed4231dbc237d515e03046b5ee0fd9709c3c10d5c0f9"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append_proposal",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u11-3",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:54:13.213267+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "cor-hook-divisibility-defect-zero-vanishing-criterion",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "11",
      "group": "step5-v2-initial-r1-u11",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "Exact tuple, counterexample and completed repair are recorded in decisions and reviews for cor-hook-divisibility-defect-zero-vanishing-criterion."
        }
      ],
      "repair": "Replaced geometric equality of hooks and strips by the size-existence equivalence, stated the actual r-cycle premise, and synchronized the owning contract; Statement unchanged.",
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u11.json",
          "obligation": "cor-hook-divisibility-defect-zero-vanishing-criterion / gpt-6.1-sol / 14c60929a88d668861f1588caaf0d343ec7787df31c7a3d69d55ccd2094ff620"
        }
      ],
      "post_sha256": "828d49c21a2458605a5075a34c6e8e711eb38803cd82a724901a9f1ceab9c08f"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_update",
    "reason": "The only changed Statement belongs to the draft cycle-length corollary. Its complete direct item-consumer inventory consists of three draft original-frontier items; no published or outside-frontier consumer was found. No published carrier was repaired or adjudicated. The two unassigned frontier findings are routed to ordinary frontier owners through downstream_details.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "id": "lem-dj-bridge-row-permutation-module-standard-action",
    "defect_id": "f44-six-step5-initial-r1-u12-left-right-criterion",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Proof step 1.1",
    "reason": "The counterexample g=(3,1,2), i=1 has left ascent but right descent. Step 1.1 falsely inferred T_g T_i=T_gs_i from the left ascent. The later proof uses the correct left product in 2.1 and right length in 2.2, so the false extra assertion is nonfatal to the stated result. Repaired by explicitly separating the two hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "id": "thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell",
    "context_sha256": "27af790b0de56e70f5013ab97b48d7066447932130f7b1db366a63d1919e136a",
    "disposition": "false_positive",
    "reason": "F2 explicitly cites a map proved inside the straightening lemma, not a map in its numbered Statement. The supplier Proof step 1.4 constructs exactly that map and proves descent: theta(m^nu_uv) lies in H y_nu H for nu strictly dominating mu; conjugation gives lambda strictly dominating nu-prime, so x_lambda H y_nu=0 by the parabolic annihilation lemma. Left multiplication therefore kills theta(I^strict-mu), hence theta(K_mu). The same step proves H-linearity and surjectivity from F(m0)=z_lambda. This is a complete supplied argument, so the claimed absence is false.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_owner_routing",
    "id": "lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations",
    "defect_id": "f44-six-step5-u12-same-column-dominance-alert",
    "severity": "fatal",
    "defect_type": "logic",
    "disposition": "owner_repair_pending",
    "owner_unit": "13",
    "scope": "unassigned_draft_frontier",
    "path": "items/lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations.md",
    "source_snippet": "T_am_{st}\\equiv-m_{st}+\\sum_{u\\lhd s}c_um_{ut}",
    "affected_use": "The Statement same-column refinement and F1 assert only less-dominant corrections; Proof 1.2 instead describes more-dominant corrections. Proof 2.1 uses the correction direction in its least-tableau eigenspace argument.",
    "invalidated_claim": "At q=1 over Q for lambda=(2,1), s=[1 3 / 2], t=t0=[1 2 / 3], a=1, put x=1+T1 and m_st=T2x. The exact identity T1(T2x)+T2x+x=x_(3) gives T1m_st=-m_st-m_t0t0 modulo higher shapes. Since s is the least standard tableau, the claimed lower correction sum is empty, while m_t0t0 is nonzero by Murphy basis independence.",
    "minimality": "Owner must correct the displayed dominance direction and recheck the eigenspace/basis argument in Proof 2.1-3.1 that uses that direction; changing only the formula does not verify those later uses. No edits or adjudications of this outside-lane item were performed.",
    "reason": "Verified the digest counterexample by exact group-algebra multiplication and inspected current Statement, F1 and Proof 1.2-3.1. This draft frontier item is assigned to unit 13; route there, not to published maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published mathematical defect was discovered in this unit. The separate same-column alert concerns a draft original-frontier item owned by unit 13, so it belongs in owner routing and the defect ledger, not in the published-item ledger.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-murphy-elements-and-murphy-tableau-elements",
    "outcome": "confirmed_nonfatal",
    "reason": "The diagonal m_tt in H and the fixed-first-index class m_t in the Specht cell are different carriers. Removed the conflicting m_t shorthand while preserving the symmetrizer, tableau action, all m_st formulas and their proofs.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cell-form-is-associative-and-its-radical-is-a-submodule",
    "outcome": "confirmed_fatal",
    "reason": "In the one-cell algebra M_2(F), E_u1 E_1v=E_uv varies with u,v, whereas its coefficient equals 1. Corrected the Statement to assert independence only of the scalar coefficient; the existing two-expansion argument proves precisely this and all form/radical identities.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-hh-quantum-presentation-and-tensor-action-descent",
    "outcome": "confirmed_nonfatal",
    "reason": "The unparenthesized coproduct equality omitted the required associator and tensor-unit maps. Added the proved elementary-tensor coherence dependency and explicitly compared alpha(Delta tensor id)Delta with (id tensor Delta)Delta in one codomain, and composed counits with lambda/rho. Generator computations remain unchanged.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-type-a-hecke-specht-module-and-cell-form",
    "outcome": "confirmed_nonfatal",
    "reason": "For n=2 and lambda=(2), (1+T_1)T_1=q(1+T_1), so the diagonal span is indeed a submodule. Replaced the universal prohibition with the correct need-not-be-stable caveat and its one-row exception; the fixed-first-index module and form definitions are unchanged.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-hecke-jucys-murphy-action-is-dominance-triangular",
    "outcome": "false_positive",
    "reason": "F2 explicitly cites the supplier proof, not merely its Statement. In lem-dj-bridge-murphy-cellular-basis-and-cell-form, step 2.1 proves strict row-tableau support under length-additive multiplication, steps 4.1–5.1 prove increasing same-shape straightening, and step 9.1 removes the higher shapes. Applying 2.1 with w=s_i gives precisely the support used in 2.2; no stronger unproved interface is required.",
    "status": "false_positive",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": false,
    "uncertain": false,
    "source_urls": [
      "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations",
    "outcome": "confirmed_fatal",
    "reason": "In H_3 at z=1, with A=(1 2 / 3), B=(1 3 / 2), T_1 m_BA+m_BA+m_AA=x_(3). Since A strictly dominates B, the nonzero correction contradicts u strictly below s. Reversed both inequalities, stated the same-column hypothesis, and removed the circular claim that cellularity alone supplies the refinement; the proof uses increasing Garnir straightening.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [
      "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-type-a-q-schur-algebra-and-weyl-modules",
    "outcome": "confirmed_fatal",
    "reason": "The defining endomorphism algebra exists for every d,n, but its regular-type summand requires d>=n. Added that hypothesis and padded omega=(1^n,0^(d-n)); for d=1,n=2 only type (2) occurs. The Hom/cellular construction, Weyl modules, all weights and the d<n range are preserved.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one",
    "outcome": "false_positive",
    "reason": "F4 expressly cites the complete local separated-range proof. The supplier step 5.1 proves all seminormal norms nonzero: the canonical norm is a product of nonzero quantum factorials, and connected standard swaps multiply it by nonzero quantum-integer ratios. Step 6.1 then uses absolute cell-head classification and the Murphy pair count to prove split semisimplicity. At q=1 in characteristic zero e=infinity, so both conclusions apply and F1 transfers the form; there is no unproved implication from separation alone.",
    "status": "false_positive",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": false,
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras",
    "outcome": "confirmed_fatal",
    "reason": "For an arbitrary ambient f, restriction f|_(M^omega) need not land in M^omega and is not determined by efe: swapping two regular summands gives efe=0 but nonzero restriction. Corrected the map to restrict efe itself, which preserves the summand, is multiplicative and is inverse to zero extension; the Schur functor and action are unchanged.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-q-schur-weyl-weight-space-gram-determinant-hook-product",
    "outcome": "confirmed_fatal",
    "reason": "For lambda=(4,4), (a,b,c)=(1,2,3), k=3, beta=(9,8,7,6,3,2,1,0) becomes (9,11,4,6,3,2,1,0). Sorting gives eta=(3,2,2,1); removal leaves kappa=(3,2), and the added strip ends at (4,1), not column b=2. Replaced that false endpoint equivalence with the exact two bead moves. Step 8.1 now proves that the new column is the raised bead's sorted rank and derives the height-sum parity from strip widths. The full balanced determinant formula, weight range and integral specialization are preserved.",
    "status": "repaired",
    "operation": "append_round_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "13",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u13.json",
    "independent_rejudgment_pending": true,
    "uncertain": false,
    "source_urls": [
      "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
    ],
    "familiar": false,
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record_no_published_effects",
    "reason": "All direct consumers examined for the seven changed interfaces are draft frozen-frontier items. No published consumer was edited or found dependent on the corrected false clauses; no published repair or certification is claimed.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u14-weight-fixed-n",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:50:47.205749+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "remark",
      "subject": "rem-block-weight-is-not-the-same-as-numerical-defect",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "14",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u14.json",
          "detail": "Across degrees the empty partition and (e) share the empty e-core but have weights 0 and 1. The corrected finite-e remark computes weight from n and core and fixes H_{F,q}(S_n) for block invariance."
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item directly depends on or references the assigned remark, and its repair changes no original Statement or Definition section. No published-consumer defect or maintenance repair was identified."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-residue-signature-normal-good-conormal-and-cogood-nodes",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "At p=3, μ=(5,5,4,3,1,1), A=(2,5) cancels against (4,4), while its transpose (5,2) is normal in Brundan Example 2.8. Read Brundan §§2.2–2.4 and Example 2.8 completely: Remark 2.4(II) compares his convention to Kleshchev’s older convention, not to this signature. Corrected the warning to the same-shape lattice/stack comparison with negated colors; the actual signature and its confluence proof remain sound.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "8193ea22946e59ed5f76c113b57601dc165c5212ee1c5a1f0b1a359295569cd0",
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-finite-group-induction-is-coinduction-and-thus-biadjoint",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "F1 wrongly called all elements of kG a basis; replaced kG by G. Checked H-linearity, tensor balancing, G-equivariance, both coset inverse identities, naturality and transported adjunctions. These use the actual group basis and finite transversals and are valid over every field; the Statement is unchanged.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "0986297b407033950cbc41fc7739308ab3243c480e979ac7207d0eea3cbdfda2"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-generalized-jm-primary-idempotents-and-residue-summand-functors",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The published CRT supplies coordinate idempotents in R/∏I_j and representatives in R, not idempotents in R. Corrected F4 accordingly. Step 2.1 already uses k[X]/(f_r), and step 4.1 uses congruence representatives whose evaluations are proved idempotent. Checked the integral annihilator, central content separation, local-center primitivity, exact functor projectors and the coset duality pairing; the Definition is unchanged.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "1007d7a6de44449e05cf806c7424a5ee29549ee54b672049b50bcfa415c6875f"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-good-node-and-cogood-node-crystal-operators",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The addable-node comparison was quantified beyond the restricted domain: for p=2 adding (1,2) to (1) gives (2). Limited step 3.1 to a restricted deletion pair and step 4.1 to the actual cogood addition, whose restrictedness is already proved in step 3.3. Checked adjacent equal-residue corner obstructions, boundary sign flip, stack inverse and rank changes. The Definition and claimed operators are unchanged.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "56d7afb9aff3c782f49da73513c83f2c723512f185d1307590a319bafc5680ed"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
    "outcome": "false_positive",
    "status": "false_positive",
    "evidence": "The omitted intermediate interfaces are actually proved in the cited root-interval carrier: Proof 11.1 gives (P), 16.1 gives (M), 17.1–20.1 gives (Z), 23.1–32.1 proves linked hats and distinct essential pivots, and 39.1–43.1 proves the essential-regular/normal characterization. Read these complete arguments and checked their characteristic-p and arbitrary-dominant-weight hypotheses at endpoint steps 4–9. The endpoint proof then lifts surviving restricted socle factors through the actual corner, localizes by class sums, and transfers to induction by the explicit projected Frobenius adjunction. F2 does not require these results to be repeated in the supplier Statement. No item edit.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "74cc114eb8e76938c8009af1e0408d1f899190ed5af1bbbd6ba1473a6432ec66"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues",
    "outcome": "false_positive",
    "status": "false_positive",
    "evidence": "F3 accurately cites the independently proved restriction endpoint in cogood-induction Proof 1.1–17.1, restated explicitly in its Remark. The owning contract already names source_section Remark. This is not an inference from the induction Statement. Checked the primitive/corner/class-sum restriction argument, direct-sum socle identity, arbitrary-field quotient survival and label separation; the resulting uncoloured socle is multiplicity-free. No item edit.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "014c2c72756df2321563a97be6ce3394ca537a52302f403183f12b2a088f5659"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells",
    "outcome": "false_positive",
    "status": "false_positive",
    "evidence": "The exact coefficient test is explicitly proved in the actual F1 supplier, Proof 6.1: pull back a nonzero map L^1→∇(λ(i)), then its highest Borel functional is nonzero on F_{i,N}z and kills every nonempty cut product through its nonconstant left Levi factor. Supplier 5.1 proves the generator bound and normalized toral factors are units. Read that complete finite-cell proof and checked endpoint necessity against Brundan Theorem 5.3, including its complete coefficient-functional argument. The test is available locally although absent from the abbreviated Statement. Checked matching sufficiency, restricted socle survival, corner lift, q-content separation, projected Frobenius Hom tests and finite-matrix square-root descent. No item edit.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "48f4d26c1f88113b27e1c313a7c07513c54951c8d5d75d8290473f43ccefadbe"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-every-p-restricted-partition-is-reached-by-cogood-node-additions",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "F3 used splitting-modular-system classification statements for arbitrary k. Replaced those dependencies and the unnecessary completeness claim by the arbitrary-field Specht nonzero absolutely simple head theorem and conjugate/sign duality lemma. The exact needed head is D(μ)=D^{μ′}⊗sign; its nonzeroness suffices in step 1.3. Checked nonzero restriction, least-dimension simple submodule, the proved uncoloured socle, restricted good deletion and rank induction. The Statement is unchanged.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "dd9253d6c0c9337a62e45a391bddc9fc75de58152d83706eada21a54399c8a83",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The Statement conflated the local level-one recursive comparison with the broader cyclotomic labelling theorem. Read Kleshchev §11.2 completely; its historical discussion concerns restricted multipartitions. Rewrote the Statement to give the finite level-one equality and deletion independence from cellular induction endpoints, keeping the broader historical caveat and the separate Choice-bearing canonical-crystal theorem. Checked the bottom-corner existence argument, restricted inverse moves and induction on rank; no Fock classification is imported.",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "15",
    "model": "gpt-6.1-sol",
    "context_sha256": "0543bdc863c54a3ee56bd6bccb180f52f2d0a0c7efd7e986587a3546a572330f"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-normal-node-composition-multiplicities-under-residue-restriction",
    "status": "owner_repair_required",
    "supplier": "def-residue-signature-normal-good-conormal-and-cogood-nodes",
    "affected_use": "residues, $c-r\\mapsto r-c$; the normal nodes of $\\lambda'$ in the signature\nsense are exactly the transposes of the normal nodes of $\\lambda$ in\nBrundan's sense ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]],\n[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]).",
    "invalidated_claim": "Signature normality on the transpose is identified with Brundan normality on the original shape, contrary to the explicit p=3 counterexample.",
    "minimality": "Correct only the convention attribution in F5 / F1. The first-level supplier defines ordinary normality through the restricted signature, so the numerical count transport need not change; example tables already use the same-shape source lattice test.",
    "uncertain": false,
    "source_urls": [
      "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-normal-and-good-nodes-for-a-large-partition",
    "status": "owner_repair_required",
    "supplier": "def-residue-signature-normal-good-conormal-and-cogood-nodes",
    "affected_use": "$\\ell=4$, residues are $r-c\\bmod\\ell$ in the source's orientation (the\nnegative of the $c-r$ convention of this page,\n[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]),\n$R(\\lambda)=\\{1,3,4,5\\}$ is the set of removable rows, and for",
    "invalidated_claim": "Signature normality on the transpose is identified with Brundan normality on the original shape, contrary to the explicit p=3 counterexample.",
    "minimality": "Correct only the convention attribution in F5 / F1. The first-level supplier defines ordinary normality through the restricted signature, so the numerical count transport need not change; example tables already use the same-shape source lattice test.",
    "uncertain": false,
    "source_urls": [
      "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_consumers_affected",
    "reason": "Every direct dependency/reference consumer of the two changed interfaces is currently draft. No published item was edited or adjudicated; no published maintenance repair is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-general-hecke-cellular-simple-labels-match-the-basic-crystal",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F1 overstated the endpoint Statement: completeness, distinctness and absolute simplicity are not supplied there. None is needed for this lemma: steps 1.1-3.1 prove inverse selected moves, restrictedness and finite reachability, and step 4.1 uses only the supplied simple induction-head identity to identify every allowed recursion with D(lambda). Removed the unused classification assertions while preserving the Statement, dependencies, all-field finite-e scope and declared Choice for B(Lambda0).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-the-full-fock-space-is-not-automatically-the-irreducible-basic-module",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F3 omitted the chosen P-grading, type-one, finite label-weight and finite-union-of-upper-cones hypotheses of its splitting supplier. This is nonfatal for the witness: the integrable full Fock module has support Lambda0-Q+, independent simple roots make a fixed weight fix partition size and hence a finite-dimensional space, and its Lambda0 space is the vacuum line. Restored the exact F3 conditions and verified them in step 2.1, including the residue-space embedding from the lattice direct sum. Also cited the actual full-crystal supplier directly for F2. Residue independence excludes both |1111> and its congruent ambient lower lift; the linear J then excludes both symmetric counterparts. The original claim is unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_resolved",
    "id": "def-padded-kronecker-coefficient-sequence",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "17",
    "context_sha256": "f09c94cfc1dcf7bab227bbad57432a4e4b75cb81b109b1f21ef295f7a3c665d5",
    "classification": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The original coefficients form a well-defined size-indexed family on n >= n_0, but the carrier calls that family a sequence while the library sequence convention indexes from zero on N. This is an indexing presentation defect, not an undefined coefficient in the admissible range. Added the sequence k -> g_(n_0+k), preserving every size-indexed g_n and its exact domain.",
    "post_sha256": "7b2975aaac6e8e29f97011aa490cbc786dbad3d2a50fb79314a7ff4c44a811b7",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_resolved",
    "id": "cex-first-row-padding-before-the-partition-threshold-is-undefined",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "17",
    "context_sha256": "e462c738505f6f3bc92738c50d3774d802d5da9e845e2332fa36d186b241504c",
    "classification": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F1 was a false general restatement at alpha=empty, n=0: the raw tuple (0) is not a positive-part partition, whereas the supplier defines empty[0]=empty. The actual witness alpha=(2,1) and all its computations remain valid, so this is nonfatal. Restored the exception and declared the padded-coefficient supplier used in step 3.1, with an exact F4 citation.",
    "post_sha256": "6935fd4f4126b53977c0d8f2fe597035976c3e68adb04d047dfcc4e5486c37f6",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_frontier_owner",
    "id": "def-reduced-kronecker-coefficient",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "supplier": "def-padded-kronecker-coefficient-sequence",
    "supplier_post_sha256": "7b2975aaac6e8e29f97011aa490cbc786dbad3d2a50fb79314a7ff4c44a811b7",
    "classification": "confirmed_nonfatal",
    "status": "owner_repair_needed",
    "affected_use": "Definition parenthetical: the sequence of [[def-padded-kronecker-coefficient-sequence]] itself is defined only on that common domain.",
    "invalidated_claim": "That description names the newly N-indexed supplier sequence as having the rank-indexed domain; the supplier still preserves g_n on the common domain, and the reduced limit remains correct.",
    "minimality": "Change only that description to the size-indexed coefficients of the supplier themselves are defined only on the common domain; retain all formulas, domain thresholds and proof arguments.",
    "reason": "The new supplier sequence is k -> g_(n_0+k) on all of N; the preserved g_n family is defined only for ranks n >= n_0. This is a terminology defect in a direct draft frontier consumer outside unit 17, requiring an ordinary owner repair, not published maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-initial-r1-u18-def-finite-generation-and-generation-degree-of-an-fi-module",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "def-finite-generation-and-generation-degree-of-an-fi-module",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "finding": "Confirmed logic defect: with the same nonzero k underlying every V_S, the old Sigma intersect V_S tests membership at every rank and makes {1} generate the zero-transition module. Supported pairs (S,v), their specified-support containment, and the matching skeletal set restore the image-span formula; a finite maximum of the recorded support sizes now proves bounded generation. Empty generators span zero, and intersections and finite sums use no AC.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "model": "gpt-6.1-sol",
    "context_sha256": "99de4025fdb6ef3d650c7cda95584aa49f5b935e53a50b9a7a82c809a3be761c",
    "defect_type": "logic",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-initial-r1-u18-def-weight-of-a-characteristic-zero-fi-module",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "def-weight-of-a-characteristic-zero-fi-module",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "finding": "The local padding formula produced (0) at lambda=empty and n=0, while partitions have positive parts and the actual padding supplier explicitly uses empty[0]=empty. Added that convention and the rank-zero trivial Specht module. Deleting the first row gives a unique tail in every rank; constituents remain simple subquotients, and their inverse images under quotient maps prove weight monotonicity without any infinite decomposition or AC.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "model": "gpt-6.1-sol",
    "context_sha256": "87ab532c62bae45fb6fecbca21147173ff988009591500e66cb9940a7dc07604",
    "defect_type": "logic",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-initial-r1-u18-lem-branching-rule-for-specht-induction-and-coinvariants",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "lem-branching-rule-for-specht-induction-and-coinvariants",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "finding": "Part (ii) admitted negative integers k, making S_k and its coinvariants undefined (for example n=0, k=-1). Restricted that part and its Given data to 0<=k<=n. Verified the proof: finite linear systems preserve Hom dimensions under Q-to-C and Q-to-F scalar extension, split Specht endomorphism rings are F, Pieri fixes induction multiplicities, and averaging plus adjunction yields the removal rule, including empty strips and S_0.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "model": "gpt-6.1-sol",
    "context_sha256": "f1edd2d0b78b6df1324c882e1240589932679afa98161af80c5e6758b9554e80",
    "defect_type": "logic",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-initial-r1-u18-lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "finding": "Step 3.1 used V(rho)_n for a full partition rho of n, outside the padding domain when n>0. Replaced all three occurrences by V(eta)_n=V_rho with rho=eta[n]. Restricted F1 to nonnegative strip length and F2 to admissible padded labels and finite groups. Verified parts (i)–(iii) by bottom-box removals and interlacing; a finite orbit span in any nonzero subquotient contains a simple module of tail size <=a, whose nonzero coinvariants inject by finite averaging. The Statement is unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "model": "gpt-6.1-sol",
    "context_sha256": "aa55f4b0f45ca7bb45d4ce22dc34b419f2ea7311ad733936979f76a967b54d72",
    "defect_type": "logic",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-initial-r1-u18-lem-generation-degree-bounds-surjectivity-degree-and-weight",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "lem-generation-degree-bounds-surjectivity-degree-and-weight",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding": "F6 restated a horizontal-strip decomposition that its cited supplier does not state. This is nonfatal: no proof step needs that decomposition, because F4 supplies weight(M(lambda))=|lambda| directly. Removed the unused clause and corrected the Statement source pointer for bounded generation. Verified the naturality-square quotient bound, finite evaluation-sum surjectivity bound, and reduction of every simple subquotient to finite orbit spans and finite-dimensional coefficient submodules; these prove weight<=d even with infinite-dimensional values, without AC.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "model": "gpt-6.1-sol",
    "context_sha256": "95d57798eb36fcd503f1c0917cf4947fb385586361d9b0eb65e1e249eacb3e70",
    "defect_type": null,
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "The proof records finite supports S_i and correctly gets zero images above their maximum. Its F2 still uses Sigma intersect V_S, which is not the new specified-support fibre. Replace that clause by (S,s) in Sigma; retain the witness and Statement.",
    "affected_use": [
      {
        "supplier": "def-finite-generation-and-generation-degree-of-an-fi-module",
        "path": "items/cex-pointwise-finite-dimensionality-does-not-imply-fi-finite-generation.md",
        "locator": "F2; Counterexample 1.2–2.1",
        "exact_snippet": "[F2] For a set $\\Sigma$ of elements, $\\operatorname{span}_V(\\Sigma)_T$ is the $k$-span of the elements $f_*(s)$ with $s\\in\\Sigma\\cap V_S$ and $f\\colon S\\to T$ an injection; $V$ is finitely generated when $\\operatorname{span}_V(\\Sigma)=V$ for some finite $\\Sigma$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).",
        "snippet_sha256": "329c091a580cc1d868d822542ff0591ef1c69faa2b3527c931af6c422a5c36a3",
        "affected_use": "The proof records finite supports S_i and correctly gets zero images above their maximum. Its F2 still uses Sigma intersect V_S, which is not the new specified-support fibre. Replace that clause by (S,s) in Sigma; retain the witness and Statement."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-ex-fi-permutation-module-has-character-x-one",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "ex-fi-permutation-module-has-character-x-one",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "The generator e_0 has specified support [1], and its injection images are every e_s. F3 still repeats Sigma intersect V_S; use the recorded-support condition (S,s) in Sigma. The module, trace and generation claims remain sound.",
    "affected_use": [
      {
        "supplier": "def-finite-generation-and-generation-degree-of-an-fi-module",
        "path": "items/ex-fi-permutation-module-has-character-x-one.md",
        "locator": "F3; Verification 2.2",
        "exact_snippet": "[F3] For a set $\\Sigma$ of elements, $\\operatorname{span}_V(\\Sigma)_T$ is the $k$-span of the elements $f_*(s)$ with $s\\in\\Sigma\\cap V_S$ and $f\\colon S\\to T$ an injection; $V$ is generated in degree $\\le d$ when $\\operatorname{span}_V(V_{\\le d})=V$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).",
        "snippet_sha256": "9ea61d267579964ec556a8286fb105cb54fc80be0403bac067f6683687ff39ac",
        "affected_use": "The generator e_0 has specified support [1], and its injection images are every e_s. F3 still repeats Sigma intersect V_S; use the recorded-support condition (S,s) in Sigma. The module, trace and generation claims remain sound."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-lem-free-fi-modules-have-explicit-weight-and-stability-bounds",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "lem-free-fi-modules-have-explicit-weight-and-stability-bounds",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "The proof only removes r=m-|U|>=0 with r<=m, and only adds n-m>=0 for nonzero values. F3 nevertheless restates removal for j<=N with no lower bound; its universal clause must say 0<=j<=N. The explicit empty-family case 3.1 has weight and degrees zero, consistent with V(empty)_0. Bounds and Statement remain sound.",
    "affected_use": [
      {
        "supplier": "def-weight-of-a-characteristic-zero-fi-module",
        "path": "items/lem-free-fi-modules-have-explicit-weight-and-stability-bounds.md",
        "locator": "F3 and F5; Proof 1.2, 2.2–2.3 and 3.1",
        "exact_snippet": "[F5] The weight of an FI-module over a characteristic-zero field is the supremum of $|\\eta|$ over the constituents $V(\\eta)_N$ of the values ([[def-weight-of-a-characteristic-zero-fi-module]]), and Maschke splits finite-dimensional semisimple modules into simples when $\\operatorname{char}k=0$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).",
        "snippet_sha256": "2f1966b892c7f7d3a94cab8ca48edba27bc60de4249dbdf9c500fbe11a79e0a9",
        "affected_use": "The proof only removes r=m-|U|>=0 with r<=m, and only adds n-m>=0 for nonzero values. F3 nevertheless restates removal for j<=N with no lower bound; its universal clause must say 0<=j<=N. The explicit empty-family case 3.1 has weight and degrees zero, consistent with V(empty)_0. Bounds and Statement remain sound."
      },
      {
        "supplier": "lem-branching-rule-for-specht-induction-and-coinvariants",
        "path": "items/lem-free-fi-modules-have-explicit-weight-and-stability-bounds.md",
        "locator": "F3 and F5; Proof 1.2, 2.2–2.3 and 3.1",
        "exact_snippet": "[F3] Branching rule: for $\\mu\\vdash N$ and $j\\le N$, $(\\operatorname{Res}^{S_N}_{S_{N-j}\\times S_j}V_\\mu)_{S_j}$ is the sum of the irreducibles $V_\\nu$, $\\nu\\vdash N-j$, obtained from $\\mu$ by removing one box from each of $j$ different columns (multiplicities at most one); dually the induction from $S_m\\times S_r$ of $S^\\rho\\boxtimes k$ is the sum of the $S^{\\nu}$ over $\\nu$ obtained from $\\rho$ by adding one box in each of $r$ different columns ([[lem-branching-rule-for-specht-induction-and-coinvariants]]).",
        "snippet_sha256": "293cd54e95b9303c8fbb0ada896fee14a5e8f65dc267a06252d1dfeca32fb4c5",
        "affected_use": "The proof only removes r=m-|U|>=0 with r<=m, and only adds n-m>=0 for nonzero values. F3 nevertheless restates removal for j<=N with no lower bound; its universal clause must say 0<=j<=N. The explicit empty-family case 3.1 has weight and degrees zero, consistent with V(empty)_0. Bounds and Statement remain sound."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "Statement (a) already specifies S_s, and evaluation sends each basis injection from that support to f_*(s). F2 repeats Sigma intersect V_S and must use (S,s) in Sigma. Read Sigma indices as supported elements throughout; the presentations and Statement need no weakening.",
    "affected_use": [
      {
        "supplier": "def-finite-generation-and-generation-degree-of-an-fi-module",
        "path": "items/lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules.md",
        "locator": "Statement (a); F2; Proof 1.1–3.1",
        "exact_snippet": "[F2] $\\operatorname{span}_V(\\Sigma)$ is the smallest sub-FI-module of $V$ containing $\\Sigma$, and $\\operatorname{span}_V(\\Sigma)_T$ is the $k$-span of the elements $f_*(s)$ with $s\\in\\Sigma\\cap V_S$ and $f\\colon S\\to T$ a morphism of $FI$; $V$ is finitely generated when $\\operatorname{span}_V(\\Sigma)=V$ for a finite $\\Sigma$, and generated in degree $\\le d$ when $\\operatorname{span}_V(V_{\\le d})=V$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).",
        "snippet_sha256": "e6b1a81e9b206c09e9f8f6435be65967d1d937a9dba398573e16a64e7a237a34",
        "affected_use": "Statement (a) already specifies S_s, and evaluation sends each basis injection from that support to f_*(s). F2 repeats Sigma intersect V_S and must use (S,s) in Sigma. Read Sigma indices as supported elements throughout; the presentations and Statement need no weakening."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-prop-specht-constituents-of-an-fi-module-have-bounded-first-row",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "prop-specht-constituents-of-an-fi-module-have-bounded-first-row",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "The filtration is generated by all supported skeletal values up to m and exhausts each value via bijection transport. Its F1 literally says an element of V_S lies in V_|S|, which needs that transport qualification. Horizontal additions in 2.2 have n-m>=0 whenever M(H_m)_n is nonzero. Tail bounds, including the zero tail, are unchanged; no Statement change is needed.",
    "affected_use": [
      {
        "supplier": "def-finite-generation-and-generation-degree-of-an-fi-module",
        "path": "items/prop-specht-constituents-of-an-fi-module-have-bounded-first-row.md",
        "locator": "F1 and F4; Proof 1.1, 1.4 and 2.2",
        "exact_snippet": "[F1] $\\operatorname{span}_V(V_{\\le m})$ is the smallest sub-FI-module containing all values of $V$ in degrees $\\le m$; it is generated in degree $\\le m$, the inclusions $F^mV\\subseteq F^{m+1}V$ hold, and $V=\\bigcup_{m\\ge0}F^mV$ because every element of $V_S$ lies in $V_{|S|}\\subseteq(F^{|S|}V)_S$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).",
        "snippet_sha256": "956c04cbdecab95f59b889dcd4b320328c2f7744a35140d6c931948c48d1d99e",
        "affected_use": "The filtration is generated by all supported skeletal values up to m and exhausts each value via bijection transport. Its F1 literally says an element of V_S lies in V_|S|, which needs that transport qualification. Horizontal additions in 2.2 have n-m>=0 whenever M(H_m)_n is nonzero. Tail bounds, including the zero tail, are unchanged; no Statement change is needed."
      },
      {
        "supplier": "def-weight-of-a-characteristic-zero-fi-module",
        "path": "items/prop-specht-constituents-of-an-fi-module-have-bounded-first-row.md",
        "locator": "F1 and F4; Proof 1.1, 1.4 and 2.2",
        "exact_snippet": "Equivalently, since the padded partition is\n$\\lambda[n]=(n-|\\lambda|,\\lambda_1,\\lambda_2,\\dots)$, the second row of the\nSpecht diagram $\\lambda[n]$ has length at most $s$; the first row of the\npadding tail is the second row of the full diagram\n([[def-first-row-padding-of-a-partition]],\n[[def-weight-of-a-characteristic-zero-fi-module]]). No choice principle is\nused.",
        "snippet_sha256": "56ff36a30701caf7d41be1907d7f2d4b6653577751977fda5ab535f1650effed",
        "affected_use": "The filtration is generated by all supported skeletal values up to m and exhausts each value via bijection transport. Its F1 literally says an element of V_S lies in V_|S|, which needs that transport qualification. Horizontal additions in 2.2 have n-m>=0 whenever M(H_m)_n is nonzero. Tail bounds, including the zero tail, are unchanged; no Statement change is needed."
      },
      {
        "supplier": "lem-branching-rule-for-specht-induction-and-coinvariants",
        "path": "items/prop-specht-constituents-of-an-fi-module-have-bounded-first-row.md",
        "locator": "F1 and F4; Proof 1.1, 1.4 and 2.2",
        "exact_snippet": "[F4] For a partition $\\mu\\vdash m$ the constituents of $M(V_\\mu)_n\\cong\\operatorname{Ind}_{S_m\\times S_{n-m}}^{S_n}(V_\\mu\\boxtimes k)$ are the $V_\\nu$ with $\\nu\\vdash n$ obtained from $\\mu$ by adding one box in each of $n-m$ different columns, so $\\nu_1\\ge\\nu_2$ and $\\nu_2\\le\\mu_1$; and if $\\nu=\\lambda[n]$ then $\\nu_2=\\lambda_1$ ([[lem-branching-rule-for-specht-induction-and-coinvariants]], [[def-free-fi-module-generated-by-an-sm-module]], [[def-first-row-padding-of-a-partition]]).",
        "snippet_sha256": "47617dc83c8b172322680a8aaa72e48a36a33052cbf3435ba0de87e3df4cb778",
        "affected_use": "The filtration is generated by all supported skeletal values up to m and exhausts each value via bijection transport. Its F1 literally says an element of V_S lies in V_|S|, which needs that transport qualification. Horizontal additions in 2.2 have n-m>=0 whenever M(H_m)_n is nonzero. Tail bounds, including the zero tail, are unchanged; no Statement change is needed."
      },
      {
        "supplier": "lem-generation-degree-bounds-surjectivity-degree-and-weight",
        "path": "items/prop-specht-constituents-of-an-fi-module-have-bounded-first-row.md",
        "locator": "F1 and F4; Proof 1.1, 1.4 and 2.2",
        "exact_snippet": "[F2] Every quotient $U\\twoheadrightarrow W$ of FI-modules satisfies $\\operatorname{surj-deg}(W)\\le\\operatorname{surj-deg}(U)$ ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]]); generation in degree $\\le d$ passes to quotients, and for such a quotient the evaluation map $\\bigoplus_{i\\le d}M(W_i)\\twoheadrightarrow W$ is surjective ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]], [[def-free-fi-module-generated-by-an-sm-module]]).",
        "snippet_sha256": "92d0bb2c89bb21f35655660154c5832856cc0dcfd3076baf33b6812e93371340",
        "affected_use": "The filtration is generated by all supported skeletal values up to m and exhausts each value via bijection transport. Its F1 literally says an element of V_S lies in V_|S|, which needs that transport qualification. Horizontal additions in 2.2 have n-m>=0 whenever M(H_m)_n is nonzero. Tail bounds, including the zero tail, are unchanged; no Statement change is needed."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step5-u18-consumer-prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "finding": "Every injection pair factors through its actual image union of size at most m_1+m_2; a finite set of such generators carries its explicit skeletal supports. F1 must replace Sigma intersect U_S by (S,u) in Sigma. The tensor product and degree bounds are unchanged.",
    "affected_use": [
      {
        "supplier": "def-finite-generation-and-generation-degree-of-an-fi-module",
        "path": "items/prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated.md",
        "locator": "F1; Proof 2.1 and 4.1",
        "exact_snippet": "[F1] For an FI-module $U$, $\\operatorname{span}_U(\\Sigma)_T$ is the $k$-span of the elements $f_*(u)$ with $u\\in\\Sigma\\cap U_S$ and $f\\colon S\\to T$ an injection; $U$ is generated in degree $\\le d$ when $\\operatorname{span}_U(U_{\\le d})=U$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).",
        "snippet_sha256": "f12c7d25bd1647abe52a9df7abc49fe5951b21576e533c4650b8d1503df17198",
        "affected_use": "Every injection pair factors through its actual image union of size at most m_1+m_2; a finite set of such generators carries its explicit skeletal supports. F1 must replace Sigma intersect U_S by (S,u) in Sigma. The tensor product and degree bounds are unchanged."
      }
    ],
    "invalidated_claim": "The local fact restatement omits the corrected supplier support or index-domain convention; the actual consuming proof uses specified supports or nonnegative indices.",
    "minimality": "Correct only the indicated fact or transport wording and matching owning contract; the consumer Statement and proved mathematical conclusions remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-effects",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "suppliers": [
      "def-finite-generation-and-generation-degree-of-an-fi-module",
      "def-weight-of-a-characteristic-zero-fi-module",
      "lem-branching-rule-for-specht-induction-and-coinvariants",
      "lem-generation-degree-bounds-surjectivity-degree-and-weight"
    ],
    "published_consumers": [],
    "outside_consumers": [],
    "finding": "The union of direct dependency and reference consumers for the four changed interfaces contains only draft frozen-frontier items. No published item was edited or adjudicated, and no outside maintenance effect was found.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-iterated-schur-coefficients",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The Hall equality is mathematically correct, but the Definition cites the LR product/skew-expansion interface for orthonormality, which that Statement does not assert. Added the exact orthonormal-basis theorem to deps and replaced the final citation; coefficient extraction, homogeneity, iterated LR identities, nonnegativity and input symmetry are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0907.4652"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F2 and proof 1.1 require the Schur Cauchy kernel, but the cited coproduct/plethysm Statement and its contract quote assert only sum/product substitutions. Added the sigma-series identity supplier to deps and F2. Checked the four kernel expansions, Hall extraction, collapse of the middle LR index, bounded index set and positivity equivalence; every claim is retained.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0907.4652"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-murnaghan-stability-for-alpha-beta-two",
    "status": "false_positive",
    "outcome": "false_positive",
    "reason": "False positive: the current F3 citation contract selects the admissible-ranks theorem’s Remark, not merely its general Statement. That Remark states the exact ten-term R polynomial and identifies its coefficients as reduced values; proof 1.2 derives it from the finite Littlewood expression. Verified all six row pairs m+r<=2, the LR products, every small-rank straightening value, global index 8 and individual index 6; exact rational character averages also reproduce every rank-4–9 product.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0907.4652"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_update_required",
    "reason": "The literal Definition citation change has four direct item consumers, all draft items in the frozen frontier. Their actual uses remain sound; no published or outside-frontier consumer defect was discovered and no maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0907.4652"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-complement-of-a-countable-set-of-reals-is-uncountable",
    "model": "gpt-6.1-sol",
    "context_sha256": "e47f3d4647c6e0196de4dbc7d664cee6489a415ec2b3badbc4302591bc959c37",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "resolved": true,
    "reason": "F5 and step 3.1 applied lem-of-q-dense without establishing its Archimedean hypothesis. Completeness alone was stated, and no completeness-to-Archimedeanness supplier was cited. The existing thm-of-archimedean proves exactly the missing implication by the supremum contradiction; F5 now applies it explicitly, and deps, the owning manifest and the F5 contract citation are synchronized. This is a dependency_citation defect in the dense-deletion specialization; the two-set uncountability argument remains valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "post_sha256": "82bbad251b1ffcaeffcfc71b23e170cd93e5d6e3400999f5b6d35748e742f112"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-the-deformed-category-o-family-and-its-specializations",
    "status": "repaired",
    "finding": "For T=C(t), (0) is a closed point with residue field C(t), and any purported C-algebra map to C would kill an invertible t-c. Replaced the undefined C-valued fiber at arbitrary closed points by tensoring with kappa(p), with explicit highest weight lambda+epsilon_p; ordinary complex fibers are retained at complex-valued points. PBW, finite tensor flags, origin CRT components and relative weight projectivity remain valid.",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [
      "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-lifting-of-indecomposable-projectives-to-the-deformed-family",
    "status": "owner_review_required",
    "finding": "Current Proof 1.1 says kernels, cokernels and extensions remain in the relative-weight category without qualifying the middle term. An induced rank-two Borel Jordan module gives a self-extension of a deformed Verma whose h-tau(h) action is not diagonal. This ancillary extension assertion must be restricted to relative-weight middle terms. Also Statement and Proof 7.1 use W_nu without defining it as the dot stabilizer; the integral Weyl group notation would give W for integral nu. No edit: item is unassigned.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "affected_use": "items/thm-lifting-of-indecomposable-projectives-to-the-deformed-family.md Proof 1.1: Kernels, cokernels and extensions remain in this category; Statement and Proof 7.1: distinct cosets W/W_nu.",
    "invalidated_claim": "Arbitrary ambient-module extensions preserve relative-weight eigenmodules; the notation W_nu is defined as the needed dot stabilizer.",
    "minimality": "Qualify only the extension claim by relative-weight middle terms, and define W_nu=Stab_W(nu+rho). The truncated relative-weight construction itself need not be rewritten.",
    "evidence": "For sl2 over R, induce the free Borel module with ev=ew=0, hv=(xi+tau(h))v and hw=(xi+tau(h))w+v. The resulting self-extension of Delta_R(xi) has a nonzero h-tau(h) Jordan block. The ordinary published thm-category-o-is-abelian-and-extension-closed Statement and Proof 5.1 explicitly demonstrate this qualification. Current central-action lemma separately defines W_nu as the dot stabilizer."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules",
    "status": "repaired",
    "finding": "The original 3.2 applies the quotient Hilbert bound to U_chi itself, contradicting 2.3. Corrected it to gr(U_chi/K)=A/gr K and a filtered injection of U(n-) tensor U(n+) into U_chi/K, giving n^(2N) lower growth versus O(n^(2N-1)). Checked the simple-Verma restriction, tensor freeness, polynomial-kernel rank and finite isotypic dimension arguments; the Statement is unchanged.",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension",
    "status": "repaired",
    "finding": "The concluding assertion that the whole-object multiplicity formula holds for individual direct summands is false: the zero summand already contradicts it. The correct Statement was proved before that assertion by exact pushforward and concatenation of flags. Replaced the ancillary assertion with additive multiplicities across Y direct-sum Z; verified the dominant two-factor interface directly in the wall-crossing definition and its norm-bound calculation. No Statement change.",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules",
    "status": "repaired",
    "finding": "The Statement falsely applies unique new top-label summands to every expression. In rank one, the nonreduced word ss=e gives theta_s^2 Delta(lambda)=P(s.lambda) direct-sum P(s.lambda), with no P(e.lambda). Added reducedness exactly as required by F2 and Proof 6.2; no equivalence or labeling conclusion was weakened. Checked deformed wall maps 1.2, localized words 2.1, height-one/UFD full faithfulness 3.1, reduction of Hom 4.1, absolute indecomposability and normalization 5.1–6.1, and inverse-label induction.",
    "outcome": "confirmed_fatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-wall-crossing-on-projectives-in-the-sl-two-block",
    "status": "repaired",
    "finding": "The displayed polynomial B_s has right k[a]-rank two and infinite k-dimension; only bar B_s=B_s tensor_(k[a]) k is C(1) of dimension two. Corrected the dimension comparison to name both objects and the reduction map. The projective wall-crossing matrix and four-dimensional coinvariant tensor were already correct; made onto-wall equality and preservation of projectivity explicit to justify the decompositions.",
    "outcome": "confirmed_nonfatal",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank",
    "status": "false_positive",
    "outcome": "false_positive",
    "finding": "The current published supplier proof 1.1 explicitly proves equivariant symmetrization and gr Z=R; 2.1 chooses the harmonic lifts and 3.1 proves they are a filtered Z-basis. Thus F5 and steps 6.2–7.1 use established local arguments, not abstract freeness alone. Independently checked the finite-character constant term, bounded root shifts, nonnegative-integral coefficient limit and extension by complete reducibility.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain",
    "status": "false_positive",
    "outcome": "false_positive",
    "finding": "F6 is proved in the cited supplier, not inferred from its short Statement: free-over-center Proof 1.1 establishes gr Z=S(g)^g by equivariant symmetrization, and 2.1–3.1 establish the filtered harmonic basis. Consequently central reduction in 2.2 has the harmonic quotient basis and the stated Hilbert series. Checked the regular sequence, principal sl2 strings and weighted slice Jacobian, nilpotent conjugacy, generic reducedness and Cohen–Macaulay associated-prime detection; no defect was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v",
    "status": "false_positive",
    "outcome": "false_positive",
    "finding": "The supplier has more than an undeformed Statement: dictionary Proof 1.2 constructs the action-compatible deformed wall map, 2.1 identifies localized words, 3.1 proves full faithfulness using height-one localizations, 4.1 proves natural reduction of Hom, and 6.2 matches the reduced top summands by induction. These give the idempotent restriction in this Proof 1.3. Exact V_R sends each standard to its rank-one inverse graph branch; localization then counts flag multiplicities. Item unchanged; refreshed only its citation contract to the dictionary Statement now specifying reduced words.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-enveloping-algebra-is-free-over-its-center",
    "status": "examined_no_repair",
    "affected_use": "Assigned harmonic-rank F5 and nilpotent-fiber F6 cite gr Z and the symmetrized harmonic basis from this published supplier.",
    "evidence": "Current Proof 1.1 explicitly proves gr Z=S(g)^g; 2.1 fixes homogeneous harmonic PBW lifts; 3.1 establishes their filtered central freeness. These exact clauses support both rejected uses. No published content, audit stamp or certification was changed.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-the-antidominant-projective-and-the-soergel-functor",
    "status": "owner_review_required",
    "affected_use": "Final well-definedness paragraph: Every simple submodule of a Verma is itself a simple Verma: its universal Verma map into that Verma is injective.",
    "finding": "The injection uses lem-a-nonzero-verma-homomorphism-is-injective, absent from both this item deps and its linked citations. Declare that proved PBW/domain supplier or reproduce the two-line argument. This is a draft frontier supplier outside unit 20, so no edit or new adjudication was made.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u22-def-parabolic-hecke-module-and-antispherical-standard-basis",
    "subject": "def-parabolic-hecke-module-and-antispherical-standard-basis",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The omitted m_x and n_x are a nonfatal title/interface defect: the balanced tensors and characters were sound and the existing lemma step 1.1 proved their independence. Added the vectors 1 tensor H_x indexed by left minima, named both standard bases, and linked the existing proved justification; no normalization or coset convention changed.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [
      "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u22-def-singular-integral-category-o-block-and-stabilizer",
    "subject": "def-singular-integral-category-o-block-and-stabilizer",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "Clause (3) applied a type-A-only Hecke interface to arbitrary semisimple W and also called both left/right representative families module labels, although both right induced modules use left minima. Qualified only that comparison by W=S_n and stated the inversion bijection from singular right labels to the common left label set. The general block, stabilizer W_J and structural claims remain unchanged.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [
      "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u22-def-parabolic-category-o-for-a-standard-parabolic",
    "subject": "def-parabolic-category-o-for-a-standard-parabolic",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The ambient-integrality requirement in (5) is false: for sl2 and J=empty the category is ordinary O, including L(lambda) with lambda(h_alpha)=1/2. Necessity forces only nonnegative integral Levi coroot pairings. Removed ambient integrality from (4), (5), (7) and the simple characterization, and stated that outside-J pairings and Levi central characters are unrestricted. The existing finite semisimple-Levi classification, center character, PBW graded pieces and quotient/duality arguments establish the full corrected interface without new prerequisites.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [
      "https://www.diva-portal.org/smash/get/diva2:1680785/FULLTEXT01.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-u22-consumer-simple-scope",
    "subject": "thm-parabolic-category-o-is-a-highest-weight-category",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "affected_use": "Within an integral block, $L(\\lambda)\\in\\mathcal O^{\\mathfrak p}$\nif and only if $\\lambda$ is $\\mathfrak p$-dominant integral; every simple\nobject of $\\mathcal O^{\\mathfrak p}$ is of this form.\n\n1.1 **Simples and standards.** By [F1], Levi-dominant integral highest weights are exactly the simple labels in $\\mathcal O^{\\mathfrak p}$. Their generalized standards are quotients of the ordinary Vermas with the same one-dimensional highest-weight space and simple head. They have finite length by [F2], and their weights, and hence highest weights of composition factors, lie in $\\lambda-Q^+$ by [F3]. For any parabolic quotient of the ordinary Verma, the image of its highest vector is killed by the full positive nilpotent algebra. Its finite Levi span is the cyclic highest-weight simple $E(\\lambda)$ by complete reducibility, and the radical kills that span since it kills the highest vector and is Levi-stable. The induction universal property therefore factors the quotient map through $\\Delta_{\\mathfrak p}(\\lambda)$. This proves the largest-quotient assertion locally. This proves parts (1) and (2). [F1, F2, F3, F4]",
    "invalidated_claim": "An unqualified claim that every simple in O^p has ambient integral highest weight fails for sl2, J=empty and lambda(h_alpha)=1/2. The within-integral-block criterion is sound; the semicolon and step 1.1 leave its global scope ambiguous.",
    "minimality": "State the full simple criterion as p-dominance alone in (1) and proof 1.1; retain explicitly integral-block flag/reciprocity claims. This is a direct consumer Statement repair and its owner must examine the next hop.",
    "reason": "Confirmed nonfatal global-scope ambiguity should be removed; no numerical or integral-block theorem is contradicted. The corrected supplier establishes the general Levi criterion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-u22-parabolic-basis-locator",
    "subject": "thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "affected_use": "[F5] cites thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, steps 1.1--3.2 of its proof.",
    "invalidated_claim": "The published supplier currently has only steps 1.1 and 2.1, so the locator names nonexistent steps.",
    "minimality": "Replace the stale locator by its current step 1.1, or cite its elementary triangular-bar justification accurately; no Statement change is needed.",
    "reason": "Current supplier step 1.1 imports the elementary construction. The consumer itself gives the finite triangular construction, so the stale locator is a citation defect only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-u22-fock-singular-label-side",
    "subject": "thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix",
    "severity": "nonfatal",
    "disposition": "open",
    "route": "frontier-owner",
    "affected_use": "Proof step 2.2: The singular ordinary multiplicity theorem of [F3] has exactly these indices for the sorted-entry stabilizer. The displayed indices are d(C)w_0,d(A)w_0; step 1.1 states d(A)=w_A^{-1} is minimal-left.",
    "invalidated_claim": "The singular supplier requires minimal-right labels w_C,w_A, not the displayed minimal-left d(C),d(A). The multiplicity value remains recoverable.",
    "minimality": "In step 2.2 apply the singular theorem to w_C,w_A first; then simultaneous inversion followed by conjugation by w_0 gives P_{w_Cw_0,w_Aw_0}=P_{w_0d(C),w_0d(A)}=P_{d(C)w_0,d(A)w_0}. Justify these symmetries using the existing KL basis symmetry supplier, adding its precise citation if necessary. No Statement change is needed.",
    "reason": "Verified the digest alert against actual step 1.1, step 2.2 and the singular theorem Statement. This is a missing explicit label-side bridge, not a reason to change the numerical formula.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "step5-initial-r1-u22-interface-inventory",
    "disposition": "no-published-maintenance-required",
    "reason": "All 21 direct dependency/reference consumer IDs of the three changed definitions are draft items in the immutable frontier. No published or outside-frontier direct consumer was found; no published item was edited or adjudicated. The three out-of-lane findings above belong to frontier owners, not published maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts",
    "finding": "The unqualified formulas are false across different entry multisets: in one position with a≠b both permutation expressions are 1 while weight preservation forces both off-diagonal coefficients to be 0. The repair separates zero coefficients from the fixed-multiset formulas; signed Hecke transport, complementary inversion and exterior transport remain unchanged. Longest-element order reversal is now derived from the published rank criterion rather than attributed to an absent clause.",
    "status": "repaired",
    "additional_nonfatal_defect": "F4 previously attributed longest-element reversal to a supplier that states only rank comparison and inversion symmetry; proof 3.2 now derives both left and right reversal."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality",
    "finding": "The cited category-O and central-character suppliers require semisimple ambient g, whereas gl_n has a one-dimensional centre. Added a local exact equivalence between the gl_n category with I_n=c and the sl_n category, including induction, local parabolic finiteness, projectives, flags, transpose duality and the enveloping centre. The scalar c_A=sum(a_j)+n(n-1)/2 and the restricted shifted coordinates now justify the full multiset criterion; n=1 is treated directly. The Definition is unchanged.",
    "status": "repaired"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks",
    "finding": "F3 attributed finite-tensor and block-projection compatibility to a semisimple duality Statement that asserts neither. The repaired proof constructs DM⊗DW ≅ D(M⊗W) weightwise, proves DV ≅ V and D(V*) ≅ V* using the transpose dot forms, and uses preserved simple factors to commute exact duality with projections. The fixed-centre gl_n reduction supplies its ambient category; evaluation/coevaluation prove both tensor/block adjunctions. The Definition is unchanged.",
    "status": "repaired"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-the-highest-weight-fock-submodule-has-the-qg-global-bases",
    "finding": "F1 originally presented the based inclusion and C_0-adjoint projection as clauses of the supplier’s Statement, which does not state them. This is a nonfatal citation defect: the supplier’s complete Proof 2.1, 4.1, 5.1 and 6.1 already proves the balanced lower inclusion, rectification, adjoint construction and delta pairing. The repair explicitly identifies these intermediate proof locations and explains the balanced lift and adjoint evaluation yielding C_0(T_{A↑},D_B)=δ_AB. The rescaling recursion and both separate integral lattice comparisons remain valid; the Statement is unchanged.",
    "status": "repaired"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-four-fock-bases-in-a-small-two-factor-tensor-space",
    "finding": "The judge reads a counterexample’s Statement refuted as an accepted supplier assertion. That item actually disproves equality and depends on this example, not conversely. Independently, c−bar(c)=s^-1−s yields L_10=M_10−sM_01 and T_10=M_10+s^-1M_01; inversion gives P_10=M_10 and P_01=M_01+sM_10. With S=[[1,s−s^-1],[0,1]], both stated delta matrix products are I. The four generic families are distinct and the normalized highest-component form and projection formulas are correct.",
    "status": "false_positive"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-residue-translation-functors-give-the-integrable-fock-space-action",
    "finding": "Proof 1.2 incorrectly inferred that the ground class never generates the whole Fock module. At the admitted level l=1 the defining tensor product is the single irreducible factor V(Λ_m), so the inference is false. The repaired step states exact generation of the highest constituent, gives the level-one equality caveat and derives M=L=P in the one-label ground block by highest-weight reciprocity. The integral action and the categorical head/socle conclusion are unchanged, as is the original Statement.",
    "status": "repaired"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-the-local-affine-hecke-socle-argument-for-residue-translations",
    "status": "frontier_owner_repair_required",
    "assigned": false,
    "path": "items/lem-the-local-affine-hecke-socle-argument-for-residue-translations.md",
    "affected_use": "Its Statement identifies c_j with elementary functions of raw Casimir coordinates x_1,…,x_i at an arbitrary coincident eigenvalue, and Proof 1.2 sets the total elementary polynomial equal to 1. The assigned residue-action theorem uses its categorical head/socle conclusion in Proof 2.1.",
    "invalidated_claim": "For r=i=1 at coincident eigenvalue a≠0, raw x_1=a in the central fibre, while the displayed relation h_1=c_1=0 contradicts c_1=x_1. The presentation is correct only in shifted coordinates x_j−a.",
    "minimality": "Define the polynomial coordinates as x_j−a in the Statement and the partial-centre proof. The genuine categorical conclusion is invariant under this shift, so it needs no weakening or change of tableau labels.",
    "additional_nonfatal_defect": "Proof 1.2 names a two-Koszul socle computation without exhibiting it. Over R=C[c_1,…,c_i], the regular-sequence resolution gives Tor_i^R(Z,k)=k in degree Σ_{j=r−i+1}^r j; the variables’ Koszul resolution gives the same Tor as soc(Z) shifted by Σ_{j=1}^i j. Thus soc(Z) is one-dimensional in degree i(r−i). This short calculation supplies the missing justification.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0407205"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle",
    "status": "examined_unaffected",
    "route": "unassigned_frontier_owner_evidence",
    "path": "items/lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle.md",
    "snippet": "page degrees 2d_1,…,2d_r, where d_1,…,d_r are the classical degrees (deg h=1); Given: page grading deg h=2.",
    "affected_use": "The unassigned socle lemma cites this draft frontier supplier in F3 and Proof 2.1 for the one-dimensional socle, trace pairing and regular coinvariant representation, not for a degree-one page grading.",
    "invalidated_claim": "No mathematical claim is invalidated: the parenthesis describes the classical degrees d_i, while 2d_i and the Given fix the actual page degrees. The trace/Frobenius uses remain sound.",
    "minimality": "No repair is required for these uses: classical polynomial degrees d_i and page degrees 2d_i are distinguished in the current text. Its frontier owner may clarify the parenthesis editorially. Despite the digest’s published label, the current carrier is draft and frozen-frontier; it was neither edited nor adjudicated here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "assigned": false,
    "current_status": "draft"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_updates_proposed",
    "reason": "Every direct consumer of the only changed Statement is a draft original-frontier item. No published consumer requires maintenance from this dispatch. The digest’s coinvariant alert was checked against disk: that supplier is currently draft and in the frozen frontier, and its classical-versus-page grading is mathematically sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-degenerate-affine-hecke-algebra",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "For d=3 conjugation by (1 2) fixes J_1=0, J_2=(1 2), J_3=(1 3)+(2 3), but changes s_2. Specifying s_i -> (i i+1) restores uniqueness by generation; the inverse in Proof 5.1 proves existence. PBW rational-model and evaluation-recursion arguments remain valid. The rank-zero/rank-one graded remark is now qualified.",
    "repair": "Specify both generator families in the unique quotient isomorphism.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": true,
    "post_sha256": "c576970639e1e11f8683bd815964116fc47f65256e0df2cd52e42e6f6b119f94",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "Proof 3.1 omitted the unused GL factor in each pair-orbit fiber: over BA the numerator is Z_GL(U)(BA) x GL(W), and over AB it is GL(U) x Z_GL(W)(AB). For dim U=1, dim W=2, BA=0 and A,B nonzero, the corrected quotient has dimension 1+4-2=3. Both corrected numerators are smooth connected unit groups, so fiber smoothness/irreducibility holds. The pair-orbit-minus-shared-orbit dimension computation and all ensuing estimates are unchanged.",
    "repair": "Correct both homogeneous fiber numerators in Proof3.1.",
    "uncertain": false,
    "source_urls": [
      "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0053/LOG_0017.pdf"
    ],
    "familiar": false,
    "post_sha256": "02929080af53f9bec78b3a4b01684cb7fa0ac22f8d036b67eea6b3847fe4b1b4",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nilpotent-orbit-equivariant-tensor-covariants-extend-and-polarize",
    "outcome": "confirmed_nonfatal",
    "finding": "F3 previously attributed rational GL(V) complete reducibility directly to Weyl's semisimple-Lie-algebra theorem. Proof4.1 now supplies the missing reduction for the exact bounded polynomial-map module E_K: scalar matrices act trivially on input and output by conjugation; for dim V>=2 an sl(V)-stable complement from Weyl is preserved by elementary SL matrices and scalars, hence GL(V); for dim V=1 the action is trivial. Thus the invariant quotient class has an invariant lift. Hartogs extension and polarized contraction arguments retain both original assertions. The earlier normality supplier Proof9.1 already establishes the rational GL reduction, so this is nonfatal citation/justification repair.",
    "repair": "Supply the sl(V) reduction with trivial scalar action in the actual finite bounded-degree module.",
    "uncertain": false,
    "source_urls": [
      "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0053/LOG_0017.pdf"
    ],
    "familiar": true,
    "post_sha256": "7b37f245e7699c24344b35cacc5be60fe5a06ca8f23fea31f82112c5fa3c7681",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-ordered-monomial-pbw-basis-for-the-shifted-yangian",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "For n=1,p_1=1 the finite quotient is C[D_1^(1)] and its loop degree is zero, so the original unconditional noncommutativity assertion is false. The Statement now distinguishes generator degrees and qualifies commutativity by whether g^e is abelian. Finite Gauss/T ranges, canonical independence, loop symbols, truncation and the two original normalizer charts remain unchanged; Proof11.1 already contained the correct nonabelian qualification.",
    "repair": "Qualify finite loop noncommutativity by the centralizer Lie algebra.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0508003"
    ],
    "familiar": true,
    "post_sha256": "4b298281465569769d38b90b19535cc94a47a3a6432bb43edb19515e6e1e0e84",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-skryabins-equivalence-for-the-type-a-whittaker-pair",
    "outcome": "false_positive",
    "finding": "The rejection overlooks the actual cited supplier proof: lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading, Proof3.1 explicitly proves Q_chi is right W-free by filtered leading-term spanning and independence over gr W; Proof4.1 uses this freeness to split the augmented complex. Thus the original Proof1.2 accurately cites a locally proved dependency result, despite its omission from the supplier Statement. The unit/counit proof, finite m-flag tensor bijection and shifted coproduct W-linearity were checked; no edit is required.",
    "repair": "None; exact raw hash fb4994e0589f9536876a9828593673f0097ca49f89e93c7e4c9df8c250554175 retained.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0105225"
    ],
    "familiar": true,
    "post_sha256": "66085df43a882ef33c99b8353d90afc4c8bb06c478e78d7c3362295db8f66135",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "unchanged_false_positive"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-the-whittaker-functor-from-the-relevant-parabolic-o-summand",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "For gl_1 the tensor of N=C with a nonsemisimple central Jordan module Z fails Cartan semisimplicity, so V(N tensor Z) is undefined on the original genuine-O domain. The Definition now specifies finite-dimensional Cartan-semisimple factors. Proof5.1 establishes weight semisimplicity, parabolic local finiteness and finite U(m)-generation of their tensor products; Proof3.2 explicitly distinguishes its broader algebraic matrix lifts from this categorical interface. Natural V and V* and their tensor powers satisfy the restriction, retaining all intended Schur and residue uses.",
    "repair": "State and prove the Cartan-semisimple tensor domain for genuine O.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0508003",
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": false,
    "post_sha256": "8dada30ff5c497c7dc5cd357cacb5d844ca6b5b2ee4a6bf064a9bddb0ceff320",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-a-hecke-action-alone-does-not-imply-double-centralizer",
    "outcome": "confirmed_nonfatal",
    "finding": "The two centralizer failures are correct: on C^2_triv tensor C^2_nat the Hecke image has dimension1, its commutant16, the enveloping image4, and its commutant4. The parenthetical equivalently in Proof4.1 incorrectly identifies the deformed W/cyclotomic actions with U(g^e)/truncated-semidir-ect actions. Replaced it with the exact associated-graded-image assertion of the supplier. The refuted Statement and all centralizer computations are unchanged.",
    "repair": "Replace action equivalence by associated-graded image comparison.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": true,
    "post_sha256": "cefd137acce09b92af83501185c55c5d6d0d431bbcfc74c162f349a0210b0d32",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "finding": "For the one-row/two-column pyramid with c=(0,0),d=0 the ground projective is a parabolic Verma free over the negative root f; multiplication by f-chi(f) is injective, so raw Wh(P_c)=0. Yet pi(P_c)=End_g(P_c)=C and genuine V_Wh(P_c)=C_c. The Statement now defines mathsf L(A)=V_Wh(L(A)), citing the actual continuous-dual Definition, and Proof6.2 explicitly uses that functor. The Hom comparison and simple/projective/tilting/multiplicity conclusions then follow from the unchanged exact quotient/Morita interfaces.",
    "repair": "Replace raw Wh(L(A)) by the genuine continuous-dual V_Wh(L(A)) and declare its supplier.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217",
      "https://arxiv.org/pdf/math/0508003"
    ],
    "familiar": false,
    "post_sha256": "508fc5abcd8ada8f1b89dd17fcc9c4c0add46618104047b038f9748094f80f29",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u24.json",
    "disposition": "repaired_locally_pending_engine_rejudgment"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "Every direct consumer of the four changed Statement/Definition sections is a draft item in the frozen frontier. No defective published consumer or changed published interface was found. Published Weyl and Schur-Weyl interfaces were read and retained; the missing GL reduction was repaired in its assigned draft consumer. No audit classification or published repair is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer",
    "route": "frontier_owner",
    "location": "Proof5.1",
    "snippet": "Put $Q(A)=\\operatorname{Wh}(P(A))$ for standard labels.",
    "affected_use": "Put $Q(A)=\\operatorname{Wh}(P(A))$ for standard labels. This expression is used in the category-O to finite-W Hom/tensor comparison.",
    "invalidated_claim": "Raw Wh(P_c)=0 in the one-row/two-column d=0 ground example, whereas the genuine V(P_c)=C_c. The raw reading invalidates the ground projective-cover construction.",
    "minimality": "Use the genuine continuous-dual V_Wh consistently in Proof5.1 and in its tensor detector U_d; this is a proof/notation repair with no Statement change.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": true,
    "disposition": "owner_repair_required"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-category-o-translation-intertwines-residue-induction-and-restriction",
    "route": "frontier_owner",
    "location": "F3",
    "snippet": "$\\gamma_M:\\pi_dM\\cong\\operatorname{Hom}_{W_d}(U_d,\\mathrm{Wh}M)$",
    "affected_use": "$\\gamma_M:\\pi_dM\\cong\\operatorname{Hom}_{W_d}(U_d,\\mathrm{Wh}M)$ This expression is used in the category-O to finite-W Hom/tensor comparison.",
    "invalidated_claim": "The same d=0 ground example has pi(P_c)=C but raw Wh(P_c)=0, so F3 is false if Wh is the existing raw-vector functor.",
    "minimality": "Replace the three raw Wh expressions in F3 with the genuine V_Wh functor supplied by the continuous-dual Definition. The natural V,V* tensor uses already satisfy Cartan semisimplicity.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": true,
    "disposition": "owner_repair_required"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-category-o-translation-intertwines-residue-induction-and-restriction",
    "route": "frontier_owner",
    "location": "Statement and Proof1.2",
    "snippet": "$f_i^{H},e_i^{H}$ be the Hecke residue functors of [[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]].",
    "affected_use": "The Statement invokes the full cyclotomic functors, while Proof1.2 defines induction B_(d+1) tensor_(B_d) pi_d using tensor image algebras.",
    "invalidated_claim": "For lambda=(1,1),c=0,d=2 and M=Lambda^2 C^2, pi_2 M is the S_2 sign. Full induction to C[S_3] has dimension3 and contains sign, while pi_3(M tensor C^2) is the dimension2 standard Specht. At residue -2 the full induction has the sign constituent and the gl_2 natural translate is zero. Thus the full-tower natural isomorphism fails.",
    "minimality": "Explicitly select compatible image/supported induction and restriction in the Statement (or the justified stable/allowed-residue scope). Proof1.2 already proves the image-tower comparison; preserve that richer valid claim. A necessary Statement correction triggers only its next direct hop.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0605217"
    ],
    "familiar": true,
    "disposition": "owner_repair_required"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-degenerate-cyclotomic-hecke-tower-and-residue-functors",
    "route": "frontier_owner",
    "location": "Definition(1)",
    "snippet": "these idempotents are those of [[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]]",
    "affected_use": "Definition(1) attributes the joint polynomial residue spectral projectors e(i) to the stable-range supplier.",
    "invalidated_claim": "The stable-range Definition supplies the retained-row projector e and supporting central idempotent f, rather than the joint dot projectors. The tower item separately constructs its interpolation projectors, so the construction is sound but this attribution is inaccurate.",
    "minimality": "Cite the tower item's own polynomial interpolation construction, retaining the distinction from the supporting central idempotent; no mathematical weakening or new prerequisite is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "disposition": "owner_metadata_repair_required"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples",
    "location": "Final page paragraph",
    "disposition": "metadata_repaired",
    "affected_use": "The counterexample summary referred to M the trivial gl_2-module without its essential two-dimensional multiplicity.",
    "invalidated_claim": "The one-dimensional trivial module gives the usual natural two-dimensional module, for which both centralizer identities hold.",
    "minimality": "The summary now specifies M=C^2 as the two-dimensional trivial gl_2-module; all item computations and page placements are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-relative-smooth-triangulation-and-projection-preserving-fitting",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repair_completed_pending_controller_review",
    "reason": "At v=0 both differentials vanish, so the original strict inequality asserts 0<0 and excludes even g=f. Restricted the derivative inequality to nonzero tangent-star vectors and specified delta>0, retaining strict control of every nonzero direction and leaving the zero-dimensional derivative condition vacuous.",
    "post_sha256": "7d225a7f4e05548784d8c1f9ae8eed7a47209407d3ceda0f0675c3a382167078",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps",
    "outcome": "confirmed_nonfatal",
    "status": "repair_completed_pending_controller_review",
    "reason": "F1 interchanges vertices and simplices: the dependency defines vertices as nonempty faces and simplices as strict face chains. Step 3.1 already uses the correct chain argument, so this is a nonfatal restatement error. Corrected F1 and the inherited zero-vector defect in F3; the Statement and all proof constructions remain unchanged.",
    "post_sha256": "6a7448d58904b893f56ae957633cdc083272243470caaf92829c50e49a63f513",
    "uncertain": false,
    "source_urls": [
      "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation",
    "status": "frontier_owner_repair_required",
    "supplier": "def-relative-smooth-triangulation-and-projection-preserving-fitting",
    "affected_use": "F1: $|dg_b(v)-df_b(v)|<\\delta|v|$ for every $b$ and every tangent-star vector $v$.",
    "invalidated_claim": "This quantified strict inequality still includes v=0 and becomes 0<0, contradicting the repaired supplier interface.",
    "minimality": "Insert nonzero before tangent-star vector and refresh this item's supplier Definition contract quotation. Its Statement and nonzero-direction proof estimates remain unchanged.",
    "reason": "Confirmed inherited zero-vector defect in the direct consumer F1; outside this assignment, so no edit or adjudication of that consumer is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-analytic-topology-and-finite-smooth-algebraic-stratifications",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "The complete published constructible-subset Definition explicitly assumes AC, contradicting the blanket choice-free-supplier sentence. This is a nonfatal dependency annotation defect: locally closed means Zariski U intersection Z and requires no choice. Defined it directly, removed that dependency, and retained every topology, smoothness and stratification condition; the classical-variety supplier proves the principal-open and finite-equation facts without AC.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "lem-finite-poset-diagrams-have-bounded-finite-bar-models",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "finding": "Confirmed logic defect in step 5.2: for the singleton poset and M=k in degree -1, the nonzero factor has i=0 and r=-1, violating the asserted i<=b=-1. The source upper bound is 0. Replaced that implication by -h<=i<=0 and a<=i+r<=b, which give a<=r<=b+h; made the chain contribution M^{r-n}(p_n) explicit. Statement unchanged. Checked representable projectivity, all bar faces, the signed evaluated contraction, total differential, finite-projective Hom acyclicity, derived-Hom range and field-extension compatibility.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "lem-field-module-sheaves-have-injective-derived-models",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "finding": "The prose equated all bounded-below injective complexes with Db, contrary to the displayed D+ equivalence: on pt the zero-differential complex I^n=k for n>=0 is injective and bounded below but has unbounded cohomology. Corrected the prose to D+ and retained the intended bounded-category interface by restricting to injective complexes with bounded cohomology; canonical truncation in the fully faithful bounded embedding of the actual F2 supplier proves this restriction. Added the explicit complex-replacement supplier to the Statement and the restriction argument to proof 2.1. Local-system extension splitting, finite-matrix kernels/cokernels, exact stratum restriction on roofs, and fixed/common-stratification cone closure remain sound.",
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "ex-constructible-six-operations-on-a-point-and-an-open-closed-line",
    "status": "routed-frontier-owner",
    "supplier": "lem-field-module-sheaves-have-injective-derived-models",
    "finding": "F2 repeats the false unrestricted bounded-below injective model for Db; bounded-cohomology qualification suffices and proofs 1.1 and 2.1 retain all their conclusions.",
    "minimal_repair": "Fact F2 and its owning citation contract only; Example section unchanged.",
    "uncertain": false,
    "ledger_path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u28-ambient-compactness-citation",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "class": "accuracy",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "lem-compatible-refinement-for-tuple-indexed-coverings",
      "caught_at_stage": "step5-initial-1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "outcome": "confirmed_nonfatal",
      "subclass_note": "Step 3.2 used intrinsic compactness of the closed set Sigma to extract finitely many ambient-open W members without the required ambient criterion. Added dependency and fact F5 citing claim 2 of lem-compactness-of-a-subspace-is-ambient, and used it explicitly. The shrinking, repeated-tuple meet covers and N/M finite descents remain sound without AC; the Statement is unchanged.",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u28.json",
          "anchor": "lem-compatible-refinement-for-tuple-indexed-coverings"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u28-godement-boundary-identification",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "class": "accuracy",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology",
      "caught_at_stage": "step5-initial-1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "outcome": "confirmed_fatal",
      "subclass_note": "Original F5/step 3.3 claimed independence for arbitrary resolutions although the cited theorem only covers injective resolutions. A natural Godement cohomology isomorphism alone does not identify connecting maps. Repaired F5 and added exact-triple extensions into a split injective horseshoe, identified the comparison by canonical acyclic-resolution dimension shifts, then used naturality of complex boundaries. The original Statement, canonical comparison and AC assumption remain unchanged.",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u28.json",
          "anchor": "lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology"
        }
      ],
      "defect_type": "logic"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "defect_id": "frontier-44-special-representation-examples-28-six-step-step5-initial-r1-u28-cofinal-order-bounded-covers",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "class": "accuracy",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology",
      "caught_at_stage": "step5-initial-1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "outcome": "confirmed_nonfatal",
      "subclass_note": "The second remark confused vanishing for one fixed finite cover with vanishing in the refinement limit. The cover consisting of the whole space has order one for any space, so that inference would incorrectly force all positive-degree Cech cohomology to vanish. Replaced it by fixed-cover vanishing plus the required cofinal-family condition. Steps 1.3, 2.1, 2.2 and 3.1 already use that condition correctly, and the Statement is unchanged.",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u28.json",
          "anchor": "lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "f44-six-step5-initial-r1-u3-squeeze-natural-nonvanishing-citation",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "subject": "ex-two-squeeze-computations",
      "class": "accuracy",
      "subclass": "dependency-citation",
      "severity": "nonfatal",
      "location": "Facts & Assumptions F11; Verification step 2.2",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "items/ex-two-squeeze-computations.md",
          "note": "Field axioms alone allow characteristic 2. Positivity and nonvanishing of k+1 are now attributed to the existing lem-of-naturals-positive via F14, cited in step 2.2. Both convergence claims are unchanged."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-batch-3.proof-contracts.json",
          "note": "The owned F14 citation now includes use 2.2 and derivation d-2.2 includes F14; original independent risk-review evidence was preserved."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u3.json",
          "obligation": "initial:1:3:ex-two-squeeze-computations:gpt-6.1-sol:e1012d28a833b673de9ce555aeba732d442bf179db42298abc963a5be86515cd"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No Statement or Definition changed, no new prerequisite was authored, and no defective published use was discovered. The assigned draft example's proof/citation repair creates no supplier-interface event or outside-consumer maintenance obligation."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "row": {
      "defect_id": "f44six-step5-initial-r1-u32-smooth-emission",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:55:47.258837+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "source": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json",
      "adjudication_ref": [
        "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json"
      ],
      "item_sha256": "fbd522a7976709e6870845a8209f4d093218e6d267a64d876d8ca5b1e1e271c3",
      "summary": "Step 3.1 omitted dominant pieces not surjective onto the whole residual component: for C* into C, no source stratum was emitted. Replaced that condition by equality of image closure with R_i, so step 2.1 supplies smooth surjectivity over V_i. Also made the recursion frontier invariant explicit and corrected the reversed closure explanation in step 4.1.",
      "repair_cost": "repair+rejudge",
      "prevention": {
        "kind": "none",
        "ref": "No new mechanical prevention added; local mathematical repair only."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "proposed_append",
    "row": {
      "defect_id": "f44six-step5-initial-r1-u32-field-abelian-comparison",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T15:55:47.258837+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "source": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json",
      "adjudication_ref": [
        "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json"
      ],
      "item_sha256": "f5054bbfa28d64ca2980267e85bcc519df0ed951efcd1bddf95ee307083072f0",
      "summary": "F7 and step 2.2 attributed a cross-category comparison to a definition that only compares injective data inside Ab(X). A k-injective need not remain abelian-injective, as F_p on a point shows. Repaired using its proved flasqueness, the published abelian flasque-acyclicity theorem, and the acyclic-resolution theorem on Ab(U); all resolution kernels lie in the whole-category supplied datum.",
      "repair_cost": "repair+rejudge",
      "prevention": {
        "kind": "none",
        "ref": "No new mechanical prevention added; local mathematical repair only."
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record_false_positive",
    "subject": "ex-incidence-model-of-a-closed-interval",
    "reason": "The supplier Statement summarizes finite models, but its complete proof step 3.2 explicitly identifies RΓ(X,q^{-1}V) with the finite poset model and gives incidence terms product over σ_0<...<σ_p of V_{σ_p}. Its steps 2.4 and 3.2 prove the acyclic-resolution comparison, while the bar supplier steps 3.1, 4.1 and 5.2 specify and justify the face differential. On the interval this is exactly the complex in 1.1, up to the harmless uniform degree-one sign. The invertible coordinate change removes an identity summand and gives u_0-u_1. F1 is therefore a valid citation to an explicitly established construction; no item edit is warranted.",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no_change",
    "reason": "No published item was edited, no supplier Statement or Definition changed, and no potentially defective published consumer was found in the relevant uses inspected. Draft-only adjudication evidence belongs in this report and the defect ledger."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "subject": "lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding_and_repair": "Confirmed a nonfatal supplier-interface overstatement: the cited Statement omits the displacement bounds, although its Proof 1.1 already constructs them. The repair imposes them locally by continuity of the tube embedding and a smooth positive minorant, and proves middle-band containment by excluding a frontier base limit. All collar identities, compact trapping, level-transport conjugations and the mapping-cylinder endpoint argument retain their original hypotheses.",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "subject": "lem-controlled-stratified-submersions-have-continuous-local-trivializations",
    "severity": "nonfatal",
    "disposition": "fixed",
    "finding_and_repair": "Confirmed a nonfatal interface-citation omission: frontier-displacement shrinking is established in the control-data supplier Proof 1.1, but not in its cited Statement. Steps 1.1 and 3.1 now derive that shrinking and relative band closure locally; step 4.1 uses the explicit bounded-base subsequence contradiction. Minimum-norm lifts, linear partition patching, constant-radius endpoint exclusion and proper whole-fibre transport retain the stated Whitney, local-closedness and AC hypotheses.",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "subject": "thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods",
    "severity": "fatal",
    "disposition": "fixed",
    "finding_and_repair": "The claimed prescribed-tube extension is absent from F2's Statement, so the original proof invokes an unsupported prerequisite for preserving the chosen ordinary projection and radius. The repair uses F2's actual f-preserving clause on the locally closed punctured tube with smooth stratified submersion g=(pi,r), then adjoins the unchanged lowest ordinary triple. Compact normal-disk slices prove properness, the affine normal sphere gives the semialgebraic link, and ordinary distance controls apex continuity. No arbitrary prescribed-tube extension is asserted.",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
    ],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_current_adjudication",
    "subject": "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models",
    "severity": "fatal",
    "disposition": "fixed",
    "finding_and_repair": "F3 gives fixed-space and conical local cochain models, not the arbitrary compact-fibre product reconstruction invoked in the original step 7.1. F4's formula applies to pullbacks and cannot by itself certify that input. New step 2.2 first proves full faithfulness for projection to the fibre using F4 with the ball as fibre, then lifts finite truncation and skeletal support triangles to reconstruct E=q*G. Restriction-compatible sections on smaller balls identify proper pushforward with the constant finite fibre model. Step 7.1 also chooses source strata respecting the constructibility witnesses of Rj* and j! before applying that argument.",
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [
      "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
    ],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published carrier was edited or found defective in this review. The four repairs preserve their public Statements, so they create no published-consumer supplier-interface event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_upsert",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "id": "def-morphisms-and-polarizability-of-rational-hodge-structures",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "disposition": "fixed",
    "location": "definition",
    "reason": "The original definition calls the zero Hodge structure simple because it has no nonzero proper substructure. Simplicity requires a nonzero object; added V≠0. This is a defective definition (other), rather than a failed theorem inference or dependency citation.",
    "post_sha256": "057adb25e7e62a11eb94ba9e4c65482d9feaadf80547f99814d936de0c8ded43",
    "adjudication_ref": {
      "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u34.json",
      "id": "def-morphisms-and-polarizability-of-rational-hodge-structures",
      "model": "gpt-6.1-sol",
      "context_sha256": "4733df1150ff1de96b2b5d678e3e6b13bc3f17ed96e87c2670fa002992af4eb3"
    },
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_upsert",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "id": "lem-smooth-projective-analytification-has-rational-kahler-polarization",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "fixed",
    "location": "statement",
    "reason": "An invertible Jacobian minor supplies only local graph charts. On E: y²=x³−x, the standard smooth affine open y≠0 has unit minor 2y, while its free-coordinate projection x identifies (2,√6) and (2,−√6). Its analytification is a genus-one surface minus four points, hence is not planar (handle cycles have intersection number one), so no chart onto an open subset of C exists. Corrected the global Statement to local analytic shrinking as actually proved in 1.1.",
    "post_sha256": "6d50653f1f337026a25f08f4a42774d5c340890ece7ffda8f86da91451646491",
    "adjudication_ref": {
      "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u34.json",
      "id": "lem-smooth-projective-analytification-has-rational-kahler-polarization",
      "model": "gpt-6.1-sol",
      "context_sha256": "c0b24fb69fd488413f447f8e7b8ac868b36e538a4b6cb90744644b03bdcbc79e"
    },
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/article/AIF_1956__6__1_0.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_upsert",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "id": "thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "disposition": "fixed",
    "location": "facts-block",
    "reason": "F4 omitted the holomorphic hypothesis present in the supplier Statement and proof 3.1. Complex conjugation z↦z̄ on C/(Z+iZ) is smooth and pulls the nonzero class [dz] of type (1,0) to [d z̄] of type (0,1). Added the exact holomorphic-map and compact-Kähler hypotheses. Nonfatal: neither proof step uses pullback functoriality; hard Lefschetz follows from harmonic representatives, commuting operators and primitive strings independently of that clause.",
    "post_sha256": "8aaee23bc47f5f52ca9e0c4520ed766c0827a41af7226da492a424b8e63c9266",
    "adjudication_ref": {
      "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u34.json",
      "id": "thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz",
      "model": "gpt-6.1-sol",
      "context_sha256": "950945f422a9509d980d26bd4f719e534b8b980c686b66eb4d0b12e16fc5a9b2"
    },
    "uncertain": false,
    "source_urls": [
      "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "id": "lem-smooth-projective-modification-preserves-open-cohomology-images",
    "supplier": "lem-smooth-projective-analytification-has-rational-kahler-polarization",
    "disposition": "open",
    "location": "facts-block",
    "affected_use": "F1 says every standard smooth algebraic chart becomes a holomorphic chart; proof uses compact oriented manifolds, open inclusions and continuous holomorphic modification maps.",
    "invalidated_claim": "Every whole standard smooth algebraic chart becomes a single holomorphic coordinate chart.",
    "minimality": "Qualify only the quoted F1 chart clause by local analytic shrinking. The image-comparison argument requires the resulting manifold and morphism conclusions, which are preserved.",
    "reason": "F1 repeats the same false global coordinate-chart assertion; the elliptic affine open y≠0 is a counterexample. Route only the F1 local-shrinking qualification and owning citation mirrors to the frontier owner.",
    "route": "ordinary_frontier_owner",
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/article/AIF_1956__6__1_0.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_finding",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "id": "lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations",
    "supplier": "lem-smooth-projective-analytification-has-rational-kahler-polarization",
    "disposition": "open",
    "location": "facts-block",
    "affected_use": "F1 says every standard smooth algebraic chart becomes a holomorphic chart; proof 1.1 uses local holomorphic submersion coordinates, and 2.1 uses local product charts for horizontal complements.",
    "invalidated_claim": "Every whole standard smooth algebraic chart becomes a single holomorphic coordinate chart.",
    "minimality": "Qualify only F1 by local analytic shrinking. The relative implicit-function construction in 1.1 already uses local coordinates; no global chart is needed.",
    "reason": "F1 repeats the same false global coordinate-chart assertion; the elliptic affine open y≠0 is a counterexample. Route only the F1 local-shrinking qualification and owning citation mirrors to the frontier owner.",
    "route": "ordinary_frontier_owner",
    "uncertain": false,
    "source_urls": [
      "https://www.numdam.org/article/AIF_1956__6__1_0.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_audit_note",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "reason": "The exact direct dependency/reference consumers of the two changed interfaces are all draft frozen-frontier items. No published or outside-frontier direct consumer was found, and no published item was edited. The two defective F1 repetitions are routed to ordinary frontier owners, not published maintenance.",
    "consumer_ids": [
      "lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures",
      "lem-smooth-projective-modification-preserves-open-cohomology-images",
      "lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations",
      "thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties",
      "thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures",
      "thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties",
      "thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "f44-six-step5-r1-u35-original-smooth-locus",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "35",
      "group": "batch-35",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u35.json",
          "note": "F3 overstates avoidance as Reg(Y_i), contradicted by the cusp blowup chart. Corrected to preservation of original Reg(Y); the numbered proof required only that valid consequence, so the defect is nonfatal."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u35.json",
          "obligation": "initial:1:35:lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications"
        }
      ],
      "post_raw_sha256": "4045e0d266ef567b2e48caf7efdd333ccc94b13cef707f727104d6a6efe6c9a4"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "f44-six-step5-r1-u35-logarithmic-proof-interface",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "35",
      "group": "batch-35",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-the-logarithmic-class-of-the-punctured-line-has-weight-two",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "false-positive",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u35.json",
          "note": "The allegation overlooks supplier Proof steps 3.1 and 6.1 already quoted in checked_proof_evidence. The local construction proves the rational normalization and Hodge-compatible E2 abutment; the example remains unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u35.json",
          "obligation": "initial:1:35:ex-the-logarithmic-class-of-the-punctured-line-has-weight-two"
        }
      ],
      "post_raw_sha256": "aabad49d8baf649f2efbf3f05faa89f515e12350ac3e0b7b1d92cea031849d28"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-review-note",
    "subjects": [
      "thm-weak-embedded-desingularization",
      "thm-principalization-of-ideals"
    ],
    "reason": "The published weak-desingularization Statement correctly names original Reg(Y), and principalization supplies the SNC total boundary transform. The assigned draft restatement alone required repair. No published carrier change or separate maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0401401"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-verdier-duality-on-oriented-stratified-complex-varieties",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "The all-sheaf all-open compact-support prerequisite was attributed to the constructible-only F4 interface. Added existing polyhedral and open/closed-support suppliers in F6 and supplied the finite-cover and closed-fibre transfer argument in step 1.1. No Statement or Definition changed.",
    "source_urls": [
      "https://stacks.math.columbia.edu/tag/09V2",
      "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
    ],
    "uncertain": false,
    "familiar": false
  },
  {
    "path": "research/defect-ledger.jsonl",
    "id": "thm-constructible-six-functors-proper-base-change-and-verdier-duality",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The F1 fact and its contract quotes state only proper base change, so the attribution of arbitrary compact-support exchange in 1.1 and its dualization in 4.1 was inaccurate. This is nonfatal because the linked ordinary theorem already derives general exchange in Proof 1.1 through the existing support-calculus lemma, whose Statement and Proof 1.2/3.1 supply the exact general exchange and pasting. Repair adds that proved supplier directly as F5 and explicitly dualizes its exchange with the common normalized duality shift; no theorem statement is weakened.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
    ],
    "familiar": false,
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u37.json"
  },
  {
    "path": "research/defect-ledger.jsonl",
    "id": "thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The F1 fact and its Statement quote preserve simplicity under Q_N(-)[s_N], not ordinary restriction, so the former attribution to an underlying simplicity clause was inaccurate. This is nonfatal: the bridge already proves the missing assertion in Proof 1.2 and 5.1 without depending on this consumer. Repair makes the needed argument local: connected G makes every ordinary sub-local-system equivariant by parallel transport of the action isomorphism; localization-image subobjects force a simple object to have one irreducible support and a simple generic local system, and the boundary characterization identifies its intermediate extension.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
    ],
    "familiar": false,
    "evidence": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u37.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "entry": {
      "defect_id": "f44-six-step-step5-initial-r1-u39-transverse-constructibility",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "subject": "lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact",
      "batch": "39",
      "severity": "fatal",
      "defect_type": "logic",
      "caught_at_stage": "5.1",
      "disposition": "fixed",
      "reason": "The original transverse exactness claim applies to all algebraically constructible objects although its fixed strata need not support their cohomology. On Y=C with its single stratum, the point inclusion is transverse and the perverse skyscraper k_0 restricts after [-1] to k[-1], with nonzero H^1 on a point, outside the perverse heart. Restricting transverse exactness to complexes constructible for the transverse stratification repairs the false assertion; smooth exactness remains unrestricted.",
      "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u39.json",
      "post_sha256": "3df57e9e58d35ba935a942beb5bac9cba50bd7055cac73d685fbb4bb5263da30"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record_examination",
    "supplier": "lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact",
    "consumer_ids": [
      "lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects",
      "lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction"
    ],
    "published_consumer_ids": [],
    "disposition": "no_published_consumer_or_maintenance_repair",
    "reason": "Exact current dependency/reference discovery and the item/page literal-use scan return only the two draft frozen-frontier consumers. Their actual compatible-coefficient uses remain sound; no published item or outside-frontier maintenance target was found. The historical Step-3 coefficient-product defect is distinct and its original record remains intact."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports",
    "batch": "40",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Record this round separately: incomplete explicit proper-support base-change license in F1 and implicit equivariant proof qualifiers are repaired; do not recategorize the two earlier fixed fatal rows.",
    "evidence_path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u40.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published carrier was changed and no defective published consumer use was found in this assignment. Statement/Definition unchanged; no supplier-interface event is emitted."
  },
  {
    "ledger": "defect",
    "id": "ex-proper-cech-descent-does-not-require-acyclic-fibers",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Remove the explicit point-insertion contraction from F1, whose contract quotes only the supplier Statement. Verification 2.1 already proves the contraction locally, so there is no fatal mathematical defect; bounded constant coefficients satisfy the descent hypothesis.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-proper-cech-descent-does-not-require-acyclic-fibers",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "location": "proof-contract citations[F3].quote",
    "reason": "The original F3 contract quotation no longer matched the current supplier Definition. Its analytic-topology clause still establishes the same chart-gluing use in Verification 1.1. Refreshed only that assigned quotation and obtained a strict one-item contract pass; no consumer mathematical claim changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step-step5-initial-r1-u42-1",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "def-borel-moore-homology",
    "batch": "42",
    "caught_at_stage": "step5-initial",
    "severity": "nonfatal",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u42.json",
        "note": "The compact inverse image is intrinsically compact, whereas the local-finiteness neighbourhoods are ambient opens. The argument is valid by the proved ambient compactness criterion, but def-compact-space expressly requires its citation. Added lem-compactness-of-a-subspace-is-ambient to deps and at the finite-subcover use; finite choice only, with no AC assumption."
      }
    ],
    "current_item_sha256": "c5c86ac22f2b17feb283d808cba0bc3fedfdf76cfdb4c6c819fae1c92d0fcce8"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step-step5-initial-r1-u42-2",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "def-split-augmented-simplicial-objects-and-matching-objects",
    "batch": "42",
    "caught_at_stage": "step5-initial",
    "severity": "nonfatal",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u42.json",
        "note": "The extension remark lacked the necessary specified splitting of the lower truncation. The given A^1 example cannot be split since its zero-section degeneracy is not an open-and-closed summand. Deligne III (6.2.3)-(6.2.4), printed pp.19-20, explicitly requires split lower data and gives uniqueness up to unique data-preserving isomorphism. Repaired only the remark; Definition unchanged, and the hyperresolution induction already supplies the required splitting."
      }
    ],
    "current_item_sha256": "b368040c5a992155e987af2519b9c9a3b38497184fdc8f7702395d1ae7bd9928"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step-step5-initial-r1-u42-3",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "thm-proper-varieties-admit-smooth-projective-hyperresolutions",
    "batch": "42",
    "caught_at_stage": "step5-initial",
    "severity": "nonfatal",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u42.json",
        "note": "F1 incorrectly applied integral projectivity to an arbitrary smooth ambient scheme; A^2 is a counterexample. Qualified only that sentence to X=P^N and applied the integral-projective blowup lemma inductively. The actual step 1.1 already starts in P^N, with proper regular centers and nonzero finite-type ideals; matching limits, split induction and relative refinement remain valid. Statement and all proved scope are unchanged."
      }
    ],
    "current_item_sha256": "06682bd4a9250c8e2a4aa6b1445acbb8272a058b575de9d568b652cf405d9227"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step-step5-initial-r1-u42-4",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree",
    "batch": "42",
    "caught_at_stage": "step5-initial",
    "severity": "nonfatal",
    "disposition": "fixed",
    "evidence": [
      {
        "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u42.json",
        "note": "The cited descent Statement requires bounded constructible F in D^b_c(X;k), not arbitrary bounded-below coefficients. Corrected F2 to this exact field-coefficient domain and cochain lower bound. Every actual descent use in steps 1.1, 3.1 and 3.2 is Q_Y concentrated in degree zero, so the constructed MHS, functoriality and class-map claims are unchanged; no extension theorem is needed."
      }
    ],
    "current_item_sha256": "3aeefc48ac9e2d48627a414b88f1be15cdb6a9c531bb066b744497ae957cff84"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "f44-six-step-step5-initial-r1-u42-stale-supplier-quotes",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "subject": "thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree",
    "batch": "42",
    "caught_at_stage": "step5-initial",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "Focused strict contract check found stale F4 analytification, F6 analytic-topology and F8 Borel-Moore quotes. Checked current supplier qualifications against actual proof uses and refreshed only the three exact quotes under the shared metadata lock. Subsequent strict checks pass; no additional mathematical item edit.",
    "evidence": [
      {
        "path": "research/frontier-44-special-representation-examples-28-six-step-batch-42.proof-contracts.json",
        "note": "Only the three citations owned by the assigned proper-weights item were refreshed; historical risk-review evidence preserved."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item was edited or identified as defective. The only changed Definition is the Borel-Moore compactness citation; both direct consumers are draft frontier items and their precise uses remain sound. Historical audit rows and evidence remain untouched."
  },
  {
    "ledger": "defect",
    "id": "thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis",
    "classification": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "finding": "Generation without word idempotents fails for the two opposite-arrow affine axes: all dots and crossings have degree 2 but the two independent diagonal identities have degree 0.",
    "correction": "Statement and Proof 5.1 now include word idempotents; the PBW basis, faithfulness and grading are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/0901.3992"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes",
    "classification": "confirmed_nonfatal",
    "status": "frontier_owner_repair_required",
    "affected_use": "Fact F3 repeats generation by dots and elementary crossings alone; Proof 2.1 actually uses PBW monomials ending in e_nu.",
    "invalidated_claim": "F3 omits idempotents in its generation subclause; the actual surjectivity and injectivity proofs remain valid.",
    "minimality": "Insert word idempotents in F3 only; keep Statement and the existing basis proof unchanged. Route to the assigned frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis",
    "classification": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "Owning page repeated the omission; assigned contract boundaries cited step 4.1 for the terminal basis equivalence and mismatched the endpoint and degenerate computations.",
    "correction": "Added word idempotents to the page summary and reconciled only the assigned derivation and four boundary evidence rows under the shared lock.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "thm-polynomial-representation-of-a-klr-algebra",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "f03a8ec194b80db7c76d8c772ba295f5fd5cedb13358d095feeb9744e54186f9",
    "outcome": "false_positive",
    "defect_type": null,
    "disposition": "no-defect",
    "evidence": "The KLR datum imports def-symmetrizable-cartan-datum-for-a-quantum-group, whose Definition explicitly makes I finite nonempty. Thus there are finitely many sequences and weights of height n; the fixed-weight finite dot-degree argument in step 8.1 gives finite homogeneous components of their finite sum R_n(Q). The infinite-I counterexample is outside the actual hypotheses. The polynomial action, component grading, braid correction and triangular field-automorphism independence argument were examined; no item change is warranted.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "thm-klr-pbw-basis-theorem",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "dc1f4fdf12f59649b9d66e1cbfa43af5c67d2486dac249f97219ec14dcb8ba04",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "repaired-awaiting-independent-rejudgment",
    "evidence": "Relation (6) gives x_a tau_a e(nu)=tau_a x_{a+1} e(nu)+e(nu) and x_{a+1} tau_a e(nu)=tau_a x_a e(nu)-e(nu) on equal colours. Neither the whole-expression plus/minus rule in old step 1.1 nor its positive choice gives the first identity. Replaced it with both exact rules and the decreasing dot/crossing inversion argument. Reduced-word corrections, localized leading permutations, Hilbert series and local finiteness remain valid; Statement unchanged.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "ex-the-double-edge-klr-braid-correction",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "f6c17ce7e3407f211f9a2f1cb4428e005dfe5dd4f55894ec22cec9af09d2aab1",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "disposition": "repaired-awaiting-independent-rejudgment",
    "evidence": "F3 incorrectly used e(nu) as the right idempotent of e(nu)R_3e(nu-prime), and omitted w nu-prime=nu. Corrected both clauses. The actual braid calculation is in the diagonal (i,j,i) block and follows directly from relation (7), so this misstatement did not invalidate the computed example: classify nonfatal. Also corrected second difference to first divided difference and justified nonvanishing by distinct PBW dot monomials, including characteristic two. Quadratic and cubic signs and total degree 2 were checked; no Statement/Definition section changes.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "b3793406bf555d0725d931fbcde1a7072359a6fa1dfe6e868f6c8df511fb0dfb",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "disposition": "repaired-awaiting-independent-rejudgment",
    "evidence": "Old step 1.1 identified the full m-variable polynomial ring with the first rank-m root extension; for m=3 its actual rank is 6. Replaced this by the full successive monic-root tower A_0 through A_m, proved each extension rank m-r+1 and the final polynomial-ring isomorphism by coefficient comparison and inverse substitution. Its Artin basis has rank m!, and PBW then gives central rank (height(beta)!)^2. The finite endomorphism splitting, central-augmentation annihilation, nilpotent degree-zero idempotent lifting and projective-cover/orbit-basis arguments remain sound. Statement unchanged.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "def-the-klr-cartan-pairing",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "eb7503ec2403018c96b40b0c70df96dc205282b4375f4e0656db4bf0f4cc4a07",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "disposition": "repaired-awaiting-independent-rejudgment",
    "evidence": "The Krull-Schmidt Statement does not assert central freeness, as the rejection says, but its explicit proof step 1.1 establishes that prerequisite. After repairing that supplier tower, made the Cartan well-definedness citation point exactly to the proved monic-root/PBW calculation rather than presenting freeness as a stated interface clause. Also supplied the split-tensor argument exhibiting V=P^psi tensor_R Q as a finite graded projective C_beta-module. Homogeneous augmentation-basis lifting, projective splitting and bounded-below graded Nakayama make V shifted-free and give the stated Laurent-polynomial times (beta)_q range. The balance flip, evaluation and shift formulas are valid. This is a nonfatal imprecise attribution with an actual proved supplier, not an unsatisfied mathematical prerequisite. Definition unchanged.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-adjudication-proposal",
    "subject": "lem-klr-projective-duality-and-positive-divided-string-leading-terms",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "phase": "initial",
    "round": 1,
    "unit": "46",
    "model": "gpt-6.1-sol",
    "context_sha256": "1d2b07a4e8d3311239a882459c0e7a28fa6b587a1d91c535c83c9131a10e75e3",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "disposition": "repaired-awaiting-independent-rejudgment",
    "evidence": "The old Statement said right-string and F4 advertised LEFT/right recursion, but neither quantum supplier promises unsigned right recursion. The actual proof step 6.1 already uses LEFT recursion throughout. Replaced the mismatched Statement wording by LEFT and made F4 quote the exact left transition of thm-the-highest-weight-crystal-triple-is-balanced(v). The positive-basis conclusion, first-block expansion and ideal equality are preserved. Checked word-character separation, parity normalization, evaluation duality, projective adjunction multiplicities and exact left-quotient sign induction. This unsupported extra attribution is nonfatal to the existing left proof. Kashiwara91 pp. 513-515 corroborate the left divided-power quotient construction and its coefficient +1; they do not supply the advertised unsigned right inference.",
    "report": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "All assigned carriers and all three direct consumers of the sole Statement change are draft frozen-frontier items. No published consumer is in this interface inventory. The digest alert was checked and its target is also a draft frontier item, routed to its owner; no published item was edited or audited.",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "def-cyclotomic-klr-induction-and-restriction-functors",
    "outcome": "confirmed_fatal",
    "evidence": "The generator images x_a and tau_a were not in the declared corner eBe. Multiplying them by e gives the degree-zero unital append map; old generators commute with e, preserve all old relations, and send each first-strand cyclotomic generator into the larger ideal. Tensor-Hom evaluation and zero corners remain valid. Direct consumers use this corner action; the biadjunction proof also needs its separately assigned noninjective-unit correction.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-generic-klr-induction-and-restriction-mixed-relations",
    "outcome": "confirmed_nonfatal",
    "evidence": "F3 omitted the polynomial factor: at beta=0 the append bimodule is k[t_i], so a finite shuffle basis over k is impossible. Corrected F3 to finite ungraded shuffle freeness over R(beta) tensor k[t_i] and labelled graded projective summands; forgetting t_i retains its infinitely many powers. The PBW double-coset proof already retained these powers, its colored kernels and shifts are correct, and the opposite-end sequence is right-split before tensoring. Statement unchanged.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-klr-one-step-simple-restriction-induction-and-first-dot-index",
    "outcome": "confirmed_nonfatal",
    "evidence": "F1 incorrectly attached [m]_i multiplicity to the NH_m simple column itself. Corrected it to multiplicity one as an NH_m module and shifted [m]_i after restriction to NH_(m-1). Step 1.1 already computes that branching: E_a=(-z)^a, z^m=0, with one socle and head and exact dot index m. Maximal-tail detection, dot-zero adjunction, and the unique-head recursion then give the one-step and first-strand survival assertions. Statement and proof steps unchanged.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action",
    "outcome": "false_positive",
    "evidence": "The rejected attribution is accurate for the current carrier: the commutator supplier explicitly proves unequal-color descent in step 6.1. Expanding the cyclotomic ideal into the two induced old ideals plus the full-transfer term kills the latter between distinct endpoint colors. Kang-Kashiwara Theorem 5.1, full proof pp.29-30 and equation (5.2), confirms this corner-ideal calculation. The normalization ratio q^(b_ij) cancels the generic crossing factor; the equal-color sums become [h]_i, and finite root strings plus decreasing height give local nilpotence. No edit.",
    "status": "false_positive",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1102.4677v4"
    ],
    "familiar": false
  },
  {
    "ledger": "defect",
    "id": "lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates",
    "outcome": "confirmed_nonfatal",
    "evidence": "The first unit need not be injective: at lambda_i=1, beta=alpha_i, A=k and eBe=0. Replaced inclusion with the append homomorphism and the module unit m maps to e tensor m; tensor balancing proves both first triangles even for a zero corner. The separate cap/Casimir supplier gives A-bilinearity, centrality, the second triangles and shift 2d_i(1-h); the word-trace supplier gives the typed t_ij/t_ji mate ratio. Statement unchanged. Contract derivation synchronized under the shared lock.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric",
    "outcome": "confirmed_nonfatal",
    "evidence": "The title overstated finiteness of the direct-sum algebra; changed algebras to blocks. The Statement already quantifies blockwise, so no mathematical interface change is needed. Finite-dimensionality and root strings come from the dot-annihilator lemma; the word-trace supplier gives the perfect degree -2def pairing, and the inversion weights cancel the unequal-crossing closure ratio. Finite-projective evaluation gives D_psi P=P# shifted by t_beta. Zero, vacuum and ungraded monic cases retain their stated scope.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two",
    "outcome": "confirmed_fatal",
    "evidence": "Part (c) applied the first-dot quotient to n=0 where x_1 does not exist, conflicting with the vacuum at lambda_i=0. Restricted that presentation to n>=1 and explicitly retained R^Lambda(0)=k. The proof already separates the vacuum: matrix-entry isolation gives the ideal (h_(lambda-n+1),...,h_lambda); it contains h_0=1 precisely beyond the cutoff and otherwise lies in the augmentation ideal. The centered coinvariant column gives [n]_i!, and at lambda=n=2 the block is End_k(C{-d_i}) in every characteristic. No Statement or Definition section changes.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero",
    "outcome": "confirmed_nonfatal",
    "evidence": "F1 incorrectly included the basic operators among quantum actions; removed basic from that attribution. At lambda=2 the basic vacuum commutator is 1+q^2, while the normalized one is q+q^-1. The Statement and proof already use exactly the projective/canonical and KK shifts. The input exponent -1-h(beta+i) equals the target exponent 1-h(beta); balanced corner tensors give the two basic pairing identities, with the shifts yielding normalized adjointness. Defect increment d_i(h_i(beta)-1) gives the conjugation. Statement unchanged.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda",
    "outcome": "confirmed_fatal",
    "evidence": "The stated lowering operator did not return a self-dual class: at lambda_i=2, basic induction of S_1 has head S_2{-d_i}. Added the unique D_psi-self-dual normalization to lowering and explained the lift from shift orbits using the quotient-cover normalization supplier. Raising is zero at epsilon=0. Both operators preserve the shift-orbit graph and partial inverses, so canonical extraction still identifies the graph with B(Lambda); normalized covers transport its labels. The inherited AC and full general-field parameter scope are unchanged. Direct consumer uses are inventoried separately; contract synchronized under the shared lock.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block",
    "outcome": "confirmed_nonfatal",
    "evidence": "F1 confused the infinite-dimensional generic polynomial projective P_(i,2) with its finite cyclotomic extension. Replaced it by P_2=B_2 tensor_(NH_2) P_(i,2)=C{-1}. Tensoring the generic regular decomposition yields the stated two shifted cyclotomic columns. The actual proof already uses End_k(S_2), and its regular class, normalized cover/simple tensor pairing, divided-power image and restricted-dual labels remain correct. Example and proof steps unchanged.",
    "status": "repaired",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published",
    "operation": "no_change",
    "reason": "Every direct item consumer of the two changed interfaces is in the frozen draft frontier; no potentially defective published consumer was identified. The separate unassigned draft counterexample and owning-page notation finding are recorded for owner routing.",
    "path": "research/published-consumer-supplier-ledger.md",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "operation": "propose_owner_followup",
    "id": "cex-k-zero-categorification-alone-does-not-identify-a-global-basis",
    "affected_path": "items/cex-k-zero-categorification-alone-does-not-identify-a-global-basis.md",
    "affected_use": "[F1] At $\\lambda_i=n=2$, the exact matrix calculation of [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]] identifies $R^\\Lambda(2\\alpha_i)=\\operatorname{End}_k(S_2)$, where $S_2=C\\{-1\\}$ has degrees $-1,1$ and is the normalized divided-power projective $P_{i,2}$. Thus its regular module is $P_{i,2}\\{1\\}\\oplus P_{i,2}\\{-1\\}$. The divided-power construction is [[def-divided-power-klr-idempotents-and-projectives]].",
    "evidence": "The cited definition gives generic P_(i,2)=k[x_1,x_2]{-1}, which is infinite dimensional; the finite column is its cyclotomic extension.",
    "minimality": "Rename the local finite column P_2 and identify P_2=B_2 tensor_(NH_2) P_(i,2), then use P_2 in this finite decomposition. The quantum nonunit counterexample remains sound.",
    "route": "frontier_owner",
    "status": "unassigned_followup",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "path": "research/defect-ledger.jsonl",
    "operation": "propose_owner_followup",
    "id": null,
    "affected_path": "library/special-topics-in-representation-theory/cyclotomic-klr-algebras-and-highest-weight-categorification-examples.md",
    "affected_use": "$NH_2/(x_1^2)\\cong P_{i,2}^{\\oplus(q_i+q_i^{-1})}$ and the later word-projective $[P_{i,2}]$ description",
    "evidence": "The finite cyclotomic block cannot decompose as infinite-dimensional generic polynomial columns.",
    "minimality": "Use the cyclotomic extension P_2 in both page bullets, retaining all shifts and quantum coefficients.",
    "route": "owning_page_metadata",
    "status": "unassigned_followup",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis",
    "outcome": "confirmed_nonfatal",
    "evidence": "F3 attributed the Bruhat subword theorem to a supplier that states only the Coxeter presentation. The proof needs only minimum word length: a proper subword of k letters has at most k-1 letters and hence length below k. F3 now cites exactly the presentation, defines minimum length, and step 1.3 supplies this elementary estimate. The maximal-length crossed-product independence argument, integral spanning, anti-involution, localization, and base change are preserved; no Bruhat theorem or new prerequisite is needed. Statement unchanged; precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "1a0e28b5207027fd034a297f6fabbbececa0cb6fd54afb51316bcf23c23a8d49"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes",
    "outcome": "confirmed_fatal",
    "evidence": "The module-axiom definition supplies no submodule freeness over a DVR. Step 1.1 now proves it by coordinate induction: every nonzero coordinate ideal has a least valuation generator, its lift splits off one free summand, and the kernel has smaller ambient rank. Exactness is already proved by lifting and projecting in 1.3. F3 now separates the assumed standard basis and unitriangular submatrix from the defining Grothendieck relation; finite triangular elimination proves injectivity. Orthogonality, scalar-extended nondegeneracy and the leaf Gram identity give the claimed weight filtration, including rank zero. Statement unchanged; focused precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "04497451effc9b61c8de3c5606f7da8e8afedee9b31354831488db183a8677a3"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents",
    "outcome": "confirmed_fatal",
    "evidence": "The cited definitions give permutation invariance and primitive central idempotents, not elementary-symmetric generation or the nilpotent-ideal criterion. Added the characteristic-free leading-monomial elimination in step 1.2 and proved the idempotent criterion directly in step 2.1. Each content center is Fe plus a finitely generated nilpotent ideal with zero scalar intersection. A primitive central idempotent has exactly one nonzero content component, which is the entire primitive content idempotent. The split generalized projectors and symmetric-center equality remain hypotheses, with d=0 covered. Statement unchanged; precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "8814ae94bb535b63f29c00147117380fb69c8e8401fd3330c6206156a8519289"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cyclotomic-hecke-central-content-sector-notation",
    "outcome": "confirmed_fatal",
    "evidence": "The unrestricted sums define global nilpotent dots, which can have nonzero components outside the named content sector. Restricting both sums to words of content alpha makes each element equal to e_alpha times its global counterpart and hence an element of e_alpha H e_alpha. On each word projector its dot is unchanged; finite orthogonality and the spectral supplier prove commuting nilpotence. Direct consumers use precisely these fixed-content restrictions or only the unchanged central idempotents; those uses remain sound. Rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "715893ab2540b02651a3c4825d07abe972e453db78280790f39939994c75dd84"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity",
    "outcome": "confirmed_nonfatal",
    "evidence": "The title overstated the actual same-hub Statement: a strict size descent changes the sum of residue counts, so cannot preserve content. Changed only the display title to hub-preserving descent, retaining the stable ID and the richer same-hub switch Statement. Checked the margin parametrization, energy change 4-2gamma, Laplacian kernel, balanced-row minimum argument and binary-switch connectivity; they support the actual Statement. The fixed-content theorem F2 repeats the erroneous title-level attribution and is reported to its frontier owner; its fixed-rank lifts must preserve content, rather than the descending cores.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "2b607a43ad45cff402f7bde1cd16eceaccbdedbf31f4b4222db68e593d4fec47"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cyclotomic-klr-block-satisfies-the-hecke-relations",
    "outcome": "confirmed_fatal",
    "evidence": "The supplier Statement supplies scalar normalizers and Hecke-side intertwiners, not a KLR-side faithful model or its Hecke coefficient table. Reproduced the five KLR operator braid patterns, the mixed/quadratic check and all six Hecke braid coefficients locally; added the actual Matsumoto and symmetric-group suppliers for crossing-word reduction. Leading permutation coefficients give faithfulness before quotient, so regular identities descend without inverting nilpotent dot differences. Checked both signs and the double edge against BK Theorems 3.3 and 4.3, reading pp. 13-17 and 24-27; their all-equal exercises are handled by the explicit divided-difference formula here. Statement and sector-factorization argument unchanged.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "cb3ddd7513dd94da464eafad9b3db9e70b9b7e483feee748646828a2221db867"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-hecke-intertwiners-produce-local-klr-generators",
    "outcome": "confirmed_nonfatal",
    "evidence": "The claim that the matching first-residue factor is invertible off a joint word summand is false: complementary words can have the same first residue. Step 1.1 now cancels only other-residue factors within e(i), where distinct spectral values and nilpotent dots give explicit geometric-series inverses. The remaining matching factor is y_1 or a nonzero scalar multiple, proving the cyclotomic relation even when its exponent is zero. The normalized crossing products and five braid patterns agree with the supplied scalar identities and explicit affine calculations; the source all-equal case is checked by the displayed divided-difference antisymmetrizer. Statement unchanged; precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "703b847f8d5f3fed1b50d0d0ca288c57ceb3f352b541f08337b4f1b177c4a424"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular",
    "outcome": "confirmed_fatal",
    "evidence": "The Laurent-parameter algebra in the defining supplier is multiplicative. Its z=1 specialization is not the charged additive degenerate algebra; the rank-one F_2 example distinguishes their idempotents. Made the application clause explicitly nondegenerate and added the presentation caveat, preserving the complete basis and cell law for every commutative unit-parameter specialization, including multiplicative z=1. This corrects the identification of an application rather than discarding a case of the defined H_n. Checked finite-generator straightening, the nonempty-component correction used for X_1, independent PBW rank and standard-pair count. Direct consumers use the same multiplicative H_n; the primitive-block theorem uses this result only in its q_H not equal to 1 branch.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "ae4dede5636bc02b8fb42c84537e7b16a2809218914eebd43431349c4d88eaa0"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular",
    "outcome": "confirmed_nonfatal",
    "evidence": "Step 1.1 and F1 applied the component-start eigenvalue formula to empty components, where no node carries that putative eigenvalue. Restricted this intermediate calculation to nonempty components, exactly the cases selected by an actual tableau entry; the level-two lambda=(empty,(1)) counterexample now uses U_2 and makes no claim about U_1. The content-triangular Statement remains unchanged. Added the actual published Bruhat rank/subword supplier for the prefix comparison in step 2.1 rather than inheriting it from a Coxeter presentation. Initial internal labels, component shuffles and simultaneous triangular quotients give the stated node contents. Precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "fbdf19ef52994f8e400bfb7ab10c989bfe03230b5536c2f2d00b4b674f2a6c54"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms",
    "outcome": "confirmed_nonfatal",
    "evidence": "F5 added a nondegenerate-or-zero dichotomy absent from the cellular-basis supplier and false at singular parameters. Removed that added assertion while retaining the supplied bilinear forms. The proof of the actual generic Statement does not need it: distinct addable-node words separate shapes over both generic fields, cellular diagonal multiplicity one makes all Spechts simple, and the exact corner multiplicities make every Schur standard simple; its diagonal entry one makes the invariant form nonzero and hence nondegenerate. The bound on first-difference addable contents across components is below N, so the q_H t and Q_a t^(Na) words cannot collide. No singular-specialization nondegeneracy is claimed; Statement unchanged.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "59552dd110ac8667c72a1c7a5bec073b6141bd31a09818dd12f1a70d055148b8"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected",
    "outcome": "confirmed_fatal",
    "evidence": "The transfer recipe did not specify charged beta positions; the ordinary runner f-1 ignores the receiving component charge and can produce a unit foot difference. Step 1.2 now defines B_c={lambda_j^(c)+c_c-j}, derives the charged foot formula, and moves the largest bead on charged runner f-1, equivalently uncharged runner f-c_b-1. The two different components force a unique hook pair, dominance comes from their order, equal charged residues give a nonzero difference of positive valuation, and the discrepancy-square descent terminates. In the rejected e=2, charges (0,1) example the receiver is (1,1), not (2), and its foot difference is t^2-t^3. Read LM Lemma 3.9 and its cross-component Proposition 3.6 argument, preserving all arbitrary-field hypotheses. Statement unchanged; precheck and rendercheck passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "bfe3a48fa723e41320192786b00fe24b07313bdab09e5d80ac66c0ec17aac44d"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block",
    "outcome": "confirmed_nonfatal",
    "evidence": "The original dimension obstruction lacked a positive-rank boundary. Qualified the title and proved the obstruction for every d at least one, retaining the rank-one witness: NG maps onto F[t,t^-1] by T_r=q_H and X_r=q_H^(r-1)t; DG maps onto F[t] by s_r=1 and x_r=t+(r-1). The quadratic, braid and mixed relations hold under these explicit assignments. Finite cyclotomic sectors and their KLR partners cannot be isomorphic to these infinite-dimensional affine algebras. At rank zero both algebras are F. The separate rank-two e=3 example still gives two one-dimensional blocks in F times F. Statement refuted unchanged; Final focused checks passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "365592ea8aa7116913248f8bc6755a49a1944bc108ab06ca698f5fe7e368e114"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases",
    "outcome": "confirmed_fatal",
    "evidence": "The old Mackey count incorrectly omitted unflagged allocations from the full left cell. Step 1.3 constructs the component-shuffle tensor model and double-coset restriction, identifying the flagged subspace with flag-compatible allocations; 5.1 counts its trivial characters. The rejected lambda=mu=((1),(1)) has two full-cell allocations and one flagged allocation. Exact affine membership and literal Murphy coefficient identities retain arbitrary base change and unit pivots. Added the actual Bruhat supplier and removed unused F7/F8 facts; F4 supplies the generic ordinary multiplicities. Corrected F1 to call u_lambda a polynomial, not a unit. Consulted Mathas pp. 28-30 for the flag conventions, not an external proof fallback. Final precheck, rendercheck, contract, citation-fidelity, dependency and content-policy checks passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "8b1f480db82d0a14129587bfe8c5551b213a3a6f7115184f8ec6b39ffeeb62ae"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-type-a-affine-presentations-and-charged-cyclotomic-quotients",
    "outcome": "confirmed_fatal",
    "evidence": "The charged clause omitted f(z_1)=0 and therefore did not impose its promised quotient. Added the zero relation retaining both branches and boundaries. Direct consumer clauses already impose the zero polynomial, or use only the unchanged auxiliary affine presentation. During final hash validation a supplier interface changed; reread the current quantum-characteristic Definition, cyclic Cartan Definition and complete Verification, and generic Hecke Definition. They still give order e when q_H is not 1, characteristic e when q_H is 1, independent residue labels, dominant coefficients and level sum; the new rational weight form is irrelevant to this presentation. This actual supplier re-examination licenses the refreshed review context. Focused checks passed.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "8938f55d08e256c603ac25d7bb22e915c20b48e0b11b85023b7ce539c6101be5"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "id": "thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected",
    "status": "owner_routed_outside_assignment",
    "severity": "nonfatal_attributed_fact",
    "affected_use": "items/thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected.md, F2, lines 57-62: content-preserving descent and within a content class of rank-at-most-n cores.",
    "invalidated_claim": "A strict core descent preserves the hub and subtracts a nonzero all-one residue-count vector; it cannot preserve content because size changes.",
    "minimality": "Change only the F2 attribution to same-hub descent; fixed-rank lifts, rather than the descending cores, must carry the content preservation. Statement of the supplier was unchanged, so no interface propagation is requested.",
    "evidence": "At e=2 and charges (0,0), height rows (0,-2),(-2,0) switch with gamma=4 to (-1,-1),(-1,-1), lowering size by 4 and content from (2,2) to (0,0).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "id": "lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums",
    "status": "owner_routed_outside_assignment",
    "severity": "dependency_citation",
    "affected_use": "Statement cites the ordinary def-semistandard-tableau-and-kostka-number for multipartition Kostka numbers.",
    "invalidated_claim": "The published ordinary Definition covers partitions and integer labels; the multipartition component flag is defined by def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules.",
    "minimality": "Cite the actual multipartition defining supplier at the Statement clause; retain the mathematical formula. No outside item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "status": "direct_consumer_inventory_proposed",
    "reason": "All 28 direct item uses of the three changed interfaces are draft original-frontier uses, recorded by exact clauses in consumer_examinations. No published consumer defect or outside-frontier interface effect was found. No published item was repaired or adjudicated. These clause-preservation checks do not constitute independent audits of entire consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "consumer_ids": [
      "cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one",
      "def-affine-and-cyclotomic-type-a-hecke-algebras",
      "def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules",
      "def-cyclotomic-hecke-central-content-sector-notation",
      "def-graded-specht-module-by-homogeneous-standard-tableaux",
      "def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks",
      "lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular",
      "lem-cyclotomic-hecke-bounded-ordered-monomials-span",
      "lem-cyclotomic-hecke-intertwiners-and-local-power-series",
      "lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors",
      "lem-cyclotomic-klr-block-satisfies-the-hecke-relations",
      "lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms",
      "lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms",
      "lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases",
      "lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis",
      "lem-degenerate-affine-hecke-ordered-monomials-form-a-basis",
      "lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower",
      "lem-generic-cyclotomic-type-a-support-is-bounded-by-rank",
      "lem-generic-nondegenerate-local-inverse-tables",
      "lem-hecke-intertwiners-produce-local-klr-generators",
      "lem-integer-color-degenerate-hecke-klr-local-inverse-tables",
      "prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras",
      "rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges",
      "thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks",
      "thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras",
      "thm-graded-specht-heads-classify-the-graded-simple-modules",
      "thm-graded-specht-module-has-homogeneous-tableau-basis"
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-laurent-binomial-valuation-at-one-over-any-field",
    "outcome": "confirmed_fatal",
    "evidence": "F2 attributed polynomial multiplicity and the localized DVR to a definition that only defines valuation rings. New step 1.1 constructs factor multiplicity, proves product and sum laws, extends it to F(t), and identifies the nonnegative ring with F[t] localized at (t-1). It also proves the field-characteristic consequences of F3. The zero Laurent difference is handled separately, and unit reduction is explicitly restricted to nonzero f. Frobenius gives the full p-power valuation; negative exponents are removed by units. Statement unchanged; Owning contract and manifest synchronized; final focused checks passed, including the batched layout check with zero defects.",
    "status": "repaired",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "post_sha256": "c2b5c741cfaf85fff036c7a50f6f4fc2fa7f99a2b3bffdc5884efdaec882395b"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "unit": "48",
    "id": "cyclotomic-hecke-and-quiver-hecke-algebras",
    "status": "owner_routed_page_metadata",
    "severity": "presentation",
    "affected_use": "library/special-topics-in-representation-theory/cyclotomic-hecke-and-quiver-hecke-algebras.md, Review status paragraph: comparison, projectivity/commutator, trace, center and off-support calculation are described as still missing.",
    "minimality": "Owner should reconcile this paragraph against the current completed or outstanding carrier findings; this dispatch does not certify the unassigned proofs merely because arguments are now present.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "id": "def-degenerate-cyclotomic-hecke-tower-and-residue-functors",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "finding": "Unsupported categorical double-cut/Specht/residue transport in old Proof 3.2.",
    "repair": "Intrinsic fixed-presentation content and residue identification in 3.2; strict-column finite-I local-unit argument in 4.2.",
    "ledger": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "finding": "Statement (iii), proof 1.2 and conclusion asserted J differs from K universally, contradicted by two singleton columns and distinct entries.",
    "repair": "Specify separate entry-stabilizer and column-Levi roles while allowing coincident subgroups; preserve all coefficient and composition formulas."
  },
  {
    "ledger": "defect",
    "id": "lem-divided-power-and-toral-quantum-binomial-reordering-identities",
    "finding": "The cited definition covers only nonnegative quantum integers. F5 now locally defines the rational quotient for every integer, proves both numerator identities, and leaves negative factorials undefined. The auxiliary factorization and its reordering induction remain valid, with no Statement change or new choice use.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-finite-support-regularization-of-quantum-label-weight-modules",
    "finding": "Part (v) falsely attributed multiplicity comparison to a realization-only proposition. The repaired clause distinguishes the rational Cartan from its complexification. Step 6.2 constructs the central direct-sum algebra by inverse maps on Cartan-Serre generators, then proves fixed central character, identical submodules and injective restriction of weights in one highest-weight cone. Parts (i)-(iv) and Choice requirements are unchanged.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-string-ideal-triples-are-balanced",
    "route": "frontier-owner",
    "affected_use": "[F5] Auxiliary regular datum and half transport ([[lem-finite-support-regularization-of-quantum-label-weight-modules]], [[thm-crystal-basis-of-the-negative-half]]): for the fixed degree there is an explicit primitive-coroot regular dominant datum in which the Serre ideal vanishes, so $\\pi_\\lambda$ is a field isomorphism carrying $U_A^-$ onto $V_A(\\lambda)$ and $I_{(i,n)}^A$ onto $J_{(i,n)}^A$, and the rational charts are carried isomorphically.",
    "invalidated_claim": "Full highest-weight projection is an isomorphism; auxiliary regularization makes quantum Serre relations vanish.",
    "minimality": "Restrict the claim to the selected root-degree component; say the highest-weight kernel component vanishes.",
    "status": "proposed"
  },
  {
    "ledger": "defect",
    "id": "lem-cartan-projection-constructs-the-quantum-verma-contravariant-form",
    "finding": "Step 3.1 cited a dominant-label definition outside its stated domain. It now proves uniqueness for every lambda directly: a difference vanishes on the highest vector paired with all negative words because their sigma images kill the highest vector, and contravariance removes the first argument. Transposition then proves symmetry. F5 locally extends integer indices; the norm product zero is located at k=m+1. Statement, radical, lattice integrality and ordinary-simplicity claims are preserved.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-rational-local-quantum-halves-and-torus-specialize-at-q-one",
    "finding": "For K=-1 every toral product factor contributes a minus sign, while an integer upper entry c=-b contributes another. Step 4.1 now gives binom(b+t-1,t)_i, with no remaining (-1)^t; at b=t=1 its value is 1. Integer-index quantum integers and generalized Gaussian products are explicitly defined locally. The positive-quotient and half-specialization statements remain unchanged.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral",
    "finding": "F1 did not match the separation Statement, although its Verification 1.1-1.4 already constructed the required form. The repair now cites the published generic pairing interface directly and locally transports it through the Serre presentations, rescales by the nonzero degree character, derives the e-prime adjunction by the primitive braided coproduct, and proves symmetry by inverse matching permutations. Component nondegeneracy, uniqueness, word integrality and factorial denominator bounds are checked. The original Statement and inherited AC boundary are unchanged.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "ex-specializing-a-quantum-highest-weight-lattice-at-q-one",
    "finding": "F4 conflated generic character equality with fibre identification. It now cites (a) only for characters and (c) for the ordinary-word R-lattice fibre. Step 2.1 proves R tensor V_A equals that lattice because all factorials are R-units, then extends its rational fibre to k. Independently, repeated raising of a largest-index nonzero vector proves the explicit specialized sl-two matrices simple, including m=0. The Example is unchanged.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "cex-direct-q-one-substitution-in-quantum-denominators",
    "finding": "F4 incorrectly asserted classical Cartan relations in the full specialization. It now separates base change from the positive quotient and the automatic quotient action on stable label-graded lattices, explicitly retaining other toral characters in the full algebra. Step 2.1 restricts its coroot identification to the L(1) lattice, whose integral matrices are verified as diag(1,-1). The 0/0 witnesses and Statement refuted are unchanged.",
    "status": "repaired",
    "classification": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-highest-weight-tensor-maps-and-their-adjunction",
    "route": "frontier-owner",
    "affected_use": "[F1] Each $V(\\nu)$ is the simple integrable highest weight module: it is generated over $U_q(\\mathfrak g)$ by $v_\\nu$, has support $\\nu-Q_+$ with finite-dimensional weight spaces, and is universal among integrable cyclic highest weight modules of weight $\\nu$, the map being determined by the image of the highest vector ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]], [[def-quantum-verma-module-and-simple-highest-weight-quotient]]).",
    "invalidated_claim": "Support equals nu-Q+; the trivial rank-one V(0) has support {0}.",
    "minimality": "Replace has support by has support contained in; step 1.2 needs only containment.",
    "status": "proposed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties",
    "route": "frontier-owner",
    "affected_use": "1.1 **Construct the coefficients.** Fix $w$ and descend on $d=\\ell(w)-\\ell(x)$ over the finite lower Bruhat ideal $\\{x:x\\le w\\}$, starting with $p_{w,w}=1$. Suppose $x<w$ and $p_{y,w}$ has been constructed for every $x<y\\le w$, satisfying $p_{y,w}=\\sum_{y\\le z\\le w}r_{y,z}\\overline{p_{z,w}}$. Put $a_x:=\\sum_{x<y\\le w}r_{x,y}\\overline{p_{y,w}}$. Then",
    "invalidated_claim": "Descending on d=length(w)-length(x) starting from d=0 misstates the induction direction; the construction processes larger y first.",
    "minimality": "Say descend in Bruhat order, equivalently ascend in d; the coefficient construction and theorem are unchanged.",
    "status": "proposed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u50-extremal-relative",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "50",
      "group": "batch-50",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "subject": "lem-extremal-word-characters-detect-normalized-cyclotomic-simple-labels",
      "location": "Statement and Proof 1.1–3.1",
      "caught_at_stage": "step5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "The zero-word-space exclusion was unqualified, whereas maximality bounds only constituents of M. The exact corner and maximal-tail reconstruction prove one contributing orbit among those constituents. Qualified both clauses to M, retaining the factorial multiplicity, cross-field label detection and virtual-character injectivity. BK section 4.12 Lemma 4.21 states the module-relative multiplicity formula, not a global word separation theorem; arbitrary fields are covered by the local maximal-tail and crystal suppliers."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "e3ab3b719034b2ce49ebd25ef166151ae4ef73b92f0ccae0c5631c519e3e3c5e"
        }
      ],
      "audit_status": "local repair complete; no independent review of own repair claimed",
      "uncertain": false,
      "defect_type": "logic"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u50-tower-transport",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "50",
      "group": "batch-50",
      "class": "accuracy",
      "subclass": "false-claim",
      "severity": "nonfatal",
      "subject": "def-graded-module-and-projective-grothendieck-groups-for-klr-towers",
      "location": "Facts Given and Proof 2.1",
      "caught_at_stage": "step5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "The Definition and steps 1.1–1.4 correctly construct the generic groups and transport only H^Lambda to R^Lambda. The extra assertion in step 2.1 identified an arbitrary tower R with R^Lambda without a hypothesis; the tower having only R_0=k gives Laurent rank one, unlike the level-one cyclotomic tower. Replaced that assertion with the H^Lambda-to-R^Lambda identification already proved. This is nonfatal to the defined interface because no Definition clause or necessary construction relied on the extra assertion."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "c0ec263ea59eb07c54fb364b85ea54c1e6e44293fdb4bdbc0c40a90385e1163d"
        }
      ],
      "audit_status": "local repair complete; no independent review of own repair claimed",
      "uncertain": false
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u50-cover-normalization",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "50",
      "group": "batch-50",
      "class": "accuracy",
      "subclass": "false-claim",
      "severity": "nonfatal",
      "subject": "def-graded-cartan-pairing-between-projectives-and-modules",
      "location": "Facts F3 and Proof 1.4",
      "caught_at_stage": "step5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "At the vacuum block, P=k direct-sum k{1} has degree support {0,1}, so P{r} has support {r,r+1} and its Hom dual has support {-r,-r-1}; equality would require 2r=-1. Thus F3 and step 1.4 overstate normalization. The actual duality and quotient-cover suppliers normalize simple orbits and their indecomposable covers only. Restricted F3 and step 1.4 to those objects. The Hom-pairing Definition, finite Laurent values, additive descent and q^(s-r) shift rule were already valid and remain unchanged; the extra overstatement is nonfatal to that interface."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "cca72feb9eea75cd60b365b34f461b74c517adde303640fb4cffdfa895183586"
        }
      ],
      "audit_status": "local repair complete; no independent review of own repair claimed",
      "uncertain": false
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u50-integral-zero-sector",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "50",
      "group": "batch-50",
      "class": "accuracy",
      "subclass": "dependency-citation",
      "severity": "fatal",
      "subject": "def-integral-form-of-the-cyclotomic-hecke-klr-block",
      "location": "Facts F2 and Proof 1.2–3.1",
      "caught_at_stage": "step5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "The blockwise BK Statement requires nonzero e_alpha, so it alone cannot identify C_F with H_alpha(F) in the zero-sector case needed for each dimension inequality. Added the existing early all-sector isomorphism as a direct dependency and F2 citation. It identifies the integer KLR presentation over F with the Hecke sector even when zero; the presentation then surjects onto F tensor L, forcing that tensor to vanish when the sector does. Freeness and the characteristic-zero base change give each rank inequality; the fixed total Hecke dimension forces equality content by content and supplies the inverse generator-matching map. No assumption of support preservation and no weakened Definition are used. Read BK section 6 Theorems 6.1 and 6.4 and their complete proofs, as well as the local all-sector proof."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "f1e4f4bf1c38443a29098071a9f88056cfe75ea9f4190a90d605f45c8bdf3c3d"
        }
      ],
      "audit_status": "local repair complete; no independent review of own repair claimed",
      "uncertain": false,
      "defect_type": "dependency_citation"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u50-horizontal-arrow",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "batch": "50",
      "group": "batch-50",
      "class": "accuracy",
      "subclass": "false-claim",
      "severity": "nonfatal",
      "subject": "lem-degree-and-codegree-of-standard-tableaux",
      "location": "Facts F4",
      "caught_at_stage": "step5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "F4 calls the same-row relation r to_T s a weak Bruhat arrow, contradicting the supplier Definition, which distinguishes it from T xrightarrow{r} S with S=s_rT and both tableaux standard. Replaced the misdescription with the exact same-row, strictly-right relation and the graph-edge distinction. The brick proofs use only the same-row meaning already in the Statement: terminal consecutive entries occupy a rightmost row segment. Verified the signed corner count, double-neighbor e=2 Cartan update, defect recursion, degree-plus-codegree induction, and cancellation of above-row corners across a full residue brick. No Statement change or proof inference depended on a Bruhat edge, so this is nonfatal."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u50.json",
          "model": "gpt-6.1-sol",
          "context_sha256": "5401864f074f60e4c2eaf5e210f7a2a2db2117f2ccd45e043b119fe1481b4ba4"
        }
      ],
      "audit_status": "local repair complete; no independent review of own repair claimed",
      "uncertain": false
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The only changed item interface is the extremal-word Statement. Its two direct item consumers are assigned-run draft frontier items and both retain sound uses. The page contains no stronger separation assertion. No published or outside-frontier consumer finding was discovered."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-the-i-string-decomposition-of-the-negative-half",
    "action": "record_repaired",
    "outcome": "confirmed_fatal",
    "reason": "F5 overstates clause (iii) of lem-divided-power-half-has-integral-skew-string-coefficients, whose statement quantifies over U_A^-; step 4.1 used that identity for arbitrary U_q^- without an extension. F5 is now restricted accurately and step 4.1 proves the extension: every F-generator word belongs to U_A^-, these words span U_q^- over Q(q), and the coefficient maps are field-linear with finite sums. The projection, deletion formula, Gaussian cancellation, uniqueness, shift identities and integral preservation remain valid; no integral freeness or choice is used.",
    "post_sha256": "f9562631887a5d9dd9f9cc529f9cbd6febfeeddec012630a51151ecf01b80433",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-kashiwara-crystal-operators",
    "action": "record_repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The parenthetical in step 2.2 falsely assigns u_(m-1) at every shifted position, including a killed bottom. For a trivial string its claimed coefficient is v at m=1 although f-tilde(v)=0. The preceding restricted sum and resulting bottom-projection identity are correct, so this is a nonfatal coefficient-description defect. The repair sets v_0=0 and v_m=u_(m-1) only for m<=a_(m-1), and zero otherwise. Uniqueness, weights, both kernel identities, naturality and the interior comparison follow from admissible finite strings, with no extra choice or bounded-support assumption.",
    "post_sha256": "6c02499e6a8abd2c36165509fdf2730d2c31fbf7fedd4df00791938d30149846",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/math/0305390"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-crystal-graph-of-b-two-lambda-one",
    "action": "record_repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "In step 1.2, Delta E_2 acting on the summand q e_2 tensor e_3 contributes q e_2 tensor E_2 e_3. The displayed expansion omitted q although its result [2]v_22 was correct. Inserting q repairs this nonfatal computational typo. Exact Laurent arithmetic independently checked all 24 E_i/F_i actions; the six distinct labels, divided strings, cyclicity, crystal lattice, six edges and all twelve epsilon/phi equalities follow from that table. The Example interface and prerequisites are unchanged.",
    "post_sha256": "05401bef842c891fb15ebfa87f343ab774c97ed2b5b1d7d4af51c072afd9502b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-crystal-basis-of-the-negative-half",
    "action": "record_repaired",
    "outcome": "confirmed_fatal",
    "reason": "Step 1.1 incorrectly identifies U_q^-[-alpha] with the field extension of a lattice by tensoring a lattice projection: this only identifies the two lattice field spans. The repair proves ambient spanning directly, following the grand-loop field-spanning paragraph: F_i x=f-tilde_i(sum_n [n+1]_i F_i^(n)x_n), with its input in the preceding degree, so induction from the unit spans every field component by lowering words. Clearing A_0 denominators proves injectivity. Explicit least-index component bases avoid simultaneous choice. H/I/J/K and e-tilde f-tilde=id establish the crystal axioms and ranks; raising compatibility retains the survival restriction. Step 2.1 also explicitly proves that zero is attained, by projecting a nonzero infinite half-string beyond a finite module string. Statement and AC boundary are unchanged.",
    "post_sha256": "597f1ffee3aed25daf6c01f23079662464481edc9a123d82ba0156984dbd4dce",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module",
    "action": "refer_to_frontier_owner",
    "route": "frontier-owner via controller; unit 8 already owns the global-projection theorem rejection",
    "path": "items/thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module.md",
    "affected_use": "F3: the map on residues is the crystal bijection onto $\\mathcal B(\\lambda)\\cup\\{0\\}$",
    "snippet": "the map on residues is the crystal bijection onto $\\mathcal B(\\lambda)\\cup\\{0\\}$",
    "invalidated_claim": "The map including killed residues is not a bijection: in rank one, b_(m+1) and b_(m+2) both project to zero. The local projection supplier clause (c) bijects only surviving residues onto B(lambda).",
    "minimality": "Replace the bijection summary by a surjection including zero and a bijection from surviving residues; proof 1.1 already states the surviving correspondence, so no Statement change is indicated.",
    "reason": "The map including killed residues is not a bijection: in rank one, b_(m+1) and b_(m+2) both project to zero. The local projection supplier clause (c) bijects only surviving residues onto B(lambda). Replace the bijection summary by a surjection including zero and a bijection from surviving residues; proof 1.1 already states the surviving correspondence, so no Statement change is indicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "edited": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-string-ideal-decomposition-of-the-integral-lattices",
    "action": "refer_to_frontier_owner",
    "route": "frontier-owner via controller; unit 8 already owns the global-projection theorem rejection",
    "path": "items/lem-string-ideal-decomposition-of-the-integral-lattices.md",
    "affected_use": "F3: the highest-weight projection is compatible with the crystal operators modulo $q$",
    "snippet": "the highest-weight projection is compatible with the crystal operators modulo $q$",
    "invalidated_claim": "Unrestricted raising compatibility fails at the killed residue b_(m+1): e-tilde pi(b_(m+1))=0 but pi(e-tilde b_(m+1)) is the nonzero bottom module residue. Supplier clause (b) restricts raising to surviving residues.",
    "minimality": "Qualify F3: lowering compatibility holds everywhere, raising on surviving residues. The displayed proof uses half-lattice stability rather than raising a killed projection; owner should reconcile the fact/contract without expanding the claim.",
    "reason": "Unrestricted raising compatibility fails at the killed residue b_(m+1): e-tilde pi(b_(m+1))=0 but pi(e-tilde b_(m+1)) is the nonzero bottom module residue. Supplier clause (b) restricts raising to surviving residues. Qualify F3: lowering compatibility holds everywhere, raising on surviving residues. The displayed proof uses half-lattice stability rather than raising a killed projection; owner should reconcile the fact/contract without expanding the claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "edited": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-string-ideal-triples-are-balanced",
    "action": "refer_to_frontier_owner",
    "route": "frontier-owner via controller; unit 8 already owns the global-projection theorem rejection",
    "path": "items/lem-string-ideal-triples-are-balanced.md",
    "affected_use": "F4: $\\pi_\\lambda$ carries $\\mathcal L(\\infty)$ onto $\\mathcal L(\\lambda)$ compatibly with the crystal operators modulo $q$",
    "snippet": "$\\pi_\\lambda$ carries $\\mathcal L(\\infty)$ onto $\\mathcal L(\\lambda)$ compatibly with the crystal operators modulo $q$",
    "invalidated_claim": "Its unconditional compatibility summary omits the survival restriction for raising; the same rank-one killed-residue counterexample applies. Supplier clauses (a)-(b) give lattice surjectivity, unrestricted lowering, and survivor-only raising.",
    "minimality": "Qualify F4 without changing the ideal statements. The uses of lowering and surviving tops do not require unrestricted raising; owner should confirm their exact inputs and reconcile the citation contract.",
    "reason": "Its unconditional compatibility summary omits the survival restriction for raising; the same rank-one killed-residue counterexample applies. Supplier clauses (a)-(b) give lattice surjectivity, unrestricted lowering, and survivor-only raising. Qualify F4 without changing the ideal statements. The uses of lowering and surviving tops do not require unrestricted raising; owner should confirm their exact inputs and reconcile the citation contract.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "edited": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_completed_repair",
    "id": "lem-tensor-products-of-integrable-weight-modules-are-integrable",
    "outcome": "confirmed_nonfatal",
    "reason": "The claimed reverse implication in step 3.1 is false: v0 tensor v1 has total weight zero but not the opposite specified factor weights. This is nonfatal to (d), since the direct-sum grading in step 2.4 already gives weight compatibility. Replaced it with known-factor weight addition and the disjoint union over all pairs summing to mu; the Statement is unchanged. Coproduct local nilpotence, finite-cone counting, free tensor embedding and quotient inverses were checked.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_completed_repair",
    "id": "def-highest-weight-element-and-connected-highest-weight-crystal",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed fatal logic defect in the Definition: at the bottom b of a two-vertex i-string, F(b)={b} but e_i b is outside F(b), so unrestricted F(b) is not a subcrystal. Renamed it a lowering-generated set, retained its exact formula and highest-weight condition B=F(b), and specified closure under nonzero images for F and C. The three direct item consumers establish raising-closed canonical components separately; none needs a statement repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_completed_repair",
    "id": "ex-tensor-crystal-b-one-tensor-b-one-for-sl-two",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal wording defect: F5 and step 4.1 say that the isolated weight-zero vertex is fixed, whereas both operators send it to the zero sentinel. Replaced both phrases by killed and cited the general rank-one string theorem in F5. The four operator pairs, max formulas, B(2) and B(0) identification, and direct module decomposition with determinant 1+q_1^2 were checked; the Example and all Statement/Definition sections remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication_and_completed_repair",
    "id": "ex-dual-crystal-reverses-arrows-and-weights",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed nonfatal citation defect: F3 supplies crystal data, not module universality. The full source example already proves the standard-module construction and the existing lattice supplier cites universality, so the mathematics is recoverable without a new lemma. The repair verifies all A2 relations locally, cites the presentation and highest-weight universality theorem directly, constructs the canonical three-vector lattice and checks the antipode dual-basis rescaling. All three dual computations are valid without AC; the Example and Statement/Definition sections are unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_supplier_interface_examination",
    "id": "def-highest-weight-element-and-connected-highest-weight-crystal",
    "reason": "Its changed Definition has exactly three direct item consumers, all draft members of the frozen frontier, and the home-page prose. Their exact uses are recorded in downstream_reviews and remain sound. No published or outside-frontier direct consumer requires maintenance for this event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_frontier_owner",
    "id": "thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules",
    "path": "items/thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules.md:55",
    "affected_use": "F4 adds \"saturated tensor lattice structure on the finite-weight-space category\" to the crystal tensor rule; Verification 3.2 cites F4 for the raw tensor residue basis.",
    "invalidated_claim": "The supplier crystal tensor rule states the tensor crystal-basis axioms and operator rule, without a saturation property or ambient inclusion.",
    "minimality": "Remove only the unsupported saturation phrase from F4; the actual use of the tensor residue basis in step 3.2 remains supported. This is a draft frozen-frontier item in another owner lane, left untouched.",
    "reason": "Digest alert verified against the current F4 and Verification 3.2. The extra saturation assertion is unsupported, while the actual residue-basis use is sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_frontier_owner",
    "id": "thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero",
    "path": "items/thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero.md:60",
    "affected_use": "F3 asserts that every chosen integrable module in the finite-label/cone-bounded category admits an isomorphism carrying \"its crystal lattice and basis\" to canonical summands; step 2.1 applies it to the full Fock module.",
    "invalidated_claim": "The lattice-and-crystal conclusion of the decomposition supplier requires a given crystal basis, which F3 does not explicitly include as a premise. The older digest complaint about canonical module splitting has already been corrected in current F3.",
    "minimality": "Add \"equipped with a crystal basis\" to F3. The Fock application supplies that datum and does not require a claim change. This draft frozen-frontier item belongs to another owner lane and is left untouched.",
    "reason": "Current F3 expressly avoids canonical module splitting but still omits the given-crystal-basis premise of its supplier. Refer only this remaining wording defect to the frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "def-balanced-triple-and-globalization-map",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "location": "Definition last paragraph",
    "disposition": "fixed",
    "finding": "The original unconditional extension claim fails for the mixed chart L0=A0(v+w)+qA0v: E_Z=Z(v+w) but M=A v+A w has rank two. Added balancedness to both extension and basis assertions, matching parts (1) and (2) of the two-chart lemma. The residue-map definition and inverse globalization convention are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "location": "F2",
    "disposition": "fixed",
    "finding": "F2 misnamed the algebra multiplication: products mix degrees by (AB)_nu=sum_{beta+gamma=nu} A_beta B_gamma, as the completion definition states. Corrected F2. The dual-basis matrix calculation and finite-support weight-shift proof never multiply completed families, so their conclusions remain valid; this is a nonfatal dependency restatement defect.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "thm-the-highest-weight-crystal-triple-is-balanced",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "Proof original 6.1; repaired 6.1 and 7.1",
    "disposition": "fixed",
    "finding": "The old step 6.1 inferred a multiplication congruence absent from F1's Statement. Replaced it with the primitive projection P_i=1-tilde f_i tilde e_i, the integral divided-power decomposition, and an explicit quotient-basis coefficient argument. In the exact n-position quotient the coefficients are Laurent polynomials regular at zero and bar fixed, hence integers; their residues force 1 at tilde f_i^n b and 0 elsewhere. This proves the original assertion (v) without weakening it. Read Kashiwara91 sections 7.2–7.5, printed pp.512–516, to check the induction and quotient-chart hypotheses; the new coefficient argument is supplied locally.",
    "uncertain": false,
    "source_urls": [
      "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "location": "F3",
    "disposition": "fixed",
    "finding": "F3 falsely made the entire crystal-to-basis-or-zero map bijective: in rank one at lambda=0 every positive divided-power class maps to zero. Corrected F3 to state a bijection only on the surviving domain, exactly as F1 and the projection supplier require. The proof already uses the survivor bijection and an adapted common global basis for the integral kernel, so the kernel and based-quotient statements remain sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "cex-bar-invariance-and-mod-q-congruence-without-balancedness",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-truncated",
    "location": "L2 and Proof 3.1",
    "disposition": "fixed",
    "finding": "L2 omitted the required weight decomposition and misidentified a residue basis as crystal-lattice data. Restated all three lattice axioms and separated the crystal-basis datum; made the scaled trivial lattice's zero-weight decomposition explicit in step 3.1. Direct coordinate intersections still give rank-one failure of surjectivity for the mixed chart and kernel Z v+Z qv for the scaled trivial chart, with the two stated distinct bar-fixed lifts.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "lem-quasi-r-divided-power-integrality-on-based-lattices",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "location": "Proof original 1.2; repaired 2.2; F1 and new Proof 1.1",
    "disposition": "fixed",
    "finding": "Step 1.2 placed the toral weight on the wrong factor. With n'=E-word input of second weight mu, its actual t-term scalar is q_i^{-t(mu(h_i)+r-t)}. Replaced the prose by the exact semilinear induction recursion. This factor-location error is nonfatal for the claimed integrality: the true scalar is still a Laurent unit and every t>=1 term still lowers second height. Also corrected the coproduct citations, which the named reordering interfaces did not supply, by adding the actual Hopf supplier and deriving the divided formulas locally in step 1.1. Consulted Bao–Wang's full seven-page argument and Lusztig sections 6.3.3–6.3.6, 24.1.1–24.1.6, 27.1.2–27.1.8, checking the flipped order and the finite-type and supported-globalization qualifications.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1403.0039",
      "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "ex-canonical-global-basis-normalization-in-symmetric-type",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "location": "L1",
    "disposition": "fixed",
    "finding": "The lowering-string formula in L1 needed n>=1 for tilde e. Added that restriction, n>=0 for tilde f, and the separate tilde e(1)=0 endpoint. The rank-one norm/product identities, A2 primitive-word lifts, Gram determinant 1-q^2 and its displayed inverse duals remain correct at all admissible indices, including the empty product at n=0. The proof does not require a negative divided power.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "ex-lower-and-upper-global-bases-in-a-small-highest-weight-module",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "fatal",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "location": "Example and Proof 1.2; L1 endpoint",
    "disposition": "fixed",
    "finding": "Extending an A=Z[q,q^{-1}] lattice by A0-span gives the entire field module, since it contains every negative q-power; it cannot give the crystal chart. Replaced this false inference in the Example and step 1.2 by scalar extension of C0=sum Z[q]w_n and C0^vee=sum Z[q]w_n^up. Their A0-spans agree because d_{m,n} and its inverse are units congruent to 1. The inverse-Gram lattice, adjoint bar and nonzero A/(1+q^2) quotient remain unchanged. Also restricted the norm recurrence to 1<=n<=m to exclude its undefined zero-index denominator.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-confirmed-defect-and-completed-local-repair",
    "item_id": "ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "stage": "5-adjudicate",
    "unit": "8",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "ill-typed-claim",
    "location": "Example and Proof 1.1",
    "disposition": "fixed",
    "finding": "The Example called E_Z-to-residues globalization, although the definition reserves that name for the inverse. Renamed that arrow canonical reduction and stated the inverse sends [v],[w] to v,w in step 1.1. Both arrows are isomorphisms here, so the balancedness, finite quasi-R matrix, correction c=q, corrected tensor basis and mixed-chart failure were already valid; this is a nonfatal direction/naming defect.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose-current-supplier-interface-accounting",
    "supplier": "def-balanced-triple-and-globalization-map",
    "finding": "The scalar-extension and basis clauses now explicitly require balancedness. All fifteen direct item consumers are draft and their exact uses remain mathematically sound; downstream_reviews records their paths, affected uses, owning route and any stale direct contract quotes. No published consumer repair or new publication audit is claimed.",
    "published_consumers": [],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-routed-discovery",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "disposition": "open",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "citation-inaccurate",
    "id": "thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule",
    "path": "items/thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule.md:98",
    "status": "draft",
    "route": "frontier-owner",
    "affected_use": "The finite quasi-$R$ intertwiner satisfies $\\Theta\\overline\\Delta(u)=\\Delta(\\overline u)\\Theta$; for $E_i,F_i$ their bars equal themselves.",
    "invalidated_claim": "The generic identity is false at u=K_h: barDelta(K_h)=K_h tensor K_h, but Delta(bar K_h)=K_{-h} tensor K_{-h}. The subsequent E_i/F_i use survives because their bars fix them.",
    "minimality": "Replace Delta(bar u) by Delta(u) in that one generic intertwiner formula, or restrict the formula to bar-fixed root generators. The Statement need not change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-routed-discovery",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "disposition": "open",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "id": "balanced-triples-and-global-crystal-bases",
    "path": "library/special-topics-in-representation-theory/balanced-triples-and-global-crystal-bases.md",
    "route": "page-owner",
    "affected_use": "Tensor bars prose says arbitrary finite-type action-finiteness and supported-correction prerequisites remain open.",
    "invalidated_claim": "The current integral-action supplier proves arbitrary finite-type vectorwise finite action and refutes unrestricted supported globalization by its periodic witness.",
    "minimality": "Replace the obsolete open-obligation sentence by the proved action scope and the refuted unrestricted-globalization boundary; keep the supported construction cases.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-owner-routed-discovery",
    "run": "frontier-44-special-representation-examples-28-six-step",
    "disposition": "open",
    "severity": "nonfatal",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "id": "balanced-triples-and-global-crystal-bases-examples",
    "path": "library/special-topics-in-representation-theory/balanced-triples-and-global-crystal-bases-examples.md",
    "route": "page-owner",
    "affected_use": "The page lists six carriers but describes four and concludes Together the four items; it also says every computation is finite.",
    "invalidated_claim": "Its inventory includes the distinct-shear finite-envelope failure and the periodic infinite-chain tensor balancedness failure.",
    "minimality": "Describe the two additional counterexamples and correct the count and scope of the objective; no item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-level-pairing-domain",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-cyclic-affine-type-a-cartan-datum",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/def-cyclic-affine-type-a-cartan-datum.md",
          "note": "The declared pairing omitted reverse-order notation, so the level expressions were ill-typed. Added the explicit transposed convention <h,lambda>:=<lambda,h>. The identity pairing, zero column sums, independent roots, rational form and reflection computations now establish the same datum and levels without altering any numerical value."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "def-cyclic-affine-type-a-cartan-datum",
          "model": "gpt-6.1-sol",
          "context_sha256": "d3fca14ff953952da927991f44ed84a792d2c7d2dfe4a0a77b80d1df3c495ba7"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-string-descendant-expansion",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-integrable-rank-one-actions-force-the-quantum-serre-relations",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/lem-integrable-rank-one-actions-force-the-quantum-serre-relations.md",
          "note": "In L_i(2), the middle divided string vector is not in the span of the highest and lowest endpoints, so F3 was false. Replaced that clause with the exact admissible descendant expansion. The Serre proof only needs the highest-vector endpoint bound on its finite integrable Hom module; the adjoint expansion at n=m+1 has unit Gaussian exponents and proves both families without Serre assumptions."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "lem-integrable-rank-one-actions-force-the-quantum-serre-relations",
          "model": "gpt-6.1-sol",
          "context_sha256": "f0e519d0f31a5032979ead23e49876fda667de54e8bff972e5c694b7e2f4db4e"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-wedge-chart-independence",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "def-finite-q-wedge-space-and-normal-ordering-relations",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/def-finite-q-wedge-space-and-normal-ordering-relations.md",
          "note": "The internal direct sum W_0 required independence, which old step 5.1 did not prove. Added a local argument: A_N on finitely many decreasing raw tensor rows has a minor specializing at q=1 to the identity signed antisymmetrizer minor, hence is nonzero over Q(q). Quotient relations lie in ker A_N, so this proves independence over the field and Z[q]. All relations, charts and Definition remain unchanged."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "def-finite-q-wedge-space-and-normal-ordering-relations",
          "model": "gpt-6.1-sol",
          "context_sha256": "99330ca52eba954a0ec1d96da0473e8f1c5be5b521fdd1233eb743fb22d1df7b"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-cube-residue-rule",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "statement",
      "subject": "lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices.md",
          "note": "The exact tensor cube identifies Chevalley actions and normalized lattice stability, but its signature rule is only on residues. For e=2,i=1, F|1>=|2>+q|11>, F^(2)|1>=|21>, and the killed string |2>-q^(-1)|11> give tilde f|11>=q/(1+q^2)|21>, nonzero with zero residue. Repaired Statement, step 3.1 and conclusion to distinguish actual lattice operators from their modulo-q survivor arrows; retained cubes, polarization and divided integrality."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices",
          "model": "gpt-6.1-sol",
          "context_sha256": "b0f37a0d2fb336ae62e6540cdf3473b65bbf4000b7a3d3c654fc23de4090ecbe"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-signature-residue-rule",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-good-and-cogood-nodes-by-residue-signature-reduction",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/def-good-and-cogood-nodes-by-residue-signature-reduction.md",
          "note": "At e=3,i=2 the two-slot decomposition gives tilde f|21>=q/(1+q^2)|31>, while the reduced signature -+ has no surviving plus. Thus the zero arrow is only its zero class modulo qF_0. The Definition now specifies b_lambda in F_0/qF_0, and F1, Verification 2.1, calibration 3.1 and conclusion consistently distinguish crystal arrows from normalized field-vector values."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "def-good-and-cogood-nodes-by-residue-signature-reduction",
          "model": "gpt-6.1-sol",
          "context_sha256": "13bfe8a925b9613f266e33656bffb86f2421dbc9f77b38704955b7329a0902ef"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-vacuum-crystal-identification",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "prop-the-empty-partition-generates-an-integrable-highest-weight-submodule",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/prop-the-empty-partition-generates-an-integrable-highest-weight-submodule.md",
          "note": "The original Statement promised the vacuum crystal identification but the final proof explicitly postponed it. Added the canonical highest-crystal and actual cube dependencies and a local choice-free proof: lowering words give L_M subset M∩F_0; root-height induction and the no-common-raising-kernel property force equality. Saturation then injects L_M/qL_M into F_0/qF_0, whose image is the lowering-generated component, closed under both arrows. The Statement and AC requirements remain unchanged."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "prop-the-empty-partition-generates-an-integrable-highest-weight-submodule",
          "model": "gpt-6.1-sol",
          "context_sha256": "c6fc67df3700664201c24d2864be52f3ba6062d5ea0fe0acf5e61f15cac17edf"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-period-inverse-vacuum",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable.md",
          "note": "The supplier guarantees a finite geometric inverse only on positive-size weights. Its explicit period operator fixes the vacuum, so 1-T annihilates that nonzero line. Qualified F1 accordingly. The proof uses deep insertion vanishing for stabilization, not the geometric inverse; charge relabelling, normalized split coproducts, finite cubes, label finiteness and the AC-qualified semisimple decomposition remain valid. The Statement is unchanged."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable",
          "model": "gpt-6.1-sol",
          "context_sha256": "a47975fa2a2e7d482ae21cb3da7f8d7b5e8813bfe9b38355626526c0207c21f8"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "row": {
      "defect_id": "f44-six-step5-initial-r1-u9-noncanonical-field-splitting",
      "run": "frontier-44-special-representation-examples-28-six-step",
      "at": "2026-10-11T16:14:50.013115+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "9",
      "group": "step5-v2-initial-r1-u9",
      "evidence": [
        {
          "path": "items/thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero.md",
          "note": "The decomposition supplier asserts existence of an isomorphism carrying lattices and crystals to standard summands, with choices of summands and lifts; it does not make the field splitting canonical. At k=2 the two equivalent constituents admit mixing automorphisms. Replaced F3 with existence, exact finite-label and finite-cone hypotheses, canonical component types and multiplicities. F2 now cites the proved lower lattice and residue crystal rather than an unsupported lower-global-basis claim. The decomposition Statement is unchanged."
        },
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "note": "Local mathematical adjudication and completed repair, not independent review of the repair. Current guard and review context are recorded; the engine owns renewed judging and certification."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u9.json",
          "id": "thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero",
          "model": "gpt-6.1-sol",
          "context_sha256": "b1f6d482239e055158afdc13da39e68952dcdab2910782c1b5dc55d453d0673f"
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      }
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The direct dependency/reference and actual-use inventory contains only draft original-frontier items. No published defects, published repairs, outside-frontier consumers or published audit classifications were discovered; draft-only details stay in this run report."
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors",
  "def-cyclotomic-hecke-central-content-sector-notation",
  "lem-degenerate-affine-hecke-ordered-monomials-form-a-basis",
  "prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras",
  "def-affine-and-cyclotomic-type-a-hecke-algebras",
  "def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras",
  "lem-cyclotomic-hecke-intertwiners-and-local-power-series",
  "lem-cyclotomic-klr-block-satisfies-the-hecke-relations",
  "lem-hecke-intertwiners-produce-local-klr-generators",
  "thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras",
  "thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular",
  "lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases",
  "lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis",
  "lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular",
  "def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules",
  "thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives",
  "def-the-higher-level-schur-weyl-projective-generator-and-schur-functor",
  "def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality",
  "thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects",
  "thm-category-o-translation-intertwines-residue-induction-and-restriction",
  "thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module",
  "thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module",
  "thm-degenerate-ariki-categorification",
  "thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one",
  "ex-degenerate-ariki-decomposition-numbers-in-small-rank",
  "lem-generic-cyclotomic-type-a-support-is-bounded-by-rank",
  "lem-generic-nondegenerate-local-inverse-tables",
  "lem-integer-color-degenerate-hecke-klr-local-inverse-tables",
  "lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower",
  "rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges",
  "cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one",
  "lem-free-fi-modules-have-explicit-weight-and-stability-bounds",
  "lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules",
  "lem-generation-degree-bounds-surjectivity-degree-and-weight",
  "lem-padded-irreducible-characters-have-character-polynomials",
  "lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight",
  "prop-specht-constituents-of-an-fi-module-have-bounded-first-row",
  "prop-weight-and-stability-degree-give-uniform-representation-stability-range",
  "thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category",
  "thm-finite-generation-is-equivalent-to-uniform-representation-stability",
  "thm-finitely-generated-fi-modules-have-eventual-character-polynomials",
  "cor-dimensions-of-finitely-generated-fi-modules-are-eventually-polynomial",
  "cor-hook-divisibility-defect-zero-vanishing-criterion",
  "lem-type-a-modular-root-interval-essential-subset-basis-and-count",
  "thm-kleshchev-first-level-branching-multiplicity",
  "thm-normal-node-composition-multiplicities-under-residue-restriction",
  "thm-conormal-node-composition-multiplicities-under-residue-induction",
  "thm-cogood-node-gives-the-simple-socle-and-head-of-residue-induction",
  "cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues",
  "lem-virtual-weyl-combinations-detect-q-schur-block-separation",
  "thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core",
  "cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core",
  "def-algebraically-constructible-complex-of-analytic-field-sheaves",
  "lem-field-module-sheaves-have-injective-derived-models",
  "lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model",
  "lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent",
  "def-finite-complex-algebraic-whitney-stratification-and-control-data",
  "lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation",
  "lem-corner-adapted-strong-approximations-remain-in-the-same-orthant",
  "lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps",
  "lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection",
  "thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations",
  "thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation",
  "lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences",
  "lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom",
  "def-equivariant-constructible-derived-category-for-complex-algebraic-varieties",
  "def-first-row-padding-completion-and-the-stabilization-operator",
  "def-the-level-one-vector-representation-its-affinization-and-energy-function",
  "def-semi-infinite-q-wedge-fock-space-and-q-adic-topology",
  "lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness",
  "lem-the-node-count-is-the-level-one-cartan-pairing",
  "def-good-and-cogood-nodes-by-residue-signature-reduction",
  "def-good-node-and-cogood-node-crystal-operators",
  "lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms",
  "lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms",
  "thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks",
  "def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks",
  "def-symmetric-group-level-one-residue-and-partition-label-convention",
  "def-nondegenerate-root-of-unity-level-one-hecke-regime",
  "lem-degree-and-codegree-of-standard-tableaux",
  "thm-graded-specht-module-has-homogeneous-tableau-basis",
  "def-graded-specht-module-by-homogeneous-standard-tableaux",
  "thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations",
  "def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators",
  "prop-fi-module-realizing-one-padded-irreducible-family",
  "prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated",
  "thm-murnaghan-stability-for-kronecker-coefficients"
]


