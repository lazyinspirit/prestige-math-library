# Step 5 adjudicate: initial, round 1, unit 67

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-67-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u67.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"67",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-pa36-module-global-sections-derived-cohomology, 0:lem-pa36-p1-line-bundle-cohomology, 1:lem-pa36-nilpotent-normality-and-springer-functions, 4:lem-pa36-localization-adjunction, 7:cor-pa36-category-o-localization, 8:ex-pa36-finite-dimensional-integral-central-character.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-pa36-module-global-sections-derived-cohomology",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 overstates its dependency: the cited theorem requires a resolution relative to a supplied injective datum, and the input and every cycle must lie in its class. The proof’s “any acyclic resolution” restatement omits these conditions and does not identify the abelian-sheaf datum",
      "context_sha256": "57a879ecabf1f3d8ea33a27f14310e185b3cc1e7ef0838403832cfbc04155a96",
      "item_sha256": "0a6f90b616017e66d44d721d945b4fe99aec545645562a468d72e3ff88a58f93",
      "at": "2026-10-18T04:43:38.234Z"
    },
    {
      "id": "lem-pa36-p1-line-bundle-cohomology",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“Global sections on U0” is false as written: Γ(U0,O(d))=C[z]e0 for every d. Polynomials of degree at most d describe restrictions to U0 of global sections on P1.",
      "context_sha256": "6e3a44744220d5672ee3237a98f2fdd95cfac5ce24912eff116dd44e9b8f8b23",
      "item_sha256": "300420df21708cbd2002e75b53319137358c8bd3631927713c16be0f207a1c04",
      "at": "2026-10-18T04:43:08.770Z"
    },
    {
      "id": "lem-pa36-nilpotent-normality-and-springer-functions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 overstates its cited interface: that lemma supplies the reduced integral-domain and dimension facts for A, but says nothing about dim Z_g(e)=rank G or every nilpotent being conjugate into n+. These unsupported claims are essential to the orbit-dimension argument and μ's surjec",
      "context_sha256": "634e17903fa61c811d4f7054d0ba0df8117c93c5c1da6ce19c0330bb3487c5e3",
      "item_sha256": "ec69ae3de697ed8cf4e7bcf855b2182a1feb84efa40b4e2ec426c296b6bb9c5a",
      "at": "2026-10-18T04:43:25.950Z"
    },
    {
      "id": "lem-pa36-localization-adjunction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is unsupported by its cited interface: def-sheaf-tensor-product only defines tensoring O_X-modules; it gives no affine computation, A-relative tensor product, or quasi-coherence result. Thus the proof does not establish that Locκ V lies in its claimed codomain.",
      "context_sha256": "e594d7d24ad833002d20161c699ec2e7139b99e99bd592a3a9a144d868d1b99c",
      "item_sha256": "7cfc04c82daf487326f4bbbde780008213082bc15eded867be1295e02998f485",
      "at": "2026-10-18T04:43:23.865Z"
    },
    {
      "id": "cor-pa36-category-o-localization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 relies on [[def-pa36-flag-tdo-and-module]] for Aκ’s central-quotient definition, but that item is missing from deps. Add it as a direct dependency; the proof currently uses an undeclared dependency.",
      "context_sha256": "7705cba5d227f4b4a1a17761948e078f519d0dd9cf8ac430dd561ac9d24d0a5e",
      "item_sha256": "dcf326fc9d646cfdde89c9e6203ed35910293ba808eae4c390f3d4f903fab120",
      "at": "2026-10-18T04:44:08.914Z"
    },
    {
      "id": "ex-pa36-finite-dimensional-integral-central-character",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims all finite-dimensional sl2 modules lie in one exact central-character part, but the proof covers only V(nρ). For example, V(0) ⊕ V(ρ) has distinct central characters, so it is not in any single exact central-character subcategory.",
      "context_sha256": "54b316837ec870d4757c912f058e7d33a572c775ac1f4c4124ad518d18c5104f",
      "item_sha256": "573990dc4c0ea0cef1c073352098142e1b92aa2c504984e303390e45e9c728ae",
      "at": "2026-10-18T04:43:50.356Z"
    }
  ]
