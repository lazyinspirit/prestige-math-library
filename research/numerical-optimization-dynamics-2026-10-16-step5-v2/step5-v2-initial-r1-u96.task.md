# Step 5 adjudicate: initial, round 1, unit 96

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-96-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u96.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"96",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-parameterized-parabolic-variational-problem, 3:thm-elliptic-fe-gradient-error-in-energy-norms, 4:thm-implicit-rk-stage-parameter-sensitivity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-parameterized-parabolic-variational-problem",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The reduced objective need not be defined: differentiability alone does not ensure the running integral is finite. For example, L(t,v,θ)=1/t is smooth on (0,T) and independent of v,θ, but its integral diverges. Require integrability or finiteness along states.",
      "context_sha256": "592232b72c291a7f3f3a451dd5dc76d7fa087b4addf4a4a418ff5856f8cdb782",
      "item_sha256": "c728caa82f8f7fb882116c36369b457012f55847a96bf1aa34b2facacc507220",
      "at": "2026-10-17T01:56:49.413Z"
    },
    {
      "id": "thm-elliptic-fe-gradient-error-in-energy-norms",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 fails for complex sesquilinear forms: with the supplied linear-first convention, a†(v,w)=a(w,v) is conjugate-linear in its first argument, so Céa/Strang do not apply. Use the conjugated transpose or explicitly restrict the claim to real spaces.",
      "context_sha256": "8e1a6590318b20c9db6958efc16a7ca70230491b341b644c1102a4278f1f874a",
      "item_sha256": "d373811f87eafe133ab785f55b9395a1080df9d5cdda3dd1702603377a253c50",
      "at": "2026-10-17T01:57:16.049Z"
    },
    {
      "id": "thm-implicit-rk-stage-parameter-sensitivity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The update is written with coefficient \\mathbf1_b^T, but its derivative uses b^T. The dependency defines the RK update with weights b_i; unless \\mathbf1_b is explicitly b, the displayed derivative is wrong (e.g. one stage with b_1=2).",
      "context_sha256": "37f40aa0c4d76dbb9ea045ee7afedd5052afe0a68d75b5a3314dcb57bb88320b",
      "item_sha256": "004132076f436c599e362a467d84de39ec66aeb53694827c0edcb5d8f72d5a48",
      "at": "2026-10-17T01:56:57.541Z"
    }
  ]
