# Step 7 batch adjudicator

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

- **Proof repair quality:** Repairs must be mathematically sound and cite dependencies accurately. State important caveats when appropriate, and write concisely without compromising correctness or completeness. Do not repeat the same argument or use unnecessary filler. Add intermediate lemmas when needed to meet prerequisites.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the generated task fully. You are the Sol 6.1 high adjudicator for one batch in Step 7.1 or 7.5. The round-bound task defines the run, phase, round, rejected carriers, ownership, evidence paths, and result schema. Do not reconstruct these from historical tasks or receipts.
- Work supplier before consumer, in the task's increasing in-run dependency order. Handle every rejected tuple and group all tuples for one item together.
- Adjudicate and repair only assigned draft items in the frozen frontier at `research/frontier-40-geometry-braids-rep-27-step7-v2/frontier.json`. Published repairs have no Step 7 adjudication, rejudge, or item-gate obligation; record them for separate maintenance. Outside-frontier consumers also belong to maintenance, not Step 7 repair or gates.
- Judge mathematical validity directly. Inspect each rejected statement, proof, definition, actual prerequisite, contract, and page interface. Judges, sources, and earlier acceptances can be wrong. Never pretend to understand something you do not; escalate any uncertainty and any potentially defective published consumers to the owner. When uncertain, read complete relevant arguments in authoritative sources, check their hypotheses and reasoning, and state exactly what they establish. Never invent source reading, familiarity, confidence, or checks.
- Cover every assigned rejected tuple. Record confirmed fatal and nonfatal defects, false positives, and unresolved uncertainty with concrete mathematical evidence. Repair every confirmed defect, including nonfatal defects. Fatal classification controls only the convergence threshold; a sound item needs no cosmetic edit. Unresolved mathematics blocks closure.
- For a licensed repair, make the smallest logically sufficient change, preserve the content contract, Foundations boundary, and actual AC requirements, and never weaken a claim merely to pass a check. Run the focused checks named by the task; a material rewrite invalidates the prior `verification.judge` record.
- You may create and fully author new items to meet a genuine unsatisfied prerequisite of an assigned frontier repair. Identify the missing claim, consuming proof step, and why existing suppliers do not suffice; give exact hypotheses, dependencies, and source evidence. Check existing IDs, aliases, and active assignments before choosing a unique ID. Register the item in the index/registry, page, manifest, and contract through the task's integration path. For shared edits, use `tools/step7-shared-write-lock.mjs` acquire/reread/edit/check/release; do not hold the lock while researching or waiting. Include creation evidence. Such additions preserve author-origin and certification integrity, do not enlarge the frozen frontier, and do not enter its rejudgment or gate loops. Step 7.9 permits no additions.
- Propagate downstream work only when the original `## Statement` or `## Definition` changes, including lemma and corollary statements. Compare those sections directly; do not use a semantic classifier. Proof-only, citation, dependency, and metadata edits with unchanged statements do not propagate. New prerequisites count as new interfaces.
- For an interface change, inspect direct dependencies, references, and actual proof/page uses. Record exact affected clauses and paths; explain why unchanged consumers remain sound; propose only necessary minimal repairs. A candidate is not automatically defective. Continue one hop only if a necessary consumer repair changes that consumer's own Statement or Definition; never pre-expand through unchanged statements.
- Report discoveries outside your lane or the frozen frontier without editing their items. For potentially defective published consumers, give the owner/maintenance route the exact affected use and evidence; do not edit or adjudicate published items. Trace any changed published Statement or Definition to direct consumers.
- The engine routes frontier effects to three disjoint frontier-owner lanes. After frontier writers drain, separate maintenance uses three disjoint lanes for outside consumers. Maintenance reports bind exact snippets and `affected_use`, `invalidated_claim`, and `minimality` evidence; this accounting does not replace mathematical reasoning. Handle each supplier-interface event and outside consumer once, without Step 7 gate/context requeues. Every necessary maintenance Statement/Definition change propagates one more direct hop; frontier targets return to ordinary owner work. Finish frontier work and separate maintenance before certification.
- Run focused checks and report their actual results. Update only assigned files and evidence; use the task's integration path for shared ledgers. Keep mathematical findings and audit status in the canonical published-consumer ledger, operational history in run records, and preserve original round evidence.
- Return only the generated schema: `{run, phase, round, unit, input_sha256, decisions:[], reviews:[], created_items:[], downstream:[]}`. Copy identity and input hash exactly from the task.
- Include one `decisions` row per rejected tuple with `id`, `model`, `context_sha256`, `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`), `reason`, `uncertain:false`, `source_urls`, and `familiar`. A confirmed fatal also needs `defect_type` (`logic`, `dependency_citation`, or `other`) justified by the finding. Never guess a category for historical evidence.
- Include a `reviews` row for every assigned item: `id`, `disposition` (`repaired` or `unaffected`), current `itemHashGuard` as `post_sha256`, `review_context_sha256`, and the same evidence fields. An unchanged item guard requires `unaffected`; explain contract/page-only repairs and set `metadata_repair_only:true` when applicable. Immediately after each review, before editing another supplier, run `node tools/step7-workflow.mjs review-contexts --run RUN --items ID` and copy both hashes. Batch IDs reviewed on the same stable state if useful. Never refresh a review hash after supplier changes without examining their effects.
- If you author a prerequisite, include a `created_items` row with `id`, `kind`, `home_page`, `batch`, direct `consumers`, `reason`, `uncertain:false`, `source_urls`, and `familiar`. Every created item also needs a review; only a newly created item uses `authored` disposition.
- List affected item IDs in `downstream`, including every direct dependency/reference consumer after a Statement/Definition change, even if its use remains sound or it already has an assigned review. This is an examination inventory, not an edit list. Record each exact affected use and disposition in the report. For a consumer missing from the dependency/reference graph, include `downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}`. Route outside consumers to separate maintenance.
- Give authoritative source URLs actually consulted when unfamiliar; `familiar:false` requires those URLs. Unresolved uncertainty is a blocker, never a false-confidence statement. Empty assignments return empty arrays. Do not claim independent review of your own repair.
- Do not write judgments, stamps, central certificates, or round state; do not launch workers or another cycle. The engine collects evidence, completes frontier repair and separate maintenance, and certifies once all writers drain. A successful dispatch alone does not close unfinished work. Repeated pending work at an earlier assigned content state holds for operator resolution.
- Rejudgment and renewed frontier adjudication, owner repair, and certification repeat until unique confirmed fatal original-frontier items in the latest round are strictly below 5% of the immutable original scope. The threshold permits the final scoped gate; it never permits unresolved defects, uncertainty, or incomplete closure.


---

# This dispatch

run: frontier-40-geometry-braids-rep-27
role: alpha-adjudicate
label: step7-v2-initial-r1-u23
covers: 23
output: research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u23.json

# Step 7 adjudicate: initial, round 1, unit 23

- Read briefs/step7-adjudicator.md.

- Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/initial-1.json.

- Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/research/frontier-40-geometry-braids-rep-27-step7-v2/step7-v2-initial-r1-u23.json.

- Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

- SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

- You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

- Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

- Use logical validity as ground truth. Never pretend to understand something you do not; escalate any uncertainty and potentially defective published consumers to the owner. Consult authoritative sources when uncertain, check their hypotheses and reasoning, and check for errors in sources.

- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

- Repair confirmed defects fully. Only an actual ## Statement or ## Definition change triggers direct-consumer examination, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

- Return a decision for every exact rejected tuple; decisions use outcome confirmed_fatal, confirmed_nonfatal, or false_positive. Each confirmed_fatal decision requires defect_type: logic, dependency_citation, or other, based on the actual finding. Both confirmed fatal and confirmed nonfatal findings require completed repairs. Do not edit false-positive items.

- Return JSON {run:"frontier-40-geometry-braids-rep-27",phase:"initial",round:1,unit:"23",input_sha256:"2f03bb52479aaa390bb3dcd48c71478e0016d3408c93c2f9769a7db5ae31ba68",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

- Immediately after completing each mathematical review, before editing another supplier, run node tools/step7-workflow.mjs review-contexts --run frontier-40-geometry-braids-rep-27 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.

- The assigned tuples below are ordered by increasing in-run dependency level. Adjudicate and repair lower-level items before higher-level items within this batch; keep multiple tuples for the same item together.

- Assigned item order: 0:def-model-category-and-quillen-adjunction, 1:def-simplicial-set-homotopy-and-trivial-kan-fibration, 3:lem-contractible-cosimplicial-evaluation-computes-derived-colimit, 3:thm-dold-kan-equivalence-for-simplicial-modules, 4:def-morphism-and-fibre-products-of-algebraic-spaces, 5:lem-presentation-from-surjective-etale-map, 5:lem-variable-base-cotensor-corner-and-path-objects, 7:lem-quotient-map-etale-when-quotient-is-algebraic-space, 7:lem-replacement-invariant-derived-enriched-mapping-spaces.

- Include canonical defect-ledger and published-ledger proposed updates in your report as ledger_updates. The controller merges shared adjudication evidence; do not edit shared ledgers concurrently. No claims of source reading you did not perform.

- For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

- Empty assignments return empty arrays. For every changed Statement/Definition, put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

- Assigned input:
  [
    {
      "id": "def-model-category-and-quillen-adjunction",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Simplicial L is insufficient: const:Set→sSet ⊣ vertices is Quillen for W=isos,Cof=Fib=all, but Map(L1,Δ1)=Δ1 versus discrete {0,1}. Require an enriched adjunction ([Def.2.2](https://ddd.uab.cat/pub/prepub/2008/hdl_2072_9180/Pr790.pdf)).",
      "context_sha256": "1fb72eee77c9d67fdebc1e3cc53eee0f201cdc075752da53eae65809aeb91371",
      "item_sha256": "2b57bd62ac23ec2552d2fdc25d438cd1cc7a6c8e6c1da43342f10b62d1fabaf6",
      "at": "2026-10-05T20:02:06.401Z"
    },
    {
      "id": "def-simplicial-set-homotopy-and-trivial-kan-fibration",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The boundary characterization is reversed: ∂Δ[n] consists of simplices lying in proper-face images, not those missed by them. For n=1, both vertices belong to these images, whereas id_[1] is missed by them and lies outside the boundary.",
      "context_sha256": "a1e045a06097e93a75234da64b2527b8addc3dc66f5c440a181db81af0bf8f8b",
      "item_sha256": "f15e9fa07ce5cf3e97d071713a251962022814542355bf3f9c0f5791a4b6e3f5",
      "at": "2026-10-05T20:01:00.565Z"
    },
    {
      "id": "lem-contractible-cosimplicial-evaluation-computes-derived-colimit",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.2 falsely infers that unaugmented free chains are chain contractible. For the one-point simplicial set over R=Z, H_0=Z, so they cannot be chain contractible. F2 only gives a chain homotopy equivalence to the point's chains.",
      "context_sha256": "c3e2aa2fda8778ad577a843373ff07c4fed91f7025fd5a11a8460a0039e71aa1",
      "item_sha256": "de0b217fac0fa757794779711d6b2dae8db9b2dbe0d087443911935ae9709a47",
      "at": "2026-10-05T20:01:11.374Z"
    },
    {
      "id": "thm-dold-kan-equivalence-for-simplicial-modules",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 inaccurately restates the normalization dependency as asserting that N is exact. Its supplied interface contains no exactness assertion, yet step 3.1 explicitly invokes F2 for exactness.",
      "context_sha256": "24fc6697684904219fd16d395cf0ce029c618e09b7750b28ba984f261ef7e72a",
      "item_sha256": "b1dc407882d437eb2583dafe51517198f4c25e95fc7fb68dcbcc46465ebcdfb2",
      "at": "2026-10-05T20:01:31.723Z"
    },
    {
      "id": "def-morphism-and-fibre-products-of-algebraic-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "The final paragraph asserts that the diagonal Δ:F→F×_S F is an algebraic space. It is a morphism, not an object; the claim is ill-typed. Products are algebraic spaces, while Δ is a representable morphism between them.",
      "context_sha256": "62756c14a9bcfbb819c1caad48ac366b7ab548cd4b03f25ee0eb17328ceb2d46",
      "item_sha256": "c309f8aabf165a7f34b184dcab8e2baf380d41e48150552d716ee4ffe7632457",
      "at": "2026-10-05T20:01:49.547Z"
    },
    {
      "id": "lem-presentation-from-surjective-etale-map",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F4 and step 2.1 invoke preservation of presheaf monomorphisms, but the sheafification interface only promises preservation of finite limits of sheaves. This does not license sheafifying the monomorphism P_{U/R}→F, since P_{U/R} need not be a sheaf.",
      "context_sha256": "52b7f133876d1e6b343b26b41dd32a49413dddc201b19bf273dd47ef363f942c",
      "item_sha256": "c0aa954aeff2936ff94232e03cfb11e5803d8f1e204ef922f28061872cb1de77",
      "at": "2026-10-05T20:01:25.755Z"
    },
    {
      "id": "lem-variable-base-cotensor-corner-and-path-objects",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 attributes an exact normalization equivalence with an explicit inverse to its citations. Neither supplied dependency interface asserts this: the normalization/prism interface gives a chain homotopy equivalence N(M)→s(M), not an equivalence of categories.",
      "context_sha256": "01f04cb52255813d857f36aa82a2f99d9034013078b907996849fc02cba9f13b",
      "item_sha256": "8f9f6fac97c788219fdce2397ea24e41b2aae00edc2182eb0da18dd76eaa5310",
      "at": "2026-10-05T20:01:45.376Z"
    },
    {
      "id": "lem-quotient-map-etale-when-quotient-is-algebraic-space",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "F2 falsely states that unramifiedness is fppf-local on the source: the identity of Spec k is unramified, but after the fppf source cover A¹_k→Spec k the composite is not. The cited interfaces do not license this restatement.",
      "context_sha256": "0186ea13203573016c8c24012a39819c06a3d13acd89ddf9204fb753db6e974e",
      "item_sha256": "6fbcb493f75e1c65b5958d9c5eb35ac021e2eb6cfc4008b9df75bb227718c492",
      "at": "2026-10-05T20:01:50.107Z"
    },
    {
      "id": "lem-replacement-invariant-derived-enriched-mapping-spaces",
      "model": "gpt-6.1-sol",
      "keep": false,
      "reason": "Step 2.1 uses D→0 as the terminal fibration in every supplied model. In the slice of unital A-algebras over nonzero B, the terminal object is B→B, and 0→B is not an object. The claimed retraction lifting square is therefore ill-typed.",
      "context_sha256": "ad4548040e61c5e06efbe72b25149e8077df8a62de3637c81056880c8fe7c91f",
      "item_sha256": "97687ddeecef57751f8b4b19cb01ed6b88afd2bd91696cf4c7b32cea0f7a213a",
      "at": "2026-10-05T20:02:34.381Z"
    }
  ]


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
