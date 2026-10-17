# Step 5 adjudicate: initial, round 1, unit 49

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-49-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u49.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"49",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:thm-qsm-dt-detailed-balance-gap, 7:def-qsm-dt-monitored-chain, 8:post-qsm-dt-effective-bath, 8:thm-qsm-dt-monitored-transport, 9:ex-qsm-dt-qubit-record-diffusion.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-qsm-dt-detailed-balance-gap",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: F4 overstates its supplied interface by attributing the trace-norm dual formula to that theorem; the interface states channel norm contractions, not this formula. Step 7.1 relies on the unsupported restatement.",
      "context_sha256": "a7bfbdc8ad0d839235ae3a9fb32911601dbd8f86f339c4ff59ebeb7557411928",
      "item_sha256": "f1755a7700ca082ec030d91c9bc910face7f0d12d80ea7836ae5ec123e86a601",
      "at": "2026-10-17T08:09:26.130Z"
    },
    {
      "id": "def-qsm-dt-monitored-chain",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 allows w_ab=0 on nonedges; connectedness does not make every rate positive. Then L_ab|a⟩=0, so the claimed normalized post-click state divides by zero. Restrict that claim to positive-rate, possible clicks.",
      "context_sha256": "1ca908e31ceb278d39d11db5e269ca22b0176bd93c43e795d678581abb932124",
      "item_sha256": "d70920fd85150fd618587b0b61ae9c84504f0613c4a904c3ac111000cc99af5c",
      "at": "2026-10-17T08:08:59.389Z"
    },
    {
      "id": "post-qsm-dt-effective-bath",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For the Gibbs-jump record law, ρ₀ may be any density matrix, but [[def-qsm-dt-monitored-chain]] specifies outcomes only from an energy eigenstate and gives no initial label rule for general ρ₀. The record prediction is undefined for allowed preparations.",
      "context_sha256": "36d92815f92e740fccce3ed3f0d3c390dac324f03d045e6b26a8b3f5504bed22",
      "item_sha256": "39393fe34564238b77189f5200cbb6b15eabafd6d78e1f5924bb4c2ce370e5b9",
      "at": "2026-10-17T08:09:35.531Z"
    },
    {
      "id": "thm-qsm-dt-monitored-transport",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 claims the monitored-chain supplier’s Ionescu–Tulcea construction requires full AC, but the supplied interface states neither that construction nor any choice requirement. This is an unsupported dependency claim.",
      "context_sha256": "a689a1587c3d2b408ab2d1bf98f6f22dae1c7c595859012349ee135a442b2e1b",
      "item_sha256": "d083a7f801456ddc083804d1b97efa4b430d782035431bf1181f884874b25ebe",
      "at": "2026-10-17T08:09:20.490Z"
    },
    {
      "id": "ex-qsm-dt-qubit-record-diffusion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The symbol v_0 names both the speed scale and the state-0 velocity v_a. At a=0, the definition demands v_0=v_0(1−z_eq), generally false; the variance formula is also ambiguous. Rename the scale.",
      "context_sha256": "eabd06abbba75063e1158fd871f6e18fa74584a13dfbef082c059d775e1c6bf9",
      "item_sha256": "ac2c2458cec179f55176890980b5f5ef1115c9141fe92514ac73ca28aaddd437",
      "at": "2026-10-17T08:11:23.973Z"
    }
  ]
