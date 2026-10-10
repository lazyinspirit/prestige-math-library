# Step 7 adjudicate: initial, round 1, unit 34

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u34.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"34",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-em-exponential-character-open-set-independence, 17:def-em-medium-wave-parameters, 20:ex-em-skin-depth-approximation-example, 21:ex-em-brewster-angle-example.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-em-exponential-character-open-set-independence",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates the coordinate interface: vectors are functions on {0,...,n-1}, but it defines the extension using indices 1,...,n. The nth coordinate is undefined and coordinate 0 is omitted; for n=1 even the base-case dot product is undefined.",
      "context_sha256": "ba5edfaf8d2702862179c031315c4f88889448163021f46f65b5edfeafe16411",
      "item_sha256": "8008e0da4c4c2edcc2819545dae8e77ee32fe9198fccfe64b3bd4ead90b44afa",
      "at": "2026-10-10T04:17:33.791Z"
    },
    {
      "id": "def-em-medium-wave-parameters",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (d) asserts that εµ≥c⁻² is the exact broadband case. post-em-material-closure(b) supplies only a necessary condition for an adopted exact broadband interpretation; the inequality alone does not license that scope claim.",
      "context_sha256": "7ff6ec7c11fbe46e15de18e34996c61494b244fec6139162a2d0f9ed4d000c70",
      "item_sha256": "16fbf3ea22d27325b06b85d5df6011b7b5346607001ae5b3f430405245f8cfc3",
      "at": "2026-10-10T04:18:15.270Z"
    },
    {
      "id": "ex-em-skin-depth-approximation-example",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "A1 and step 1.1 invoke the skin-depth theorem from Ohmic parameters alone. Its supplied interface also requires a transverse plane-wave solution satisfying the amplitude conditions; the example neither assumes nor constructs such a solution.",
      "context_sha256": "3f639970efbac7c44dbcbaed97272c6d9522ec2e7c4d6b723055181ac29672cb",
      "item_sha256": "fefda105afa7e05355e646c6ac317081b188633a207cfb80b5b860a0aa2745ec",
      "at": "2026-10-10T04:18:34.467Z"
    },
    {
      "id": "ex-em-brewster-angle-example",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates def-principal-inverse-tangent: tan is the bijection (-π/2,π/2)→R, not the principal inverse. The supplied inverse is arctan:R→(-π/2,π/2). This confuses the function and its domain.",
      "context_sha256": "c2eddd0461c69d49579f26aeeda29ce07e1106364f63544ddc4bb5dfde1acd98",
      "item_sha256": "d2ab3b4f099a55879fd03b17c9e2e48be8a0a61cebb20272ff7db1cf02cf129f",
      "at": "2026-10-10T04:17:56.996Z"
    }
  ]
