# Step 5 adjudicate: initial, round 1, unit 25

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-25-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u25.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"25",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-certified-fresnel-erf-hypergeometric-series, 4:alg-certified-erfcx-evaluation, 4:alg-certified-gamma-loggamma-evaluation, 6:ex-erfc-subtraction-cancellation, 7:thm-certified-integer-order-bessel-enclosures.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-certified-fresnel-erf-hypergeometric-series",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: in the Gauss branch, c∉{0,−1,…} guarantees exact c+k≠0, but a rounded interval for c+k can still contain 0 when c is close to −k. Division then returns split-domain, and the procedure gives no instruction for non-finite interval operations.",
      "context_sha256": "6374cc3b4dc41886e9702364e16ddc6aeae047b741b53d1719410f53921d08a3",
      "item_sha256": "348d92db67f31702cb376418e2d46acd7194268a1733c9dc9dd0bc88947e6c50",
      "at": "2026-10-18T03:17:25.129Z"
    },
    {
      "id": "alg-certified-erfcx-evaluation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited trigonometric lemma supplies Machin’s identity and sine/cosine Taylor tails, but no arctan series or tail bound for E_q. Thus P_q is not certified, so the subsequent sqrtπ-dependent candidates lack their required enclosure.",
      "context_sha256": "6da81a1b92d874332d4f86a40ca973bc6072d0a542f410199fc15843bcb75afc",
      "item_sha256": "6fbe483443a2aadb56b684411c8c1c005e3283822671e9347fd676c8e4aa1048",
      "at": "2026-10-18T03:16:51.424Z"
    },
    {
      "id": "alg-certified-gamma-loggamma-evaluation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The Machin enclosure cites the trig lemma for the atan Taylor remainder E_q, but its interface gives only sine/cosine Taylor tails and Machin’s identity. It supplies no atan series or remainder bound, so P_q is not certified to contain π and the Stirling candidate can be unsound.",
      "context_sha256": "3aa49bc5be183364a81ead9b0385795d7e4a334dcfed3498e40a78f2e2391ae7",
      "item_sha256": "b9668c5c57437334f358f870c09a3a98891ac493b55f9a9cea9b4f00a38d35f4",
      "at": "2026-10-18T03:17:10.491Z"
    },
    {
      "id": "ex-erfc-subtraction-cancellation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 overstates the erf evaluator: its interface accepts only exact dyadic arguments and may return inconclusive, so it does not guarantee an absolute erf enclosure for the given arbitrary real x.",
      "context_sha256": "68c0098f378b54a8d97f87bf503bd0fd553e4a895dfb6d2146b5bbddf358e40c",
      "item_sha256": "b18f9e139928fed6b42d14378a7f93de9c2955c925d6d7657489d46f4e939eed",
      "at": "2026-10-18T03:17:05.731Z"
    },
    {
      "id": "thm-certified-integer-order-bessel-enclosures",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 does not establish Miller soundness: F5 is only an identity whose RHS involves unknown J_n and J_s,D_n,D_s,q. No cited fact supplies sound input enclosures or verifies the denominator; A2 certifies arithmetic only once those exist.",
      "context_sha256": "9f666ab27837798724fdad9056bc8b8b8452009b476af183a5ce0ef741127348",
      "item_sha256": "75e7c942cd21c113fe4344c251bf8cd6b1531bb1b82946ad265b169d3ef523c8",
      "at": "2026-10-18T03:17:43.607Z"
    }
  ]
