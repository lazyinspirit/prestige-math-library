# Step 5 adjudicate: initial, round 1, unit 18

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-18-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u18.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"18",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:def-qc-quantum-code-distance-and-error-detection, 6:def-qc-classical-error-syndrome, 7:lem-qc-classical-syndrome-is-error-only.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-qc-quantum-code-distance-and-error-detection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The item refers to “the distance theorem on this page” proving detection below d, but this page contains only a definition and no such theorem; the page promise is false.",
      "context_sha256": "2967bd91e96e9a79a5ce4dc9020e0c02a1060c01c3c5cc979cbaa5f0974fb3ca",
      "item_sha256": "045fdc38a00d2a1fea90a5d21d6207035ba97daf15fe1aba67857f3f8375d12f",
      "at": "2026-10-16T04:54:40.071Z"
    },
    {
      "id": "def-qc-classical-error-syndrome",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: k is never introduced, yet it is used to type H and the codomain F^{n-k}. The supplied matrix interface defines k by requiring dim C=k, which this item omits.",
      "context_sha256": "c3119cad8232f3ab6214c7365ca9bac71225bf5aa046d6a58468e84ebfe089d0",
      "item_sha256": "3892267d67e683a7cf8e6a46e299d202b6085f24b03f70a751f138cbda0d8382",
      "at": "2026-10-16T04:54:37.405Z"
    },
    {
      "id": "lem-qc-classical-syndrome-is-error-only",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "L2 claims the syndrome definition's prerequisites specify ker H=C, but the supplied interface never states that. The existence theorem gives some H with that kernel, not the arbitrary H in the statement, so Hc=0 is unsupported.",
      "context_sha256": "6d158fec1bc1dcb5da7ed94bd5109f13a24d61354004407c2f652593096e0caf",
      "item_sha256": "e6496db87885a9ebba8e0409862d46090fe65855c93028c5e4bb3ba00fe63561",
      "at": "2026-10-16T04:54:37.092Z"
    }
  ]
