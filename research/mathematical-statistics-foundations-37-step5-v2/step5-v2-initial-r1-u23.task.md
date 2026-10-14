# Step 5 adjudicate: initial, round 1, unit 23

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-batch-23-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/mathematical-statistics-foundations-37-step5-v2/step5-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"mathematical-statistics-foundations-37",phase:"initial",round:1,unit:"23",input_sha256:"d09cd87bf1a789ab3aae4c9439e049e9981c7df3bd49e414cef635da1d327e21",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run mathematical-statistics-foundations-37 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-boundary-of-convex-set-is-lebesgue-null, 2:lem-compact-uniform-lan-posterior-approximation, 2:thm-le-cam-third-lemma, 3:lem-bowl-shaped-loss-has-centered-lipschitz-minorants, 5:lem-finite-priors-approximate-gaussian-shift-bayes-risk, 6:thm-qmd-implies-lan-for-iid.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-boundary-of-convex-set-is-lebesgue-null",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 says the defined simplex is an affine image of an open standard simplex. The interface defines it using λᵢ ≥ 0, so it is the image of the closed standard simplex; for d=1 it is a closed segment, not an open interval.",
      "context_sha256": "c79d38968fb1990cdd9d81c67304c428e9d714556ff9af2d5e271a031078b8c2",
      "item_sha256": "1e59b89eabfba0bca4536ed199cd8ac997024e4cc8dee810584714d3482d259f",
      "at": "2026-10-14T11:53:34.714Z"
    },
    {
      "id": "lem-compact-uniform-lan-posterior-approximation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 misstates [thm-mean-one-likelihood-ratio-limit-implies-contiguity]: its interface gives contiguity, not uniform integrability. Step 1.1 needs UI of m(Δ_n), but the proof neither states nor derives that implication.",
      "context_sha256": "47b3f0b6260e2af3668b887b999f366f85275ffd18f01539c1f6d4155755a191",
      "item_sha256": "de4e3036190848931468731ec7d474d72a321f01a20b300eca5f65997b8a366e",
      "at": "2026-10-14T11:53:47.665Z"
    },
    {
      "id": "thm-le-cam-third-lemma",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F1] only concludes contiguity in the supplied interface; it does not conclude uniform integrability. Step 2.1 relies on that unsupported conclusion to transfer expectations, and gives no separate justification for it.",
      "context_sha256": "7846f8c4367d3299a738b748356252833c966b8e8c7f3706789f340fe0095f8d",
      "item_sha256": "480b529cdc46a6190e2ac25fba904e10d98c91ad7aa0683de87d7111340c2e04",
      "at": "2026-10-14T11:53:21.886Z"
    },
    {
      "id": "lem-bowl-shaped-loss-has-centered-lipschitz-minorants",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F4 overstates the supplied Gaussian definition: it gives a projection characterization and a realization, but no density or absolute continuity. Step 3.1 needs that missing fact to transfer Lebesgue-null boundaries to Gaussian-null sets.",
      "context_sha256": "1b390e5229d027fa8674865edd2eb2a447504cf7dee85345198d1d5e64b0fabc",
      "item_sha256": "58eaf4299c3f7c1556b2bf31836ecea1298f7d703c5cf93439c859c3f3461a16",
      "at": "2026-10-14T11:53:52.540Z"
    },
    {
      "id": "lem-finite-priors-approximate-gaussian-shift-bayes-risk",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits d≥1, but the supplied normal-law and Heine–Borel interfaces require it, as does [F9]. The proof applies these results in steps 1.1 and 3.1 without that hypothesis, so the item is unsupported as stated.",
      "context_sha256": "5964ea91c4727badebceec7acef2dbf0bac8a6dcd21fb3255e1e941ac5d5a978",
      "item_sha256": "161b362a1003d3d9f825ac358f8677ffbe312eecb7ef9b4743c0dc53dc7739ed",
      "at": "2026-10-14T11:53:41.252Z"
    },
    {
      "id": "thm-qmd-implies-lan-for-iid",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: d is not assumed ≥1, but the cited IID CLT requires d≥1 and [F3] omits that hypothesis. Since the library defines ℝ⁰, step 1.2 does not cover every case allowed by the statement.",
      "context_sha256": "eaeba48299b6685bd5d360dbeafca39debc5ac8a34e9f5f92561d3101e6dc28c",
      "item_sha256": "6e3696ae3cd1ee5893381cbd4d9bf6853722d70d5ec036348f60363ca98e547d",
      "at": "2026-10-14T11:53:59.472Z"
    }
  ]
