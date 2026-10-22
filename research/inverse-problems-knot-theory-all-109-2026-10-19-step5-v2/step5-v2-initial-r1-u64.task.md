# Step 5 adjudicate: initial, round 1, unit 64

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-64-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u64.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"64",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:def-based-string-link-and-labeled-link-peripheral-system, 3:lem-maximal-abelian-cover-link-exterior-retraction, 3:lem-string-link-exterior-homology-and-meridian-maps, 5:alg-abelian-cover-chain-model-from-triangulated-exterior.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-based-string-link-and-labeled-link-peripheral-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Closure is underspecified: no outside joining arcs are chosen. Even the trivial one strand can close to different knots by choosing different exterior arcs, so this does not define a unique closure.",
      "context_sha256": "2bef63d9d9cf4f87f5d764bfa4faf9f5c36fb6c3ee5155c0bce8b2a66e9a7750",
      "item_sha256": "bbcc7039774f8bd78f1825d7d91939dc6c3945b594615901899b0f028c5b077b",
      "at": "2026-10-21T15:14:04.594Z"
    },
    {
      "id": "lem-maximal-abelian-cover-link-exterior-retraction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says the maximal abelian cover retracts to the compact exterior E_L, which lies in X_L, not X_L^ab. The proof retracts X_L to E_L and X_L^ab to p^{-1}(E_L).",
      "context_sha256": "41b28610812bfba6a8f7d0b9d26ccda4fb14f7adea8d3a28cebef84c9e1af697",
      "item_sha256": "fe2b7a0cf83bfd4f8537aaec60c470ec35d974419fc94db31103933ab8990fc8",
      "at": "2026-10-21T15:13:25.245Z"
    },
    {
      "id": "lem-string-link-exterior-homology-and-meridian-maps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates the supplied pair-LES interface: it gives exactness but not naturality. Step 5.1 relies on naturality to identify endpoint relative disk classes with tube classes, so the end-meridian maps are not established by the cited dependencies.",
      "context_sha256": "3a038ce17ca3351092a2027514c5a91ae71a0a795bffa1c358bdf91049b82262",
      "item_sha256": "bdb69c7351a6006130e3aac375d12b9219fd30d4c66bcf8adf1112ddcc69efd3",
      "at": "2026-10-21T15:14:11.952Z"
    },
    {
      "id": "alg-abelian-cover-chain-model-from-triangulated-exterior",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition claims a “main theorem on this page” proves the matrices form a chain complex and have first homology A_L, but no such theorem or proof is included. Algorithm correctness must be established in a separate proved result.",
      "context_sha256": "c2589999726385334429c4518f9bdefb50edae7b554716b8b5f12ab528737cbc",
      "item_sha256": "a255d22cd810a9c79ed6a00b910136e69d4233c104f9251da3dea595825c300f",
      "at": "2026-10-21T15:14:16.877Z"
    }
  ]
