# Step 7 adjudicate: initial, round 1, unit 23

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-37-owner-30-step7-v2/step7-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-37-owner-30",phase:"initial",round:1,unit:"23",input_sha256:"5dc0a9d7c3f42b5c621a33c0b895506487aa517343c67149c8bfebd0a1c06728",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-37-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-p-regular-and-p-restricted-partitions, 2:def-modular-specht-form-and-radical-quotient, 4:lem-conjugate-specht-sign-duality-over-fields, 7:thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular, 8:cex-p-regular-and-p-restricted-are-not-the-same-label.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-p-regular-and-p-restricted-partitions",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The claim that dual or cellular Specht modules are indexed by p-restricted partitions is false: Specht modules exist for every partition. The supplied interface restricts the simple-head labelling D(μ), not the dual Specht family S(μ).",
      "context_sha256": "e21c871049fd00f1fdb3ce005f17e0adf3124e7de4f05b84fc7726db051c068b",
      "item_sha256": "0720c7ee12c0a5a9fbf98406ee1c94629ea48effbea7cc52dc75c2aea247f51f",
      "at": "2026-10-01T20:55:08.075Z"
    },
    {
      "id": "def-modular-specht-form-and-radical-quotient",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] incorrectly says all elements after arbitrary base change are integral combinations of standard polytabloids. For R=Q and λ=∅, (1/2)e∅ is not an integral combination. The dependency gives an R-basis, hence R-linear combinations.",
      "context_sha256": "2f257b5f55c3cab0eaa780e92fb2926b683d7c58ed8313abd6e71cf1a2e6dcb9",
      "item_sha256": "7f2415bcc0c24d14ed7fcc6719d9109962e6f802d2270b5e54b5b94c75aa27a5",
      "at": "2026-10-01T20:55:04.222Z"
    },
    {
      "id": "lem-conjugate-specht-sign-duality-over-fields",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely states σ·(e⊗w)=(σ·e)⊗w, omitting sgn(σ). For F=Q, λ=(2), and σ=(12), the left side is −e⊗w and the right side is e⊗w≠0, contradicting the stipulated diagonal action.",
      "context_sha256": "b5448cb8576204b3c9364b49bfbedd61f572468330873ee4f409fc218cdb30d9",
      "item_sha256": "9a9530eb0f7628a44a61a99bdd634b1560697ad2f30ea5acbf7a38a5f919a207",
      "at": "2026-10-01T20:55:32.063Z"
    },
    {
      "id": "thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Assertion 3 wrongly requires zero when μ is lexicographically larger than λ, contradicting step 4.1. For p=3, the supplied S3 interface gives d_{(2,1),(3)}=1; this entry lies below the diagonal in decreasing lexicographic order.",
      "context_sha256": "21335006138a7530fd465d152557659866c41021ac7ab66b20dd7f2cb2419f34",
      "item_sha256": "1114f229bb64b77063e361fca40de1d27aeda41275885641f6c4c20d2cefbb29",
      "at": "2026-10-01T20:55:16.411Z"
    },
    {
      "id": "cex-p-regular-and-p-restricted-are-not-the-same-label",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 reverses the Young diagrams: [(2)] has two columns of height 1, while [(1,1)] has one column of height 2. Its asserted column counts contradict F2 and the diagram definition, although the displayed conjugate partitions are correct.",
      "context_sha256": "597fd821a1787cd80fe797a7b41f35926f88cd99913ac8645bf0a1c73ef7b81c",
      "item_sha256": "82dce7905ab181305f30cae48428f765d4f63da429c14da3796ab739585c0757",
      "at": "2026-10-01T20:55:12.988Z"
    }
  ]
