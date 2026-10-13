# Step 5 adjudicate: initial, round 1, unit 50

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-50-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u50.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"50",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 6:lem-nrqm-uncertainty-approximation-by-product-domain-vectors, 10:pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law, 11:pthm-nrqm-uncertainty-position-momentum-incompatible, 12:texp-nrqm-uncertainty-spin-half-incompatibility, 13:ex-nrqm-uncertainty-gaussian-minimum-spread, 14:rem-nrqm-uncertainty-examples-scope-limits.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-nrqm-uncertainty-approximation-by-product-domain-vectors",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed sequence is indexed by n≥1, but library convention defines sequences on ℕ with 0∈ℕ. This is an indexing/type defect; reindex the statement and cutoff construction from n=0.",
      "context_sha256": "7fafc287d992f18ad2284b407277125bc1a07a46a8af33890a1590c7aec6577e",
      "item_sha256": "97e7cf973ae117c261ade1df6102c507c8f25f65488ce230e9132ba50c233f46",
      "at": "2026-10-12T20:09:42.064Z"
    },
    {
      "id": "pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 applies F1 to H, a PVM on B(R²). F1 covers assigned real-valued observables with PVMs on B(R), so it does not license that probability-measure claim for H as stated.",
      "context_sha256": "e36efe82dcf0e67eed515a1fd17b2461be1160fb6893d9edf9e516c6914b9b4b",
      "item_sha256": "8852a48bd3891d07bcbd4290103a0d1483af060bf31497754f54b86110b52327",
      "at": "2026-10-12T20:09:34.413Z"
    },
    {
      "id": "pthm-nrqm-uncertainty-position-momentum-incompatible",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 relies on the cited compatibility theorem, whose supplied interface assumes P1 and P3 as well as P2. This item adopts neither P1 nor P3, so the cited result does not license the no-joint-PVM conclusion.",
      "context_sha256": "3ef329854c8e4e636ae26692e2da3049975ec10dc12436980216ae46580296fb",
      "item_sha256": "c41d181782166a7b3351f93c9b09df76b36de4e261b6e63ab0d4b13ec5893388",
      "at": "2026-10-12T20:09:31.778Z"
    },
    {
      "id": "texp-nrqm-uncertainty-spin-half-incompatibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses the compatibility theorem, whose supplied interface assumes P3, but the item’s stated premises and dependencies omit P3. Its conclusion that no joint sharp observable exists is therefore not licensed under the claimed scope.",
      "context_sha256": "d7dfb46337507c7cf2a0e5c0377eab5e57eb762441df0cad09f12e7f0bba9734",
      "item_sha256": "aa532596ad17443a91d2dc4fa24e6766d8a0b1bd4af06fbd2e8c2f745ccdd61b",
      "at": "2026-10-12T20:09:33.534Z"
    },
    {
      "id": "ex-nrqm-uncertainty-gaussian-minimum-spread",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F6 attributes the claim that polynomial multiples of Schwartz functions remain Schwartz to its cited dependencies, whose supplied interfaces state only the Schwartz definition and the classical-to-weak derivative result. That local dependency restatement is unsupported.",
      "context_sha256": "39dcc98bf686cf1a0c427f313c27e2db3c1ed12dc377a47743a7bf1c2ba2cfe6",
      "item_sha256": "c10577b160cd1ff4d5f7e5352c134b28b9fe07ce4645cb5aefdec3d31f63ab60",
      "at": "2026-10-12T20:11:23.199Z"
    },
    {
      "id": "rem-nrqm-uncertainty-examples-scope-limits",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited counterexample interface explicitly states that a commutator identity on the dense invariant domain implies strong spectral commutation, yet this remark says it refutes that implication. That is an inaccurate restatement of a direct dependency.",
      "context_sha256": "79b6c4000468c45d7650cbd9ee80cc4ecd3df3358976d51f0c1d996785a39653",
      "item_sha256": "48af1b36aa8985b10fc8baa61f03f8524684597ca2d429826ff4c89b175ac836",
      "at": "2026-10-12T20:09:27.084Z"
    }
  ]
