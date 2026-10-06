# Step 7 adjudicate: initial, round 1, unit 21

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u21.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"21",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:prop-quotient-foliation-under-a-free-proper-foliated-action, 1:lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism, 3:thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints, 4:def-holonomy-representation-and-holonomy-group-of-a-leaf, 5:lem-holonomy-classes-form-a-groupoid-congruence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "prop-quotient-foliation-under-a-free-proper-foliated-action",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 infers global transverse dependence from local dependence. In the Möbius quotient, projected rectangular charts can overlap in two components with y'=y and y'=-y for the same y. No single h(y) exists as required by the supplied atlas interface.",
      "context_sha256": "0baebd4530249f4e863224c15a1c70ae8e66e87cbe07032293ad411cf3495f84",
      "item_sha256": "3a1d195288e1e74ca486080b6c8acfc09d9ee9b3fad7387780be844d45ada1fd",
      "at": "2026-10-06T07:02:25.428Z"
    },
    {
      "id": "lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 attributes a countable-transverse-values argument to def-leafwise-path-and-leafwise-homotopy, but the supplied interface contains none. Step 2.1 therefore relies on an unsupported essential assertion that each chart segment lies in one plaque.",
      "context_sha256": "57b0d690ce1f0251ddc8fe20bc7145074c3d9665942d1caa79359d520727fc75",
      "item_sha256": "ba4642abeb31e86a14418352acba388e4169740b5b8f2a0f3108c84ab3bccfdb",
      "at": "2026-10-06T07:01:38.271Z"
    },
    {
      "id": "thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 attributes a countable-transverse-values argument to def-leafwise-path-and-leafwise-homotopy, but its supplied interface contains no such argument. The essential single-plaque conclusion therefore lacks the claimed justification.",
      "context_sha256": "23bce21720a24b42635c4693f7b1baabeecf7d230d579055c244fd080c8c4ef2",
      "item_sha256": "27c9b342c0ebb7b469d9748f96c82abaabef5bbc176e1f20b61ab141b1eaaa88",
      "at": "2026-10-06T07:01:53.414Z"
    },
    {
      "id": "def-holonomy-representation-and-holonomy-group-of-a-leaf",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The domain π1(L,x) uses an intrinsic leaf topology that no cited interface supplies: def-leaf explicitly defines only a subset, and def-leafwise-path uses ambient continuity. The representation therefore lacks a defined topological domain.",
      "context_sha256": "02bfff733c8d9cc291de3ea64bc5ecec2b58593ace4bd444822316389b7c5986",
      "item_sha256": "14e036ccf7fc43cdc00ff30cafdaa97b1cde3cf1ced0383ab0939f73d4b27674",
      "at": "2026-10-06T07:01:41.003Z"
    },
    {
      "id": "lem-holonomy-classes-form-a-groupoid-congruence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 and step 1.2 overstate the cited germ-group lemma: it covers only self-germs in Diff_x(M), whereas h_a and h_b are germs between different pointed transversals. It does not establish well-defined composition for these typed germs.",
      "context_sha256": "d38385e629054c4afc93e113b1e089f36be76fbe98dd45be332ff3adf0479723",
      "item_sha256": "833e4a11fbd4d177b3cdf957bfbaa37993f0bc7e5f1dc91bf70a73b39b5dada2",
      "at": "2026-10-06T07:01:47.517Z"
    }
  ]
