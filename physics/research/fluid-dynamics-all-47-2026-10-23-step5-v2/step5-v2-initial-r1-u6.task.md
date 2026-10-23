# Step 5 adjudicate: initial, round 1, unit 6

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-batch-6-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"initial",round:1,unit:"6",input_sha256:"9be711b940a681b75640bcf998c1259c5d3eb539d47214af2cabfb73a7f7cd6d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:thm-fd-x04, 2:thm-fd-x13, 2:ex-fd-x06-formal-verification, 2:ex-fd-x08-formal-verification.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-fd-x04",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title implies Couette–Poiseuille verification for both geometries, but the pipe proof covers only stationary-wall Poiseuille flow; it has no Couette driving.",
      "context_sha256": "a701004fb21b4e898e931adcc4a3b554292e0b60c190073d7812ee395ed13425",
      "item_sha256": "794e7783a864b2460403e96aab7f14aac3f2cd2a35dd345ebc3aa212c504f518",
      "at": "2026-10-22T22:45:17.016Z"
    },
    {
      "id": "thm-fd-x13",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 defines a stress resultant only for patches S⊂Ω. Here Ω={r>a}, while the claimed sphere r=a is its boundary, not a subset; F2 therefore does not license calling this boundary integral the defined Euler resultant.",
      "context_sha256": "4beddb9416c7370f579e4be0d5d6528523e610bd64b35e54609f728820d04384",
      "item_sha256": "2690cdcb414cd5bc25a7983647ee001edca09988a66d24d30602a6126621a9de",
      "at": "2026-10-22T22:42:21.912Z"
    },
    {
      "id": "ex-fd-x06-formal-verification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example applies [F1] without establishing or assuming its AC_ω hypothesis. Saying the supplier's proof assumes AC_ω only reports that condition; it does not show it holds here. Thus the uniqueness conclusion is unsupported.",
      "context_sha256": "0cc157cc9a5766be8a971b53eaee807e86e9cada59799e47d970c2e7622ba086",
      "item_sha256": "46ff81deaf6b4f39fd1793c9f4317ada9c8a4b0437fecc43c87bdfcbd8710a9f",
      "at": "2026-10-22T22:41:23.146Z"
    },
    {
      "id": "ex-fd-x08-formal-verification",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 lacks ν=1 for the periodic field: the cited theorem gives Γ(t)=2C_{π/2}e^{-νt} when k=1. The stated e^{-t} formula is unjustified; ν=1 is specified only for the wall layer.",
      "context_sha256": "8f8efca133c1505a7c62af20a0135616bfff49e5c9d018542a8696c00dd795a7",
      "item_sha256": "4156960c349f2e62ceb418296a2582f219853c8c3f2640074655a438eeca7a99",
      "at": "2026-10-22T22:41:32.353Z"
    }
  ]
