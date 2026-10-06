# Step 7 adjudicate: initial, round 1, unit 27

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-39-analysis-30-step7-v2/step7-v2-initial-r1-u27.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-39-analysis-30",phase:"initial",round:1,unit:"27",input_sha256:"9338524b8f90ef76ff4d0d3c41b2d942e870edbc6da3d7062fa8aeac770c3e1f",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-39-analysis-30 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:lem-local-compact-subgroups-of-hausdorff-groups-are-closed, 0:lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca, 14:lem-lca-transform-range-is-dense-in-ltwo-of-the-dual, 21:ex-annihilator-of-a-closed-subgroup-of-euclidean-space.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "lem-local-compact-subgroups-of-hausdorff-groups-are-closed",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 falsely asserts that N∩O is open for every neighbourhood N. With G=H=ℝ, y=0, O=(-2,2) and N=[-1,1], the intersection is not open. The supplied convention allows nonopen neighbourhoods; F4 must say merely 'a neighbourhood'.",
      "context_sha256": "43550e0ae643e7873ea5572df6a59af9c7d096af8353c4e0efb389050c966889",
      "item_sha256": "f259e6cb2a1771ec31b3c6944f81dd532a9ca18d66b343c30eca491a3a0df8e1",
      "at": "2026-10-06T02:37:07.168Z"
    },
    {
      "id": "lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F3 falsely claims every locally compact space has a compact neighbourhood basis. Let X=Q∪{p}, with topology consisting of the usual open subsets of Q and X. X is compact, hence locally compact, but no point of Q has a compact neighbourhood contained in Q.",
      "context_sha256": "a7d3edce0447052cd9004626c5566dd13e5da378895d1eb52f5e20b2e90ed184",
      "item_sha256": "022fe6170750f27424eb0b0c8d0def70824bb8549bfd2271741f6c71155a4de5",
      "at": "2026-10-06T02:37:14.885Z"
    },
    {
      "id": "lem-lca-transform-range-is-dense-in-ltwo-of-the-dual",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 4.1 uses compactness for a cover by ambient open sets without citing lem-compactness-of-a-subspace-is-ambient. The supplied def-compact-space explicitly forbids this use without that citation.",
      "context_sha256": "aceb571c37c402f30fe4cd02a5ff8c9fe5cc0ebb3d7fedd1d0b987d140e914d6",
      "item_sha256": "ee34328af9416237d22fb1c34a6a9e51f1b28aac7782e6a96bc147cdad3b7acb",
      "at": "2026-10-06T02:37:59.369Z"
    },
    {
      "id": "ex-annihilator-of-a-closed-subgroup-of-euclidean-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 misstates the standard-basis interface: the basis is e_0,...,e_{n-1}, and e_n is undefined. Thus the asserted line R e_n for k<n is ill-typed (already n=1,k=0); steps 1.1–1.2 also use incorrect coordinate ranges.",
      "context_sha256": "16f35ab137e571d393533882a171d241be56a2c9822c1341ee79110bf9dd39ca",
      "item_sha256": "cdd49e2e54b6b9e9ca9e9a5b2dc05f5dfb761dc8028f760c2786d18724e64c5a",
      "at": "2026-10-06T02:38:41.712Z"
    }
  ]
