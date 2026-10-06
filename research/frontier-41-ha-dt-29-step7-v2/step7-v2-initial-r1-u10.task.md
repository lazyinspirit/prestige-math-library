# Step 7 adjudicate: initial, round 1, unit 10

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"10",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:ex-collapse-of-k-oriented-disks-realizes-degree-k, 8:cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree, 8:ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-collapse-of-k-oriented-disks-realizes-degree-k",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The asserted sign sgn(dF_0)=(-1)^{m+1} is neither supplied by the realization lemma's interface nor derived here. Its stated model properties also hold after precomposing F with a reflection, which reverses this sign.",
      "context_sha256": "d55c3237a05f68d0887775cb8d4d6aaae1e4effe40fb0159eccac13fc0adbcd3",
      "item_sha256": "d71698b80688359bdb2efd515e3a0dd8deeb174668ca538aed0af675ae2f0058",
      "at": "2026-10-06T06:57:09.184Z"
    },
    {
      "id": "cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 omits the Hopf theorem's nonempty hypothesis. The empty manifold is closed, connected and oriented, but has only one map to S^m, so its free homotopy classes cannot be in bijection with Z.",
      "context_sha256": "aae62fbfa645126c4d93a32ef7571c705dca931468643ae07cffabd1f5646ed3",
      "item_sha256": "245c5f5d7945416376e0b701e17fcbdf5f7c86cf26c4f99de17633f65f257a8b",
      "at": "2026-10-06T06:57:12.431Z"
    },
    {
      "id": "ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 asserts F=N for |x|²≥3/4, while the supplied realization interface only guarantees constancy outside the unit ball. Step 2.1 also invokes an unspecified χ profile. These unsupported properties are essential to the claimed smooth descent and homotopy.",
      "context_sha256": "5c3cbc7626d2e503bd081c9f0c7ddddb1e59958807c801cd87e89ba450acfc1f",
      "item_sha256": "f70c4b48532865536706d8db4dd44017d02b78971d12c44ab59fe0787e25d59d",
      "at": "2026-10-06T06:57:17.049Z"
    }
  ]
