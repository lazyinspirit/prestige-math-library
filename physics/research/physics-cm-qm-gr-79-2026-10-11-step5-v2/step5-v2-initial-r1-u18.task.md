# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"initial",round:1,unit:"18",input_sha256:"a190d6e1e698ac74ff228d5cd1752f8f5e2a8f3acbdac43f25de890342cc9699",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 9:def-cm02-newtonian-flow, 9:post-cm02-interactions, 12:ex-cm02-uniform-field, 12:ex-cm02-force-model-regularity-checks, 13:rem-cm02-open-system-warning, 13:ex-cm02-constant-field-projectile.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-cm02-newtonian-flow",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The frame-covariance remark says a motion’s maximal interval is unchanged by a time shift. The supplied worldline interface sends the interval I to I+b under t'=t+b, so the maximal interval translates too; only its translated counterpart is preserved.",
      "context_sha256": "a3e8023d69fee5349bc19e08957f0488ae281c104dce6c06a1a2ad7bd16c228b",
      "item_sha256": "2c78325c04ee72d29004904b4d52fe90e31df483aacd9fb7dae367eea68d5a0e",
      "at": "2026-10-12T19:37:10.609Z"
    },
    {
      "id": "post-cm02-interactions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Clause (ii) labels antisymmetry alone the “strong form” of Newton’s third law. Tong §1.3 treats equal-and-opposite forces as the third law and identifies centrality as the strong form ([source](https://davidtong.org/teaching/classical-dynamics/dynhtml/S1)).",
      "context_sha256": "9c1d53aca0bf31d37aecb3ef2c29e25c8a40c67ee1d43c522180b97388fc3f18",
      "item_sha256": "11182f123ea43f655943799857d718a2a026fef8d08346766a3b27eaa82b0a38",
      "at": "2026-10-12T19:37:39.529Z"
    },
    {
      "id": "ex-cm02-uniform-field",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MIT citation misattributes its source: §4.5, pp. 79–83 is the Kepler problem, not the claimed near-Earth constant-field approximation. This is a material source-faithfulness defect.",
      "context_sha256": "152ad53c2398a173402f402dbdb07ddf62be6eb7b1e8323c6e902383da185486",
      "item_sha256": "59e4bcd2e81fae12e98a573f94184665691ca559876f417afeea4061659328e5",
      "at": "2026-10-12T19:37:45.899Z"
    },
    {
      "id": "ex-cm02-force-model-regularity-checks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For the single stated label, [[def-cm01-configuration]] defines collisions as coincidences of distinct labels, so Δ=∅. Here Q excludes the singularity of an external source at 0; calling it collision-excluded (title and §3.1) misstates the supplied interface. Call it singularity-",
      "context_sha256": "b9b3d4bb6b92e339fb460f6000fc8d184142eb65f67258f217f534f584bd21cb",
      "item_sha256": "c002bf1bf81cac745e90f7556be208c81db6822ee1d05e472a47c8d5cf2641f6",
      "at": "2026-10-12T19:38:50.741Z"
    },
    {
      "id": "rem-cm02-open-system-warning",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: a time-independent inverse-square field centered at a fixed point defines a stationary center worldline. A Galilean boost makes that center move and the field time-dependent, so it selects a preferred rest frame as well as a location; the categorical denial is false.",
      "context_sha256": "f3379cff7664acba669bbee8d06399aba69b5bfb925a7491babe41324811bc18",
      "item_sha256": "b1e666ffbd74c0a5dcf6fdb2c41f4a38b061f87bea850796110db279cedcbed0",
      "at": "2026-10-12T19:38:10.409Z"
    },
    {
      "id": "ex-cm02-constant-field-projectile",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The MIT citation misattributes support: its cited §4.5, pp. 79–83, is “Kepler Problem,” not the constant near-Earth gravity approximation mgz ([source](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)).",
      "context_sha256": "b8f45f330b87f561eaef8fef455fa681796e8bb52919c4b961013da7657d31a5",
      "item_sha256": "db4f535c4ec6e1a4a4a25c22c1e3da530093f3c6affda957e4f959e4b45bc839",
      "at": "2026-10-12T19:38:12.599Z"
    }
  ]
