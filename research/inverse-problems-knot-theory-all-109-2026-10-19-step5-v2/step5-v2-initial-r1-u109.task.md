# Step 5 adjudicate: initial, round 1, unit 109

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-batch-109-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-step5-v2/step5-v2-initial-r1-u109.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"inverse-problems-knot-theory-all-109-2026-10-19",phase:"initial",round:1,unit:"109",input_sha256:"c872603b0f7c95c42125928ec1ced19e672caec5508e4ce625685b74e981d23d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run inverse-problems-knot-theory-all-109-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-knot-exterior-h1-is-generated-by-meridian, 3:lem-dualizable-slide-clears-meridian-disk, 3:lem-slice-disk-complement-h1-is-generated-by-meridian, 4:thm-dualizable-handle-link-has-two-knot-trace-descriptions, 4:thm-knot-slice-iff-zero-trace-embeds-in-s-four, 5:ex-unknot-zero-trace-and-dualizable-cancellation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-knot-exterior-h1-is-generated-by-meridian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The def-knot-exterior interface requires countable choice, but the statement and Facts omit it; the proof invokes that dependency outside its stated hypothesis.",
      "context_sha256": "4f90dc832613a980659ff3109921eb8afac80c640e97a4b2261898b85a1a4c24",
      "item_sha256": "8465a779f4f08ebb8514f6748599c4390c77615bc6b1612e00c0b64f79b256ca",
      "at": "2026-10-21T16:35:52.107Z"
    },
    {
      "id": "lem-dualizable-slide-clears-meridian-disk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately says “the components” carry zero framings: the supplied interface assigns zero framings to B and G only; R is a dotted 1-handle component, not a framed 2-handle.",
      "context_sha256": "51c0d1785ff22ab902eeaacafd0271156c04fb94890ce56916ed56f4e4d5c9a2",
      "item_sha256": "80cf232b9ff080e7a78d7db84f1b1ace90d3115ffc35caf2d1d20fe06ab116de",
      "at": "2026-10-21T16:37:18.852Z"
    },
    {
      "id": "lem-slice-disk-complement-h1-is-generated-by-meridian",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 misstates [cor-homology-of-spheres]: its interface gives sphere homology, not contractibility or homology of B⁴. Thus the cited dependency does not license the claimed vanishing of the end groups.",
      "context_sha256": "8a5aa3e9cf6819a02209f6f3122c009dd29a74b6c5b4a0cbe92250a52dbcf1af",
      "item_sha256": "d5ab6f5533af23eb9baba04771106cb3555290700390fc65470837d38e280c67",
      "at": "2026-10-21T16:36:11.639Z"
    },
    {
      "id": "thm-dualizable-handle-link-has-two-knot-trace-descriptions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5’s supplied interface guarantees only some finite slide and isotopy sequence; it does not support the claimed one framed slide plus product-bigon isotopy per current intersection. The dependency restatement exceeds the available fact.",
      "context_sha256": "821c97d54bf9eed3d94815c20f140580891c0078a7c7ec4d7ac6ea0da3162245",
      "item_sha256": "070d89286f964394c42980012305a26cb5f27f64675547ceab4d75da0d6e5363",
      "at": "2026-10-21T16:35:56.407Z"
    },
    {
      "id": "thm-knot-slice-iff-zero-trace-embeds-in-s-four",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 calls K' the chosen longitude by F2, but F2 only defines curves with zero exterior class and asserts no uniqueness. It never shows K' has the fixed longitude's framing, so step 2.1's identification with X_0(K) is unsupported.",
      "context_sha256": "830572c8fa4eaf36abe5652ee1af9002ab9c556d2d728a745cc93da73dee64c2",
      "item_sha256": "92cdf99e6f40912484e77bf93da6c525e624189bd8713ecd0d86785a60922bbb",
      "at": "2026-10-21T16:37:58.012Z"
    },
    {
      "id": "ex-unknot-zero-trace-and-dualizable-cancellation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1’s alleged normal frame is invalid: for the standard equatorial S² in round S⁴⊂R⁵, the radial vector in R³ is normal to S⁴, not tangent, so it is not a section of S²’s normal bundle. The frame does not establish the claimed triviality.",
      "context_sha256": "d84d8fdb0d79397a6075d5631ef244fc0f12dd2a5555bc23c5ad9227760a3eb7",
      "item_sha256": "378704a8c5d5477ba5842fcbace7d445fbdf0d77b07243654b6e1ceeb08abb93",
      "at": "2026-10-21T16:37:18.395Z"
    }
  ]
