# Step 5 adjudicate: initial, round 1, unit 8

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-8-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u8.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"8",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 8:def-balanced-triple-and-globalization-map, 11:lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite, 12:thm-the-highest-weight-crystal-triple-is-balanced, 15:thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module, 15:cex-bar-invariance-and-mod-q-congruence-without-balancedness, 17:lem-quasi-r-divided-power-integrality-on-based-lattices, 17:ex-canonical-global-basis-normalization-in-symmetric-type, 17:ex-lower-and-upper-global-bases-in-a-small-highest-weight-module, 19:ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-balanced-triple-and-globalization-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claimed extension isomorphisms omit the hypothesis of balancedness required by the two-chart lemma. In the supplied mixed-lattice example, M has A-rank 2 but E_Z=Z(v+w), so A⊗E_Z has rank 1 and cannot equal M.",
      "context_sha256": "f068d3fc7640bb93db6e59a921aa1c6b30b7cb557c596bc9a9c893beb382a244",
      "item_sha256": "aa99c89cf5b1a207f9758d8914e84390b5ae25ff4dbe614906f64f5edb600ba2",
      "at": "2026-10-11T14:56:22.426Z"
    },
    {
      "id": "lem-homogeneous-dual-basis-sums-are-basis-independent-and-weightwise-finite",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 incorrectly restates the completion as having componentwise multiplication. The supplied dependency defines root-degree convolution, (AB)_ν=Σ_{β+γ=ν}A_βB_γ, which is a different algebra structure.",
      "context_sha256": "879285687b79a7634ef89866fa3bd4e568d3304edbc444479e89f6f79d269343",
      "item_sha256": "7ea22bcfdb6020b0832a84c807c0991ac2dd93b54d25ea96233fb4cf8c9a720b",
      "at": "2026-10-11T15:12:38.678Z"
    },
    {
      "id": "thm-the-highest-weight-crystal-triple-is-balanced",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 6.1 attributes to F1 a relative quotient construction yielding e≡F_i^{(n)}G∞(b) modulo I_(i,n+1). The supplied interface proves balancedness and adapted bases, but supplies no such multiplication congruence. Assertion (v) remains unproved.",
      "context_sha256": "c22c93f620988ded1870c444b8ee7ccedd53dd76a732d3f21681dfec228f524d",
      "item_sha256": "bc0d4c6012fc3f58cd6b9f05859208d287e3974715e858cb31a92d9d81f1109c",
      "at": "2026-10-11T14:57:23.281Z"
    },
    {
      "id": "thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] incorrectly calls the residue projection a bijection onto B(lambda)∪{0}. For sl₂ with lambda=0, distinct b₁ and b₂ both map to 0. The cited interface asserts bijectivity only on surviving crystal elements.",
      "context_sha256": "f25c51fe0b0d2f27811ac6f53a501bbaa6df0a662be53be065352ec2a2dad3c1",
      "item_sha256": "be28997e8eac2fd85223b2accac51679bab41ea32973b60f02b65d44dd969484",
      "at": "2026-10-11T14:57:08.630Z"
    },
    {
      "id": "cex-bar-invariance-and-mod-q-congruence-without-balancedness",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L2] inaccurately restates the crystal-lattice interface: it omits the required weight decomposition (ii) and adds a specified residue set, which belongs to crystal-basis data. Fullness and Kashiwara stability alone are not the supplied definition.",
      "context_sha256": "a3440f99693a0819cc991b40a30272702e7677be22b38616f2b9abb0d69c738e",
      "item_sha256": "b176408e16a2c874850370118d904123a68d45b5aef930c705f1d8f7b78c4a56",
      "at": "2026-10-11T14:57:54.014Z"
    },
    {
      "id": "lem-quasi-r-divided-power-integrality-on-based-lattices",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 inaccurately restates [F1]: K_i^{-t} acts on the second factor, not the first. On second weight μ its coefficient is q_i^{-t(μ(h_i)+r-t)}. The claimed weight-dependent coproduct induction therefore uses the wrong scalar.",
      "context_sha256": "2988d942b578bcbc2bc2bce5067375d3d7b213afe1f3ba27354a602efca6f165",
      "item_sha256": "1c338a297a64df374eb3ba9c31fdea82aa24e7b69ca42fd9d2fd31e2bcaa8474",
      "at": "2026-10-11T14:58:54.185Z"
    },
    {
      "id": "ex-canonical-global-basis-normalization-in-symmetric-type",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[L1] states tilde e F^(n)=F^(n−1) without restricting n≥1. At n=0, the cited string theorem gives tilde e(1)=0, whereas F^(−1) is undefined. This dependency restatement fails at the zero-index boundary.",
      "context_sha256": "d01c369b5c041b1771a38cfd7f8ccb4134ae0c1885aa9fce34bf133ddb2c31e2",
      "item_sha256": "1768bea33337d05e7adeac2f43a669a5759c18b703d9478d6ee305c6b1da880e",
      "at": "2026-10-11T14:57:56.529Z"
    },
    {
      "id": "ex-lower-and-upper-global-bases-in-a-small-highest-weight-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.2 falsely extends the A-lattices to an A0 crystal lattice. Since q^{-1}∈A but q^{-1}∉A0, their A0-spans are the whole field module. The chart requires the Z[q]-span of the basis or intersection with L0 before extension.",
      "context_sha256": "a00f9257cb763066f1de250e4b8b2677654ebd1f99e08ef120ea462c1932c75c",
      "item_sha256": "d50404fbf246ec48109548e678861abaa913b26020d0c065a0519aed5c5d6ca1",
      "at": "2026-10-11T14:57:50.103Z"
    },
    {
      "id": "ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The Example and step 1.1 reverse the globalization map. The supplied definition makes globalization the inverse map from integral crystal residues to E_Z; the map from E_Z onto residues is the canonical reduction map.",
      "context_sha256": "45785552ee603d5e2b740dd450b9d080eff7d71107feb56088f537d25d6595ad",
      "item_sha256": "f9af5fb50ff6186c4f5da3711d2757454d415b201086b3680fa897aa723742b8",
      "at": "2026-10-11T14:57:44.396Z"
    }
  ]
