# Step 7 adjudicate: repeat, round 1, unit 5

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/repeat-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u5.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"repeat",round:1,unit:"5",input_sha256:"e05cdf19d5e313eca8bcdfe4dd966cdf4b0c59c46fd851eb9dff4ee3cbf9156e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:ex-principal-divisor-degree-zero-p1, 5:thm-line-bundle-rational-section-cartier-divisor, 10:cor-degree-descends-picard-curve.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-principal-divisor-degree-zero-p1",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 incorrectly claims AC enters only through F6. F1 invokes def-projective-line-two-affine-cover-and-twisting-sheaf, whose supplied interface explicitly assumes AC; the claimed dependency accounting is therefore false.",
      "context_sha256": "7dc0259dc743344b71c645136cc65f9124c64e4e26d09374f4b68c1d83ea1399",
      "item_sha256": "8408bb8941fa89591b60c885dd316742562b66055b82aa12a15a1398a4a5ad5e",
      "at": "2026-10-02T05:25:08.513Z"
    },
    {
      "id": "thm-line-bundle-rational-section-cartier-divisor",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final claim that s is regular iff its divisor is effective contradicts def-rational-section-line-bundle, which defines regular as nonzero. On Spec k[t], s=1/t is regular under that interface but has divisor -[0], which is not effective.",
      "context_sha256": "cc8a94ffa8445964ed447f4efdbccf94a0abf06b0817a0e0bbb881dfad9ae354",
      "item_sha256": "72ee7f7da6aee2d65edf9217ddda6925a61004d6672aa139f10109578a43c8cc",
      "at": "2026-10-02T05:27:55.025Z"
    },
    {
      "id": "cor-degree-descends-picard-curve",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 incorrectly asserts that an integral closed subscheme with generic point ξ has dim O_{C,ξ}=1. Taking the subscheme C itself gives its generic point η and O_{C,η}=k(C), of dimension 0. The dependency requires codimension one.",
      "context_sha256": "9ca051b51bd6974dd91d7c4e3d6caa707354f2b2f38832e88d0dca391a4fe30f",
      "item_sha256": "ea3682ee2b56422c21e6ecdfbdd7633137a23275c7b3b50ceb8b52bb3c11dc9d",
      "at": "2026-10-02T05:23:18.497Z"
    }
  ]
