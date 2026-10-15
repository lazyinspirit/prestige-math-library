# Step 5 adjudicate: initial, round 1, unit 15

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-batch-15-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/bayesian-computational-statistics-62-step5-v2/step5-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"bayesian-computational-statistics-62",phase:"initial",round:1,unit:"15",input_sha256:"4d5c183c713ad11edc9a59026b00de3757557c78741e0adfc236cd5236e91cc8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run bayesian-computational-statistics-62 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:thm-standard-gaussian-log-sobolev-inequality, 1:lem-uncorrelated-joint-banach-gaussians-are-independent, 1:thm-standard-gaussian-lipschitz-concentration, 2:ex-cylinder-gaussian-process-is-not-banach-valued, 6:lem-banach-gaussian-rkhs-unit-ball-is-compact.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-standard-gaussian-log-sobolev-inequality",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Axiom_use and [F3] misstate the integration-by-parts dependency: its supplied interface assumes DC and countable choice, not AC. AC is required by the Gaussian suppliers.",
      "context_sha256": "55ff8ff9728a147a4a37113cafd27b71b723a734bf9b444590ef2dc9ae3b5851",
      "item_sha256": "15f12419c87feb39c44a543e9df74415bb1b495939653c01beeb2220951a5896",
      "at": "2026-10-15T16:10:26.164Z"
    },
    {
      "id": "lem-uncorrelated-joint-banach-gaussians-are-independent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates the supplied interfaces: the product-measure theorem assumes sigma-finiteness, while the countable norming lemma assumes HB and countable choice. AC supplies HB separately; it is not an explicit assumption of those interfaces.",
      "context_sha256": "cce4637761c4956cc340f9814158e65c0f56cde8a7d97059ab7ea7909fd49477",
      "item_sha256": "e98ec23d3a85ef85a10d26bde16ffe8f7f4c2ccb61cbad15ded189d4d1534482",
      "at": "2026-10-15T16:10:23.358Z"
    },
    {
      "id": "thm-standard-gaussian-lipschitz-concentration",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates the Gaussian log-Sobolev dependency: its interface requires C² functions with bounded first and second derivatives, but F1 asserts the inequality for any smooth bounded positive g bounded away from zero. That restatement is not licensed.",
      "context_sha256": "090c2ab33ac1b6b3b54c97c1094c5b90775a0ec01cbf600834a24ff621c0bfd6",
      "item_sha256": "fa7941bf406f4c5d20199311cea98ea844cdce9a8ef198656ea7ffb87ff4c758",
      "at": "2026-10-15T16:05:06.430Z"
    },
    {
      "id": "ex-cylinder-gaussian-process-is-not-banach-valued",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 identifies each identity-covariance Gaussian marginal with the independent product law, but the supplied multivariate-normal interface defers uniqueness. F2 says the product is Gaussian, not that it equals the GP marginal; independence needed in 2.1 is unproved.",
      "context_sha256": "48464feda1edd811d5f9284e2332909783679d0f999dbff6c68cac0c24e671fc",
      "item_sha256": "ad70ccd2137881c8385425253228a63e029c9fe6e66ba5c6c2f41665c4cebc63",
      "at": "2026-10-15T16:10:09.366Z"
    },
    {
      "id": "lem-banach-gaussian-rkhs-unit-ball-is-compact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says AC is inherited from the translation and tightness suppliers, but both merely assume AC; neither supplies it. AC is available from the Statement, so revise A1 to state that premise and derive countable choice from it.",
      "context_sha256": "3bb661699adb6b069fb4a775a406e3760730f900fd32c46b74067a4e9beb00a6",
      "item_sha256": "7cea98eb555c2af8298f694c3ee343ee98c306d4735a27caff8278375706232b",
      "at": "2026-10-15T16:05:11.814Z"
    }
  ]
