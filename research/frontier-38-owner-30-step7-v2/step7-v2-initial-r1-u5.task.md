# Step 7 adjudicate: initial, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"5",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-calderon-zygmund-kernel-and-principal-value-operator, 0:cex-calderon-zygmund-strong-lone-bound-fails, 1:lem-dyadic-cubes-all-generations-partition-and-nesting, 3:ex-riesz-transform-as-a-standard-calderon-zygmund-operator, 5:thm-calderon-zygmund-operator-has-weak-type-one-one.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-calderon-zygmund-kernel-and-principal-value-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L² consists of a.e. equivalence classes, but the declared ordinary support is not well-defined: 0 and 1_{Q^n} represent the same class and have supports ∅ and R^n. Thus the compact-support quantifier and the domain in (3) are ill-defined.",
      "context_sha256": "76639086015186382cfb87618399b3812c46acdfd97a6e2699c3f45c7541d93b",
      "item_sha256": "b74fb0bb24071dbb5d639c36863a543a43ce5132ede63da0ebfa7f80496bf51d",
      "at": "2026-10-03T14:12:56.297Z"
    },
    {
      "id": "cex-calderon-zygmund-strong-lone-bound-fails",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F1 inaccurately attributes the interval-specific domination |Hεf|≤|q| to def-truncated-hilbert-transform-and-principal-value. Its supplied interface asserts no such bound. Step 1.1 proves the bound independently, but the dependency restatement remains inaccurate.",
      "context_sha256": "7715b8fdeef2776bcfa90e2d02eb629317762138d47570db9d195379188f6c00",
      "item_sha256": "84291781ae2c203ba74bf2c242cfc4be390027e9b2903a8c67761dbef6ad0403",
      "at": "2026-10-03T14:13:14.563Z"
    },
    {
      "id": "lem-dyadic-cubes-all-generations-partition-and-nesting",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] and [F5] falsely assert the product formula for arbitrary real parameters. For n=1, a=1, b=0, the box is empty, so its volume and measure are 0, but their formula gives −1. The supplied interfaces require nonemptiness or ordered endpoints.",
      "context_sha256": "3df8dd842d7ddd3647d1acaca272cc732bbcbdb37d7df35408eeab2a496fcd5a",
      "item_sha256": "89c6734f563f8b12d3b20524183a5de2e489e5b716db4642e2d75e4d30352fea",
      "at": "2026-10-03T14:12:26.457Z"
    },
    {
      "id": "ex-riesz-transform-as-a-standard-calderon-zygmund-operator",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Steps 1.1–1.2 are circular: the standard-Hölder definition already requires a Calderón–Zygmund kernel, and the cited Hölder-to-Hörmander lemma assumes that status. Its interface does not license deriving the missing Hörmander condition from the raw difference bound alone.",
      "context_sha256": "a89ce9c6abb50d8cf4ae4b2c083871ec219ba93ea227f5183108aba613b8cbcc",
      "item_sha256": "d2a1bd30718163cbb15167cdd3ad40fca27bd38e1d7c889cee9239cbbce7dae5",
      "at": "2026-10-03T14:13:03.014Z"
    },
    {
      "id": "thm-calderon-zygmund-operator-has-weak-type-one-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 omits the bad-part lemma’s essential hypothesis b_j∈L², asserting its estimate for decompositions of arbitrary h∈L¹. Such b_j need not belong to L², so Tb_j is undefined under the supplied operator interface.",
      "context_sha256": "705b2865c7a3a86c533da43b9d9a84329c4f9aaf79a5f55f887b577df2db467d",
      "item_sha256": "e62274c46574e797cf22f0986c61c959255db41018f23288821c067638e324c7",
      "at": "2026-10-03T14:12:58.641Z"
    }
  ]
