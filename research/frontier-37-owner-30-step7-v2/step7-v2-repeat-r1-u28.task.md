# Step 7 adjudicate: repeat, round 1, unit 28

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/repeat-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-repeat-r1-u28.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"repeat",round:1,unit:"28",input_sha256:"e05cdf19d5e313eca8bcdfe4dd966cdf4b0c59c46fd851eb9dff4ee3cbf9156e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces, 2:lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces, 2:lem-weak-harmonic-limits-on-riemann-surfaces, 3:lem-green-envelope-dichotomy-and-logarithmic-pole, 4:lem-green-kernel-exists-after-removing-a-chart-disc, 4:lem-green-kernel-symmetry-on-riemann-surfaces, 5:lem-dipole-green-function-on-riemann-surface, 5:lem-green-function-uniformizes-simply-connected-surface, 9:cor-universal-cover-classification-riemann-surfaces.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F9 and step 5.4 invoke slit-plane holomorphy of the principal logarithm, but the cited definition only defines pointwise logarithms and powers. Its supplied interface does not license the analytic fact essential to that conjugate construction.",
      "context_sha256": "8bc93d16d0641f3681221f717de1e725fa6306c904981c81bfdf892389ae3481",
      "item_sha256": "d410ecf2d146585dc29e2c55d278f56c4942b8a277fe998773ad698411036c56",
      "at": "2026-10-02T05:26:40.884Z"
    },
    {
      "id": "lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F11] and step 19.1 require a holomorphic logarithm branch on a sector. The cited complex-powers interface only defines pointwise powers; it supplies no holomorphic-branch theorem. Thus the claimed harmonicity of the barrier is not justified.",
      "context_sha256": "ad761c19876d3bf88b868d14ee3076d6a7c9faa00ea11c81f17af11ff377661b",
      "item_sha256": "26a3136102e4535a23c5fa79149a6cd489669c0721f09e61741bdd268f3b6bc6",
      "at": "2026-10-02T05:27:23.979Z"
    },
    {
      "id": "lem-weak-harmonic-limits-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F8 and step 14.1 misstate the cited local mean-value corollary: its A_u is a ball average, but the proof identifies A_w with a circle average. Step 13.3 establishes only circle means; no conversion to the required ball means is given.",
      "context_sha256": "4ae9709acff091f89415f8ede23923dc50a7e210a4f7ef89ab8db24c157f0655",
      "item_sha256": "2fd067ed944c84de5ad861fc264303ab9890ec7bdd9a735a8af0fd58c2ba82f8",
      "at": "2026-10-02T05:27:25.250Z"
    },
    {
      "id": "lem-green-envelope-dichotomy-and-logarithmic-pole",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.5 defines u_n=max{v_1,...,v_n}, leaving u_0 as an undefined empty maximum. Under the required zero-based sequence convention, (u_n) is not a sequence, so the subsequent Poisson-modification and Harnack argument is not well defined.",
      "context_sha256": "da2ca205b3271fc659e5d15b10ee13062586438635661bbe320d6ddf0807be77",
      "item_sha256": "a42e751eb08774e269280a6833112a9e5d04c43da18012b9208a7b2cb5f4e903",
      "at": "2026-10-02T05:26:39.917Z"
    },
    {
      "id": "lem-green-kernel-exists-after-removing-a-chart-disc",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The hypotheses do not require the closed ball to lie in φ(W); the preimage containment is automatic. Take X=ℂ, W={Re z>0}, φ=id, a=−2, ρ=1. Then U=∅ and Y=ℂ, whose canonical Perron envelope is infinite.",
      "context_sha256": "f8d421f1f08d26435bc5d4ec399996ade7b61386c050622ee4d04fc590b3f6ce",
      "item_sha256": "a4e371767f2be95dacc19621d75c3a573ce1f327f65e9324c14f8a774e48aa32",
      "at": "2026-10-02T05:26:20.858Z"
    },
    {
      "id": "lem-green-kernel-symmetry-on-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F12 restates the continuous-image compactness dependency for arbitrary topological spaces, but its supplied interface assumes metric source and target spaces. The item supplies no metrizability result to license its application to the ambient surface.",
      "context_sha256": "7ca45b5ed530a82b15bc300df4a2314a6a2b5d8f961d89593c23730b17e0c74a",
      "item_sha256": "43764a1780c84f8bdd93e54956a26dd82c6f520cfacbf6258ea3f1ddccc47f4e",
      "at": "2026-10-02T05:26:48.777Z"
    },
    {
      "id": "lem-dipole-green-function-on-riemann-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 drops the dependency's requirement that the closed disc lie inside a larger chart. A relatively compact chart disc can be a slit annulus; its closure is a closed annulus with disconnected exterior, contradicting F3.",
      "context_sha256": "fbaca5be8d1536f6b808ff0322633959276448c140123ad8bfd0ac613afb5881",
      "item_sha256": "c1a96b78c9204b3eccf92095f8d9385d39ea319534a476698a959c1a7a11f008",
      "at": "2026-10-02T05:26:16.445Z"
    },
    {
      "id": "lem-green-function-uniformizes-simply-connected-surface",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1(iii) defines F_n using M−1/n for every n. Since library indices start at 0, F_0 involves division by zero, so the claimed decreasing family and intersection argument are undefined as written.",
      "context_sha256": "1a34f03b3c8f409825fa8889f1e74e0ded676ec0f2143a4cdf9f2934109e4797",
      "item_sha256": "6de224c8170bf92b70293db7384e12bba054d57d816e4095b0b96616f388f4f0",
      "at": "2026-10-02T05:26:24.962Z"
    },
    {
      "id": "cor-universal-cover-classification-riemann-surfaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 8.1 invokes 7.1 to make N→N/H holomorphic, but 7.1 uses an already holomorphic covering and transports its target atlas. It establishes no such result for arbitrary H, leaving the biholomorphic lift and model uniqueness unsupported.",
      "context_sha256": "94c00be8d57e25e66d4c17d732e3de81e0ac2d22c3d116ea31c883b62f873adb",
      "item_sha256": "b6f3a1be628e7453c05d6d5b0dce7e3b6a73837ad7760052d69ac3e1c6891a02",
      "at": "2026-10-02T05:23:41.425Z"
    }
  ]
