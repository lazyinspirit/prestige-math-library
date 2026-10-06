# Step 7 adjudicate: initial, round 1, unit 10

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u10.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"10",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 5:def-positive-and-negative-khovanov-rozansky-crossing-complexes, 6:def-khovanov-rozansky-complex-and-trigraded-braid-homology, 10:ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-positive-and-negative-khovanov-rozansky-crossing-complexes",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 misstates [published formula (13)](https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf): its negative cone has degrees -1/2,1/2 and shift {1/2,-3/2}, not 0,1 and {0,-2}. Agreement requires the regrading recorded in the supplied interfaces.",
      "context_sha256": "b21822aeb4440d48a1201fe721ba62e98a0e96f507d85f53a910a8ff2531a174",
      "item_sha256": "ae325e98c526ae6ea82f3ca4d49a03221e75783814d7ec9e01284a356c28c13b",
      "at": "2026-10-05T19:50:29.072Z"
    },
    {
      "id": "def-khovanov-rozansky-complex-and-trigraded-braid-homology",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The marking hypothesis omits the dependency's requirement of a mark on every circle. An unmarked crossingless one-strand closure then has no arc factors, giving C(D)=Q[a] and nontrivial a-action, contrary to the nonempty-braid assertion.",
      "context_sha256": "a8fc97702d39864a1f1672c37ddd646c579ff832568a866122addd9dd0506fc7",
      "item_sha256": "1d220ab54e88810d4bc627c8d7378c0e7b6ce8922d8b7c5a16142c3d1b571a9a",
      "at": "2026-10-05T19:50:12.296Z"
    },
    {
      "id": "ex-why-the-kr-two-invariance-proof-stays-in-the-braid-diagram-calculus",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 inaccurately identifies the move tabulation with F's defining properties. The source lists six properties, including a skein relation and unknot normalization, which are not moves: [KR II, p. 9](https://arxiv.org/pdf/math/0505056v2).",
      "context_sha256": "8fe4d1d1ac97d936332e807b83519da95180ddd38daeb43abc6aa2cf9e320a97",
      "item_sha256": "7434f7a1b621487f41e0da326750f30111e936fab3cad997dafdfe2474427386",
      "at": "2026-10-05T19:52:21.235Z"
    }
  ]
