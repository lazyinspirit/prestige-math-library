# Step 5 adjudicate: initial, round 1, unit 45

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-batch-45-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/physics-remaining-80-2026-10-17-step5-v2/step5-v2-initial-r1-u45.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"physics-remaining-80-2026-10-17",phase:"initial",round:1,unit:"45",input_sha256:"34da341a1db0c97e52a6a7416782ee6b88786a786457765413eee2fcfc4a3d68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run physics-remaining-80-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:lem-qsm-models-diagonal-occupation-trace, 3:post-qsm-models-statistics-and-preparation, 4:pthm-qsm-oscillator-spin-ensembles, 5:pthm-qsm-fermi-zero-temperature, 5:ex-qsm-oscillator-spin-ensembles, 6:ex-qsm-fermi-zero-temperature.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-qsm-models-diagonal-occupation-trace",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The β-envelope does not require J to be an open interval, unlike [F3]. With J={1}, ε_j=log j+4loglog j (j≥3), and μ=0, the envelope is summable at β=1 but Ξ diverges for β<1; the claimed derivative need not exist.",
      "context_sha256": "54b36fc5d8493b1a9b7cc775ae381db9c86ffba90b3cc1e184fb9d0fdb8cd0f0",
      "item_sha256": "bbc77df52edf4e75ae5e678511e939fe348f52db27ac0dc5493b615d1df37fa2",
      "at": "2026-10-17T08:07:55.006Z"
    },
    {
      "id": "post-qsm-models-statistics-and-preparation",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Reject: the grand-canonical “equilibrium” claim omits strong commutation of H and N; otherwise e^{-β(H−μN)} need not be stationary under H. Tong assumes N conserved ([source](https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf)); add this or qualify the state.",
      "context_sha256": "bbfaf6ec8e510eca3209e6202ee671865428d7611fd08b76e186e978ee003bc6",
      "item_sha256": "c5948d1876b8c7c5389ddac0c5575ae389143bffe717b5982d33ee29e193e115",
      "at": "2026-10-17T08:08:21.123Z"
    },
    {
      "id": "pthm-qsm-oscillator-spin-ensembles",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 overstates the supplied preparation postulate: it adopts Gibbs weights only for a declared QSM model/sector. Neither the oscillator nor spin is declared in that framework, so the Gibbs weights used in both derivations are not licensed.",
      "context_sha256": "4af1dd3e586b5b17581b46153f485b0e6c0d79263d6a675f8d112f61f6e3f77a",
      "item_sha256": "744546d2068ee07181624293cb5da10d5388c2e4b4adabdb9932780b6ce40af9",
      "at": "2026-10-17T08:07:24.500Z"
    },
    {
      "id": "pthm-qsm-fermi-zero-temperature",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "Step 1.2 uses “β≥1” for a uniform tail bound, but β has units J⁻¹, so the comparison is undefined as written. The endpoint argument needs a fixed dimensional β₀>0 and the corresponding bound e^(−β₀α|k|²/2).",
      "context_sha256": "5d7c1883e327dc6bcd5094dc977ba8cef4b777ede500d49f2a52df44a449c09f",
      "item_sha256": "e5ff7a5f838eac5dda9fcd7a7b2925c6c05e0cd54bb3f3565add94c44707c408",
      "at": "2026-10-17T08:07:36.393Z"
    },
    {
      "id": "ex-qsm-oscillator-spin-ensembles",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The verification omits the theorem’s preparation-postulate premise and calls the conclusions consequences of the Hamiltonians alone. Hamiltonians fix the spectrum but do not by themselves license canonical Gibbs occupations.",
      "context_sha256": "f25832d36e272641f9af291e6038c5d9b2ac823575e8629c9c293e08bf88e29a",
      "item_sha256": "433700496f53617fbd47b417db99a36c21249fdeb994bb7e6ddbe9b8665c6351",
      "at": "2026-10-17T08:07:43.590Z"
    },
    {
      "id": "ex-qsm-fermi-zero-temperature",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The example specifies no unit convention or dimensions for its physical quantities. State, for example, that ρ is number/volume, k_F inverse length, E_F energy, and p energy/volume, and identify the units used for m and ℏ.",
      "context_sha256": "455b3184e0fa4618c1dc7da195b489986925ac80546acdc18388a9edf934ad63",
      "item_sha256": "dba342c55784e7452986eae64c5ec8f5de04c70613ae7940efc3ef4ed6556564",
      "at": "2026-10-17T08:07:20.640Z"
    }
  ]
