# Step 5 adjudicate: initial, round 1, unit 52

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-52-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u52.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"52",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-nitsche-restriction-bessel-potential-sobolev-spaces, 2:lem-nitsche-scaled-fractional-simplex-trace, 3:lem-nitsche-global-fractional-boundary-flux-trace, 5:ex-nitsche-penalty-below-and-above-coercivity-threshold, 6:thm-symmetric-nitsche-l2-error-under-dual-regularity.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-nitsche-restriction-bessel-potential-sobolev-spaces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited H^s interface defines an abstract completion and explicitly supplies no identification with functions or distributions. Thus U|_D and equality almost everywhere are undefined here; the definition needs to construct or cite a realization into L² before restricting.",
      "context_sha256": "ca1be23ba906dc1d79fb730106b2f072e27c1ce10f9ce449a2d2358ca2e0840b",
      "item_sha256": "c83bde37591db4077b8805f661aaea800cf977adabaee9074e4ed033b3d08856",
      "at": "2026-10-18T03:26:44.553Z"
    },
    {
      "id": "lem-nitsche-scaled-fractional-simplex-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The endpoint proof attributes the affine weak-derivative pullback formula to [F3], but its interface supplies only geometric scaling bounds. That unsupported step is needed to place the pullback in W^{1,2} and apply the reference trace theorem.",
      "context_sha256": "796ce5b1e3cc88d8734471d9e132b9f56923c57faa403ae1015fe37d36172211",
      "item_sha256": "9a2e0452241009ce6f468df99a1642a39073d1321493478de98cfa207db040f1",
      "at": "2026-10-18T03:27:37.820Z"
    },
    {
      "id": "lem-nitsche-global-fractional-boundary-flux-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 bounds traces on finite simplex facets and identifies them with the whole-plane trace; it does not give the full-plane estimate claimed in 1.1. The proof needs ‖T_P∇Z‖_{L²(P)}≤C‖∇Z‖_{H^s} and never derives it from F3.",
      "context_sha256": "bdde46344f214045585785b40485597e16510538b6503e2aa201510df5ae6005",
      "item_sha256": "3b35055d00f4635b9a4feedd5e0ab4e2e2750b8d6a8717925b0cba4c47d1f60a",
      "at": "2026-10-18T03:27:50.822Z"
    },
    {
      "id": "ex-nitsche-penalty-below-and-above-coercivity-threshold",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example says “any nondegenerate bounded simplex,” which includes intervals, but the cited form and coercivity interfaces require d≥2. Step 2.1 therefore applies the coercivity lemma outside its stated hypotheses.",
      "context_sha256": "8ab37dba4cfb823e7be8d53a4357217b71d89dbc27a5cced9297a56e71e82f55",
      "item_sha256": "980ed0d8789570760cfd9e63cc7b8a4f39f1edae0a745f2ede3e048a3d531c12",
      "at": "2026-10-18T03:27:03.505Z"
    },
    {
      "id": "thm-symmetric-nitsche-l2-error-under-dual-regularity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The setup does not state shape regularity, which the cited interpolation theorem requires for its mesh-uniform C_D estimate. Thus the cited theorem does not supply the asserted z_h bound under the stated hypotheses, so the L2 conclusions do not follow.",
      "context_sha256": "7bdb6cbf68c872af2fbb381957fb181450a2c1f3934dc55a94d7a2be1d3e0f0d",
      "item_sha256": "ef3448414bef88602aeb504974e16077e22c3a994e6eeb2e1fab60537452c5a3",
      "at": "2026-10-18T03:27:32.220Z"
    }
  ]
