# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"impact-initial",round:1,unit:"2",input_sha256:"a4e74c6b3f44f9c733edbe89b7d1c7a8e45c36471dcffb19a4294547d74abc64",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-def-cm-affine-time-space",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-cm-affine-time-space",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "4d0389d0c18ab948926df69e4c529d492653766bb729e0eb4b19dc4563e488ff",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "The original formula used x_3 for a function on {0,1,2} without a relabeling convention. Added x_i=x(i-1), preserving the ordered spatial basis, coordinate bijection and all slice-distance formulas; this is a nonfatal notation omission, not a changed affine model. Checked the torsor identities, rank-nullity dim K=3, fixed orientation and same-slice positivity."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "def-cm-affine-time-space / gpt-6-luna / 6190ed9e5c427e0b3e8ee60fa61e7c213ea85df45e634181dee8a22444b024f5"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-def-cm-constrained-configuration-and-mass-metric",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-cm-constrained-configuration-and-mass-metric",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "3977d92d38c75363c11f170356b4c7e1398f827116c15f4d619a7902a91f5728",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "The intrinsic supplier differential lands in T_X(q) R^(3N), whereas M acts on R^(3N). Added the explicit canonical linear isomorphism w -> (w([pi_k])) and retained dX notation for its composite; the coordinate-basis theorem proves invertibility. Added the exact block indexing. This nonfatal omitted identification now types the unchanged pullback form; smooth coefficients J^T M J, semidefiniteness and inclusion interpretation remain valid for d=0 and nonimmersions."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "def-cm-constrained-configuration-and-mass-metric / gpt-6-luna / 17c3ebc8763dc4174386dc429c4a7f49707e6b7ba72209c4d697614cc064c675"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-def-cm-traction-and-stress",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-cm-traction-and-stress",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "e4073e30b0a3a98c81685ad6a4b462727166d91ba36b1f7258222172b2ad61ce",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "The cited product defines rectangular matrix products, not their action on a function-space vector. Added the explicit column identification and component sum, with exact one-based labels for the Remarks. This nonfatal omitted convention preserves stress representation, reversed-normal sign, tangentiality and the cubic nonrepresentation witness; its two equal nonzero coordinates give 1/(2 sqrt(2)) rather than 1/sqrt(2)."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "def-cm-traction-and-stress / gpt-6-luna / a274c736991fc963a386edb51caa27b4f27b67ab2804c1e14373f38f9b3b97d7"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-ex-cm-closed-one-form-radial-primitive",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-cm-closed-one-form-radial-primitive",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "adcd4f7515df4d262b01a675c83ad17f052791d27de0a9fe600f1df11348014f",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "Confirmed a nonfatal component-label mismatch with the exact closed-field supplier. Reindexed F_0,F_1 and partial_0,partial_1 throughout: partial_1 F_0=2x=partial_0 F_1 and grad(x^2 y)=F. Also restored the integrability hypothesis missing from L4 and supplied continuous-polynomial integrability before Newton-Leibniz. The radial integrand remains 3x^2 y t^2 and its primitive x^2 y t^3, including endpoints and zero coordinates."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "ex-cm-closed-one-form-radial-primitive / gpt-6-luna / 15ab295be8f04ce4ecdadf9cb9b8d19c7048550179b92db2e36cfd10125472fc"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-def-cm-hyperbolic-equilibrium-and-limit-cycles",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "def-cm-hyperbolic-equilibrium-and-limit-cycles",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "c9237529375cb9f24bfcd497fc9ad8e15e24e9ff4996c7661d994efcc86a6879",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "Confirmed the ancillary W-plus formula leaves the trajectory and domain unquantified for an arbitrary F. Replaced it by explicit sets of initial states with at least one maximal solution and convergence on the full positive/negative ray for every maximal solution, matching the all-solutions stability convention and reducing to the usual sets under uniqueness. No stable-manifold conclusion is asserted. Complexified spectral definitions, periodic-orbit isolation and homoclinic/heteroclinic domains remain unchanged."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "def-cm-hyperbolic-equilibrium-and-limit-cycles / gpt-6-luna / aac27e62e1778a30a18a7d18d12234c8da77b66078a3d64145f55c97f3daf6eb"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-def-cm-orbital-and-linear-stability",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "nonfatal",
      "location": "remark",
      "subject": "def-cm-orbital-and-linear-stability",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "f592779f2eb53a859ee9d78f49a2697e7fe1b43902c579636decc9bd23c41765",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "The Definition already requires forward invariance, but its limit-cycle remark omitted that prerequisite for arbitrary nonunique systems. Explicitly retained that condition in the remark, rather than asserting uniqueness or that every periodic image is invariant. Checked all-maximal forward existence, infimum/closure distance and the linear-system boundedness predicates. The original Definition is unchanged; this is a nonfatal explanatory omission."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "def-cm-orbital-and-linear-stability / gpt-6-luna / 03bc25e62856e0c842968105faa1d516d1512aad5818c9050713102fe68abd54"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-lem-cm-moving-frame-acceleration-identity",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-cm-moving-frame-acceleration-identity",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "e3327c670da81018685b623ca0baebb149af4c6f5ba3491830204b54fcbc442d",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "L1 incorrectly attached twice differentiability to the SO(3) definition; attributed it to the given C2 hypothesis. Also made the one-based matrix/vector action explicit, proved omega is C1 from its component formulas, and differentiated those formulas before using Omega-prime y=omega-prime cross y. Checked skewness, unique cross-product representative, R^T R-double-prime=Omega-prime+Omega^2 and norm preservation, including domain-relative endpoints. These are nonfatal citation and omitted-convention/regularity explanations; no acceleration conclusion changes."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "lem-cm-moving-frame-acceleration-identity / gpt-6-luna / 93da70e17fb78108df3722ff767ea5052df4a2005d251d30b94126c82095ec84"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "280efdf1b3fe875baacf5a8697ccadc9da4a16d0f941cad31872e8f13d8aac6b",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "Confirmed F5 overstates its exact supplier: the restricted-atlas statement does not itself assert ambient embeddedness or tangent equality. Replaced F5 by that exact scope and completed step 4.1 locally: restrict an O(3) slice chart to det>0, then compute the open inclusion differential as the identity on coordinate derivations. Directly checked the smooth R9->Sym3=R6 map, surjective derivative H=AS/2, both kernel inclusions, relative openness/closedness and closed/bounded compactness without choice. This is a nonfatal short local proof gap; every Statement clause is preserved."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold / gpt-6-luna / 74603a8044ef8e542d860e6af1084d76ebf862df575628c5da7ed238f871afff"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-cex-cm-collinear-labeling-admits-a-nontrivial-rotation",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:18:45.601772+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "cex-cm-collinear-labeling-admits-a-nontrivial-rotation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "1",
      "item_sha256": "1db1d6e41fd8e3a86c0718a2cd7bd35e7bc63ca7599171b6090a0ce38a6dd527",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "Confirmed the diagonal determinant formula is not a stated consequence of either cited interface. Replaced multiplicativity by the determinant definition and explicitly evaluated its Leibniz sum: all nonidentity terms contain a zero off-diagonal factor, while the identity term is (-1)(-1)(1)=1. Also specified e1,e3 and the column action. Checked R^T R=I, R e3=e3, R0=0 and R e1=-e1, so the same collinear labeling refutes the same assertion. This is a nonfatal missing elementary computation/citation."
        }
      ],
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "obligation": "cex-cm-collinear-labeling-admits-a-nontrivial-rotation / gpt-6-luna / 42e80bf04c3e7759e8cbe68d31d99d911d3067246818f746f419a711ca1d9822"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "add_consumer_evidence_to_existing_record",
    "record": "physics-em-sr-40-2026-10-08-b20-zero-direction",
    "id": "thm-total-derivative-computes-directional-and-partial-derivatives",
    "raw_sha256": "1166fd81e189cef59466041f45af0b44691398851cb20398b47941cf9a9f12dd",
    "path": "items/thm-total-derivative-computes-directional-and-partial-derivatives.md",
    "affected_use": "2.1 Dividing by $t$ gives $(f(a+tv)-f(a))/t=Df(a)v+r(tv)/t$, and $\\|r(tv)/t\\|_2=\\|v\\|_2\\,\\|r(tv)\\|_2/\\|tv\\|_2\\to0$; hence [L2] yields $D_vf(a)=Df(a)v$. [step 1.1, L2, algebra]",
    "invalidated_claim": "The published proof normalizes by ||tv|| without v nonzero; its Statement includes v=0. The zero-direction branch is omitted, as already recorded in the canonical ledger.",
    "consumer": "lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold",
    "consumer_use": "F3 and Proof 2.1 identify Df(A)H=A^T H+H^T A for every H. The displayed expansion gives the zero-direction derivative 0 directly when H=0, and total-derivative linearity also gives Df(A)0=0; the omitted supplier proof branch is not a gap in this local computation.",
    "minimality": "Published mathematics owner may add the identically-zero directional quotient for v=0; retain the existing nonzero-v argument and all Statement clauses. Imports and original supplier were not edited.",
    "disposition": "open-published-maintenance; assigned consumer sound",
    "reason": "Read the complete three-step published argument and confirmed its known zero-direction omission; the assigned matrix-polynomial proof handles H=0 locally without division by its norm.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_owner_routed_finding",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u1-qm-shear-clause-locator",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:20:55.538927+00:00",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "cex-nrqm-framework-quadratic-shear-is-not-galilean",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "open",
      "batch": "43",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u1.json",
          "note": "Only the supplier clause locator is incorrect: zero acceleration preservation is clause 3 (derivative laws clause 2), rather than clause 1. The explicit shear calculation and counterexample conclusion are sound. Replace clause 1 by clause 3 in Verification 1.3; owning frontier unit handles the presentation repair."
        }
      ],
      "owner_route": "frontier-owner (outside unit 1; no carrier edit or adjudication here)"
    }
  },
  {
    "ledger": "defect",
    "id": "lem-cm-roundoff-accumulation-in-one-step-schemes",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "The singleton counterexample satisfies the explicit inequality with Lambda=-1 but makes clause 2 conclude 0<=-1. Added 0<=Lambda<infinity. With this sign, substituting the nonnegative geometric distance bound is valid; n=0, eta=0 and L=0 are included."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-verlet-local-truncation-error-is-cubic",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "F5 and step 3.1 incorrectly used phase points W as position arguments. The actual q and q2 lie in the open convex projection Q=pr_q(W). At any lift in W, DH_V(q) is a block of D^2X_H, so its operator norm is at most L2; integrating along Q proves the same quadratic gradient remainder. Fixed the typing and block bounds without changing the Statement or constants."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-holomorphic-map-calculus",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "The cited dictionary defines scalar one-variable local uniform convergence only. Clause 4 now defines convergence on compact subsets of D in the Euclidean target norm and its equivalent finite-component form. The proof establishes continuity by the epsilon/3 triangle estimate, applies the one-variable limit theorem to each component slice, then the polydisc supplier and finite-dimensional derivative assembly. The real chain rule is established before its uses in coefficient extraction."
  },
  {
    "ledger": "defect",
    "id": "prop-cm-drift-kick-and-verlet-preserve-the-canonical-form",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "For U=(-0.1,0.1)x(0.9,1.1), M=1, V=0 and h=1, q+p is outside the position interval at every input, so the Verlet domain is empty. The finite-regularity canonical definition requires phase domains to be nonempty. Clause 3 now qualifies only the transformation terminology by nonemptiness, retaining C2 regularity and matrix/form preservation on the entire admissible open set. Explicit inverse factors prove a C2 diffeomorphism onto an open image whenever that domain is nonempty."
  },
  {
    "ledger": "defect",
    "id": "def-cm-modified-log-coefficients-and-truncations",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "The polynomial formula is defined for every complex s, but for m=-1,k=1 gives -1, which cannot be a subset count. Restricted only the counting interpretation to integers m>=0, with zero for k>m, and explicitly used m in N for map iteration. The full complex polynomial family, derivative (-1)^(k+1)/k at zero and coefficient-field definitions are preserved."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-symmetric-log-parity-removes-odd-coefficients",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "The title defect is nonfatal: B=0 gives an exact one-part flow and vanishing corrections, so h^2 is only the first possible order. Independently confirmed the fatal reality defect from the batch digest: for A=p^2/2, B=q^2/2, the drift-kick-drift log has X3=(-p/12,-q/6), H3=q^2/12-p^2/24. At N=3, (q,p)=(1,0), h=epsilon(1+i)/sqrt(2), H_h=1/2+i epsilon^2/12. Qualified reality by real h, retaining all complex-step formal identities; changed the title to first possible correction. The formal log inverse, parity and normalized H2=0 arguments remain valid coefficient by coefficient."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-cauchy-formula-and-power-series-on-polydiscs",
    "status": "owner_review_required",
    "outcome": "confirmed_nonfatal",
    "affected_use": "Proof 1.1 asserts continuity on the closure of the outer open disc |z1-a1|<rho1.",
    "invalidated_claim": "Continuity on the open polydisc does not imply extension to its outer boundary: f(z)=1/(rho1-z) is a counterexample.",
    "minimality": "Replace the outer-closure wording with continuity on the smaller closed disc of radius r1<rho1. The actual Cauchy application and remaining proof use only that interior circle.",
    "route": "frontier owner; unassigned item left unchanged",
    "source_urls": [],
    "familiar": true,
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-cm-separate-roundoff-energy-accumulation",
    "status": "false_positive",
    "outcome": "false_positive",
    "evidence": "The rejection overlooks the inherited definition: analytic splitting data require K subset U and D(r)={Z:dist(Z,closure U)<r}. Thus every x_j in K has distance zero to closure U and lies in D(rho/8), independently of either comparison segment. The Statement additionally assumes both gradient-comparison segments lie in that domain. The local state defect, conservation of H_h at the modified endpoint, gradient integral estimates and finite telescoping therefore give exactly 2 C_E h^2+C n h exp(-c/h)+C_G n eta, including n=0. No carrier edit is warranted."
  },
  {
    "ledger": "defect",
    "id": "rem-cm-scope-of-the-certified-verlet-estimates",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "The summary omitted the supplier-specific small-step and comparison-segment hypotheses for the linear energy term. It now names the positive real constant step, residual bound, retained x_j in K and the two exact segments [x_{j+1},Psi_h(x_j)] and [Psi_h(x_j),phi_{H_h}^h(x_j)] in D(rho/8). These are precisely where the bounded gradient is integrated. Also clarified that exact symplecticity is not guaranteed under rounding, rather than claiming it always fails. All numerical statements remain conditional, with no floating-point precision or empirical conclusion asserted."
  },
  {
    "ledger": "defect",
    "id": "rem-cm18-numerical-error",
    "supplier": "lem-cm-roundoff-accumulation-in-one-step-schemes",
    "status": "owner_repair_required",
    "affected_use": "Additive per-step error: For a readout F:X to R with |F(x)-F(y)|<=Lambda d(x,y), multiply these bounds by Lambda.",
    "invalidated_claim": "The consumer leaves the sign of Lambda unspecified in precisely the multiplication that fails for a singleton and negative Lambda.",
    "minimality": "Add 0<=Lambda<infinity to that readout premise; no change to the state bounds is required.",
    "route": "frontier owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm13-canonical-map",
    "supplier": "prop-cm-drift-kick-and-verlet-preserve-the-canonical-form",
    "status": "owner_repair_required",
    "affected_use": "genuine transitions between such charts are equal-dimensional local\ncanonical transformations by clauses 2-3 of that theorem. The drift, kick and velocity-Verlet maps of the mechanical splitting in exact\narithmetic are equal-dimensional local canonical transformations on their\nadmissible domains by\n[[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]].\n",
    "invalidated_claim": "The generic mechanical-map assertion uses canonical transformation/map terminology on admissible domains without stating their nonemptiness.",
    "minimality": "Qualify only that terminology by nonempty admissible domains, or phrase the assertion as the pointwise canonical matrix identity. No changes to physical predictions or underlying formulas are required.",
    "route": "frontier owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "rem-cm13-locality-topology",
    "supplier": "prop-cm-drift-kick-and-verlet-preserve-the-canonical-form",
    "status": "owner_repair_required",
    "affected_use": "  integration may avoid the assumption.\n\n- **Numerics.** The drift, kick and velocity-Verlet maps of the mechanical\n  splitting are canonical in exact arithmetic\n  ([[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]]); the scope\n  of the certified numerical estimates, including roundoff and the absence of",
    "invalidated_claim": "The generic mechanical-map assertion uses canonical transformation/map terminology on admissible domains without stating their nonemptiness.",
    "minimality": "Qualify only that terminology by nonempty admissible domains, or phrase the assertion as the pointwise canonical matrix identity. No changes to physical predictions or underlying formulas are required.",
    "route": "frontier owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose-append",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u11-lem-cm-uniform-second-order-remainder-bound",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:09:00.650488+00:00",
      "class": "accuracy",
      "subclass": "false-generality",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-cm-uniform-second-order-remainder-bound",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "batch": "11",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "L5 incorrectly asserted attainment for the zero domain, whose unit sphere is empty. The lemma assumes m>=1 and only uses square maps on R^m, so this overstatement does not invalidate its Taylor/Cauchy-Schwarz argument. Restricted attainment to nonzero domains and stated the zero-domain convention; the Statement and dependencies are unchanged."
        },
        {
          "path": "items/lem-cm-uniform-second-order-remainder-bound.md",
          "note": "Current repaired carrier; itemHashGuard 8fa714849e4e6c33729526e8427fc2095c9fa354e6a2482b3da37d6fd8e648ff"
        }
      ],
      "correction": "L5 incorrectly asserted attainment for the zero domain, whose unit sphere is empty. The lemma assumes m>=1 and only uses square maps on R^m, so this overstatement does not invalidate its Taylor/Cauchy-Schwarz argument. Restricted attainment to nonzero domains and stated the zero-domain convention; the Statement and dependencies are unchanged.",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u11.json",
          "obligation": "lem-cm-uniform-second-order-remainder-bound:gpt-6-luna:9f04815ce4fd048ba9923b9c5a3b2078e3231839ec891adeb806d2b4473a1343"
        }
      ],
      "source_urls": [
        "https://www.rose-hulman.edu/~bryan/lottamath/mtaylor.pdf"
      ],
      "familiar": true,
      "uncertain": false
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose-append",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u11-def-cm-calibration-rule",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "at": "2026-10-13T04:09:00.650488+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-cm-calibration-rule",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "batch": "11",
      "disposition": "fixed",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u11.json",
          "note": "The fixed-value declaration in clause 1 conflicts with clause 4's random branch: a point of Theta is not a map Omega->Theta. The repaired Definition types the two alternatives separately and explicitly defines theta^(r)(omega)=theta_ref^(r)+eta_r(omega) in the random branch, with every-outcome membership in Theta and a joint deviation law. The nominal tuple remains deterministic and Gamma keeps exactly the same two arguments and domain."
        },
        {
          "path": "items/def-cm-calibration-rule.md",
          "note": "Current repaired carrier; itemHashGuard b1185c9876be839974a70d3d640f8c37ecc552d98db9c8114510fd39c71d72d5"
        }
      ],
      "correction": "The fixed-value declaration in clause 1 conflicts with clause 4's random branch: a point of Theta is not a map Omega->Theta. The repaired Definition types the two alternatives separately and explicitly defines theta^(r)(omega)=theta_ref^(r)+eta_r(omega) in the random branch, with every-outcome membership in Theta and a joint deviation law. The nominal tuple remains deterministic and Gamma keeps exactly the same two arguments and domain.",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u11.json",
          "obligation": "def-cm-calibration-rule:gpt-6-luna:4e4795d1a723a69236573b049c998b8c1cfda2098f31d0fb97787ee3716a27a7"
        }
      ],
      "source_urls": [
        "https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf"
      ],
      "familiar": true,
      "uncertain": false
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "propose-append",
    "record_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u11-published-norm-indexing",
    "subject": "thm-operator-norm-is-the-largest-singular-value",
    "status": "open mathematics-owner maintenance; imported carrier is read-only",
    "path": "items/thm-operator-norm-is-the-largest-singular-value.md",
    "raw_sha256": "46312f62e13d4405d6bd8d5754b5d8f51c67c41216bd408f9d179537848d9a57",
    "affected_use": "Proof 1.1 states Te_j=sigma_j f_j for every j through n=dim(V), although the SVD supplier provides only f_1,...,f_m for m=dim(W). Proof 2.1 invokes f_1 even when W=0 and V is nonzero.",
    "exact_snippets": [
      "then the displayed formula gives $Te_j=\\sigma_jf_j$ for every $j$",
      "$\\lVert Te_1\\rVert=\\lVert \\sigma_1f_1\\rVert=\\sigma_1$"
    ],
    "invalidated_claim": "The general proof is not well-typed for dim(V)>dim(W), including W=0. For example, the zero map R->0 has no f_1, while its norm is zero and is attained at every unit domain vector. This is a proof defect; the theorem statement is true.",
    "minimality": "Keep the SVD norm sum over j<=r, the positive singular-value indices, and treat r=0 by T=0 with any unit domain basis vector. Preserve the theorem Statement and the zero-domain convention. No original mathematics or imported bytes were edited.",
    "route": "Mathematics owner to repair the original published proof; reconcile its pinned import outside the active physics run. No Step 5 rejudge or item gate is requested.",
    "consumer_effect": "The assigned remainder lemma uses only R^m->R^m with m>=1, so all codomain basis symbols exist even at rank zero. Its norm use remains sound and its Statement was not changed.",
    "reason": "Independently checked the digest alert against the complete local norm and SVD proofs: only r positive singular-value terms are furnished, and the codomain basis may be empty or shorter than the domain basis.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-cm-parallel-axis-theorem",
    "action": "record_false_positive",
    "reason": "The earlier supplier page cm-math-rigid explicitly sets u_j=u(j-1) and M_jk=M(j-1,k-1) for j,k=1,2,3. The theorem invokes that mass-distribution notation, so entry 33 is native entry (2,2), not an undefined entry. Expansion yields the stated constant correction and first-moment terms, which vanish by centredness; both finiteness lemmas supply all integrability hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm-pendulum-linearization-error-check",
    "action": "record_repaired_nonfatal",
    "reason": "Title and verification step label overstated an inequality as an error expression. Repaired to error bound; the actual bound and all model hypotheses remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm-pendulum-linearization-error-check",
    "action": "record_repaired_nonfatal",
    "reason": "Digest concern verified: old L2 and step 2.1 used FTC without its deps entry. Added thm-ftc-second-part, thm-continuous-implies-integrable and thm-exponential-addition-formula to deps, dependency_roles and exact contract citations. Checked their hypotheses locally; local L3 now defines the first/second component labels.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "prop-cm-pendulum-small-angle-linearization-bound",
    "action": "route_to_frontier_owner",
    "affected_use": "items/prop-cm-pendulum-small-angle-linearization-bound.md Statement clause 3 uses y=(y_1,y_2), z_1 and y_1; proof step 2.1 uses e_1,e_2 against a native R^2 indexed by 0,1. No explicit native-to-one-based bridge is present in this supplier.",
    "invalidated_claim": "The intended norm and component conclusions are mathematically correct; explicit component and basis labels are missing under the workspace definition rule.",
    "minimality": "Add w_j=w(j-1) for j=1,2, with e_1=(1,0), e_2=(0,1). Do not alter the bounds or hypotheses. This supplier is outside the two assigned items and was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-stable-unstable-cones-and-line-slopes",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The existence summary omitted L>=2 and k(2L-k)>=1. At L=2, k=0.01, s_n=2, every transformed slope is at least 1/4.01>k, so no invariant family can stay in the stated interval. Added precisely the companion lemma hypotheses; cone, slope, orbit and transversality definitions are unchanged.",
    "repair_status": "repaired",
    "post_sha256": "5fe0a693291ed6c15cc6b323d469146e04c4fb1d08620c0f463c7780c22c5154",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-slope-graph-transforms-converge",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Step 3.1 had only geometric tails and rules for existing limits. Added thm-cauchy-criterion-via-lub to deps and F4, and explicitly passed the tail estimate to the limit for uniform convergence. Also licensed the reverse triangle estimate with lem-of-triangle-inequality and derived the line action from the matrices in F1. No Statement change or choice assumption.",
    "repair_status": "repaired",
    "post_sha256": "135db303f7912ed6417464f7d3240d2d39bd9f72f05ae1677a04ab912382ec62",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "def-bilateral-symbol-and-bounded-sequence-space",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "B_R was introduced only for R>0 although completeness clause 4 also uses B_0. Defined the same formula for every R>=0, with B_0 the zero sequence. Metric weights, relabelling and shift conventions are unchanged. Removed inaccurate publication labels for the current draft binary suppliers.",
    "repair_status": "repaired",
    "post_sha256": "0e02a6bb2065e120c3ae27b51dfb6abf4533d63f11348339d938053d2b127361",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "def-smooth-periodic-oscillator-pulse-model",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "The cutoff supplier types chi only on (0,1), whereas the Riemann integral needs endpoint values on [0,1]. Zero-extended chi before defining I, explaining smoothness from its compact support. Positivity, normalization, periodic pulse, Hamiltonian convention, maximal domains and time rescaling are preserved.",
    "repair_status": "repaired",
    "post_sha256": "e4e0197bc61b289c5cb563c90c2d0851b62fee89d0691895650f388924334af0",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-bounded-bilateral-sequence-ball-is-complete",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F6 used the triangle inequality but cited only basic absolute-value properties. Added the published triangle-inequality supplier to deps, roles and F6. Passed signed coordinate inequalities to limits in steps 2.1, 3.1 and 4.1, avoiding an unstated absolute-value limit rule. Completeness and the pullback-metric proof hold also at R=0 without choice.",
    "repair_status": "repaired",
    "post_sha256": "2a50d842ee74672155375436e2932489916b4b6973a302fc0d67861dcc47ad8f",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-close-map-first-component-has-uniform-inverse",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F1 applied an open-domain mean-value inequality directly on a closed interval. Added cor-mean-value-theorem and applied its exact continuity-on-closed/differentiability-on-open hypotheses to every pair of endpoints; equal endpoints give zero. Added the missing triangle supplier for F4. Banach self-map, unique root, derivative formulas and the existing open C2 extension in step 4.1 remain sound.",
    "repair_status": "repaired",
    "post_sha256": "1a776060a51095ebf00d8d4a3e2cc54f9e7451c66f542a69572a12c9ad251b7a",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-perturbed-scalar-recurrence-root-bounds",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "The root margins and strict monotonicity require the scalar mean value theorem, absent from deps and F5. Added its published closed-interval supplier and exact hypotheses, and licensed the u+w estimate with the triangle supplier. Verified both signed windows, derivative denominator >=13, 24/27 and 42/27 endpoint margins, orbit residual identity and the existing C2 extension in proof step 5.1. Statement unchanged.",
    "repair_status": "repaired",
    "post_sha256": "d6a1e6f882aa0e653a39ab71761e5f2fdb537a684dfaa1f7728dc37d06747193",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm-chaos-pulse-and-rotation-endpoint-checks",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The nonzero P-periodic beta_delta cannot vanish globally outside [pi/2,P]. Restricted the support claim and verification to one period, and stated its global support as the union of period translates of pi/2+delta supp(w). Normalization is the integral on one period. Free rotation, limiting rescaled kick and their exact composition remain unchanged.",
    "repair_status": "repaired",
    "post_sha256": "3eb75dfe16a057dd6ae1b08ce6d647fa6b9da07b7a144ace1d9093dfbc7f2410",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-symbol-locality-gives-coding-continuity",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "F3 incorrectly attributed T_s self-mapping and iterate bounds to the space definition and completeness lemma. Added the already-declared contraction supplier, its clauses 1-3, and the induction from zero that proves every iterate stays in B_R. The finite-window induction, Banach error, continuity modulus and inverse-orbit sign injectivity are unchanged and valid.",
    "repair_status": "repaired",
    "post_sha256": "5b4991253d8bbe5b84120359cf016d0840315874aef8ce6cd6a7ac9caec1698a",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-explicit-perturbed-horseshoe-and-transversality",
    "outcome": "false_positive",
    "defect_type": null,
    "reason": "F1 explicitly cites proof step 5.1 of lem-perturbed-scalar-recurrence-root-bounds, not merely its C1 Statement. That complete argument supplies open C2 extensions: close-map proof 4.1 constructs open V, quotient differentiation upgrades V to C2, then P is C2, uniform endpoint and derivative margins persist near the compact square, and unique implicit roots glue to C2 maps. Applying the same reasoning to H supplies M^H. Both weighted-tail applications satisfy these hypotheses and their margins. The theorem is unchanged.",
    "repair_status": "no-defect",
    "post_sha256": "3f7ab2b91c65f7be4fb3f4e25ac94122ed21ba26abcea38670d9e5cee64fa3b5",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm-chaos-slope-transform-fixed-point-checks",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "L1 omitted L>=2 and 0<k<1 from its restatement of the cone lemma. Restored those hypotheses and the exact weak aperture condition, then checked them at L=sqrt(74), k=1/2 and y=r_+. Also replaced L2 attribution of the surd solution to the contraction lemma with explicit substitution and its actual uniqueness clause. The fixed-slope root and contraction constants are unchanged.",
    "repair_status": "repaired",
    "post_sha256": "479d150603e4dcc03a923cc5ba111b69fdb5d6f5fef3df7d53dd93920350d6e9",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-smooth-fixed-mass-mechanical-horseshoe",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "F4 assigned homeomorphism, conjugacy and compactness to suppliers that do not define them. Defined homeomorphism and conjugacy explicitly from metric continuity, added def-metric-compactness and its finite-subcover definition, and retained the exact chaos/hyperbolicity/transversality suppliers. Chose bar C=max(1,C1,C2) so epsilon>0 is explicit. The theorem still transfers both forward/inverse bounds, preserves AC_omega+DC, and has unchanged Statement.",
    "repair_status": "repaired",
    "post_sha256": "6c97c50bd24f5b9198ef55a5c87dbd1320c45e7965824f7c0ada797365710e22",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm-chaos-finite-word-homoclinic-code-checks",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "L4 attributed the sign of the coded solution to definitions and square roots instead of contraction clause 4. Cited that already-declared exact supplier; L3 now cites finite-word clause 1 for the explicit constant-code fixed point. Verified the single flip moves from coordinate 0 to -m, coding injectivity excludes orbit periodicity, and the finite-word convergence supplies both tails without compactness or choice.",
    "repair_status": "repaired",
    "post_sha256": "a9569b17bed86619b9e550ad68013e54da3bc107af6885ace4c1d44d9a27fb99",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "independent_review": false
  },
  {
    "ledger": "published-ledger",
    "ledger_path": "research/published-consumer-supplier-ledger.md",
    "id": "ex-cm16-pulse-horseshoe-data-check",
    "path": "items/ex-cm16-pulse-horseshoe-data-check.md",
    "locator": "title and physical_scope",
    "snippet": "the fixed points are 1 plus or minus sqrt(101)",
    "affected_use": "The title and physical_scope describe exact fixed points while adopting positive pulse width 0<delta<delta_0. The Example body instead calls r_pm fixed points of the limiting quadratic map.",
    "invalidated_claim": "Exact surds for positive-width pulse fixed points are unsupported: the perturbed theorem instead specifies rho_u=M_u(rho_u,rho_u) and phase point (rho_u,V(rho_u,rho_u)).",
    "minimality": "Qualify the title and physical_scope fixed-point values as those of the limiting quadratic map. Preserve the physical state bounds and declared units.",
    "classification": "confirmed_nonfatal",
    "route": "frontier-owner; physics public-interface review after any scope correction",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "reported_only_no_edit",
    "source_sha256": "4396b124950d6c47e6001bea97f32b42316a3c8a7f980cda5ad2308f61390a43"
  },
  {
    "ledger": "published-ledger",
    "ledger_path": "research/published-consumer-supplier-ledger.md",
    "id": "cm-math-chaos-examples",
    "path": "library/non-relativistic-classical-mechanics-mathematics/cm-math-chaos-examples.md",
    "locator": "last paragraph",
    "snippet": "the unperturbed quadratic has endpoint\nvalues $-25$ and $43$ at $v=7$ and $v=13$",
    "affected_use": "The page summarizes ex-cm-chaos-perturbed-root-and-margin-checks as exact endpoint values for all u,w in [-13,13].",
    "invalidated_claim": "The example proves upper/lower endpoint bounds; at u=w=0 the endpoint values are -51 and 69.",
    "minimality": "Replace endpoint values by upper endpoint bound -25 at v=7 and lower endpoint bound 43 at v=13.",
    "classification": "confirmed_nonfatal",
    "route": "owning page maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "reported_only_no_edit",
    "source_sha256": "8133b5a670d1f8c8dd1f7a3008fff672f0558c1024bfb2fb4a092341e52245d6"
  },
  {
    "ledger": "published-ledger",
    "ledger_path": "research/published-consumer-supplier-ledger.md",
    "id": "lem-weighted-tail-contractions-give-c-one-curves",
    "path": "items/lem-weighted-tail-contractions-give-c-one-curves.md",
    "locator": "Proof 2.2 before 3.1",
    "snippet": "taking the fixed point of the homogeneous contraction started at $0$",
    "affected_use": "Proof 2.2 uses u(b) before the existence argument in 3.1, and assigns its nonzero forced derivative to a homogeneous contraction.",
    "invalidated_claim": "The derivative solves the affine forced fixed-point equation, not the homogeneous one. Ball invariance and completeness already establish existence, so no new mathematical prerequisite is needed.",
    "minimality": "At 2.2 establish u(b) from 1.1, 2.1 and Banach before using it; derive ||d||<=q||d||+c for the affine map, or use affine iterates. Preserve Statement.",
    "classification": "confirmed_nonfatal",
    "route": "frontier-owner; unassigned carrier left unchanged",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "reported_only_no_edit",
    "source_sha256": "fb6f92fbaae570a42f9e42e4e1a6b4e6ff2ea4e5231598f4788eb3734945c298"
  },
  {
    "ledger": "published-ledger",
    "ledger_path": "research/published-consumer-supplier-ledger.md",
    "id": "lem-rescaled-pulse-map-is-c-one-close-to-kick",
    "path": "items/lem-rescaled-pulse-map-is-c-one-close-to-kick.md",
    "locator": "F4 and Proof 6.1",
    "snippet": "By [[thm-higher-regularity-of-local-inverses]], $K_\\delta$ has smooth local inverses",
    "affected_use": "Step 6.1 invokes a regularity result to supply local inverse existence after proving the variational derivative invertible.",
    "invalidated_claim": "The regularity supplier assumes an already supplied local inverse. The declared Newton-contraction lemma or the established smooth backward solution maps can supply the missing existence step.",
    "minimality": "State the local inverse existence argument with its existing Newton supplier before applying higher regularity; no Statement change is necessary.",
    "classification": "confirmed_nonfatal",
    "route": "frontier-owner; unassigned carrier left unchanged",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "status": "reported_only_no_edit",
    "source_sha256": "77286bb348981bbb810c5c0aeb11686a2f56861a48dc0fdad5e57c15ce2f2be4"
  },
  {
    "ledger": "published-ledger",
    "ledger_path": "research/published-consumer-supplier-ledger.md",
    "status": "audit-status-proposal",
    "reason": "No published carrier was edited or adjudicated. All 19 direct item consumers found for the three amended definitions are current drafts; their exact affected uses are recorded in consumer_reviews. The outside findings above remain owner work. Current binary shift suppliers are draft despite legacy publication labels in page prose and some unchanged consumers. No independent review of these repairs or external full-text source reading is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-holomorphic-kam-domain-and-diophantine-labels",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "The alias |g|_{r,s,0}=|g|_{r,s} contradicted O_0=empty and the joint-domain supremum. Removed only that unused alias and explicitly separated phase-only from parameter-domain norms; every inspected consumer uses positive h or an explicit real-label supremum, so this is a nonfatal notation defect rather than an iteration failure."
  },
  {
    "ledger": "defect",
    "id": "lem-frequency-reparametrization-by-contraction",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "Confirmed a nonfatal omitted bridge in step 4.1: the supplied Weierstrass theorem is scalar and one-variable. Defined f_0(x)=x and f_{k+1}(x)=x-v(f_k(x)), verified their domains and geometric uniform convergence, proved continuity by uniform approximation, applied Weierstrass componentwise on coordinate discs, and then applied the continuous separately holomorphic power-series theorem locally. Statement, contraction 1/8, uniqueness and derivative bound 16nB/(7h) are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-kam-conjugation-symmetry-of-the-construction",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "evidence": "The old g^c notation was restricted to holomorphic maps on open domains, while Psi_infinity is supplied only on L and chi_infinity only on real Lambda. This is a nonfatal domain/notation defect: the intended symmetry follows pointwise without any extension. Defined g^c for arbitrary maps on invariant subsets, specified both limit domains, and passed the finite-stage identities to the pointwise limit. Fourier cutoff symmetry is explicitly checked by exchanging k and -k. The real-torus conclusion is unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-kam-limit-is-an-embedding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "evidence": "Confirmed a fatal dependency-citation gap for clause 5: the supplied invariance theorem assumes CE_0<=1/16, whereas this lemma only implies CE_0<=1/8. Preserved the entire Statement and proved the missing conditional argument locally. Along the extended compositions, every phase Jacobian factor has weighted norm <=(1+CE_i)/2<=9/16; coordinate Cauchy bounds and canonical transport give residual <=2 alpha E_j sigma_j^(mu-1)->0. D_0 image containment keeps the real limit strictly inside the original H_0 domain, and first-derivative convergence gives the vanishing pullback. Added the four actual estimate/calculus dependencies without strengthening smallness."
  },
  {
    "ledger": "defect",
    "id": "ex-two-rotor-kam-model-with-units",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "fixed",
    "evidence": "Confirmed the missing positive-alpha hypothesis: an upper bound alpha<min(c,3/640) alone does not meet either supplier and allows negative alpha with arbitrarily large c alpha^2. Repaired the data, exact KAM fact, conditional conclusion and unit-restored conclusion to retain 0<alpha<min(c,3/640) and positive perturbation/coupling. Also checked b(Omega)+B_r0=(1,2)^2, the positive strip norm epsilon cosh(s_0)^2, and the translated-cube slicing argument. Dimensions follow J_0=sqrt(inertia times energy), t_0=inertia/J_0; all conclusions remain conditional mathematics with no measured input."
  },
  {
    "ledger": "defect",
    "id": "lem-kam-generator-flow-and-remainder-bound",
    "status": "owner_review_required",
    "assigned": false,
    "reason": "Read-only confirmation of the digest concern: proof step 3.1 invokes a local flow composition law, but lem-cm-local-flow-composition-law is absent from deps and fact F4. Its clauses 2 and 3 give precisely the domain-qualified composition and inverse-time laws. This is an actual undeclared prerequisite; no supplier item is edited by this dispatch.",
    "affected_use": "the flow composition law transfers their $C^1$ dependence to the entire trajectory.",
    "invalidated_claim": "The prerequisite accounting for phase-derivative continuation in proof step 3.1 is incomplete; no false flow bound is demonstrated.",
    "minimality": "Owner should declare lem-cm-local-flow-composition-law, its mathematical-premise role, and its F4 citation; no Statement change is needed.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-parameter-kam-torus-invariance-and-lagrangianity",
    "status": "owner_review_required",
    "assigned": false,
    "reason": "Read-only confirmation of the digest concern: step 1.2 writes a phase-only product with undefined Phi_i and does not explicitly evaluate each earlier factor at its retracted parameter. The actual supplier defines extended T_i and compositions (Psi_j,chi_j). The local weighted bound remains valid when those parameter images are retained, as derived explicitly in the repaired embedding lemma.",
    "affected_use": "For $x\\in D_j$ put $x_j:=x$ and $x_i:=\\Phi_i(x_{i+1})$ for $0\\le i<j$, so $x_i\\in D_i$ and $\\Psi_j=\\Phi_0\\circ\\cdots\\circ\\Phi_{j-1}$",
    "invalidated_claim": "The step omits the actual extended-map notation and evaluation parameters, rather than demonstrating a false Jacobian bound.",
    "minimality": "Replace this proof shorthand by x_i=T_i(x_{i+1}) and M_i=D_z tilde-Phi_i(z_{i+1},phi_i(lambda_{i+1})); preserve the Statement.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer",
    "updates": [],
    "reason": "No potentially defective published consumer was found in this assignment. Every item directly using the changed Definition or conjugation Statement is in the frozen original frontier; page findings and unassigned draft proof concerns are routed to their owners. Imported mathematics and all published items were left untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-periodic-vector-sobolev-space-and-leray-projection",
    "outcome": "confirmed_nonfatal",
    "resolved": true,
    "reason": "Confirmed a non-load-bearing misattribution: the published Fourier theorem states basis, Parseval and coefficient isometry, not Hodge decomposition. The local coefficient formula already proves u=Pu+grad f, with the H^(s+1) estimate w_k^2/(4pi^2|k|^2)<=1+1/(4pi^2) for k!=0. Replaced only the attribution by an explicit reference to this local derivation; all spaces, operators and claims are preserved.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fourier-tail-diagonal-compact-convergence",
    "outcome": "confirmed_nonfatal",
    "resolved": true,
    "reason": "F1 incorrectly counted one complex coordinate per frequency. Each coefficient lies in C^3, so the ambient block is C^(3M_K)=R^(6M_K). Corrected both dimensions. The actual nested extraction in proof 1.1 already processes six real coordinates, F2 controls those coordinates by the scalar mean-value theorem, and the finite-block/tail argument proves simultaneous convergence in every Sobolev order. This is a nonfatal fact-restatement typo; Statement and extraction are unchanged.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-cm-strong-solution-smoothness-bootstrap",
    "outcome": "confirmed_nonfatal",
    "resolved": true,
    "reason": "Confirmed an indexing defect in the derivative clause and induction, not a failure of the all-order smoothness argument: the old j-1 differentiation rule did not define Phi_0. Defined Phi_0=u and displayed the exact binomial Leibniz formula for Phi_r when r>=1, retaining every mixed derivative including r=0. The base now covers j=0 and j=1 explicitly; bounded bilinear transport and bounded linear multipliers yield C^r G from C^r u and hence C^(r+1) u, with evaluation identifying continuous mixed derivatives and one-sided endpoints.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-fluid-uniqueness-and-continuous-dependence",
    "outcome": "confirmed_nonfatal",
    "resolved": true,
    "reason": "Confirmed a nonfatal domain-notation omission: the theorem hypotheses already quantify only over smooth divergence-free data, but the final bare norm-ball notation fails to restate that universe. A literal full-H^s-ball reading would not define a smooth solenoidal solution map, since its t=0 trace must satisfy both conditions. Made D_(s,B) exactly the class already required by the hypotheses and contract; the core energy/Gronwall/interpolation proof and its claims are unchanged. Also chose the explicitly uniform upper bound exp(6W_(s-1)BT/s)(4B)^((s-1)/s), removing pair dependence from the displayed proof constant.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-local-versus-known-open-global-fluid-scope",
    "outcome": "confirmed_nonfatal",
    "resolved": true,
    "reason": "The opening scope account omitted AC_omega although both cited theorems require it. Added the exact countable-choice assumption and dependency. Independently confirmed the digest pressure issue: existence/uniqueness do not state pressure reconstruction, while lem-periodic-pressure-reconstruction states the smooth mean-zero scalar pressure, correct primitive-equation sign and uniqueness; added that supplier and its claims 1-3. Made the smooth divergence-free bounded-data domain and input L2 topology explicit. Read the CMI announcement and preserved its dated announcement/evaluation qualification without inferring a periodic global theorem.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-published-effects",
    "reason": "All direct item consumers inventoried for these changed Definition/Statement and scope interfaces are draft frozen-frontier items. No potentially defective published consumer was discovered and no published item was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "lem-fourier-lattice-sobolev-embedding",
    "action": "propose-outside-unit-finding",
    "resolved": false,
    "reason": "The finite truncation has the specified coefficient only once M>=|m|_infinity; before then it is zero. Add the eventual-inclusion condition M>=|m|_infinity to the existing sentence; no Statement change.",
    "route": "frontier-owner-outside-unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "thm-local-smooth-periodic-euler-viscous-solution",
    "action": "propose-outside-unit-finding",
    "resolved": false,
    "reason": "The reference describes these two theorems as covering Euler as well as Navier-Stokes; the source actually states viscous NSE results. Correct the reference title to viscous NSE and distinguish the locally proved Euler case and viscosity-independent lifespan.",
    "route": "frontier-owner-outside-unit",
    "uncertain": false,
    "source_urls": [
      "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cm-quaternion-product-rule-and-conjugation-formula",
    "model": "gpt-6-luna",
    "context_sha256": "9ab73c3b77d215cecabc8fe1f7e9e4f9b0817bfb64674ee4d6ba61df77cb1532",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F3 incorrectly attributes closure under C1 composition to a definition that states only componentwise regularity. Step 2.3 independently proves the required product and norm regularity by finite coordinate differentiation, so the unused composition assertion is nonfatal and has been removed. F2 and F4 now explicitly relabel spatial and matrix coordinates without changing any claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm-two-to-one-preimages-and-homomorphism-check",
    "model": "gpt-6-luna",
    "context_sha256": "82b7d488fc2f69f1ee9b97910ec493a1bb679675276cdb2806e8f691db6c767a",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The cited Definition and Remark are the actual supplier: its second Remark explicitly states the homomorphism, kernel {1,-1}, and antipodal fibres under AC_omega, matching the published canonical covering example. Step 2.2 correctly sends q k^{-1} to the kernel using multiplicativity of N. The contract had excerpted only Definition; its L3 excerpt now quotes the exact Remark and retains AC_omega. The mathematical item is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm-quaternion-lift-scope-and-sign",
    "model": "gpt-6-luna",
    "context_sha256": "ee141325daeb8c28a97f50f64fe9da6d6e635842c2b4895bd0d6b4d28f70b24e",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The allegedly conflicting universal claim occurs under Statement refuted in a counterexample, not as an established assertion. Its Counterexample 1.1-3.1 constructs qhat(t)=cos(pi t)+k sin(pi t), whose endpoints are 1 and -1; interior lift uniqueness forces either qhat or -qhat, and endpoint continuity excludes a closed lift through 1. The remark correctly reports this refutation and preserves the stated closed-interval regularity convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no-change",
    "reason": "No published supplier or consumer was edited, and the assigned repair changes no Statement or Definition. Retain the existing batch-16 cylinder finding and its owner route without claiming a new independent published audit; this dispatch proposes no new published repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "post-cm01-worldlines",
    "model": "gpt-6-luna",
    "context_sha256": "d68ddca8c523a999b1070d5f31daeccece627e7a4064d1d9f2f46ab8581a1e71",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The frozen carrier and current carrier agree. Its deps name the mathematical transformation lemma, not pthm-cm01-galilean-kinematics. The latter is an explanatory downstream link; clauses (i)-(iii) specify C2 frame-time curves and their affine time-shift consistency without requiring that physical theorem. There is no claimed prerequisite cycle.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-cm01-configuration",
    "model": "gpt-6-luna",
    "context_sha256": "a334a72e7cdfda2f2bea50ac3613c08afa098209902aea34ba6304c63a93b920",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (d) called the mass metric the restriction of the unweighted Euclidean product. The actual supplier defines G_q(h,z)=<dX_q(h),M dX_q(z)>; for inclusion this is sum_i m_i h_i dot z_i. Replaced only that sentence by the exact tangent-space formula and weighted restriction. The configuration branches, rank hypotheses, dimensions and mass operator are unchanged. This is a nonfatal misdescription because clause (b) already supplies the correct construction by exact dependency.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-cm01-velocity-acceleration",
    "model": "gpt-6-luna",
    "context_sha256": "fa09a396e71c954c0df795399f7b58c709be6781011e91488d8b29852d7ce33e",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The owning A-page explicitly places pthm-cm01-galilean-kinematics immediately after this definition. That theorem states and proves the time-shifted velocity and acceleration formulas and both directions of zero-acceleration invariance. A page contains multiple item carriers; the promise does not require a theorem inside this definition file. The mathematical transformation lemma also supplies the recorded formulas. No edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "ex-cm01-worldline-parameter-condition",
    "model": "gpt-6-luna",
    "context_sha256": "557a0ae6b32f4aac58736bd8a527badd460d0bad68ac73c16abd0d0778deed1c",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The original Example prescribes gamma as a worldline, but L2 and step 1.1 justify that status only from regularity and time normalization and leave its model label unspecified. Those conditions do not assign a curve to a particle. Added an explicit one-label instance with arbitrary fixed positive mass and assigned gamma_1=gamma; step 1.1 now checks the assignment against the postulate rather than treating the parameter condition as sufficient. The affine rescaling and time-shift calculations are unchanged and valid. This is a nonfatal formulation/citation clarification of the explicit admissible example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "rem-cm01-model-limit",
    "model": "gpt-6-luna",
    "context_sha256": "74df58497f4750aba832925cb7011254b3ea77ecf1164f1fa8f9d648606fa89e",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The mass-metric supplier defines kinetic energy T_q(v)=G_q(v,v)/2, and the units definition also gives Cartesian T and conditional E=T+U. The original blanket wording that no energy is specified obscures these already defined constructions. Clarified that kinetic energy is defined, its value needs a curve, a potential is not selected for a concrete system, and neither conservation nor measured energy is asserted. No dynamics or empirical scope is changed; this is a nonfatal status-audit misdescription.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "ex-cm01-galilean-boost-of-a-free-motion",
    "model": "gpt-6-luna",
    "context_sha256": "883c4abd2de1aafb04861b1e6e0c9ab2ae2c2ad046908c4717ce0ebd32fccc66",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The same symbol a denoted translation (0,3,0) and coordinate acceleration zero. In step 2.1 the eta formula needs the former while the displayed eta-second=Ra needs the latter, so it cannot be a single consistent equality: R a=(0,3,0) for the translation but eta-second=0. This is a fatal logical defect in the acceleration-law verification. Kept all model and transformation data and used alpha=xsecond exclusively for acceleration in L3 and steps 1.4/2.1. Direct chart expansion still gives eta=(3 tprime/4-1/2,5,0), velocity (3/4,0,0) and acceleration zero.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "ex-cm01-rotating-basis-of-a-free-motion",
    "model": "gpt-6-luna",
    "context_sha256": "daa1874e43a38d59defe76ef92238bfd31cb2e68303357b8cd0526a2afff2c2a",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The local Example did not declare units of its positive scalar omega although s is frame time in seconds. Declared [omega]=tau^-1 and inverse-second reference units with dimensionless radian angle omega s, and made I=R explicit. This is a nonfatal dimensional declaration omission: the already adopted units convention and the numerical trigonometric calculation determine the intended typing, and the scalar derivative calculation itself is correct. Also separated the angular-velocity vector boldomega=(0,0,omega) from the scalar omega in L4 and step 4.1, whose terms all have acceleration dimension.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The 88 direct dependency/reference consumers of the changed configuration Definition are original-frontier drafts. Their examined uses do not rely on the incorrect unweighted metric wording. No defective published consumer was discovered; no published carrier or maintenance certificate was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "post-cm15-impulse",
    "status": "owner_repair_required",
    "affected_use": "items/post-cm15-impulse.md Postulate (i) requires x:I->Q to be a motion of def-cm02-newtonian-flow before imposing clauses 1-3 with a finite velocity jump.",
    "invalidated_claim": "A globally C2 motion has continuous x prime; m_i(v_i^+-v_i^-)=0, so J=0 and nonzero impulses are excluded.",
    "minimality": "Define the candidate as a continuous, piecewise C2 position curve with the stated one-sided velocity limits; require the smooth ODE only on I minus {t_*}. Do not edit this other-owner frontier item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm02-newtonian-flow",
    "model": "gpt-6-luna",
    "context_sha256": "a3e8023d69fee5349bc19e08957f0488ae281c104dce6c06a1a2ad7bd16c228b",
    "outcome": "confirmed_nonfatal",
    "reason": "Under t'=t+b the maximal interval is J_max+b; the inverse affine transfer pulls any extension back, preserving maximality. Corrected the false literal-invariance remark and Definition (c)'s state/graph type: z:J -> Q x R^(3N), with (t,z(t)) in D. The equations, C2 motion condition, and maximal-solution hypotheses are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "post-cm02-interactions",
    "model": "gpt-6-luna",
    "context_sha256": "9c1d53aca0bf31d37aecb3ef2c29e25c8a40c67ee1d43c522180b97388fc3f18",
    "outcome": "confirmed_nonfatal",
    "reason": "Tong Section 1.3 distinguishes equal-and-opposite pair forces from their additional centrality condition. Corrected antisymmetry to the weak form and explicitly defined the strong form as antisymmetry plus centrality, without changing either displayed assumption. Also qualified the potential exclusion to drag with c>0: c=0 is a constant force, with U=-m g dot x. The force decompositions, C2 potential branch and gravitational coupling assumptions remain intact.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/teaching/classical-dynamics/dynhtml/S1"
    ],
    "familiar": false,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm02-uniform-field",
    "model": "gpt-6-luna",
    "context_sha256": "152ad53c2398a173402f402dbdb07ddf62be6eb7b1e8323c6e902383da185486",
    "outcome": "confirmed_nonfatal",
    "reason": "The MIT PDF's Section 4.5 is the Kepler problem, not the cited uniform-field approximation. Replaced that reference with Tong, Dynamics and Relativity Section 2.1, printed p.12 (constant force, V=mgz and quadratic motion), and Section 2.3.2, printed p.24 (near-surface expansion for z much smaller than R). Independently differentiated the motion and checked uniqueness, dimensions and Galilean covariance; no empirical values are adopted and no public claim changed.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf",
      "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    ],
    "familiar": false,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm02-force-model-regularity-checks",
    "model": "gpt-6-luna",
    "context_sha256": "b9b3d4bb6b92e339fb460f6000fc8d184142eb65f67258f217f534f584bd21cb",
    "outcome": "confirmed_nonfatal",
    "reason": "For N=1 the supplied collision set Delta, defined by coincidences of distinct labels, is empty. The excluded point is a prescribed external-source singularity, so corrected the title, physical_scope and verification terminology and made that distinction explicit in the Example. Checked the annulus bound by cubic factorization and reverse triangle inequality, arbitrary-state drag bound, positive minimum radius on compact sets, divergence at zero, and the IVP hypotheses; all numerical bounds and deductions are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm02-open-system-warning",
    "model": "gpt-6-luna",
    "context_sha256": "f3379cff7664acba669bbee8d06399aba69b5bfb925a7491babe41324811bc18",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The stationary-center field F=-k x/|x|^3 is a counterexample to the categorical denial of rest-frame selection. Clause (vi)'s Galilean transfer sends its smooth source curve (t,0) to c_*(t')=upsilon(t'-b)+a_0 and gives F_*=-k(y-c_*)/|y-c_*|^3. Nonzero boosts move the center and make this field time-dependent; the center selects a rest-velocity class while leaving origins and axes free. Replaced the false claim by this complete conditional computation and retained covariance and all empirical qualifications.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm02-constant-field-projectile",
    "model": "gpt-6-luna",
    "context_sha256": "b8f45f330b87f561eaef8fef455fa681796e8bb52919c4b961013da7657d31a5",
    "outcome": "confirmed_nonfatal",
    "reason": "MIT Section 4.5 treats the Kepler problem and does not support the attributed near-Earth constant-field approximation. Replaced it by the actually read Tong Sections 2.1 (printed p.12) and 2.3.2 (printed p.24). Checked the three-dimensional solution, nonzero horizontal velocity for 0<alpha<pi/2, quadratic elimination, unique positive return time, double-angle range identity and dimensions. All predictions remain conditional on declared parameters, with no measured values or new empirical claims.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf",
      "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    ],
    "familiar": false,
    "resolution": "repaired_assigned_draft"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_repair_proposed",
    "reason": "All changed carriers are assigned draft frontier items. No imported mathematics or published carrier was edited. Direct-consumer uses examined here have no identified published defect requiring a published repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "cex-cm02-singular-collision-finite-time",
    "status": "frontier_owner_terminology_repair_required",
    "affected_use": "Its Facts [L1] describes the single-label external model as regular on every collision-free annulus, and physical_scope/title/Example discuss collision exclusion for Q=R^3 minus {0}.",
    "invalidated_claim": "For N=1 the supplied collision set Delta is empty. Excluding the external source at zero is a singularity exclusion, not a distinct-label collision exclusion.",
    "minimality": "Retain radial motion and finite-time nonextension formulas; replace the incorrect domain terminology only, and inspect direct consumers if the owner changes its physical_scope.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-smooth-level-hypothesis",
    "subject": "def-cm03-potential-and-mechanical-energy",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "fatal",
    "location": "definition",
    "disposition": "fixed",
    "detail": "Clause (f) previously deduced a smooth embedded level from C2 U. Smooth U is now required only for (f), with the explicit Ck-for-all-k definition; the regular-level theorem applies without changing general C2 potential presentations.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Clause (f) previously deduced a smooth embedded level from C2 U. Smooth U is now required only for (f), with the explicit Ck-for-all-k definition; the regular-level theorem applies without changing general C2 potential presentations."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-mixed-partial-citation",
    "subject": "def-cm03-potential-and-mechanical-energy",
    "class": "accuracy",
    "subclass": "citation-missing",
    "severity": "nonfatal",
    "location": "definition",
    "disposition": "fixed",
    "detail": "Clause (d) exact-implies-closed had cited a definition without that theorem. The published thm-clairaut-schwarz-mixed-partials is now explicitly cited, declared in deps and assigned mathematical-premise role, for the C2 potential.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Clause (d) exact-implies-closed had cited a definition without that theorem. The published thm-clairaut-schwarz-mixed-partials is now explicitly cited, declared in deps and assigned mathematical-premise role, for the C2 potential."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-flattened-coordinate-indices",
    "subject": "def-cm03-potential-and-mechanical-energy",
    "class": "accuracy",
    "subclass": "undefined-notation",
    "severity": "nonfatal",
    "location": "definition",
    "disposition": "fixed",
    "detail": "Clause (d) now uses flattened coordinate indices 0,...,3N-1, as the cited field and Jacobian suppliers do; particle labels remain 1,...,N.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Clause (d) now uses flattened coordinate indices 0,...,3N-1, as the cited field and Jacobian suppliers do; particle labels remain 1,...,N."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record-false-positive-without-altering-history",
    "subject": "pthm-cm03-energy-balance",
    "outcome": "false_positive",
    "detail": "The current rejected inference is valid: the actual supplier residual maps have domain I, and they are instantiated by evaluated residuals on the motion. Preserve the historical 3a conservation-scope correction; the new false-positive disposition neither reclassifies nor erases that different historical finding.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Supplier Statement preamble and clause 3; consumer step 1.1 and step 2.1."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-contract-zero-locator",
    "subject": "pthm-cm03-energy-balance",
    "class": "accuracy",
    "subclass": "contract-mismatch",
    "severity": "nonfatal",
    "location": "contract-row",
    "disposition": "fixed",
    "detail": "Carrier unchanged. Refreshed its L1 quotation after the supplier Definition changed, and corrected the zero-case conservation locator from step 3.1 to step 2.1; proof-contract scoped check passes.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Carrier unchanged. Refreshed its L1 quotation after the supplier Definition changed, and corrected the zero-case conservation locator from step 3.1 to step 2.1; proof-contract scoped check passes."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-global-energy-overclaim",
    "subject": "cex-cm03-closed-force-field-without-a-global-potential",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "severity": "fatal",
    "location": "proof-step",
    "disposition": "open-owner-repair",
    "detail": "Unassigned frontier item: title, physical_scope and steps 3.1 and 5.1 say mechanical energy is available only locally. U=0 and residual d=F define a global presentation and E=K under clauses (a)-(b); nonzero circulation excludes only a force-generating global potential with d=0. Qualify the availability assertions without dropping the valid circulation obstruction. Also reconcile Statement refuted flattened coordinate indices with repaired clause (d). Route to frontier owner, not published maintenance.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Unassigned frontier item: title, physical_scope and steps 3.1 and 5.1 say mechanical energy is available only locally. U=0 and residual d=F define a global presentation and E=K under clauses (a)-(b); nonzero circulation excludes only a force-generating global potential with d=0. Qualify the availability assertions without dropping the valid circulation obstruction. Also reconcile Statement refuted flattened coordinate indices with repaired clause (d). Route to frontier owner, not published maintenance."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose-record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u19-scope-external-torque",
    "subject": "pthm-cm03-angular-momentum-balance",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "fatal",
    "location": "frontmatter",
    "disposition": "open-owner-repair",
    "detail": "Unassigned frontier digest concern verified against current physical_scope and Statement clause 4: fixed origin and zero external torque do not ensure zero internal torque. With N=2, no external forces, F12=a, F21=-a and r(0) not parallel to a, the relative motion r(t)=r(0)+(1/2)(1/m1+1/m2)a t^2 has total internal torque r(0) cross a nonzero. Add the already stated centrality or zero-total-torque condition to the scope summary. Do not edit this carrier in unit 19.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Unassigned frontier digest concern verified against current physical_scope and Statement clause 4: fixed origin and zero external torque do not ensure zero internal torque. With N=2, no external forces, F12=a, F21=-a and r(0) not parallel to a, the relative motion r(t)=r(0)+(1/2)(1/m1+1/m2)a t^2 has total internal torque r(0) cross a nonzero. Add the already stated centrality or zero-total-torque condition to the scope summary. Do not edit this carrier in unit 19."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-scoped-review",
    "supplier": "def-cm03-potential-and-mechanical-energy",
    "published_consumers": [],
    "detail": "All 76 directly linked or declared item consumers of the changed definition are draft members of the frozen frontier; none is a published or outside-frontier consumer. Imported published mathematical suppliers were read-only. The counterexample and angular-momentum scope findings are routed to frontier owners, not published maintenance. No publication audit or independent review of the local repair is claimed.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u19.json",
        "note": "Exact direct-use inventory in downstream_reviews and page review."
      }
    ],
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_repaired_nonfatal_finding",
    "subject": "thm-cm-center-of-mass-and-kinetic-splitting",
    "location": "Statement indexing convention; Facts L3",
    "status": "fixed",
    "reason": "The supplier lem-finite-sum-laws quantifies real sequences on N and sums over k<N, so the original attribution of {1,...,N} to its interface is inaccurate. This is nonfatal: defining b_k=a_(k+1) for k<N and zero thereafter gives exactly the intended 1,...,N sums, and its scalar laws transfer coordinatewise. The repaired Statement makes this translation explicit without changing any conclusion.",
    "repair": "Explicitly shift the sequence k to label k+1 and apply scalar finite-sum laws coordinatewise; preserve all conclusions.",
    "post_sha256": "8ae5bb78dd42fb9b96f78b0f9f6f27b8f6361ec6182a51cd43b09af0ac9e90ce",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_repaired_nonfatal_finding",
    "subject": "thm-cm-center-of-mass-and-kinetic-splitting",
    "location": "Owning proof contracts, endpoints worksheet and step 4.1 citation uses",
    "status": "fixed",
    "reason": "Included endpoints use one-sided domain-relative derivatives; the old not_applicable reason denied those evaluations. The corrected checked entry carries the exact supplier convention, and step 4.1 records its derivative and bilinearity uses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_frontier_owner",
    "subject": "ex-cm15-impact-check",
    "path": "items/ex-cm15-impact-check.md",
    "location": "Facts L2",
    "affected_use": "$K=\\frac{M}{2}\\lVert V\\rVert_2^2+\\frac{\\mu}{2}\\lVert d^-\\rVert_2^2$ before and after",
    "invalidated_claim": "The asserted after-impact kinetic split uses the incoming relative velocity and forces K^+=12 J in the sticking case, contrary to the declared outgoing velocities and K^+=0.",
    "minimality": "Replace the before/after formula with K^±=M||V||²/2+mu||d^±||²/2 in L2; the displayed numerical verifications already use the correct outgoing velocities.",
    "reason": "The supplier still gives K^+ with d^+ and K^- with d^-; the consumer incorrectly keeps d^- in its after formula. With V=0, mu=3/2, ||d^-||^2=16 that formula forces K^+=12 even for the sticking outcome K^+=0. This is an independent pre-existing defect, not an effect of the indexing repair; route to its frontier owner without editing.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_frontier_owner",
    "subject": "pthm-cm15-impact-balance",
    "path": "items/pthm-cm15-impact-balance.md",
    "location": "First Remarks bullet",
    "affected_use": "equivalently the force map of an impulse model is not continuous across $t_*$",
    "invalidated_claim": "A nonzero additional Dirac impulse does not imply discontinuity of the regular force map; continuous zero regular forces are compatible with piecewise affine motion and a reciprocal velocity jump.",
    "minimality": "Remove or replace the false equivalence with the precise distinction between a continuous regular force and the additional distributional impulse. Retain the smooth-motion exclusion as conditional on satisfying the smooth equation throughout the interval.",
    "reason": "The mathematical impulse supplier explicitly permits continuous F1,F2 on I and adds a Dirac impulse separately. Thus exclusion of a smooth-force motion cannot prove a discontinuity of the regular force map.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_no_published_maintenance",
    "subject": "thm-cm-center-of-mass-and-kinetic-splitting",
    "reason": "All six direct item consumers are current draft frozen-frontier members. The indexing repair preserves their applicable kinetic formulas; independent defects are routed to frontier owners. No published or outside-frontier consumer maintenance update is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-cm04-one-dimensional-models-and-equilibria",
    "model": "gpt-6-luna",
    "context_sha256": "9ce7df7a89369ab06424986f7380fd9b2b963c955103cf94bd7e3b22399fa019",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "The cited ODE definition makes solution an IVP notion. Clause (c) omitted its datum convention although its differential identity was correct. Defined phase solution on J, identified its IVP datum at every t0 in J, and proved both componentwise directions with C2 regularity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-cm04-harmonic-model",
    "model": "gpt-6-luna",
    "context_sha256": "93e1107fbea57dfb20d0335c1c87030b0adb319e7acc199afcc3b3193dd2a587",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "The potential supplier clause (c) permits additive shifts and requires a declared representative; it does not require U(0)=0. Corrected that attribution in Remarks. The Postulate, chosen quadratic representative, force, regularity and physical scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-cm04-equilibrium-stability-at-a-strict-minimum",
    "model": "gpt-6-luna",
    "context_sha256": "7f7589a85b0a65854daef4445356badc4a1b09040ac53bea421e6b9ebe34b02e",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "Step 1.1 identified all unrestricted mechanical solutions with model motions although those require J⊆I0. Restricted the equivalence to such J, retaining the already correct all-time autonomous Statement. Explicitly verified U′(x*)=0 and added accurate C1/Lipschitz/maximal-extension citations for the time-translation argument.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-cm04-damped-regimes-check",
    "model": "gpt-6-luna",
    "context_sha256": "4dc5dbe749a01ca47584f7a396b69803be364928fae00b4a6ff0d0a35ae37529",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "finding": "The curves have domain R and x′=−(2/√3)e^(−t/2)sin(√3t/2) vanishes at 2πn/√3 for every integer n, including n=−1. Repaired the false all-time exceptional set and verified the other two zero sets. Also corrected critical B units to m/s, stated numerical SI conventions, simplified overdamped derivative algebra, and cited zero-set/exponential suppliers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-cm04-linear-model-scope",
    "model": "gpt-6-luna",
    "context_sha256": "0e0c681e7a0c00e12e6e81adc23685466e02ca88320a13b94b74a64cc128e4ba",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "finding": "The caveat named an energy-scale condition without stating it. Consulted Likharev Section 5.1 footnote 4 (PDF p.88): Eosc must greatly exceed max(kBT,ℏω0/2) in thermal equilibrium. Added the defined scale and its qualitative status. This repairs source/scope completeness; it does not invalidate the exact conditional oscillator deductions.",
    "uncertain": false,
    "source_urls": [
      "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-cm04-resonance-response-check",
    "model": "gpt-6-luna",
    "context_sha256": "e6b858529d377ef0ad0e6b06adfb97f6a88dbf86623b8c52127a9a942d0cfe65",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "finding": "The numerical-time formula used a frequency explicitly carrying s⁻¹ in sin(ωdt) and 5/ωd. Defined all computational parameters as SI numerical values and set numerical ωd=√99/10, preserving physical rate √99/(10s). Verified the rest datum, amplitude maximum and transient decay. Also made convergence mean vanishing differences and boundedness explicitly forward-time.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-cm04-damped-motion",
    "status": "owner_required_outside_assignment",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "affected_use": "Statement clause 1: its coefficients are the ones supplied by clause 4 for the shifted curve s↦x(t0+s), following displayed unshifted t families.",
    "invalidated_claim": "The coefficients in the displayed unshifted t family generally are not the coefficients of the translated family. At m=k=1,c=0,t0=π/2,x0=1,v0=0, the unshifted motion is sin t (A=0,B=1) but the shifted motion is cos s (A=1,B=0).",
    "minimality": "State that the cited coefficients belong to the family written in s=t−t0, or distinguish unshifted and shifted coefficients. Assigned damping/resonance examples use t0=0, so their classification computations remain valid.",
    "path": "items/pthm-cm04-damped-motion.md",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-cm04-conservative-motion-and-energy",
    "status": "owner_required_outside_assignment",
    "outcome": "confirmed_nonfatal",
    "affected_use": "Fact L6: for a≥0 the equation y²=a has exactly the two solutions y=±√a.",
    "invalidated_claim": "At a=0 these two written values coincide, so there is one distinct solution. Proof step 2.1 applies the two-distinct-roots clause only when a>0 and treats x′=0 separately.",
    "minimality": "Say all solutions are ±√a and they are distinct precisely when a>0. No Statement or energy proof change is necessary.",
    "path": "items/pthm-cm04-conservative-motion-and-energy.md",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-cm04-harmonic-motion",
    "status": "owner_required_outside_assignment",
    "outcome": "confirmed_nonfatal",
    "affected_use": "Statement clause 4 gives exactly the displayed times for each ellipse point, while Proof 3.2 explicitly shows attainment only at those times.",
    "invalidated_claim": "The converse time-set inclusion is not written. It follows from equality of both sine/cosine coordinates: their angle difference has cos=1 and sin=0, hence belongs to 2πZ by the declared addition/zero-set suppliers.",
    "minimality": "Add this one-sentence converse to Proof 3.2; the Statement and ellipse parametrization are sound.",
    "path": "items/pthm-cm04-harmonic-motion.md",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-cm-oscillator-amplitude-maximum",
    "status": "owner_required_outside_assignment",
    "outcome": "confirmed_nonfatal",
    "affected_use": "Proof technique calls x↦1/x and x↦√x both strictly decreasing maps.",
    "invalidated_claim": "Square root is strictly increasing on its nonnegative domain. Fact F3 and Proof 3.1 already use the correct direction, so the amplitude maximum remains valid.",
    "minimality": "Correct the introductory description to decreasing reciprocal and increasing square root; no Statement repair is needed.",
    "path": "items/prop-cm-oscillator-amplitude-maximum.md",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm05-relative-reduction",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "A force identity does not imply a declared decomposition. Corrected clause 1 and proved P prime = F1+F2 = 0 directly by curve calculus and vector FTC; reconstruction is unchanged."
  },
  {
    "ledger": "defect",
    "id": "post-cm05-gravity",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "evidence": "Relative speed alone does not ensure the cited coordinate-speed Newtonian limit. Fixed the comparison frame and bounded each label speed; retained the formal model and empirical qualifications."
  },
  {
    "ledger": "defect",
    "id": "pthm-cm05-effective-potential",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Restated and cited primitive uniqueness, verifying the common derivative is continuous on the nondegenerate interval. The existing supplier suffices; no public claim changed."
  },
  {
    "ledger": "defect",
    "id": "cex-cm05-external-force-breaks-relative-reduction",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "The witness disproves the unrestricted guarantee, not necessity of individually zero forces. Corrected that overclaim and stated the external-acceleration cancellation condition."
  },
  {
    "ledger": "defect",
    "id": "ex-cm05-parabolic-and-hyperbolic-branch-check",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "evidence": "The hyperbolic periapsis has Ueff=E=1.5e18 J, not zero. Corrected physical scope to Ueff(rho)=E; the verified branch formulas are unchanged."
  },
  {
    "ledger": "defect",
    "id": "ex-cm05-barycentric-orbits-check",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "Restored the missing 10^-1 factor: mu/kappa=1/8 s^2/m^3 and mu*a^3/kappa=(64/27)*10^18 s^2. Exact arithmetic confirms the original period and orbit data."
  },
  {
    "ledger": "defect",
    "id": "ex-cm05-gravitational-ellipse-and-period-check",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "Corrected dimensionally false equalities: mu*a^3/kappa is in s^2 and G_N*M=1 m^3/s^2. Both period routes now carry units and retain all original numerical conclusions."
  },
  {
    "ledger": "defect",
    "id": "rem-cm05-collision-scope",
    "supplier": "post-cm05-gravity",
    "status": "proposed_owner_repair",
    "path": "items/rem-cm05-collision-scope.md",
    "affected_use": "- **Regime.** The meanings of weak-field and non-relativistic use are those\n  defined in [[post-cm05-gravity]] clause (iv): for a trajectory segment and\n  chosen tolerance $\\eta\\in(0,1)$, the maximum source-potential ratio\n  $\\max_i\\lvert\\Phi_i\\rvert/c^2$ and the squared relative-speed ratio\n  $\\lvert r'\\rvert^2/c^2$ are each at most $\\eta$. Relativistic corrections\n  (for instance the perihelion precession of the inner planets) require the\n  general-relativistic framework and are neither derived nor bounded here;\n  the inverse-square law itself is an adopted law of the model.",
    "invalidated_claim": "The relative-speed-only condition is no longer the supplier definition of the Newtonian approximation regime.",
    "minimality": "Change only the regime description and owning scope evidence.",
    "route": "frontier-owner"
  },
  {
    "ledger": "defect",
    "id": "cm05-two-body-central-forces-and-gravitation",
    "supplier": "post-cm05-gravity",
    "status": "proposed_owner_repair",
    "path": "library/non-relativistic-classical-mechanics/cm05-two-body-central-forces-and-gravitation.md",
    "affected_use": "The gravitational model is adopted in [[post-cm05-gravity]]: the\ninverse-square pair potential with the Newtonian constant and positive\ngravitational coupling parameters, the empirical identification of the\ncouplings with the inertial masses (the weak equivalence principle, adopted\nonly where a statement says so), the measured value of the Newtonian\nconstant with its uncertainty and source-reported input measurements, and\nthe defined weak-field and slow-relative-motion regime. On that model\n[[pthm-cm05-conic]] proves the Keplerian orbit\nclassification: the polar conic with focus at the force centre, the\neccentricity-energy relation and the elliptic, parabolic and hyperbolic\nbranches, the centrifugal barrier that keeps every non-radial motion away\nfrom the collision, the completeness, closure and ellipse geometry of the\nnegative-energy branch, and the scaled barycentric ellipses of both labels.\n[[pthm-cm05-kepler-period]] computes the period\n$T=2\\pi\\mu ab/J=2\\pi\\sqrt{\\mu/\\kappa}\\,a^{3/2}$, hence\n$T^2=4\\pi^2a^3/(G_{\\mathrm N}M)$ under the mass identification, together\nwith the barycentric periodicity of both labels and the area swept per\nperiod. The closing audit [[rem-cm05-collision-scope]] records the collision\nand radial exclusions, the point-particle and finite-size limits, the\nempirical status of $G_{\\mathrm N}$ and of the mass identification, and the\nclaims deliberately not made.",
    "invalidated_claim": "The relative-speed-only condition is no longer the supplier definition of the Newtonian approximation regime.",
    "minimality": "Change only the regime description and owning scope evidence.",
    "route": "owning-page-maintenance"
  },
  {
    "ledger": "defect",
    "id": "cm05-two-body-central-forces-and-gravitation",
    "supplier": "cex-cm05-external-force-breaks-relative-reduction",
    "status": "proposed_owner_repair",
    "path": "library/non-relativistic-classical-mechanics/cm05-two-body-central-forces-and-gravitation.md",
    "affected_use": "Worked numerical checks of the elliptic branch, the parabolic and hyperbolic\nbranches, the barycentric reconstruction with unequal masses, the circular\norbit and its linearised frequency, and the counterexample showing the\nnecessity of the no-external-force hypothesis are collected on\n[[cm05-two-body-central-forces-and-gravitation-examples]].\n",
    "invalidated_claim": "Individual external forces vanishing is not necessary for the relative central-force equation.",
    "minimality": "Replace only the necessity phrase by failure when unrestricted external forces are allowed; do not weaken the counterexample.",
    "route": "owning-page-maintenance"
  },
  {
    "ledger": "defect",
    "status": "proposed_owner_review",
    "id": "lem-cm-oriented-orthonormal-triads",
    "path": "items/lem-cm-oriented-orthonormal-triads.md",
    "affected_use": "Facts L3: every $x\\in\\mathbb R^n$ is $x=\\sum_{j=1}^3\\langle x,s_j\\rangle s_j$",
    "invalidated_claim": "The three-vector expansion is false in R^n for general n; step 2.2 actually applies it only to vectors in R^3.",
    "minimality": "Replace R^n by R^3 in L3; the Statement and actual proof remain unchanged.",
    "route": "frontier-owner",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "status": "proposed_owner_review",
    "id": "def-cm15-asymptotic-data",
    "path": "items/def-cm15-asymptotic-data.md",
    "affected_use": "Clause (i): [[def-cm01-units]]: $[\\mu]=\\mathsf M$",
    "invalidated_claim": "The cited unit supplier defines the mass-dimension generator as mu, not mathsf M.",
    "minimality": "Replace only the incorrect mass-dimension symbol, and review the resulting Definition change through that owner.",
    "route": "frontier-owner",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "status": "proposed_owner_review",
    "id": "cm15-scattering-and-impulse-model-boundaries-examples",
    "path": "library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md",
    "affected_use": "the elastic case exchanges the velocities with $\\Delta K=0$",
    "invalidated_claim": "For masses 2 kg and 6 kg, incoming velocities 3 and -1 m/s give outgoing -3 and 1 m/s. Exchanging them would give momentum 16 kg*m/s instead of zero; item ex-cm15-impact-check step 2.1 correctly reverses each velocity.",
    "minimality": "Replace exchanges by reverses each velocity in the owning page summary.",
    "route": "owning-page-maintenance",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "status": "proposed_owner_review",
    "id": "pthm-cm05-plane-area",
    "path": "items/pthm-cm05-plane-area.md",
    "affected_use": "Remarks: for a closed orbit traversed once it is the area enclosed by the trajectory; for a radial relative motion no polar angle is defined",
    "invalidated_claim": "The ordinary enclosed-area identification requires a simple single-revolution closed path; zero angular momentum does not prevent choosing a plane through a constant radial direction and a constant polar angle. The proved sector-integral and angular-momentum claims remain sound.",
    "minimality": "Qualify only the two Remarks clauses; no proved Statement change is needed.",
    "route": "frontier-owner",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "status": "proposed_owner_review",
    "id": "rem-cm05-collision-scope",
    "path": "items/rem-cm05-collision-scope.md",
    "affected_use": "Radial motion: For $j=0$ no polar angle and no plane orthogonal to a nonzero $j$ exist",
    "invalidated_claim": "The subsequent calculation r=rho*n0 permits a constant polar angle after choosing a plane containing n0. Only the nonzero-j angle parametrization and its distinguished plane fail.",
    "minimality": "Replace the no-polar-angle assertion by failure of the nonzero-angular-momentum parametrization; combine with the separately required regime correction.",
    "route": "frontier-owner",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "def-cm06-moving-frame",
    "outcome": "false_positive",
    "status": "sound-unchanged",
    "evidence": "Clause (f) anticipates the same-page pthm-cm06-inertial-forces, whose clause 3 and steps 1.2–3.1 prove the exact criterion. Definition (d) specifies the field outright; it does not use that later theorem as a premise. Adding a reverse logical dependency would create a cycle. The C² acceleration identity and skew correspondence establish the defined kinematics."
  },
  {
    "ledger": "defect",
    "id": "def-cm06-holonomic-constraint-model",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "Confirmed: G(t,x)=x₂−|x₁|³ (N=1,k=1) is C² with spatial rank 1, but its zero graph is not smooth at x₁=0. The cited regular-value definition and level-set theorem both require smooth maps. Retained all C² data, explicitly defined C² embedded slices, and proved the exact 3N−k local graph conclusion using thm-parametrized-implicit-function-theorem-with-higher-regularity at order 2, an invertible spatial minor, and h(u,v)=(u,v−φ(u)); smooth G still yields the original smooth conclusion."
  },
  {
    "ledger": "defect",
    "id": "def-cm06-nonholonomic-model",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The alleged contradiction is false: the supplier heading is Statement refuted, and Counterexample steps 1.1–5.1 disprove vakonomicity. Directly checked x=t, y′=(1+t²)^(-1/2)>0, z′=t y′; stationarity forces η=0 and then y″=0 on a nondegenerate interval, contradicting y″=−t(1+t²)^(-3/2). A separate nonfatal defect from the batch digest is confirmed: domain-bearing motions are not literally unique. Repaired clause (e) to state unique maximal motion on R and uniqueness up to restriction, retaining non-inclusion and the absence of a vakonomic existence claim."
  },
  {
    "ledger": "defect",
    "id": "pthm-cm06-inertial-forces",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Confirmed nonfatal prose error in proof step 1.1: τ is independent of mass, while F_i^in=m_i τ is proportional to mass. Replaced only that dependency description, preserving the acceleration identity and all Statement clauses. Checked the vanishing criterion by y=v=0 forcing c″=0, y=0 and basis velocities forcing ω=0, hence R′=0 and affine c; the explicit F_* construction and transformed-domain covariance remain valid. The incorrect phrase did not invalidate the displayed algebra or theorem."
  },
  {
    "ledger": "defect",
    "id": "ex-cm06-rolling-disk-model-comparison",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "Confirmed fatal false equivalence in F4: q(t)=(1,0) satisfies x′−aθ′=0 and a constant x−aθ, but not the selected constraint G=0. Repaired F4 and step 1.1 to require G(q(t₀))=0 for M1 while retaining the velocity law’s equivalence to arbitrary constant levels. Also repaired F1 to carry the chart proposition’s actual C³ constraint, all-domain rank and C¹ force hypotheses, checked here because G is affine and Φ is constant. Independently checked C=1/m+a²/I, λ=−fI/(I+ma²), both accelerations, zero reaction power and the declared contact-capacity comparison; the Example and physical_scope are unchanged."
  },
  {
    "ledger": "defect",
    "id": "rem-cm06-dalembert-vakonomic-distinction",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The rejection mistakes Statement refuted for an accepted assertion. The supplier’s Counterexample proves the cited non-inclusion: x=t, y′>0 and x″=0 force any vakonomic multiplier to vanish, contradicting the nonzero y″ on every nondegenerate test interval. Confirmed only the separate nonfatal uniqueness wording from the blind digest: motions with different interval domains are restrictions of the unique maximal motion. Repaired What is proved with the maximal/restriction qualification; no existence of a vakonomic motion or empirical model selection is asserted."
  },
  {
    "ledger": "published",
    "id": "lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple",
    "status": "proposed-maintenance",
    "route": "mathematics-owner; imported original is read-only",
    "path": "items/lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple.md",
    "affected_use": "Statement final sentence says the row vector of ℓ is Aᵀλ, although A:R^m→R^n makes Aᵀλ an m×1 column. The scalar representation ℓ(v)=⟨λ,Av⟩ and proof steps 1.1–3.1 are correct.",
    "invalidated_claim": "Only the row-versus-column equivalent formulation is mistyped; all assigned multiplier uses employ the sound scalar or column formulation.",
    "minimality": "Mathematics maintenance can replace row vector by representing column, or replace Aᵀλ by λᵀA if retaining row. No physics-run edit or Step-5 adjudication obligation is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm06-rotating-chart-inertial-terms",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Confirmed nonfatal quantity-label error: y=Rᵀ(x−c) is the moving-chart coordinate, and the free inertial curve x=x₀+vt has x″=0. The independently differentiated y gives y′(0)=−e₂ and y″(0)=−3e₁−e₂; the four inertial contributions −4e₁,−e₂,+4e₁,−3e₁ sum correctly. Repaired Example clause 2 to name moving-chart coordinate acceleration and explicitly contrast it with x″=0, and corrected physical_scope. The computations and zero-force conclusion are retained; only their chart attribution was wrong."
  },
  {
    "ledger": "defect",
    "id": "post-cm06-ideal-reaction-law",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "path": "items/post-cm06-ideal-reaction-law.md",
    "affected_use": "Postulate (iv).4 excludes active mechanisms that drive the constraint and assigns their driving to an additional force; ex-cm06-bead-on-a-rotating-wire declares prescribed rotation and attributes 2mΩ²rr′ to ideal reaction.",
    "invalidated_claim": "The bead application does not state whether the exclusion concerns direct driving of the modeled particle or driving its prescribed support; its adoption of this postulate needs that scope clarification.",
    "minimality": "Clarify the support-versus-direct-force distinction in the owning physical scope and review that direct application; do not alter the sound reaction-power algebra.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm06-pendulum-tension-and-reaction-power",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "path": "items/ex-cm06-pendulum-tension-and-reaction-power.md",
    "affected_use": "Example clause 2 quantifies over every constrained motion, whereas Given assumes a C² θ and Verification 1.2 and 2.2 only treat x=X(θ).",
    "invalidated_claim": "The proof omits the bridge that every C² circle-valued motion on an interval admits a C² real angular lift. The claim is sound after supplying that bridge.",
    "minimality": "Choose one initial angle and integrate θ′=(x y′−y x′)/l² for the presentation X=(l sin θ,−l cos θ,0); differentiating the circle equation and solving the resulting linear rotation equation verifies X(θ(t))=(x(t),y(t),0). No Statement weakening or extra consumer hop is needed for a proof-only repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm07-nonholonomic-unrestricted-action-fails",
    "model": "gpt-6-luna",
    "context_sha256": "308a8030113d405d52dc4d82d74c12876b53e5bbb090672a9765dcd110ada3f9",
    "outcome": "confirmed_fatal",
    "proposed_status": "fixed",
    "reason": "F3 applied thm-ftc-first-part outside its fixed positively ordered interval without the oriented-additivity supplier. Added thm-additivity-over-subintervals, clause 3, and a local basepoint argument on A<min(0,s0)<B to justify the derivative for every real s0. The global motion and all four conclusions are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm07-action-and-mechanical-lagrangian",
    "model": "gpt-6-luna",
    "context_sha256": "297eb939c39d46fc277bd34178662c4f09143a8b3c2dd3e92a51db20a2853fd5",
    "outcome": "false_positive",
    "proposed_status": "dismissed",
    "reason": "Definition (d) explicitly assigns these results to the owning library page, not to its own definition carrier. The page lists and explains pthm-cm07-first-variation-and-euler-lagrange-expression (both formulas), pthm-cm07-euler-lagrange-equations (stationarity equivalence) and pthm-cm07-newton-equivalence (motions, with d=0). Their actual statements and proofs instantiate the C2 action chart and retain the residual-force restriction. No missing page promise exists; adding these consumers as definition prerequisites would be circular.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm07-polar-coordinate-kinetic-metric-check",
    "model": "gpt-6-luna",
    "context_sha256": "fe3fd06ca91f5127337647ebe27ea85269ea5e21277df7896efd8e539600faed",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The last remark reverses division and multiplication by r. Verification step 4.1 and the displayed equations are correct. Replaced multiplied by r with divided by r>0. Also repaired the digest finding: a constant-z solution of the first two equations is a three-dimensional model motion exactly when partial_z Utilde vanishes along it. The main Example and physical_scope remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm07-total-derivative-gauge-check",
    "model": "gpt-6-luna",
    "context_sha256": "474e86023c5985176a63e7b3bbc976c868ebdf7d085cc5e3b8bc6856b466db59",
    "outcome": "confirmed_fatal",
    "proposed_status": "fixed",
    "reason": "Definition def-cm01-units (a) makes mu, tau and ell dimension-group generators; they are not reference-unit quantities. Clause 3 assigned those symbols as masses, times, velocities and forces, so its numerical example was ill-typed. Replaced them with 1 kg, 1 s, (1 m/s)e1 and 1 kg m/s^2, and expressed both actions and the endpoint difference in kg m^2/s. Exact numerical values 0.5, 2.5 and 2 are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm07-nonholonomic-unrestricted-action-fails",
    "origin": "batch-23 rejection-blind digest",
    "outcome": "confirmed_nonfatal",
    "proposed_status": "fixed",
    "reason": "The normalization divided by undeclared-nonzero length and time quantities and called the action factor positive. The Example now explicitly declares L0,T0,m0>0; the normalized dynamics and all conclusions are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm07-polar-coordinate-kinetic-metric-check",
    "origin": "batch-23 rejection-blind digest",
    "proposed_status": "fixed",
    "reason": "The final Remark dropped the axial equation for arbitrary potential. For U=mgz with g>0, any constant-z curve fails z_doubleprime=-g. The repaired Remark retains partial_z Utilde=0 along the proposed plane motion, precisely the missing axial equation; all original cylindrical results remain.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm07-generalized-coordinates-and-forces",
    "proposed_status": "owner-review-required",
    "outcome": "confirmed_nonfatal",
    "route": "unassigned frontier owner",
    "reason": "The sentence for a chart says the full residual-force equation is recorded by the covariance theorem, although that theorem explicitly concerns the potential part and excludes residual forces. Keep the declared equation. Explain that E_L=-d along a force-model motion and E_Ltilde=DX^T E_L imply Lambda(Ltilde)=DX^T d; conversely invertible DX^T recovers the full force equation. Cite the transport identity and first-variation identity rather than claiming the covariance theorem states the forced branch.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "record scoped review with no published repair",
    "ids": [
      "thm-a-regular-level-set-is-an-embedded-submanifold",
      "def-embedded-submanifold-and-slice-chart",
      "thm-additivity-over-subintervals",
      "thm-ftc-first-part"
    ],
    "reason": "The inspected published mathematical suppliers retain their actual smoothness or integral hypotheses and are read-only. The digest regularity defects were in draft physical consumers and are already repaired in their current carriers: cm06 uses explicitly defined C2 slices and cm03 (f) requires smooth U. No defective published supplier or published consumer was found in this assigned review, and no published audit, repair or certification status is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm08-symmetry-of-the-mechanical-lagrangian",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "def-cm07 Definition (b) defines K-U for the presentation and excludes d from L when d is nonzero. The original terminology omitted this qualification, although the displayed identity and charge are valid. Repaired the Definition and scope explicitly without changing those formulas; also corrected clause (b) to interpret the general identity as variation of L dt, including L D_t tau.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm08-time-dependent-potential-breaks-energy",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The official MIT PDF does title section 7.1.3 Fixed Points, but within that section printed page 148 (PDF page 151), equations (7.15)-(7.16) explicitly treat the linearized forced damped oscillator with harmonic drive. The citation claims a driven linear oscillator with a harmonic term, not an undamped match or that Fixed Points is its title. Its cited pages 147-148 contain that material. The local undamped model and nonresonant response are verified independently, not imported from the damped solution. No citation repair is necessary.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm08-external-symmetry-breaking",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The original nonautonomous-potential sentence gives an impossible condition under its own antecedent; interpreted as an iff it means the datum never holds, rather than proving a false conservation law, but it obscures the exact supplier criterion. Replaced it with the unrestricted iff U_t=0 and its explicit nonautonomous failure and sharpness case. Also clarified that the identity constrains the potential presentation, not d, and specified B=0 for the translation datum: uniform forces admit boundary-corrected data even across the field.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm08-uniform-field-breaks-translation-and-boost",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The original Remarks applies pthm-cm03-momentum-balance to an undeclared external-force decomposition and omits it from deps. That theorem requires the external-plus-antisymmetric-pair presentation. Added its dependency and post-cm02-interactions, and explicitly declared F1ext=m g on R x R3 x R3 with no pairs, so antisymmetry is vacuous and sigma=m g. Also repaired the MIT constant-gravity locator: section 4.5 is Kepler; section 1.5 equations (1.95)-(1.97), printed pages 25-26, actually give mgz and free fall. All example formulas remain unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    ],
    "familiar": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-cm08-boost-boundary",
    "status": "owner_review_required",
    "route": "frontier_owner",
    "path": "items/pthm-cm08-boost-boundary.md",
    "affected_use": "physical_scope: \"The Galilean boost charge of the force model with a declared potential presentation in one inertial frame: with dimensionless a and a velocity-valued family parameter, the time-dependent symmetry datum (tau, xi, B) = (0, t a, a . M x) satisfies the model's Noether identity exactly when the differential translation condition sum_i a . grad_i U = 0 holds; in the global potential branch the boost charge a . (t P - M X) is then constant, the component a of the centre of mass moves uniformly, and the boosted curves t -> x(t) + s t a of motions are again motions; for an arbitrary presentation the exact rate of the charge is the time times the component a of the total force, while nonconservation from a nonzero translation derivative is asserted in the global potential branch. The charge has dimension mass times length (action per velocity), and its rate has momentum dimensions. The theorem is conditional on the adopted force branch, the declared potential and the absence of residual forces in the conservation clauses; it asserts no boost invariance of any particular force law and carries no empirical content.\"",
    "invalidated_claim": "The scope promises boosted motions from differential invariance alone on arbitrary open Q, while Statement clause 4 and proof step 1.3 require endpoint-gradient agreement.",
    "minimality": "Qualify only the physical_scope promise with the exact clause 4 condition; the statement and proof already give the correct endpoint criterion. This item is outside the assigned lane and was not edited.",
    "reason": "Independently checked the digest counterexample: Q is the disjoint slabs (-1,1)xR2 and (2,4)xR2, U=0 on the first and U=x2 on the second, a=e1, t in (0.9,1.1), m=1, d=0. Differential e1 invariance holds; x=0 solves Newton, while x tilde=3t e1 is admissible but has zero acceleration and force -e2. Thus the unconditional physical_scope assertion is false.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-cm08-rotation",
    "status": "owner_review_required",
    "route": "frontier_owner",
    "path": "items/pthm-cm08-rotation.md",
    "affected_use": "- **Torque reading.** Under the potential presentation the total torque of the potential forces about the origin is $-\\sum_{i}x_{i}\\times\\nabla_{x_{i}}U$, so hypothesis (i) for all $a$ is the vanishing of that torque; clause 5 is then the familiar statement that a model whose potential exerts no torque about the origin conserves its total angular momentum. The balance theorem [[pthm-cm03-angular-momentum-balance]] reaches the conservation statement from centrality of the pair forces and vanishing external torque, a different hypothesis; the two routes are complementary and neither is a consequence of the other.",
    "invalidated_claim": "The remark invokes pthm-cm03-angular-momentum-balance without declaring that result in deps.",
    "minimality": "Owner should inspect whether this comparison is intended as a logical use, and if so add the supplier and its physical-result role. The rotation proof itself remains sound; this item is outside this assignment and was not edited.",
    "reason": "During direct-consumer inspection of the repaired symmetry definition, the Torque reading paragraph explicitly names the angular-momentum balance result, but deps and dependency_roles omit that ID. The unchanged rotation proof calculates potential torque directly and is unaffected by the supplier clarification.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_consumer_impact",
    "supplier": "def-cm08-symmetry-of-the-mechanical-lagrangian",
    "reason": "All ten direct item dependency/reference consumers found by scanning current items and library are draft frontier items. The owning page remains sound. No published consumer or imported mathematical carrier was edited, and no published maintenance obligation was identified for this interface event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm09-coupled-quadratic-model",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "cdc96f746d648c96cb5c4c12cc46566292c9d4fd1a8e53a96e95694ee7d57998",
    "post_sha256": "2c66fa82a36f1aa293f0eeff9b2330593efe51830f880804d679d95f1837d067"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm09-cubic-potential-error-check",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "50545a7eac909aceb40bc0eb842bf935c6747f0d25def059eabbda7e978a3954",
    "post_sha256": "69584f1419b95cf18231b8d0511d43088a40145207672369ce08eef974ce3a1b"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm09-double-pendulum-linear-modes",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "df5e1779af0c92cc594233bc346bdc23c23562fced49b4dab23ed276baf5bc99",
    "post_sha256": "3c8a49fc95cfdf5490b8dae76b3976a8d9511f972dd1909002f187ba8529e0de"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm09-unstable-quadratic-mode",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "e89db4d63a708c840fbde89489e9e53cad935b170beac82f0fe7df25c17b02a8",
    "post_sha256": "9c715b27a9644162b6e7b1f6ca39d61e3b79e6369cec794d4ddfc66ae32b2a83"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm09-degenerate-oscillator-subspace",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "da927f9ca168b691d6f2e23f04558ab2fa03d68b325b53b10f483c64ea3f46be",
    "post_sha256": "146333a4c075d5326de15eee4bc3422efbb1205040f9d7a6c86fd312e9b95846"
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm09-forced-resonant-mode-check",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The assigned nonfatal carrier defect has been repaired and its mathematical argument reviewed; bind the completed decision and review for this exact item in unit 25.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "decision_context_sha256": "4bb8a98d7416a131b8d007835a220e317b9e92d0a5d6964e455ff4355b6bc652",
    "post_sha256": "ea42ccf153cc10e3e1eec6562224370bddf09114cae81e58bc2fabde21c83804"
  },
  {
    "ledger": "published-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published carrier was repaired or identified as a defective consumer of these changes. The sole changed physical public interface has no direct item consumers, and its owning page use remains sound. This is a scoped finding, not a whole-library audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "pthm-cm09-linearization-error-bound",
    "status": "reported_to_frontier_owner",
    "outcome": "confirmed_nonfatal",
    "reason": "Read-only verification of the Step-4 digest concern: Facts F5 of items/pthm-cm09-linearization-error-bound.md applies z'=F(z) with z(0)=z_0 and linear y(0)=z_0, but Statement clause 2 defines z_0=(q_0+delta q_0,v_0). The mathematical bound needs displaced datum zeta_0=(delta q_0,v_0). Proof step 2.1 already applies it correctly and translates both solutions back, so the conclusion remains sound. Minimal owner repair: distinguish zeta,zeta_0,tilde y in F5; retain Statement. No edit or assigned adjudication performed here. For the assigned cubic consumer q_0=0, both datums agree.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm10-angular-velocity",
    "status": "false_positive",
    "reason": "The rejection restricts v to x(t,supp nu), but post-cm10-rigid-material (ii) defines the placement on all R^3 and def-cm10-rigid-body-configuration (e) defines v on its full image, also all R^3. At the fixed placement c'(t)=v(t,c(t)); equality of full-field differences gives equal cross-product matrices, hence equal angular velocities by the skew-matrix supplier. Two independent test vectors suffice since a vector parallel to both must vanish. The point-mass restriction is indeed non-identifying, but it is not the defined full-field domain. Clauses (a)-(f), C^1 rates, rotation conjugation and the explicit axis converse are sound. No final item or contract edit."
  },
  {
    "ledger": "defect",
    "id": "def-cm10-inertia-tensor",
    "status": "false_positive",
    "reason": "The 13 declared deps do not include pthm-cm10-principal-axes. Final focused depcheck examined the actual prerequisite graph across 1184 closure items and 287 pages and reported no cycles or other errors. The Remark's link is a deferred same-page result, not a prerequisite: symmetry and semidefiniteness use the mathematical inertia-properties lemma, while axis invariance and invertibility are explicitly deferred. Finite bounded centred positive mass and AC_omega match the moment and shifted-integral suppliers; R^T(p-c) and conjugation correctly define all shifted tensors. No item or metadata edit is needed."
  },
  {
    "ledger": "defect",
    "id": "ex-cm10-euler-angle-pole-and-orientation",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The original physical path uses seconds as a radian argument with no inverse-time coefficient. Added a positive model rate kappa in radians/second, R(t)=Ry(kappa t), c=0 on I0=R and omega=kappa e2. The derivative is kappa Ry(kappa t)[e2]_cross, so R^T R'=[kappa e2]_cross; the dimensionless-angle and inverse-time-rate declarations now match def-cm01-units. Pole collisions, nonzero kernel (1,0,-1), and the conjugated pole-rate formula remain valid. Distinguished a dimensionless angle shift s from a rate shift h and made the Given curve C^2 to match the model. This is a missing dimensional convention, not a failure of the pole calculation. Focused precheck and rendercheck passed."
  },
  {
    "ledger": "defect",
    "id": "cex-cm10-degenerate-line-mass-singular-inertia",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The two-atom witness and I=diag(2m0 a^2,2m0 a^2,0) are valid, but the parameter and output dimensions were implicit. Given now declares m0 in kilograms, a in metres, varpi in radians/second and inertia, energy and angular-momentum units. The finite-simple minorant yields the signed atomic integral; centredness is exact; Rz(varpi t) fixes both physical labels, and Ie3=0 forces zero rotational energy and Lc. No false certainty or empirical values are introduced. Also corrected Tong Eq. (3.22) from printed p.52/PDF p.58 to p.51/PDF p.57 after reading the complete local source discussion through /tmp/batch26-tong.pdf pages 56-58 with PyMuPDF; the source's loose word positive is qualified by its actual nonnegative inequality and rod example. Focused precheck and rendercheck passed."
  },
  {
    "ledger": "defect",
    "id": "ex-cm10-equilateral-triangle-rotational-inertia",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The finite-atomic triangle calculation is correct, but m0, a, inertia and energy units were implicit. Declared m0 in kilograms, a and xk in metres, dimensionless basis and angles, omega_j and varpi in radians/second, moments in kilogram metres squared and rotational energy in joules. Independent checks give sum xk=0 and sum xk xk^T=diag(3a^2/2,3a^2/2,0), hence the stated inertia; no line contains two atoms, and Rz(2pi/3) permutes them, so SIS^T=I. The repeated transverse eigenvalue permits exactly any orthonormal planar pair. The formula 1/2 omega^T I omega has energy dimension after these declarations. No mathematical proportion, support, regularity, dynamics or empirical claim changes. Focused precheck, rendercheck and strict contract check passed."
  },
  {
    "ledger": "defect",
    "id": "ex-cm10-parallel-axis-shift-check",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The original tensor I(0,ae1) is undefined when 0 is outside the permitted open time window, and evaluating a reference placement requires c=0 and R=I3 at the evaluation time. Clauses 2-4 and their proofs now use an explicitly assumed t_* in I0 with (c(t_*),R(t_*))=(0,I3); constant reference motions show admissibility on every permitted interval, while clause 1 remains universal for all t in I0 and all motions. Conjugating the centred supplier with a=R^T(p-c) yields the spatial shift. At t_* the shift is 3m0 a^2 diag(0,1,1); adding it gives diag(3m0 a^2/2,9m0 a^2/2,6m0 a^2). The direct atom displacements (0,0,0),(-3a/2,+/-sqrt(3)a/2,0) give the same matrix and e3-axis difference ma^2. This repairs the missing domain hypothesis without changing the promised reference-placement calculation or universal spatial identity. SI dimensions inherit the corrected triangle; no measurement is asserted. Focused precheck and rendercheck passed."
  },
  {
    "ledger": "defect",
    "id": "pthm-cm10-frame-covariance",
    "status": "owner_followup",
    "outcome": "confirmed_nonfatal",
    "reason": "sources.references Tong locator says Section 3.1.2 printed pages 49-50 for the body/space rate-order discussion. Change locator to Section 3.1.1 printed page 48, Eq.3.10 and its following paragraph (PDF p.54). Read PDF pp.54-55; Section 3.1.2 is Path Ordered Exponentials.",
    "affected_use": "sources.references Tong locator says Section 3.1.2 printed pages 49-50 for the body/space rate-order discussion.",
    "minimality": "Change locator to Section 3.1.1 printed page 48, Eq.3.10 and its following paragraph (PDF p.54). Read PDF pp.54-55; Section 3.1.2 is Path Ordered Exponentials.",
    "route": "unassigned draft frontier carrier; owner repair, no edits in unit 26",
    "uncertain": false,
    "source_urls": [
      "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm10-kinetic-splitting",
    "status": "owner_followup",
    "outcome": "confirmed_nonfatal",
    "reason": "sources.references Tong locator assigns all Eqs.3.27-3.30 to Section 3.2.2, printed pp.51-53. Locate Eqs.3.27-3.28 at Section 3.2.2 printed p.53/PDF p.59, and Eqs.3.29-3.30 at Section 3.3 printed p.54/PDF p.60. Read both complete pages.",
    "affected_use": "sources.references Tong locator assigns all Eqs.3.27-3.30 to Section 3.2.2, printed pp.51-53.",
    "minimality": "Locate Eqs.3.27-3.28 at Section 3.2.2 printed p.53/PDF p.59, and Eqs.3.29-3.30 at Section 3.3 printed p.54/PDF p.60. Read both complete pages.",
    "route": "unassigned draft frontier carrier; owner repair, no edits in unit 26",
    "uncertain": false,
    "source_urls": [
      "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm10-principal-axes",
    "status": "owner_followup",
    "outcome": "confirmed_nonfatal",
    "reason": "Remarks Stationary points: stationarity does not by itself single out geometric axes; the extremal clause (e) does. For I=lambda I3 every unit vector attains both extrema; repeated extreme eigenvalues specify eigenspaces rather than unique axes. Qualify only this remark; the proved extremal clause (e) already states the correct attainable range.",
    "affected_use": "Remarks Stationary points: stationarity does not by itself single out geometric axes; the extremal clause (e) does.",
    "minimality": "For I=lambda I3 every unit vector attains both extrema; repeated extreme eigenvalues specify eigenspaces rather than unique axes. Qualify only this remark; the proved extremal clause (e) already states the correct attainable range.",
    "route": "unassigned draft frontier carrier; owner repair, no edits in unit 26",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm11-principal-rotations",
    "model": "gpt-6-luna",
    "context_sha256": "c1056e54e0ce8c9200eb4eaba9a13cbd4ce88402208f148ea78dc548d6139435",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The adopted motion is a map on I0 (post-cm10-rigid-material (ii)), whereas clause 2 constructed it on an independent I. Using I0 throughout the rotation domains repairs the missing model-domain condition without losing any allowed time window or spin data.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic",
    "metadata_pending": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm11-nonlinear-spin-stability",
    "model": "gpt-6-luna",
    "context_sha256": "a3a921de1885641b45fe2e48f68714853c8d37d5f8f53a0598ee3e55b771f688",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "L3 overattributes the prescribed-datum claim to the supplier interface, but its complete Proof (second through sixth steps) establishes it for every eta<delta0: choose eta0=(eta+delta0)/2, retain the signed invariant branch, then exponential growth reaches the threshold. Repaired the exact proof citation and instantiation; clarified global-extension evaluation and realization on the fixed model window.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "metadata_pending": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm11-free-top-checks",
    "model": "gpt-6-luna",
    "context_sha256": "3778068b28e25b38565abb1fe87e663074e1baee9fd8b4b91a4a0d59e1b9fdf6",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The example claimed a motion of Model S on R without specifying its fixed model window I0. Declared I0=R for both worked models, consistent with every displayed evaluation and forward-time claim, and explicitly typed the reconstructed motion on that window.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic",
    "metadata_pending": true
  },
  {
    "ledger": "published-consumer",
    "action": "no_updates",
    "reason": "No published direct consumer of the three changed interfaces was found in the complete items/library reference inventory. The digest alert thm-cm-heavy-top-reduction is currently draft, not published; its step 2.2 intermediate algebra omits A phi-prime squared sin-squared theta and is routed read-only to its frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm12-cotangent-momentum",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "The cited mathematical Legendre chart requires nonempty Q, whereas the force model permits Q empty. Definition (b) previously instantiated that unavailable chart unconditionally, and (c) called id on empty Q a generalized-coordinate map despite the supplier requiring nonempty Omega. Repaired by defining the velocity-slot gradient directly, restricting both chart identifications to nonempty Q, and recording the unique empty assignments. The formulas p=Mv and p=G(q)v and all dimensions are preserved.",
    "route": "assigned-frontier"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm12-hyperregularity",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "For Q empty, the fibre quantifier is vacuous and the inverse is the unique empty C1 map, but the mathematical supplier requires a nonempty base. The unconditional equivalence to that supplier was therefore invalid. Definition (a) now distinguishes this empty-domain convention from the nonempty chart identification without excluding any model data. The Remark now defers mechanical hyperregularity to the later theorem, agreeing with physical_scope; the fibre-bijection and joint-C1 requirements are unchanged.",
    "route": "assigned-frontier"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm12-hamiltonian",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Fibre bijectivity makes the inverse unique at every (t,q,p), so Definition (d) incorrectly suggested branch choices within a fixed hyperregular chart. This is a nonfatal explanatory error: the defining functions in (a)-(b) already use that unique inverse. Replaced the parenthesis with uniqueness on the declared chart; also carried the repaired momentum empty-domain convention into (a) and restricted the Cartesian identity-map example in (b) to nonempty Q. H=p dot v-L, C1 regularity, coordinate dimensions and the potential shift are unchanged.",
    "route": "assigned-frontier"
  },
  {
    "ledger": "defect-ledger",
    "id": "pthm-cm12-energy-time",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "The final Remark asserted unconditional conservation, although the cited proposition proves H prime=-L_t and allows conservation only when L_t vanishes along the trajectory. The admissible model U(t,x)=a t, a nonzero power constant, d=0, has straight-line Hamilton solutions with H prime=a. This is a fatal logical overstatement outside the correctly qualified numbered theorem. Repaired the Remark to state H prime=U_t, conditional conservation, and the d=0 qualification for identifying unforced Hamilton solutions with model motions. Statement, physical_scope and all four proof steps are unchanged and remain valid.",
    "route": "assigned-frontier"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm14-hamilton-jacobi-equation",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "affected_use": [
      {
        "section": "Definition",
        "snippet": "Adopt the force model with potential presentation $(U,d)$ and mechanical\nLagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the\ndata and conventions of [[def-cm12-cotangent-momentum]]: masses\n$m_{1},\\dots,m_{N}>0$, open configuration domain $Q\\subseteq\\mathbb R^{3N}$,\ntime window $I_{0}$, mass operator $\\mathsf M$\n([[def-cm01-configuration]]), $C^{2}$ potential $U$ and residual forces $d$\nof the standing regularity ([[def-cm03-potential-and-mechanical-energy]],\n[[post-cm02-force-superposition]]). Assume the presentation is hyperregular\non its charts, with the Hamiltonians $H$ and $\\widetilde H$ and inverse\nLegendre branches of [[def-cm12-hamiltonian]],\n[[def-cm12-hyperregularity]],\n[[pthm-cm12-mechanical-hyperregularity]]. The momentum charts, their forms\nand their canonical coordinates are those of [[def-cm13-two-form]] and\n[[def-cm13-canonical-form]]; dimensions are read by [[def-cm01-units]] and\ndifferentiability classes are those of\n[[def-ck-euclidean-maps-and-diffeomorphisms]]."
      },
      {
        "section": "Definition",
        "snippet": "**(a) The chart datum.** Fix one momentum chart of the presentation: either\nthe Cartesian chart with the coordinates $(t,x,p)$ on\n$I_{0}\\times Q\\times\\mathbb R^{3N}$ and the Hamiltonian $H$ of\n[[def-cm12-hamiltonian]] clause (a), or the chart of a\ngeneralized-coordinate map $X:\\Omega\\to Q$ with $r$ coordinates, the\ncoordinates $(t,q,p)$ on $I_{0}\\times\\Omega\\times\\mathbb R^{r}$ and the\nHamiltonian $\\widetilde H$ of clause (b). Write $m\\in\\{3N,r\\}$ for the\nnumber of momentum pairs, let $V\\subseteq\\mathbb R^{m}$ denote the\nconfiguration-coordinate domain of the chart ($Q$ in the Cartesian case,\n$\\Omega$ in the other), and write $H$ for the corresponding Hamiltonian,"
      },
      {
        "section": "Definition",
        "snippet": "**(c) Dimensions and chart consistency.** The equation forces\n$[S]=\\mu\\ell^{2}\\tau^{-1}$ (action): $S_{t}$ has dimension $[S]\\tau^{-1}$\nand $H$ has dimension $\\mu\\ell^{2}\\tau^{-2}$, while each $S_{q^{a}}$ has\ndimension $[S]/\\gamma_{a}$ with $\\gamma_{a}$ the declared dimension of the\ncoordinate $q^{a}$ in this chart; the substitution is dimensionally\nconsistent in every chart because the chart momenta of\n[[def-cm12-cotangent-momentum]] have dimension\n$\\mu\\ell^{2}\\tau^{-1}\\gamma_{a}^{-1}$. In the Cartesian chart all\n$\\gamma_{a}=\\ell$ and $[S]/\\ell=\\mu\\ell\\tau^{-1}$, the momentum dimension."
      },
      {
        "section": "Definition",
        "snippet": "**(d) Status.** The equation is attached to the declared datum: replacing\nthe chart, the inverse Legendre branch or the potential representative\nchanges $H$ by the rules recorded in clause (d) of\n[[def-cm12-hamiltonian]] and hence changes the equation, and a solution\nfamily $S$ is a solution for that datum only. The item defines a class of\nfunctions; whether a given datum admits solutions, and how solutions\nproduce curves of the model, is not asserted here. In particular no\nexistence theorem, no global solution, no equation of motion for the model,\nno conservation law and no measured value is claimed."
      }
    ],
    "evidence": "Definition (d) independently lists replacing the inverse branch as changing H. For a fixed hyperregular chart no such alternative exists; remove that independent option while retaining chart and potential dependence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "rem-cm14-scope-of-hamilton-jacobi-and-integrability",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "affected_use": [
      {
        "section": "Scope of the Hamilton-Jacobi statements",
        "snippet": "All Hamilton-Jacobi statements of this page are local by construction.\n[[def-cm14-hamilton-jacobi-equation]] fixes the equation attached to one\ndeclared momentum chart of one potential presentation, with the branch\nHamiltonian of [[def-cm12-hamiltonian]]; changing the chart, the inverse\nLegendre branch or the potential representative changes the equation by\nthe recorded rules, so the equation is part of the datum and not an\nintrinsic object of the model. [[def-cm14-complete-integral]] requires the\nnondegeneracy $\\det S_{q\\alpha}\\ne0$ at the base point only, and\n[[pthm-cm14-hamilton-jacobi-characteristics]] concludes only what that\nnondegeneracy and the local theory give: characteristic curves near the\nbase point, the constancy of the Jacobi constants along them, a local\nconverse and local canonical labels $(\\beta,\\alpha)$. No solution is\nextended across a conjugate time or a caustic; the nondegeneracy hypothesis alone supplies no conclusion at excluded\npoints. The companion harmonic example exhibits refocusing at conjugate\ntimes, where the mixed derivative is unbounded and the label-to-position\nderivative vanishes. Its Kepler example separately concerns simple\nturning points of a radial action integral.\nIn particular the page claims no global Hamilton-Jacobi solution, no\nuniqueness of the family and no global existence of the endpoint action."
      }
    ],
    "evidence": "Opening paragraph repeats that changing the inverse Legendre branch changes the equation independently of changing the chart. Replace that option by the uniquely determined inverse on each fixed hyperregular chart.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "ex-cm14-harmonic-oscillator-hamilton-jacobi-check",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "affected_use": [
      {
        "section": "Example",
        "snippet": "Adopt the harmonic model of [[post-cm04-harmonic-model]]: one label of mass\n$m>0$ on $\\mathbb R$ with spring constant $k>0$, force law $F(x)=-kx$,\npotential $U(x)=\\tfrac12kx^{2}$ and no residual force.\nFor the CM12-CM14 presentation interfaces, declare the ambient one-label\nmodel on $Q_{\\mathrm{amb}}=\\mathbb R^{3}$ with mass operator $mI_{3}$,\ntime window $\\mathbb R$, potential $U_{\\mathrm{amb}}(y)=ky_{1}^{2}/2$,\n$d=0$ and smooth force $F_{\\mathrm{amb}}(y,v)=(-ky_{1},0,0)$\n([[post-cm02-force-superposition]], [[def-cm03-potential-and-mechanical-energy]],\n[[def-cm07-action-and-mechanical-lagrangian]]).\nThe generalized-coordinate map $X:\\mathbb R\\to Q_{\\mathrm{amb}}$,\n$X(x)=(x,0,0)$ is a smooth immersion with length-valued coordinate $x$,\n$G=DX^{\\mathsf T}mI_{3}DX=m$ and substituted potential $kx^{2}/2$\n([[def-cm07-generalized-coordinates-and-forces]]).\nThus its chart Hamiltonian $\\widetilde H$ of\n[[def-cm12-hamiltonian]] clause (b) is exactly the scalar Hamiltonian\nbelow; write it as $H$. A scalar harmonic motion reconstructs an ambient\nmotion $X\\circ x$ since the longitudinal equation is $mx''=-kx$ and\nboth transverse equations are $0=0$. Write"
      },
      {
        "section": "Example",
        "snippet": "([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]]), with\n$[H]=\\mu\\ell^{2}\\tau^{-2}$ ([[def-cm01-units]]). On the open set"
      },
      {
        "section": "Facts & Assumptions",
        "snippet": "[L1] Model and Hamiltonian ([[post-cm04-harmonic-model]], [[pthm-cm04-harmonic-motion]], [[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm02-newtonian-flow]], [[def-cm07-generalized-coordinates-and-forces]]): scalar motions of the model are the solutions of $mx''=-kx$, and are exactly the curves $x(t)=A\\cos(\\omega(t-t_{0}))+B\\sin(\\omega(t-t_{0}))$ with reals $A,B$; the inverse Legendre branch is $(x,p)\\mapsto p/m$, equivalently $p=mx'$, and the branch Hamiltonian is the displayed $H$. The least positive period of $x$ is $T$ when $(A,B)\\neq(0,0)$, by clause 3 of [[pthm-cm04-harmonic-motion]]."
      }
    ],
    "evidence": "L1 independently misnames x->M xprime as the inverse Legendre branch. The forward fibre map is v->Mv, while the inverse is p->M^-1p; its displayed Hamiltonian is unaffected. Route this wording defect to its owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "pthm-cm13-hamiltonian-field-integrates-the-model-equations",
    "status": "owner-review-required",
    "route": "frontier-owner",
    "affected_use": [
      {
        "section": "Statement",
        "snippet": "Adopt the force model with potential presentation $(U,d)$ and mechanical\nLagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the\ndata, charts and Hamiltonian field of [[def-cm13-two-form]],\n[[def-cm13-hamiltonian-field]]: masses $m_{1},\\dots,m_{N}>0$ and open\nconfiguration domain $Q\\subseteq\\mathbb R^{3N}$ with mass operator\n$\\mathsf M$ ([[def-cm01-configuration]]), time window $I_{0}$, $C^{2}$\npotential $U$ and residual forces $d$ of the standing regularity\n([[def-cm03-potential-and-mechanical-energy]],\n[[post-cm02-force-superposition]], [[def-cm01-units]]), the Cartesian\nHamiltonian $H(t,x,p)=\\tfrac12p\\cdot\\mathsf M^{-1}p+U(t,x)$ and, for a\ngeneralized-coordinate map $X:\\Omega\\to Q$ with kinetic metric\n$G=DX^{\\mathsf T}\\mathsf M\\,DX$, the chart Hamiltonian\n$\\widetilde H(t,q,P)=\\tfrac12P\\cdot G(q)^{-1}P+\\widetilde U(t,q)$\n([[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]],\n[[def-cm07-generalized-coordinates-and-forces]],\n[[def-cm12-cotangent-momentum]]). Let $J\\subseteq I_{0}$ be a nonempty open\ninterval. For clause 4, a time-dependent phase function is a map\n$f:I_{0}\\times W\\to\\mathbb R$ of class $C^{2}$; write $f_{t}(z):=f(t,z)$\nand use [[def-cm13-hamiltonian-field]] to define the associated family of\nHamiltonian fields $t\\mapsto X_{f_t}$. The forced field is called Hamiltonian\non this full chart when it equals $X_{f_t}$ for every $t\\in I_{0}$. Then:"
      },
      {
        "section": "Facts & Assumptions",
        "snippet": "[F2] Branch Hamiltonians and equivalence ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-hamilton-equivalence]], [[def-cm12-cotangent-momentum]], [[def-cm07-generalized-coordinates-and-forces]]): the presentation is hyperregular on both charts with $H(t,x,p)=\\tfrac12p\\cdot\\mathsf M^{-1}p+U(t,x)$, $H_{p}=\\mathsf M^{-1}p$, $H_{x}=\\nabla_{x}U$, and $\\widetilde H(t,q,P)=\\tfrac12P\\cdot G(q)^{-1}P+\\widetilde U(t,q)$; when $d\\equiv0$, the model's motions with $p=\\mathsf Mx'$ are exactly the solutions of Hamilton's equations of $H$, the forced equation is exactly Hamilton's equations with the residual force added to the momentum source, and in a generalized-coordinate chart the declared Lagrange equations are equivalent to the Hamilton system of $\\widetilde H$ with residual generalized force $Q^{\\mathrm{res}}$."
      }
    ],
    "evidence": "Statement and F2 use unchanged H gradients and momentum identities. F2 separately overstates unforced motion equivalence without d=0; this pre-existing qualification defect is routed to its owner, not repaired here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "action": "no-update",
    "reason": "Every direct consumer discovered for these three definition changes is a draft original-frontier item; no published consumer was identified or edited."
  },
  {
    "defect_ledger": {
      "path": "research/defect-ledger.jsonl",
      "proposed_updates": [
        {
          "ledger": "defect",
          "id": "ex-cm13-determinant-tests-for-linear-canonical-maps",
          "outcome": "confirmed_fatal",
          "evidence": "The matrix-test supplier proves only absolute determinant one. Added step 2.1: the explicit alternating four-linear pairing is the determinant, and preservation of each symplectic pairing forces determinant +1. Together with the existing shear this proves strict weakness in dimension four without weakening the example. No Example or Statement interface changed.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "def-cm13-two-form",
          "outcome": "confirmed_fatal",
          "evidence": "The unconstrained configuration definition assumes only openness, and the action definition expressly permits an empty model with no instances. Added nonempty Q explicitly; W=Q times R^(3N) is now a nonempty open phase domain. All coordinate pullback, immersion, sign and unit conventions remain unchanged. Consumer examinations are recorded separately.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "def-cm13-canonical-form",
          "outcome": "confirmed_nonfatal",
          "evidence": "Clause (a) applied the Cartesian omega to generalized-coordinate source domains, and clause (c) repeated the analogous lambda typing error. Defined source forms sigma and alpha in both cases and required declared coordinate-pair dimensions whose product is action. Matrix and pullback conditions and the scope of canonical coordinates are preserved.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "def-cm13-canonical-map",
          "outcome": "confirmed_nonfatal",
          "evidence": "The pullback definition and its chart and splitting examples are sound, but Definition (d) asserted applications supplied only by later theorems depending on this definition. Retained the existing earlier-supplier examples and moved the later flow and generation applications to contextual Remarks, explicitly as conclusions to be proved there. No later theorem is used as a defining premise; canonical-map condition and applications remain intact.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "pthm-cm13-hamiltonian-field-integrates-the-model-equations",
          "outcome": "confirmed_nonfatal",
          "evidence": "F2 overstated the supplier by omitting d=0 from its unforced motion equivalence. Inserted that hypothesis in F2. Statement clause 1 already assumes d identically zero, and step 1.2 invokes F2 in that clause, so the conditional deduction remains sound; forced and generalized-coordinate clauses and the joint-C2 residual-potential iff were checked and preserved. Statement and physical scope are unchanged.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "pthm-cm13-dynamics-transport-under-canonical-maps",
          "outcome": "confirmed_fatal",
          "evidence": "Step 3.1 used F3 (motion equivalence) to assert C2 canonicity of generated maps, which F3 does not establish. Added the earlier mathematical generating definition and proposition, with the inverse-function theorem and an explicit C2 inverse upgrade, as F4 and declared prerequisites. Step 3.1 now uses F4 for genuine chart transitions and generated instances satisfying the given source/target domains. The Statement is unchanged and no circular physical generating-theorem edge was added.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "pthm-cm13-liouville",
          "outcome": "confirmed_nonfatal",
          "evidence": "Step 2.2 cited a flow-specific determinant fact for an arbitrary chart transition. Added the pointwise identity for theta2 composed with theta1 inverse, cancelling the invertible theta1 pullback to prove canonicity before applying the existing canonical matrix test. Borel images, bounded truncations and change of variables retain AC_omega. Also replaced the overbroad density-representative remark with the explicit constant sign relating omega^n/n! to the coordinate top form. Statement and physical scope unchanged.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "pthm-cm13-observable-evolution",
          "outcome": "confirmed_nonfatal",
          "evidence": "The evolution and bracket-closure deductions already assume a Hamiltonian solution and are valid independently of residual forces. The model-motion identification and F2 used the phrase potential branch without restating its zero-residual condition, although the adopted presentation permits d nonzero. Made d identically zero explicit in that identification, F2 and physical_scope, preserving all deductions for arbitrary Hamiltonian solutions and all existing conservation hypotheses.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "ex-cm13-fundamental-brackets-and-evolution-checks",
          "outcome": "confirmed_nonfatal",
          "evidence": "Retrieved Tong full PDF and read PDF pages 99-107 and 111-113. Section 4.3 printed 94-95 supports the fundamental brackets and evolution law; the oscillator Hamiltonian and equations are in Section 4.5.1 printed 105-107. Corrected the annotation and explicitly identified the three-axis computations as local specializations. The coordinate derivatives, skew bracket and zero-residual oscillator energy deductions check directly; Example and physical scope unchanged.",
          "status": "repaired"
        },
        {
          "ledger": "defect",
          "id": "rem-cm13-locality-topology",
          "outcome": "confirmed_nonfatal",
          "evidence": "The scope text incorrectly put every phase domain in R^(6N). Replaced this by Cartesian domains in R^(6N) and generalized-coordinate domains Omega times R^r in R^(2r), including r<3N, and expressed the determinant warning using the chart half-dimension m. Reflected the dimensional distinction in physical_scope. Local topology, projection, no-completeness, Countable Choice and empirical qualifications are preserved.",
          "status": "repaired"
        },
        {
          "id": "pthm-cm13-generating-functions",
          "path": "items/pthm-cm13-generating-functions.md",
          "route": "frontier-owner",
          "outcome": "confirmed_fatal",
          "defect_type": "logic",
          "affected_use": "Statement clauses 1, 2 and 4 call generated maps canonical maps of the physical presentation; O_q,O_Q,O_P are not precisely declared and second-kind Q=S_P need not belong to target Q.",
          "snippet": "Let $S:O_{q}\\times O_{P}\\to\\mathbb R$ be $C^{3}$ with\n   $\\det S_{qP}\\neq0$ everywhere, and define the local map by\n   $p=S_{q}(q,P)$, $Q=S_{P}(q,P)$. Then it is again a canonical $C^{2}$ local\n   diffeomorphism of the presentation",
          "invalidated_claim": "Ambient canonicity does not imply the generated position belongs to the declared physical configuration domain. For N=1, Q=(0,1)^3 and S(q,P)=(q+(2,0,0)) dot P, the mixed Hessian is identity but S_P lies outside Q.",
          "minimality": "Precisely declare nonempty open source/target coordinate domains and require target-position containment on admissible branches. Do not change the ambient mathematical theorem. This is outside u29 ownership; no carrier was edited.",
          "uncertain": false,
          "source_urls": [],
          "familiar": true
        },
        {
          "id": "lem-cm13-poincare-cartan-annihilation-characterization",
          "path": "items/lem-cm13-poincare-cartan-annihilation-characterization.md",
          "route": "frontier-owner",
          "outcome": "confirmed_nonfatal",
          "affected_use": "Proof step 2.1 computes sigma(v,partial_p_i) but drops the -dq^i(v)dp_i(partial_p_i) wedge term in the intermediate expression.",
          "snippet": "$\\sigma(v,\\partial_{p_{i}})=dp_{i}(v)dq^{i}(\\partial_{p_{i}})-(dH\\wedge dt)(v,\\partial_{p_{i}})=0-\\dot q^{i}\\cdot1+H_{p_{i}}=H_{p_{i}}-\\dot q^{i}$",
          "invalidated_claim": "The first displayed expression equals H_p_i, not H_p_i minus qprime. The final component formula and iff are valid.",
          "minimality": "Insert the missing wedge summand in that intermediate equality only; no Statement change is needed. Reported to the owner route without editing the unassigned carrier.",
          "uncertain": false,
          "source_urls": [],
          "familiar": true
        },
        {
          "id": "ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical",
          "path": "items/ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical.md",
          "route": "frontier-owner",
          "outcome": "confirmed_nonfatal",
          "affected_use": "Example error-estimate setup calls independently rescaled position and momentum coordinates canonical for the presentation form.",
          "snippet": "$\\ell_*>0$, $p_*>0$, $\\tau_*>0$ and use dimensionless canonical coordinates\n$\\hat x=x/\\ell_*$, $\\hat p=p/p_*$, $\\hat t=t/\\tau_*$",
          "invalidated_claim": "The source form is omega=ell_* p_* sum d(xhat) wedge d(phat), so the displayed coordinates are canonical for omega/(ell_* p_*), not for the fixed presentation form under the literal canonical-chart definition.",
          "minimality": "Define the normalized dimensionless form explicitly and qualify canonical relative to it; physical splitting-map canonicity and error estimates are unaffected. No unassigned carrier edit.",
          "uncertain": false,
          "source_urls": [],
          "familiar": true
        },
        {
          "id": "pthm-cm13-two-form-is-symplectic",
          "path": "items/pthm-cm13-two-form-is-symplectic.md",
          "route": "frontier-owner",
          "outcome": "confirmed_nonfatal",
          "affected_use": "F1 attributes nonempty Q to suppliers allowing empty Q, although its Statement adopts the data of the now-repaired def-cm13-two-form.",
          "snippet": "the force branch has the standing regularity, $Q$ and $\\Omega$ are nonempty open sets",
          "invalidated_claim": "The F1 listed configuration/action suppliers alone do not imply nonempty Q. The amended direct phase-domain definition supplies it, so the theorem remains sound under its adopted datum.",
          "minimality": "Add def-cm13-two-form to the F1 citation as the source of the explicit nonempty Q assumption, or state that as a given hypothesis in F1. This is a citation-only repair outside this assignment.",
          "uncertain": false,
          "source_urls": [],
          "familiar": true
        }
      ]
    },
    "published_consumer_ledger": {
      "path": "research/published-consumer-supplier-ledger.md",
      "proposed_updates": [],
      "reason": "All identified direct item consumers in this examination are draft frontier items; no published consumer finding or repair was established."
    }
  },
  {
    "ledger": "defect",
    "id": "def-cm-bilateral-shift-space-and-cylinders",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The metric and cylinder Definition is well typed. The final Remark incorrectly applies the centered-cylinder ball inclusions to every cylinder: fixing coordinate 100 permits distance 1 at coordinate 0, while flipping coordinate 100 alone has distance 2^-100. Restricted the quantitative inclusions to [-m,m] and retained the correct arbitrary-cylinder inner-ball and basis assertions, verified in the companion lemma clause 2 and step 2.1. Definition unchanged, so no interface propagation."
  },
  {
    "ledger": "defect",
    "id": "def-cm-mechanical-vector-field-and-energy-in-a-chart",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "reason": "Confirmed an ill-typed Definition: R^n vectors and gradient suppliers have indices 0,...,n-1, while the original D_qM sum uses v_n and omits v_0. Replaced its range with 0<=k<n and explicitly specified matrix-entry and column-vector conventions. The contraction now equals the entrywise differential of M in direction v; the Euler-Lagrange product rule and C1 regularity remain valid. No physical assumptions or units were introduced."
  },
  {
    "ledger": "defect",
    "id": "ex-cm-jordan-block-dichotomy-computed",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "L3 omitted the supplier's complexification condition, while the coordinate eigenvalue calculations left the scalar field unstated. Made T_C and lambda in C, v in C2 explicit; the same equations give exactly {-1} and {1/2,-3/2}, so no new spectral argument is required. Also repaired undeclared one-based coordinates, supplied completeness and boundedness for the operator exponential, and restricted matrix-ODE uniqueness to compact intervals containing zero. Recomputed the shear squared-norm inequality f'<=-f and all diagonal time signs; constants and example conclusions are preserved."
  },
  {
    "ledger": "defect",
    "id": "cor-cm-flow-domain-open-and-flow-is-c1",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The rejection overlooks the supplier proof expressly invoked in consumer step 4.1. Smooth-dependence proof 6.1 chooses epsilon>0 with rho+M(T+epsilon)<R, repeats its proved state-derivative estimates on the longer slab, applies -F for negative time, and joins derivatives at zero to establish C1 on (-epsilon,T+epsilon) x B(a0,rho). At each corollary small step rho+M_j h<=delta/2<delta, exactly the needed strict margin. The claimed open neighborhood of (h,x_{N-1}) is therefore established. Reviewed the full tube construction, shrinking radii, finite composition and time reversal; carrier and contract remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism",
    "route": "frontier-owner-outside-unit-3",
    "status": "owner-review-requested",
    "reason": "Current Fact F4, line 90, says no common root in an arbitrary field implies a Bezout identity with right-hand side 1. Over R, p=q=x^2+1 have no real roots and no such identity. Actual proof step 1.1 establishes no common complex root for its real factors and hence coprimality, so the used factor decomposition is sound. The exact published Bezout supplier requires gcd; propose replacing the unqualified F4 hypothesis by gcd(p,q)=1, without changing the theorem Statement.",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-recurrence-for-finite-volume-models",
    "route": "frontier-owner-outside-unit-3",
    "status": "owner-review-requested",
    "reason": "Confirmed digest alert against current L3 at line 86: it cites the local trapped-cylinder smooth-dependence theorem for an open maximal-flow domain and C1 flow on that entire domain. Those hypotheses and the global domain conclusion require cor-cm-flow-domain-open-and-flow-is-c1, already available and checked here. Propose the minimal citation/dependency/contract correction to that corollary; no recurrence Statement change is needed.",
    "uncertain": false,
    "familiar": true,
    "source_urls": []
  },
  {
    "ledger": "defect",
    "id": "ex-cm-flow-of-a-linear-system-is-the-matrix-exponential",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F3 overstates the cited local smooth-dependence interface, but the global derivative conclusion already has an independent zero-remainder proof. Qualified F3 with a0,R,T,M,L,rho and the actual open state ball and [0,T] range; kept the all-time result in direct step 2.1. Added finite-matrix boundedness, Euclidean completeness and exact column-vector/norm conventions to license the exponential and IVP. Clarified uniqueness at a specified time in a compact interval, corrected the contract's zero-state derivative note, and adopted the successful precheck's phase renumbering. Example conclusions unchanged."
  },
  {
    "ledger": "defect",
    "id": "ex-cm-planar-harmonic-oscillator-return-map",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The body already claims a local map near (1,0), but the title overstates it on the whole section and misnames a scalar oscillator's phase field as isotropic planar motion. Corrected the title and field terminology, made F:R2->R2 and y=x' explicit, and recorded why the stationary origin has no least positive hitting time. Rechecked both differentiated components, global maximality, sin zeros, cos(pi)=-1, transversality and the local inverse reflection. L1 now supplies actual differentiation/uniqueness facts, and the quarter-turn supplier explicitly licenses the return value. The original local mathematical assertion is preserved; owning-page summary and manifest reconciled."
  },
  {
    "ledger": "defect",
    "id": "cm-math-dynamics",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Owning-page symbolic paragraph previously omitted the Countable and Dependent Choice conditions on the compactness deduction. It now says sequentially compact, and compact under exactly clause 4's two assumptions; no supplier statement or choice requirement was altered."
  },
  {
    "ledger": "published-consumer",
    "id": "def-cm-mechanical-vector-field-and-energy-in-a-chart",
    "status": "no-published-consumer-defect-found",
    "reason": "Every direct item dependency/reference consumer of the corrected Definition is a draft item in the frozen frontier. Exact supplier uses and dispositions are recorded in downstream_reviews. No published item was edited or adjudicated; outside-lane draft findings go to their frontier owners."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "pthm-cm14-hamilton-jacobi-characteristics",
    "model": "gpt-6-luna",
    "context_sha256": "8b2ba18beb3e8c6395c4d730b8e5c665ce3ae8e1a96eb13b23c7de5b06c207ca",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The title omitted d=0 and physical_scope identified every generalized immersion's characteristic with an ambient motion. The unchanged Statement and F3 correctly give Cartesian motions only for d=0 and substituted Lagrange solutions in generalized coordinates. Corrected title, scope and the owning A-page summary; the C2/C3 mathematical characteristic theorem proves all four local clauses and the C1 canonical definition permits its C2 coordinate maps.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-cm14-involution",
    "model": "gpt-6-luna",
    "context_sha256": "2cac7898ad01dbe85b3262cd31448e962cbfaee35a905d99d8af25c32d48cc78",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Clause (c) wrongly attributed an iff to observable-evolution clause 2, which proves sufficiency only. Added the converse: a C1 Hamiltonian field has a local solution through each w by Picard-Lindelof; differentiating constant f along that solution gives {f,H}(w)=0. Also corrected the definition/scope's independent false identification of arbitrary lower-dimensional immersion solutions with ambient motions, preserving Cartesian model equivalence and generalized substituted equations.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-cm14-complete-integrability",
    "model": "gpt-6-luna",
    "context_sha256": "22c7b52de752456c5e3b6ce8ff6cbb4daf82cfb454c7ed0630134ba1d6f25c8d",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The introductory 'on the chosen domain and hence written H:W→R' already permits the chart Hamiltonian, so the alleged undefined H is not a fatal typing error. Made the H/tilde-H convention explicit. Independently, status (d) literally asserted that no model is integrable and no compact torus fibre exists; repaired that nonassertion wording and the analogous scope sentence. Clarified that smoothing other integrals cannot make F1=H smooth. The smooth involution/independence datum and all regular-value definitions are preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "cex-cm14-harmonic-model-critical-fibre",
    "model": "gpt-6-luna",
    "context_sha256": "58ce3b60cb170cc2cfcf96a2342805a8713fe716b1b07a8c961441ae5f6c54b1",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The original Cartesian R2 witness was not a CM12 Cartesian force presentation (which has dimension 6N). Declared Qamb=R3, mass mI3, Uamb(y)=k y1²/2, d=0 and X(x)=(x,0,0); DX is injective, G=m, and CM12 clause 2 gives exactly the scalar Hamiltonian on its generalized-coordinate phase plane. Scalar harmonic solutions reconstruct ambient solutions because both transverse equations vanish. {H,H}=0 and dH≠0 off the origin give the smooth integrable datum; its zero fibre is one point and every positive fibre is an ellipse.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "cex-cm14-free-particle-noncompact-fibre",
    "model": "gpt-6-luna",
    "context_sha256": "e08021f86dd87efa46c9261ca0f57e25291d1a85845540afc8d4a734b9cbea78",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The action formula is mathematically valid, but the physical parameters were not assigned units. Specified fixed SI numerical coordinates with [a]=time and [b]=[c]=length, making a p*/m+b e1+c e2 a position displacement. Its numerical translation matrix has determinant rho/m>0; the action is transitive with trivial stabilizer and Hamiltonian time flow has no nonzero period. The full-rank momentum Jacobian and unbounded continuous x1 still prove regularity and noncompactness.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "ex-cm14-harmonic-oscillator-hamilton-jacobi-check",
    "model": "gpt-6-luna",
    "context_sha256": "b02ca7b4b40e259ebb49efd8501ce8b3523011bef0c9292907618a92f4cf74d8",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "L5 and Verification 3.1 cited the action-angle existence theorem without its fibre hypotheses. Replaced that load-bearing invocation by the canonical-field definition: the displayed map has Jacobian one, H=I/T and contraction with dtheta∧dI gives theta'=1/T and I'=0. Also supplied the missing physical-domain identification via the explicit ambient potential and immersion X(x)=(x,0,0), whose metric G=m and substituted Hamiltonian match the scalar model. S derivatives, HJ cancellation, Jacobi constants, normalization integral and radian rescaling remain explicit and sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "ex-cm14-kepler-radial-action-check",
    "model": "gpt-6-luna",
    "context_sha256": "c9c410cd6a5ade05c0d01f5744cb2b37be724c52869a356831b9cfca167b0e62",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The initial arbitrary-interval motion did not support global polar or period statements. Named its unique global relative central-force extension from the exact Kepler-period supplier and used that extension throughout the period claims, retaining the original time-window restriction. Repaired Verification 3.2 by selecting successive periastron/apastron times through the global increasing polar lift, integrating inverse time only on interior compact radial intervals, and taking endpoint limits using the supplied convergent improper quadrature. The periastron-return argument proves least radial period T for 0<e<1; circular and J=0 exclusions remain intact.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "rem-cm14-scope-of-hamilton-jacobi-and-integrability",
    "model": "gpt-6-luna",
    "context_sha256": "26979f29d3fc01e1f344eea5b3c846acad30753a23ebb3d39245735bc5145b85",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The rejected countable-choice claim is correct: the current published stabilizer-lattice lemma explicitly assumes ACω through compact-vector-field completeness, and the regular-tori theorem's Statement, A1 and Proof 3.1 carry that premise. The contradictory 'only in step 4.1' sentence belongs to the draft mathematical scope remark and omits inherited compact-flow/lattice uses; it cannot override the exact suppliers. The physical scope remark preserves locality, fibre hypotheses, monodromy obstruction, period-one/radian conversion and conditional drift qualifications. No item edit is needed for this rejection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_owner_review",
    "id": "prop-regular-common-level-sets-are-lagrangian-submanifolds",
    "path": "items/prop-regular-common-level-sets-are-lagrangian-submanifolds.md",
    "scope": "published",
    "route": "owner/mathematics-maintenance",
    "locator": "Proof 1.1",
    "snippet": "dF_j(X_{F_i})=\\omega(X_{F_j},X_{F_i})=-\\{F_j,F_i\\}=0",
    "affected_use": "The published bracket definition is {F,G}=omega(XF,XG)=dF(XG), so the displayed minus sign is incorrect; involution still gives zero and the tangent-space conclusion remains valid.",
    "invalidated_claim": "The published bracket definition is {F,G}=omega(XF,XG)=dF(XG), so the displayed minus sign is incorrect; involution still gives zero and the tangent-space conclusion remains valid.",
    "minimality": "Replace -{Fj,Fi} by {Fj,Fi} in that identity; no Statement change is needed.",
    "defect_type": "presentation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_owner_review",
    "id": "thm-liouville-arnold-action-angle-theorem",
    "path": "items/thm-liouville-arnold-action-angle-theorem.md",
    "scope": "published",
    "route": "owner/mathematics-maintenance",
    "locator": "Proof 5.2 and F4",
    "snippet": "Its pullback $\\tau=\\sigma^*\\omega$ is closed. On the ball [F4] gives $\\tau=d\\alpha$.",
    "affected_use": "F4 cites the star-shaped-domain theorem for a closed C1 vector field, which supplies a scalar potential for a one-form, not a one-form primitive for this closed two-form. The locally repaired theorem supplies the missing two-form radial primitive; the published proof still contains the unmet exact supplier use.",
    "invalidated_claim": "F4 cites the star-shaped-domain theorem for a closed C1 vector field, which supplies a scalar potential for a one-form, not a one-form primitive for this closed two-form. The locally repaired theorem supplies the missing two-form radial primitive; the published proof still contains the unmet exact supplier use.",
    "minimality": "Use a genuine closed-two-form primitive at Proof 5.2; a proof-only maintenance repair can preserve the theorem Statement. Imported mathematical snapshots and originals remain read-only in this dispatch.",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "def-cm-one-dimensional-action-variable",
    "path": "items/def-cm-one-dimensional-action-variable.md",
    "scope": "frontier",
    "route": "frontier-owner",
    "locator": "Definition, Reading of the notation",
    "snippet": "the integral is twice the momentum phase-space area",
    "affected_use": "For p+=sqrt(2m(E-U(q))), the enclosed phase-plane area is 2 integral p+ dq; the displayed unnormalized integral is half the area and Ja is area/(2pi). The actual defining formula is sound.",
    "invalidated_claim": "For p+=sqrt(2m(E-U(q))), the enclosed phase-plane area is 2 integral p+ dq; the displayed unnormalized integral is half the area and Ja is area/(2pi). The actual defining formula is sound.",
    "minimality": "Correct only the prose normalization; preserve Ja(E)=(1/pi) integral p+ dq.",
    "defect_type": "presentation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "rem-cm-scope-of-complete-integrability-and-action-angle",
    "path": "items/rem-cm-scope-of-complete-integrability-and-action-angle.md",
    "scope": "frontier",
    "route": "frontier-owner",
    "locator": "Remarks, Hypotheses actually used",
    "snippet": "AC_omega enters only in the counterexample sequence of step 4.1",
    "affected_use": "The exact stabilizer-lattice Statement carries ACω through compact-field completeness. The repaired action-angle proof uses those suppliers in F3-F4 and Proof 1.1, as well as the countable counterexample sequence in 4.1. The word only omits inherited uses.",
    "invalidated_claim": "The exact stabilizer-lattice Statement carries ACω through compact-field completeness. The repaired action-angle proof uses those suppliers in F3-F4 and Proof 1.1, as well as the countable counterexample sequence in 4.1. The word only omits inherited uses.",
    "minimality": "Replace the exclusive choice-use description with inherited compact-flow/lattice premises plus the local counterexample sequence.",
    "defect_type": "presentation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "pthm-cm14-action-angle",
    "path": "items/pthm-cm14-action-angle.md",
    "scope": "frontier",
    "route": "frontier-owner",
    "locator": "Statement 4, F6 and Proof 2.1",
    "snippet": "the momentum-phase curves of the model's motions on $U_0$",
    "affected_use": "This identification fails for arbitrary lower-dimensional immersions. With a declared length L>0, X(q)=(q,q²/L,0), ambient U(y)=k y1²/2, d=0, G=m(1+4q²/L²), the substituted Hamiltonian P²/(2G)+kq²/2 has compact connected regular positive-energy fibres and proper positive-energy bands. At q=0,P≠0 its reconstructed second ambient component has acceleration 2(P/m)²/L although the ambient second force component vanishes. Cartesian model motions and generalized substituted Lagrange solutions must be distinguished.",
    "invalidated_claim": "This identification fails for arbitrary lower-dimensional immersions. With a declared length L>0, X(q)=(q,q²/L,0), ambient U(y)=k y1²/2, d=0, G=m(1+4q²/L²), the substituted Hamiltonian P²/(2G)+kq²/2 has compact connected regular positive-energy fibres and proper positive-energy bands. At q=0,P≠0 its reconstructed second ambient component has acceleration 2(P/m)²/L although the ambient second force component vanishes. Cartesian model motions and generalized substituted Lagrange solutions must be distinguished.",
    "minimality": "Qualify only the model-reading clauses by chart type and any additional ideal-constraint premise; retain the structural action-angle and linear Hamiltonian conclusions.",
    "defect_type": "logic",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "id": "ex-cm14-oscillator-caustic-check",
    "path": "items/ex-cm14-oscillator-caustic-check.md",
    "scope": "frontier",
    "route": "frontier-owner",
    "locator": "Given, L1, L3 and Verification 1.1-2.1",
    "snippet": "a complete integral of the model's Hamilton-Jacobi equation at every point of each time strip",
    "affected_use": "The item still invokes CM12-CM14 scalar physical interfaces on a Cartesian phase plane without a declared ambient force presentation or generalized-coordinate immersion. Its displayed HJ cancellation and refocusing formulas are correct, but the physical datum membership is unsupported.",
    "invalidated_claim": "The item still invokes CM12-CM14 scalar physical interfaces on a Cartesian phase plane without a declared ambient force presentation or generalized-coordinate immersion. Its displayed HJ cancellation and refocusing formulas are correct, but the physical datum membership is unsupported.",
    "minimality": "Declare the same straight-line immersion X(x)=(x,0,0), ambient U=k y1²/2 and G=m used by the repaired oscillator witness; preserve all calculations.",
    "defect_type": "dependency_citation",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "page": "cm13-symplectic-geometry-and-canonical-methods",
    "path": "library/non-relativistic-classical-mechanics/cm13-symplectic-geometry-and-canonical-methods.md",
    "route": "owner/page-maintenance",
    "locator": "lines 58-61",
    "snippet": "identifies the integral curves of $X_{H_t}$ with the momentum-phase curves of the model's motions, in every chart",
    "affected_use": "The page summary identifies all generalized immersion Hamiltonian curves with ambient model motions, whereas its supplier clause 2 gives only substituted Lagrange equations.",
    "invalidated_claim": "Ambient-motion identification at arbitrary lower-dimensional immersion scope is false; the length-scaled parabolic immersion witness recorded for pthm-cm14-action-angle has nonzero transverse acceleration with zero ambient transverse force.",
    "minimality": "Qualify only the summary by Cartesian versus generalized substituted-equation scope; this page is outside the assigned lane and was left untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-post-cm15-impulse",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "post-cm15-impulse",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The global C2 motion requirement forces continuous velocities and J=0. Replaced it with an explicit continuous, piecewise-C2 impulse motion whose restrictions solve the regular equations; verified finite one-sided force limits and applied the jump lemma componentwise to derive the pairing, instead of reversing the implication of the continuous-time-force theorem.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "8b0e408394d4f5ae42b3e52b0d019275106bb660793183aabe80d2e2c97d23a7",
      "uncertain": false,
      "source_urls": [
        "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution",
        "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.05%3A_Particle_Collisions_in_One_Dimension",
        "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
      ],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-pthm-cm15-control-volume-balance",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "pthm-cm15-control-volume-balance",
      "severity": "nonfatal",
      "defect_type": "other",
      "disposition": "fixed",
      "finding": "The hypotheses specify C2 motions, C1 density, velocity and stress and continuous body force, while the regularity supplier reserves smooth for C-infinity. Renamed this adopted model finite-regularity throughout, preserving all hypotheses, endpoint localization, relative boundary flux signs, and flux-average deductions; clause (iii) of the repaired postulate is unchanged.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "daaa722122d5c4fd4333889a8e54909c31d5425c9e75bf984eddf7c864325999",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-pthm-cm15-impact-balance",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "pthm-cm15-impact-balance",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The original motion premise inherited the global C2 contradiction of the postulate. Specified an impulse motion and derived momentum, restitution velocities and energy directly from finite jumps and the kinetic split, since the cited pairing theorem requires continuous time forces not guaranteed here. Corrected the false assertion that a nonzero impulse makes the regular force map discontinuous; a zero regular force map is compatible with singular forcing.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "fddf1f1dd141140fca02c25eb269d76d0daa6c98bb32d5aff709e2459afcaaa2",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-cex-cm15-momentum-alone-does-not-fix-the-impact",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "cex-cm15-momentum-alone-does-not-fix-the-impact",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The original L1 equated endpoint jump compatibility with full model admissibility and supplied no off-impact trajectories. Constructed explicit continuous piecewise-affine runs on the same interval and full configuration domain, with identical incoming curves and zero regular forces. Verified all trajectory, limit, approach and jump conditions, with impulses -6n and -12n and restitution e=0 and e=1; the two outgoing histories and energies differ.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "07aef467715c6b9fa73a5cb28f9e5a7177cb6710522eecc5f00cbf90588e49ef",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-ex-cm15-control-volume-check",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "ex-cm15-control-volume-check",
      "severity": "nonfatal",
      "defect_type": "other",
      "disposition": "fixed",
      "finding": "The stated alpha-not-zero hypothesis includes negative alpha, for which the material scale exp(alpha t) contracts. Replaced the expansion label with uniform scaling throughout and explicitly stated both signs. Checked the mass cancellation, pressure gradient, fixed and material fluxes and conditional elbow resultant; none of those computations requires alpha to be positive.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "3443051539907173f2e2e75c504375010813f9d5ed2b17fc057813f458cf46d3",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-ex-cm15-impact-check",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "ex-cm15-impact-check",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The assertion of centre-of-mass rest throughout does not follow from V-minus=V-plus=0; the postulate leaves regular external forces unrestricted. Replaced it with the exact one-sided statement at the impact, retaining all elastic, half-restitution and sticking velocities, impulses and energies. Momentum continuity controls the jump, and supplies no zero acceleration away from contact.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "b6c774cefb84d2eb9dfdd4015ffeff77c3bb307873babdd323d85eb8cac73e64",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-ex-cm15-rocket-check",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "ex-cm15-rocket-check",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The framework gives t duration dimension, so subtracting it from 3 in the mass and logarithm violates its equal-dimension sum rule. Defined m=m0-r0 t with m0=3 kg and r0=1 kg/s, q=t/(1 s), v=ue log(m0/m)n, and retained unit factors in differentiation and momentum balance. Checked positive mass, 2 N thrust, nonzero momentum rate at 2 s and the 1 s values; corrected final momentum rounding from exact 4 log(3/2).",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "908501e67cc63187273316f94f7c9df3c8695114d21a95ffae6f743ff5926469",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-pthm-cm15-central-scattering",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "pthm-cm15-central-scattering",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "fixed",
      "finding": "The original clause 3 took infinite-time polar limits of r on an arbitrary interval I, which may be bounded. Defined the polar data for the unique global extension r-bar from clause 1 and explicitly applied the polar-reduction supplier on R in proof 4.1. Checked compact Cartesian continuation away from collision, both radial branches, endpoint quadrature convergence, free tails, wrapped angle relation and cutoff branch area. Clarified C1 branch regularity in the physical scope without altering hypotheses.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "139cbe3a8f24e9321006e1f3d64261c6b7c0f1ba04dd70f58d66126019c691ef",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-ex-cm15-rutherford-cutoff-check",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "ex-cm15-rutherford-cutoff-check",
      "severity": "fatal",
      "defect_type": "dependency_citation",
      "disposition": "fixed",
      "finding": "The former L2 attributed cot(x) asymptotic to suppliers that do not establish its limit. Added exact published differentiation, continuity and function-limit suppliers, and proved sin(x)/x tends to 1 and x cot(x) tends to 1 locally in step 3.2, yielding the unchanged 16 pi times 10^-24 angular-growth coefficient. Derived the special-angle values and backward endpoint limit from addition, positivity and Pythagorean identities in step 1.2; retained all declared data and qualifications.",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "context_sha256": "853ce60b5ed21b1917f429546c6fedfc2124fa6304f9703973d2d7f38fd441f3",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-outside-def-cm15-cross-section",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "def-cm15-cross-section",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "open",
      "location": "Definition (iv), forward-divergence bullet",
      "source_snippet": "only windows of finite cross-section give finite model rates",
      "affected_use": "The statement confuses ideal and cutoff cross-sections. For the Rutherford branch and Y=(0,pi), ideal sigma(Y)=infinity but sigma-cutoff(Y)=pi b-max^2 and the predicted cutoff rate Phi pi b-max^2 is finite. The earlier definition in the same clause already uses the cutoff area.",
      "invalidated_claim": "only windows of finite cross-section give finite model rates",
      "minimality": "Qualify the bullet explicitly by the incident cutoff/preparation; do not alter the existing cutoff measure or ideal divergent measure.",
      "route": "frontier owner; outside this rejected-item assignment",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-outside-pthm-cm15-rutherford-model",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "pthm-cm15-rutherford-model",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "open",
      "location": "Remarks, forward-divergence bullet",
      "source_snippet": "the small-angle density grows like theta^{-3}",
      "affected_use": "The declared d-sigma/d-Omega=(kappa/(4E))^2 csc^4(theta/2) is asymptotic to (kappa/E)^2 theta^{-4}. Multiplication by the full-azimuth solid-angle factor 2 pi sin(theta) gives an angular density of order theta^{-3}. The core cross-section and divergence deduction remain valid.",
      "invalidated_claim": "the small-angle density grows like theta^{-3}",
      "minimality": "Specify theta^{-4} for differential density or identify 2 pi sin(theta) d-sigma/d-Omega as the theta^{-3} quantity.",
      "route": "frontier owner; outside this rejected-item assignment",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-outside-cex-cm15-deflection-need-not-decrease",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "cex-cm15-deflection-need-not-decrease",
      "severity": "fatal",
      "defect_type": "logic",
      "disposition": "open",
      "location": "Remarks, grazing-discontinuity bullet",
      "source_snippet": "the chord length shrinks to zero",
      "affected_use": "Its own L2 gives interior chord length 2a cos(beta), with beta=arcsin(2b/(3a)); the b-up-to-a limit is 2a sqrt(5)/3, which is positive. The separately adopted free grazing path has no interior chord. The zero-potential strict-decrease refutation remains sound.",
      "invalidated_claim": "the chord length shrinks to zero",
      "minimality": "Replace the zero-length limit claim with the positive branch limit, distinguishing it from the separately adopted free grazing continuation.",
      "route": "frontier owner; outside this rejected-item assignment",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-initial-r1-u31-page-summaries",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "31",
      "subject": "cm15-scattering-and-impulse-model-boundaries-examples",
      "disposition": "open",
      "severity": "nonfatal",
      "location": "Owning A/B page summaries",
      "finding": "The examples page says elastic velocities are exchanged, but (3,-1) with masses (2,6) produces (-3,1), reversing each velocity. Exchanging gives momentum 16 rather than 0 kg m/s. The page also retains 3-t kg and expansion labels; the A page retains the smooth open-flow label. Exact affected paths and minimal replacements are in page_reviews.",
      "route": "owning page metadata maintenance",
      "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u31.json",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "All direct item consumers inventoried here are draft items in the frozen frontier. No defective published carrier was identified in the consulted calculus, impulse, kinetic-splitting, ODE or continuum supplier interfaces. The external MIT source terminology error is recorded in the postulate source caption and nonproof contract; it is not misclassified as a published library-item repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm16-flow-equilibria-and-invariant-sets",
    "outcome": "confirmed_fatal",
    "reason": "Confirmed missing differentiability: the admissible force component |x_1| has no state derivative at the zero equilibrium. Clause (vi)(b) now requires G to be C1 near the equilibrium; differentiating Dh(z)G(z) then kills the D2h term because G(z*)=0 and gives similarity. Also made clause (iv) orbital distance explicitly the Euclidean norm of SI numerical coordinates X/(1 m), V/(1 m/s), so no unlike physical dimensions are summed. Restricted maximality follows from uniqueness and the connected component in the open restriction domain; invariant sets retain their complete-time quantifiers. No claim of independent review of the repair."
  },
  {
    "ledger": "defect",
    "id": "def-cm16-stability-and-hyperbolicity-concepts",
    "outcome": "confirmed_nonfatal",
    "reason": "The original formulas have a valid numerical-coordinate reading under def-cm01-units (c), but the item did not specify the scales when using its force and mechanical chart models together. Added the exact SI numerical chart for force models and component reference quantities a_j and duration t_ref for mechanical charts; all state and tangent norms now sum dimensionless numbers and q prime equals v. Positive diagonal rescaling bounds prove equivalence of the predicates. Checked maximal-solution and forward-completeness quantifiers, C1 requirements and map derivative predicates; corrected the title that promised an undefined periodic-orbit linear predicate. The predicates and conditional mechanical derivative are preserved.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "defect",
    "id": "def-cm16-stroboscopic-and-poincare-maps",
    "outcome": "confirmed_fatal",
    "reason": "Confirmed inaccurate MIT locator: section 7.1.4 pp.149-152 contains periodic stroboscopic sampling; section 7.2 is Bifurcations. Corrected the source title without attributing the local invertibility theorem to that discussion. Independently confirmed and repaired the digest type defect: Phi_P takes states, so Omega_P must be {z in S0:(P,z) in Omega}, not pairs. Explicitly identified the supplier time interval J. Checked the return proposition hypotheses at both crossings, positive-time branch and no-earlier-hit condition, and the gluing of a fixed stroboscopic state by time periodicity and uniqueness. These logical repairs retain the intended maps and all completeness qualifications.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json",
    "defect_type": "logic"
  },
  {
    "ledger": "defect",
    "id": "def-cm16-chaos-list-for-model-maps",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed source-fidelity defect: SICM section 4.3 discusses a homoclinic tangle and a limited lobe-divergence caution; section 7.4 is Nonlinear Resonance. Replaced the unsupported mixing attribution with qualitative motivation and located the numerical-experiments versus theorem-proof qualification in the Chapter 3 opening epigraph. The exact four predicates are stated completely in the item and match def-cm-topologically-mixing-dense-periodic-and-sensitive-maps; forward admissibility makes every iterate a self-map of X. Bi-Lipschitz linear rescaling preserves the three topological clauses and rescales the sensitivity constant. The Definition and physical_scope are byte-for-byte unchanged; this citation repair has no new interface propagation.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-energy-stability-and-instability",
    "outcome": "confirmed_nonfatal",
    "reason": "The rejected strict-concavity claim is confined to the title and clause label: the formal hypothesis and proof require K negative definite. Since -q^4 is strictly concave with zero Hessian at zero, corrected those labels while preserving every formal conclusion and hypothesis. Clarified that the displayed spectral rates use S=M0^(-1/2) K M0^(-1/2), not K, and specified numerical chart and energy/time references. Checked the congruence argument for a negative eigenvalue, the generalized eigenvector construction Kw=lambda M0w, hyperbolicity under negative definiteness, and conservation plus energy continuity excluding attraction. No nonlinear conclusion is added for a mixed or degenerate Hessian.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-hyperbolic-linearization",
    "outcome": "confirmed_nonfatal",
    "reason": "The real-coordinate estimates are logically valid, but their physical interpretation left the numerical scales implicit and assigned units directly to a norm of a mixed physical state. Required the exact SI numerical chart X/(1 m), V/(1 m/s) and t=t_phys/(1 s); now every state norm and exponential argument is dimensionless and physical rates are c/t_ref and gamma/t_ref. The field and derivative are numerical in the same chart, so the dichotomy theorem and translated stable/saddle theorems apply verbatim. Checked C1 regularity, equilibrium translation, maximal-lifetime preservation, all three spectral hypotheses, and chart similarity; the mathematical conclusions and scope remain intact.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-variational-equation-and-linearization",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed incomplete unit convention: a norm combining dimensioned q and v has no common state unit unless numerical reference scales are fixed. Required q=Q/a_j, v=V/(a_j/t_ref), t=t_phys/t_ref, with all fields, balls and induced matrix norms numerical in that chart. Restored physical component errors using a_j and a_j/t_ref, and rates using 1/t_ref. Checked the exact trapping rho<R-M_R T, C1 regularity, translation of the quadratic remainder bound and constant-metric block elimination. Applying smooth dependence on a slightly larger radius rho prime also supplies Y_a at boundary initial states of the smaller closed ball. The finite-time estimates are unchanged; the owning derivation metadata refresh is pending its short shared-write lock.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "defect",
    "id": "ex-cm16-isotropic-oscillator-return-map-check",
    "outcome": "confirmed_fatal",
    "reason": "Confirmed the MIT locator and unsupported warning: section 7.1.4 pp.149-152 supplies periodic stroboscopic sampling, while failure of mixing and sensitivity is established by the local involution calculation. Corrected the citation. Also repaired the same unit mismatch as in the assigned growth example: declared physical m0=1 kg, ell0=1 m, t0=1 s, force -(m0/t0^2)X, energy scale m0 ell0^2/t0^2, and invertible normalization q=X/ell0, v=t0 V/ell0, t=T/t0. All rotation, return, mixing and sensitivity calculations remain unchanged in numerical coordinates; physical periods multiply by t0. Explicitly separated the constant zero motion from nonconstant periodic motions. Checked both transversal crossings and the intermediate pi crossing outside the positive-velocity section closure; new chain-rule dependency supports time normalization. Owning metadata updates pending shared lock.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json",
    "defect_type": "other"
  },
  {
    "ledger": "defect",
    "id": "ex-cm16-linearization-and-growth-checks",
    "outcome": "confirmed_fatal",
    "reason": "Confirmed a missing physical normalization: the original dimensionless forces plus or minus q were called force maps of a postulate requiring newtons and metre-valued positions, with no constants restoring those types. Declared physical forces F_i,phys=plus or minus (m0/t0^2)X with m0=1 kg, ell0=1 m and t0=1 s, physical potentials, force scale m0 ell0/t0^2, energy scale m0 ell0^2/t0^2 and exact state/time normalization. The chain rule gives q prime=v and q double prime=plus or minus q; uniqueness transfers from physical motions. Orthogonal harmonic derivatives and repulsive eigendirections preserve every displayed numerical rate, with physical rates divided by t0. Defined the basis labels explicitly on coordinate indices 0,1,2. Checked completeness, nonzero tangent images, norm ratios and finite exponent limits; no empirical or chaos assertion results.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u32.json"
  },
  {
    "ledger": "published-consumer",
    "disposition": "no_published_consumer_update",
    "reason": "Exhaustive current items/library dependency and wikilink scan found 17 direct item consumers for the changed interfaces; every one is a draft in the frozen frontier. No published consumer was modified or adjudicated; outside maintenance receives no changed-interface event from this unit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm16-stroboscopic-and-poincare-maps",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Independent digest finding, distinct from the assigned citation tuple: the autonomous Phi_P domain was written as time-state pairs though Phi_P takes states. Corrected Definition ii to {z in S0:(P,z) in Omega}; all direct users were examined.",
    "disposition": "repaired",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm16-isotropic-oscillator-return-map-check",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "reason": "Independent finding, distinct from the assigned citation tuple: the original dimensionless force was identified with a SI-valued force map without a scaling law. Supplied physical force, mass, potential and invertible state/time normalization, preserving the numerical example.",
    "disposition": "repaired",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "rem-cm16-scope-of-stability-and-chaos",
    "path": "items/rem-cm16-scope-of-stability-and-chaos.md",
    "locator": "Scope paragraph 2",
    "affected_use": "nonlinear instability from a strictly concave potential",
    "outcome": "confirmed_nonfatal",
    "reason": "The supplier requires negative definite Hessian; -q^4 is strictly concave with U second derivative zero at zero. Replace only the quoted phrase with nonlinear instability from a negative definite potential Hessian. Add C1 field qualification to the paragraph 3 spectrum statement.",
    "disposition": "frontier_owner_review_required",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-recurrence-for-finite-volume-models",
    "path": "items/pthm-cm16-recurrence-for-finite-volume-models.md",
    "locator": "Proof 1.1",
    "affected_use": "Set $h:=\\min_i h_i>0$.",
    "outcome": "confirmed_nonfatal",
    "reason": "The Statement permits A empty; closure(A) has an empty finite cover and there is no minimum of its empty time family. Separate the empty case, whose volume and recurrence conclusions are vacuous, before forming the finite cover.",
    "disposition": "frontier_owner_review_required",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-recurrence-for-finite-volume-models",
    "path": "items/pthm-cm16-recurrence-for-finite-volume-models.md",
    "locator": "Fact L3",
    "affected_use": "thm-cm-smooth-dependence-and-the-variational-equation",
    "outcome": "confirmed_nonfatal",
    "reason": "L3 attributes openness and C1 regularity of the entire maximal flow domain to a supplier whose Statement only gives quantitative cylinder regularity. Cite cor-cm-flow-domain-open-and-flow-is-c1 for the global-domain assertion, or supply its finite continuation argument.",
    "disposition": "frontier_owner_review_required",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm16-separatrix-splitting-and-horseshoe",
    "path": "items/pthm-cm16-separatrix-splitting-and-horseshoe.md",
    "locator": "Statement i and Proof 1.1",
    "affected_use": "invariant axis",
    "outcome": "confirmed_nonfatal",
    "reason": "The full polynomial axial plane is for a nonautonomous model; the flow definition invariant predicate is autonomous and includes complete existence for all its points. The plane is preserved while solutions exist by zero transverse equations and uniqueness, while the compact coded set has separate complete existence. State that preservation meaning explicitly without claiming completeness of the entire plane.",
    "disposition": "frontier_owner_review_required",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm16-pulse-horseshoe-data-check",
    "path": "items/ex-cm16-pulse-horseshoe-data-check.md",
    "locator": "Title and physical_scope",
    "affected_use": "the fixed points are 1 plus or minus sqrt(101)",
    "outcome": "confirmed_nonfatal",
    "reason": "The Example defines r plus/minus for the limiting quadratic recurrence, whereas the title and physical scope omit that limiting-map qualification. The positive-width theorem provides perturbed fixed points. Add limiting quadratic-map to the title/scope claim; no numerical computation needs changing.",
    "disposition": "frontier_owner_review_required",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm02-newtonian-flow",
    "path": "items/def-cm02-newtonian-flow.md",
    "locator": "Definition c",
    "disposition": "digest_alert_already_corrected_in_current_supplier",
    "reason": "The rejection-blind digest reported a state-curve codomain mismatch. The actual supplier read in this session already types z:J to Q times R^(3N) and uses the graph condition (t,z(t)) in D in both directions. This supplier is a draft, not a published item; no further repair by this unit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm17-continuum-body-and-units",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "evidence": "The original D_t and field domains were undefined. Defined a conditional motion using def-cm-continuum-motion, its open Eulerian domain and C1 velocity; explicitly defined D_t f=partial_t f+D_x f u, continuous acceleration and the scalar/vector/matrix slots with unchanged dimensions. No dynamics or physical existence is adopted.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-cm17-chain-limit-of-the-string-model",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "evidence": "The supplier explicitly reads closed-interval derivatives as restrictions from an open neighborhood; the original consuming statement omitted that convention. Added it verbatim in mathematical content, including T_max=0 and restricted state uniqueness. The energy and interpolation estimates and mass/stiffness scaling are unchanged; step 2.1 now checks the complete supplier hypotheses.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm17-traction-and-stress",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "The defining formulas already distinguished b from rho b, but the label body-force density incorrectly named the acceleration-valued b. Renamed b as body force per unit mass and defined the volume density rho b with its domain and force/volume units. Traction, stress representation and all balance formulas remain unchanged.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm17-spring-chain-limit-numbers",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "Remark 2 mislabeled the frequency difference as the exact nodal error. Direct evaluation gives omega_a=0.9998355147105485 and max_j |e_j(1)|/A=|cos(omega_a)-cos(1)|=0.0001384022888267, attained at j=25,75; |omega_a-1|=0.0001644852894515 is an upper bound. Corrected both labels and rounding, and supplied the actual FTC second-part, integrability, mean-value and addition-formula prerequisites of F4/step 4.1 without changing any estimate.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "post-cm17-fluid-constitutive",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "evidence": "Clause (c) originally covered the variable-density barotropic branch as well as incompressible branches. With spatially varying rho, grad(P_m)/(rho U_*^2)=grad Pi+Pi grad log rho, so its displayed incompressible system is invalid for branch (b). Restricted only this reduction and gauge to constant-density branches (a)/(a0), retaining branch (b) and all previously scoped periodic results.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm17-uniform-expansion-transport-check",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "evidence": "The original density was declared only on the swept region although clause 2 and step 3.1 evaluated it on I x R3. Declared the same positive smooth formula globally, preserving the global identity by direct differentiation. Corrected physical_scope to arbitrary cube side and constant reference density with evolving spatial density. The Jacobian cancellation also gives rho_0 vol(Bprime) for every material subregion; all transport integrals and material identities remain exact.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-cm17-channel-flow-and-no-slip-check",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "Consulted Abeyaratne printed pp. 356-357, 360 and 369: Problem 12.9 is circular-pipe generalized-Newtonian flow and 12.14 is Kelvin circulation. Replaced the false plane-channel attribution with Sec.12.2.1/Eqs.12.57-12.60, and qualified Likharev Sec.8.5 as plane Couette and pipe-flow background. The profiles, flux and curl are checked directly. Repaired the endpoint gap by the mean value theorem on interior compact intervals, then continuous extension of w=cy+d to the walls; wprime(0) is not assumed.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [
      "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf",
      "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "defect",
    "id": "rem-cm17-boundary-regularity-and-scope",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "evidence": "The final scope paragraph incorrectly attributed every page result to momentum and continuum constitutive postulates. It now names each deduction's own assumptions and explicitly separates the one-dimensional string model with positive tension/linear density and small transverse displacement from the three-dimensional balances. The linked string theorem already states these assumptions. Also checked the cited dated CMI announcement as announcement/evaluation status only; no global periodic conclusion is inferred.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [
      "https://www.claymath.org/news/navier-stokes-announcement/"
    ],
    "familiar": false
  },
  {
    "ledger": "defect",
    "id": "ex-cm17-periodic-shear-exact-solution-check",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "evidence": "F3 used the integral-of-a-derivative identity while citing only the FTC first-part interface. Replaced it by the actual FTC second-part and continuous-implies-integrable suppliers, checking C1 periodic representatives and endpoint derivatives explicitly. For each fixed x2,x3, integrate partial_1 p=nu vdoubleprime(x2) over [0,1]; pressure periodicity and nu>0 force vdoubleprime=0, and two derivative-integral applications plus periodicity force v constant. Constant profiles conversely solve the equation. Euler and viscous sinusoidal checks are unchanged.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "post-cm17-linear-elastic-constitutive",
    "status": "owner-repair-required",
    "route": "frontier-owner",
    "affected_use": "Postulate (iv) identifies u=partial_t xi and D_t u=partial_t^2 xi and identifies reference density rho_0 with spatial density in the exact motion model.",
    "invalidated_claim": "Postulate (iv) identifies u=partial_t xi and D_t u=partial_t^2 xi and identifies reference density rho_0 with spatial density in the exact motion model.",
    "minimality": "For chi=X+xi, u(t,chi(t,X))=partial_t xi(t,X), not an unqualified equality of spatial and reference fields. With constant spatial density, exact continuity forces div_x u=0. Adopt an explicit reference-coordinate linearized balance model and specify the exact equations it replaces, preserving the linear PDE.",
    "evidence": "For chi=X+xi, u(t,chi(t,X))=partial_t xi(t,X), not an unqualified equality of spatial and reference fields. With constant spatial density, exact continuity forces div_x u=0. Adopt an explicit reference-coordinate linearized balance model and specify the exact equations it replaces, preserving the linear PDE.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm17-linear-elastic-equation-of-motion",
    "status": "owner-repair-required",
    "route": "frontier-owner",
    "affected_use": "Statement retains exact mass balance while claiming equivalence of current-region momentum with reference-coordinate equation (E); step 1.2 replaces spatial derivatives by reference derivatives.",
    "invalidated_claim": "Statement retains exact mass balance while claiming equivalence of current-region momentum with reference-coordinate equation (E); step 1.2 replaces spatial derivatives by reference derivatives.",
    "minimality": "For chi=X+xi, a pulled-back field has spatial derivative D_X times (I+D_X xi)^(-1). The displayed linear stress-divergence algebra is valid for a separately adopted reference PDE, whose model basis needs repair.",
    "evidence": "For chi=X+xi, a pulled-back field has spatial derivative D_X times (I+D_X xi)^(-1). The displayed linear stress-divergence algebra is valid for a separately adopted reference PDE, whose model basis needs repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "ex-cm17-elastic-plane-wave-and-energy-check",
    "status": "owner-repair-required",
    "route": "frontier-owner",
    "affected_use": "Example permits arbitrary nonzero A and kappa for xi=(A cos(kappa x_1-omega t),0,0) in the exact-motion branch.",
    "invalidated_claim": "Example permits arbitrary nonzero A and kappa for xi=(A cos(kappa x_1-omega t),0,0) in the exact-motion branch.",
    "minimality": "For chi=X+xi, J=1-A kappa sin(kappa X_1-omega t), which can be nonpositive for |A kappa|>=1. Preserve the linear-PDE computation by distinguishing it from an admissible finite motion and checking the inherited balance-model repair.",
    "evidence": "For chi=X+xi, J=1-A kappa sin(kappa X_1-omega t), which can be nonpositive for |A kappa|>=1. Preserve the linear-PDE computation by distinguishing it from an admissible finite motion and checking the inherited balance-model repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm17-transport-and-material-derivative",
    "status": "owner-repair-required",
    "route": "frontier-owner",
    "affected_use": "Remarks refer to a companion-page counterexample exhibiting a motion with vanishing Jacobian.",
    "invalidated_claim": "Remarks refer to a companion-page counterexample exhibiting a motion with vanishing Jacobian.",
    "minimality": "The sole companion counterexample is cex-cm17-traction-symmetry-without-stress-matrix about t(n)=|n_1|n, not motion. Remove or correct this stale reference only.",
    "evidence": "The sole companion counterexample is cex-cm17-traction-symmetry-without-stress-matrix about t(n)=|n_1|n, not motion. Remove or correct this stale reference only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "thm-cm-spring-chain-dispersion-relation",
    "status": "owner-repair-required",
    "route": "frontier-owner",
    "affected_use": "Statement (b) calls its displayed bound an explicit fourth-order error in spacing.",
    "invalidated_claim": "Statement (b) calls its displayed bound an explicit fourth-order error in spacing.",
    "minimality": "The bound c^2 kappa^4 a^2/12 is second order in a for fixed kappa. This assigned physical consumer correctly preserves second-order wording. Supplier is draft, outside this lane; correction belongs to its frontier owner.",
    "evidence": "The bound c^2 kappa^4 a^2/12 is second order in a for fixed kappa. This assigned physical consumer correctly preserves second-order wording. Supplier is draft, outside this lane; correction belongs to its frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "published-consumer",
    "status": "no-published-consumer-change",
    "reason": "All direct item consumers of the changed interfaces in this lane are draft frontier items. No published item was edited or adjudicated; exact affected uses appear in downstream_reviews.",
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm18-calibration",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Clause 2 allowed unrelated probability spaces and did not specify a joint reference law, whereas def-cm-calibration-rule clause 4 requires either all fixed bounded inputs or one joint Borel deviation vector. Repaired with those two branches; mixed inputs use constant components in the joint branch, without independence. Normalized coordinates identify the deviation norm with the supplier Euclidean norm. Realized calibration still requires no measurability of Gamma; random calibration retains its separate measurability/domain hypotheses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm18-galilean-regime",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The arbitrary readout in def-cm18-observable-model permits R identically zero, so Phi is identical in both frames despite transformed times and states. Replaced the false categorical change with the requirement to transform the protocol/readout and compute its new prediction; invariant numerical readouts remain admitted. Galilean signs t prime=t+b and x prime=Rx+vt+a and the conditional force-domain convention are preserved. No item cites this remark; the owning page only records frame relativity and remains sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm18-model-test",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "def-cm-confidence-set-and-coverage defines a level as a uniform lower bound on coverage, not necessarily the infimum itself. A family with infimum coverage 0.97 also has declared level 0.95, contradicting the original equality wording. Repaired with the exact measurable-event definition and infimum >= 1-alpha condition; no parameter probability is introduced. Reviewed the calibrated-reference use after the joint-law repair: this item assumes no separate reference spaces. The finite-sample consumer uses only the specified-test ingredients, so its proof and claim remain sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm18-primary-report-contract",
    "operation": "proposed-adjudication",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The rejected identification is absent: clause 5 lists evaluation methods for the source and calibration, without assigning statistical uncertainty to Type A or systematic uncertainty to Type B. GUM 0.7 separates evaluation method from random/systematic effects, while 4.2 and 4.3.1 support the listed repeated-observation and other-information methods. The item requires source-backed uncertainty and carried input qualifications, reports no measurements, and remains compatible with both methods for either effect. Its calibration use remains sound after the joint-law repair; no actual datum is instantiated.",
    "uncertain": false,
    "source_urls": [
      "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm18-pendulum-calibration-proposal",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed a nonfatal supplier-restatement defect in L4: integrability of R and its mean bound need a finite second centered moment; the variance comparison needs a finite fourth moment. L4 now states C2 regularity, mu in the convex domain and both moment conditions exactly. The actual example already has square-integrable X in a bounded positive box, giving E|X-mu|^4 <= (rho_l^2+rho_T^2)^2, so its mean, Hessian, covariance and variance-error conclusions and all Verification steps remain valid. The Example and physical_scope are unchanged; contract derivations and supplier-section quotes remain exact. Calibration is only a future requirement, not an instantiated datum.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm18-em-bridge",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The force branch accepts prescribed regular force data; prescribed E and B maps need no source equations or boundary/radiation model. Thus the original universal requirement excluded admissible external-field couplings, for example constant E and zero B on all space. Repaired clause 2 with exact field-map domains in a named frame, declared component units and regularity, a prescribed-data branch and a separately solved field-model branch. The total force still must satisfy continuity and state-local Lipschitz hypotheses; singular/distributional cases are qualified. No electromagnetic equation or conservation theorem is imported. No item directly uses this remark; the page summarizes charge, fields and a coupling law and stays sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-cm18-numerical-error",
    "operation": "proposed-adjudication",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The finite-time supplier bounds the Euclidean norm, whereas the residual/readout lemma allows any metric. On the same set the metric d(u,v)=sqrt(||u-v||) need not satisfy d(u,v)<=||u-v||, so the original combined bound does not follow. Repaired by requiring y_j in the common phase-state set and either the same Euclidean metric or an explicit finite comparison d<=c_d||. Then d(x_n,y_n)<=I_n+c_d D_n and the readout bound follows with Lambda. Map Lipschitz L_map remains distinct from exact-field L; positive step, stage definedness, retention, analytic hypotheses and empirical separation remain intact. The owning page uses only the separate certified estimates and remains sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm18-sampling-model",
    "operation": "owner-referral",
    "status": "outside-assignment-unedited",
    "reason": "Verified the Step-4 concern in current Definition conventions: categorical independence failure for a shared systematic effect is false. For n>=2, epsilon_k=b+U_k with fixed bias b and mutually independent identically distributed Bernoulli U_k stays IID; changing preparation need not change a law, and reused deterministic readings stay independent. The adopted-IID bounds themselves remain conditional and sound. Route this draft frontier item to its ordinary owner; unit 34 has no rejected tuple or write authority for it.",
    "affected_use": "Independence of the errors fails when successive repetitions share a systematic effect ... identical distribution fails when the preparation or the conditions change between repetitions.",
    "invalidated_claim": "These conditions do not universally imply failure of IID.",
    "minimality": "Replace only the categorical warning with conditions that can violate IID; retain the adopted hypotheses and sample-mean result.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm-confidence-set-and-coverage",
    "operation": "owner-referral",
    "status": "outside-assignment-unedited",
    "reason": "The supplier Definition correctly uses inf gamma>=1-alpha, but its Well-definedness prose says the level is an infimum. That repeats the same false equality repaired in the assigned model-test remark; a set with infimum 0.97 also has declared level 0.95. The consuming repair uses the exact correct Definition. Route this draft supplier to its frontier owner and examine its direct references only if that public definition changes.",
    "affected_use": "The level ... is an infimum of probabilities of the events theta in C, calculated before the datum is observed.",
    "invalidated_claim": "A declared lower coverage level need not equal the coverage infimum.",
    "minimality": "Change the convention paragraph to say uniform lower bound on pre-data coverage, preserving the Definition inequality.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm18-observable-model",
    "operation": "owner-referral",
    "status": "outside-assignment-unedited",
    "reason": "Its Definition frame-relativity paragraph also says a change of frame changes the readout of the same protocol. Read literally as numerical change, this conflicts with the permitted constant readout R=0, as in the assigned Galilean-regime rejection. The protocol and states must be re-expressed, but the numerical readout may be invariant. No assigned deduction relies on a compulsory numerical change. Route this draft supplier to its frontier owner for the same precise qualification; do not infer any published defect.",
    "affected_use": "a change of inertial frame changes the coordinate times and the readout of the same physical protocol",
    "invalidated_claim": "An arbitrary readout is not necessarily numerically altered by a frame change.",
    "minimality": "Qualify the convention as transformation/re-expression according to the declared readout law; retain the protocol data and allowed invariant readouts.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no-update-proposed",
    "reason": "Direct dependency/reference examination found only draft item consumers of the changed calibration interface and model-test interpretation. No potentially defective published consumer was identified in this lane; no published carrier was edited or adjudicated. This is a scoped consumer finding, not a whole-library audit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-chsh-and-finite-sampling-law",
    "outcome": "confirmed_nonfatal",
    "reason": "The independence definition quantifies only over attained labels. Step 2.1 lacked the empty-event case for an unattained zero-probability label; now it proves that case separately, and step 1.2 checks that positive probability implies attainment. CHSH, frequency moments, and finite disjoint count summation retain their original claims. This is a locally fillable nonfatal gap; Statement unchanged.",
    "repair_status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-complex-gaussian-continuation",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 omitted the measurability and nonnegative measurable integrable-majorant hypotheses. The Gaussian remainder functions satisfy them because they are continuous and bounded by a polynomial times a positive Gaussian. F2 now states the sequential DCT exactly, and step 2.1 applies it on the whole line along arbitrary parameter sequences. Absolute convergence, principal branch, and product factorization remain sound; Statement unchanged.",
    "repair_status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-momentum-fourier-jacobian",
    "outcome": "false_positive",
    "reason": "The cited Riesz-Fischer theorem supplies completeness, while the other actual prerequisite thm-plancherel explicitly uses and preserves the first-variable-linear L2 inner product. Its published supplier lem-complex-lp-completeness-density-and-inner-product establishes on every measure space the pairing integral f conjugate(g), its L2 norm, and completeness under the Countable Choice assumed here. Thus the item has an adequate actual inner-product supplier through Plancherel; the determinant, representative continuity, and inverse-dilation argument are valid. No item edit.",
    "repair_status": "not-required",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "thm-nrqm-composites-joint-pvm-construction",
    "outcome": "false_positive",
    "reason": "The rejected zero-based reading contradicts step 2.1, which explicitly uses L_1 intersect ... intersect L_N. For those indices sum_{n=1}^N epsilon 2^{-n}=epsilon(1-2^{-N})<epsilon, leaving a strictly positive lower bound. Monotonicity means failure of convergence to zero gives such an epsilon for all n. Compact rectangular inner approximations and Countable Choice produce a finite-intersection contradiction, proving the premeasure; polarization, two measure-uniqueness passes, and projection additivity then construct the joint PVM. No item edit.",
    "repair_status": "not-required",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-density-and-scalar-spectral-probability",
    "outcome": "confirmed_fatal",
    "reason": "Step 3.1 applied the bounded-calculus symbol Phi_E to the unbounded identity function without a licensed norm identity. The repaired proof uses bounded truncations, their defining norm limit A psi, and monotone convergence of lambda^2 indicators; it then obtains the mean by dominated convergence and retains the sqrt(abs(lambda)) domain equivalence. F7 now retains measurability and majorant hypotheses. Density expansions and scalar countable additivity remain valid under stated CC; AC is confined to clause (c). Statement unchanged.",
    "repair_status": "repaired",
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-finite-effects-and-instruments",
    "outcome": "confirmed_fatal",
    "reason": "F4 invoked the general density expansion without its Countable Choice hypothesis. It now derives the needed finite expansion from the existing finite-dimensional spectral theorem: rho is normal, its orthonormal eigenvalues are nonnegative by positivity, and their finite trace sum is one. This preserves the choice-free finite-dimensional Statement and licenses probability positivity. Complementary effects, positive conditional updates, and the explicit swapped instrument computation also remain sound.",
    "repair_status": "repaired",
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-composites-nonunique-mixed-ensemble",
    "outcome": "confirmed_nonfatal",
    "reason": "A1 attributed finite nonorthogonal mixtures to a supplier whose stated converse requires orthonormality and CC. A1 now proves the finite mixture claim locally by rho=sum w u u*, its nonnegative quadratic form, and diagonal trace one. A2 also computes the finite rank-one trace and singular-value sum locally, so the two explicit C2 decompositions require no choice. Their matrix equality, orthogonality, and distinct projection lists remain exactly the original Example.",
    "repair_status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-countable-kraus-isometric-dilation",
    "outcome": "false_positive",
    "reason": "The nuclear-bounded-cyclicity supplier does establish the needed density: F2 states that every trace-class operator has a summable nuclear representation, and proof 2.1 establishes trace-norm convergence of its bounded-multiplier partial sums. Taking B=I yields finite rank-one sums converging in trace norm; proof 4.1 reiterates existence for every trace-class input. The dilation proof uses this exact nuclear characterization, its rank-one Cauchy-Schwarz bound, and continuous partial trace to extend recovery. The judge considered only the conditional part of Statement (b), overlooking this actual prerequisite argument. No item edit.",
    "repair_status": "not-required",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-finite-naimark-compression",
    "outcome": "false_positive",
    "reason": "The item locally defines the arbitrary-H finite POVM by bounded self-adjoint effects and sum F_a=I in its Statement; no extension theorem from the finite-dimensional supplier is needed for that definition or hypothesis. F1 obtains positive square roots from the general bounded self-adjoint continuous calculus with the stated AC. F3 concerns the finite ancilla C=C^n, which is within the finite supplier scope. Orthogonal-coordinate norm computation and the explicit adjoint give W*P_aW=F_a on arbitrary nonzero H. No item edit.",
    "repair_status": "not-required",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-marker-overlap-contraction",
    "outcome": "confirmed_fatal",
    "reason": "The quotient definition and integral Cauchy-Schwarz did not supply completeness or a Hilbert pairing for L2(D), required to type the tensor product and partial trace. Added the existing published complex-Lp interface as a mathematical prerequisite and F0 with its exact arbitrary-measure-space completeness, integral pairing, norm, and CC hypothesis. Given unit vectors make both factors nonzero. Rank-one expansion, bin integrability, marker modulus bound, and the unnormalized trace caveat remain valid. Statement unchanged.",
    "repair_status": "repaired",
    "uncertain": false,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-local-trace-preserving-no-signalling",
    "outcome": "confirmed_nonfatal",
    "reason": "Step 2.1 cited F4 for cyclicity, although F4 stated only the ideal bound and trace continuity. Added the already established bounded nuclear-cyclicity supplier and its exact trace/nuclear representation formulas to F4; the proof now identifies the trace-class factor RV_a*(A tensor I) to which cyclicity applies. The same supplier licenses step 3.1 nuclear existence and its absolutely convergent pairing series. Strong completeness with uniform bounds and a summable nuclear majorant proves the reduced-state equality, including the existing zero-factor convention. Statement unchanged.",
    "repair_status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "published-consumer",
    "operation": "no_update",
    "reason": "All assigned items and the two digest-alert consumers inspected are draft. No potentially defective published consumer was discovered and no published item was edited. Imported mathematical supplier bytes remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law",
    "operation": "route_to_frontier_owner",
    "affected_use": "items/pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law.md Facts F4 marginal sums; Proof 2.2 uses full partitions from Given.",
    "invalidated_claim": "F4 asserts sharp-bin marginal sums for arbitrary finite disjoint families; with all listed Q bins empty and a nonzero P bin, the sum is zero while its P marginal need not be. Supplier compatible-luders-repeatability Statement (e) requires opposite-family coverage.",
    "minimality": "Add the coverage hypotheses to F4. Actual Statement (c), Given and step 2.2 already use full partitions, so their deduction remains sound. Outside this unit; no edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations",
    "operation": "route_to_frontier_owner",
    "affected_use": "items/pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations.md Facts F2 square-root positivity formula; Proof 1.2 and 2.1 use projections and effects.",
    "invalidated_claim": "F2 asserts a nonnegative square-root pairing for merely bounded F; F=-I gives -1. The density supplier clause (b) covers PVM projections, whereas the rank-one calculus gives bounded pairings and positive square roots require the positive-operator supplier.",
    "minimality": "Retain F positive (or an effect) in the positivity formula and cite the actual square-root supplier. Given and proof uses already have this property. Outside this unit; no edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-composites-hilbert-tensor-construction",
    "operation": "route_to_frontier_owner",
    "affected_use": "items/lem-nrqm-composites-hilbert-tensor-construction.md Proof 1.2 calls the map (u,v) -> <u,u0><v,v0> C-linear on H x K.",
    "invalidated_claim": "The map is bilinear, not linear on the product vector space: simultaneous scaling by c gives c squared. Its vanishing on quotient relations and the tensor descent use bilinearity correctly.",
    "minimality": "Replace the product-space linearity phrase by bilinearity. The associated digest completion concern is supplied by the actual dependency thm-completion-of-an-inner-product-space-is-hilbert, whose A1 uses thm-metric-completion-carries-a-unique-banach-space-structure and its explicit existence proof; no new completion prerequisite is necessary. Outside this unit; no edit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-oscillator-hermite-recurrence",
    "model": "gpt-6-luna",
    "context_sha256": "6bf5b281551c0778a6874ad377b2342f074cfd34b99ac403426cd348d8b894c1",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "F5 attributes positivity to a Statement that asserts only continuity and strict increase. Step 1.1 divides by the positive Gaussian, so this is a load-bearing supplier-interface mismatch. Repaired by declaring and citing the published reciprocal-and-positivity corollary; exponential products are now licensed by the complex addition/real-extension theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-nrqm-oscillator-formal-nonnormalizable-solution",
    "model": "gpt-6-luna",
    "context_sha256": "e32bf07d6ddfe6737a8680ae1492d7d89575fda7c5288ac0179666c5a7946912",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F5 misattributes global positivity to the monotonicity theorem. The required positive integrand already follows from e^{t^2} >= e^0=1, and nonvanishing of g0 is stated in the Hermite supplier; thus the example has a citation defect rather than a false conclusion. Repaired the factual attribution, supplied explicit positivity/reciprocal and addition citations, and derived F(y)>=y>=0 for y>=0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-oscillator-coherent-state-convergence",
    "model": "gpt-6-luna",
    "context_sha256": "552a0b4a089dcda84e886760bf8f2e51e16a6d4404a1c0b676f49e93bca0bd57",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Orthonormality makes a fixed vector have fixed coefficients; it does not exclude adding a nonzero vector in the orthogonal complement. The original proof therefore omitted coefficient-to-vector uniqueness, and its Statement incorrectly limited use of completeness to ladder domains. Repaired step 1.1 by showing every difference with the prescribed coefficients is orthogonal to the complete Hermite family and hence zero; corrected only the explanatory Statement paragraph.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "supplier": "thm-nrqm-oscillator-coherent-state-convergence",
    "status": "no-published-consumer-effect",
    "reason": "Exact dependency/reference search, including the canonical alias, found five direct item consumers, all draft. The owning qm-math-oscillator page uses unchanged clauses. No published item repair or adjudication is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-legendre-rodrigues-equation",
    "action": "record_repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "finding": "F3 and step 1.3 use the factorial closed form, but the count definition explicitly does not supply it. Added the published thm-binomial-closed-formula dependency and exact F3 citation; also repaired zero-boundary derivative and factorial facts.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-symmetric-power-su2-representation",
    "action": "record_repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "finding": "F8 invokes symmetry and ratios absent from its count-definition supplier, and step 2.2 additionally uses the factorial quotient. Added the published closed-form theorem and factorial definition; cancellation now derives the ratio, while the minus-position bijection supplies string counts.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-tsirelson-bound",
    "action": "record_repaired",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "finding": "The cited norm corollary is finite-dimensional, so F3 and F7 overstate its scope. The required estimate follows directly from ||TSx||<=||T||||S||||x||; F3 now proves it locally, F7 proves isometry from T*T=I, and the existing Hilbert adjoint theorem supplies the C*C identity.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-weighted-angular-completeness",
    "action": "record_repaired",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "finding": "F4 appends an L-infinity to L2 estimate not contained in the density lemma Statement. F4 now separates the exact interval-density assertion from the local proof: integrate |g|^2<=||g||_infinity^2 over an interval of length b-a and take square roots.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain",
    "action": "record_repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "finding": "The original Statement evaluates and differentiates L2 classes without specifying representatives. It now defines each finite-span representative as the unique finite coefficient sum of the supplied continuous tilde-Y functions, and uses the same convention for AF and L_zF. F4/Given preserve the negative-index phase.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_supplier_scope_review",
    "supplier_ids": [
      "def-binomial-coefficient",
      "thm-binomial-closed-formula",
      "cor-operator-norm-submultiplicative-and-t-star-t-identity",
      "lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori",
      "def-orthogonal-projection"
    ],
    "audit_status": "exact published interfaces inspected; no published supplier defect or published consumer edit proposed",
    "finding": "The binomial definition supplies counts; the published closed-form theorem supplies factorial quotients and symmetry. The norm corollary and projection definition have finite-dimensional scope. The density lemma supplies interval density, but not the extra norm estimate. Assigned draft consumers now cite adequate suppliers or supply local derivations. Imports were read-only.",
    "repair_report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u37.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-controlled-dynamics-radial-carleman-estimate",
    "action": "route_to_frontier_owner",
    "affected_use": "F1 attributes the polar unitary psi -> (u_lm), u_lm(r)=r integral psi(r Omega) conjugate(Y_lm(Omega)) d sigma, and radial action -u_lm''+l(l+1)r^-2u_lm to the sphere ONB and Laplacian items.",
    "invalidated_claim": "F1 attribution of the polar unitary and radial differential action to the two sphere-only suppliers.",
    "minimality": "Add thm-nrqm-coulomb-angular-radial-unitary-reduction, whose Statement (a),(b),(d) gives the missing interfaces; keep the existing estimate.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-orbital-and-spin-sphere-onb",
    "path": "items/thm-nrqm-orbital-and-spin-sphere-onb.md",
    "action": "route_out_of_lane_to_owner",
    "finding": "Given simultaneously writes the phase-free all-index formula and Y_l,-m=(-1)^m conjugate(Y_lm); these conflict for odd negative m. The Statement itself correctly selects the associated-polynomial supplier.",
    "minimality": "Restrict the displayed Given formula to m>=0 and retain the supplied negative-index convention.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "qm-math-orbital-and-spin",
    "path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md",
    "action": "route_out_of_lane_to_owner",
    "finding": "The spin paragraph says J_z and J_pm are self-adjoint, although J_+*=J_-; the same paragraph incorrectly assigns each displayed ladder a Pauli component at s=1/2. The angular paragraph also attributes orthogonality to Rodrigues, whose Statement contains no orthogonality, and gives a phase-free all-index Y_lm formula.",
    "minimality": "Use self-adjoint J_x,J_y,J_z with J_+*=J_-, restrict Pauli identification to Cartesian components, attribute orthogonality to associated-polynomial-normalization, and separate negative-index phase.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "qm-light-matter-and-spectral-transitions-examples",
    "path": "library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions-examples.md",
    "action": "route_out_of_lane_to_owner",
    "finding": "The page reports +1/sqrt(3) for both sigma entries; the cited example Statement (b) and step 2.1 give minus/plus 1/sqrt(3), respectively, under the specified harmonics.",
    "minimality": "Report the signed entries, or explicitly describe their moduli.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-intervals-hilbert-sobolev-spaces",
    "outcome": "false_positive",
    "status": "false_positive",
    "finding": "The definition defines H1_0 by H1 closure and explicitly makes no endpoint-equivalence claim here. The owning page places the trace lemma and integration-by-parts lemma (b), whose steps 1.2, 2.1 and 3.1 prove that later identification; the definition need not prove a deferred theorem. The separate mollifier-radius defect in that later proof is handled in its assigned review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-intervals-barrier-transfer-and-thick-limit-error",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "F2 misattributes zero values and quadratic identities to addition/derivative statements that do not contain them. This is an elementary citation omission, repaired by substituting the published exponential definitions and exp(0)=1, exp(s)exp(-s)=1; the resulting identities prove det M=1 and cosh(s)>=1. Matching, flux conservation and both error estimates remain valid with unchanged Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-intervals-regular-ivp-parameter-series",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "F3 overstates the real-valued Riemann supplier. The already cited Banach-valued FTC actually supplies Bochner integrals for continuous complex curves under CC, so the Volterra construction is licensed. Clarified the two distinct integral interfaces, supplied the uniform-limit completeness argument and continuity of the running suprema, and fixed internal tags; the reflected contraction, factorial series bounds and norm difference quotients establish all conclusions without a Statement change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nrqm-intervals-weak-derivative-ac-representative",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The real Holder interface was applied directly to a complex derivative in F3/step 3.1. Made the necessary complex integral triangle inequality a direct dependency and applied real Holder to the measurable modulus |u prime| and 1; finite-measure inclusion likewise uses moduli. The p=2 representative corollary with finite endpoints proves existence/uniqueness, and applying it to Du proves the H2 derivative assertion. The Statement and all AC/CC hypotheses are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-intervals-contacts-separated-box-degeneracy",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The Given and F1 redundantly assume/assert product completeness, which is a conclusion of (a), but step 1.1 independently proves the zero orthogonal complement using one-dimensional completeness and Fubini. Removed the conclusion from Given and the unsupported tensor-product assertion in F1, made the slice L2 bound and square Hilbert hypothesis explicit, and constructed the diagonal domain/action only after completeness. The diagonal lemma then proves self-adjointness and coefficient uniqueness yields exactly the (1,2),(2,1) eigenspace.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nrqm-intervals-integration-by-parts",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "finding": "The mollifier supplier allows arbitrary compact support, so delta<epsilon/4 alone does not imply interior support. Step 1.2 now fixes R>=1 containing supp rho and requires delta<epsilon/(4R), proving the precise support-sum bound. It also proves derivative commutation for the compact zero extension by AC integration by parts instead of attributing an unstated weak-derivative property to the mollifier interface. Corrected the double-conjugation wording in step 1.1. Cutoff strip bounds, converse traces and boundary identities establish the unchanged Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-intervals-dirichlet-diagonal-domain-identification",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "finding": "The original simplicity clause is false because zero belongs to every kernel and is orthogonal to e_n. Added nonzero; step 6.1 already proves the stronger exact equality ker(A_D-lambda_n)=C e_n from distinct eigenvalues and coefficient uniqueness. Both domain inclusions, trace convergence and the form identity are valid. No theorem scope is weakened: the intended simplicity claim is preserved and its impossible zero-vector reading removed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "supplier": "thm-nrqm-intervals-dirichlet-diagonal-domain-identification",
    "status": "no-update-proposed",
    "finding": "No published consumer appeared in the direct dependency/reference search for the changed Dirichlet interface; the three item consumers and owning page are draft and remain mathematically sound. No published finding, carrier repair or audit closure is proposed.",
    "consumers": [
      "thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent",
      "def-nrqm-potentials-interval-and-delta-models",
      "pthm-nrqm-potentials-interval-spectra-completeness-and-nodes"
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "qm-math-intervals-and-contacts",
    "status": "outside-assignment-owner-route",
    "path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-intervals-and-contacts.md",
    "finding": "Oscillation-layer formula writes partial_E theta(L,E)=integral_0^L u^2/(u^2+u prime^2)>0 without an endpoint denominator. The exact cited Prufer theorem (b) gives (integral_0^L u(t,E)^2 dt)/(u(L,E)^2+u prime(L,E)^2). For V=0,E=0,L=1,u(t)=t, the displayed integral-of-quotient reading is 1-pi/4, whereas the correct derivative is 1/6.",
    "minimality": "Page owner should replace only this ambiguous/false formula with the exact endpoint quotient. No item interface changes needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-nrqm-intervals-sine-on-completeness",
    "status": "outside-assignment-owner-route",
    "finding": "Current proof step 3.1 places [step 2.1,F1,F4,F5,algebra] before the norm display and continues its argument to another terminal tag group. It violates the mandatory single-paragraph, trailing-tags layout, as independently confirmed from the complete proof.",
    "minimality": "The assigned owner should move tags to the end of the complete step and consolidate the paragraph without changing its valid odd-extension/torus proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact",
    "model": "gpt-6-luna",
    "context_sha256": "e441beee5aa5a24a1f3bfd32768af685a2718e0a9bf8bc9926a9d7986451d2f4",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "F4 falsely attributes arbitrary L² almost-everywhere limit identification to dominated convergence. No sequence limit is used in steps 1.1–3.1; the actual needs are measurable section integrals and representative invariance. Replaced F4 and used completed-product Fubini on bounded x boxes, then Cauchy–Schwarz, finite-product approximation and the norm-limit compactness theorem. The Statement is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-essential-spectrum",
    "model": "gpt-6-luna",
    "context_sha256": "1c826eb35c26f46b4995ff07f7ee7cddf37173f48b9365d9dd254cb585c518d6",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "Clause (b) and proof 4.1 literally assert isolation in the ambient real line instead of in the spectrum. The isolating rational interval already proves the correct assertion, so this is a nonfatal wording defect. Also corrected the Step-4 sign defect: for R_A(z)=(z-A)^(-1), R_C-R_H0=-gamma R_C M R_H0; its compactness is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-angular-radial-unitary-reduction",
    "model": "gpt-6-luna",
    "context_sha256": "b6a78f3dd784ed4ae46279b193614f7218b44a64e9f4a921bf0bb1148e3d5cf3",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "The sphere ONB supplier returns L² classes while (d) evaluates Y_lm and asserts smoothness. The normalization supplier already supplies continuous representatives. Their explicit Cartesian formula is (-1)^m b_lm (Omega_1+i Omega_2)^m P_l^(m)(Omega_3)/sqrt(2pi), a smooth polynomial restriction agreeing across the cut and at both poles. Specified these representatives without changing the unitary or the differential identities.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-kummer-recurrence-and-termination",
    "model": "gpt-6-luna",
    "context_sha256": "6332a22f210847abc44c0c9566bded47b9a7ea3b78c6e51e0e5fd0784ca43fbf",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "F4 cites only count-defined binomials, not their factorial quotient. Added the existing published thm-binomial-closed-formula to deps, dependency_roles and F4 with its exact N>=q>=0 hypotheses. For the declared integer angular labels, N=n+2l+1 and q=n-i meet them; the ratio in step 3.1 is then (i-n)/((i+1)(2l+i+2)). No Statement change or new item is needed.",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/13.2"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-jost-volterra-solution",
    "model": "gpt-6-luna",
    "context_sha256": "049135dc870a022f7b87a4b50bb06a2d1965cf7c68d7e3c9c178c22137c3b4eb",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "Statement (b) declares f only on the fixed K while (c)–(d) use every k>0, leaving those references underspecified below k_min. This is nonfatal rather than the alleged missing construction: proof 1.2 explicitly constructs on D={Re k>0,Im k>=0}; 2.1 and 5.1 prove tail agreement and IVP patching there. Exposed that existing family and its independence of k_min in the Statement without weakening any real-energy conclusion.",
    "uncertain": false,
    "source_urls": [
      "https://dlmf.nist.gov/33.2",
      "https://dlmf.nist.gov/33.10"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-laguerre-bound-energy-exhaustion",
    "model": "gpt-6-luna",
    "context_sha256": "405c967d7c38e633e70796386e95a90a75be3f97f92463c360f0985f0984a65c",
    "outcome": "false_positive",
    "status": "rejected_finding_not_a_defect",
    "finding": "The caveat says that no completeness claim is made here; it does not claim that the functions are incomplete. Clauses (c)–(d), step 2.2 and essential-spectrum (c) do imply their negative-subspace completeness, consistently with the next item. A readily deduced additional result does not falsify any stated clause or this scope note. Checked all eight steps: same-sign coefficient tail excludes nontermination; origin boundedness excludes the second solution; cutoff form membership and form identity give the exact domain; reducing-block PVM inverses exclude all other negative radial spectral points.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-nrqm-coulomb-atomic-dipole-matrix-element-domain",
    "model": "gpt-6-luna",
    "context_sha256": "fa9d145b471202605b32a15bb92820bc1e049df82c74a1b842c883420619a83d",
    "outcome": "confirmed_nonfatal",
    "status": "item_repaired",
    "finding": "Clause (d) does not declare m or hbar before sqrt(hbar/(m omega)); its cited scaling theorem explicitly requires real m,omega,hbar>0. Supplied those intended hypotheses in (d), Given and F4 and specified X on its maximal L²(dx) multiplier domain. The existing dilation and Hermite recurrence prove exactly the same formula once ell>0 is defined; Coulomb conclusions (a)–(c) are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_frontier_owner",
    "id": "pthm-nrqm-central-coulomb-energy-observable-and-flow",
    "supplier": "thm-nrqm-coulomb-essential-spectrum",
    "finding": "Statement (a), F2 and proof 1.1 repeat isolation in the ambient real line for the unscaled or scaled spectrum; the corrected supplier proves isolation relative to sigma(C_gamma), transported by positive scaling to sigma(H_kappa).",
    "affected_use": "Statement (a), F2 and proof 1.1 repeat isolation in the ambient real line for the unscaled or scaled spectrum; the corrected supplier proves isolation relative to sigma(C_gamma), transported by positive scaling to sigma(H_kappa).",
    "invalidated_claim": "The ambient-real-line isolation clauses in Statement (a), F2 and proof 1.1.",
    "minimality": "Replace the three ambient-isolation phrases by the appropriate spectrum; preserve the scaling, finite multiplicity, countability and physical scope. Since the necessary repair changes its Statement, its owner must examine its own direct consumers after repair; this unit does not pre-expand that hop.",
    "path": "items/pthm-nrqm-central-coulomb-energy-observable-and-flow.md",
    "snippet": "[F2] **Spectrum of the unscaled operator.** $C_{\\gamma}$ is bounded below, $\\sigma_{\\mathrm{ess}}(C_{\\gamma})=[0,+\\infty)$, every point of $\\sigma(C_{\\gamma})\\cap(-\\infty,0)$ is an eigenvalue of $C_{\\gamma}$ of finite multiplicity isolated in $\\mathbb R$, and the set of such eigenvalues is at most countable ([[thm-nrqm-coulomb-essential-spectrum]] clauses (a), (b), [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] clause (c)).",
    "snippet_sha256": "8e0b3b3f492f996b853e43563fdd17b6d7ae3363d04893aecb99e5aa4305f579",
    "status": "not_edited_outside_assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_frontier_owner",
    "id": "thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
    "path": "items/thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy.md",
    "affected_use": "F4; The cited orthogonality lemma assumes a bounded T, while C is unbounded on H². The needed conclusion still follows from symmetry on the two eigenvectors: (E_n-E_nprime)<psi,psi_prime>=0.",
    "invalidated_claim": "Citation scope exceeds the exact prerequisite Statement, though the needed conclusion has the indicated short correct repair.",
    "minimality": "Add this local symmetry calculation in F4/step 1.1 or cite an unbounded orthogonality supplier; do not weaken completeness or edit the bounded published lemma.",
    "supplier": "lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal",
    "snippet": "[F4] Eigenspaces of a self-adjoint operator for distinct eigenvalues are orthogonal; $E(\\{\\lambda\\})$ is the orthogonal projection onto $\\ker(C-\\lambda)$; and $\\lambda\\in\\sigma_{\\mathrm{ess}}(C)$ iff $\\operatorname{rank}E((\\lambda-\\varepsilon,\\lambda+\\varepsilon))=\\infty$ for every $\\varepsilon>0$ ([[lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal]], [[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]], [[def-projection-valued-measure]]).",
    "snippet_sha256": "18481836d5a1cafd8ea6750f5f2a5d4b73394b76a19df5db833493f7af863e7f",
    "status": "not_edited_outside_assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_frontier_owner",
    "id": "pthm-nrqm-central-coulomb-bound-state-radial-distributions",
    "path": "items/pthm-nrqm-central-coulomb-bound-state-radial-distributions.md",
    "affected_use": "F2; Kummer (c),(d) proves termination iff polynomial and termination implies L²; it does not supply the integrability converse claimed in F2. Laguerre exhaustion (a), with the same-sign-tail proof 1.1, supplies exactly that converse.",
    "invalidated_claim": "Citation scope exceeds the exact prerequisite Statement, though the needed conclusion has the indicated short correct repair.",
    "minimality": "Add thm-nrqm-coulomb-laguerre-bound-energy-exhaustion to deps/dependency_roles and the F2 citation; leave the physical conclusions unchanged.",
    "supplier": "thm-nrqm-coulomb-kummer-recurrence-and-termination",
    "snippet": "[F2] **Regular solutions.** The regular solution has the closed form $u_{\\mathrm{reg}}(r)=c\\,r^{l+1}e^{-kr}L_{j}^{(2l+1)}(2kr)$ with $j=\\gamma/(2k)-l-1\\in\\mathbb N_{0}$ and $c\\ne0$, where $L_{j}^{(a)}(x)=\\sum_{i=0}^{j}(-1)^{i}\\binom{j+a}{j-i}x^{i}/i!$ is the $j$-th Laguerre polynomial of order $a$; it is $C^{\\infty}$ on $(0,\\infty)$ and square integrable exactly in this terminating case ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] clauses (c), (d)).",
    "snippet_sha256": "ca430f63e5240b93d37e1cc2d2e76ce348ab152e3e41235f49b3e8e873d4bd28",
    "status": "not_edited_outside_assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_page_owner",
    "id": "ex-nrqm-light-matter-hydrogen-dipole-angular-factors",
    "page": "qm-light-matter-and-spectral-transitions-examples",
    "path": "library/non-relativistic-quantum-mechanics/qm-light-matter-and-spectral-transitions-examples.md",
    "affected_use": "The page assigns +1/sqrt(3) to all allowed entries, including <Y_1,+1,Q_+Y_00>, while the correct example (b) gives -1/sqrt(3) for that entry and opposite signs for the other spherical entries.",
    "invalidated_claim": "The summary omits the signs without saying that only moduli are being given.",
    "minimality": "Insert modulus before the summary factor 1/sqrt(3), or retain the explicitly signed entries; no example carrier repair is necessary.",
    "snippet": "The companion page to [[qm-light-matter-and-spectral-transitions]] collects\ntwo conditional computations and one model comparison, with a scope remark.\n[[ex-nrqm-light-matter-two-level-dipole-drive-check]] identifies declared\ntwo-level Pauli matter data with the linear two-level drive model of\n[[qm-driven-dynamics-and-adiabatic-limits]], computes the resonant\nco-rotating first-order amplitude $dE_{0}\\tau/(2\\hbar)$ and shows that its\nprobability is the leading term of the exact averaged Rabi probability\n$\\sin^{2}(dE_{0}\\tau/(2\\hbar))$ of that model.\n[[ex-nrqm-light-matter-hydrogen-dipole-angular-factors]] computes explicit\nangular factors of the hydrogenic dipole matrix elements — $1/\\sqrt3$ for the\nallowed $1s$-to-$2p$ and $2p$-to-$1s$ angular entries $\\langle Y_{10},Q_{0}Y_{00}\\rangle$\nand $\\langle Y_{1,\\pm1},Q_{\\pm}Y_{00}\\rangle$, zero for the forbidden\n$1s$-to-$1s$, $1s$-to-$2s$ and $m$-violating entries — and contrasts them with\nthe oscillator rule $|\\Delta n|=1$.\n[[texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison]]\nproves that two declared cutoff-dipole models whose mode densities agree at\nthe transition energy have the same rate coefficient in the golden-rule limit\nbut different formal normalised single-vertex photon-energy laws for every\n$t>0$, and that a declared ideal sharp-line model is the idealisation approached\nin the limit rather than a property of the finite-time law. Reading either\nformal law as a normalised single-vertex one-photon preparation requires\n$\\eta_{0}\\ne0$. The page records no\nexperiment, no apparatus, no count and no statistical inference; the declared\nparameters $d,E_{0},\\omega_{0},\\omega$, the mode densities $J_{1},J_{2}$ and\nthe window $B$ are model data, and comparing the declared laws with data\nwould test the combined model and apparatus assumptions under a declared\nsampling and measurement model.\n[[rem-nrqm-light-matter-examples-scope-limits]] records what the three items\nestablish, what they rest on and what they do not claim.\n",
    "snippet_sha256": "364a7db38cdea15700e9cfa9f3ec8390c32a2e9793993f2e5cc2e06bd7ef2aca",
    "status": "not_edited_outside_assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_supplier_scope_check",
    "id": "lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal",
    "status": "published_supplier_not_defective",
    "affected_use": "The draft completeness consumer F4 invokes this bounded self-adjoint lemma for the unbounded C operator.",
    "invalidated_claim": "None in the published lemma: its Statement explicitly assumes T in B(H).",
    "minimality": "Route the draft consumer citation repair to its frontier owner; do not edit or adjudicate the imported published mathematics.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "def-cm-holonomic-constraint-and-ideal-reactions",
        "model": "gpt-6-luna",
        "context_sha256": "910d494df55a341bc75f75dbc1b70a95b1511824b5d60b88ae92337974c742a5",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal supplier misattribution: the multiplier lemma proves uniqueness only for a fixed reaction R. Acceleration follows after imposing G_tt+2G_tq[v]+G_qq[v,v]+G_q a=0 and inverting G_q M^{-1} G_q^T, as the proposition states with C^3 G and C^1 f. Corrected the attribution without changing the motion law.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "def-cm-time-dependent-lagrangian-and-action",
        "model": "gpt-6-luna",
        "context_sha256": "ed5726caf837c1c0e4845e12de5649d9842770a98e178a3171d6c21bffd90558",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal source restatement error: the imported multi-index definition requires an open domain and supplies no closed-interval extension convention. The explicit extension definition here already defines q, q' and q'' correctly; the repair states that convention locally and cites only continuous derivatives on the open extension interval.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "def-cm-nonholonomic-velocity-constraint-law",
        "model": "gpt-6-luna",
        "context_sha256": "b5cd260dead191ca2c44fe36eaf17588c6da67dfde67e99f6043a491a48998aa",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "status": "fixed",
        "reason": "Confirmed fatal domain-quantifier defect: a curve constant on one tested [a,b] can be arbitrary elsewhere in I_0 and still satisfy the old vakonomic definition. Requiring one C^2 multiplier making the pair stationary on every compact nondegenerate subinterval covers the whole motion domain; compactly supported multiplier tests enforce z'=xy' at each time.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "thm-cm-endpoint-action-differential",
        "model": "gpt-6-luna",
        "context_sha256": "d839a9ca920e24d31c1e06501dea5e45c687063363ffb30470da3feccd8adf93",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal direct notation-prerequisite omission: W permits t<t_0 and the proof says oriented, but def-oriented-integral was not directly declared. The convention is already in the cited FTC supplier closure; the signed endpoint calculation is sound. Added the explicit convention, direct dependencies for orientation, shifted-base FTC additivity and mixed-partial commutation. Also repaired the false remark equating multiplicity or endpoint degeneracy with absence of any selected smooth family; the conditional Statement is unchanged.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "thm-cm-stationarity-iff-euler-lagrange",
        "model": "gpt-6-luna",
        "context_sha256": "effe5521c9884ee1c22261d037b6b9c7c95c820670b64b42f5872fa47cc71af3",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal fact-restatement error: def-ck defines component regularity, not closure under sums. The proof only needs a variation whose components are beta or zero, so F4 now derives its C^2 extension componentwise from the supplied bump and zero derivatives. Integration by parts gives delta S=integral E dot eta; nonzero endpoint values persist into (a,b), where bump detection proves the reverse implication.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "prop-cm-hamiltonian-branch-identities",
        "model": "gpt-6-luna",
        "context_sha256": "98762d8b40385579cc5dc52561e8c6c75ee0ba95119a56e455f591c6bfa74d8e",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal open-interval convention misstatement: q:I->U is C^2 on open I and need not extend past I's boundary. F2 now uses the imported open-domain definition and observes that each compact restriction extends using q on a slightly larger interval within I. Branch cancellation gives H_p=v, H_q=-L_q, H_t=-L_t; both equation directions and e'=-L_t remain valid with the Statement unchanged.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "ex-cm-ideal-pendulum-equation-and-stability",
        "model": "gpt-6-luna",
        "context_sha256": "bcecaf4e3e48936a41936708713804dcf064b2fd4a6ee55063356d03cd1c54be",
        "outcome": "confirmed_fatal",
        "defect_type": "logic",
        "status": "fixed",
        "reason": "Confirmed fatal missing time-domain hypothesis: on disconnected open I, one component may have theta=0 (energy -mgl) and another a nonconstant local solution with positive kinetic energy, so E'=0 does not imply one constant on all I. Declared nonempty open interval I in Example and Given, matching the reduced d'Alembert supplier. Tangent projection yields the pendulum equation, strict potential minimum gives Lyapunov stability, and positive scalar stiffness gives only the linearised frequency sqrt(g/l).",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "rem-cm-scope-of-the-legendre-map",
        "model": "gpt-6-luna",
        "context_sha256": "43a012d41686324e39f3bb35c679d5e0c851c487806820b6fde94975a46b1273",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal graph omission: the remark's elimination clause explicitly uses the phase-action theorem, which proves A(q,L_v)=S(q) and stationarity equivalence under hyperregularity and its phase-domain hypotheses. Added that supplier to deps and dependency_roles, and corrected the in-run dependency level to 5 in the carrier and owning manifest because the supplier is level 4. The remark's mathematical prose and public Statement/Definition sections are unchanged.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "rem-cm-scope-of-point-symmetry",
        "model": "gpt-6-luna",
        "context_sha256": "68ecea6f112176a01efa11fd9d68610426936be23ccc42156c013f1f04b17f52",
        "outcome": "confirmed_nonfatal",
        "status": "fixed",
        "reason": "Confirmed nonfatal overstatement: the point-symmetry definition accepts an arbitrary C^2 Lagrangian and requires L_q dot xi+L_v dot Dxi v=B_t+B_q dot v; it assumes no kinetic/potential split. The remark now states that actual identity's dependence on the chosen Lagrangian. Translation/boost failure for confining potential and the general time-translation charge -E remain correctly qualified.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "thm-cm-endpoint-action-differential",
        "origin": "batch-4-step4-digest",
        "status": "fixed",
        "outcome": "confirmed_nonfatal",
        "reason": "Multiplicity of extremals does not preclude a selected smooth family; singularity of an endpoint derivative only defeats that inverse-function sufficient condition. The false second Remark and matching contract boundary were corrected; the conditional theorem Statement is unchanged.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "lem-cm-c2-bump-functions",
        "origin": "batch-4-step4-digest",
        "status": "owner-repair-required",
        "outcome": "confirmed_nonfatal",
        "path": "items/lem-cm-c2-bump-functions.md:95",
        "affected_use": "The bump of this lemma is a polynomial",
        "invalidated_claim": "The bump is one polynomial on R.",
        "minimality": "Change polynomial to piecewise polynomial in the Remark. It vanishes on exterior open intervals but equals 1 at c, so no single polynomial can have those values. The defining formula and C^2 gluing conclusion remain sound.",
        "reason": "Outside this rejected-item lane; item not edited. Its Statement gives a piecewise polynomial bump, whereas the Remark calls the entire bump a polynomial.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      },
      {
        "ledger": "research/defect-ledger.jsonl",
        "id": "def-cm-legendre-map-in-a-time-dependent-chart",
        "origin": "batch-4-step4-digest",
        "status": "owner-repair-required",
        "outcome": "confirmed_nonfatal",
        "affected_use": "the explicit $C^2$ inverse branch on $J\\times U\\times\\mathbb R^n$",
        "invalidated_claim": "General hyperregular C^2 Lagrangian has a C^2 inverse branch.",
        "minimality": "Change C^2 to C^1 in the bundle-comparison Remark. The actual Definition requires only C^1 inverse regularity; no Definition or downstream theorem claim needs changing.",
        "reason": "Outside this rejected-item lane; item not edited. The inspected Definition supplies a C^1 inverse branch, and the stronger C^2 wording appears only in the Remark.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      }
    ],
    "published_ledger": [
      {
        "ledger": "research/published-consumer-supplier-ledger.md",
        "id": "lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple",
        "path": "items/lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple.md#Statement",
        "status": "root-mathematics-maintenance-required",
        "affected_use": "Equivalently, the row vector of $\\ell$ is $A^{\\mathsf T}\\lambda$.",
        "invalidated_claim": "A^T lambda is the coefficient row of ell.",
        "minimality": "Replace row vector by coefficient column, or replace A^T lambda by lambda^T A. For A:R^m->R^n, A^T lambda is an m-component column. Keep the correctly typed functional identity ell(v)=<lambda,Av> unchanged.",
        "reason": "Confirmed presentation/type defect in a read-only published mathematical import. The local multiplier proof uses the valid functional identity and column representation, so this alert does not invalidate its use or require a physics-frontier repair.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-cook-domain-criterion",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-cook-domain-criterion",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "correction": "F1 incorrectly attributed adjoint and commutation identities to the resolvent bound. Added step 1.1 deriving both from exact inverse domains and symmetry, and closedness from the adjoint definition; made approximation indices n>=1. Checked bounded commuting approximants, strong group limits, graph continuity, Cook tails, isometric extension and exact generator converse. Statement unchanged. Adopted normative precheck phase numbering after reviewing its unchanged mathematics.",
    "post_sha256": "c426ac5d995b6f29507c499a1658761db7276043fbb8b3ce8dced701dee071e8",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-liouville-turning-point-transformation",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-liouville-turning-point-transformation",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "correction": "The q/x integral identity and differentiation of the signed turning-point integral need FTC, absent from the declared interfaces. Added exact published scalar Riemann integrability, first FTC and Newton-Leibniz suppliers without adding a choice assumption. Checked dominated derivative bounds for b and G, signed identity zeta(zeta')^2=q and positive minimum; supplied inverse-coordinate differentiation and explicit cancellation of the w' term. Statement and physical scope unchanged. Adopted normative precheck phase numbering after reviewing its unchanged mathematics.",
    "post_sha256": "443b87f601c3ac08a1f8612c8cc2d0dd360cbda0e6756c4dbc9c71887917dd1c",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The intended operator identities are valid, but H denoted both an operator and its ambient space. Introduced mathcal H explicitly, stated the renaming A0,A to H0,H, and retained the full Cook hypotheses including norm-continuity. Checked time-shift intertwining, both generator-domain inclusions, range conjugation for both signs and the zero-space norm exception. The direct physics consumer F3 and proof 2.1 use exactly the unchanged isometry, domain and intertwining conclusions and remain sound.",
    "post_sha256": "ce92b2a6ea5ec24bc9c8a6e014e706feabae3ac317857dbff6502b659b983b00",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-free-gaussian-dispersive-kernel",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "correction": "Eligible reciprocal values have no least positive member, so the original subsequence selection fails. Replaced it by recursively selecting the least eligible integer m>m_previous and setting epsilon=1/m; L2 convergence ensures nonemptiness and strict decrease. Checked summable squared errors via Tonelli, dominated pointwise kernel convergence, principal branch for both signs of t, joint L1/L2 density and multiplier-domain preservation. Also derived complex Gaussian Fourier continuation locally from real Gaussian values and the identity theorem, with explicit Fubini and Tonelli dependencies. Statement unchanged.",
    "post_sha256": "89c8d3896d6f8f7a9646274b6b88f9264c2041920ac970563d8162f552d6bea6",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-wkb-explicit-error",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-wkb-explicit-error",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "F2 misattributes Gronwall to derivative and continuity definitions, but proof 1.1 already supplies the complete integrating-factor proof, including zero initial norm and the separate deviation integral. Replaced F2 by exact published scalar integrability, FTC, Newton-Leibniz, chain-rule and exponential-derivative interfaces; checked their continuous integrands and endpoint hypotheses. Coefficient-system F1 supplies c'=Bc and the norm bound; the value estimate uses only absolute amplitudes. No statement change or new Gronwall lemma is needed.",
    "post_sha256": "f273f7f928688a466590395039629fc1cf4fffff843dd2e1ba692a011df8156a",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "false_positive",
    "severity": "false_positive",
    "disposition": "false_positive",
    "defect_type": null,
    "correction": "Read the entire cited Airy-contour proof 3.1: it explicitly derives the Fresnel/Fourier formula for arbitrary smooth compact transformed amplitude b, with remainder bounded by lambda^-1 times its finite Fourier second moment, and explicitly handles amplitudes 1 and s. For B's single stationary point s=1, phi=-2/3+v^2/2 and b(0)=1/sqrt(2); taking the imaginary part gives cos Theta and the real differentiated amplitude gives sin Theta. Restoring sqrt(Z) or Z yields errors Z^-7/4 and Z^-5/4. Nonstationary endpoint integration gives -1/(pi Z) and -1/(pi Z^2), canceled by E(-Z) and E'(-Z). Positive Laplace errors, entire ODE, constant Wronskian and positive A lower envelope also check. The estimate is actually proved in the named supplier, so no edit is licensed.",
    "post_sha256": "fa0ebf8b2328b9fa6559a44983064d5d61068e44235f703c313ac37201205354",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-compact-support-asymptotic-completeness",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The positive-radius and reciprocal-energy exhaustions omit their starting index, allowing an undefined n=0 term under the library convention. Explicitly specified n>=1 at both constructions without changing the exhaustion or statement. Checked exact compact-defect and Mellin interfaces, CC PVM transport and free density, compact-resolvent transfer of infinite-rank neighborhoods, threshold pure-point projection, joint coverage, and each individual wave-range proof using fixed-vector opposite-time decay. No on-shell or stationary-completeness premise is used.",
    "post_sha256": "2d0270b9fd062dd1e4fd7b6790ff3b1aae99cc9970bd8681f3f1eda8b76c321b",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "correction": "The Hilbert definition and Lp quotient do not supply completeness, which is required by the perturbation and PVM interfaces. Added the published complex-Lp completeness/pairing lemma under the already assumed CC and proved finite direct-sum completeness before any Hilbert-space use. Checked the full-domain bounded self-adjoint multiplication and perturbation operators, explicit representing PVM, spectrum including endpoints via approximate vectors, gap one, norm-one V, true reduced inverse and exact negative log(2) coefficient from the absolutely continuous complementary measure. Example statement unchanged.",
    "post_sha256": "1f33e7242a9b82327f4c725b47393fda8bbdd5699e880949be3de8f0a971ab9c",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "The associated-polynomial formula is in the supplier's defining setup, the equation is clause (a), and clause (c) is conjugation; corrected this inaccurate locator without changing any claim. Verified smooth Cartesian harmonic representatives, annular H2 projection and the distributional radial ODE, explicit free recurrences and nonzero Wronskian, complex-coefficient oscillatory norm divergence, countable angular null-set union and the exact weak-UCP hypotheses. Made the one-dimensional C1 reconstruction explicit using smooth radial approximants and a locally derived supremum estimate, with scalar FTC and Cauchy-Schwarz suppliers; no stronger AC Sobolev interface is used. Statement unchanged.",
    "post_sha256": "414e72e451a46738c2bb9c563ae9cda5473c8354b6377dd11a941a382e8f3ab3",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-controlled-born-amplitude-error",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-controlled-born-amplitude-error",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "false_positive",
    "severity": "false_positive",
    "disposition": "false_positive",
    "defect_type": null,
    "correction": "The exact cited stationary supplier currently has kind theorem and domain mathematics, not a physics kind. Its Statement(b) explicitly supplies f_k=-(4pi)^-1 integral e^-ikOmega.y V(y)u(y)dy, with u=(I+K_k)^-1 e_inc; no physical premise is needed by the Born item. Verified kernel squared norm using the radius-2R polar integral, geometric inverse and q/(1-q) bound, uniform amplitude-functional Cauchy-Schwarz estimate, and both factors of |eta| for real or complex coupling including q=0 and eta=0. The real-potential flux interpretation is not invoked, so the alleged forbidden dependency is absent and no edit is licensed.",
    "post_sha256": "cfeb34ff4d0f6b28e82c902181201cbb31b5b4108fbc594f01fa16717845ad13",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_adjudication_record",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u40-thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "batch": "40",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "correction": "F1 overstates the suppliers by asserting uniqueness among all outgoing PDE solutions; their actual uniqueness is the bounded inverse of I+K_k. That suffices for the proof's integral-operator symmetry argument. Replaced F1 by the exact inverse-equation construction and gave the rotation substitution, unitary R_T, commutation with K_k, invariant incident datum and covariance of the continued wave and amplitude. Checked the bounded measurable radial Volterra construction, exclusion of singular origin branches by H2, free outgoing normalization, nonzero Wronskian and S_l sign, fixed-channel matching, smooth-amplitude absolute uniform convergence, Legendre Parseval constants and the conditional resonance calculation. Statement unchanged.",
    "post_sha256": "efa22531773ec2bc3e9b21c01dbfe81394f5f8ca1569024f1f6022c4d3d8bd79",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json",
        "note": "Exact tuple context and current carrier review, with actual logical reasoning and checks recorded here."
      }
    ]
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_no_new_published_maintenance_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "40",
    "reason": "No defective published supplier use was established in this assigned review. The resolvent, scalar FTC, complex-Lp and associated-harmonic interfaces supply the exact inspected clauses; their originals/imports remain read-only. This records only the inspected uses, not an audit of the whole published library. The sole changed Statement has one draft physics consumer, routed separately with a sound mathematical use and necessary contract-quote refresh.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u40.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-nrqm-fock-and-equilibrium-fock-sector-projections",
    "model": "gpt-6-luna",
    "context_sha256": "af03f2b40e80b1a2b6c9b7014f5479b53b3749ba622b7caa76a473e849fcf2fd",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The Given block unnecessarily excluded H=0 although the coordinate proof remains valid: the vacuum sector is C, all positive tensor powers vanish, and the same square-summable tail identities prove strong convergence. Removed that restriction, explicitly handled H=0, and made the orthogonal-projection and coordinate norm facts match their cited definitions. Statement unchanged; no consumer interface event.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound",
    "model": "gpt-6-luna",
    "context_sha256": "e0aa5df23c29f4e107af0cc5063c7128dd156eb480189b7c462470e4f8b877dd",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "The fixed-N supplier Statement (c) only amplifies K+M_V and cannot establish self-adjointness of H_a tensor I + I tensor H_f. Replaced Proof 1.2 with a local finite-component adjoint-domain test for I tensor H_f, then applied Kato-Rellich to the bounded Hermitian matrix amplification; positivity gives a lower bound. Weighted contraction, closed creation and Young estimates give relative bound zero for the interaction. Corrected the nested archive URL and the step-4.1 domain-step reference. Removed the same misleading fixed-N citation from Statement (c), replacing it with the adjoint definition; all mathematical claims and hypotheses are unchanged.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity",
    "model": "gpt-6-luna",
    "context_sha256": "77c6629ea1c22f0a96e2a9b296ef47fde7eb4d766328c343a969d4efed04b3ab",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The L1 supplier permits complex J while the cited continuity and infinity-limit definitions are real-only. The estimate is nevertheless valid for complex J. Repaired Statement (b) by explicitly specifying complex L1 and defining continuity and large-time limits with the complex modulus, equivalent to the real-component definitions; Proof 2.1 now also establishes bounded-kernel integrability and uses strict epsilon bounds. The physical coefficient and cutoff clauses are unchanged.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion",
    "model": "gpt-6-luna",
    "context_sha256": "e39a2e5ab5da4be5e373c692cca5bb0d689eed92f8bd94e8e091f52662210e35",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F3 incorrectly generalized the supplied zero-based N-indexed diagonal lemma to M before supplying a bijection. The original proof already constructed a deterministic enumeration later in the same step. Moved that construction before the application, explicitly reindexed f_n=u_{I_{n+1}} and its real coefficients, and restricted F3 to the actual supplier interface. Parseval yields the full bounded domain; compact finite-rank approximants and the nuclear representation give trace sufficiency, while the basis trace gives necessity. Statement unchanged.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-nrqm-fock-and-equilibrium-example-no-automatic-equilibration",
    "model": "gpt-6-luna",
    "context_sha256": "b95661bb28f2912df7f2f6b304ebe93eddc6148ac57e6339b901071c0b797649",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F1 attributed D1 inclusion in the maximal creation/annihilation domains to suppliers that only give D(N) inclusion in D1 and the Fock construction. That extra assertion is true but unsupported there. The expectation only needs e0,e1: fixed-mode Statement (a) explicitly gives both operator actions and hence their domain membership. Removed the unused stronger attribution, made F2 domain content explicit, and used linearity of both domains in step 2.1. Corrected its exponential identity tag to F5. The oscillatory expectation, norm nonconvergence and stationary Gibbs calculation remain valid; Example unchanged.",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u41.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients",
    "status": "owner-metadata-refresh-required",
    "reason": "Owning contract citations F1 retain the old cutoff Statement (c) fixed-N citation in their verbatim supplier quote. Replace the obsolete fixed-N citation substring with [[def-adjoint-of-a-densely-defined-unbounded-operator]]). in those supplier quotations; no item Statement, Definition or proof changes are needed.",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json",
    "invalidated_claim": "Only exact source-quote fidelity; no mathematical consumer claim is invalidated.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence",
    "status": "owner-metadata-refresh-required",
    "reason": "Owning contract citations F1 retain the old cutoff Statement (c) fixed-N citation in their verbatim supplier quote. Replace the obsolete fixed-N citation substring with [[def-adjoint-of-a-densely-defined-unbounded-operator]]). in those supplier quotations; no item Statement, Definition or proof changes are needed.",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-41.proof-contracts.json",
    "invalidated_claim": "Only exact source-quote fidelity; no mathematical consumer claim is invalidated.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients",
    "status": "owner-metadata-refresh-required",
    "reason": "Owning contract citations F5 quote the original golden-rule Statement (b), including its undeclared scalar field and real-only continuity citation. Refresh those source Statement quotations to the current complex-valued clause (b); no consumer proof or public interface change is necessary.",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json",
    "invalidated_claim": "Only exact source quotation currency; the examined consumer mathematical deduction remains valid.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-nrqm-light-matter-first-order-photon-energy-law",
    "status": "owner-metadata-refresh-required",
    "reason": "Owning contract citations F2 quote the original golden-rule Statement (b), including its undeclared scalar field and real-only continuity citation. Refresh those source Statement quotations to the current complex-valued clause (b); no consumer proof or public interface change is necessary.",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json",
    "invalidated_claim": "Only exact source quotation currency; the examined consumer mathematical deduction remains valid.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading",
    "status": "owner-metadata-refresh-required",
    "reason": "Owning contract citations F2 quote the original golden-rule Statement (b), including its undeclared scalar field and real-only continuity citation. Refresh those source Statement quotations to the current complex-valued clause (b); no consumer proof or public interface change is necessary.",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-64.proof-contracts.json",
    "invalidated_claim": "Only exact source quotation currency; the examined consumer mathematical deduction remains valid.",
    "route": "frontier-owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-nrqm-magnetic-and-detection-weak-product-rule",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The real one-variable product-rule supplier does not directly supply complex partial derivatives. The omitted componentwise coordinate-line reduction is routine and is now explicit in step 1.1; bounded coefficient estimates and the density limit prove the original claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 incorrectly omitted its supplier open-interval hypothesis and step 2.1 did not explicitly localize the compact-time bound. This routine localization gap is repaired on an open interval J around each t0, with a single finite constant integrable on D throughout J; no connectedness or global-time derivative bound is added to the statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_fixed_finding",
    "id": "lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The original translation step assumed all first weak derivatives, whereas D(P_j) requires only D_j f in L2. In d=2, a smooth compact factor in x1 times the indicator of (0,1) in x2 belongs to D(P_1) but not W1,2, so the cited step cannot imply maximal-domain invariance. Repaired by proving the bilinear test identity assuming only f,D_j f in L2.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose_scope_record",
    "ids": [
      "lem-nrqm-magnetic-and-detection-weak-product-rule",
      "thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation",
      "lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint"
    ],
    "reason": "Unit 42 repaired three assigned draft frontier proof carriers and synchronized only their owning contract entries. No mathematical Statement or Definition changed, no published item was edited or adjudicated, and no outside consumer maintenance is triggered. The Step-4 digest outside-lane concerns retain their original evidence and ownership; this report does not close them or certify these repairs independently.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-lem-nrqm-framework-ccr-on-the-schwartz-core",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "lem-nrqm-framework-ccr-on-the-schwartz-core",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "The cutoff and reciprocal error bounds need n>=1. This is a nonfatal omitted indexing convention: reindexing by n=r+1 defines every term and leaves the graph-norm limits and CCR proof unchanged. Checked maximal operator domains, weak product rule, compact-support Fubini and p=2 mollification under Countable Choice.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-def-nrqm-framework-newtonian-spacetime",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "def-nrqm-framework-newtonian-spacetime",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The arena restatement omitted the fixed orientation needed for positively oriented adapted charts and SO(3) transitions. Added the chosen positive-determinant equivalence class explicitly, matching def-cm-affine-time-space and clause 3 of the chart-existence lemma; affine slices, chart regularity and dynamics scope are unchanged.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-def-nrqm-framework-quantities-and-units",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "def-nrqm-framework-quantities-and-units",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "The core Q^4 dimension group cannot express independent SI temperature. Added the product extension Q^4 x Q with generator Theta and kelvin reference unit, temperature dimension Theta and Boltzmann constant/physical entropy dimension energy/Theta. The e=0 embedding preserves every prior mechanical/electric assignment; later S=k_B s and beta=1/(k_B T) now have their stated SI dimensions.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [
      "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-def-nrqm-framework-classical-apparatus-trajectories",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "def-nrqm-framework-classical-apparatus-trajectories",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "false-positive",
    "disposition": "false-positive",
    "correction": "The referenced state postulate is P1 and the preparation/apparatus postulate is P7, both explicitly listed and explained on the owning page qm-framework-and-quantities. P1 defines rays and density preparations; P7(iii) gives uncertainty-qualified apparatus identifications. The forward prose references are contextual, not a deduction or an undeclared backward dependency, and adding P7 as a prerequisite would create a cycle through P5.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-cex-nrqm-framework-mean-position-can-fail-to-exist",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "cex-nrqm-framework-mean-position-can-fail-to-exist",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "correction": "Confirmed a dependency-citation gap: Riemann power-tail evaluations did not justify the Lebesgue norm/moments. Added the published compact-interval equality theorem, checked continuity/boundedness on each truncation, and stated Countable Choice. MCT then gives norm 1, central second moment L0^2/6 plus an infinite constant tail, and central absolute first moment L0/4 plus an infinite logarithmic tail. Added exact logarithm derivative and quotient-law suppliers.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-ex-nrqm-framework-dimension-bookkeeping",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "ex-nrqm-framework-dimension-bookkeeping",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "L2 omitted P4(iii)'s operator-domain qualifier, although its dimensional calculation is valid whenever the equation is defined. Restored m,hbar>0, bounded real measurable V, the componentwise W^{2,2} Hamiltonian domain, domain-invariant evolution and the exact norm-differentiability condition psi(0) in D(H). The example continues to check dimensions only, not existence of a derivative for every L2 state.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-rem-nrqm-framework-primitive-and-derived-status",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "rem-nrqm-framework-primitive-and-derived-status",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "correction": "P5(iii) assigns the componentwise position and momentum formulas and maximal domains, and P5(v) explicitly calls that choice adopted. Moved those assignments to model inputs; retained Schwartz invariance, the common-core CCR and Hamiltonian self-adjointness as mathematical consequences of the assigned operators/domains. This repairs an expository status error without altering any postulate or mathematical theorem.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u43-rem-nrqm-framework-examples-scope-limits",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "43",
    "subject": "rem-nrqm-framework-examples-scope-limits",
    "caught_at_stage": "step5-initial-r1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "false-positive",
    "disposition": "false-positive",
    "correction": "The rejection overlooks the complete cited proof. Counterexample L3 constructs psi_L0=N L0^{-3/2} eta_L0 in C_c^infinity with norm 1 and nonzero Laplacian; step 1.1 explicitly uses that normalized compact-support witness to prove ||K_m psi_L0|| diverges. Thus the scope remark faithfully summarizes the established argument, not just the negated universal statement. The operator-domain kinetic-expectation and formal-frequency limits are also retained exactly.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u43.json",
        "note": "Exact round tuple and completed local review recorded; no independent review of this repair claimed."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "subject": "qm-framework-and-quantities",
    "disposition": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed Step-4 page-order concern: quantities now precedes its frame/trajectory consumers and P6 precedes P5, in both page and manifest metadata. Item formulations are unchanged by this ordering fix.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-existing-finding",
    "subject": "cex-nrqm-framework-quadratic-shear-is-not-galilean",
    "path": "items/cex-nrqm-framework-quadratic-shear-is-not-galilean.md",
    "location": "Counterexample step 1.3",
    "disposition": "outside-lane-owner-review",
    "reason": "The cited adapted-chart lemma clause 1 gives transition formulas; the differentiated acceleration law is clause 2 and zero-acceleration equivalence is clause 3. The quadratic calculation is sound; replace only the inaccurate clause locator.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-existing-finding",
    "subject": "lem-nrqm-symmetries-rotation-generators-on-schwartz-classes",
    "path": "items/lem-nrqm-symmetries-rotation-generators-on-schwartz-classes.md",
    "location": "Facts F6",
    "disposition": "outside-lane-owner-review",
    "reason": "The CCR identity is supplied by lem-nrqm-framework-ccr-on-the-schwartz-core clause (b); clause (a) supplies invariance/domain membership. Correct the locator without changing the commutator or generator argument.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-existing-finding",
    "subject": "def-nrqm-symmetries-framework-symmetry-groups-and-conservation",
    "path": "items/def-nrqm-symmetries-framework-symmetry-groups-and-conservation.md",
    "location": "Definition (f), lines 184-185",
    "disposition": "outside-lane-owner-review",
    "reason": "The translation parameter a is assigned the length unit u_H, but Definition (a) defines u_H as an energy unit. Use metres or a separately named length unit; quantities-and-units clause (d)(3) assigns length to a.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route-existing-finding",
    "subject": "def-nrqm-angular-momentum-framework-angular-momentum-observables",
    "path": "items/def-nrqm-angular-momentum-framework-angular-momentum-observables.md",
    "location": "Definition (a),(c)",
    "disposition": "outside-lane-owner-review",
    "reason": "The admitted s=0 branch of P6 has zero generators, hence S_x=S_y=0 and S_+=S_-=0 are self-adjoint. Qualify the blanket assertion that S_+ and S_- are not self-adjoint to s>0; retain s=0 and the spin-half formulas.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "propose-maintenance-record",
    "subject": "lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands",
    "path": "items/lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands.md",
    "location": "Facts L2 and Proof step 2.1",
    "status": "open mathematics-owner maintenance; no Step5 repair or adjudication",
    "snippet": "[L2] On Jordan measurable compact sets, the Riemann and Lebesgue integrals agree. ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]])",
    "affected_use": "Step 2.1 invokes L2 to identify the Riemann and Lebesgue integrals in the change-of-variables formula.",
    "invalidated_claim": "The cited supplier Statement proves outer-measure comparison and equality of set measure with Jordan content; it does not state equality of integrals of general integrands. The claimed formula is not refuted, but this citation leaves its transfer argument unsupported as written.",
    "minimality": "Supply an actual Riemann/Lebesgue integral-comparison result in the required dimension and its choice hypotheses, and justify the finite Jordan-set reduction. Preserve the change-of-variables claim. This was discovered while searching for the mean-position bridge and is not used in the repaired item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-pthm-nrqm-state-geometry-mixtures-and-extremal-preparations",
    "subject": "pthm-nrqm-state-geometry-mixtures-and-extremal-preparations",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "basis": "Confirmed a nonfatal citation gap: F4 states an explicit split absent from the cited Statement (although proved in supplier step 4.1). Repaired F4 and locally derived the split from the spectral expansion, nonnegative altered weights summing to one, countable-mixture closure and distinct orthogonal rank-one states. No claim or physical qualification was weakened.",
    "before_sha256": "ddf7ed1118c3445f377a2e191009a04cea43fa02568de29067da4c583d3d428c",
    "post_sha256": "147a41c076780b1f053ddcc1b4b8467d7b3f2ab13aa8cf16856872b97727ea63",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-pthm-nrqm-state-geometry-pure-preparation-phase-invariance",
    "subject": "pthm-nrqm-state-geometry-pure-preparation-phase-invariance",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "basis": "Confirmed a nonfatal citation-domain gap: F3 and the ray lemma give the trace identity only for nonzero vectors. Added the already-authored rank-one calculus as a direct mathematical premise and F6, whose Statement (b)-(c) covers all vectors including zero. Step 3.1 now cites F6. Scaling, normalization, injectivity and all clauses remain valid under Countable Choice.",
    "before_sha256": "dcad4709f35b1a7aec523f0dbf461b3a199af859bb0b97e7adba03c82f33cb9f",
    "post_sha256": "cc17260e8af69ed6113814976bf771480b0191c4aca4a91a7acbaad0934038f5",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-cex-nrqm-state-geometry-zero-vector-is-not-a-preparation",
    "subject": "cex-nrqm-state-geometry-zero-vector-is-not-a-preparation",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "basis": "Confirmed a nonfatal missing citation: the complex-number definition expressly delegates field structure to thm-complex-numbers-form-a-field. Added that published, read-only supplier as a direct premise and cited it in L4; step 2.1 now derives a0=0 from distributivity, excluding a zero inverse. The unchanged Statement refuted is false and the zero-vector witness refutes all its assertions.",
    "before_sha256": "726f984a91a3a96659880f5852a734ccdcea527a112bf4f4bc25cc79229556ec",
    "post_sha256": "9242d341a6927f1de8a6a964008aa4411a93de9395fbd5c9ca8b204eb2a1a315",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-ex-nrqm-state-geometry-fixed-mode-two-level-states",
    "subject": "ex-nrqm-state-geometry-fixed-mode-two-level-states",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "basis": "Confirmed a nonfatal citation misattribution: the matrix-product definition supplies no trace rule. L4 now states only matrix multiplication and identity, and the mixed-state purity is derived from the two eigenvalues 1/2 using the already-declared purity lemma, explicitly restated in L3. The projection calculation gives purity one and rank one. Also repaired the digest-confirmed vector/ray type wording: u is a unit vector and [u] its ray.",
    "before_sha256": "88ec45aabc83bd688f13d499815ae0efc0fad998f219cd292c85b0da178d13c8",
    "post_sha256": "93180acbb0e01e5e2816d9410e3ed61d9de583789aaaefa41fb292e40af58634",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-rem-nrqm-state-geometry-scope-and-empirical-status",
    "subject": "rem-nrqm-state-geometry-scope-and-empirical-status",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "basis": "Confirmed nonfatal source-fidelity defect in the bibliography note. Read Binney and Skinner Section 6.3, printed pp.121-124 (PDF pp.128-131), especially p.122 and equations (6.61)-(6.64): they model uncertainty over alternative states with probabilities and distinguish it from a coherent superposition. Replaced the reversed attribution with that faithful description. The remark body correctly separates mathematical hypotheses, adopted state assignment and empirical neutrality.",
    "before_sha256": "b4ab318bda1a66972e98469353351de6bb6bf52f365c6420cb9538f7e4631254",
    "post_sha256": "57c565da5debc25efacc5cc9632807df05a98e2c33c11a28e27435a30aab6e83",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u44-rem-nrqm-state-geometry-examples-scope-limits",
    "subject": "rem-nrqm-state-geometry-examples-scope-limits",
    "batch": "44",
    "caught_at_stage": "5.1",
    "caught_by_role": "alpha-adjudicate",
    "severity": "false-positive",
    "disposition": "rejected-finding",
    "outcome": "false_positive",
    "basis": "False positive: the supplier heading is Statement refuted, not Statement. Its Counterexample steps 1.1, 2.1 and 2.2 prove that zero has no unit representative, normalization is undefined, and its rank-one operator has trace zero. The remark accurately summarizes that refutation and separates model semantics from observation. Each other paragraph matches the inspected Example interfaces and preserves the absence of measurements and the deferred radiation interpretation. No edit is justified.",
    "before_sha256": "e2650e867cf6724b2387470bced344372b8d5390b3d6935fe5c485217c439c71",
    "post_sha256": "e2650e867cf6724b2387470bced344372b8d5390b3d6935fe5c485217c439c71",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_new_published_defect",
    "reason": "No published item or imported snapshot was edited. The relevant field theorem establishes the complex field used by the counterexample; all digest alerts inspected here concern draft local items or a draft page and must be routed to their frontier owners, not entered as published defects.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_owner",
    "subject": "qm-math-orbital-and-spin",
    "disposition": "open_outside_assignment",
    "evidence_path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md",
    "basis": "The standard matrices J_z e_m=m e_m and J_± e_m=sqrt((s∓m)(s±m+1)) e_(m±1) are self-adjoint. The displayed ladder operators J_± are self-adjoint. At s=1/2, J_+ maps e_-1/2 to e_1/2 and e_1/2 to zero, whereas its adjoint is J_-.",
    "minimality": "Repair only the page summary to distinguish self-adjoint J_z,J_x,J_y from adjoint ladder pair J_+*=J_-. The proposition Statement (a) already gives the correct property.",
    "route": "frontier page owner; no edits in unit 44",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_owner",
    "subject": "ex-nrqm-observables-two-level-energy-readout",
    "disposition": "open_outside_assignment",
    "evidence_path": "items/ex-nrqm-observables-two-level-energy-readout.md",
    "basis": "F6 attributes convex combinations of states and the corresponding convex combination of traces to the pure/mixed-state definition, clause (a). That definition has no clause (a) and supplies neither general convexity nor trace linearity.",
    "minimality": "Owner can cite density-set-convex-and-complete (a) for state closure and trace-is-absolutely-convergent-and-basis-independent (4) for trace linearity, or derive the particular finite combination locally.",
    "route": "assigned frontier owner; no item edits or adjudication in unit 44",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_owner",
    "subject": "pthm-nrqm-measurement-degenerate-eigenspace-update",
    "disposition": "open_outside_assignment",
    "evidence_path": "items/pthm-nrqm-measurement-degenerate-eigenspace-update.md",
    "basis": "F5 claims a convex combination of states is a state using the pure/mixed-state definition clause (a) and density-and-scalar-spectral-probability clause (a). Neither cited interface provides arbitrary-density convexity; the former has no clause (a), and the latter constructs orthonormal pure-state mixtures.",
    "minimality": "Owner can add the already-authored density-set-convex-and-complete (a) citation for the general convexity claim.",
    "route": "assigned frontier owner; no item edits or adjudication in unit 44",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_owner",
    "subject": "pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles",
    "disposition": "open_outside_assignment",
    "evidence_path": "items/pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles.md",
    "basis": "F5 asserts general convexity and linear, trace-norm-continuous trace, citing only the pure/mixed-state definition and density-and-scalar-spectral-probability (a). The cited interfaces do not state arbitrary-density convexity or the asserted general trace continuity.",
    "minimality": "Owner can supply density-set-convex-and-complete (a) and trace-is-absolutely-convergent-and-basis-independent (4), preserving the claimed instrument calculations.",
    "route": "assigned frontier owner; no item edits or adjudication in unit 44",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_to_owner",
    "subject": "ex-nrqm-state-geometry-nonunique-preparation-ensembles",
    "disposition": "open_outside_assignment",
    "evidence_path": "items/ex-nrqm-state-geometry-nonunique-preparation-ensembles.md",
    "basis": "Example and Verification step 1.2 use cos(pi/6)=sqrt(3)/2 and sin(pi/6)=1/2 without a trigonometric prerequisite or a local derivation. The exact trigonometric-value assertions are not licensed by the declared algebraic and state-space supplier interfaces. The explicitly displayed algebraic coordinates still give the asserted ensembles.",
    "minimality": "Owner should supply the exact-value derivation/citation; the algebraic mixture calculation and this unit's scope remark remain sound.",
    "route": "batch 44 owner, outside this unit's rejected-item assignment; report only",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-nrqm-observables-moments-and-variance",
    "model": "gpt-6-luna",
    "context_sha256": "6fc2a2f2599a96d10b20a681ee409d9d72d22dcc0111ac7b473ca3cbe2949d72",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Step 2.1 invoked a supplier restricted to D(A) for arbitrary unit vectors. Repaired it using the PVM domain of f(A), f(lambda)=|lambda|^(1/2), which gives the absolute-first-moment iff for all vectors. The mean is the difference of finite positive and negative integrals. Also corrected F5 to the unbounded self-adjoint definition. Second moments, D(A^2) variance and weighted positive-index integrability were checked; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-nrqm-observables-framework-observable-and-outcome-law",
    "model": "gpt-6-luna",
    "context_sha256": "a1e803d59b99dabf43b941014bec834fe5f7e7e807cf0c4b9d823174facd4250",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The superposition remark made an unconditional inequality claim. For A=diag(0,1), psi=(e1+e2)/sqrt(2) and rho=(T_e1,e1+T_e2,e2)/2 have identical two-atom laws. Qualified the remark to need not agree, with vanishing interference allowed; Definition (a)-(g), assigned units, domains, Born law, support as probability one, and moment qualifications remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-nrqm-observables-position-and-momentum-outcome-laws",
    "model": "gpt-6-luna",
    "context_sha256": "1f54839616574786d5eae1311f094e52661f71fff3945ed0bb192a6eb65918d9",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The assigned observable units were implicit rather than declared locally. Added (Q_j,m) and (P_j,kg m s^-1), numeric SI coordinate conventions and wavefunction/density units. Also repaired the digest concerns: |F2 psi|^2 is a frequency density, the momentum marginal requires Jacobian (2 pi hbar)^-1, and Tonelli is applied to Borel representatives with Borel-null envelopes proving a.e. slice independence. Maximal domains, PVMs, spectra, atomlessness, joint-position uniqueness and mixture density are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-nrqm-observables-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "f0f81ee1a1ee45209d198339cd0edf46b4e04ca43f68c97beed34baca87d5143",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The page includes the conditional uniqueness of a preparation from all exact bounded-observable laws, so denying every state-determination claim contradicted its supplier. Qualified the physical scope and body to exclude determination from finite empirical data, and explicitly retained model-internal uniqueness. Also corrected the repeated Fourier-density shorthand to the scaled frequency marginal; no empirical observation or sampling precision is introduced.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-nrqm-observables-position-mean-without-variance",
    "model": "gpt-6-luna",
    "context_sha256": "8f0b6ae89bcef541e913ba6b03416d734f284bc0c6fb7aa55560d148787946c9",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The tail cutoff and power law did not declare a coordinate reading unit. Specified numerical metre coordinates, the pair (Q1,m), the one-metre cutoff, and amplitude/moment units without changing the profile or integrals. Chose a Borel transverse representative for Tonelli. The normalized |g|^2 tail is |t|^-3: its absolute first moment is integrable, its second moment diverges, oddness gives mean zero, and the exact domain criteria imply form-domain membership but not D(Q1).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-nrqm-observables-two-level-energy-readout",
    "model": "gpt-6-luna",
    "context_sha256": "dae8614f72e8abdf5fb3d75867b275564361b4d2b0776e96cee1f8b07fd62be4",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "The displayed PVM gives E_A({E1,E2})=I and hence mu_rho({E1,E2})=1 for every preparation. It does not exclude null-event realizations on the declared real outcome space. Replaced every outcome with almost surely and supplied the trace-one argument in step 1.1. Two-atom probabilities, affine mixtures and finite moments/variance pq(E1-E2)^2 remain unchanged, including zero coefficient and endpoint weights.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-nrqm-observables-plane-wave-is-not-a-preparation",
    "path": "items/cex-nrqm-observables-plane-wave-is-not-a-preparation.md",
    "location": "Counterexample 1.2",
    "snippet": "eta_n(x):=prod_{j=1}^3max{0,1-n|x_j-X_j|}",
    "affected_use": "Corrupted TeX and split rho leave the printed tent-function/Cauchy-Schwarz argument undefined. The intended proof is sound: eta_n(X)=1 and norm <=(2/n)^(3/2) contradict any L2 representation.",
    "invalidated_claim": "Corrupted TeX and split rho leave the printed tent-function/Cauchy-Schwarz argument undefined. The intended proof is sound: eta_n(X)=1 and norm <=(2/n)^(3/2) contradict any L2 representation.",
    "minimality": "Restore backslashes, norm delimiters, integral/inequality operators and rho in this step only; do not change the refuted statement.",
    "status": "owner_routing_required",
    "route": "frontier-owner",
    "current_status": "draft",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-nrqm-uncertainty-preparation-spread",
    "path": "items/def-nrqm-uncertainty-preparation-spread.md",
    "location": "Definition (c)",
    "snippet": "exactly when $\\rho$ is concentrated on the domain of $|A|^{1/2}$",
    "affected_use": "Domain concentration is undefined and cannot replace weighted integrability. On ell2, Ae_n=n e_n and rho=sum c/n^2 T_e_n,e_n have all positive-weight vectors in D(A), even ran(rho) subset D(A), but absolute mean c sum 1/n is infinite.",
    "invalidated_claim": "Domain concentration is undefined and cannot replace weighted integrability. On ell2, Ae_n=n e_n and rho=sum c/n^2 T_e_n,e_n have all positive-weight vectors in D(A), even ran(rho) subset D(A), but absolute mean c sum 1/n is infinite.",
    "minimality": "Use the finite weighted sum of component absolute first moments from moments-and-variance (d); pure states use its form-domain iff.",
    "status": "owner_routing_required",
    "route": "frontier-owner",
    "current_status": "draft",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-nrqm-central-framework-central-potential-model",
    "path": "items/def-nrqm-central-framework-central-potential-model.md",
    "location": "Definition (e)",
    "snippet": "position density of that preparation as $|\\psi|^{2}$ by clause (b)",
    "affected_use": "The cited generic outcome-law clause does not compute a position PVM or spatial density.",
    "invalidated_claim": "The cited generic outcome-law clause does not compute a position PVM or spatial density.",
    "minimality": "Cite the position/momentum theorem (b), or the existing explicit spin-zero position-law supplier, with its hypotheses.",
    "status": "owner_routing_required",
    "route": "frontier-owner",
    "current_status": "draft",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-nrqm-potentials-one-dimensional-line-model",
    "path": "items/def-nrqm-potentials-one-dimensional-line-model.md",
    "location": "Definition (d)",
    "snippet": "eigenvalue $E$ through clause (a) of",
    "affected_use": "Assigned-observable clause (a) does not prove the energy point-mass law; the following generic clause (b) does not compute the line-position density.",
    "invalidated_claim": "Assigned-observable clause (a) does not prove the energy point-mass law; the following generic clause (b) does not compute the line-position density.",
    "minimality": "Cite outcome-law clause (c)/atom lemma for the eigenstate, and the actual one-dimensional multiplication-PVM or dimension-compatible kinematics supplier for position.",
    "status": "owner_routing_required",
    "route": "frontier-owner",
    "current_status": "draft",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no_update",
    "reason": "No published consumer defect identified. The digest alerts inspected in current carriers are draft items and remain unedited outside this adjudicator assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "library/non-relativistic-quantum-mechanics/qm-observables-and-born-probabilities.md",
    "status": "owner_page_maintenance_required",
    "affected_use": "The page summary calls |widehat psi|^2 a momentum Born density without its frequency-to-momentum scaling.",
    "invalidated_claim": "Under the adopted exp(-2 pi i x dot xi) transform this is a frequency density.",
    "minimality": "Clarify the summary using the scaled frequency marginal from theorem (c); no page edits were authorized in this dispatch.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-measurement-framework-declared-measurements-and-instruments",
    "model": "gpt-6-luna",
    "context_sha256": "249fdb7578ddc8c26b3419919890e1a35137386e99db31db830651f29731a291",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "The reference to the general spectral outcome-law definition carried an unused AC hypothesis. The declared projections already supply the P3(ii) law; clause (b) now cites P3 directly and the introductory paragraph specifies that P2(ii) spectral construction is not invoked. The formulas and adopted physical laws are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-measurement-serial-stern-gerlach-filters",
    "model": "gpt-6-luna",
    "context_sha256": "d998be467395a48a63d20f90730c703dd16c135fdb866b763f5453a7ccb30700",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "The spin assignment was correctly scaled but omitted the local unit declaration. Added SI action/angular-momentum unit J s and dimension M L² T⁻¹ for hbar, S_i, S_n and their outcomes; J_i and angles are dimensionless. Verified the orthonormal half-angle eigenvectors, positive-branch updates, zero branch and joint quarter probability. Also made the inherited P1–P3/CC premises explicit and removed the proof prose self-reference.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-measurement-three-polarizer-chain",
    "model": "gpt-6-luna",
    "context_sha256": "37925ecfa8a44653418a273dea6e4204ad0d508e9f2a0e1d06589bc2c1902f4f",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "The original polarization interpretation exceeded its massive-matter state-space supplier. The repaired example separately adopts its finite transverse state assignment and explicit projective probability/update rules, with CC; its state and update mathematics use the general density-state definition and selective-update lemma. All cos² overlaps, positive-branch guards and the quarter-transmission comparison are preserved. The finite-sampling remark now defines a Bernoulli model and admits atypical runs. No field dynamics, photon-number assignment, measurements or empirical inference is asserted.",
    "uncertain": false,
    "source_urls": [
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-measurement-finite-effects-dilation",
    "model": "gpt-6-luna",
    "context_sha256": "da6abcd4aa2d3d25adcb4c9ca10327cb761d738368cde732c76e5dbddc59defb",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "P7 was inherited through the measurement definition, but clause (e) lacked an explicit local fact/citation. Added its direct formulation prerequisite and F9, used in step 6.1. Completed the digest concern: the inverse bound excludes real spectrum outside [0,1], continuous calculus constructs the positive root through the fourth-root factorization, and commuting positive roots give uniqueness. Tensor orthogonality proves W*W=I and W*P_aW=F_a; rank-one traces and partial traces prove the outcome and reduced-state formulas with positive-probability guards. Statement unchanged.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-measurement-degenerate-coarse-versus-fine-update",
    "model": "gpt-6-luna",
    "context_sha256": "7f1693d14a724850f60e3e2243fe7a1044c1c1b31ab141d53d81585170551a17",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "F3 misquoted the spectral-eigenspace physics theorem as a result for arbitrary projections. The actual computation needs only the general mathematical selective-update lemma (d), whose hypotheses are exactly CC, an orthogonal projection and a supported unit vector. Replaced the inappropriate supplier and F3; step 1.1 now calculates T(P psi,P psi)/||P psi||²=T(psi,psi). The coarse/fine projections, all probabilities and the dimensionless W witness are unchanged, and its +1 versus half/half laws follow directly from the rank-one traces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-measurement-absorption-instrument",
    "model": "gpt-6-luna",
    "context_sha256": "aed7f0767566519c193fcbcc53f5e2bd7deae2ef34cb730ffc0d820cc7176c2e",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "assigned_carrier_repaired_pending_independent_rejudgment",
    "evidence": "The probability/update reading omitted explicit adopted premises, and the physical state-space supplier excluded radiation. The repaired example independently adopts its finite transverse polarization plus detector-marker state assignment and instrument rule, in the P1–P3 formula vocabulary under CC; mathematical finite-instrument suppliers establish normalization. Both effects sum to I. The detection branch is e0, with zero repeated detection; the no branch has probability >=1-p>0 and on input v has subsequent detection probability p>0 for every admitted p. Thus both outcomes fail universal repeatability. The marker remains a model record without a photon-number or vacuum assertion.",
    "uncertain": false,
    "source_urls": [
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-continuous-functional-calculus-for-bounded-self-adjoint-operators",
    "consumer": "pthm-nrqm-measurement-finite-effects-dilation",
    "status": "published_supplier_statement_adequate_at_consumed_interface_no_repair_proposed",
    "evidence": "The published supplier precisely gives an isometric unital star-homomorphism on C(spectrum(F)) with range C*(I,F), under AC. It need not state the positive-square-root corollary. The repaired draft consumer now proves spectrum(F) subset [0,1], positive root construction and uniqueness locally. No mathematical original, import or published item was changed or certified. All direct consumers of the changed measurement Definition are draft; there are no affected published-consumer repairs to propose.",
    "uncertain": false,
    "source_urls": [
      "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "qm-math-orbital-and-spin",
    "path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md",
    "route": "frontier_page_owner_batch_37",
    "classification": "fatal_page_summary_error",
    "status": "out_of_lane_owner_review_and_minimal_repair_proposed",
    "affected_use": "The spin layer begins with\n[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]: for $s\\in\\frac12\\mathbb\nN$ the standard matrices $J_ze_m=me_m$ and\n$J_\\pm e_m=\\sqrt{(s\\mp m)(s\\pm m+1)}\\,e_{m\\pm1}$ on $\\mathbb C^{2s+1}$ are\nself-adjoint, obey the $\\mathfrak{su}(2)$ commutators, have Casimir\n$J^2=s(s+1)I$, and for $s=\\frac12$ are $\\frac12$ times the Pauli matrices with\nthe multiplication law $\\sigma_i\\sigma_j=\\delta_{ij}I+\ni\\sum_k\\varepsilon_{ijk}\\sigma_k$.",
    "snapshot_sha256": "98f82627c22add44641c95d78b107733363f31a54dfc7915ff75a1f29a4e4436",
    "invalidated_claim": "The page attributes self-adjointness to J_±, although its actual proposition (a) states J_+*=J_- and self-adjointness of J_z,J_x,J_y. For s=1/2 in the ordered basis e_+,e_-, J_+=[[0,1],[0,0]], different from its adjoint. The Stern–Gerlach example correctly uses J_x,J_y,J_z, so this page error does not invalidate its calculation.",
    "minimality": "Change only the page summary: declare J_z,J_x,J_y self-adjoint and J_+*=J_-. Do not alter the sound supplier proposition or any mathematics import.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-composites-framework-composite-systems-and-local-readouts",
    "path": "items/def-nrqm-composites-framework-composite-systems-and-local-readouts.md",
    "route": "frontier_owner_batch_55",
    "classification": "nonfatal_omitted_domain_guard",
    "status": "out_of_lane_owner_review_and_minimal_repair_proposed",
    "affected_use": "**(e) Local instruments.** Let $(M_{a,r})_{\\substack{a\\in A\\\\r\\in R_{a}}}$ be a\ndeclared finite or countable instrument of subsystem $A$ with Kraus family as\nin [[def-nrqm-measurement-framework-declared-measurements-and-instruments]]\nclause (d), normalized in the strong sense\n$\\sum_{a,r}M_{a,r}^{*}M_{a,r}=I_{H}$. The **local extension** of the instrument\nto the declared composite is the family\n$$\\bigl(M_{a,r}\\otimes I_{K}\\bigr)_{\\substack{a\\in A\\\\r\\in R_{a}}}$$\ntogether with the outcome effects $\\sum_{r}(M_{a,r}\\otimes I_{K})^{*}(M_{a,r}\\otimes I_{K})=\\bigl(\\sum_{r}M_{a,r}^{*}M_{a,r}\\bigr)\\otimes I_{K}$\nand the conditional updates, defined only for outcomes with $p_a>0$,\n$$\\rho\\longmapsto\\frac{1}{p_{a}}\\sum_{r}(M_{a,r}\\otimes I_{K})\\,\\rho\\,(M_{a,r}\\otimes I_{K})^{*},\\qquad p_{a}=\\operatorname{tr}\\bigl(\\rho\\,F_{a}^{\\mathrm{loc}}\\bigr).$$",
    "snapshot_sha256": "5388a5e296b9673146864dab5fdd133107e4a9cfdf1872cba7fca569d7b54fa2",
    "invalidated_claim": "Definition (e) displays division by p_a without an explicit p_a>0 domain. A normalized family with M_0=0,M_1=I is admissible, but p_0=0 for every density state, so the displayed branch is undefined there. Its cited measurement Definition (d) already supplies the intended positive-probability guard. This omission predates the current supplier citation clarification.",
    "minimality": "Add only p_a>0 beside the local conditional-update formula. Examine its direct consumers if this Definition changes; the no-signalling theorem already includes the guard.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-measurement-degenerate-eigenspace-update",
    "path": "items/pthm-nrqm-measurement-degenerate-eigenspace-update.md",
    "route": "frontier_owner_batch_46",
    "classification": "nonfatal_omitted_general_case_calculation",
    "status": "out_of_lane_owner_review_and_minimal_repair_proposed",
    "affected_use": "2.2 [Clause (c): the coherence witness] Let $\\psi=\\alpha u+\\beta v$ with $u,v$ orthonormal in $K$; then $P\\psi=\\psi$ and step 1.1 gives $\\rho_{\\lambda}=T_{\\psi,\\psi}$. The vectors $w=(u+v)/\\sqrt2$ and $w'=(u-v)/\\sqrt2$ are orthonormal, and $W=T_{w,w}-T_{w',w'}$ is bounded and self-adjoint with $Ww=w$, $Ww'=-w'$, so $T_{w,w}$ and $T_{w',w'}$ are its spectral projections at $+1$ and $-1$ and the value $0$ has projection $I-T_{w,w}-T_{w',w'}$ [F4]. For $\\alpha=\\beta=1/\\sqrt2$ one has $\\psi=w$, so by [F2] the conditional state assigns to the value $+1$ of $W$ the probability $\\operatorname{tr}(T_{w,w}T_{w,w})=1$, while the mixture $\\sigma=|\\alpha|^{2}T_{u,u}+|\\beta|^{2}T_{v,v}$ assigns to $+1$ the probability $|\\alpha|^{2}\\operatorname{tr}(T_{u,u}T_{w,w})+|\\beta|^{2}\\operatorname{tr}(T_{v,v}T_{w,w})=\\tfrac12|\\langle u,w\\rangle|^{2}+\\tfrac12|\\langle v,w\\rangle|^{2}=\\tfrac12(\\tfrac12+\\tfrac12)=\\tfrac12$, and to $-1$ the remaining probability $\\tfrac12$; the two preparations therefore have different laws for the assigned sharp observable $W$. This is (c). [step 1.1, given, F2, F4, F5, algebra]",
    "snapshot_sha256": "cb8457c5aa413713e392cd8c0c2c4bc98ab039d790bc9a7037b9936d3c54f802",
    "invalidated_claim": "Statement (c) asserts the supported coherent state differs from the diagonal mixture for all nonzero alpha,beta, but proof 2.2 explicitly compares laws only at alpha=beta=1/sqrt(2). The general missing calculation is <T(psi,psi)u,v>=conjugate(alpha) beta !=0, whereas <(|alpha|² T(u,u)+|beta|² T(v,v))u,v>=0. Thus the claim is valid; the proof can make its general state distinction explicit. The assigned coarse/fine example now cites the exact mathematical update lemma instead of this theorem.",
    "minimality": "Insert only the off-diagonal matrix-element calculation in proof 2.2. Its Statement is sound and need not change; no published supplier or consumer repair is implicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-nrqm-measurement-examples-scope-limits",
    "path": "items/rem-nrqm-measurement-examples-scope-limits.md",
    "route": "frontier_owner_batch_46_metadata",
    "classification": "dependency_level_reconciliation",
    "status": "unassigned_metadata_update_proposed",
    "affected_use": "Frontmatter dependency_level: 14; the same item’s current manifest graph computes 12 after assigned examples remove inapplicable physical suppliers.",
    "invalidated_claim": "Only the numeric dependency level is stale; all finite-model scope paragraphs remain sound.",
    "minimality": "Update dependency_level to 12 in this unassigned item and its owning batch-46 manifest row; no Statement, Definition, physical scope or prose repair is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired",
    "subject": "def-nrqm-autonomous-dynamics-framework-evolution",
    "outcome": "confirmed_nonfatal",
    "reason": "Repaired the universal relative-phase assertion using H_op=E I; the Definition interface is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired",
    "subject": "ex-nrqm-autonomous-dynamics-two-level-precession",
    "outcome": "confirmed_nonfatal",
    "reason": "Repaired the unsupported uniform-limit argument using two-point spectral support and theorem (4); synchronized the contract.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired",
    "subject": "rem-nrqm-autonomous-dynamics-examples-scope-limits",
    "outcome": "confirmed_nonfatal",
    "reason": "Repaired the degeneracy omission: nonzero superpositions at one eigenvalue remain stationary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_scope",
    "reason": "No published supplier or consumer was changed. The imported star-homomorphism Statement (4) and its proof support the repaired two-point argument; no published repair or maintenance obligation was discovered in this assigned review.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-kinematics-plane-wave-generalized-eigenfunction",
    "action": "propose_fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The Remarks used scalar kx and 2pi delta for arbitrary vectors in R^d. Replaced them by the dot product and (2pi)^d delta^(d), defining delta as evaluation on tests and distinguishing the momentum-difference distribution from u_k. The verified Example and its proof are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nrqm-kinematics-componentwise-position-and-momentum",
    "action": "propose_fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 incorrectly transported tensor amplifications through the direct-sum unitary Psi_0; clause (c) uses Theta. Replaced this with the direct-sum identities, explicitly obtained componentwise from clause (a). Steps 1.1, 2.2-2.4 use only these direct-sum identities; the Statement and all operator domains and Fourier/generator claims remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "texp-nrqm-kinematics-dirichlet-momentum-warning",
    "action": "propose_fixed",
    "outcome": "confirmed_fatal",
    "reason": "F1 used L2 density of interval tests without a supplier establishing it, and step 1.1 needs that density before forming the adjoint. Added the existing open-set L2 density lemma, applied at n=1, Omega=(0,L), K=C under Countable Choice, to F1 and dependency metadata. Integration by parts, adjoint computation, sine non-eigenvectors and the conditional sharp-observable conclusion remain valid with unchanged public interfaces.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-kinematics-gaussian-position-momentum-packet",
    "action": "propose_fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 attributed the pointwise integral formula on all L1-intersect-L2 classes to suppliers whose interfaces state it only on Schwartz functions. Corrected this unused overbroad Facts restatement to Schwartz functions and their continuous representatives. Step 2.1 proves the Gaussian is Schwartz before step 3.1 invokes F2, so every Example claim, normalization, width and variance is preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-nrqm-kinematics-examples-scope-limits",
    "action": "propose_dismissed",
    "outcome": "false_positive",
    "reason": "The supplier is kind counterexample and its heading is Statement refuted, not an affirmed existential theorem. Its complete Counterexample proof derives [A,B^n]=n i hbar B^(n-1), then ||B^n||>=c^n n! contradicting ||B||^n on every nonzero H. The remark accurately restates the proved nonexistence; Gaussian, plane-wave and boundary summaries also preserve their suppliers' hypotheses and nonempirical scope. No item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-nrqm-kinematics-scope-and-empirical-status",
    "action": "propose_dismissed",
    "outcome": "false_positive",
    "reason": "Current P6 Postulate clause (iii), Species parameters, explicitly states that mass, charge, spin label, statistics and magnetic couplings are empirical model parameters entered as declared values with uncertainty. Its clauses (iv)-(v) preserve the assignment and nonmeasurement qualifications; P5 clause (iii) separately declares m>0 and clause (v) points to empirical species inputs. The rejected paragraph faithfully summarizes these interfaces and derives no measured value. No item edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No confirmed published-supplier or published-consumer defect was discovered in this assigned review. The digest alerts examined here concern draft local items/pages, and are routed separately below. Imported mathematical suppliers remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nrqm-kinematics-momentum-representation",
    "action": "propose_owner_route",
    "reason": "The cited Statement only covers linear T; x -> x-a is affine when a is nonzero, so that interface does not justify the translation substitution. The computed phase is correct. Replace only the citation and its dependency metadata with an adequate translation-invariance or C1 substitution supplier; leave the Statement and calculation unchanged.",
    "route": "frontier owner for unassigned batch-48 carrier",
    "affected_use": "F4 cites thm-linear-change-of-variables-for-lebesgue-measure for translation substitution y=x-a in Proof 3.1.",
    "path": "items/lem-nrqm-kinematics-momentum-representation.md:97",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-kinematics-framework-massive-spin-s-model",
    "action": "propose_owner_route",
    "reason": "The covariance proofs calculate identities conditional on the chosen T_a and B_u(t) representative convention; they do not establish that nature or every representative reading must choose those maps. State the chosen representative convention and distinguish the operator covariance identities derived from it; owner must inspect direct consumers if Definition (e) changes.",
    "route": "frontier owner for unassigned batch-48 carrier",
    "affected_use": "Definition (e) calls the state representative transformation law a derived statement and not an additional assumption.",
    "path": "items/def-nrqm-kinematics-framework-massive-spin-s-model.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-nrqm-uncertainty-product-domain-commutator-identity",
    "action": "propose_owner_route",
    "reason": "For d=r=1, f=(1+x^2)^(-1/2) is L2, f′=-x(1+x^2)^(-3/2), xf′ and (xf)′=(1+x^2)^(-3/2) are L2, but xf is not L2. Thus f is not in D(Q), so PQf is undefined. Its Statement (b) and Proof 2.1 correctly retain f in the operand domains. Qualify F1 with f in D(P_j) and f in D(Q_j), respectively; the correct Statement and proof require no change.",
    "route": "frontier owner of this draft carrier",
    "affected_use": "F1 says the product domains require only x_j D_j f and D_j(x_j f) in L2, with no other hypothesis.",
    "path": "items/lem-nrqm-uncertainty-product-domain-commutator-identity.md:73",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "prop-nrqm-orbital-and-spin-finite-spin-matrices",
    "action": "propose_owner_route",
    "reason": "At s=1/2, J_+ sends e_-1/2 to e_1/2 and kills e_1/2, so J_+ is a nonzero nilpotent with J_+*=J_-, not self-adjoint and not one-half a Pauli matrix. The proposition Statement (a) correctly identifies J_z,J_x,J_y as self-adjoint. Correct only the page summary to refer to the self-adjoint triple J_x,J_y,J_z and separately state J_+*=J_-; the proposition is sound on this issue.",
    "route": "owning draft page, outside assigned pages",
    "affected_use": "The page names J_z and J_+/- and then describes the standard matrices as self-adjoint and as one-half Pauli matrices at s=1/2.",
    "path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md:61",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-interference-two-path-preparation-and-detection-model",
    "model": "gpt-6-luna",
    "context_sha256": "760a30c7a743be13e87088db9baa19d8819c8a1819387457aede0aa474c11e11",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "False positive: the separate recorded-detector/sampling item is listed on the owning page; this definition remains unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-interference-recorded-detector-and-sampling-model",
    "model": "gpt-6-luna",
    "context_sha256": "e6432b6125c616fc487cf3d4dce15a7d1e57d63d8a2ce530805181f6cc69b3a1",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Repaired the preparation-dependent loss wording; a nonzero no-record effect need not have positive probability for every state.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-interference-coherent-and-mixture-detection-laws",
    "model": "gpt-6-luna",
    "context_sha256": "c48414a3040a7c046e87c21d1380fe9c68cfdf37a8e004c2efb4a9831db8c2ec",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Repaired fatal logic: the rotated denominator needs the complex overlap Z; taking its real part before rotation is invalid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-interference-ideal-flat-two-path-screen-distribution",
    "model": "gpt-6-luna",
    "context_sha256": "a541baee072f60885527ac696e60cefbef46e874fb4c955cdf53d42990db5c2a",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Explicitly carried inherited Choice and repaired the dark-bin Remark to use positive-length outer-support intersection.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-interference-uniform-phase-averaging",
    "model": "gpt-6-luna",
    "context_sha256": "60b846760a7af64241b2f1c6fc65918d328dc7ca173f34af2c40e723cf65d567",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Corrected source attribution to distinguish the locally proved finite phase ensemble from literature background; explicitly carried inherited Choice.",
    "uncertain": false,
    "source_urls": [
      "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf",
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-nrqm-interference-examples-scope-limits",
    "model": "gpt-6-luna",
    "context_sha256": "7410819892d5b0c87b044db2f6dbd4187b048ad4299f4e96d21d0dd024778833",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Repaired the summary to require positive-length slab intersection with the outer regions at phase pi.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no_published_consumer_defect",
    "reason": "Every direct item dependency/reference consumer of the changed assigned interfaces is a draft item in this run. No published item repair or potentially defective published consumer was identified. The examples page positivity defect is routed once to its owning controller maintenance path.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "path": "library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection-examples.md",
    "status": "maintenance_required",
    "reason": "The owning examples page repeats a bin meeting a bright region retains positive coherent probability without positive-length overlap. For B1 a singleton in an outer region, the slab has zero coherent probability. Correct only the summary clause to require positive-length intersection with an outer region; one page repair covers both the flat-example and examples-scope interface events.",
    "affected_use": "First worked-example summary: a bin meeting a bright region retains positive coherent probability.",
    "invalidated_claim": "Nonempty bright-region intersection implies strictly positive bin probability.",
    "minimality": "Add slab-bin and positive-length intersection qualifications; all exact distributions and empirical scope remain unchanged.",
    "route": "controller-owning-page-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm-one-dimensional-action-variable",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The square-root theorem supplies existence and uniqueness only. Added the direct bound |sqrt(x)-sqrt(y)|²<=|x-y| and continuous-implies-integrable; corrected the separate digest defect to A=2 integral and J_a=A/(2pi). The displayed action and turning-point hypotheses are preserved; direct Definition consumers require examination.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm-scattering-data",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The defining power-series citation alone did not justify positivity or measurability. Added differentiability/continuity, endpoint zeros and strict monotonicity to prove sin(theta)>0 on (0,pi), then Borel measurability and the nonnegative-density measure theorem. Branch derivatives already satisfy the nonzero hypothesis of the inverse theorem; AComega is retained.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cm-planar-polar-lift",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The Ck supplier is restricted to open sets and was an inaccurate citation for twice differentiable curves on general intervals. Replaced it with iterated domain-relative derivatives from def-derivative, including endpoint limits, preserving the full interval scope. The integral lift uses continuous g with differentiable numerator, and quotient derivatives prove the representation and angle formula at every included endpoint as well.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cm-second-order-oscillator-form",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The open-domain Ck citation did not express the intended interval convention. Defined twice differentiable as iterating def-derivative on I, retaining endpoints and the full claim. Corrected step 1.1 to require only differentiable factors: v-prime need not be twice differentiable. Product rules give w-prime=z-prime=0, constancy supplies A,B, and two differentiations verify the converse.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-cm-oriented-orthonormal-triads",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "L3 wrongly quantified x in R^n while summing exactly three standard coordinates; all uses are in R^3. Corrected the dimension and explicitly relabeled the supplier basis. Bessel summed over three standard vectors gives m<=3; the residual orthogonal to a triad must vanish, and the triple identity verifies e1 cross (e3 cross e1)=e3. Statement unchanged.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cm-differential-cross-section-density",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The cited monotonicity statement alone did not explicitly supply endpoint values. L5 now cites the repaired scattering definition and its complete positivity argument. Compact inverse substitution proves rectangle identities; common finite-measure exhaustion and pi-system uniqueness give the Borel identity, monotone approximation gives nonnegative tests, and positive sine licenses the solid-angle density. Statement unchanged.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cm-coulomb-scattering",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The broad inverse differentiability clause of L2 omitted f-prime(c)!=0. Restored this exact hypothesis; V-prime is strictly negative and all actual inverse uses meet it. Energy and the positive potential bound Cartesian speed, compact continuation gives global motion, integrable acceleration gives asymptotic velocities, and the convergent remaining-angle integral gives the impact distance. No conclusion changed.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-cm-scattering-turning-point-and-global-branches",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "L4 gave a false global free-speed bound: for mu=J=E=1 and U=-1 near rho=1, rho-prime squared is 3>2, compatible with a smooth finite-range potential and simple outer root rstar=1/2. Restricted the bound to rho>=R where V>=0. Step 2.2 already uses the correct lower bound of V on [rstar,infinity), so continuation, branch uniqueness and quadrature conclusions remain sound without any Statement change.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm-kepler-ellipse-data-check",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The conic theorem has no AComega hypothesis; corrected the opening attribution to the ellipse-area and period suppliers while retaining AComega for their actual uses. Direct exact arithmetic gives p=1, a=4/3, b=2sqrt(3)/3, E=-3/8, and both period formulas give T²=256pi²/27. The example remains a conditional algebraic check with no empirical measurement.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-cm-harmonic-oscillator-action-derivative",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Applied the finite-endpoint action theorem on arbitrary bounded positive energy intervals, then used agreement on overlaps and local C1 regularity for all E>0. Period substitution is on interior truncations with positive cosine, followed by independent endpoint limits. Action is E/omega and period is 2pi/omega. Adopted precheck canonical phase numbering: the independent quadrature is step 2.2 and their final comparison is step 3.1; all references preserve the deductions.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-cm-one-dimensional-action-variable",
    "finding": "The Definition reversed the phase-space area normalization: the unnormalized upper-graph integral is A/2, not twice A.",
    "status": "repaired",
    "evidence": "Upper graph minus lower graph gives A=2 integral; the repaired Definition states J_a=A/(2pi). This is separate from the assigned continuity-citation finding.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "disposition": "no-new-published-defect",
    "reason": "No consulted published supplier defect was confirmed in this lane; all assigned items are draft. Outside and other-owner findings below require maintenance/owner routing, not publication edits.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "unit": "5",
    "status": "owner-routing-required",
    "path": "library/non-relativistic-classical-mechanics-mathematics/cm-math-central.md",
    "affected_use": "r:I to R3 with values in J0 subset (0,infinity)",
    "invalidated_claim": "The scalar interval J0 contains the radial norm |r(t)|, not the R3-valued curve.",
    "minimality": "Replace with |r(t)| in J0; outside assigned def-cm-central-force-trajectory scope; page-only correction.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "unit": "5",
    "status": "owner-routing-required",
    "id": "ex-cm14-kepler-radial-action-check",
    "path": "items/ex-cm14-kepler-radial-action-check.md",
    "affected_use": "Verification 6.1: there is no energy interval on which two distinct simple turning points exist",
    "invalidated_claim": "Step 2.1 establishes two simple turning points on I0; the exclusion is only an interval containing the circular energy.",
    "minimality": "Add containing the circular energy; mathematics unaffected away from that endpoint. Do not edit this other-owner frontier item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "unit": "5",
    "status": "owner-routing-required",
    "path": "library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md",
    "affected_use": "the elastic case exchanges the velocities",
    "invalidated_claim": "For masses 2 and 6 and incoming velocities 3 and -1, exchange gives momentum 16 instead of 0; the item computes outgoing -3 and +1.",
    "minimality": "Replace exchanges with reverses for these data; page-only maintenance. The item formula is sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "id": "lem-cm-cross-product-triple-identity",
    "outcome": "false_positive",
    "status": "dismissed",
    "evidence": "Given explicitly uses the three ordered tuple entries (u1,u2,u3), so subscripts 1,2,3 name the entries indexed 0,1,2 in the function-space supplier. Relabeling that finite sum gives exactly L2; the cross-product supplier likewise uses named x,y,z entries. Expanding the first component cancels u1v1w1, and cyclic permutation proves the other two. No assertion of a fourth function-space entry occurs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "id": "thm-cm-rutherford-cross-section",
    "outcome": "false_positive",
    "status": "dismissed",
    "evidence": "The phrase asserted inverse names the candidate formula, not a load-bearing inverse axiom. Step 1.1 first proves negative derivative, endpoint limits and bijectivity independently, then defines the cotangent candidate and verifies its composition with theta_def is the identity; injectivity identifies the unique inverse. Its derivative gives the stated density and the theta^-3 bound proves divergence. The pair (theta,b) denotes this forward branch together with its inverse, rather than claiming that an inverse map alone is an impact-to-angle branch.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "5",
    "id": "thm-cm-kepler-ellipse-geometry",
    "outcome": "false_positive",
    "status": "dismissed",
    "evidence": "The rejected prerequisite thm-cm-kepler-conic-and-eccentricity is kind theorem, domain mathematics; its trajectory is an explicitly defined mathematical ODE curve, not a physical postulate or physics theorem. The boundary prohibition therefore does not apply. Completing the square gives the affine disc, polar rays have a unique positive root, and AComega-qualified change of variables and null seam removal prove both area formulas, including e=0.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "lem-nrqm-uncertainty-approximation-by-product-domain-vectors",
    "model": "gpt-6-luna",
    "context_sha256": "7fafc287d992f18ad2284b407277125bc1a07a46a8af33890a1590c7aec6577e",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The index set is explicitly n>=1, so no cutoff at zero is used. The library's def-sequence Indexing remark explicitly permits sequences starting at 1 up to a shift; this definition is for real sequences, whereas the present vectors lie in H^(r). The cutoff bounds, weak product-domain memberships, dominated convergence and normalization of a nonzero tail prove exactly the asserted graph limits. The alleged indexing defect is false.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law",
    "model": "gpt-6-luna",
    "context_sha256": "e36efe82dcf0e67eed515a1fd17b2461be1160fb6893d9edf9e516c6914b9b4b",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Step 2.1 incorrectly types a PVM on B(R^2) as the PVM of an assigned real-valued sharp observable. The already cited general-measurable-space probability lemma (b) supplies the required result, so this is a nonfatal application/citation defect. F1 and step 2.1 now explicitly apply that lemma with X=R^2. Step 1.1 also now derives rectangle products from PVM multiplicativity before invoking the joint criterion; the Statement and physical_scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "pthm-nrqm-uncertainty-position-momentum-incompatible",
    "model": "gpt-6-luna",
    "context_sha256": "3ef329854c8e4e636ae26692e2da3049975ec10dc12436980216ae46580296fb",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "Original F3 invokes compatibility theorem (a) under P1/P2/P3 without adopting P1/P3, so its claimed citation is not licensed. Replaced the invocation by the local deduction H(Lambda x R)H(R x Sigma)=H(Lambda x Sigma)=H(R x Sigma)H(Lambda x R), using the already declared PVM definition. Translation covariance contradicts commutation on a nonzero Q-domain vector for t!=0; the no-joint-law conclusion retains exactly its original scope. Compatibility theorem now supplies vocabulary only, with formulation-prerequisite role.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "texp-nrqm-uncertainty-spin-half-incompatibility",
    "model": "gpt-6-luna",
    "context_sha256": "d7dfb46337507c7cf2a0e5c0377eab5e57eb762441df0cad09f12e7f0bba9734",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "Original F6 applies compatibility theorem (a) without P3, so the cited deduction is not licensed. Replaced it by PVM multiplicativity: any two marginals of one PVM must commute, contrary to the explicit i sigma_z/2 and cyclic projection witnesses. Added explicit AC/Countable Choice already declared in deps and required by spectral-atom, moment and Robertson suppliers. F4 now states exactly Cauchy-Schwarz; step 2.1 derives the vector integral norm bound locally by testing against M/|M|, handling M=0. Pointwise Bloch identity and integration allow spatial/internal entanglement, and the eigenstate product remains hbar^2/4.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "ex-nrqm-uncertainty-gaussian-minimum-spread",
    "model": "gpt-6-luna",
    "context_sha256": "39dcc98bf686cf1a0c427f313c27e2db3c1ed12dc377a47743a7bf1c2ba2cfe6",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F6 attributes general polynomial closure of Schwartz functions to a definition and a weak-derivative lemma that do not state it. This is a nonfatal local supplier-restatement defect. Removed the unsupported closure claim and distinguished smooth functions from L2 classes. Step 1.1 now derives each derivative as polynomial times the Gaussian and bounds every weighted monomial using the maximum of r^m exp(-cr^2); heat-kernel second moments give x_j psi in L2, hence the classical/weak derivative and maximal momentum-domain membership. Fourier coefficients, coordinate laws, spreads and linear-first imaginary pairing are unchanged and correct.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "50",
    "id": "rem-nrqm-uncertainty-examples-scope-limits",
    "model": "gpt-6-luna",
    "context_sha256": "79b6c4000468c45d7650cbd9ee80cc4ecd3df3358976d51f0c1d996785a39653",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The supplier is explicitly kind counterexample and its interface heading is Statement refuted, not Statement. Its construction takes periodic/antiperiodic momentum extensions agreeing on the dense invariant test-function domain, but the spectral projections onto 1 and exp(i pi x) fail to commute: on 1 the two products give 4/pi^2 and (-2i/pi) exp(i pi x). Therefore the remark faithfully says the displayed implication is refuted. No graph-norm core claim is made. The inventory/model/empirical-scope prose is also faithful, and the changed spin supplier remains a conditional model deduction under its explicit choice assumptions.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "no-update",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "unit": "50",
    "reason": "No potentially defective published mathematical item or published direct consumer was found in this scoped review. The digest spin-s alert concerns a draft frontier item and is separately routed to its frontier owner; it must not be represented as a published repair.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "record-metadata-repair",
    "id": "lem-nrqm-uncertainty-approximation-by-product-domain-vectors",
    "status": "repaired-contract-only",
    "reason": "The rejected indexing claim is false positive. Separately corrected the owning contract endpoint support/limit note and its choice-supplier qualification, without altering the unchanged valid item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-nrqm-potentials-one-dimensional-line-model",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "For the allowed bounded measurable V=1_Q, no partition interval has continuous V, so the old clause (e) accepts psi=1 at E=1 without imposing any equation. Since V=0 almost everywhere and D²psi=0, its stationary residual is -1 almost everywhere. Clause (e) now requires the weak equation on the entire line for every smooth compactly supported test, while retaining the classical piece conditions.",
    "post_sha256": "05802712af09faf749f5a8475a4757073a8e75c594e4d7e808f01bf7b5516e96",
    "uncertain": false,
    "source_urls": [
      "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-nrqm-potentials-examples-scope-limits",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The barrier example (iii) and verification step 3.1 prove 201/125000=1608/1000000=0.001608 exactly, while the old remark called every decimal a bracket. The numerical formulas remain correct; the remark now explicitly distinguishes rational bracket endpoints from exact terminating decimal expansions.",
    "post_sha256": "3b54fc8b8e7d4311375efb8c9debd329547685748f3f8a76e88f462c64a85a92",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "supplier": "def-nrqm-potentials-one-dimensional-line-model",
    "status": "no-published-consumer-finding",
    "reason": "The exact ID/alias dependency and reference search found 12 direct item consumers, all draft and inside the frozen frontier. Their exact uses are recorded in consumer_reviews; none requires a repair, and no published or outside-frontier consumer was found. No published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-lem-nrqm-oscillator-unitary-transport-of-spectral-pvms",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "lem-nrqm-oscillator-unitary-transport-of-spectral-pvms",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "fatal",
      "disposition": "fixed",
      "subclass": "dependency_citation",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "The spectral theorem F1 and support lemma F3 require nonzero Hilbert spaces. Added a direct zero-space branch: both domains, adjoints, PVMs and integrals are zero, both spectra are empty by the resolvent definition, and unit-vector laws are vacuous. The remaining proof explicitly assumes nonzero spaces; the Statement is unchanged."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "lem-nrqm-oscillator-unitary-transport-of-spectral-pvms"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-def-nrqm-oscillator-framework-quadratic-potential-model",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "def-nrqm-oscillator-framework-quadratic-potential-model",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "nonfatal",
      "disposition": "fixed",
      "subclass": "interface-qualification",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "The number operator is dimensionless and n denotes the excitation count, so the declared reciprocal-count label is misleading even though count was declared dimensionless. Replaced it consistently with unit 1 in Definition, scope and Remarks. Domains, spectra, dynamics and adopted model assumptions are unchanged; consumer unit restatements are inventoried for their owners."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "def-nrqm-oscillator-framework-quadratic-potential-model"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-def-nrqm-oscillator-coherent-states",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "def-nrqm-oscillator-coherent-states",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "fatal",
      "disposition": "fixed",
      "subclass": "dependency_citation",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "Clause (d) used coherent dynamics without an actual evolution supplier. Declared the earlier purely mathematical coherent-evolution-and-variance theorem and cited its exact clauses (c), (e), (f), whose proof supplies the spectral phase rotation and closed-domain Q/P means. Explicit scaled mean coordinates clarify rotation; unit 1 matches the repaired model. No later physics consumer is used as a premise, so no cycle is introduced."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "def-nrqm-oscillator-coherent-states"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-pthm-nrqm-oscillator-energy-spectrum-and-completeness",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "pthm-nrqm-oscillator-energy-spectrum-and-completeness",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "fatal",
      "disposition": "fixed",
      "subclass": "logic",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "The P7 status reference lacked an explicit formulation dependency; added P7 and F9 solely for the qualified laboratory-comparison status. Independently confirmed the digest fatal defect: a core is a graph-norm-dense linear subspace, whereas the basis family is not a subspace and stays at distance at least sqrt(2-sqrt(2)) from (psi_0+psi_1)/sqrt(2). Corrected Statement (a) and step 2.1 to the algebraic span, exactly as scaling clause (c) proves; eigenvalues, eigenspaces and outcome laws are preserved. Number units now agree with the model."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "pthm-nrqm-oscillator-energy-spectrum-and-completeness"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-ex-nrqm-oscillator-ladder-norms",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "ex-nrqm-oscillator-ladder-norms",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "nonfatal",
      "disposition": "fixed",
      "subclass": "interface-qualification",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "The adopted model clause (a) and the cited spectrum theorem already carry AC, so the outcome-law deduction is not choice-free and its formulas are sound. However the example names only Countable Choice and omits the schema-required explicit AC dependency. Added AC to the Example assumptions, Given and deps/roles; no stronger mathematical assumption than the adopted model is introduced. Unit 1 synchronizes the number-observable restatements; ladder norms and atomic laws remain unchanged."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "ex-nrqm-oscillator-ladder-norms"
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-v2-initial-r1-u52-pthm-nrqm-oscillator-coherent-state-evolution",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "pthm-nrqm-oscillator-coherent-state-evolution",
      "batch": "52",
      "caught_at_stage": "5.1",
      "caught_by_role": "alpha-adjudicate",
      "severity": "nonfatal",
      "disposition": "fixed",
      "subclass": "interface-qualification",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "note": "The P7 description is faithful to the preparation-and-apparatus postulate and concerns empirical identification, not the conditional oscillator prediction. Added its direct formulation dependency and F8, used only in status step 4.1. The spectral-phase evolution, all-label Q/P means, constant spreads, normalized Poisson weights and variance s=|z|^2 (including z=0) remain sound. Unit 1 aligns scope and number-mean restatements with the repaired model; no observation or statistical precision is claimed."
        }
      ],
      "uncertain": false,
      "class": "accuracy",
      "adjudication_ref": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u52.json",
          "obligation": "pthm-nrqm-oscillator-coherent-state-evolution"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update_required",
    "reason": "Every direct item consumer found for the five changed physical interfaces is draft. No potentially defective published consumer was found or edited; no published acceptance or audit claim is made.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "def-nrqm-symmetries-framework-symmetry-groups-and-conservation",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "evidence": "The owning page qm-symmetries-and-conservation lists and explains the generator, translation, rotation/parity and gauge theorems, so the alleged missing page proofs are a false alarm. Independently, Definition (f) reuses the energy unit u_H as a length unit, contradicting (a) and the units supplier (b),(d); repaired it to metre. The domain-preserving symmetry, assigned-law conservation and candidate actions retain their exact definitions.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "pthm-nrqm-symmetries-generator-conservation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "P2 and the observable definition require an explicit assigned pair and declared unit; self-adjointness alone supplies a spectral measure, not a physical assignment. Clause (c), Given, scope and proof 3.2 now state the assignment (S,1). Unitary conjugation proves flow commutation, spectral commutation gives invariant density/pure laws using bounded projections, and equality of measures preserves finite moments for unit vectors in D(A). The added assignment makes the outcome-law conclusion defined without altering any operator identity.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "cex-nrqm-symmetries-nonconstant-potential-breaks-translation",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "evidence": "The unscaled indicator has dimension 1, whereas F1 adds its multiplier to kinetic energy in J. Repaired the witness to V0=E_* 1_{B(0,R)} with E_*>0 in J and R=1 m; the geometric proof works with delta=min(|a|/2,R/2). A positive-measure ball lies where V0=E_* and its shift is zero for every nonzero a. Also repaired proof 3.1: equality fails almost everywhere, rather than inequality holding almost everywhere (both potentials vanish outside their supports). Explicitly carried DC from the translation supplier; AC already implies it. The universal counterclaim remains refuted.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "ex-nrqm-symmetries-free-translation-and-momentum",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "evidence": "Confirmed the locator error in the author-hosted Teschl text: the Hamiltonian multiplier is equation (7.24), Section 7.2, printed 167, and the free-evolution multiplier is equation (7.27), Section 7.3, printed 169; Section 8.1 treats position, translations and conservation. Repaired the reference title with separate locators and the source normalization. The actual proof is supplied locally by the free-flow lemma and momentum representation; their bounded scalar multipliers commute pointwise, V=0 meets the translation theorem, and moment claims retain D(P_k). No public claim changes.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [
      "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "ex-nrqm-symmetries-parity-selection-rule",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "evidence": "The invoked rotational/parity theorem explicitly declares DC, which the example did not record. This is nonfatal prerequisite accounting: the example already assumes AC, and thm-choice-implies-dependent-implies-countable-choice proves AC implies DC by selecting successors and recursion. Added the inherited DC declaration and role. Domain-preserving parity carries an eigenvector to the same eigenspace; one-dimensionality gives lambda^2=1. For the matrix element, only psi must lie in D(Q_j); bounded self-adjoint parity transfers to the second slot and real signs give (1+sigma*tau) times the pairing equal to zero. Removed the irrelevant step-2.1 tag from that direct calculation.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_resolved_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "stage": "5-adjudicate",
    "id": "rem-nrqm-symmetries-examples-scope-limits",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "evidence": "The rejection mistakes the supplier heading Statement refuted for an asserted premise; the counterexample proves that no nonzero translation preserves its witness, so there is no alleged contradiction. Independent nonfatal wording was repaired: nonconstancy along a direction need not defeat every discrete translation (a bounded periodic potential may preserve some). The paragraph now cites the exact shifted-potential a.e. criterion and carries E_*>0 J and R=1 m from the repaired counterexample. Free multipliers, parity domain/nondegeneracy conditions and bounded radial rotations are restated at their actual scopes, with no empirical data or transition-rate conclusion.",
    "status": "repaired",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No potentially defective published consumer was identified among the direct users of these repaired physics interfaces. All identified direct item consumers are draft physics items; mathematical suppliers and imported snapshots were not edited. Existing unrelated published findings are preserved."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_unassigned_frontier_finding",
    "id": "lem-nrqm-symmetries-rotation-generators-on-schwartz-classes",
    "status": "owner_repair_required",
    "evidence": "Proof 1.2 uses |x-hG_i x+O(h^2)|<=2|x| to transfer Schwartz decay to an evaluated derivative. An upper bound does not prove that decay; exact orthogonality gives |R_i(-t)x|=|x|. Integrating the orbit derivative gives a bound C_N|x|(1+|x|)^(-N), whose square is integrable for sufficiently large N, proving the stated L2 derivative. F6 also cites CCR clause (a), but the identity is clause (b).",
    "minimality": "Replace the domination sentence using the exact rotation orbit and change F6 to clause (b); no Statement change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_unassigned_frontier_finding",
    "id": "lem-nrqm-symmetries-parity-action",
    "status": "owner_repair_required",
    "evidence": "Proof 2.1 says coordinate multiplication is bounded exactly where x_j is. Both coordinate operators are unbounded; domain preservation is the substitution identity integral |x_j f(-x)|^2 dx = integral |x_j f(x)|^2 dx, so the required L2 products exist together.",
    "minimality": "Replace only the parenthetical justification by the exact domain-integrability equality; no Statement change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_unassigned_frontier_finding",
    "id": "pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation",
    "status": "owner_repair_required",
    "evidence": "Statement (a) covers every bounded real measurable potential and every translation, whereas (d) excludes periodic potentials and discrete symmetry groups. For example a bounded cosine potential is invariant under its nonzero period shift, so it is covered by (a).",
    "minimality": "Qualify scope (d) to retain the fixed-translation criterion for bounded periodic potentials; no new discrete-group conservation result need be claimed. This Statement change requires owner direct-consumer examination.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_unassigned_frontier_finding",
    "id": "rem-nrqm-symmetries-scope-and-empirical-status",
    "status": "owner_repair_required",
    "evidence": "What is not claimed excludes periodic potentials and time-dependent external fields without qualification, although the translation theorem covers bounded periodic shifts and the gauge theorem (c) treats the specified time-dependent gauge-transformed class.",
    "minimality": "Qualify only these exclusions, preserving the stated bounded/coefficient and gauge regularity classes; report any public-scope change to direct consumers.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u53.json"
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "Confirmed typing failure: the original S_i acts on V_s whereas L_i and its spectral projections act on H_s. Defined S_i=M_(S_i^fin) on all H_s and proved E_(S_i)(Sigma)=M_(E_(S_i^fin)(Sigma)) and M_s(A_i(t))=exp(-itS_i/hbar) by finite spectral sums; the product-flow theorem now applies on D(L_i). The transported quaternion axes, strong continuity, domain-sensitive Q/P conjugations, s=0 and central-sign remark were checked directly.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-angular-momentum-total-conservation",
    "status": "owner_review_requested",
    "outcome": "confirmed_nonfatal",
    "evidence": "F4 cites SU(2) lift clause (d) for matrix commutation although that clause is scope; the correct local location is F6. Exact affected use is F4 and Proof 1.1; no weakening or propagated Statement change is necessary. Outside this assigned lane; not edited.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-angular-momentum-framework-angular-momentum-observables",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "P4 is explicitly adopted in Definition (a),(e) but was absent from deps; added post-nrqm-framework-autonomous-dynamics with physical-assumption role and its exact link. Also corrected the permitted s=0 case: S_+=S_-=0 are self-adjoint, while s>0 is not, by their differing actions on e_(-s). Removed the false necessity of strong commutation for bounded-perturbation self-adjointness, citing the actual adjoint proof; commutation still supplies the product flow. The repaired lift supplies exactly the componentwise spin and unchanged total observable on D(L_i).",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "post-nrqm-angular-momentum-magnetic-moment-coupling",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "evidence": "The original physical_scope excluded all dynamics while Postulate (ii) assigned the P4 flow exp(-itH_Z/hbar). Scope now includes autonomous unitary evolution for the prescribed static bounded field and excludes time-dependent/open-system dynamics. Added the directly used P4 formulation dependency. For the nonuniform bounded matrix potential, integrated Hermitian pairings give M_W*=M_W, and the explicit adjoint-domain argument gives H_Z*=H_Z on W^(2,2); no unproved scalar-to-matrix perturbation extension remains. Coupling, units, empirical-input uncertainty, domain and lack of Maxwell/apparatus claims are preserved.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-angular-momentum-two-spin-composition",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Confirmed nonfatal justification defect in Proof 1.2: the ladder identity alone gives only components 1 and 2, whereas component 3 needs the zero product weights. Fatality is overstated: F2 already supplies [J_1,J_2]=iJ_3, so annihilation by 1 and 2 also forces component 3 to vanish. The repair explicitly computes both product z-weights as 1/2-1/2=0. Also repaired the separate unsupported P6 attribution by locally adopting D_(s,t)(W)=D_s(W) tensor D_t(W), distinguishing the physical assignment from its tensor representation/generator calculation. Tensor-block proof, Casimir, multiplicities, highest-weight phases, s=0/t=0 endpoints and singlet uniqueness were checked against the exact mathematical suppliers; MIT Chapter 10 Sections 1-2, pp. 1-7, was consulted for the tensor addition and singlet conventions.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/f27e44d7b761cec0ef1d01734f0a23b8_MIT8_05F13_Chap_10.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-angular-momentum-two-spin-composition",
    "finding": "two_internal_factor_action_attribution",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "P6 (ii) assigns each D_s and a separately assigned spatial action tensor D_s; it does not assign D_s tensor D_t. The Statement now explicitly adopts the intended diagonal composite action, and F3 proves its generator identity.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/f27e44d7b761cec0ef1d01734f0a23b8_MIT8_05F13_Chap_10.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-angular-momentum-spin-half-directional-probabilities",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The marginal Born probability computation is correct, including the negative y-component in the stated phase convention, normalized Bloch vector and all worked states. The original Remark overreached by saying incompatibility excluded a joint law altogether: a product probability measure always combines any two marginal distributions mathematically, and sequential apparatus laws depend on their measurement/state-change model. Replaced that false exclusion with the precise limitation that this example specifies only directional marginals and supplies no joint or sequential measurement model. No probability formula, preparation or empirical claim changed.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-angular-momentum-examples-scope-limits",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Confirmed nonfatal scope-summary defect: uniform-field Zeeman precession explicitly excludes inhomogeneous fields, but the Stern-Gerlach thought experiment uses B_z(x_1) with a bounded gradient and its own containment premise. Replaced the blanket carryover with exact supplier-specific inheritance: directional probabilities from spin spectra; the Zeeman toy from uniform-field precession plus its truncation; the gradient-field thought experiment from bounded C^1 coefficients, bounded derivative, D(H_Z^2), containment and positive sector weights; orbital example from harmonic/normalization hypotheses. No observations or empirical certainty are introduced.",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "path": "library/non-relativistic-quantum-mechanics/qm-angular-momentum-and-spin-examples.md",
    "status": "owner_review_requested",
    "outcome": "confirmed_nonfatal",
    "evidence": "Pre-existing page summary calls Delta E=hbar omega a gap although the toy Example (ii) explicitly defines a signed level difference and permits real gamma,B_z. Minimal page prose repair is replace gap by signed level difference; no item interface change is necessary. Page prose is outside the assigned item repair scope and was not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published_consumer",
    "updates": [],
    "reason": "All direct dependency/reference consumers of the changed assigned interfaces currently have draft status. No published-consumer repair or unresolved published mathematical finding was identified. Imported mathematical suppliers and originals were read-only.",
    "path": "research/published-consumer-supplier-ledger.md",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-nrqm-composites-separable-and-entangled-states",
    "model": "gpt-6-luna",
    "context_sha256": "2525ad15befd7779258ef562d13005972cfa24ab38b108afa541c7da28c4a27d",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (c) correctly invokes density-set convexity (a) for arbitrary finite mixtures, but its supplementary density-expansion attribution covers only orthogonal families. Removed that inaccurate attribution and stated that no orthogonality is required; the convex-hull definition, compactness reduction to at most d+1 terms, and pure-state criterion are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-nrqm-composites-framework-composite-systems-and-local-readouts",
    "model": "gpt-6-luna",
    "context_sha256": "7f3ef2574dc4ea467cceb569b8ba30c0aad685ad07e4aba8cc89617e1af374c4",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Clause (b) incorrectly superposed product density operators. P1 (ii)-(iv) instead permits norm-convergent superpositions of product vectors and mixtures of arbitrary pure composite projectors. Corrected these types without restricting preparations. Clause (e) now defines conditional states only for p_a>0 as its instrument supplier requires; bounded tensor calculus and uniformly bounded strong convergence validate the extended family.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-nrqm-composites-framework-reduced-preparations",
    "model": "gpt-6-luna",
    "context_sha256": "c95d2efc9cb48be4bc297accdfa73cc2804110dffdf912bd3c3c56d947993c14",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The promised theorem exists: local-statistics-of-products-and-entangled-preparations (b), proof 1.2, projects onto v_1 on H and u_2 on K, giving joint probability zero and marginal product s_1^2 s_2^2>0. The reduction definition merely points forward to this same-page theorem and assumes no statistical conclusion. Partial-trace contractivity and the locally supplied Schmidt argument justify clauses (a)-(c).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "def-nrqm-composites-marker-model-and-fringe-visibility",
    "model": "gpt-6-luna",
    "context_sha256": "7e52bbdb3b1293641a89a22b7b75827cba36d38ebe9562b5812beb25dd6365e4",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The mixture in (c) omitted the completion embedding in its rank-one subscripts, while its phase vector explicitly uses kappa. Inserted kappa in both mixture projectors to fix their ambient space. This is the same unit product mixture; the phase admissibility, position-bin effect, trace weights and visibility conditions remain valid, including zero detection bins.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement",
    "model": "gpt-6-luna",
    "context_sha256": "8c5842ee0e38e1e0b2d052aaee389097466f07a8aaa6da58bd783ff23f0f0d9d",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The adopted composite reading already inherits AC, but its explicit hypothesis and closing Choice remark did not distinguish that interface assumption from Countable Choice used by the deduction. Made the inherited assumption explicit without changing conclusions. Schmidt reduction, purity and product/separability equivalences follow from exact suppliers; added the bounded rank-one pairing derivation used in 1.2. Corrected MIT Section 2 to product vectors/determinant, and assigned reduced density only to Binney 6.3.1.",
    "uncertain": false,
    "source_urls": [
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf",
      "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "pthm-nrqm-composites-local-instruments-and-no-signalling",
    "model": "gpt-6-luna",
    "context_sha256": "5321b6cf3e0b4669ef695d7aa2e1b4844a436b068b1d428d4dfb763afa5f2467",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F2 wrote the single-system Kraus formula using N_b on K and rho on H tensor K, although F1 already supplies a normalized extended family. Corrected every F2 effect/update/map to L_b=I_H tensor N_b and applied the theorem on the composite. Finite padding, trace-norm grouping and the vanishing of positive zero-trace branches justify conditional averaging; the existing local trace-preserving lemma gives the unchanged reduction. Conclusions and physical scope are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations",
    "model": "gpt-6-luna",
    "context_sha256": "9be1b4bf718fbfc7328f52f702a11d1cc760330ac7283280daf62c2ab275f107",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The rank-one supplier (e) restricts S to trace class; F2 incorrectly attributed its bounded pairing there. Clauses (d),(b), already available from the declared supplier, directly give T_xy S=T_x,S*y and tr(T_xy S)=<Sx,y>. Supplied that derivation and restricted the square-root/nonnegative formula to positive F, since F=-I disproves boundedness alone. Product effects form a normalized positive family; orthogonal Schmidt projections give joint zero and positive marginal product. Statements and physical qualifications are unchanged. Re-examined F1 after the Schmidt supplier supplemental bounded-pairing formatting correction: its reduction identities and Statement are unchanged, and the product and two-Schmidt-projection arguments remain valid.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "pthm-nrqm-composites-marker-overlap-and-visibility-bound",
    "model": "gpt-6-luna",
    "context_sha256": "60396687ca094f3c124300b5a5f13e0ce65b7bae8ac5cc9597846503d90c571f",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "F3 inaccurately presented the real sharp-readout theorem as covering the joint position PVM on R^3. Its simultaneously cited partial-trace supplier (a) already proves the needed identity for every bounded X. Made that application explicit with X=G(B), using the model definition for the physical detection weight. The finite expansion has the correct first-linear e^{-i phi} cross term; projected Cauchy-Schwarz gives the bound and phase extrema handle gamma=0. Corrected the MIT source descriptor after reading Section 2.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "rem-nrqm-composites-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "7dcd59854e1b746c4579c809a3498ba9dddf2237a749d00ad85ab3437d6abef7",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The Binney source title attributed reduced density operators to Section 6.1, pp.105-115. The retrieved text defines the partial trace in Section 6.3.1, printed p.125, equations (6.73)-(6.76), then gives the entangled reduction example on p.126. Corrected the locator to pp.125-127 while retaining Section 6.1 for composites/EPR. The scope record continues to separate assumptions, conditional model probabilities, finite sampling qualifications and empirical observations.",
    "uncertain": false,
    "source_urls": [
      "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "ex-nrqm-composites-marker-overlap-visibility",
    "model": "gpt-6-luna",
    "context_sha256": "397cd7ac13418017d14a3088f84f63979fcd53a09960a692b0caa75369c7f366",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The original longitudinal indicators omitted their length dimension, while eta has dimension m^-1 and H_0 representatives require m^-3/2. Fixed the same one-metre cells using ell=1 m and normalized factors ell^-1/2. Fubini now explicitly gives unit norms, zero path overlap and three bin pairings equal to 1/2, preserving p(phi)=(1+cos(vartheta)cos(phi))/2 and V=cos(vartheta), including both marker extremes. The units/model idealizations are explicit; no measured visibility is asserted.",
    "uncertain": false,
    "source_urls": [
      "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    ],
    "familiar": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "texp-nrqm-composites-singlet-correlations",
    "model": "gpt-6-luna",
    "context_sha256": "1c2a4fd49c047b9194ae9be6a37f60f72884a565e78fa5767196c0c4ca513b2a",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The cited spin-outcome theorem states its law on L^2(R^3;C^2), so its F2 restatement on V=C^2 was an inaccurate supplier interface. Derived the internal projections directly from self-adjoint Pauli matrices, A_n^2=I and trace zero, and their probability law from adopted P2 plus rank-one trace calculus. The original singlet proof then computes its four normalized joint probabilities, correlation -a dot b and setting-independent marginals on the correct declared space. No empirical or spatial premise is added.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication",
    "id": "ex-nrqm-composites-improper-versus-proper-mixtures",
    "model": "gpt-6-luna",
    "context_sha256": "126206a5aedbf5ff2a71363b800cbbdce2ee00781b814e2569a47f05a89dc711",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Step 1.1 established the equal marginals but announced all of (i), including rho!=M. Added the direct orthonormal-product calculation M Psi=Psi/2 while rho Psi=Psi, so (i) is proved at that step. Corrected L2 spin laws to the finite-factor deduction of the singlet, and declared the exact product-statistics supplier used by 1.2. The resulting product-mixture correlation -a_3 b_3, singlet correlation -a dot b, separability and arbitrary independent B-extension with reduction I_A/2 are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No defective published supplier or published direct consumer was identified in this assigned review. All direct consumer carriers of the changed interfaces are draft frontier items; imported mathematical snapshots remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_finding",
    "id": "def-nrqm-bell-declared-spin-arrangement",
    "path": "items/def-nrqm-bell-declared-spin-arrangement.md",
    "affected_use": "Definition (a) cites spin-spectra-and-outcome-laws (c) for S_n spectral data on V=C^2; Definition (d) uses that same citation for the finite local projections.",
    "invalidated_claim": "The cited physical theorem states its law on H_1/2=L^2(R^3;C^2), not on the declared internal factor V. The finite formulas are correct but this domain transfer is not stated.",
    "minimality": "Owner can derive the self-adjoint Pauli projections and finite-factor P2 law as in repaired singlet F2, or prove the normalized spatial-factor transfer; retain all spin arrangement conclusions.",
    "route": "frontier_owner",
    "disposition": "potential_citation_defect_for_owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Definition (a) cites spin-spectra-and-outcome-laws (c) for S_n spectral data on V=C^2; Definition (d) uses that same citation for the finite local projections. The cited physical theorem states its law on H_1/2=L^2(R^3;C^2), not on the declared internal factor V. The finite formulas are correct but this domain transfer is not stated. Owner can derive the self-adjoint Pauli projections and finite-factor P2 law as in repaired singlet F2, or prove the normalized spatial-factor transfer; retain all spin arrangement conclusions."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_finding",
    "id": "ex-nrqm-bell-worked-angles-and-product-mixture",
    "path": "items/ex-nrqm-bell-worked-angles-and-product-mixture.md",
    "affected_use": "Verification L3 cites spin-spectra-and-outcome-laws (c) for ||P_n,epsilon e_+||^2=(1+epsilon n_3)/2 and the opposite-sign basis formula on C^2; step 1.2 uses those probabilities for product-state tables.",
    "invalidated_claim": "The cited theorem is on the full massive-particle space. The supplied Pauli matrices give these finite formulas, but the domain transfer is omitted.",
    "minimality": "Owner can state the finite projection-norm calculation from Pauli matrices or cite the corrected finite-factor deduction; the product-mixture tables remain unchanged.",
    "route": "frontier_owner",
    "disposition": "potential_citation_defect_for_owner",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Verification L3 cites spin-spectra-and-outcome-laws (c) for ||P_n,epsilon e_+||^2=(1+epsilon n_3)/2 and the opposite-sign basis formula on C^2; step 1.2 uses those probabilities for product-state tables. The cited theorem is on the full massive-particle space. The supplied Pauli matrices give these finite formulas, but the domain transfer is omitted. Owner can state the finite projection-norm calculation from Pauli matrices or cite the corrected finite-factor deduction; the product-mixture tables remain unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_finding",
    "id": "pthm-nrqm-composites-local-readout-laws-and-reduced-preparations",
    "path": "research/physics-cm-qm-gr-79-2026-10-11-batch-55.proof-contracts.json",
    "affected_use": "Contract F1 -> composite-systems-and-local-readouts, source_section Definition, uses [1.3], quotes the old phrase \"linear superpositions and mixtures of product preparations\".",
    "invalidated_claim": "The old whole-Definition quotation no longer occurs in its supplier. The local-readout theorem Statement and mathematical use of clause (c) are unchanged.",
    "minimality": "Owner should refresh only this unassigned F1 quotation after examining the composite-interface correction. No local-readout item edit is required for the changed supplier clauses.",
    "route": "frontier_owner",
    "disposition": "required_metadata_refresh",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "reason": "Contract F1 -> composite-systems-and-local-readouts, source_section Definition, uses [1.3], quotes the old phrase \"linear superpositions and mixtures of product preparations\". The old whole-Definition quotation no longer occurs in its supplier. The local-readout theorem Statement and mathematical use of clause (c) are unchanged. Owner should refresh only this unassigned F1 quotation after examining the composite-interface correction. No local-readout item edit is required for the changed supplier clauses."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "56",
    "id": "def-nrqm-bell-declared-spin-arrangement",
    "model": "gpt-6-luna",
    "context_sha256": "c28fa90ce2f66517ac738eafd767600571a5dfbf7fbdbc67357a93233cbb5384",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "status": "repaired",
    "post_sha256": "187ce98240fe9f9404bb23d621110825024742e6a7d8c7e318da00541f738ee1",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json",
    "reason": "The Definition opening and physical_scope exclude P5 although clause (a) invokes the massive spin-s definition (a),(c) and the spin-spectrum theorem Statement/(c), both explicitly conditional on P5. Restored that inherited physical premise, without assigning spatial structure to the internal factors, and declared its formulation dependency. Also corrected the Brunner locator to I.A after reading PDF pages 2-3.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1303.2849"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "56",
    "id": "rem-nrqm-bell-selection-loss-and-fair-sampling",
    "model": "gpt-6-luna",
    "context_sha256": "654c6fcf5a5639eac5c22fffe80a0d15be990682a1ebf2b548984eeceaf53f6f",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "post_sha256": "8079fcb8a0a23c1b4909b50a0b82f0a0b3da2b5d4f5bf3144e839cabaef3edc1",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json",
    "reason": "The recorded-pair paragraph applies the finite-sampling citation to any such functional, whereas the cited Statement requires n trials per pair, mutual independence of all 4n pairs and each trial law exactly nu-rho. Postselection can change those laws, counts or independence. Replaced the unsupported application with the exact supplier hypotheses and a requirement for separate analysis outside them. Also repaired the parallel sufficient-versus-necessary wording and outcome-independence ambiguity and corrected the Brunner locator.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1303.2849"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "56",
    "id": "rem-nrqm-bell-boundaries-and-comparison-scope",
    "model": "gpt-6-luna",
    "context_sha256": "41d9b21500f278984b0a0c4453f21f9f44273d52957ff3fb6916670ce77bef2f",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "post_sha256": "16a57879836b6c536c2d1b3bd854a60410de79bcf22d3a8c706ccf075036e97a",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json",
    "reason": "The phrase only when asserts necessity not supplied by the selection lemma and is false: take Lambda={0,1} with equal weights, constant responses alpha_i(lambda,sign)=beta_j(lambda,sign)=1/2, D_00={0} and D_01=D_10=D_11={1}. Selection depends on settings but all conditional tables stay uniform, represented by the same constant responses and satisfying S=0. Replaced necessity with the exact sufficient condition. Also carried restored P5 into the explicit premise list and justified general-arrangement marginals directly rather than citing only a singlet result.",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1303.2849"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_adjudication",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "56",
    "id": "rem-nrqm-bell-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "0ed9d22af9ee52bd5ea8b2fd0de51b15b5ab2a820ff2d12d86c43ab350462a4e",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "post_sha256": "e46983c96f8001f6520ca6532c48ba5d55845df11b4920d9ab6a4cb73dcdf912",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json",
    "reason": "P7(ii) explicitly declares independent identically distributed repetitions as an additional apparatus/procedure statistical model; P7(iii) concerns preparation, dynamics and effect identification with uncertainty. The original sentence correctly required qualification but cited (iii) for both distinct tasks. Split the two attributions without changing the conditional sampling or empirical claims. Also removed the inaccurate denial of commutator estimates: the mathematical Tsirelson proof 2.1 uses both norm estimates before the physics bound invokes that result.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_repaired_nonfatal_details",
    "ids": [
      "def-nrqm-bell-declared-spin-arrangement",
      "rem-nrqm-bell-selection-loss-and-fair-sampling",
      "rem-nrqm-bell-boundaries-and-comparison-scope",
      "rem-nrqm-bell-scope-and-empirical-status"
    ],
    "reason": "Additional confirmed nonfatal repairs: Brunner I.A locators in arrangement/selection/boundaries; inherited P5 in boundary premise list; correct general marginal derivation; sufficient-not-necessary selection and functional-versus-statistical independence in selection remark; accurate commutator-estimate description in scope remark. Each has concrete item/supplier evidence in repair_notes.",
    "status": "repaired",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u56.json",
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1303.2849"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_new_published_entry",
    "reason": "Both digest alerts were checked against current carriers. The product-statistics theorem and the orbital-and-spin owning page are draft, with frontier owners 55 and 37 respectively; neither is a published-consumer finding. Preserve published maintenance records unchanged and route these concrete draft defects to their frontier/page owners.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-identical-particles-framework-species-sectors-and-preparations",
    "model": "gpt-6-luna",
    "context_sha256": "ca8993d2b612cf0533d94320face2805f4b6ca3f50e81f923a2327effd205e60",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "Clause (c) gives both n=1 sectors as H and both projections as I, so every assigned one-particle position or momentum operator satisfies clause (e), including its domain condition. The blanket contrary assertion was false. Repaired Remarks to state this case and require checking preservation for n>=2 rather than asserting universal failure (zero antisymmetric sectors are also possible). Also corrected nonexistent P6 clause (f) to its labels clause (i). Definition and physical_scope are unchanged; no supplier-interface event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-identical-particles-framework-orbital-occupation-model",
    "model": "gpt-6-luna",
    "context_sha256": "786e85eeb02ef867ee2a080c8c0aa61070e721c9b0e507b564f81e26ace72835",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "P2 Postulate introduction explicitly requires AC and says consumers of its general spectral-PVM construction inherit it; observable Definition (b) likewise requires AC and Countable Choice. Orbital Definition (c) invokes precisely that reading, while its original Choice remark denied further choice. Confirmed nonfatal inherited-hypothesis declaration defect: the finite projections already exhibit the law without arbitrary-index selection, so the finite mathematics is not false. Added def-axiom-of-choice, its mathematical-premise role, explicit inherited hypothesis and precise finite/general distinction; synchronized the owning manifest. Occupation formulas, finite-mode idealization and empirical qualifications are unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-nrqm-identical-particles-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "e0b3e407e96147b4673aefc89773bb8909d85820db610ea0a44d3756e9ad60a4",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Species Definition (b) declares mass, spin and statistics for each species and q only for a charged species. The scope prose incorrectly made charge a universal declaration. Added that exact qualification; no neutral charge convention, changed sector, empirical value or measurement is introduced. The stated conditional results and uncertainty/testing paragraphs remain sound under the supplier definitions, including the corrected inherited Choice declaration.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_published_change",
    "reason": "All ten direct item consumers of the changed occupation interface are draft members of the frozen frontier; the scope remark has no item consumers. No published supplier or consumer was repaired or invalidated by these changes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-central-framework-central-potential-model",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "reason": "Definition(e) asserts a zero continuum threshold for every bounded central potential. For V=-C almost everywhere, the free Fourier multiplier becomes c|xi|^2-C, with spectrum [-C,infinity). Repaired by retaining the general model and explicitly treating zero as an energy reference; a threshold needs separate spectral determination.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-central-framework-coulomb-and-hydrogen-model",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "Definition(c) omitted k's unit and mislabeled it as an energy attribute. The cited Kummer equation is A_l u=-k^2 u; k has unit m^{-1} and E(k)=-hbar^2 k^2/(2m) J. Repaired all three types explicitly, with dimensionless 2kr; no radial template, domain or energy prediction changed.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The eigenvalue list and atom rule alone do not exclude non-atomic negative spectral measure. Step 3.1 omitted the essential completeness argument already proved in step 1.2. It now shows the projection of the negative complement of {E_n} annihilates the complete eigenfamily, hence the entire negative spectral subspace, and is zero. This is a local omitted appeal, not a false spectrum claim.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-central-coulomb-bound-state-radial-distributions",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "reason": "The radial item says only P1, P2 and P5 were used although both cited physical suppliers assume P4; P4 is inherited through the adopted model but must be recorded explicitly. Additionally its public scope falsely factorizes every bound eigenvector: (Psi_200+Psi_210)/sqrt(2) has position cross terms and radial marginal (p_20+p_21)/2. This additional false public claim is fatal logic; the P4 omission is nonfatal. Repaired P4 declarations and proved the general finite-superposition law and radial mixture, retaining the labelled product law.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "Magnetic label/mass collision and closed-span/pure-preparation wording corrected without altering Coulomb spectral conclusions.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-central-coulomb-bound-state-radial-distributions",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "F2 now cites exhaustion clause (a) for the nontermination L^2 converse, with the exact mathematical prerequisite declared.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_review",
    "affected_ids": [],
    "reason": "All direct item consumers inspected for these four interfaces currently have status draft. No published consumer defect or repair was found; no published content was edited.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-nrqm-approximations-finite-rank-gapped-cluster-projection",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The local resolvent is explicitly (z-H)^-1, whereas the CC supplier represents (H-z)^-1 by (t-z)^-1. The stated projection sign is correct, but steps 3.2 and 6.1 left the supplier-to-local sign conversion implicit. This is a source-convention omission rather than a false contour formula: negating the supplied inverse gives the required multiplier (z-t)^-1. Made that elementary conversion explicit in F1 and both steps; the statement and rank argument are preserved.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-nrqm-approximations-framework-perturbed-family-model",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The title and physical_scope promised a scalar followed label for arbitrary finite multiplicity. Clause (c)(i) correctly supplies a cluster for r>1 and a unique analytic scalar only for r=1. Corrected the title and scope to cluster; checked Kato-Rellich, reduced-inverse sign and zero-norm branch without changing Definition.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-nrqm-approximations-framework-variational-trial-model",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The ladder convention necessarily gives E0=E1: the bottom belongs to the nonempty closed bounded-below spectrum; it is either the first discrete level or the essential threshold padding an empty list. Replaced the false scope denial with this two-case argument. No ground eigenvector or attainment is assumed; the form and gap definitions remain intact.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-nrqm-approximations-framework-wkb-regime-model",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "In u second derivative = (W-lambda)u/h^2 the allowed local wavenumber is p/h and phase is the integral of p divided by h. Corrected those definitions and distinguished forbidden action S from exponent S/h. The fixed-profile family, turning hypotheses and exact scattering-current ratio are unchanged. Teschl Section 9.7 is now cited only for spectral background, as its relative-bound and spectrum discussion does not supply an Airy connection.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json",
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-nrqm-approximations-two-level-finite-gap-correction",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The model Definition (a) explicitly assumes CC and AC, whereas Given named only CC. Carried AC into Given and declared dependencies. Corrected L1 to the open contour interior and justified identification of the exact lower eigenvalue throughout 2|lambda|c/g<1. The final remark now accurately calls the cubic bound non-sharp since the exact remainder is quartic. Eigenbasis, Taylor coefficients and rationalized half-radius remainder are preserved.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-nrqm-approximations-zeeman-multiplet-splitting",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The cited precession theorem acts on L2(R3;C3) with a kinetic term and does not directly cover the declared C3 family. Replaced that application with the matrix-exponential product rule and solved its spin-commutator equations locally, yielding the stated signed rotation and conserved S3. The finite-spin-matrix supplier now explicitly supplies the internal eigenlines, rather than falsely attributing one-dimensional spatial eigenspaces to the amplified spin theorem. Exact spectra and degenerate window checks are retained.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "rem-nrqm-approximations-scope-and-empirical-status",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The textbook Section 9.1.2 conjecture concerns a coupling ramp. P4 (ii) supplies only a fixed-generator autonomous group, while (iv) requires separate driven assumptions. Restricted the population-conservation explanation to each fixed lambda and explicitly excluded an instantaneous-branch claim during a ramp. No spectral calculation, ground-state attainment or empirical claim was added.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-nrqm-approximations-smooth-barrier-tunnelling-limits",
    "severity": "fatal",
    "disposition": "fixed",
    "reason": "The supplier guarantees its quantitative transmission estimate only for 0<h<h0, even if the displayed denominator is positive. Restored h0 and that range in Example (a), L1 and step 1.1, with fixed profile data and nonnegative error constants. The endpoint action identity, limiting ratio and exact rectangular prefactor 16E(U-E)/U^2 are preserved.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-nrqm-approximations-stark-finite-level-shift",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The exact eigenvalue separation is sqrt(Delta^2+4(Drel E)^2); only its small-field correction is quadratic. Corrected the title accordingly and distinguished E second derivative at zero from the Taylor coefficient. Checked radial and angular normalizations, dipole sign and rephasing, positive finite-model gap and rationalized remainder. Replaced the unlinked two-level proof reference by its explicit characteristic-polynomial argument, preserving the spectrum and truncation.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "rem-nrqm-approximations-examples-scope-limits",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "The supplied Stark levels differ by sqrt(Delta^2+4(Drel E)^2), whose small-field change starts at quadratic order. Replaced exact quadratic splitting by exact square-root separation with leading quadratic correction. Rechecked all four summaries against the repaired fixed-coupling, finite-spin and small-h interfaces; none asserts a measurement, transition or equilibration.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "pthm-nrqm-approximations-turning-point-connection",
    "severity": "nonfatal",
    "disposition": "frontier-owner-required",
    "reason": "Current F4 calls scaled momentum p the wavenumber; F3 uses eta_+ for both a fixed endpoint and the variable positive part in phi_h; the orientation remark fails to distinguish signed-phase reversal from coordinate reflection.",
    "affected_use": "F4 last clause, F3 phi_h definition and Remarks Orientation final sentence.",
    "invalidated_claim": "These prose/notation clauses are defective; the Statement independently uses the scaled phase and the supplier has the correct variable positive-part envelopes.",
    "minimality": "Correct the F4 noun, write max(eta,0) in F3, and specify that the trig interchange applies only to theta -> -theta; no widening of the main claim.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json",
    "source_urls": []
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-scoped-review",
    "subject": "batch-59 direct supplier/consumer uses",
    "disposition": "no-new-published-defect-identified",
    "reason": "The CC resolvent multiplier uses the opposite inverse convention correctly; the defect lies in the assigned consumer conversion. Direct consumers found in this scope are draft frontier items and A/B pages; no published carrier was edited or newly classified.",
    "evidence_path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u59.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-cm-finite-regularity-canonical-calculus",
    "model": "gpt-6-luna",
    "context_sha256": "924777a29e862936b21ce9e50b08973c85ac1fd6fe0a554e5e878cf7ca011c1a",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The Definition explicitly distinguishes a canonical map (pullback equality) from a canonical transformation (diffeomorphism) and a local transformation (local diffeomorphism). The imported smooth definition has the same pullback equality and separately conditions its three terms on diffeomorphism, local diffeomorphism, or embedding. Smooth-case agreement does not identify every canonical map with an embedding. The polar covering counterexample satisfies the map definition and violates no claimed injectivity.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart",
    "model": "gpt-6-luna",
    "context_sha256": "2737d15e915b648d6cb173380a72b2fb38b7b03c5d9fab4a9bf58928a3abf98c",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Step 2.1 cites F3 for the equality omega(X_f,X_g)={f,g} although the finite-regularity definition delegates that equality to this proposition. The intervening matrix computation already proves the equality independently, so this is a nonfatal circular presentation rather than a missing mathematical argument. Reordered the computation to start with omega(X_f,X_g), reduce it using J^T=-J and J^2=-I, and only then identify the result with the defined coordinate bracket. Field existence, uniqueness, equations and C^1 regularity remain valid; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cor-cm-hamiltonian-flow-preserves-phase-volume",
    "model": "gpt-6-luna",
    "context_sha256": "52f06547cb18f6c3d10bd9f516525493cb1bfd09e9a5cccebdd0037dd17ae3ef",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 omits a direct named supplier for Borel-to-Lebesgue measurability and the finite-measure indicator argument. This is nonfatal citation bookkeeping: the cited change-of-variables supplier already has the Borel completion and box-measure results in its dependency closure. Added explicit Borel-measurability, finite-box-measure, simple-integral and simple/nonnegative-integral agreement dependencies; F4 now proves finite indicator integral from a containing box. Countable Choice remains assumed. Checked the fixed-endpoint inverse and unit determinant for both evolution cases; Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-cm-scope-of-complete-integrability-and-action-angle",
    "model": "gpt-6-luna",
    "context_sha256": "feb89acbf0cd12d9aa7ece999e6f9df0d1b638a835f5f85e6300a12df61d4e17",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The phrase AC_omega enters only in step 4.1 is false as a dependency-scope description: the compact-flow corollary explicitly assumes AC_omega, and the lattice and torus statements inherit it. The local action-angle theorem already assumes AC_omega, so its conclusion is unaffected. Replaced the only-use wording with inherited compact-flow/lattice/torus assumptions plus the direct period-counterexample sequence use in step 4.1; declared the compact-flow corollary and countable-choice definition in deps and dependency_roles. Remarks only, no Statement or Definition changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-cm-cylinder-shift-has-no-global-generating-function",
    "model": "gpt-6-luna",
    "context_sha256": "8455fadffa6c1bfaecd7049237630405951a121bcd6e0c9d0a88fa05057edb6e",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The title covers global generators while the proof explicitly handles only second kind. This is nonfatal proof scope: a first-kind generator is impossible even locally, since Q=theta+k would make the relation I=S_theta(theta,Q) independent of the varying input momentum I. Added that elementary contradiction as step 4.1, preserving the title and all original Statement clauses. Also corrected F1 to require a surjective local diffeomorphism for injective pullback; pi has exactly this hypothesis. Checked descended forms, loop non-exactness, and the periodic integration constant c(theta)=hat S(theta,0) in the valid second-kind proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-cm-linear-shear-generating-function",
    "model": "gpt-6-luna",
    "context_sha256": "77a061b2b3474f23d085213501d7a04f01032c386203f1086a4c896d5b87574e",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "F2 speaks of a canonical map, which the finite-regularity definition defines by pullback equality without global injectivity. Clause 1 of the cited matrix-test proposition proves exactly that equality iff D Psi^T J D Psi=J; clause 2 separately adds the diffeomorphism condition for a canonical transformation. The shear additionally is a smooth global diffeomorphism, with inverse (Q,P) maps to (Q,P+lambda Q); direct multiplication gives J. The claimed counterexample distinguishes transformations from maps and does not refute F2 or the Example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-cm-scope-of-canonical-methods",
    "model": "gpt-6-luna",
    "context_sha256": "461de424a541ab1653f63ff0a0f03d653d64b20200ea0dc3662943be1e1f7a30",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The published smooth Hamiltonian-field existence/uniqueness theorem is explicitly restated in the division-of-labour bullet but absent from deps. Its actual Statement is the unique smooth solution of iota_X omega=dH on a symplectic manifold for smooth H, matching the restatement. Added that theorem to deps and dependency_roles and synchronized the owned manifest row under the shared lock. This is a nonfatal omitted dependency declaration; mathematical prose and all supplier Statements remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-cm-cylinder-shift-obstruction-checks",
    "model": "gpt-6-luna",
    "context_sha256": "7e7047272ae403f4c62db992b9b736846c4c9a9e37b5665ba4c5ad015304e0d4",
    "outcome": "false_positive",
    "status": "dismissed",
    "reason": "The integration constant in hat S(theta,P)=theta P+mP+c(theta) is necessarily c(theta)=hat S(theta,0), by evaluating at P=0. Since the lifted S is 1-periodic in theta at every fixed P, it follows at P=0 that c(1)=c(0). The other generating relation gives c prime=-1 and hence c(1)-c(0)=-1, a valid contradiction. Periodicity at general P also gives c(1)-c(0)=-P, yielding another incompatibility, and does not negate periodicity at P=0. Checked local mixed derivative 1 and the loop integral 1; no item edit is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "thm-liouville-arnold-action-angle-theorem",
    "status": "owner-review-required",
    "item_status": "published",
    "route": "root-mathematics-owner; imported supplier is read-only",
    "path": "items/thm-liouville-arnold-action-angle-theorem.md",
    "locator": "Proof step 5.2",
    "snippet": "On the ball [F4] gives $\\tau=d\\alpha$.",
    "affected_use": "The two-form tau=sigma*omega needs a one-form primitive. F4 cites thm-poincare-lemma-for-star-shaped-domains, whose exact Statement treats a closed C^1 vector field and scalar potential (one-form exactness). It does not supply the needed two-form primitive.",
    "invalidated_claim": "The asserted derivation tau=dalpha is unsupported by the cited one-form theorem; this is a proof-supplier gap, not evidence the established action-angle theorem is false.",
    "minimality": "Replace this exact k=2 citation/use with an adequate closed-two-form primitive argument; the local lem-cm-closed-two-form-radial-primitive already supplies that claim, but imported mathematical originals are read-only here.",
    "reason": "The two-form tau=sigma*omega needs a one-form primitive. F4 cites thm-poincare-lemma-for-star-shaped-domains, whose exact Statement treats a closed C^1 vector field and scalar potential (one-form exactness). It does not supply the needed two-form primitive.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-parameter-kam-torus-invariance-and-lagrangianity",
    "status": "owner-review-required",
    "item_status": "draft",
    "route": "frontier-owning-unit",
    "path": "items/thm-parameter-kam-torus-invariance-and-lagrangianity.md",
    "locator": "Facts F2",
    "snippet": "$X_h=J\\nabla h=(-h_\\vartheta,h_I)$",
    "affected_use": "The cited phase-domain J is angle-first [[0,I],[-I,0]], whereas the displayed components and phase maps are action-first (I,vartheta). With h=I_1, action-first J gradient h=(0,-e_1), while the written component formula is (0,e_1).",
    "invalidated_claim": "The action-first equality X=J gradient is false for the cited J; the component formula itself has the correct sign.",
    "minimality": "Define J_action=-J under the coordinate permutation, or write the component formula directly; inspect only the actual transport and matrix uses before classifying their consequences.",
    "reason": "The cited phase-domain J is angle-first [[0,I],[-I,0]], whereas the displayed components and phase maps are action-first (I,vartheta). With h=I_1, action-first J gradient h=(0,-e_1), while the written component formula is (0,e_1).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-nondegenerate-frequency-reduction-and-alpha-square-smallness",
    "status": "owner-review-required",
    "item_status": "draft",
    "route": "frontier-owning-unit",
    "path": "items/lem-nondegenerate-frequency-reduction-and-alpha-square-smallness.md",
    "locator": "Facts F3",
    "snippet": "$X_f=J\\nabla f=(-f_\\vartheta,f_I)$",
    "affected_use": "Clause 4 explicitly orders coordinates as (p,vartheta). The cited J is angle-first. For f=p_1 the cited J gives (0,-e_1) in that order, contradicting the component formula (0,e_1).",
    "invalidated_claim": "The unpermuted matrix equality in F3 is false in the declared coordinate order; the intended component field and translation identity may remain valid.",
    "minimality": "Use the permuted matrix -J for action-first vectors and gradients, keeping the component formula; review the exact translation/transport use rather than altering the theorem without evidence.",
    "reason": "Clause 4 explicitly orders coordinates as (p,vartheta). The cited J is angle-first. For f=p_1 the cited J gives (0,-e_1) in that order, contradicting the component formula (0,e_1).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-holomorphic-kam-domain-and-diophantine-labels",
    "status": "owner-review-required",
    "item_status": "draft",
    "route": "frontier-owning-unit",
    "path": "items/def-holomorphic-kam-domain-and-diophantine-labels.md",
    "locator": "Definition Hamiltonian paragraph",
    "snippet": "the **Hamiltonian vector field** of a $C^1$ Hamiltonian $H$ is, by",
    "affected_use": "The cited prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart assumes C^2 Hamiltonians and proves a C^1 field; the local definition here attributes its C^1-input extension to that stronger-regularity result.",
    "invalidated_claim": "The attribution of the C^1-input field to a C^2-input supplier is not faithful; the coordinate expression is a valid continuous-field extension and actual holomorphic data have adequate regularity.",
    "minimality": "Identify the C^1 continuous field as a local definition justified by the explicit contraction formula; preserve the existing C^2 theorem and holomorphic regime.",
    "reason": "The cited prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart assumes C^2 Hamiltonians and proves a C^1 field; the local definition here attributes its C^1-input extension to that stronger-regularity result.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "prop-cm-canonical-map-locally-has-a-generating-function",
    "status": "owner-review-required",
    "item_status": "draft",
    "route": "frontier-owning-unit",
    "path": "items/prop-cm-canonical-map-locally-has-a-generating-function.md",
    "locator": "Facts F2 and Proof steps 1.1/3.1",
    "snippet": "The ball $W''$ is open and star-shaped",
    "affected_use": "F2 and step 1.1 obtain an open inverse-function image W-double-prime, while Statement and step 3.1 use an open ball. The explicit restriction to a contained ball is missing. F2 also attributes a C^2 inverse to the cited C^1 inverse theorem.",
    "invalidated_claim": "The ball hypothesis required by the radial-potential proof is asserted without the restriction; the C^2 upgrade needs the derivative-formula argument. Both are elementary local completions.",
    "minimality": "Choose a ball around F(z0) contained in the inverse image neighbourhood and replace W by its inverse image. For C^2 regularity use DG=(DF composed with G)^(-1), which is C^1, so G is C^2.",
    "reason": "F2 and step 1.1 obtain an open inverse-function image W-double-prime, while Statement and step 3.1 use an open ball. The explicit restriction to a contained ball is missing. F2 also attributes a C^2 inverse to the cited C^1 inverse theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-cm-generating-function-of-the-first-and-second-kind",
    "status": "owner-review-required",
    "item_status": "draft",
    "route": "frontier-owning-unit",
    "path": "items/def-cm-generating-function-of-the-first-and-second-kind.md",
    "locator": "Definition first-kind inverse paragraph",
    "snippet": "makes $\\Psi$ a local $C^2$ diffeomorphism",
    "affected_use": "The exact thm-euclidean-inverse-function-theorem Statement supplies only a C^1 inverse, with derivative Dg=(D Psi composed with g)^(-1). Here Psi is C^2.",
    "invalidated_claim": "The C^2 upgrade is true, but its attribution as the direct stated output of that theorem omits the local regularity argument.",
    "minimality": "Append that D Psi is C^1 and g is C^1, so the matrix-inverse derivative formula makes Dg C^1 and hence g C^2. No change of generating data or domain is needed.",
    "reason": "The exact thm-euclidean-inverse-function-theorem Statement supplies only a C^1 inverse, with derivative Dg=(D Psi composed with g)^(-1). Here Psi is C^2.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-driven-dynamics-framework-adiabatic-protocol",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Binney Section 9.1.2 concerns the linear Stark effect, not slow following. Section 11.1, printed pp. 245-246 (PDF pp. 253-254), gives a textbook nondegenerate adiabatic approximation. Corrected the reference and explicitly distinguished it from a quantitative gapped-subspace theorem; the model Definition and its local evolution and spectral prerequisites are unchanged.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nrqm-driven-dynamics-framework-interaction-picture",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The amplitude is defined as exp(i E_b(t-s)/hbar) times the Schroedinger matrix coefficient. The decomposition gives the latter coefficient exp(i(s E_a-t E_b)/hbar)<U_I phi_a,phi_b>; multiplying the defining phase gives exactly exp(is(E_a-E_b)/hbar), as clause (e) states. The rejection omitted the amplitude definition; no item edit is licensed by this false positive.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-driven-dynamics-bounded-norm-propagator",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The compact interval permits a=b, whereas the norm Dyson supplier restricts derivatives to a<b. Added the same endpoint convention without removing singleton algebraic or norm conclusions, and treated U(a,a)=I explicitly in step 1.1. Also corrected step 1.2: the exp(K tau)-1 estimate comes from F1, not substitution N=0 in F2; corrected the Teschl attribution to autonomous evolution.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-driven-dynamics-common-domain-propagator",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Clauses (a)-(c) asserted strong derivatives on an allowed singleton although proof 1.1 correctly made no such assertion. Made the Statement match the model and supplier endpoint convention, defined L=0 for a=b, and separated the singleton in proof 2.1. The graph bound, domain invariance and all nondegenerate strong claims remain intact. Corrected source titles that attributed nonautonomous and forced-oscillator theorems to autonomous textbook sections.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-driven-dynamics-circular-drive-exact-rabi",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The declared compact interval need not contain the pi-pulse or return time: I=[0,1] seconds, s=0 and Omega1=1/second is a counterexample to unconditional evaluations. Qualified those evaluations by s+tau in I and periodicity by both elapsed times in I-s. The exact propagator and Rabi population formulas, including the zero-coupling case, are preserved. Added the inherited singleton derivative convention.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "pthm-nrqm-driven-dynamics-mild-propagator-and-pictures",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Convergence of a Dyson sum alone is not uniqueness, but the actual cited supplier proof 3.1 proves vector Volterra uniqueness in either time direction. Made the missing transfer explicit: conjugate the difference of two mild solutions by E(-t), iterate w=int B w, and let M(K|t-s|)^n/n! tend to zero. Also stated the inherited singleton derivative convention and corrected Teschl to autonomous evolution. The model and its outcome-law assertions are preserved.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-driven-dynamics-ammonia-two-level-resonance",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "L1 omitted omega nonzero and the initial-up preparation required by the population supplier. The Example already specifies initial |E> in clause (b), so its claimed inversion and bound are sound for that preparation. Restored those exact hypotheses in L1 and explicitly instantiated the compact-interval model and psi(s)=|E>=e_up in step 1.1. At resonance epsilon=x(1+3 mu E0 tau/hbar), giving the unchanged pulse bound (2+3pi)/100. No Example or physical-scope interface was changed.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-driven-dynamics-circular-drive-exact-populations",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The example did not declare a time interval containing its pulse evaluations. Preserved all evaluations and the all-time periodicity by explicitly constructing U_c from compatible compact-interval restrictions: two choices embed in a larger compact interval and uniqueness identifies their restricted propagators. Each displayed time now has a valid compact interval for L1. Checked resonance b=2 gives 1/2,1,0 and detuning gives 1/4, with unchanged phase conventions and Born scope.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (a) already correctly gives epsilon(0)=1/100 and population bound 2epsilon(0)=1/50. Clause (d) and step 2.1 used the ambiguous phrase bound next to propagators, conflating those two bounds. Replaced it with both explicit values, retained all correct budget values and the exact averaged 1/4, restored the initial-up condition in L1, and declared a compact interval containing the displayed times. This is a presentation/citation qualification defect rather than a fatal numerical derivation.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-nrqm-driven-dynamics-driven-oscillator-coherent-response",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "L1 quoted a forward-time factorization while the Example includes t<s. The actual mathematical supplier Proof already extends the same formula with oriented integrals. Added a complete local transfer: oriented sine/cosine response, zero-data uniqueness, legitimate product differentiation on Y, cancellation E+(q pprime-p qprime)/2=Sprime=fq/2, and strong uniqueness identify W=U for either endpoint order. Recorded coherent vectors in Y and corrected the Teschl oscillator locator. Rechecked the same argument after expressing the supplier Proof locator in words to avoid a spurious local-step reference. The Example and physical scope are unchanged.",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "report": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u60.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "60",
    "status": "no-new-published-findings",
    "reason": "All eleven direct item consumers of the changed interfaces are currently draft. No potentially defective published consuming use was discovered in this examination. Imported mathematics and published carriers were not edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-scattering-three-dimensional-current-and-flux",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The Euclidean C^k supplier only defines maps on open sets. Clause (c) lacked a sphere convention. Added the explicit C^1 radial-extension convention on R^3 minus zero and used it in step 1.5; the radial calculation and continuity/divergence arguments are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-scattering-model-scaling-correspondence",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "F5's phrase 'norm limit of the bounded integrals' was ambiguous for an unbounded operator. The cited definition takes vector-norm limits on D(f(E)); step 3.1 already uses exactly that convergence, while step 2.1 correctly uses operator norm only for bounded uniformly approximated functions. Clarified F5 without changing the Statement or proof."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-scattering-framework-short-range-model",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "The bounded-potential supplier does not cover the L^2 local part in class (b)2. Added the earlier mathematical resolvent-tail theorem as a direct prerequisite and specified its domain-inclusion/self-adjointness conclusion at W_*, the L^2 and bounded scaling norms, and transport to W^{2,2}_x. No potential class or physical assumption was weakened."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-scattering-stationary-beam-and-cross-section-model",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "evidence": "The old exterior-only equation allowed arbitrary outgoing coefficients and arbitrary interior extensions. Repaired clause (c) with a global H^2_loc distributional equation, explicit uniform remainder/derivative bounds and the existing invertible outgoing integral selector for the bounded compact-support class. The selected amplitude is unique for V,k,d, independent of enclosing radius; no general resolvent-tail stationary existence is asserted."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "F1's auxiliary choice hbar'=1 gives the scaling lemma's time t E_* rather than t E_*/hbar. Replaced it by hbar'=hbar and m'=hbar^2/(2E_*), which gives c=E_* and exactly tau=t E_*/hbar. All proof steps already used the correct latter time; the Statement is unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-scattering-partial-wave-and-phase-shift-readings",
    "outcome": "false_positive",
    "status": "no_item_change",
    "evidence": "False positive: 'on this page' refers to qm-three-dimensional-scattering, which contains pthm-nrqm-scattering-partial-wave-cross-section with proofs in steps 1.1–4.1. The definition also directly declares thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence in deps and dependency_roles; that supplier constructs the radial solutions and proves the nonzero Wronskian, unit modulus and convergent series. The definition does not claim its own Proof section."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-scattering-single-channel-resonance-model",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Clause (a) incorrectly identified l alone with the supplier's angular label (l,m). Repaired it to define a single degree-l partial-wave sector, span of the 2l+1 harmonics Y_lmu, all sharing S_l. The existing (2l+1) cross-section factor is therefore explicit degeneracy, not a reading for a single fixed angular label. Rational factor, energy domain and empirical exclusions are unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-scattering-coulomb-dollard-model",
    "outcome": "false_positive",
    "status": "no_item_change",
    "evidence": "False positive: qm-three-dimensional-scattering contains pthm-nrqm-scattering-coulomb-dollard-completeness, whose Statement (a)–(c) asserts modified existence/completeness and whose proof steps 3.1–5.1 instantiate the Dollard mathematical suppliers with explicit numerical-coordinate/time scaling and fixed incoming/outgoing phases. Clause (c) defines the limits conditionally; clause (d) accurately locates their separate theorem on the page, without claiming a proof inside the definition."
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-scattering-scope-and-empirical-status",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "evidence": "The resolvent-tail completeness conclusion was cited in Remarks but missing from deps and dependency_roles. Added it with physical-result role. Also supplied the three actual prerequisites for the unlinked partial-wave series, on-shell identification and resonance-algebra claims, with exact theorem links. These are citation/dependency repairs; physical scope and empirical qualifications are unchanged."
  },
  {
    "ledger": "published-consumer",
    "status": "no_published_consumers_affected",
    "reason": "Every item found in the direct dependency/reference inventory is a draft member of the frozen frontier. No published consumer was edited or assigned an audit status."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-wave-operator-existence-and-free-continuity",
    "supplier": "def-nrqm-scattering-framework-short-range-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F5 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "Only the class-2 self-adjointness justification changed. Potential classes, domains, dilation, quantities and spectral vocabulary are identical; compact-support uses remain covered by their original bounded-potential supplier. Refresh only the F5 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-compact-support-asymptotic-completeness",
    "supplier": "def-nrqm-scattering-framework-short-range-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F3 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "Only the class-2 self-adjointness justification changed. Potential classes, domains, dilation, quantities and spectral vocabulary are identical; compact-support uses remain covered by their original bounded-potential supplier. Refresh only the F3 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-stationary-wave-amplitude-and-flux",
    "supplier": "lem-nrqm-scattering-three-dimensional-current-and-flux",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F4 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "The integral amplitude is smooth as a restriction of its compact-source exponential integral, so its radial extension is C^1; current identities are unchanged. Refresh only the F4 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-stationary-wave-amplitude-and-flux",
    "supplier": "def-nrqm-scattering-stationary-beam-and-cross-section-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F4 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "All actual compact-support amplitudes are the same invertible outgoing integral solution. Its global H^2_loc equation and uniform error/radial-derivative bounds already appear in the stationary supplier/theorem, so it meets the repaired definition. Refresh only the F4 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-stationary-wave-amplitude-and-flux",
    "supplier": "def-nrqm-scattering-stationary-beam-and-cross-section-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F5 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "All actual compact-support amplitudes are the same invertible outgoing integral solution. Its global H^2_loc equation and uniform error/radial-derivative bounds already appear in the stationary supplier/theorem, so it meets the repaired definition. Refresh only the F4 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary. Refresh only the F5 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-single-channel-resonance-cross-section",
    "supplier": "def-nrqm-scattering-single-channel-resonance-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F1 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "The formula is unchanged and uses the full degree-l summand. The theorem retains 2l+1; the l=0 example has multiplicity one, and contextual remarks make no fixed-angular-label calculation. Refresh only the F1 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-scattering-square-well-s-wave-phase-shift",
    "supplier": "def-nrqm-scattering-framework-short-range-model",
    "classification": "metadata_quote_drift",
    "route": "frontier-owner",
    "status": "proposed_contract_refresh",
    "affected_use": "F3 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json",
    "invalidated_claim": "The recorded full-section citation quote is stale; the mathematical claim remains sound.",
    "minimality": "Only the class-2 self-adjointness justification changed. Potential classes, domains, dilation, quantities and spectral vocabulary are identical; compact-support uses remain covered by their original bounded-potential supplier. Refresh only the F3 citation quote in research/physics-cm-qm-gr-79-2026-10-11-batch-61.proof-contracts.json; no consumer item interface change is necessary.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-scattering-wave-operator-existence-and-free-continuity",
    "supplier": "thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining",
    "route": "frontier-owner",
    "status": "reported_outside_assignment",
    "reason": "Read-only proof-contract diagnostic reports that F3's stored Statement quote no longer occurs in the current Cook supplier. This is an observed metadata mismatch outside this assignment; no mathematical or historical fatal classification is inferred.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-nrqm-many-body-spectral-mean-and-defined-trace-product",
    "model": "gpt-6-luna",
    "context_sha256": "92259249c5750f04523807e8cc149f3464c0a2d632c8a3562019020015433bdc",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "F4 incorrectly included the empty chain in the union upper-bound claim. The initial eigenfamily is an element of the inclusion poset and bounds the empty chain; nonempty chain unions remain orthonormal extensions. Repaired F4 and its choice boundary. Weighted spectral integrals, the literal A rho domain condition and the bounded adjoint closure prove (a)-(c) without unbounded cyclicity."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-many-body-framework-declared-fixed-n-model",
    "model": "gpt-6-luna",
    "context_sha256": "996b1a6bac217c3b432997cf7d4c40f607edb8e6cd507a8f98d1c8bcde45355b",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Clauses (a) and (d)(ii) wrongly confine AC to Coulomb construction although adopted P2/P4/P5 explicitly assume it. Both clauses now distinguish the CC-only bounded realization from inherited general spectral/evolution AC. P7 is now a direct physical-assumption supplier for the already stated apparatus and parameter qualifications. Spatial domains, finite-mode operators, species sectors, units and all energy assignments remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-many-body-framework-entropy-and-free-energy",
    "model": "gpt-6-luna",
    "context_sha256": "d3a11c9d85228ea5205cf51b8413c5804768443262222cfad807c27e8f426372",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Clause (c) invokes P7 for temperature and apparatus identifications but omitted that supplier from deps and dependency_roles. Added P7 explicitly with its declared comparison, calibration and empirical-input conditions; this supplies a discipline for comparisons, not a temperature measurement or thermometer theorem. Finite-sector entropy bounds and free-energy identities retain their exact mathematical suppliers and unchanged formulas."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-many-body-exchange-energy-splitting",
    "model": "gpt-6-luna",
    "context_sha256": "2a73823b2328c5833ca8b8584fc68f3c47826ce502696f2034ee8d93e2f7e9f4",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The Statement requires the spatial realization of the declared fixed-N model, not arbitrary bounded functions. That supplier Definition (b)(i) and (c)(i) explicitly require real measurable bounded V_ext and W, with even W. Thus the direct/exchange supplier (c) and the H2-domain realization have all measurability hypotheses. Checked spin transport, product H2 domains, vanishing one-body cross terms, real exchange integrals and Coulomb X >= 0; no item edit is warranted."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-many-body-noninteracting-sector-diagonalization",
    "model": "gpt-6-luna",
    "context_sha256": "d6bda3115e234e75890909f7da2829cba8c92eaab2e125df7fafd067269cc968",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Clause (c) omitted the unit of its positive beta parameter although assigned energies are in joules. It now quantifies positive inverse-energy beta in J^-1, leaving every numerical partition identity and energy bound unchanged. Checked orthogonal sector bases, trace multiplicities, negative energies, zero fermion sector and equality exactly on the ground eigenspace. This is a dimensional declaration defect, not a false finite spectral calculation."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-many-body-thermal-occupation-predictions",
    "model": "gpt-6-luna",
    "context_sha256": "8db281e48ca7dd35fffcd54fd8b2352ba2555e846871d9475032a8af15710acd",
    "outcome": "confirmed_fatal",
    "status": "fixed",
    "reason": "Original step 1.3 used undefined number-variable b_n and credited fixed-N bases plus a bosonic-only direct-sum theorem with an unconstructed fermionic Hilbert realization. Steps 1.3-1.4 now define both degree sums, prove fermionic completeness and the union occupation basis locally, specify exact diagonal H/N/G domains and core closure, and identify the positive trace through exhaustive finite-support products. F2 then proves both criteria, including finite negative fermionic shifts. The unsupported continuum aside is replaced with an explicit source-scope limit. The original theorem formulas and scope are preserved.",
    "defect_type": "logic"
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-many-body-two-site-bond-thermal-ensemble",
    "model": "gpt-6-luna",
    "context_sha256": "fb7910deba5301a608f582c8fb35e2e27761441cce82bbb7e194a98022748366",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The opening explicitly says Adopt P1, P2, P4 and P7; all four are already separate physical-assumption deps. It does not assert that each cited definition independently adopts all four. Moreover the observable Definition (g) expressly records readings of P1 and P2. The entropy supplier provides the entropy/temperature vocabulary, while P7 independently qualifies sample identification. Checked the two eigenvectors, shift cancellation, partition Z_h, mean, entropy and free energy. No item edit is needed."
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-many-body-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "e3c1708e9d2954f12f113e97e957620ebd224759e10ec3428380a477877a5c26",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The opening incorrectly placed number-variable thermal mode results within the fixed-N definition. It now separates those additional ensemble reading (a)(ii) models from fixed-N realizations and restricts entropy conservation to finite sectors. Also corrected the summarized exchange splitting to 2X and the consulted Burmistrov-Lunkin locator to section 1.1.3, printed page 14. No measured data or inference is claimed; all listed results remain conditional."
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-many-body-examples-scope-limits",
    "model": "gpt-6-luna",
    "context_sha256": "95d2d32edfe37d89dd1d4c721e0a3f394558bddef27b4c179adddda33e322653",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The entropy-conservation clause is not used in the thought-experiment proof. Its current F4 and step 2.1 instead invoke clause (c), no unitary production of the canonical density; clauses (b)-(c) concern site and energy readout means. The remark now attributes the actual use to clause (c) and identifies entropy conservation as the separate clause (a). The supplied reviewer claim that the current thought experiment has no such dependency is stale, but the inaccurate entropy-use attribution is confirmed and repaired."
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble",
    "status": "owner_repair_required",
    "route": "frontier-owner",
    "path": "items/ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble.md",
    "affected_use": "Verification L1 and steps 1.1-1.2 apply the non-interacting supplier to model declarations that omit W=0.",
    "invalidated_claim": "The stated assumptions allow nonzero interactions, so the displayed sector energies and canonical weights do not follow for every declared model.",
    "minimality": "Add W=0 explicitly to both Example model declarations; do not change the exact finite-mode computations or narrow the claimed models."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-many-body-framework-one-body-reduced-operator",
    "status": "owner_repair_required",
    "route": "frontier-owner",
    "path": "items/def-nrqm-many-body-framework-one-body-reduced-operator.md",
    "affected_use": "Definition (d) claims nonuniqueness of the reduction for all admitted sectors, whereas (b) gives gamma_rho=rho for N=1.",
    "invalidated_claim": "For N=1 the reduction map is the identity, and a one-dimensional sector has only one density; the blanket noninjectivity claim is false.",
    "minimality": "Qualify possible nonuniqueness in appropriate higher-particle sectors and retain the exact N=1 identity; no edit authorized in this unit."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "lem-nrqm-photons-analyzer-projections-and-overlaps",
    "model": "gpt-6-luna",
    "context_sha256": "23d76cd1d6594bf52c350f821dac79b85b12e695e3c05d0159140f172a35c595",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "F4 asserted an uncited converse for self-adjoint idempotents; the finite rank-one residual is explicitly orthogonal to its range. The repair proves boundedness and closedness directly and replaces the unnecessary countable-choice Parseval invocation with a finite coefficient calculation. Statement and choice-free content contract are unchanged.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "post-nrqm-photons-radiation-extension-and-transverse-mode-assignment",
    "model": "gpt-6-luna",
    "context_sha256": "465a77ebf446b9a8baa31cda3e5b90d02ec202279b9a2761c4db67d84854765e",
    "outcome": "false_positive",
    "severity": "false_positive",
    "disposition": "false_positive",
    "defect_type": null,
    "reason": "The cited counterexample has a Statement refuted, not a proved Statement. Counterexample 1.1 gives ||K_m psi||=(hbar^2/(2m))||Delta psi|| tending to infinity for an explicit Schwartz vector, and 1.3 gives omega_m(k)=hbar|k|^2/(2m) tending to infinity at fixed k nonzero. These are exactly the two exclusions claimed in clause (i). Its scope excludes other topologies and separate massless assignments. No edit is warranted.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "def-nrqm-photons-framework-fixed-mode-polarization-model",
    "model": "gpt-6-luna",
    "context_sha256": "93234ac371d9aef31a7a51b13854a55ae99eef18182bf5b441b18522a39dbf3b",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "Clause (e) explicitly uses P6 for the internal-factor scope, but the direct deps and dependency_roles omitted it. P6 was already adopted through the radiation postulate; adding its exact ID and physical-assumption role records that existing premise without changing the Definition, transverse pair, state space, projection family, covariance or empirical scope. The repaired analyser supplier retains the full projection interface used in clause (c).",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "def-nrqm-photons-framework-radiation-sector-and-quantum-assignments",
    "model": "gpt-6-luna",
    "context_sha256": "0c1117bfc0e15b8a7d781ad15627ae35780ffa5fefadf5ef9523a965e80beb52",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The radiation extension already adopts P5 and P7, so the sector definition does not contradict or discard those assumptions. However clause (f) uses P7 directly and the direct metadata omit P5 and P7. Added both exact postulate IDs with physical-assumption roles; Definition, energy and signed total-momentum domains, spectral laws, chart restrictions and empirical qualifications remain unchanged.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "def-nrqm-photons-framework-ideal-counting-and-detection-model",
    "model": "gpt-6-luna",
    "context_sha256": "bd5ca59975180bff234f2a3b6e68b9178cb037d3b87d94e6b00daec15391a46f",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "The original energy-window family had no cardinality restriction, while the declared sharp-measurement supplier admits only finite or countable resolutions of identity. A singleton partition of a continuous positive-energy spectrum has zero projections and cannot resolve the identity. Clause (c) now requires a finite or countable Borel partition and gives its outcome projections and strong-sum justification from the energy PVM. Binary windows, count laws and detector/sampling qualifications are preserved.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "pthm-nrqm-photons-fixed-mode-number-and-energy-statistics",
    "model": "gpt-6-luna",
    "context_sha256": "0eb7db07feacc31e34a5e886eb2ac7ed019d4a58e6beb17130a696fa6ca4c4a9",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "Statement (d) concluded that neither preparation has sharp energy while allowing n=0 and z=0. Both give Omega, with T_0=0, H_f Omega=0 and energy law delta_0, contradicting that conclusion. The repair preserves every moment formula and explicitly distinguishes non-sharp energy for n>=1 and z!=0 from the two sharp vacuum cases. Proof 4.1 now establishes the exceptions using the atom/eigenvalue law; finite moments use phi in D(epsilon), not D(epsilon^2).",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "rem-nrqm-photons-scope-and-empirical-status",
    "model": "gpt-6-luna",
    "context_sha256": "db8d4bc06d924e2d6979f6270e1cd5855a8d9955c1d699789708c153fee2785a",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The summary included the repeated-analyser conditional state among consequences attributed only to P1, P2 and the radiation extension. The polarisation result expressly adopts P3 and only updates positive-probability outcomes. Added the P3 dependency/role and stated that additional assumption with its positivity condition. The Born-law, one-photon spectral and repaired mode-statistics summaries remain accurate; no data or empirical certainty is introduced.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "texp-nrqm-photons-classical-field-and-quantized-detection-comparison",
    "model": "gpt-6-luna",
    "context_sha256": "2ca2dd81485ff0155d81b8f2ca0cd717c998c5564f5b321d4bb26441aa40da7b",
    "outcome": "confirmed_fatal",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "For arbitrary nonzero a, the laws in (a) divide every term of the squared-amplitude expansion by ||a||^2. Clause (b) and proof 3.1 omitted this factor from the cross-term and compared raw intensity with a normalized probability. The repair gives 2 Re(<u,a1> conjugate(<u,a2>))/||a||^2 in both normalized laws and distinguishes it from raw intensity. The finite projection, Born, arbitrary complex-bin and non-discrimination arguments remain complete for all a nonzero and all decompositions.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_row",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "63",
    "id": "ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal",
    "model": "gpt-6-luna",
    "context_sha256": "29e22787a50548abc7a5883ed878e6b5e63829b6f2f833fa369b9a0571a6e00d",
    "outcome": "confirmed_nonfatal",
    "severity": "nonfatal",
    "disposition": "fixed",
    "defect_type": null,
    "reason": "The quantities supplier reserves epsilon_0 for vacuum permittivity in F/m, whereas the Example explicitly redeclared it for an independently specified positive energy in joules. This is a notation collision rather than a wrong statistical derivation. Renamed the energy to E_0 throughout, with TeX separation beta E_0. Rechecked q=exp(-beta E_0), the geometric mean and variance, equal-mean comparisons and the beta-dependent Gibbs compression; all formulas and physical qualifications are preserved.",
    "evidence": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u63.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "id": "lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers",
    "status": "draft",
    "disposition": "open_owner_repair",
    "route": "frontier_owner",
    "locator": "Proof 3.1",
    "affected_use": "m_n:=m 1_{|m|<=n} is a function on R^3, but m_n(E_h) and integral m_n dE_h require a function on the spectral line R.",
    "invalidated_claim": "m_n:=m 1_{|m|<=n} is a function on R^3, but m_n(E_h) and integral m_n dE_h require a function on the spectral line R.",
    "minimality": "Set b_n(t)=t 1_{|t|<=n} on R and m_n=b_n composed with m. Then b_n(E_h)=M_m_n by the push-forward law; the existing dominated-tail domain proof is sound.",
    "reason": "Nonfatal function-domain notation defect. Assigned energy-statistics use of the no-eigenvalue/variance clause remains sound; complete corrective construction is identified without modifying this unassigned supplier.",
    "source_paths": [
      "items/lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers.md"
    ],
    "raw_sha256": "05f2c9d4f5a0b77c69d8e5eb38558ef50425a36e265ac451b4466dc889269a11",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_finding",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "id": "lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus",
    "status": "draft",
    "disposition": "open_owner_repair",
    "route": "frontier_owner",
    "locator": "Statement resolvent clause; Proof 6.1",
    "affected_use": "Calls (lambda-z)^(-1) the resolvent; def-resolvent-and-spectrum-of-a-closed-unbounded-operator defines R_A(z)=(zI-A)^(-1). For A=0 on C and z=1, the former is -I and the latter I.",
    "invalidated_claim": "Calls (lambda-z)^(-1) the resolvent; def-resolvent-and-spectrum-of-a-closed-unbounded-operator defines R_A(z)=(zI-A)^(-1). For A=0 on C and z=1, the former is -I and the latter I.",
    "minimality": "Use (z-lambda)^(-1) for the named resolvent, or explicitly label the existing multiplier as (A-z)^(-1). Preserve spectral representation, exact domains and all norm estimates.",
    "reason": "Confirmed sign-convention defect in an unassigned draft supplier. Example L5 and Verification 1.5 use regular-PVM uniqueness, proved in 6.2 by scalar cyclic moments; its argument is independent of the mislabeled resolvent sign.",
    "source_paths": [
      "items/lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus.md"
    ],
    "raw_sha256": "ccb8e1953dbe61bb61a44818aca8432c0a7ca01205b096a75039e72c230fd078",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All direct item consumers of the repaired counting and energy-statistics interfaces are draft. The two verified digest supplier alerts also concern draft local items, so they are routed to their frontier owners; no published carrier repair or new published-consumer defect is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-light-matter-framework-finite-level-coupled-model",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (e) mislabels the autonomous flow as P4(iv); P4(ii) and the already cited evolution definition (b) supply exactly exp(-itH_LM/hbar). Corrected only the clause number. The cutoff relative-bound theorem (c) covers d>=1, and the zero-space branch is directly self-adjoint; matrices, domains, choice assumptions and SI readings remain intact."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "Clause (d) used an undefined wavevector scale despite clause (b) giving only a temporal field. Defined k in R^3 with inverse-metre units, a continuous spatial phase template with reference point x_0, characteristic length L and tolerance 0<delta<1 with |k|L<=delta. This supplies an evaluable adopted phase-neglect regime, includes the uniform k=0 case, and asserts neither Maxwell propagation nor a dynamical approximation error. The bounded Dyson hypotheses remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-nrqm-light-matter-framework-spectral-transition-and-detection",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The physical_scope blanket denial of an exact model probability contradicts Definition (e). Replaced it by the precise denial of identifying gamma_b with the exact evolved coupled-model probability, while explicitly preserving the exact ideal-window Born law in the declared normalized one-photon preparation for t>0, M!=0 and eta_0!=0. Definition (d) and the mathematical kernel supplier preserve gamma_b as a coefficient rather than a rate or measurement record."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients",
    "outcome": "false_positive",
    "status": "false_positive",
    "reason": "The premise is incorrect: the cited spectral-transition Definition (d) defines A_b and gamma_b=||A_b||^2 for all t>=0. Its integral is zero at t=0, hence gamma_b(0)=0, Psi_1(0)=0, p_b(0)=0 and epsilon_2(0)=0; no K_0 occurs in the bound or proof. Checked the first Dyson vertex, free-sector commutation, projection norm estimate and the complex Hermitian reverse-amplitude identity. The t>0 kernel identity does not restrict the pre-existing coefficient definition."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-light-matter-golden-rule-limit-and-rate-reading",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The continuity hypothesis suggests a representative but fails to declare one for J_b in the L1 quotient space. Explicitly fixed a nonnegative measurable integrable representative, defined continuity at Delta and proved independence of its value among continuous representatives. The cited approximate-identity theorem (b),(c)(iii) then gives the resonant limit and the above-cutoff bound; SI rate units and the distinction from exact decay and measured rates are retained."
  },
  {
    "ledger": "defect",
    "id": "ex-nrqm-light-matter-two-level-dipole-drive-check",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The Pauli calculation is correct but its claimed dipole-drive instance omitted the spatial-regime data. Declared L>0, x_0=0, k=0 and phase tolerance 1/10 with the spatially uniform prescribed cosine field; |k|L=0 satisfies the repaired supplier without importing a Maxwell dispersion relation. Checked Omega_1=-2dE_0/hbar, the full resonant Dyson integral, the co-rotating coefficient and the exact averaged Rabi comparison with its finite-time error bound."
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-light-matter-scope-and-empirical-status",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The phrase no preparation anywhere contradicts the adopted vacuum ray v_a tensor Omega and the explicit single-vertex one-photon preparation. Replaced it by no reported laboratory apparatus or preparation protocol. The rest of the remark accurately distinguishes the adopted cutoff and drive models, conditional coefficient and angular results, exact projection control, unasserted decay laws, and source-backed empirical reporting requirements; no empirical data or sampling precision is introduced."
  },
  {
    "ledger": "defect",
    "id": "texp-nrqm-light-matter-spectral-density-and-detected-photon-comparison",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The Statement already restricts normalized one-photon preparations to eta_0!=0, but the title and physical_scope unconditionally call the differing formal laws detected-energy laws. Aligned title, scope and clause (b) with that distinction, preserving all real couplings and equal rate coefficients. Explicitly fixed density representatives and supplied the full uniqueness proof: test signed normalized-density level sets via the published finite-measure Borel hull, then cancel K_t>0 almost everywhere to contradict nonproportionality. Tail concentration and finite-sample qualifications remain conditional."
  },
  {
    "ledger": "defect",
    "id": "rem-nrqm-light-matter-examples-scope-limits",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The rejected blanket prerequisite attribution is incorrect: the hydrogen angular calculation uses Coulomb dipole and harmonic/domain suppliers with P1/unit readings, whereas P2/P7 detector and single-vertex assumptions belong to the other model interpretations. Replaced the blanket account with separate actual supplier chains. Also repaired the digest-confirmed false summary: equality of densities at Delta alone permits J_1=J_2 and hence identical laws; added the required nonproportionality almost everywhere. Clarified that the comparisons assert no measured rate, while retaining their model rate coefficients."
  },
  {
    "ledger": "published-consumer",
    "action": "no_defect_update",
    "reason": "All direct physical-item consumers of the six changed interfaces were enumerated by canonical IDs and aliases; they are draft frozen-frontier items. No published physical consumer or mathematical consumer of these physical items was found. The published Borel-hull prerequisite was read without editing it."
  },
  {
    "ledger": "defect",
    "id": "pthm-nrqm-light-matter-stimulated-dipole-drive-transitions",
    "status": "owner_pending",
    "reason": "The linear supplier provides an averaged Rabi solution with an error bound, not an exact solution for the full linear family. The full first-order coefficient in the two-level example has four times the averaged leading small-time coefficient.",
    "affected_use": "Remarks, What the exact Rabi result adds: both circular and linear families are called an exactly solvable population oscillation.",
    "minimality": "Qualify the final remark: the circular family has an exact Rabi solution; the linear family is compared to its averaged Rabi solution through the stated error bound. The operative theorem Statement remains sound.",
    "route": "frontier-owner"
  },
  {
    "ledger": "defect",
    "id": "qm-light-matter-and-spectral-transitions-examples",
    "status": "owner_pending",
    "reason": "For the declared harmonics and Q components the plus entry is -1/sqrt(3), as the supplied example (b) proves; only their common modulus equals 1/sqrt(3).",
    "affected_use": "Angular summary assigns 1/sqrt(3) to both Y_10,Q_0Y_00 and Y_1,+/-1,Q_+/-Y_00 entries.",
    "minimality": "State the signed factors 1/sqrt(3) and minus/plus 1/sqrt(3), or label the common value explicitly as the modulus. No item interface change is necessary.",
    "route": "page-owner"
  },
  {
    "ledger": "defect",
    "id": "qm-light-matter-and-spectral-transitions-examples",
    "status": "owner_pending",
    "reason": "Equal densities J_1=J_2 satisfy that condition but give identical laws; the supplier additionally assumes nonproportionality almost everywhere.",
    "affected_use": "Spectral comparison summary claims equality of densities at the transition energy implies different normalized photon-energy laws at every t>0.",
    "minimality": "Add the existing nonproportionality hypothesis to the page summary, retaining the already-present eta_0 != 0 preparation qualification. This is outside the assigned item repair lane.",
    "route": "page-owner"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-gr-smooth-lorentzian-objects",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "SCHEMA.md explicitly requires each justified_by result to depend on its definition. The two lemmas use the primitive Lorentz form and the strict sign convention, not the exhaustiveness claim: orthonormal-coordinate Cauchy-Schwarz estimates establish nonzero causal pairing and cone agreement, then nonvanishing smooth pairing and connectedness establish constant sign. Definition Proof 1.1 establishes basis-independent topology and 1.2-3.1 establish smooth positive proper-time density, injective local-inverse gluing and normalization. No circular inference occurs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-gr-metric-selected-connection",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "false_positive",
    "status": "false-positive",
    "reason": "The published torsion definition declares justified_by: [lem-torsion-is-c-infinity-bilinear-and-skew-symmetric]; its complete proof cancels the Y(f) terms and obtains smooth pointwise alternating bilinearity. Thus the definition supplies well-defined tensoriality through the schema-sanctioned discharge, without requiring the consumer to repeat that lemma as a direct dependency. The Koszul proof constructs local smooth fields by the inverse metric, glues by uniqueness, and proves both selecting identities. In 4.1 uniqueness can be tested on global X,Y,Z, the domain of the competing connection operator; the following coordinate formula is for the constructed connection, whose local Koszul identity already holds by 2.1. The alleged missing torsion theorem is not an unsatisfied premise.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-gr-spherical-coordinates-flat-metric-components",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The indexed O_u,V_u notation suggests an unprovided simultaneous family although the final sentence explicitly intends all available neighbourhoods. This is a nonfatal quantifier/notation gap: at each z in Phi(W), a single IFT neighbourhood V contained in Phi(W) proves openness, and injectivity identifies its inverse with the unique set inverse. Replaced 2.1 by this pointwise argument. Also repaired the digest prerequisite omission with exact published trigonometric statements: derivative identities imply smoothness, cosine monotonicity and sine zeros give sine positivity on (0,pi), and circle bijectivity gives azimuth injectivity. Orthogonal Jacobian columns yield determinant r^2 sin(theta), metric diagonal (-1,1,r^2,r^2 sin^2(theta)), and inertia (3,1,0), with all excluded endpoints preserved.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-gr-connection-conditions-in-chart-components",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "reason": "The original forward proof applied the globally quantified compatibility assumption directly to chart-only fields, leaving its implication unestablished. Repair 1.2 defines D(X,Y,Z)=Xg(Y,Z)-g(nabla_XY,Z)-g(Y,nabla_XZ), proves function-linearity in all three slots by explicit Leibniz cancellations, and uses a smooth supported cutoff rho with rho(p)=1 to extend each local field globally. Global compatibility gives zero defect, and D(rho X,rho Y,rho Z)_p=rho(p)^3 D(X,Y,Z)_p gives the local identity. Published directional-law Proof 1.2-3.1 supplies locality; published chart bumps supply the cutoff. Step 2.2 now also bridges global torsion freedom to local coordinate pairs using tensoriality and extensions. The Statement, every-chart equivalences, and inherited AC_omega scope are unchanged; no family of cutoffs is selected.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "post-gr-spacetime-and-classical-domain",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (iv) excluded failure of smoothness on a nonempty open set, which misses a field such as |x^1| nonsmooth only on a hyperplane, although physical_scope already excludes weak regularity. This is a nonfatal inconsistency in the smooth-branch formulation, repaired by requiring each field to be defined and C-infinity at every point of its stated open domain, including exceptional sets with empty interior. A separately specified open domain may omit the exceptional locus and makes no extension claim across it. The global smooth metric, boundaryless four-manifold, adopted status and absence of empirical conclusions remain intact. Direct consumers use smooth model domains or the same exclusion; no necessary consumer repair or further hop was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "rem-gr-primitive-and-derived-status",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "65",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The audit said every model using an energy condition adopts it separately, contradicting post-gr-field-and-matter-assumptions (iv), which permits derivation from a specified model. Replaced that sentence with the explicit distinction: independent adoption is an extra premise; a proved consequence is a derived result conditional on its proof and prerequisites. The framework still imposes no energy condition automatically. This is a nonfatal status-exposition defect, with no new theorem or physical law claimed. Its sole direct prose consumer is the framework page, whose summary already states that a particular matter model may imply energy conditions and remains sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "status": "no-published-consumer-defect-found",
    "reason": "All direct item consumers of the changed smooth-domain clause are draft frontier items. The published torsion definition and its complete justified_by proof are sound at the used scope. No published carrier or imported snapshot was edited, and no published maintenance repair is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "route": "frontier-owner",
    "id": "ex-gr-flrw-redshift-conservation-check",
    "path": "items/ex-gr-flrw-redshift-conservation-check.md",
    "status": "owner-review-required",
    "affected_use": "[L3] The comoving congruence $n=c^{-1}\\partial_t$ is a smooth future-directed unit timelike field, $g(n,n)=-1$; a nonzero vector $V$ is future-directed exactly when $g(V,\\partial_t)<0$, and null exactly when $g(V,V)=0$ ([[lem-gr-flrw-metric-and-comoving-data]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).",
    "invalidated_claim": "The unrestricted nonzero-vector sign criterion is false: for V=partial_t+(2c/a)partial_1 in the flat FLRW chart, g(V,partial_t)=-c^2<0 but g(V,V)=3c^2>0. Future direction is defined only for nonzero causal vectors.",
    "minimality": "Add the causal hypothesis to the future-direction equivalence. The example establishes its particular tangent is null before applying the sign, so the computed result is not invalidated.",
    "reason": "Confirmed out-of-lane false fact from the rejection-blind digest; no edit or adjudication of this unassigned item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "route": "frontier-owner",
    "id": "ex-gr-cosmological-redshift-interface-record-window",
    "path": "items/ex-gr-cosmological-redshift-interface-record-window.md",
    "status": "owner-review-required",
    "affected_use": "[L3] The metric components in the product chart are $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\\gamma_{ij}$; a nonzero vector is future-directed exactly when $g(V,\\partial_t)<0$, and null exactly when $g(V,V)=0$; the comoving curve $\\gamma_x(t)=(t,x)$ is a future timelike worldline with four-velocity $U=\\partial_t=cn$, $g(U,U)=-c^2$, and its parameter $t$ is its proper time up to an additive constant ([[lem-gr-flrw-metric-and-comoving-data]] clauses (a)-(b), [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).",
    "invalidated_claim": "The unrestricted nonzero-vector sign criterion is false: for V=partial_t+(2c/a)partial_1 in the flat FLRW chart, g(V,partial_t)=-c^2<0 but g(V,V)=3c^2>0. Future direction is defined only for nonzero causal vectors.",
    "minimality": "Add the causal hypothesis to the future-direction equivalence. The example establishes its particular tangent is null before applying the sign, so the computed result is not invalidated.",
    "reason": "Confirmed out-of-lane false fact from the rejection-blind digest; no edit or adjudication of this unassigned item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "route": "frontier-owner",
    "id": "def-gr-stress-energy-tensor-field",
    "path": "items/def-gr-stress-energy-tensor-field.md",
    "status": "owner-review-required",
    "affected_use": "**Relation to the matter model.** This item defines the slot that a matter\nmodel fills. The identity of $T$ for a given model — its expression in terms of\nthe model's fields and its equation of motion — comes from that model and is\nnot part of this definition; for a model derived from an action, $T$ is the\nHilbert stress-energy tensor of that action, while a model that prescribes $T$\nby hand is a separate source model subject to the consistency conditions of the\nadopted gravitational field law. Nothing here asserts that a prescribed smooth\nsymmetric $T$ is realized by any matter model, that $T$ is conserved, or that\n$T$ satisfies any positivity condition; conservation and the energy conditions\nare separate statements, the latter defined separately in this framework.",
    "invalidated_claim": "The named Hilbert tensor has no variational mathematical definition or exact earlier supplier in this paragraph; its actual definition is on the later Einstein-and-matter page.",
    "minimality": "Define the variational construction before invoking the technical term, or make the exact later contextual reference explicit without introducing a logical prerequisite cycle.",
    "reason": "Verified the digest terminology/ordering concern under the mandatory define-before-use rule; no local proof here relies on a Hilbert-tensor conservation assertion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "route": "frontier-owner",
    "id": "post-gr-field-and-matter-assumptions",
    "path": "items/post-gr-field-and-matter-assumptions.md",
    "status": "owner-review-required",
    "affected_use": "**(ii) Smooth matter and its stress-energy tensor.** The matter of a model on\nits matter domain is represented by smooth fields on an open domain\n$U\\subseteq M$, and the model's stress-energy tensor is the smooth symmetric\ncovariant $2$-tensor field $T$ on $U$ of\n[[def-gr-stress-energy-tensor-field]], with the unit reading recorded there.\nThe relation of $T$ to the matter fields is part of the model: a model derived\nfrom an action defines $T$ as the Hilbert stress-energy tensor of that action,\nwhile a model that prescribes $T$ directly is a separate source model.",
    "invalidated_claim": "The named Hilbert tensor has no variational mathematical definition or exact earlier supplier in this paragraph; its actual definition is on the later Einstein-and-matter page.",
    "minimality": "Define the variational construction before invoking the technical term, or make the exact later contextual reference explicit without introducing a logical prerequisite cycle.",
    "reason": "Verified the digest terminology/ordering concern under the mandatory define-before-use rule; no local proof here relies on a Hilbert-tensor conservation assertion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "cor-gr-adapted-chart-existence",
    "status": "repaired",
    "classification": "confirmed_nonfatal",
    "affected_use": "items/cor-gr-adapted-chart-existence.md Facts L1 and Proof 2.1",
    "invalidated_claim": "L1 stated an incomplete defining equivalence; 2.1 represented arbitrary integral curves using the fixed point p. Neither defect invalidates the flow-box existence result.",
    "minimality": "Restore future direction and the exact local interval convention in L1; replace the unnecessary p-based curve formula by the zero spatial derivative argument in 2.1. Statement and deps unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "rem-gr-chart-tetrad-congruence-and-observer-distinctions",
    "status": "repaired",
    "classification": "confirmed_nonfatal",
    "affected_use": "items/rem-gr-chart-tetrad-congruence-and-observer-distinctions.md Adapted chart, Tetrad and Observer-relative quantities bullets",
    "invalidated_claim": "The original rest-mass wording treated m(P) as observer-relative; the broader adapted-chart assertion cited only the existential normalized-chart corollary. The alleged universal normalization contradiction is false.",
    "minimality": "Keep the adapted-chart claim, distinguish Definition (c) from the corollary using v0=2u0, state observer-independent m(P) on its exact domain, and declare the existing tetrad-existence result actually used.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer",
    "id": "thm-change-of-coordinate-formula-for-tangent-bases",
    "status": "reported_for_original_mathematics_maintenance",
    "affected_use": "items/thm-change-of-coordinate-formula-for-tangent-bases.md Proof 3.1: Therefore the two derivations agree on a basis of germs and hence are equal.",
    "invalidated_claim": "Coordinate germs are not a vector-space basis of smooth germs. The intended separating-family argument is explicitly stated in 1.1 and applied correctly in 2.1, so the transformation formula is unaffected by the wording defect.",
    "minimality": "Original mathematics owner should replace basis of germs by the separating family of coordinate germs, invoking step 1.1. Imported snapshot and original remain read-only in this dispatch. No Statement change or downstream propagation is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-gr-observer-energy-of-a-boosted-test-body",
    "status": "reported_to_frontier_owner",
    "affected_use": "items/ex-gr-observer-energy-of-a-boosted-test-body.md Verification 2.1: g(u,n)=-g(n,u)=-gamma.",
    "invalidated_claim": "L1 gives g(n,u)=-gamma and symmetry gives g(u,n)=g(n,u); the displayed middle equality has the wrong sign. The energy and momentum formulas are otherwise the correct algebraic consequences.",
    "minimality": "Assigned owner should replace the middle -g(n,u) by g(n,u). This item is outside unit 66 assigned repairs and has not been edited or adjudicated here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-observation-and-analysis-architecture",
    "status": "reported_to_frontier_owner",
    "affected_use": "items/def-gr-observation-and-analysis-architecture.md Definition deflection readout: q_i:=h_{n_i}(W(s_i)), the spatial projection of clause (b) of def-gr-observer-and-rest-space.",
    "invalidated_claim": "The cited clause (b) defines the rest space; the spatial projection h_n is defined in clause (c). The supplied projection formula itself is unchanged and correct.",
    "minimality": "Assigned owner should change the exact clause locator from (b) to (c), without changing the projection construction or empirical scope. No edit or adjudication outside this lane.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect",
    "id": "def-gr-timelike-worldline-and-proper-time",
    "status": "repaired",
    "finding": "Clause (c) admitted k=0 but required a velocity defined only for C1 curves. Restricted timelike worldlines to k in {1,2,...,infinity}; explicitly extended the germ derivation to C1 curves using the product rule. Piecewise endpoint density and normalization remain unchanged."
  },
  {
    "ledger": "canonical-defect",
    "id": "lem-gr-proper-time-reparametrization-and-four-velocity",
    "status": "repaired",
    "finding": "The positive normalization constant c was reused as the split point, so the written clause did not quantify all intermediate points. The displayed equality itself is true when a<c<b; this is a nonfatal scope/notation defect. Replaced the split point by every u in (a,b), and gave the exact refined-partition sums in proof step 3.1. All integral, orientation, endpoint inverse and four-velocity formulas were checked and remain unchanged."
  },
  {
    "ledger": "canonical-defect",
    "id": "thm-gr-nondegenerate-levi-civita-and-tensor-derivative",
    "status": "repaired",
    "finding": "The arbitrary nondegenerate-metric theorem cited Lorentzian-only inverse, metric-compatibility and tensor-field interfaces in its general proof. Defined flat/sharp, inverse metric, compatibility and tensor bundles locally in the retained general scope; used the published matrix-inversion and finite-tensor-product suppliers, and proved contraction basis independence and smoothness locally. Koszul construction, uniqueness, all Christoffel and tensor formulas remain valid for any symmetric nondegenerate metric; AC_omega is explicitly inherited for TM."
  },
  {
    "ledger": "canonical-defect",
    "id": "lem-gr-parallel-transport-and-geodesic-speed",
    "status": "repaired",
    "finding": "The opening smooth-curve hypothesis allowed singleton I, but the cited covariant derivative explicitly has no operator on a singleton. Required nonempty interior for derivative intervals I,J and separated identity transport for a=b without imposing D_t. Also fixed the previously implicit c>0 and supplied the zero-derivative constancy prerequisite; metric pairing, linear isometric transport, affine proper time and reparametrization proofs retain their claims. The continuous nonzero pairing with N also handles null time orientation."
  },
  {
    "ledger": "canonical-defect",
    "id": "thm-gr-local-geodesics-and-exponential-map",
    "status": "repaired",
    "finding": "Step 3.1 took the union only over open geodesic domains but claimed maximality against every larger interval; closed and half-open competitors were not covered. Added the endpoint continuation argument: smooth one-sided position/velocity data give a two-sided chart ODE solution, one-sided IVP uniqueness identifies its overlap, and opening at most two endpoints produces an open-domain competitor in the union. Statement, flow, scaling and exponential claims are unchanged."
  },
  {
    "ledger": "canonical-defect",
    "id": "ex-gr-cosmological-redshift-interface-record-window",
    "status": "owner_route_required",
    "route": "frontier-owner",
    "path": "items/ex-gr-cosmological-redshift-interface-record-window.md",
    "affected_use": "[L3] The metric components in the product chart are $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\\gamma_{ij}$; a nonzero vector is future-directed exactly when $g(V,\\partial_t)<0$, and null exactly when $g(V,V)=0$; the comoving curve $\\gamma_x(t)=(t,x)$ is a future timelike worldline with four-velocity $U=\\partial_t=cn$, $g(U,U)=-c^2$, and its parameter $t$ is its proper time up to an additive constant ([[lem-gr-flrw-metric-and-comoving-data]] clauses (a)-(b), [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-smooth-lorentzian-objects]]).",
    "finding": "Fact L3 calls every nonzero vector with g(V,partial_t)<0 future-directed. In flat FLRW with c=a=1 and Euclidean spatial metric, V=partial_t+2 partial_1 has pairing -1 but norm 3; it is spacelike. The sign test only classifies nonzero causal vectors.",
    "invalidated_claim": "Fact L3 calls every nonzero vector with g(V,partial_t)<0 future-directed. In flat FLRW with c=a=1 and Euclidean spatial metric, V=partial_t+2 partial_1 has pairing -1 but norm 3; it is spacelike. The sign test only classifies nonzero causal vectors.",
    "minimality": "Restrict the L3 future-direction equivalence to nonzero causal vectors; the actual ray is null, so its calculation is unaffected.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "published": false
  },
  {
    "ledger": "canonical-defect",
    "id": "lem-gr-null-position-vector-forces-null-velocity",
    "status": "owner_route_required",
    "route": "frontier-owner",
    "path": "items/lem-gr-null-position-vector-forces-null-velocity.md",
    "affected_use": "[L5] The length of the restriction is $L_g(\\sigma|_{[0,t_0]})=\\int_0^{t_0}\\sqrt{-g(\\sigma',\\sigma')}$ ([[def-gr-timelike-worldline-and-proper-time]]).",
    "finding": "Fact L5 cites the timelike-only worldline definition for the length of a locally absolutely continuous future causal curve. Clause (f) excludes null curves, so this attribution is unsupported. The broader length is explicitly defined in the existing supplier lem-gr-normal-neighborhood-length-monotonicity.",
    "invalidated_claim": "Fact L5 cites the timelike-only worldline definition for the length of a locally absolutely continuous future causal curve. Clause (f) excludes null curves, so this attribution is unsupported. The broader length is explicitly defined in the existing supplier lem-gr-normal-neighborhood-length-monotonicity.",
    "minimality": "Replace the L5 length citation by the existing causal-length supplier; no changed length formula is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "published": false
  },
  {
    "ledger": "canonical-defect",
    "id": "lem-gr-time-separation-maximizers",
    "status": "owner_route_required",
    "route": "frontier-owner",
    "path": "items/lem-gr-time-separation-maximizers.md",
    "affected_use": "let\n$L_g$ be the Lorentzian length functional on future causal curves\n([[def-gr-timelike-worldline-and-proper-time]]), and for $q\\in M$ define the\n**time separation**\n$$\\tau_q:M\\to[0,\\infty),\\qquad \\tau_q(r):=\\sup\\{L_g(\\alpha):\\ \\alpha \\text{ is a future causal curve from } r \\text{ to } q\\},$$\nthe supremum over the empty set be",
    "finding": "The Statement cites def-gr-timelike-worldline-and-proper-time for a length functional on all future causal curves, although its Definition (f) excludes null curves. Existing lem-gr-normal-neighborhood-length-monotonicity defines the required Lebesgue length.",
    "invalidated_claim": "The Statement cites def-gr-timelike-worldline-and-proper-time for a length functional on all future causal curves, although its Definition (f) excludes null curves. Existing lem-gr-normal-neighborhood-length-monotonicity defines the required Lebesgue length.",
    "minimality": "Replace the Statement length citation by the existing broader causal-length supplier; retained supremum class is unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "published": false
  },
  {
    "ledger": "canonical-published-consumer",
    "status": "no_published_defect_identified",
    "reason": "The three verified digest alerts are current draft carriers, routed to their owners. No published item was edited or adjudicated; no new published consumer defect was established in the direct changed-interface examination.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-curvature-tensor-and-derived-tensors",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "Clause (c) incorrectly attributes chart independence to algebraic-symmetries clauses (a)-(d). Curvature tensoriality is supplied by the coordinate-formula theorem (a); smooth metric lowering and contraction give the four declared tensor types. The formulas and signs are unchanged; symmetry alone is supplied by algebraic-symmetries (d).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-jacobi-field-and-conjugate-instant",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "reason": "With J_0=(1,2), F(0,s) is undefined, and partial_r F(r,s) is not in the base tangent fibre unless r=0. Require 0 in J_0 and evaluate at (0,s). Also replace s_1 v by (s_1-s_0)v: translating the affine parameter reduces to the exponential lemma with base instant zero. Correct the deviation/initial-data clause references to (b)/(c).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-curvature-algebraic-symmetries",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "reason": "Step 1.1 falsely grants a tensor transformation law to the second-derivative expression and to every identity derived from it. The valid argument transports only the zero tensors formed by slot-permutation sums of R, and the antisymmetric parts of Ricci and Einstein. All normal-chart calculations remain correct; the replacement supplies this explicit invariant argument without changing the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-curvature-in-a-point-normal-chart",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "L5 omits the coordinate acceleration and velocity factors for a general curve. Replace it by (D_s gamma′)^a=(x^a)″+Gamma^a_bc (x^b)′(x^c)′, then specialize to (s,r,0,0). The proof only uses this valid special case. Checked Gamma^1_01=s/(1+s^2), R^1_001=(1+s^2)^(-2) and D_s^2 partial_1 with the same coefficient; all example claims are retained.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-curvature-of-a-product-with-a-round-sphere",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The equator example has T=partial_2 and J=sin(s) partial_1, so skew-symmetry applied to R(partial_1,partial_2)partial_2 gives -sin(s) partial_1, not the displayed -partial_2. Corrected the remark. Also corrected L2: coordinate rescaling changes nonzero components, whereas tensor identities are invariant; the actual chart-specific calculations and Ricci/Einstein values are retained. Removed a stray minus sign in the description of the product term in step 2.2.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-conjugacy-and-local-timelike-maximum",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "reason": "The equality proof uses continuity plus zero integral to obtain pointwise vanishing; monotonicity alone does not establish that assertion. Added the published zero-integral theorem and continuous-integrability theorem as mathematical prerequisites, and cited them in L8. Step 6.1 applies the compact-interval theorem within each smooth interior after proving each subinterval integral is zero; this avoids assuming continuity at the singular radial endpoint. The finite compatible inverse branches, timelike control, Gauss inequality and monotone equality reparametrization preserve the original claim.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-jacobi-fields-in-flat-space",
    "status": "repaired",
    "outcome": "confirmed_nonfatal",
    "reason": "The cited initial-value map sends a Jacobi field to its pair of initial vectors, so the fields are its domain and the pair space is its codomain. Corrected claim 3 to state that map and its inverse explicitly. The affine formula, absence of conjugacy, exponential translation and constant-family deviation follow from Gamma=0 and R=0 as the unchanged verification computes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "updates": [],
    "reason": "Every direct item consumer found for these interface events is draft. No published repair or published adjudication was performed; published mathematical suppliers remain unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-normal-index-form-factorization",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/lem-gr-normal-index-form-factorization.md",
    "affected_use": "[L3] A Jacobi field is a field with $D_s^2J=R(T,J)T$; for a field $J$ along $\\gamma$, $g(J,T)$ is affine and $J^\\perp$ is again a Jacobi field when $J$ is one ([[def-gr-jacobi-field-and-conjugate-instant]] clauses (b), (c) and (e), [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (d)).",
    "invalidated_claim": "L3 falsely extends affine g(J,T) to arbitrary fields. For J(s)=s^2 T(s) on a unit timelike geodesic, g(J,T)=-s^2, which is not affine. The proof only needs this property for Jacobi fields.",
    "minimality": "Insert the Jacobi hypothesis in L3; preserve the index-form and matrix claims.",
    "reason": "L3 falsely extends affine g(J,T) to arbitrary fields. For J(s)=s^2 T(s) on a unit timelike geodesic, g(J,T)=-s^2, which is not affine. The proof only needs this property for Jacobi fields.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "aab442844468362ee0d3159e426344aa0eab81ff9ad90d106ba651a383e0cfa7",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-normal-index-form-factorization",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/lem-gr-normal-index-form-factorization.md",
    "affected_use": "5.1 (The factorization identity.) Let $J$ be a continuous piecewise-$C^1$ normal field vanishing at $a$ and $b$, with coefficient vector $j(s)$ in the frame of step 2.1. On each smooth piece, [step 3.1, step 4.1, L6, L7, algebra, step 2.1]\n$|j'-\\Theta j|^2=|j'|^2-2j'^T\\Theta j+j^T\\Theta^2j$, because $\\Theta$ is symmetric. For $\\varepsilon>0$ sufficiently small, integrate by parts on the smooth pieces of $[a+\\varepsilon,b]$; the interior endpoint terms cancel because $j$ and $\\Theta$ are continuous. The identity\n$(j^T\\Theta j)'=2j'^T\\Theta j+j^T\\Theta'j$ gives\n$$\\int_{a+\\varepsilon}^b-2j'^T\\Theta j\\,ds=-[j^T\\Theta j]_{a+\\varepsilon}^b+\\int_{a+\\varepsilon}^b j^T\\Theta'j\\,ds.$$\nAt $b$ the boundary term vanishes because $j(b)=0$. At $a$, one-sided\n$C^1$ regularity gives $j(s)=(s-a)j'(a)+o(s-a)$ and $j'(s)=j'(a)+o(1)$.\nBy [L6], $j^T\\Theta j=O(s-a)\\to0$ and $\\Theta(s)j(s)=j'(a)+o(1)$, so\n$j'(s)-\\Theta(s)j(s)\\to0$ on the first smooth piece as $s\\downarrow a$.\nDefine the factorized integrand at $a$ to be this limit squared, namely $0$;\nit is then piecewise continuous on $[a,b]$. Using\n$\\Theta'=C-\\Theta^2$ from step 4.1 and letting $\\varepsilon\\downarrow a$\nin the integrated identity yields\n$$I(J)=\\int_a^b\\bigl(|j'|^2+j^TCj\\bigr)\\,ds =\\int_a^b|j'-\\Theta j|^2\\,ds.$$\nThis is the factorization in (c), with its right-hand integrand continuously\nextended at $a$. [step 3.1, step 4.1, L6, L7, algebra, step 2.1]",
    "invalidated_claim": "The integration interval begins at a+epsilon, so the limit is epsilon down to zero. The text says epsilon down to a and also places tags inside the continued step instead of only at its end.",
    "minimality": "Replace that limit by epsilon down to zero and place the complete step in one paragraph with one final tag group.",
    "reason": "The integration interval begins at a+epsilon, so the limit is epsilon down to zero. The text says epsilon down to a and also places tags inside the continued step instead of only at its end.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "aab442844468362ee0d3159e426344aa0eab81ff9ad90d106ba651a383e0cfa7",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-normal-index-form-factorization",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/lem-gr-normal-index-form-factorization.md",
    "affected_use": "6.1 (Positivity.) By step 5.1, $I(J)=\\int_a^b|J'-\\Theta J|^2ds\\ge0$. If $I(J)=0$, the continuous nonnegative integrand vanishes identically on each smooth piece, so $J'=\\Theta J$ there. Then $(A^{-1}J)'=A^{-1}J'-A^{-1}A'A^{-1}J=A^{-1}(J'-\\Theta J)=0$ on $(a,b]$, so $J(s)=A(s)v$ for a constant $v$; since $J(b)=0$ and $A(b)$ is invertible by step 3.1, $v=0$ and $J=0$. Conversely $J=0$ gives $I(J)=0$. This proves the positivity statement, and with steps 1.1, 2.1, 3.1 and 5.1 the lemma. [step 5.1, step 3.1, step 4.1, L7, algebra, step 1.1] ∎",
    "invalidated_claim": "The zero-integral inference uses continuity to obtain pointwise vanishing. L7 cites the fundamental theorem of calculus, continuous integrability and the Darboux definition, but not the existing continuous zero-integral theorem. The inference is mathematically valid with that supplier, as in the repaired assigned maximum theorem.",
    "minimality": "Add thm-nonnegative-continuous-with-zero-integral-vanishes as a mathematical dependency and faithful fact citation, applying it on compact smooth-piece subintervals.",
    "reason": "The zero-integral inference uses continuity to obtain pointwise vanishing. L7 cites the fundamental theorem of calculus, continuous integrability and the Darboux definition, but not the existing continuous zero-integral theorem. The inference is mathematically valid with that supplier, as in the repaired assigned maximum theorem.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "aab442844468362ee0d3159e426344aa0eab81ff9ad90d106ba651a383e0cfa7",
    "interface_event_related": false,
    "supplier_fact": "[L7] cites thm-ftc-second-part, thm-continuous-implies-integrable and def-darboux-integral; none states continuous zero-integral vanishing."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-conjugacy-via-the-exponential-map",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/lem-gr-conjugacy-via-the-exponential-map.md",
    "affected_use": "[L3] A Jacobi field along a geodesic is determined by its value and covariant derivative at one parameter; the map from initial data $(J_0,J_1)$ to Jacobi fields is a linear isomorphism onto $T_{\\gamma(s_0)}M\\oplus T_{\\gamma(s_0)}M$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c)).",
    "invalidated_claim": "The stated map from initial data to fields cannot have the initial-data space as its image. The supplier theorem (c) sends fields to initial data, and the inverse sends initial data to fields; the proof uses the correct inverse correspondence.",
    "minimality": "Replace the reversed codomain description by the actual initial-value map or its explicitly stated inverse; no Statement change is needed.",
    "reason": "The stated map from initial data to fields cannot have the initial-data space as its image. The supplier theorem (c) sends fields to initial data, and the inverse sends initial data to fields; the proof uses the correct inverse correspondence.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "6bc069aad110420aaf60243d3fd1b8f65a47cee46a3f3059292791a5c752eed0",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-schwarzschild-ricci-and-einstein-tensors",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/lem-gr-schwarzschild-ricci-and-einstein-tensors.md",
    "affected_use": "[L3] In the chart, $R^a{}_{bcd}=\\partial_c\\Gamma^a{}_{db}-\\partial_d\\Gamma^a{}_{cb}+\\sum_e(\\Gamma^a{}_{ce}\\Gamma^e{}_{db}-\\Gamma^a{}_{de}\\Gamma^e{}_{cb})$, and $R$ is a smooth tensor field whose components transform under changes of chart. Tensor vanishing and contractions are intrinsic; the component formulas in (a)-(b) are computed separately in each spherical-polar product chart with the same metric form ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (b)).",
    "invalidated_claim": "Tensoriality does not preserve arbitrary nonzero component formulas under chart change. A rescaling y^1=2x^1 changes a lowered component with two index-1 slots by a factor of one quarter. The chart-specific computations and zero Ricci/Einstein tensors need only the valid tensor transformation law.",
    "minimality": "Restrict displayed component values to the stated chart and transfer only tensor identities, in particular vanishing, to other charts.",
    "reason": "Tensoriality does not preserve arbitrary nonzero component formulas under chart change. A rescaling y^1=2x^1 changes a lowered component with two index-1 slots by a factor of one quarter. The chart-specific computations and zero Ricci/Einstein tensors need only the valid tensor transformation law.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "1a1fb281a9f762d50a33182e54b1d7ee5dbba4edc8f8d119893c5ba6fb2e214d",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-dust-electric-magnetic-weyl-variables-and-schouten",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/def-gr-dust-electric-magnetic-weyl-variables-and-schouten.md",
    "affected_use": "**(a) Schouten tensor.** The **reduction Schouten tensor** of $\\gamma$ is\n$$S_{ij}:=\\operatorname{Ric}_{ij}-\\tfrac16S_\\gamma\\,\\gamma_{ij},$$\nwhere $\\operatorname{Ric}$ and $S_\\gamma=\\gamma^{ab}\\operatorname{Ric}_{ab}$ are\nthe Ricci tensor and scalar curvature of $\\gamma$\n([[def-gr-curvature-tensor-and-derived-tensors]]). If the dust field equation\n$G(\\gamma)-\\Lambda\\gamma=\\kappa\\,r\\,U^\\flat\\otimes U^\\flat$ holds, then\n$$S_{ij}=\\kappa r\\Bigl(U_iU_j-\\tfrac13\\gamma_{ij}\\Bigr)-\\tfrac13\\Lambda\\,\\gamma_{ij}.$$\nThis normalization is fixed so that the standard Kulkarni--Nomizu decomposition\n$$R_{ijkl}=C_{ijkl}+\\tfrac12\\bigl(S_{ik}\\gamma_{jl}-S_{il}\\gamma_{jk}+S_{jl}\\gamma_{ik}-S_{jk}\\gamma_{il}\\bigr)$$\nholds for every metric of dimension four, with $C$ the Weyl tensor\n([[def-gr-curvature-tensor-and-derived-tensors]]); the identity is checked on\nconstant-curvature metrics in the Remarks.",
    "invalidated_claim": "The curvature definition supplies no Weyl tensor or decomposition; its repaired Definition (c) still defines only lowered Riemann, Ricci, scalar and Einstein tensors. Thus the attribution defining C as Weyl is unsupported. A zero-trace condition is also needed to make the later Weyl terminology explicit.",
    "minimality": "Define C locally by subtraction of the displayed Schouten expression from R and state and justify its metric trace and curvature symmetries, or cite an exact adequate mathematical supplier.",
    "reason": "The curvature definition supplies no Weyl tensor or decomposition; its repaired Definition (c) still defines only lowered Riemann, Ricci, scalar and Einstein tensors. Thus the attribution defining C as Weyl is unsupported. A zero-trace condition is also needed to make the later Weyl terminology explicit.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "714e7d7a0748503b077491451771a3b1518e7983036df5cd814d8b4337aa1120",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-gr-curvature-tidal-scope-and-conventions",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/rem-gr-curvature-tidal-scope-and-conventions.md",
    "affected_use": "**Scope of the maximum and conjugacy results.** The conjugacy and local\nmaximum statements on this page concern a single smooth geodesic segment, a\nfixed exponential chart and a $C^1$-neighborhood of that segment; they assert\nno global maximality, no existence of conjugate instants, and no cut-locus\nclassification. Global causal, completeness and singularity statements are\nreserved for later pages and are not prerequisites of the results here.",
    "invalidated_claim": "The maximum theorem uses finite compatible exponential inverse branches along the lifted segment and expressly allows repeated spacetime events. It supplies no one injective exponential chart containing the whole segment.",
    "minimality": "Replace fixed exponential chart by the finite compatible local inverse-branch data of the theorem; preserve its local comparison scope and examine direct consumers if that physical scope changes.",
    "reason": "The maximum theorem uses finite compatible exponential inverse branches along the lifted segment and expressly allows repeated spacetime events. It supplies no one injective exponential chart containing the whole segment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "515f6a29a5fbeb96cf3fed9599a0187a22814b0df2a4563829ee50bbebdf7753",
    "interface_event_related": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-gr-tidal-comparison",
    "status": "owner-follow-up",
    "route": "frontier-owner",
    "path": "items/pthm-gr-tidal-comparison.md",
    "affected_use": "**(c) Flat comparison and the vanishing criterion.** If the curvature\nvanishes on an open subset $O\\subseteq M$, then every free-fall congruence\nwith worldlines in $O$ has $D_s^2J=0$ there: the model predicts no tidal\nrelative acceleration of freely falling test bodies in that region.\nConversely, if at an event $q$ the operator $J\\mapsto R(U,J)U$ vanishes for\nevery future timelike $U$ and every $J\\in T_qM$, then $R_q=0$; hence within\nthe model the tidal response of all free-fall congruences detects exactly the\ncurvature, and $R$ is the model's complete tidal field at every event.",
    "invalidated_claim": "The proof establishes the algebraic implication R(U,J)U=0 for all timelike U and J implies R=0. Its further assertion that all free-fall families detect every such contraction needs a local realization argument, absent from the proof.",
    "minimality": "Choose a smooth initial-point curve q(r) with q(0)=q and q′(0)=J, smoothly normalize future timelike initial velocities to norm -c^2, and use the smooth geodesic initial-value flow. Its variation has the arbitrary initial separation J; homogeneity covers timelike velocity magnitudes. Cite the exact local smooth-flow supplier and carry the adopted ideal-test-body premise.",
    "reason": "The proof establishes the algebraic implication R(U,J)U=0 for all timelike U and J implies R=0. Its further assertion that all free-fall families detect every such contraction needs a local realization argument, absent from the proof.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "observed_raw_sha256": "6b5aad5c61496bd4898637c18accd1467656f974b918ce2471e5a30ffca8db45",
    "interface_event_related": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-def-gr-hilbert-stress-energy-tensor",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "def-gr-hilbert-stress-energy-tensor",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "The circularity objection is false: SCHEMA.md permits the definition-discharge edge and uniqueness is proved by subtracting candidate identities and testing all compact directions, without assuming uniqueness. An additional confirmed nonfatal defect was found in Definition (c): the metric volume form changes sign under orientation reversal, and integration of a fixed top form also changes sign; for L(g,phi) vol_g with orientation-independent scalar L these signs cancel. The original assertion that both action variation and volume-form integral change sign is false, for example S=integral W vol_g with compact scalar W. Corrected the explicit reversal convention, retaining the variation identity, normalization, admission hypotheses and all uniqueness claims."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-lem-gr-compact-variation-coefficient-vanishing",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "lem-gr-compact-variation-coefficient-vanishing",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "The rejected citation-scope mismatch is real: the inverse-metric/tensor interfaces assume Lorentzian data and the volume interface assumes orientation. The bump-test proof itself uses neither. Replaced those mis-scoped citations by the general covariant tensor transformation law and adjugate formula; defined the local inverse matrix, positive weight and component regularity explicitly. Lowering realizes every bump test and the positive Darboux lower sum forces F=0, with the same covector argument. All original hypotheses and conclusions are retained."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-def-gr-perfect-fluid-matter-model",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "def-gr-perfect-fluid-matter-model",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "The reverse definition-to-result discharge link is permitted by SCHEMA.md and is not circular. However this particular result establishes conservation equivalence, not well-definedness: the smooth tensor, derivatives and projection are already explicit algebraic/differential constructions from the declared suppliers. Removed the irrelevant justified_by entry, retaining the Definition and its ordinary reference to the conservation proposition exactly. Checked normalization and projection identities and both conservation directions without division by epsilon+p."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-lem-gr-metric-divergence-and-density-formula",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "lem-gr-metric-divergence-and-density-formula",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "Confirmed a nonfatal scope misquotation: the volume-form supplier defines w only in oriented charts. The determinant differentiation, Christoffel cancellation and product-rule proof already establish the stated orientation-free formulas. Defined w locally on every chart, removed the unused oriented-volume dependency, and justified the absolute-Jacobian density law by the general metric transformation and multiplicativity of determinant. No hypothesis, identity or orientation-free conclusion is narrowed."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-prop-gr-dust-and-perfect-fluid-conservation-equations",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "prop-gr-dust-and-perfect-fluid-conservation-equations",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "Both original tuple descriptions inaccurately restated the supplier definitions: dust data are (rho,u) and fluid data are (epsilon,p,n), with T derived. Corrected those two sentences and explicitly gave their derived covariant tensors. The unchanged product-rule proof uses normalization to eliminate longitudinal acceleration, divides only by strictly positive dust rho, and reconstructs fluid divergence from its two projections even when epsilon+p=0. This is a nonfatal interface-description defect, not failure of either equivalence."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-cex-gr-energy-conditions-do-not-imply-conservation",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "cex-gr-energy-conditions-do-not-imply-conservation",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "fatal",
      "outcome": "confirmed_fatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "Confirmed inconsistent physical units: the item explicitly depends on the SI tensor-slot convention, while T_01=x1 equates energy density with length. Repaired with fixed positive E_* in J/m^3 and L in metres, slab |x1|<L, T_00=3E_* and T_01=E_*x1/L. Every tensor entry now has energy-density units. The original WEC estimate rescales to a strict positive lower bound E_*(v0)^2, and div(T)_0=E_*/L is nonzero with units J/m^4. No observed values or material realization are asserted. Fatal type other records incompatible physical unit premises rather than a failed algebraic inequality."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "defect_type": "other"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-pthm-gr-adopted-action-and-einstein-equations",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "pthm-gr-adopted-action-and-einstein-equations",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "severity": "nonfatal",
      "outcome": "confirmed_nonfatal",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "The rejection conflates an item with its owning page: gr-einstein-and-matter also contains pthm-gr-einstein-consistency-and-energy-conditions, whose Proof 1.1 derives prescribed-T conservation by contracted Bianchi and metric compatibility. There is no missing derivation of stationarity equivalence. Nevertheless the digest identifies a confirmed nonfatal public-scope defect: physical_scope includes prescribed-and-admissible action sectors despite post-gr-classical-gravitational-action (iii) supplying only the scalar action and excluding prescribed dust/fluid from the variational postulate. Removed that incompatible scope branch and replaced the ambiguous on-this-page attribution with the exact sibling item and page IDs. Checked compact localization, linearity in variation jets, both coefficient-vanishing directions and c^3/(16pi G_N)*kappa=1/(2c); the approved equivalence itself is retained."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-ex-gr-null-gradient-scalar-field-conservation",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "69",
      "subject": "ex-gr-null-gradient-scalar-field-conservation",
      "caught_at_stage": "step5-initial-r1",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "rejected-finding-disproved",
      "severity": "nonfatal",
      "outcome": "false_positive",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u69.json",
          "note": "The cited prop-gr-scalar-field-stress-energy-conservation has kind proposition and domain mathematics, and its conservation identity is a product-rule calculation under explicit geometric hypotheses. Its namespace GR is not a physical classification. Read its identity/proof and the example: equal derivatives fprime in x0,x1 cancel the squared gradient and the wave operator, V=0 gives T=K*dphi tensor dphi, and conservation and positivity follow including all critical points. A read-only prerequisite walk through deps, justified_by and forward_refs found 1833 mathematical carriers, no physical suppliers and no unresolved IDs. The rejection is a false positive; no item edit."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "operation": "record-review-proposal",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "batch": "69",
    "reason": "No published supplier defect was established by this unit. The relevant general covariant tensor definition, adjugate supplier, bump and integral suppliers were used at their inspected scope. All newly noted consumer prose defects are draft frontier items routed to their owners, with no published or imported carrier edits.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-consumer-pthm-gr-minkowski-vacuum-model",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "pthm-gr-minkowski-vacuum-model",
      "severity": "nonfatal",
      "disposition": "open-owner-routing",
      "caught_at_stage": "step5-initial-r1",
      "affected_use": "Remarks Presentations says: In the action presentation the same model is described by a vacuum matter sector; the equivalence of the presentations on the stated domain is this theorem.",
      "invalidated_claim": "The adopted action postulate supplies only scalar data, not a separate empty vacuum-action sector. Flat vacuum can be represented by constant phi and V=0, but this consumer does not specify that representation.",
      "minimality": "Qualify this remark by the supplied constant scalar with V=0 and K>0, or restrict its claim to its existing direct-equation deduction. The theorem proof and main flat-vacuum conclusion do not change.",
      "route": "frontier-owner",
      "evidence": [
        {
          "path": "items/pthm-gr-minkowski-vacuum-model.md",
          "note": "Remarks Presentations says: In the action presentation the same model is described by a vacuum matter sector; the equivalence of the presentations on the stated domain is this theorem."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-consumer-pthm-gr-local-energy-balance",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "pthm-gr-local-energy-balance",
      "severity": "nonfatal",
      "disposition": "open-owner-routing",
      "caught_at_stage": "step5-initial-r1",
      "affected_use": "Proof 1.1 says: The direct presentation and the prescribed-tensor action sectors adopt the same equation on U. L1 correctly says prescribed tensors adopt the equation directly.",
      "invalidated_claim": "Prescribed-tensor action sectors are unsupported by post-gr-classical-gravitational-action (iii). The local conservation conclusion remains supplied by the direct equation or actual scalar action.",
      "minimality": "Replace that proof sentence with: The direct presentation, including prescribed-tensor sectors, adopts the same equation on U. This is a proof-only repair; no further hop is indicated.",
      "route": "frontier-owner",
      "evidence": [
        {
          "path": "items/pthm-gr-local-energy-balance.md",
          "note": "Proof 1.1 says: The direct presentation and the prescribed-tensor action sectors adopt the same equation on U. L1 correctly says prescribed tensors adopt the equation directly."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-consistency-fluid-tuple",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "pthm-gr-einstein-consistency-and-energy-conditions",
      "severity": "nonfatal",
      "disposition": "open-owner-routing",
      "caught_at_stage": "step5-initial-r1",
      "affected_use": "Statement (f) says Let (epsilon,p,n,T) be a perfect-fluid model, while def-gr-perfect-fluid-matter-model (a) defines only the data triple (epsilon,p,n).",
      "invalidated_claim": "Only the supplier-data restatement is inaccurate; the derived diagonal tensor and all energy-condition inequalities in Proof 1.4-3.1 remain valid.",
      "minimality": "Change (f) to name the data triple and its derived T, following the assigned conservation-proposition repair; no proof or theorem conclusion needs changing.",
      "route": "frontier-owner",
      "evidence": [
        {
          "path": "items/pthm-gr-einstein-consistency-and-energy-conditions.md",
          "note": "Statement (f) and def-gr-perfect-fluid-matter-model Definition (a)/(b)."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append-proposal",
    "entry": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u69-dust-discharge-metadata",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "subject": "def-gr-dust-matter-model",
      "severity": "nonfatal",
      "disposition": "open-owner-routing",
      "caught_at_stage": "step5-initial-r1",
      "affected_use": "Frontmatter justified_by names prop-gr-dust-and-perfect-fluid-conservation-equations, which proves conservation equivalence from the already-defined pair and tensor rather than well-definedness.",
      "invalidated_claim": "No dust equation or tensor formula is invalidated; this discharge annotation is irrelevant for the same reason as the assigned perfect-fluid annotation.",
      "minimality": "Remove only this justified_by annotation through the owning lane; preserve Definition and its ordinary contextual reference to the conservation equivalence.",
      "route": "frontier-owner",
      "uncertain": false,
      "source_urls": [],
      "familiar": true
    }
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "def-cm-averaging-data-and-averaged-field",
    "model": "gpt-6-luna",
    "context_sha256": "27da7e38a68c634a840072622f49b4e06a65b005c87ed9eec02ebb0dd4d10ef0",
    "outcome": "confirmed_nonfatal",
    "reason": "The interval-additivity statement does not supply integrand linearity, but the existing vector-integral Definition explicitly does. Corrected its attribution and supplied constant integration; the periodic extension and averaging datum retain exactly the same values and hypotheses. Joint continuity on compact products is now justified by an explicit uniform integral estimate.",
    "post_sha256": "7cd27f4dd02c35166960393a37d8d371f22589b99a320bab57265e3f605bed8b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "lem-cm-averaging-data-basic-bounds",
    "model": "gpt-6-luna",
    "context_sha256": "67a8eefb9095723b7d8ef6a48ed70a43073eee9967109f60e5bb3c385f1c9a00",
    "outcome": "confirmed_nonfatal",
    "reason": "The original x_j formula divides by zero at j=0 under the library natural-number convention. Replaced j by j+1, yielding interior points for every j in N and the same boundary limit. FTC plus coordinatewise zero-derivative constancy explicitly identifies the periodic extension with the oriented integral for all real t; compact-rectangle differentiation and the unit-vector integral estimates establish the unchanged derivative and norm bounds. Owning contract agrees with the repaired carrier.",
    "post_sha256": "78e7ef14852060cf0bf1e084b40ee2d2e7519b13de381f6c28be879603bc3a45",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "prop-cm-oscillator-degenerate-and-repulsive-cases",
    "model": "gpt-6-luna",
    "context_sha256": "69f0b5e35e5257ed5f226007094b787782a716636474c0bb9f4936481d6a048f",
    "outcome": "confirmed_nonfatal",
    "reason": "The primitive corollary states its evaluation clause for a<t. F5 previously attributed the arbitrary-order version to that clause alone, although step 1.2 allows t<a. Added the oriented-integral Definition and explicitly derived reversed and equal endpoint cases. Integrating-factor classification, coefficient uniqueness, opposite-sign roots and exponential limits remain valid with unchanged Statement. Owning contract agrees with the repaired carrier.",
    "post_sha256": "c8aa0aeb938acf4d08327749c12fbe81050fb400e42740268a748c527fc57fd4",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "cex-cm-nonuniqueness-without-state-lipschitz",
    "model": "gpt-6-luna",
    "context_sha256": "20e2e9077ba4d1be43b233c8e8ef9030b9624d058a12c9c7e856b5239dd4833b",
    "outcome": "confirmed_nonfatal",
    "reason": "L2 cited integrability of a composite as continuity of a composite. Replaced that supplier with thm-composition-of-continuous-functions, whose exact domain condition holds for abs:R->[0,infinity) and sqrt on [0,infinity). Explicit square-root existence and square monotonicity establish the continuous inverse hypotheses. Removed the unused unsupported sqrt derivative assertion; the delayed quadratic is differentiable at its join and satisfies the ODE by nonnegative-root uniqueness. The refuted Statement is unchanged.",
    "post_sha256": "b5f57b96cd6707524c9fdd0c64f4495346abf098a4c66eb71e2f56415b98e2de",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "cor-cm-homogeneous-oscillator-decay",
    "model": "gpt-6-luna",
    "context_sha256": "cbb85c0004642221e527cb782f41e6885ccd8ba049b25d6a2454898c7b821834",
    "outcome": "confirmed_nonfatal",
    "reason": "The root comparison in step 1.1 needs monotonicity of exp, absent from the cited limits/range interface. Added thm-exponential-is-strictly-increasing with its exact order consequence, and cited positivity/reciprocity for the critical-damping series bound. Negative exponents and bounded trig factors give the other two estimates; t exp(lambda t)<=2/(lambda^2 t) proves critical decay. All stated bounds and hypotheses remain unchanged.",
    "post_sha256": "b698b96942e263ca823df02300edf611e27a84a302cf085cb530fd92d92d7f7b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "thm-cm-forced-oscillator-sinusoidal-response",
    "model": "gpt-6-luna",
    "context_sha256": "f861904cfebc47edd6a84cbdf97e6c975f5fb3bf10dbaed599b43a4875ac326f",
    "outcome": "confirmed_nonfatal",
    "reason": "The sequence t_k reused the fixed real spring parameter and specified only k>=0; integer periodicity did not justify that indexing. Replaced it with an explicit j in N sequence tending to infinity and retained f0!=0. Defined amplitude as sup_R |u| before use and verified the claimed value by the Pythagorean identity and an attained phase, including Omega=0 and f0=0. Cited the exact trig range/identity facts for boundedness; differentiated responses and homogeneous transient decay remain valid. Statement unchanged. Resumed review supplied the previously asserted amplitude calculation explicitly in step 1.1; its F5 inputs, exact contract claim and citation uses now match.",
    "post_sha256": "59e3a0d6efefed4422dd92362cffee4c2a59a72b9183da0482a6cb2b4c78033a",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "ex-cm-averaging-oscillatory-deviation-check",
    "model": "gpt-6-luna",
    "context_sha256": "6be43fd13486ae2a9f2b6bbd807c4b0db50fa5583ff20a0ed4a35933187b755b",
    "outcome": "confirmed_nonfatal",
    "reason": "The original suppliers established derivatives and the pi bound but did not state cosine periodicity or sin(2pi)=0. Added the exact zero-set/period theorem and trig range theorem. Step 1.1 now verifies continuity, periodicity, the state derivative, and M=1,L=0; endpoint sine zeros justify bar f=0 and g=sin t. The trapped y=0, strict pi/25<1/2 and exact x=sin t/100 establish the unchanged example on [0,100].",
    "post_sha256": "e33db81b1f8ed561f80790159f24abf55323c9d67cde95ecff4a0269f2eea964",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "ex-cm-pendulum-linearization-bound-check",
    "model": "gpt-6-luna",
    "context_sha256": "8c7745e4737f1bf00d289f14a47ec59d1905b6df140997e18985113aa394ab0e",
    "outcome": "confirmed_nonfatal",
    "reason": "L1 omitted the linearization theorem domain, continuity, state-local-Lipschitz, and positive datum/horizon hypotheses. Restored those exact assumptions and proved ||F(z)-F(w)||<=||z-w|| globally by MVT, with U=R^2 containing the trapping ball. The sine Taylor regularity and constant-integral premise are explicit. Remainder C=1/12, L=||A||=1, delta=1/100, strict e/100<1/2, and the positive majorant integral still yield error <=3/4 times 10^-4<10^-4. Example unchanged. Added the L1 trailing tag to step 1.2 to match its explicit theorem-hypothesis check and the exact proof-contract input.",
    "post_sha256": "eb38409ee55a76080da8b50789a528c90c00e2f7c3bdc3072041e8d4752a841b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "prop-cm-oscillator-amplitude-maximum",
    "model": "gpt-6-luna",
    "context_sha256": "46b04e6ea8419de926a650f467aade111b39a33881fd13443af7b03a0fb9e91c",
    "outcome": "confirmed_nonfatal",
    "reason": "The proof announcement incorrectly called sqrt decreasing, while F3 and step 3.1 correctly use its increase and reciprocal decrease. Corrected that sentence and explicitly cited nonnegative-root existence. Completing q(u) square, the derivative 4m^2 Omega(Omega^2-u*) and positive denominator prove both strict branches and the unique peak, including u*=0. The undamped remark now describes the diverging quarter-turn values precisely. Statement and peak formula are unchanged.",
    "post_sha256": "c90e2f0b449ace5c70221d935b4b47f9eee682f32d2fe89e4fe5d07ce88da9d1",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record-repaired-adjudication",
    "id": "rem-cm-approximation-scope-and-limits",
    "model": "gpt-6-luna",
    "context_sha256": "98c5a01d515e09ee24c4406b605b9e729f418a40805ef7c10d424ccbe45ce5ef",
    "outcome": "confirmed_fatal",
    "reason": "The remark asserted an unbounded resonant solution without the supplier condition f0!=0. At f0=0 its displayed xp=f0 t sin(omega0 t)/(2m omega0) is identically zero, a concrete counterexample to that assertion. Restored the nonzero-drive condition and explicitly described zero drive; also retained f0!=0 for the amplitude maximum and undamped singular-frequency limit. The finite-time, averaging trapping, and adiabatic chart/frequency qualifications agree with the exact suppliers. No Statement/Definition or physical interface changed.",
    "post_sha256": "b7d6617537443b9aff65702b17194a91c49e548eaccb1dd295e2928a410e3c04",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-unassigned-frontier-finding",
    "id": "ex-cm09-triatomic-translation-zero-mode",
    "owner_batch": "25",
    "path": "items/ex-cm09-triatomic-translation-zero-mode.md",
    "affected_use": "F5 attributes the affine lambda_i=0 family to thm-cm-homogeneous-oscillator-solution-classification; Verification 2.2 cites F2 and F5.",
    "invalidated_claim": "The named homogeneous-classification Statement requires k>0 and therefore does not supply the lambda_i=0 family.",
    "minimality": "F2 independently cites pthm-cm09-free-modes-and-degeneracy clauses 2 and 4, whose exact Statement supplies affine zero modes. Correct only the F5 attribution, retaining the motion conclusion. No item edit in this dispatch.",
    "reason": "Confirmed the digest citation mismatch against current F5 and both exact supplier Statements; F2 already supports the conclusion. Route to the ordinary frontier owner for batch 25, not published maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "route-unassigned-frontier-finding",
    "id": "ex-cm-domain-escape-in-finite-time",
    "owner_batch": "7",
    "path": "items/ex-cm-domain-escape-in-finite-time.md",
    "affected_use": "Verification 1.1 says z(t)=(1-t,-1) lies in R times U for t<1.",
    "invalidated_claim": "The state z(t) is in U, a subset of R^2; its graph (t,z(t)), rather than the state, is in R times U, a subset of R^3.",
    "minimality": "Replace the membership clause by z(t) in U or (t,z(t)) in R times U. The explicit equation and maximality deduction do not change. This item was not assigned a rejected tuple; it remains unedited.",
    "reason": "Confirmed the digest type mismatch in the current Verification 1.1. The maximality argument in 2.1 already uses the correctly typed graph (1,zeta(1)). Route to the ordinary batch-7 frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "The changed averaging Definition has five direct item consumers, all draft original-frontier items. Its objects and hypotheses are unchanged and the inspected uses remain sound. No potentially defective published consumer or published repair was found in this assigned interface event.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-gr-observer-energy-momentum-decomposition",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "status": "repaired",
    "reason": "Clause (d) compared the covariant bilinear restriction of T with the contravariant S defined by S^{ab}=h^a_c h^b_d T^{cd}. This was an ill-typed equality. The repair defines S-flat(v,w)=S(g(v,.),g(w,.)), with components g_ac g_bd S^{cd}, and proves equality on the rest space by contracting the unchanged decomposition with v_a w_b. Smoothness, symmetry, uniqueness and all component signs are preserved; no physical or stronger choice premise is introduced.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-congruence-acceleration-and-expansion-properties",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "Clause (a) and fact L6 obtained h from a definition requiring a tensor T, although no T occurs in the kinematic hypotheses. The repair uses h_p=h_{n_p}, v mapped to v+g_p(n_p,v)n_p, from the earlier observer definition and removes the unused tensor-dependent prerequisite. The normalization derivative still proves spatiality; the pullback-curve identity is now restricted to gamma-prime=n composed with gamma, avoiding an incorrect assertion for arbitrary curve sections. The scalar product rule is sourced to the induced derivative on functions.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "repaired",
    "reason": "The original data supplied only (R^4,g) and a coordinate orientation; a future observer requires a timelike field N and g(n,N)<0. Chart orientation supplies neither. The repair chooses the smooth time orientation N=partial_0 in the refuted formulation and counterexample data, checks g(N,N)=-1 and g(n,N)=-1 for n=N, and keeps the same tensor T_00=-E_0[1+(x^1/L_0)^2]. Constant Christoffels and partial_0 varphi=0 give zero divergence while mu=-varphi<0. No matter realization, field-law solution or measurement is asserted.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "rem-gr-no-universal-global-energy",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The normal-coordinate theorem explicitly asserts only Gamma(p)=0, partial g(p)=0 and g(p)=eta; its scope remark explicitly disclaims curvature and second-derivative claims. The old attribution was unsupported. The repair separates these statements from the curvature tensor R(X,Y)Z defined by the connection commutator, cites its actual tensoriality supplier, and explains why nonzero R_p cannot have all components zero in any basis. No gravitational-energy no-go theorem follows or is asserted. Also repaired the digest-confirmed misattribution excluding noncompact domains: local smooth fields on noncompact U are allowed; unbounded integrals/asymptotic limits need convergence assumptions beyond finite-chain Stokes.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "defect",
    "id": "rem-gr-local-and-global-energy-scope-and-deferrals",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "reason": "The old scope bullet excluded noncompact regions even though the model definitions allow arbitrary nonempty open smooth domains and finite-chain Stokes limits the chains, not the ambient space. The repair explicitly permits noncompact smooth U, restricts only flux integration to finite smooth singular chains, and separately defers nonsmooth interfaces, distributional sources, unbounded slice integration and asymptotic limits needing further convergence/boundary hypotheses. All local and finite-chain predictions, SI readings, normalization and empirical qualifications are retained.",
    "path": "research/defect-ledger.jsonl"
  },
  {
    "ledger": "published-consumer",
    "operation": "no_update",
    "reason": "No affected published consumer or confirmed published defect was found in the direct-use examination; imported mathematical suppliers stayed read-only.",
    "uncertain": false,
    "path": "research/published-consumer-supplier-ledger.md"
  },
  {
    "ledger": "defect",
    "id": "def-gr-minkowski-model-and-inertial-chart",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "The title objection is not a contradiction: a definition may defer the curvature deduction to its flat-connection lemma. However clause (c) actually misclassified the spacelike vector (1,2,0,0) as future-directed, against def-gr-smooth-lorentzian-objects (c). The repaired equivalence explicitly applies only to nonzero causal vectors; all metric, cone and tetrad data are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-observer-relative-velocity-expansions",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The definition of m(P)=sqrt(-g(P,P))/c and energy requires an explicit common parameter c>0. Added this quantifier to Statement and Given; no inequality changed. The mass-shell identity yields gamma squared times (c squared minus s squared)=c squared, and Taylor bounds f double-prime <=3/4(1-z0)^(-5/2) and f prime <=1/2(1-z0)^(-3/2) give the two displayed uniform remainders."
  },
  {
    "ledger": "defect",
    "id": "def-gr-stationary-weak-field-data",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Stationarity is a hypothesis, so deferring its Killing consequence is not a logical contradiction. The scope wording nevertheless obscured an immediate consequence; it now explicitly records Lie derivative zero under local time translations without assuming a global time orientation. Metric ansatz and all bounds are unchanged. Also corrected Reall attribution from unrelated section 4.2 to section 7.2 (7.19)-(7.36); its asymptotic discussion motivates, but does not prove, the local uniform-family hypotheses."
  },
  {
    "ledger": "defect",
    "id": "def-gr-newtonian-comparison-model-and-identification",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The open-domain C^r supplier does not define q double-prime at included endpoints. Preserved closed and half-open comparison motions by defining C^2 on nondegenerate intervals through continuous endpoint limits of the interior derivatives; the equation uses these unique limits. Open intervals retain the ordinary supplier convention. Poisson equation, force, units and adopted dictionary are unchanged. Also corrected the Reall Newtonian locator to section 7.2."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-weak-field-admissibility-and-inverse-bounds",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The cited Killing definition has a time-oriented domain, whereas stationary data only supply a Lorentzian metric globally. The tensor equation itself needs no orientation. Defined the global terminology by that equation and justified the cited definition on local neighborhoods: a timelike vector at each point extends with constant chart components and remains timelike nearby by continuity. Local translations give Lie derivative zero; no global orientation is inferred. Neumann-series and two-derivative inverse estimates remain unchanged and valid."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "Original step 5.1 ended after defining G, so clause (b) and its use in (c) lacked a proof. Replaced it with compact domination for the jointly smooth sphere kernel and a fixed [0,1] integral valid for signed times. The repaired PDE step (now 5.1) derives u_t and u_tt with endpoint terms 0 and c^2 F, commuting spatial derivatives, proving the wave equation and zero data. The kernel samples compact sets on every compact slab, so every derivative is bounded. Harmonic-gauge signs and all statements remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-weak-field-scaled-trajectory-limit",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The estimate correctly retains D(0), and Statement (ii) expressly assumes identical data for O(epsilon); only the title overclaimed an unconditional rate. Qualified the title without changing Statement or proof. Verified the rescaled acceleration error has norm <=sqrt(3) C_acc epsilon, the Hessian controls force differences along the compact convex segment, and Gronwall gives (D(0)+C3 epsilon S*) exp((1+K2) S*) with fixed comparison constants. Corrected Reall section to 7.2 and identified the Gronwall estimate as local."
  },
  {
    "ledger": "defect",
    "id": "ex-gr-scaled-newtonian-harmonic-trajectory",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The domain objection is false: both the stationary weak-field definition and the scaled trajectory theorem explicitly have domain mathematics, and their proofs invoke no physical postulate. The digest nevertheless identified a real incomplete verification: step 1.2 only defined the formulas. Added the two differentiated equations and initial values. The compact ball K prime has radius max(1/2,R0)<2 and Hessian norm 1, so (H2)-(H3) and the conditional matched-data estimate follow without asserting (H1) existence."
  },
  {
    "ledger": "defect",
    "id": "pthm-gr-minkowski-vacuum-model",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "Original step 2.1 asserted other solutions and different topology without a witness; physical_scope also excluded its own topology assertion. Preserved (d) and supplied complete witnesses: the free proper timelike translation quotient has a descended flat metric and orientation, solves the same vacuum law, and cannot be diffeomorphic to R^4 because its descended dz0 has a nonzero closed-curve integral while every component-symmetric covector on R^4 has the explicit radial primitive. A non-flat smooth metric with H=(x^2-y^2)/ell^2 has Ric_uu=-(H_xx+H_yy)/2=0 but R^x_uxu=-1/ell^2. Updated physical scope to admit these auxiliary comparisons while (a)-(c) retain their exact Minkowski scope. The primitive and closed-curve integral evaluations now explicitly cite thm-ftc-second-part, whose differentiability and integrable-derivative hypotheses hold for these smooth functions on compact intervals."
  },
  {
    "ledger": "defect",
    "id": "rem-gr-flat-bridge-scope-and-limits",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Consulted Reall section 7.2 in full through (7.36); section 4.2 is curvature, not the Newtonian limit. Corrected the exact locator and distinguished source motivation from local uniform estimates. Also repaired the necessary vacuum-model consumer use: alternative vacuum comparisons are now explicitly proved in its (d), while observations and semiclassical questions remain excluded. Clarified that the trajectory theorem permits epsilon^(-1/2) coordinate-time horizons but no unbounded scaled-time limit. Predictions, adopted dictionary and absent empirical inputs remain distinct."
  },
  {
    "ledger": "defect",
    "id": "rem-gr-local-flatness-versus-global-flatness",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The cited normal/exponential and flatness theorems assume a time-oriented manifold. Their local conclusions do extend to every smooth Lorentzian four-manifold, but the original note omitted the domain reduction. At each p a timelike vector extends with constant chart components and remains timelike on a smaller neighborhood by continuity; that neighborhood is time-oriented. Connection uniqueness and local geodesic uniqueness identify its normal/exponential charts with the ambient local charts. Added this reduction, retaining the broader true scope and the first-order/local/global distinctions."
  },
  {
    "ledger": "published-consumer",
    "id": "gr-flat-and-newtonian-bridges",
    "target_type": "draft-page",
    "path": "library/general-relativity/gr-flat-and-newtonian-bridges.md",
    "status": "maintenance_required",
    "affected_use": "compare with $X'=W$, $W'=-\\nabla\\psi$ over $[0,S_*]$, with an $O(\\varepsilon)$\nGronwall bound and an $\\varepsilon^{-1/2}$ coordinate-time horizon",
    "invalidated_claim": "The page describes the trajectory discrepancy as O(epsilon) without the identical-initial-data hypothesis; the exact theorem bound includes D(0).",
    "minimality": "Qualify the existing O(epsilon) phrase with for identical scaled initial data. The general convergence assertion and coordinate-time horizon remain unchanged.",
    "route": "separate-maintenance",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-schwarzschild-exterior-model",
    "outcome": "confirmed_nonfatal",
    "reason": "The product-smooth-structure proposition has no AC_omega premise. The Definition now attributes the retained choice assumption exactly to def-gr-smooth-lorentzian-objects(c), whose tangent-bundle structure assumes it. The globally defined product metric and timelike field are unchanged. The digest unit defect is also repaired: polar angular metric coefficients have units m^2, while g_00 and g_11 are dimensionless.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-gr-schwarzschild-static-congruence-and-clock-rates",
    "outcome": "confirmed_fatal",
    "reason": "At zero common coordinate duration both proper-time increments vanish, so the original quotient was 0/0. Clause (d) now requires a nonzero increment and step 3.1 verifies the denominator. Clause (c) also limits its smaller-than-coordinate-time inequality to positive increments; for reversed endpoints the inequality reverses. The unit field, all-real integral curves, proper-time identity and global acceleration computation remain valid.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "ex-gr-schwarzschild-isotropic-weak-field-comparison",
    "outcome": "confirmed_nonfatal",
    "reason": "The 7/8 scalar-composition expansion and the 1/8 difference are algebraically correct, but calling argument substitution a radial metric conversion omits the basis Jacobian. Retained all sound scalar comparisons and added the exact identity g_rr=(1+s/(4 rho_0))^4(rho_0_prime)^2=f^-1 with the squared-Jacobian second-order coefficient 1/8. Thus the radial tensor components agree exactly after full conversion; no physical mismatch is claimed.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "ex-gr-schwarzschild-static-clock-ratio-explicit",
    "outcome": "confirmed_nonfatal",
    "reason": "The positive-derivative monotonicity assertion is true but lacked the exact chain-rule and mean-value suppliers. Added thm-chain-rule for differentiation on the open positive domains and cor-mean-value-theorem for every compact subinterval of (s,infinity); step 2.1 now states its hypotheses and positive difference explicitly. The fixed positive duration already in the Example is carried to Given and L1, so the corrected clock supplier applies.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-gr-warped-spherical-christoffel-and-ricci",
    "outcome": "confirmed_nonfatal",
    "reason": "The cited curvature interfaces require a time-oriented four-manifold, whereas det(q)<0 permits a non-time-orientable base. The formulas themselves are valid. Added step 2.4: a fixed timelike base vector at an arbitrary point remains timelike on a neighborhood; its lift supplies the required local orientation. Unique Levi-Civita restrictions and curvature/contraction formulas independent of N glue on overlaps. Checked all base, mixed and sphere Ricci sums; no global-orientation hypothesis or statement restriction is introduced.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-gr-schwarzschild-ricci-and-einstein-tensors",
    "outcome": "confirmed_nonfatal",
    "reason": "L3 incorrectly claimed that arbitrary component identities retain their numerical form under every chart change. Replaced it with the tensor transformation law and intrinsic vanishing/contraction claims. The Statement already limits component tables to spherical-polar product charts; checked the six curvature entries, zero unequal-pair entries, Ricci contractions, f-specialization and continuity at poles. Those computations establish every stated conclusion without the false L3 generalization.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "lem-gr-warped-base-vacuum-reduction",
    "outcome": "confirmed_nonfatal",
    "reason": "The two-dimensional field was incorrectly called Killing in the sense of a four-dimensional supplier. Retained its full claim, defined the base Lie derivative using the dimension-independent flow definition and coordinate proposition, and expanded metric compatibility to prove L_xi q = nabla_A xi_B + nabla_B xi_A locally. Checked parallel volume form, pure-trace curvature, Hessian reduction, mass constancy and K norm/components. Also supplied the exact connected-open zero-differential theorem and smooth-square-root/logarithm derivative suppliers; no new mathematical item is needed.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "thm-gr-local-birkhoff-warped-product",
    "outcome": "confirmed_nonfatal",
    "reason": "The coordinate criterion in L4/L5 required the inverse-function theorem, absent from deps. Added the existing choice-free smooth Euclidean lemma and applied it to F=(u1,r), whose determinant is partial_u2 r != 0 because K(r)=0 and z!=0. Checked base Lie-derivative zero from the repaired supplier, cross-term removal H_prime=F/E, diagonal inverse z=1/q_rr and both signs of z. Supplied FTC and zero-derivative uses exactly; an explicit timelike field on the local rectangle licenses the four-dimensional Killing definition without assuming global time orientability.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "pthm-gr-schwarzschild-vacuum-model",
    "outcome": "confirmed_fatal",
    "reason": "The assigned flat-example citation is a nonfatal overstatement, repaired by direct field-law substitution. Full review also confirms a fatal original Statement(b) defect: at Delta t=0 the clock quotient is 0/0. Statement(b), L2 and proof 1.2 now require nonzero common duration and verify the denominator. Vacuum validity, nonflat curvature and mass-parameter deductions remain conditional, with no measured inputs.",
    "status": "repaired",
    "uncertain": false,
    "defect_type": "logic"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-kruskal-model-properties",
    "outcome": "confirmed_nonfatal",
    "reason": "L3 restated exterior-only curvature suppliers as applying to f<0. Replaced it with the existing advanced-extension lemma(d), whose explicit interface covers every r>0, and proved the smooth branch isometry Phi_b with dv=dx0+f^-1 dr on both (0,s) and (s,infinity). Checked that the extension proof uses rational Christoffel/Ricci identities on both branches, not an interior orthonormal frame with sqrt(f). Isometry transfers its invariants; smoothness/density extends them across axes and poles. Also supplied mean-value monotonicity and proved the four connected components.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "pthm-gr-schwarzschild-circular-orbit-predictions",
    "outcome": "confirmed_nonfatal",
    "reason": "The Statement(c) already fixes ell_r^2=c^2 s r^2/(2r-3s) before differentiating in the independent radial variable. L1 omitted that essential condition and was false for general ell (ell=0 gives V_second=-c^2 s/r^3). Repaired L1 and step 1.3 to carry fixed ell and the circular substitution explicitly. Checked supplier(c), its endpoint factorization at r=3s, timelike existence/necessity and the nonzero-angular-momentum future null orbit. No physical prediction or empirical qualification changes.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "cex-gr-exterior-charts-do-not-cover-the-extension",
    "outcome": "confirmed_nonfatal",
    "reason": "The bijection corollary interface alone does not supply exponential order preservation. Added its exact strictly-increasing theorem; inversion gives log t<-M iff t<exp(-M), proving the stated negative-infinite limit. Verified Phi preserves r>s, horizon determinant/inertia and finite invariant, and the coordinate divergence for any approaching sequence. Added an explicit sequence r_n=s+s/n with v_n=0 so the approach and closure claim are nonvacuous. The refuted statement is unchanged.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "defect",
    "id": "rem-gr-schwarzschild-horizon-and-singularity",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "The original physical scope called the full Kruskal level r=s a smooth null hypersurface. Since r=s iff UV=0, it is instead the union of the smooth null hypersurfaces U=0 and V=0. Their tangent spaces span all four dimensions at U=V=0, so the union is not a smooth hypersurface there. The existing repair states the transverse intersection and preserves the smooth advanced horizon, the right-exterior escape boundary, finite horizon curvature and the C2 obstruction at r=0.",
    "status": "repaired",
    "uncertain": false
  },
  {
    "ledger": "published",
    "updates": [],
    "reason": "Direct dependency/reference scanning found only draft frozen-frontier consumers of these six interface changes. There is no published consumer repair or audit-status update to merge."
  },
  {
    "ledger": "defect",
    "status": "requires_owner_repair",
    "id": "ex-gr-schwarzschild-circular-orbit-thresholds-explicit",
    "path": "items/ex-gr-schwarzschild-circular-orbit-thresholds-explicit.md",
    "affected_use": "Example clause 2 and L3 describe null circular data without ell!=0; Given allows ell=0. L2 also omits the circular angular-momentum substitution in V_second.",
    "invalidated_claim": "At ell=0, e0=0 and the null tangent is zero, while the asserted -32 ell^2/(81s^4)<0 is false. For a general fixed ell, the displayed V_second restatement is also false.",
    "minimality": "Require ell!=0 in the photon-sphere clause, Given and L3, and qualify L2 by ell^2=c^2 s r^2/(2r-3s), differentiated at fixed ell.",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "route": "Unassigned frozen-frontier owner; no item edit or Step-5 adjudication by unit 72.",
    "snippet": "## Example\n\nLet $(M,g,N)$ be the Schwarzschild exterior datum with Schwarzschild radius\n$s>0$, $f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), with the\ncircular-orbit data of\n[[lem-gr-schwarzschild-circular-orbits-and-photon-sphere]",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "status": "requires_owner_repair",
    "id": "def-gr-kruskal-model-data",
    "path": "items/def-gr-kruskal-model-data.md",
    "affected_use": "Opening Definition attributes AC_omega to the manifold-product and tangent-bundle suppliers.",
    "invalidated_claim": "The product-smooth-structure proposition has no AC_omega hypothesis; its interface is being inaccurately restated.",
    "minimality": "Retain AC_omega and attribute it only to the tangent-bundle supplier, as in the repaired exterior definition.",
    "outcome": "confirmed_nonfatal",
    "route": "Unassigned frozen-frontier owner; the parameter use of the changed exterior definition stays sound.",
    "snippet": "**(a) Parameters.** Let $c>0$, $G_N>0$ and $m_*>0$ be the constants and mass\nparameter of the Schwarzschild exterior datum, and put\n$s:=2G_Nm_*/c^2>0$ ([[def-gr-schwarzschild-exterior-model]] clause (a)). The\n**Kruskal model datum of mass parameter $m_*$** is constructed from these\ndata as follows.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "status": "requires_owner_repair",
    "id": "lem-gr-schwarzschild-curvature-and-kretschmann-scalar",
    "path": "items/lem-gr-schwarzschild-curvature-and-kretschmann-scalar.md",
    "affected_use": "L3 gives the correct explicit frame-transformation law, then says its component identities are chart independent.",
    "invalidated_claim": "If read as identical numerical component tables in arbitrary charts, the last phrase is false; the stated frame law and scalar contraction remain valid.",
    "minimality": "Replace only the final phrase with intrinsic tensor/scalar identities and transformation of components; no curvature claim needs weakening.",
    "outcome": "confirmed_nonfatal",
    "route": "Unassigned frozen-frontier owner; independent presentation defect, not an effect of the unchanged metric.",
    "snippet": "[L3] Curvature components transform as those of a $(0,4)$-tensor: if $e_{\\hat a}=d_{\\hat a}{}^\\mu\\partial_\\mu$ are the coefficients of a frame field, then the frame components of the lowered curvature are $\\hat R_{\\hat a\\hat b\\hat c\\hat d}=d_{\\hat a}{}^\\alpha d_{\\hat b}{}^\\beta d_{\\hat c}{}^\\gamma d_{\\hat d}{}^\\delta R_{\\alpha\\beta\\gamma\\delta}$ evaluated on the same chart domain; the tensor $R$ is smooth and its component identities are chart independent ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-tensor-fields-and-components]], [[thm-gr-curvature-algebraic-symmetries]]).",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_completed_adjudication",
    "id": "lem-gr-flrw-metric-and-comoving-data",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The Statement and proof already distinguish n=c^-1 partial_t, g(n,n)=-1, from gamma_x(t) with U=partial_t and g(U,U)=-c^2. The proper-time density is c and the increment is t1-t0; the title incorrectly calls these cosmic-time curves unit-speed. Retitled precisely without changing Statement/Definition. Also corrected the assigned empty-domain worksheet: Sigma can be empty and pointwise claims are vacuous. Aligned the two L4 contract quotations to current proper-time supplier clauses; focused strict contract check passes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_completed_adjudication",
    "id": "ex-gr-flrw-flat-power-law-check",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "status": "fixed",
    "reason": "L1 attributed smoothness to thm-real-power-continuity-and-derivatives, whose Statement supplies only continuity and first derivatives. A smooth Friedmann datum requires every derivative. Replaced that restatement with the exact supplier claim and proved locally by induction D^m(u^alpha)=t_star^-m product_{r<m}(alpha-r) u^(alpha-m), with continuous right side for every m, including zero coefficients. Apply alpha=q and alpha=-2 to a and epsilon; p is a constant multiple. The unchanged checks of F,A,C,S reduce to 3q(1+w)=2; all divisions use t>t0, c,G_N,t_star>0 and q>0. No new prerequisite or interface change.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_completed_adjudication",
    "id": "lem-gr-flrw-christoffel-symbols",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Step 2.3 used the four-dimensional index d in spatial gamma^{id} and gamma_{jd}, which are defined only for d=1,2,3, and incorrectly said g_{0d}=0 without that restriction. The result is correct: g^{i0}=0 removes the temporal summand, after which partial_0 g_{jd}=2a adot gamma_{jd} and the spatial inverse identity yield Gamma^i_0j=H delta^i_j. Made this restriction explicit; checked all other index families directly against the current Levi-Civita formula. Statement and dependencies unchanged. Corrected assigned contract zero boundary (individual inverse entries may vanish); aligned the L1/L3 quotations to current Levi-Civita clause (a); focused strict contract check passes.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_completed_adjudication",
    "id": "rem-gr-flrw-observation-and-model-dependence",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "The redshift theorem first derives constancy of a V^t from the metric and future affine null-geodesic rule, then uses n=c^-1 partial_t and E=-c g(V,n) to obtain the observer-energy ratio; z is defined by 1+z=E_E/E_R. The scope note omitted these definitions by saying metric and light-ray rule alone. Added precisely these prerequisites, without a field equation, observational premise or numerical uncertainty. The note continues to distinguish conditional model predictions, apparatus-dependent observations and statistical inference; neither agreement nor a p-value is presented as proof of the model.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "def-gr-flrw-spatial-model",
    "status": "owner_review_required",
    "path": "items/def-gr-flrw-spatial-model.md",
    "raw_sha256": "eaf6eab49d6e5988fb2c299622f0e3ede1e1539e4376cf053ddbed29dddae1fa",
    "section": "Definition (a),(c)",
    "snippet": "The sign is unchanged, but for $k\\ne0$ the normalized condition (a) is\npreserved only when $\\lambda=1$",
    "affected_use": "The allowed empty connected three-manifold carries the unique empty metric. For k=1 and lambda=2 both the original and rescaled metrics satisfy the normalized Ricci condition vacuously.",
    "invalidated_claim": "Necessity of lambda=1 at the stated empty-manifold scope.",
    "minimality": "Qualify the normalization necessity by Sigma nonempty; the nonempty physical standard models are unaffected.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "def-gr-flrw-model-data",
    "status": "owner_review_required",
    "path": "items/def-gr-flrw-model-data.md",
    "raw_sha256": "b4b6a329ac42c50217a6d8e25bf29cc61e3fcc3f8cb065367e374c3e5ad1ad49",
    "section": "Remarks / Scale redundancy and normalization",
    "snippet": "for $k=\\pm1$ it is a normalized datum only when\n  $\\lambda=1$",
    "affected_use": "With Sigma empty, gamma and lambda^-2 gamma are the same empty metric and satisfy the normalized condition for the same k=1 for every positive lambda.",
    "invalidated_claim": "Necessity of lambda=1 for a normalized datum allowing Sigma empty.",
    "minimality": "Qualify necessity by Sigma nonempty; no weakening of the nonempty geometric or physical statements is required.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "lem-gr-constant-curvature-three-manifold-ricci",
    "status": "owner_review_required",
    "path": "items/lem-gr-constant-curvature-three-manifold-ricci.md",
    "raw_sha256": "1a5f385b0e4855ee66ee74727dd3a4545f4c0f6bc467cd6e4d22d92fa43796c9",
    "section": "Proof 4.1",
    "snippet": "the empty and low-dimensional cases do not arise because $\\Sigma$ is a three-manifold",
    "affected_use": "A smooth three-manifold may be empty under the exact supplier convention. The tensor identities remain vacuously true on the empty manifold.",
    "invalidated_claim": "The explanatory exclusion of the empty case, not the curvature equivalence.",
    "minimality": "Replace the empty-case exclusion with its vacuous interpretation; Statement can stay unchanged.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "ex-gr-flrw-redshift-conservation-check",
    "status": "owner_review_required",
    "path": "items/ex-gr-flrw-redshift-conservation-check.md",
    "raw_sha256": "b754963136eae99d5db69cc950e1714fd0d888280e5f0e0f45fed40caa1e7763",
    "section": "Fact L3",
    "snippet": "a nonzero vector $V$ is future-directed exactly when $g(V,\\partial_t)<0$",
    "affected_use": "The future-direction criterion in def-gr-smooth-lorentzian-objects applies only to nonzero causal vectors. In its flat chart V=partial_t+(2c/a)partial_1 has g(V,partial_t)=-c^2<0 but g(V,V)=3c^2>0. Actual constructed ray is proved null in step 2.1.",
    "invalidated_claim": "The unrestricted future-direction assertion in L3; the actual null-ray calculation is unaffected.",
    "minimality": "Restrict L3 to nonzero causal vectors. No ray or energy-ratio Statement change is needed.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "ex-gr-cosmological-redshift-interface-record-window",
    "status": "owner_review_required",
    "path": "items/ex-gr-cosmological-redshift-interface-record-window.md",
    "raw_sha256": "562e4356c2ae7294055367100cf9e3ec178f942fa5a2dbc48b0497d2c66d0b1f",
    "section": "Fact L3",
    "snippet": "a nonzero vector is future-directed exactly when $g(V,\\partial_t)<0$",
    "affected_use": "The same spacelike vector partial_t+(2c/a)partial_1 contradicts the unrestricted criterion. Step 1.1 proves nullness of the actual W before classifying its future direction.",
    "invalidated_claim": "The unrestricted L3 restatement, not the checked operational-model ray.",
    "minimality": "Restrict future direction to nonzero causal vectors; retain the checked ray and redshift conclusions.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "pthm-gr-flrw-power-law-solutions",
    "status": "owner_review_required",
    "path": "items/pthm-gr-flrw-power-law-solutions.md",
    "raw_sha256": "ccec3d71014364663a3bcec56ab662204a7ec2b1c53a24d766fe9d314e5b2b1d",
    "section": "Fact L2; Proof 1.1",
    "snippet": "the function is smooth and strictly positive",
    "affected_use": "L2 attributes smoothness of positive-base powers to the same continuity/first-derivative suppliers. Step 1.1 asserts smoothness without an all-orders argument, just as in the assigned example before repair. The current theorem calculation itself is correct once regularity is established.",
    "invalidated_claim": "Eligibility of the displayed smooth Friedmann datum is asserted without establishing all derivatives.",
    "minimality": "Add a local all-orders differentiation induction under the existing hypotheses, as in the repaired example; do not add a reverse dependency on its later B-page example.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_out_of_assignment_finding",
    "id": "def-gr-smooth-lorentzian-objects",
    "status": "owner_review_required",
    "path": "items/def-gr-smooth-lorentzian-objects.md",
    "raw_sha256": "6edca6de1efeaffc4fcd8b7000abf755eb82993a5a6d1f722ab53b21ade3bba3",
    "section": "Fact F2; Proof 1.2",
    "snippet": "The square root is smooth on $(0,\\infty)$",
    "affected_use": "F2 cites thm-real-power-continuity-and-derivatives, whose Statement gives continuity and first derivatives only. Step 1.2 relies on it for smooth square-root normalization without a local all-orders proof. This does not affect the assigned metric lemma: its proper-time density is the explicitly computed constant c.",
    "invalidated_claim": "Unestablished smoothness supplier restatement in the generic normalization proof.",
    "minimality": "Prove positive-base power smoothness locally by repeated differentiation or cite an adequate existing all-orders supplier; leave the assigned constant-density computation intact.",
    "route": "frontier owner if in frozen scope, otherwise separate maintenance; no item edited or adjudicated by this unit",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record_supplier_fidelity",
    "id": "thm-real-power-continuity-and-derivatives",
    "status": "published_supplier_unchanged",
    "reason": "Inspected the published Statement and complete three-step proof: positive-base powers are continuous and differentiable with derivative alpha x^(alpha-1). It does not claim all-orders smoothness. The assigned example now proves that locally; the published theorem needs no repair. No potentially defective published consumer was identified in the inspected uses.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-def-gr-wave-screen-and-tt-projection",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "def-gr-wave-screen-and-tt-projection",
    "batch": "74",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "detail": "The field clauses did not explicitly lift the fixed component vectors to tangent vectors at every field point. The inertial chart provides a canonical constant extension, so this is a nonfatal typing omission. Clause (d) now gives n_q=n^a partial_a|_q and s_q=s^a partial_a|_q on a specified open domain, and specifies smooth symmetric tensor fields. Clause (c) extends screen dual covectors by e^i(v)=eta(e_i,v), making the ambient reconstruction well typed. Normalization, projections and amplitudes are unchanged.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u74.json",
        "note": "Current-carrier adjudication and repair review; not independent acceptance."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-lem-gr-null-phase-coordinate",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "lem-gr-null-phase-coordinate",
    "batch": "74",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "detail": "The opening supplier restatement calls n=du the wave covector although the supplier calls k=-omega n the wave covector. This is nonfatal terminology: clause (a), the proof and the Remark already distinguish both objects and give the correct signs. Changed only the opening name to the differential of the phase coordinate; also parenthesized (partial_3 u)^2 and stated partial_3^2 u=0 in proof 2.1 to remove an ambiguous derivative expression.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u74.json",
        "note": "Current-carrier adjudication and repair review; not independent acceptance."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-ex-gr-plane-wave-regauge-to-tt",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "ex-gr-plane-wave-regauge-to-tt",
    "batch": "74",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "detail": "L1 omitted the X in V_0 hypothesis of the unique-TT-representative supplier. The proposed diagonal counterexample has Z=0 and trace one, confirming that the unconditional restatement is false. This is nonfatal for the example: step 1.1 already checks all four harmonic contractions for the actual matrix, so the supplier applies. Repaired L1 with X in V_0 and omega nonzero, and made step 2.1 explicitly use and cite step 1.1; the matrix, representative and gauge transformation are unchanged.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u74.json",
        "note": "Current-carrier adjudication and repair review; not independent acceptance."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-ex-gr-sinusoidal-tt-plane-wave",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "subject": "ex-gr-sinusoidal-tt-plane-wave",
    "batch": "74",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "detail": "With Box=-partial_0^2+partial_3^2 on these profiles, both second derivatives are -omega^2 f, so the time and spatial contributions are +omega^2 f and -omega^2 f. L1 displayed them in the reverse order. The scalar equality was still zero (the judge overstates its falsity), and neither harmonicity nor the curvature and strain calculations fail; this is a nonfatal sign-decomposition defect. Repaired L1 by giving both second derivatives and the correctly signed Box formula for cosine and sine. L2 now also explicitly retains the zero-profile branch rather than writing 1/(2M) without M>0.",
    "evidence": [
      {
        "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u74.json",
        "note": "Current-carrier adjudication and repair review; not independent acceptance."
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All eleven direct item consumers of the two changed interfaces are draft items in the frozen frontier. No published interface was changed and no published consumer was found in the dependency/reference searches.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-out-of-lane-1",
    "subjects": [
      "lem-gr-tt-screen-projector",
      "cex-gr-half-trace-subtraction-on-the-rest-space"
    ],
    "disposition": "open-outside-assignment",
    "affected_use": "Both final Remarks state the trace identity for an arbitrary rank-r projector q without eta-self-adjointness.",
    "evidence": "In the standard chart take q with zero time components and spatial block [[1,1,0],[0,0,0],[0,0,1]], and A=diag(0,0,1,0). Then q^2=q, rank(q)=2, q^{cd}A_cd=0, but eta^{ab}q_a{}^c q_b{}^d A_cd=1. Thus the stated identity fails. It holds for eta-self-adjoint idempotents; moreover zero input trace can vanish at ranks other than two.",
    "minimality": "Restrict the general identity to eta-self-adjoint idempotents and qualify the vanishing claim. The proved computations for the actual orthogonal p and h are sound and are the only uses in the assigned regauging example.",
    "route": "owner/frontier item maintenance outside this rejected-tuple assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-out-of-lane-2",
    "subjects": [
      "lem-gr-tt-screen-projector"
    ],
    "disposition": "open-outside-assignment",
    "affected_use": "Statement (a) writes h-p=s-flat tensor s beside h^a_b-p^a_b=s^a s_b; the first Remark mentions a four-dimensional rest-space projector.",
    "evidence": "With the ordinary vector-first tensor convention, the displayed endomorphism is s tensor s-flat. An observer rest space in this four-dimensional Lorentzian model has dimension three by lem-gr-observer-projection-decomposition.",
    "minimality": "Correct the tensor-factor order and rest-space dimension in the owner lane; the component matrix calculations consumed here already have the correct order and rank.",
    "route": "owner/frontier item maintenance outside this rejected-tuple assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_owner_review",
    "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u74-out-of-lane-3",
    "subjects": [
      "lem-gr-plane-wave-gauge-decomposition"
    ],
    "disposition": "open-outside-assignment",
    "affected_use": "Statement (a), [L1] and proof 1.1 pair vector n and covector k as eta(n,k) and eta(k,k).",
    "evidence": "For k a covector, the typed quantities are k(n) and eta^{-1}(k,k). The next musical-isomorphism formula identifies k-sharp, so the intended adapted-frame construction is recoverable and its component proof is sound.",
    "minimality": "Replace mixed pairings by k(n), k(w) and eta^{-1}(k,k) or explicitly define the notation. This does not change the concrete omega=1 system used in the assigned example.",
    "route": "owner/frontier item maintenance outside this rejected-tuple assignment",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-gr-causal-curves-and-reachability",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "false_positive",
    "disposition": "dismissed_false_positive",
    "reason": "Schema explicitly requires justified_by results to depend on the definition, without reverse deps. Both cited lemmas are absent from this definition’s deps; causal calculus proves chart independence using transition chain rules and AC composition, and maximal-geodesic extension derives endpoint continuation from the curve convention and ODE calculus. The alleged prerequisite cycles do not exist.",
    "post_sha256": "fd2f2b23849a4cba0dfde9bff75cee9c6238b4265526a1b8f3318f5bf0c44f77",
    "uncertain": false,
    "source_urls": [
      "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-gr-causal-conditions-and-global-hyperbolicity",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_nonfatal",
    "disposition": "repair_completed",
    "reason": "The cited def-continuity-real only defines functions on subsets of R. Replaced it in deps and clause (d) by published def-continuous-map-top and stated its neighborhood condition for the manifold topology and usual real topology. Strict causal increase and all other clauses are unchanged.",
    "post_sha256": "204511e32235abcb4e0de2f08a58f0956512e0d3ebbffbb6d4de433f16818149",
    "uncertain": false,
    "source_urls": [
      "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-gr-geodesic-congruence-and-kinematics",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "false_positive",
    "disposition": "dismissed_false_positive",
    "reason": "justified_by is the schema’s explicit well-definedness discharge, whose target must depend on this definition and must not be in its deps. B=∇n, h=g+n⊗n and the symmetric/antisymmetric formulas define smooth tensors from earlier tensor calculus independently of their decomposition identities; the lemma proves those identities from the formulas rather than assumes them. No reverse deps edge or circular proof exists.",
    "post_sha256": "4fd597e89f06bb4d6db2603eb00d5427275a19350d3384c66677b51c37b7be5d",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "def-gr-spacelike-initial-data-and-constraints",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_fatal",
    "disposition": "repair_completed",
    "reason": "The alleged justified_by cycle is false under SCHEMA: normal construction and projection evaluation legitimately discharge defined formulas, with no reverse deps. Independent fatal logical defects do occur in Definition (c)-(d): Cauchy implies the separate strong-causality/compact-diamond condition only by a later theorem, and universal absorption does not make arbitrary developments isometric. Minkowski and its open flat slab with h=δ,K=ρ=j=0 give developments with different geodesic completeness. Marked the Cauchy implication deferred and replaced the false uniqueness assertion by the exact universal embedding property, preserving the defining class and equations.",
    "post_sha256": "8a55962e4657d2b3de675518ba1ac6883544d80cb1201fae2ecfd3d36f7032cd",
    "uncertain": false,
    "source_urls": [
      "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    ],
    "familiar": true,
    "defect_type": "logic"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "lem-gr-kinematic-decomposition-identities",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_fatal",
    "disposition": "repair_completed",
    "reason": "L4 invoked positivity of the observer rest space, but the definition explicitly defers this to observer-projection-decomposition claim 3. Added that proved lemma to deps/roles and L4, checked its Cauchy-Schwarz positivity proof and three-dimensional decomposition, and synchronized its contract citation. Also made h^{ab}B_ab=theta and spatiality of shear/vorticity explicit from the annihilated B slots. The rest-basis matrix trace calculation and minus sign of the antisymmetric square are valid; Statement is unchanged.",
    "post_sha256": "78d9af584e08498a26f3155eed9e0f282ca8f2ea4e0354cc77616bf4ad4f98a5",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-gr-minkowski-cauchy-and-global-hyperbolicity",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_nonfatal",
    "disposition": "repair_completed",
    "reason": "L4 incorrectly identified the inertial chart as a slice chart. The translated permutation y=(x1,x2,x3,x0−c) is a smooth chart with y(Σc)=R3×{0}, giving exactly the required embedded-submanifold interface and the same positive spatial tangent metric. Corrected L4 and the additional zero-vector overstatement in L2; 1.1 already handles equality separately. Integrated cone reachability, unique time-level crossings, bounded closed diamonds and causally convex double-cone proof remain valid; Statement unchanged.",
    "post_sha256": "5f5b9a5818a7087cc3d69a0bcdedfec0241cefedf61a4465329d9361ffab3a29",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_nonfatal",
    "disposition": "repair_completed",
    "reason": "The original slab supplies only GH without geodesic completeness, so its independence remark lacked the converse argument. Preserved the claim and added proof step 6.1: the existing translation quotient cylinder is geodesically complete because q(a+sv) solves the zero-Christoffel geodesic equation locally for every initial tangent and all real s; local ODE uniqueness supplies maximality. Its periodic timelike curve leaves every neighborhood excluding its halfway point, violating strong causality. Added the exact cylinder/quotient suppliers and owning contract derivation; also corrected the slab slice chart to (z,x0−1/2). Statement unchanged.",
    "post_sha256": "caf8fd2bf1b2ddf4979b5ed42aadeea4ad0fc82ddb38cba69e9a0b20ab0dec6d",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "cex-gr-achronal-set-need-not-be-acausal",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_nonfatal",
    "disposition": "repair_completed",
    "reason": "The universal reachability equivalence is correct, but the straight-path realization in L1 falsely includes u=v: a constant path has zero velocity and is excluded. L1 now reserves straight causal paths for distinct endpoints and uses equality for reflexive reachability. The counterexample only uses distinct p=(0,0,0,0),r=(1,1,0,0); their nonzero null displacement is in the closed cone and neither direction is in the open cone, so {p,r} remains achronal and nonacausal. No refuted-statement or proof-step change.",
    "post_sha256": "133dea589fee03a3e69108d4efe5730c628c0722028902bca7cfb5b12c1537ca",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "cex-gr-spacelike-hypersurface-need-not-be-cauchy",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_nonfatal",
    "disposition": "repair_completed",
    "reason": "The inertial chart is not a slice chart under the supplied R3×{0} convention. L3 now restricts to U=x^{-1}(R×B) and uses y=(z,t), whose slice image is B×{0}=y(U)∩(R3×{0}); its tangent metric is positive definite. The explicit vertical future timelike line at |z0|=2 has unbounded time, hence no endpoint limits, and misses Σ. Also repaired the erroneous Remark: full inertial levels are Cauchy because time ranges over R strictly on every inextendible causal curve, not merely because the function is temporal. Refuted statement and proof steps unchanged.",
    "post_sha256": "1230d70169faaf8c618b541ca05577e19f7e7470a14739d80e161048c809f3da",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_adjudication",
    "id": "ex-gr-flat-slab-vertical-line-proper-time",
    "run": "physics-cm-qm-gr-79-2026-10-11",
    "phase": "initial",
    "round": 1,
    "unit": "75",
    "outcome": "confirmed_fatal",
    "disposition": "repair_completed",
    "reason": "The assigned original included the ideal-clock reading identification in mathematical Example (ii) and Verification 2.1, although the physics suppliers were only motivated_by. That violates the mathematics/physics prerequisite boundary. The current repair keeps the complete length and metric proper-time computation with fixed real c>0 in (ii)/2.1 and places the conditional SI/ideal-clock interpretation in Remarks, retaining the smooth classical test-field scope, no back-reaction and no measured readings. Checked the complete Verification and the exact worldline Definition (d), SI Definition (b), and ideal-clock Postulate (i),(iv); no physical premise remains in the mathematical deduction.",
    "post_sha256": "1f96655c769c0b4496e1f3da5b6725f161e5509d954b6b090db2f9377b3b9cff",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "other"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_outside_lane",
    "id": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "location": "Definition (e)",
    "path": "items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md",
    "affected_use": "the set of points of $D^+(S)$ that are not chronologically preceded by any\npoint of $D^+(S)$",
    "disposition": "owner_review_required",
    "reason": "The prose reverses the displayed future-horizon subtraction: p in I^-(D^+(S)) means p chronologically precedes some q in D^+(S). Replace the prose by points that do not chronologically precede any point of D^+(S); preserve the displayed formula. Read-only outside-lane finding, routed to its frontier owner.",
    "uncertain": false,
    "source_urls": [
      "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_outside_lane",
    "id": "def-gr-future-and-past-sets",
    "location": "Definition (c)",
    "path": "items/def-gr-future-and-past-sets.md",
    "affected_use": "openness of $I^\\pm$ and the transitivity of $\\ll$\n([[lem-gr-causal-curve-calculus]] clauses (d) and (f))",
    "disposition": "owner_review_required",
    "reason": "The calculus clauses (d),(f) supply concatenation and reachability properties, not openness. The existing well-definedness discharge lem-gr-chronology-openness (a) supplies openness. Cite it in clause (c), retaining it as justified_by rather than introducing a reverse deps cycle. Read-only outside-lane finding, routed to its frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "route_outside_lane",
    "id": "lem-gr-time-separation-maximizers",
    "location": "Statement",
    "path": "items/lem-gr-time-separation-maximizers.md",
    "affected_use": "$L_g$ be the Lorentzian length functional on future causal curves\n([[def-gr-timelike-worldline-and-proper-time]])",
    "disposition": "owner_review_required",
    "reason": "The cited worldline Definition (f) restricts proper time and length to future timelike piecewise-C1 worldlines. The existing prerequisite lem-gr-normal-neighborhood-length-monotonicity explicitly defines the Lebesgue length for every locally absolutely continuous future causal curve, with nonzero velocity almost everywhere and finite compact-interval length. Replace the defining citation with that supplier; preserve the stated functional and theorem. Read-only outside-lane finding, routed to its frontier owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_existing_maintenance",
    "id": "thm-existence-and-uniqueness-of-a-maximal-ode-solution",
    "record": "physics-cm-qm-gr-79-2026-10-11-b7-maximal-gluing",
    "affected_use": "Slab fact L8 and proof steps 2.3 and 6.1 use local ODE uniqueness; the vertical paths and lifted cylinder geodesics are explicit solutions on their full stated domains.",
    "reason": "The canonical published ledger already records a nonfatal omission of representative gluing in the maximal-ODE openness argument. That finding was not independently re-adjudicated here and remains mathematics-owner maintenance. The assigned flat constructions provide their solutions explicitly and use the supplier for local uniqueness; no repair, closure or new published acceptance is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u76-isometry-input",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "76",
      "subject": "def-gr-observation-and-analysis-architecture",
      "severity": "fatal",
      "class": "accuracy",
      "subclass": "ill-typed-interface",
      "location": "definition",
      "caught_at_stage": "step5-initial-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "detail": "Definition (a) exhaustively listed permitted configuration entries but omitted the linear tangent-space isometry required by (b)3. Parameters and annotations supplied no reconstruction of that map, so the promised deflection case had no admissible configuration. Added an explicit metric-preserving linear-isomorphism entry and made (b)3 consume it with Phi(n_1)=n_2. This is a missing input type in a nonproof definition, classified other. Also corrected the spatial-projection locator from supplier clause (b) to (c).",
      "correction": "Admit the supplied tangent-space linear isometry as a configuration entry and require it in readout (b)3.",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u76.json",
          "note": "Exact adjudication, post-item guard, review-context hash and focused validation results are recorded here."
        }
      ],
      "post_sha256": "c371b745f1c28b2b6c6a86aa16c52931e2871af8983726890f5eb6d71865a4f1"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u76-projection-locator",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "76",
      "subject": "def-gr-observation-and-analysis-architecture",
      "severity": "nonfatal",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "location": "definition",
      "caught_at_stage": "step5-initial-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "detail": "Readout (b)3 attributed h_n to clause (b) of the observer definition; the inspected supplier defines rest space in (b) and spatial projection in (c). The formula itself was correct.",
      "correction": "Correct the exact spatial-projection locator to clause (c).",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u76.json",
          "note": "Exact adjudication, post-item guard, review-context hash and focused validation results are recorded here."
        }
      ],
      "post_sha256": "c371b745f1c28b2b6c6a86aa16c52931e2871af8983726890f5eb6d71865a4f1"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "physics-cm-qm-gr-79-2026-10-11-step5-initial-r1-u76-transported-clock-queue",
      "run": "physics-cm-qm-gr-79-2026-10-11",
      "batch": "76",
      "subject": "rem-gr-primary-report-research-queue",
      "severity": "nonfatal",
      "class": "accuracy",
      "subclass": "missing-research-obligation",
      "location": "statement",
      "caught_at_stage": "step5-initial-adjudicate",
      "caught_by_role": "alpha-adjudicate",
      "disposition": "fixed",
      "detail": "Statement (ii)1 included transported clocks but identified only apparatus and analysis as missing after naming static-Schwarzschild and comoving-FLRW predictions. Their inspected statements restrict the observer velocities and do not calculate arbitrary transported-clock comparisons. This is a nonfatal omission from a future research queue, with no present comparison or proof depending on it. Repaired the queue to require a trajectory-specific proper-time comparison at reunion, or the actual moving-observer signal-frequency prediction, in addition to apparatus and analysis. Will section 2.1.3 separately discusses moving-clock effects; only its relevant survey passage was consulted, not a primary experimental report.",
      "correction": "Record trajectory-specific proper-time or moving-observer signal predictions as future obligations alongside apparatus and analysis.",
      "evidence": [
        {
          "path": "research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u76.json",
          "note": "Exact adjudication, post-item guard, review-context hash and focused validation results are recorded here."
        }
      ],
      "post_sha256": "0a5a8a0d6900eceaabf9772e056dd8320270d82eb11ffa0cacf22cc0a32c63ee"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "none",
    "reason": "No direct published consumers or published defects were found in this lane. No published carrier or ledger entry requires a proposed maintenance update.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-auxiliary-complete-riemannian-metric",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The frozen L7 citation to completeness did not supply sequential compactness. Current L7 correctly uses the choice-free compactness implications (clauses 1 and 3), topology agreement and the Cauchy/subsequence lemma; proper sublevels trap the Cauchy tail, giving completeness of h-prime and Hopf-Rinow compactness componentwise. Reconciled the stale L7 owning-contract citations with these exact suppliers. The carrier already differed from the assignment on arrival; no new theorem text was needed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-future-and-past-sets",
    "outcome": "false_positive",
    "status": "resolved",
    "evidence": "Chronology openness appears in justified_by, not deps. SCHEMA expressly permits this well-definedness discharge when the lemma depends on the definition. Its openness proof uses local cones, restricted timelike arcs and transitivity, rather than the derived properties of future sets; its closure clause uses only the defining predicate. The logical prerequisite graph is therefore acyclic. The short-segment and closure arguments in the definition are sound under the declared AC_omega/DC assumptions; no edit."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-coordinate-ball-geodesic-convexity",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The frozen title said radius although the statement and proof concern its square. The current title explicitly says squared Euclidean radius. The operator-norm geodesic estimate f-double-prime >= 2(1-Gamma-norm times radius)|velocity|^2 and convex chord bound prove containment, without claiming convexity of the unsquared norm. This existing title repair resolves the overstatement; the Statement remains unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-joint-exponential-diffeomorphism",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The missing chart centering in the frozen proof is an omitted routine translation, now explicit in L5 and Step 1.2. The block derivative (u,w) maps to (u,u+w), the inverse-function domain admits an exact smaller coordinate/velocity product, its open image contains a closed sufficiently small endpoint product, and the derivative bound there gives the uniform Lipschitz estimate. The current centering repair preserves all claims and adds no choice assumption."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-contained-geodesic-velocity-bound",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The frozen L2 supplier requires an absolute derivative bound and cannot supply the stated one-sided reciprocal estimate. Current L2 integrates the smooth reciprocal derivative using thm-ftc-second-part. Uniqueness prevents a nonconstant geodesic velocity from vanishing; integration gives w <= 4v0/3, velocity change <= 4v0/9 and the stronger displacement bound 7v0 delta/9. The two admissible-delta cases prove v0 < 4r. Updated the stale L2 contract citation to the FTC supplier; no new item text was necessary."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-normal-neighborhoods-and-position-vectors",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The frozen strict-convex-normal clause omitted convex normality, which the supplied definition must retain. Current clause (b) explicitly requires convex normality before closure-endpoint uniqueness. Consulted Minguzzi Definition 2.3 and the adjacent Definitions 2.2 and 2.5, pp. 26-27; the current open star-shaped inverse domains, terminal position vector, signed displacement and equal-endpoint exception agree with that convention. Existing corrected Definition is retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-normal-neighborhood-causal-cone",
    "outcome": "false_positive",
    "status": "resolved",
    "evidence": "The theorem fixes an arbitrary base p in C. Step 1.1 proves containment for every such base using the initial-cone supplier, so Step 2.2 legitimately instantiates it at q for the return subarc. The two opposite oriented geodesics between distinct p,q contradict uniqueness. Smooth joint inverse regularity is supplied by the every-pair inverse-function argument of the position-vector lemma L4. Null level-set derivative, punctured radial normalization, integrable-tail limit and both equality directions are sound with AC_omega/DC. No edit."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-length-upper-semicontinuity",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The rejected L2 citation named only the position-vector statement, which asserts smoothness of D-squared. Current L2 identifies the exact every-pair proof in that supplier Fact L4: an invertible fiber differential makes the joint differential invertible, nearby geodesics stay in the open convex set, and uniqueness identifies the inverse. Fixed compact inverse branches then control every independently chosen normal-ball inverse by the first-exit argument. Secant speeds converge at Lebesgue points; Fatou applied to Cw_N-f_N proves the refined sums, then fixed partitions give upper semicontinuity. This existing citation repair supplies the needed regularity without changing the Statement."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-basic-limit-curve",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The rejected orientation criterion from positive coordinate time alone is false in a tilted chart. Current L5 first requires membership in the closed future cone, and Step 6.1 obtains that membership as a limit of positive scaled future radial velocities; positive time component proves only nonvanishing. The buffered chart qualifier in (a3) supplies the uniform h-component bound required for noncollapse. Compact-ball extraction, the absolutely continuous inverse-arclength proof and eventual-domain diagonal extraction give the claimed causal and inextendible limits. Existing repairs retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-limit-curve-two-endpoints",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The unrescaled observer metric need not be complete (on the open flat slab it is Euclidean), so the rejected metric identification cannot supply compact-ball extraction. Current Statement explicitly denotes the complete conformal h-prime by h and uses it for all lengths and distances, componentwise. Common-domain bounded limits retain the cone and positive chart-time lower bound; zero lengths collapse; nested half-line subsequences give both tails and the weak closure relation. Added the missing L4 contract citation to the actual completeness supplier."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-null-legs-corner-push-up",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The rejected causal criterion excluded pure-time timelike vectors by requiring positive spatial norm, but that extra restriction is unnecessary and false. Current L1 correctly requires v0 >= spatial norm for a nonzero vector. The two leg velocities (1,+/-1,0,0) are null, their sum (2,0,0,0) is timelike and its straight path proves chronology. The parallel sum remains null. The separate timelike certificate has spatial speed at most pi/4 < 1. Existing correction retains the Example and proof conclusions."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-globally-hyperbolic-causal-structure",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "Selecting one epsilon for every point of an arbitrary compact set would exceed the declared countable/dependent choice assumptions. Current Step 5.1 instead uses the definable family of all admissible timelike segment parameters and takes a finite subcover, with only finite choice of representatives. Compact diamonds and the strong-causality length bound establish closedness before compact truncated cones. The current Remark also correctly limits this to the forward implication; closedness and compact cones alone allow closed timelike curves."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-chronological-volume-continuity",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "Choosing U=M cannot contradict strong causality. Current L1 chooses U=M minus an image point y distinct from the loop base x. Every V containing x and contained in U then has a causal segment with endpoints in V that exits U, proving the needed contradiction. Closed causal cones, chronology openness and null achronal boundaries give almost-everywhere indicator convergence and dominated convergence; the intermediate timelike point has a positive-measure open separation from the earlier closed cone. Existing proof correction retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-gr-volume-time-function",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "Completeness of the unrescaled observer metric was an unsupported premise. Current L5 explicitly fixes the complete conformal h-prime for every auxiliary length and distance. A finite total length in a compact diamond makes a cofinal sequence Cauchy in that same complete component and the entire tail convergent, contradicting inextendibility. Continuity from above then gives future-volume decay; monotonic positive past volume gives logarithmic divergence. Open cone differences prove strict causal monotonicity and unique Cauchy-level crossings. Existing correction retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-cone-bump-functions",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The rejected strict inequality for J-minus(S_b) wrongly removed its reflexive level. Current L1 correctly uses t <= b, so p belongs to the compact truncated cone K. Shrinking through compact chart balls gives the prescribed diameter and enclosing normal neighborhood; a first-exit subsequence and acausality force the boundary limit to p, a contradiction. The future-branch flat cone function is smooth at the vertex, its positive gradient is past timelike, and the finite-ball cutoff construction proves a neighborhood plateau on K. Existing repair retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-flat-cone-bump-explicit",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The Euclidean supplier guarantees a plateau on a compact set, not on its neighborhood. Current L5 first thickens K to a finite union K1 of closed balls inside the open support domain, with K in Int(K1), and applies the supplier to K1. Step 4.1 selects a precompact ball enclosing the explicit truncated cone and uses this neighborhood plateau. The future branch avoids the unwanted past cone; flatness gives smoothness at the null boundary and vertex, and grad(Q)=-2v gives the required past-timelike gradient. Existing local repair retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-gr-convex-normal-neighborhoods-scope",
    "outcome": "confirmed_nonfatal",
    "status": "resolved",
    "evidence": "The rejected scope note assigned local causality to a theorem that supplies only convex normal neighborhoods. Current note separately cites thm-gr-normal-neighborhood-causal-cone for local causal calculus and explicitly identifies completeness as that of X=grad(T)/g(grad(T),grad(T)), preserving the distinction from the genuine gradient. Mathematical model deductions, optional physical interpretations and empirical nonclaims remain separate. Existing citation/terminology repairs retained; owning-page summaries still require reconciliation."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-gr-flat-slab-coordinate-time-flow-incomplete",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The slab supplier asserts only the half-time Cauchy slice. Current Step 1.1 proves every slice directly: strict time monotonicity and spatial Lipschitz increments give an interior point limit if either endpoint time lies in (0,1), contradicting inextendibility. Thus the time range is (0,1) and every slice is met once. The gradient is -partial_0, its normalized field is partial_0 and its maximal domain through half-time is (-1/2,1/2), refuting completeness. Existing added proof and suppliers are adequate."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-gr-flat-slab-explicit-splitting",
    "outcome": "confirmed_fatal",
    "status": "resolved",
    "evidence": "The rejected every-slice premise is not supplied by the half-time slab theorem. Current Step 2.1 independently derives the full (0,1) time range from flat spatial Lipschitz increments, Euclidean completeness and no-endpoint inextendibility, hence every rational-T level is Cauchy. T-prime=(1-t)^(-2)+t^(-2)>0, T has range R and T(1/2)=0. Its inverse gives a global flow for X=partial_0/T-prime; beta=1/T-prime^2 gives the orthogonal product. The current Example and summary correctly specify the normalized field, not grad(T). Existing repairs retained."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-past-corresponding-boundary-restart",
    "status": "route-to-frontier-owner",
    "defect": "nonfatal missing buffered-chart qualifier",
    "affected_use": "L2 restates the chart-time estimate for any dominated cone chart, whereas revised basic-limit clause (a3) requires a coordinate ball compactly contained in a larger adapted chart. Step 1.1 uses that restatement to rule out an endpoint.",
    "invalidated_claim": "The L2 estimate for an arbitrary dominated cone chart with no compact buffering.",
    "minimality": "Add the explicit buffered-coordinate-ball qualifier to L2 and choose such a smaller ball around the hypothetical endpoint in Step 1.1. This changes only Facts/Proof, so no further interface hop is needed.",
    "evidence": "L2 restates the chart-time estimate for any dominated cone chart, whereas revised basic-limit clause (a3) requires a coordinate ball compactly contained in a larger adapted chart. Step 1.1 uses that restatement to rule out an endpoint. On the flat slab, h=(t(1-t))^(-2) dt^2+|dz|^2 is complete and proper because log(t/(1-t)),z identify it with Euclidean R^4. Vertical unit-h-speed curves have dt/ds=t(1-t), so unbounded arclength increments fit within bounded coordinate-time increments; no global C on the entire adapted slab chart exists. The endpoint argument can always choose a buffered smaller chart; its geometric conclusion is retained."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "record-no-published-consumer-effects",
    "suppliers": [
      "def-gr-normal-neighborhoods-and-position-vectors",
      "lem-gr-basic-limit-curve",
      "thm-gr-limit-curve-two-endpoints"
    ],
    "consumers": [],
    "reason": "All 24 native direct dependency/reference consumers of the three changed public interfaces are draft members of the frozen frontier. No published or outside-frontier consumer was found; no published repair, gate or audit is claimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-position-vector-differential",
    "status": "route-to-frontier-owner",
    "path": "items/lem-gr-position-vector-differential.md",
    "affected_use": "Proof Step 3.1 writes partial_t F(s,0)=2g_q(P(p,q),w) for F(s,t)=D-squared(p(s),q(t)).",
    "invalidated_claim": "The displayed identity at general s omits p(s); only its s=0 instance used in the conclusion is correct.",
    "minimality": "Replace P(p,q) by P(p(s),q) in that displayed partial derivative, or state the identity only at s=0. The Statement stays unchanged; the differential conclusion remains valid.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "status": "route-to-frontier-owner",
    "path": "items/def-gr-spacelike-hypersurfaces-and-cauchy-sets.md",
    "affected_use": "Definition (e) says points outside I-minus(D-plus(S)) are not chronologically preceded by any point of D-plus(S).",
    "invalidated_claim": "The prose reverses the direction of chronology in the displayed horizon formula.",
    "minimality": "Keep H-plus(S)=D-plus(S) minus I-minus(D-plus(S)); replace the prose by points having no chronologically later point in D-plus(S). This is a Definition change requiring the owning lane to inspect its direct consumers.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-gr-compact-past-above-cauchy-set",
    "status": "current-locators-correct",
    "reason": "The digest alert is already resolved in the current carrier: L1 cites clauses (a)-(c) and L5 cites clause (c) of the Cauchy-surface theorem for compact diamonds. No edit or assigned adjudication of that other-lane item."
  },
  {
    "ledger": "defect",
    "id": "def-gr-periodic-torus-and-sobolev-spaces",
    "outcome": "confirmed_fatal",
    "evidence": "Definition (b) composed a Euclidean-domain u with the quotient q:R^3→T^3, an undefined map. Replaced it by torus maps u with periodic pullbacks u∘q and the unique descent u([x])=ũ(x); derivatives descend because translations preserve their values. Measure, Fourier normalization and integer weak Sobolev orders are unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-periodic-fourier-differentiation-and-norm-equivalence",
    "outcome": "confirmed_nonfatal",
    "evidence": "The complex Fourier inverse in proof 3.1 omitted the reality check needed for real H^s. Added conjugate symmetry a_{−k}=conj(a_k) and injectivity to prove wα=conj(wα) componentwise; also made complex character testing the sum of real and imaginary test identities. The derivative and norm claims remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-periodic-sobolev-embedding",
    "outcome": "false_positive",
    "evidence": "The alleged strengthened constants are proved explicitly in the cited supplier: proof 1.2 gives 4^(−s)(1+|k|²)^s≤q_k≤(s+1)^3(1+|k|²)^s and proof 2.2 sums them by Parseval. Thus L1 states an actual established consequence of that dependency, not an unlicensed hypothesis. Checked the lattice shell estimate, uniform differentiated convergence and the separate integer-gap Holder endpoints; no repair is needed."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-projection-properties",
    "outcome": "confirmed_nonfatal",
    "evidence": "The upper Fourier-tail estimate was valid but title sharpness lacked a lower bound. Added u=cos(nx¹), N=n−1, giving the squared derivative-norm ratio ≥1/((s+1)n²), which excludes a uniform o(N^(−1)) rate. Self-adjointness, derivative commutation and contraction follow directly from the finite symmetric Fourier ball. Statement unchanged."
  },
  {
    "ledger": "defect",
    "id": "cex-gr-sobolev-embedding-needs-s-minus-m-above-three-halves",
    "outcome": "false_positive",
    "evidence": "The workspace defines only integer Sobolev orders and the embedding theorem assumes integer s,m. There are no admissible gaps 1<s−m≤3/2. The stated H¹→C⁰ counterclaim is refuted by the real symmetric shells with C⁰/H¹≥c2^(N/2); integer gap 2 is allowed by the supplier. Sharpness here is within that integer scale, not an assertion about undefined fractional H^s. No repair needed."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-smooth-composition-and-commutator-estimates",
    "outcome": "confirmed_nonfatal",
    "evidence": "L3 misattributed the chain and Leibniz rules to a notation-only definition. Added the actual published total chain rule, continuous-partials differentiability theorem and one-variable general Leibniz rule, explicitly deriving the multi-index rule by coordinate iteration. Checked all product-order cases, cutoff extension for nonconvex O, density and high estimates n≥6. Stated integer s,n explicitly, consistent with the existing Sobolev definition."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-compactness",
    "outcome": "confirmed_nonfatal",
    "evidence": "The statement omitted explicit integrality in (b), although only integer H^s is defined. Added integer s to (b) and the given data; (c) inherits it. Tail compactness uses finite-dimensional compact closure and deterministic least-index selections; the rational extraction applies with r=s and the Banach FTC gives uniform Lipschitz continuity. No fractional-order extension was intended or proved."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-energy-inequality",
    "outcome": "confirmed_fatal",
    "evidence": "A derivative bound on a disconnected set does not control the energy between components. Required J to be an interval, so every segment from t₀ to t stays in the bounds; made the existing integer Sobolev convention explicit. Checked self-adjoint projected differentiation, symmetric integration by parts and commutator/time derivative bounds, which give |e′|≤C(1+e) and oriented Gronwall."
  },
  {
    "ledger": "defect",
    "id": "cex-gr-negative-sound-speed-derivative-breaks-evolution",
    "outcome": "false_positive",
    "evidence": "The missing equivalence theorem is unnecessary here: the Counterexample itself differentiates T^(00),T^(0i),T^(ij) and directly writes ∂_a δT^(ab)=0, obtaining f_t+H₀div v=0 and H₀v_t−a²grad f=0. Equally these follow by differentiating the equations explicitly defined in clause (c) of the cited fluid model. The mode ODE and smooth e^(−sqrt(n)) datum prove only the stated fixed-flat linearized failures, with no nonlinear inference. No repair needed."
  },
  {
    "ledger": "defect",
    "id": "def-gr-barotropic-enthalpy-variable",
    "outcome": "confirmed_nonfatal",
    "evidence": "The title and closing reference promised transformed fluid equations that were absent. Added the two reversible equations u·∇r+c_s div u=0 and ∇_u u+c_s(g⁻¹+u⊗u)dr=0, deriving them with r′=c_s/(ε+p) and dp=c_s²dε; both divisions are positive on J. The integral is smooth, strictly increasing and has a smooth one-dimensional inverse; detailed positive symbol remains the consuming lemma."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-limit-is-classical-solution",
    "outcome": "confirmed_nonfatal",
    "evidence": "The statement omitted integrality although only integer H^s is defined. Made s an integer explicitly. Checked finite Fourier-sum lower semicontinuity, strong measurability by finite-rank simple approximants, derivative extraction in H^{s−2}, passage in the projected equation, Banach FTC and C¹ recovery; all use the supported integer orders."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-periodic-symmetric-hyperbolic-existence",
    "outcome": "confirmed_nonfatal",
    "evidence": "Made the intended integer s≥5 explicit in the Statement, matching the Sobolev and solution definitions and the Given. Verified the cofinal admissible projections, compact-neighborhood margin, energy bootstrap on the connected interval containing zero, fixed-N continuation, compactness and classical limit. The common time depends only on the declared bounded-data class."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability",
    "outcome": "confirmed_nonfatal",
    "evidence": "Specified integer s≥5 in the Statement, as required by the derivative-sum spaces and r=s−1 energy. Checked homogeneous difference forcing, L² uniqueness for all stated classical solutions, the Fourier-tail justification of the H^{s−1} energy identity, homogeneous time commutators and oriented Gronwall. No stronger time regularity was assumed."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-constraint-equations-in-normal-frame",
    "outcome": "confirmed_nonfatal",
    "evidence": "L4 cited a global field-equation supplier for a merely pointwise hypothesis. Removed that unnecessary dependency and restatement: proof 5.1 already derives the two projections directly at p. Checked the induced connection, Gauss/Codazzi slot order, mixed contraction, and S=Q−2Ric₀₀, which yields G(n,n)=Q/2 without normal curvature data. All statements are unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-periodic-symmetric-hyperbolic-smooth-persistence",
    "outcome": "false_positive",
    "evidence": "L1 explicitly invokes the existence construction, whose proof 1.1–3.1 establishes the cofinal family, fixed compact Q, uniform H^s bounds and convergent subsequence. This is an established proof consequence, not an assumed strengthening of its conclusion. Checked higher projected derivative estimates, lower-norm-controlled energy induction on that same family, finite Fourier limits and joint smoothness without shrinking T."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-barotropic-fluid-symmetric-hyperbolic-system",
    "outcome": "confirmed_fatal",
    "evidence": "Orthogonality does not force unit lapse: g₀₀=−α₀² gives N=α₀⁻¹∂t, so the old u⁰=W₀ was not unit for α₀≠1. Corrected u⁰=W₀/α₀ while retaining arbitrary initially orthogonal lapse. Checked smooth future normalization coordinates, equivalent projected Euler equations, symmetric cross coefficients, timelike-covector positivity and algebraic metric coupling."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-reduced-einstein-local-existence",
    "outcome": "confirmed_nonfatal",
    "evidence": "The orthogonality qualifier in L1 was stronger than needed: the supplier Statement (b) and now its explicit spatial matrices require only g^{00}<0 and (g^{ij})>0, exactly the admitted data. Removed the spurious qualifier, preserving the general-chart claim, and proved zero spatial derivative residual by its homogeneous background-connection ODE before recovering the second-order equation. Checked local finite-speed patching and smoothness. "
  },
  {
    "ledger": "defect",
    "id": "ex-gr-fluid-principal-symbol-radiation",
    "outcome": "confirmed_nonfatal",
    "evidence": "The example omitted the positive-density interval required by the enthalpy and symbol suppliers. Specified p:(0,∞)→R and ε₀>0, verifying ε+p=4ε/3>0 and p′=1/3∈(0,1). The normalized rest basis, timelike covector, exact four eigenvalues and smallest eigenvalue remain unchanged; no empirical radiation claim is made."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-dust-initial-data-and-tilted-initialization",
    "outcome": "confirmed_fatal",
    "evidence": "The assigned domain allegation is false: the reduced-evolution and subsidiary suppliers both have domain: mathematics and establish conditional tensor/PDE identities. Independently, digest concern proof 2.1 is fatal: constraints fix Gγ₀₀, not Ricγ₀₀ before the six spatial Ricci components. Corrected the order and supplied Sγ=Ricγ₀₀−ΣJaa and Gγ₀₀=(Ricγ₀₀+ΣJaa)/2 to recover the remaining target. Checked the full boost, tangential connection, two-form residual argument and explicit positive tilted Bianchi matrix without density division."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-scalar-field-local-evolution",
    "outcome": "false_positive",
    "evidence": "A smooth manifold in this library is defined by def-smooth-manifold on def-topological-manifold-without-boundary. Thus the smooth three-manifold hypothesis already excludes boundary; the explicit supplier wording adds no restriction. Checked the scalar initialization (φ₀,π₀,dφ₀), fixed potential/normalization, reduced stress conservation and all three development hypotheses; no boundary-value claim or proof repair is needed."
  },
  {
    "ledger": "defect",
    "id": "thm-gr-high-regularity-selected-matter-development",
    "outcome": "false_positive",
    "evidence": "The vacuum argument invokes the complete harmonic jet in L2, not constraints alone. Its development supplier proof 1.1 explicitly sets g₀₀=−1,g₀i=0,gij=hij,pij=2Kij,p₀₀=−2trK,p₀i=hiℓhjkΓ(h)ℓjk,qabi=∂ig⁰ab and computes H=0. With empty matter variables the reduction, initialization and conservation hypotheses are all met. Checked the scalar/fluid branch contracts and dust ε/c² conversion; no repair is needed."
  },
  {
    "ledger": "defect",
    "id": "rem-gr-high-regularity-scope",
    "outcome": "confirmed_nonfatal",
    "evidence": "Added the actually cited thm-gr-dust-local-evolution to deps with mathematical-premise role. Its proof 3.1 gives r(s,p)=r₀(p)exp(−∫χ), nonnegativity, persistence of zeros and separately geodesic velocity, exactly the remark’s use. Checked conditional physical scope, normalized versus SI velocity, local existence exclusions and absence of empirical premises; the physical public interface is unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-gr-dust-reduction-variables-and-gauge",
    "outcome": "confirmed_nonfatal",
    "evidence": "The old unknowns used E,B through the later Weyl definition, a concealed formulation dependence on its own consumer, although no reverse deps edge was declared. Defined E,B as independent symmetric spatial trace-free covariant tensors, keeping their later curvature interpretation. Also distinguished the projection endomorphism h^i_j from its lowered form h_ij and l_ij. Signature, tentative connection and all gauge/reconstruction conventions are preserved."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-reduced-einstein-principal-part",
    "outcome": "confirmed_fatal",
    "evidence": "Linearizing the inverse metric contributes (1/2)ĝ^{ce}h_{ef}ĝ^{fd}bar∇cbar∇dĝ_ab, so the old coefficient list omitted essential second-jet data. Included the first and second background derivatives of ĝ and derived the exact quasilinear identity from connection differences. Explicit −g^{ki} off-diagonal blocks and −2g^{0k} diagonal blocks prove symmetry without orthogonality. The background commutator contributes only lower-order terms."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-harmonic-initial-data-construction",
    "action": "route-confirmed-discovery",
    "status": "open-owner-repair",
    "route": "frontier-owner",
    "published": false,
    "evidence": "Literal h₀ may include time/mixed slots; for h=δ,K=0,h₀=f(x¹)ds²+h, f=1/2+(1/4)tanh x¹, the allowed background has barΓ¹₀₀=−f′/2 while the prescribed metric jet has Γ=0, giving H¹=−f′/2≠0.",
    "affected_use": "Statement background hypothesis and proof/L3; its claimed H|Σ=0 fails for the admitted h₀. The local-geometric-development proof uses its own flat initializer and avoids this failure.",
    "invalidated_claim": "Statement background hypothesis and proof/L3; its claimed H|Σ=0 fails for the admitted h₀. The local-geometric-development proof uses its own flat initializer and avoids this failure.",
    "minimality": "Require h₀=πΣ* h as a purely spatial product pullback, with zero time/mixed slots. Preserve the intended metric jet; do not alter assigned items.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-dust-electric-magnetic-weyl-variables-and-schouten",
    "action": "route-confirmed-discovery",
    "status": "open-owner-repair",
    "route": "frontier-owner",
    "published": false,
    "evidence": "The introduction says U=n, but its supplier fixes U=u and allows tilt; n is not defined here.",
    "affected_use": "Definition introductory observer identification conflicts with the tilted U convention used by reconstruction and initialization.",
    "invalidated_claim": "Definition introductory observer identification conflicts with the tilted U convention used by reconstruction and initialization.",
    "minimality": "Replace the unexplained U=n equality by U=u from the earlier reduction conventions; clarify that U need not be the hypersurface normal.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-gr-dust-subsidiary-and-residual-vanishing",
    "action": "route-confirmed-discovery",
    "status": "open-owner-repair",
    "route": "frontier-owner",
    "published": false,
    "evidence": "Proof 4.1 ends with tags and the next paragraph starts In this chart with another trailing tag group, without a new step number.",
    "affected_use": "The local cone-energy calculation after proof 4.1 is split into an unnumbered continuation paragraph. This is a presentation defect, not a failed propagation deduction.",
    "invalidated_claim": "The local cone-energy calculation after proof 4.1 is split into an unnumbered continuation paragraph. This is a presentation defect, not a failed propagation deduction.",
    "minimality": "Keep one complete tagged paragraph for the step, or number the continuation and adjust references. No statement change is needed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "action": "route-confirmed-discovery",
    "status": "open-owner-repair",
    "route": "frontier-owner",
    "published": false,
    "evidence": "The formula H⁺(S)=D⁺(S)\\I⁻(D⁺(S)) excludes points chronologically followed by a point of D⁺(S), while its prose says preceded.",
    "affected_use": "Definition (e) explanatory chronological direction; the displayed horizon formula has the opposite direction to the wording.",
    "invalidated_claim": "Definition (e) explanatory chronological direction; the displayed horizon formula has the opposite direction to the wording.",
    "minimality": "Replace preceded by followed in the explanatory sentence and inspect actual consumers through its owner.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-dust-matter-model",
    "action": "route-confirmed-discovery",
    "status": "open-owner-repair",
    "route": "frontier-owner",
    "published": false,
    "evidence": "The upper-index tensor T^{ab}=ρu^au^b is called covariant although it is contravariant; the lower-index expression is correctly covariant.",
    "affected_use": "Definition (b) tensor-type wording; no problem in the actual two-lowered-factor source used by the assigned dust proof.",
    "invalidated_claim": "Definition (b) tensor-type wording; no problem in the actual two-lowered-factor source used by the assigned dust proof.",
    "minimality": "Distinguish the contravariant tensor from its covariant lowering in the wording.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer",
    "action": "no-published-repair-proposed",
    "reason": "All 40 directly affected item carriers are draft frontier items. The checked digest alerts also name draft carriers; no published item was edited or adjudicated, and no published consumer defect was found at these direct boundaries."
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-ode-local-solution",
    "action": "route-precision-discovery",
    "status": "open-owner-review",
    "route": "frontier-owner",
    "evidence": "This unassigned direct consumer omits explicit integrality while using the integer-only H^s scale. Its actual derivative proof and all present consuming applications select integer orders; no fractional-order claim has been established.",
    "affected_use": "Statement/Example regularity s≥5 and the multi-index derivative/supplier applications.",
    "invalidated_claim": "Any reading that quantifies over noninteger Sobolev orders is undefined in this workspace.",
    "minimality": "State integer s (and integer derivative order j where quantified). For the second-time-derivative lemma, also make J an interval for its between-times Lipschitz conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-time-derivative-bound",
    "action": "route-precision-discovery",
    "status": "open-owner-review",
    "route": "frontier-owner",
    "evidence": "This unassigned direct consumer omits explicit integrality while using the integer-only H^s scale. Its actual derivative proof and all present consuming applications select integer orders; no fractional-order claim has been established.",
    "affected_use": "Statement/Example regularity s≥5 and the multi-index derivative/supplier applications.",
    "invalidated_claim": "Any reading that quantifies over noninteger Sobolev orders is undefined in this workspace.",
    "minimality": "State integer s (and integer derivative order j where quantified). For the second-time-derivative lemma, also make J an interval for its between-times Lipschitz conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-gr-galerkin-second-time-derivative-bound",
    "action": "route-precision-discovery",
    "status": "open-owner-review",
    "route": "frontier-owner",
    "evidence": "This unassigned direct consumer omits explicit integrality while using the integer-only H^s scale. Its actual derivative proof and all present consuming applications select integer orders; no fractional-order claim has been established.",
    "affected_use": "Statement/Example regularity s≥5 and the multi-index derivative/supplier applications.",
    "invalidated_claim": "Any reading that quantifies over noninteger Sobolev orders is undefined in this workspace.",
    "minimality": "State integer s (and integer derivative order j where quantified). For the second-time-derivative lemma, also make J an interval for its between-times Lipschitz conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "thm-gr-local-symmetric-hyperbolic-well-posedness",
    "action": "route-precision-discovery",
    "status": "open-owner-review",
    "route": "frontier-owner",
    "evidence": "This unassigned direct consumer omits explicit integrality while using the integer-only H^s scale. Its actual derivative proof and all present consuming applications select integer orders; no fractional-order claim has been established.",
    "affected_use": "Statement/Example regularity s≥5 and the multi-index derivative/supplier applications.",
    "invalidated_claim": "Any reading that quantifies over noninteger Sobolev orders is undefined in this workspace.",
    "minimality": "State integer s (and integer derivative order j where quantified). For the second-time-derivative lemma, also make J an interval for its between-times Lipschitz conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "ex-gr-periodic-energy-method-check",
    "action": "route-precision-discovery",
    "status": "open-owner-review",
    "route": "frontier-owner",
    "evidence": "This unassigned direct consumer omits explicit integrality while using the integer-only H^s scale. Its actual derivative proof and all present consuming applications select integer orders; no fractional-order claim has been established.",
    "affected_use": "Statement/Example regularity s≥5 and the multi-index derivative/supplier applications.",
    "invalidated_claim": "Any reading that quantifies over noninteger Sobolev orders is undefined in this workspace.",
    "minimality": "State integer s (and integer derivative order j where quantified). For the second-time-derivative lemma, also make J an interval for its between-times Lipschitz conclusion.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-development-and-data-fixing-isometry",
    "finding": "Clause (a)4 used undefined E although Data fixes the matter equations as mathcal E; the Einstein stress symbol T likewise differed from the fixed mathcal T. Both symbols now use the specified covariant model operators; no solution-class hypothesis or map condition changed. Also declared the existing Einstein-tensor and Cauchy/global-hyperbolicity suppliers used in its Definition.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "def-gr-common-subdevelopment-and-corresponding-boundary",
    "finding": "The Cauchy-set lemma states trichotomy and closedness but not chronology openness. Clause (d) now cites lem-gr-chronology-openness(a) directly and derives openness of each surface side as a union of open point futures/pasts. The same-sign witness argument then applies unchanged.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-compact-past-above-cauchy-set",
    "finding": "L1 cited closed causal cones only for compact sets to assert closedness for the possibly noncompact Cauchy surface. The local argument now proves J+(Sigma)=Sigma union I+(Sigma)=M minus I-(Sigma) from trichotomy, acausality, causality and concatenation; chronology openness then proves closedness used in 1.2 and 2.2. The equal-endpoint branch in 1.1 and eventual interval quantifier in 2.2 are corrected, and h explicitly denotes the supplier complete metric h-prime.",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-intersection-of-developments",
    "finding": "L4 selects an auxiliary metric with complete distance, without defining it as g+2 n-flat tensor n-flat. The cited theorem supplies exactly such a metric h-prime, legitimately denoted h locally; the compact-length bound applies to any smooth positive metric and so to that same h. Finite-length tails are Cauchy for that distance, limits lie in the compact truncated cones, and causal convexity places them in both U_i. No unscaled-metric completeness is asserted.",
    "status": "dismissed",
    "outcome": "false_positive"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-isometric-immersion-rigidity",
    "finding": "Step 1.3 used an undefined tangent-bundle-like target and its diagonal. The replacement proves value equality by Hausdorff separation, then compares continuous derivative matrices in one source and one common target chart; vanishing on A implies vanishing at every closure point. Normal-coordinate geodesic uniqueness still proves openness, giving connected-domain rigidity and overlap agreement. The past-side component argument is stated explicitly. Statement and hypotheses are unchanged.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-data-fixing-immersion-is-embedding",
    "finding": "L5 and step 5.1 applied the embedding-only initial differential clause to arbitrary immersions before identifying its hypotheses. Clause (b), proved independently by two timelike geodesic lifts and their unique Cauchy crossings, already makes both maps development embeddings. Step 5.1 now applies that clause with U=M only after step 4.1, and then uses connected-domain rigidity. Statement unchanged.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-corresponding-set-smooth-extension",
    "finding": "The title ambiguously suggested preservation on all of the closure of U. Replaced it with the precise common-domain and corresponding-boundary description. Verified the normal-coordinate extensions, locally finite Euclidean patching with common jets, tubular retraction, inverse correspondence and induced data transfer on U union C. The Statement already restricts all preservation to that set and remains unchanged.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "lem-gr-maximal-common-development",
    "finding": "All four cited local evolution suppliers have kind theorem and domain mathematics, with fixed complete-data existence and future geometric uniqueness, rather than physical premises. Admissibility retains their actual hypotheses. Whole-surface uniqueness plus the intrinsic Cauchy-neighborhood lemma yields a nonempty common pair; overlap rigidity patches all pairs, member portions give a Cauchy union, and the independently proved embedding lemma gives injectivity. Power Set and Separation suffice without Zorn or arbitrary-index choice.",
    "status": "dismissed",
    "outcome": "false_positive"
  },
  {
    "ledger": "defect",
    "id": "ex-gr-minkowski-maximal-development",
    "finding": "L1 omitted the existing-development and actual same-vacuum restart obligations, and named nonexistent theorem clauses. The revised L1 records every hypothesis, the concrete vacuum local theorem and the constraint identity on induced restart data; step 1.1 supplies the existing Minkowski development. The global straight-line lift is now derived from zero Christoffel symbols and the coordinate geodesic equation, so target uniqueness proves surjectivity. Example unchanged.",
    "status": "repaired",
    "outcome": "confirmed_nonfatal"
  },
  {
    "ledger": "defect",
    "id": "ex-gr-minkowski-rational-dense-and-basis",
    "finding": "Local geodesic existence alone does not imply globally defined straight-line exponentials. L2 now uses the constant-component lemma to obtain zero Christoffel symbols, the coordinate geodesic equation to verify d+sv for every real affine parameter, and maximal uniqueness to get the whole tangent exponential domain and exp_d(v)=d+v. Every rational ball is therefore admissible; the one-step rational recursion and translated-ball basis follow. Example unchanged.",
    "status": "repaired",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation"
  },
  {
    "ledger": "published-consumer",
    "id": "def-gr-development-and-data-fixing-isometry",
    "status": "no-maintenance-repair-required",
    "finding": "Every direct item dependency/reference consumer of the two changed Definitions is a draft in the immutable frontier. Their inspected fixed-model and Cauchy/boundary uses remain sound after the notation and chronology-source repairs. No published item was changed, adjudicated or given a new acceptance stamp.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-gr-spacelike-hypersurfaces-and-cauchy-sets",
    "status": "owner-route-outside-assignment",
    "finding": "Clause (e) defines H^+(S)=D^+(S)\\setminus I^-(D^+(S)) but says points are not chronologically preceded by D^+(S). The complement of I^-(D^+(S)) instead says they do not chronologically precede a point of D^+(S). This draft is outside unit 79; no assigned proof uses that horizon description.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "lem-gr-basic-limit-curve",
    "status": "owner-route-outside-assignment",
    "finding": "Statement (b) says [0,n] is in I_k for every k once n is fixed, whereas its b_k tending to infinity example and full proof step 7.1 require eventual containment for each fixed n. Step 7.1 discards finitely many indices at each diagonal stage; step 8.1 proves inextendibility. The assigned compact-past proof uses the explicitly eventual past-domain clause; the dual intersection argument uses this exact eventual-tail construction. Correct the draft supplier quantifier in its owning lane; no unresolved limit argument remains here.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect",
    "id": "def-cm-cyclic-spring-chain",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The C²-in-time/C⁴-in-space comparison class is valid, but the title and Remark incorrectly call every member smooth (C∞). Replaced those labels with the stated finite regularity; the Definition and sampled data remain unchanged."
  },
  {
    "ledger": "defect",
    "id": "def-cm-euclidean-spatial-calculus",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The cited coordinate and matrix suppliers use zero-based function indices, whereas this definition uses one-based labels without an explicit bridge. Added x_i=x(i−1), e_i=e_(i−1) and matching partial/matrix relabellings. The divergence still sums all three coordinates and is precisely the imported trace; no calculus claim changes."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-determinant-derivative-along-a-matrix-curve",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The determinant expansion used column labels 1,…,n without connecting them to the imported matrix indices 0,…,n−1. F3 and the finite subset expansion now use zero-based indices, including column 0 when n=1. Multilinearity, the trace identification and the O(h²)/o(h) estimate prove exactly the unchanged statement."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-fejer-completeness-for-continuous-periodic-functions",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "F3 requires a one-periodic integrand, but no cited interface established exp(2πik)=1. Added the published Euler identity and proved integer character periodicity from addition, including negative k. Finite convolution expansion, full-period substitution and Fejér uniform convergence then give h=0 with no additional choice premise. Statement unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-localization-of-vanishing-integrals",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The half-open-box supplier uses indices 0,1,2. F1 now uses exactly those coordinates, giving all three side lengths r and volume r³. The closure lies within radius √3 r/2, and positivity on a compact subbox contradicts the vanishing integral; the Statement is unchanged."
  },
  {
    "ledger": "defect",
    "id": "lem-cm-uniform-convergence-with-derivatives-on-a-rectangle",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "F4 and step 2.1 evaluated integrals of derivatives using the wrong half of the FTC. Added thm-ftc-second-part, whose closed-interval differentiability and integrability hypotheses hold for all C² slices. F4 uses both orders of iterated integration and continuity to identify the mixed partials; step 1.2 now explicitly applies the derivative-limit theorem to the sequence ∂xu_k. The unchanged Statement follows without uniform convergence of u_k on the whole rectangle."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-burgers-characteristics-and-gradient-blowup",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "Only the concluding wording claimed smoothness in the C∞ sense. Replaced it by the C¹ regularity actually stated and proved; the characteristic map, level-set projection limit, fixed-spatial gradient blow-up and attained-minimum hypotheses are retained. The local inverse exists also near t=0 and f bounded makes the endpoint level set compact. The Statement change requires direct-consumer examination."
  },
  {
    "ledger": "defect",
    "id": "def-cm-fluid-constitutive-models",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The undefined term potential is now fixed as the scalar datum V with associated continuous body-force field b=−∇xV and density ρb. This makes explicit the convention already used in the barotropic momentum and Kelvin proofs; neither stress branch nor the pressure-law enthalpy changes. The Definition is mathematical and asserts no empirical constitutive law. Direct consumers must retain the minus sign and their own field regularity."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-spring-chain-dispersion-relation",
    "outcome": "confirmed_fatal",
    "status": "repaired",
    "evidence": "F1 attributed |sin r|≤|r| to suppliers that supply only |cos r|≤1. It now derives the missing bound by integrating cos with the cited derivative and second FTC. The two integrations give the global cubic sine remainder and quartic squared-sine remainder; the exact dispersion equivalence uses the nonzero amplitude at j=0,t=0. Corrected the Statement description to second order in spacing and fourth order in wave number without altering the bound or long-wave restriction."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-plane-elastic-waves",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The rejected domain-boundary allegation is false: the constitutive supplier explicitly has domain mathematics and defines maps and matrices without adopting any physical truth. The coefficient computation and both branches are sound, including zero amplitude and k=0. A separate confirmed nonfatal digest defect reversed the longitudinal/transverse positivity conditions in the Remark; corrected their order and added the exact total-chain-rule citation for the affine phase composition. Statement unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-smooth-string-fourier-series-solution",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The title called the C² solution smooth despite finite C⁵/C⁴ data; it now states classical C². All quantitative claims are retained: n⁻⁵ coefficient bounds majorize differentiated series by n⁻³, completeness identifies both initial data, and the energy identity yields uniqueness. F7 and F8 now cite the already declared second FTC for integral increments, and constancy of energy is explicitly evaluated by it. The Statement and tail constant are unchanged; the repaired rectangle and Fejér prerequisites have been checked in this consuming argument."
  },
  {
    "ledger": "defect",
    "id": "ex-cm-spring-chain-mode-and-limit-check",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The long-wave clause cannot be applied at κa=π/2, but the full supplier proof explicitly proves global scalar remainder inequalities; citing that exact calculation is legitimate. Made its section locator explicit and supplied exact quarter-turn values to derive sin²(π/4)=1/2. Removed the unsupported numerical π>3 premise: integrating |cos|≤1, with strict inequality near π/4, gives |sin(π/4)|<π/4 and therefore the positive error and strict remainder bound. The Example claim is unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-local-momentum-balance",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The title overstates the admitted domain class; it now says admissible material subregions, matching (L). The unchanged Statement and proof need only current Euclidean balls compactly contained in χt(B), whose inverse images are admissible by the motion diffeomorphism. Transport and row-wise divergence then give zero integrals of a continuous residual, and localization yields the asserted equation under countable choice and (K). No balance on irregular boundaries is inferred."
  },
  {
    "ledger": "defect",
    "id": "ex-cm-string-modes-and-tail-constants",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The displayed tail used undefined u₁ while varying N. Defined u_N as the actual N-mode partial sum with all coefficients and frequencies, and used |u−u_N| for N≥1. Orthogonality leaves only a₁=d₁=1; direct differentiation verifies the wave equation and both initial data. M₅=π⁵/L⁵ and M₄=cπ⁵/L⁵ give C=8, while every such tail is exactly zero. The Example interface changes and any references to it are inventoried."
  },
  {
    "ledger": "defect",
    "id": "ex-cm-transport-of-a-translating-uniform-flow",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The chain rule was present transitively in the Euclidean-calculus prerequisite, but L3 cited only derivative-identification interfaces directly. Added the exact chain-rule supplier and the affine map A(t,x)=x−tv with derivative (τ,z)↦z−τv; composition with C¹ h proves joint C¹ regularity and all displayed derivatives. Translation has determinant one, and continuous h is integrable on the bounded ball, so both change of variables and transport give constant rate zero under countable choice. Example unchanged."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-kelvin-circulation",
    "outcome": "confirmed_nonfatal",
    "status": "repaired",
    "evidence": "The pressure law was assigned an undefined time-space rectangle although its domain is the positive density interval. Replaced that malformed qualification by p∈C¹((0,∞)) and wrote its exact enthalpy integral; h∘ρ and V are C¹ by the chain rule. Also clarified the closed-rectangle C¹ loop convention and corrected the smooth-loop title. The material equation supplies ∂t∂sγ continuously, enabling differentiation of circulation without assuming γ∈C². Both endpoint terms cancel, and second FTC gives constancy. Direct consumers are inventoried for the corrected Statement."
  },
  {
    "ledger": "defect",
    "id": "thm-cm-traction-is-given-by-a-stress-matrix",
    "status": "owner_review_required",
    "evidence": "The current final Remark still asserts that a couple must modify the pure-force balance (B) and may defeat reversed-normal traction. Keeping (B), the thin-box argument forces t(y,−n)=−t(y,n) regardless of any angular balance; full traction is undefined. Correct the unsupported caveat without altering the proved pure-force theorem.",
    "path": "items/thm-cm-traction-is-given-by-a-stress-matrix.md:103",
    "route": "frontier-owner"
  },
  {
    "ledger": "defect",
    "id": "thm-cm-transport-theorem",
    "status": "owner_review_required",
    "evidence": "The current Given line assumes compact closure of J₀ and compact Σ, stronger than the Statement. Proof 1.1 explicitly uses local compact J₁ cylinders and does not require bounded J₀. Align the Given line with the actual Statement and local proof; no theorem weakening is necessary.",
    "path": "items/thm-cm-transport-theorem.md:71",
    "route": "frontier-owner"
  },
  {
    "ledger": "defect",
    "id": "ex-cm15-impact-check",
    "status": "owner_review_required",
    "evidence": "The page still says the unequal-mass elastic case exchanges velocities. Its stated m₁=2,m₂=6 and incoming (3,−1) have total momentum zero; restitution e=1 and momentum give outgoing (−3,1), which reverses each value. Replace exchanges with reverses; the calculation does not need an item repair.",
    "path": "library/non-relativistic-classical-mechanics/cm15-scattering-and-impulse-model-boundaries-examples.md:61",
    "route": "owning-page"
  },
  {
    "ledger": "defect",
    "id": "pthm-cm17-continuity-equation",
    "status": "owner_review_required",
    "evidence": "F2 calls the supplier an equivalence on the current interior while its converse requires the equation on a neighbourhood of the sweep. The consumer Statement and actual converse step 1.2 explicitly retain that stronger neighbourhood premise, so the deduction remains sound; repair only the overcompressed F2 wording.",
    "path": "items/pthm-cm17-continuity-equation.md:89",
    "route": "frontier-owner"
  },
  {
    "ledger": "defect-ledger",
    "id": "def-cm-mass-distribution-and-inertia-matrix",
    "outcome": "false_positive",
    "reason": "Unchanged definition: the owning page explicitly sets u_j=u(j-1), M_jk=M(j-1,k-1). The repaired moment lemma still justifies every positive-mass component under AC_omega; its zero-measure distinction leaves this definition sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-cm-mass-moments-are-finite",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Repaired clause 2 and step 4.1 retain all scalar-integral bounds, identify mu and I only for m>0, and prove zero integrals for m=0. Checked Borel measurability under AC_omega and the null-complement simple-minorant argument. All fifteen direct consumer uses remain sound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-cm-matrix-curve-derivative-rules",
    "outcome": "false_positive",
    "reason": "Unchanged: the earlier page defines trace as the diagonal sum. Entrywise differentiation gives both skew matrices, whose real diagonal entries vanish. Checked interval-relative derivatives, including endpoints.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-cm-skew-matrix-cross-product-correspondence",
    "outcome": "confirmed_nonfatal",
    "reason": "Facts L2 now consistently relabels actual indices 0,1,2 by display labels 1,2,3 and sums products over 1..3. Checked the coordinate identity, linear bijection, unique preimage and determinant-based SO(3) covariance. Statement unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "lem-cm-euler-angle-angular-velocity",
    "outcome": "confirmed_nonfatal",
    "reason": "Facts L4 now computes cos^2(psi)+sin^2(psi)=1 from the first diagonal entry of Rz(psi)^T Rz(psi)=Id. Checked the product derivative, conjugation signs, square cancellation and diagonal quadratic form. Statement and dependencies unchanged.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-cm-linearized-torque-free-euler-equations",
    "outcome": "false_positive",
    "reason": "Unchanged mathematical theorem: its Euler supplier is mathematics. Checked the quadratic remainder, total derivative, unique global linear solution formulas, growing-mode exceptions and scaled Lyapunov-instability argument. The inspected supplier closure contains no physics item.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "published-consumer-ledger",
    "supplier": "lem-cm-mass-moments-are-finite",
    "disposition": "no-published-consumer-effects",
    "reason": "The exact direct dependency/reference inventory contains fifteen consumers; every one is draft and inside the frozen frontier. Their affected uses remain sound, so this interface event requires no published repair or outside-consumer maintenance.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "thm-cm-heavy-top-reduction",
    "path": "items/thm-cm-heavy-top-reduction.md:87",
    "route": "frontier-owner-batch-9",
    "disposition": "outside-assignment-owner-repair",
    "affected_use": "Proof step 2.2 contains a false intermediate equality in the energy expansion.",
    "invalidated_claim": "The claimed intermediate sum equals A(phi prime)^2 sin^2(theta)+(C/2)(psi prime+phi prime cos(theta))^2, not just the second term. At theta=pi/2, phi prime=1, psi prime=0, the two displayed sides are A and 0.",
    "minimality": "Replace that intermediate equality by the correct collected expression and explicitly subtract the remaining transverse kinetic term from L. The final energy formula is sound and its Statement need not change. No edit made outside the assigned items.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "defect-ledger",
    "id": "qm-math-orbital-and-spin",
    "path": "library/non-relativistic-quantum-mechanics-mathematics/qm-math-orbital-and-spin.md:62",
    "route": "frontier-owner-of-qm-math-orbital-and-spin",
    "disposition": "outside-assignment-owner-repair",
    "affected_use": "The spin-layer summary asserts self-adjointness of the displayed J_z and J_plus/minus operators and identifies them as half Pauli matrices.",
    "invalidated_claim": "For s=1/2, J_plus=[[0,1],[0,0]] is not self-adjoint and is not half an individual Pauli matrix. Supplier clause (a) correctly gives J_z,J_x,J_y self-adjoint and J_plus adjoint=J_minus; its clause (e) identifies the Cartesian J_i as half Pauli matrices.",
    "minimality": "Revise only the summary to distinguish Cartesian components J_z,J_x,J_y from ladder operators J_plus,J_minus. The supplying proposition remains unchanged. No page edit made outside this assignment.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "lem-gr-einstein-residual-and-subsidiary-identity",
  "lem-gr-positive-definite-symmetric-matrix-bounds",
  "thm-gr-harmonic-constraint-propagation",
  "def-gr-galerkin-fourier-projection",
  "lem-gr-galerkin-projection-properties",
  "lem-gr-periodic-sobolev-completeness",
  "lem-gr-periodic-sobolev-algebra",
  "lem-gr-smooth-composition-and-commutator-estimates",
  "lem-gr-galerkin-ode-local-solution",
  "lem-gr-galerkin-time-derivative-bound",
  "lem-gr-rational-diagonal-extraction",
  "lem-gr-galerkin-compactness",
  "lem-gr-galerkin-second-time-derivative-bound",
  "lem-gr-galerkin-limit-is-classical-solution",
  "lem-gr-galerkin-energy-inequality",
  "thm-gr-periodic-symmetric-hyperbolic-existence",
  "thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability",
  "thm-gr-periodic-symmetric-hyperbolic-smooth-persistence",
  "thm-gr-local-symmetric-hyperbolic-well-posedness",
  "thm-gr-local-geometric-uniqueness",
  "thm-gr-reduced-einstein-local-existence",
  "thm-gr-local-geometric-development",
  "thm-gr-barotropic-fluid-local-evolution",
  "def-gr-dust-reduction-variables-and-gauge",
  "def-gr-dust-electric-magnetic-weyl-variables-and-schouten",
  "def-gr-dust-torsion-and-curvature-residuals",
  "lem-gr-dust-symmetric-hyperbolic-reduction",
  "lem-gr-dust-weyl-reconstruction-from-electric-magnetic",
  "lem-gr-dust-reduced-evolution-equations",
  "thm-gr-dust-subsidiary-and-residual-vanishing",
  "lem-gr-dust-initial-data-and-tilted-initialization",
  "thm-gr-dust-local-evolution",
  "lem-gr-scalar-einstein-symmetric-hyperbolic-reduction",
  "def-gr-development-and-data-fixing-isometry",
  "def-gr-common-subdevelopment-and-corresponding-boundary",
  "lem-gr-congruence-acceleration-and-expansion-properties",
  "def-gr-congruence-acceleration-and-expansion",
  "lem-gr-kinematic-decomposition-identities",
  "def-gr-geodesic-congruence-and-kinematics",
  "lem-gr-energy-momentum-current-divergence",
  "lem-gr-killing-congruence-kinematics-and-energy-current",
  "def-gr-killing-energy-charge",
  "lem-gr-kruskal-model-properties",
  "def-gr-kruskal-model-data",
  "def-gr-stationary-weak-field-data",
  "def-gr-newtonian-comparison-model-and-identification",
  "thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension",
  "thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators",
  "lem-nrqm-angular-momentum-orbital-casimir-identity",
  "def-nrqm-angular-momentum-framework-angular-momentum-observables",
  "def-nrqm-approximations-framework-perturbed-family-model",
  "def-nrqm-approximations-framework-variational-trial-model",
  "def-nrqm-potentials-one-dimensional-line-model",
  "def-nrqm-approximations-framework-wkb-regime-model",
  "def-nrqm-composites-framework-composite-systems-and-local-readouts",
  "pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws",
  "def-nrqm-bell-declared-spin-arrangement",
  "thm-nrqm-coulomb-angular-radial-unitary-reduction",
  "def-nrqm-central-framework-central-potential-model",
  "thm-nrqm-coulomb-transported-radial-endpoint-realization",
  "thm-nrqm-coulomb-kummer-recurrence-and-termination",
  "thm-nrqm-coulomb-laguerre-bound-energy-exhaustion",
  "thm-nrqm-coulomb-continuum-spectral-density",
  "thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy",
  "thm-nrqm-coulomb-onto-radial-continuum-transform",
  "thm-nrqm-coulomb-two-body-reduced-mass",
  "def-nrqm-central-framework-coulomb-and-hydrogen-model",
  "def-nrqm-composites-framework-reduced-preparations",
  "def-nrqm-composites-marker-model-and-fringe-visibility",
  "def-nrqm-driven-dynamics-framework-driven-model",
  "def-nrqm-driven-dynamics-framework-adiabatic-protocol",
  "def-nrqm-driven-dynamics-framework-interaction-picture",
  "def-nrqm-identical-particles-framework-species-sectors-and-preparations",
  "thm-nrqm-identical-particles-occupation-number-basis",
  "thm-nrqm-identical-particles-finite-mode-occupation-counts",
  "def-nrqm-identical-particles-framework-orbital-occupation-model",
  "def-nrqm-interference-two-path-preparation-and-detection-model",
  "def-nrqm-interference-recorded-detector-and-sampling-model",
  "post-nrqm-photons-radiation-extension-and-transverse-mode-assignment",
  "def-nrqm-photons-framework-radiation-sector-and-quantum-assignments",
  "thm-nrqm-orbital-and-spin-dipole-angular-selection-rules",
  "thm-nrqm-coulomb-atomic-dipole-matrix-element-domain",
  "post-nrqm-approximations-static-finite-level-dipole-coupling",
  "def-nrqm-light-matter-framework-finite-level-coupled-model",
  "def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength",
  "def-nrqm-photons-framework-fixed-mode-polarization-model",
  "def-nrqm-photons-framework-ideal-counting-and-detection-model",
  "thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity",
  "lem-nrqm-light-matter-first-order-photon-energy-law",
  "def-nrqm-light-matter-framework-spectral-transition-and-detection",
  "def-nrqm-many-body-framework-declared-fixed-n-model",
  "def-nrqm-many-body-framework-entropy-and-free-energy",
  "def-nrqm-many-body-framework-one-body-reduced-operator",
  "def-nrqm-oscillator-framework-quadratic-potential-model",
  "thm-nrqm-oscillator-coherent-evolution-and-variance",
  "def-nrqm-oscillator-coherent-states",
  "def-nrqm-potentials-interval-and-delta-models",
  "def-nrqm-scattering-framework-short-range-model",
  "pthm-nrqm-central-coulomb-energy-observable-and-flow",
  "def-nrqm-scattering-coulomb-dollard-model",
  "thm-nrqm-controlled-dynamics-radial-carleman-estimate",
  "def-nrqm-scattering-stationary-beam-and-cross-section-model",
  "def-nrqm-scattering-partial-wave-and-phase-shift-readings",
  "def-nrqm-scattering-single-channel-resonance-model",
  "def-nrqm-uncertainty-preparation-spread",
  "lem-cm-averaging-data-basic-bounds",
  "thm-cm-averaging-for-fast-periodic-oscillations",
  "ex-cm-averaging-oscillatory-deviation-check",
  "lem-bounded-bilateral-sequence-ball-is-complete",
  "lem-coded-quadratic-recurrence-is-a-contraction",
  "ex-cm-chaos-contraction-and-coded-fixed-sequence-checks",
  "lem-symbol-locality-gives-coding-continuity",
  "thm-henon-coded-invariant-set-is-conjugate-to-shift",
  "lem-finite-word-deviations-give-homoclinic-orbits",
  "ex-cm-chaos-finite-word-homoclinic-code-checks",
  "lem-close-map-first-component-has-uniform-inverse",
  "lem-perturbed-scalar-recurrence-root-bounds",
  "ex-cm-chaos-perturbed-root-and-margin-checks",
  "ex-cm-chaos-pulse-and-rotation-endpoint-checks",
  "lem-slope-graph-transforms-converge",
  "ex-cm-chaos-slope-transform-fixed-point-checks",
  "thm-cm-transport-theorem",
  "thm-cm-local-momentum-balance",
  "thm-cm-plane-couette-and-poiseuille-flows",
  "ex-cm-couette-poiseuille-numbers",
  "thm-cm-plane-elastic-waves",
  "ex-cm-elastic-plane-wave-speeds-and-energy",
  "ex-cm-galilean-boost-coordinate-change",
  "thm-cm-action-variable-derivative",
  "ex-cm-harmonic-oscillator-action-derivative",
  "ex-cm-inertia-tensors-of-point-masses",
  "ex-cm-leray-projection-explicit-computations",
  "lem-cm-mass-metric-positivity",
  "ex-cm-mass-metric-on-a-sphere",
  "prop-cm-oscillator-boundary-value-nonuniqueness",
  "ex-cm-oscillator-boundary-value-nonuniqueness-check",
  "prop-cm-oscillator-second-variation-signs",
  "ex-cm-oscillator-saddle-second-variation-checks",
  "thm-cm-parallel-axis-theorem",
  "ex-cm-parallel-axis-two-point-masses",
  "lem-discrete-young-and-sobolev-product",
  "lem-fluid-galerkin-coefficient-ivp",
  "lem-cm-strong-solution-smoothness-bootstrap",
  "lem-periodic-pressure-reconstruction",
  "ex-cm-plane-wave-and-shear-exact-solutions",
  "ex-cm-rotating-frame-identity",
  "ex-cm-rotating-hoop-reduced-energy",
  "thm-cm-rutherford-cross-section",
  "ex-cm-rutherford-cross-section-check",
  "ex-cm-spring-chain-mode-and-limit-check",
  "ex-cm-stationary-path-need-not-be-a-local-minimum",
  "ex-cm-transport-of-a-translating-uniform-flow",
  "ex-cm01-dimension-bookkeeping",
  "ex-cm01-galilean-boost-of-a-free-motion",
  "ex-cm01-rotating-basis-of-a-free-motion",
  "ex-cm01-two-particle-rigid-rod-configuration",
  "ex-cm01-worldline-parameter-condition",
  "ex-cm02-uniform-field",
  "ex-cm02-constant-field-projectile",
  "ex-cm02-drag-terminal-velocity",
  "ex-cm03-driven-mechanical-energy-balance",
  "pthm-cm03-frame-transformations",
  "ex-cm03-two-body-hooke-model-check",
  "ex-cm04-damped-regimes-check",
  "ex-cm04-harmonic-motion-check",
  "ex-cm04-pendulum-small-angle-check",
  "ex-cm04-resonance-response-check",
  "post-cm05-gravity",
  "thm-cm-kepler-conic-and-eccentricity",
  "pthm-cm05-conic",
  "pthm-cm05-plane-area",
  "pthm-cm05-kepler-period",
  "ex-cm05-barycentric-orbits-check",
  "thm-cm-circular-orbit-and-radial-frequency",
  "pthm-cm05-circular-orbit",
  "ex-cm05-circular-orbit-frequency-check",
  "ex-cm05-gravitational-ellipse-and-period-check",
  "ex-cm05-parabolic-and-hyperbolic-branch-check",
  "pthm-cm06-multiplier-balance",
  "pthm-cm06-rheonomic-power",
  "ex-cm06-bead-on-a-rotating-wire",
  "ex-cm06-pendulum-tension-and-reaction-power",
  "ex-cm06-rolling-disk-model-comparison",
  "pthm-cm06-inertial-forces",
  "ex-cm06-rotating-chart-inertial-terms",
  "ex-cm07-free-particle-straight-lines",
  "ex-cm07-nonholonomic-unrestricted-action-fails",
  "ex-cm07-oscillator-stationary-saddle-check",
  "ex-cm07-pendulum-constraint-elimination-check",
  "pthm-cm07-coordinate-covariance-of-the-equations",
  "ex-cm07-polar-coordinate-kinetic-metric-check",
  "prop-cm-lagrangian-boundary-terms-and-scaling",
  "pthm-cm07-boundary-terms-and-gauge",
  "ex-cm07-total-derivative-gauge-check",
  "pthm-cm08-general-noether",
  "pthm-cm08-point-noether",
  "pthm-cm08-translation",
  "pthm-cm08-boost-boundary",
  "pthm-cm08-rotation",
  "pthm-cm08-time-energy",
  "ex-cm08-pair-potential-charges-check",
  "pthm-cm08-moving-chart-energy-function",
  "ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy",
  "ex-cm08-time-dependent-potential-breaks-energy",
  "ex-cm08-uniform-field-breaks-translation-and-boost",
  "pthm-cm09-linearization-error-bound",
  "ex-cm09-cubic-potential-error-check",
  "pthm-cm09-linearization-at-a-strict-minimum",
  "pthm-cm09-averaging-for-weak-damping",
  "rem-cm09-zero-modes-degeneracy-and-scope",
  "ex-cm09-unstable-quadratic-mode",
  "ex-cm09-weak-damping-averaging-check",
  "ex-cm10-equilateral-triangle-rotational-inertia",
  "ex-cm10-parallel-axis-shift-check",
  "pthm-cm11-nonlinear-spin-stability",
  "ex-cm11-intermediate-axis-escape",
  "ex-cm12-mechanical-legendre-positive-metric",
  "ex-cm12-moving-coordinates",
  "ex-cm12-pendulum-legendre",
  "ex-cm12-regular-not-surjective",
  "ex-cm12-shifted-momentum",
  "pthm-cm13-flow-preservation",
  "pthm-cm13-dynamics-transport-under-canonical-maps",
  "pthm-cm13-generating-functions",
  "ex-cm13-free-particle-flow-generating-function",
  "ex-cm13-fundamental-brackets-and-evolution-checks",
  "ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks",
  "ex-cm13-point-transformation-generating-function-and-projection",
  "lem-cm-roundoff-accumulation-in-one-step-schemes",
  "lem-cm-binomial-pullback-family-and-its-log-are-derivations",
  "lem-cm-truncated-log-coefficient-bounds",
  "lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives",
  "lem-cm-symmetric-log-parity-removes-odd-coefficients",
  "lem-cm-optimal-truncation-gives-exponential-local-defect",
  "lem-cm-modified-energy-differs-by-order-two",
  "thm-cm-analytic-verlet-energy-on-exponential-times",
  "thm-cm-verlet-finite-time-error-is-quadratic",
  "rem-cm-scope-of-the-certified-verlet-estimates",
  "ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical",
  "pthm-cm14-hamilton-jacobi-characteristics",
  "ex-cm14-harmonic-oscillator-hamilton-jacobi-check",
  "pthm-cm05-effective-potential",
  "ex-cm14-kepler-radial-action-check",
  "ex-cm14-oscillator-caustic-check",
  "thm-cm-control-volume-balance",
  "thm-cm-local-mass-balance",
  "pthm-cm15-control-volume-balance",
  "ex-cm15-control-volume-check",
  "ex-cm15-hard-sphere-reflection-check",
  "ex-cm15-impact-check",
  "ex-cm15-rocket-check",
  "ex-cm16-isotropic-oscillator-return-map-check",
  "ex-cm16-pendulum-equilibrium-checks",
  "lem-rescaled-pulse-map-is-c-one-close-to-kick",
  "thm-explicit-perturbed-horseshoe-and-transversality",
  "thm-smooth-fixed-mass-mechanical-horseshoe",
  "pthm-cm16-separatrix-splitting-and-horseshoe",
  "ex-cm16-pulse-horseshoe-data-check",
  "pthm-cm13-liouville",
  "pthm-cm16-recurrence-for-finite-volume-models",
  "ex-cm16-recurrence-volume-check",
  "lem-cauchy-fourier-and-lattice-shell-bounds",
  "lem-diophantine-resonance-slab-measure",
  "lem-frequency-reparametrization-by-contraction",
  "lem-kam-affine-taylor-fourier-truncation",
  "lem-truncated-homological-equation-with-conservative-loss",
  "lem-kam-generator-flow-and-remainder-bound",
  "lem-kam-parameter-sequences-satisfy-all-step-hypotheses",
  "lem-kam-composed-map-and-derivative-convergence",
  "lem-kam-conjugation-symmetry-of-the-construction",
  "thm-parameter-kam-torus-invariance-and-lagrangianity",
  "lem-kam-limit-is-an-embedding",
  "lem-nondegenerate-frequency-reduction-and-alpha-square-smallness",
  "thm-positive-measure-analytic-kam-family",
  "pthm-cm16-two-rotor-kam",
  "ex-cm16-two-rotor-kam-units-check",
  "pthm-cm17-transport-and-material-derivative",
  "pthm-cm17-continuity-equation",
  "post-cm17-fluid-constitutive",
  "post-cm17-contact-force-model",
  "post-cm17-momentum-balance",
  "thm-cm-stress-matrix-is-symmetric",
  "thm-cm-traction-is-given-by-a-stress-matrix",
  "pthm-cm17-stress-matrix-and-symmetry",
  "pthm-cm17-momentum-equation",
  "ex-cm17-channel-flow-and-no-slip-check",
  "post-cm17-linear-elastic-constitutive",
  "pthm-cm17-linear-elastic-equation-of-motion",
  "pthm-cm17-elastic-plane-wave-speeds",
  "ex-cm17-elastic-plane-wave-and-energy-check",
  "lem-tame-transport-commutator",
  "lem-fluid-energy-common-lifespan",
  "lem-fourier-tail-diagonal-compact-convergence",
  "lem-high-sobolev-norms-share-base-lifespan",
  "thm-local-smooth-periodic-euler-viscous-solution",
  "thm-fluid-uniqueness-and-continuous-dependence",
  "pthm-cm17-incompressible-periodic-local-evolution",
  "ex-cm17-periodic-shear-exact-solution-check",
  "ex-cm17-riemann-shock-and-rarefaction-check",
  "pthm-cm17-chain-limit-of-the-string-model",
  "ex-cm17-spring-chain-limit-numbers",
  "pthm-cm17-string-wave-solutions",
  "ex-cm17-string-modes-and-tail-check",
  "ex-cm17-uniform-expansion-transport-check",
  "rem-cm18-primary-report-contract",
  "ex-cm18-pendulum-calibration-proposal",
  "ex-cm18-uniform-motion-sampling-check",
  "ex-gr-boost-congruence-energy-balance-in-flat-space",
  "ex-gr-curvature-of-a-product-with-a-round-sphere",
  "ex-gr-conjugate-instant-on-a-round-sphere-factor",
  "ex-gr-curvature-in-a-point-normal-chart",
  "ex-gr-dust-conservation-in-flat-space"
]


