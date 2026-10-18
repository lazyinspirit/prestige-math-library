# Step 5 adjudicate: initial, round 1, unit 34

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-34-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u34.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"34",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-na-smooth-neighborhood-dense-in-h1-simplex, 2:def-na-h0div-space, 4:lem-na-piola-preserves-rt-bdm-spaces, 4:lem-na-rt0-p0-kernel-is-divergencefree, 10:thm-na-rt0-bounded-commuting-projection, 10:thm-na-rt0-p0-darcy-error-estimate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-na-smooth-neighborhood-dense-in-h1-simplex",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 overstates the cited change-of-variables interface: it covers linear maps, not affine maps. Steps 1.1–1.2 use the affine contraction T_s(x)=c+s(x-c), so those change-of-variables inferences are not licensed by the stated dependency.",
      "context_sha256": "9331935e2a6bd254087c7bd8cf5fa155ac5f52e7e2c0d1aaefdf935db9a05362",
      "item_sha256": "7f12753a08d0cef494561785943bf5e081788e97ec4db393b1b7f81c7287c118",
      "at": "2026-10-18T03:20:38.698Z"
    },
    {
      "id": "def-na-h0div-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The definition invokes the cited trace quotient and weak normal trace for every open D, but their supplied interface requires Countable Choice for Sobolev-space interfaces. The definition omits that hypothesis.",
      "context_sha256": "c98ddfca2a4f9191805323f245ef723563997401776d768131b50655e8afaaca",
      "item_sha256": "8881daa85188a9c8fa961054cdd5b6a998115c2a8f5b11dfbaa3219551071e21",
      "at": "2026-10-18T03:20:31.251Z"
    },
    {
      "id": "lem-na-piola-preserves-rt-bdm-spaces",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement covers arbitrary d, but its cited RT/BDM interface assumes d∈{2,3}; [F2] silently drops that restriction. Add d∈{2,3} or cite a dimension-general definition.",
      "context_sha256": "87b9bb247d2641cc006caeb06bf59713c7ceb0a6c642a83169b558f886b09e7d",
      "item_sha256": "6e6bb3efc1a17c1188fb93dc4dfe97e90e6be6e56511ff59085e7261489785b2",
      "at": "2026-10-18T03:20:37.923Z"
    },
    {
      "id": "lem-na-rt0-p0-kernel-is-divergencefree",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 misattributes countable choice to the zero-normal-trace/Sobolev interfaces; the supplied H₀(div) definition has no such assumption. Countable choice comes from the explicit hypothesis and mesh conventions.",
      "context_sha256": "a8ad1adbdf4f355f50ad241e2436d99099583b5d1ed101ff9fcb3aab50af896a",
      "item_sha256": "af405999de0adf4279d0a88cdcc28802e6ee449b1a406add586c2cc37d6321c9",
      "at": "2026-10-18T03:20:43.072Z"
    },
    {
      "id": "thm-na-rt0-bounded-commuting-projection",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits hypotheses required by the cited RT/P0 lift: d∈{2,3} and D bounded, connected, and polyhedral Lipschitz. Thus the claimed right inverse and uniform bound are not licensed for every “shape-regular mesh” covered by the statement.",
      "context_sha256": "cfe7c244b4cc28b297e9c011653a8308c00fe15beddbb24fe8df7694eac7fa86",
      "item_sha256": "00cf4049e4abb25dad24288b56c56b9210402bcff7b9592c9999e5d816caaf86",
      "at": "2026-10-18T03:20:50.462Z"
    },
    {
      "id": "thm-na-rt0-p0-darcy-error-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.1 says the bounds give M_a=κ_min⁻¹ and M_b=1, but the supplied Galerkin theorem defines them as exact operator norms; the Darcy facts establish only upper bounds. Thus step 2.1’s application is unlicensed as written.",
      "context_sha256": "5da3d81f05b8b0e13be42b6523cd99b6213c37144e60939fad32b67e3832b2ae",
      "item_sha256": "50298caa8b49cfd8dc7efde7e634e03c288b8e31643eabc14a54b859f9c9c484",
      "at": "2026-10-18T03:21:12.293Z"
    }
  ]
