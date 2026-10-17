# Step 5 adjudicate: initial, round 1, unit 95

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-95-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u95.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"95",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-continuous-riemann-lebesgue-agreement, 3:def-collocation-quadrature-tableau, 5:alg-explicit-left-euler-sdc-sweep, 5:thm-collocation-one-step-stability, 8:prop-one-node-gauss-collocation-order-two, 8:ex-sdc-two-node-gauss-nonstiff-cubic-ivp, 9:lem-gauss-collocation-weighted-defect-bound, 9:ex-sdc-constant-predictor-too-few-sweeps, 9:ex-sdc-inexact-midpoint-stage-residual.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-continuous-riemann-lebesgue-agreement",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 infers Lebesgue measurability from F7's Borel measurability, but no supplied dependency states that Borel subsets of [0,1] are Lebesgue measurable; F6 therefore cannot yet apply.",
      "context_sha256": "c3133602b49541c2c8cadd4c8f941093d69e0969776159b1e41b3d591387f4b0",
      "item_sha256": "d954506a9de9f9cd5360db8737ca082c1d02784f0b22a0ee3fa5103f0fe9cf97",
      "at": "2026-10-17T01:56:22.017Z"
    },
    {
      "id": "def-collocation-quadrature-tableau",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The RK formulas use t, u, and h without setting the initial pair (t,u)∈D or requiring h>0, as the cited RK interface does. The definition therefore leaves its stage/update expressions outside the stated parameter domain.",
      "context_sha256": "65ffa14845cd4e48660cd8cc344fb3c9b65a3ca6ba81002b9965ff513528ee4b",
      "item_sha256": "39a8703765642574e4d7eda609b64bca46000b202ebbff32a05053e60bb01ce8",
      "at": "2026-10-17T01:56:49.871Z"
    },
    {
      "id": "alg-explicit-left-euler-sdc-sweep",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 branches on whether invariance is “certified,” but the inputs provide only C and no certificate format or certification procedure. The branch, and thus the output, is not determined by the stated inputs.",
      "context_sha256": "b9df5fd8bc898733d851d9884c88f7ea7d9adbf48a47cf0f0278d2cc150f4414",
      "item_sha256": "c20da59da12b6ab50ee12e50e324aabc518b7fed3ecc73cc4b88b6008d6e6ab4",
      "at": "2026-10-17T01:56:40.717Z"
    },
    {
      "id": "thm-collocation-one-step-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The hypothesis omits h≥0 (or |h|): with nodes (0,1), Q=[[0,0],[1/2,1/2]], f(y)=-y, L=1, h=-4 on the common invariant tube R, hL||Q||∞=-4≤1/2, but U1=u and U2=-3u, violating the claimed factor 2.",
      "context_sha256": "51b3ca0640290977996f4ed3e15e02fb9f006ca8c9ddcbf8dca49580aae5937a",
      "item_sha256": "b1c1a4b1820091fc484295b7f33d9e8176ca305c4be8656a90cc18670a5f5201",
      "at": "2026-10-17T01:56:27.116Z"
    },
    {
      "id": "prop-one-node-gauss-collocation-order-two",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3 applies F6, which requires every numerical grid state to lie in the tube. The hypotheses and A1 keep the exact path, stages, and estimate segments there, but do not ensure computed endpoints stay there or prove a bootstrap. The global-error inference is unsupported.",
      "context_sha256": "af2e59884e215c70263b5c7455c6d15d3c780f6c475b4a6fecf7178bee21c739",
      "item_sha256": "aefb95b8434ca5aa4aad5502f402b34355f1e2407eee490a10aa14f439a75a85",
      "at": "2026-10-17T01:57:04.057Z"
    },
    {
      "id": "ex-sdc-two-node-gauss-nonstiff-cubic-ivp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says the method “exactly solves” the IVP, but the proof establishes only the one-step endpoint; it even concedes the collocation polynomial may differ from the exact path in the interior. The overclaiming title is a defect.",
      "context_sha256": "624dfd238829a846881c338adda30fa2fc21de447871de001d43c431055a5302",
      "item_sha256": "ac4d4c4224c1260f979e21acd286b1b139ca75b38d857371540ab4625b3f4966",
      "at": "2026-10-17T01:56:25.705Z"
    },
    {
      "id": "lem-gauss-collocation-weighted-defect-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The bound quantifies over sufficiently small h≤h₀ but never assumes h≥0. Negative h are therefore allowed, making C h^(2M+1)<0 for C>0, so the stated norm inequality cannot hold. Specify 0≤h≤h₀ (or use |h|).",
      "context_sha256": "4c73b6134ef9cc78463791454c869573d0ab9460a1cbe7fad1b295412eb755a9",
      "item_sha256": "0f8d240134c44b415193876b5aa5e028737323a6e564cc2b3752d8e13f7bd64b",
      "at": "2026-10-17T01:56:43.001Z"
    },
    {
      "id": "ex-sdc-constant-predictor-too-few-sweeps",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its cited theorem: p=1 supplies an O(h) global-order guarantee, not an upper bound proving U^0 is only first-order. The later endpoint lower bound proves this example is not order two, but does not make that dependency restatement accurate.",
      "context_sha256": "e926499942a231bbf1f5a47f4fe45ccc6d73383ac7e6d45113aa3dfd3221eeac",
      "item_sha256": "e3fca8a4e1fd53f12ba6f198ae9df65efa03a29bad7bc5611dc84a298eead3f5",
      "at": "2026-10-17T01:57:04.784Z"
    },
    {
      "id": "ex-sdc-inexact-midpoint-stage-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The tableau does not determine an SDC preconditioner QΔ. The claim QΔ=0, and hence the stated SDC sweep increment and contraction factor, requires an unstated sweep choice; other standard choices have QΔ≠0.",
      "context_sha256": "6d8a40539aad66301da7d33fb954933083e4d102c905f7277df57e3284aa1a51",
      "item_sha256": "8dfdedd5019c493ec7f5306a31e12cb1c53e3feef6d7ea73ab9e2db83cc716ff",
      "at": "2026-10-17T01:56:45.084Z"
    }
  ]
