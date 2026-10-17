# Step 5 adjudicate: initial, round 1, unit 106

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-106-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u106.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"106",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-stable-gaussian-autoregression-invariant-law, 1:lem-exact-ornstein-uhlenbeck-momentum-substep, 2:lem-baoab-one-step-error-moment-bounds, 3:thm-baoab-finite-time-strong-order-one, 3:ex-harmonic-baoab-thermostat-covariance, 3:ex-ula-and-baoab-have-distinct-harmonic-variance-bias.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-stable-gaussian-autoregression-invariant-law",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F4] overstates the cited theorem, which covers laws on ℝ only. Steps 2–3 need uniqueness for vector laws; no vector uniqueness result or Cramér–Wold argument is supplied.",
      "context_sha256": "30113fc34cc7e696a091f1ad64845cd00a8abb4b961ef0b5d0f57b0a5fdc3245",
      "item_sha256": "201e88129ebaf8712211c59a7e4e1de8a87409450f582fbbe5a9af027ca0c0bd",
      "at": "2026-10-17T02:00:00.456Z"
    },
    {
      "id": "lem-exact-ornstein-uhlenbeck-momentum-substep",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 and F3 are used without their stated standing hypothesis (H) for elementary predictable Brownian integrands. The supplied Langevin interface does not assume H, and the lemma never adds it, so the cited Gaussianity and Itô formula are not licensed.",
      "context_sha256": "03ce38dabab678d9832dd130d0943e07990e25e1f7fe4b9eefca829a7084f84f",
      "item_sha256": "b9655c5ea487bf21b933b1a289c33054675c95c1e9f7f73fff23448fcb4253c8",
      "at": "2026-10-17T02:00:18.767Z"
    },
    {
      "id": "lem-baoab-one-step-error-moment-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 omits the well-posedness theorem’s required square-integrable initial value. The given assumptions allow an almost surely finite, F_t-measurable start with infinite second moment, so the proof’s appeal to F5 is not licensed.",
      "context_sha256": "ee48fed9abcd4dab82c3782132fffe5d597bfb7047f410ae0e2b6b04096854c3",
      "item_sha256": "6135026098be0e113caace7fb8a9969633783f0c7966de88d03256fdab3da34c",
      "at": "2026-10-17T02:00:33.500Z"
    },
    {
      "id": "thm-baoab-finite-time-strong-order-one",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[A1] claims AC is inherited through the SDE/Itô interfaces in [F1] and [L1], but neither supplied interface states or licenses that AC dependence. This is an unsupported dependency restatement.",
      "context_sha256": "9b4302c158d80cfdd5ffb968f48dda9db20737988fb6cd919e7585d7ce6f612e",
      "item_sha256": "7f9171c9da982799b5bf146df347c505c9a71e75919d48323fde002f0e7e1411",
      "at": "2026-10-17T02:00:13.989Z"
    },
    {
      "id": "ex-harmonic-baoab-thermostat-covariance",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 is unsupported: the supplied BAOAB theorem interface states the covariance and stability result but gives no AC premise or dependence, so it cannot justify “AC is inherited through [F1].” Step 2.1 also cites this inapplicable A1.",
      "context_sha256": "479d0fce6bbf3549880fd0363f5574da6daffba76a77e23d0d24a742b521261f",
      "item_sha256": "4d6ca5728fa099fe9c2f5e85715b9123c065cfb96c88541b9eb84654067de0f2",
      "at": "2026-10-17T02:00:08.026Z"
    },
    {
      "id": "ex-ula-and-baoab-have-distinct-harmonic-variance-bias",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates def-axiom-of-choice: it defines AC as choice-function existence, not inheritance through F1/F2; F2 has no AC hypothesis in the supplied interface. The arithmetic is fine, but this false restatement fails the dependency-interface check.",
      "context_sha256": "e11fc1e4aaad2ea6cb4ac939e194709fe713a0a6b07ec1acdb61e551ae111355",
      "item_sha256": "ec4cafba501853f49220bbdd04d67cf4913fdd2e5365fe04974171045f63816f",
      "at": "2026-10-17T02:00:05.083Z"
    }
  ]
