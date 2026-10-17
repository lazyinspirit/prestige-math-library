# Step 5 adjudicate: initial, round 1, unit 87

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-batch-87-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-optimization-dynamics-2026-10-16-step5-v2/step5-v2-initial-r1-u87.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-optimization-dynamics-2026-10-16",phase:"initial",round:1,unit:"87",input_sha256:"1a7ee9a7fe14e61542c2bc3f5fd18046c94a9802c7e266731ec32a1f499132e5",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-optimization-dynamics-2026-10-16 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-finite-discrete-coagulation-fragmentation-system, 1:lem-fixed-pivot-barycentric-identities, 2:alg-finite-sectional-forward-euler-positivity-cfl, 2:def-infinite-fixed-pivot-sectional-dynamics, 2:lem-finite-sectional-vector-field-locally-lipschitz, 2:thm-finite-sectional-positivity-and-mass-reservoir-conservation, 3:thm-finite-sectional-forward-euler-positivity-and-conservation, 3:thm-finite-sectional-global-ode-and-moment-bounds, 3:thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability, 3:cex-product-kernel-blowup-defeats-a-global-grid-inference, 3:ex-cutoff-overflow-is-reported-as-lost-mass, 4:lem-continuous-coagulation-fragmentation-local-positive-wellposedness, 4:thm-finite-sectional-forward-euler-global-first-order-error, 6:thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness, 9:thm-sectional-forward-euler-total-error-budget.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-finite-discrete-coagulation-fragmentation-system",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The daughter-mass condition is imposed for i=1 too, but its sum is empty and equals 0, not 1. Restrict the condition to i≥2 or explicitly exempt the nonfragmenting monomer.",
      "context_sha256": "2581608ebf90efe4a815d0b26af1f083d37f6f01f2a52ecb90e21c8f3c5542e4",
      "item_sha256": "49a461bcc5f74f1c870561f59ffbfa0fda008df32ab59a3c9e144e9d2e1b1068",
      "at": "2026-10-17T01:53:23.466Z"
    },
    {
      "id": "lem-fixed-pivot-barycentric-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title says the weights are positive, but at cell endpoints the barycentric formula has a zero weight (and the endpoint rule assigns a single pivot). The proof establishes nonnegativity, not strict positivity.",
      "context_sha256": "850be03500bbd21de879d7963bbacf2e300ef39d3bb8848cc99c20dadfd0e346",
      "item_sha256": "c0e9ef4724ba40407e60b062eacf6ab65a2414fd03e1c78f59c877d04376720c",
      "at": "2026-10-17T01:53:21.895Z"
    },
    {
      "id": "alg-finite-sectional-forward-euler-positivity-cfl",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The rate-evaluation-failure branch names no return status or failure condition. The dependency only specifies `invalid-input` for listed invalid data, so this branch has no defined output, violating the algorithm’s exact-instructions requirement.",
      "context_sha256": "f6768dfaf98e7cc5785ad6d7886b3a604c7e280ca7c24d3bf11697511d2865f6",
      "item_sha256": "90ed257e830e97a873c311c44dc30c28d8c81b56be0f65a5b95fb1626e13bc08",
      "at": "2026-10-17T01:53:45.448Z"
    },
    {
      "id": "def-infinite-fixed-pivot-sectional-dynamics",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The pivot interface defines PΔ(z) only for z≥a and requires every daughter size to be at least a. This definition imposes no such support condition on B_x, so ∫PΔ(z)B_x(dz) can be undefined for daughters below a.",
      "context_sha256": "df1b7ede40e5e95300ede67d1717b2adcdaa0c6d1a53ddfedf97a51a2a5ba85a",
      "item_sha256": "6c80a56f268e4f03cfbb20ee32f9dcc2acb82d68067d207ec5175f93f5d5831b",
      "at": "2026-10-17T01:53:24.746Z"
    },
    {
      "id": "lem-finite-sectional-vector-field-locally-lipschitz",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The algorithm returns invalid-input for negative populations or reservoir mass, so its RHS F is not defined on the claimed full state space. The proof applies the polynomial formulas there without establishing that F has this extension.",
      "context_sha256": "9eb11a4f8575166f6b6fdfbaa365722468089ed4bbfd2ee87595080c909a7085",
      "item_sha256": "cf814b07c20427cce2277a203c7f3b8cf46235724ee2219d3bb5862e84a71c7b",
      "at": "2026-10-17T01:53:38.488Z"
    },
    {
      "id": "thm-finite-sectional-positivity-and-mass-reservoir-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 2 evaluates F(n,L) at negative populations, but the dependency declares those inputs invalid. It supplies no off-orthant vector field or Lipschitz bound there, so the negative-part comparison—and the positivity proof—does not follow.",
      "context_sha256": "0e597bcc221478e398f15094a1555c11c9a36cd7dfaf766c2999392dbb8c4d76",
      "item_sha256": "a2912f60044a3893b7d8558baa1777306e061c0562eaf20434072ae168f83ff4",
      "at": "2026-10-17T01:53:35.029Z"
    },
    {
      "id": "thm-finite-sectional-forward-euler-positivity-and-conservation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 gives ODE positivity and mass conservation, but does not establish that the Euler reservoir increment is nonnegative or that each bin’s loss coefficient equals Λ_i. The CFL therefore does not prove the claimed Euler positivity from the supplied interfaces.",
      "context_sha256": "0dbcd0ec2a3841e346848ea25d3e86050708c0e7a3107807e1b92623f1e1623c",
      "item_sha256": "2ab63a20cc461831d90590b13b37fa1ebb0d7ee7d89813b676be8becd94a75da",
      "at": "2026-10-17T01:53:38.852Z"
    },
    {
      "id": "thm-finite-sectional-global-ode-and-moment-bounds",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title overclaims strict positivity: zero initial data yields the identically zero solution. The proof establishes nonnegativity, not strict positivity.",
      "context_sha256": "4c748934b0c77466bdf5aa1917346776bf62b5db8375014844aa84ab52e7a8be",
      "item_sha256": "c0342c47b14698ad3e7f5e0831c4b178c82bb7fe5245640ac451a096d3e5795f",
      "at": "2026-10-17T01:53:48.098Z"
    },
    {
      "id": "thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 infers M₁′=0 from [F4], which only says projection preserves the mass of each input size; the supplied dynamics interface does not require fragmentation to conserve parent mass. For example, Bₓ=0 and β>0 make M₁ decay, so the claimed conservation is unsupported.",
      "context_sha256": "000465e18298ad3b13cc6ea3c0a1fbfdc281ad5ce237f5f0de40d35b1484d454",
      "item_sha256": "389f5d1eb5aadb9c9a7a234a842caf9a48ff552b014323e88e4198ff844a28bc",
      "at": "2026-10-17T01:53:42.348Z"
    },
    {
      "id": "cex-product-kernel-blowup-defeats-a-global-grid-inference",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "“For every cutoff N” includes N=0 under library conventions, but the proposed state n_N=1/N is undefined there. Restrict the claim to N≥1.",
      "context_sha256": "bc03927880653f72549bc4f2ef5f141ba95fffab3c1a51370bc9c7bbeb32534f",
      "item_sha256": "fb3e4456e9b9fd201ea0274a3840102e2b5383d10195d72e2c1c99d0462d8d12",
      "at": "2026-10-17T01:53:47.734Z"
    },
    {
      "id": "ex-cutoff-overflow-is-reported-as-lost-mass",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates the theorem: it asserts total augmented mass is constant for the combined ODE, not that each overflow event separately has zero mass change. The eventwise claim follows from the algorithm’s increments, not from F2.",
      "context_sha256": "e751604bac130a9e46061006da78a3fcbc1c16b2b37105f96d56622d43fc78fe",
      "item_sha256": "6e04483336dbf742f729676f499fd64040486aa610a39b551fdacd2cf020dc8f",
      "at": "2026-10-17T01:53:50.696Z"
    },
    {
      "id": "lem-continuous-coagulation-fragmentation-local-positive-wellposedness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 attributes a positive daughter-gain bound to [F5], which bounds only the net fragmentation operator. That interface does not license the claimed bound on G_F; a separate gain estimate is needed.",
      "context_sha256": "53298b7a968184351047afe60ce801e828337660ee488fd37ec4f24b794f00a4",
      "item_sha256": "971e72ce279a6ada7c91eb06ba502f875b7c334635b7a983538701739f625507",
      "at": "2026-10-17T01:53:42.848Z"
    },
    {
      "id": "thm-finite-sectional-forward-euler-global-first-order-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement never requires the Euler iteration to start at y(0), but the claimed O(h) bound can fail for a different starting state. Step 2.1 assumes zero initial error without support from the hypotheses.",
      "context_sha256": "c2d7c3406b13b35c4c9089add7669ba31e9b8e59fd17028582064c59938420ab",
      "item_sha256": "55b0b0b06668154a88ce678da1e9d163385612949fbd3a876d2b66cc1a9ed9e6",
      "at": "2026-10-17T01:53:39.826Z"
    },
    {
      "id": "thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 misstates the weak-model definition as asserting local Lipschitzness. Its supplied interface defines the model and vector field; local Lipschitzness is supplied separately by F5. This is an inaccurate dependency restatement.",
      "context_sha256": "84a8ad8f836383434bd2c6a6d27066c4c14142f577fdb80fd1358a696b553af8",
      "item_sha256": "ac9ea079066dc586a6c06ce7114c68b40fa222892222f7672d7b154d1979f92d",
      "at": "2026-10-17T01:53:48.844Z"
    },
    {
      "id": "thm-sectional-forward-euler-total-error-budget",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 requires Δ≤1 and a continuous solution with initial mass M₁, but the statement supplies only its projection/reservoir convention. It permits inputs outside F2’s domain, so the cutoff bound used in the proof is not licensed.",
      "context_sha256": "bb9cdc28c0292ed2e56dd93725289007073abbf82d3f9fa5a29959e8f5096f7e",
      "item_sha256": "92c5418abb211e4f8a6895db1571affa335a7cfb073a6f6b58946588537f40d8",
      "at": "2026-10-17T01:53:49.914Z"
    }
  ]
