# Step 5 adjudicate: initial, round 1, unit 31

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-31-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u31.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"31",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-na-star-shaped-bogovskii-integral, 0:lem-na-zero-mean-of-zero-boundary-divergence, 1:lem-na-bogovskii-kernel-support-and-divergence, 2:lem-na-bogovskii-truncated-derivative-fourier-formula, 3:lem-na-mini-element-local-and-global-dimensions, 3:ex-na-mini-element-bubble-moment, 7:thm-na-mini-element-fortin-stability.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-na-star-shaped-bogovskii-integral",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Well-definedness is deferred to a “following lemma,” but no lemma is supplied and justified_by is empty. The integral’s kernel is singular on the diagonal, so the definition leaves its existence unjustified under the library’s definition rule.",
      "context_sha256": "251bf41122af53108118ade6e53f836178ce43485d9d64f388c4eafc2fff941a",
      "item_sha256": "16f8246b83daa803d87a84def44d3c000e83a4a28b852137dcc9ed6e0485c408",
      "at": "2026-10-18T03:19:30.036Z"
    },
    {
      "id": "lem-na-zero-mean-of-zero-boundary-divergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited Sobolev and closure interfaces define scalar-valued spaces only. Fact F1 extends them to vector-valued H^1_0(D;R^d) without a supplied componentwise definition, so the approximation used in step 2.1 is not licensed.",
      "context_sha256": "b528ca4dd170da50dce67c8f43e638fb6e5933729eb8a74493657e53668e94f4",
      "item_sha256": "89a1c590ccfb4b4be3d951f2342ed417d46d4b5a22f11e996d2eb544392ad882",
      "at": "2026-10-18T03:19:18.216Z"
    },
    {
      "id": "lem-na-bogovskii-kernel-support-and-divergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] covers scaling under linear maps, but step 2.2 applies it to the affine map z↦y+t(z−y). The supplied interface does not establish translation invariance or this affine change of variables, so the cited dependency does not license the substitution.",
      "context_sha256": "a2fe75bc58ca47ffc514aa2fa16cc2009dd072c02c2845b1cbe5abf55a948712",
      "item_sha256": "d3382fc7897b4bde30045b8e92bc606f1ad4d774ae662ad0855b8c24dcf7521f",
      "at": "2026-10-18T03:20:07.679Z"
    },
    {
      "id": "lem-na-bogovskii-truncated-derivative-fourier-formula",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes the affine substitution x=y+t(z-y) to a supplier whose interface covers only linear maps. No affine change-of-variables fact is supplied, yet Steps 1.1–2.1 rely on it, so the cited interface does not license those transformations.",
      "context_sha256": "0dab2a018770c3a98a43db1617c8af092016ea1e8036e7346bc77f401ab1fe67",
      "item_sha256": "89735fc26cec6307c25d144be4ab463043ba76b7f864ee774c2065d01e6399fa",
      "at": "2026-10-18T03:20:27.805Z"
    },
    {
      "id": "lem-na-mini-element-local-and-global-dimensions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits finiteness and the bounded domain assumptions for V_h and Q_h. The cited mini-element interface defines these spaces only on a finite mesh of a bounded domain; the stated mesh wording also admits infinite meshes, where the claimed dimensions and zero-mean pres",
      "context_sha256": "fa5b65748067e67b27df0f9f36ccd37f192c4c654e70134459ebe62682b38419",
      "item_sha256": "ceaa6dd28e178a4a613acac151a5ebb8372a3ca0942bd3993d7cde34e532dbb7",
      "at": "2026-10-18T03:19:57.588Z"
    },
    {
      "id": "ex-na-mini-element-bubble-moment",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows arbitrary d, but its cited mini-element and Stokes interfaces are limited to d=2 or 3. The supplied dependencies therefore do not support the claimed mini-element pairing outside those dimensions.",
      "context_sha256": "e1eddf0f41842f8f0be6be4a97b04d386f88ee8563462a0ab6419a976f8f237e",
      "item_sha256": "3d9c43721437012b34055e1d984a62e2920c81356bc4b7e6fb7443105a605475",
      "at": "2026-10-18T03:20:12.274Z"
    },
    {
      "id": "thm-na-mini-element-fortin-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement claims C_F depends only on d and mesh shape regularity, but the norm proof uses the interpolant bounds in F1, whose constants may also depend on the fixed domain D. No argument removes that dependence.",
      "context_sha256": "03134668c4bb81fd583ec6cf8a2616bc463b6493d16fea4eabe1b6c5135359e9",
      "item_sha256": "739fdcd3fc59ef199702279acba846b9d5a4328a7c61deeb8bb2b3ebb7a54be7",
      "at": "2026-10-18T03:19:57.693Z"
    }
  ]
