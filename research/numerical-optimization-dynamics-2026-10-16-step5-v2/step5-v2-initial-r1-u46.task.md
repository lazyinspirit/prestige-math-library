# Step 5 adjudicate: initial, round 1, unit 46

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-46-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u46.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"46",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence, 0:lem-projected-euler-projection-residual-certificate, 3:alg-certified-projected-euler-method, 3:lem-normal-cone-maximal-monotone-and-projection-resolvent, 4:lem-projected-contact-solutions-are-unique, 10:alg-event-driven-frictionless-sphere-contact-with-certified-events.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 sets n_0=0, but the given maps are only u_j for j≥1, so (u_{n_k}) uses the undefined term u_0. The proof never reindexes n_1,n_2,… to a subsequence indexed from 0, as library conventions require.",
      "context_sha256": "83859e77440f7a7c295f975900929f42f0821211ec7976ab8c5af8ae3e001bce",
      "item_sha256": "6d27aa9b8eeffbf147a101e15886868a0e9b77b0824854996a6667d0f5fecf9b",
      "at": "2026-10-16T18:06:06.031Z"
    },
    {
      "id": "lem-projected-euler-projection-residual-certificate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The VI dependency only characterizes points already known to be nearest; it does not establish that a nearest point exists or define P_C(y). Step 1.2 therefore introduces q without a supplied fact.",
      "context_sha256": "2e083e4d802665b4c0013de4837f2f59602f6dbdc3d887357d5752b62c03e438",
      "item_sha256": "adb0bfeaf033dc1ae50799e3ba3636cc5594247e24f5e64c0d1bb52a292b8909",
      "at": "2026-10-16T18:06:14.018Z"
    },
    {
      "id": "alg-certified-projected-euler-method",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The provider contract bounds candidate checks only when returning `unresolved`; it gives no check limit for a `certified` response. So the claim that every call obeys its finite B_k budget is unsupported.",
      "context_sha256": "365a547196cc060dcaa90313999e517e4be0bbf80b7f472331c8a7fd36c98b48",
      "item_sha256": "c4130018903a1a141984b77f5f87cacf48e30714cc6ec13b52af683626f9d81e",
      "at": "2026-10-16T18:06:16.017Z"
    },
    {
      "id": "lem-normal-cone-maximal-monotone-and-projection-resolvent",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 omits the supplied definition’s domain condition and its rule that ∂g(x)=∅ outside dom g, so it is an inaccurate dependency restatement.",
      "context_sha256": "b27f95fabe1f207a12458a66928cf567b3bf713e6a7c23df815d1a84eb8982cd",
      "item_sha256": "80d728a4a6ef2ceeee3819f42f1059c218ceb9f413fef5fe2b713aa87e62291b",
      "at": "2026-10-16T18:06:07.752Z"
    },
    {
      "id": "lem-projected-contact-solutions-are-unique",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement leaves d unrestricted, but the supplied projected-dynamics definition applies only for d≥1. Since this library allows dimension 0, the cited solution notion is not licensed as stated.",
      "context_sha256": "d84ef7bd7b7a73eb0c4715a267cd5e2b5e452ef5c5435fb0a68c12369411712b",
      "item_sha256": "ceed29e13a8a29e19481edead585e4b1d52be6f6c455f92d0d8ef50c4976daf5",
      "at": "2026-10-16T18:06:20.332Z"
    },
    {
      "id": "alg-event-driven-frictionless-sphere-contact-with-certified-events",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The error bound η_ref is certified only on a common mode prefix, which ends at the exact event τ. But the bracket and lag may extend to b>τ; the event-time and reset-error lemmas require a uniform incoming-mode error bound through b. The procedure needs a certificate for that smo",
      "context_sha256": "eb89f186d20a96da6c0aa3df3763f0949884001a9898ab393f537f5efec6505c",
      "item_sha256": "533af693cd77e480f9113ac28fba4bb4df83649728de7ea1a508e3207795bb02",
      "at": "2026-10-16T18:06:37.041Z"
    }
  ]
