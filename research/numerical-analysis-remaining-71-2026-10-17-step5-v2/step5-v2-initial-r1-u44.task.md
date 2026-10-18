# Step 5 adjudicate: initial, round 1, unit 44

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-44-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u44.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"44",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-fv-regular-simplicial-companion-family, 1:def-hybrid-mimetic-fv-scheme, 2:prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact, 2:ex-harmonic-transmissibility-material-interface, 3:lem-hybrid-mimetic-backward-euler-energy-and-compactness, 3:thm-tpfa-discrete-rellich-and-physical-gradient-closure.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-fv-regular-simplicial-companion-family",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency defines cells as open interiors and faces as relative interiors, but this requires each cell and original face to be a finite union of closed simplices or facets. Those unions include the boundaries and cannot equal the defined sets. Specify subdivisions of their c",
      "context_sha256": "bac95a0cda400a41f2ed2656a40ad1c0ab10d82d8038af9e54a9b7ae67ec8c8f",
      "item_sha256": "1f419f6eca83c5b8d44f48b204b26c0a54ea717cd314246ddab716f1308406a7",
      "at": "2026-10-18T03:24:41.400Z"
    },
    {
      "id": "def-hybrid-mimetic-fv-scheme",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The linear scheme uses f in ∫_K f(x) dx without declaring f or requiring those integrals to exist, so its right-hand side is undefined for unrestricted data. Specify, for example, f∈L¹(Ω).",
      "context_sha256": "2fa7afd53754432382f1801fabdbc3aa306980659e52f7761bda4126ecc2fa55",
      "item_sha256": "b390a12a8f01b24db0558d69d89620504618c44807cf535141102c46d78aa2b9",
      "at": "2026-10-18T03:24:30.486Z"
    },
    {
      "id": "prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The claimed local gradient-residual norm is only a seminorm: for nonzero constant local DOFs v_K=v_F=c, face closure gives G_Kv=0 and every residual vanishes. The stated norm characterization is false unless constants are quotiented out.",
      "context_sha256": "0533df71dcb73341c15fa608313fef8f6ef9706332ccd6cc6941957491c89910",
      "item_sha256": "6cc687e4b2fef6b3d920524cd418440b10fe30b6a617b2a05062956b17ed2102",
      "at": "2026-10-18T03:25:00.181Z"
    },
    {
      "id": "ex-harmonic-transmissibility-material-interface",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The mesh dependency leaves each x_K as a chosen point; it does not require midpoint centers. The example never independently specifies those choices, so the distances, sampled values, and claimed TPFA flux do not follow.",
      "context_sha256": "45ab58fc58165d36edeb2e8b47efeda5dad76166470aa9e5fc8716675bec8b18",
      "item_sha256": "286215a7aecca2c229ff540642dc7bf061bb3d04f5872d93bc8c231f3cab6beb",
      "at": "2026-10-18T03:24:52.972Z"
    },
    {
      "id": "lem-hybrid-mimetic-backward-euler-energy-and-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 says the load with I_h z is exactly ∫ f^n z. Since I_h z uses cell means, the discrete load is a sum involving cell averages, generally not that integral. The derivative estimate needs a different Jensen bound.",
      "context_sha256": "fb05ff306bd2b34492cc88b2ebe48bfb00edfc3472628787218655781e3945e6",
      "item_sha256": "474741817d3fb71077ae13227bf6c408c12ce5304fa2ff600e2bdcccc72b92d2",
      "at": "2026-10-18T03:24:48.430Z"
    },
    {
      "id": "thm-tpfa-discrete-rellich-and-physical-gradient-closure",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 uses the weak-subsequence corollary without discharging its ultrafilter lemma, DC, and HB assumptions. AC is listed only as an axiom definition; the supplied AC-to-ultrafilter theorem is absent from this item’s dependencies.",
      "context_sha256": "4cf4b1362e8ee396be2d678144b62bee186a9d2fb16991bc467d56094a0161aa",
      "item_sha256": "5ee5ed5db8659d570406078057e531391bd8b0a10f94075c3e0e21b1f45d4d01",
      "at": "2026-10-18T03:25:12.071Z"
    }
  ]
