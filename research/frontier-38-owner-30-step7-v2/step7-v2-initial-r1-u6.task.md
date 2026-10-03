# Step 7 adjudicate: initial, round 1, unit 6

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u6.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-38-owner-30",phase:"initial",round:1,unit:"6",input_sha256:"04631c851c21cc7346bc450d030f784cd29d0320411265cce0e01b96cd5fa59e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-38-owner-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-sphere-finite-graph-charts-and-surface-density, 1:def-fourier-restriction-and-adjoint-extension-operators, 1:lem-smooth-euclidean-hypersurface-graph-and-localization, 2:lem-stationary-phase-decay-for-spherical-surface-measure, 2:cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise, 3:thm-knapp-necessary-condition-for-spherical-ltwo-restriction, 4:cex-knapp-rules-out-extension-below-the-tomas-exponent, 4:ex-knapp-cap-and-tube-volume-calculation.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-sphere-finite-graph-charts-and-surface-density",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "[F3] inaccurately restates thm-algebra-of-derivatives: its interface gives only first-derivative rules for one-variable sums/products/quotients, not smooth composition or square-root smoothness used in steps 1.1, 1.3 and 2.2.",
      "context_sha256": "326aea0cffb6d8fbafa8b0b0512e6dd460c62c2b3f40d6bb6536d665e491d0de",
      "item_sha256": "a223433d43a68400b4c996cfaaa5fec480ca4036052d2ef8db1f4094c06ebaaa",
      "at": "2026-10-03T14:12:55.270Z"
    },
    {
      "id": "def-fourier-restriction-and-adjoint-extension-operators",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The L² bound is asserted for every g∈L¹(σ), although g need not belong to L²(σ); its L² norm is then undefined under the supplied interface, and cited Hölder does not apply. On S¹, g(e^{iθ})=|θ|^(-3/4) near zero lies in L¹ but not L².",
      "context_sha256": "6625a2dfd7cc3917d5e4895a628ab6def71df8278dc5384a7ee6fbdcfd890e4f",
      "item_sha256": "bda27d18e8bf67d23086a598fe2acfc08a536402b90a2b7d5dbd823c026c5274",
      "at": "2026-10-03T14:13:39.795Z"
    },
    {
      "id": "lem-smooth-euclidean-hypersurface-graph-and-localization",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately attributes a product rule to thm-algebra-of-total-derivatives. Its supplied interface establishes only sums and constant scalar multiples, whereas step 1.1 explicitly invokes repeated product rules under this citation.",
      "context_sha256": "860f1246133433e40e422cbfae4d108bfba962e3404b444aa47a97bb7b40d130",
      "item_sha256": "22cd5bdfcd89897458c8a4cd7a205414c6fa2977714fee6c50e283c289efd6ef",
      "at": "2026-10-03T14:13:19.464Z"
    },
    {
      "id": "lem-stationary-phase-decay-for-spherical-surface-measure",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 invokes stationary phase for a phase defined only on the unit ball. The supplied dependency requires a globally smooth phase on R^d with exactly one stationary point. No suitable extension or local version is established; asserting its proof applies locally does not lice",
      "context_sha256": "f452cdc72b0d4358755ee354e15c74b6631245402cbd7a2e8a9163d9560a59ab",
      "item_sha256": "959dc12425d51ec31f2547fcca71dda2099b6ad0aef55f5093d6825264a91a8b",
      "at": "2026-10-03T14:13:38.892Z"
    },
    {
      "id": "cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 3.1 asserts a bounded extension R:L^p→L^2(σ) without assuming a restriction estimate. The dependency defines R only when such an extension exists; Hausdorff–Young does not establish its existence for every 1<p<2.",
      "context_sha256": "e48c3cf682e5a0963f3c476550323c9558b34be0f0b557b42429ebef40abb24b",
      "item_sha256": "826a6e184d402b77c781e6f79b4646d648a983cf0019d7b2d8ad3610e860fa44",
      "at": "2026-10-03T14:14:02.923Z"
    },
    {
      "id": "thm-knapp-necessary-condition-for-spherical-ltwo-restriction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 is not licensed by its dependency: the concentration lemma supplies only an unspecified positive tube constant. It does not guarantee containment of the box with c_n=1/(100√(n−1)); no local phase estimate establishes the claimed bound.",
      "context_sha256": "888a0f97c7083274b31b3772eaaaf5a2fb43965327eb0c25287e5fec9ad9ea65",
      "item_sha256": "00a824f803e3b8c499d2f93eb7fdc81f8bed1c01de496a6a1c29a07dc1fc8ae4",
      "at": "2026-10-03T14:13:39.334Z"
    },
    {
      "id": "cex-knapp-rules-out-extension-below-the-tomas-exponent",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 1.1 is unsupported: the concentration lemma supplies only an unspecified positive tube constant. It does not ensure that the box with half-width constant 1/(100√(n−1)) lies inside its tube; no independent concentration bound is proved.",
      "context_sha256": "6f21fdffab1cd059bbfb9487330f8ff79bd47e2835650416d891830f62becc5e",
      "item_sha256": "2cde9683a15fe47cf27fe2df3be6e92178ce26f30e7dc4ab30a8e2f35914643a",
      "at": "2026-10-03T14:13:56.502Z"
    },
    {
      "id": "ex-knapp-cap-and-tube-volume-calculation",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 strengthens its dependency without justification: the lemma supplies an unspecified tube constant c_n, but no bound c√(n−1)≤c_n is established. Thus it does not license concentration on the stated box Tδ for every allowed c.",
      "context_sha256": "901c89bf43aefe11f958ae03c347a35f5f8c08ddf7c36828cd95ecee2c6e9d8e",
      "item_sha256": "e94cf4b7d66fc74aa121bb3cd8ed3558fd9615e0f3e1e7fd777958102eeee1dc",
      "at": "2026-10-03T14:13:30.310Z"
    }
  ]
