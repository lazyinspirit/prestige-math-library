# Step 5 adjudicate: repeat, round 1, unit 33

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-33-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u33.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"33",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:def-cm17-continuum-body-and-units, 10:def-cm17-traction-and-stress, 10:ex-cm17-spring-chain-limit-numbers, 16:rem-cm17-boundary-regularity-and-scope.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm17-continuum-body-and-units",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Section (d) asserts covariance of local and integral mass/momentum equations and an isotropic strain–stress law without defining them or citing suppliers that do. The supplied kinematic interfaces do not license these unspecified dynamical claims.",
      "context_sha256": "5022e8b592674ffe5465160d52a6db22a0aa38e8113ec641e0d361bdd0b3347f",
      "item_sha256": "99e168fed45d719895213d5b9f3b4a511dcfab17379ddc8da6148eb82bfc9eab",
      "at": "2026-10-13T09:24:43.291Z"
    },
    {
      "id": "def-cm17-traction-and-stress",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The map ρb:U→R³ is ill-typed: the density supplier defines ρ on 𝒰, but U need only contain a swept region and may extend outside 𝒰. Require U⊆𝒰 and restrict ρ, or explicitly supply a density on U.",
      "context_sha256": "9b1af5f6287f7f095fa6082c4e28223f2a6301351e0682cfc5c239f2106c736d",
      "item_sha256": "0f04ea92385fa6bfaae4f9cd2074b6fe09bbbce18feee0f35bf937f1ab9c305c",
      "at": "2026-10-13T09:24:49.968Z"
    },
    {
      "id": "ex-cm17-spring-chain-limit-numbers",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "physical_scope incorrectly attributes an O(a^2) interpolation bound to the theorem. Its bound is (C/2)a^{3/2}t^2+Aa^2/8, which is only O(a^{3/2}) for fixed t>0. Distinguish this from the sharper O(a^2) error for these particular standing-wave data.",
      "context_sha256": "ae20148738f9d7a077cbeba3cd4d99a0aac75f28bdebf71170bbb7bde84c4bed",
      "item_sha256": "ad37690e5c48548046817fa4843e9a7f60eb3f264118512b7c55c9009afdfde8",
      "at": "2026-10-13T09:29:41.573Z"
    },
    {
      "id": "rem-cm17-boundary-regularity-and-scope",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final bullet wrongly makes momentum-equation kinematics and mass balance prerequisites of all 3D deductions. The linear-elastic interface instead adopts reference momentum balance and explicitly requires no finite motion or positive-Jacobian map.",
      "context_sha256": "70ad8cd6a32e01d51749f6dc79fb6d38d78814b8305ffb2f48f276db664bfd3a",
      "item_sha256": "012b4676d98c879076838daf61ae159bccc176042db43acc19b7aa25b7747808",
      "at": "2026-10-13T09:37:19.416Z"
    }
  ]
