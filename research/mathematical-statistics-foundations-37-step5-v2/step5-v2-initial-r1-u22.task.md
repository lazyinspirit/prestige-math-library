# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"22",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-wald-score-likelihood-ratio-statistics, 5:thm-wald-score-likelihood-ratio-asymptotic-chi-square, 6:cor-wald-score-lr-asymptotic-equivalence.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-wald-score-likelihood-ratio-statistics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The chart is only local, but W_n uses the tested coordinate of the unrestricted global maximizer without requiring it to lie in that chart. A permitted maximizer can be outside it, leaving ψ̂_n and W_n undefined.",
      "context_sha256": "8d43246b5bcd8e30d640202ca272ea76aabf349c44d2c9ee769dca2507feab51",
      "item_sha256": "f1cbdd5dcc5bbbf6b4ec1ba1ee70a4b9b5e25d28753e0fd652785dda4eb612ea",
      "at": "2026-10-14T11:53:22.398Z"
    },
    {
      "id": "thm-wald-score-likelihood-ratio-asymptotic-chi-square",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A3 falsely says AC is used only through [F7]–[F9]. The cited MLE theorem [F3] explicitly assumes AC, and the statistic definition [F2] does too, so this dependency-use restatement is inaccurate.",
      "context_sha256": "892bc28c0f28d12ad2e304eb276b64794403eecf07e35b4f0f519b8bdc18e0ab",
      "item_sha256": "817beda3984ea1190ba44be1b5ba67192bf3932b54205a1f59b0f8579fa3525e",
      "at": "2026-10-14T11:53:47.207Z"
    },
    {
      "id": "cor-wald-score-lr-asymptotic-equivalence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 claims [F1] uses a multivariate iid CLT, but the supplied interface gives only [F1]’s assumptions and conclusions; it does not license that proof-dependency claim. AC itself is explicitly an assumption of [F1].",
      "context_sha256": "46a88ef5b2566fa48457443b0178f5a4215f9acb177acb6372f7c535201c7e98",
      "item_sha256": "39f2e7601f4632b7359e29a37b4ef7bc9a38435ef07d480717c07fc5d791a347",
      "at": "2026-10-14T11:53:13.020Z"
    }
  ]
