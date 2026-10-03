# Step 7 adjudicate: initial, round 1, unit 3

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u3.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"3",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-heat-kernel-normalisation-scaling-and-derivatives, 2:lem-first-and-second-moments-of-the-heat-kernel, 2:lem-heat-kernel-semigroup-identity, 3:ex-heat-evolution-of-affine-and-quadratic-polynomials, 3:ex-self-similar-heat-kernel-solution, 4:ex-heat-flow-of-an-indicator-function, 5:cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-heat-kernel-normalisation-scaling-and-derivatives",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 overstates the supplied Tonelli interface: completed-product measurability guarantees measurable sections only almost everywhere. The displayed iterated integral requires the interface's null-set modification; without it, some inner integrals can be undefined.",
      "context_sha256": "efd1c8972bac02748a6cad2bde8089c617761dec7b58a8299caa8f4992311ba3",
      "item_sha256": "6e9fa26b4a8f6c60c9dde9c1d63568785a171fedec70540ac24114847cd06e93",
      "at": "2026-10-03T14:13:47.478Z"
    },
    {
      "id": "lem-first-and-second-moments-of-the-heat-kernel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] omits the supplier's exceptional-null-set convention. For nonmeasurable N⊂R, f=1_({0}×N) is completed-product measurable, but its section at 0 is nonmeasurable, so the asserted unqualified inner integral need not exist.",
      "context_sha256": "1eaf029a76e7a71e92de5f6b0506bd258f070c470bc2800b9a636d5deef0cd05",
      "item_sha256": "5d1987a35eca33370d985521cbb3a035613c5f19aa69165952ea314c08e04855",
      "at": "2026-10-03T14:13:44.973Z"
    },
    {
      "id": "lem-heat-kernel-semigroup-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F5 overstates the completed-product Tonelli interface: sections are measurable only almost everywhere, and iterated integrals require the specified null-set modifications. Its unrestricted formula omits this essential qualification.",
      "context_sha256": "97d18955289ba810c96d35a0442c4e7ac8f4e32690ab616d1fca0a80210fbf19",
      "item_sha256": "aaf9bdf30623eea64d7ee8ddb721c8dbbaaa985dd49c5527bd35fb1e764a2245",
      "at": "2026-10-03T14:13:42.414Z"
    },
    {
      "id": "ex-heat-evolution-of-affine-and-quadratic-polynomials",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 misstates its dependencies: integral invariance assumes measure preservation, and the change-of-variables interface covers only linear maps. Neither establishes translation invariance, needed for the affine substitution z=x−y.",
      "context_sha256": "df9421bf1c8fd27812be386a1e92d3cabc4a82b036020644058b509b700c2507",
      "item_sha256": "292b9274aa9ba21bac50203b1d6d3ecc171386da7c9836f66a3bfb450319d320",
      "at": "2026-10-03T14:14:06.391Z"
    },
    {
      "id": "ex-self-similar-heat-kernel-solution",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 incorrectly assigns amplitude λ^n to the later-time profile. The scaling law gives u(x,λ²t)=λ^{-n}u(x/λ,t). At x=0, λ=2, the amplitude is 2^{-n}, contradicting the stated 2^n.",
      "context_sha256": "a1b2c7ceaa49feb5b0c12d98d82507b05e637fe4a2054c94cd9b62911612b8a8",
      "item_sha256": "f35ef28196d8720cf66e1598ec9e9fb463afa17a00535e87717a07c1be62b39a",
      "at": "2026-10-03T14:14:35.007Z"
    },
    {
      "id": "ex-heat-flow-of-an-indicator-function",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F6 inaccurately restates the primitive theorem: it requires 0 to belong to the interval. For ψ defined only on (1,2), the asserted integral ∫₀ᵘψ is undefined. The supplied interface requires the base point to lie in the domain.",
      "context_sha256": "b190a1d6e4202b07ff853069da837f8d2dd41fa6aa063ffd36c054e00bfe588d",
      "item_sha256": "d66fed42b22b4ad11d5f7816224dcf07c19f37a002e17be911c875ca4af241aa",
      "at": "2026-10-03T14:14:03.052Z"
    },
    {
      "id": "cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 uses the sequence H_{1/k}g twice. Under the library convention k starts at 0, so H_{1/0}g is undefined. The necessity arguments require a defined sequence, such as H_{1/(k+1)}g.",
      "context_sha256": "f1312c74fe8580323e591caa42e13bad807b46c64b1b2454444f0e90be1abf95",
      "item_sha256": "179c351f4412a4b70461ad83100b7c24b51dfd15fdf8162b5b00779c1c0f37b8",
      "at": "2026-10-03T14:14:04.716Z"
    }
  ]
