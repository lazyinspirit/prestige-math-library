# Step 5 adjudicate: initial, round 1, unit 39

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-39-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u39.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"39",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:cex-pe12-linear-ritz-does-not-commute, 1:def-pe12-monotone-diffusion-flux, 1:lem-pe12-evolution-energy-chain-rule, 1:thm-pe12-aubin-lions-compactness, 1:ex-pe12-time-oscillations-without-derivative-control.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "cex-pe12-linear-ritz-does-not-commute",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F3 claims the cited Poincaré theorem gives constant 1, but its supplied interface gives only C(2). Step 1.1 uses that sharper bound to establish coercivity; prove it separately or use α=1/(1+C(2)^2).",
      "context_sha256": "6ac1e64dc392058eecb09a0f9044de252fb274995e1a1b3b908bc4fc9a39b110",
      "item_sha256": "ceecb88f304d22d9ac6f679b78ae439c7db07eea37d0fc80714c83df8d033067",
      "at": "2026-10-18T03:22:50.566Z"
    },
    {
      "id": "def-pe12-monotone-diffusion-flux",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Circular justification: this definition cites thm-pe12-backward-euler-galerkin-existence-energy, but that theorem explicitly assumes this definition’s hypotheses, so it cannot establish the definition’s well-definedness.",
      "context_sha256": "1be71167b7c1b139c9291281fda4c52bf41df6c122f62e68a2491e94515be9c1",
      "item_sha256": "41217be0ab31a99ad09ba030deb211b5dbb52cbf5f3d7bce6d4d1a909b414902",
      "at": "2026-10-18T03:22:11.857Z"
    },
    {
      "id": "lem-pe12-evolution-energy-chain-rule",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "F2 attributes commutation with the distributional derivative to the mollification lemma, whose supplied interface only gives translation and convolution convergence. Steps 1–3 rely on uε′→u′ without establishing that commutation.",
      "context_sha256": "489ca7823b2b84b6354b75cf8c08d5755c17ef78420697ff54d10efa75981407",
      "item_sha256": "e4329604e113ffc161036cd9062d80271a1cc1b33c17d26fae68ef5580826de4",
      "at": "2026-10-18T03:22:33.804Z"
    },
    {
      "id": "thm-pe12-aubin-lions-compactness",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The evolution-triple interface defines g=u' only for g∈L^{p'}, but the theorem permits q<p'. F2 drops that condition and applies the cited definition anyway, so the dependency does not license the derivative premise for all stated exponents.",
      "context_sha256": "d0db936e37f049bb93fc1b1ebe57d9409f08e20fc24cbe2ed5f51140155f5e81",
      "item_sha256": "cc3e3d15707b595cc0d416633cac0d755f57f3f6e453e9e32c5cab3bde689394",
      "at": "2026-10-18T03:23:32.043Z"
    },
    {
      "id": "ex-pe12-time-oscillations-without-derivative-control",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The dependency defines J:H→V*, but v∈V. Thus the stated derivative and F1’s action of Jv are ill-typed; they require J(iv) or an explicit definition of J∘i.",
      "context_sha256": "b49566a1a13c088a68a97c823d2c1ed804cc6c2980a691e1ef817379b54aa3bb",
      "item_sha256": "c8d130ed1a67166f412aca1a3849a476b2a4beaac88176e92bd8092368901647",
      "at": "2026-10-18T03:22:48.269Z"
    }
  ]
