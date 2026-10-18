# Step 5 adjudicate: initial, round 1, unit 81

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-batch-81-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/non-ml-math-remaining-81-2026-10-18-step5-v2/step5-v2-initial-r1-u81.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"non-ml-math-remaining-81-2026-10-18",phase:"initial",round:1,unit:"81",input_sha256:"5a7686cf6af281fffc281470b9fd4d1b4497cd3e88649ffa4676dd5e748ac1b1",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run non-ml-math-remaining-81-2026-10-18 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-oriented-open-closed-surface-category, 1:lem-elementary-surface-sewing-relations, 7:lem-relative-surface-collars-and-elementary-decomposition, 8:def-relative-open-closed-surface-normal-form, 10:thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras, 10:thm-knowledgeable-frobenius-data-classify-open-closed-sewing.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-oriented-open-closed-surface-category",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition never requires a free-boundary label to match the color at its incident interval corner. For S={r,b}, two I_rr-to-I_rr rectangles may have free sides labeled r and b; gluing joins differently labeled sides, so composition is not a morphism. Add corner-label compati",
      "context_sha256": "cc6bfa40f531898a30b80da505c5cfd134c85c0962374d4d981aefcc4f29df59",
      "item_sha256": "2edfe01b6d751018da896537128cfd4390b22bb100627fe742f400c4568a86f0",
      "at": "2026-10-18T04:53:04.083Z"
    },
    {
      "id": "lem-elementary-surface-sewing-relations",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 gives a false cut-boundary word for h≥2: the cuts split B0 at each attachment, so its boundary segments must interleave with the seams and holes. Later multi-hole certificates rely on this criterion to identify the surfaces; as stated, that key step does not prove their ",
      "context_sha256": "d7e26d14204f054647c6e86092aff9c202f075f412366c49bd09b9f51ce32aaf",
      "item_sha256": "6690fc01f90dd9212e1e06f9207f804f3438dc3e17ed8320c94e124a3dac0a8a",
      "at": "2026-10-18T04:53:36.142Z"
    },
    {
      "id": "lem-relative-surface-collars-and-elementary-decomposition",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "In 7.1 rows 3–4, the glued interval seam has both endpoints on the same boundary component of the annulus. Cutting there yields a disk and an annulus, not the single disk obtained by cutting from Z to F_a, so the claimed cut-word match does not prove the mixed factorization.",
      "context_sha256": "eeb7d203993667c4eccb50b068ac81ba49aef0796d7ae900191532e4aa0126ac",
      "item_sha256": "6608a806bb86e89d71094d79bcb021060ccf37ac9068c814fb0973bf0b36be0b",
      "at": "2026-10-18T04:56:36.824Z"
    },
    {
      "id": "def-relative-open-closed-surface-normal-form",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "For incoming I_ab, F1 orients the surface boundary b→a. A cycle through incoming I_ab, I_ca, I_bc therefore calls for A_ba⊗A_ac⊗A_cb, but the input is A_ab⊗A_ca⊗A_bc. Since P only permutes factors, T_j is not typed for a three-slot disk.",
      "context_sha256": "d15b2a121f6b2eb7a109ef52be74be3d51c6154dc8427cdd38bd99dac594ab44",
      "item_sha256": "05e4a9055403af1956b2730e26b4e81e005e4451b69f0e62e80daf43f81823f3",
      "at": "2026-10-18T04:53:20.366Z"
    },
    {
      "id": "thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 claims every decomposition and gluing reduces to the normal word using F4. The supplied F4 explicitly does not present all surface morphisms, and F5 classifies surfaces but does not license reductions by those relations; functoriality of R is unproved.",
      "context_sha256": "0494f7f377525e26ca33ec3f06fcda377d06606707f4e54c7b475dddf1735c22",
      "item_sha256": "73bde16a299cb1ed6deb71b5583c5a213c57def0807634652675f2e26c252728",
      "at": "2026-10-18T04:53:23.375Z"
    },
    {
      "id": "thm-knowledgeable-frobenius-data-classify-open-closed-sewing",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 claims F4 connects decompositions by F2/F3 rewrites, but F4 only classifies surfaces and identifies a candidate normal word; it does not supply those rewrites. The reconstructed map is therefore not shown independent of decomposition.",
      "context_sha256": "27d1c8575d307ea303cbb04800a508d3fa646146351362728254ad2ec5154a3f",
      "item_sha256": "e0d3f49a2bba95a97586cb73b587d279e6512fe0ff1057cf4105a073277c29d3",
      "at": "2026-10-18T04:52:55.835Z"
    }
  ]
