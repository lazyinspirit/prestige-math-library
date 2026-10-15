# Step 5 adjudicate: repeat, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-repeat-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"repeat",round:1,unit:"18",input_sha256:"aba240f57e51ec5f6d8384509f57660ada7ed8d033fdd08d44b54447b4ae7505",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:lem-tdmath-periodized-empirical-field-stationary-density, 8:thm-tdmath-interval-event-ensemble-limit, 8:thm-tdmath-periodic-fixed-n-limit.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-tdmath-periodized-empirical-field-stationary-density",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 drops the box-measure theorem’s explicit Axiom of Countable Choice hypothesis. Neither the statement nor supplied premises assumes it, so this citation does not justify the volume normalization used in steps 1.1–2.1.",
      "context_sha256": "c5c9daf711d12bf27d6ca97548aed0b0166130eb8fe7342f8435addd3fd3c28f",
      "item_sha256": "7bd20ca45e6e1c845598ac87f97095fff311ca38c5d6c59aa6d2b04810268d74",
      "at": "2026-10-14T23:29:29.058Z"
    },
    {
      "id": "thm-tdmath-interval-event-ensemble-limit",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 requires entropy-preserving finite-energy approximations of every finite-entropy law in K_B. F9's supplied interface does not provide this claim, so extending the supporting inequality to all of K_B is unsupported.",
      "context_sha256": "ad5fa1ea2d574bc5b7b9fb4a5a0addbb54fcba182ab323bead290da26af710a4",
      "item_sha256": "f2b18d4d38c0c6a180603ca007bacbc5a5a9e9f008dbba43a4a812202494c426",
      "at": "2026-10-14T23:31:37.725Z"
    },
    {
      "id": "thm-tdmath-periodic-fixed-n-limit",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 claims that local grand limits minimize the stationary variational functional. The supplied continuum-variational-pressure interface establishes pressure equality and a variational minimum, but contains no local-limit conclusion. This restatement exceeds its supplier.",
      "context_sha256": "f0f56de4d1e88c7ea60aae59367c5094dc1da38e2d0f948dca46c2bfe4d406a8",
      "item_sha256": "860cad0e772ec1a3038d9e6cf3e52a05d3d6a8d1b41aeaf3d2a401cad375c2d3",
      "at": "2026-10-14T23:31:31.293Z"
    }
  ]
