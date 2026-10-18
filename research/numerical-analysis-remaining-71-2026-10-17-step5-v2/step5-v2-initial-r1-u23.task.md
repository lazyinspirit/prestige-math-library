# Step 5 adjudicate: initial, round 1, unit 23

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-23-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"23",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:alg-finite-budget-stable-block-reordering-for-schur-and-qz, 2:alg-finite-budget-newton-kleinman-policy-iteration, 2:alg-finite-budget-structure-preserving-doubling-for-dare, 3:lem-sda-doubling-composition-and-psd-invariants, 3:prop-inexact-newton-kleinman-safeguard, 3:thm-dare-local-residual-ball-certificate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-finite-budget-stable-block-reordering-for-schur-and-qz",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "W=0 is admissible, so the first charged validation scan may return work-budget-exhausted before labels are known. The required output still includes boundary/separation predicates and the initial inversion count, but the procedure never defines these as unavailable on that exit.",
      "context_sha256": "84b2302ca5522fcaa0bd8f5aeb530088eb17029f57e43e9cccf43ab99f21172f",
      "item_sha256": "aa037a74034fe35fa451d428eaf76d313d352d867b4324c26db42c6b186557a0",
      "at": "2026-10-18T03:16:34.956Z"
    },
    {
      "id": "alg-finite-budget-newton-kleinman-policy-iteration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the exact-mode Bartels–Stewart call omits its required pivot threshold, Schur controls, c0, and sweep budgets. None are inputs or specified defaults, so the delegated call is undefined for the stated inputs.",
      "context_sha256": "3e547104cdc4d95bed98b3b524c0abccbde655c9fa99deb30115f82ca8867841",
      "item_sha256": "ac1abb2bd636ff2c9307e9a2f624a8c187916725e0d029f87e6754f29f355956",
      "at": "2026-10-18T03:15:48.130Z"
    },
    {
      "id": "alg-finite-budget-structure-preserving-doubling-for-dare",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Finite mode never specifies how to initialize stored dyadic G₀=BR⁻¹B*. For R=[3], B=[1], the exact G₀=1/3 is not dyadic. No initialization solve or proposal covers it, yet the first M̂ requires stored G₀, so the procedure is undefined.",
      "context_sha256": "e4f83ec0ce0be0c334560ee0c92383b7166c3098cb9054a6d090751940c9d983",
      "item_sha256": "3ff5f96044f3490b581c367869acd8ad7610fa42c238fb012bc3649b16410e47",
      "at": "2026-10-18T03:14:55.288Z"
    },
    {
      "id": "lem-sda-doubling-composition-and-psd-invariants",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 expands only Phi_G(H+Y)-Phi_G(H), but calls the factors (I+HG)^-1 A* and A(I+GH)^-1 A1* and A1. The outer A* and A from f(f(X)) are missing, so the claimed composition does not follow.",
      "context_sha256": "63513346940c0fd9c7b488a377654301d91da3d0b1ed52a1763de427a8a615aa",
      "item_sha256": "862f8a19e24a35f546955420a22be2897fef912082d3ab69fab2e0106f1b0067",
      "at": "2026-10-18T03:15:09.666Z"
    },
    {
      "id": "prop-inexact-newton-kleinman-safeguard",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 misstates [[def-verified-linear-residual-certificate-data]]: its interface bounds q and a preconditioned residual r, but provides no inverse-bound κ or claim that κ bounds ‖L⁻¹‖. Reject the inaccurate dependency restatement.",
      "context_sha256": "54ed70dcae21900e1bc32bdb37ef8b4293566bee81c45d7b0dc4e837a80794e4",
      "item_sha256": "16209e6f46cda7b68a023e9d1c7b87cc4160b64f73bc1575126f535fb2b5c4e5",
      "at": "2026-10-18T03:14:53.322Z"
    },
    {
      "id": "thm-dare-local-residual-ball-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates its dependency: that definition bounds only the linear residual certificate’s q and r; it does not make the DARE’s other “verified constants” enclosure hypotheses. The rest of the proof is sound under A1.",
      "context_sha256": "c35e96d625abc8bf9613ab2fb833c8c39e6b8b2cbbe763ddf4be8593d4c79089",
      "item_sha256": "957113bda030c75c3634ca09ba4060a3894629f2c87828dc85b7b24d24277ec7",
      "at": "2026-10-18T03:15:14.596Z"
    }
  ]
