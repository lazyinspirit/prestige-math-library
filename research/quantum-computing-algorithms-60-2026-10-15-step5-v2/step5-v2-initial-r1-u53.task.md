# Step 5 adjudicate: initial, round 1, unit 53

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-batch-53-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/quantum-computing-algorithms-60-2026-10-15-step5-v2/step5-v2-initial-r1-u53.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"quantum-computing-algorithms-60-2026-10-15",phase:"initial",round:1,unit:"53",input_sha256:"d23dda1488be643603328de91e0bfb6477b03a1eb49ede19fac9872ac281253d",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run quantum-computing-algorithms-60-2026-10-15 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-qa-29-certified-natural-logarithm-series, 1:thm-qa-29-classical-mc-chebyshev-baseline, 1:thm-qa-29-counting-is-indicator-expectation, 22:alg-qa-29-amplitude-counting-consumer, 23:alg-qa-29-quantum-expectation-estimation, 24:alg-qa-29-variance-aware-monte-carlo, 24:thm-qa-29-quantum-expectation-error-cost.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qa-29-certified-natural-logarithm-series",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement specifies a terminating search procedure, but records it as kind: lemma. The library convention requires procedures to have a separate alg-* item with kind: algorithm and ## Definition, with termination proved separately.",
      "context_sha256": "56f7cc29dd2688e66b5f8055a391d420502881e2876d21e63ca032de7a0809d0",
      "item_sha256": "2ec101aef63a676a2bb1787520d88e9bc275a2d256552a01fec22ae2c11c6068",
      "at": "2026-10-16T05:09:46.366Z"
    },
    {
      "id": "thm-qa-29-classical-mc-chebyshev-baseline",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F10 applies only to finite probability spaces, but the hypotheses require only a finite law or finite-valued variables. It does not license the expectation identifications in steps 1.1–1.4 and 3.1 on an arbitrary underlying space; state the finite-space assumption or justify a re",
      "context_sha256": "3383156985ec1e6b04166da3d91629756959af593a1d2f41092a896904b7f753",
      "item_sha256": "a44f564f1a81981ec89ac3ef53bc4e514aa253fea6a76233b9d0c71e13d900b6",
      "at": "2026-10-16T05:09:57.452Z"
    },
    {
      "id": "thm-qa-29-counting-is-indicator-expectation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 writes \\Pr(X∈S), but X is the sample-space set, not a random outcome. The cited interface defines probability for an event such as S; use \\Pr(S) or name a random draw.",
      "context_sha256": "5c87938504f1df4a0bd92bcc8630c2fce7618b9587a095d46be58c3b3126baa4",
      "item_sha256": "14272b6e179032a9a1cadc25aaeb3a851a0298299c4a7dca7bdc306f928377c6",
      "at": "2026-10-16T05:09:35.176Z"
    },
    {
      "id": "alg-qa-29-amplitude-counting-consumer",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited expectation theorem gives target μ=|S|/N, but QA13 returns the count estimate N·sin²(πy/M). This item calls that the expectation task without scaling the output by 1/N, so the returned estimate has the wrong target.",
      "context_sha256": "64f1bce2608add97053dd4bc0734708feb9608944fdb2496006880c2d59c4683",
      "item_sha256": "866c29bf5c3af20e73f6c7d4059840d9bec9c7466ae59b1ac4baeee15711291a",
      "at": "2026-10-16T05:09:46.056Z"
    },
    {
      "id": "alg-qa-29-quantum-expectation-estimation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For a<b, η=ε/(b−a) goes to an estimator requiring rational tolerance, but the supplied input does not require rational bounds: a=0, b=√2, ε=1 gives irrational η. The omitted expectation-task interface could constrain a,b; that constraint is unverified.",
      "context_sha256": "5f8a3d2147ed60ca6db7afa88b551e08d81f93e8c941e53c29759d5ffc5b89dc",
      "item_sha256": "c3a89ad36f777a901d3a20fc1644d3ce17bc13484b1f23a0ad5c42245185955b",
      "at": "2026-10-16T05:10:30.972Z"
    },
    {
      "id": "alg-qa-29-variance-aware-monte-carlo",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "PositiveMean is declared for any nonnegative finite-valued h, but its bins cover only [0,2^k). For constant h=2^(k+1), every bin is zero and the routine returns zero, discarding the entire mean. No bound or overflow bin prevents this.",
      "context_sha256": "f814175668477fc11587439e1033fc700d5395dbb8872cf56c4055e7fc578fe4",
      "item_sha256": "8704070868eaf93820c8d99d62463c80c782a0ff6eabbe0acefa15ccf092d41b",
      "at": "2026-10-16T05:10:41.666Z"
    },
    {
      "id": "thm-qa-29-quantum-expectation-error-cost",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows any real 0<δ<1, but the estimator and median interfaces require rational δ for their finite scheduling comparisons. Restrict δ to rational values or provide an interface for real δ.",
      "context_sha256": "b582fab1463fd4b6da322b119ddb06c2024b321ea61bc6b0b13acade61242525",
      "item_sha256": "2e422e8373f42e69e7e32e35f1d88b4ea4c49ecf92e9c3ca873b9a4fb4d776f7",
      "at": "2026-10-16T05:09:45.033Z"
    }
  ]
