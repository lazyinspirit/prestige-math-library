# Step 7 adjudicate: initial, round 1, unit 25

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-em-sr-40-2026-10-08-step7-v2/step7-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-em-sr-40-2026-10-08",phase:"initial",round:1,unit:"25",input_sha256:"abf4e458aa807c1279b7d6c26197bd7b0cbd023a33b6e1338fb93d991f410809",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step7-workflow.mjs review-contexts --run physics-em-sr-40-2026-10-08 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-em-distributional-gradient-smooth-off-a-point, 0:lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains, 0:lem-em-newtonian-far-field-gradient, 15:def-em-electrostatic-regime, 16:pthm-em-coulomb-solution, 17:ex-em-infinite-line-normalization, 18:pthm-em-electrostatic-work.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-em-distributional-gradient-smooth-off-a-point",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 overstates its cited closure proposition: the supplied interface covers increasing limits and indicator multiplication, not arbitrary pointwise limits or bounded measurable products. Step 1.1 uses the latter without establishing the extension locally.",
      "context_sha256": "ec5509b9250814e56e4dc107cccd06cd91fb1facd83ebf5563a990c678d8a0eb",
      "item_sha256": "0c1cc9087478d612c4e5345519f44c548099ae58117242855de462d81755d84f",
      "at": "2026-10-10T04:15:19.191Z"
    },
    {
      "id": "lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The supplied Euclidean interface defines x_k=x(k) for k<3, so only x_0,x_1,x_2 exist. The faces and charts use k∈{1,2,3}, making x_3 undefined and omitting coordinate 0. No relabelling is defined; the claimed six-chart cover is therefore invalid.",
      "context_sha256": "765078173e0f317b9f9e1f90cbab2ef31637d473ce94254f232b2853d57aadf5",
      "item_sha256": "fe0a2add76adfc669e464f04f9885aca29a05f6e2de7641295c39972f70608e1",
      "at": "2026-10-10T04:15:07.910Z"
    },
    {
      "id": "lem-em-newtonian-far-field-gradient",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 uses i=1,…,n, but the supplied Euclidean and gradient interfaces index coordinates 0,…,n−1. Thus e_n and ∂_n are undefined, while ∂_0 is never established; step 5.1 cannot infer differentiability from all partial derivatives.",
      "context_sha256": "1851ef8e2a5fdd75c5d55539e39024ad0d67996c79322201bb3706531fdff6e7",
      "item_sha256": "8b07a920f3365d71444b077907b39cccf832658eb2154879c685dc431c008c3a",
      "at": "2026-10-10T04:14:53.752Z"
    },
    {
      "id": "def-em-electrostatic-regime",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 pairs qδ_{x0}∈D'(Ω) with the temporal test t↦ψ(x0,t)∈D(I). This pairing is undefined and is not licensed by F6/F8. The correct expression is ∫_I⟨qδ_{x0},ψ(·,t)⟩dt.",
      "context_sha256": "55a5688a503c750f0d06a2923610ffec163c6cfafe64b9fa91c1699fbf4e0628",
      "item_sha256": "ffd24b4a2da015bd992f410d4d7a4a96f7fc53352b890b306e495876256b298d",
      "at": "2026-10-10T04:15:16.637Z"
    },
    {
      "id": "pthm-em-coulomb-solution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (a)'s decay bound adds |Q| (C) to R||rho||_1 (C m) and compares |x| with dimensionless 1. This violates the cited SI quantity conventions. Introduce a reference length or retain the separate 1/|x| and 1/|x|^2 terms.",
      "context_sha256": "cea216e90cc9ab49eb22ef8b6ef5c1ded6a6b9914e8e282d611eb128c66fba27",
      "item_sha256": "05fde867f216640dd5ae044c16e66971a6554f13f85551591883dc8890977d4c",
      "at": "2026-10-10T04:15:18.513Z"
    },
    {
      "id": "ex-em-infinite-line-normalization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates surface-patch admissibility: injectivity on the interior alone is insufficient. The supplied interface also forbids interior–boundary image collisions. Step 4.1 checks the stronger condition, but F4 remains false.",
      "context_sha256": "ea774d42429f80fb2676b8c04ef614be55abe23be142569e69cbed29ce8aac01",
      "item_sha256": "234db3887a6d3bf71037435929d1f238a86759e145cee12449c85f5e7ce1a83d",
      "at": "2026-10-10T04:15:56.254Z"
    },
    {
      "id": "pthm-em-electrostatic-work",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title equates work with potential difference, but (a) proves W=q times the potential drop. For arbitrary q these are different quantities: work carries joules, potential difference volts. The title therefore asserts an incorrect equality.",
      "context_sha256": "168ad72dd8463466ad3bba6efa66b38603fd5f25e0d2502c9da2bc3cfd85af58",
      "item_sha256": "d10471e17d71c213d71097cff39745d6c64b42666905926e637191713fe181ee",
      "at": "2026-10-10T04:15:13.946Z"
    }
  ]
