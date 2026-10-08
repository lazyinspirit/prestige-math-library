# Step 7 adjudicate: initial, round 1, unit 4

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-43-complex-representation-15-step7-v2/step7-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-43-complex-representation-15",phase:"initial",round:1,unit:"4",input_sha256:"213f49668fe9a1811f00252dbb37991fb060239cf233142dbaebe75405f52be9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-43-complex-representation-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras, 0:lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups, 1:lem-sl2-r-has-no-invariant-probability-on-the-projective-line, 2:thm-property-t-implies-compact-generation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The zero-algebra clause is false under the stated definition: the zero representation on H={0} is nondegenerate and has no nonzero proper invariant subspace, hence is irreducible. The family in the claimed empty intersection is therefore nonempty.",
      "context_sha256": "24ac8ee7623a7536973c8666864c8dc46742253b5e45e6180d18ea07af85fb4c",
      "item_sha256": "0941c835d05d9137d46e71e6740a1d7ff3e42c10b372ee461c5ee6613cc31317",
      "at": "2026-10-08T06:45:45.498Z"
    },
    {
      "id": "lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The supplied interfaces index matrix rows and columns by n={0,...,n−1}, but this item uses 1,...,n without declaring a reindexing. Consequently e_{i,n} and E_{i,n}(t), used in the statement and elimination, are undefined in M_n.",
      "context_sha256": "6525920b25fda1a9f4aa7363d323116a12eba210803a5377e019fd4b719679de",
      "item_sha256": "bbffec8bbb46a7dcfe5ae3dbb4ad224331c36f799589cec55c69d12bdab8a572",
      "at": "2026-10-08T06:45:17.312Z"
    },
    {
      "id": "lem-sl2-r-has-no-invariant-probability-on-the-projective-line",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title omits the essential distinct-fixed-lines hypothesis and is false as written: Dirac mass at infinity is invariant under both [[1,1],[0,1]] and [[1,2],[0,1]], two distinct nonidentity unipotents.",
      "context_sha256": "e7a92893c61e0aec9552f7b3c1360410ea83e0d1f8e7d05e1c7685b539fbe702",
      "item_sha256": "fb57c8ed2f5442e550dda1c71fc4c5db8182374b4e51d857285562e62fe11f65",
      "at": "2026-10-08T06:45:28.830Z"
    },
    {
      "id": "thm-property-t-implies-compact-generation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies compactness to a cover by ambient open subgroups. The supplied compactness interface explicitly requires citing lem-compactness-of-a-subspace-is-ambient for this use; that citation is absent.",
      "context_sha256": "619de5deb1f9c83c9559c72bda2a66c5bf7e40bef7b0917ae71f10be5d878a25",
      "item_sha256": "3fe916f69b7b019cad816cfd01175818854cb5187d029077df4d6ed193782a4f",
      "at": "2026-10-08T06:45:08.985Z"
    }
  ]
