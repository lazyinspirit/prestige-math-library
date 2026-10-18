# Step 5 adjudicate: initial, round 1, unit 51

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-51-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u51.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"51",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-crouzeix-raviart-fractional-sobolev-regularity, 1:lem-crouzeix-raviart-simplex-traces-and-green-identity, 2:lem-crouzeix-raviart-face-jump-estimate, 3:lem-crouzeix-raviart-conforming-companion, 3:thm-crouzeix-raviart-discrete-well-posedness, 5:thm-crouzeix-raviart-energy-error-estimate, 6:thm-crouzeix-raviart-l2-error-estimate.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-crouzeix-raviart-fractional-sobolev-regularity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "At r=1, the earlier norm rule counts each mixed second derivative twice via the ordered sum over j,k. The cited W^{2,2} interface counts each multi-index derivative once, so this endpoint norm is not the asserted ordinary W^{2,2} norm when d≥2.",
      "context_sha256": "d8dd98bfb0de44f5fc0703c8045ee42c1d76f24b2a966307328597ae3c4f6e97",
      "item_sha256": "f0c9593d5ed641d09960aff97f8aba62d865869057bfb9b5a40fb5cc0f4ef2e0",
      "at": "2026-10-18T03:26:44.165Z"
    },
    {
      "id": "lem-crouzeix-raviart-simplex-traces-and-green-identity",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "[F2] overstates its cited simplex-density result: `lem-smooth-density-on-reference-simplex` assumes d≥2, but this item allows d=1 and uses that density in Steps 1.3 and 2.2. The proof therefore does not cover all allowed simplices.",
      "context_sha256": "0c23023ca661db1d24b12134b5897b893ddd5bae9aeb3550208df07d54bde670",
      "item_sha256": "3ba66ffd867b8a0b47737b8b27713c74f95c68a70a9c389e5c6f7e91131c6632",
      "at": "2026-10-18T03:27:37.888Z"
    },
    {
      "id": "lem-crouzeix-raviart-face-jump-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The statement omits a dimension restriction. In d=1, facets are points, so h_F=diam(F)=0 and h_F^{-1} is undefined; the claimed sum is not well-formed. Require d≥2 or use a positive cell-based facet scale.",
      "context_sha256": "c9ac7ae97a36e5a1171eab837432e748b0ffbb2282fc32bf28dc131a388581f7",
      "item_sha256": "4f18a97f1e55ff37f0d73d0033cbfefdfbef3502844eb4f647bf0deb1e7fa9aa",
      "at": "2026-10-18T03:26:31.614Z"
    },
    {
      "id": "lem-crouzeix-raviart-conforming-companion",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof does not exclude d=1. Then the interior link is S^0, which is disconnected, contrary to step 1.1; also shape regularity does not bound ratios of neighboring interval lengths, contrary to F1. Step 3.1 relies on that comparability.",
      "context_sha256": "24a1788a1dcdd053a4339853a76a472d41fcec44b985486560db3aac87200d74",
      "item_sha256": "61284703961731c65e4872096892491d3cb90912d0c19ceaddd48749c480f50f",
      "at": "2026-10-18T03:26:56.186Z"
    },
    {
      "id": "thm-crouzeix-raviart-discrete-well-posedness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The proof never restricts the Poisson spaces to real scalars. For complex H¹, the stated form is bilinear, not sesquilinear, and a(v,v) can be negative (take v=iw); the load is linear, not conjugate-linear. Thus the cited Lax–Milgram theorem does not apply.",
      "context_sha256": "c8fe75c9ce3a24fc0429fc1e835ee36781445188c3aaf812d6a4b1479b01c51b",
      "item_sha256": "fd7ca10a626d040ad0b9d4feda5e6f13b8f5d8499865a89c8cd27284216505ec",
      "at": "2026-10-18T03:26:55.453Z"
    },
    {
      "id": "thm-crouzeix-raviart-energy-error-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.4 omits the V_h={0} case: [F6] defines δ=0 there, while the displayed supremum over w_h≠0 is empty. A one-simplex mesh is allowed and has no interior CR degrees of freedom, so the asserted identity fails as written.",
      "context_sha256": "132aca8e37dcd60d163dc7d15bd322d9e9ae251e17b026898e1f3e2895549f79",
      "item_sha256": "94de9e25404fb8dbdd03c3fa458a2efc0c087257144521640df4abff03faac43",
      "at": "2026-10-18T03:27:08.116Z"
    },
    {
      "id": "thm-crouzeix-raviart-l2-error-estimate",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F5 asserts the energy bound has a constant depending only on d, shape regularity and r, but the supplied energy interface allows dependence on Ω. Steps 1.2 and 3.1 use that bound, so the claimed final constant’s dependencies are not established.",
      "context_sha256": "73c1eb3b36c10dba1c6b437fcc1d9bf958ae7e584555ac44c3e9b016eeb5b352",
      "item_sha256": "2df03ac4b5245b5b68b67cca7656c42ef0f629c2c8ae6ceb9f52ac9cea72bfad",
      "at": "2026-10-18T03:26:50.462Z"
    }
  ]
