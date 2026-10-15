# Step 5 repair: impact-initial, round 1, unit 2

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/statistical-models-experiments-62-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/statistical-models-experiments-62-step5-v2/step5-v2-impact-initial-r1-u2.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"statistical-models-experiments-62",phase:"impact-initial",round:1,unit:"2",input_sha256:"0afbe481e44ebd85fa181f7121708275c077a73c7ae0622bea2cdeeae1e0a828",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run statistical-models-experiments-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.

Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "thm-cost-optimal-stratified-allocation",
    "run": "statistical-models-experiments-62",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F1 calls every noncertainty standard deviation positive, while the design defines a nonnegative square root and permits constant fixed strata. Replaced positive by nonnegative and located positivity only on J. This is nonfatal: the Statement and Given already impose S_h>0 precisely on J, and every denominator and equality condition in steps 1.1–3.1 uses only h in J.",
    "evidence": [
      {
        "path": "items/thm-cost-optimal-stratified-allocation.md",
        "anchor": "Facts & Assumptions, F1"
      },
      {
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u10.json",
        "anchor": "thm-cost-optimal-stratified-allocation"
      }
    ],
    "item_sha256": "228b6a6f685beb92e2bfe2e9ec55d04831a91756f0c690903fdd40db07cfef1b",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "subject": "ex-rounding-neyman-allocation-to-integer-sample-sizes",
    "run": "statistical-models-experiments-62",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "reason": "F2 omitted the no-capacity qualification when restating the Neyman theorem. Added the fixed positive total and explicit uncapped domain, excluding integer, capacity, lower-bound and minimum-sample constraints. This is nonfatal for this example: the computed (3/8,45/8) already lies below capacities (2,10), so imposing those upper bounds would preserve this continuous optimum; nearest rounding still gives the inadmissible (0,6).",
    "evidence": [
      {
        "path": "items/ex-rounding-neyman-allocation-to-integer-sample-sizes.md",
        "anchor": "Facts & Assumptions, F2"
      },
      {
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u10.json",
        "anchor": "ex-rounding-neyman-allocation-to-integer-sample-sizes"
      }
    ],
    "item_sha256": "d485fa4f0c453556197079b5d8c565e7101e18c71f071fad6deeeba4d9363f77",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No published item defect or supplier-interface event was discovered. Both changes are confined to assigned draft facts blocks; the cost theorem Statement and both dependency interfaces remain unchanged. No outside consumer maintenance is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u12-score-center",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:25:22.720396+00:00",
      "class": "accuracy",
      "subclass": "false-or-overstrong-statement",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-fisher-sharp-null-and-predeclared-test-orderings",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u12.json",
      "evidence": "The sharp null fixes Y_i(z), not the location of an arbitrary score: S(z,y)=1 on every assignment has null expectation and every null value equal to 1, not 0. Replaced the forced-zero clause by an explicit predeclared center, preserving all scores and the sharp-null criterion.",
      "adjudication_ref": [
        {
          "id": "def-fisher-sharp-null-and-predeclared-test-orderings",
          "model": "gpt-6-luna",
          "context_sha256": "78b344267ce71a8a929267fd30449fc64c91528a75f3ddb30549a02ce281d700"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "All five direct item consumers are draft frontier items, and their relevant uses remain sound; no potentially defective published consumer or outside consumer was found."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "merge_or_append",
    "item": "thm-regular-fractional-factorial-aliasing-criterion",
    "class": "accuracy",
    "subclass": "invalid-inference",
    "severity": "fatal",
    "location": "proof-step",
    "location_detail": "Proof step 3.1",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "group-alpha",
    "disposition": "fixed",
    "reason": "The row-space representation was asserted without its hypothesis; the two-run example in the decision refutes the unrestricted inference. Step 3.1 now treats non-row-space supports explicitly and restricts the unique generator-coordinate argument to row-space supports. Synchronised the assigned contract entry; Statement and Definition interfaces did not change.",
    "adjudication_ref": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u15.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u16-boundary-extremum",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:26:49.282844+00:00",
      "class": "accuracy",
      "subclass": "false-boundary-disposition",
      "severity": "fatal",
      "location": "statement",
      "subject": "thm-second-order-response-surface-stationary-point-and-classification",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "16",
      "item_sha256": "6b8b53dec404c78b0d734838d1fac3c0cb4297bcc99a94e4245051fe591732c9",
      "evidence": "With k=1, beta=0, B=[1] and R=[0,infinity), x0=0 is a boundary point and x^2>0=m(0) for every feasible x>0. The blanket denial of constrained-optimum consequences in the Statement and step 5.1 is false. Repaired by restricting the strict global ambient inequalities to any region containing x0, preserving the interior saddle conclusion and distinguishing boundary saddles and infeasible points.",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u16.json",
      "repair_cost": "repair+rejudge"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u16-symmetric-matrix-fact",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:26:49.282844+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-second-order-response-surface-stationary-point-and-classification",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "16",
      "item_sha256": "6b8b53dec404c78b0d734838d1fac3c0cb4297bcc99a94e4245051fe591732c9",
      "evidence": "F3 formerly stated only that a self-adjoint operator has a symmetric matrix, but step 3.1 uses the converse. Its actual published supplier states the equivalence. Corrected the fact paraphrase to iff and explicitly identified the standard orthonormal basis; no additional premise or supplier is needed.",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u16.json",
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u17-rejection-coordinate",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:25:59.501022+00:00",
      "class": "accuracy",
      "subclass": "invalid-inference",
      "severity": "fatal",
      "location": "proof-step",
      "subject": "prop-known-variance-normal-two-sided-z-test-power",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u17.json",
      "evidence": [
        {
          "path": "items/prop-known-variance-normal-two-sided-z-test-power.md",
          "note": "Step 1.1 incorrectly used {x: |x|>c_alpha} on the sample-mean observation space instead of {x: |sqrt(n)(x-mu_0)/sigma|>c_alpha}. These define different tests: with n=1, mu_0=0, sigma=2 and alpha=2(1-Phi(1)), the raw-coordinate indicator has null rejection probability 2(1-Phi(1/2))>alpha. Thus the subsequent standardized-tail calculations were not connected to that indicator. Repaired step 1.1 by defining T, its exact Borel preimage R, the measurable indicator phi=1_R, and phi(sample mean)=1_{|Z_n|>c_alpha}; the statement is unchanged."
        },
        {
          "path": "research/statistical-models-experiments-62-batch-17.proof-contracts.json",
          "note": "Updated only the assigned item step-1-1 derivation under the shared-write lock; focused strict proof-contract check passed."
        }
      ],
      "prevention": {
        "kind": "brief",
        "ref": "briefs/step5-adjudicator.md"
      },
      "note": "Proof-only coordinate repair; Statement, dependencies, AC requirements and page interface are unchanged. No published-consumer ledger update is proposed because no published defect or changed interface was found."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "proposed_action": "append",
    "subject": "def-biological-and-technical-replication-model",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Definition, biological-replicate role sentence",
    "finding": "Role label incorrectly required independent sampling despite scientific-contract clause 2 and the same paragraph saying labels do not assert independence.",
    "correction": "Replaced independently sampled unit with distinct biological unit; preserved every explicit probabilistic assumption.",
    "evidence": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "none",
    "reason": "The complete direct item/reference search in items/ and library/ found only the two draft frontier consumers listed in downstream and the owning draft page. No published affected consumer or published-supplier defect was found."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u2-scalar-target-identification",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:28:34.489946+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-claim",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-linear-contrast-statistics-are-borel-measurable",
      "caught_at_stage": "5.1-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "reason": "F1 and proof 1.1 originally applied an R^m->R^k result to a scalar-valued map. The repaired proof explicitly constructs the canonical scalar/vector identification and applies the theorem to L:R^n->R^1; the Statement is unchanged.",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u2.json"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-observation",
    "subject": "def-euclidean-inner-product",
    "reason": "The batch-2 Step-4 presentation alert is already addressed in the current published Remarks: abstract inner-product theory is developed elsewhere in this library. The canonical ledger already records the local correction under marker statistical-models-experiments-62-s4-euclidean-scope-note. Its current Definition supplies the exact function-space convention, bilinearity and Euclidean norm/metric formula used in the assigned repair. No additional published edit, Step-5 adjudication or audit claim is proposed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u21-ipw-weight-description",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:29:26.105681+00:00",
      "class": "accuracy",
      "subclass": "other",
      "subclass_note": "Propensity incorrectly called the outcome weight; reciprocal formula and procedure already correct. The rejected causal-overclaim allegation itself is a false positive.",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "alg-inverse-probability-weighting-for-a-causal-mean",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "source": "research/statistical-models-experiments-62-batch-21-step5-context.json, concerns[0]; independently confirmed against the current Definition.",
      "correction": "Replace only the incorrect outcome-weight sentence by I_a/e_a(L), retaining the true propensity e_a(L). Refresh the five exact quotations in the owning contract.",
      "adjudication_ref": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u21.json",
          "id": "alg-inverse-probability-weighting-for-a-causal-mean",
          "model": "gpt-6-luna",
          "context_sha256": "8e6398dc2c2fbe72d581add1f111db5edb47b2ed25d0b1e77405fae686d41865",
          "outcome": "confirmed_nonfatal"
        }
      ]
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The assigned items and all five direct IPW item consumers are draft frontier items. No published consumer or supplier defect was identified in this review, so no published audit or maintenance entry is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u22-measurability",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:28:36.365695+00:00",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-instrumental-variable-potential-outcomes",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u22.json",
      "evidence": [
        {
          "path": "items/def-instrumental-variable-potential-outcomes.md",
          "note": "Explicit discrete/Borel measurability now excludes nonmeasurable potential-treatment maps and guarantees the displayed joint tuple and stratum probabilities are well-defined."
        }
      ],
      "note": "Actual current definition-domain defect; fatal type other. Supplier Definition changed; all 13 direct consumers remain sound. This repair report claims no independent review of its own repair."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "record_false_positive",
    "subject": "thm-wald-identifies-the-complier-average-effect",
    "model": "gpt-6-luna",
    "context_sha256": "63ae0c28774c37b830aeb5aec08acec402ed79e6b0e9b4115f301236cf8cfb9d",
    "reason": "Consistency implies |Y| <= sum over a,z of |Y(a,z)| almost surely. Every potential outcome is integrable, so observed Y is integrable; no additional moment assumption is missing. Exclusion also gives |Y| <= |Y(0)|+|Y(1)|. F1 supplies Delta_A=P(C)>0 and F2 supplies the finite reduced-form identity, meeting the Wald definition prerequisites before division in step 2.1. F3 is used under these already-satisfied hypotheses.",
    "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [
      "https://pages.cs.wisc.edu/~hyunseung/stat992_sp25/IV.html"
    ],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The changed draft setup has 13 direct item consumers, all draft frontier members. No published or outside consumer use was found, and no published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u24-uniform-subset-attribution",
      "run": "statistical-models-experiments-62",
      "batch": "24",
      "subject": "thm-stratified-interference-variance-estimators-conservative",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "location": "proof-step",
      "severity": "nonfatal",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u24.json",
      "evidence": [
        {
          "path": "items/thm-stratified-interference-variance-estimators-conservative.md",
          "note": "Confirmed nonfatal citation error in step 1.1: stratified interference [F2] fixes each potential-outcome list at a fixed count and own assignment; it does not randomize the treated set. The uniform subset and uniform complement follow from the expressly assumed design [F1], already in the step's tags and deps. Replaced only the mistaken attribution and synchronized its contract derivation; no premise or theorem claim was missing."
        },
        {
          "path": "research/statistical-models-experiments-62-batch-24.proof-contracts.json",
          "note": "Synchronized only this item's step-1-1 derivation claim under the shared-write lock; strict focused contract check passed."
        }
      ],
      "at": "2026-10-14T23:28:31.000313+00:00"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "defect_id": "statistical-models-experiments-62-step5-initial-r1-u28-censoring-necessity",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:26:07.364Z",
    "class": "accuracy",
    "subclass": "unsupported-inference",
    "severity": "nonfatal",
    "location": "proof-step",
    "subject": "cex-informative-censoring-does-not-identify-event-law",
    "caught_at_stage": "4-judge",
    "caught_by_role": "unknown",
    "disposition": "fixed",
    "description": "Steps 1.1–3.1 correctly give mass 1/2 at each observed pair (1,1) and (1/2,0), while P_A(T≤2)=1/2 and P_B(T≤2)=1. Step 2.2 correctly normalizes the uniform selected law by P(T>1)=2/3. Step 4.1 nevertheless asserts an unproved general necessity of independence and positivity for likelihood construction. This ancillary assertion does not invalidate the counterexample and is a confirmed nonfatal defect; the defining interface explicitly permits informative mechanisms with their joint observation law modeled.",
    "repair": "Replaced step 4.1’s universal necessity claim with the informative-censoring joint-law caveat from def-event-time-observation-schemes; synchronized F1 and the owning proof contract.",
    "adjudication_ref": [
      {
        "id": "cex-informative-censoring-does-not-identify-event-law",
        "model": "gpt-6-luna",
        "context_sha256": "b093d63d5fa17efa05a4d224ab4d005b49119a5902c8a44bedcec4bf5a5326e6"
      }
    ],
    "prevention": {
      "kind": "brief",
      "ref": "briefs/step5-adjudicator.md"
    },
    "repair_cost": "inline-fix",
    "caught_by_model": "gpt-6-luna",
    "evidence": [
      {
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u28.task.md",
        "note": "Exact rejected tuple and original step 4.1 necessity objection."
      },
      {
        "path": "items/cex-informative-censoring-does-not-identify-event-law.md",
        "note": "Steps 1.1–3.1 retain the valid witness; F1 and step 4.1 now use the actual observation-law caveat."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u29-choice-scope",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:05.484784+00:00",
      "class": "accuracy",
      "subclass": "missing-choice-scope",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-parametric-survival-and-reliability",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "29",
      "item_sha256": "7f79e5f9a40d358bd3c33fcf6917967866ec79cbef1a375deb87493db3275502",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u29.json",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u29.json",
          "note": "The family-existence clause invokes thm-exponential-and-weibull-survival-laws without its Countable Choice hypothesis. Its density-law construction uses that hypothesis for Lebesgue measure/Borel measurability, integral identification and CDF correspondence. The repair conditions only the parametric-family clause on Countable Choice, preserves every formula and general given-law definition, and declares the dependency."
        }
      ],
      "repair_cost": "repair+rejudge"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u29-mle-positive-factor",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:05.484784+00:00",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-exponential-weibull-hazards-and-censored-likelihood",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "29",
      "item_sha256": "90a1012bf7e96d903dd1ece121f2a50b61c759707fd37bd77340ad649d6d9020",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u29.json",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u29.json",
          "note": "F3 omitted the positive censor-only factor and overstated the supplier: when C_psi=0 its specified likelihood is identically zero. This is nonfatal for the actual example, since step 1.3 already established all censor factors equal one. F3 now carries the supplier hypotheses and zero-factor caveat; step 1.3 explicitly checks C=1>0, the finite Borel dominator, iid pairs and independence. Thus d=2,E=10 still gives unique maximum 0.2. Continuous and atomic hazards, density interpretation and single-lifetime caveat also check directly."
        }
      ],
      "repair_cost": "repair+rejudge"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "subject": "thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures",
    "reason": "The Step-4 presentation alert is absent from the current published carrier: numbered steps 1.1–6.1 each occupy one paragraph and final step 6.1 ends with tags and QED. The current singleton-atom argument uses decreasing finite-measure intervals and continuity from above. No published item was edited or adjudicated. No published or outside consumer of the changed definition was found.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "subject": "lem-bounded-stopping-preserves-cadlag-square-integrable-martingales",
    "severity": "nonfatal",
    "location": "facts-block",
    "disposition": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "F1 omitted the finite-horizon interpretation of an infinite-time definition; constant extension now supplies the exact interface.",
    "evidence_path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "subject": "lem-predictable-step-processes-dense-in-compensator-l2",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "A1 incorrectly attributed AC to the simple-density theorem; it now inherits the assumption from the model contract.",
    "evidence_path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "subject": "ex-delayed-entry-predictable-risk-process",
    "severity": "fatal",
    "location": "statement",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "other",
    "reason": "Y_U was asserted outside the domain on {U>T}, of positive probability; the risk formula now covers all positive times.",
    "evidence_path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "subject": "thm-compensated-counting-process-brackets",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F2 omitted zero-start and integrability restrictions from bracket uniqueness; both candidate classes and the uniqueness citation are corrected.",
    "evidence_path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-proposed",
    "subject": "lem-elementary-counting-process-integral-isometry",
    "severity": "fatal",
    "location": "facts-block",
    "disposition": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "F3 omitted product-integrability conditions for an unbounded known factor; the qualification and its step-1.1 Cauchy-Schwarz check are explicit.",
    "evidence_path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u30.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-proposed",
    "reason": "No new published-item defect was established in the prerequisite interfaces examined for these six reviews. The Step-4 alerts checked here concern draft frontier items and are routed in this run report, not entered into the published-consumer ledger. No published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-nelson-aalen-kaplan-meier-greenwood-estimators",
    "action": "record-confirmed-repaired-defect",
    "severity": "fatal",
    "defect_type": "logic",
    "locus": "definition",
    "finding": "The original Definition calls all three formulas statistics on the observed sample space, although Greenwood is undefined when n=1 and an event occurs by t: Y=Delta N=1 makes Y(Y-Delta N)=0. The cited statistic interface requires a total measurable map. Repaired by distinguishing the measurable Greenwood formula on its measurable positive-denominator domain from its explicitly defined zero extension on the whole sample space; the extension has no variance interpretation outside that domain.",
    "status": "fixed"
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no-update-required",
    "reason": "Every direct item consumer found by the source dependency/reference scan is draft and belongs to the frozen frontier; the published statistic supplier is sound and unchanged. No published-consumer defect was found."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-logrank-crossing-hazards-zero-score",
    "location": "facts-block",
    "fact": "F2",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F2 excluded u=0 although its Kaplan–Meier supplier includes baseline failures. Replaced 0<u by 0≤u. Both observed failures are strictly positive, so all products and the conclusion were already correct.",
    "evidence": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "ex-logrank-fisher-randomization-with-unequal-weights",
    "location": "facts-block",
    "fact": "F1",
    "severity": "nonfatal",
    "disposition": "fixed",
    "reason": "F1 omitted the total event count d_j from the general logrank contribution. Restored O_j−d_jY_1j/Y_j and explicitly noted that d_j=1 here. The three distinct failure times make the original numerical calculations and superuniformity conclusion correct.",
    "evidence": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u33.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u4-poisson-derivative-notation",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:26:39.249001+00:00",
      "class": "accuracy",
      "subclass": "undefined-notation",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-poisson-overdispersion",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "batch": "4",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u4.json",
      "description": "F3 omitted the arguments of f in two density-derivative multipliers. Explicit f(k;theta) factors now distinguish multiplication from function evaluation; direct differentiation verifies both expressions and the existing envelope.",
      "repair_cost": "inline-fix",
      "item_sha256": "e3abc13f7918ab46511cd5f12f9e84c504e408f8e06246e5a88d0aa4c779a25a"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The assigned carrier is draft, only its F3 derivative notation changed, and no Statement/Definition interface changed. No potentially defective published supplier or consumer was found in the examined uses."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-time-series-spectral-measure-and-periodogram",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "other",
    "locus": "definition",
    "finding": "Undefined bandwidth-sequence input in w_{n,j} and tilde f_n. Added a supplied positive sequence before the Fourier-grid definitions.",
    "evidence": "items/def-time-series-spectral-measure-and-periodogram.md, Definition, smoothing paragraph; original b>0 did not bind b_n."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-time-series-spectral-measure-and-periodogram",
    "status": "fixed",
    "severity": "nonfatal",
    "locus": "proof-contract",
    "finding": "The nonempty-choice boundary incorrectly said the item assumes no choice axiom. It now distinguishes explicit Countable Choice for angular measure from choice-free finite formulas and a supplied bandwidth sequence.",
    "evidence": "research/statistical-models-experiments-62-batch-41.proof-contracts.json, contracts.def-time-series-spectral-measure-and-periodogram.boundaries[nonempty-choice]."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-or-merge-exact-tuple",
    "defect_id": "sme62-step5-initial-r1-u42-arma-cancellation",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:30:46.111151+00:00",
    "class": "accuracy",
    "subclass": "false-or-overstrong-statement",
    "severity": "fatal",
    "location": "definition",
    "subject": "def-linear-process-and-arma-model",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "defect_type": "logic",
    "reason": "Confirmed the counterexample directly: choose iid centered finite-variance innovations and an independent nonzero centered finite-variance C. Then X_t=mu+epsilon_t+C is weakly stationary and (1-B)(X-mu)=(1-B)epsilon, but X-mu!=epsilon. Thus cancelling 1-B discards solutions. The definition now imposes a normalized coprime equation and explicitly defines cancellation as an associated reduced model, without asserting solution-set equivalence.",
    "adjudication_ref": [
      {
        "id": "def-linear-process-and-arma-model",
        "model": "gpt-6-luna",
        "context_sha256": "6d22644cba63e2faf209ead67d5df4c32f953c6c48e62750293301d5181bdb6c",
        "item_sha256": "1036d23c62df34664e95098e3300fc1ecbe1f0211af104be989ba0a1b539d811",
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u42.json"
      }
    ],
    "evidence": [
      {
        "path": "items/def-linear-process-and-arma-model.md",
        "post_sha256": "4a2358a5fe3e67a5ef8fc7096a244fc4ae28e0e083b042ee5c2907e0703cde9f"
      },
      {
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u42.json",
        "section": "decisions, reviews, repair_notes"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append-or-merge-exact-tuple",
    "defect_id": "sme62-step5-initial-r1-u42-ar-tightness-citation",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:30:46.111151+00:00",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "severity": "fatal",
    "location": "facts-block",
    "subject": "cor-stable-ar-long-run-variance-plug-in-consistency",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "defect_type": "dependency_citation",
    "reason": "The rejected inference is mathematically true, but original F3 falsely attributed finite-dimensional tightness to Slutsky and the continuous-probability mapping theorem; neither cited Statement establishes it. Proof 1.2 needs this inference for slope consistency. The already published thm-vector-stochastic-order-calculus Statement part 3 and Proof 1.1 establish it without choice. Added that dependency and F6, then used the OLS full-vector normal limit and an explicit tail bound to prove all coefficient consistency; no projection limit is needed. The corollary Statement is unchanged.",
    "adjudication_ref": [
      {
        "id": "cor-stable-ar-long-run-variance-plug-in-consistency",
        "model": "gpt-6-luna",
        "context_sha256": "74cdb090c96016177515ca29f6ce281766b1d411e8e3ae7d5633e73ebc931110",
        "item_sha256": "e7b1e6aab6762d9f44152841237ea009677d8bcec375764e0a101ec4b8ba04f3",
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u42.json"
      }
    ],
    "evidence": [
      {
        "path": "items/cor-stable-ar-long-run-variance-plug-in-consistency.md",
        "post_sha256": "af536a17f6d50e6dcb790be3b4ded1a8ee4b20f69906186dc4d13b7b5ad8b832"
      },
      {
        "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u42.json",
        "section": "decisions, reviews, repair_notes"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "record-no-published-repair",
    "reason": "No direct published consumer of the changed ARMA definition was found. The published thm-vector-stochastic-order-calculus was consulted read-only: Statement part 3 and Proof 1.1 justify finite-dimensional tightness, and no defect or repair was found in that use. This records a prerequisite-interface check only, not independent whole-item audit or certification.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "id": "ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance",
    "run": "statistical-models-experiments-62",
    "phase": "initial",
    "round": 1,
    "unit": "44",
    "outcome": "confirmed_nonfatal",
    "locus": "facts-block",
    "subclass": "citation-inflated",
    "status": "fixed",
    "reason": "F3 claimed uniqueness from a Definition that expressly defers it. Replaced that unused uniqueness clause by the supplier-established mean and covariance needed in Verification 2.1. Claim, dependencies, proof steps and page interface are unchanged.",
    "evidence": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u44.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-r1-u46-van-hove-index",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:32:09.394433+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-van-hove-window-sequence",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u46.json",
      "note": "The explicit n>=1 indexing conflicts with the library convention in def-sequence-convergence-top, Definition (sequences start at 0). Replaced it by n>=0 without changing any geometric or measure condition. This is nonfatal: reindexing W_n to W_(n+1) preserves positivity, volume divergence and each compact-enlargement limit; no new mathematics or choice is required."
    },
    "reason": "The explicit n>=1 indexing conflicts with the library convention in def-sequence-convergence-top, Definition (sequences start at 0). Replaced it by n>=0 without changing any geometric or measure condition. This is nonfatal: reindexing W_n to W_(n+1) preserves positivity, volume divergence and each compact-enlargement limit; no new mathematics or choice is required.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-r1-u46-covariance-f3",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:32:09.394433+00:00",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "thm-lattice-covariance-estimator-asymptotically-unbiased",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u46.json",
      "note": "F3 stated only |E[UV]|<=||U||_2||V||_2, which omits the absolute-product integrability required in step 1.1. The declared Cauchy-Schwarz supplier actually proves E[|UV|]<=||U||_2||V||_2<infinity under exactly the given hypotheses. Restored that bound and explicitly cited the existing modulus-bound supplier in step 1.2. This is a nonfatal truncated fact: the required proved dependency was already present and correct; the theorem and its argument need no new hypothesis or supplier."
    },
    "reason": "F3 stated only |E[UV]|<=||U||_2||V||_2, which omits the absolute-product integrability required in step 1.1. The declared Cauchy-Schwarz supplier actually proves E[|UV|]<=||U||_2||V||_2<infinity under exactly the given hypotheses. Restored that bound and explicitly cited the existing modulus-bound supplier in step 1.2. This is a nonfatal truncated fact: the required proved dependency was already present and correct; the theorem and its argument need no new hypothesis or supplier.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "The Van Hove interface has exactly three direct item consumers, all draft frontier items, with sound uses recorded above. The covariance Statement is unchanged. No potentially defective published consumer or published-supplier defect was found; no published item or shared ledger was edited.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append_proposed",
    "subject": "def-scalar-poisson-count-law",
    "severity": "fatal",
    "defect_type": "logic",
    "location": "definition",
    "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u48.json",
    "finding": "The Definition falsely asserts that infinite intensity forces an arbitrary point-process count to be infinite almost surely. On the discrete positive integers, let P(N=n)=1/[n(n+1)] for n>=1 and eta=sum_{j=1}^N delta_j. These probabilities telescope to one; every configuration is finite and measurable, while nu({j})=P(N>=j)=1/j and nu(S)=sum_j 1/j=infinity. Thus eta(S)=N is finite almost surely even with locally finite intensity. Restricting the convention to Poisson point-process counts repairs this false mathematical assertion.",
    "repair": "Insert Poisson before point-process count; all 13 direct consumers retain sound uses.",
    "disposition": "fixed",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "subject": "def-scalar-poisson-count-law",
    "reason": "Every direct consumer is a draft frozen-frontier item; no potentially defective published consumer or outside maintenance target was discovered.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u49-recentering-domain",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:28:39.704201+00:00",
      "class": "accuracy",
      "subclass": "ill-typed-construction",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-spatial-recentering-action",
      "caught_at_stage": "5a-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "batch": "49",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u49.json",
      "item_sha256": "6d6543773b80567277037f28ae608d8b0a2ae0b1c61ffa71eca4c2501faff22b",
      "note": "The supplier permits counting measures on an arbitrary locally compact second-countable Hausdorff S. A measure on a singleton S is admissible there but cannot evaluate a Euclidean Borel set B+x outside its sigma-algebra. The original Definition never set S=R^d. Specifying an integer d>=1 and mu on R^d repairs this ill-typed construction without changing the translation formula or sign convention."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u5-1",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:48Z",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "frontmatter",
      "subject": "def-wishart-law",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u5.json",
      "note": "The published Gaussian Definition supplies existence but explicitly defers uniqueness. Its characteristic-function lemma proves uniqueness under AC for every positive-semidefinite scale, including singular scales. Adding that established supplier to deps licenses the uniquely specified Gaussian factors, their finite product, and the continuous outer-product pushforward without changing the Definition.",
      "item_sha256": "588b4ffeea727de7116a2b4e8e2f7e3807deaf9df1f721ab6304aed089fe5c5f"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u5-2",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:48Z",
      "class": "accuracy",
      "subclass": "citation-missing",
      "severity": "fatal",
      "location": "frontmatter",
      "subject": "def-multivariate-normal-sample-model-and-statistics",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u5.json",
      "note": "The submitted MLE objection is not upheld: the Definition calls M a covariance candidate and defers its MLE property, while the actual likelihood theorem assumes n>p and proves M positive definite almost surely before optimization. Review nevertheless confirms the same fatal missing Gaussian-uniqueness dependency as in def-wishart-law: the parameter-indexed product P_mu,Sigma requires a uniquely specified normal law, whereas its cited Gaussian Definition explicitly defers uniqueness. Added the established characteristic-function/uniqueness lemma to deps; no MLE claim or Definition was weakened.",
      "item_sha256": "5894e7703a6de67950d09b6af0bca592247b5aeaeda809dd810da5bfcd10b060"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u5-3",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:48Z",
      "class": "accuracy",
      "subclass": "citation-truncated",
      "severity": "fatal",
      "location": "facts-block",
      "subject": "ex-hotelling-t2-two-dimensional-exact-test",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "repair+rejudge",
      "source": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u5.json",
      "note": "F2 and F3 imported a random-statistic F law and exact-size guarantee without the iid Gaussian experiment, positive-definite covariance or AC required by their actual suppliers. Fixed vectors alone give only arithmetic, not a null law or a test size. Added the reference experiment and AC to Example/Given, restored every supplier hypothesis in F2/F3, and retained n=4>p=2 and the exact strict cutoff.",
      "item_sha256": "758765062e2f0315bcf597d59bd520b04b3aa2eb0b6991012ce68880b53f7f0b"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u50-1",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:31:24.277928+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-finite-product-measure-with-density",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "F4 omitted a required uniqueness hypothesis: on X={a,b}, the generating pi-system {empty,{a}} does not distinguish the zero measure from delta_b. The actual step 2.1 already uses rectangles containing W^n and checks equal finite total mass, so no inference fails. Restricted F4 to generating pi-systems containing the whole space, which supply the cited theorem's constant finite exhaustion."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "entry": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u50-2",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:31:24.277950+00:00",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-diffuse-finite-window-poisson-process-is-simple",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "group-alpha",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u50.json",
          "note": "F1 attributed a process-level almost-sure convention to a supplier defining simplicity pointwise for configurations. The original proof independently proves the probability-one claim via null pair collisions, so this was an inaccurate restatement rather than a circular or unsupported simplicity inference. Corrected F1, proved evaluation-measurability of finite simple configurations by dyadic counts, and used the exact push-forward law in the final step."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "statistical-models-experiments-62-step5-u51-initial-history",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:31:27.191940+00:00",
    "class": "accuracy",
    "subclass": "missing-hypothesis",
    "severity": "fatal",
    "location": "proof-step",
    "subject": "ex-poisson-and-history-dependent-temporal-intensities",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "finding": "Original Verification 1.3 and the Example likelihood omit all pre-window excitation although the supplied temporal law may condition on nonempty initial history. With one past event s<0, the m=0 hazard misses alpha exp(beta s)(1-exp(-beta T))/beta.",
    "repair": "Include finite initial excitation c_0, its pre-event factor c_0 exp(-beta t_i), and its integrated term c_0(1-exp(-beta T))/beta; retain c_0=0 for empty history.",
    "adjudication_ref": [
      "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u51.json"
    ],
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1806.00221"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "statistical-models-experiments-62-step5-u51-poisson-simplicity",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:31:27.191940+00:00",
    "class": "accuracy",
    "subclass": "citation-inflated",
    "severity": "nonfatal",
    "location": "facts-block",
    "subject": "ex-poisson-and-history-dependent-temporal-intensities",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "finding": "Original F2 and Verification 1.1 transfer simplicity of the process constructed by lem-homogeneous-poisson-ordered-event-time-density to an arbitrary supplied Poisson process, without a transfer argument.",
    "repair": "Restrict F2 to the constructed process and prove simplicity directly for the supplied process: Poisson factorial moments and the union bound give dyadic collision probability at most theta^2 T^2/2^(n+1).",
    "adjudication_ref": [
      "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u51.json"
    ],
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1806.00221"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "defect_id": "statistical-models-experiments-62-step5-u51-rasmussen-author",
    "run": "statistical-models-experiments-62",
    "at": "2026-10-14T23:31:27.191940+00:00",
    "class": "accuracy",
    "subclass": "citation-misattributed",
    "severity": "polish",
    "location": "frontmatter",
    "subject": "ex-poisson-and-history-dependent-temporal-intensities",
    "caught_at_stage": "5-adjudicate",
    "caught_by_role": "final-adjudicator",
    "disposition": "fixed",
    "finding": "The assigned sources.references calls the author Joseph G. Rasmussen. The consulted title page of arXiv:1806.00221 identifies Jakob Gulddahl Rasmussen.",
    "repair": "Corrected the assigned item and its owning manifest source title; other draft occurrences are reported for their owners.",
    "adjudication_ref": [
      "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u51.json"
    ],
    "uncertain": false,
    "source_urls": [
      "https://arxiv.org/pdf/1806.00221"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "lem-holm-rejection-events-are-measurable",
    "severity": "nonfatal",
    "status": "fixed",
    "finding": "The cited algorithm restricts inputs to a fixed null-valid family, while this lemma assumes only measurable p-value statistics. This is a nonfatal interface omission: the existing permutation/prefix-cell proof uses only finite real comparisons and proves the broader claim. Explicitly defining the same numerical formulas on all measurable inputs resolves the mismatch without adding validity assumptions or weakening measurability.",
    "correction": "Statement now defines the numerical rule on arbitrary measurable inputs and establishes totality; F3 explicitly distinguishes this extension from the null-valid error-control procedure."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "id": "thm-bonferroni-familywise-error-control",
    "status": "route-to-frontier-owner",
    "owner_batch": "52",
    "published": false,
    "path": "items/thm-bonferroni-familywise-error-control.md",
    "finding": "Verified the Step-4 digest alert against the current carrier, which is draft rather than published. Its Statement ends: This is strong FWER control; it is not an FDR guarantee. With the stated FDP convention, 0 <= V_theta/(R vee 1) <= indicator{V_theta >= 1}, so taking expectations gives FDR_theta <= FWER_theta <= alpha. The negative FDR clause is therefore incorrect; the FWER proof and the Holm consumer use are sound.",
    "affected_use": "The final sentence of the Bonferroni Statement denies an FDR guarantee despite its proved strong FWER bound. Holm uses only the valid FWER conclusion in F5 and step 2.1.",
    "invalidated_claim": "The clause it is not an FDR guarantee contradicts FDR <= FWER under the supplier definition.",
    "minimality": "The owning frontier lane should replace the negative FDR clause with the implication FDR <= FWER <= alpha, retaining the full FWER statement and proof. Any resulting Statement change requires its owner to examine direct consumers. No edit or adjudication of this unassigned item was performed.",
    "route": "Separate out-of-lane finding to batch-52 frontier owner; no published-maintenance repair is licensed or needed for its current draft status.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u56-1",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:00Z",
      "class": "accuracy",
      "subclass": "citation-inaccurate",
      "severity": "nonfatal",
      "location": "definition",
      "subject": "def-exact-selective-confidence-set-for-a-functional",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "reason": "The cited published confidence-set definition explicitly requires a nonempty parameter set; the experiment definition does not. The unqualified identification with that interface therefore omits a domain caveat. The new formula itself is well-defined even for an empty parameter set, where its universal requirements are vacuous, so this is nonfatal. The repair preserves that domain and identifies the nonempty case through D(y)={mu in M:tau(mu) in C(y)}: for every mu, its membership section is exactly the original section and hence has identical measurability and coverage.",
      "adjudication_ref": [
        {
          "id": "def-exact-selective-confidence-set-for-a-functional",
          "model": "gpt-6-luna",
          "context_sha256": "429c97f18eb9998066341aa877eb170d4624fa28512af6836b205afa9b932cd5",
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u56.json"
        }
      ],
      "evidence": [
        {
          "path": "items/def-exact-selective-confidence-set-for-a-functional.md",
          "locus": "Definition"
        },
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u56.json"
        }
      ],
      "prevention": {
        "kind": "none",
        "ref": "No new mechanical prevention claimed."
      },
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "sme62-step5-initial-r1-u56-2",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:00Z",
      "class": "accuracy",
      "subclass": "missing-hypothesis",
      "severity": "fatal",
      "location": "definition",
      "subject": "def-polyhedral-selective-normal-pivot",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "reason": "The definition asserted a selected conditional-law conclusion without positive selection probability. With n=1, eta=1, A=(1,-1)^T and b=(0,0), S={0}, Z=0 and L=U=0; the nondegenerate normal density gives P_mu(S)=0 and Delta_vartheta(0)=0. Thus conditioning by P_mu(S) is undefined and the claimed selected probability is unavailable. The total zero-extended statistic is nevertheless well-defined. The repair qualifies only the conditional-law clause by P_mu(S)>0 and preserves every pivot formula and the null-event extension.",
      "adjudication_ref": [
        {
          "id": "def-polyhedral-selective-normal-pivot",
          "model": "gpt-6-luna",
          "context_sha256": "dff320fe509dac31a307e16318f676df46d1e978ca4e157f538d8ba07baa5824",
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u56.json"
        }
      ],
      "evidence": [
        {
          "path": "items/def-polyhedral-selective-normal-pivot.md",
          "locus": "Definition"
        },
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u56.json"
        }
      ],
      "prevention": {
        "kind": "none",
        "ref": "No new mechanical prevention claimed."
      },
      "repair_cost": "inline-fix"
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "The direct dependency/reference inventory contains only the three draft batch-56 frontier consumers recorded in downstream_reviews. No published or outside-frontier consumer is affected, and no potentially defective published item was identified in the relevant supplier interfaces. No separate maintenance edit is proposed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "run": "statistical-models-experiments-62",
      "phase": "initial",
      "round": 1,
      "unit": "59",
      "at": "2026-10-14T23:32:16.190053+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-sequential-likelihood-ratio-test-error-bounds",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "post_sha256": "f6c4b4d8e989146c4021c2aadc2dd7e5bfc63e31beadedef871a8f3a2bbec7de",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u59.json",
          "note": "Local proof repair and focused validation; no independent repair acceptance claimed."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "defect_id": "sme62-step5-initial-r1-u59-real-density",
      "finding": "Original steps 1.1/2.1/4.1 treated possibly infinite RN representatives as real conditional-expectation inputs and test martingales. Steps 1.1 and 2.1 now construct finite measurable M_t with unchanged density event integrals, mean one and adjacent-time martingale identities; step 4.1 applies Ville to M."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "record": {
      "run": "statistical-models-experiments-62",
      "phase": "initial",
      "round": 1,
      "unit": "59",
      "at": "2026-10-14T23:32:16.190053+00:00",
      "class": "accuracy",
      "subclass": "unsupported-inference",
      "severity": "nonfatal",
      "location": "proof-step",
      "subject": "thm-sequential-likelihood-ratio-test-error-bounds",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "post_sha256": "f6c4b4d8e989146c4021c2aadc2dd7e5bfc63e31beadedef871a8f3a2bbec7de",
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u59.json",
          "note": "Local proof repair and focused validation; no independent repair acceptance claimed."
        }
      ],
      "uncertain": false,
      "source_urls": [],
      "familiar": true,
      "defect_id": "sme62-step5-initial-r1-u59-terminal-null-union",
      "finding": "Original step 5.1 asserted literal containment of the lower terminal event in the reciprocal crossing event although R_t=0 when L_t=0. Steps 2.2 and 5.1 explicitly remove the countable union of measurable zero/infinity sets, null under both laws, and state both terminal containments modulo that union."
    }
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "append",
    "text": "Step 5 initial round 1 unit 59: repaired only draft thm-sequential-likelihood-ratio-test-error-bounds. Published real-process, conditional-expectation, change-of-measure and Ville interfaces were checked; their hypotheses are now satisfied by normalized M and reciprocal R. Its original Statement is unchanged, so there is no supplier-interface event, downstream maintenance assignment or published-consumer defect from this repair. The two nonfatal proof defects and focused checks are recorded in research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u59.json. No published item was edited and no independent acceptance is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u60-a1-attribution",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:28:57Z",
      "class": "accuracy",
      "subclass": "citation-inflated",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "lem-gaussian-exponential-mixture-integral",
      "caught_at_stage": "4-judge",
      "caught_by_role": "unknown",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "adjudication_ref": [
        {
          "id": "lem-gaussian-exponential-mixture-integral",
          "model": "gpt-6-luna",
          "context_sha256": "d315f25cb71332d53516669f495220e6e91ad7869ba583e175287143b0f172ba",
          "item_sha256": "8e00d1e92cf72384593c62d6e8eba11fbabd5fd4043ac78c262f1351d27dbc25",
          "judge_item_sha256": "65a17d73025c5f4c9297a06542cb0e590d1fa48cd9efd32af8889b911bfd4e20"
        }
      ],
      "evidence": [
        {
          "path": "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u60.json",
          "note": "A1 claimed conventions absent from def-axiom-of-choice. Replaced it with the axiom's actual content; actual normal-law AC assumptions and the Gaussian integral proof remain supported. The detecting model is gpt-6-luna; no matching dedicated role enum is available."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u7-icc-correlation-attribution",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:13Z",
      "class": "accuracy",
      "subclass": "citation-misattributed",
      "severity": "nonfatal",
      "location": "facts-block",
      "subject": "ex-random-intercept-intraclass-correlation",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "fixed",
      "repair_cost": "inline-fix",
      "item_sha256": "47abc640bc0308eab511883d36ec333c32f12f1635d72a1bcac54d0fd2ed72cd",
      "adjudication_ref": [
        "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u7.json"
      ],
      "evidence": [
        {
          "path": "items/ex-random-intercept-intraclass-correlation.md",
          "note": "Original F2 attributed correlation to a moments-only supplier. F2 now cites only variance/covariance; A2 explicitly defines the ratio and its positive-variance domain, and step 2.1 cites A2."
        },
        {
          "path": "items/def-moments-variance-and-covariance.md",
          "note": "The complete Definition ends with covariance and contains no correlation definition."
        },
        {
          "path": "research/statistical-models-experiments-62-batch-7.proof-contracts.json",
          "note": "F2 uses and step 2.1 inputs synchronized; stale finite-check locator corrected to step 2.1; strict focused check passed."
        }
      ]
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "append",
    "row": {
      "defect_id": "statistical-models-experiments-62-step5-initial-r1-u7-gls-circularity-false-positive",
      "run": "statistical-models-experiments-62",
      "at": "2026-10-14T23:30:13Z",
      "class": "accuracy",
      "subclass": "other",
      "subclass_note": "Rejected claim of circular dependence is false: the GLS definition uses the schema-permitted justified_by discharge, while the lemma proves positivity from rank and Cholesky without assuming estimator existence.",
      "severity": "nonfatal",
      "location": "frontmatter",
      "subject": "lem-gls-information-matrix-is-positive-definite",
      "caught_at_stage": "5-adjudicate",
      "caught_by_role": "final-adjudicator",
      "disposition": "false-positive",
      "repair_cost": "none",
      "item_sha256": "c4374860f562fd57d35dc1379b7f70a8088671b987a5e3c431fdf3899e01f547",
      "adjudication_ref": [
        "research/statistical-models-experiments-62-step5-v2/step5-v2-initial-r1-u7.json"
      ],
      "evidence": [
        {
          "path": "items/def-known-covariance-generalized-least-squares-estimator.md",
          "note": "This lemma occurs in justified_by only, not deps."
        },
        {
          "path": "items/lem-gls-information-matrix-is-positive-definite.md",
          "note": "Steps 1.1 and 2.1 prove the claim solely from full column rank and Cholesky; no GLS estimator property is assumed."
        },
        {
          "path": "SCHEMA.md",
          "note": "Sources and well-definedness schema permits this directed deps/justified_by arrangement."
        }
      ]
    }
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "ex-atomic-spectrum-versus-continuous-spectral-density",
  "ex-boundary-dominated-windows-are-not-van-hove",
  "ex-competing-event-risk-versus-cause-incidence",
  "lem-iv-observed-contrasts-equal-potential-outcome-contrasts",
  "ex-defiers-break-the-late-ratio",
  "ex-dependent-white-noise-is-not-iid",
  "ex-exclusion-violation-distorts-wald-ratio",
  "thm-exponential-and-weibull-survival-laws",
  "thm-censored-exponential-likelihood-and-mle",
  "thm-jump-hazard-survival-product",
  "ex-exponential-weibull-hazards-and-censored-likelihood",
  "thm-inverse-probability-weighting-identifies-a-causal-mean",
  "ex-extreme-ipw-weights-under-poor-overlap",
  "thm-mean-and-variance-under-biological-and-technical-replication",
  "ex-five-assays-on-one-animal-versus-five-animals",
  "lem-binary-monotonicity-excludes-defiers",
  "lem-iv-first-stage-is-complier-proportion",
  "lem-iv-reduced-form-is-complier-effect",
  "thm-wald-identifies-the-complier-average-effect",
  "ex-heterogeneous-effects-late-differs-from-ate",
  "ex-kaplan-meier-hand-risk-set-and-support-loss",
  "ex-logrank-crossing-hazards-zero-score",
  "thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law",
  "ex-poisson-and-cox-count-laws-on-a-finite-window",
  "lem-homogeneous-poisson-ordered-event-time-density",
  "ex-poisson-and-history-dependent-temporal-intensities",
  "ex-positivity-failure-prevents-standardization-and-ipw-identification"
]


