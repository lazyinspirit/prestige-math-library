# Step 5 adjudicate: initial, round 1, unit 68

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-68-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u68.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"68",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-hp-simplex-p-dependent-face-trace-inverse, 2:thm-hp-analytic-p-convergence-on-fixed-tensor-mesh, 2:thm-hp-corner-exponential-energy-convergence, 3:thm-hp-galerkin-h-p-regularity-energy-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-hp-simplex-p-dependent-face-trace-inverse",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Proof 3.1 says Countable Choice is required by both F3 and F4, but F4’s supplied interface has only σ-finiteness and L¹ hypotheses; only the scaling supplier is marked as using choice.",
      "context_sha256": "edcc8e70be21752595fcbbad47cbb313e40678fe768114bba025fc522d3c1a02",
      "item_sha256": "21288e6e0ace71fe1ac4ea97c7dd4ef230db227c1919320b1fabcc83323b9266",
      "at": "2026-10-18T03:33:19.477Z"
    },
    {
      "id": "thm-hp-analytic-p-convergence-on-fixed-tensor-mesh",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F8] omits the supplied interface’s Countable Choice hypothesis; the axiom_use claim also says CC enters only through [F7], despite relying on [F8].",
      "context_sha256": "a844f95a3572f84a36fcb607e7ee2997627fda9630ca5d56aa87d9cb095f1313",
      "item_sha256": "1da15ae6ce92a5d675e084f880eeccce68fc0823871d7f12088bda6807fcc6c7",
      "at": "2026-10-18T03:34:03.006Z"
    },
    {
      "id": "thm-hp-corner-exponential-energy-convergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Galerkin extension never states that u is the PDE’s exact solution. Céa bounds error to the variational solution; membership u∈V alone does not identify them, so the claimed energy-error rate does not follow.",
      "context_sha256": "82786ee865e87a7d4996527f93b25cbf4a0ed0b2a0c4fe6d522aaf54ef23ba8e",
      "item_sha256": "df8aa72e92f1781cefe3029d2fc2250c9c935533f0bd005d5fefebc0c1a8df8c",
      "at": "2026-10-18T03:34:08.153Z"
    },
    {
      "id": "thm-hp-galerkin-h-p-regularity-energy-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Steps 3.1/4.1 need scaled trace bounds controlling the edge terms in J_K by h_K^-1||w_K||_K+|w_K|H1+h_K|w_K|H2. The supplied F1 interface takes those edge terms as inputs; it does not provide these bounds, so its citation does not license the h and p refinements.",
      "context_sha256": "2832e99896a131529dd5e0bf51bb370044026e0cf19b7c77900cae156d81a46c",
      "item_sha256": "9875af7c1929e8c7a8411f9fa6ae06005ec9ef0032a2670a566b1dccda1ab68e",
      "at": "2026-10-18T03:33:57.805Z"
    }
  ]
