# Step 7 adjudicate: initial, round 1, unit 11

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u11.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"11",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-riesz-transforms-on-euclidean-space, 1:cor-riesz-transforms-are-ltwo-bounded, 1:lem-conjugate-dirichlet-kernel-and-principal-value-formula, 1:lem-riesz-transform-principal-value-kernel-formula, 2:cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, 3:ex-hilbert-transform-of-the-poisson-kernel, 3:ex-riesz-transforms-square-to-minus-the-identity-in-sum, 4:cex-hilbert-transform-does-not-map-linfinity-to-linfinity, 4:cex-hilbert-transform-is-not-strong-type-one-one.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-riesz-transforms-on-euclidean-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final normalization claim is false: changing from e^{-2πix·ξ} to e^{-ix·ξ} leaves both the Riesz multiplier and kernel constant c_n unchanged, because ξ_j/|ξ| is invariant under positive frequency rescaling.",
      "context_sha256": "82818cf4a4f13dba54e3ec94b53836f80308cd90ac0f65ca5107d4ebe279161b",
      "item_sha256": "f231f9f2656c34a44e00a78fab7da63d1426807b23b34bc569847bef624efc55",
      "at": "2026-10-01T20:47:07.386Z"
    },
    {
      "id": "cor-riesz-transforms-are-ltwo-bounded",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 inaccurately restates Plancherel: it asserts F₂⁻¹(-g)=-g for every L² class g. Linearity gives F₂⁻¹(-g)=-F₂⁻¹g; the identity yielding -g requires input -F₂g.",
      "context_sha256": "7181ab58367f9d174477279f0f349ee9985c927411c0cc1debe82e7e64be627b",
      "item_sha256": "4c1eaf97ece50e6e063f7d6ea8d83563655e38e950dc171f4689227573f10254",
      "at": "2026-10-01T20:47:04.899Z"
    },
    {
      "id": "lem-conjugate-dirichlet-kernel-and-principal-value-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 falsely asserts |a_k|=|f̂(k)| for every k. At k=0, a_0=0 while f̂(0) need not vanish; f≡1 is a counterexample. The square-summability justification must instead use |a_k|≤|f̂(k)|.",
      "context_sha256": "45890a40726d7738656705cc05bded2b1b335c3b04bd0185edee26fe310c962e",
      "item_sha256": "d893b75319d25bdff94e95ea5789e7ac6adc18e4f06699f259523dc5ff7b0e9f",
      "at": "2026-10-01T20:47:47.121Z"
    },
    {
      "id": "lem-riesz-transform-principal-value-kernel-formula",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies [F12] to f:R^n→C and the curve t↦x−ty. The supplied chain-rule interface covers only real scalar maps between subsets of R; it does not license this multivariable composition. The needed extension is neither supplied nor proved.",
      "context_sha256": "0f85b2dd3b0ef1c0d3c0494291dd3ad7255e25d8df124ea4c7699f2fa3114540",
      "item_sha256": "05a8e7018dbe3fc491f6a593547b8079a4a8542b740962eecadbd6d7dcdca9e6",
      "at": "2026-10-01T20:47:37.075Z"
    },
    {
      "id": "cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely asserts F₂⁻¹(−g)=−g. Linearity gives F₂⁻¹(−g)=−F₂⁻¹g; Fourier inversion is not the identity on L². This is an inaccurate restatement of the supplied Plancherel interface.",
      "context_sha256": "a08054a218217d4293a0d3a58ef8b4f3d24888663ff77375c04d62a5c8c6bb3f",
      "item_sha256": "15e8b5ee55975d261f8742e2779e15e671fbeb75ad9aa3869e858501df8cb1e4",
      "at": "2026-10-01T20:47:03.101Z"
    },
    {
      "id": "ex-hilbert-transform-of-the-poisson-kernel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 applies F12 to qχ_{(-∞,0]} before establishing its integrability. F12 requires an L1 function, yet this invocation is used to prove that very integrability; the argument is circular.",
      "context_sha256": "614bc603891f92aa62d4760511f977574fc9df814aca016de918a6d06300775f",
      "item_sha256": "ae847d643d765684f9ab3b502fc006d1dbbb17cd68005e0c661100ba5b61aec4",
      "at": "2026-10-01T20:47:34.133Z"
    },
    {
      "id": "ex-riesz-transforms-square-to-minus-the-identity-in-sum",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F5] falsely states that F₂⁻¹(−g)=−g for every L² class g. Plancherel and complex linearity give F₂⁻¹(−g)=−F₂⁻¹(g); the inverse Fourier transform is not the identity. This is an inaccurate dependency restatement.",
      "context_sha256": "c090c5e2a7ef1b884dc4513ad4fdda22ceb25c1f1c9a0b93d760ee896f567fad",
      "item_sha256": "a2339f14d79999cd335d6adb5d68f70ae453c56ca383938ae6fe04abd80d054a",
      "at": "2026-10-01T20:47:11.682Z"
    },
    {
      "id": "cex-hilbert-transform-does-not-map-linfinity-to-linfinity",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 defines f_j=f*φ_{1/j}, but sequences start at j=0 under the library conventions. Thus f_0 is undefined, and steps 3.1–4.1 invoke an undefined sequence. Replace the scale by 1/(j+1).",
      "context_sha256": "7300f25b9f82466e1db24518c8336933b2b3c60b2e60f9d12ea5e0f10391cd3c",
      "item_sha256": "8dcb0fc06581f99af9046f1ae7b4f042067d334714c4423f260c584e570cb9f0",
      "at": "2026-10-01T20:47:12.354Z"
    },
    {
      "id": "cex-hilbert-transform-is-not-strong-type-one-one",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 defines the sequence f_j=f*φ_{1/j}, but library sequences start at j=0. Thus f_0 requires 1/0, while mollifiers require ε>0. The approximation sequence used in steps 3.1–4.1 is undefined; use φ_{1/(j+1)}.",
      "context_sha256": "9d2f6fd445bf16f0c9eb30219fbbab4b416fd38d659c9ac5bbd5d8758828f8cd",
      "item_sha256": "74410679e58f6c5799be13fa0c74bc592111217653d5c0fd846ee76a1cc26210",
      "at": "2026-10-01T20:47:29.249Z"
    }
  ]
