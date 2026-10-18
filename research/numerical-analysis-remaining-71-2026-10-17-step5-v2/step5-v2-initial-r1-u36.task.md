# Step 5 adjudicate: initial, round 1, unit 36

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-36-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u36.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"36",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-pe04-upwind-dg-transport-discretization, 2:thm-pe04-upwind-dg-l2-energy-stability, 3:lem-pe04-cellwise-l2-projection-exists-best-approximation, 4:thm-pe04-ssprk33-first-order-upwind-entropy-preservation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-pe04-upwind-dg-transport-discretization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For d≥2, the mesh interface defines faces to include lower-dimensional subfaces and distinguishes facets. The flux sum must range over facets: lower-dimensional faces have no unique outward unit normal, so b_{K,F} and the stated integrals are undefined there.",
      "context_sha256": "d153dc72f93af28ae32cfcf0905e2ea1d4a7942f2e403f089105b35d171cd965",
      "item_sha256": "3fac2fb18fa70de0d3e4dd0cd0808a1a3e24642f5944591deeee80186e97e461",
      "at": "2026-10-18T03:21:06.169Z"
    },
    {
      "id": "thm-pe04-upwind-dg-l2-energy-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency interface imposes no L² condition on inflow data. In d=2, an L¹ but non-L² datum on an inflow facet makes the weak DG flux finite, yet the claimed ∫Γ₋|β·n|g² is infinite, so the identity fails.",
      "context_sha256": "0162d6ab7c42acae719b1ef62123fe34f09d41632a175c8dac6bd354a6fc26cc",
      "item_sha256": "f202e443641b9efdfce7ab830cfce231945ca3a3e611c7c408e203af956b7689",
      "at": "2026-10-18T03:21:22.276Z"
    },
    {
      "id": "lem-pe04-cellwise-l2-projection-exists-best-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement quantifies over every p≥0, but the cited definition supplies the projection relation only for integer degrees. Restrict p to integers; otherwise the claim is not supported by the dependency interface.",
      "context_sha256": "f0d0434aa78b76928fbb6f285c10cc3cda7f81d802301b14e1c1614629d4f16a",
      "item_sha256": "46a654573bbf4c76de1cb36f4afb4bc67a9eed9197bf5bdc1909ff872b17a4aa",
      "at": "2026-10-18T03:21:22.971Z"
    },
    {
      "id": "thm-pe04-ssprk33-first-order-upwind-entropy-preservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits d≥2, required by both cited forward-Euler interfaces. Assuming their cellwise CFL condition alone does not license [F2] for a 1D mesh, so the entropy-transfer proof lacks a prerequisite.",
      "context_sha256": "51b285a065102c4fb834dad7a3a0acd691464780ada9a654f38ba001b62e5ba9",
      "item_sha256": "747c37f90f79908391b0dea11a1cf4d12051f950da37b167a617f32bd9e92127",
      "at": "2026-10-18T03:21:28.885Z"
    }
  ]
