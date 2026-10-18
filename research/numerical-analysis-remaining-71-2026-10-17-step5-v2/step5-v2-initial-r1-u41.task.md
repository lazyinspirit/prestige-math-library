# Step 5 adjudicate: initial, round 1, unit 41

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-41-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u41.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"41",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:ex-na-periodic-taylor-green-vortex, 2:ex-na-zero-mean-pressure-gauge, 3:def-na-evolutionary-incompressible-ns-weak-solution, 5:lem-na-mini-be-scheme-is-well-defined, 6:lem-na-continuous-pressure-recovery-from-solenoidal-residual, 8:lem-na-mini-fortin-l2-approximation, 8:ex-na-unit-square-mini-mesh-family, 9:lem-na-mini-fortin-h2-approximation, 9:lem-na-mini-weak-solenoidal-compactness, 10:ex-na-conditional-three-dimensional-flow-computation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "ex-na-periodic-taylor-green-vortex",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 attributes definite-integral evaluation to thm-ftc-first-part, whose interface only says the integral function differentiates to the integrand. Evaluating via the sine antiderivative needs FTC II or a cited uniqueness-of-primitives argument.",
      "context_sha256": "5a17b69e09fc611673e0b768318d70c4ec20c2e5042a46b7b186c9cf16097a06",
      "item_sha256": "75c8bb7ab23aef26743ca0828bdb8c4c1ccd3d63b419b6a72ea89ae69fe86007",
      "at": "2026-10-18T03:23:38.808Z"
    },
    {
      "id": "ex-na-zero-mean-pressure-gauge",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the interface: b(v,q) is defined only for q∈L²₀(D), but the example uses b(v,p) for arbitrary p∈L²(D), including p+c. The cited definition also requires D to be Lipschitz and d∈{2,3}, absent from the example's assumptions.",
      "context_sha256": "97ac5520c118b9f950d2a22bff6b0295950569413d95538844dfa1746bbdf450",
      "item_sha256": "aeacd4f1ea7e1790b55e73e24004f8266f853e881ea6d7edba2fe0fb5efabe34",
      "at": "2026-10-18T03:23:25.307Z"
    },
    {
      "id": "def-na-evolutionary-incompressible-ns-weak-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "T is never introduced or quantified, yet the data spaces, test interval, and energy bound all depend on it; the definition does not specify its time horizon.",
      "context_sha256": "f6d28ec93904062f28586f3babfa2f1e162800549a38197faaa16cad7b05909e",
      "item_sha256": "ea4e30d70c326185dca4f359b6a64640097e01bc41efed7e56a8a445d83d930c",
      "at": "2026-10-18T03:23:16.892Z"
    },
    {
      "id": "lem-na-mini-be-scheme-is-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The scheme definition is a dependency of this lemma, but it itself says the equations are well-defined by this same lemma. That creates a circular dependency and justification.",
      "context_sha256": "7eab2c188f0c32599567decb98102c8d794330d4d4d847c4f0c74ba47d031b7c",
      "item_sha256": "cfdf2b78cb115702939e38a74d3c241cef91808a97f375b1f13b71ed3a07e770",
      "at": "2026-10-18T03:23:24.175Z"
    },
    {
      "id": "lem-na-continuous-pressure-recovery-from-solenoidal-residual",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits the dependency’s required dimension restriction d∈{2,3}; thus [F1] does not supply the asserted divergence right inverse for all stated D. Narrow the domain hypotheses or cite a right-inverse result covering the broader class.",
      "context_sha256": "61c1124a04e4d07d5fb97bd853b127f8db31afe666f552d1999149de056d9e07",
      "item_sha256": "c741bded1632a4b2b505fcdff31f14e8803c256a0c4185e5656ce340c8eae477",
      "at": "2026-10-18T03:23:16.999Z"
    },
    {
      "id": "lem-na-mini-fortin-l2-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Fatal dependency gap: [F1] attributes the explicit bubble-correction formula for Π_h to the Fortin stability theorem, but its supplied interface states only existence, pressure preservation, and stability. Steps 1.1, 1.3, and 2.1 rely on that unsupported formula.",
      "context_sha256": "f84b0ffe89b2b9fe81be6b09f543868c31be17212b5fcae57b3fe50fa8595167",
      "item_sha256": "5a754efd593002018a2f8bc97b3b04719b58a3534c33ac26cd178c84cec6f5e6",
      "at": "2026-10-18T03:23:14.282Z"
    },
    {
      "id": "ex-na-unit-square-mini-mesh-family",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 drops the mini-space dependency’s explicit Countable Choice hypothesis, so the Fortin theorem is not licensed as stated. It also omits the dependency’s dimension and domain restrictions, though the unit square satisfies those.",
      "context_sha256": "db4caa3b3aa63871d3ab074d5b5d15215e01ee3ed3b5ec804bbddb3d68a0f6bf",
      "item_sha256": "9c70e7057789ab5e9f010ce9d1e77d7d1c92e607e7f2b544866442b78047e808",
      "at": "2026-10-18T03:23:38.774Z"
    },
    {
      "id": "lem-na-mini-fortin-h2-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited Fortin theorem's supplied interface guarantees a stable Fortin operator but gives no construction or formula. The asserted cell-moment formula for Π_h is therefore unsupported, and the approximation proof depends on it.",
      "context_sha256": "9998e29729595d8a48e018e11846fe9048e963d4080bff14de5a6cedbe32358d",
      "item_sha256": "d55206d4774bd45dfa8f8441f8daab6cbc4c2fbd6f0d7d68bc278a01be4c0432",
      "at": "2026-10-18T03:23:14.457Z"
    },
    {
      "id": "lem-na-mini-weak-solenoidal-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its dependency: the supplied corollary only makes L²→H¹₀→L² compact for a bounded map into H¹₀; it does not establish compactness of H¹₀↪L². Steps 1.1 and 2.1 rely on that missing result.",
      "context_sha256": "7899a8023ab4ca75a093a634e18cdae123df285f6d8e49da78be5e954599896f",
      "item_sha256": "371eab757d9ca41bdf5e389d5c6b2f1a9f28fc506485346cbd8fb346c636649a",
      "at": "2026-10-18T03:23:28.307Z"
    },
    {
      "id": "ex-na-conditional-three-dimensional-flow-computation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 omits the dependency’s Axiom of Choice hypothesis, while the item gives only Countable Choice. Step 2.1 then applies the theorem to assert weak-strong uniqueness without its stated premise.",
      "context_sha256": "0efde16cefa8ef4d35f4f334df96cd85e19aa3fc84742e181256d48b66605a8a",
      "item_sha256": "39cbc626a07ba30efe71239305a3a27e679a68059c0c3fe06f20194bec99322e",
      "at": "2026-10-18T03:23:34.125Z"
    }
  ]
