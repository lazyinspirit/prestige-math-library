# Step 7 adjudicate: initial, round 1, unit 7

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"7",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-dot-action-facets-and-single-wall-translation-data, 4:thm-category-o-has-enough-projectives, 5:lem-hom-from-projectives-counts-simple-composition-factors, 6:lem-hom-to-costandards-counts-verma-flag-factors, 8:cor-injectives-have-costandard-filtrations.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-dot-action-facets-and-single-wall-translation-data",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The assertion that S_μ is distinct from W_μ fails in the supplied sl₂ example: μ=−1 gives S_μ={1,s}=W, while integrality gives W_μ=W. The two groups coincide in rank one.",
      "context_sha256": "be877b2dc3d799adc8701f636e68a82c92dbd428a8ebac43a393f11affe9453e",
      "item_sha256": "bf080f5a5a262ab1c5d4b26b7a4caf6c66dd36d6d5b24912765b70924b846a7b",
      "at": "2026-10-03T14:17:20.851Z"
    },
    {
      "id": "thm-category-o-has-enough-projectives",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly asserts unconditional extension closure of O. The cited theorem requires the middle term to be h-semisimple and explicitly says this hypothesis is essential; [F3] omits it.",
      "context_sha256": "e22c38f51ae97af26080310f2722b5ea1a1a5bd0530f48d3a2dd118b94fed91d",
      "item_sha256": "6cee86efde84cca888bf622303a282ae447300a1e63f0c903531923f28746e3f",
      "at": "2026-10-03T14:17:05.405Z"
    },
    {
      "id": "lem-hom-from-projectives-counts-simple-composition-factors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] attributes independence and additivity of composition multiplicities to dependencies that only define composition series and assert finite length. Neither supplies Jordan–Hölder, and the item gives no argument establishing these claims.",
      "context_sha256": "659a526edf0951bbbdf3d431805a021e9536bd08b275c3bc755b38e8cfe7ec15",
      "item_sha256": "5348bebfb75f48fd4f9e65206c63e1c92b6e96308ceaf529eec08f26616af936",
      "at": "2026-10-03T14:17:07.528Z"
    },
    {
      "id": "lem-hom-to-costandards-counts-verma-flag-factors",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 applies the long exact Ext theorem without establishing that category O has enough projectives and injectives or supplying the resolution data required by its interface. AC implies DC but does not discharge these categorical prerequisites.",
      "context_sha256": "57416599b07728f3a33581f52fc30a74628a7e550db89a5909f9b6fac5a594ce",
      "item_sha256": "eaf4a8a9f88cd0aef7944fb7811279ce3c37301f9b54648da5fa210c1a0aae5c",
      "at": "2026-10-03T14:17:05.856Z"
    },
    {
      "id": "cor-injectives-have-costandard-filtrations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 claims that the cited decomposition lemma establishes finite length for every object of O. Its interface instead assumes finite length and does not verify that hypothesis for O, so step 1.2 invokes it without its prerequisite.",
      "context_sha256": "fac392e5e85263cb9d66126e9f2561603057e64b6490806285cfb4f402324edc",
      "item_sha256": "a60cbee776c34bb463a474c5505b8549bbf5ee110fe2512321b710a347ba4971",
      "at": "2026-10-03T14:17:24.758Z"
    }
  ]
