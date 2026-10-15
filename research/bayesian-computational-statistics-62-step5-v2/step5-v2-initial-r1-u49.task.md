# Step 5 adjudicate: initial, round 1, unit 49

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-49-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u49.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"49",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-abc-augmented-tolerance-target, 4:ex-abc-vanishing-acceptance, 5:ex-abc-sequential-tolerance-schedule-and-rn-weights.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-abc-augmented-tolerance-target",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "`justified_by` cites a lemma that assumes this definition and only identifies its parameter marginal; it neither establishes well-definedness nor avoids a circular dependency.",
      "context_sha256": "0259ed4c2214e18df776b8230899aa64f586f921bf75f70838822203277ab19a",
      "item_sha256": "73ac9982fe8ec6e7e99b9f9bacfdb1647348f31e5e1879dd7905aee512fd17cf",
      "at": "2026-10-15T16:20:11.957Z"
    },
    {
      "id": "ex-abc-vanishing-acceptance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MH interface defines α only μ-a.e. and notes versions can change P at π-null starts. Every fixed state here has π-mass zero; modifying f,g on {x}×Y (a λ₀-null set) can make α=0. Thus the claimed per-state acceptance probability 2ε is not licensed.",
      "context_sha256": "4f410de94af9c7a9ff51543bfcfbdee1882b0a88dc0ed67454681d5f8686310b",
      "item_sha256": "f4fc3c75775adf25bda227ec648f2b1ef2938f4b1eaf58b2c76011949117359f",
      "at": "2026-10-15T16:20:33.554Z"
    },
    {
      "id": "ex-abc-sequential-tolerance-schedule-and-rn-weights",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F3] misstates the theorem: the expected unnormalized weighted law is γ₁, while the current tolerance target is π₁=γ₁/Z₁. Here Z₁=7/8, so they differ.",
      "context_sha256": "76eb2fb5bb839d1571c62bf1536d488f1fc560e86f7d80e1de46faeeb11daac5",
      "item_sha256": "f4ee7597b17f6efe88c3a3dd7579e625f5167e86dddd4c26159151d394fd8ced",
      "at": "2026-10-15T16:20:30.580Z"
    }
  ]
