# Step 5 adjudicate: initial, round 1, unit 42

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-42-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u42.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"42",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-maxwell-rectangular-stokes-identity, 3:def-maxwell-discrete-cochain-and-yee-grid, 3:ex-maxwell-pec-rectangular-cavity-mode, 4:def-maxwell-edge-fem-semidiscretization, 4:lem-maxwell-discrete-incidence-identities, 5:def-maxwell-edge-ritz-projection, 5:lem-maxwell-finite-dimensional-ode-existence-uniqueness, 6:lem-maxwell-edge-ritz-projection-well-defined, 7:lem-maxwell-magnetic-compatible-initial-projection, 7:thm-maxwell-periodic-yee-smooth-solution-error.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-maxwell-rectangular-stokes-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement allows y0=y1 or z0=z1, but the proof applies FTC and Fubini on nondegenerate intervals and rectangles; the cited interfaces require strict side lengths. Handle those degenerate cases separately or require strict inequalities.",
      "context_sha256": "91aa3fee744a8546b2d240bd47b7f601775c1aae96b331e5a8b12227b68c2af4",
      "item_sha256": "d5538ea4b1b4a154375cc54e475591f24e81ba77b6d0d79f0d4c52645efdadaa",
      "at": "2026-10-18T03:23:32.658Z"
    },
    {
      "id": "def-maxwell-discrete-cochain-and-yee-grid",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "With ∂e=head−tail, Gᵀ is negative divergence, so GᵀMₑe=ρ gives negative physical charge, contrary to the dependency’s div(εE)=ρ; continuity has the same sign error. [Schneider §2.5](https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf)",
      "context_sha256": "fd117ecd162d93f3fe327aa3c2ef0f3e3bdfc9c1cd1b15db233a55abb9edd5de",
      "item_sha256": "088cb5a463195b9a4141cb7f4a91acff068ac2be2ed36a5181927d8df74006f0",
      "at": "2026-10-18T03:24:59.760Z"
    },
    {
      "id": "ex-maxwell-pec-rectangular-cavity-mode",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 drops the dependency’s impressed current J_src. Lossless sets σ=0 but does not set J_src=0; the item never assumes a source-free system, so its cited equations and verification are not licensed by the supplied interface.",
      "context_sha256": "c2843450ff2b0d102a6e71673d3662c4c152f32fe00763796482edf3af53f419",
      "item_sha256": "cdbab6b37f05a79a8a100341d4b42c580ae390f7ffcf4e8fe20dcbaa1d6b0b9f",
      "at": "2026-10-18T03:24:09.794Z"
    },
    {
      "id": "def-maxwell-edge-fem-semidiscretization",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited Maxwell model includes div B=0, but this ODE allows arbitrary b(0); DC=0 only preserves D b and never enforces zero. Require D b(0)=0 or restrict B_h to ker D.",
      "context_sha256": "a519599bca487f1f81f3b498c21a7fdced05a5e0a0ef0771223cc1186bee261b",
      "item_sha256": "b7bad51f638103ed53d78324cf475403ab5e1c7cd95bf0463856715b7a0e3062",
      "at": "2026-10-18T03:24:11.244Z"
    },
    {
      "id": "lem-maxwell-discrete-incidence-identities",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F1 inaccurately restates the PEC interface: it says the operators come from quotienting by the boundary subcomplex, while the dependency defines a mixed restriction that retains all faces and cells. Reject under the restatement check.",
      "context_sha256": "f026642212bbb48c0aa0afa7c2ca2e3f61ddcda0c1b9c0dbc5b56d4d591d04de",
      "item_sha256": "6c63ef343d90a8dd603fcc8ac89688ac73f921f4907573bcfd189c0d92d5962a",
      "at": "2026-10-18T03:23:33.317Z"
    },
    {
      "id": "def-maxwell-edge-ritz-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited lemma interface supplies uniqueness and best approximation, but not orthogonality. The defining equation does imply orthogonality, yet the item inaccurately attributes it to that lemma.",
      "context_sha256": "b29f8327ba8c09fb07a5c110a5aac706fe16a38198154d008272cce06ba76159",
      "item_sha256": "91b50c203756286e588de137f8e01c26000955c9868d35076b8fec33e6b58c37",
      "at": "2026-10-18T03:23:50.413Z"
    },
    {
      "id": "lem-maxwell-finite-dimensional-ode-existence-uniqueness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "T is not required to be positive, so T=0 is allowed. The ODE supplier explicitly asserts no IVP solution or time derivative on a singleton, but step 2.1 invokes it as if it supplied one.",
      "context_sha256": "13789e763e0a2088531151867a7dc273c7b56a2d2a9f543c4d952c1a89d0babd",
      "item_sha256": "da7ab6b9bbd67633d986ef96e52e1f9fa4a4c38f8fe2a27899a68dc49cb0ac43",
      "at": "2026-10-18T03:23:54.432Z"
    },
    {
      "id": "lem-maxwell-edge-ritz-projection-well-defined",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates the dependency interface: def-maxwell-edge-ritz-projection assumes Countable Choice in the inherited edge/face FE branch, but does not attribute it to H(div) and affine Piola definitions. That attribution is unsupported.",
      "context_sha256": "ac9515f9006bf5408fc3d195b8d39428b610571b4684b3403f331954b3adf913",
      "item_sha256": "caa50750fa15498ec76526a7e7d3438cb57de0bc89312bda63ddc0c41bcaa7c2",
      "at": "2026-10-18T03:23:52.997Z"
    },
    {
      "id": "lem-maxwell-magnetic-compatible-initial-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The O(h) step invokes the interpolation estimate without its mesh-aligned-material-interface hypothesis. The statement allows piecewise-smooth fields whose jump interfaces cut tetrahedra; such jumps can invalidate the claimed interpolation bound.",
      "context_sha256": "03c09c14516928282a277d91d67e9ef4f008fcd982b9735e37ceaa8b4d0b77a2",
      "item_sha256": "c37169e5c5af23666767449c34787c5e92754c58c3a662560c6026e7d663a6f8",
      "at": "2026-10-18T03:24:03.893Z"
    },
    {
      "id": "thm-maxwell-periodic-yee-smooth-solution-error",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 4.1 reverses the sign: Cw^n equals C times the midpoint of w^n and w^{n-1}, plus Δt CV^{n-1}/2. The displayed identity is false, so the claimed curl-error bound is not proved.",
      "context_sha256": "ea2f3a5edaf9a92d4a6e9723f44b6ac9f8a11e817ed92f4a1a3eab7f4833c392",
      "item_sha256": "903dae7e535eb0c0e6903f4ffb0f4d7f16ad5b373661d7a88f902390d8349e58",
      "at": "2026-10-18T03:24:33.112Z"
    }
  ]
