# Step 7 adjudicate: initial, round 1, unit 4

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u4.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"4",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 7:lem-sr-closed-one-form-primitive-on-simply-connected-open-sets, 9:def-sr-chart-tetrad-and-congruence-distinction, 12:def-sr-observer-congruence-and-kinematics, 12:lem-sr-boost-time-length-and-velocity-formulas, 14:thm-sr-smooth-local-herglotz-noether.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-sr-closed-one-form-primitive-on-simply-connected-open-sets",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F9 and step 1.1 invoke thm-chain-rule for multivariable coordinate and gradient transformations, but its supplied interface covers only real functions of one real variable. No multivariable supplier or local derivation licenses this restatement.",
      "context_sha256": "6fe9bfcef6c9f8aee4f9b15987fd35fa539173b2b199fa1181d714f3edca85ef",
      "item_sha256": "fceb573635fb8c799a4105cda1f4cd8dadc72a2042009275332baf3a537701b7",
      "at": "2026-10-10T04:06:50.153Z"
    },
    {
      "id": "def-sr-chart-tetrad-and-congruence-distinction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "In (e), the four-vector coordinate frame is identified with an observer congruence, but (c) defines a congruence as a single future unit vector field. Only the time coordinate vector field defines the congruence of stationary observers.",
      "context_sha256": "98b08f2e5c347014fb85de956edcb396c09d0fbd0dee3bfcf98289ab8cd00458",
      "item_sha256": "ef5e0e31b6dee035652bd7ffd2a97c3549e2e48fa2455ea90fcc610fa8af8eba",
      "at": "2026-10-10T04:06:29.681Z"
    },
    {
      "id": "def-sr-observer-congruence-and-kinematics",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (b) cites thm-chain-rule for differentiating n^a(x(s)), where x maps into R^4. That supplier covers only real-to-real composites and does not license the multivariable chain-rule step used to obtain A=c^2a.",
      "context_sha256": "3301c5aa5ae9946b8f4f99e976155bc32ac31708012dc2c3197869d4c5206f03",
      "item_sha256": "e94764cd197baea1341b1af2404bdb2df08898bfb287066fad52ff33ca948178",
      "at": "2026-10-10T04:06:40.690Z"
    },
    {
      "id": "lem-sr-boost-time-length-and-velocity-formulas",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (ii)(c) omits alignment with the boost direction. Two x-rest worldlines separated by (0,L0,0) retain separation L0 at equal x'-times, contradicting L0/gamma when v≠0. Step 2.2 proves only the longitudinal case.",
      "context_sha256": "45772f35fbd48c313c5b08ffa1fa62960bccd8a3292038f7b33c6d652306f72a",
      "item_sha256": "b493445c2cbd369ed924f9654c304eec8f29e9279f06170e93981aea26555339",
      "at": "2026-10-10T04:06:50.383Z"
    },
    {
      "id": "thm-sr-smooth-local-herglotz-noether",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F12 restates thm-chain-rule and def-derivative as calculus for arbitrary smooth maps, but their interfaces cover only scalar functions of one real variable. They do not license the asserted multivariable chain rule.",
      "context_sha256": "72738280a4e02c5bdf3b6d72332b1430e0b3b5a8380918f893e00ce9f3483431",
      "item_sha256": "792d124bb1fde63b2790cca89aaeaf9e2c01c3adf5ad0f19b5b6b6a3b448f70a",
      "at": "2026-10-10T04:07:40.838Z"
    }
  ]
