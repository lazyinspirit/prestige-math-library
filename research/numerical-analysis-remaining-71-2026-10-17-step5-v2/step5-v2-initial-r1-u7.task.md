# Step 5 adjudicate: initial, round 1, unit 7

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-7-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u7.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"7",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-leibniz-determinant-forward-error-bound, 2:alg-exact-dyadic-determinant-sign, 3:lem-lifted-determinant-sign-matches-sphere-side, 3:thm-floating-filter-sign-is-exact, 4:alg-certified-dyadic-geometric-predicate, 5:thm-certified-dyadic-geometric-predicate-sound-and-terminates.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-leibniz-determinant-forward-error-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The determinant dependency defines det M only for matrices over D, but the statement allows any selected floating-point system, whose representable values need not be dyadic. The cited Leibniz formula therefore does not cover every M in the claim.",
      "context_sha256": "86b7f81d5d70f917886184c3f21f8006c00e87b849b4897bf58c50ab3fe7c498",
      "item_sha256": "0be95501c1980ad027360fe4e4f77a10cd7bff0174fa407321f7bec85c0474e8",
      "at": "2026-10-18T03:08:11.306Z"
    },
    {
      "id": "alg-exact-dyadic-determinant-sign",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Definition embeds a correctness proof, but algorithm conventions require correctness and termination in separate proved results. The justified_by theorem covers alg-certified-dyadic-geometric-predicate, not this arbitrary-matrix routine.",
      "context_sha256": "24b07b4c8ff50b8b4a89a7a786bc9a524fe6dae44cbdfcc26fdc87283abd4b8e",
      "item_sha256": "23f5422e5854bc16f5440ef7fb3b9e33b3595b7894a7984be67b3880bf23bf6e",
      "at": "2026-10-18T03:08:13.295Z"
    },
    {
      "id": "lem-lifted-determinant-sign-matches-sphere-side",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims: L_d alone does not record sphere side; the proof establishes that O_d L_d does. Reversing the base-point order flips L_d while leaving q’s side unchanged, so the title’s claim is false.",
      "context_sha256": "09890efe53a5299ef117cb40c018a2ebcd50a395c41834ea8f13691c8de7bb26",
      "item_sha256": "388742d588c193e660c09d279084afae29aaab83aeb34f70d021be04a6cc00db",
      "at": "2026-10-18T03:08:22.411Z"
    },
    {
      "id": "thm-floating-filter-sign-is-exact",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 claims F1 implies a positive result has Dhat−E>0, but F1 only says a returned sign requires an interval excluding zero. The branch threshold comes from the algorithm’s step 4, which this proof step does not cite.",
      "context_sha256": "0dcf7b5866273b2cb12839cf69530ccdf1e80f362a85c7f5d5b4f8b625cff85c",
      "item_sha256": "95a50f76952d29665593d26384c3968f0ac2fcb043fe18c1ffcb3f174c1f5aac",
      "at": "2026-10-18T03:08:23.402Z"
    },
    {
      "id": "alg-certified-dyadic-geometric-predicate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The input allows any finite point tuple, but orientation needs d+1 points and lifted requests need d+2. No admissible arity is stated, so a 2D orientation request on one point cannot construct its matrix.",
      "context_sha256": "89e36f6d996a754229557242e8a34a08533e53c06d427a5d09d3758891ea2276",
      "item_sha256": "3985b7ddf6ed95cfc07d702f4d742fea86e548c155efb27e9c77e877bb62d253",
      "at": "2026-10-18T03:08:44.421Z"
    },
    {
      "id": "thm-certified-dyadic-geometric-predicate-sound-and-terminates",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.3 assumes a nonfinite filter result goes to the exact fallback, but the predicate interface routes only unavailable or inconclusive results there. [F2] gives nonfinite results no sign guarantee, leaving that branch uncovered and soundness and termination unproved.",
      "context_sha256": "c30b4ff2a6572a5252765b4765c96c3df0d904c7dc489d9ed48a91624322014f",
      "item_sha256": "7abf53cb95c6d0ac1708a4944dba59b21522149c593b55443343b87e3a4648ef",
      "at": "2026-10-18T03:08:47.437Z"
    }
  ]
