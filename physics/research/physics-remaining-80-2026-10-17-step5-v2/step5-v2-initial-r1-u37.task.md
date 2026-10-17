# Step 5 adjudicate: initial, round 1, unit 37

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-37-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u37.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"37",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-qsm-local-matrix-net-completion, 1:lem-qsm-local-subsystem-trace-tests, 2:cex-qsm-local-local-global-distinction, 3:def-qsm-local-coercive-regulated-model.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qsm-local-matrix-net-completion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item names A^* as “its adjoint” but neither defines it nor cites a supplied definition. The proof relies on adjoint identities, leaving this operation unjustified under the required explicit-definition standard.",
      "context_sha256": "0d2c9ab06f2070c564f1ece1e51d1c6e0db3072721e2a0777ad311029a2ab239",
      "item_sha256": "633604d8be876e8c718882f6b24d5a966afedb88b7732fa323c1e232cd13fab5",
      "at": "2026-10-17T08:05:28.111Z"
    },
    {
      "id": "lem-qsm-local-subsystem-trace-tests",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal scope defect: the supplied qsm definition defines finite tensor densities and POVMs only on V_N=V^{⊗N}. The item assumes arbitrary tensor registers V_A,V_B, without requiring V_A⊗V_B and V_A to lie in those domains.",
      "context_sha256": "11f1ace80c2dea87d089924dc9c3812c74db781b29479fe9ecb0ec3ffc811f6c",
      "item_sha256": "dc27ecd00376f99d5c08ce1544feb21d489548e641ce3480a03ab1ebfbcaf7e6",
      "at": "2026-10-17T08:05:25.284Z"
    },
    {
      "id": "cex-qsm-local-local-global-distinction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 and the statement call the POVM trace-pairing gap a probability gap, but F2 supplies only mathematical trace pairings and does not adopt the Born rule; this mathematics item has no such premise.",
      "context_sha256": "b097f5df11da9cd7f1028dde0d80ce97b5bd9e14209c182ae0b0bcfaa58b955f",
      "item_sha256": "b7eee6ae0f0f59bad19ac6bf8f7a367bf825f6ef459436d1ff4d3f3dcb317848",
      "at": "2026-10-17T08:05:43.800Z"
    },
    {
      "id": "def-qsm-local-coercive-regulated-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypotheses allow V(q)=|q|² with uncoupled modes, a free harmonic-oscillator model; they require neither nonlinear terms nor mode coupling. Thus “interacting” in the title overstates the defined class.",
      "context_sha256": "4faa04e02769917f955e2aaba0dc66b94b6849ce2827be398903a98a3a4217de",
      "item_sha256": "2b8a66a081bb21376e4d4b747ea4a7cd0b8986c221b2484080cdd5d2543e7e5a",
      "at": "2026-10-17T08:05:56.772Z"
    }
  ]
