# Step 5 adjudicate: initial, round 1, unit 82

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-batch-82-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/machine-learning-all-101-2026-10-19-step5-v2/step5-v2-initial-r1-u82.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair all assigned frontier items, including published items. Publication status never exempts an assigned item from adjudication, repair certification or required rejudgment. Keep originally published items published. Outside consumers are handled by consumer maintenance; report their affected uses and escalate necessary repairs.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"machine-learning-all-101-2026-10-19",phase:"initial",round:1,unit:"82",input_sha256:"be31d8759cd439838c6ba1308b97ab1d68ec5727664112594898d2fa2bc53fee",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run machine-learning-all-101-2026-10-19 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-pac-mdp-bounded-reward-model, 4:def-pac-mdp-known-state-action-mdp, 5:lem-delayed-q-learning-optimism-and-update-counts, 5:thm-pac-mdp-escape-event-reduction, 5:thm-zero-tolerance-pac-mdp-boundary, 5:ex-pac-mdp-inadmissible-heuristic-fails, 6:thm-delayed-q-learning-pac-bound.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-pac-mdp-bounded-reward-model",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The prop-order dependency is inaccurately restated: its interface gives integral monotonicity and homogeneity, not measurability of the reward projection. The cited local justification attributes unsupported content to that dependency.",
      "context_sha256": "93000c31b08208199ae9dec09cf8a2d6cb1df0a9eecc9ce7e8f15227147d7e66",
      "item_sha256": "a53d31ac466c063d1eaf23e589cf8542a9dd5b811175e32cbc97b2a5d8266938",
      "at": "2026-10-20T10:18:13.188Z"
    },
    {
      "id": "def-pac-mdp-known-state-action-mdp",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises optimism, but q is arbitrary: q≡0 is allowed even when M has positive rewards, making the unknown-pair self-loops pessimistic. Require q to be an admissible upper heuristic or remove “optimistic” from the title.",
      "context_sha256": "807eff553bd04a555c964da2da6102355c206b5690653208df2bc576004373a0",
      "item_sha256": "1f43344e781b5278daaf7f0ceccdb777c293a434b1c88c475e246240d155e92c",
      "at": "2026-10-20T10:20:19.084Z"
    },
    {
      "id": "lem-delayed-q-learning-optimism-and-update-counts",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 misstates the algorithm: a failed batch leaves L=true when its start b≤t* (for example, if another pair updates during the batch), so it need not disable the pair. The stated batch-start count justification is false.",
      "context_sha256": "a0c3c8a2580b63b7f7bc36895de6159f58f827b84c5a76b9990e228e6d4d155f",
      "item_sha256": "79e936b1d9ff80a2d9e59a230f422f3bbe635fd0d34892b4d3ca9bd2fe0128ab",
      "at": "2026-10-20T10:21:32.716Z"
    },
    {
      "id": "thm-pac-mdp-escape-event-reduction",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misstates the supplied AC interface: it gives choice-function existence, not path-law existence. That result is licensed by thm-pac-mdp-value-functions, not AC itself.",
      "context_sha256": "a708b2d231299a9101f62e658d550b57eb0e17732fb95cd34934cdb9f5ee4887",
      "item_sha256": "26f50ad0851a573ee2f7928f826819a4e6cac433ed81a9e4e422780d5b809508",
      "at": "2026-10-20T10:44:02.022Z"
    },
    {
      "id": "thm-zero-tolerance-pac-mdp-boundary",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 misstates lem-finite-sum-laws: its interface does not say finite sums “distribute over finite products,” and that claim is false as written. The cited fact is used to justify finite-tree normalization in the coupling.",
      "context_sha256": "32c7acfdcd8fea3d15b8ef12fdb4156abd0b7886a2641733e7c0b31ca585baef",
      "item_sha256": "5305d22e7f664cfa93fef48135c9c8f5f279654056d185b772f8985306ccbc31",
      "at": "2026-10-20T10:44:47.197Z"
    },
    {
      "id": "ex-pac-mdp-inadmissible-heuristic-fails",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The R-MAX interface requires an admissible heuristic, but U(a)=0<Q*(s,a)=1. Its specification therefore does not define or license this run without an explicit extension to inadmissible inputs. [Paper §1.3](https://www.jmlr.org/papers/volume10/strehl09a/strehl09a.pdf)",
      "context_sha256": "e3bfa48ae457460f90e5bfab321aa2544a444cb60fb3f6142d5597c8e06b65c0",
      "item_sha256": "065fee5b647e1d8c41645121cca250cc303f67dd800e5e9c6c083beee369cb64",
      "at": "2026-10-20T10:18:50.218Z"
    },
    {
      "id": "thm-delayed-q-learning-pac-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits AC, but both the zero-tolerance result [F7] and the escape-event reduction [F2] require it. The proof invokes them without establishing that hypothesis.",
      "context_sha256": "6f70fcd24c33dda7c31f378685702b10d31c9810ef11d2733cb83aa55142a8c8",
      "item_sha256": "ce013d0d08750c487ee9e9f6260bf6653c78b646233bc2fceaaef0e76ea6cf0e",
      "at": "2026-10-20T10:44:49.139Z"
    }
  ]
