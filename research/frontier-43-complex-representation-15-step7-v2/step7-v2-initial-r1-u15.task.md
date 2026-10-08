# Step 7 adjudicate: initial, round 1, unit 15

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u15.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"15",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-ball-hardy-traces-and-evaluation-bound, 4:lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc, 6:ex-polydisc-bergman-product-and-distinguished-torus-kernel.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ball-hardy-traces-and-evaluation-bound",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 applies compactness directly to an ambient-ball cover. The supplied def-metric-compactness explicitly forbids this ambient reading without citing lem-compactness-is-intrinsic; that dependency is absent, and no intrinsic-cover argument is given.",
      "context_sha256": "15a5603271837f16dc5628b063b592eefc4df79a89ac28fdede9912ee33ed8cc",
      "item_sha256": "ca16c405f4bc29bb90b9773ad3a790bdb90b290dd686099415e12b07bccb7904",
      "at": "2026-10-08T06:49:13.870Z"
    },
    {
      "id": "lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.3 extracts a finite subcover from an ambient polydisc cover without citing lem-compactness-is-intrinsic. The supplied def-metric-compactness interface explicitly forbids this use without that citation.",
      "context_sha256": "d794f93394f89c751ed1cdba2d787de4b5fa77c65bd1116156f9484566cb085f",
      "item_sha256": "c7305315b8bbef866e28d4739b9a8b329d23a67c42d2eb6683f51637621d38b8",
      "at": "2026-10-08T06:49:16.486Z"
    },
    {
      "id": "ex-polydisc-bergman-product-and-distinguished-torus-kernel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates its supplier: the monomials are orthogonal, and only the normalized monomials are orthonormal. Indeed, the constant monomial in A²(D) has squared norm π, not 1.",
      "context_sha256": "2925348d55275a724e3f907007a3c65f23f2b58b9e2b121456067979f7edd9ac",
      "item_sha256": "2b800cf1a97da2f4501f660cf29d354e9b1f41bda5cb0af639b303053a475008",
      "at": "2026-10-08T06:49:15.498Z"
    }
  ]
