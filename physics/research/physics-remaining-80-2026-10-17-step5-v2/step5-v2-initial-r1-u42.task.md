# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"42",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-qsm-diagonal-ising-interaction, 7:lem-qsm-commuting-local-dynamics, 11:thm-qsm-chain-kms-uniqueness, 11:thm-qsm-ising-high-temperature-kms-uniqueness.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qsm-diagonal-ising-interaction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The CSM interaction/specification interfaces allow only finite lists of fixed translated potentials, but this item allows arbitrary site-dependent h_i and J_ij. Those dependencies do not license its asserted DLR-specification interpretation.",
      "context_sha256": "e3560bd6900ffa668f7bc345103eefcc0105b476f87dd7d93e91d18a24e32d27",
      "item_sha256": "29875c3651eca5ec16b2f52c5b9ac935e77966478c29e71998a8b606c41facf6",
      "at": "2026-10-17T08:07:07.712Z"
    },
    {
      "id": "lem-qsm-commuting-local-dynamics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited spin-dynamics convention uses finite-volume evolution e^{itHΛ}Ae^{-itHΛ}. The proof instead uses e^{itHΛ/ℏ}Ae^{-itHΛ/ℏ}; for arbitrary ℏ this changes the time scale, so the limit theorem does not yield the claimed formula except when ℏ=1.",
      "context_sha256": "8fb84321b005acc905c3c6a9fd80a083b58645e01d9b7d2c02f142cc3b998c99",
      "item_sha256": "bbeb4da64a6076b342994ddde735be23930bf197f4affb52c08715eb3b022c15",
      "at": "2026-10-17T08:06:35.961Z"
    },
    {
      "id": "thm-qsm-chain-kms-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims uniqueness for one-dimensional Ising KMS states generally, but the proof covers only the diagonal longitudinal model and expressly excludes transverse-field terms.",
      "context_sha256": "823fdda1b215d4b65b1a492751dbb8ef6e3bd68e964533dbf69c1ba9346600ca",
      "item_sha256": "d843c560f18b7dfa93e48b235d6badcbe1ee159a978952d2dd087568bd6287bc",
      "at": "2026-10-17T08:06:44.870Z"
    },
    {
      "id": "thm-qsm-ising-high-temperature-kms-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The KMS–DLR bijection [F2] requires ℏ>0 and a physical-time strip of width βℏ, but the statement and facts omit ℏ. Step 2 therefore lacks a stated hypothesis needed to transfer DLR uniqueness to KMS uniqueness.",
      "context_sha256": "2ccae70d18f38d8ab655985b80e1bfca76e6a8cab8c2e9692406df6bbf7d1924",
      "item_sha256": "1b42f7887d40e9ed576ba66b0f9a2e0ff16c32cdde139680d51876b7c49add46",
      "at": "2026-10-17T08:07:01.479Z"
    }
  ]
