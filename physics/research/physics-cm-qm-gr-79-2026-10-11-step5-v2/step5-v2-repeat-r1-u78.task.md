# Step 5 adjudicate: repeat, round 1, unit 78

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/repeat-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-batch-78-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-repeat-r1-u78.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-cm-qm-gr-79-2026-10-11",phase:"repeat",round:1,unit:"78",input_sha256:"1cf7e5abaa87ab71967de0936e088d092ed7f360990f3752a2c33919d4433b40",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-cm-qm-gr-79-2026-10-11 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-gr-periodic-torus-and-sobolev-spaces, 8:lem-gr-galerkin-compactness, 11:thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, 12:ex-gr-periodic-energy-method-check, 13:lem-gr-reduced-einstein-principal-part, 13:thm-gr-local-symmetric-hyperbolic-well-posedness, 22:lem-gr-dust-initial-data-and-tilted-initialization.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-gr-periodic-torus-and-sobolev-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (e) allows arbitrary intervals I, but its cited C∞ definitions require open Euclidean domains. For I=[0,1] or I={0}, G∈C∞ is undefined without an endpoint extension convention or an appropriate manifold structure.",
      "context_sha256": "ea4727476cca1698b6ef518d233a9335cb3eddd9c20470d70e486ddab728019e",
      "item_sha256": "d17f3e02d31660b6979d5708b6bad469872f694a0a6b41fe100d0fb7e94ddd5e",
      "at": "2026-10-13T09:24:50.294Z"
    },
    {
      "id": "lem-gr-galerkin-compactness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "L4 restates the cited FTC for arbitrary normed spaces, whereas its supplied interface requires a Banach space. This drops the supplier's completeness hypothesis without a local extension argument, although L5 supplies completeness for the actual application.",
      "context_sha256": "d6226a74325279a915a1ab3a2522388eacdec0a4d2472fc5006aea877fbd459f",
      "item_sha256": "502abb1eee58607596401c56cb17cd31363a796d94065ab35d83703db95d2704",
      "at": "2026-10-13T09:32:39.243Z"
    },
    {
      "id": "thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (b) excludes K from C', but steps 1.1–3.1 use the existence bound C(1+R), whose supplied interface allows dependence on K. No K-independent solution bound is established, so the claimed constant dependence is unsupported.",
      "context_sha256": "0b0e3383ea4d5bd359d3e63a5ab8b28f2b26eead2b90e4b7e8ea221bbb33d11f",
      "item_sha256": "265a97cbb4b0e771f9a34bc39dd5f3230939c882ff9ab32df015fea0a04d1752",
      "at": "2026-10-13T09:40:55.253Z"
    },
    {
      "id": "ex-gr-periodic-energy-method-check",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 claims to verify the Galerkin energy inequality, but its e is only the L² energy of u. The cited lemma defines e as the sum of derivative energies through order s for u_N; the calculation does not verify that energy.",
      "context_sha256": "a5a2e135d42dbdb4456eac24d84f2f189fe4975b954f834b58f37d05147a3f1b",
      "item_sha256": "a870e2e2b5c026f0f0943d2e84073002163d29ee88f4472d465d0e408b468e9a",
      "at": "2026-10-13T09:29:58.484Z"
    },
    {
      "id": "lem-gr-reduced-einstein-principal-part",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.2 and (b) omit the matter data: the cited reduced equation contains κ(T_ab−½(g^{cd}T_cd)g_ab)+Λg_ab. Its source cannot depend only on u and the background metric. No T, κ, Λ are fixed, and no vacuum restriction is stated.",
      "context_sha256": "91442839f62c879b9f0124f39118b3f8e290cc655daaa5331e4d2d9f6e37e2fd",
      "item_sha256": "59e123ba8cf75957c54081b5c46ac9a7da30b6494194eebee2fb3977fc938517",
      "at": "2026-10-13T09:33:22.454Z"
    },
    {
      "id": "thm-gr-local-symmetric-hyperbolic-well-posedness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 does not justify nonnegative lateral flux: the cone uses d, while its matrix inequality uses arbitrary chart coordinates. Rescaling a chart changes coordinate speeds without changing the d-cone, so the inequality need not imply finite-speed independence.",
      "context_sha256": "08d43589ca5b616ea550e1304b50c898e772098fb4fa10d416cfbc2cd71dfbe7",
      "item_sha256": "9bc6664caa57f79b26e00909d9e6f2db8f05848baf656f54283eb91ce2e5b325",
      "at": "2026-10-13T09:40:07.833Z"
    },
    {
      "id": "lem-gr-dust-initial-data-and-tilted-initialization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 applies the hypersurface derivative D and K to the boosted e_a. For nonzero tilt these vectors are not tangent to Sigma, so those Codazzi expressions are undefined. The cited interface requires tangent arguments; the curvature prescription is therefore invalid as written",
      "context_sha256": "41c3a62e1e4bc98d8c164bc639634773ba057ecdaffd2b7ceba9ef07cb5fc6f4",
      "item_sha256": "95c3600b71ba828b80277d797978d39248182e29caf4ae89491ff14838a913ee",
      "at": "2026-10-13T09:33:08.836Z"
    }
  ]
