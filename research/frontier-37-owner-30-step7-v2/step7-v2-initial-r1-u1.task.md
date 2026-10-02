# Step 7 adjudicate: initial, round 1, unit 1

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u1.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"1",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-stationary-process-and-canonical-shift, 1:thm-every-finite-transition-matrix-has-a-stationary-distribution, 2:thm-time-reversal-of-a-stationary-markov-chain, 2:ex-random-walk-on-a-finite-undirected-graph-is-reversible, 2:ex-stationary-distribution-of-a-finite-birth-and-death-chain, 3:thm-markov-chain-ergodic-theorem, 5:rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-stationary-process-and-canonical-shift",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The definition asserts that the canonical shift is measure preserving for an arbitrary process, but step 2.1 requires strict stationarity. For deterministic Y_n=n, the path law is a point mass whose shift differs, so the claimed system is not measure preserving.",
      "context_sha256": "cc9081ebf427e39e59e16191a6c77db235a7c229f519762b4fce17c2d200a483",
      "item_sha256": "743e6bf80a5df4385bbb65b3c427faf56c27328f2189c22ec1c443439fbceeee",
      "at": "2026-10-01T20:46:43.702Z"
    },
    {
      "id": "thm-every-finite-transition-matrix-has-a-stationary-distribution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "For E=∅, the empty kernel/matrix satisfies the supplied interface, but no probability vector exists: its total mass would be 0. The unrestricted title therefore overclaims, and step 4.1 incorrectly calls the empty-state assertion vacuous.",
      "context_sha256": "2421c98ab926415b29d9f73a4b426194dc491ae47090d5e6fc1c3575bec741dc",
      "item_sha256": "d8a326c84018f9d324cdb771d1170cb6b707f2ed5fb8bea53f46087e4b4ea39b",
      "at": "2026-10-01T20:46:47.464Z"
    },
    {
      "id": "thm-time-reversal-of-a-stationary-markov-chain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 falsely claims p(x,y)=0 whenever exactly one state lies in E_+. Step 1.1 only forbids transitions out of E_+. Counterexample: E={a,b}, π=δ_a, p(a,a)=p(b,a)=1; π is invariant but p(b,a)=1.",
      "context_sha256": "cd6210abda33aeb9f915e009e13d48f6ecd5a455e8c91caa4266419f373f31b4",
      "item_sha256": "539c780944e944add57402d076b44dc75fbd293819e2c0d435f40363cb395ff4",
      "at": "2026-10-01T20:46:40.301Z"
    },
    {
      "id": "ex-random-walk-on-a-finite-undirected-graph-is-reversible",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1 incorrectly extends the same computation to every connected component. An isolated-vertex component has degree 0 and no edges, so its displayed transition row and normalized degree distribution are undefined.",
      "context_sha256": "1d4aa82ea664bafd1b6eb5d311e3d1e961d1ab680a80b02e06d799e4fbaad658",
      "item_sha256": "73c314b08ad96bb155a3e9e3de441b92cc3727697e0e72c946eec0380ab3a673",
      "at": "2026-10-01T20:46:59.047Z"
    },
    {
      "id": "ex-stationary-distribution-of-a-finite-birth-and-death-chain",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 falsely claims that a vanishing p_i makes the recursion fail. For m=1, p_0=0 and q_1=1, the recursion gives w_1=0 and the formula yields the valid stationary law π=(1,0). Only a zero denominator makes the stated recursion undefined.",
      "context_sha256": "3ce43be9988be78d5b9846875cab9d3fbe92d597876b7ede28acfc62828b038a",
      "item_sha256": "c0fb058d3615d49fe5d31f1be79ce27e0b0cb2c17a1f1ce9a694121e8ddf014a",
      "at": "2026-10-01T20:46:46.502Z"
    },
    {
      "id": "thm-markov-chain-ergodic-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 falsely identifies positive parts of cycle rewards with rewards of f⁺. For deterministic alternation x↔y with f(x)=1, f(y)=-1, W₁=0, so EₓW₁⁺=0, whereas ∑π(y)f⁺(y)/π(x)=1.",
      "context_sha256": "2a823746c3a1e21dc2d2e44ca3861156232433c636d16968290741ad0fc32000",
      "item_sha256": "6d9a84556e279afe00eb86abfd236f4a443da493443ea237676c9f57813dc2a1",
      "at": "2026-10-01T20:46:58.329Z"
    },
    {
      "id": "rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final sentence conflates a stationary initial law with a deterministic start: p^(n)(x,·) cannot equal π for all n in an irreducible periodic chain, since p^(0)(x,·)=δ_x. Stationarity instead gives πp^(n)=π.",
      "context_sha256": "3cce84a46462dcde9db766220f2e6828b3fcfa2303ce960ad83d1d832ce1fc64",
      "item_sha256": "96e6dbfa0287c921e88b387afe621b7e89910a94fa4fd4ce05951c0dfa30937b",
      "at": "2026-10-01T20:46:39.961Z"
    }
  ]
