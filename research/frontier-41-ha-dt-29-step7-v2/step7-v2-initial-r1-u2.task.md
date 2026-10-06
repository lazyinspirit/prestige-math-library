# Step 7 adjudicate: initial, round 1, unit 2

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library-frontier-41-ha-dt-29/research/frontier-41-ha-dt-29-step7-v2/step7-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-41-ha-dt-29",phase:"initial",round:1,unit:"2",input_sha256:"79b0e989c27d1e96f1d9b9eaa6792321ec4c5196c7f8d892843c34832f7ef2a9",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-41-ha-dt-29 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-normal-bundle-of-the-diagonal-is-canonically-tm, 1:lem-pullback-of-the-thom-class-along-a-transverse-section, 2:prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, 3:prop-mod-two-self-intersection-needs-no-orientation, 3:rem-euler-class-construction-remains-owned-by-at, 4:cor-nowhere-zero-section-forces-the-euler-class-to-vanish.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-normal-bundle-of-the-diagonal-is-canonically-tm",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately strengthens def-differential-of-a-smooth-map: its interface only defines dF_p and does not establish smoothness of differentials. Step 1.1 explicitly invokes this unlicensed restatement.",
      "context_sha256": "b9bbce0fa4b5f901038dbafdce33c277f5d347df19e2382086957471b55f05c2",
      "item_sha256": "3e68791b9757ccbe18c95ac9e15367c35b6be0791ba02d6d09f79cfe44f468d7",
      "at": "2026-10-06T06:52:47.763Z"
    },
    {
      "id": "lem-pullback-of-the-thom-class-along-a-transverse-section",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 attributes identity normal differential to the tubular theorem, whose supplied interface only guarantees a chart fixed on Z. Such charts can reverse normal orientation; the required normalization is neither supplied by that interface nor established here.",
      "context_sha256": "53fb9409865506c76d5ced3cb2ad8711ce3ba32d733a05c83c6cb73b528b38f5",
      "item_sha256": "cff62e68af661f2cd174772e8f4e1cb9e1b314dd03ea2271f8e1ee7d0673679e",
      "at": "2026-10-06T06:52:47.127Z"
    },
    {
      "id": "prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final statement fails for M=∅ and r=1: the zero section ∅→∅ is transverse to itself vacuously despite positive rank. Restrict that assertion to nonempty bases.",
      "context_sha256": "f4738236dbd6595964506ed399e8749c76a8e4cd8873ac3e0d5360432b40015d",
      "item_sha256": "c3ea33a4b515761fb78b53ea76fb228e0e5f65e99e5f92fe768723f9875c7d23",
      "at": "2026-10-06T06:53:11.023Z"
    },
    {
      "id": "prop-mod-two-self-intersection-needs-no-orientation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 inaccurately restates the push-off lemma's sign formula without its rank-zero exception. For a negatively oriented ambient point (a=0), the intersection sign is -1, whereas sign det of the empty matrix is +1.",
      "context_sha256": "0bad7d983d486cc24e8121a9192326bcb76c25e25afd77fe0d4d39e6f3225faf",
      "item_sha256": "222013d5a2dcbc58d0bf26367e61056881a5388cb6c3c9da6951982766ea97ae",
      "at": "2026-10-06T06:52:53.827Z"
    },
    {
      "id": "rem-euler-class-construction-remains-owned-by-at",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The remark claims the four cited AT items prove the Whitney product formula and identify the mod 2 Euler class with the top Stiefel–Whitney class. Their supplied interfaces establish neither result, so this dependency restatement is inaccurate.",
      "context_sha256": "513e17eb44188d5c9404719ca500dac6a360ad0b3df07389ac40df235fddaa09",
      "item_sha256": "f074d0761a95c003b5d5889b87a188cb814c0da1c57704ca220e518dd2b409a6",
      "at": "2026-10-06T06:52:35.488Z"
    },
    {
      "id": "cor-nowhere-zero-section-forces-the-euler-class-to-vanish",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (ii) lacks integral orientability. For R=F₂, take M=K×T² and A=c×S¹×{pt}, where c is one-sided in the Klein bottle K. Then ν_A=L⊕ε¹ is nonorientable but has a nowhere-zero section; A·A is undefined and [F3] does not apply.",
      "context_sha256": "7d13e0c674bd4e845d58385020a5d380aba86a6d6690c0ab5e6613bca9de830c",
      "item_sha256": "92ab4b131d798ac34726e845187e3605a4ba6669beb4367ebc190eebc14d913a",
      "at": "2026-10-06T06:52:55.372Z"
    }
  ]
