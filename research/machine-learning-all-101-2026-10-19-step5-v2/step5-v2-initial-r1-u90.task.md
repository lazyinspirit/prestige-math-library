# Step 5 adjudicate: initial, round 1, unit 90

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-90-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u90.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"90",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-constrained-markov-decision-process, 2:def-discounted-cost-constraint, 4:def-discounted-value-and-advantage-functions, 5:thm-policy-performance-bound-by-average-divergence, 7:ex-exact-trust-region-and-sampled-line-search-disagree.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-constrained-markov-decision-process",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It lists costs and thresholds but never defines feasibility (for example, J_{c_i}^π(μ) ≤ b_i) or the objective, so the data do not specify the constrained decision problem.",
      "context_sha256": "71ce9c8c1c6534976794759839913e83b061a4d9605b216bd31a25a71cb0766e",
      "item_sha256": "ddb21c9c5bac7c661ea2e75bf181f4b0cff0a48311cadba749efe9fd09693079",
      "at": "2026-10-20T10:27:48.716Z"
    },
    {
      "id": "def-discounted-cost-constraint",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition identifies J_r^π with expected discounted reward without requiring r(s,a,ρ,s')=ρ to be bounded. The CMDP interface bounds costs only, so an unbounded reward is allowed and the cited convergence result does not ensure J_r^π is defined.",
      "context_sha256": "5bec62f5fb011baa5e66b6678471fcddc8c1adc757315e1157bd165990cdb4dc",
      "item_sha256": "32abd10535d544efb94618bc42d57ae39a3db4adb600995332fcc1a1967dc029",
      "at": "2026-10-20T10:27:23.244Z"
    },
    {
      "id": "def-discounted-value-and-advantage-functions",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The interface bounds the costs but does not bound reward ρ. The item applies its finiteness claim to g=r unconditionally; unbounded rewards can have infinite discounted expectation, so reward values and advantages need not be finite.",
      "context_sha256": "ae08c470a704b79db3724d4fe7c6a61f749723a2bea12e6e75a1ece6f301bf13",
      "item_sha256": "2cbeebce049726dfad3eab1292354fc2924517297d714677a08ad4dc1efd8c85",
      "at": "2026-10-20T10:27:24.136Z"
    },
    {
      "id": "thm-policy-performance-bound-by-average-divergence",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The final claim that taking g=r gives the reward bound is not licensed: the CMDP interface bounds costs c_i but imposes no bound on rewards ρ. Thus r may be unbounded, violating the theorem’s bounded-g hypothesis.",
      "context_sha256": "f30b817c591d0a09d7c61c6bd5a96e63f9fe66d0430bd7b23c680fe43cc6a0b0",
      "item_sha256": "c45036035eb8472f38f9f6c5013360fd716b2df8ac99a7ff7fb812ffa4e3edc3",
      "at": "2026-10-20T10:27:13.962Z"
    },
    {
      "id": "ex-exact-trust-region-and-sampled-line-search-disagree",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title claims a trust-region (KL-radius) test can disagree with the sampled line search, but here the exact and one-state sampled KL are the same K<4, so both pass. Only the exact cost constraint and sampled cost check disagree.",
      "context_sha256": "264ab13bf8676574b97287acbae2f5ace80c1a3e1381deddfab53e72b37d8dde",
      "item_sha256": "98c3f90a809e0e7daa9ba1d47915d80b891c3a3308f1b025f72ea3ea271ffc66",
      "at": "2026-10-20T10:31:37.703Z"
    }
  ]
