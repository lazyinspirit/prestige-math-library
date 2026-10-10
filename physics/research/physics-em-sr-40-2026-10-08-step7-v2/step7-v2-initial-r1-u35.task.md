# Step 7 adjudicate: initial, round 1, unit 35

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u35.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"35",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-em-rectangular-transverse-mode-completeness, 17:def-em-guide-cavity-geometry, 18:pthm-em-rectangular-mode-candidates.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-em-rectangular-transverse-mode-completeness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 incorrectly multiplies normalized Fourier coefficients by the norms when returning to the original system; they must be divided by the norms. For L=4 and f=1, its rule gives 4c_0 instead of c_0.",
      "context_sha256": "8c772889840da7ee7dcf702c8a5b6d79fd03967c325f9bd82fc6debaf622f70c",
      "item_sha256": "1b09d7077b36ba168ec17f5c218b28ac2e143b77d4b1869c2669d9975cc7e210",
      "at": "2026-10-10T04:18:19.248Z"
    },
    {
      "id": "def-em-guide-cavity-geometry",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (b): E=B=0 inside the conductor does not imply D=H=0 without a constitutive assumption. The cited theorem gives sigma_f=n·[D] and K_f=n×[H]; replacing these jumps by minus the filling traces requires additional conductor-side assumptions.",
      "context_sha256": "14a195d123c4a14880bae2c692886b2aa380e224936b5a57b17d00504e27024d",
      "item_sha256": "80874eea9343aa39f328702c77fac169403f3cf95d44b0b862a9af8bdef97e4a",
      "at": "2026-10-10T04:18:45.108Z"
    },
    {
      "id": "pthm-em-rectangular-mode-candidates",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The SI field formulas lack dimensional normalization: h_mn and e_mn are dimensionless, yet TE sets H_z=h_mn (requiring A/m) and TM sets E_z=e_mn (requiring V/m). No unit-amplitude convention or dimensionful factors are declared.",
      "context_sha256": "3fabfbf6585d4fa5744f94d793b4146c40ffad6c7bebf1229c61a56e668ccff4",
      "item_sha256": "39d1e0c17b8169750c66135e9422ada8d85803862f15080200bcd984b06a4ae6",
      "at": "2026-10-10T04:18:32.850Z"
    }
  ]
