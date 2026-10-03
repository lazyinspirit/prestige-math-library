# Step 7 adjudicate: initial, round 1, unit 2

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"2",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 1:lem-normalization-unchanged-under-finite-birational-curve-map, 1:lem-projection-formula-invertible-twist, 2:lem-blowup-local-on-base-scheme, 3:lem-blowup-plane-origin-incidence-equations, 3:lem-blowup-reduced-integral-under-domain-rees, 4:def-strict-transform-closed-subscheme, 5:cor-blowup-unique-up-to-unique-isomorphism, 5:lem-blowup-isomorphism-off-center.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-normalization-unchanged-under-finite-birational-curve-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 assumes birationality gives a bijection of components for reducible curves. F7 defines birationality only for integral schemes and does not license this inference; the required extension to reduced schemes is unstated.",
      "context_sha256": "80ac4ca30bf51290b6e8d91e9ee45fde9ea4dde26f5deb86613d9b1225355af8",
      "item_sha256": "b6106ebdfa118243269bfe2b1d98bcee7800c0f72190ca13601cd62684759598",
      "at": "2026-10-03T14:16:30.819Z"
    },
    {
      "id": "lem-projection-formula-invertible-twist",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F7 attributes coherence of finite locally free sheaves on locally Noetherian schemes to def-euler-characteristic-coherent-sheaf, but the supplied interface contains no such assertion. Step 3.1 relies on this unsupported restatement.",
      "context_sha256": "9d6907f600189fcfa15614c869cffefcc453d2ff43c178e26a6e6948c5634cfd",
      "item_sha256": "d34a27e6abd46690575a4b34c8637013987c3b455cc2e29be27ddb3578ed374f",
      "at": "2026-10-03T14:16:05.124Z"
    },
    {
      "id": "lem-blowup-local-on-base-scheme",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F2] inaccurately restates def-rees-algebra-ideal-sheaf for arbitrary quasi-coherent ideals; its supplied interface requires finite type. The later explicit extension of notation does not make that dependency restatement accurate.",
      "context_sha256": "a667a4f95f3790b98e35ce01b87229d2177b0147bd737c41a99f616a8f4f5381",
      "item_sha256": "92ed41fd35996d959c4ba300027bf6f5424c808cc4eac8622ea752e7a9c2a4d7",
      "at": "2026-10-03T14:15:57.176Z"
    },
    {
      "id": "lem-blowup-plane-origin-incidence-equations",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F4] inaccurately restates the dependency for arbitrary positive-degree f: the chart equation is f/u^{deg f}, not f/u. For example, f=v² makes f/u degree one, so it is not in the degree-zero chart ring and the stated quotient is undefined.",
      "context_sha256": "39071b07b2c0aa09d72704218cdf65f9b7eac1a8f55c018e03fa848bb44a8a4a",
      "item_sha256": "bd26fc2d017338f46d9207334b9d6eb5dea2a76b8270c453f33bd861f1d28f83",
      "at": "2026-10-03T14:15:54.026Z"
    },
    {
      "id": "lem-blowup-reduced-integral-under-domain-rees",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 inaccurately restates def-affine-scheme-spectrum as providing scheme identifications D(a)=Spec A_a and open immersions. Its supplied interface explicitly defines only the underlying topological spectrum, without constructing the structure sheaf.",
      "context_sha256": "58bf892b07b72ab3612e85ad755b601a24d450be4e7b94c93d719c19d5bc0b13",
      "item_sha256": "225dc80449aa701ca676927ef0cf35639e59696c7095e8c60aa600a549797fea",
      "at": "2026-10-03T14:16:19.253Z"
    },
    {
      "id": "def-strict-transform-closed-subscheme",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The closure lemma supplied assumes a Noetherian ambient scheme. The item invokes it under only local Noetherianity and later without Noetherian hypotheses, without establishing the required extension of that dependency.",
      "context_sha256": "ec3d2a825b33cff8ca138eadfa427ecc3cc8b5fa4beb3c761742a899c23dd26b",
      "item_sha256": "38fa1c4233f164b995afcfc1ba9093f38dd9e7feade7bc1fbb539ac453979b0b",
      "at": "2026-10-03T14:16:25.393Z"
    },
    {
      "id": "cor-blowup-unique-up-to-unique-isomorphism",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately attributes E=V(I O_Bl) to def-blowup-scheme-along-ideal, whose interface explicitly says E is introduced separately and assumes no property of E. That identification is supplied by [F2], so the dependency restatement must be corrected.",
      "context_sha256": "7bd4f2e6def9e522d32ea26972f1d8b7489466b93c147013d1f1039cf070b942",
      "item_sha256": "8971e83c6a9aed0d3558283291c76733b245a123a183a3b647cd04120710aeb0",
      "at": "2026-10-03T14:15:27.851Z"
    },
    {
      "id": "lem-blowup-isomorphism-off-center",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 falsely identifies the chart overlap with D(f_i f_j). For the blowup of (x,y) in k[x,y], the overlap is Spec k[x,u,u^{-1}], y=xu, and contains points over the origin. Only its restriction over D(xy) is isomorphic to D(xy).",
      "context_sha256": "bd5f96ad5a2be36808fb8a29cc16f8fce19c111c85c95bec746380ddeb65e72f",
      "item_sha256": "382b9da9a3272868a2b36432b8a93324991e8b5c10545f19b487208fe03cf710",
      "at": "2026-10-03T14:15:47.739Z"
    }
  ]
