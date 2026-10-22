# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"30",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-ip-collared-sobolev-besov-source-functional-cutoff, 1:lem-ip-collared-liouville-potential-and-hone-recovery, 2:lem-ip-geometric-logarithmic-frozen-stopping-schedule, 5:lem-ip-joint-range-invariance-vsc-estimate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-ip-collared-sobolev-besov-source-functional-cutoff",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates [[thm-plancherel]]: its supplied interface gives the L² unitary extension, not the distributional extension or derivative-multiplier rule. Steps 3.2 and 4.1 rely on these extra facts, which the cited interface does not license.",
      "context_sha256": "6b459ac18f0a8929f1ffaf25dc74db62f67e28f86d3708ea7047da8be7b3bf20",
      "item_sha256": "182d596f882cbeb8771b6b93c8c2d746885ebb310f54ca0110a47091f33854c2",
      "at": "2026-10-21T14:28:45.344Z"
    },
    {
      "id": "lem-ip-collared-liouville-potential-and-hone-recovery",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 overstates [[lem-ip-collared-sobolev-besov-source-functional-cutoff]]: its supplied interface defines the intrinsic norm and proves a source bound, but states no zero-extension/Fourier norm comparisons. Step 2.1 relies on this missing comparison for its H^θ Fourier multiplier ",
      "context_sha256": "c126e752ad3b16425a34674a740c3320a266b4b716141b593703508d8252be63",
      "item_sha256": "d7d42196373419d3637e6441f8a45538acbe97df7cddc9440d6ed4fdb315cb03",
      "at": "2026-10-21T14:29:58.476Z"
    },
    {
      "id": "lem-ip-geometric-logarithmic-frozen-stopping-schedule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited frozen-Newton rule [Theorem 7, (2.32)](https://arxiv.org/pdf/2403.18704) stops at the first index with ρ_n≤τw. N is the last with ρ_N≥τw, generically its predecessor, so applying that rule at N is unjustified.",
      "context_sha256": "01d70f10cc23b9e3ecab8eb132ad6c8fa278d37a28cb8d3cba1a9e992d25c9af",
      "item_sha256": "b50356beed3324e98651e3e9dcff104ad2574c772a9d5c46199e09f504cc3b38",
      "at": "2026-10-21T14:28:53.632Z"
    },
    {
      "id": "lem-ip-joint-range-invariance-vsc-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The VSC dependency requires ψ(t)>0 for every t>0, but the statement/F5 only assumes nondecreasing concave ψ with ψ(0)=0. This weakens the cited interface while labeling the assumption as its VSC.",
      "context_sha256": "d21f3702e850a12ae5721c0d6978aabd3b99ad95e14158099accc16cbd30d874",
      "item_sha256": "a49ac0bdfcd7e03d2df085142bbc7c95180acf3dc2efcef89ddc327db1783cdf",
      "at": "2026-10-21T14:29:06.470Z"
    }
  ]
