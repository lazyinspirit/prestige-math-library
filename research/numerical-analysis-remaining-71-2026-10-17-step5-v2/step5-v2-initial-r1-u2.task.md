# Step 5 adjudicate: initial, round 1, unit 2

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-batch-2-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/numerical-analysis-remaining-71-2026-10-17-step5-v2/step5-v2-initial-r1-u2.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"numerical-analysis-remaining-71-2026-10-17",phase:"initial",round:1,unit:"2",input_sha256:"047cec63eb41f7c596fd501e01ff1260863c988f59685b18317656e6f709d27e",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run numerical-analysis-remaining-71-2026-10-17 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 2:alg-augmented-rbf-finite-difference-weights, 3:lem-separated-sites-matern-gram-bound, 4:cor-matern-mesh-ratio-conditioning-bound, 4:lem-schwartz-dense-in-fourier-bessel-potential-space.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "alg-augmented-rbf-finite-difference-weights",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The `inadmissible-input` branch cannot be executed as specified: it must decide global conditional positive definiteness and section differentiability for an arbitrary kernel, but no finite representation, certificate, or oracle is given. Exact real arithmetic does not provide th",
      "context_sha256": "572029c3afd1840bdcb12a56d2d8609aab3f8dd6ef06ecc176f1ad664e51a0b9",
      "item_sha256": "3e67ace91ca52f71828f431d8487776f80e4b5e9d99d9ba7c8d8a390c5ad502b",
      "at": "2026-10-18T03:06:42.062Z"
    },
    {
      "id": "lem-separated-sites-matern-gram-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The title promises an “explicit” lower bound, but the statement and proof establish only an unspecified c(d,ν,a). The bump and T are chosen existentially, so the title overclaims.",
      "context_sha256": "40a0ea8b2b0b050ddd2115fc5d65a167990cd78c3e9e73698236f5a8909a4ab1",
      "item_sha256": "e07072f34e8fba5151872aa077ca5f6e277463b66516c2fb597b1122d8ec77bf",
      "at": "2026-10-18T03:06:49.931Z"
    },
    {
      "id": "cor-matern-mesh-ratio-conditioning-bound",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "The cited ball-measure and linear-change-of-variables results require ACω. A1 can supply it only as an additional assumption, but the Statement omits it; the proof establishes the bound conditionally, not under the stated hypotheses.",
      "context_sha256": "b3e302fd9a678face1fec4313cb0de18f225b28fd0a67b787733774923f6b3e8",
      "item_sha256": "d8ce74bb04c035a3ad9316ae7072b7ac6b472974d5b4f4eb445cd043a495265a",
      "at": "2026-10-18T03:07:09.537Z"
    },
    {
      "id": "lem-schwartz-dense-in-fourier-bessel-potential-space",
      "model": "gpt-6-luna",
      "keep": false,
      "reason": "A1 says smoothing and Gaussian inversion are choice-free, but the proof invokes F2, F6 and F7, whose interfaces assume countable choice. Full AC makes the proof valid, but A1's foundational claim is false.",
      "context_sha256": "feb6159510145f5baba577e299b749c0106d0e112e2e0e2e7d06cf90f432a884",
      "item_sha256": "cd9711f508063577ccf3db9e4f43e1847658c63282d0c02e8e2991daf2206ad0",
      "at": "2026-10-18T03:07:03.259Z"
    }
  ]
