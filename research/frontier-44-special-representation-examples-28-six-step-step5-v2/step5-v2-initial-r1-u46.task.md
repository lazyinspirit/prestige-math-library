# Step 5 adjudicate: initial, round 1, unit 46

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-46-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u46.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"46",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:thm-polynomial-representation-of-a-klr-algebra, 3:thm-klr-pbw-basis-theorem, 4:ex-the-double-edge-klr-braid-correction, 5:lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases, 6:def-the-klr-cartan-pairing, 15:lem-klr-projective-duality-and-positive-divided-string-leading-terms.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "thm-polynomial-representation-of-a-klr-algebra",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The statement claims finite-dimensional homogeneous components of R_n(Q) without assuming I finite. For infinite I and n=1, the independent idempotents e(i) give an infinite-dimensional degree-zero component. Step 8.1 proves finiteness only for fixed R(beta).",
      "context_sha256": "f03a8ec194b80db7c76d8c772ba295f5fd5cedb13358d095feeb9744e54186f9",
      "item_sha256": "0ab89a0d98fbf23b81ed3d516788a447e71e29e10b5cdd768801115c3e682039",
      "at": "2026-10-11T15:30:26.573Z"
    },
    {
      "id": "thm-klr-pbw-basis-theorem",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 gives a false rewriting rule. On equal colours, relation (6) yields x_aτ_ae(ν)=τ_ax_{a+1}e(ν)+e(ν), which is neither sign of τ_ax_{a+1}e(ν)−e(ν) in characteristic ≠2.",
      "context_sha256": "dc1f4fdf12f59649b9d66e1cbfa43af5c67d2486dac249f97219ec14dcb8ba04",
      "item_sha256": "c751ffdef09208e40272b19110feddc8345fc8aecc56d2adf102cdd21d77052c",
      "at": "2026-10-11T15:29:37.016Z"
    },
    {
      "id": "ex-the-double-edge-klr-braid-correction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 misstates PBW: a basis of e(ν)R₃(Q)e(ν′) consists of τ_w x^a e(ν′) with wν′=ν. The stated monomials end in e(ν), so for ν≠ν′ they have the wrong right idempotent and cannot form a basis of that block.",
      "context_sha256": "f6c17ce7e3407f211f9a2f1cb4428e005dfe5dd4f55894ec22cec9af09d2aab1",
      "item_sha256": "fd3238427e3f12223856502077a5d44e333189e2fbc5d769abf58c7ca81f4334",
      "at": "2026-10-11T15:29:47.304Z"
    },
    {
      "id": "lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 falsely claims adjoining the first root makes k[x_1,...,x_m] rank m over its symmetric subring. For m=3 that module has rank 6. The rank-3 extension is only k[e_1,e_2,e_3][x_1], so the stated intermediate presentation is invalid.",
      "context_sha256": "b3793406bf555d0725d931fbcde1a7072359a6fa1dfe6e868f6c8df511fb0dfb",
      "item_sha256": "d1622a3dfa597e7d3f512584f60f412d4749e94df2e6b9df67ae8e2ef23121dc",
      "at": "2026-10-11T15:30:00.258Z"
    },
    {
      "id": "def-the-klr-cartan-pairing",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The proof attributes freeness of R(β) over Cβ to the Krull–Schmidt lemma, but its supplied interface asserts no such result. This unsupported prerequisite is essential to the claimed Laurent-polynomial-times-(β)q value range.",
      "context_sha256": "eb7503ec2403018c96b40b0c70df96dc205282b4375f4e0656db4bf0f4cc4a07",
      "item_sha256": "9119684b35da1f57502e7ef13bdadb52f6ee7d1ca1091f97a5c8631dfbc34b82",
      "at": "2026-10-11T15:29:23.633Z"
    },
    {
      "id": "lem-klr-projective-duality-and-positive-divided-string-leading-terms",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 attributes a right-string global recursion to suppliers whose interfaces provide only the left F_i^{(n)} recursion. The statement invokes that unsupported right recursion, while step 6 explicitly declines to infer it.",
      "context_sha256": "1d2b07a4e8d3311239a882459c0e7a28fa6b587a1d91c535c83c9131a10e75e3",
      "item_sha256": "e511cad4e97a329dc8948d266b910091420c310293d6479b5740d71b0b5a287b",
      "at": "2026-10-11T15:30:48.390Z"
    }
  ]
