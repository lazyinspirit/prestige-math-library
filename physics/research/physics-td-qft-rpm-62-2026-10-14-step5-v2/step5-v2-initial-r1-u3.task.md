# Step 5 adjudicate: initial, round 1, unit 3

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-3-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"3",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-tdmath-type-offset-vector-space, 3:def-tdmath-signed-comparison, 4:lem-tdmath-spectator-cancellation, 5:lem-tdmath-reference-order, 6:ex-tdmath-reference-order-two-state.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-tdmath-type-offset-vector-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: no supplied dependency defines or identifies ℝ. def-complete-ordered-field defines completeness for an arbitrary ordered field; it does not supply the real scalar field needed to type F and the relations. Add the real-field definition.",
      "context_sha256": "6f14cd4af813944678b5b232e932ba1c1b5ea877930ed537f97dd55dd349ee4f",
      "item_sha256": "77e801618600926872a5542239344572552f887b9f04c4b4c63ebee992a93eb8",
      "at": "2026-10-14T19:46:36.420Z"
    },
    {
      "id": "def-tdmath-signed-comparison",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal: `justified_by` uses `lem-tdmath-spectator-cancellation` to justify this definition’s well-definedness, but that lemma’s supplied interface itself states results about the signed relation defined here. This creates a circular justification.",
      "context_sha256": "27793f0dc7a05f0be9c3d3cc34b565b1f0e0486b3fa7e5758af5bacdc2f65abe",
      "item_sha256": "1a4d351a8a1eb29b6af48b06e8ccfe40be8dd65c257e619b25d1b6ff7a195a19",
      "at": "2026-10-14T20:01:06.847Z"
    },
    {
      "id": "lem-tdmath-spectator-cancellation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 only establishes A/r+C/r≼B/r+C/r. Composition consistency cannot remove C/r to justify replacing the n copies of A/r one at a time, so the smaller-spectator comparisons required for stability are unproved.",
      "context_sha256": "eaf54016f84f9cfd52394350fe6c1b1fe36e36373a1d83f178cd6a7ca13f8db3",
      "item_sha256": "8101fef84e51bbdd42f792007abedf6c5b03af6fcc36c34813eb386b2ce9c02d",
      "at": "2026-10-14T20:00:52.859Z"
    },
    {
      "id": "lem-tdmath-reference-order",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1's contradiction is invalid: if -1>0, positive-product closure gives 1>0, which is compatible with trichotomy. The step therefore fails to establish the claimed inverse positivity needed for rescaling.",
      "context_sha256": "92d196006547c46aa36128a6ee0f1fff3045e82990c178da5ce80b840e44283a",
      "item_sha256": "52feed0275ebd0faf9884dc506c58abc44f365fe186f6ad905e8858ef95e3a42",
      "at": "2026-10-14T19:46:23.990Z"
    },
    {
      "id": "ex-tdmath-reference-order-two-state",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The setup never states a≠b; X={a,b} permits a=b. Then e_a=e_b, so the asserted strict comparison fails, and steps 1.1 and 2.1 do not follow.",
      "context_sha256": "e4a243b3a01e18a0ed445b53251b6cf1c4c5cc735b4b2a79c853d71f1770c9b9",
      "item_sha256": "e03ca60759dcb10c754330a22563710475da2f1ba374f162fcfb6aeecefd7ac7",
      "at": "2026-10-14T20:01:04.288Z"
    }
  ]
