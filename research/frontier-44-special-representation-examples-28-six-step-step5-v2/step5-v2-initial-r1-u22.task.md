# Step 5 adjudicate: initial, round 1, unit 22

- Read briefs/step5-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/initial-1.json.

- Read this batch's rejection-blind Step-4 review digest first: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-batch-22-step5-context.json. Its findings are evidence, not authority; verify relevant concerns against the current item files and the assigned judge tuples.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-44-special-representation-examples-28-six-step-step5-v2/step5-v2-initial-r1-u22.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-44-special-representation-examples-28-six-step",phase:"initial",round:1,unit:"22",input_sha256:"a3c0decd85fdbe71b25b7ccd7e6264df187be55612edc2bcfbd9729c1e231624",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step5-workflow.mjs review-contexts --run frontier-44-special-representation-examples-28-six-step --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-parabolic-hecke-module-and-antispherical-standard-basis, 0:def-singular-integral-category-o-block-and-stabilizer, 1:def-parabolic-category-o-for-a-standard-parabolic.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-parabolic-hecke-module-and-antispherical-standard-basis",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The title promises the antispherical standard basis, but the Definition never defines its elements or establishes a basis; the Remarks explicitly defer this content to a separate lemma. This violates the library's title-scope convention.",
      "context_sha256": "1f8936d8943e8f69949a8fa58799e0389ff7381d8142d28f56d8e6905cd52b44",
      "item_sha256": "1c791ca597bff5274870d40c555ee508ecb1d8f7ea5e751cdac4d9f0b8d02abb",
      "at": "2026-10-11T15:10:46.087Z"
    },
    {
      "id": "def-singular-integral-category-o-block-and-stabilizer",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Part (3) identifies label sets for arbitrary semisimple Weyl groups with those of the cited parabolic Hecke modules. That dependency defines modules only for W=S_n; the item supplies no type-A hypothesis, so this restatement exceeds its interface.",
      "context_sha256": "52fe637048d45d5d74298c48a7b1f091aa699aa8d0afd7f71494ac15d6ba2308",
      "item_sha256": "be2dec3a2c943d7fcdd7616c10f59d6442861a790a2a67ced342e6a0affc05b7",
      "at": "2026-10-11T15:11:05.173Z"
    },
    {
      "id": "def-parabolic-category-o-for-a-standard-parabolic",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Clause (5) incorrectly requires ambient integrality. For g=sl₂ and J=∅, p=b and O^p=O, so L(λ) with λ(hα)=1/2 is a simple object but is not integral under the supplied definition. The necessity argument establishes only Levi integrality.",
      "context_sha256": "60ff5a7bbc4ca65e41b5c063127616ab0828a10b9a0092225a10b239d15c6eeb",
      "item_sha256": "999f667c3387761e75b8a3e14d1f59125d0f940073b50bd2fda5d285c251a052",
      "at": "2026-10-11T15:11:24.317Z"
    }
  ]
