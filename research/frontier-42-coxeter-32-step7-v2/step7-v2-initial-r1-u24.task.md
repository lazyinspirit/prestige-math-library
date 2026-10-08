# Step 7 adjudicate: initial, round 1, unit 24

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-42-coxeter-32-step7-v2/step7-v2-initial-r1-u24.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-42-coxeter-32",phase:"initial",round:1,unit:"24",input_sha256:"ce87a1bc88a8f056e771220d400256d1be4d20fe7e966bd5434d1ad410d4a79e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-42-coxeter-32 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:ex-cg-root-versus-coroot-translation-lattices, 4:ex-cg-a1-affine-line-alcoves-and-translations, 11:lem-cg-affine-generic-gallery-paths-and-disk-moves, 12:thm-cg-affine-alcove-transitivity-presentation-and-length.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-cg-root-versus-coroot-translation-lattices",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F9 inaccurately restates the affine-reflection lemma: its interface does not assert that Φ∨ is reduced crystallographic. Step 1.3 therefore applies F2 to Φ∨ without establishing its essential hypothesis.",
      "context_sha256": "e21a8b87467e8fb62d2c3d6ee1b1d0b13c5e0fd5f618fb7d5a74793b21e1e738",
      "item_sha256": "3c0179224062191bf26ae2861645f2e35f6dc9575622ee6d494e83c202859451",
      "at": "2026-10-08T00:58:01.597Z"
    },
    {
      "id": "ex-cg-a1-affine-line-alcoves-and-translations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F13] inaccurately attributes dual-root-system crystallographicity and s_{α∨}=s_α to the affine-reflection lemma. Its supplied interface states neither result, yet step 5.1 cites [F13] to establish the dual system’s eligibility for [F11].",
      "context_sha256": "780d836cd43300190cbd4c95257f67e9c77c7be2abb5b8b6ecc0c0ed85673c3d",
      "item_sha256": "fe9b7f3b3ef5aa3699891dd65257e0fd8fe18a1431bca70ec62edfc251050342",
      "at": "2026-10-08T00:57:59.811Z"
    },
    {
      "id": "lem-cg-affine-generic-gallery-paths-and-disk-moves",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (3) overclaims: in rank one, an allowed PL filling with boundary in (0,1) and center in (1,2) has a closed wall-preimage loop and an annular alcove region. The dual disk cellulation and face-collapse argument only cover the particular cone of step 3.1.",
      "context_sha256": "244193ef284f0c425a54440abe82293a347d21441a4195ad4f33cee83a5516ba",
      "item_sha256": "8a49ed93c07474b4b53d1f4bc7913b432a4be193838c7d63a3a46ed07c2d1d82",
      "at": "2026-10-08T00:58:56.525Z"
    },
    {
      "id": "thm-cg-affine-alcove-transitivity-presentation-and-length",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (1) says every wall is a facet. In type A2, walls are unbounded lines, while alcove facets are bounded segments. Step 2.1 proves only that every wall supports a facet, not the stated claim.",
      "context_sha256": "cf37565f2694923db75114076475970d2c084ef1af77d5cecf9dfd979c2b4021",
      "item_sha256": "4381ecf327f093be641160f7fbfa3c268e4776dd52e8a89063c775768ea2701b",
      "at": "2026-10-08T00:58:22.256Z"
    }
  ]
