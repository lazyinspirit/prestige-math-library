# Step 5 adjudicate: initial, round 1, unit 90

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-90-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u90.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"90",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:lem-khovanov-signed-local-cancellation-models, 6:lem-khovanov-reidemeister-chain-homotopies, 7:thm-reduced-khovanov-basepoint-and-reidemeister-invariance, 8:thm-khovanov-euler-characteristic-is-jones.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-khovanov-signed-local-cancellation-models",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises cancellation models for the Reidemeister moves generally, but the statement and proof cover only RII and RIII; no Reidemeister-I model or grading shift is established.",
      "context_sha256": "1cc493a27f1f44ef3fc3635314a92c5d822a128764f28ef520b0b88af23e4116",
      "item_sha256": "a684de4413ac71ce6ffc0d4656ded48a72cda076e611befc0e546c14be057c25",
      "at": "2026-10-21T16:00:20.304Z"
    },
    {
      "id": "lem-khovanov-reidemeister-chain-homotopies",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement permits the empty link under planar isotopy, but the cited cube definition excludes the empty diagram, so its complexes are undefined there. Require nonempty diagrams.",
      "context_sha256": "71c2ff76a24e8f32d8ca7493b6df86e0644271d5da577af073e04e75b3e6cc19",
      "item_sha256": "dc28c31fe6ef84b0c7f87d82647a3bf4beffcf8119a149780f278ce8477898b5",
      "at": "2026-10-21T15:59:06.653Z"
    },
    {
      "id": "thm-reduced-khovanov-basepoint-and-reidemeister-invariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates its supplied interface: it says all local maps and homotopies commute with X_p, while the interface only guarantees that the stated chain homotopy equivalence descends. The stronger dependency claim is unlicensed.",
      "context_sha256": "e504909d577e99e71c5b4ce032f385e68810a4f7ff6c244901fcea9c20c4f1a1",
      "item_sha256": "23a9528bad9315dbbd90f67e36ac0f6dcb7637158bc4ce42bbae39dc92bd0367",
      "at": "2026-10-21T15:58:41.003Z"
    },
    {
      "id": "thm-khovanov-euler-characteristic-is-jones",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: the unreduced Euler characteristic is (q+q^{-1})V_L(t), not V_L(t); only the reduced knot Euler characteristic equals the Jones polynomial.",
      "context_sha256": "9a7acd3e37a799767822131839453ed1bca638a74acbe363f92d82416ce5447f",
      "item_sha256": "3695d9389ecc8ca9b03b5ffaa4b42566f0dadbdee02f7ea9282cb6297f062637",
      "at": "2026-10-21T16:00:36.480Z"
    }
  ]
