# Step 5 adjudicate: initial, round 1, unit 30

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-30-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u30.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"30",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:def-rankine-hugoniot-and-lax-shocks, 3:cex-roe-jump-property-does-not-imply-entropy-admissibility, 4:thm-euler-star-pressure-root-and-vacuum-criterion, 5:alg-safeguarded-euler-star-pressure-solver, 7:ex-acoustic-system-local-riemann-solution, 7:ex-sod-tube-pressure-root, 8:thm-godunov-flux-is-consistent-and-conservative.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-rankine-hugoniot-and-lax-shocks",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency defines eigenvalues only on a hyperbolicity region N⊆G, but the Lax-shock clause allows states anywhere in G. If either state lies outside N, the λᵢ(u) in its inequalities may be undefined; require uL,uR∈N.",
      "context_sha256": "0d4600e6822a782cca6b0edacdcf935b039c36cc1f9faa9278e148e16323a335",
      "item_sha256": "56283c812b2b607ac813cfdc1ba8d3233eb7c15c1313e8de2278e99e1983178f",
      "at": "2026-10-18T03:18:36.373Z"
    },
    {
      "id": "cex-roe-jump-property-does-not-imply-entropy-admissibility",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates its cited interface: the Rankine–Hugoniot definition names jumps satisfying the flux identity; it does not say weak solutions must satisfy it. F4 supports that fact for this step, but does not make F3 an accurate restatement.",
      "context_sha256": "2cd6835baf3ad048d608ffa720dbe0ebb08d19721d32cf8702e29cd10da96c8a",
      "item_sha256": "33056857215677f8744e3af64b564e90902dd46d20dc53d10d621dc77c8f4205",
      "at": "2026-10-18T03:19:14.176Z"
    },
    {
      "id": "thm-euler-star-pressure-root-and-vacuum-criterion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In 4.1, the displayed velocities give v_L−v_R=−Φ(0+), not Φ(0+). The signed gap is reversed; it should state v_R−v_L=Φ(0+).",
      "context_sha256": "a3a1cae12f92a48946fb9f08d32fdef2324aedab24dc63c22780cb114a1d2ffb",
      "item_sha256": "8cd34868907783255007162c75f44e0b738cd37a115ca8f237b00137303c2da5",
      "at": "2026-10-18T03:19:15.209Z"
    },
    {
      "id": "alg-safeguarded-euler-star-pressure-solver",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "It promises a separate theorem below proving the bracket invariant and width reduction, but no such theorem is included or listed in the dependencies. The advertised safeguard guarantee is unsupported here.",
      "context_sha256": "a1b188bcd24fb3cfe872e4f24cf2554c64a55b676c174386729ad709c2f83dc8",
      "item_sha256": "4c6ff9c96e8c57ee1f2f2d3fc16802afbc78738f6ad388e34f5c0ca89a46a722",
      "at": "2026-10-18T03:19:33.451Z"
    },
    {
      "id": "ex-acoustic-system-local-riemann-solution",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2.1 identifies solver strengths with coefficients in the chosen eigenvectors and claims |σᵢ|=ε/2, but the solver interface does not fix that normalization; F1 says rescaling changes strength. Thus |σᵢ|<η and identification with its solution are unproved.",
      "context_sha256": "749baef5c6eab5ec17c28f785a545ae05cae5fbc42240ba363f119aac25dbe5e",
      "item_sha256": "4b9496c24678f29829dbfab645ddcd2a5cbef831cbf44bf307a7123b77e6581f",
      "at": "2026-10-18T03:19:16.602Z"
    },
    {
      "id": "ex-sod-tube-pressure-root",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 3.1 overclaims solver behavior: the supplied lemma guarantees a bracket status when the budget meets the bound and permits a budget-exhausted result, but does not guarantee every insufficient budget returns that status.",
      "context_sha256": "250c4cfa350af4a0e681a186be3d32103e25f4500c692c79fd4406a8946b7446",
      "item_sha256": "d1a7734949a3c0ad7f05f79992fa1f6e1822cc766e6859a83997002935fc0a34",
      "at": "2026-10-18T03:19:27.981Z"
    },
    {
      "id": "thm-godunov-flux-is-consistent-and-conservative",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 is not in the supplied solver interface: uniqueness of a strength vector and self-similarity do not assert that equal data produce a constant profile. Nor does uniqueness alone imply σ=0. The consistency proof relies on this missing fact.",
      "context_sha256": "db36789c3af48834ad5d0ef6c21d3dbe7d49b15d17626e9464ce7486d8cad7a2",
      "item_sha256": "6c9c986080d7e5bf121ac20ab1f56b95aecd2d43343e8b08fe288eb23315d316",
      "at": "2026-10-18T03:19:07.672Z"
    }
  ]
