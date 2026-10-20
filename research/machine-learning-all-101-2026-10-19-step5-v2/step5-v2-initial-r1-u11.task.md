# Step 5 adjudicate: initial, round 1, unit 11

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-11-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"11",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-adversarial-threat-set-and-robust-risk, 0:def-binary-feature-bernoulli-model, 2:thm-architecture-dependent-robustness-binary-feature-model, 2:thm-robust-sample-upper-bound-gaussian-mixture.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-adversarial-threat-set-and-robust-risk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final zero-one-loss clause leaves Y arbitrary, but compares y in Y with f(x') in {-1,+1}. It needs a label-space assumption such as Y={-1,+1}; otherwise the stated classification loss is not properly specified.",
      "context_sha256": "18ec708acd179be9bf72fc19d847caee4f0fb817596721a78b45fc70aed8498b",
      "item_sha256": "58f57d17dbbb584e65b4cba514a14b0045fb17eed6923bdfab699f78131119a4",
      "at": "2026-10-20T08:18:15.350Z"
    },
    {
      "id": "def-binary-feature-bernoulli-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency note equates conditional independence with ordinary independence of coordinate sigma-algebras. The supplied interface defines only unconditional independence, so it does not support that restatement.",
      "context_sha256": "7ab920acabca1178d485c52ae08473b345944975101024b6261f5942fbbb2682",
      "item_sha256": "f9199bfa3c28867d60add5a646a76eb2b8c48f0d4bb01611c015022ae7d4343f",
      "at": "2026-10-20T08:16:07.135Z"
    },
    {
      "id": "thm-architecture-dependent-robustness-binary-feature-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 uses r=e^{L_j} to recover the posterior mean, citing an “inverse relation” in F5. F5 supplies logarithm laws and range, while F6 only defines exp by a series; neither interface establishes exp(log r)=r. The posterior-mean bound is therefore unsupported.",
      "context_sha256": "96a32062f4664ce4a45eb0b23afbb0f3e172676ab5048907ee80f09734ebb70f",
      "item_sha256": "f6bfac15296cbc2bf44940024b9d49f72f2e72d3818a2ddd90ff1f6c56b8d35e",
      "at": "2026-10-20T08:18:24.787Z"
    },
    {
      "id": "thm-robust-sample-upper-bound-gaussian-mixture",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 overclaims F1: it bounds alignment of the fallback direction at W=0, so it does not imply W≠0. On that event f_W may differ from f_U. Prove P(W=0)=0 separately.",
      "context_sha256": "5e622448a4750f3a4c61e76640739622f7ccd040d22ae9cb51d96839dddb7433",
      "item_sha256": "a8247738208de31e53a4ecd12a19de7fb90f8adb561c72b4e8bd1930b985e91e",
      "at": "2026-10-20T08:20:32.214Z"
    }
  ]
