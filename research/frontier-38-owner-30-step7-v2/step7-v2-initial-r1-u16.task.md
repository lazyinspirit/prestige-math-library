# Step 7 adjudicate: initial, round 1, unit 16

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u16.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"16",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion, 3:lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power, 3:lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions, 5:def-lexicographic-order-on-fork-noodle-deck-monomials, 7:lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel, 9:lem-fork-detection-transports-to-arbitrary-boundary-crosscuts.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 assumes F1's collapses restrict compatibly and preserve the named cells; its supplied interface gives no such compatibility. Matching boundary formulas proves saturation of an abstract chain inclusion, but does not identify it with the actual configuration inclusion.",
      "context_sha256": "e7834f63287cd6672ab5b7292f6e13e799742ca4f9a722045a60415e251a250b",
      "item_sha256": "20d15629f76708d6452dabb87dda39f90952e97d59d9d42dbcf112c4e62c56f7",
      "at": "2026-10-03T14:21:19.877Z"
    },
    {
      "id": "lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F1] inaccurately restates the arc-isotopy dependency as supplying relative graph smoothing and graph-preserving ambient bigon moves. Its supplied interface guarantees single-arc isotopy, not these stronger conclusions used in steps 1.1–1.2.",
      "context_sha256": "49f9ccc47fd7d00a8ae37f824e2b31f5fb829e106ca8b63d22e53cfa7c8f43d8",
      "item_sha256": "14cc10a49ee6c258feab77ee0949d56b91c52ae35f8b11c9391c338d9140d5a3",
      "at": "2026-10-03T14:21:36.172Z"
    },
    {
      "id": "lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] restates the homotopy–isotopy dependency as supplying smoothing, terminal-sector normalization, and universal-cover bigon projection. Its supplied interface asserts none of these; steps 1.1–3.1 rely on this unsupported strengthening.",
      "context_sha256": "2b585539fe1dc40006cfe22a6c902d4aabd340b38e531e66fe71390679dc72ed",
      "item_sha256": "4d1dcab65c2c20e5716510f2215afc24729339d37db554b31dd3b38a4886a1a2",
      "at": "2026-10-03T14:21:46.104Z"
    },
    {
      "id": "def-lexicographic-order-on-fork-noodle-deck-monomials",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The cited well-definedness lemma requires an absolute first homology class, but the fork surface supplies only an end-relative class. It therefore does not establish the claimed independence of this sum without a compact-replacement and normalization argument.",
      "context_sha256": "e7925d93fe404dc2c9fa3752bb5ad5a1fbb71eac00fff40ba7b100a733707ab9",
      "item_sha256": "83b933f0c84d2eda0676eb6370aa53067528715f51fbc570b119f1b5d51ec932",
      "at": "2026-10-03T14:21:33.198Z"
    },
    {
      "id": "lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 5.1's index swap would compare b_{j,j} with b_{j,i}, requiring maximality of m_{j,i}, which is not established. It does not prove b_{j,j}=b_{i,j}; the stated same-direction arcs do not supply the required comparison loop.",
      "context_sha256": "88a3d776621a6a8eb17acf122b953da87d8245f284e7755566b2687bd4e572cc",
      "item_sha256": "0f8a75b416a3da77929d18b2c8c321a417b139f2aec4d89aed0df9e7dc40b4d6",
      "at": "2026-10-03T14:22:20.088Z"
    },
    {
      "id": "lem-fork-detection-transports-to-arbitrary-boundary-crosscuts",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately attributes the identity ⟨c_F,y_N⟩=Δ_F⟨N,F⟩ and finite-chain naturality to its dependency. The supplied interface states neither; step 2.1 invokes them without establishing these extensions.",
      "context_sha256": "2bd01adde7a0f0d9536a0ecb416a9acd4e96bec7a4667adf4dbc0b6d8275d3ba",
      "item_sha256": "520e69737d01c2b65c7221464f8aa2b47956bde82409805487c1d203d07d1401",
      "at": "2026-10-03T14:21:31.546Z"
    }
  ]
