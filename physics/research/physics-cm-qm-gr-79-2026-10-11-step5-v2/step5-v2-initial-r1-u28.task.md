# Step 5 adjudicate: initial, round 1, unit 28

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-28-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u28.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"28",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 14:def-cm12-cotangent-momentum, 15:def-cm12-hyperregularity, 16:def-cm12-hamiltonian, 19:pthm-cm12-energy-time.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm12-cotangent-momentum",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The force-model interface permits empty Q, but the cited action definition constructs its fibre-full chart only when Q is nonempty. Without that hypothesis, clause (b)'s Legendre map is undefined, and clause (c)'s claimed Cartesian-chart case is unavailable.",
      "context_sha256": "3d377a591c4a8f28263693c4dbe59f6b07a5fb3146051270ba72c50ad6fa63f5",
      "item_sha256": "0182666d833b2f1b9df2517d85d58830015ac28895755d5b34f9e9337bca21ff",
      "at": "2026-10-12T19:49:20.022Z"
    },
    {
      "id": "def-cm12-hyperregularity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Scope contradiction: physical_scope says the item does not assert mechanical hyperregularity, but its Remarks assert it for both chart types. Also, Q may be empty; the cited Legendre chart requires a nonempty base, so (a)'s claimed equivalence fails.",
      "context_sha256": "de3c45abdcaaf2f8aa301f8d5c87862ad680579c8625815cae95b6b7793dc921",
      "item_sha256": "96f08f5bac6f9b1c41c2ddb7ef10223f556ccd7771860b31e126b33f5863fd11",
      "at": "2026-10-12T19:49:18.917Z"
    },
    {
      "id": "def-cm12-hamiltonian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Hyperregularity makes each fibre Legendre map bijective, so its inverse branch is unique. Clause (d)'s claim that multiple branches may be declared “as in” def-cm12-hyperregularity misstates that interface; this definition admits no branch choice.",
      "context_sha256": "42559fea74c2b9f053f5a304af46dc26b063f5bb0cd1f6b148a9047f88389b4a",
      "item_sha256": "b0ad3c832fd1707134ea35e3d60e8ddd46695bde93e3f97ee5eb338ea94d5746",
      "at": "2026-10-12T19:49:12.523Z"
    },
    {
      "id": "pthm-cm12-energy-time",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final remark calls H “the conserved quantity” of prop-cm-hamiltonian-branch-identities without its condition: that result gives H' = -L_t and conservation only when L_t vanishes along the trajectory. This theorem allows time-dependent U, so H need not be conserved.",
      "context_sha256": "1cbebb431b52c829bdead62909a3674cc2a8aeb83a8a74d5b9b3bad5a53fd33c",
      "item_sha256": "e691b6f74ef68e17184797de09bd39287cffde2b98516f28db55961b74b108d2",
      "at": "2026-10-12T19:49:05.326Z"
    }
  ]
