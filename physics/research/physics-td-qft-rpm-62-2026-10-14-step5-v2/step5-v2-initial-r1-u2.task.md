# Step 5 adjudicate: initial, round 1, unit 2

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-batch-2-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /Users/ianx/Projects/prestige-math-library/physics/research/physics-td-qft-rpm-62-2026-10-14-step5-v2/step5-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-td-qft-rpm-62-2026-10-14",phase:"initial",round:1,unit:"2",input_sha256:"c7d8a222abea8b2aeaf8ca5059b6b3a3871cdaeeeed41debed66cfc1d833fd32",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-td-qft-rpm-62-2026-10-14 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 4:def-td-thermal-contact-constraints, 5:def-td-isolated-compound-feasible-set, 7:ex-td-local-entropy-maximum-below-global, 7:ex-td-noncompact-entropy-supremum-not-attained.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-td-thermal-contact-constraints",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the zero-heat criterion is undefined. Q covers a system boundary; A–B transfer is internal, and no internal heat record or zero predicate is supplied. L&Y defines its relation via adiabatic accessibility ([§IV.A](https://arxiv.org/pdf/cond-mat/9708200v2)).",
      "context_sha256": "dbc89014dca3115dd96e3f23a820f4e53dd70cb4315c953cae28c8fa2546e128",
      "item_sha256": "90284770e4d76e95a40186d1f9d2ba923d8449c9fc46359bd181a752d5f76f6c",
      "at": "2026-10-14T19:45:54.507Z"
    },
    {
      "id": "def-td-isolated-compound-feasible-set",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The compound may include auxiliaries or work devices, but its endpoint space contains only the listed subsystems’ state domains. No state or energy coordinates for those extra constituents are defined, so internal energy transfers to them cannot be represented in the endpoint tup",
      "context_sha256": "bc7e2534f3b7bc85c86f53ffeb41ce868e3c79ea329afce688c5d03271a57a3e",
      "item_sha256": "121070b59eb5e718246b1522c35ae173f017e7d87de397c1c37638629d6424d8",
      "at": "2026-10-14T19:45:34.685Z"
    },
    {
      "id": "ex-td-local-entropy-maximum-below-global",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example calls the exchange thermal contact but supplies no admitted protocol P, process curve, or constituent endpoint maps required by def-td-thermal-contact-constraints. Thus it does not establish that its listed partitions are feasible under the stated contact model.",
      "context_sha256": "4ffe90517adb32791beb902e696d14c1c28d45e3de7e9397a41fa1a77047077a",
      "item_sha256": "d80049aa4692dffd420e015577478a3ad1c95d403f0e162fa73b6e05642579df",
      "at": "2026-10-14T19:55:23.927Z"
    },
    {
      "id": "ex-td-noncompact-entropy-supremum-not-attained",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[L1] overstates thm-of-archimedean: its interface applies only to complete ordered fields, but the item neither supplies nor establishes that ℝ is complete. The unsupported Archimedean applications are needed for the cover and supremum arguments.",
      "context_sha256": "8003dd6958f3cb219b82100248bb011256363abca6fa31a972b2053d08695cef",
      "item_sha256": "5bcf9218cc51ca395cd252f731286659e2fccf3da3bb0263c143c5119eb5b33b",
      "at": "2026-10-14T20:00:56.356Z"
    }
  ]
