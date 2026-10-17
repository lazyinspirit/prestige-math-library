# Step 5 adjudicate: initial, round 1, unit 107

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-107-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u107.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"107",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:thm-complete-chaos-tensor-expansions-give-sobol-coefficients, 6:alg-pick-freeze-monte-carlo-sobol-estimators, 6:ex-noisy-simulator-intrinsic-noise-and-input-sensitivity, 7:ex-ratio-pick-freeze-index-estimator-is-biased.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-complete-chaos-tensor-expansions-give-sobol-coefficients",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 attributes the inclusion–exclusion identity for f_u to the cited Hoeffding theorem, but its supplied interface does not state that identity. Step 2.1 relies on this unlicensed premise.",
      "context_sha256": "01a366f83bc8874da69ae23b71aa74a1168f683e20d0c2235a7855dac6d28718",
      "item_sha256": "57256adbff81b6a38042cdc849b7b378be9043f379007bfc2f388866444c1972",
      "at": "2026-10-17T02:00:24.711Z"
    },
    {
      "id": "alg-pick-freeze-monte-carlo-sobol-estimators",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "f∈L² does not ensure Z has finite second moments. For d=1, let P(X=k)∝k⁻⁴ and f(k)=k; then f∈L² but E[f⁴]=∞, and N₁=f(X)²−f(U)f(V) has infinite variance. Thus the stated covariance and MCSE covariance are undefined for allowed inputs.",
      "context_sha256": "b138d06fff526003f48fae6761efd80cecdff2631cfc0a86728b0bbe79dd6813",
      "item_sha256": "886ab0af2f1cacbae7c7993fa4915263ac933f8638a3702d656b9bed1b4aaaf2",
      "at": "2026-10-17T02:00:26.486Z"
    },
    {
      "id": "ex-noisy-simulator-intrinsic-noise-and-input-sensitivity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 divides by Var(Y) without requiring it positive. If f is constant and τ²=0, then Var(Y)=0, so the claimed normalized noisy ratio is 0/0 and undefined; add a Var(Y)>0 caveat.",
      "context_sha256": "67c23463d320f2c448f7264c5e0a32d6dc5f724e97a8d48bf49c9ce9f94f1b1d",
      "item_sha256": "268aba15a6757643950d524ffca68b32e2c20e6ff63df4de01071dd2c91db4a6",
      "at": "2026-10-17T02:00:29.875Z"
    },
    {
      "id": "ex-ratio-pick-freeze-index-estimator-is-biased",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the algorithm’s return condition: it says the ratio is returned when a row-level D>0, while the interface returns it only when the sample mean \\bar D>0. For two rows, the condition is K>0.",
      "context_sha256": "796b8318139175472e29d385b799b3f397e9aa4d4b5f6b789b61772de8d5e54d",
      "item_sha256": "948a00ab0406bbd1c0c57ab7dcf20b534b147a5085ad140f84f9feeb1a2ada66",
      "at": "2026-10-17T02:00:25.084Z"
    }
  ]
